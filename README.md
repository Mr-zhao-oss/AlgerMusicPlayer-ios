# AlgerMusicPlayer iOS IPA 构建脚手架

把 **AlgerMusicPlayer 官方安卓 APK** 里已经打包好的 Web 资源（已注入云端音乐 API `http://mc.alger.fun/api`），用 **Capacitor** 包成 iOS 应用，在 **GitHub Actions 的 macOS 云主机**上编译出**未签名 IPA**，然后用 Sideloadly/AltStore 自签安装到 iPhone。

## 这是什么 / 不是什么

✅ **是**：复用作者做安卓 APK 的同一套 Capacitor 思路，加一个 iOS 平台目标，云端编译出 IPA。功能 = 安卓 APK 版（听歌、歌单、歌词、登录网易云都走作者的云端 API `mc.alger.fun`）。

❌ **不是**：不能恢复 Electron 桌面版独有功能（解锁付费歌曲 `@unblockneteasemusic/server`、下载到本地磁盘、桌面歌词、磁盘缓存）。这些依赖 Node.js 主进程，iOS/安卓都跑不了——**官方安卓 APK 同样没有这些功能**，本 IPA 和官方 APK 功能对齐。

## 目录结构

```
AlgerMusicPlayer_ios/
├── web/                      # 从官方 APK assets/public 提取的渲染层（含云端 API）
├── capacitor.config.json     # Capacitor 配置（appId com.algermusic.app，复用作者配置）
├── package.json              # Capacitor 7 + 官方插件依赖
├── scripts/
│   ├── patch-ios.sh          # 给 Info.plist 加 HTTP ATS 例外 + 后台音频 + 旋转
│   └── exportOptions.plist   # 备用导出配置
└── .github/workflows/build-ipa.yml  # macOS 云端编译 IPA
```

## 使用步骤

### 1. 推到 GitHub
把这个目录推到你自己的 GitHub 仓库（新建一个空仓库，或 fork AlgerMusicPlayer 后单独开分支）。

### 2. 触发 Actions
推送到 main/master 或打 `v*` tag 自动触发；也可在仓库 Actions 页点 "Run workflow" 手动触发。

### 3. 下载 IPA
Action 跑完后，在 Actions 运行页底部 Artifacts 下载 `AlgerMusicPlayer-ios-ipa`，解压得到 `AlgerMusicPlayer-ios.ipa`。

### 4. 自签安装到 iPhone（在 Windows 上）
1. 电脑装 [Sideloadly](https://sideloadly.io/) 或 AltServer/AltStore
2. iPhone 用数据线连电脑，信任电脑
3. Sideloadly 里选 IPA → 填你的 Apple ID（免费即可）→ 开始安装
4. iPhone 上：设置 → 通用 → VPN与设备管理 → 信任你的开发者证书

> ⚠️ 免费 Apple ID 自签的 App **7 天后失效**，到期重新用 Sideloadly 签一次即可。付费开发者账号可签 1 年。

## 功能预期

| 功能 | iOS IPA | 备注 |
|---|---|---|
| 在线听歌 / 歌单 / 歌词 | ✅ | 走云端 API `mc.alger.fun` |
| 登录网易云账号 | ✅ | |
| 播放历史 / 收藏 | ✅ | |
| 后台播放 / 锁屏控制 | ✅ | Info.plist 配了 UIBackgroundModes audio + 媒体会话插件 |
| 解锁灰色/付费歌曲 | ❌ | 依赖 Node.js 服务端，iOS/安卓都无法运行 |
| 下载到本地文件 | ❌ | 同上，官方安卓 APK 也没有 |
| 桌面歌词 / 全局快捷键 | ❌ | 桌面专属功能 |

## 技术要点

- **HTTP 明文 API**：`mc.alger.fun` 是 http（非 https），iOS 默认禁止。`scripts/patch-ios.sh` 给 Info.plist 加了 `NSAppTransportSecurity` 例外。
- **未签名 IPA**：云端用 `CODE_SIGNING_ALLOWED=NO` archive，再 zip 成 IPA，不依赖任何证书。本地用 Sideloadly 注入签名。
- **Capacitor 版本 7**：和作者官方 APK 一致（`SystemBars`/`background-runner` 是 7+ 特征）。

## 排错

- 若 `npm install` 失败：社区包 `@capacitor-community/safe-area`、`@jofr/capacitor-media-session` 版本可能变动，改 `package.json` 里对应版本号后重试。
- 若 `pod install` 失败：在 workflow 的 pod install 步骤前加 `gem install cocoapods`。
- 若 archive 失败：下载 `xcodebuild-failure-log` artifact 看完整日志。

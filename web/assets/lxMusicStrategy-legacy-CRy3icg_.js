;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './crossFetch-legacy-DC0otkpV.js'], function (exports, module) {
    'use strict';

    var CacheManager, useSettingsStore, getLxMusicRunner, initLxMusicRunner, crossFetch;
    return {
      setters: [module => {
        CacheManager = module.ei;
        useSettingsStore = module.cH;
        getLxMusicRunner = module.eK;
        initLxMusicRunner = module.d6;
      }, module => {
        crossFetch = module.c;
      }],
      execute: function () {
        const LX_SOURCE_NAMES = {
          kw: "kw",
          kg: "kg",
          tx: "tx",
          wy: "wy",
          mg: "mg",
          local: "local"
        };
        const QUALITY_TO_LX = {
          standard: "128k",
          higher: "320k",
          exhigh: "320k",
          lossless: "flac",
          hires: "flac24bit",
          jyeffect: "flac",
          sky: "flac",
          dolby: "flac",
          jymaster: "flac24bit"
        };
        const resolveAudioUrl = async url => {
          try {
            const isApiEndpoint = url.includes("/api/") || url.includes("?") && url.includes("type=url");
            if (!isApiEndpoint) {
              return url;
            }
            console.log("[LxMusicStrategy] 检测到 API 端点，尝试解析真实 URL:", url);
            const response = await crossFetch(url, {
              method: "HEAD",
              redirect: "manual"
              // 不自动跟随重定向
            });
            if (response.status >= 300 && response.status < 400) {
              const location = response.headers.get("Location");
              if (location) {
                console.log("[LxMusicStrategy] API 返回重定向 URL:", location);
                return location;
              }
            }
            const getResponse = await crossFetch(url, {
              redirect: "follow"
            });
            const contentType = getResponse.headers.get("Content-Type") || "";
            if (contentType.includes("audio/") || contentType.includes("application/octet-stream")) {
              console.log("[LxMusicStrategy] 解析到音频 URL:", getResponse.url);
              return getResponse.url;
            }
            if (contentType.includes("application/json") || contentType.includes("text/json")) {
              const json = await getResponse.json();
              console.log("[LxMusicStrategy] API 返回 JSON:", json);
              const audioUrl = json.url || json.data?.url || json.audio_url || json.link || json.src;
              if (audioUrl && typeof audioUrl === "string") {
                console.log("[LxMusicStrategy] 从 JSON 中提取音频 URL:", audioUrl);
                return audioUrl;
              }
            }
            console.warn("[LxMusicStrategy] 无法解析 API 端点，返回原始 URL");
            return url;
          } catch (error) {
            console.error("[LxMusicStrategy] URL 解析失败:", error);
            return url;
          }
        };
        const convertToLxMusicInfo = songResult => {
          const artistName = songResult.ar && songResult.ar.length > 0 ? songResult.ar.map(a => a.name).join("、") : songResult.artists && songResult.artists.length > 0 ? songResult.artists.map(a => a.name).join("、") : "";
          const albumName = songResult.al?.name || songResult.album?.name || "";
          const albumId = songResult.al?.id || songResult.album?.id || "";
          const duration = songResult.dt || songResult.duration || 0;
          const minutes = Math.floor(duration / 6e4);
          const seconds = Math.floor(duration % 6e4 / 1e3);
          const interval = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
          return {
            songmid: songResult.id,
            name: songResult.name,
            singer: artistName,
            album: albumName,
            albumId,
            source: "wy",
            interval,
            img: songResult.picUrl || songResult.al?.picUrl || ""
          };
        };
        const getBestMatchingSource = (availableSources, _songSource) => {
          const priority = ["wy", "kw", "mg", "kg", "tx"];
          for (const source of priority) {
            if (availableSources.includes(source)) {
              return source;
            }
          }
          return availableSources[0] || null;
        };
        class LxMusicStrategy {
          name = "lxMusic";
          priority = 0;
          // 最高优先级
          /**
           * 检查是否可以处理
           */
          canHandle(sources, settingsStore) {
            if (!sources.includes("lxMusic")) {
              return false;
            }
            const activeLxApiId = settingsStore?.setData?.activeLxMusicApiId;
            if (!activeLxApiId) {
              return false;
            }
            const lxMusicScripts = settingsStore?.setData?.lxMusicScripts || [];
            const activeScript = lxMusicScripts.find(script => script.id === activeLxApiId);
            return Boolean(activeScript && activeScript.script);
          }
          /**
           * 解析音乐 URL
           */
          async parse(id, data, quality, _sources) {
            if (await CacheManager.isInFailedCache(id, this.name)) {
              return null;
            }
            try {
              const settingsStore = useSettingsStore();
              const activeLxApiId = settingsStore.setData?.activeLxMusicApiId;
              if (!activeLxApiId) {
                console.log("[LxMusicStrategy] 未选择激活的落雪音源");
                return null;
              }
              const lxMusicScripts = settingsStore.setData?.lxMusicScripts || [];
              const activeScript = lxMusicScripts.find(script => script.id === activeLxApiId);
              if (!activeScript || !activeScript.script) {
                console.log("[LxMusicStrategy] 未找到激活的落雪音源脚本");
                return null;
              }
              console.log(`[LxMusicStrategy] 使用激活的音源: ${activeScript.name} (ID: ${activeScript.id})`);
              let runner = getLxMusicRunner();
              if (!runner || !runner.isInitialized()) {
                console.log("[LxMusicStrategy] 初始化落雪音源执行器...");
                runner = await initLxMusicRunner(activeScript.script);
              }
              const sources = runner.getSources();
              const availableSourceKeys = Object.keys(sources);
              if (availableSourceKeys.length === 0) {
                console.log("[LxMusicStrategy] 没有可用的落雪音源");
                CacheManager.addFailedCache(id, this.name);
                return null;
              }
              const bestSource = getBestMatchingSource(availableSourceKeys);
              if (!bestSource) {
                console.log("[LxMusicStrategy] 无法找到匹配的音源");
                CacheManager.addFailedCache(id, this.name);
                return null;
              }
              console.log(`[LxMusicStrategy] 使用音源: ${LX_SOURCE_NAMES[bestSource]} (${bestSource})`);
              const lxMusicInfo = convertToLxMusicInfo(data);
              const lxQuality = QUALITY_TO_LX[quality || "higher"] || "320k";
              const rawUrl = await runner.getMusicUrl(bestSource, lxMusicInfo, lxQuality);
              if (!rawUrl) {
                console.log("[LxMusicStrategy] 获取 URL 失败");
                CacheManager.addFailedCache(id, this.name);
                return null;
              }
              console.log("[LxMusicStrategy] 脚本返回 URL:", rawUrl.substring(0, 80) + "...");
              const resolvedUrl = await resolveAudioUrl(rawUrl);
              if (!resolvedUrl) {
                console.log("[LxMusicStrategy] URL 解析失败");
                CacheManager.addFailedCache(id, this.name);
                return null;
              }
              console.log("[LxMusicStrategy] 最终音频 URL:", resolvedUrl.substring(0, 80) + "...");
              return {
                data: {
                  code: 200,
                  message: "success",
                  data: {
                    url: resolvedUrl,
                    source: `lx-${bestSource}`,
                    quality: lxQuality
                  }
                }
              };
            } catch (error) {
              console.error("[LxMusicStrategy] 解析失败:", error);
              CacheManager.addFailedCache(id, this.name);
              return null;
            }
          }
        }
        exports("LxMusicStrategy", LxMusicStrategy);
      }
    };
  });
})();

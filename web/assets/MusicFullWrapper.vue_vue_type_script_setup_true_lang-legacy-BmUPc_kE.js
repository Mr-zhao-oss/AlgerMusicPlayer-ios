;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './index-legacy-BqM8rotH.js'], function (exports, module) {
    'use strict';

    var cB, cM, defineComponent, h, Scrollbar, useConfig, useTheme, layoutLight, useReactivated, useThemeClass, computed, ref, provide, createInjectionKey, onBeforeUnmount, openBlock, createElementBlock, createBaseVNode, createVNode, __unplugin_components_1, normalizeStyle, createCommentVNode, renderSlot, _export_sfc, useI18n, withCtx, toDisplayString, unref, __unplugin_components_3, watch, onMounted, Fragment, renderList, normalizeClass, withDirectives, vShow, vModelCheckbox, vModelText, vModelRadio, createTextVNode, vModelSelect, usePlayerStore, withModifiers, allTime, __unplugin_components_0, audioService, playMusic, nowTime, secondToMinute, nowIndex, nextTick, useSettingsStore, useArtist, createBlock, __unplugin_components_1$1, getImgUrl, __unplugin_components_2$1, artistList, textColors, lrcArray, setAudioTime, isMobile, adjustCorrectionTime, correctionTime, __unplugin_components_6, useDebounceFn, getTextColors, getHoverBackgroundColor, animateGradient, useLyricProgress, storeToRefs, onUnmounted, Teleport, Transition, safeAreaService, setDialogState, sound, showBottomToast, mergeProps, resolveDynamicComponent, useWindowSize;
    return {
      setters: [module => {
        cB = module.c;
        cM = module.g;
        defineComponent = module.d;
        h = module.h;
        Scrollbar = module.c5;
        useConfig = module.u;
        useTheme = module.U;
        layoutLight = module.eq;
        useReactivated = module.er;
        useThemeClass = module.Z;
        computed = module.z;
        ref = module.A;
        provide = module.p;
        createInjectionKey = module.D;
        onBeforeUnmount = module.bG;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        createVNode = module.ak;
        __unplugin_components_1 = module.br;
        normalizeStyle = module.ag;
        createCommentVNode = module.ah;
        renderSlot = module.bq;
        _export_sfc = module.ap;
        useI18n = module.a5;
        withCtx = module.as;
        toDisplayString = module.ac;
        unref = module.ad;
        __unplugin_components_3 = module.dg;
        watch = module.Y;
        onMounted = module.aq;
        Fragment = module.ae;
        renderList = module.af;
        normalizeClass = module.aa;
        withDirectives = module.P;
        vShow = module.a6;
        vModelCheckbox = module.es;
        vModelText = module.aj;
        vModelRadio = module.et;
        createTextVNode = module.b7;
        vModelSelect = module.eu;
        usePlayerStore = module.bb;
        withModifiers = module.a9;
        allTime = module.el;
        __unplugin_components_0 = module.d0;
        audioService = module.bm;
        playMusic = module.eg;
        nowTime = module.ek;
        secondToMinute = module.bo;
        nowIndex = module.ev;
        nextTick = module.a2;
        useSettingsStore = module.cH;
        useArtist = module.b1;
        createBlock = module.aY;
        __unplugin_components_1$1 = module.cf;
        getImgUrl = module.aQ;
        __unplugin_components_2$1 = module.bs;
        artistList = module.em;
        textColors = module.eo;
        lrcArray = module.ew;
        setAudioTime = module.ex;
        isMobile = module.aX;
        adjustCorrectionTime = module.ey;
        correctionTime = module.ez;
        __unplugin_components_6 = module.bC;
        useDebounceFn = module.db;
        getTextColors = module.eA;
        getHoverBackgroundColor = module.eB;
        animateGradient = module.eC;
        useLyricProgress = module.eD;
        storeToRefs = module.bF;
        onUnmounted = module.ar;
        Teleport = module.d4;
        Transition = module.T;
        safeAreaService = module.eE;
        setDialogState = module.eF;
        sound = module.eG;
        showBottomToast = module.eH;
        mergeProps = module.cj;
        resolveDynamicComponent = module.eI;
      }, module => {
        useWindowSize = module.d;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "@charset \"UTF-8\";\n.cover-3d-container[data-v-3965fcc0]{\n  height: 100%;\n  width: 100%;\n}\n\n/* 3D视差效果样式 */\n.cover-wrapper[data-v-3965fcc0]{\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.75rem;\n  transform-style: preserve-3d;\n  will-change: transform;\n  backface-visibility: hidden;\n  transform: translateZ(0); /* 强制硬件加速 */\n}\n.cover-image[data-v-3965fcc0]{\n  height: 100%;\n  width: 100%;\n  border-radius: inherit;\n  transform: translateZ(0); /* 强制硬件加速 */\n}\n.cover-shine[data-v-3965fcc0]{\n  pointer-events: none;\n  position: absolute;\n  inset: 0px;\n  border-radius: 0.75rem;\n  mix-blend-mode: overlay;\n  z-index: 1;\n  will-change: background, opacity;\n  backface-visibility: hidden;\n}\n\n/* 为封面容器添加阴影效果 */\n.cover-3d-container:hover .cover-wrapper[data-v-3965fcc0] {\n  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.25));\n}\n@keyframes spin-3965fcc0 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.loading-overlay[data-v-3965fcc0]{\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n}\n.loading-icon[data-v-3965fcc0] {\n  font-size: 48px;\n  color: white;\n  animation: spin-3965fcc0 1s linear infinite;\n}\n\n/* 移动端禁用3D效果 */\n@media (max-width: 768px) {\n.cover-wrapper[data-v-3965fcc0] {\n    transform: none !important;\n}\n.cover-shine[data-v-3965fcc0] {\n    display: none;\n}\n}.lyric-correction[data-v-e8fa0e09] {\n\n    pointer-events: none;\n\n    position: absolute;\n\n    right: 0px;\n\n    bottom: 1rem;\n\n    z-index: 50;\n\n    display: flex;\n\n    -webkit-user-select: none;\n\n       -moz-user-select: none;\n\n            user-select: none;\n\n    flex-direction: column;\n\n    align-items: center\n}\n.lyric-correction[data-v-e8fa0e09] > :not([hidden]) ~ :not([hidden]) {\n\n    --tw-space-y-reverse: 0;\n\n    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n\n    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))\n}\n.lyric-correction[data-v-e8fa0e09] {\n\n    opacity: 0;\n\n    transition-property: opacity;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 200ms\n}\n.lyric-correction-btn[data-v-e8fa0e09] {\n\n    display: flex;\n\n    height: 1.75rem;\n\n    width: 1.75rem;\n\n    cursor: pointer;\n\n    align-items: center;\n\n    justify-content: center;\n\n    border-radius: 0.5rem;\n\n    border-width: 1px;\n\n    border-color: rgb(255 255 255 / 0.2);\n\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n\n    --tw-bg-opacity: 0.4;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\n    --tw-backdrop-blur: blur(40px);\n\n    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n\n    transition-property: all;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 150ms\n}\n.lyric-correction-btn[data-v-e8fa0e09]:hover {\n\n    border-color: rgb(74 222 128 / 0.6);\n\n    background-color: rgb(34 197 94 / 0.8);\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n.lyric-correction-btn[data-v-e8fa0e09]:active {\n\n    --tw-scale-x: .95;\n\n    --tw-scale-y: .95;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n.lyric-correction-btn[data-v-e8fa0e09]:is(.dark *) {\n\n    border-color: rgb(64 64 64 / 0.4);\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(38 38 38 / var(--tw-bg-opacity, 1));\n\n    --tw-text-opacity: 1;\n\n    color: rgb(229 231 235 / var(--tw-text-opacity, 1))\n}\n.lyric-correction-btn[data-v-e8fa0e09]:hover:is(.dark *) {\n\n    border-color: rgb(74 222 128 / 0.6);\n\n    background-color: rgb(34 197 94 / 0.8);\n\n    --tw-bg-opacity: 0.4;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n.mobile .lyric-correction[data-v-e8fa0e09] {\n\n    opacity: 1\n}\n/* 设置项 */\n.setting-item[data-v-3ed5d4e3] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  transition: all 0.2s;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.setting-item[data-v-3ed5d4e3]:hover {\n  background: rgba(255, 255, 255, 0.06);\n}\n\n/* 切换开关 */\n.toggle-switch[data-v-3ed5d4e3] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  width: 44px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.toggle-switch[data-v-3ed5d4e3]::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  left: 2px;\n  top: 2px;\n  transition: all 0.3s;\n}\n.toggle-switch[data-v-3ed5d4e3]:checked {\n  background: #10b981;\n}\n.toggle-switch[data-v-3ed5d4e3]:checked::before {\n  left: 22px;\n}\n\n/* 滑块组 */\n.slider-group[data-v-3ed5d4e3] {\n  padding: 10px 12px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n}\n.slider-label[data-v-3ed5d4e3] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.8;\n  margin-bottom: 8px;\n}\n.slider-emerald[data-v-3ed5d4e3] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  outline: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.slider-emerald[data-v-3ed5d4e3]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 16px;\n  height: 16px;\n  background: #10b981;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);\n}\n.slider-emerald[data-v-3ed5d4e3]::-moz-range-thumb {\n  width: 16px;\n  height: 16px;\n  background: #10b981;\n  border-radius: 50%;\n  cursor: pointer;\n  border: none;\n  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);\n}\n.slider-marks[data-v-3ed5d4e3] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 8px;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.5;\n}\n\n/* 单选框组 */\n.radio-group[data-v-3ed5d4e3] {\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n}\n.radio-label[data-v-3ed5d4e3] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.7;\n  margin-bottom: 12px;\n}\n.radio-item[data-v-3ed5d4e3] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.radio-item[data-v-3ed5d4e3]:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n/* 紧凑版单选项（用于横向布局） */\n.radio-item-compact[data-v-3ed5d4e3] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.radio-item-compact[data-v-3ed5d4e3]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n.radio-input[data-v-3ed5d4e3] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  width: 18px;\n  height: 18px;\n  border: 2px solid var(--text-color-primary);\n  opacity: 0.4;\n  border-radius: 50%;\n  margin-right: 12px;\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.radio-input[data-v-3ed5d4e3]:checked {\n  border-color: #10b981;\n  opacity: 1;\n}\n.radio-input[data-v-3ed5d4e3]:checked::before {\n  content: '';\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #10b981;\n  border-radius: 50%;\n  left: 2px;\n  top: 2px;\n}\n\n/* 颜色选择器 */\n.color-picker-group[data-v-3ed5d4e3] {\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n}\n.color-picker-label[data-v-3ed5d4e3] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.7;\n  margin-bottom: 12px;\n}\n.color-picker[data-v-3ed5d4e3] {\n  width: 100%;\n  height: 48px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n}\n.color-picker[data-v-3ed5d4e3]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.color-picker[data-v-3ed5d4e3]::-webkit-color-swatch {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n}\n\n/* 小尺寸颜色选择器（用于渐变） */\n.color-picker-small[data-v-3ed5d4e3] {\n  width: 56px;\n  height: 56px;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  background: transparent;\n}\n.color-picker-small[data-v-3ed5d4e3]::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.color-picker-small[data-v-3ed5d4e3]::-webkit-color-swatch {\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 12px;\n}\n\n/* 下拉选择 */\n.select-group[data-v-3ed5d4e3] {\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n}\n.select-label[data-v-3ed5d4e3] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0.7;\n  margin-bottom: 12px;\n}\n.select-input[data-v-3ed5d4e3] {\n  width: 100%;\n  padding: 10px 12px;\n  background: rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n}\n.select-input[data-v-3ed5d4e3]:focus {\n  border-color: #10b981;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);\n}\n\n/* 滚动条 */\n.scrollbar-thin[data-v-3ed5d4e3]::-webkit-scrollbar {\n  width: 6px;\n}\n.scrollbar-thin[data-v-3ed5d4e3]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.scrollbar-thin[data-v-3ed5d4e3]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n}\n.scrollbar-thin[data-v-3ed5d4e3]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n.play-bar[data-v-62d97a6c]{\n  width: 100%;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n  /* 默认变量 */\n  --text-on-fill: #ffffff;\n  --high-contrast-color: #ffffff;\n}\n.play-bar.dark-theme[data-v-62d97a6c] {\n  --text-color: #333333;\n  --muted-color: rgba(0, 0, 0, 0.6);\n  --track-color: rgba(0, 0, 0, 0.2);\n  --track-color-hover: rgba(0, 0, 0, 0.4);\n  --fill-color: #1ed760;\n  --fill-color-alt: #1ed760;\n  --fill-color-transparent: rgba(30, 215, 96, 0.25);\n  --fill-color-light: rgba(30, 215, 96, 0.5);\n  --button-bg: rgba(0, 0, 0, 0.1);\n  --button-hover: rgba(0, 0, 0, 0.2);\n}\n.play-bar[data-v-62d97a6c]:not(.dark-theme) {\n  --text-color: #f1f1f1;\n  --muted-color: rgba(255, 255, 255, 0.6);\n  --track-color: rgba(255, 255, 255, 0.1);\n  --track-color-hover: rgba(255, 255, 255, 0.2);\n  --fill-color: #73e49a;\n  --fill-color-alt: #73e49a;\n  --fill-color-transparent: rgba(115, 228, 154, 0.25);\n  --fill-color-light: rgba(115, 228, 154, 0.5);\n  --button-bg: rgba(255, 255, 255, 0.05);\n  --button-hover: rgba(255, 255, 255, 0.1);\n}\n.play-bar[data-v-62d97a6c] {\n  /* 极亮主题色适配 */\n}\n.play-bar.light-theme-color .progress-fill[data-v-62d97a6c] {\n  box-shadow: 0 0 8px var(--fill-color-transparent), inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\n.play-bar.light-theme-color .control-btn.play-btn[data-v-62d97a6c] {\n  box-shadow: 0 3px 8px var(--fill-color-transparent), 0 1px 2px rgba(0, 0, 0, 0.3);\n  color: var(--text-on-fill);\n}\n.play-bar.light-theme-color .volume-control .iconfont[data-v-62d97a6c]:hover {\n  color: var(--fill-color-alt);\n}\n.play-bar[data-v-62d97a6c] {\n  /* 极暗主题色适配 */\n}\n.play-bar.dark-theme-color .progress-fill[data-v-62d97a6c] {\n  box-shadow: 0 0 10px var(--fill-color-transparent), inset 0 0 0 1px rgba(255, 255, 255, 0.2);\n}\n.play-bar.dark-theme-color .control-btn.play-btn[data-v-62d97a6c] {\n  box-shadow: 0 3px 12px var(--fill-color-transparent), 0 0 0 1px rgba(255, 255, 255, 0.2);\n}\n.play-bar.dark-theme-color .control-btn.play-btn .iconfont[data-v-62d97a6c] {\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n.play-bar.dark-theme-color .volume-control .iconfont[data-v-62d97a6c]:hover {\n  color: var(--fill-color-light);\n}\n.container[data-v-62d97a6c]{\n  display: flex;\n  flex-direction: column;\n}\n.top-section[data-v-62d97a6c]{\n  margin-bottom: 0.75rem;\n}\n.top-section .progress-bar[data-v-62d97a6c]{\n  position: relative;\n  margin-bottom: 0.5rem;\n  height: 0.5rem;\n  width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.top-section .progress-bar .progress-track[data-v-62d97a6c]{\n  position: absolute;\n  inset: 0px;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  background-color: var(--track-color);\n}\n.top-section .progress-bar .progress-fill[data-v-62d97a6c]{\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  background: linear-gradient(90deg, var(--fill-color), var(--fill-color-light));\n  box-shadow: 0 0 8px var(--fill-color-transparent);\n}\n.top-section .progress-bar:hover .progress-track[data-v-62d97a6c] {\n  background-color: var(--track-color-hover);\n}\n.top-section .progress-bar:hover .progress-fill[data-v-62d97a6c] {\n  box-shadow: 0 0 12px var(--fill-color-transparent);\n}\n.top-section .time-display[data-v-62d97a6c]{\n  display: flex;\n  justify-content: space-between;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  color: var(--muted-color);\n}\n.top-section .time-display .time-separator[data-v-62d97a6c]{\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.top-section .time-display .current-time[data-v-62d97a6c] {\n  opacity: 0.8;\n  transition: opacity 0.3s ease;\n}\n.top-section .time-display .current-time[data-v-62d97a6c]:hover {\n  opacity: 1;\n}\n.controls-section[data-v-62d97a6c]{\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.controls-section .left-controls[data-v-62d97a6c],\n.controls-section .right-controls[data-v-62d97a6c]{\n  display: flex;\n  align-items: center;\n}\n.controls-section .center-controls[data-v-62d97a6c]{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.controls-section .center-controls[data-v-62d97a6c] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.bottom-section[data-v-62d97a6c]{\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.control-btn[data-v-62d97a6c]{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  border-width: 0px;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  color: var(--text-color);\n  background: transparent;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n}\n.control-btn[data-v-62d97a6c]:hover {\n  background-color: var(--button-bg);\n  transform: scale(1.05);\n}\n.control-btn[data-v-62d97a6c]:active {\n  background-color: var(--button-hover);\n  transform: scale(0.95);\n}\n.control-btn.play-btn[data-v-62d97a6c] {\n  background: linear-gradient(145deg, var(--fill-color), var(--fill-color-alt));\n  color: var(--text-on-fill);\n  width: 46px;\n  height: 46px;\n  box-shadow: 0 3px 8px var(--fill-color-transparent);\n}\n.control-btn.play-btn[data-v-62d97a6c]:hover {\n  box-shadow: 0 4px 12px var(--fill-color-transparent);\n}\n.control-btn.play-btn .iconfont[data-v-62d97a6c] {\n  font-size: 1.25rem;\n}\n.control-btn.small-btn[data-v-62d97a6c]{\n  font-size: 1.5rem;\n  line-height: 2rem;\n  width: 28px;\n  height: 28px;\n}\n.control-btn .iconfont[data-v-62d97a6c]{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.volume-control[data-v-62d97a6c]{\n  display: flex;\n  align-items: center;\n}\n.volume-control[data-v-62d97a6c] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.volume-control[data-v-62d97a6c] {\n  color: var(--text-color);\n}\n.volume-control .iconfont[data-v-62d97a6c]{\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  transition: transform 0.2s ease, color 0.2s ease;\n}\n.volume-control .iconfont[data-v-62d97a6c]:hover {\n  transform: scale(1.1);\n  color: var(--fill-color);\n}\n.volume-control .volume-slider[data-v-62d97a6c]{\n  width: 6rem;\n}\n.volume-control .volume-slider[data-v-62d97a6c] .n-slider {\n  --n-rail-height: 3px;\n  --n-fill-color: var(--fill-color);\n  --n-rail-color: var(--track-color);\n  --n-handle-size: 12px;\n}\n.volume-control .volume-slider[data-v-62d97a6c] .n-slider .n-slider-rail{\n  border-radius: 9999px;\n}\n.volume-control .volume-slider[data-v-62d97a6c] .n-slider .n-slider-rail__fill {\n  background: linear-gradient(90deg, var(--fill-color), var(--fill-color-light));\n  box-shadow: 0 0 6px var(--fill-color-transparent);\n}\n.volume-control .volume-slider[data-v-62d97a6c] .n-slider .n-slider-handle{\n  opacity: 0;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  background: white;\n  box-shadow: 0 0 6px var(--fill-color-transparent), 0 0 0 1px var(--high-contrast-color);\n  border: 2px solid var(--fill-color);\n}\n.volume-control .volume-slider[data-v-62d97a6c] .n-slider:hover .n-slider-handle{\n  opacity: 1;\n}\n.spacer[data-v-62d97a6c] {\n  flex: 1;\n}\n.like-active[data-v-62d97a6c] {\n  color: var(--fill-color);\n  text-shadow: 0 0 8px var(--fill-color-transparent);\n}\n.intelligence-active[data-v-62d97a6c]{\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}@keyframes round-02ac868b {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.background-layer[data-v-02ac868b] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 0;\n}\n.drawer-back[data-v-02ac868b] {\n  position: absolute;\n  background-size: cover;\n  background-position: center;\n  z-index: -1;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n}\n.drawer-back.paused[data-v-02ac868b] {\n  animation-play-state: paused;\n}\n#drawer-target[data-v-02ac868b] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.25rem;\n  animation-duration: 300ms;\n}\n#drawer-target .content-wrapper[data-v-02ac868b] {\n  margin-left: auto;\n  margin-right: auto;\n  display: grid;\n  height: 100%;\n  align-items: center;\n  grid-template-columns: minmax(300px, 40%) 1fr;\n  gap: 4rem;\n  max-width: 1600px;\n  padding: 2rem;\n  transition: width 0.3s ease;\n}\n@media (max-width: 1024px) {\n#drawer-target .content-wrapper[data-v-02ac868b] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr;\n    gap: 2rem;\n}\n}\n#drawer-target .left-side[data-v-02ac868b] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n#drawer-target .left-side.only-cover[data-v-02ac868b] {\n  grid-column: span 2 / span 2;\n}\n#drawer-target .left-side.only-cover .img-container[data-v-02ac868b] {\n  aspect-ratio: 1 / 1;\n  width: 60vh;\n}\n#drawer-target .left-side.only-cover .music-info[data-v-02ac868b] {\n  max-width: 800px;\n}\n#drawer-target .left-side .img-container[data-v-02ac868b] {\n  position: relative;\n  margin-bottom: 2rem;\n  aspect-ratio: 1 / 1;\n  width: 45vh;\n  max-width: 100%;\n}\n#drawer-target .left-side .music-info[data-v-02ac868b] {\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n#drawer-target .left-side .music-info .music-content-name[data-v-02ac868b] {\n  margin-bottom: 0.5rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n  color: var(--text-color-active);\n}\n#drawer-target .left-side .music-info .music-content-singer[data-v-02ac868b] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  opacity: 0.8;\n  color: var(--text-color-primary);\n}\n#drawer-target .right-side[data-v-02ac868b] {\n  position: relative;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n}\n#drawer-target .right-side.full-width[data-v-02ac868b] {\n  grid-column: span 2 / span 2;\n}\n#drawer-target .right-side.center .music-lrc[data-v-02ac868b] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  text-align: center;\n}\n#drawer-target .right-side.center .music-lrc-text[data-v-02ac868b] {\n  text-align: center;\n  transform-origin: center center;\n}\n#drawer-target .right-side.center .word-by-word-lyric[data-v-02ac868b] {\n  justify-content: center;\n}\n#drawer-target .right-side.hide[data-v-02ac868b] {\n  display: none;\n}\n#drawer-target .right-side .music-lrc[data-v-02ac868b] {\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);\n}\n#drawer-target .right-side .music-lrc .music-info-header[data-v-02ac868b] {\n  margin-bottom: 2rem;\n}\n#drawer-target .right-side .music-lrc .music-info-header .music-info-name[data-v-02ac868b] {\n  margin-bottom: 0.5rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  color: var(--text-color-active);\n}\n#drawer-target .right-side .music-lrc .music-info-header .music-info-singer[data-v-02ac868b] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  opacity: 0.8;\n  color: var(--text-color-primary);\n}\n#drawer-target .right-side .music-lrc-container[data-v-02ac868b] {\n  padding: 50vh 0;\n  min-height: 100%;\n}\n#drawer-target .right-side .music-lrc-text[data-v-02ac868b] {\n  cursor: pointer;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  font-family: var(--current-font-family);\n  font-weight: var(--lyric-font-weight, bold) !important;\n  transition: all 0.3s ease;\n  background-color: transparent;\n  font-size: var(--lyric-font-size, 22px) !important;\n  letter-spacing: var(--lyric-letter-spacing, 0) !important;\n  line-height: var(--lyric-line-height, 2) !important;\n  opacity: 0.6;\n  transform-origin: left center;\n}\n#drawer-target .right-side .music-lrc-text.now-text[data-v-02ac868b] {\n  opacity: 1;\n  transform: scale(1.05);\n}\n#drawer-target .right-side .music-lrc-text.no-scroll-tip[data-v-02ac868b] {\n  cursor: default;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  opacity: 0.6;\n  color: var(--text-color-primary);\n  font-weight: normal;\n}\n#drawer-target .right-side .music-lrc-text.no-scroll-tip span[data-v-02ac868b] {\n  padding-right: 0;\n}\n#drawer-target .right-side .music-lrc-text.no-scroll-tip[data-v-02ac868b]:hover {\n  background-color: transparent;\n}\n#drawer-target .right-side .music-lrc-text span[data-v-02ac868b] {\n  background-clip: text !important;\n  -webkit-background-clip: text !important;\n  padding-right: 30px;\n}\n#drawer-target .right-side .music-lrc-text-tr[data-v-02ac868b] {\n  font-weight: 400;\n  opacity: 0.7;\n  color: var(--text-color-primary);\n}\n#drawer-target .right-side .music-lrc-text .word-by-word-lyric[data-v-02ac868b] {\n  display: flex;\n  flex-wrap: wrap;\n}\n#drawer-target .right-side .music-lrc-text .word-by-word-lyric .lyric-word[data-v-02ac868b] {\n  display: inline-block;\n  padding-right: 0;\n  font-weight: inherit;\n  font-size: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  cursor: inherit;\n  position: relative;\n}\n#drawer-target .right-side .music-lrc-text .word-by-word-lyric .lyric-word[data-v-02ac868b]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n#drawer-target .right-side .hover-text[data-v-02ac868b]:hover {\n  border-radius: 0.75rem;\n  font-weight: 700;\n  opacity: 1;\n  background-color: var(--hover-bg-color);\n}\n#drawer-target .right-side .hover-text:hover span[data-v-02ac868b] {\n  color: var(--text-color-active) !important;\n}\n.mobile #drawer-target[data-v-02ac868b] {\n  padding: 1rem;\n  padding-top: 2rem;\n}\n.mobile #drawer-target .content-wrapper[data-v-02ac868b] {\n  flex-direction: column;\n  justify-content: flex-start;\n  padding: 0px;\n}\n.mobile #drawer-target .music-img[data-v-02ac868b] {\n  display: none;\n}\n.mobile #drawer-target .music-lrc[data-v-02ac868b] {\n  height: calc(100vh - 260px) !important;\n  width: 100vw;\n}\n.mobile #drawer-target .music-lrc span[data-v-02ac868b] {\n  padding-right: 0px !important;\n}\n.mobile #drawer-target .music-lrc .hover-text[data-v-02ac868b]:hover {\n  background-color: transparent;\n}\n.mobile #drawer-target .music-lrc .music-lrc-text[data-v-02ac868b] {\n  text-align: center;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.mobile #drawer-target .music-content[data-v-02ac868b] {\n  height: calc(100vh - 120px);\n  width: 100vw !important;\n}\n.music-drawer[data-v-02ac868b] {\n  transition: none;\n}\n[data-v-02ac868b]:root {\n  --current-font-family:\n    system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n    sans-serif;\n}\n.close-btn[data-v-02ac868b] {\n  opacity: 0.3;\n  transition: opacity 0.3s ease;\n}\n.close-btn[data-v-02ac868b]:hover {\n  opacity: 1;\n}\n.control-left.pure-mode[data-v-02ac868b],\n.control-right.pure-mode[data-v-02ac868b] {\n  pointer-events: auto;\n}\n.control-left.pure-mode .control-btn[data-v-02ac868b],\n.control-right.pure-mode .control-btn[data-v-02ac868b] {\n  opacity: 0;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  pointer-events: none;\n}\n.control-left.pure-mode:hover .control-btn[data-v-02ac868b],\n.control-right.pure-mode:hover .control-btn[data-v-02ac868b] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.control-left:not(.pure-mode) .control-btn[data-v-02ac868b],\n.control-right:not(.pure-mode) .control-btn[data-v-02ac868b] {\n  pointer-events: auto;\n}\n.control-right[data-v-02ac868b] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.control-btn[data-v-02ac868b] {\n  display: flex;\n  height: 2.25rem;\n  width: 2.25rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  background: rgba(142, 142, 142, 0.192);\n  backdrop-filter: blur(12px);\n}\n.control-btn i[data-v-02ac868b] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  color: var(--text-color-active);\n}\n.control-btn[data-v-02ac868b]:hover {\n  background: rgba(126, 121, 121, 0.2);\n}\n.control-btn:hover i[data-v-02ac868b] {\n  opacity: 1;\n}\n.music-lrc:hover .lyric-correction[data-v-02ac868b] {\n  opacity: 1 !important;\n  pointer-events: auto !important;\n}\n/* 弹窗动画 */\n.settings-drawer-enter-active[data-v-e3bb1da6],\n.settings-drawer-leave-active[data-v-e3bb1da6] {\n  transition: opacity 0.3s ease;\n}\n.settings-drawer-enter-active > div[data-v-e3bb1da6]:last-child,\n.settings-drawer-leave-active > div[data-v-e3bb1da6]:last-child {\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.settings-drawer-enter-from[data-v-e3bb1da6],\n.settings-drawer-leave-to[data-v-e3bb1da6] {\n  opacity: 0;\n}\n.settings-drawer-enter-from > div[data-v-e3bb1da6]:last-child,\n.settings-drawer-leave-to > div[data-v-e3bb1da6]:last-child {\n  transform: translateY(100%);\n}\n#mobile-drawer-target[data-v-850500d1] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  overflow: hidden;\n  animation-duration: 300ms;\n}\n#mobile-drawer-target .main-button[data-v-850500d1] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n#mobile-drawer-target .main-button i[data-v-850500d1] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--text-color-active);\n}\n#mobile-drawer-target .main-button.play-pause i[data-v-850500d1] {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n#mobile-drawer-target .main-button[data-v-850500d1]:hover {\n  transform: scale(1.05);\n}\n#mobile-drawer-target .main-button[data-v-850500d1]:active {\n  transform: scale(0.95);\n}\n#mobile-drawer-target .apple-style-progress[data-v-850500d1] {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  touch-action: none;\n}\n#mobile-drawer-target .apple-style-progress .progress-track[data-v-850500d1] {\n  position: relative;\n  height: 0.5rem;\n  width: 100%;\n  border-radius: 9999px;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.2;\n}\n#mobile-drawer-target .apple-style-progress .progress-track .progress-fill[data-v-850500d1] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);\n  z-index: 1;\n  transition: width 0.1s linear;\n}\n#mobile-drawer-target .apple-style-progress .progress-track .progress-thumb[data-v-850500d1] {\n  position: absolute;\n  top: 50%;\n  --tw-translate-y: -50%;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);\n  z-index: 2;\n  transition: transform 0.15s ease-out;\n}\n#mobile-drawer-target .apple-style-progress .progress-track .progress-thumb.active[data-v-850500d1] {\n  transform: translate(-50%, -50%) scale(1.3);\n  box-shadow: 0 0 12px rgba(255, 255, 255, 0.9);\n}\n#mobile-drawer-target .apple-style-progress .progress-track .progress-thumb[data-v-850500d1]:active {\n  transform: translate(-50%, -50%) scale(1.3);\n}\n#mobile-drawer-target .record-style-common[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style[data-v-850500d1] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 9999px;\n  aspect-ratio: 1/1;\n}\n#mobile-drawer-target .record-style-common[data-v-850500d1]::before, #mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style[data-v-850500d1]::before, #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style[data-v-850500d1]::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  border-radius: 9999px;\n  background: radial-gradient(circle at center, transparent 38%, rgba(0, 0, 0, 0.15) 38%, rgba(0, 0, 0, 0.15) 39%, rgba(255, 255, 255, 0.1) 39%, rgba(255, 255, 255, 0.1) 39.5%, rgba(0, 0, 0, 0.08) 39.5%, rgba(0, 0, 0, 0.08) 40.5%, rgba(0, 0, 0, 0.2) 40.5%, rgba(0, 0, 0, 0.2) 41.5%, rgba(0, 0, 0, 0.6) 41.5%, rgba(0, 0, 0, 0.6) 100%);\n  pointer-events: none;\n  animation: spin-850500d1 20s linear infinite;\n  animation-play-state: running;\n}\n#mobile-drawer-target .record-style-common[data-v-850500d1]::after, #mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style[data-v-850500d1]::after, #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style[data-v-850500d1]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 20;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);\n}\n#mobile-drawer-target .record-style-common.paused[data-v-850500d1]::before, #mobile-drawer-target:not(.is-landscape) .ios-layout-container .paused.cover-container.record-style[data-v-850500d1]::before, #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .paused.landscape-cover-container.record-style[data-v-850500d1]::before, #mobile-drawer-target .record-style-common.paused[data-v-850500d1]::after, #mobile-drawer-target:not(.is-landscape) .ios-layout-container .paused.cover-container.record-style[data-v-850500d1]::after, #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .paused.landscape-cover-container.record-style[data-v-850500d1]::after {\n  animation-play-state: paused;\n}\n#mobile-drawer-target .record-style-common .img-wrapper[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style .img-wrapper[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style .img-wrapper[data-v-850500d1] {\n  z-index: 0;\n  overflow: hidden;\n  border-radius: 9999px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity, 1));\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n#mobile-drawer-target .record-style-common .img-wrapper[data-v-850500d1]::after, #mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style .img-wrapper[data-v-850500d1]::after, #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style .img-wrapper[data-v-850500d1]::after {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n  border-radius: 9999px;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.05) 100%);\n  pointer-events: none;\n}\n#mobile-drawer-target .record-style-common .cover-image[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style .cover-image[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style .cover-image[data-v-850500d1] {\n  height: 100%;\n  width: 100%;\n  border-radius: 9999px;\n  border-width: 2px;\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity, 1));\n  animation: spin-850500d1 20s linear infinite;\n  animation-play-state: running;\n}\n#mobile-drawer-target .record-style-common.paused .cover-image[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .paused.cover-container.record-style .cover-image[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .paused.landscape-cover-container.record-style .cover-image[data-v-850500d1] {\n  animation-play-state: paused;\n}\n#mobile-drawer-target .time-info[data-v-850500d1] {\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#mobile-drawer-target .time-info .current-time[data-v-850500d1],\n#mobile-drawer-target .time-info .total-time[data-v-850500d1] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: var(--text-color-primary);\n  opacity: 0.8;\n}\n#mobile-drawer-target .favorite-icon[data-v-850500d1] {\n  cursor: pointer;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n#mobile-drawer-target .favorite-icon i[data-v-850500d1] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  color: var(--text-color-primary);\n}\n#mobile-drawer-target .favorite-icon i.favorite[data-v-850500d1] {\n  --tw-text-opacity: 1 !important;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1)) !important;\n}\n#mobile-drawer-target .favorite-icon[data-v-850500d1]:hover {\n  transform: scale(1.1);\n}\n#mobile-drawer-target .favorite-icon[data-v-850500d1]:active {\n  transform: scale(0.9);\n}\n#mobile-drawer-target .favorite-icon.landscape i[data-v-850500d1] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n#mobile-drawer-target .song-info-common[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info[data-v-850500d1] {\n  z-index: 9995;\n}\n#mobile-drawer-target .song-info-common .song-title[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-title[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info .song-title[data-v-850500d1] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  font-weight: 700;\n  color: var(--text-color-active);\n}\n#mobile-drawer-target .song-info-common .song-artist[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-artist[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info .song-artist[data-v-850500d1] {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  font-weight: 500;\n  color: var(--text-color-primary);\n  opacity: 0.9;\n}\n#mobile-drawer-target .song-info-common .song-artist .artist-name[data-v-850500d1], #mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-artist .artist-name[data-v-850500d1], #mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info .song-artist .artist-name[data-v-850500d1] {\n  cursor: pointer;\n}\n#mobile-drawer-target .song-info-common .song-artist .artist-name[data-v-850500d1]:hover, #mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-artist .artist-name[data-v-850500d1]:hover, #mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info .song-artist .artist-name[data-v-850500d1]:hover {\n  text-decoration-line: underline;\n}\n#mobile-drawer-target.is-landscape .landscape-layout[data-v-850500d1] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: row;\n  gap: 1rem;\n  overflow: hidden;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section[data-v-850500d1] {\n  position: relative;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  width: 35%;\n  min-width: 320px;\n  max-width: 480px;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container[data-v-850500d1] {\n  z-index: 9995;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1rem;\n  flex-shrink: 0;\n  width: 85%;\n  max-width: 260px;\n  min-width: 180px;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-cover-container.record-style .img-wrapper[data-v-850500d1] {\n  border-width: 20px;\n  width: 90%;\n  height: 90%;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-progress-container[data-v-850500d1] {\n  margin-top: 0px;\n  margin-bottom: 0.5rem;\n  width: 100%;\n  max-width: 28rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-progress-container .apple-style-progress[data-v-850500d1] {\n  height: 48px;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-left-section .landscape-progress-container .apple-style-progress .progress-thumb[data-v-850500d1] {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section[data-v-850500d1] {\n  position: relative;\n  display: flex;\n  height: 100%;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info[data-v-850500d1] {\n  z-index: 9995;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1.25rem;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info .song-title[data-v-850500d1] {\n  margin-bottom: 0.25rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-song-info .song-artist[data-v-850500d1] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-lyrics-scroller[data-v-850500d1] {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  mask-image: linear-gradient(to bottom, transparent 5%, black 15%, black 85%, transparent 95%);\n  -webkit-mask-image: linear-gradient(to bottom, transparent 5%, black 15%, black 85%, transparent 95%);\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-main-controls[data-v-850500d1] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-main-controls .main-button[data-v-850500d1] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  width: 54px;\n  height: 54px;\n  background-color: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  border-radius: 50%;\n}\n#mobile-drawer-target.is-landscape .landscape-layout .landscape-lyrics-section .landscape-main-controls .main-button.play-pause[data-v-850500d1] {\n  width: 70px;\n  height: 70px;\n  background-color: rgba(255, 255, 255, 0.25);\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container[data-v-850500d1] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 2.5rem;\n  padding-bottom: 180px;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container[data-v-850500d1] {\n  position: relative;\n  z-index: 9995;\n  margin-bottom: 1.5rem;\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 500ms;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.style-changing[data-v-850500d1] {\n  animation: styleChange-850500d1 0.5s ease;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style[data-v-850500d1] {\n  height: 18rem;\n  width: 18rem;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .cover-container.record-style .img-wrapper[data-v-850500d1] {\n  border-width: 40px;\n  width: 90%;\n  height: 90%;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info[data-v-850500d1] {\n  z-index: 9995;\n  margin-bottom: 1.25rem;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-title-container[data-v-850500d1] {\n  width: 100%;\n  text-align: center;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-title-container .song-title[data-v-850500d1] {\n  display: inline-block;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .song-artist[data-v-850500d1] {\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n#mobile-drawer-target:not(.is-landscape) .ios-layout-container .song-info .ri-heart-3-fill[data-v-850500d1] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls[data-v-850500d1] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);\n  height: 230px;\n  pointer-events: auto;\n  z-index: 10000 !important;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .progress-container[data-v-850500d1] {\n  margin-bottom: 1.5rem;\n  width: 100%;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .progress-container .apple-style-progress[data-v-850500d1] {\n  height: 40px;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .progress-container .apple-style-progress .progress-thumb[data-v-850500d1] {\n  height: 1rem;\n  width: 1rem;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons[data-v-850500d1] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .side-button[data-v-850500d1] {\n  display: flex;\n  height: 2.5rem;\n  width: 2.5rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .side-button i[data-v-850500d1] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  color: var(--text-color-primary);\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .side-button i.intelligence-active[data-v-850500d1] {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .side-button:hover i[data-v-850500d1] {\n  color: var(--text-color-active);\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .main-button[data-v-850500d1] {\n  height: 3.5rem;\n  width: 3.5rem;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .main-button i[data-v-850500d1] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .main-button.play-pause[data-v-850500d1] {\n  height: 4rem;\n  width: 4rem;\n  border-radius: 9999px;\n  background-color: rgb(255 255 255 / 0.15);\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .main-button.play-pause i[data-v-850500d1] {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .main-button:hover:not(.play-pause) i[data-v-850500d1] {\n  color: var(--text-color-active);\n}\n#mobile-drawer-target:not(.is-landscape) .unified-controls .control-buttons .main-button.play-pause[data-v-850500d1]:hover {\n  background-color: rgb(255 255 255 / 0.3);\n}\n@keyframes spin-850500d1 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.loading-overlay[data-v-850500d1] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 9999999999;\n}\n.loading-overlay .loading-icon[data-v-850500d1] {\n  font-size: 36px;\n  color: white;\n  animation: spin-850500d1 1s linear infinite;\n}\n#mobile-drawer-target.cover-style-record .ios-layout-container .cover-container[data-v-850500d1] {\n  margin-top: 1rem;\n}\n#mobile-drawer-target.cover-style-full .ios-layout-container[data-v-850500d1] {\n  padding-top: 0px;\n}\n.fade-enter-active[data-v-850500d1],\n.fade-leave-active[data-v-850500d1] {\n  transition: opacity 0.3s ease;\n}\n.fade-enter-from[data-v-850500d1],\n.fade-leave-to[data-v-850500d1] {\n  opacity: 0;\n}\n@keyframes styleChange-850500d1 {\n0% {\n    opacity: 0.7;\n    transform: scale(0.95);\n}\n50% {\n    opacity: 0.9;\n    transform: scale(1.03);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes clickPulse-850500d1 {\n0% {\n    opacity: 0.5;\n    transform: scale(1);\n}\n50% {\n    opacity: 1;\n    transform: scale(1.1);\n}\n100% {\n    opacity: 1;\n    transform: scale(1);\n}\n}\n@keyframes pulse-850500d1 {\n0% {\n    opacity: 0.9;\n}\n50% {\n    opacity: 1;\n}\n100% {\n    opacity: 0.9;\n}\n}\n.favorite-icon[data-v-850500d1] {\n  cursor: pointer;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.favorite-icon i[data-v-850500d1] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  color: var(--text-color-primary);\n}\n.favorite-icon i.favorite[data-v-850500d1] {\n  --tw-text-opacity: 1 !important;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1)) !important;\n}\n.favorite-icon[data-v-850500d1]:hover {\n  transform: scale(1.1);\n}\n.favorite-icon[data-v-850500d1]:active {\n  transform: scale(0.9);\n}\n.favorite-icon.landscape[data-v-850500d1] {\n  margin-top: 0.5rem;\n}\n.favorite-icon.landscape i[data-v-850500d1] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.song-title-container[data-v-850500d1] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.song-title-container .song-title[data-v-850500d1] {\n  max-width: 80%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: center;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  color: var(--text-color-active);\n}\n.lyric-line[data-v-850500d1] {\n  cursor: pointer;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  font-weight: 500;\n  letter-spacing: var(--lyric-letter-spacing, 0);\n  line-height: var(--lyric-line-height, 1.6);\n  color: var(--text-color-primary);\n  opacity: 0.8;\n}\n.lyric-line.no-scroll-tip[data-v-850500d1] {\n  cursor: default;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  opacity: 0.6;\n  color: var(--text-color-primary);\n  font-weight: normal;\n}\n.lyric-line.no-scroll-tip span[data-v-850500d1] {\n  padding-right: 0;\n}\n.lyric-line span[data-v-850500d1] {\n  background-clip: text !important;\n  -webkit-background-clip: text !important;\n}\n.lyric-line.now-text[data-v-850500d1] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  font-weight: 500;\n  color: var(--text-color-active);\n  opacity: 1;\n}\n.lyric-line.clicked[data-v-850500d1] {\n  animation: clickPulse-850500d1 0.3s ease-in-out;\n}\n.lyric-line .translation[data-v-850500d1] {\n  margin-top: 0.25rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 400;\n  opacity: 0.7;\n}\n.lyric-line .word-by-word-lyric[data-v-850500d1] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.lyric-line .word-by-word-lyric .lyric-word[data-v-850500d1] {\n  display: inline-block;\n  font-weight: inherit;\n  font-size: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  cursor: inherit;\n  position: relative;\n  padding-right: 0 !important;\n}\n.lyric-line .word-by-word-lyric .lyric-word[data-v-850500d1]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.fullscreen-lyrics[data-v-850500d1] {\n  position: relative;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n}\n.fullscreen-lyrics.light[data-v-850500d1] {\n  background: linear-gradient(to bottom, #ffffff, #f5f5f5);\n}\n.fullscreen-lyrics.dark[data-v-850500d1] {\n  background: linear-gradient(to bottom, #1a1a1a, #000000);\n}\n.fullscreen-lyrics .fullscreen-header[data-v-850500d1] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 4rem;\n  padding-bottom: 1rem;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);\n  pointer-events: auto;\n}\n.fullscreen-lyrics .fullscreen-header .song-title[data-v-850500d1] {\n  margin-bottom: 0.25rem;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  max-width: 100%;\n  text-align: center;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n  color: var(--text-color-active);\n}\n.fullscreen-lyrics .fullscreen-header .artist-name[data-v-850500d1] {\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 0.8;\n  color: var(--text-color-primary);\n}\n.fullscreen-lyrics .lyrics-scroller[data-v-850500d1] {\n  flex: 1 1 0%;\n  overflow-y: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  scroll-behavior: smooth;\n  -webkit-overflow-scrolling: touch;\n  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);\n  padding-top: 100px;\n  padding-bottom: 200px;\n  margin-bottom: 180px;\n  margin-top: 90px;\n}\n.fullscreen-lyrics .lyrics-scroller .lyrics-padding-top[data-v-850500d1] {\n  height: 70px;\n  min-height: 70px;\n}\n.fullscreen-lyrics .lyrics-scroller .lyrics-padding-bottom[data-v-850500d1] {\n  height: 150px;\n  min-height: 150px;\n}\n.fullscreen-lyrics .lyrics-scroller .lyric-line[data-v-850500d1] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center;\n  font-size: var(--lyric-font-size, 22px);\n}\n.fullscreen-lyrics .lyrics-scroller .lyric-line span[data-v-850500d1] {\n  padding-right: 10px;\n}\n.fullscreen-lyrics .lyrics-scroller .now-text[data-v-850500d1] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.control-btn[data-v-850500d1] {\n  z-index: 9999;\n  display: flex;\n  height: 2.25rem;\n  width: 2.25rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  background: rgba(142, 142, 142, 0.192);\n  backdrop-filter: blur(12px);\n  top: calc(var(--safe-area-inset-top, 0) + 20px);\n}\n.control-btn i[data-v-850500d1] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  color: var(--text-color-active);\n}\n.control-btn.pure-mode[data-v-850500d1] {\n  background: transparent;\n  backdrop-filter: none;\n}\n.control-btn.pure-mode:not(:hover) i[data-v-850500d1] {\n  opacity: 0;\n}\n.control-btn[data-v-850500d1]:hover {\n  background: rgba(126, 121, 121, 0.2);\n}\n.control-btn:hover i[data-v-850500d1] {\n  opacity: 1;\n}\n#mobile-drawer-target.is-landscape .landscape-lyrics-section .landscape-lyrics-scroller .lyrics-padding-top[data-v-850500d1] {\n  height: 30px;\n  min-height: 30px;\n}\n#mobile-drawer-target.is-landscape .landscape-lyrics-section .landscape-lyrics-scroller .lyrics-padding-bottom[data-v-850500d1] {\n  height: 100px;\n  min-height: 100px;\n}\n#mobile-drawer-target.is-landscape .landscape-lyrics-section .landscape-lyrics-scroller .lyric-line[data-v-850500d1] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  text-align: left;\n  font-size: 26px;\n}\n#mobile-drawer-target.is-landscape .landscape-lyrics-section .landscape-lyrics-scroller .now-text[data-v-850500d1] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n#mobile-drawer-target.is-landscape .word-by-word-lyric[data-v-850500d1] {\n  justify-content: flex-start;\n}\n#mobile-drawer-target .unified-controls.fullscreen-mode[data-v-850500d1] {\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\n}\n#mobile-drawer-target .unified-controls .back-button[data-v-850500d1] {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  display: flex;\n  height: 2.5rem;\n  width: 2.5rem;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.3;\n}\n#mobile-drawer-target .unified-controls .back-button i[data-v-850500d1] {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  color: var(--text-color-primary);\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container[data-v-850500d1] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n  cursor: pointer;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container .lyrics-wrapper[data-v-850500d1] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container .lyrics-wrapper .lyric-line[data-v-850500d1] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  text-align: center;\n  opacity: 0.7;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container .lyrics-wrapper .lyric-line[data-v-850500d1]:nth-child(2) {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  opacity: 1;\n  color: var(--text-color-active);\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container .lyrics-wrapper .lyric-line .translation[data-v-850500d1] {\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  opacity: 0.6;\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container .lyric-word[data-v-850500d1] {\n  padding-left: 2px;\n  padding-right: 2px;\n}\n#mobile-drawer-target .ios-layout-container .lyrics-container .no-lyrics[data-v-850500d1] {\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  opacity: 0.6;\n  color: var(--text-color-primary);\n}\n.cover-container.square-style[data-v-850500d1] {\n  margin-top: 2rem;\n  aspect-ratio: 1 / 1;\n  width: 85%;\n  overflow: hidden;\n  border-radius: 0.75rem;\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-shadow-color: rgb(0 0 0 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.cover-container.square-style .cover-image[data-v-850500d1] {\n  height: 100%;\n  width: 100%;\n  transition: transform 0.3s ease-out;\n}\n.cover-container.square-style .cover-image[data-v-850500d1]:active {\n  transform: scale(0.95);\n}\n.cover-container.full-style[data-v-850500d1] {\n  position: relative;\n  max-height: 50vh;\n  width: 100%;\n  overflow: hidden;\n}\n.cover-container.full-style[data-v-850500d1]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 40%;\n  background: linear-gradient(transparent, var(--bg-color, rgb(25, 25, 25)) 70%, var(--bg-color, rgb(25, 25, 25)));\n  z-index: 1;\n  pointer-events: none;\n}\n.cover-container.full-style .cover-image[data-v-850500d1] {\n  height: auto;\n  width: 100%;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.cover-container.full-style .cover-image.full-blend[data-v-850500d1] {\n  mix-blend-mode: luminosity;\n}\n.is-dark .square-style[data-v-850500d1] {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-shadow-color: rgb(0 0 0 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        exports("u", usePlayMode);
        const positionProp = {
          type: String,
          default: 'static'
        };

        // vars:
        // --n-bezier
        // --n-color
        // --n-text-color
        const style = cB('layout', `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`, [cB('layout-scroll-container', `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `), cM('absolute-positioned', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);
        const layoutProps = {
          embedded: Boolean,
          position: positionProp,
          nativeScrollbar: {
            type: Boolean,
            default: true
          },
          scrollbarProps: Object,
          onScroll: Function,
          contentClass: String,
          contentStyle: {
            type: [String, Object],
            default: ''
          },
          hasSider: Boolean,
          siderPlacement: {
            type: String,
            default: 'left'
          }
        };
        const layoutInjectionKey = createInjectionKey('n-layout');
        function createLayoutComponent(isContent) {
          return defineComponent({
            name: 'Layout',
            props: Object.assign(Object.assign({}, useTheme.props), layoutProps),
            setup(props) {
              const scrollableElRef = ref(null);
              const scrollbarInstRef = ref(null);
              const {
                mergedClsPrefixRef,
                inlineThemeDisabled
              } = useConfig(props);
              const themeRef = useTheme('Layout', '-layout', style, layoutLight, props, mergedClsPrefixRef);
              function scrollTo(options, y) {
                if (props.nativeScrollbar) {
                  const {
                    value: scrollableEl
                  } = scrollableElRef;
                  if (scrollableEl) {
                    if (y === undefined) {
                      scrollableEl.scrollTo(options);
                    } else {
                      scrollableEl.scrollTo(options, y);
                    }
                  }
                } else {
                  const {
                    value: scrollbarInst
                  } = scrollbarInstRef;
                  if (scrollbarInst) {
                    scrollbarInst.scrollTo(options, y);
                  }
                }
              }
              provide(layoutInjectionKey, props);
              let scrollX = 0;
              let scrollY = 0;
              const handleNativeElScroll = e => {
                var _a;
                const target = e.target;
                scrollX = target.scrollLeft;
                scrollY = target.scrollTop;
                (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
              };
              useReactivated(() => {
                if (props.nativeScrollbar) {
                  const el = scrollableElRef.value;
                  if (el) {
                    el.scrollTop = scrollY;
                    el.scrollLeft = scrollX;
                  }
                }
              });
              const hasSiderStyle = {
                display: 'flex',
                flexWrap: 'nowrap',
                width: '100%',
                flexDirection: 'row'
              };
              const exposedMethods = {
                scrollTo
              };
              const cssVarsRef = computed(() => {
                const {
                  common: {
                    cubicBezierEaseInOut
                  },
                  self
                } = themeRef.value;
                return {
                  '--n-bezier': cubicBezierEaseInOut,
                  '--n-color': props.embedded ? self.colorEmbedded : self.color,
                  '--n-text-color': self.textColor
                };
              });
              const themeClassHandle = inlineThemeDisabled ? useThemeClass('layout', computed(() => {
                return props.embedded ? 'e' : '';
              }), cssVarsRef, props) : undefined;
              return Object.assign({
                mergedClsPrefix: mergedClsPrefixRef,
                scrollableElRef,
                scrollbarInstRef,
                hasSiderStyle,
                mergedTheme: themeRef,
                handleNativeElScroll,
                cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
                themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
                onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
              }, exposedMethods);
            },
            render() {
              var _a;
              const {
                mergedClsPrefix,
                hasSider
              } = this;
              (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
              const hasSiderStyle = hasSider ? this.hasSiderStyle : undefined;
              const layoutClass = [this.themeClass, isContent, `${mergedClsPrefix}-layout`, `${mergedClsPrefix}-layout--${this.position}-positioned`];
              return h("div", {
                class: layoutClass,
                style: this.cssVars
              }, this.nativeScrollbar ? h("div", {
                ref: "scrollableElRef",
                class: [`${mergedClsPrefix}-layout-scroll-container`, this.contentClass],
                style: [this.contentStyle, hasSiderStyle],
                onScroll: this.handleNativeElScroll
              }, this.$slots) : h(Scrollbar, Object.assign({}, this.scrollbarProps, {
                onScroll: this.onScroll,
                ref: "scrollbarInstRef",
                theme: this.mergedTheme.peers.Scrollbar,
                themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                contentClass: this.contentClass,
                contentStyle: [this.contentStyle, hasSiderStyle]
              }), this.$slots));
            }
          });
        }
        const __unplugin_components_2 = createLayoutComponent(false);
        const _hoisted_1$6 = {
          key: 0,
          class: "loading-overlay"
        };
        const _sfc_main$7 = /* @__PURE__ */defineComponent({
          __name: "Cover3D",
          props: {
            src: {},
            loading: {
              type: Boolean,
              default: false
            },
            maxTilt: {
              default: 12
            },
            scale: {
              default: 1.03
            },
            shineIntensity: {
              default: 0.25
            },
            objectFit: {
              default: "cover"
            },
            disabled: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const props = __props;
            const coverContainer = ref(null);
            const coverImage = ref(null);
            const mouseX = ref(0.5);
            const mouseY = ref(0.5);
            const isHovering = ref(false);
            const rafId = ref(null);
            const coverTransformStyle = computed(() => {
              if (!isHovering.value || props.disabled) {
                return {
                  transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                };
              }
              const tiltX = Math.round((mouseY.value - 0.5) * props.maxTilt * 100) / 100;
              const tiltY = Math.round((mouseX.value - 0.5) * -props.maxTilt * 100) / 100;
              return {
                transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${props.scale})`,
                transition: "none"
              };
            });
            const shineStyle = computed(() => {
              if (!isHovering.value || props.disabled) {
                return {
                  opacity: 0,
                  background: "transparent",
                  transition: "opacity 0.3s ease-out"
                };
              }
              const shineX = Math.round(mouseX.value * 100);
              const shineY = Math.round(mouseY.value * 100);
              return {
                opacity: props.shineIntensity,
                background: `radial-gradient(200px circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.3), transparent 50%)`,
                transition: "none"
              };
            });
            const updateMousePosition = (x, y) => {
              if (rafId.value) {
                cancelAnimationFrame(rafId.value);
              }
              rafId.value = requestAnimationFrame(() => {
                const deltaX = Math.abs(mouseX.value - x);
                const deltaY = Math.abs(mouseY.value - y);
                if (deltaX > 0.01 || deltaY > 0.01) {
                  mouseX.value = x;
                  mouseY.value = y;
                }
              });
            };
            const handleMouseMove = event => {
              if (!coverContainer.value || !isHovering.value || props.disabled) return;
              const rect = coverContainer.value.getBoundingClientRect();
              const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
              const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
              updateMousePosition(x, y);
            };
            const handleMouseEnter = () => {
              if (!props.disabled) {
                isHovering.value = true;
              }
            };
            const handleMouseLeave = () => {
              isHovering.value = false;
              if (rafId.value) {
                cancelAnimationFrame(rafId.value);
                rafId.value = null;
              }
              updateMousePosition(0.5, 0.5);
            };
            onBeforeUnmount(() => {
              if (rafId.value) {
                cancelAnimationFrame(rafId.value);
              }
            });
            return (_ctx, _cache) => {
              const _component_n_image = __unplugin_components_1;
              return openBlock(), createElementBlock("div", {
                ref_key: "coverContainer",
                ref: coverContainer,
                class: "cover-3d-container relative cursor-pointer",
                onMousemove: handleMouseMove,
                onMouseleave: handleMouseLeave,
                onMouseenter: handleMouseEnter
              }, [createBaseVNode("div", {
                ref_key: "coverImage",
                ref: coverImage,
                class: "cover-wrapper",
                style: normalizeStyle(coverTransformStyle.value)
              }, [createVNode(_component_n_image, {
                src: __props.src,
                class: "cover-image",
                lazy: "",
                "preview-disabled": "",
                "object-fit": __props.objectFit
              }, null, 8, ["src", "object-fit"]), createBaseVNode("div", {
                class: "cover-shine",
                style: normalizeStyle(shineStyle.value)
              }, null, 4)], 4), __props.loading ? (openBlock(), createElementBlock("div", _hoisted_1$6, [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                class: "ri-loader-4-line loading-icon"
              }, null, -1)]))])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, void 0, true)], 544);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const Cover3D = /* @__PURE__ */_export_sfc(_sfc_main$7, [["__scopeId", "data-v-3965fcc0"]]);
        const _hoisted_1$5 = {
          class: "lyric-correction"
        };
        const _hoisted_2$5 = ["title"];
        const _hoisted_3$5 = {
          class: "text-xs py-0.5 px-1 rounded bg-white/70 dark:bg-neutral-800/70 shadow font-mono tracking-wider text-gray-700 dark:text-gray-200 bg-opacity-40 backdrop-blur-2xl"
        };
        const _hoisted_4$5 = ["title"];
        const _sfc_main$6 = /* @__PURE__ */defineComponent({
          __name: "LyricCorrectionControl",
          props: {
            correctionTime: {}
          },
          emits: ["adjust"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            return (_ctx, _cache) => {
              const _component_n_tooltip = __unplugin_components_3;
              return openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_n_tooltip, {
                placement: "right"
              }, {
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: "lyric-correction-btn",
                  onClick: _cache[0] || (_cache[0] = $event => emit("adjust", -0.2)),
                  title: unref(t)("player.subtractCorrection", {
                    num: 0.2
                  })
                }, [...(_cache[2] || (_cache[2] = [createBaseVNode("i", {
                  class: "ri-subtract-line text-base"
                }, null, -1)]))], 8, _hoisted_2$5)]),
                default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(t)("player.subtractCorrection", {
                  num: 0.2
                })), 1)]),
                _: 1
              }), createBaseVNode("span", _hoisted_3$5, toDisplayString(props.correctionTime > 0 ? "+" : "") + toDisplayString(props.correctionTime.toFixed(1)) + "s ", 1), createVNode(_component_n_tooltip, {
                placement: "right"
              }, {
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: "lyric-correction-btn",
                  onClick: _cache[1] || (_cache[1] = $event => emit("adjust", 0.2)),
                  title: unref(t)("player.addCorrection", {
                    num: 0.2
                  })
                }, [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                  class: "ri-add-line text-base"
                }, null, -1)]))], 8, _hoisted_4$5)]),
                default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(t)("player.addCorrection", {
                  num: 0.2
                })), 1)]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const LyricCorrectionControl = /* @__PURE__ */_export_sfc(_sfc_main$6, [["__scopeId", "data-v-e8fa0e09"]]);
        const DEFAULT_LYRIC_CONFIG = {
          hideCover: false,
          centerLyrics: false,
          fontSize: 22,
          letterSpacing: 0,
          fontWeight: 500,
          lineHeight: 2,
          showTranslation: true,
          theme: "default",
          hidePlayBar: true,
          hideMiniPlayBar: false,
          pureModeEnabled: false,
          hideLyrics: false,
          contentWidth: 75,
          // 默认100%宽度
          // 移动端默认配置
          mobileLayout: "ios",
          mobileCoverStyle: "full",
          mobileShowLyricLines: 3,
          // 翻译引擎: 'none' or 'opencc'
          translationEngine: "none",
          // 背景自定义功能默认值
          useCustomBackground: false,
          backgroundMode: "solid",
          solidColor: "#1a1a1a",
          gradientColors: {
            colors: ["#1a1a1a", "#000000"],
            direction: "to bottom"
          },
          backgroundImage: void 0,
          imageBlur: 0,
          imageBrightness: 100,
          customCss: void 0
        };
        const _hoisted_1$4 = {
          class: "w-80 rounded-2xl bg-black/30 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden"
        };
        const _hoisted_2$4 = {
          class: "px-6 py-4 border-b border-white/5"
        };
        const _hoisted_3$4 = {
          class: "text-lg font-semibold tracking-tight text-white/90"
        };
        const _hoisted_4$4 = {
          class: "px-4 pt-3 pb-2"
        };
        const _hoisted_5$4 = {
          class: "flex gap-1 p-1 bg-black/20 rounded-xl"
        };
        const _hoisted_6$4 = ["onClick"];
        const _hoisted_7$4 = {
          class: "px-3 pb-3 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
        };
        const _hoisted_8$4 = {
          class: "space-y-2 pt-2"
        };
        const _hoisted_9$4 = {
          class: "setting-item"
        };
        const _hoisted_10$4 = {
          class: "setting-item"
        };
        const _hoisted_11$4 = {
          class: "setting-item"
        };
        const _hoisted_12$3 = {
          class: "setting-item"
        };
        const _hoisted_13$3 = {
          class: "setting-item"
        };
        const _hoisted_14$3 = {
          class: "space-y-4 pt-3"
        };
        const _hoisted_15$2 = {
          class: "setting-item"
        };
        const _hoisted_16$2 = {
          class: "slider-group"
        };
        const _hoisted_17$2 = {
          class: "slider-label"
        };
        const _hoisted_18$2 = {
          class: "space-y-4 pt-3"
        };
        const _hoisted_19$2 = {
          class: "slider-group"
        };
        const _hoisted_20$2 = {
          class: "slider-label"
        };
        const _hoisted_21$2 = {
          class: "slider-marks"
        };
        const _hoisted_22$2 = {
          class: "slider-group"
        };
        const _hoisted_23$2 = {
          class: "slider-label"
        };
        const _hoisted_24$2 = {
          class: "slider-marks"
        };
        const _hoisted_25$2 = {
          class: "slider-group"
        };
        const _hoisted_26$2 = {
          class: "slider-label"
        };
        const _hoisted_27$2 = {
          class: "slider-marks"
        };
        const _hoisted_28$2 = {
          class: "slider-group"
        };
        const _hoisted_29$1 = {
          class: "slider-label"
        };
        const _hoisted_30$1 = {
          class: "slider-marks"
        };
        const _hoisted_31$1 = {
          class: "space-y-4 pt-3"
        };
        const _hoisted_32$1 = {
          class: "setting-item"
        };
        const _hoisted_33$1 = {
          key: 0,
          class: "radio-group"
        };
        const _hoisted_34$1 = {
          class: "radio-label"
        };
        const _hoisted_35$1 = {
          class: "space-y-2"
        };
        const _hoisted_36$1 = {
          class: "radio-item"
        };
        const _hoisted_37$1 = {
          class: "radio-item"
        };
        const _hoisted_38$1 = {
          class: "radio-item"
        };
        const _hoisted_39$1 = {
          key: 1,
          class: "radio-group"
        };
        const _hoisted_40$1 = {
          class: "radio-label"
        };
        const _hoisted_41$1 = {
          class: "grid grid-cols-2 gap-2"
        };
        const _hoisted_42$1 = {
          class: "radio-item-compact"
        };
        const _hoisted_43$1 = {
          class: "radio-item-compact"
        };
        const _hoisted_44$1 = {
          class: "radio-item-compact"
        };
        const _hoisted_45$1 = {
          class: "radio-item-compact"
        };
        const _hoisted_46$1 = {
          key: 2,
          class: "color-picker-group"
        };
        const _hoisted_47$1 = {
          class: "color-picker-label"
        };
        const _hoisted_48$1 = {
          key: 3,
          class: "space-y-3"
        };
        const _hoisted_49$1 = {
          class: "color-picker-label"
        };
        const _hoisted_50 = {
          class: "flex flex-wrap gap-2"
        };
        const _hoisted_51 = ["onUpdate:modelValue"];
        const _hoisted_52 = ["onClick"];
        const _hoisted_53 = {
          class: "select-group"
        };
        const _hoisted_54 = {
          class: "select-label"
        };
        const _hoisted_55 = ["value"];
        const _hoisted_56 = {
          key: 4,
          class: "space-y-3"
        };
        const _hoisted_57 = {
          class: "color-picker-label"
        };
        const _hoisted_58 = {
          key: 0,
          class: "space-y-3"
        };
        const _hoisted_59 = {
          class: "relative rounded-lg overflow-hidden border border-white/10"
        };
        const _hoisted_60 = ["src"];
        const _hoisted_61 = {
          class: "slider-group"
        };
        const _hoisted_62 = {
          class: "slider-label"
        };
        const _hoisted_63 = {
          class: "slider-group"
        };
        const _hoisted_64 = {
          class: "slider-label"
        };
        const _hoisted_65 = {
          class: "text-xs text-white/50"
        };
        const _hoisted_66 = {
          key: 5,
          class: "space-y-2"
        };
        const _hoisted_67 = {
          class: "color-picker-label"
        };
        const _hoisted_68 = ["placeholder"];
        const _hoisted_69 = {
          class: "text-xs text-white/50"
        };
        const _sfc_main$5 = /* @__PURE__ */defineComponent({
          __name: "LyricSettings",
          emits: ["themeChange"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const {
              t
            } = useI18n();
            const config = ref({
              ...DEFAULT_LYRIC_CONFIG
            });
            const emit = __emit;
            const message = window.$message;
            const activeTab = ref("display");
            const fileInput = ref();
            const tabs = computed(() => [{
              key: "display",
              label: t("settings.lyricSettings.tabs.display")
            }, {
              key: "interface",
              label: t("settings.lyricSettings.tabs.interface")
            }, {
              key: "typography",
              label: t("settings.lyricSettings.tabs.typography")
            }, {
              key: "background",
              label: t("settings.lyricSettings.tabs.background")
            }]);
            const showMiniPlayBar = computed({
              get: () => !config.value.hideMiniPlayBar,
              set: value => {
                config.value.hideMiniPlayBar = !value;
                config.value.hidePlayBar = value;
              }
            });
            const gradientDirectionOptions = computed(() => [{
              label: t("settings.lyricSettings.background.directionOptions.toBottom"),
              value: "to bottom"
            }, {
              label: t("settings.lyricSettings.background.directionOptions.toTop"),
              value: "to top"
            }, {
              label: t("settings.lyricSettings.background.directionOptions.toRight"),
              value: "to right"
            }, {
              label: t("settings.lyricSettings.background.directionOptions.toLeft"),
              value: "to left"
            }, {
              label: t("settings.lyricSettings.background.directionOptions.toBottomRight"),
              value: "to bottom right"
            }, {
              label: t("settings.lyricSettings.background.directionOptions.angle45"),
              value: "45deg"
            }]);
            const addGradientColor = () => {
              if (config.value.gradientColors.colors.length < 5) {
                config.value.gradientColors.colors.push("#666666");
              }
            };
            const removeGradientColor = index => {
              if (config.value.gradientColors.colors.length > 2) {
                config.value.gradientColors.colors.splice(index, 1);
              }
            };
            const handleImageChange = event => {
              const target = event.target;
              const file = target.files?.[0];
              if (!file) return;
              if (!file.type.startsWith("image/")) {
                message?.error(t("settings.lyricSettings.background.invalidImageFormat"));
                return;
              }
              if (file.size > 20 * 1024 * 1024) {
                message?.error(t("settings.lyricSettings.background.imageTooLarge"));
                return;
              }
              const reader = new FileReader();
              reader.onload = e => {
                config.value.backgroundImage = e.target?.result;
              };
              reader.readAsDataURL(file);
            };
            const clearBackgroundImage = () => {
              config.value.backgroundImage = void 0;
              if (fileInput.value) {
                fileInput.value.value = "";
              }
            };
            watch(() => config.value, newConfig => {
              localStorage.setItem("music-full-config", JSON.stringify(newConfig));
              updateCSSVariables(newConfig);
            }, {
              deep: true
            });
            watch(() => config.value.theme, newTheme => {
              emit("themeChange", newTheme);
            });
            const updateCSSVariables = config2 => {
              document.documentElement.style.setProperty("--lyric-font-size", `${config2.fontSize}px`);
              document.documentElement.style.setProperty("--lyric-letter-spacing", `${config2.letterSpacing}px`);
              document.documentElement.style.setProperty("--lyric-font-weight", config2.fontWeight?.toString() || "400");
              document.documentElement.style.setProperty("--lyric-line-height", config2.lineHeight.toString());
            };
            onMounted(() => {
              const savedConfig = localStorage.getItem("music-full-config");
              if (savedConfig) {
                config.value = {
                  ...config.value,
                  ...JSON.parse(savedConfig)
                };
                updateCSSVariables(config.value);
              }
            });
            __expose({
              config
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$4, [createBaseVNode("h2", _hoisted_3$4, toDisplayString(unref(t)("settings.lyricSettings.title")), 1)]), createBaseVNode("div", _hoisted_4$4, [createBaseVNode("div", _hoisted_5$4, [(openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, tab => {
                return openBlock(), createElementBlock("button", {
                  key: tab.key,
                  onClick: $event => activeTab.value = tab.key,
                  class: normalizeClass(["flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200", activeTab.value === tab.key ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" : "hover:bg-white/5"]),
                  style: normalizeStyle(activeTab.value !== tab.key ? "color: rgba(255, 255, 255, 0.7);" : "")
                }, toDisplayString(tab.label), 15, _hoisted_6$4);
              }), 128))])]), createBaseVNode("div", _hoisted_7$4, [withDirectives(createBaseVNode("div", _hoisted_8$4, [createBaseVNode("div", _hoisted_9$4, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.pureMode")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => config.value.pureModeEnabled = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, config.value.pureModeEnabled]])]), createBaseVNode("div", _hoisted_10$4, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.hideCover")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => config.value.hideCover = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, config.value.hideCover]])]), createBaseVNode("div", _hoisted_11$4, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.centerDisplay")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => config.value.centerLyrics = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, config.value.centerLyrics]])]), createBaseVNode("div", _hoisted_12$3, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.showTranslation")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => config.value.showTranslation = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, config.value.showTranslation]])]), createBaseVNode("div", _hoisted_13$3, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.hideLyrics")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => config.value.hideLyrics = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, config.value.hideLyrics]])])], 512), [[vShow, activeTab.value === "display"]]), withDirectives(createBaseVNode("div", _hoisted_14$3, [createBaseVNode("div", _hoisted_15$2, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.showMiniPlayBar")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => showMiniPlayBar.value = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, showMiniPlayBar.value]])]), createBaseVNode("div", _hoisted_16$2, [createBaseVNode("label", _hoisted_17$2, toDisplayString(unref(t)("settings.lyricSettings.contentWidth")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => config.value.contentWidth = $event),
                min: "50",
                max: "100",
                step: "5",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.contentWidth, void 0, {
                number: true
              }]]), _cache[25] || (_cache[25] = createBaseVNode("div", {
                class: "slider-marks"
              }, [createBaseVNode("span", null, "50%"), createBaseVNode("span", null, "75%"), createBaseVNode("span", null, "100%")], -1))])], 512), [[vShow, activeTab.value === "interface"]]), withDirectives(createBaseVNode("div", _hoisted_18$2, [createBaseVNode("div", _hoisted_19$2, [createBaseVNode("label", _hoisted_20$2, toDisplayString(unref(t)("settings.lyricSettings.fontSize")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => config.value.fontSize = $event),
                min: "12",
                max: "32",
                step: "1",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.fontSize, void 0, {
                number: true
              }]]), createBaseVNode("div", _hoisted_21$2, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.fontSizeMarks.small")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.fontSizeMarks.medium")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.fontSizeMarks.large")), 1)])]), createBaseVNode("div", _hoisted_22$2, [createBaseVNode("label", _hoisted_23$2, toDisplayString(unref(t)("settings.lyricSettings.letterSpacing")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => config.value.letterSpacing = $event),
                min: "-2",
                max: "10",
                step: "0.2",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.letterSpacing, void 0, {
                number: true
              }]]), createBaseVNode("div", _hoisted_24$2, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.letterSpacingMarks.compact")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.letterSpacingMarks.default")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.letterSpacingMarks.loose")), 1)])]), createBaseVNode("div", _hoisted_25$2, [createBaseVNode("label", _hoisted_26$2, toDisplayString(unref(t)("settings.lyricSettings.fontWeight")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => config.value.fontWeight = $event),
                min: "100",
                max: "900",
                step: "100",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.fontWeight, void 0, {
                number: true
              }]]), createBaseVNode("div", _hoisted_27$2, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.fontWeightMarks.thin")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.fontWeightMarks.normal")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.fontWeightMarks.bold")), 1)])]), createBaseVNode("div", _hoisted_28$2, [createBaseVNode("label", _hoisted_29$1, toDisplayString(unref(t)("settings.lyricSettings.lineHeight")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = $event => config.value.lineHeight = $event),
                min: "1",
                max: "3",
                step: "0.1",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.lineHeight, void 0, {
                number: true
              }]]), createBaseVNode("div", _hoisted_30$1, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.lineHeightMarks.compact")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.lineHeightMarks.default")), 1), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.lineHeightMarks.loose")), 1)])])], 512), [[vShow, activeTab.value === "typography"]]), withDirectives(createBaseVNode("div", _hoisted_31$1, [createBaseVNode("div", _hoisted_32$1, [createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.background.useCustomBackground")), 1), withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => config.value.useCustomBackground = $event),
                class: "toggle-switch"
              }, null, 512), [[vModelCheckbox, config.value.useCustomBackground]])]), !config.value.useCustomBackground ? (openBlock(), createElementBlock("div", _hoisted_33$1, [createBaseVNode("label", _hoisted_34$1, toDisplayString(unref(t)("settings.lyricSettings.backgroundTheme")), 1), createBaseVNode("div", _hoisted_35$1, [createBaseVNode("label", _hoisted_36$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => config.value.theme = $event),
                value: "default",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.theme]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.themeOptions.default")), 1)]), createBaseVNode("label", _hoisted_37$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = $event => config.value.theme = $event),
                value: "light",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.theme]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.themeOptions.light")), 1)]), createBaseVNode("label", _hoisted_38$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = $event => config.value.theme = $event),
                value: "dark",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.theme]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.themeOptions.dark")), 1)])])])) : createCommentVNode("", true), config.value.useCustomBackground ? (openBlock(), createElementBlock("div", _hoisted_39$1, [createBaseVNode("label", _hoisted_40$1, toDisplayString(unref(t)("settings.lyricSettings.background.backgroundMode")), 1), createBaseVNode("div", _hoisted_41$1, [createBaseVNode("label", _hoisted_42$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[15] || (_cache[15] = $event => config.value.backgroundMode = $event),
                value: "solid",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.backgroundMode]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.background.modeOptions.solid")), 1)]), createBaseVNode("label", _hoisted_43$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => config.value.backgroundMode = $event),
                value: "gradient",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.backgroundMode]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.background.modeOptions.gradient")), 1)]), createBaseVNode("label", _hoisted_44$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[17] || (_cache[17] = $event => config.value.backgroundMode = $event),
                value: "image",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.backgroundMode]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.background.modeOptions.image")), 1)]), createBaseVNode("label", _hoisted_45$1, [withDirectives(createBaseVNode("input", {
                type: "radio",
                "onUpdate:modelValue": _cache[18] || (_cache[18] = $event => config.value.backgroundMode = $event),
                value: "css",
                class: "radio-input"
              }, null, 512), [[vModelRadio, config.value.backgroundMode]]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.lyricSettings.background.modeOptions.css")), 1)])])])) : createCommentVNode("", true), config.value.useCustomBackground && config.value.backgroundMode === "solid" ? (openBlock(), createElementBlock("div", _hoisted_46$1, [createBaseVNode("label", _hoisted_47$1, toDisplayString(unref(t)("settings.lyricSettings.background.solidColor")), 1), withDirectives(createBaseVNode("input", {
                type: "color",
                "onUpdate:modelValue": _cache[19] || (_cache[19] = $event => config.value.solidColor = $event),
                class: "color-picker"
              }, null, 512), [[vModelText, config.value.solidColor]])])) : createCommentVNode("", true), config.value.useCustomBackground && config.value.backgroundMode === "gradient" ? (openBlock(), createElementBlock("div", _hoisted_48$1, [createBaseVNode("label", _hoisted_49$1, toDisplayString(unref(t)("settings.lyricSettings.background.gradientEditor")), 1), createBaseVNode("div", _hoisted_50, [(openBlock(true), createElementBlock(Fragment, null, renderList(config.value.gradientColors.colors, (_, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "relative"
                }, [withDirectives(createBaseVNode("input", {
                  type: "color",
                  "onUpdate:modelValue": $event => config.value.gradientColors.colors[index] = $event,
                  class: "color-picker-small"
                }, null, 8, _hoisted_51), [[vModelText, config.value.gradientColors.colors[index]]]), config.value.gradientColors.colors.length > 2 ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  onClick: $event => removeGradientColor(index),
                  class: "absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs hover:bg-red-600 transition-colors"
                }, [...(_cache[26] || (_cache[26] = [createBaseVNode("i", {
                  class: "ri-close-line"
                }, null, -1)]))], 8, _hoisted_52)) : createCommentVNode("", true)]);
              }), 128))]), config.value.gradientColors.colors.length < 5 ? (openBlock(), createElementBlock("button", {
                key: 0,
                onClick: addGradientColor,
                class: "w-full py-2 px-4 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors text-sm font-medium flex items-center justify-center gap-2 text-white/90"
              }, [_cache[27] || (_cache[27] = createBaseVNode("i", {
                class: "ri-add-line"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("settings.lyricSettings.background.addColor")), 1)])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_53, [createBaseVNode("label", _hoisted_54, toDisplayString(unref(t)("settings.lyricSettings.background.gradientDirection")), 1), withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[20] || (_cache[20] = $event => config.value.gradientColors.direction = $event),
                class: "select-input"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(gradientDirectionOptions.value, opt => {
                return openBlock(), createElementBlock("option", {
                  key: opt.value,
                  value: opt.value
                }, toDisplayString(opt.label), 9, _hoisted_55);
              }), 128))], 512), [[vModelSelect, config.value.gradientColors.direction]])])])) : createCommentVNode("", true), config.value.useCustomBackground && config.value.backgroundMode === "image" ? (openBlock(), createElementBlock("div", _hoisted_56, [createBaseVNode("label", _hoisted_57, toDisplayString(unref(t)("settings.lyricSettings.background.imageUpload")), 1), createBaseVNode("input", {
                type: "file",
                accept: "image/*",
                onChange: handleImageChange,
                class: "hidden",
                ref_key: "fileInput",
                ref: fileInput
              }, null, 544), createBaseVNode("button", {
                onClick: _cache[21] || (_cache[21] = $event => fileInput.value?.click()),
                class: "w-full py-2 px-4 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors text-sm font-medium flex items-center justify-center gap-2 text-white/90"
              }, [_cache[28] || (_cache[28] = createBaseVNode("i", {
                class: "ri-image-add-line"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("settings.lyricSettings.background.imageUpload")), 1)]), config.value.backgroundImage ? (openBlock(), createElementBlock("div", _hoisted_58, [createBaseVNode("div", _hoisted_59, [createBaseVNode("img", {
                src: config.value.backgroundImage,
                class: "w-full max-h-40 object-cover",
                alt: "Preview"
              }, null, 8, _hoisted_60), createBaseVNode("button", {
                onClick: clearBackgroundImage,
                class: "absolute top-2 right-2 p-2 rounded-lg bg-red-500/80 text-white hover:bg-red-500 transition-colors"
              }, [...(_cache[29] || (_cache[29] = [createBaseVNode("i", {
                class: "ri-delete-bin-line"
              }, null, -1)]))])]), createBaseVNode("div", _hoisted_61, [createBaseVNode("label", _hoisted_62, toDisplayString(unref(t)("settings.lyricSettings.background.imageBlur")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[22] || (_cache[22] = $event => config.value.imageBlur = $event),
                min: "0",
                max: "20",
                step: "1",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.imageBlur, void 0, {
                number: true
              }]]), _cache[30] || (_cache[30] = createBaseVNode("div", {
                class: "slider-marks"
              }, [createBaseVNode("span", null, "0"), createBaseVNode("span", null, "10"), createBaseVNode("span", null, "20px")], -1))]), createBaseVNode("div", _hoisted_63, [createBaseVNode("label", _hoisted_64, toDisplayString(unref(t)("settings.lyricSettings.background.imageBrightness")), 1), withDirectives(createBaseVNode("input", {
                type: "range",
                "onUpdate:modelValue": _cache[23] || (_cache[23] = $event => config.value.imageBrightness = $event),
                min: "0",
                max: "200",
                step: "5",
                class: "slider-emerald"
              }, null, 512), [[vModelText, config.value.imageBrightness, void 0, {
                number: true
              }]]), _cache[31] || (_cache[31] = createBaseVNode("div", {
                class: "slider-marks"
              }, [createBaseVNode("span", null, "暗"), createBaseVNode("span", null, "正常"), createBaseVNode("span", null, "亮")], -1))])])) : createCommentVNode("", true), createBaseVNode("p", _hoisted_65, toDisplayString(unref(t)("settings.lyricSettings.background.fileSizeLimit")), 1)])) : createCommentVNode("", true), config.value.useCustomBackground && config.value.backgroundMode === "css" ? (openBlock(), createElementBlock("div", _hoisted_66, [createBaseVNode("label", _hoisted_67, toDisplayString(unref(t)("settings.lyricSettings.background.customCss")), 1), withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": _cache[24] || (_cache[24] = $event => config.value.customCss = $event),
                placeholder: unref(t)("settings.lyricSettings.background.customCssPlaceholder"),
                rows: "4",
                class: "w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 font-mono text-white/90"
              }, null, 8, _hoisted_68), [[vModelText, config.value.customCss]]), createBaseVNode("p", _hoisted_69, toDisplayString(unref(t)("settings.lyricSettings.background.customCssHelp")), 1)])) : createCommentVNode("", true)], 512), [[vShow, activeTab.value === "background"]])])]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const LyricSettings = /* @__PURE__ */_export_sfc(_sfc_main$5, [["__scopeId", "data-v-3ed5d4e3"]]);
        function usePlayMode() {
          const {
            t
          } = useI18n();
          const playerStore = usePlayerStore();
          const playMode = computed(() => playerStore.playMode);
          const playModeIcon = computed(() => {
            switch (playMode.value) {
              case 0:
                return "ri-repeat-2-line";
              case 1:
                return "ri-repeat-one-line";
              case 2:
                return "ri-shuffle-line";
              default:
                return "ri-repeat-2-line";
            }
          });
          const playModeText = computed(() => {
            switch (playMode.value) {
              case 0:
                return t("player.playBar.playMode.sequence");
              case 1:
                return t("player.playBar.playMode.loop");
              case 2:
                return t("player.playBar.playMode.random");
              default:
                return t("player.playBar.playMode.sequence");
            }
          });
          const togglePlayMode = () => {
            playerStore.togglePlayMode();
          };
          return {
            playMode,
            playModeIcon,
            playModeText,
            togglePlayMode
          };
        }
        const _hoisted_1$3 = {
          class: "container"
        };
        const _hoisted_2$3 = {
          class: "top-section"
        };
        const _hoisted_3$3 = {
          class: "time-display"
        };
        const _hoisted_4$3 = {
          class: "current-time"
        };
        const _hoisted_5$3 = {
          class: "total-time"
        };
        const _hoisted_6$3 = {
          class: "controls-section"
        };
        const _hoisted_7$3 = {
          class: "left-controls"
        };
        const _hoisted_8$3 = {
          class: "center-controls"
        };
        const _hoisted_9$3 = {
          class: "bottom-section"
        };
        const _hoisted_10$3 = {
          class: "volume-control"
        };
        const _hoisted_11$3 = {
          class: "volume-slider"
        };
        const _sfc_main$4 = /* @__PURE__ */defineComponent({
          __name: "SimplePlayBar",
          props: {
            isDark: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const props = __props;
            const playerStore = usePlayerStore();
            const playBarRef = ref(null);
            const play = computed(() => playerStore.isPlay);
            const {
              playMode,
              playModeIcon,
              togglePlayMode
            } = usePlayMode();
            const audioVolume = ref(localStorage.getItem("volume") ? parseFloat(localStorage.getItem("volume")) : 1);
            const volumeSlider = computed({
              get: () => audioVolume.value * 100,
              set: value => {
                localStorage.setItem("volume", (value / 100).toString());
                audioService.setVolume(value / 100);
                audioVolume.value = value / 100;
              }
            });
            const getVolumeIcon = computed(() => {
              if (audioVolume.value === 0) return "ri-volume-mute-line";
              if (audioVolume.value <= 0.5) return "ri-volume-down-line";
              return "ri-volume-up-line";
            });
            const mute = () => {
              if (volumeSlider.value === 0) {
                volumeSlider.value = 30;
              } else {
                volumeSlider.value = 0;
              }
            };
            const handleVolumeWheel = e => {
              const delta = e.deltaY < 0 ? 5 : -5;
              const newValue = Math.min(Math.max(volumeSlider.value + delta, 0), 100);
              volumeSlider.value = newValue;
            };
            const handlePrev = () => playerStore.prevPlay();
            const handleNext = () => playerStore.nextPlay();
            const playMusicEvent = async () => {
              try {
                await playerStore.setPlay({
                  ...playMusic.value
                });
              } catch (error) {
                console.error("播放出错:", error);
                playerStore.nextPlay();
              }
            };
            const isDragging = ref(false);
            const dragProgress = ref(0);
            const progressPercentage = computed(() => {
              if (isDragging.value) {
                return dragProgress.value;
              }
              if (allTime.value === 0) return 0;
              return nowTime.value / allTime.value * 100;
            });
            const displayTime = computed(() => {
              if (isDragging.value) {
                return dragProgress.value / 100 * allTime.value;
              }
              return nowTime.value;
            });
            const calculateProgress = (clientX, element) => {
              const rect = element.getBoundingClientRect();
              const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
              return percent * 100;
            };
            const seekToProgress = percentage => {
              const targetTime = percentage / 100 * allTime.value;
              audioService.seek(targetTime);
            };
            const handleProgressMouseDown = e => {
              if (e.button !== 0) return;
              const target = e.currentTarget;
              isDragging.value = true;
              dragProgress.value = calculateProgress(e.clientX, target);
              const handleMouseMove = moveEvent => {
                if (isDragging.value) {
                  dragProgress.value = calculateProgress(moveEvent.clientX, target);
                }
              };
              const handleMouseUp = () => {
                if (isDragging.value) {
                  seekToProgress(dragProgress.value);
                  isDragging.value = false;
                }
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
              e.preventDefault();
            };
            const handleProgressClick = e => {
              if (isDragging.value) return;
              const target = e.currentTarget;
              const percentage = calculateProgress(e.clientX, target);
              seekToProgress(percentage);
            };
            const formatTime = seconds => {
              return secondToMinute(seconds);
            };
            const openPlayListDrawer = () => {
              playerStore.setPlayListDrawerVisible(true);
            };
            const isDarkMode = computed(() => props.isDark);
            const applyThemeColor = colorValue => {
              if (!colorValue || !playBarRef.value) return;
              console.log("应用主题色:", colorValue);
              const playBarElement = playBarRef.value;
              const rgbMatch = colorValue.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
              if (rgbMatch) {
                const [_, r, g, b] = rgbMatch.map(Number);
                const brightness = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
                console.log(`主题色亮度: ${brightness}/255`);
                playBarElement.style.setProperty("--fill-color", colorValue);
                if (brightness > 200) {
                  const darkenedColor = `rgb(${Math.max(0, r - 60)}, ${Math.max(0, g - 60)}, ${Math.max(0, b - 60)})`;
                  playBarElement.style.setProperty("--fill-color-alt", darkenedColor);
                  playBarElement.style.setProperty("--fill-color-transparent", `rgba(${r}, ${g}, ${b}, 0.5)`);
                  playBarElement.style.setProperty("--text-on-fill", "#000000");
                  playBarElement.style.setProperty("--high-contrast-color", "#000000");
                  playBarElement.classList.add("light-theme-color");
                  playBarElement.classList.remove("dark-theme-color");
                } else if (brightness < 50) {
                  const lightenedColor2 = `rgb(${Math.min(255, r + 60)}, ${Math.min(255, g + 60)}, ${Math.min(255, b + 60)})`;
                  playBarElement.style.setProperty("--fill-color-alt", lightenedColor2);
                  playBarElement.style.setProperty("--fill-color-transparent", `rgba(${r}, ${g}, ${b}, 0.7)`);
                  playBarElement.style.setProperty("--text-on-fill", "#ffffff");
                  playBarElement.style.setProperty("--high-contrast-color", "#ffffff");
                  playBarElement.classList.add("dark-theme-color");
                  playBarElement.classList.remove("light-theme-color");
                } else {
                  playBarElement.style.setProperty("--fill-color-alt", colorValue);
                  playBarElement.style.setProperty("--fill-color-transparent", `rgba(${r}, ${g}, ${b}, 0.25)`);
                  const textColor = brightness > 125 ? "#000000" : "#ffffff";
                  playBarElement.style.setProperty("--text-on-fill", textColor);
                  playBarElement.style.setProperty("--high-contrast-color", textColor);
                  playBarElement.classList.remove("light-theme-color");
                  playBarElement.classList.remove("dark-theme-color");
                }
                const lightenedColor = `rgb(${Math.min(255, r + 40)}, ${Math.min(255, g + 40)}, ${Math.min(255, b + 40)})`;
                playBarElement.style.setProperty("--fill-color-light", lightenedColor);
              } else {
                playBarElement.style.setProperty("--fill-color", colorValue);
                playBarElement.style.setProperty("--fill-color-transparent", `${colorValue}40`);
                playBarElement.style.setProperty("--fill-color-light", `${colorValue}80`);
                playBarElement.style.setProperty("--fill-color-alt", colorValue);
                playBarElement.style.setProperty("--text-on-fill", "#ffffff");
                playBarElement.style.setProperty("--high-contrast-color", "#ffffff");
              }
            };
            watch(() => playerStore.playMusic.primaryColor, newVal => {
              if (newVal) {
                applyThemeColor(newVal);
              }
            });
            onMounted(() => {
              if (playerStore.playMusic?.primaryColor) {
                setTimeout(() => {
                  applyThemeColor(playerStore.playMusic.primaryColor);
                }, 50);
              }
            });
            return (_ctx, _cache) => {
              const _component_n_slider = __unplugin_components_0;
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["play-bar", {
                  "dark-theme": isDarkMode.value
                }]),
                ref_key: "playBarRef",
                ref: playBarRef
              }, [createBaseVNode("div", _hoisted_1$3, [createBaseVNode("div", _hoisted_2$3, [createBaseVNode("div", {
                class: normalizeClass(["progress-bar", {
                  "is-dragging": isDragging.value
                }]),
                onMousedown: handleProgressMouseDown,
                onClick: withModifiers(handleProgressClick, ["stop"])
              }, [_cache[2] || (_cache[2] = createBaseVNode("div", {
                class: "progress-track"
              }, null, -1)), createBaseVNode("div", {
                class: "progress-fill",
                style: normalizeStyle({
                  width: `${progressPercentage.value}%`
                })
              }, null, 4)], 34), createBaseVNode("div", _hoisted_3$3, [createBaseVNode("span", _hoisted_4$3, toDisplayString(formatTime(displayTime.value)), 1), createBaseVNode("span", _hoisted_5$3, toDisplayString(formatTime(unref(allTime))), 1)])]), createBaseVNode("div", _hoisted_6$3, [createBaseVNode("div", _hoisted_7$3, [createBaseVNode("button", {
                class: "control-btn small-btn",
                onClick: _cache[0] || (_cache[0] =
                //@ts-ignore
                (...args) => unref(togglePlayMode) && unref(togglePlayMode)(...args))
              }, [createBaseVNode("i", {
                class: normalizeClass(["iconfont", [unref(playModeIcon), {
                  "intelligence-active": unref(playMode) === 3
                }]])
              }, null, 2)])]), createBaseVNode("div", _hoisted_8$3, [createBaseVNode("button", {
                class: "control-btn",
                onClick: handlePrev
              }, [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                class: "iconfont icon-prev"
              }, null, -1)]))]), createBaseVNode("button", {
                class: "control-btn play-btn",
                onClick: playMusicEvent
              }, [createBaseVNode("i", {
                class: normalizeClass(["iconfont", play.value ? "icon-stop" : "icon-play"])
              }, null, 2)]), createBaseVNode("button", {
                class: "control-btn",
                onClick: handleNext
              }, [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                class: "iconfont icon-next"
              }, null, -1)]))])]), createBaseVNode("div", {
                class: "right-controls"
              }, [createBaseVNode("button", {
                class: "control-btn small-btn",
                onClick: openPlayListDrawer
              }, [...(_cache[5] || (_cache[5] = [createBaseVNode("i", {
                class: "iconfont icon-list"
              }, null, -1)]))])])]), createBaseVNode("div", _hoisted_9$3, [_cache[6] || (_cache[6] = createBaseVNode("div", {
                class: "spacer"
              }, null, -1)), createBaseVNode("div", _hoisted_10$3, [createBaseVNode("i", {
                class: normalizeClass(["iconfont", getVolumeIcon.value]),
                onClick: mute
              }, null, 2), createBaseVNode("div", _hoisted_11$3, [createVNode(_component_n_slider, {
                value: volumeSlider.value,
                "onUpdate:value": _cache[1] || (_cache[1] = $event => volumeSlider.value = $event),
                step: 1,
                tooltip: false,
                onWheel: withModifiers(handleVolumeWheel, ["prevent"])
              }, null, 8, ["value"])])])])])], 2);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const SimplePlayBar = /* @__PURE__ */_export_sfc(_sfc_main$4, [["__scopeId", "data-v-62d97a6c"]]);
        const _hoisted_1$2 = {
          class: "img-container"
        };
        const _hoisted_2$2 = {
          class: "music-info"
        };
        const _hoisted_3$2 = ["innerHTML"];
        const _hoisted_4$2 = {
          class: "music-content-singer"
        };
        const _hoisted_5$2 = ["onClick"];
        const _hoisted_6$2 = {
          class: "music-lrc-container"
        };
        const _hoisted_7$2 = ["innerHTML"];
        const _hoisted_8$2 = {
          class: "music-info-singer"
        };
        const _hoisted_9$2 = ["onClick"];
        const _hoisted_10$2 = {
          key: 1,
          class: "music-lrc-text no-scroll-tip"
        };
        const _hoisted_11$2 = ["id", "onClick"];
        const _hoisted_12$2 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_13$2 = {
          key: 0,
          class: "lyric-word"
        };
        const _hoisted_14$2 = {
          key: 2,
          class: "music-lrc-text"
        };
        const _sfc_main$3 = /* @__PURE__ */defineComponent({
          __name: "MusicFull",
          props: {
            modelValue: {
              type: Boolean,
              default: false
            },
            background: {
              type: String,
              default: ""
            }
          },
          emits: ["update:modelValue"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const {
              t
            } = useI18n();
            const lrcSider = ref(null);
            const isMouse = ref(false);
            const currentBackground = ref("");
            const animationFrame = ref(null);
            const isDark = ref(false);
            const customBackgroundStyle = computed(() => {
              if (!config.value.useCustomBackground) {
                return null;
              }
              switch (config.value.backgroundMode) {
                case "solid":
                  return config.value.solidColor;
                case "gradient":
                  {
                    const {
                      colors,
                      direction
                    } = config.value.gradientColors;
                    return `linear-gradient(${direction}, ${colors.join(", ")})`;
                  }
                case "image":
                  if (!config.value.backgroundImage) return null;
                  return config.value.backgroundImage;
                case "css":
                  return config.value.customCss || null;
                default:
                  return null;
              }
            });
            const drawerBaseStyle = computed(() => {
              if (config.value.useCustomBackground && config.value.backgroundMode === "image") {
                return {
                  background: "transparent"
                };
              }
              if (config.value.useCustomBackground && customBackgroundStyle.value) {
                return {
                  background: customBackgroundStyle.value
                };
              }
              return {
                background: currentBackground.value || props.background
              };
            });
            const backgroundImageStyle = computed(() => {
              const blur = config.value.imageBlur || 0;
              const brightness = config.value.imageBrightness || 100;
              return {
                backgroundImage: `url(${config.value.backgroundImage})`,
                filter: `blur(${blur}px) brightness(${brightness}%)`
              };
            });
            const showStickyHeader = ref(false);
            const lyricSettingsRef = ref();
            const isSongChanging = ref(false);
            const isFullScreen = ref(false);
            const config = ref({
              ...DEFAULT_LYRIC_CONFIG
            });
            watch(() => lyricSettingsRef.value?.config, newConfig => {
              if (newConfig) {
                config.value = newConfig;
              }
            }, {
              deep: true,
              immediate: true
            });
            watch(() => config.value, newConfig => {
              localStorage.setItem("music-full-config", JSON.stringify(newConfig));
              if (lyricSettingsRef.value) {
                lyricSettingsRef.value.config = newConfig;
              }
            }, {
              deep: true
            });
            const supportAutoScroll = computed(() => {
              return lrcArray.value.length > 0 && lrcArray.value[0].startTime !== -1;
            });
            const props = __props;
            const themeMusic = {
              light: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
              dark: "linear-gradient(to bottom, #1a1a1a, #000000)"
            };
            const emit = __emit;
            const isVisible = computed({
              get: () => props.modelValue,
              set: value => emit("update:modelValue", value)
            });
            const lrcScroll = (behavior = "smooth", forceTop = false) => {
              if (!isVisible.value || !lrcSider.value || !supportAutoScroll.value) return;
              if (forceTop) {
                lrcSider.value.scrollTo({
                  top: 0,
                  behavior
                });
                return;
              }
              if (isMouse.value) return;
              const nowEl = document.querySelector(`#music-lrc-text-${nowIndex.value}`);
              if (nowEl) {
                const containerHeight = lrcSider.value.$el.clientHeight;
                const elementTop = nowEl.offsetTop;
                const scrollTop = elementTop - containerHeight / 2 + nowEl.clientHeight / 2;
                lrcSider.value.scrollTo({
                  top: scrollTop,
                  behavior
                });
              }
            };
            const debouncedLrcScroll = useDebounceFn(lrcScroll, 200);
            const mouseOverLayout = () => {
              if (isMobile.value) {
                return;
              }
              isMouse.value = true;
            };
            const mouseLeaveLayout = () => {
              if (isMobile.value) {
                return;
              }
              setTimeout(() => {
                isMouse.value = false;
                lrcScroll();
              }, 2e3);
            };
            watch(nowIndex, () => {
              if (isSongChanging.value) return;
              debouncedLrcScroll();
            });
            watch(() => isVisible.value, () => {
              if (isVisible.value) {
                nextTick(() => {
                  lrcScroll("instant");
                });
              }
            });
            const setTextColors = background => {
              if (!background) {
                textColors.value = getTextColors();
                document.documentElement.style.setProperty("--hover-bg-color", getHoverBackgroundColor(false));
                document.documentElement.style.setProperty("--text-color-primary", textColors.value.primary);
                document.documentElement.style.setProperty("--text-color-active", textColors.value.active);
                return;
              }
              textColors.value = getTextColors(background);
              isDark.value = textColors.value.active === "#000000";
              document.documentElement.style.setProperty("--hover-bg-color", getHoverBackgroundColor(isDark.value));
              document.documentElement.style.setProperty("--text-color-primary", textColors.value.primary);
              document.documentElement.style.setProperty("--text-color-active", textColors.value.active);
              if (currentBackground.value) {
                if (animationFrame.value) {
                  cancelAnimationFrame(animationFrame.value);
                }
                const result = animateGradient(currentBackground.value, background, gradient => {
                  currentBackground.value = gradient;
                });
                if (typeof result === "number") {
                  animationFrame.value = result;
                }
              } else {
                currentBackground.value = background;
              }
            };
            const targetBackground = computed(() => {
              if (config.value.useCustomBackground && customBackgroundStyle.value) {
                if (typeof customBackgroundStyle.value === "string") {
                  return customBackgroundStyle.value;
                }
              }
              if (config.value.theme !== "default") {
                return themeMusic[config.value.theme] || props.background;
              }
              return props.background;
            });
            watch(targetBackground, newBg => {
              if (newBg) {
                setTextColors(newBg);
              }
            }, {
              immediate: true
            });
            const {
              getLrcStyle: originalLrcStyle
            } = useLyricProgress();
            const getLrcStyle = index => {
              const colors = textColors.value || getTextColors();
              const originalStyle = originalLrcStyle(index);
              if (index === nowIndex.value) {
                if (originalStyle.backgroundImage) {
                  return {
                    ...originalStyle,
                    backgroundImage: originalStyle.backgroundImage.replace(/#ffffff/g, colors.active).replace(/#ffffff8a/g, `${colors.primary}`),
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  };
                } else {
                  return {
                    color: colors.primary
                  };
                }
              }
              return {
                color: colors.primary
              };
            };
            const getWordStyle = (lineIndex, _wordIndex, word) => {
              const colors = textColors.value || getTextColors();
              if (lineIndex !== nowIndex.value) {
                return {
                  color: colors.primary,
                  transition: "color 0.3s ease",
                  // 重置背景相关属性
                  backgroundImage: "none",
                  WebkitTextFillColor: "initial"
                };
              }
              const currentTime = (nowTime.value + correctionTime.value) * 1e3;
              const wordStartTime = word.startTime;
              const wordEndTime = word.startTime + word.duration;
              if (currentTime >= wordStartTime && currentTime < wordEndTime) {
                const progress = Math.min((currentTime - wordStartTime) / word.duration, 1);
                const progressPercent = Math.round(progress * 100);
                return {
                  backgroundImage: `linear-gradient(to right, ${colors.active} 0%, ${colors.active} ${progressPercent}%, ${colors.primary} ${progressPercent}%, ${colors.primary} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: `0 0 8px ${colors.active}40`,
                  transition: "all 0.1s ease"
                };
              } else if (currentTime >= wordEndTime) {
                return {
                  color: colors.active,
                  WebkitTextFillColor: "initial",
                  transition: "none"
                };
              } else {
                return {
                  color: colors.primary,
                  WebkitTextFillColor: "initial",
                  transition: "none"
                };
              }
            };
            onBeforeUnmount(() => {
              if (animationFrame.value) {
                cancelAnimationFrame(animationFrame.value);
              }
            });
            const settingsStore = useSettingsStore();
            const {
              navigateToArtist
            } = useArtist();
            const handleArtistClick = id => {
              isVisible.value = false;
              navigateToArtist(id);
            };
            const setData = computed(() => settingsStore.setData);
            watch(() => [setData.value.fontFamily, setData.value.fontScope], ([newFont, fontScope]) => {
              const defaultFonts = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
              if (fontScope !== "lyric" && fontScope !== "global") {
                document.documentElement.style.setProperty("--current-font-family", defaultFonts);
                return;
              }
              if (newFont === "system-ui") {
                document.documentElement.style.setProperty("--current-font-family", defaultFonts);
              } else {
                const fontList = newFont.split(",").map(font => {
                  const trimmedFont = font.trim();
                  return /[\s'"()]/.test(trimmedFont) && !/^['"].*['"]$/.test(trimmedFont) ? `"${trimmedFont}"` : trimmedFont;
                });
                document.documentElement.style.setProperty("--current-font-family", `${fontList.join(", ")}, ${defaultFonts}`);
              }
            }, {
              immediate: true
            });
            const handleScroll = () => {
              if (!lrcSider.value || !config.value.hideCover) return;
              const {
                scrollTop
              } = lrcSider.value.$el;
              showStickyHeader.value = scrollTop > 100;
            };
            const playerStore = usePlayerStore();
            const closeMusicFull = () => {
              if (isFullScreen.value && document.fullscreenElement) {
                document.exitFullscreen();
              }
              isVisible.value = false;
              playerStore.setMusicFull(false);
            };
            const toggleFullScreen = async () => {
              try {
                if (!document.fullscreenElement) {
                  await document.documentElement.requestFullscreen();
                  isFullScreen.value = true;
                } else {
                  await document.exitFullscreen();
                  isFullScreen.value = false;
                }
              } catch (error) {
                console.error("全屏切换失败:", error);
              }
            };
            const handleFullScreenChange = () => {
              isFullScreen.value = !!document.fullscreenElement;
            };
            onMounted(() => {
              if (lrcSider.value?.$el) {
                lrcSider.value.$el.addEventListener("scroll", handleScroll);
              }
              document.addEventListener("fullscreenchange", handleFullScreenChange);
            });
            onBeforeUnmount(() => {
              if (animationFrame.value) {
                cancelAnimationFrame(animationFrame.value);
              }
              if (lrcSider.value?.$el) {
                lrcSider.value.$el.removeEventListener("scroll", handleScroll);
              }
              document.removeEventListener("fullscreenchange", handleFullScreenChange);
              if (document.fullscreenElement) {
                document.exitFullscreen();
              }
            });
            watch(() => config.value.fontSize, newSize => {
              document.documentElement.style.setProperty("--lyric-font-size", `${newSize}px`);
            });
            watch(() => config.value.fontWeight, newWeight => {
              document.documentElement.style.setProperty("--lyric-font-weight", newWeight.toString());
            });
            watch(() => config.value.letterSpacing, newSpacing => {
              document.documentElement.style.setProperty("--lyric-letter-spacing", `${newSpacing}px`);
            });
            watch(() => config.value.lineHeight, newLineHeight => {
              document.documentElement.style.setProperty("--lyric-line-height", newLineHeight.toString());
            });
            onMounted(() => {
              const savedConfig = localStorage.getItem("music-full-config");
              if (savedConfig) {
                config.value = {
                  ...config.value,
                  ...JSON.parse(savedConfig)
                };
              }
              if (lrcSider.value?.$el) {
                lrcSider.value.$el.addEventListener("scroll", handleScroll);
              }
            });
            watch(() => playMusic.value.id, (newId, oldId) => {
              if (newId !== oldId && newId) {
                isSongChanging.value = true;
                setTimeout(() => {
                  lrcScroll("instant", true);
                  setTimeout(() => {
                    isSongChanging.value = false;
                  }, 300);
                }, 100);
              }
            });
            __expose({
              lrcScroll,
              config
            });
            return (_ctx, _cache) => {
              const _component_n_popover = __unplugin_components_1$1;
              const _component_n_ellipsis = __unplugin_components_2$1;
              const _component_n_layout = __unplugin_components_2;
              const _component_n_drawer = __unplugin_components_6;
              return openBlock(), createBlock(_component_n_drawer, {
                show: isVisible.value,
                "onUpdate:show": _cache[0] || (_cache[0] = $event => isVisible.value = $event),
                height: "100%",
                placement: "bottom",
                style: normalizeStyle(drawerBaseStyle.value),
                to: `#layout-main`,
                "z-index": 9998
              }, {
                default: withCtx(() => [config.value.useCustomBackground && config.value.backgroundMode === "image" && config.value.backgroundImage ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "background-layer",
                  style: normalizeStyle(backgroundImageStyle.value)
                }, null, 4)) : createCommentVNode("", true), createBaseVNode("div", {
                  id: "drawer-target",
                  class: normalizeClass([[config.value.theme], "relative z-10"])
                }, [createBaseVNode("div", {
                  class: normalizeClass(["control-left absolute top-8 left-8 z-[9999]", {
                    "pure-mode": config.value.pureModeEnabled
                  }])
                }, [createBaseVNode("div", {
                  class: "control-btn",
                  onClick: closeMusicFull
                }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                  class: "ri-arrow-down-s-line"
                }, null, -1)]))])], 2), createBaseVNode("div", {
                  class: normalizeClass(["control-right absolute top-8 right-8 z-[9999]", {
                    "pure-mode": config.value.pureModeEnabled
                  }])
                }, [createVNode(_component_n_popover, {
                  trigger: "click",
                  placement: "bottom",
                  raw: ""
                }, {
                  trigger: withCtx(() => [...(_cache[2] || (_cache[2] = [createBaseVNode("div", {
                    class: "control-btn"
                  }, [createBaseVNode("i", {
                    class: "ri-settings-3-line"
                  })], -1)]))]),
                  default: withCtx(() => [createVNode(LyricSettings, {
                    ref_key: "lyricSettingsRef",
                    ref: lyricSettingsRef
                  }, null, 512)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: "control-btn",
                  onClick: toggleFullScreen
                }, [createBaseVNode("i", {
                  class: normalizeClass(isFullScreen.value ? "ri-fullscreen-exit-line" : "ri-fullscreen-line")
                }, null, 2)])], 2), createBaseVNode("div", {
                  class: "content-wrapper",
                  style: normalizeStyle({
                    width: `${config.value.contentWidth}%`
                  })
                }, [!config.value.hideCover ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["left-side", {
                    "only-cover": config.value.hideLyrics
                  }])
                }, [createBaseVNode("div", _hoisted_1$2, [createVNode(Cover3D, {
                  ref: "PicImgRef",
                  src: unref(getImgUrl)(unref(playMusic)?.picUrl, "500y500"),
                  loading: unref(playMusic)?.playLoading,
                  "max-tilt": 12,
                  scale: 1.03,
                  "shine-intensity": 0.25
                }, null, 8, ["src", "loading"])]), createBaseVNode("div", _hoisted_2$2, [createBaseVNode("div", {
                  class: "music-content-name",
                  innerHTML: unref(playMusic).name
                }, null, 8, _hoisted_3$2), createBaseVNode("div", _hoisted_4$2, [createVNode(_component_n_ellipsis, {
                  class: "text-ellipsis",
                  "line-clamp": "2",
                  tooltip: {
                    contentStyle: {
                      maxWidth: "600px"
                    },
                    zIndex: 99999
                  }
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (item, index) => {
                    return openBlock(), createElementBlock("span", {
                      key: index,
                      class: "cursor-pointer hover:text-green-500",
                      onClick: $event => handleArtistClick(item.id)
                    }, toDisplayString(item.name) + " " + toDisplayString(index < unref(artistList).length - 1 ? " / " : ""), 9, _hoisted_5$2);
                  }), 128))]),
                  _: 1
                })]), !config.value.hideMiniPlayBar ? (openBlock(), createBlock(SimplePlayBar, {
                  key: 0,
                  class: "mt-4",
                  "pure-mode-enabled": config.value.pureModeEnabled,
                  isDark: unref(textColors).theme === "dark"
                }, null, 8, ["pure-mode-enabled", "isDark"])) : createCommentVNode("", true)])], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(["right-side", {
                    center: config.value.centerLyrics,
                    hide: config.value.hideLyrics,
                    "full-width": config.value.hideCover
                  }])
                }, [createVNode(_component_n_layout, {
                  ref_key: "lrcSider",
                  ref: lrcSider,
                  class: "music-lrc",
                  "native-scrollbar": false,
                  onMouseover: mouseOverLayout,
                  onMouseleave: mouseLeaveLayout
                }, {
                  default: withCtx(() => [createBaseVNode("div", _hoisted_6$2, [config.value.hideCover ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "music-info-header",
                    style: normalizeStyle({
                      textAlign: config.value.centerLyrics ? "center" : "left"
                    })
                  }, [createBaseVNode("div", {
                    class: "music-info-name",
                    innerHTML: unref(playMusic).name
                  }, null, 8, _hoisted_7$2), createBaseVNode("div", _hoisted_8$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (item, index) => {
                    return openBlock(), createElementBlock("span", {
                      key: index,
                      class: "cursor-pointer hover:text-green-500",
                      onClick: $event => handleArtistClick(item.id)
                    }, toDisplayString(item.name) + " " + toDisplayString(index < unref(artistList).length - 1 ? " / " : ""), 9, _hoisted_9$2);
                  }), 128))])], 4)) : createCommentVNode("", true), !supportAutoScroll.value ? (openBlock(), createElementBlock("div", _hoisted_10$2, [createBaseVNode("span", null, toDisplayString(unref(t)("player.lrc.noAutoScroll")), 1)])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(lrcArray), (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      id: `music-lrc-text-${index}`,
                      key: index,
                      class: normalizeClass(["music-lrc-text", {
                        "now-text": index === unref(nowIndex),
                        "hover-text": item.text && item.startTime !== -1
                      }]),
                      onClick: $event => item.startTime !== -1 ? unref(setAudioTime)(index) : null
                    }, [item.hasWordByWord && item.words && item.words.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.words, (word, wordIndex) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: wordIndex
                      }, [createBaseVNode("span", {
                        class: "lyric-word",
                        style: normalizeStyle(getWordStyle(index, wordIndex, word))
                      }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_13$2, " ")) : createCommentVNode("", true)], 64);
                    }), 128))])) : (openBlock(), createElementBlock("span", {
                      key: 1,
                      style: normalizeStyle(getLrcStyle(index))
                    }, toDisplayString(item.text), 5)), withDirectives(createBaseVNode("div", {
                      class: "music-lrc-text-tr"
                    }, toDisplayString(item.trText), 513), [[vShow, config.value.showTranslation]])], 10, _hoisted_11$2);
                  }), 128)), !unref(lrcArray).length ? (openBlock(), createElementBlock("div", _hoisted_14$2, [createBaseVNode("span", null, toDisplayString(unref(t)("player.lrc.noLrc")), 1)])) : createCommentVNode("", true)]), !unref(isMobile) ? (openBlock(), createBlock(LyricCorrectionControl, {
                    key: 0,
                    "correction-time": unref(correctionTime),
                    onAdjust: unref(adjustCorrectionTime)
                  }, null, 8, ["correction-time", "onAdjust"])) : createCommentVNode("", true)]),
                  _: 1
                }, 512)], 2)], 4)], 2)]),
                _: 1
              }, 8, ["show", "style"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MusicFull = /* @__PURE__ */_export_sfc(_sfc_main$3, [["__scopeId", "data-v-02ac868b"]]);
        const _hoisted_1$1 = {
          class: "relative w-full max-w-lg bg-gray-900/70 backdrop-blur-2xl rounded-t-3xl overflow-hidden max-h-[85vh] flex flex-col border-t border-white/10 shadow-2xl"
        };
        const _hoisted_2$1 = {
          class: "flex items-center justify-between px-5 pb-4 flex-shrink-0"
        };
        const _hoisted_3$1 = {
          class: "text-lg font-semibold text-white"
        };
        const _hoisted_4$1 = {
          class: "flex-1 overflow-y-auto px-5 pb-6",
          style: {
            paddingBottom: `calc(24px + var(--safe-area-inset-bottom, 0px))`
          }
        };
        const _hoisted_5$1 = {
          class: "mb-6"
        };
        const _hoisted_6$1 = {
          class: "flex items-center justify-between mb-3"
        };
        const _hoisted_7$1 = {
          class: "text-sm font-medium text-white/80"
        };
        const _hoisted_8$1 = {
          class: "text-sm text-green-400 font-medium"
        };
        const _hoisted_9$1 = {
          class: "flex flex-wrap gap-2"
        };
        const _hoisted_10$1 = ["onClick"];
        const _hoisted_11$1 = {
          class: "flex items-center justify-between mb-3"
        };
        const _hoisted_12$1 = {
          class: "text-sm font-medium text-white/80"
        };
        const _hoisted_13$1 = {
          key: 0,
          class: "text-sm text-green-400 font-medium"
        };
        const _hoisted_14$1 = {
          key: 0,
          class: "space-y-3"
        };
        const _hoisted_15$1 = {
          class: "p-4 rounded-2xl bg-green-500/15 border border-green-500/30"
        };
        const _hoisted_16$1 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_17$1 = {
          class: "flex items-center gap-3"
        };
        const _hoisted_18$1 = {
          class: "text-green-400"
        };
        const _hoisted_19$1 = {
          key: 1,
          class: "space-y-4"
        };
        const _hoisted_20$1 = {
          class: "text-xs text-white/50 mb-2"
        };
        const _hoisted_21$1 = {
          class: "flex flex-wrap gap-2"
        };
        const _hoisted_22$1 = ["onClick"];
        const _hoisted_23$1 = {
          class: "flex items-center gap-2 mt-3"
        };
        const _hoisted_24$1 = {
          class: "flex items-center flex-1 bg-white/10 rounded-full overflow-hidden"
        };
        const _hoisted_25$1 = ["disabled"];
        const _hoisted_26$1 = {
          class: "text-xs text-white/50 mb-2"
        };
        const _hoisted_27$1 = {
          class: "flex flex-wrap gap-2"
        };
        const _hoisted_28$1 = ["onClick"];
        const _sfc_main$2 = /* @__PURE__ */defineComponent({
          __name: "MobilePlayerSettings",
          props: {
            visible: {
              type: Boolean
            }
          },
          emits: ["update:visible"],
          setup(__props, {
            emit: __emit
          }) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerStore();
            const {
              sleepTimer,
              playbackRate
            } = storeToRefs(playerStore);
            const emit = __emit;
            const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];
            const customMinutes = ref(30);
            const refreshTrigger = ref(0);
            let timerInterval = null;
            const hasTimerActive = computed(() => playerStore.hasSleepTimerActive);
            const timerStatusText = computed(() => {
              if (sleepTimer.value.type === "time") return t("player.sleepTimer.timeMode");
              if (sleepTimer.value.type === "songs") return t("player.sleepTimer.songsMode");
              if (sleepTimer.value.type === "end") return t("player.sleepTimer.afterPlaylist");
              return "";
            });
            const timerDisplayText = computed(() => {
              void refreshTrigger.value;
              if (sleepTimer.value.type === "time" && sleepTimer.value.endTime) {
                const remaining = Math.max(0, sleepTimer.value.endTime - Date.now());
                const totalSeconds = Math.floor(remaining / 1e3);
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor(totalSeconds % 3600 / 60);
                const seconds = Math.floor(totalSeconds % 60);
                if (hours > 0) {
                  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
                }
                return `${minutes}:${seconds.toString().padStart(2, "0")}`;
              }
              if (sleepTimer.value.type === "songs") {
                return t("player.sleepTimer.songsRemaining", {
                  count: sleepTimer.value.remainingSongs || 0
                });
              }
              if (sleepTimer.value.type === "end") {
                return t("player.sleepTimer.afterPlaylist");
              }
              return "";
            });
            const close = () => {
              emit("update:visible", false);
            };
            const setSpeed = speed => {
              playerStore.setPlaybackRate(speed);
            };
            const setTimeTimer = minutes => {
              playerStore.setSleepTimerByTime(minutes);
            };
            const setCustomTimeTimer = () => {
              const minutes = typeof customMinutes.value === "number" ? customMinutes.value : parseInt(String(customMinutes.value) || "0", 10);
              if (minutes >= 1) {
                playerStore.setSleepTimerByTime(minutes);
                customMinutes.value = 30;
              }
            };
            const increaseMinutes = () => {
              const current = Number(customMinutes.value) || 0;
              customMinutes.value = Math.min(300, current + 1);
            };
            const decreaseMinutes = () => {
              const current = Number(customMinutes.value) || 0;
              customMinutes.value = Math.max(1, current - 1);
            };
            const handleMinutesInput = e => {
              const input = e.target;
              const value = input.value.replace(/[^0-9]/g, "");
              if (value) {
                customMinutes.value = Math.min(300, Math.max(1, parseInt(value, 10)));
              } else {
                customMinutes.value = "";
              }
            };
            const setSongsTimer = songs => {
              playerStore.setSleepTimerBySongs(songs);
            };
            const setPlaylistEndTimer = () => {
              playerStore.setSleepTimerAtPlaylistEnd();
            };
            const cancelTimer = () => {
              playerStore.clearSleepTimer();
            };
            const startTimerUpdate = () => {
              if (timerInterval) return;
              timerInterval = window.setInterval(() => {
                refreshTrigger.value = Date.now();
              }, 500);
            };
            const stopTimerUpdate = () => {
              if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
              }
            };
            watch(() => [hasTimerActive.value, sleepTimer.value.type], ([active, type]) => {
              if (active && type === "time") {
                startTimerUpdate();
              } else {
                stopTimerUpdate();
              }
            }, {
              immediate: true
            });
            onMounted(() => {
              if (hasTimerActive.value && sleepTimer.value.type === "time") {
                startTimerUpdate();
              }
            });
            onUnmounted(() => {
              stopTimerUpdate();
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Teleport, {
                to: "body"
              }, [createVNode(Transition, {
                name: "settings-drawer"
              }, {
                default: withCtx(() => [__props.visible ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "fixed inset-0 z-[99999] flex items-end justify-center",
                  onClick: withModifiers(close, ["self"])
                }, [createBaseVNode("div", {
                  class: "absolute inset-0 bg-black/50",
                  onClick: close
                }), createBaseVNode("div", _hoisted_1$1, [_cache[6] || (_cache[6] = createBaseVNode("div", {
                  class: "flex justify-center pt-3 pb-2 flex-shrink-0"
                }, [createBaseVNode("div", {
                  class: "w-10 h-1 rounded-full bg-white/30"
                })], -1)), createBaseVNode("div", _hoisted_2$1, [createBaseVNode("h2", _hoisted_3$1, toDisplayString(unref(t)("player.settings.title")), 1), createBaseVNode("button", {
                  onClick: close,
                  class: "w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:bg-white/10"
                }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                  class: "ri-close-line text-xl"
                }, null, -1)]))])]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6$1, [createBaseVNode("span", _hoisted_7$1, toDisplayString(unref(t)("player.settings.playbackSpeed")), 1), createBaseVNode("span", _hoisted_8$1, toDisplayString(unref(playbackRate)) + "x", 1)]), createBaseVNode("div", _hoisted_9$1, [(openBlock(), createElementBlock(Fragment, null, renderList(speedOptions, option => {
                  return createBaseVNode("button", {
                    key: option,
                    onClick: $event => setSpeed(option),
                    class: normalizeClass(["px-4 py-2 rounded-full text-sm font-medium transition-colors", unref(playbackRate) === option ? "bg-green-500 text-white" : "bg-white/10 text-white/70 hover:bg-white/15"])
                  }, toDisplayString(option) + "x ", 11, _hoisted_10$1);
                }), 64))])]), _cache[5] || (_cache[5] = createBaseVNode("div", {
                  class: "h-px bg-white/10 my-5"
                }, null, -1)), createBaseVNode("div", null, [createBaseVNode("div", _hoisted_11$1, [createBaseVNode("span", _hoisted_12$1, toDisplayString(unref(t)("player.sleepTimer.title")), 1), hasTimerActive.value ? (openBlock(), createElementBlock("span", _hoisted_13$1, toDisplayString(timerStatusText.value), 1)) : createCommentVNode("", true)]), hasTimerActive.value ? (openBlock(), createElementBlock("div", _hoisted_14$1, [createBaseVNode("div", _hoisted_15$1, [createBaseVNode("div", _hoisted_16$1, [createBaseVNode("div", _hoisted_17$1, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                  class: "ri-timer-line text-green-400 text-xl"
                }, null, -1)), createBaseVNode("span", _hoisted_18$1, toDisplayString(timerDisplayText.value), 1)]), createBaseVNode("button", {
                  onClick: cancelTimer,
                  class: "px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-400 hover:bg-red-500/30"
                }, toDisplayString(unref(t)("player.sleepTimer.cancel")), 1)])])])) : (openBlock(), createElementBlock("div", _hoisted_19$1, [createBaseVNode("div", null, [createBaseVNode("p", _hoisted_20$1, toDisplayString(unref(t)("player.sleepTimer.timeMode")), 1), createBaseVNode("div", _hoisted_21$1, [(openBlock(), createElementBlock(Fragment, null, renderList([15, 30, 60, 90], minutes => {
                  return createBaseVNode("button", {
                    key: minutes,
                    onClick: $event => setTimeTimer(minutes),
                    class: "px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/70 hover:bg-white/15"
                  }, toDisplayString(minutes) + toDisplayString(unref(t)("player.sleepTimer.minutes")), 9, _hoisted_22$1);
                }), 64))]), createBaseVNode("div", _hoisted_23$1, [createBaseVNode("div", _hoisted_24$1, [createBaseVNode("button", {
                  onClick: decreaseMinutes,
                  class: "w-10 h-10 flex items-center justify-center text-white/70 hover:bg-white/10 active:bg-white/20"
                }, [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                  class: "ri-subtract-line text-lg"
                }, null, -1)]))]), withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => customMinutes.value = $event),
                  type: "text",
                  inputmode: "numeric",
                  pattern: "[0-9]*",
                  placeholder: "分钟",
                  class: "flex-1 px-2 py-2 text-sm text-center bg-transparent text-white/80 border-0 outline-none placeholder-white/40",
                  onInput: handleMinutesInput
                }, null, 544), [[vModelText, customMinutes.value]]), createBaseVNode("button", {
                  onClick: increaseMinutes,
                  class: "w-10 h-10 flex items-center justify-center text-white/70 hover:bg-white/10 active:bg-white/20"
                }, [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                  class: "ri-add-line text-lg"
                }, null, -1)]))])]), createBaseVNode("button", {
                  onClick: setCustomTimeTimer,
                  disabled: !customMinutes.value || Number(customMinutes.value) < 1,
                  class: "px-4 py-2 rounded-full text-sm font-medium bg-green-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                }, toDisplayString(unref(t)("player.sleepTimer.set")), 9, _hoisted_25$1)])]), createBaseVNode("div", null, [createBaseVNode("p", _hoisted_26$1, toDisplayString(unref(t)("player.sleepTimer.songsMode")), 1), createBaseVNode("div", _hoisted_27$1, [(openBlock(), createElementBlock(Fragment, null, renderList([1, 3, 5, 10], songs => {
                  return createBaseVNode("button", {
                    key: songs,
                    onClick: $event => setSongsTimer(songs),
                    class: "px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/70 hover:bg-white/15"
                  }, toDisplayString(songs) + toDisplayString(unref(t)("player.sleepTimer.songs")), 9, _hoisted_28$1);
                }), 64))])]), createBaseVNode("button", {
                  onClick: setPlaylistEndTimer,
                  class: "w-full py-3 rounded-2xl text-sm font-medium bg-white/10 text-white/70 hover:bg-white/15"
                }, toDisplayString(unref(t)("player.sleepTimer.playlistEnd")), 1)]))])])])])) : createCommentVNode("", true)]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MobilePlayerSettings = /* @__PURE__ */_export_sfc(_sfc_main$2, [["__scopeId", "data-v-e3bb1da6"]]);
        const _hoisted_1 = {
          key: 0,
          class: "loading-overlay"
        };
        const _hoisted_2 = {
          class: "font-medium tabular-nums"
        };
        const _hoisted_3 = {
          class: "fullscreen-header"
        };
        const _hoisted_4 = ["innerHTML"];
        const _hoisted_5 = {
          class: "artist-name"
        };
        const _hoisted_6 = {
          key: 0,
          class: "lyric-line no-scroll-tip"
        };
        const _hoisted_7 = ["id", "onClick"];
        const _hoisted_8 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_9 = {
          key: 0,
          class: "lyric-word"
        };
        const _hoisted_10 = {
          key: 2,
          class: "translation"
        };
        const _hoisted_11 = {
          key: 0,
          class: "ios-layout-container"
        };
        const _hoisted_12 = {
          class: "img-wrapper"
        };
        const _hoisted_13 = {
          class: "px-2 flex-1 flex flex-col justify-around w-[85%]"
        };
        const _hoisted_14 = {
          class: "song-info"
        };
        const _hoisted_15 = {
          class: "song-title-container"
        };
        const _hoisted_16 = ["innerHTML"];
        const _hoisted_17 = {
          class: "song-artist"
        };
        const _hoisted_18 = ["onClick"];
        const _hoisted_19 = {
          key: 0,
          class: "lyrics-wrapper"
        };
        const _hoisted_20 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_21 = {
          key: 0
        };
        const _hoisted_22 = {
          key: 1
        };
        const _hoisted_23 = {
          key: 1,
          class: "no-lyrics"
        };
        const _hoisted_24 = {
          key: 1,
          class: "landscape-layout"
        };
        const _hoisted_25 = {
          class: "landscape-left-section"
        };
        const _hoisted_26 = {
          class: "img-wrapper"
        };
        const _hoisted_27 = {
          class: "landscape-progress-container"
        };
        const _hoisted_28 = {
          class: "time-info"
        };
        const _hoisted_29 = {
          class: "current-time"
        };
        const _hoisted_30 = {
          class: "total-time"
        };
        const _hoisted_31 = {
          class: "progress-track"
        };
        const _hoisted_32 = {
          class: "landscape-lyrics-section"
        };
        const _hoisted_33 = {
          class: "landscape-song-info"
        };
        const _hoisted_34 = {
          class: "flex flex-col flex-1"
        };
        const _hoisted_35 = ["innerHTML"];
        const _hoisted_36 = {
          class: "song-artist"
        };
        const _hoisted_37 = ["onClick"];
        const _hoisted_38 = {
          key: 0,
          class: "lyric-line no-scroll-tip"
        };
        const _hoisted_39 = ["id", "onClick"];
        const _hoisted_40 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_41 = {
          key: 0,
          class: "lyric-word"
        };
        const _hoisted_42 = {
          key: 2,
          class: "translation"
        };
        const _hoisted_43 = {
          class: "landscape-main-controls"
        };
        const _hoisted_44 = {
          class: "progress-container"
        };
        const _hoisted_45 = {
          class: "time-info"
        };
        const _hoisted_46 = {
          class: "current-time"
        };
        const _hoisted_47 = {
          class: "total-time"
        };
        const _hoisted_48 = {
          class: "progress-track"
        };
        const _hoisted_49 = {
          class: "control-buttons"
        };
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "MusicFullMobile",
          props: {
            modelValue: {
              type: Boolean,
              default: false
            },
            background: {
              type: String,
              default: ""
            }
          },
          emits: ["update:modelValue"],
          setup(__props, {
            emit: __emit
          }) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerStore();
            const play = computed(() => playerStore.isPlay);
            const playIcon = computed(() => play.value ? "ri-pause-fill" : "ri-play-fill");
            const showPlayerSettings = ref(false);
            const sleepTimerRefresh = ref(0);
            let sleepTimerInterval = null;
            const hasSleepTimerActive = computed(() => playerStore.hasSleepTimerActive);
            const sleepTimerDisplayText = computed(() => {
              void sleepTimerRefresh.value;
              const timer = playerStore.sleepTimer;
              if (timer.type === "time" && timer.endTime) {
                const remaining = Math.max(0, timer.endTime - Date.now());
                const totalSeconds = Math.floor(remaining / 1e3);
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                return `${minutes}:${seconds.toString().padStart(2, "0")}`;
              }
              if (timer.type === "songs" && timer.remainingSongs) {
                return `${timer.remainingSongs}首`;
              }
              if (timer.type === "end") {
                return "列表结束";
              }
              return "";
            });
            watch(hasSleepTimerActive, active => {
              if (active && playerStore.sleepTimer.type === "time") {
                if (!sleepTimerInterval) {
                  sleepTimerInterval = setInterval(() => {
                    sleepTimerRefresh.value = Date.now();
                  }, 1e3);
                }
              } else {
                if (sleepTimerInterval) {
                  clearInterval(sleepTimerInterval);
                  sleepTimerInterval = null;
                }
              }
            }, {
              immediate: true
            });
            const {
              playMode,
              playModeIcon,
              playModeText,
              togglePlayMode: togglePlayModeBase
            } = usePlayMode();
            const showPlaylist = () => {
              playerStore.setPlayListDrawerVisible(true);
            };
            const isFavorite = computed(() => {
              return playerStore.favoriteList.includes(playMusic.value.id);
            });
            const toggleFavorite = () => {
              if (isFavorite.value) {
                playerStore.removeFromFavorite(playMusic.value.id);
              } else {
                playerStore.addToFavorite(playMusic.value.id);
              }
            };
            const showFullLyrics = ref(false);
            const isAutoScrollEnabled = ref(true);
            const lyricsScrollerRef = ref(null);
            const isTouchScrolling = ref(false);
            const touchStartY = ref(0);
            const lastScrollTop = ref(0);
            const autoScrollTimer = ref(null);
            const isSongChanging = ref(false);
            const {
              width,
              height
            } = useWindowSize();
            const isLandscape = computed(() => width.value > height.value);
            const landscapeLyricsRef = ref(null);
            watch(isLandscape, newVal => {
              if (newVal) {
                nextTick(() => {
                  safeAreaService.hideStatusBar();
                  setTimeout(() => {
                    scrollToCurrentLyric(true, landscapeLyricsRef.value);
                  }, 300);
                });
              } else {
                safeAreaService.showStatusBar();
              }
            });
            const fullLyricUpdate = () => {
              if (showFullLyrics.value) {
                setDialogState(true, () => {
                  showFullLyrics.value = false;
                });
              } else {
                setDialogState(false);
              }
            };
            const showFullLyricScreen = () => {
              showFullLyrics.value = true;
              fullLyricUpdate();
              nextTick(() => {
                scrollToCurrentLyric(true);
                setTimeout(() => {
                  scrollToCurrentLyric(true);
                }, 200);
                setTimeout(() => {
                  scrollToCurrentLyric(true);
                }, 500);
              });
            };
            const supportAutoScroll = computed(() => {
              return lrcArray.value.length > 0 && lrcArray.value[0].startTime !== -1;
            });
            const closeFullLyrics = () => {
              showFullLyrics.value = false;
              if (autoScrollTimer.value) {
                clearTimeout(autoScrollTimer.value);
                autoScrollTimer.value = null;
              }
              fullLyricUpdate();
            };
            const scrollToCurrentLyric = (immediate = false, customScrollerRef) => {
              try {
                const scrollerRef = customScrollerRef || lyricsScrollerRef.value;
                if (!scrollerRef) {
                  console.log("歌词容器引用不存在");
                  return;
                }
                if (!supportAutoScroll.value) {
                  console.log("歌词不支持自动滚动");
                  return;
                }
                if (isTouchScrolling.value && !immediate) {
                  return;
                }
                const prefix = customScrollerRef ? "landscape-" : "";
                const activeEl = document.getElementById(`${prefix}lyric-line-${nowIndex.value}`);
                if (!activeEl) {
                  console.log(`找不到当前歌词元素: ${prefix}lyric-line-${nowIndex.value}`);
                  return;
                }
                const containerRect = scrollerRef.getBoundingClientRect();
                const lineRect = activeEl.getBoundingClientRect();
                const scrollTop = scrollerRef.scrollTop + (lineRect.top - containerRect.top) - containerRect.height / 2 + lineRect.height / 2;
                console.log(`滚动到歌词 #${nowIndex.value}, 位置: ${scrollTop}px`);
                scrollerRef.scrollTo({
                  top: scrollTop,
                  behavior: immediate ? "auto" : "smooth"
                });
              } catch (err) {
                console.error("滚动歌词出错:", err);
              }
            };
            watch(nowIndex, (newIndex, oldIndex) => {
              console.log(`歌词索引变化: ${oldIndex} -> ${newIndex}`);
              if (isSongChanging.value) return;
              if (showFullLyrics.value) {
                nextTick(() => {
                  scrollToCurrentLyric(false);
                });
              } else if (isLandscape.value) {
                nextTick(() => {
                  scrollToCurrentLyric(false, landscapeLyricsRef.value);
                });
              }
            });
            watch(showFullLyrics, newVal => {
              if (newVal) {
                nextTick(() => {
                  setTimeout(() => {
                    scrollToCurrentLyric(true);
                  }, 300);
                });
              }
            });
            watch(nowTime, () => {
              if (!isThumbDragging.value && !isTouchScrolling.value) {
                if (showFullLyrics.value) {
                  scrollToCurrentLyric(false);
                } else if (isLandscape.value) {
                  scrollToCurrentLyric(false, landscapeLyricsRef.value);
                }
              }
            });
            const handleScroll = () => {
              if (!isTouchScrolling.value) return;
              isAutoScrollEnabled.value = false;
              if (autoScrollTimer.value) {
                clearTimeout(autoScrollTimer.value);
              }
              autoScrollTimer.value = window.setTimeout(() => {
                isAutoScrollEnabled.value = true;
                isTouchScrolling.value = false;
                if (showFullLyrics.value) {
                  scrollToCurrentLyric(false);
                } else if (isLandscape.value) {
                  scrollToCurrentLyric(false, landscapeLyricsRef.value);
                }
              }, 3e3);
            };
            const handleTouchStart = e => {
              touchStartY.value = e.touches[0].clientY;
              const scrollerRef = showFullLyrics.value ? lyricsScrollerRef.value : isLandscape.value ? landscapeLyricsRef.value : lyricsScrollerRef.value;
              lastScrollTop.value = scrollerRef?.scrollTop || 0;
              isTouchScrolling.value = true;
              isAutoScrollEnabled.value = false;
              if (autoScrollTimer.value) {
                clearTimeout(autoScrollTimer.value);
                autoScrollTimer.value = null;
              }
            };
            const handleTouchMove = () => {
              if (!isTouchScrolling.value) return;
            };
            const handleTouchEnd = () => {
              if (autoScrollTimer.value) {
                clearTimeout(autoScrollTimer.value);
              }
              autoScrollTimer.value = window.setTimeout(() => {
                isAutoScrollEnabled.value = true;
                isTouchScrolling.value = false;
                if (showFullLyrics.value) {
                  scrollToCurrentLyric(true);
                } else if (isLandscape.value) {
                  scrollToCurrentLyric(true, landscapeLyricsRef.value);
                }
              }, 3e3);
            };
            const cycleCoverStyle = () => {
              const styles = ["record", "square", "full"];
              const currentIdx = styles.indexOf(config.value.mobileCoverStyle);
              const nextIdx = (currentIdx + 1) % styles.length;
              config.value.mobileCoverStyle = styles[nextIdx];
              const container = document.querySelector(".cover-container");
              if (container) {
                container.classList.add("style-changing");
                setTimeout(() => {
                  container.classList.remove("style-changing");
                }, 500);
              }
            };
            const isThumbDragging = ref(false);
            const progressContainerWidth = ref(0);
            const isMouseDragging = ref(false);
            const handleProgressBarClick = e => {
              if (!sound.value) return;
              e.stopPropagation();
              const progressBar = e.currentTarget;
              const rect = progressBar.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              progressContainerWidth.value = rect.width;
              const percentage = offsetX / rect.width;
              const newTime = Math.max(0, Math.min(percentage * allTime.value, allTime.value));
              console.log(`进度条点击: ${percentage.toFixed(2)}, 新时间: ${newTime.toFixed(2)}`);
              sound.value.seek(newTime);
              nowTime.value = newTime;
            };
            const handleMouseDown = e => {
              if (e.button !== 0) return;
              e.preventDefault();
              e.stopPropagation();
              isMouseDragging.value = true;
              const progressBar = e.currentTarget.closest(".apple-style-progress");
              if (progressBar) {
                const rect = progressBar.getBoundingClientRect();
                const offsetX = e.clientX - rect.left;
                const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
                const newTime = percentage * allTime.value;
                nowTime.value = newTime;
                console.log(`鼠标按下，位置: ${percentage.toFixed(2)}, 时间: ${newTime.toFixed(2)}秒`);
              }
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            };
            const handleMouseMove = e => {
              if (!isMouseDragging.value || !sound.value) return;
              e.preventDefault();
              const progressBar = isLandscape.value ? document.querySelector(".landscape-left-section .apple-style-progress") : document.querySelector(".unified-controls .apple-style-progress");
              if (!progressBar) return;
              const rect = progressBar.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
              const newTime = percentage * allTime.value;
              nowTime.value = newTime;
              console.log(`鼠标移动，位置: ${percentage.toFixed(2)}, 时间: ${newTime.toFixed(2)}秒`);
            };
            const handleMouseUp = e => {
              if (!isMouseDragging.value || !sound.value) return;
              e.preventDefault();
              sound.value.seek(nowTime.value);
              console.log(`鼠标释放，跳转到: ${nowTime.value.toFixed(2)}秒`);
              isMouseDragging.value = false;
              document.removeEventListener("mousemove", handleMouseMove);
              document.removeEventListener("mouseup", handleMouseUp);
            };
            const handleThumbTouchStart = e => {
              e.preventDefault();
              e.stopPropagation();
              isThumbDragging.value = true;
              const target = e.currentTarget;
              const progressBar = target.parentElement?.parentElement;
              if (progressBar) {
                progressContainerWidth.value = progressBar.getBoundingClientRect().width;
                console.log(`进度条宽度: ${progressContainerWidth.value}px`);
              }
            };
            const handleThumbTouchMove = e => {
              if (!isThumbDragging.value || !sound.value) return;
              e.preventDefault();
              const touch = e.touches[0];
              const target = e.currentTarget;
              const progressBar = target.parentElement?.parentElement;
              const rect = progressBar.getBoundingClientRect();
              const offsetX = touch.clientX - rect.left;
              const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
              const newTime = percentage * allTime.value;
              nowTime.value = newTime;
              console.log(`thumb拖动: ${percentage.toFixed(2)}, 时间: ${newTime.toFixed(2)}`);
            };
            const handleThumbTouchEnd = e => {
              if (!isThumbDragging.value || !sound.value) return;
              e.preventDefault();
              e.stopPropagation();
              console.log(`拖动结束，跳转到: ${nowTime.value.toFixed(2)}秒`);
              sound.value.seek(nowTime.value);
              isThumbDragging.value = false;
            };
            const currentBackground = ref("");
            const animationFrame = ref(null);
            const isDark = ref(false);
            const config = ref({
              ...DEFAULT_LYRIC_CONFIG
            });
            const visibleLyrics = computed(() => {
              const centerIndex = nowIndex.value;
              const numLines = 3;
              const halfLines = Math.floor(numLines / 2);
              let startIdx = centerIndex - halfLines;
              let endIdx = centerIndex + halfLines;
              if (startIdx < 0) {
                startIdx = 0;
                endIdx = Math.min(numLines - 1, lrcArray.value.length - 1);
              }
              if (endIdx >= lrcArray.value.length) {
                endIdx = lrcArray.value.length - 1;
                startIdx = Math.max(0, endIdx - numLines + 1);
              }
              return lrcArray.value.slice(startIdx, endIdx + 1).map((item, idx) => ({
                ...item,
                originalIndex: startIdx + idx
              }));
            });
            const props = __props;
            const themeMusic = {
              light: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
              dark: "linear-gradient(to bottom, #1a1a1a, #000000)"
            };
            const emit = __emit;
            const isVisible = computed({
              get: () => props.modelValue,
              set: value => emit("update:modelValue", value)
            });
            const setTextColors = background => {
              if (!background) {
                textColors.value = getTextColors();
                document.documentElement.style.setProperty("--hover-bg-color", getHoverBackgroundColor(false));
                document.documentElement.style.setProperty("--text-color-primary", textColors.value.primary);
                document.documentElement.style.setProperty("--text-color-active", textColors.value.active);
                document.documentElement.style.setProperty("--bg-color", "rgba(25, 25, 25, 1)");
                return;
              }
              textColors.value = getTextColors(background);
              isDark.value = textColors.value.active === "#000000";
              safeAreaService.setStatusBarStyle(!isDark.value);
              document.documentElement.style.setProperty("--hover-bg-color", getHoverBackgroundColor(isDark.value));
              document.documentElement.style.setProperty("--text-color-primary", textColors.value.primary);
              document.documentElement.style.setProperty("--text-color-active", textColors.value.active);
              let bgColor = playerStore.playMusic.primaryColor || "rgba(25, 25, 25, 1)";
              document.documentElement.style.setProperty("--bg-color", bgColor);
              if (currentBackground.value) {
                if (animationFrame.value) {
                  cancelAnimationFrame(animationFrame.value);
                }
                const result = animateGradient(currentBackground.value, background, gradient => {
                  currentBackground.value = gradient;
                });
                if (typeof result === "number") {
                  animationFrame.value = result;
                }
              } else {
                currentBackground.value = background;
              }
            };
            const targetBackground = computed(() => {
              if (config.value.theme !== "default") {
                return themeMusic[config.value.theme] || props.background;
              }
              return props.background;
            });
            watch(targetBackground, newBg => {
              if (newBg) {
                setTextColors(newBg);
              }
            }, {
              immediate: true
            });
            onBeforeUnmount(() => {
              if (animationFrame.value) {
                cancelAnimationFrame(animationFrame.value);
              }
              if (autoScrollTimer.value) {
                clearTimeout(autoScrollTimer.value);
              }
              document.removeEventListener("mousemove", handleMouseMove);
              document.removeEventListener("mouseup", handleMouseUp);
            });
            const {
              navigateToArtist
            } = useArtist();
            const handleArtistClick = id => {
              isVisible.value = false;
              navigateToArtist(id);
            };
            const togglePlay = () => {
              try {
                playerStore.setPlay(playMusic.value);
              } catch (error) {
                console.error("播放出错:", error);
              }
            };
            const nextSong = () => {
              playerStore.nextPlay();
            };
            const prevSong = () => {
              playerStore.prevPlay();
            };
            const togglePlayMode = () => {
              togglePlayModeBase();
              showBottomToast(playModeText.value);
            };
            const closeMusicFull = () => {
              isVisible.value = false;
              playerStore.setMusicFull(false);
            };
            watch(() => playMusic.value.id, (newId, oldId) => {
              if (newId !== oldId && newId) {
                isSongChanging.value = true;
                setTimeout(() => {
                  if (showFullLyrics.value && lyricsScrollerRef.value) {
                    lyricsScrollerRef.value.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    });
                  } else if (isLandscape.value && landscapeLyricsRef.value) {
                    landscapeLyricsRef.value.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    });
                  }
                  setTimeout(() => {
                    isSongChanging.value = false;
                  }, 300);
                }, 100);
              }
            });
            onMounted(() => {
              const savedConfig = localStorage.getItem("music-full-config");
              if (savedConfig) {
                config.value = {
                  ...config.value,
                  ...JSON.parse(savedConfig)
                };
              }
              isAutoScrollEnabled.value = true;
              isTouchScrolling.value = false;
              nextTick(() => {
                if (isVisible.value) {
                  if (isLandscape.value) {
                    setTimeout(() => {
                      scrollToCurrentLyric(true, landscapeLyricsRef.value);
                    }, 500);
                  } else if (showFullLyrics.value) {
                    setTimeout(() => {
                      scrollToCurrentLyric(true);
                    }, 500);
                  }
                }
              });
            });
            watch(isVisible, newVal => {
              if (newVal) {
                if (targetBackground.value) {
                  setTextColors(targetBackground.value);
                } else {
                  setTextColors(props.background);
                }
                setDialogState(true, () => {
                  closeMusicFull();
                });
              } else {
                showFullLyrics.value = false;
                if (autoScrollTimer.value) {
                  clearTimeout(autoScrollTimer.value);
                  autoScrollTimer.value = null;
                }
                setDialogState(false);
              }
            });
            const {
              getLrcStyle: originalLrcStyle
            } = useLyricProgress();
            const getLrcStyle = index => {
              const colors = textColors.value || getTextColors;
              const originalStyle = originalLrcStyle(index);
              if (index === nowIndex.value) {
                if (originalStyle.backgroundImage) {
                  return {
                    ...originalStyle,
                    backgroundImage: originalStyle.backgroundImage.replace(/#ffffff/g, colors.active).replace(/#ffffff8a/g, `${colors.primary}`),
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  };
                }
                return {
                  color: colors.active
                };
              }
              return {
                color: colors.primary
              };
            };
            const getWordStyle = (lineIndex, _wordIndex, word) => {
              const colors = textColors.value || getTextColors();
              if (lineIndex !== nowIndex.value) {
                return {
                  color: colors.primary,
                  transition: "color 0.3s ease",
                  // 重置背景相关属性
                  backgroundImage: "none",
                  WebkitTextFillColor: "initial"
                };
              }
              const currentTime = (nowTime.value + correctionTime.value) * 1e3;
              const wordStartTime = word.startTime;
              const wordEndTime = word.startTime + word.duration;
              if (currentTime >= wordStartTime && currentTime < wordEndTime) {
                const progress = Math.min((currentTime - wordStartTime) / word.duration, 1);
                const progressPercent = Math.round(progress * 100);
                return {
                  backgroundImage: `linear-gradient(to right, ${colors.active} 0%, ${colors.active} ${progressPercent}%, ${colors.primary} ${progressPercent}%, ${colors.primary} 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: `0 0 8px ${colors.active}40`,
                  transition: "all 0.1s ease"
                };
              } else if (currentTime >= wordEndTime) {
                return {
                  color: colors.active,
                  WebkitTextFillColor: "initial",
                  transition: "none"
                };
              } else {
                return {
                  color: colors.primary,
                  WebkitTextFillColor: "initial",
                  transition: "none"
                };
              }
            };
            return (_ctx, _cache) => {
              const _component_n_image = __unplugin_components_1;
              const _component_n_drawer = __unplugin_components_6;
              return openBlock(), createBlock(_component_n_drawer, {
                show: isVisible.value,
                "onUpdate:show": _cache[3] || (_cache[3] = $event => isVisible.value = $event),
                height: "100%",
                placement: "bottom",
                style: normalizeStyle({
                  background: unref(playerStore).playMusic.primaryColor || __props.background
                }),
                to: `#layout-main`,
                "z-index": 9998
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  id: "mobile-drawer-target",
                  class: normalizeClass([config.value.theme, `cover-style-${config.value.mobileCoverStyle}`, {
                    "is-landscape": isLandscape.value
                  }, {
                    "is-dark": isDark.value
                  }])
                }, [unref(playMusic)?.playLoading ? (openBlock(), createElementBlock("div", _hoisted_1, [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                  class: "ri-loader-4-line loading-icon"
                }, null, -1)]))])) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(["control-btn absolute left-5", {
                    "pure-mode": config.value.pureModeEnabled
                  }]),
                  onClick: closeMusicFull
                }, [...(_cache[5] || (_cache[5] = [createBaseVNode("i", {
                  class: "ri-arrow-down-s-line"
                }, null, -1)]))], 2), createBaseVNode("div", {
                  class: normalizeClass(["control-btn absolute right-5 flex items-center gap-2", [{
                    "pure-mode": config.value.pureModeEnabled
                  }, hasSleepTimerActive.value ? "!w-auto !px-2" : ""]])
                }, [hasSleepTimerActive.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs text-white/90",
                  onClick: _cache[0] || (_cache[0] = $event => showPlayerSettings.value = true)
                }, [_cache[6] || (_cache[6] = createBaseVNode("i", {
                  class: "ri-timer-line text-green-400"
                }, null, -1)), createBaseVNode("span", _hoisted_2, toDisplayString(sleepTimerDisplayText.value), 1)])) : createCommentVNode("", true), createBaseVNode("div", {
                  onClick: _cache[1] || (_cache[1] = $event => showPlayerSettings.value = true)
                }, [...(_cache[7] || (_cache[7] = [createBaseVNode("i", {
                  class: "ri-more-2-fill"
                }, null, -1)]))])], 2), createVNode(MobilePlayerSettings, {
                  visible: showPlayerSettings.value,
                  "onUpdate:visible": _cache[2] || (_cache[2] = $event => showPlayerSettings.value = $event)
                }, null, 8, ["visible"]), createVNode(Transition, {
                  name: "fade"
                }, {
                  default: withCtx(() => [showFullLyrics.value && !isLandscape.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["fullscreen-lyrics", config.value.theme])
                  }, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", {
                    class: "song-title",
                    innerHTML: unref(playMusic).name
                  }, null, 8, _hoisted_4), createBaseVNode("div", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (item, index) => {
                    return openBlock(), createElementBlock("span", {
                      key: index
                    }, toDisplayString(item.name) + toDisplayString(index < unref(artistList).length - 1 ? " / " : ""), 1);
                  }), 128))])]), createBaseVNode("div", {
                    ref_key: "lyricsScrollerRef",
                    ref: lyricsScrollerRef,
                    class: "lyrics-scroller",
                    onTouchstart: handleTouchStart,
                    onTouchmove: handleTouchMove,
                    onTouchend: handleTouchEnd,
                    onScroll: handleScroll
                  }, [_cache[8] || (_cache[8] = createBaseVNode("div", {
                    class: "lyrics-padding-top"
                  }, null, -1)), !supportAutoScroll.value ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("span", null, toDisplayString(unref(t)("player.lrc.noAutoScroll")), 1)])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(lrcArray), (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      id: `lyric-line-${index}`,
                      class: normalizeClass(["lyric-line", {
                        "now-text": index === unref(nowIndex),
                        "hover-text": item.text && item.startTime !== -1
                      }]),
                      onClick: $event => item.startTime !== -1 ? unref(setAudioTime)(index) : null
                    }, [item.hasWordByWord && item.words && item.words.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.words, (word, wordIndex) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: wordIndex
                      }, [createBaseVNode("span", {
                        class: "lyric-word",
                        style: normalizeStyle(getWordStyle(index, wordIndex, word))
                      }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_9, " ")) : createCommentVNode("", true)], 64);
                    }), 128))])) : (openBlock(), createElementBlock("span", {
                      key: 1,
                      style: normalizeStyle(getLrcStyle(index))
                    }, toDisplayString(item.text), 5)), config.value.showTranslation && item.trText ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(item.trText), 1)) : createCommentVNode("", true)], 10, _hoisted_7);
                  }), 128)), _cache[9] || (_cache[9] = createBaseVNode("div", {
                    class: "lyrics-padding-bottom"
                  }, null, -1))], 544)], 2)) : createCommentVNode("", true)]),
                  _: 1
                }), createVNode(Transition, {
                  name: "fade"
                }, {
                  default: withCtx(() => [!showFullLyrics.value && !isLandscape.value ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("div", {
                    class: normalizeClass(["cover-container", {
                      "record-style": config.value.mobileCoverStyle === "record",
                      "square-style": config.value.mobileCoverStyle === "square",
                      "full-style": config.value.mobileCoverStyle === "full",
                      paused: !play.value
                    }]),
                    onClick: cycleCoverStyle
                  }, [createBaseVNode("div", _hoisted_12, [createVNode(_component_n_image, {
                    ref: "PicImgRef",
                    src: unref(getImgUrl)(unref(playMusic)?.picUrl, "500y500"),
                    lazy: "",
                    "preview-disabled": "",
                    class: normalizeClass(["cover-image", {
                      "full-blend": config.value.mobileCoverStyle === "full"
                    }])
                  }, null, 8, ["src", "class"])])], 2), createBaseVNode("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [createBaseVNode("h1", {
                    class: "song-title",
                    innerHTML: unref(playMusic).name
                  }, null, 8, _hoisted_16)]), createBaseVNode("p", _hoisted_17, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (item, index) => {
                    return openBlock(), createElementBlock("span", {
                      key: index,
                      class: "artist-name",
                      onClick: $event => handleArtistClick(item.id)
                    }, toDisplayString(item.name) + " " + toDisplayString(index < unref(artistList).length - 1 ? " / " : ""), 9, _hoisted_18);
                  }), 128))]), createBaseVNode("div", {
                    class: "favorite-icon",
                    onClick: toggleFavorite
                  }, [createBaseVNode("i", {
                    class: normalizeClass(["ri-heart-3-fill", {
                      favorite: isFavorite.value
                    }])
                  }, null, 2)])]), !config.value.hideLyrics ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "lyrics-container",
                    onClick: showFullLyricScreen
                  }, [unref(lrcArray).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleLyrics.value, (line, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: idx,
                      class: "lyric-line"
                    }, [line.hasWordByWord && line.words && line.words.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [(openBlock(true), createElementBlock(Fragment, null, renderList(line.words, (word, wordIndex) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: wordIndex
                      }, [createBaseVNode("span", {
                        class: "lyric-word",
                        style: normalizeStyle(getWordStyle(line.originalIndex, wordIndex, word))
                      }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_21, " ")) : createCommentVNode("", true)], 64);
                    }), 128))])) : (openBlock(), createElementBlock("span", _hoisted_22, toDisplayString(line.text), 1))]);
                  }), 128))])) : (openBlock(), createElementBlock("div", _hoisted_23, toDisplayString(unref(t)("player.lrc.noLrc")), 1))])) : createCommentVNode("", true)])])) : createCommentVNode("", true)]),
                  _: 1
                }), isLandscape.value ? (openBlock(), createElementBlock("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [createBaseVNode("div", {
                  class: normalizeClass(["landscape-cover-container cover-container", {
                    "record-style": config.value.mobileCoverStyle === "record",
                    "square-style": config.value.mobileCoverStyle === "square",
                    "full-style": config.value.mobileCoverStyle === "full",
                    paused: !play.value
                  }]),
                  onClick: cycleCoverStyle
                }, [createBaseVNode("div", _hoisted_26, [createVNode(_component_n_image, {
                  src: unref(getImgUrl)(unref(playMusic)?.picUrl, "500y500"),
                  lazy: "",
                  "preview-disabled": "",
                  class: normalizeClass(["cover-image", {
                    "full-blend": config.value.mobileCoverStyle === "full"
                  }])
                }, null, 8, ["src", "class"])])], 2), createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [createBaseVNode("span", _hoisted_29, toDisplayString(unref(secondToMinute)(unref(nowTime))), 1), createBaseVNode("span", _hoisted_30, toDisplayString(unref(secondToMinute)(unref(allTime))), 1)]), createBaseVNode("div", {
                  class: "apple-style-progress",
                  onClick: handleProgressBarClick,
                  onMousedown: handleMouseDown
                }, [createBaseVNode("div", _hoisted_31, [createBaseVNode("div", {
                  class: "progress-fill",
                  style: normalizeStyle({
                    width: `${unref(nowTime) / Math.max(1, unref(allTime)) * 100}%`
                  })
                }, null, 4), createBaseVNode("div", {
                  class: normalizeClass(["progress-thumb", {
                    active: isThumbDragging.value || isMouseDragging.value
                  }]),
                  style: normalizeStyle({
                    left: `${unref(nowTime) / Math.max(1, unref(allTime)) * 100}%`
                  }),
                  onTouchstart: handleThumbTouchStart,
                  onTouchmove: handleThumbTouchMove,
                  onTouchend: handleThumbTouchEnd,
                  onMousedown: handleMouseDown
                }, null, 38)])], 32)])]), createBaseVNode("div", _hoisted_32, [createBaseVNode("div", _hoisted_33, [createBaseVNode("div", _hoisted_34, [createBaseVNode("h1", {
                  class: "song-title",
                  innerHTML: unref(playMusic).name
                }, null, 8, _hoisted_35), createBaseVNode("p", _hoisted_36, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (item, index) => {
                  return openBlock(), createElementBlock("span", {
                    key: index,
                    class: "artist-name",
                    onClick: $event => handleArtistClick(item.id)
                  }, toDisplayString(item.name) + toDisplayString(index < unref(artistList).length - 1 ? " / " : ""), 9, _hoisted_37);
                }), 128))])]), createBaseVNode("div", {
                  class: "favorite-icon landscape",
                  onClick: toggleFavorite
                }, [createBaseVNode("i", {
                  class: normalizeClass(["ri-heart-3-fill", {
                    favorite: isFavorite.value
                  }])
                }, null, 2)])]), createBaseVNode("div", {
                  ref_key: "landscapeLyricsRef",
                  ref: landscapeLyricsRef,
                  class: "landscape-lyrics-scroller",
                  onTouchstart: handleTouchStart,
                  onTouchmove: handleTouchMove,
                  onTouchend: handleTouchEnd,
                  onScroll: handleScroll
                }, [_cache[10] || (_cache[10] = createBaseVNode("div", {
                  class: "lyrics-padding-top"
                }, null, -1)), !supportAutoScroll.value ? (openBlock(), createElementBlock("div", _hoisted_38, [createBaseVNode("span", null, toDisplayString(unref(t)("player.lrc.noAutoScroll")), 1)])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(lrcArray), (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    id: `landscape-lyric-line-${index}`,
                    class: normalizeClass(["lyric-line", {
                      "now-text": index === unref(nowIndex),
                      "hover-text": item.text && item.startTime !== -1
                    }]),
                    onClick: $event => item.startTime !== -1 ? unref(setAudioTime)(index) : null
                  }, [item.hasWordByWord && item.words && item.words.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.words, (word, wordIndex) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: wordIndex
                    }, [createBaseVNode("span", {
                      class: "lyric-word",
                      style: normalizeStyle(getWordStyle(index, wordIndex, word))
                    }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_41, " ")) : createCommentVNode("", true)], 64);
                  }), 128))])) : (openBlock(), createElementBlock("span", {
                    key: 1,
                    style: normalizeStyle(getLrcStyle(index))
                  }, toDisplayString(item.text), 5)), config.value.showTranslation && item.trText ? (openBlock(), createElementBlock("div", _hoisted_42, toDisplayString(item.trText), 1)) : createCommentVNode("", true)], 10, _hoisted_39);
                }), 128)), _cache[11] || (_cache[11] = createBaseVNode("div", {
                  class: "lyrics-padding-bottom"
                }, null, -1))], 544), createBaseVNode("div", _hoisted_43, [createBaseVNode("div", {
                  class: "main-button prev",
                  onClick: prevSong
                }, [...(_cache[12] || (_cache[12] = [createBaseVNode("i", {
                  class: "ri-skip-back-fill"
                }, null, -1)]))]), createBaseVNode("div", {
                  class: "main-button play-pause",
                  onClick: togglePlay
                }, [createBaseVNode("i", {
                  class: normalizeClass(playIcon.value)
                }, null, 2)]), createBaseVNode("div", {
                  class: "main-button next",
                  onClick: nextSong
                }, [...(_cache[13] || (_cache[13] = [createBaseVNode("i", {
                  class: "ri-skip-forward-fill"
                }, null, -1)]))])])])])) : createCommentVNode("", true), !isLandscape.value ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: normalizeClass(["unified-controls", {
                    "fullscreen-mode": showFullLyrics.value
                  }])
                }, [createBaseVNode("div", _hoisted_44, [createBaseVNode("div", _hoisted_45, [createBaseVNode("span", _hoisted_46, toDisplayString(unref(secondToMinute)(unref(nowTime))), 1), createBaseVNode("span", _hoisted_47, toDisplayString(unref(secondToMinute)(unref(allTime))), 1)]), createBaseVNode("div", {
                  class: "apple-style-progress",
                  onClick: handleProgressBarClick,
                  onMousedown: handleMouseDown
                }, [createBaseVNode("div", _hoisted_48, [createBaseVNode("div", {
                  class: "progress-fill",
                  style: normalizeStyle({
                    width: `${unref(nowTime) / Math.max(1, unref(allTime)) * 100}%`
                  })
                }, null, 4), createBaseVNode("div", {
                  class: normalizeClass(["progress-thumb", {
                    active: isThumbDragging.value || isMouseDragging.value
                  }]),
                  style: normalizeStyle({
                    left: `${unref(nowTime) / Math.max(1, unref(allTime)) * 100}%`
                  }),
                  onTouchstart: handleThumbTouchStart,
                  onTouchmove: handleThumbTouchMove,
                  onTouchend: handleThumbTouchEnd,
                  onMousedown: handleMouseDown
                }, null, 38)])], 32)]), createBaseVNode("div", _hoisted_49, [showFullLyrics.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "back-button",
                  onClick: withModifiers(closeFullLyrics, ["stop"])
                }, [...(_cache[14] || (_cache[14] = [createBaseVNode("i", {
                  class: "ri-arrow-down-s-line"
                }, null, -1)]))])) : createCommentVNode("", true), createBaseVNode("div", {
                  class: "side-button",
                  onClick: togglePlayMode
                }, [createBaseVNode("i", {
                  class: normalizeClass([unref(playModeIcon), {
                    "intelligence-active": unref(playMode) === 3
                  }])
                }, null, 2)]), createBaseVNode("div", {
                  class: "main-button prev",
                  onClick: prevSong
                }, [...(_cache[15] || (_cache[15] = [createBaseVNode("i", {
                  class: "ri-skip-back-fill"
                }, null, -1)]))]), createBaseVNode("div", {
                  class: "main-button play-pause",
                  onClick: togglePlay
                }, [createBaseVNode("i", {
                  class: normalizeClass(playIcon.value)
                }, null, 2)]), createBaseVNode("div", {
                  class: "main-button next",
                  onClick: nextSong
                }, [...(_cache[16] || (_cache[16] = [createBaseVNode("i", {
                  class: "ri-skip-forward-fill"
                }, null, -1)]))]), createBaseVNode("div", {
                  class: "side-button",
                  onClick: showPlaylist
                }, [...(_cache[17] || (_cache[17] = [createBaseVNode("i", {
                  class: "iconfont icon-list"
                }, null, -1)]))])])], 2)) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["show", "style"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MusicFullMobile = /* @__PURE__ */_export_sfc(_sfc_main$1, [["__scopeId", "data-v-850500d1"]]);
        const _sfc_main = exports("_", /* @__PURE__ */defineComponent({
          __name: "MusicFullWrapper",
          setup(__props, {
            expose: __expose
          }) {
            const componentToUse = computed(() => {
              return isMobile.value ? MusicFullMobile : MusicFull;
            });
            const musicFullRef = ref();
            __expose({
              musicFullRef
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(resolveDynamicComponent(componentToUse.value), mergeProps(_ctx.$attrs, {
                ref_key: "musicFullRef",
                ref: musicFullRef
              }), null, 16);
            };
          }
        }));
      }
    };
  });
})();

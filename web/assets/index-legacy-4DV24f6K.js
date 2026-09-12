;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './Input-legacy-D1FyU7q2.js'], function (exports, module) {
    'use strict';

    var cB, c, cE, defineComponent, h, useConfig, useStyle, cNotM, cM, useRtl, provide, buttonGroupInjectionKey, rgba, toHslaString, hsva, hsv2hsl, toRgbaString, hsv2rgb, toHexaString, hsla, toHsvaString, hsl2hsv, hsl2rgb, rgb2hsv, rgb2hsl, computed, ref, on, off, createInjectionKey, inject, watchEffect, toHexString, toHslString, toRgbString, toHsvString, warn, fadeInScaleUpTransition, Binder, VTarget, VFollower, useAdjustedTo, Transition, withDirectives, clickoutside, useFormItem, useLocale, useTheme, colorPickerLight, useMergedState, watch, useThemeClass, getPreciseEventTarget, isMounted, call, Button, nextTick, toRef, createKey, useI18n, vShow, openBlock, createElementBlock, withModifiers, normalizeClass, createBaseVNode, toDisplayString, unref, Fragment, renderList, normalizeStyle, createCommentVNode, withKeys, vModelText, createVNode, getPresetColorValue, optimizeColorForTheme, validateColor, getLyricThemeColors, _export_sfc, onMounted, onUnmounted, withCtx, getCurrentLyricThemeColor, loadLyricThemeColor, saveLyricThemeColor, __unplugin_components_0$1;
    return {
      setters: [module => {
        cB = module.c;
        c = module.a;
        cE = module.b;
        defineComponent = module.d;
        h = module.h;
        useConfig = module.u;
        useStyle = module.e;
        cNotM = module.f;
        cM = module.g;
        useRtl = module.i;
        provide = module.p;
        buttonGroupInjectionKey = module.j;
        rgba = module.r;
        toHslaString = module.t;
        hsva = module.k;
        hsv2hsl = module.l;
        toRgbaString = module.m;
        hsv2rgb = module.n;
        toHexaString = module.o;
        hsla = module.q;
        toHsvaString = module.s;
        hsl2hsv = module.v;
        hsl2rgb = module.w;
        rgb2hsv = module.x;
        rgb2hsl = module.y;
        computed = module.z;
        ref = module.A;
        on = module.B;
        off = module.C;
        createInjectionKey = module.D;
        inject = module.E;
        watchEffect = module.F;
        toHexString = module.G;
        toHslString = module.H;
        toRgbString = module.I;
        toHsvString = module.J;
        warn = module.K;
        fadeInScaleUpTransition = module.L;
        Binder = module.M;
        VTarget = module.V;
        VFollower = module.N;
        useAdjustedTo = module.O;
        Transition = module.T;
        withDirectives = module.P;
        clickoutside = module.Q;
        useFormItem = module.R;
        useLocale = module.S;
        useTheme = module.U;
        colorPickerLight = module.W;
        useMergedState = module.X;
        watch = module.Y;
        useThemeClass = module.Z;
        getPreciseEventTarget = module._;
        isMounted = module.$;
        call = module.a0;
        Button = module.a1;
        nextTick = module.a2;
        toRef = module.a3;
        createKey = module.a4;
        useI18n = module.a5;
        vShow = module.a6;
        openBlock = module.a7;
        createElementBlock = module.a8;
        withModifiers = module.a9;
        normalizeClass = module.aa;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        unref = module.ad;
        Fragment = module.ae;
        renderList = module.af;
        normalizeStyle = module.ag;
        createCommentVNode = module.ah;
        withKeys = module.ai;
        vModelText = module.aj;
        createVNode = module.ak;
        getPresetColorValue = module.al;
        optimizeColorForTheme = module.am;
        validateColor = module.an;
        getLyricThemeColors = module.ao;
        _export_sfc = module.ap;
        onMounted = module.aq;
        onUnmounted = module.ar;
        withCtx = module.as;
        getCurrentLyricThemeColor = module.at;
        loadLyricThemeColor = module.au;
        saveLyricThemeColor = module.av;
      }, module => {
        __unplugin_components_0$1 = module._;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".theme-color-panel[data-v-15a507c6] {\n  position: absolute;\n  top: 50px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: auto;\n  min-width: 480px;\n  max-width: calc(100vw - 40px);\n  background: var(--control-bg);\n  backdrop-filter: blur(10px);\n  border-radius: 8px;\n  padding: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n  z-index: 1000;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.theme-color-panel.hidden[data-v-15a507c6] {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(-50%) translateY(-10px) scale(0.95);\n  pointer-events: none;\n}\n.theme-color-panel.visible[data-v-15a507c6] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0) scale(1);\n  pointer-events: auto;\n}\n@media (max-width: 520px) {\n.theme-color-panel[data-v-15a507c6] {\n    min-width: calc(100vw - 40px);\n    left: 20px;\n    transform: none;\n}\n.theme-color-panel.hidden[data-v-15a507c6] {\n    transform: translateY(-10px) scale(0.95);\n}\n.theme-color-panel.visible[data-v-15a507c6] {\n    transform: translateY(0) scale(1);\n}\n}\n.panel-header[data-v-15a507c6] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.panel-header .panel-title[data-v-15a507c6] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text-color);\n  opacity: 0.9;\n}\n.panel-header .close-button[data-v-15a507c6] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 6px;\n  color: var(--text-color);\n  transition: all 0.2s ease;\n}\n.panel-header .close-button[data-v-15a507c6]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #ff6b6b;\n}\n.panel-header .close-button i[data-v-15a507c6] {\n  font-size: 14px;\n}\n.panel-content .compact-layout[data-v-15a507c6] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.panel-content .section-label[data-v-15a507c6] {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--text-color);\n  opacity: 0.7;\n  margin-bottom: 6px;\n  text-align: center;\n}\n.panel-content .divider[data-v-15a507c6] {\n  width: 1px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.preset-section .preset-colors[data-v-15a507c6] {\n  display: flex;\n  gap: 6px;\n}\n.preset-section .preset-colors .color-dot[data-v-15a507c6] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.preset-section .preset-colors .color-dot[data-v-15a507c6]:hover {\n  transform: scale(1.1);\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.preset-section .preset-colors .color-dot.active[data-v-15a507c6] {\n  border-color: var(--text-color);\n  box-shadow: 0 0 0 2px var(--control-bg);\n}\n.preset-section .preset-colors .color-dot i[data-v-15a507c6] {\n  color: white;\n  font-size: 10px;\n  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);\n}\n.custom-section .custom-controls[data-v-15a507c6] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.custom-section .custom-controls .color-preview[data-v-15a507c6] {\n  width: 24px;\n  height: 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n.custom-section .custom-controls .color-preview[data-v-15a507c6]:hover {\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: scale(1.05);\n}\n.custom-section .custom-controls .color-preview i[data-v-15a507c6] {\n  color: white;\n  font-size: 12px;\n  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);\n}\n.custom-section .custom-controls .color-input[data-v-15a507c6] {\n  width: 80px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  padding: 0 6px;\n  color: var(--text-color);\n  font-size: 11px;\n  font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", monospace;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.custom-section .custom-controls .color-input[data-v-15a507c6]:focus {\n  border-color: var(--highlight-color, rgba(255, 255, 255, 0.4));\n  background: rgba(255, 255, 255, 0.12);\n}\n.custom-section .custom-controls .color-input[data-v-15a507c6]::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.custom-section .custom-controls .color-input[data-v-15a507c6]::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n}\n.preview-section .preview-text[data-v-15a507c6] {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.2;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n.preview-section .preview-text[data-v-15a507c6]:hover {\n  transform: scale(1.02);\n}\n.color-picker-dropdown[data-v-15a507c6] {\n  margin-top: 8px;\n  padding: 8px;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.color-picker-dropdown[data-v-15a507c6] .n-color-picker {\n  width: 100%;\n}\n@media (max-width: 520px) {\n.compact-layout[data-v-15a507c6] {\n    flex-direction: column;\n    gap: 12px;\n}\n.compact-layout .divider[data-v-15a507c6] {\n    width: 100%;\n    height: 1px;\n}\n.preset-section .preset-colors[data-v-15a507c6] {\n    justify-content: center;\n}\n}\nhtml[data-v-2581b0c8],\nbody[data-v-2581b0c8],\n#app[data-v-2581b0c8] {\n  background-color: transparent !important;\n  box-shadow: none !important;\n  border: none !important;\n}\n.lyric-window[data-v-2581b0c8] {\n  width: 100vw;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  background: transparent !important;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: background-color 0.3s ease;\n  cursor: default;\n  border-radius: 14px;\n}\n.lyric-window.color-transitioning .lyric-text-inner[data-v-2581b0c8] {\n  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n.lyric-window.color-transitioning .control-button i[data-v-2581b0c8] {\n  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n.lyric-window:hover .control-bar-show[data-v-2581b0c8] {\n  opacity: 1;\n  visibility: visible;\n}\n.lyric-window[data-v-2581b0c8]:active {\n  cursor: grabbing;\n}\n.lyric-window.dark[data-v-2581b0c8] {\n  --text-color: #e6e6e6;\n  --text-secondary: #ffffffea;\n  --highlight-color: var(--lyric-highlight-color, #1ed760);\n  --control-bg: rgba(124, 124, 124, 0.3);\n}\n.lyric-window.dark[data-v-2581b0c8]:hover:not(.lyric_lock) {\n  background: rgba(44, 44, 44, 0.466) !important;\n}\n.lyric-window.light[data-v-2581b0c8] {\n  --text-color: #383838;\n  --text-secondary: #282828ae;\n  --highlight-color: var(--lyric-highlight-color, #1db954);\n  --control-bg: rgba(38, 38, 38, 0.532);\n}\n.lyric-window.light[data-v-2581b0c8]:hover:not(.lyric_lock) {\n  background: rgba(0, 0, 0, 0.434) !important;\n}\n.control-bar[data-v-2581b0c8] {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  padding: 0 20px;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s ease, visibility 0.2s ease;\n  z-index: 100;\n}\n.control-bar .font-size-controls[data-v-2581b0c8] {\n  -webkit-app-region: no-drag;\n  color: var(--text-color);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.control-bar .play-controls[data-v-2581b0c8] {\n  position: absolute;\n  top: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  -webkit-app-region: no-drag;\n}\n.control-bar .play-controls .play-button[data-v-2581b0c8] {\n  width: 36px;\n  height: 36px;\n}\n.control-bar .play-controls .play-button i[data-v-2581b0c8] {\n  font-size: 24px;\n}\n.control-bar .control-buttons[data-v-2581b0c8] {\n  -webkit-app-region: no-drag;\n}\n.control-buttons[data-v-2581b0c8] {\n  display: flex;\n  gap: 16px;\n  -webkit-app-region: no-drag;\n}\n.control-button[data-v-2581b0c8] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 8px;\n  color: var(--text-color);\n  transition: all 0.2s ease;\n}\n.control-button[data-v-2581b0c8]:hover {\n  background: var(--control-bg);\n}\n.control-button i[data-v-2581b0c8] {\n  font-size: 20px;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n.control-button i.active[data-v-2581b0c8] {\n  color: var(--highlight-color);\n}\n.control-button.theme-color-button.active[data-v-2581b0c8] {\n  background: var(--control-bg);\n}\n.control-button.theme-color-button.active i[data-v-2581b0c8] {\n  color: var(--highlight-color);\n}\n.lyric-container[data-v-2581b0c8] {\n  position: absolute;\n  top: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  z-index: 100;\n}\n.lyric-single-mode[data-v-2581b0c8] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n}\n.lyric-single-mode .lyric-line[data-v-2581b0c8] {\n  width: 100%;\n  text-align: center;\n}\n.lyric-double-mode[data-v-2581b0c8] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 0 20px;\n  transition: opacity 0.15s ease;\n}\n.lyric-double-mode.group-fade[data-v-2581b0c8] {\n  opacity: 0;\n}\n.lyric-double-mode .lyric-line[data-v-2581b0c8] {\n  width: 100%;\n  text-align: center;\n  opacity: 0.55;\n  transition: opacity 0.25s ease;\n}\n.lyric-double-mode .lyric-line.lyric-line-current[data-v-2581b0c8] {\n  opacity: 1;\n  transform: scale(1.03);\n}\n.lyric-scroll[data-v-2581b0c8] {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);\n          mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);\n}\n.lyric-wrapper[data-v-2581b0c8] {\n  will-change: transform;\n  padding: 20vh 0;\n  transform-origin: center center;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.lyric-line[data-v-2581b0c8] {\n  padding: 4px 20px;\n  text-align: center;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lyric-line.lyric-line-current[data-v-2581b0c8] {\n  transform: scale(1.05);\n  opacity: 1;\n}\n.lyric-line.lyric-line-current .lyric-text[data-v-2581b0c8] {\n  text-shadow: none;\n}\n.lyric-line.lyric-line-current .lyric-text .lyric-text-inner[data-v-2581b0c8] {\n  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));\n  -webkit-font-smoothing: antialiased;\n}\n.lyric-line.lyric-line-passed[data-v-2581b0c8] {\n  opacity: 0.6;\n}\n.lyric-text[data-v-2581b0c8] {\n  font-weight: 600;\n  margin-bottom: 2px;\n  color: var(--text-color);\n  white-space: pre-wrap;\n  word-break: break-all;\n  transition: transform 0.2s ease;\n  line-height: 1.4;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.8), 0 1px 1px rgba(0, 0, 0, 0.6), 0 0 4px rgba(255, 255, 255, 0.2);\n}\n.lyric-text .lyric-text-inner[data-v-2581b0c8] {\n  transition: background 0.3s ease;\n}\n.lyric-text .word-by-word-lyric[data-v-2581b0c8] {\n  display: inline-block;\n  text-align: center;\n}\n.lyric-text .word-by-word-lyric .lyric-word[data-v-2581b0c8] {\n  display: inline-block;\n  font-weight: inherit;\n  font-size: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  position: relative;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.lyric-translation[data-v-2581b0c8] {\n  color: var(--text-secondary);\n  white-space: pre-wrap;\n  word-break: break-all;\n  transition: font-size 0.2s ease;\n  line-height: 1.4;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.7), 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 4px rgba(255, 255, 255, 0.2), 1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4);\n}\n.lyric-empty[data-v-2581b0c8] {\n  text-align: center;\n  color: var(--text-secondary);\n  font-size: 16px;\n  padding: 20px;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.7), 0 1px 1px rgba(0, 0, 0, 0.5), 0 0 4px rgba(255, 255, 255, 0.2);\n}\nbody[data-v-2581b0c8] {\n  background-color: transparent !important;\n  margin: 0;\n}\n.lyric-content[data-v-2581b0c8] {\n  transition: font-size 0.2s ease;\n}\n.lyric-line-current[data-v-2581b0c8] {\n  opacity: 1;\n}\n.lyric_lock .control-bar .control-buttons .control-button[data-v-2581b0c8]:not(:has(.ri-lock-line)):not(:has(.ri-lock-unlock-line)) {\n  display: none;\n}\n.lyric_lock .control-bar .font-size-controls[data-v-2581b0c8] {\n  display: none;\n}\n.lyric_lock .control-bar .play-controls[data-v-2581b0c8] {\n  display: none;\n}\n.lyric_lock[data-v-2581b0c8] {\n  background: transparent;\n}\n.lyric_lock[data-v-2581b0c8]:hover {\n  background: transparent;\n}\n.lyric_lock #lyric-lock[data-v-2581b0c8] {\n  position: absolute;\n  top: 0;\n  right: 72px;\n  background: var(--control-bg);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const style$2 = cB('input-group', `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [c('>', [cB('input', [c('&:not(:last-child)', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), c('&:not(:first-child)', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), cB('button', [c('&:not(:last-child)', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [cE('state-border, border', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), c('&:not(:first-child)', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [cE('state-border, border', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), c('*', [c('&:not(:last-child)', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [c('>', [cB('input', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB('base-selection', [cB('base-selection-label', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB('base-selection-tags', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cE('box-shadow, border, state-border', `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), c('&:not(:first-child)', `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [c('>', [cB('input', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB('base-selection', [cB('base-selection-label', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB('base-selection-tags', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cE('box-shadow, border, state-border', `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);
        const inputGroupProps = {};
        const NInputGroup = defineComponent({
          name: 'InputGroup',
          props: inputGroupProps,
          setup(props) {
            const {
              mergedClsPrefixRef
            } = useConfig(props);
            useStyle('-input-group', style$2, mergedClsPrefixRef);
            return {
              mergedClsPrefix: mergedClsPrefixRef
            };
          },
          render() {
            const {
              mergedClsPrefix
            } = this;
            return h("div", {
              class: `${mergedClsPrefix}-input-group`
            }, this.$slots);
          }
        });
        const zero = '0!important';
        const n1 = '-1px!important';
        function createLeftBorderStyle(type) {
          return cM(`${type}-type`, [c('& +', [cB('button', {}, [cM(`${type}-type`, [cE('border', {
            borderLeftWidth: zero
          }), cE('state-border', {
            left: n1
          })])])])]);
        }
        function createTopBorderStyle(type) {
          return cM(`${type}-type`, [c('& +', [cB('button', [cM(`${type}-type`, [cE('border', {
            borderTopWidth: zero
          }), cE('state-border', {
            top: n1
          })])])])]);
        }
        const style$1 = cB('button-group', `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [cNotM('vertical', {
          flexDirection: 'row'
        }, [cNotM('rtl', [cB('button', [c('&:first-child:not(:last-child)', `
 margin-right: ${zero};
 border-top-right-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), c('&:last-child:not(:first-child)', `
 margin-left: ${zero};
 border-top-left-radius: ${zero};
 border-bottom-left-radius: ${zero};
 `), c('&:not(:first-child):not(:last-child)', `
 margin-left: ${zero};
 margin-right: ${zero};
 border-radius: ${zero};
 `), createLeftBorderStyle('default'), cM('ghost', [createLeftBorderStyle('primary'), createLeftBorderStyle('info'), createLeftBorderStyle('success'), createLeftBorderStyle('warning'), createLeftBorderStyle('error')])])])]), cM('vertical', {
          flexDirection: 'column'
        }, [cB('button', [c('&:first-child:not(:last-child)', `
 margin-bottom: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-bottom-left-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), c('&:last-child:not(:first-child)', `
 margin-top: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-top-left-radius: ${zero};
 border-top-right-radius: ${zero};
 `), c('&:not(:first-child):not(:last-child)', `
 margin: ${zero};
 border-radius: ${zero};
 `), createTopBorderStyle('default'), cM('ghost', [createTopBorderStyle('primary'), createTopBorderStyle('info'), createTopBorderStyle('success'), createTopBorderStyle('warning'), createTopBorderStyle('error')])])])]);
        const buttonGroupProps = {
          size: {
            type: String,
            default: undefined
          },
          vertical: Boolean
        };
        const __unplugin_components_0 = defineComponent({
          name: 'ButtonGroup',
          props: buttonGroupProps,
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedRtlRef
            } = useConfig(props);
            useStyle('-button-group', style$1, mergedClsPrefixRef);
            provide(buttonGroupInjectionKey, props);
            const rtlEnabledRef = useRtl('ButtonGroup', mergedRtlRef, mergedClsPrefixRef);
            return {
              rtlEnabled: rtlEnabledRef,
              mergedClsPrefix: mergedClsPrefixRef
            };
          },
          render() {
            const {
              mergedClsPrefix
            } = this;
            return h("div", {
              class: [`${mergedClsPrefix}-button-group`, this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`, this.vertical && `${mergedClsPrefix}-button-group--vertical`],
              role: "group"
            }, this.$slots);
          }
        });
        function deriveDefaultValue(modes, showAlpha) {
          const mode = modes[0];
          switch (mode) {
            case "hex":
              return showAlpha ? "#000000FF" : "#000000";
            case "rgb":
              return showAlpha ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
            case "hsl":
              return showAlpha ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
            case "hsv":
              return showAlpha ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
          }
          return "#000000";
        }
        function getModeFromValue(color) {
          if (color === null) return null;
          if (/^ *#/.test(color)) return "hex";
          if (color.includes("rgb")) return "rgb";
          if (color.includes("hsl")) return "hsl";
          if (color.includes("hsv")) return "hsv";
          return null;
        }
        function getWCAGContrast(hsla2, contrastColor = [255, 255, 255], level = "AA") {
          const [r, g, b, a] = rgba(toHslaString(hsla2));
          if (a === 1) {
            const luminance1 = rgb2luminance([r, g, b]);
            const luminance2 = rgb2luminance(contrastColor);
            const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
            return contrast >= (level === "AA" ? 4.5 : 7);
          }
          const blendedR = Math.round(r * a + contrastColor[0] * (1 - a));
          const blendedG = Math.round(g * a + contrastColor[1] * (1 - a));
          const blendedB = Math.round(b * a + contrastColor[2] * (1 - a));
          const luminanceBlended = rgb2luminance([blendedR, blendedG, blendedB]);
          const luminanceWhite = rgb2luminance(contrastColor);
          const contrastBlended = (Math.max(luminanceBlended, luminanceWhite) + 0.05) / (Math.min(luminanceBlended, luminanceWhite) + 0.05);
          return contrastBlended >= (level === "AA" ? 4.5 : 7);
        }
        function rgb2luminance(rgb) {
          const [cr, cg, cb] = rgb.map(c => {
            c /= 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * cr + 0.7152 * cg + 0.0722 * cb;
        }
        function normalizeHue(hue) {
          hue = Math.round(hue);
          return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
        }
        function normalizeAlpha(alpha) {
          alpha = Math.round(alpha * 100) / 100;
          return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
        }
        const convert = {
          rgb: {
            hex(value) {
              return toHexaString(rgba(value));
            },
            hsl(value) {
              const [r, g, b, a] = rgba(value);
              return toHslaString([...rgb2hsl(r, g, b), a]);
            },
            hsv(value) {
              const [r, g, b, a] = rgba(value);
              return toHsvaString([...rgb2hsv(r, g, b), a]);
            }
          },
          hex: {
            rgb(value) {
              return toRgbaString(rgba(value));
            },
            hsl(value) {
              const [r, g, b, a] = rgba(value);
              return toHslaString([...rgb2hsl(r, g, b), a]);
            },
            hsv(value) {
              const [r, g, b, a] = rgba(value);
              return toHsvaString([...rgb2hsv(r, g, b), a]);
            }
          },
          hsl: {
            hex(value) {
              const [h, s, l, a] = hsla(value);
              return toHexaString([...hsl2rgb(h, s, l), a]);
            },
            rgb(value) {
              const [h, s, l, a] = hsla(value);
              return toRgbaString([...hsl2rgb(h, s, l), a]);
            },
            hsv(value) {
              const [h, s, l, a] = hsla(value);
              return toHsvaString([...hsl2hsv(h, s, l), a]);
            }
          },
          hsv: {
            hex(value) {
              const [h, s, v, a] = hsva(value);
              return toHexaString([...hsv2rgb(h, s, v), a]);
            },
            rgb(value) {
              const [h, s, v, a] = hsva(value);
              return toRgbaString([...hsv2rgb(h, s, v), a]);
            },
            hsl(value) {
              const [h, s, v, a] = hsva(value);
              return toHslaString([...hsv2hsl(h, s, v), a]);
            }
          }
        };
        function convertColor(value, mode, originalMode) {
          originalMode = originalMode || getModeFromValue(value);
          if (!originalMode) return null;
          if (originalMode === mode) return value;
          const conversions = convert[originalMode];
          return conversions[mode](value);
        }
        const HANDLE_SIZE$2 = '12px';
        const HANDLE_SIZE_NUM$1 = 12;
        const RADIUS$2 = '6px';
        const AlphaSlider = defineComponent({
          name: 'AlphaSlider',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            rgba: {
              type: Array,
              default: null
            },
            alpha: {
              type: Number,
              default: 0
            },
            onUpdateAlpha: {
              type: Function,
              required: true
            },
            onComplete: Function
          },
          setup(props) {
            const railRef = ref(null);
            function handleMouseDown(e) {
              if (!railRef.value || !props.rgba) return;
              on('mousemove', document, handleMouseMove);
              on('mouseup', document, handleMouseUp);
              handleMouseMove(e);
            }
            function handleMouseMove(e) {
              const {
                value: railEl
              } = railRef;
              if (!railEl) return;
              const {
                width,
                left
              } = railEl.getBoundingClientRect();
              const newAlpha = (e.clientX - left) / (width - HANDLE_SIZE_NUM$1);
              props.onUpdateAlpha(normalizeAlpha(newAlpha));
            }
            function handleMouseUp() {
              var _a;
              off('mousemove', document, handleMouseMove);
              off('mouseup', document, handleMouseUp);
              (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
            }
            return {
              railRef,
              railBackgroundImage: computed(() => {
                const {
                  rgba
                } = props;
                if (!rgba) return '';
                return `linear-gradient(to right, rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 0) 0%, rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 1) 100%)`;
              }),
              handleMouseDown
            };
          },
          render() {
            const {
              clsPrefix
            } = this;
            return h("div", {
              class: `${clsPrefix}-color-picker-slider`,
              ref: "railRef",
              style: {
                height: HANDLE_SIZE$2,
                borderRadius: RADIUS$2
              },
              onMousedown: this.handleMouseDown
            }, h("div", {
              style: {
                borderRadius: RADIUS$2,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                overflow: 'hidden'
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-checkboard`
            }), h("div", {
              class: `${clsPrefix}-color-picker-slider__image`,
              style: {
                backgroundImage: this.railBackgroundImage
              }
            })), this.rgba && h("div", {
              style: {
                position: 'absolute',
                left: RADIUS$2,
                right: RADIUS$2,
                top: 0,
                bottom: 0
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-handle`,
              style: {
                left: `calc(${this.alpha * 100}% - ${RADIUS$2})`,
                borderRadius: RADIUS$2,
                width: HANDLE_SIZE$2,
                height: HANDLE_SIZE$2
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-handle__fill`,
              style: {
                backgroundColor: toRgbaString(this.rgba),
                borderRadius: RADIUS$2,
                width: HANDLE_SIZE$2,
                height: HANDLE_SIZE$2
              }
            }))));
          }
        });
        const colorPickerInjectionKey = createInjectionKey('n-color-picker');

        // 0 - 255
        function normalizeRgbUnit(value) {
          if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
            return Math.max(0, Math.min(Number.parseInt(value), 255));
          }
          return false;
        }
        // 0 - 360
        function normalizeHueUnit(value) {
          if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
            return Math.max(0, Math.min(Number.parseInt(value), 360));
          }
          return false;
        }
        // 0 - 100
        function normalizeSlvUnit(value) {
          if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
            return Math.max(0, Math.min(Number.parseInt(value), 100));
          }
          return false;
        }
        function normalizeHexaUnit(value) {
          const trimmedValue = value.trim();
          if (/^#[0-9a-fA-F]+$/.test(trimmedValue)) {
            return [4, 5, 7, 9].includes(trimmedValue.length);
          }
          return false;
        }
        // 0 - 100%
        function normalizeAlphaUnit(value) {
          if (/^\d{1,3}\.?\d*%$/.test(value.trim())) {
            return Math.max(0, Math.min(Number.parseInt(value) / 100, 100));
          }
          return false;
        }
        const inputThemeOverrides = {
          paddingSmall: '0 4px'
        };
        const ColorInputUnit = defineComponent({
          name: 'ColorInputUnit',
          props: {
            label: {
              type: String,
              required: true
            },
            value: {
              type: [Number, String],
              default: null
            },
            showAlpha: Boolean,
            onUpdateValue: {
              type: Function,
              required: true
            }
          },
          setup(props) {
            const inputValueRef = ref('');
            const {
              themeRef
            } = inject(colorPickerInjectionKey, null);
            watchEffect(() => {
              inputValueRef.value = getInputString();
            });
            function getInputString() {
              const {
                value
              } = props;
              if (value === null) return '';
              const {
                label
              } = props;
              if (label === 'HEX') {
                return value;
              }
              if (label === 'A') {
                return `${Math.floor(value * 100)}%`;
              }
              return String(Math.floor(value));
            }
            function handleInputUpdateValue(value) {
              inputValueRef.value = value;
            }
            function handleInputChange(value) {
              let unit;
              let valid;
              switch (props.label) {
                case 'HEX':
                  valid = normalizeHexaUnit(value);
                  if (valid) {
                    props.onUpdateValue(value);
                  }
                  inputValueRef.value = getInputString(); // to normalized new value
                  break;
                case 'H':
                  unit = normalizeHueUnit(value);
                  if (unit === false) {
                    inputValueRef.value = getInputString();
                  } else {
                    props.onUpdateValue(unit);
                  }
                  break;
                case 'S':
                case 'L':
                case 'V':
                  unit = normalizeSlvUnit(value);
                  if (unit === false) {
                    inputValueRef.value = getInputString();
                  } else {
                    props.onUpdateValue(unit);
                  }
                  break;
                case 'A':
                  unit = normalizeAlphaUnit(value);
                  if (unit === false) {
                    inputValueRef.value = getInputString();
                  } else {
                    props.onUpdateValue(unit);
                  }
                  break;
                case 'R':
                case 'G':
                case 'B':
                  unit = normalizeRgbUnit(value);
                  if (unit === false) {
                    inputValueRef.value = getInputString();
                  } else {
                    props.onUpdateValue(unit);
                  }
                  break;
              }
            }
            return {
              mergedTheme: themeRef,
              inputValue: inputValueRef,
              handleInputChange,
              handleInputUpdateValue
            };
          },
          render() {
            const {
              mergedTheme
            } = this;
            return h(__unplugin_components_0$1, {
              size: "small",
              placeholder: this.label,
              theme: mergedTheme.peers.Input,
              themeOverrides: mergedTheme.peerOverrides.Input,
              builtinThemeOverrides: inputThemeOverrides,
              value: this.inputValue,
              onUpdateValue: this.handleInputUpdateValue,
              onChange: this.handleInputChange,
              // add more space for xxx% input
              style: this.label === 'A' ? 'flex-grow: 1.25;' : ''
            });
          }
        });
        const ColorInput = defineComponent({
          name: 'ColorInput',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            mode: {
              type: String,
              required: true
            },
            modes: {
              type: Array,
              required: true
            },
            showAlpha: {
              type: Boolean,
              required: true
            },
            value: {
              // for hex to get percise value
              type: String,
              default: null
            },
            valueArr: {
              type: Array,
              default: null
            },
            onUpdateValue: {
              type: Function,
              required: true
            },
            onUpdateMode: {
              type: Function,
              required: true
            }
          },
          setup(props) {
            return {
              handleUnitUpdateValue(index, value) {
                const {
                  showAlpha
                } = props;
                if (props.mode === 'hex') {
                  props.onUpdateValue((showAlpha ? toHexaString : toHexString)(value));
                  return;
                }
                let nextValueArr;
                if (props.valueArr === null) {
                  nextValueArr = [0, 0, 0, 0];
                } else {
                  nextValueArr = Array.from(props.valueArr);
                }
                switch (props.mode) {
                  case 'hsv':
                    nextValueArr[index] = value;
                    props.onUpdateValue((showAlpha ? toHsvaString : toHsvString)(nextValueArr));
                    break;
                  case 'rgb':
                    nextValueArr[index] = value;
                    props.onUpdateValue((showAlpha ? toRgbaString : toRgbString)(nextValueArr));
                    break;
                  case 'hsl':
                    nextValueArr[index] = value;
                    props.onUpdateValue((showAlpha ? toHslaString : toHslString)(nextValueArr));
                    break;
                }
              }
            };
          },
          render() {
            const {
              clsPrefix,
              modes
            } = this;
            return h("div", {
              class: `${clsPrefix}-color-picker-input`
            }, h("div", {
              class: `${clsPrefix}-color-picker-input__mode`,
              onClick: this.onUpdateMode,
              style: {
                cursor: modes.length === 1 ? '' : 'pointer'
              }
            }, this.mode.toUpperCase() + (this.showAlpha ? 'A' : '')), h(NInputGroup, null, {
              default: () => {
                const {
                  mode,
                  valueArr,
                  showAlpha
                } = this;
                if (mode === 'hex') {
                  // hex and rgba shares the same value arr
                  let hexValue = null;
                  try {
                    hexValue = valueArr === null ? null : (showAlpha ? toHexaString : toHexString)(valueArr);
                  } catch (_a) {}
                  return h(ColorInputUnit, {
                    label: "HEX",
                    showAlpha: showAlpha,
                    value: hexValue,
                    onUpdateValue: unitValue => {
                      this.handleUnitUpdateValue(0, unitValue);
                    }
                  });
                }
                return (mode + (showAlpha ? 'a' : '')).split('').map((v, i) => h(ColorInputUnit, {
                  label: v.toUpperCase(),
                  value: valueArr === null ? null : valueArr[i],
                  onUpdateValue: unitValue => {
                    this.handleUnitUpdateValue(i, unitValue);
                  }
                }));
              }
            }));
          }
        });

        // Try to normalize the color values to ensure that they are valid CSS colors
        function normalizeColor(color, mode) {
          if (mode === 'hsv') {
            const [h, s, v, a] = hsva(color);
            return toRgbaString([...hsv2rgb(h, s, v), a]);
          }
          // For the mode that is not in preset, we keep the original value.
          // For color names, they are legal to CSS, so we don’t deal with them,
          // and only standardize them when outputting.
          return color;
        }
        function getHexFromName(color) {
          const ctx = document.createElement('canvas').getContext('2d');
          if (!ctx) {
            return '#000000';
          }
          ctx.fillStyle = color;
          return ctx.fillStyle;
        }
        const ColorPickerSwatches = defineComponent({
          name: 'ColorPickerSwatches',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            mode: {
              type: String,
              required: true
            },
            swatches: {
              type: Array,
              required: true
            },
            onUpdateColor: {
              type: Function,
              required: true
            }
          },
          setup(props) {
            const parsedSwatchesRef = computed(() => props.swatches.map(value => {
              const mode = getModeFromValue(value);
              return {
                value,
                mode,
                legalValue: normalizeColor(value, mode)
              };
            }));
            function normalizeOutput(parsed) {
              const {
                mode: modeProp
              } = props;
              let {
                value,
                mode: swatchColorMode
              } = parsed;
              // color name is converted to hex
              if (!swatchColorMode) {
                swatchColorMode = 'hex';
                if (/^[a-zA-Z]+$/.test(value)) {
                  value = getHexFromName(value);
                } else {
                  // for invalid color, we make it black
                  warn('color-picker', `color ${value} in swatches is invalid.`);
                  value = '#000000';
                }
              }
              if (swatchColorMode === modeProp) return value;
              // swatch value to current mode value
              return convertColor(value, modeProp, swatchColorMode);
            }
            function handleSwatchSelect(parsed) {
              props.onUpdateColor(normalizeOutput(parsed));
            }
            function handleSwatchKeyDown(e, parsed) {
              if (e.key === 'Enter') handleSwatchSelect(parsed);
            }
            return {
              parsedSwatchesRef,
              handleSwatchSelect,
              handleSwatchKeyDown
            };
          },
          render() {
            const {
              clsPrefix
            } = this;
            return h("div", {
              class: `${clsPrefix}-color-picker-swatches`
            }, this.parsedSwatchesRef.map(swatch => h("div", {
              class: `${clsPrefix}-color-picker-swatch`,
              tabindex: 0,
              onClick: () => {
                this.handleSwatchSelect(swatch);
              },
              onKeydown: e => {
                this.handleSwatchKeyDown(e, swatch);
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-swatch__fill`,
              style: {
                background: swatch.legalValue
              }
            }))));
          }
        });
        const ColorPickerTrigger = defineComponent({
          name: 'ColorPickerTrigger',
          slots: Object,
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            value: {
              type: String,
              default: null
            },
            hsla: {
              type: Array,
              default: null
            },
            disabled: Boolean,
            onClick: Function
          },
          setup(props) {
            const {
              colorPickerSlots,
              renderLabelRef
            } = inject(colorPickerInjectionKey, null);
            return () => {
              const {
                hsla,
                value,
                clsPrefix,
                onClick,
                disabled
              } = props;
              const renderLabel = colorPickerSlots.label || renderLabelRef.value;
              return h("div", {
                class: [`${clsPrefix}-color-picker-trigger`, disabled && `${clsPrefix}-color-picker-trigger--disabled`],
                onClick: disabled ? undefined : onClick
              }, h("div", {
                class: `${clsPrefix}-color-picker-trigger__fill`
              }, h("div", {
                class: `${clsPrefix}-color-picker-checkboard`
              }), h("div", {
                style: {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundColor: hsla ? toHslaString(hsla) : ''
                }
              }), value && hsla ? h("div", {
                class: `${clsPrefix}-color-picker-trigger__value`,
                style: {
                  color: getWCAGContrast(hsla) ? 'white' : 'black'
                }
              }, renderLabel ? renderLabel(value) : value) : null));
            };
          }
        });
        const ColorPreview = defineComponent({
          name: 'ColorPreview',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            mode: {
              type: String,
              required: true
            },
            color: {
              type: String,
              default: null,
              validator: value => {
                const mode = getModeFromValue(value);
                return Boolean(!value || mode && mode !== 'hsv');
              }
            },
            onUpdateColor: {
              type: Function,
              required: true
            }
          },
          setup(props) {
            function handleChange(e) {
              var _a;
              // hex
              const value = e.target.value;
              (_a = props.onUpdateColor) === null || _a === void 0 ? void 0 : _a.call(props, convertColor(value.toUpperCase(), props.mode, 'hex'));
              e.stopPropagation();
            }
            return {
              handleChange
            };
          },
          render() {
            const {
              clsPrefix
            } = this;
            return h("div", {
              class: `${clsPrefix}-color-picker-preview__preview`
            }, h("span", {
              class: `${clsPrefix}-color-picker-preview__fill`,
              style: {
                background: this.color || '#000000'
              }
            }), h("input", {
              class: `${clsPrefix}-color-picker-preview__input`,
              type: "color",
              value: this.color,
              onChange: this.handleChange
            }));
          }
        });
        const HANDLE_SIZE$1 = '12px';
        const HANDLE_SIZE_NUM = 12;
        const RADIUS$1 = '6px';
        const RADIUS_NUM = 6;
        const GRADIENT = 'linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)';
        const HueSlider = defineComponent({
          name: 'HueSlider',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            hue: {
              type: Number,
              required: true
            },
            onUpdateHue: {
              type: Function,
              required: true
            },
            onComplete: Function
          },
          setup(props) {
            const railRef = ref(null);
            function handleMouseDown(e) {
              if (!railRef.value) return;
              on('mousemove', document, handleMouseMove);
              on('mouseup', document, handleMouseUp);
              handleMouseMove(e);
            }
            function handleMouseMove(e) {
              const {
                value: railEl
              } = railRef;
              if (!railEl) return;
              const {
                width,
                left
              } = railEl.getBoundingClientRect();
              const newHue = normalizeHue((e.clientX - left - RADIUS_NUM) / (width - HANDLE_SIZE_NUM) * 360);
              props.onUpdateHue(newHue);
            }
            function handleMouseUp() {
              var _a;
              off('mousemove', document, handleMouseMove);
              off('mouseup', document, handleMouseUp);
              (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
            }
            return {
              railRef,
              handleMouseDown
            };
          },
          render() {
            const {
              clsPrefix
            } = this;
            return h("div", {
              class: `${clsPrefix}-color-picker-slider`,
              style: {
                height: HANDLE_SIZE$1,
                borderRadius: RADIUS$1
              }
            }, h("div", {
              ref: "railRef",
              style: {
                boxShadow: 'inset 0 0 2px 0 rgba(0, 0, 0, .24)',
                boxSizing: 'border-box',
                backgroundImage: GRADIENT,
                height: HANDLE_SIZE$1,
                borderRadius: RADIUS$1,
                position: 'relative'
              },
              onMousedown: this.handleMouseDown
            }, h("div", {
              style: {
                position: 'absolute',
                left: RADIUS$1,
                right: RADIUS$1,
                top: 0,
                bottom: 0
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-handle`,
              style: {
                left: `calc((${this.hue}%) / 359 * 100 - ${RADIUS$1})`,
                borderRadius: RADIUS$1,
                width: HANDLE_SIZE$1,
                height: HANDLE_SIZE$1
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-handle__fill`,
              style: {
                backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
                borderRadius: RADIUS$1,
                width: HANDLE_SIZE$1,
                height: HANDLE_SIZE$1
              }
            })))));
          }
        });
        const HANDLE_SIZE = '12px';
        const RADIUS = '6px';
        const Pallete = defineComponent({
          name: 'Pallete',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            rgba: {
              type: Array,
              default: null
            },
            // 0 - 360
            displayedHue: {
              type: Number,
              required: true
            },
            displayedSv: {
              type: Array,
              required: true
            },
            onUpdateSV: {
              type: Function,
              required: true
            },
            onComplete: Function
          },
          setup(props) {
            const palleteRef = ref(null);
            function handleMouseDown(e) {
              if (!palleteRef.value) return;
              on('mousemove', document, handleMouseMove);
              on('mouseup', document, handleMouseUp);
              handleMouseMove(e);
            }
            function handleMouseMove(e) {
              const {
                value: palleteEl
              } = palleteRef;
              if (!palleteEl) return;
              const {
                width,
                height,
                left,
                bottom
              } = palleteEl.getBoundingClientRect();
              const newV = (bottom - e.clientY) / height;
              const newS = (e.clientX - left) / width;
              const normalizedNewS = 100 * (newS > 1 ? 1 : newS < 0 ? 0 : newS);
              const normalizedNewV = 100 * (newV > 1 ? 1 : newV < 0 ? 0 : newV);
              props.onUpdateSV(normalizedNewS, normalizedNewV);
            }
            function handleMouseUp() {
              var _a;
              off('mousemove', document, handleMouseMove);
              off('mouseup', document, handleMouseUp);
              (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
            }
            return {
              palleteRef,
              handleColor: computed(() => {
                const {
                  rgba
                } = props;
                if (!rgba) return '';
                return `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
              }),
              handleMouseDown
            };
          },
          render() {
            const {
              clsPrefix
            } = this;
            return h("div", {
              class: `${clsPrefix}-color-picker-pallete`,
              onMousedown: this.handleMouseDown,
              ref: "palleteRef"
            }, h("div", {
              class: `${clsPrefix}-color-picker-pallete__layer`,
              style: {
                backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
              }
            }), h("div", {
              class: `${clsPrefix}-color-picker-pallete__layer ${clsPrefix}-color-picker-pallete__layer--shadowed`,
              style: {
                backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))'
              }
            }), this.rgba && h("div", {
              class: `${clsPrefix}-color-picker-handle`,
              style: {
                width: HANDLE_SIZE,
                height: HANDLE_SIZE,
                borderRadius: RADIUS,
                left: `calc(${this.displayedSv[0]}% - ${RADIUS})`,
                bottom: `calc(${this.displayedSv[1]}% - ${RADIUS})`
              }
            }, h("div", {
              class: `${clsPrefix}-color-picker-handle__fill`,
              style: {
                backgroundColor: this.handleColor,
                borderRadius: RADIUS,
                width: HANDLE_SIZE,
                height: HANDLE_SIZE
              }
            })));
          }
        });

        // vars:
        // --n-color
        // --n-text-color
        // --n-border-radius
        // --n-panel-font-size
        // --n-font-size
        // --n-bezier
        // --n-height
        // --n-box-shadow
        // --n-divider-color
        const style = c([cB('color-picker', `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), cB('color-picker-panel', `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition(), cB('input', `
 text-align: center;
 `)]), cB('color-picker-checkboard', `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [c('&::after', `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB('color-picker-slider', `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [cE('image', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), c('&::after', `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), cB('color-picker-handle', `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [cE('fill', `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), cB('color-picker-pallete', `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [cE('layer', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM('shadowed', `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), cB('color-picker-preview', `
 display: flex;
 `, [cE('sliders', `
 flex: 1 0 auto;
 `), cE('preview', `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), cE('fill', `
 display: block;
 width: 30px;
 height: 30px;
 `), cE('input', `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), cB('color-picker-input', `
 display: flex;
 align-items: center;
 `, [cB('input', `
 flex-grow: 1;
 flex-basis: 0;
 `), cE('mode', `
 width: 72px;
 text-align: center;
 `)]), cB('color-picker-control', `
 padding: 12px;
 `), cB('color-picker-action', `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [cB('button', 'margin-left: 8px;')]), cB('color-picker-trigger', `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [cE('value', `
 white-space: nowrap;
 position: relative;
 `), cE('fill', `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), cM('disabled', 'cursor: not-allowed'), cB('color-picker-checkboard', `
 border-radius: var(--n-border-radius);
 `, [c('&::after', `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), cB('color-picker-swatches', `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [cB('color-picker-swatch', `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [cE('fill', `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), c('&:focus', `
 outline: none;
 `, [cE('fill', [c('&::after', `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);
        const colorPickerProps = Object.assign(Object.assign({}, useTheme.props), {
          value: String,
          show: {
            type: Boolean,
            default: undefined
          },
          defaultShow: Boolean,
          defaultValue: String,
          modes: {
            type: Array,
            // no hsva by default since browser doesn't support it
            default: () => ['rgb', 'hex', 'hsl']
          },
          placement: {
            type: String,
            default: 'bottom-start'
          },
          to: useAdjustedTo.propTo,
          showAlpha: {
            type: Boolean,
            default: true
          },
          showPreview: Boolean,
          swatches: Array,
          disabled: {
            type: Boolean,
            default: undefined
          },
          actions: {
            type: Array,
            default: null
          },
          internalActions: Array,
          size: String,
          renderLabel: Function,
          onComplete: Function,
          onConfirm: Function,
          onClear: Function,
          'onUpdate:show': [Function, Array],
          onUpdateShow: [Function, Array],
          'onUpdate:value': [Function, Array],
          onUpdateValue: [Function, Array]
        });
        const NColorPicker = defineComponent({
          name: 'ColorPicker',
          props: colorPickerProps,
          slots: Object,
          setup(props, {
            slots
          }) {
            const selfRef = ref(null);
            let upcomingValue = null;
            const formItem = useFormItem(props);
            const {
              mergedSizeRef,
              mergedDisabledRef
            } = formItem;
            const {
              localeRef
            } = useLocale('global');
            const {
              mergedClsPrefixRef,
              namespaceRef,
              inlineThemeDisabled
            } = useConfig(props);
            const themeRef = useTheme('ColorPicker', '-color-picker', style, colorPickerLight, props, mergedClsPrefixRef);
            provide(colorPickerInjectionKey, {
              themeRef,
              renderLabelRef: toRef(props, 'renderLabel'),
              colorPickerSlots: slots
            });
            const uncontrolledShowRef = ref(props.defaultShow);
            const mergedShowRef = useMergedState(toRef(props, 'show'), uncontrolledShowRef);
            function doUpdateShow(value) {
              const {
                onUpdateShow,
                'onUpdate:show': _onUpdateShow
              } = props;
              if (onUpdateShow) call(onUpdateShow, value);
              if (_onUpdateShow) call(_onUpdateShow, value);
              uncontrolledShowRef.value = value;
            }
            const {
              defaultValue
            } = props;
            const uncontrolledValueRef = ref(defaultValue === undefined ? deriveDefaultValue(props.modes, props.showAlpha) : defaultValue);
            const mergedValueRef = useMergedState(toRef(props, 'value'), uncontrolledValueRef);
            const undoStackRef = ref([mergedValueRef.value]);
            const valueIndexRef = ref(0);
            const valueModeRef = computed(() => getModeFromValue(mergedValueRef.value));
            const {
              modes
            } = props;
            const displayedModeRef = ref(getModeFromValue(mergedValueRef.value) || modes[0] || 'rgb');
            function handleUpdateDisplayedMode() {
              const {
                modes
              } = props;
              const {
                value: displayedMode
              } = displayedModeRef;
              const currentModeIndex = modes.findIndex(mode => mode === displayedMode);
              if (~currentModeIndex) {
                displayedModeRef.value = modes[(currentModeIndex + 1) % modes.length];
              } else {
                displayedModeRef.value = 'rgb';
              }
            }
            let _h,
              // avoid conflict with render function's h
              s, l, v, r, g, b, a;
            const hsvaRef = computed(() => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (!mergedValue) return null;
              switch (valueModeRef.value) {
                case 'hsv':
                  return hsva(mergedValue);
                case 'hsl':
                  [_h, s, l, a] = hsla(mergedValue);
                  return [...hsl2hsv(_h, s, l), a];
                case 'rgb':
                case 'hex':
                  [r, g, b, a] = rgba(mergedValue);
                  return [...rgb2hsv(r, g, b), a];
              }
            });
            const rgbaRef = computed(() => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (!mergedValue) return null;
              switch (valueModeRef.value) {
                case 'rgb':
                case 'hex':
                  return rgba(mergedValue);
                case 'hsv':
                  [_h, s, v, a] = hsva(mergedValue);
                  return [...hsv2rgb(_h, s, v), a];
                case 'hsl':
                  [_h, s, l, a] = hsla(mergedValue);
                  return [...hsl2rgb(_h, s, l), a];
              }
            });
            const hslaRef = computed(() => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (!mergedValue) return null;
              switch (valueModeRef.value) {
                case 'hsl':
                  return hsla(mergedValue);
                case 'hsv':
                  [_h, s, v, a] = hsva(mergedValue);
                  return [...hsv2hsl(_h, s, v), a];
                case 'rgb':
                case 'hex':
                  [r, g, b, a] = rgba(mergedValue);
                  return [...rgb2hsl(r, g, b), a];
              }
            });
            const mergedValueArrRef = computed(() => {
              switch (displayedModeRef.value) {
                case 'rgb':
                case 'hex':
                  return rgbaRef.value;
                case 'hsv':
                  return hsvaRef.value;
                case 'hsl':
                  return hslaRef.value;
              }
            });
            const displayedHueRef = ref(0);
            const displayedAlphaRef = ref(1);
            const displayedSvRef = ref([0, 0]);
            function handleUpdateSv(s, v) {
              const {
                value: hsvaArr
              } = hsvaRef;
              const hue = displayedHueRef.value;
              const alpha = hsvaArr ? hsvaArr[3] : 1;
              displayedSvRef.value = [s, v];
              const {
                showAlpha
              } = props;
              switch (displayedModeRef.value) {
                case 'hsv':
                  doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s, v, alpha]), 'cursor');
                  break;
                case 'hsl':
                  doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s, v), alpha]), 'cursor');
                  break;
                case 'rgb':
                  doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s, v), alpha]), 'cursor');
                  break;
                case 'hex':
                  doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s, v), alpha]), 'cursor');
                  break;
              }
            }
            function handleUpdateHue(hue) {
              displayedHueRef.value = hue;
              const {
                value: hsvaArr
              } = hsvaRef;
              if (!hsvaArr) {
                return;
              }
              const [, s, v, a] = hsvaArr;
              const {
                showAlpha
              } = props;
              switch (displayedModeRef.value) {
                case 'hsv':
                  doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s, v, a]), 'cursor');
                  break;
                case 'rgb':
                  doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s, v), a]), 'cursor');
                  break;
                case 'hex':
                  doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s, v), a]), 'cursor');
                  break;
                case 'hsl':
                  doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s, v), a]), 'cursor');
                  break;
              }
            }
            function handleUpdateAlpha(alpha) {
              switch (displayedModeRef.value) {
                case 'hsv':
                  [_h, s, v] = hsvaRef.value;
                  doUpdateValue(toHsvaString([_h, s, v, alpha]), 'cursor');
                  break;
                case 'rgb':
                  [r, g, b] = rgbaRef.value;
                  doUpdateValue(toRgbaString([r, g, b, alpha]), 'cursor');
                  break;
                case 'hex':
                  [r, g, b] = rgbaRef.value;
                  doUpdateValue(toHexaString([r, g, b, alpha]), 'cursor');
                  break;
                case 'hsl':
                  [_h, s, l] = hslaRef.value;
                  doUpdateValue(toHslaString([_h, s, l, alpha]), 'cursor');
                  break;
              }
              displayedAlphaRef.value = alpha;
            }
            function doUpdateValue(value, updateSource) {
              if (updateSource === 'cursor') {
                upcomingValue = value;
              } else {
                upcomingValue = null;
              }
              const {
                nTriggerFormChange,
                nTriggerFormInput
              } = formItem;
              const {
                onUpdateValue,
                'onUpdate:value': _onUpdateValue
              } = props;
              if (onUpdateValue) call(onUpdateValue, value);
              if (_onUpdateValue) call(_onUpdateValue, value);
              nTriggerFormChange();
              nTriggerFormInput();
              uncontrolledValueRef.value = value;
            }
            function handleInputUpdateValue(value) {
              doUpdateValue(value, 'input');
              void nextTick(handleComplete);
            }
            function handleComplete(pushStack = true) {
              const {
                value
              } = mergedValueRef;
              // no value & only hue changes will complete with no value
              if (value) {
                const {
                  nTriggerFormChange,
                  nTriggerFormInput
                } = formItem;
                const {
                  onComplete
                } = props;
                if (onComplete) {
                  onComplete(value);
                }
                const {
                  value: undoStack
                } = undoStackRef;
                const {
                  value: valueIndex
                } = valueIndexRef;
                if (pushStack) {
                  undoStack.splice(valueIndex + 1, undoStack.length, value);
                  valueIndexRef.value = valueIndex + 1;
                }
                nTriggerFormChange();
                nTriggerFormInput();
              }
            }
            function undo() {
              const {
                value: valueIndex
              } = valueIndexRef;
              if (valueIndex - 1 < 0) return;
              doUpdateValue(undoStackRef.value[valueIndex - 1], 'input');
              handleComplete(false);
              valueIndexRef.value = valueIndex - 1;
            }
            function redo() {
              const {
                value: valueIndex
              } = valueIndexRef;
              if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length) return;
              doUpdateValue(undoStackRef.value[valueIndex + 1], 'input');
              handleComplete(false);
              valueIndexRef.value = valueIndex + 1;
            }
            function handleClear() {
              doUpdateValue(null, 'input');
              const {
                onClear
              } = props;
              if (onClear) {
                onClear();
              }
              doUpdateShow(false);
            }
            function handleConfirm() {
              const {
                value
              } = mergedValueRef;
              const {
                onConfirm
              } = props;
              if (onConfirm) {
                onConfirm(value);
              }
              doUpdateShow(false);
            }
            const undoableRef = computed(() => valueIndexRef.value >= 1);
            const redoableRef = computed(() => {
              const {
                value: undoStack
              } = undoStackRef;
              return undoStack.length > 1 && valueIndexRef.value < undoStack.length - 1;
            });
            watch(mergedShowRef, value => {
              if (!value) {
                undoStackRef.value = [mergedValueRef.value];
                valueIndexRef.value = 0;
              }
            });
            watchEffect(() => {
              if (upcomingValue && upcomingValue === mergedValueRef.value) ;else {
                const {
                  value
                } = hsvaRef;
                if (value) {
                  displayedHueRef.value = value[0];
                  displayedAlphaRef.value = value[3];
                  displayedSvRef.value = [value[1], value[2]];
                }
              }
              upcomingValue = null;
            });
            const cssVarsRef = computed(() => {
              const {
                value: mergedSize
              } = mergedSizeRef;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  textColor,
                  color,
                  panelFontSize,
                  boxShadow,
                  border,
                  borderRadius,
                  dividerColor,
                  [createKey('height', mergedSize)]: height,
                  [createKey('fontSize', mergedSize)]: fontSize
                }
              } = themeRef.value;
              return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-text-color': textColor,
                '--n-color': color,
                '--n-panel-font-size': panelFontSize,
                '--n-font-size': fontSize,
                '--n-box-shadow': boxShadow,
                '--n-border': border,
                '--n-border-radius': borderRadius,
                '--n-height': height,
                '--n-divider-color': dividerColor
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('color-picker', computed(() => {
              return mergedSizeRef.value[0];
            }), cssVarsRef, props) : undefined;
            function renderPanel() {
              var _a;
              const {
                value: rgba
              } = rgbaRef;
              const {
                value: displayedHue
              } = displayedHueRef;
              const {
                internalActions,
                modes,
                actions
              } = props;
              const {
                value: mergedTheme
              } = themeRef;
              const {
                value: mergedClsPrefix
              } = mergedClsPrefixRef;
              return h("div", {
                class: [`${mergedClsPrefix}-color-picker-panel`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value],
                onDragstart: e => {
                  e.preventDefault();
                },
                style: inlineThemeDisabled ? undefined : cssVarsRef.value
              }, h("div", {
                class: `${mergedClsPrefix}-color-picker-control`
              }, h(Pallete, {
                clsPrefix: mergedClsPrefix,
                rgba: rgba,
                displayedHue: displayedHue,
                displayedSv: displayedSvRef.value,
                onUpdateSV: handleUpdateSv,
                onComplete: handleComplete
              }), h("div", {
                class: `${mergedClsPrefix}-color-picker-preview`
              }, h("div", {
                class: `${mergedClsPrefix}-color-picker-preview__sliders`
              }, h(HueSlider, {
                clsPrefix: mergedClsPrefix,
                hue: displayedHue,
                onUpdateHue: handleUpdateHue,
                onComplete: handleComplete
              }), props.showAlpha ? h(AlphaSlider, {
                clsPrefix: mergedClsPrefix,
                rgba: rgba,
                alpha: displayedAlphaRef.value,
                onUpdateAlpha: handleUpdateAlpha,
                onComplete: handleComplete
              }) : null), props.showPreview ? h(ColorPreview, {
                clsPrefix: mergedClsPrefix,
                mode: displayedModeRef.value,
                color: rgbaRef.value && toHexString(rgbaRef.value),
                onUpdateColor: color => {
                  doUpdateValue(color, 'input');
                }
              }) : null), h(ColorInput, {
                clsPrefix: mergedClsPrefix,
                showAlpha: props.showAlpha,
                mode: displayedModeRef.value,
                modes: modes,
                onUpdateMode: handleUpdateDisplayedMode,
                value: mergedValueRef.value,
                valueArr: mergedValueArrRef.value,
                onUpdateValue: handleInputUpdateValue
              }), ((_a = props.swatches) === null || _a === void 0 ? void 0 : _a.length) && h(ColorPickerSwatches, {
                clsPrefix: mergedClsPrefix,
                mode: displayedModeRef.value,
                swatches: props.swatches,
                onUpdateColor: color => {
                  doUpdateValue(color, 'input');
                }
              })), (actions === null || actions === void 0 ? void 0 : actions.length) ? h("div", {
                class: `${mergedClsPrefix}-color-picker-action`
              }, actions.includes('confirm') && h(Button, {
                size: "small",
                onClick: handleConfirm,
                theme: mergedTheme.peers.Button,
                themeOverrides: mergedTheme.peerOverrides.Button
              }, {
                default: () => localeRef.value.confirm
              }), actions.includes('clear') && h(Button, {
                size: "small",
                onClick: handleClear,
                disabled: !mergedValueRef.value,
                theme: mergedTheme.peers.Button,
                themeOverrides: mergedTheme.peerOverrides.Button
              }, {
                default: () => localeRef.value.clear
              })) : null, slots.action ? h("div", {
                class: `${mergedClsPrefix}-color-picker-action`
              }, {
                default: slots.action
              }) : internalActions ? h("div", {
                class: `${mergedClsPrefix}-color-picker-action`
              }, internalActions.includes('undo') && h(Button, {
                size: "small",
                onClick: undo,
                disabled: !undoableRef.value,
                theme: mergedTheme.peers.Button,
                themeOverrides: mergedTheme.peerOverrides.Button
              }, {
                default: () => localeRef.value.undo
              }), internalActions.includes('redo') && h(Button, {
                size: "small",
                onClick: redo,
                disabled: !redoableRef.value,
                theme: mergedTheme.peers.Button,
                themeOverrides: mergedTheme.peerOverrides.Button
              }, {
                default: () => localeRef.value.redo
              })) : null);
            }
            return {
              mergedClsPrefix: mergedClsPrefixRef,
              namespace: namespaceRef,
              selfRef,
              hsla: hslaRef,
              rgba: rgbaRef,
              mergedShow: mergedShowRef,
              mergedDisabled: mergedDisabledRef,
              isMounted: isMounted(),
              adjustedTo: useAdjustedTo(props),
              mergedValue: mergedValueRef,
              handleTriggerClick() {
                doUpdateShow(true);
              },
              handleClickOutside(e) {
                var _a;
                if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e))) {
                  return;
                }
                doUpdateShow(false);
              },
              renderPanel,
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            const {
              mergedClsPrefix,
              onRender
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return h("div", {
              class: [this.themeClass, `${mergedClsPrefix}-color-picker`],
              ref: "selfRef",
              style: this.cssVars
            }, h(Binder, null, {
              default: () => [h(VTarget, null, {
                default: () => h(ColorPickerTrigger, {
                  clsPrefix: mergedClsPrefix,
                  value: this.mergedValue,
                  hsla: this.hsla,
                  disabled: this.mergedDisabled,
                  onClick: this.handleTriggerClick
                })
              }), h(VFollower, {
                placement: this.placement,
                show: this.mergedShow,
                containerClass: this.namespace,
                teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
                to: this.adjustedTo
              }, {
                default: () => h(Transition, {
                  name: "fade-in-scale-up-transition",
                  appear: this.isMounted
                }, {
                  default: () => this.mergedShow ? withDirectives(this.renderPanel(), [[clickoutside, this.handleClickOutside, undefined, {
                    capture: true
                  }]]) : null
                })
              })]
            }));
          }
        });
        const _hoisted_1$1 = {
          class: "panel-header"
        };
        const _hoisted_2$1 = {
          class: "panel-title"
        };
        const _hoisted_3$1 = {
          class: "panel-content"
        };
        const _hoisted_4$1 = {
          class: "compact-layout"
        };
        const _hoisted_5$1 = {
          class: "preset-section"
        };
        const _hoisted_6$1 = {
          class: "section-label"
        };
        const _hoisted_7$1 = {
          class: "preset-colors"
        };
        const _hoisted_8$1 = ["title", "onClick"];
        const _hoisted_9$1 = {
          key: 0,
          class: "ri-check-line"
        };
        const _hoisted_10$1 = {
          class: "custom-section"
        };
        const _hoisted_11$1 = {
          class: "section-label"
        };
        const _hoisted_12$1 = {
          class: "custom-controls"
        };
        const _hoisted_13$1 = ["title"];
        const _hoisted_14$1 = ["placeholder"];
        const _hoisted_15$1 = {
          class: "preview-section"
        };
        const _hoisted_16$1 = {
          class: "section-label"
        };
        const _hoisted_17$1 = {
          key: 0,
          class: "color-picker-dropdown"
        };
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "ThemeColorPanel",
          props: {
            visible: {
              type: Boolean,
              default: false
            },
            currentColor: {
              default: "#1db954"
            },
            theme: {
              default: "dark"
            }
          },
          emits: ["colorChange", "close"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const presetColors = ref(getLyricThemeColors());
            const showColorPicker = ref(false);
            const colorInput = ref("");
            const pickerColor = ref(props.currentColor);
            const getColorValue = color => {
              return getPresetColorValue(color.id, props.theme);
            };
            const isColorActive = color => {
              const colorValue = getColorValue(color);
              return colorValue === props.currentColor;
            };
            const getColorName = color => {
              return t(`settings.themeColor.colorNames.${color.id}`) || color.name;
            };
            const getPreviewStyle = () => {
              const progress = 60;
              return {
                background: `linear-gradient(to right, ${props.currentColor} ${progress}%, var(--text-color) ${progress}%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "18px",
                fontWeight: "600"
              };
            };
            const handleClose = () => {
              showColorPicker.value = false;
              emit("close");
            };
            const handlePresetColorSelect = color => {
              const colorValue = getColorValue(color);
              const optimizedColor = optimizeColorForTheme(colorValue, props.theme);
              emit("colorChange", optimizedColor);
              colorInput.value = optimizedColor;
              pickerColor.value = optimizedColor;
            };
            const handleColorInput = () => {
              if (validateColor(colorInput.value)) {
                try {
                  const optimizedColor = optimizeColorForTheme(colorInput.value, props.theme);
                  pickerColor.value = optimizedColor;
                  emit("colorChange", optimizedColor);
                } catch (error) {
                  console.error("Failed to optimize color:", error);
                  colorInput.value = props.currentColor;
                  pickerColor.value = props.currentColor;
                }
              }
            };
            const handleColorInputConfirm = () => {
              if (validateColor(colorInput.value)) {
                try {
                  const optimizedColor = optimizeColorForTheme(colorInput.value, props.theme);
                  emit("colorChange", optimizedColor);
                } catch (error) {
                  console.error("Failed to optimize color:", error);
                  colorInput.value = props.currentColor;
                  pickerColor.value = props.currentColor;
                }
              } else {
                console.warn("Invalid color input:", colorInput.value);
                colorInput.value = props.currentColor;
                pickerColor.value = props.currentColor;
              }
            };
            const handlePickerColorChange = color => {
              if (validateColor(color)) {
                try {
                  const optimizedColor = optimizeColorForTheme(color, props.theme);
                  colorInput.value = optimizedColor;
                  emit("colorChange", optimizedColor);
                } catch (error) {
                  console.error("Failed to optimize picker color:", error);
                  colorInput.value = props.currentColor;
                  pickerColor.value = props.currentColor;
                }
              } else {
                console.warn("Invalid picker color:", color);
              }
            };
            watch(() => props.currentColor, newColor => {
              colorInput.value = newColor;
              pickerColor.value = newColor;
            }, {
              immediate: true
            });
            watch(() => props.visible, visible => {
              if (!visible) {
                showColorPicker.value = false;
              }
            });
            return (_ctx, _cache) => {
              return withDirectives((openBlock(), createElementBlock("div", {
                class: normalizeClass(["theme-color-panel", {
                  visible: __props.visible,
                  hidden: !__props.visible
                }]),
                onClick: _cache[3] || (_cache[3] = withModifiers(() => {}, ["stop"]))
              }, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("span", _hoisted_2$1, toDisplayString(unref(t)("settings.themeColor.title")), 1), createBaseVNode("div", {
                class: "close-button",
                onClick: handleClose
              }, [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                class: "ri-close-line"
              }, null, -1)]))])]), createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [createBaseVNode("div", _hoisted_6$1, toDisplayString(unref(t)("settings.themeColor.presetColors")), 1), createBaseVNode("div", _hoisted_7$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(presetColors.value, color => {
                return openBlock(), createElementBlock("div", {
                  key: color.id,
                  class: normalizeClass(["color-dot", {
                    active: isColorActive(color)
                  }]),
                  style: normalizeStyle({
                    backgroundColor: getColorValue(color)
                  }),
                  title: getColorName(color),
                  onClick: $event => handlePresetColorSelect(color)
                }, [isColorActive(color) ? (openBlock(), createElementBlock("i", _hoisted_9$1)) : createCommentVNode("", true)], 14, _hoisted_8$1);
              }), 128))])]), _cache[6] || (_cache[6] = createBaseVNode("div", {
                class: "divider"
              }, null, -1)), createBaseVNode("div", _hoisted_10$1, [createBaseVNode("div", _hoisted_11$1, toDisplayString(unref(t)("settings.themeColor.customColor")), 1), createBaseVNode("div", _hoisted_12$1, [createBaseVNode("div", {
                class: "color-preview",
                style: normalizeStyle({
                  backgroundColor: __props.currentColor
                }),
                onClick: _cache[0] || (_cache[0] = $event => showColorPicker.value = !showColorPicker.value),
                title: showColorPicker.value ? unref(t)("settings.themeColor.tooltips.closeColorPicker") : unref(t)("settings.themeColor.tooltips.openColorPicker")
              }, [...(_cache[5] || (_cache[5] = [createBaseVNode("i", {
                class: "ri-palette-line"
              }, null, -1)]))], 12, _hoisted_13$1), withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => colorInput.value = $event),
                type: "text",
                class: "color-input",
                placeholder: unref(t)("settings.themeColor.placeholder"),
                onInput: handleColorInput,
                onKeyup: withKeys(handleColorInputConfirm, ["enter"])
              }, null, 40, _hoisted_14$1), [[vModelText, colorInput.value]])])]), _cache[7] || (_cache[7] = createBaseVNode("div", {
                class: "divider"
              }, null, -1)), createBaseVNode("div", _hoisted_15$1, [createBaseVNode("div", _hoisted_16$1, toDisplayString(unref(t)("settings.themeColor.preview")), 1), createBaseVNode("div", {
                class: "preview-text",
                style: normalizeStyle(getPreviewStyle())
              }, toDisplayString(unref(t)("settings.themeColor.previewText")), 5)])]), showColorPicker.value ? (openBlock(), createElementBlock("div", _hoisted_17$1, [createVNode(unref(NColorPicker), {
                value: pickerColor.value,
                "onUpdate:value": [_cache[2] || (_cache[2] = $event => pickerColor.value = $event), handlePickerColorChange],
                "show-alpha": false,
                modes: ["hex"],
                size: "small"
              }, null, 8, ["value"])])) : createCommentVNode("", true)])], 2)), [[vShow, __props.visible]]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const ThemeColorPanel = /* @__PURE__ */_export_sfc(_sfc_main$1, [["__scopeId", "data-v-15a507c6"]]);
        const _hoisted_1 = {
          class: "font-size-controls"
        };
        const _hoisted_2 = ["innerHTML"];
        const _hoisted_3 = {
          class: "play-controls"
        };
        const _hoisted_4 = {
          class: "control-buttons"
        };
        const _hoisted_5 = {
          key: 0,
          class: "ri-sun-line"
        };
        const _hoisted_6 = {
          key: 1,
          class: "ri-moon-line"
        };
        const _hoisted_7 = ["title"];
        const _hoisted_8 = ["title"];
        const _hoisted_9 = {
          key: 0,
          class: "ri-lock-line"
        };
        const _hoisted_10 = {
          key: 1,
          class: "ri-lock-unlock-line"
        };
        const _hoisted_11 = {
          key: 0,
          class: "lyric-scroll"
        };
        const _hoisted_12 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_13 = {
          key: 0,
          class: "lyric-word"
        };
        const _hoisted_14 = {
          key: 1,
          class: "lyric-empty"
        };
        const _hoisted_15 = {
          key: 1,
          class: "lyric-single-mode"
        };
        const _hoisted_16 = {
          key: 0,
          class: "lyric-line lyric-line-current"
        };
        const _hoisted_17 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_18 = {
          key: 0,
          class: "lyric-word"
        };
        const _hoisted_19 = {
          key: 1,
          class: "lyric-empty"
        };
        const _hoisted_20 = {
          key: 0,
          class: "word-by-word-lyric"
        };
        const _hoisted_21 = {
          key: 0,
          class: "lyric-word"
        };
        const _hoisted_22 = {
          key: 1,
          class: "lyric-empty"
        };
        const fontSizeStep = 2;
        const TIME_OFFSET = 400;
        const moveThrottleMs = 10;
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "Lyric"
          },
          __name: "index",
          setup(__props, {
            expose: __expose
          }) {
            const windowData = window;
            const containerRef = ref(null);
            const containerHeight = ref(0);
            const lineHeight = ref(60);
            const currentIndex = ref(0);
            const fontSize = ref(24);
            const animationFrameId = ref(null);
            const lastUpdateTime = ref(performance.now());
            const staticData = ref({
              lrcArray: [],
              lrcTimeArray: [],
              allTime: 0,
              playMusic: {}
            });
            const dynamicData = ref({
              nowTime: 0,
              startCurrentTime: 0,
              nextTime: 0,
              isPlay: true
            });
            const loadLyricSettings = () => {
              try {
                const stored = localStorage.getItem("lyricData");
                if (stored) {
                  const parsed = JSON.parse(stored);
                  let validatedHighlightColor = parsed.highlightColor;
                  if (validatedHighlightColor && !validateColor(validatedHighlightColor)) {
                    console.warn("Invalid stored highlight color, removing it");
                    validatedHighlightColor = void 0;
                  }
                  return {
                    isTop: parsed.isTop ?? false,
                    theme: parsed.theme === "light" || parsed.theme === "dark" ? parsed.theme : "dark",
                    isLock: parsed.isLock ?? false,
                    highlightColor: validatedHighlightColor,
                    showTranslation: parsed.showTranslation ?? true,
                    displayMode: ["scroll", "single", "double"].includes(parsed.displayMode) ? parsed.displayMode : "scroll"
                  };
                }
              } catch (error) {
                console.error("Failed to load lyric settings:", error);
              }
              return {
                isTop: false,
                theme: "dark",
                isLock: false,
                highlightColor: void 0,
                showTranslation: true,
                displayMode: "scroll"
              };
            };
            const lyricSetting = ref(loadLyricSettings());
            const hasTranslation = computed(() => staticData.value.lrcArray.some(line => line.trText));
            const currentGroupIndex = computed(() => Math.floor(currentIndex.value / 2));
            const currentGroupLines = computed(() => {
              const start = currentGroupIndex.value * 2;
              return staticData.value.lrcArray.slice(start, start + 2).map((line, i) => ({
                ...line,
                index: start + i
              }));
            });
            const isGroupTransitioning = ref(false);
            const displayMode = computed(() => lyricSetting.value.displayMode);
            const showTranslation = computed(() => lyricSetting.value.showTranslation);
            const isHovering = ref(false);
            const showThemeColorPanel = ref(false);
            const currentHighlightColor = ref("#1db954");
            const showControls = computed(() => {
              if (lyricSetting.value.isLock) {
                return isHovering.value;
              }
              return true;
            });
            const handleMouseEnter = () => {
              if (lyricSetting.value.isLock) {
                isHovering.value = true;
                windowData.electron.ipcRenderer.send("set-ignore-mouse", true);
              } else {
                windowData.electron.ipcRenderer.send("set-ignore-mouse", false);
              }
            };
            const handleMouseLeave = () => {
              if (!lyricSetting.value.isLock) return;
              isHovering.value = false;
              windowData.electron.ipcRenderer.send("set-ignore-mouse", false);
              const lyricWindow = document.querySelector(".lyric-window");
              if (lyricWindow) {
                lyricWindow.style.background = "transparent";
                requestAnimationFrame(() => {
                  lyricWindow.style.background = "transparent";
                });
              }
            };
            watch(() => lyricSetting.value.isLock, newLock => {
              if (newLock) {
                isHovering.value = false;
                showThemeColorPanel.value = false;
              }
            });
            onMounted(() => {
              if (lyricSetting.value.isLock) {
                isHovering.value = false;
              }
            });
            onUnmounted(() => {});
            const wrapperStyle = computed(() => {
              if (displayMode.value !== "scroll") {
                return {};
              }
              if (!containerHeight.value) {
                return {
                  transform: "translateY(0)",
                  transition: "none"
                };
              }
              const containerCenter = containerHeight.value / 2;
              const getLineHeight = line => {
                const baseHeight = lineHeight.value;
                if (showTranslation.value && line.trText) {
                  const extraHeight = Math.round(fontSize.value * 0.6 * 1.4);
                  return baseHeight + extraHeight;
                }
                return baseHeight;
              };
              let accumulatedHeight = containerHeight.value * 0.2;
              for (let i = 0; i < currentIndex.value; i++) {
                if (i < staticData.value.lrcArray.length) {
                  accumulatedHeight += getLineHeight(staticData.value.lrcArray[i]);
                } else {
                  accumulatedHeight += lineHeight.value;
                }
              }
              const currentLineHeight = currentIndex.value < staticData.value.lrcArray.length ? getLineHeight(staticData.value.lrcArray[currentIndex.value]) : lineHeight.value;
              accumulatedHeight += currentLineHeight;
              const targetOffset = containerCenter - accumulatedHeight;
              let contentHeight = containerHeight.value * 0.4;
              for (const line of staticData.value.lrcArray) {
                contentHeight += getLineHeight(line);
              }
              const minOffset = -(contentHeight - containerHeight.value);
              const maxOffset = 0;
              const finalOffset = Math.min(maxOffset, Math.max(minOffset, targetOffset));
              return {
                transform: `translateY(${finalOffset}px)`,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              };
            });
            const getDynamicLineStyle = (line, withTranslation = true) => {
              const defaultHeight = lineHeight.value;
              if (withTranslation && line.trText) {
                const extraHeight = Math.round(fontSize.value * 0.6 * 1.4);
                return {
                  height: `${defaultHeight + extraHeight}px`
                };
              }
              return {
                height: `${defaultHeight}px`
              };
            };
            const updateContainerHeight = () => {
              if (!containerRef.value) return;
              containerHeight.value = containerRef.value.clientHeight;
              const baseLineHeight = fontSize.value * 2.5;
              const maxAllowedHeight = containerHeight.value / 3;
              lineHeight.value = Math.min(maxAllowedHeight, Math.max(40, baseLineHeight));
            };
            const handleFontSizeChange = async () => {
              saveFontSize();
              updateContainerHeight();
            };
            const increaseFontSize = async () => {
              if (fontSize.value < 48) {
                fontSize.value += fontSizeStep;
                await handleFontSizeChange();
              }
            };
            const decreaseFontSize = async () => {
              if (fontSize.value > 12) {
                fontSize.value -= fontSizeStep;
                await handleFontSizeChange();
              }
            };
            const saveFontSize = () => {
              localStorage.setItem("lyricFontSize", fontSize.value.toString());
            };
            onMounted(() => {
              const resizeObserver = new ResizeObserver(() => {
                updateContainerHeight();
              });
              if (containerRef.value) {
                resizeObserver.observe(containerRef.value);
              }
              onUnmounted(() => {
                resizeObserver.disconnect();
              });
            });
            const actualTime = ref(0);
            const currentProgress = computed(() => {
              const times = staticData.value.lrcTimeArray;
              const idx = currentIndex.value;
              const startTimeMs = times[idx];
              const endTimeMs = times[idx + 1];
              if (startTimeMs === void 0 || endTimeMs === void 0 || endTimeMs <= startTimeMs) return 0;
              const currentTimeMs = actualTime.value * 1e3;
              const elapsed = currentTimeMs - startTimeMs;
              const duration = endTimeMs - startTimeMs;
              return Math.min(Math.max(elapsed / duration, 0), 1);
            });
            const getLyricStyle = index => {
              if (index !== currentIndex.value) return {};
              const progress = currentProgress.value * 100;
              return {
                background: `linear-gradient(to right, var(--highlight-color) ${progress}%, var(--text-color) ${progress}%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                // 优化字体渲染，减少发虚
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                // 使用 transform 而不是直接的 transition 来提高性能
                transform: "translateZ(0)",
                // 启用硬件加速
                backfaceVisibility: "hidden",
                // 减少渲染问题
                transition: "background 0.1s linear"
              };
            };
            const getWordStyle = (lineIndex, _wordIndex, word) => {
              if (lineIndex !== currentIndex.value) {
                return {
                  color: "var(--text-color)",
                  transition: "color 0.3s ease",
                  backgroundImage: "none",
                  WebkitTextFillColor: "initial"
                };
              }
              const currentTime = actualTime.value * 1e3;
              const wordStartTime = word.startTime;
              const wordEndTime = word.startTime + word.duration;
              if (currentTime >= wordStartTime && currentTime < wordEndTime) {
                const progress = Math.min((currentTime - wordStartTime) / word.duration, 1);
                const progressPercent = Math.round(progress * 100);
                return {
                  backgroundImage: `linear-gradient(to right, var(--highlight-color) 0%, var(--highlight-color) ${progressPercent}%, var(--text-color) ${progressPercent}%, var(--text-color) 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.1s ease"
                };
              } else if (currentTime >= wordEndTime) {
                return {
                  color: "var(--highlight-color)",
                  WebkitTextFillColor: "initial",
                  transition: "none"
                };
              } else {
                return {
                  color: "var(--text-color)",
                  WebkitTextFillColor: "initial",
                  transition: "none"
                };
              }
            };
            const updateProgress = () => {
              if (!dynamicData.value.isPlay) {
                if (animationFrameId.value) {
                  cancelAnimationFrame(animationFrameId.value);
                  animationFrameId.value = null;
                }
                return;
              }
              const timeDiff = (performance.now() - lastUpdateTime.value) / 1e3;
              actualTime.value = dynamicData.value.nowTime + timeDiff + TIME_OFFSET / 1e3;
              animationFrameId.value = requestAnimationFrame(updateProgress);
            };
            watch(() => dynamicData.value, newData => {
              lastUpdateTime.value = performance.now();
              actualTime.value = newData.nowTime + TIME_OFFSET / 1e3;
              if (newData.isPlay && !animationFrameId.value) {
                updateProgress();
              }
            }, {
              deep: true
            });
            watch(() => dynamicData.value.isPlay, isPlaying => {
              if (isPlaying) {
                lastUpdateTime.value = performance.now();
                updateProgress();
              } else if (animationFrameId.value) {
                cancelAnimationFrame(animationFrameId.value);
                animationFrameId.value = null;
              }
            });
            const handleDataUpdate = parsedData => {
              if (!parsedData) {
                console.error("Invalid update data received:", parsedData);
                return;
              }
              if (parsedData.type === "update") {
                dynamicData.value = {
                  ...dynamicData.value,
                  nowTime: parsedData.nowTime || dynamicData.value.nowTime,
                  isPlay: typeof parsedData.isPlay === "boolean" ? parsedData.isPlay : dynamicData.value.isPlay
                };
                if (typeof parsedData.nowIndex === "number") {
                  currentIndex.value = parsedData.nowIndex;
                }
                return;
              }
              staticData.value = {
                lrcArray: parsedData.lrcArray || [],
                lrcTimeArray: parsedData.lrcTimeArray || [],
                allTime: parsedData.allTime || 0,
                playMusic: parsedData.playMusic || {}
              };
              dynamicData.value = {
                nowTime: parsedData.nowTime || 0,
                startCurrentTime: parsedData.startCurrentTime || 0,
                nextTime: parsedData.nextTime || 0,
                isPlay: parsedData.isPlay
              };
              if (typeof parsedData.nowIndex === "number") {
                currentIndex.value = parsedData.nowIndex;
              }
            };
            onMounted(() => {
              const savedFontSize = localStorage.getItem("lyricFontSize");
              if (savedFontSize) {
                fontSize.value = Number(savedFontSize);
                lineHeight.value = fontSize.value * 2.5;
              }
              updateContainerHeight();
              window.addEventListener("resize", updateContainerHeight);
              windowData.electron.ipcRenderer.on("receive-lyric", (_, data) => {
                try {
                  const parsedData = JSON.parse(data);
                  handleDataUpdate(parsedData);
                } catch (error) {
                  console.error("Error parsing lyric data:", error);
                }
              });
              windowData.electron.ipcRenderer.send("lyric-ready");
            });
            onUnmounted(() => {
              window.removeEventListener("resize", updateContainerHeight);
            });
            const checkTheme = () => {
              if (lyricSetting.value.theme === "light") {
                lyricSetting.value.theme = "dark";
              } else {
                lyricSetting.value.theme = "light";
              }
            };
            const toggleThemeColorPanel = () => {
              showThemeColorPanel.value = !showThemeColorPanel.value;
            };
            const handleColorChange = color => {
              if (!validateColor(color)) {
                console.error("Invalid color received:", color);
                return;
              }
              try {
                currentHighlightColor.value = color;
                updateThemeColorWithTransition(color);
                lyricSetting.value.highlightColor = color;
                saveLyricThemeColor(color);
              } catch (error) {
                console.error("Failed to handle color change:", error);
                const defaultColor = getCurrentLyricThemeColor(lyricSetting.value.theme);
                currentHighlightColor.value = defaultColor;
                updateThemeColorWithTransition(defaultColor);
              }
            };
            const handleThemeColorPanelClose = () => {
              showThemeColorPanel.value = false;
            };
            const resetThemeColor = () => {
              const defaultColor = getCurrentLyricThemeColor(lyricSetting.value.theme);
              currentHighlightColor.value = defaultColor;
              lyricSetting.value.highlightColor = void 0;
              updateThemeColorWithTransition(defaultColor);
              try {
                const settings = loadLyricSettings();
                delete settings.highlightColor;
                saveLyricSettings(settings);
              } catch (error) {
                console.error("Failed to reset theme color:", error);
              }
            };
            const validateAndFixColorSettings = () => {
              try {
                if (currentHighlightColor.value && !validateColor(currentHighlightColor.value)) {
                  console.warn("Current highlight color is invalid, resetting to default");
                  const defaultColor = getCurrentLyricThemeColor(lyricSetting.value.theme);
                  currentHighlightColor.value = defaultColor;
                  lyricSetting.value.highlightColor = void 0;
                  updateCSSVariable("--lyric-highlight-color", defaultColor);
                }
                if (lyricSetting.value.highlightColor && !validateColor(lyricSetting.value.highlightColor)) {
                  console.warn("Stored highlight color is invalid, removing it");
                  lyricSetting.value.highlightColor = void 0;
                }
              } catch (error) {
                console.error("Failed to validate color settings:", error);
                const defaultColor = getCurrentLyricThemeColor(lyricSetting.value.theme);
                currentHighlightColor.value = defaultColor;
                lyricSetting.value.highlightColor = void 0;
                updateCSSVariable("--lyric-highlight-color", defaultColor);
              }
            };
            __expose({
              resetThemeColor,
              validateAndFixColorSettings
            });
            const updateCSSVariable = (name, value) => {
              document.documentElement.style.setProperty(name, value);
            };
            const updateThemeColorWithTransition = newColor => {
              const lyricWindow = document.querySelector(".lyric-window");
              if (lyricWindow) {
                lyricWindow.classList.add("color-transitioning");
              }
              updateCSSVariable("--lyric-highlight-color", newColor);
              setTimeout(() => {
                if (lyricWindow) {
                  lyricWindow.classList.remove("color-transitioning");
                }
              }, 300);
            };
            const initializeThemeColor = () => {
              let savedColor = lyricSetting.value.highlightColor;
              if (!savedColor) {
                savedColor = loadLyricThemeColor();
                if (savedColor) {
                  lyricSetting.value.highlightColor = savedColor;
                }
              }
              if (savedColor) {
                const optimizedColor = getCurrentLyricThemeColor(lyricSetting.value.theme);
                currentHighlightColor.value = optimizedColor;
                updateCSSVariable("--lyric-highlight-color", optimizedColor);
              } else {
                const defaultColor = getCurrentLyricThemeColor(lyricSetting.value.theme);
                currentHighlightColor.value = defaultColor;
                updateCSSVariable("--lyric-highlight-color", defaultColor);
              }
            };
            const handleLock = () => {
              lyricSetting.value.isLock = !lyricSetting.value.isLock;
              windowData.electron.ipcRenderer.send("set-ignore-mouse", lyricSetting.value.isLock);
            };
            const handleClose = () => {
              windowData.electron.ipcRenderer.send("close-lyric");
            };
            const cycleDisplayMode = () => {
              const modes = ["scroll", "single", "double"];
              const current = modes.indexOf(lyricSetting.value.displayMode);
              lyricSetting.value.displayMode = modes[(current + 1) % modes.length];
            };
            const saveLyricSettings = settings => {
              try {
                localStorage.setItem("lyricData", JSON.stringify(settings));
              } catch (error) {
                console.error("Failed to save lyric settings:", error);
              }
            };
            watch(() => lyricSetting.value, newValue => {
              saveLyricSettings(newValue);
            }, {
              deep: true
            });
            watch(() => lyricSetting.value.theme, newTheme => {
              if (currentHighlightColor.value) {
                const optimizedColor = getCurrentLyricThemeColor(newTheme);
                currentHighlightColor.value = optimizedColor;
                updateThemeColorWithTransition(optimizedColor);
              }
            });
            let groupFadeTimer = null;
            watch(currentGroupIndex, () => {
              if (displayMode.value !== "double") return;
              if (groupFadeTimer !== null) clearTimeout(groupFadeTimer);
              isGroupTransitioning.value = true;
              groupFadeTimer = setTimeout(() => {
                isGroupTransitioning.value = false;
                groupFadeTimer = null;
              }, 300);
            });
            const isDragging = ref(false);
            const startPosition = ref({
              x: 0,
              y: 0
            });
            const lastMoveTime = ref(0);
            const handleMouseDown = e => {
              if (lyricSetting.value.isLock || e.target.closest(".control-buttons") || e.target.closest(".font-size-controls") || e.target.closest(".play-controls")) {
                return;
              }
              if (e.button !== 0) return;
              isDragging.value = true;
              startPosition.value = {
                x: e.screenX,
                y: e.screenY
              };
              lastMoveTime.value = performance.now();
              windowData.electron.ipcRenderer.send("lyric-drag-start");
              const handleMouseMove = e2 => {
                if (!isDragging.value) return;
                const now = performance.now();
                if (now - lastMoveTime.value < moveThrottleMs) return;
                lastMoveTime.value = now;
                const deltaX = e2.screenX - startPosition.value.x;
                const deltaY = e2.screenY - startPosition.value.y;
                if (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0) {
                  windowData.electron.ipcRenderer.send("lyric-drag-move", {
                    deltaX,
                    deltaY
                  });
                  startPosition.value = {
                    x: e2.screenX,
                    y: e2.screenY
                  };
                }
              };
              const handleMouseUp = () => {
                if (!isDragging.value) return;
                isDragging.value = false;
                windowData.electron.ipcRenderer.send("lyric-drag-end");
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            };
            onUnmounted(() => {
              isDragging.value = false;
              if (groupFadeTimer !== null) {
                clearTimeout(groupFadeTimer);
                groupFadeTimer = null;
              }
            });
            onMounted(() => {
              const lyricLock = document.getElementById("lyric-lock");
              if (lyricLock) {
                lyricLock.onmouseenter = () => {
                  if (lyricSetting.value.isLock) {
                    windowData.electron.ipcRenderer.send("set-ignore-mouse", false);
                  }
                };
                lyricLock.onmouseleave = () => {
                  if (lyricSetting.value.isLock) {
                    windowData.electron.ipcRenderer.send("set-ignore-mouse", true);
                  }
                };
              }
              initializeThemeColor();
              validateAndFixColorSettings();
            });
            const handlePlayPause = () => {
              windowData.electron.ipcRenderer.send("control-back", "playpause");
            };
            const handlePrev = () => {
              windowData.electron.ipcRenderer.send("control-back", "prev");
            };
            const handleNext = () => {
              windowData.electron.ipcRenderer.send("control-back", "next");
            };
            return (_ctx, _cache) => {
              const _component_n_button_group = __unplugin_components_0;
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["lyric-window", [lyricSetting.value.theme, {
                  lyric_lock: lyricSetting.value.isLock
                }]]),
                onMousedown: handleMouseDown,
                onMouseenter: handleMouseEnter,
                onMouseleave: handleMouseLeave
              }, [_cache[7] || (_cache[7] = createBaseVNode("div", {
                class: "drag-overlay"
              }, null, -1)), createBaseVNode("div", {
                class: normalizeClass(["control-bar", {
                  "control-bar-show": showControls.value
                }])
              }, [createBaseVNode("div", _hoisted_1, [createVNode(_component_n_button_group, null, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: "control-button",
                  onClick: decreaseFontSize
                }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                  class: "ri-subtract-line"
                }, null, -1)]))]), createBaseVNode("div", {
                  class: "control-button",
                  onClick: increaseFontSize
                }, [...(_cache[2] || (_cache[2] = [createBaseVNode("i", {
                  class: "ri-add-line"
                }, null, -1)]))])]),
                _: 1
              }), createBaseVNode("div", {
                innerHTML: staticData.value.playMusic.name
              }, null, 8, _hoisted_2)]), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", {
                class: "control-button",
                onClick: handlePrev
              }, [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                class: "ri-skip-back-fill"
              }, null, -1)]))]), createBaseVNode("div", {
                class: "control-button play-button",
                onClick: handlePlayPause
              }, [createBaseVNode("i", {
                class: normalizeClass(dynamicData.value.isPlay ? "ri-pause-fill" : "ri-play-fill")
              }, null, 2)]), createBaseVNode("div", {
                class: "control-button",
                onClick: handleNext
              }, [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                class: "ri-skip-forward-fill"
              }, null, -1)]))])]), createBaseVNode("div", _hoisted_4, [createBaseVNode("div", {
                class: "control-button",
                onClick: checkTheme
              }, [lyricSetting.value.theme === "light" ? (openBlock(), createElementBlock("i", _hoisted_5)) : (openBlock(), createElementBlock("i", _hoisted_6))]), createBaseVNode("div", {
                class: normalizeClass(["control-button theme-color-button", {
                  active: showThemeColorPanel.value
                }]),
                onClick: toggleThemeColorPanel
              }, [...(_cache[5] || (_cache[5] = [createBaseVNode("i", {
                class: "ri-palette-line"
              }, null, -1)]))], 2), hasTranslation.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "control-button",
                title: showTranslation.value ? "隐藏翻译" : "显示翻译",
                onClick: _cache[0] || (_cache[0] = $event => lyricSetting.value.showTranslation = !lyricSetting.value.showTranslation)
              }, [createBaseVNode("i", {
                class: normalizeClass(["ri-translate-2", {
                  active: showTranslation.value
                }])
              }, null, 2)], 8, _hoisted_7)) : createCommentVNode("", true), createBaseVNode("div", {
                class: "control-button",
                title: displayMode.value === "scroll" ? "滚动模式" : displayMode.value === "single" ? "单行模式" : "双行模式",
                onClick: cycleDisplayMode
              }, [createBaseVNode("i", {
                class: normalizeClass({
                  "ri-align-justify": displayMode.value === "scroll",
                  "ri-subtract-line": displayMode.value === "single",
                  "ri-layout-row-line": displayMode.value === "double"
                })
              }, null, 2)], 8, _hoisted_8), createBaseVNode("div", {
                id: "lyric-lock",
                class: "control-button",
                onClick: handleLock
              }, [lyricSetting.value.isLock ? (openBlock(), createElementBlock("i", _hoisted_9)) : (openBlock(), createElementBlock("i", _hoisted_10))]), createBaseVNode("div", {
                class: "control-button",
                onClick: handleClose
              }, [...(_cache[6] || (_cache[6] = [createBaseVNode("i", {
                class: "ri-close-line"
              }, null, -1)]))])])], 2), createVNode(ThemeColorPanel, {
                visible: showThemeColorPanel.value,
                "current-color": currentHighlightColor.value,
                theme: lyricSetting.value.theme,
                onColorChange: handleColorChange,
                onClose: handleThemeColorPanelClose
              }, null, 8, ["visible", "current-color", "theme"]), createBaseVNode("div", {
                ref_key: "containerRef",
                ref: containerRef,
                class: "lyric-container"
              }, [displayMode.value === "scroll" ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("div", {
                class: "lyric-wrapper",
                style: normalizeStyle(wrapperStyle.value)
              }, [staticData.value.lrcArray?.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(staticData.value.lrcArray, (line, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: normalizeClass(["lyric-line", {
                    "lyric-line-current": index === currentIndex.value,
                    "lyric-line-passed": index < currentIndex.value,
                    "lyric-line-next": index === currentIndex.value + 1
                  }]),
                  style: normalizeStyle(getDynamicLineStyle(line, showTranslation.value))
                }, [createBaseVNode("div", {
                  class: "lyric-text",
                  style: normalizeStyle({
                    fontSize: `${fontSize.value}px`
                  })
                }, [line.hasWordByWord && line.words && line.words.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [(openBlock(true), createElementBlock(Fragment, null, renderList(line.words, (word, wordIndex) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: wordIndex
                  }, [createBaseVNode("span", {
                    class: "lyric-word",
                    style: normalizeStyle(getWordStyle(index, wordIndex, word))
                  }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_13, " ")) : createCommentVNode("", true)], 64);
                }), 128))])) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "lyric-text-inner",
                  style: normalizeStyle(getLyricStyle(index))
                }, toDisplayString(line.text || ""), 5))], 4), showTranslation.value && line.trText ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "lyric-translation",
                  style: normalizeStyle({
                    fontSize: `${fontSize.value * 0.6}px`
                  })
                }, toDisplayString(line.trText), 5)) : createCommentVNode("", true)], 6);
              }), 128)) : (openBlock(), createElementBlock("div", _hoisted_14, "无歌词"))], 4)])) : displayMode.value === "single" ? (openBlock(), createElementBlock("div", _hoisted_15, [staticData.value.lrcArray?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [createBaseVNode("div", {
                class: "lyric-text",
                style: normalizeStyle({
                  fontSize: `${fontSize.value}px`
                })
              }, [staticData.value.lrcArray[currentIndex.value] != null && staticData.value.lrcArray[currentIndex.value].hasWordByWord && (staticData.value.lrcArray[currentIndex.value].words?.length ?? 0) > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [(openBlock(true), createElementBlock(Fragment, null, renderList(staticData.value.lrcArray[currentIndex.value].words, (word, wordIndex) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: wordIndex
                }, [createBaseVNode("span", {
                  class: "lyric-word",
                  style: normalizeStyle(getWordStyle(currentIndex.value, wordIndex, word))
                }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_18, " ")) : createCommentVNode("", true)], 64);
              }), 128))])) : (openBlock(), createElementBlock("span", {
                key: 1,
                class: "lyric-text-inner",
                style: normalizeStyle(getLyricStyle(currentIndex.value))
              }, toDisplayString(staticData.value.lrcArray[currentIndex.value]?.text || ""), 5))], 4), showTranslation.value && staticData.value.lrcArray[currentIndex.value]?.trText ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "lyric-translation",
                style: normalizeStyle({
                  fontSize: `${fontSize.value * 0.6}px`
                })
              }, toDisplayString(staticData.value.lrcArray[currentIndex.value]?.trText), 5)) : createCommentVNode("", true)])) : (openBlock(), createElementBlock("div", _hoisted_19, "无歌词"))])) : (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(["lyric-double-mode", {
                  "group-fade": isGroupTransitioning.value
                }])
              }, [staticData.value.lrcArray?.length > 0 ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(currentGroupLines.value, line => {
                return openBlock(), createElementBlock("div", {
                  key: line.index,
                  class: normalizeClass(["lyric-line", {
                    "lyric-line-current": line.index === currentIndex.value
                  }])
                }, [createBaseVNode("div", {
                  class: "lyric-text",
                  style: normalizeStyle({
                    fontSize: `${fontSize.value}px`
                  })
                }, [line.hasWordByWord && line.words && line.words.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [(openBlock(true), createElementBlock(Fragment, null, renderList(line.words, (word, wordIndex) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: wordIndex
                  }, [createBaseVNode("span", {
                    class: "lyric-word",
                    style: normalizeStyle(getWordStyle(line.index, wordIndex, word))
                  }, toDisplayString(word.text), 5), word.space ? (openBlock(), createElementBlock("span", _hoisted_21, " ")) : createCommentVNode("", true)], 64);
                }), 128))])) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: "lyric-text-inner",
                  style: normalizeStyle(getLyricStyle(line.index))
                }, toDisplayString(line.text || ""), 5))], 4), showTranslation.value && line.trText ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "lyric-translation",
                  style: normalizeStyle({
                    fontSize: `${fontSize.value * 0.6}px`
                  })
                }, toDisplayString(line.trText), 5)) : createCommentVNode("", true)], 2);
              }), 128)) : (openBlock(), createElementBlock("div", _hoisted_22, "无歌词"))], 2))], 512)], 34);
            };
          }
        });

        /* unplugin-vue-components disabled */

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-2581b0c8"]]));
      }
    };
  });
})();

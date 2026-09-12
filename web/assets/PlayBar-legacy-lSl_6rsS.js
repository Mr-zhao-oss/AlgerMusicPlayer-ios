;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './MusicFullWrapper.vue_vue_type_script_setup_true_lang-legacy-BmUPc_kE.js', './musicSourceConfig-legacy-l_WsZg2A.js', './index-legacy-BqM8rotH.js', './Input-legacy-D1FyU7q2.js', './Add-legacy-CnU6_mh8.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, ref, audioService, onMounted, openBlock, createElementBlock, createBaseVNode, createTextVNode, toDisplayString, unref, isElectron, createBlock, withCtx, __unplugin_components_0, createCommentVNode, createVNode, __unplugin_components_1, Scrollbar, Fragment, renderList, __unplugin_components_0$1, _export_sfc, usePlayerStore, storeToRefs, watch, onUnmounted, Button, computed, __unplugin_components_1$2, __unplugin_components_3, __unplugin_components_2$1, normalizeClass, h, useSettingsStore, useMessage, playMusic, __unplugin_components_1$3, normalizeStyle, SongSourceConfigManager, setLxMusicRunner, initLxMusicRunner, CacheManager, useThrottleFn, nowTime, useArtist, allTime, getImgUrl, __unplugin_components_1$4, __unplugin_components_2$2, artistList, withModifiers, isMobile, isLyricWindowOpen, textColors, setAnimationClass, secondToMinute, openLyric, usePlayMode, _sfc_main$5, __unplugin_components_2, __unplugin_components_1$1, useMusicSources;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        ref = module.A;
        audioService = module.bm;
        onMounted = module.aq;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        createTextVNode = module.b7;
        toDisplayString = module.ac;
        unref = module.ad;
        isElectron = module.aW;
        createBlock = module.aY;
        withCtx = module.as;
        __unplugin_components_0 = module.ce;
        createCommentVNode = module.ah;
        createVNode = module.ak;
        __unplugin_components_1 = module.cO;
        Scrollbar = module.be;
        Fragment = module.ae;
        renderList = module.af;
        __unplugin_components_0$1 = module.d0;
        _export_sfc = module.ap;
        usePlayerStore = module.bb;
        storeToRefs = module.bF;
        watch = module.Y;
        onUnmounted = module.ar;
        Button = module.a1;
        computed = module.z;
        __unplugin_components_1$2 = module.ef;
        __unplugin_components_3 = module.dg;
        __unplugin_components_2$1 = module.cN;
        normalizeClass = module.aa;
        h = module.h;
        useSettingsStore = module.cH;
        useMessage = module.bt;
        playMusic = module.eg;
        __unplugin_components_1$3 = module.cf;
        normalizeStyle = module.ag;
        SongSourceConfigManager = module.eh;
        setLxMusicRunner = module.d7;
        initLxMusicRunner = module.d6;
        CacheManager = module.ei;
        useThrottleFn = module.ej;
        nowTime = module.ek;
        useArtist = module.b1;
        allTime = module.el;
        getImgUrl = module.aQ;
        __unplugin_components_1$4 = module.br;
        __unplugin_components_2$2 = module.bs;
        artistList = module.em;
        withModifiers = module.a9;
        isMobile = module.aX;
        isLyricWindowOpen = module.en;
        textColors = module.eo;
        setAnimationClass = module.bv;
        secondToMinute = module.bo;
        openLyric = module.ep;
      }, module => {
        usePlayMode = module.u;
        _sfc_main$5 = module._;
      }, module => {
        __unplugin_components_2 = module.a;
        __unplugin_components_1$1 = module._;
        useMusicSources = module.u;
      }, null, null, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "[data-v-aa8447ea] .n-scrollbar {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n[data-v-aa8447ea] .n-tag {\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n}\n[data-v-aa8447ea] .n-tag:hover {\n  transform: translateY(-2px);\n}\n[data-v-aa8447ea] .n-space {\n  flex-wrap: nowrap;\n  padding: 4px 0;\n}\n[data-v-aa8447ea] .n-slider {\n  --n-rail-height: 4px;\n  --n-rail-color: #e5e7eb;\n  --n-rail-color-hover: #d1d5db;\n  --n-fill-color: #22c55e;\n  --n-fill-color-hover: #16a34a;\n  --n-handle-color: #22c55e;\n  --n-handle-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n[data-v-aa8447ea] .n-slider .n-slider-handle {\n  transition: all 0.2s;\n}\n[data-v-aa8447ea] .n-slider .n-slider-handle:hover {\n  transform: scale(1.2);\n}.sleep-timer-content[data-v-ce63d1b8] {\n  width: 100%;\n  padding: 1rem;\n}\n.sleep-timer-content .timer-title[data-v-ce63d1b8] {\n  margin-bottom: 1rem;\n  text-align: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n}\n.sleep-timer-content .sleep-timer-active[data-v-ce63d1b8] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sleep-timer-content .sleep-timer-active .timer-status[data-v-ce63d1b8] {\n  margin-bottom: 1.25rem;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  padding: 2rem;\n}\n.sleep-timer-content .sleep-timer-active .timer-status[data-v-ce63d1b8]:is(.dark *) {\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.4;\n  --tw-shadow-color: rgb(17 24 39 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.sleep-timer-content .sleep-timer-active .timer-status[data-v-ce63d1b8] {\n  background-color: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1);\n  transition: all 0.3s ease;\n}\n.sleep-timer-content .sleep-timer-active .timer-status .timer-value[data-v-ce63d1b8] {\n  margin-bottom: 0.5rem;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-active .timer-status .timer-value.countdown-timer[data-v-ce63d1b8] {\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 2px;\n}\n.sleep-timer-content .sleep-timer-active .timer-status .timer-label[data-v-ce63d1b8] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-active .timer-status .timer-label[data-v-ce63d1b8]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-active .cancel-timer-btn[data-v-ce63d1b8] {\n  width: 100%;\n  border-radius: 9999px;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.sleep-timer-content .sleep-timer-active .cancel-timer-btn[data-v-ce63d1b8]:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.sleep-timer-content .sleep-timer-active .cancel-timer-btn[data-v-ce63d1b8]:active {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.sleep-timer-content .sleep-timer-options[data-v-ce63d1b8] {\n  display: flex;\n  flex-direction: column;\n}\n.sleep-timer-content .sleep-timer-options .option-section[data-v-ce63d1b8] {\n  margin-bottom: 1.75rem;\n}\n.sleep-timer-content .sleep-timer-options .option-section .option-title[data-v-ce63d1b8] {\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-options .option-section .option-title[data-v-ce63d1b8]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-options .option-section .option-title[data-v-ce63d1b8] {\n  letter-spacing: 0.3px;\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options[data-v-ce63d1b8] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8] {\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8] {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:hover,\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:hover,\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:hover,\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:is(.dark *) {\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.4;\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:hover:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:hover:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:hover:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8] {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1);\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:is(.dark *),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:is(.dark *) {\n  --tw-shadow-color: rgb(17 24 39 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:hover,\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:hover,\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:hover,\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .time-option-btn[data-v-ce63d1b8]:active,\n.sleep-timer-content .sleep-timer-options .option-section .time-options .songs-option-btn[data-v-ce63d1b8]:active,\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .time-option-btn[data-v-ce63d1b8]:active,\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .songs-option-btn[data-v-ce63d1b8]:active {\n  --tw-scale-x: .95;\n  --tw-scale-y: .95;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-time[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-songs[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-time[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-songs[data-v-ce63d1b8] {\n  margin-top: 1rem;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-time[data-v-ce63d1b8] > :not([hidden]) ~ :not([hidden]),\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-songs[data-v-ce63d1b8] > :not([hidden]) ~ :not([hidden]),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-time[data-v-ce63d1b8] > :not([hidden]) ~ :not([hidden]),\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-songs[data-v-ce63d1b8] > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-time .custom-time-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-time .custom-songs-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-songs .custom-time-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-songs .custom-songs-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-time .custom-time-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-time .custom-songs-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-songs .custom-time-input[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-songs .custom-songs-input[data-v-ce63d1b8] {\n  flex: 1 1 0%;\n}\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-time .custom-time-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-time .custom-songs-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-songs .custom-time-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .time-options .custom-songs .custom-songs-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-time .custom-time-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-time .custom-songs-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-songs .custom-time-btn[data-v-ce63d1b8],\n.sleep-timer-content .sleep-timer-options .option-section .songs-options .custom-songs .custom-songs-btn[data-v-ce63d1b8] {\n  border-radius: 9999px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.sleep-timer-content .sleep-timer-options .playlist-end-section[data-v-ce63d1b8] {\n  margin-top: 0.5rem;\n}\n.sleep-timer-content .sleep-timer-options .playlist-end-section .playlist-end-btn[data-v-ce63d1b8] {\n  border-radius: 9999px;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}.sleep-timer-countdown[data-v-c19783dd] {\n  position: fixed;\n  top: 0px;\n  left: 50%;\n  display: flex;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  align-items: center;\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);\n  z-index: 9998;\n  min-width: 80px;\n  text-align: center;\n  animation: fadeInDown-c19783dd 0.3s ease-out;\n}\n@keyframes fadeInDown-c19783dd {\nfrom {\n    transform: translate(-50%, -100%);\n    opacity: 0;\n}\nto {\n    transform: translate(-50%, 0);\n    opacity: 1;\n}\n}\n.sleep-timer-countdown span[data-v-c19783dd] {\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\n.advanced-controls-btn[data-v-c19783dd] {\n  position: relative;\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  cursor: pointer;\n}\n.advanced-controls-btn .iconfont[data-v-c19783dd] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.advanced-controls-btn .iconfont[data-v-c19783dd]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.advanced-controls-btn .active-indicator[data-v-c19783dd] {\n  position: absolute;\n  top: -0.25rem;\n  right: -0.25rem;\n  display: flex;\n}\n.advanced-controls-btn .active-indicator .timer-badge[data-v-c19783dd],\n.advanced-controls-btn .active-indicator .speed-badge[data-v-c19783dd] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  height: 16px;\n  min-width: 16px;\n  padding: 0 3px;\n  font-weight: 600;\n  font-size: 10px;\n}\n.advanced-controls-btn .active-indicator .timer-badge i[data-v-c19783dd],\n.advanced-controls-btn .active-indicator .speed-badge i[data-v-c19783dd] {\n  font-size: 10px;\n}\n.advanced-controls-btn .active-indicator .timer-badge + .speed-badge[data-v-c19783dd] {\n  z-index: 10;\n  margin-left: -0.5rem;\n}\n.eq-modal-content[data-v-c19783dd],\n.timer-modal-content[data-v-c19783dd],\n.speed-modal-content[data-v-c19783dd] {\n  border-radius: 1.5rem;\n  background-color: rgb(248 249 250 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.8;\n  padding: 1.5rem;\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.eq-modal-content[data-v-c19783dd]:is(.dark *),\n.timer-modal-content[data-v-c19783dd]:is(.dark *),\n.speed-modal-content[data-v-c19783dd]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 22 22 / var(--tw-bg-opacity, 1));\n}\n.eq-modal-content[data-v-c19783dd],\n.timer-modal-content[data-v-c19783dd],\n.speed-modal-content[data-v-c19783dd] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.eq-modal-content[data-v-c19783dd] {\n  max-width: 800px;\n  padding: 2.5rem;\n}\n.speed-modal-content h3[data-v-c19783dd] {\n  margin-bottom: 1rem;\n  text-align: center;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n}\n.speed-modal-content .speed-controls[data-v-c19783dd] {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.speed-modal-content .speed-options[data-v-c19783dd] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem;\n}\n.speed-modal-content .speed-slider[data-v-c19783dd] {\n  margin-top: 1rem;\n}\n.speed-modal-content .speed-option[data-v-c19783dd] {\n  cursor: pointer;\n  border-radius: 9999px;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.speed-modal-content .speed-option[data-v-c19783dd]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.speed-modal-content .speed-option[data-v-c19783dd]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1));\n}\n.speed-modal-content .speed-option[data-v-c19783dd]:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 83 45 / var(--tw-bg-opacity, 1));\n}\n.speed-modal-content .speed-option.active[data-v-c19783dd] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.active-option-mark[data-v-c19783dd] {\n  margin-left: 0.5rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  font-weight: 500;\n}\n.modal-close[data-v-c19783dd] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  cursor: pointer;\n}\n.modal-close[data-v-c19783dd]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.modal-close i[data-v-c19783dd] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.music-source-popover[data-v-226dafae] {\n  width: 16rem;\n  overflow: hidden;\n  border-radius: 0.75rem;\n}\n@keyframes spin-226dafae {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.animate-spin[data-v-226dafae] {\n  animation: spin-226dafae 1s linear infinite;\n}\n.source-button[data-v-226dafae]:hover:not(.opacity-50):not(.opacity-40) {\n  --tw-translate-y: -0.125rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.iconfont[data-v-226dafae] {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.text-ellipsis[data-v-f9b04433] {\n  width: 100%;\n}\n.music-play-bar[data-v-f9b04433] {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  box-sizing: border-box;\n  display: flex;\n  height: 5rem;\n  width: 100%;\n  align-items: center;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  --tw-shadow-color: #d1d5db;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.music-play-bar[data-v-f9b04433]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.music-play-bar[data-v-f9b04433] {\n  z-index: 9999;\n  animation-duration: 0.5s !important;\n}\n.music-play-bar.play-bar-opcity[data-v-f9b04433] {\n  background-color: transparent !important;\n  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1137254902);\n}\n.music-play-bar.animate__slideOutDown[data-v-f9b04433] {\n  animation-duration: 0.3s !important;\n  pointer-events: none;\n}\n.music-play-bar .music-content[data-v-f9b04433] {\n  width: 200px;\n  margin-left: 1rem;\n}\n.music-play-bar .music-content-title[data-v-f9b04433] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.music-play-bar .music-content-name[data-v-f9b04433] {\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  opacity: 0.8;\n}\n.play-bar-img[data-v-f9b04433] {\n  height: 3.5rem;\n  width: 3.5rem;\n  border-radius: 1rem;\n}\n.music-buttons[data-v-f9b04433] {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  display: flex;\n  flex: 1 1 0%;\n  justify-content: center;\n}\n.music-buttons .iconfont[data-v-f9b04433] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.music-buttons .iconfont[data-v-f9b04433]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.music-buttons .icon[data-v-f9b04433] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.music-buttons .icon[data-v-f9b04433]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.music-buttons[data-v-f9b04433] {\n  display: flex;\n  align-items: center;\n}\n.music-buttons > div[data-v-f9b04433] {\n  cursor: pointer;\n}\n.music-buttons-play[data-v-f9b04433] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  display: flex;\n  height: 3rem;\n  width: 5rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.6;\n}\n.music-buttons-play[data-v-f9b04433]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.music-buttons-play[data-v-f9b04433]:is(.dark *) {\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.6;\n}\n.audio-volume[data-v-f9b04433] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.audio-volume:hover .volume-slider[data-v-f9b04433] {\n  visibility: visible;\n  opacity: 1;\n}\n.audio-volume .volume-icon[data-v-f9b04433] {\n  cursor: pointer;\n}\n.audio-volume .iconfont[data-v-f9b04433] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.audio-volume .iconfont[data-v-f9b04433]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.audio-volume .volume-slider[data-v-f9b04433] {\n  visibility: hidden;\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  height: 180px;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 0.75rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  opacity: 0;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.audio-volume .volume-slider[data-v-f9b04433]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity, 1));\n}\n.audio-volume .volume-slider[data-v-f9b04433] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.audio-volume .volume-slider[data-v-f9b04433]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433] {\n  position: absolute;\n  top: -1.5rem;\n  left: 50%;\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  border-radius: 0.375rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity, 1));\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433] {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity, 1));\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.audio-volume .volume-slider .volume-percentage[data-v-f9b04433] {\n  white-space: nowrap;\n}\n.audio-button[data-v-f9b04433] {\n  display: flex;\n  align-items: center;\n}\n.audio-button .iconfont[data-v-f9b04433] {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  cursor: pointer;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.audio-button .iconfont[data-v-f9b04433]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.music-play-list[data-v-f9b04433] {\n  height: 50vh;\n  width: 300px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.music-play-list-back[data-v-f9b04433] {\n  backdrop-filter: blur(20px);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.75;\n}\n.music-play-list-back[data-v-f9b04433]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.music-play-list-content[data-v-f9b04433] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mobile .music-play-bar[data-v-f9b04433] {\n  bottom: 56px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.mobile .music-time[data-v-f9b04433] {\n  display: none;\n}\n.mobile .ri-netease-cloud-music-line[data-v-f9b04433] {\n  display: none;\n}\n.mobile .audio-volume[data-v-f9b04433] {\n  display: none;\n}\n.mobile .audio-button[data-v-f9b04433] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.mobile .music-buttons[data-v-f9b04433] {\n  margin: 0px;\n}\n.mobile .music-buttons-prev[data-v-f9b04433], .mobile .music-buttons-next[data-v-f9b04433] {\n  display: none;\n}\n.mobile .music-buttons-play[data-v-f9b04433] {\n  margin: 0px;\n}\n.mobile .music-content[data-v-f9b04433] {\n  flex: 1;\n}\n.custom-slider[data-v-f9b04433] .n-slider {\n  --n-rail-height: 4px;\n  --n-rail-color: #e5e7eb;\n  --n-rail-color-dark: #374151;\n  --n-fill-color: #22c55e;\n  --n-handle-size: 12px;\n  --n-handle-color: #22c55e;\n}\n.custom-slider[data-v-f9b04433] .n-slider.n-slider--vertical {\n  height: 100%;\n}\n.custom-slider[data-v-f9b04433] .n-slider.n-slider--vertical .n-slider-rail {\n  width: 4px;\n}\n.custom-slider[data-v-f9b04433] .n-slider.n-slider--vertical:hover .n-slider-rail {\n  width: 6px;\n}\n.custom-slider[data-v-f9b04433] .n-slider.n-slider--vertical:hover .n-slider-handle {\n  width: 14px;\n  height: 14px;\n}\n.custom-slider[data-v-f9b04433] .n-slider .n-slider-rail {\n  overflow: hidden;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1)) !important;\n  --tw-bg-opacity: 0.1 !important;\n}\n.custom-slider[data-v-f9b04433] .n-slider .n-slider-rail:is(.dark *) {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1)) !important;\n}\n.custom-slider[data-v-f9b04433] .n-slider .n-slider-handle {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  opacity: 0;\n}\n.custom-slider[data-v-f9b04433] .n-slider:hover .n-slider-handle {\n  opacity: 1;\n}\n.custom-slider[data-v-f9b04433] .n-slider .n-slider-tooltip {\n  border-radius: 0.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity, 1));\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  z-index: 999999;\n}\n.play-bar-img-wrapper[data-v-f9b04433] {\n  position: relative;\n  height: 3.5rem;\n  width: 3.5rem;\n  cursor: pointer;\n}\n.play-bar-img-wrapper .hover-arrow[data-v-f9b04433] {\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  opacity: 0;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  background: rgba(0, 0, 0, 0.5);\n}\n.play-bar-img-wrapper .hover-arrow .hover-content[data-v-f9b04433] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.play-bar-img-wrapper .hover-arrow .hover-content i[data-v-f9b04433] {\n  margin-bottom: 0.125rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.play-bar-img-wrapper .hover-arrow .hover-content .hover-text[data-v-f9b04433] {\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.play-bar-img-wrapper:hover .hover-arrow[data-v-f9b04433] {\n  opacity: 1;\n}\n.tooltip-content[data-v-f9b04433] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.play-bar-img[data-v-f9b04433] {\n  height: 3.5rem;\n  width: 3.5rem;\n  border-radius: 1rem;\n}\n.like-active[data-v-f9b04433] {\n  --tw-text-opacity: 1 !important;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1)) !important;\n}\n.like-active[data-v-f9b04433]:hover {\n  --tw-text-opacity: 1 !important;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1)) !important;\n}\n.intelligence-active[data-v-f9b04433] {\n  --tw-text-opacity: 1 !important;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1)) !important;\n}\n.intelligence-active[data-v-f9b04433]:hover {\n  --tw-text-opacity: 1 !important;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1)) !important;\n}\n.disabled-icon[data-v-f9b04433] {\n  cursor: not-allowed !important;\n  opacity: 0.5 !important;\n}\n.disabled-icon[data-v-f9b04433]:hover {\n  color: inherit !important;\n}\n.icon-loop[data-v-f9b04433],\n.icon-single-loop[data-v-f9b04433] {\n  font-size: 1.5rem;\n}\n.music-time .n-slider[data-v-f9b04433] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  border-radius: 0;\n}\n.music-eq[data-v-f9b04433] {\n  border-radius: 1.5rem;\n  padding: 1rem;\n  backdrop-filter: blur(20px);\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.75;\n}\n.music-eq[data-v-f9b04433]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.music-play-list-content[data-v-f9b04433] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.music-play-list-content .delete-btn[data-v-f9b04433] {\n  cursor: pointer;\n  border-radius: 9999px;\n  padding: 0.5rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.music-play-list-content .delete-btn[data-v-f9b04433]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1));\n}\n.music-play-list-content .delete-btn[data-v-f9b04433]:hover:is(.dark *) {\n  background-color: rgb(127 29 29 / 0.2);\n}\n.music-play-list-content .delete-btn .iconfont[data-v-f9b04433] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n@keyframes spin-f9b04433 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.loading-overlay[data-v-f9b04433] {\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n}\n.loading-icon[data-v-f9b04433] {\n  font-size: 24px;\n  color: white;\n  animation: spin-f9b04433 1s linear infinite;\n}\n.play-speed[data-v-f9b04433] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0 8px;\n}\n.speed-button[data-v-f9b04433] {\n  font-size: 14px;\n  color: var(--text-color);\n  padding: 4px 8px;\n  border-radius: 4px;\n  background: var(--hover-color);\n}\n.speed-button[data-v-f9b04433]:hover {\n  background: var(--hover-color-dark);\n}\n.playback-rate-badge[data-v-f9b04433] {\n  margin-left: 0.5rem;\n  display: flex;\n  height: 1rem;\n  align-items: center;\n  border-radius: 0.25rem;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.15;\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.playback-rate-badge[data-v-f9b04433]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.playback-rate-badge[data-v-f9b04433] {\n  font-weight: 500;\n  vertical-align: 1px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1$4 = {
          class: "eq-control p-6 rounded-lg bg-gray-100 dark:bg-gray-900 w-full max-w-[700px]"
        };
        const _hoisted_2$4 = {
          class: "eq-header flex justify-between items-center mb-4"
        };
        const _hoisted_3$4 = {
          class: "text-xl font-semibold text-gray-800 dark:text-gray-200"
        };
        const _hoisted_4$4 = {
          class: "eq-controls"
        };
        const _hoisted_5$4 = {
          class: "eq-presets mb-2 relative h-10"
        };
        const _hoisted_6$4 = {
          class: "eq-sliders flex justify-between items-end bg-gray-50 dark:bg-gray-800 gap-1 rounded-lg p-2 h-[300px]"
        };
        const _hoisted_7$4 = {
          class: "freq-label text-xs font-medium text-center text-gray-600 dark:text-gray-400 whitespace-nowrap m-2 h-5"
        };
        const _hoisted_8$4 = {
          class: "gain-value text-xs font-medium text-center text-gray-600 dark:text-gray-400 whitespace-nowrap my-1 h-4"
        };
        const _sfc_main$4 = /* @__PURE__ */defineComponent({
          __name: "EQControl",
          setup(__props) {
            const {
              t
            } = useI18n();
            const frequencies = [31, 62, 125, 250, 500, 1e3, 2e3, 4e3, 8e3, 16e3];
            const eqValues = ref({});
            const isEnabled = ref(audioService.isEQEnabled());
            const currentPreset = ref(audioService.getCurrentPreset() || "flat");
            const presets = {
              flat: {
                label: t("player.eq.presets.flat"),
                values: Object.fromEntries(frequencies.map(f => [f, 0]))
              },
              pop: {
                label: t("player.eq.presets.pop"),
                values: {
                  31: -1.5,
                  62: 3.5,
                  125: 5.5,
                  250: 3.5,
                  500: -0.5,
                  1e3: -1.5,
                  2e3: 1.5,
                  4e3: 2.5,
                  8e3: 2.5,
                  16e3: 2.5
                }
              },
              rock: {
                label: t("player.eq.presets.rock"),
                values: {
                  31: 4.5,
                  62: 3.5,
                  125: 2,
                  250: 0.5,
                  500: -0.5,
                  1e3: -1,
                  2e3: 0.5,
                  4e3: 2,
                  8e3: 2.5,
                  16e3: 3.5
                }
              },
              classical: {
                label: t("player.eq.presets.classical"),
                values: {
                  31: 3.5,
                  62: 3,
                  125: 2.5,
                  250: 1.5,
                  500: -0.5,
                  1e3: -1.5,
                  2e3: -1.5,
                  4e3: 0.5,
                  8e3: 2,
                  16e3: 3
                }
              },
              jazz: {
                label: t("player.eq.presets.jazz"),
                values: {
                  31: 3,
                  62: 2,
                  125: 1.5,
                  250: 2,
                  500: -1,
                  1e3: -1.5,
                  2e3: -0.5,
                  4e3: 1,
                  8e3: 2.5,
                  16e3: 3
                }
              },
              hiphop: {
                label: t("player.eq.presets.hiphop"),
                values: {
                  31: 5,
                  62: 4.5,
                  125: 3,
                  250: 1.5,
                  500: -0.5,
                  1e3: -1,
                  2e3: 0.5,
                  4e3: 1.5,
                  8e3: 2,
                  16e3: 2.5
                }
              },
              vocal: {
                label: t("player.eq.presets.vocal"),
                values: {
                  31: -2,
                  62: -1.5,
                  125: -1,
                  250: 0.5,
                  500: 2,
                  1e3: 3.5,
                  2e3: 3,
                  4e3: 1.5,
                  8e3: 0.5,
                  16e3: 0
                }
              },
              dance: {
                label: t("player.eq.presets.dance"),
                values: {
                  31: 4,
                  62: 3.5,
                  125: 2.5,
                  250: 1,
                  500: 0,
                  1e3: -0.5,
                  2e3: 1.5,
                  4e3: 2.5,
                  8e3: 3,
                  16e3: 2.5
                }
              },
              acoustic: {
                label: t("player.eq.presets.acoustic"),
                values: {
                  31: 2,
                  62: 1.5,
                  125: 1,
                  250: 1.5,
                  500: 2,
                  1e3: 1.5,
                  2e3: 2,
                  4e3: 2.5,
                  8e3: 2,
                  16e3: 1.5
                }
              }
            };
            const presetOptions = Object.entries(presets).map(([value, preset]) => ({
              label: preset.label,
              value
            }));
            const toggleEQ = enabled => {
              audioService.setEQEnabled(enabled);
            };
            const applyPreset = presetName => {
              currentPreset.value = presetName;
              audioService.setCurrentPreset(presetName);
              const preset = presets[presetName];
              if (preset) {
                Object.entries(preset.values).forEach(([freq, gain]) => {
                  updateEQ(freq, gain);
                });
              }
            };
            onMounted(() => {
              const settings = audioService.getAllEQSettings();
              eqValues.value = settings;
              const savedPreset = audioService.getCurrentPreset();
              if (savedPreset && presets[savedPreset]) {
                currentPreset.value = savedPreset;
              }
            });
            const updateEQ = (frequency, gain) => {
              audioService.setEQFrequencyGain(frequency, gain);
              eqValues.value = {
                ...eqValues.value,
                [frequency]: gain
              };
              const currentValues = eqValues.value;
              let matchedPreset = null;
              Object.entries(presets).forEach(([presetName, preset]) => {
                const isMatch = Object.entries(preset.values).every(([freq, value]) => Math.abs(currentValues[freq] - value) < 0.1);
                if (isMatch) {
                  matchedPreset = presetName;
                }
              });
              if (matchedPreset !== null) {
                currentPreset.value = matchedPreset;
                audioService.setCurrentPreset(matchedPreset);
              } else if (currentPreset.value !== "custom") {
                currentPreset.value = "custom";
                audioService.setCurrentPreset("custom");
              }
            };
            const formatFreq = freq => {
              if (freq >= 1e3) {
                return `${freq / 1e3}kHz`;
              }
              return `${freq}Hz`;
            };
            return (_ctx, _cache) => {
              const _component_n_tag = __unplugin_components_0;
              const _component_n_switch = __unplugin_components_1;
              const _component_n_space = __unplugin_components_2;
              const _component_n_scrollbar = Scrollbar;
              const _component_n_slider = __unplugin_components_0$1;
              return openBlock(), createElementBlock("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$4, [createBaseVNode("h3", _hoisted_3$4, [createTextVNode(toDisplayString(unref(t)("player.eq.title")) + " ", 1), !unref(isElectron) ? (openBlock(), createBlock(_component_n_tag, {
                key: 0,
                type: "warning",
                size: "small",
                round: ""
              }, {
                default: withCtx(() => [...(_cache[1] || (_cache[1] = [createTextVNode(" 桌面版可用，网页端不支持 ", -1)]))]),
                _: 1
              })) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_4$4, [createVNode(_component_n_switch, {
                value: isEnabled.value,
                "onUpdate:value": [_cache[0] || (_cache[0] = $event => isEnabled.value = $event), toggleEQ]
              }, {
                checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("player.eq.on")), 1)]),
                unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("player.eq.off")), 1)]),
                _: 1
              }, 8, ["value"])])]), createBaseVNode("div", _hoisted_5$4, [createVNode(_component_n_scrollbar, {
                "x-scrollable": ""
              }, {
                default: withCtx(() => [createVNode(_component_n_space, {
                  size: 6,
                  wrap: false
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(presetOptions), preset => {
                    return openBlock(), createBlock(_component_n_tag, {
                      key: preset.value,
                      type: currentPreset.value === preset.value ? "success" : "default",
                      bordered: false,
                      size: "medium",
                      round: "",
                      clickable: "",
                      onClick: $event => applyPreset(preset.value)
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(preset.label), 1)]),
                      _: 2
                    }, 1032, ["type", "onClick"]);
                  }), 128))]),
                  _: 1
                })]),
                _: 1
              })]), createBaseVNode("div", _hoisted_6$4, [(openBlock(), createElementBlock(Fragment, null, renderList(frequencies, freq => {
                return createBaseVNode("div", {
                  key: freq,
                  class: "eq-slider flex flex-col items-center w-[45px] h-full"
                }, [createBaseVNode("div", _hoisted_7$4, toDisplayString(formatFreq(freq)), 1), createVNode(_component_n_slider, {
                  value: eqValues.value[freq.toString()],
                  "onUpdate:value": [$event => eqValues.value[freq.toString()] = $event, $event => updateEQ(freq.toString(), $event)],
                  min: -12,
                  max: 12,
                  step: 0.1,
                  vertical: "",
                  disabled: !isEnabled.value,
                  class: "flex-1 my-3 min-h-[180px]"
                }, null, 8, ["value", "onUpdate:value", "disabled"]), createBaseVNode("div", _hoisted_8$4, toDisplayString(eqValues.value[freq.toString()]) + "dB ", 1)]);
              }), 64))])]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const EqControl = /* @__PURE__ */_export_sfc(_sfc_main$4, [["__scopeId", "data-v-aa8447ea"]]);
        const _hoisted_1$3 = {
          class: "sleep-timer-content"
        };
        const _hoisted_2$3 = {
          class: "timer-title"
        };
        const _hoisted_3$3 = {
          key: 0,
          class: "sleep-timer-active"
        };
        const _hoisted_4$3 = {
          class: "timer-status"
        };
        const _hoisted_5$3 = {
          key: 0,
          class: "timer-value countdown-timer"
        };
        const _hoisted_6$3 = {
          class: "timer-value"
        };
        const _hoisted_7$3 = {
          class: "timer-label"
        };
        const _hoisted_8$3 = {
          class: "timer-value"
        };
        const _hoisted_9$3 = {
          class: "timer-label"
        };
        const _hoisted_10$3 = {
          key: 1,
          class: "sleep-timer-options"
        };
        const _hoisted_11$1 = {
          class: "option-section"
        };
        const _hoisted_12$1 = {
          class: "option-title"
        };
        const _hoisted_13$1 = {
          class: "time-options"
        };
        const _hoisted_14$1 = {
          class: "custom-time"
        };
        const _hoisted_15$1 = {
          class: "option-section"
        };
        const _hoisted_16 = {
          class: "option-title"
        };
        const _hoisted_17 = {
          class: "songs-options"
        };
        const _hoisted_18 = {
          class: "custom-songs"
        };
        const _hoisted_19 = {
          class: "option-section playlist-end-section"
        };
        const _sfc_main$3 = /* @__PURE__ */defineComponent({
          __name: "SleepTimer",
          setup(__props) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerStore();
            const {
              sleepTimer
            } = storeToRefs(playerStore);
            const customMinutes = ref(30);
            const customSongs = ref(5);
            const refreshTrigger = ref(0);
            const hasTimerActive = computed(() => {
              return playerStore.hasSleepTimerActive;
            });
            const timerType = computed(() => {
              return sleepTimer.value.type;
            });
            const remainingSongs = computed(() => {
              return playerStore.sleepTimerRemainingSongs;
            });
            function handleSetTimeTimer(minutes) {
              playerStore.setSleepTimerByTime(minutes);
            }
            function handleSetSongsTimer(songs) {
              playerStore.setSleepTimerBySongs(songs);
            }
            function handleSetPlaylistEndTimer() {
              playerStore.setSleepTimerAtPlaylistEnd();
            }
            function handleCancelTimer() {
              playerStore.clearSleepTimer();
            }
            const formattedRemainingTime = computed(() => {
              void refreshTrigger.value;
              if (timerType.value !== "time" || !sleepTimer.value.endTime) {
                return "00:00:00";
              }
              const remaining = Math.max(0, sleepTimer.value.endTime - Date.now());
              const totalSeconds = Math.floor(remaining / 1e3);
              const hours = Math.floor(totalSeconds / 3600);
              const minutes = Math.floor(totalSeconds % 3600 / 60);
              const seconds = Math.floor(totalSeconds % 60);
              const formattedHours = hours.toString().padStart(2, "0");
              const formattedMinutes = minutes.toString().padStart(2, "0");
              const formattedSeconds = seconds.toString().padStart(2, "0");
              return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
            });
            let timerInterval = null;
            onMounted(() => {
              if (hasTimerActive.value && timerType.value === "time") {
                startTimerUpdate();
              }
              watch(() => [hasTimerActive.value, timerType.value], ([newHasTimer, newType]) => {
                if (newHasTimer && newType === "time") {
                  startTimerUpdate();
                } else {
                  stopTimerUpdate();
                }
              });
            });
            function startTimerUpdate() {
              stopTimerUpdate();
              timerInterval = window.setInterval(() => {
                refreshTrigger.value = Date.now();
              }, 500);
            }
            function stopTimerUpdate() {
              if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
              }
            }
            onUnmounted(() => {
              stopTimerUpdate();
            });
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              const _component_n_input_number = __unplugin_components_1$1;
              return openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("h3", _hoisted_2$3, toDisplayString(unref(t)("player.sleepTimer.title")), 1), hasTimerActive.value ? (openBlock(), createElementBlock("div", _hoisted_3$3, [createBaseVNode("div", _hoisted_4$3, [timerType.value === "time" ? (openBlock(), createElementBlock("div", _hoisted_5$3, toDisplayString(formattedRemainingTime.value), 1)) : timerType.value === "songs" ? (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createBaseVNode("div", _hoisted_6$3, toDisplayString(remainingSongs.value), 1), createBaseVNode("div", _hoisted_7$3, toDisplayString(unref(t)("player.sleepTimer.songsRemaining", {
                count: remainingSongs.value
              })), 1)], 64)) : timerType.value === "end" ? (openBlock(), createElementBlock(Fragment, {
                key: 2
              }, [createBaseVNode("div", _hoisted_8$3, toDisplayString(unref(t)("player.sleepTimer.activeUntilEnd")), 1), createBaseVNode("div", _hoisted_9$3, toDisplayString(unref(t)("player.sleepTimer.afterPlaylist")), 1)], 64)) : createCommentVNode("", true)]), createVNode(_component_n_button, {
                type: "error",
                class: "cancel-timer-btn",
                onClick: handleCancelTimer,
                round: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("player.sleepTimer.cancel")), 1)]),
                _: 1
              })])) : (openBlock(), createElementBlock("div", _hoisted_10$3, [createBaseVNode("div", _hoisted_11$1, [createBaseVNode("h4", _hoisted_12$1, toDisplayString(unref(t)("player.sleepTimer.timeMode")), 1), createBaseVNode("div", _hoisted_13$1, [(openBlock(), createElementBlock(Fragment, null, renderList([15, 30, 60, 90], minutes => {
                return createVNode(_component_n_button, {
                  key: minutes,
                  size: "small",
                  class: "time-option-btn",
                  onClick: $event => handleSetTimeTimer(minutes),
                  round: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(minutes) + toDisplayString(unref(t)("player.sleepTimer.minutes")), 1)]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 64)), createBaseVNode("div", _hoisted_14$1, [createVNode(_component_n_input_number, {
                value: customMinutes.value,
                "onUpdate:value": _cache[0] || (_cache[0] = $event => customMinutes.value = $event),
                min: 1,
                max: 300,
                size: "small",
                class: "custom-time-input",
                round: ""
              }, null, 8, ["value"]), createVNode(_component_n_button, {
                size: "small",
                type: "primary",
                class: "custom-time-btn",
                disabled: !customMinutes.value,
                onClick: _cache[1] || (_cache[1] = $event => handleSetTimeTimer(customMinutes.value)),
                round: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("player.sleepTimer.set")), 1)]),
                _: 1
              }, 8, ["disabled"])])])]), createBaseVNode("div", _hoisted_15$1, [createBaseVNode("h4", _hoisted_16, toDisplayString(unref(t)("player.sleepTimer.songsMode")), 1), createBaseVNode("div", _hoisted_17, [(openBlock(), createElementBlock(Fragment, null, renderList([1, 3, 5, 10], songs => {
                return createVNode(_component_n_button, {
                  key: songs,
                  size: "small",
                  class: "songs-option-btn",
                  onClick: $event => handleSetSongsTimer(songs),
                  round: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(songs) + toDisplayString(unref(t)("player.sleepTimer.songs")), 1)]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 64)), createBaseVNode("div", _hoisted_18, [createVNode(_component_n_input_number, {
                value: customSongs.value,
                "onUpdate:value": _cache[2] || (_cache[2] = $event => customSongs.value = $event),
                min: 1,
                max: 50,
                size: "small",
                class: "custom-songs-input",
                round: ""
              }, null, 8, ["value"]), createVNode(_component_n_button, {
                size: "small",
                type: "primary",
                class: "custom-songs-btn",
                disabled: !customSongs.value,
                onClick: _cache[3] || (_cache[3] = $event => handleSetSongsTimer(customSongs.value)),
                round: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("player.sleepTimer.set")), 1)]),
                _: 1
              }, 8, ["disabled"])])])]), createBaseVNode("div", _hoisted_19, [createVNode(_component_n_button, {
                block: "",
                class: "playlist-end-btn",
                onClick: handleSetPlaylistEndTimer,
                round: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("player.sleepTimer.playlistEnd")), 1)]),
                _: 1
              })])]))]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const SleepTimer = /* @__PURE__ */_export_sfc(_sfc_main$3, [["__scopeId", "data-v-ce63d1b8"]]);
        const _hoisted_1$2 = {
          class: "advanced-controls-btn"
        };
        const _hoisted_2$2 = {
          key: 0,
          class: "active-indicator"
        };
        const _hoisted_3$2 = {
          key: 0,
          class: "timer-badge"
        };
        const _hoisted_4$2 = {
          class: "eq-modal-content"
        };
        const _hoisted_5$2 = {
          class: "timer-modal-content"
        };
        const _hoisted_6$2 = {
          class: "speed-modal-content"
        };
        const _hoisted_7$2 = {
          class: "speed-controls"
        };
        const _hoisted_8$2 = {
          class: "speed-options"
        };
        const _hoisted_9$2 = ["onClick"];
        const _hoisted_10$2 = {
          class: "speed-slider"
        };
        const _sfc_main$2 = /* @__PURE__ */defineComponent({
          __name: "AdvancedControlsPopover",
          setup(__props) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerStore();
            const showDropdown = ref(false);
            const showEQModal = ref(false);
            const showSpeedModal = ref(false);
            const isEQVisible = ref(false);
            watch(showEQModal, newValue => {
              if (newValue) {
                playerStore.showSleepTimer = false;
                showSpeedModal.value = false;
              }
            });
            watch(() => playerStore.showSleepTimer, newValue => {
              if (newValue) {
                showEQModal.value = false;
                showSpeedModal.value = false;
              }
            });
            watch(showSpeedModal, newValue => {
              if (newValue) {
                showEQModal.value = false;
                playerStore.showSleepTimer = false;
              }
            });
            const playbackRate = computed(() => playerStore.playbackRate);
            const playbackRateOptions = [{
              label: "0.5x",
              key: 0.5
            }, {
              label: "0.75x",
              key: 0.75
            }, {
              label: "1.0x",
              key: 1
            }, {
              label: "1.25x",
              key: 1.25
            }, {
              label: "1.5x",
              key: 1.5
            }, {
              label: "2.0x",
              key: 2
            }];
            const hasActiveSleepTimer = computed(() => playerStore.hasSleepTimerActive);
            const hasActiveSettings = computed(() => {
              return playbackRate.value !== 1 || hasActiveSleepTimer.value || isEQVisible.value;
            });
            const dropdownOptions = computed(() => [{
              label: t("player.playBar.eq"),
              key: "eq",
              icon: () => h("i", {
                class: "ri-equalizer-line"
              })
            }, {
              label: t("player.sleepTimer.title"),
              key: "timer",
              icon: () => h("i", {
                class: "ri-timer-line"
              }),
              // 如果有激活的定时器，添加标记
              suffix: () => hasActiveSleepTimer.value ? h("span", {
                class: "active-option-mark"
              }) : null
            }, {
              label: t("player.playBar.playbackSpeed") + `(${playbackRate.value}x)`,
              key: "speed",
              icon: () => h("i", {
                class: "ri-speed-line"
              }),
              // 如果播放速度不是1.0，添加标记
              suffix: () => playbackRate.value !== 1 ? h("span", {
                class: "active-option-mark"
              }, `${playbackRate.value}x`) : null
            }]);
            const handleSelect = key => {
              showEQModal.value = false;
              playerStore.showSleepTimer = false;
              showSpeedModal.value = false;
              switch (key) {
                case "eq":
                  showEQModal.value = true;
                  break;
                case "timer":
                  playerStore.showSleepTimer = true;
                  break;
                case "speed":
                  showSpeedModal.value = true;
                  break;
              }
            };
            const selectSpeed = speed => {
              playerStore.setPlaybackRate(speed);
            };
            return (_ctx, _cache) => {
              const _component_n_tooltip = __unplugin_components_3;
              const _component_n_dropdown = __unplugin_components_1$2;
              const _component_n_modal = __unplugin_components_2$1;
              return openBlock(), createElementBlock(Fragment, null, [createVNode(_component_n_dropdown, {
                show: showDropdown.value,
                options: dropdownOptions.value,
                trigger: "hover",
                "z-index": 9999999,
                onSelect: handleSelect,
                placement: "top",
                "onUpdate:show": _cache[0] || (_cache[0] = show => showDropdown.value = show)
              }, {
                default: withCtx(() => [createVNode(_component_n_tooltip, {
                  trigger: "hover",
                  "z-index": 9999999
                }, {
                  trigger: withCtx(() => [createBaseVNode("div", _hoisted_1$2, [_cache[8] || (_cache[8] = createBaseVNode("i", {
                    class: "iconfont ri-settings-3-line"
                  }, null, -1)), hasActiveSettings.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [hasActiveSleepTimer.value ? (openBlock(), createElementBlock("span", _hoisted_3$2, [...(_cache[7] || (_cache[7] = [createBaseVNode("i", {
                    class: "ri-time-line"
                  }, null, -1)]))])) : createCommentVNode("", true)])) : createCommentVNode("", true)])]),
                  default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("player.playBar.advancedControls")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["show", "options"]), createVNode(_component_n_modal, {
                show: showEQModal.value,
                "onUpdate:show": _cache[2] || (_cache[2] = $event => showEQModal.value = $event),
                "mask-closable": true,
                "unstable-show-mask": false,
                "z-index": 9999999
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_4$2, [createBaseVNode("div", {
                  class: "modal-close",
                  onClick: _cache[1] || (_cache[1] = $event => showEQModal.value = false)
                }, [...(_cache[9] || (_cache[9] = [createBaseVNode("i", {
                  class: "ri-close-line"
                }, null, -1)]))]), createVNode(EqControl)])]),
                _: 1
              }, 8, ["show"]), createVNode(_component_n_modal, {
                show: unref(playerStore).showSleepTimer,
                "onUpdate:show": _cache[4] || (_cache[4] = $event => unref(playerStore).showSleepTimer = $event),
                "mask-closable": true,
                "unstable-show-mask": false,
                "z-index": 9999999
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_5$2, [createBaseVNode("div", {
                  class: "modal-close",
                  onClick: _cache[3] || (_cache[3] = $event => unref(playerStore).showSleepTimer = false)
                }, [...(_cache[10] || (_cache[10] = [createBaseVNode("i", {
                  class: "ri-close-line"
                }, null, -1)]))]), createVNode(SleepTimer)])]),
                _: 1
              }, 8, ["show"]), createVNode(_component_n_modal, {
                show: showSpeedModal.value,
                "onUpdate:show": _cache[6] || (_cache[6] = $event => showSpeedModal.value = $event),
                "mask-closable": true,
                "unstable-show-mask": false,
                "z-index": 9999999
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_6$2, [createBaseVNode("div", {
                  class: "modal-close",
                  onClick: _cache[5] || (_cache[5] = $event => showSpeedModal.value = false)
                }, [...(_cache[11] || (_cache[11] = [createBaseVNode("i", {
                  class: "ri-close-line"
                }, null, -1)]))]), createBaseVNode("h3", null, toDisplayString(unref(t)("player.playBar.playbackSpeed")) + " (" + toDisplayString(playbackRate.value) + "x)", 1), createBaseVNode("div", _hoisted_7$2, [createBaseVNode("div", _hoisted_8$2, [(openBlock(), createElementBlock(Fragment, null, renderList(playbackRateOptions, option => {
                  return createBaseVNode("div", {
                    key: option.key,
                    class: normalizeClass(["speed-option", {
                      active: playbackRate.value === option.key
                    }]),
                    onClick: $event => selectSpeed(option.key)
                  }, toDisplayString(option.label), 11, _hoisted_9$2);
                }), 64))]), createBaseVNode("div", _hoisted_10$2, [createVNode(unref(__unplugin_components_0$1), {
                  value: playbackRate.value,
                  min: 0.25,
                  max: 2,
                  step: 0.01,
                  "onUpdate:value": selectSpeed
                }, null, 8, ["value"])])])])]),
                _: 1
              }, 8, ["show"])], 64);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const AdvancedControlsPopover = /* @__PURE__ */_export_sfc(_sfc_main$2, [["__scopeId", "data-v-c19783dd"]]);
        const _hoisted_1$1 = {
          class: "reparse-popover bg-light-100 dark:bg-dark-100 p-4 rounded-xl max-w-60"
        };
        const _hoisted_2$1 = {
          class: "text-base font-medium mb-2"
        };
        const _hoisted_3$1 = {
          class: "text-sm opacity-70 mb-3"
        };
        const _hoisted_4$1 = {
          class: "mb-3 max-h-80 overflow-y-auto"
        };
        const _hoisted_5$1 = {
          class: "flex flex-col space-y-2"
        };
        const _hoisted_6$1 = {
          key: 0,
          class: "border-t border-gray-200 dark:border-gray-700 my-1"
        };
        const _hoisted_7$1 = ["onClick"];
        const _hoisted_8$1 = {
          class: "flex-1 text-sm whitespace-nowrap overflow-hidden text-ellipsis"
        };
        const _hoisted_9$1 = {
          key: 0,
          class: "w-5 h-5 flex items-center justify-center"
        };
        const _hoisted_10$1 = {
          key: 1,
          class: "w-5 h-5 flex items-center justify-center"
        };
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "ReparsePopover",
          setup(__props) {
            const playerStore = usePlayerStore();
            const settingsStore = useSettingsStore();
            const {
              t
            } = useI18n();
            const message = useMessage();
            const {
              allSources
            } = useMusicSources();
            const isReparsing = ref(false);
            const currentReparsingId = ref(null);
            const selectedSourceId = ref(null);
            const isReparse = computed(() => selectedSourceId.value !== null);
            const reparseSourceList = computed(() => {
              const result = [];
              for (const source of allSources.value) {
                if (source.key === "lxMusic") {
                  const scripts = settingsStore.setData.lxMusicScripts || [];
                  for (const script of scripts) {
                    result.push({
                      id: `lxMusic:${script.id}`,
                      platform: "lxMusic",
                      label: script.name,
                      icon: source.icon,
                      color: source.color,
                      group: source.group,
                      available: true,
                      lxScriptId: script.id
                    });
                  }
                  if (scripts.length === 0) {
                    result.push({
                      id: "lxMusic",
                      platform: "lxMusic",
                      label: "lxMusic",
                      icon: source.icon,
                      color: source.color,
                      group: source.group,
                      available: false,
                      configHint: "settings.playback.lxMusic.scripts.notConfigured"
                    });
                  }
                } else {
                  result.push({
                    id: source.key,
                    platform: source.key,
                    label: source.key,
                    icon: source.icon,
                    color: source.color,
                    group: source.group,
                    available: source.available,
                    configHint: source.configHint
                  });
                }
              }
              return result;
            });
            const GROUP_ORDER = ["unblock", "extended", "plugin"];
            const groupedSources = computed(() => {
              return GROUP_ORDER.map(groupKey => ({
                key: groupKey,
                sources: reparseSourceList.value.filter(s => s.group === groupKey)
              })).filter(g => g.sources.length > 0);
            });
            const isCurrentSource = sourceId => {
              return selectedSourceId.value === sourceId;
            };
            const initSelectedSources = () => {
              const songId = playMusic.value.id;
              const config = SongSourceConfigManager.getConfig(songId);
              if (config && config.sources.length > 0) {
                const platform = config.sources[0];
                if (platform === "lxMusic") {
                  const activeId = settingsStore.setData.activeLxMusicApiId;
                  selectedSourceId.value = activeId ? `lxMusic:${activeId}` : null;
                } else {
                  selectedSourceId.value = platform;
                }
              } else {
                selectedSourceId.value = null;
              }
            };
            const clearCustomSource = () => {
              SongSourceConfigManager.clearConfig(playMusic.value.id);
              selectedSourceId.value = null;
            };
            const handleSourceClick = async source => {
              if (source.lxScriptId) {
                await reparseWithLxScript(source);
              } else {
                await directReparseMusic(source);
              }
            };
            const reparseWithLxScript = async source => {
              if (isReparsing.value || !source.lxScriptId) return;
              const scripts = settingsStore.setData.lxMusicScripts || [];
              const script = scripts.find(s => s.id === source.lxScriptId);
              if (!script) return;
              try {
                isReparsing.value = true;
                currentReparsingId.value = source.id;
                setLxMusicRunner(null);
                await initLxMusicRunner(script.script);
                settingsStore.setSetData({
                  activeLxMusicApiId: script.id
                });
                const songId = Number(playMusic.value.id);
                await CacheManager.clearMusicCache(songId);
                selectedSourceId.value = source.id;
                SongSourceConfigManager.setConfig(songId, ["lxMusic"], "manual");
                const success = await playerStore.reparseCurrentSong("lxMusic", false);
                if (success) {
                  message.success(t("player.reparse.success"));
                } else {
                  message.error(t("player.reparse.failed"));
                }
              } catch (error) {
                console.error("解析失败:", error);
                message.error(t("player.reparse.failed"));
              } finally {
                isReparsing.value = false;
                currentReparsingId.value = null;
              }
            };
            const directReparseMusic = async source => {
              if (isReparsing.value) return;
              try {
                isReparsing.value = true;
                currentReparsingId.value = source.id;
                const songId = Number(playMusic.value.id);
                await CacheManager.clearMusicCache(songId);
                selectedSourceId.value = source.id;
                SongSourceConfigManager.setConfig(songId, [source.platform], "manual");
                const success = await playerStore.reparseCurrentSong(source.platform, false);
                if (success) {
                  message.success(t("player.reparse.success"));
                } else {
                  message.error(t("player.reparse.failed"));
                }
              } catch (error) {
                console.error("解析失败:", error);
                message.error(t("player.reparse.failed"));
              } finally {
                isReparsing.value = false;
                currentReparsingId.value = null;
              }
            };
            watch(() => playMusic.value.id, () => {
              if (playMusic.value.id) {
                initSelectedSources();
              }
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              const _component_n_tooltip = __unplugin_components_3;
              const _component_n_popover = __unplugin_components_1$3;
              return openBlock(), createBlock(_component_n_popover, {
                trigger: "click",
                "z-index": 99999999,
                placement: "top",
                "content-class": "music-source-popover",
                raw: "",
                "show-arrow": false,
                delay: 200
              }, {
                trigger: withCtx(() => [createVNode(_component_n_tooltip, {
                  trigger: "hover",
                  "z-index": 9999999
                }, {
                  trigger: withCtx(() => [createBaseVNode("i", {
                    class: normalizeClass(["iconfont ri-refresh-line", {
                      "text-green-500": isReparse.value,
                      "animate-spin": isReparsing.value
                    }])
                  }, null, 2)]),
                  default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("player.playBar.reparse")), 1)]),
                  _: 1
                })]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, toDisplayString(unref(t)("player.reparse.title")), 1), createBaseVNode("div", _hoisted_3$1, toDisplayString(unref(t)("player.reparse.desc")), 1), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(groupedSources.value, (group, groupIndex) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: group.key
                  }, [groupIndex > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(group.sources, source => {
                    return openBlock(), createElementBlock("div", {
                      key: source.id,
                      class: normalizeClass(["source-button flex items-center p-2 rounded-lg transition-all duration-200", [source.available ? "cursor-pointer bg-light-200 dark:bg-dark-200 hover:bg-light-300 dark:hover:bg-dark-300" : "opacity-40 cursor-not-allowed bg-light-200 dark:bg-dark-200", {
                        "bg-green-50 dark:bg-green-900/20 text-green-500": isCurrentSource(source.id),
                        "opacity-50 cursor-not-allowed": isReparsing.value && source.available
                      }]]),
                      onClick: $event => source.available && handleSourceClick(source)
                    }, [createBaseVNode("div", {
                      class: "flex items-center justify-center w-6 h-6 mr-3 text-lg",
                      style: normalizeStyle({
                        color: source.color
                      })
                    }, [createBaseVNode("i", {
                      class: normalizeClass(source.icon)
                    }, null, 2)], 4), createBaseVNode("div", _hoisted_8$1, [createBaseVNode("span", null, toDisplayString(source.label), 1), !source.available && source.configHint ? (openBlock(), createBlock(_component_n_tooltip, {
                      key: 0,
                      trigger: "hover"
                    }, {
                      trigger: withCtx(() => [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                        class: "ri-information-line text-xs ml-1 opacity-60"
                      }, null, -1)]))]),
                      default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)(source.configHint)), 1)]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)]), isReparsing.value && currentReparsingId.value === source.id ? (openBlock(), createElementBlock("div", _hoisted_9$1, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                      class: "ri-loader-4-line animate-spin"
                    }, null, -1)]))])) : isCurrentSource(source.id) ? (openBlock(), createElementBlock("div", _hoisted_10$1, [...(_cache[2] || (_cache[2] = [createBaseVNode("i", {
                      class: "ri-check-line"
                    }, null, -1)]))])) : createCommentVNode("", true)], 10, _hoisted_7$1);
                  }), 128))], 64);
                }), 128))])]), createBaseVNode("div", {
                  class: "text-red-500 text-sm flex items-center bg-light-200 dark:bg-dark-200 rounded-lg p-2 cursor-pointer",
                  onClick: clearCustomSource
                }, [_cache[3] || (_cache[3] = createBaseVNode("div", {
                  class: "flex items-center justify-center w-6 h-6 mr-3 text-lg"
                }, [createBaseVNode("i", {
                  class: "ri-close-circle-line"
                })], -1)), createBaseVNode("div", null, toDisplayString(unref(t)("player.reparse.clear")), 1)])])]),
                _: 1
              });
            };
          }
        });

        /* unplugin-vue-components disabled */

        const ReparsePopover = /* @__PURE__ */_export_sfc(_sfc_main$1, [["__scopeId", "data-v-226dafae"]]);
        const _hoisted_1 = {
          class: "music-time custom-slider"
        };
        const _hoisted_2 = {
          key: 0,
          class: "loading-overlay"
        };
        const _hoisted_3 = {
          class: "hover-arrow"
        };
        const _hoisted_4 = {
          class: "hover-content"
        };
        const _hoisted_5 = {
          class: "hover-text"
        };
        const _hoisted_6 = {
          class: "music-content"
        };
        const _hoisted_7 = {
          class: "music-content-title flex items-center"
        };
        const _hoisted_8 = ["innerHTML"];
        const _hoisted_9 = {
          key: 0,
          class: "playback-rate-badge"
        };
        const _hoisted_10 = {
          class: "music-content-name"
        };
        const _hoisted_11 = ["onClick"];
        const _hoisted_12 = {
          class: "music-buttons"
        };
        const _hoisted_13 = {
          class: "audio-button"
        };
        const _hoisted_14 = {
          class: "volume-slider"
        };
        const _hoisted_15 = {
          class: "volume-percentage"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "PlayBar",
          setup(__props) {
            const playerStore = usePlayerStore();
            const settingsStore = useSettingsStore();
            const {
              t
            } = useI18n();
            const message = useMessage();
            const play = computed(() => playerStore.isPlay);
            const background = ref("#000");
            watch(() => playerStore.playMusic, async () => {
              if (playMusic && playMusic.value && playMusic.value.backgroundColor) {
                background.value = playMusic.value.backgroundColor;
              }
            }, {
              immediate: true,
              deep: true
            });
            const throttledSeek = useThrottleFn(value => {
              audioService.seek(value);
              nowTime.value = value;
            }, 50);
            const dragValue = ref(0);
            const isDragging = ref(false);
            const timeSlider = computed({
              get: () => isDragging.value ? dragValue.value : nowTime.value,
              set: value => {
                if (isDragging.value) {
                  dragValue.value = value;
                  return;
                }
                throttledSeek(value);
              }
            });
            const handleSliderDragStart = () => {
              isDragging.value = true;
              dragValue.value = nowTime.value;
            };
            const handleSliderDragEnd = () => {
              isDragging.value = false;
              audioService.seek(dragValue.value);
              nowTime.value = dragValue.value;
            };
            const formatTooltip = value => {
              return `${secondToMinute(value)} / ${secondToMinute(allTime.value)}`;
            };
            const getVolumeIcon = computed(() => {
              if (playerStore.volume === 0) {
                return "ri-volume-mute-line";
              }
              if (playerStore.volume <= 0.5) {
                return "ri-volume-down-line";
              }
              return "ri-volume-up-line";
            });
            const volumeSlider = computed({
              get: () => playerStore.volume * 100,
              set: value => {
                playerStore.setVolume(value / 100);
              }
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
            const {
              playMode,
              playModeIcon,
              playModeText,
              togglePlayMode
            } = usePlayMode();
            const {
              playbackRate
            } = storeToRefs(playerStore);
            function handleNext() {
              playerStore.nextPlay();
            }
            function handlePrev() {
              playerStore.prevPlay();
            }
            const MusicFullRef = ref(null);
            const showSliderTooltip = ref(false);
            const playMusicEvent = async () => {
              try {
                const result = await playerStore.setPlay({
                  ...playMusic.value
                });
                if (result) {
                  playerStore.setPlayMusic(true);
                }
              } catch (error) {
                console.error("重新获取播放链接失败:", error);
                message.error(t("player.playFailed"));
              }
            };
            const musicFullVisible = computed({
              get: () => playerStore.musicFull,
              set: value => {
                playerStore.setMusicFull(value);
              }
            });
            const setMusicFull = () => {
              musicFullVisible.value = !musicFullVisible.value;
              playerStore.setMusicFull(musicFullVisible.value);
              if (musicFullVisible.value) {
                settingsStore.showArtistDrawer = false;
              }
            };
            const isFavorite = computed(() => {
              if (!playMusic || !playMusic.value) return false;
              return playerStore.favoriteList.includes(playMusic.value.id);
            });
            const toggleFavorite = async e => {
              console.log("playMusic.value", playMusic.value);
              e.stopPropagation();
              let favoriteId = playMusic.value.id;
              if (isFavorite.value) {
                playerStore.removeFromFavorite(favoriteId);
              } else {
                playerStore.addToFavorite(favoriteId);
              }
            };
            const openLyricWindow = () => {
              openLyric();
            };
            const {
              navigateToArtist
            } = useArtist();
            const handleArtistClick = id => {
              musicFullVisible.value = false;
              navigateToArtist(id);
            };
            const openPlayListDrawer = () => {
              playerStore.setPlayListDrawerVisible(true);
            };
            return (_ctx, _cache) => {
              const _component_n_slider = __unplugin_components_0$1;
              const _component_n_image = __unplugin_components_1$4;
              const _component_n_ellipsis = __unplugin_components_2$2;
              const _component_n_tooltip = __unplugin_components_3;
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["music-play-bar", [unref(setAnimationClass)("animate__bounceInUp"), musicFullVisible.value ? "play-bar-opcity" : "", musicFullVisible.value && MusicFullRef.value?.musicFullRef?.config?.hidePlayBar ? "animate__animated animate__slideOutDown" : ""]]),
                style: normalizeStyle({
                  color: musicFullVisible.value ? unref(textColors).theme === "dark" ? "#000000" : "#ffffff" : unref(settingsStore).theme === "dark" ? "#ffffff" : "#000000"
                })
              }, [createBaseVNode("div", _hoisted_1, [createVNode(_component_n_slider, {
                value: timeSlider.value,
                "onUpdate:value": _cache[0] || (_cache[0] = $event => timeSlider.value = $event),
                step: 1,
                max: unref(allTime),
                min: 0,
                "format-tooltip": formatTooltip,
                "show-tooltip": showSliderTooltip.value,
                onMouseenter: _cache[1] || (_cache[1] = $event => showSliderTooltip.value = true),
                onMouseleave: _cache[2] || (_cache[2] = $event => showSliderTooltip.value = false),
                onDragstart: handleSliderDragStart,
                onDragend: handleSliderDragEnd
              }, null, 8, ["value", "max", "show-tooltip"])]), createBaseVNode("div", {
                class: "play-bar-img-wrapper",
                onClick: setMusicFull
              }, [createVNode(_component_n_image, {
                src: unref(getImgUrl)(unref(playMusic)?.picUrl, "100y100"),
                class: "play-bar-img",
                lazy: "",
                "preview-disabled": ""
              }, null, 8, ["src"]), unref(playMusic)?.playLoading ? (openBlock(), createElementBlock("div", _hoisted_2, [...(_cache[7] || (_cache[7] = [createBaseVNode("i", {
                class: "ri-loader-4-line loading-icon"
              }, null, -1)]))])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("i", {
                class: normalizeClass(["text-3xl", musicFullVisible.value ? "ri-arrow-down-s-line" : "ri-arrow-up-s-line"])
              }, null, 2), createBaseVNode("span", _hoisted_5, toDisplayString(musicFullVisible.value ? unref(t)("player.playBar.collapse") : unref(t)("player.playBar.expand")), 1)])])]), createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createVNode(_component_n_ellipsis, {
                class: "text-ellipsis",
                "line-clamp": "1"
              }, {
                default: withCtx(() => [createBaseVNode("p", {
                  innerHTML: unref(playMusic)?.name || ""
                }, null, 8, _hoisted_8)]),
                _: 1
              }), unref(playbackRate) !== 1 ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(unref(playbackRate)) + "x ", 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_10, [createVNode(_component_n_ellipsis, {
                class: "text-ellipsis",
                "line-clamp": "1",
                tooltip: {
                  contentStyle: {
                    maxWidth: "600px"
                  },
                  zIndex: 99999
                }
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (artists, artistsindex) => {
                  return openBlock(), createElementBlock("span", {
                    key: artistsindex,
                    class: "cursor-pointer hover:text-green-500",
                    onClick: $event => handleArtistClick(artists.id)
                  }, toDisplayString(artists.name) + toDisplayString(artistsindex < unref(artistList).length - 1 ? " / " : ""), 9, _hoisted_11);
                }), 128))]),
                _: 1
              })])]), createBaseVNode("div", _hoisted_12, [createBaseVNode("div", {
                class: "music-buttons-prev",
                onClick: handlePrev
              }, [...(_cache[8] || (_cache[8] = [createBaseVNode("i", {
                class: "iconfont icon-prev"
              }, null, -1)]))]), createBaseVNode("div", {
                class: "music-buttons-play",
                onClick: playMusicEvent
              }, [createBaseVNode("i", {
                class: normalizeClass(["iconfont icon", play.value ? "icon-stop" : "icon-play"])
              }, null, 2)]), createBaseVNode("div", {
                class: "music-buttons-next",
                onClick: handleNext
              }, [...(_cache[9] || (_cache[9] = [createBaseVNode("i", {
                class: "iconfont icon-next"
              }, null, -1)]))])]), createBaseVNode("div", _hoisted_13, [createBaseVNode("div", {
                class: "audio-volume custom-slider",
                onWheel: withModifiers(handleVolumeWheel, ["prevent"])
              }, [createBaseVNode("div", {
                class: "volume-icon",
                onClick: mute
              }, [createBaseVNode("i", {
                class: normalizeClass(["iconfont", getVolumeIcon.value])
              }, null, 2)]), createBaseVNode("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, toDisplayString(Math.round(volumeSlider.value)) + "%", 1), createVNode(_component_n_slider, {
                value: volumeSlider.value,
                "onUpdate:value": _cache[3] || (_cache[3] = $event => volumeSlider.value = $event),
                step: 0.01,
                tooltip: false,
                vertical: ""
              }, null, 8, ["value"])])], 32), !unref(isMobile) ? (openBlock(), createBlock(_component_n_tooltip, {
                key: 0,
                trigger: "hover",
                "z-index": 9999999
              }, {
                trigger: withCtx(() => [createBaseVNode("i", {
                  class: normalizeClass(["iconfont", [unref(playModeIcon), {
                    "intelligence-active": unref(playMode) === 3
                  }]]),
                  onClick: _cache[4] || (_cache[4] =
                  //@ts-ignore
                  (...args) => unref(togglePlayMode) && unref(togglePlayMode)(...args))
                }, null, 2)]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(playModeText)), 1)]),
                _: 1
              })) : createCommentVNode("", true), !unref(isMobile) ? (openBlock(), createBlock(_component_n_tooltip, {
                key: 1,
                trigger: "hover",
                "z-index": 9999999
              }, {
                trigger: withCtx(() => [createBaseVNode("i", {
                  class: normalizeClass(["iconfont", {
                    "like-active": isFavorite.value,
                    "ri-heart-3-fill": isFavorite.value,
                    "ri-heart-3-line": !isFavorite.value
                  }]),
                  onClick: toggleFavorite
                }, null, 2)]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("player.playBar.like")), 1)]),
                _: 1
              })) : createCommentVNode("", true), unref(isElectron) ? (openBlock(), createBlock(_component_n_tooltip, {
                key: 2,
                class: "music-lyric",
                trigger: "hover",
                "z-index": 9999999
              }, {
                trigger: withCtx(() => [createBaseVNode("i", {
                  class: normalizeClass(["iconfont ri-netease-cloud-music-line", {
                    "text-green-500": unref(isLyricWindowOpen),
                    "disabled-icon": !unref(playMusic)?.id
                  }]),
                  onClick: _cache[5] || (_cache[5] = $event => unref(playMusic)?.id && openLyricWindow())
                }, null, 2)]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(playMusic)?.id ? unref(t)("player.playBar.lyric") : unref(t)("player.playBar.noSongPlaying")), 1)]),
                _: 1
              })) : createCommentVNode("", true), unref(playMusic)?.id && unref(isElectron) ? (openBlock(), createBlock(_component_n_tooltip, {
                key: 3,
                trigger: "hover",
                "z-index": 9999999
              }, {
                trigger: withCtx(() => [unref(playMusic)?.id ? (openBlock(), createBlock(ReparsePopover, {
                  key: 0
                })) : createCommentVNode("", true)]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("player.playBar.reparse")), 1)]),
                _: 1
              })) : createCommentVNode("", true), createVNode(AdvancedControlsPopover), createVNode(_component_n_tooltip, {
                trigger: "hover",
                "z-index": 9999999
              }, {
                trigger: withCtx(() => [createBaseVNode("i", {
                  class: "iconfont icon-list text-2xl hover:text-green-500 transition-colors cursor-pointer",
                  onClick: openPlayListDrawer
                })]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("player.playBar.playList")), 1)]),
                _: 1
              })]), createVNode(_sfc_main$5, {
                ref_key: "MusicFullRef",
                ref: MusicFullRef,
                modelValue: musicFullVisible.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => musicFullVisible.value = $event),
                background: background.value
              }, null, 8, ["modelValue", "background"])], 6);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const PlayBar = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-f9b04433"]]));
      }
    };
  });
})();

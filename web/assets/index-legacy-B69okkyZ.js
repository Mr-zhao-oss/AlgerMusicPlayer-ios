;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './text-legacy-NqA4WrE6.js'], function (exports, module) {
    'use strict';

    var baseEach, baseIteratee, isArray, baseAssignValue, baseForOwn, isSymbol, enUS, useSsrAdapter, inject, onMounted, watchEffect, murmur2, c, ref, configProviderInjectionKey, defineComponent, h, __unplugin_components_3, resolveSlotWithTypedProps, computed, cB, cE, cM, resolveWrappedSlot, resolveSlot, useConfig, useLocale, useTheme, heatmapLight, useRtl, useThemeClass, createKey, pxfy, useI18n, usePlayHistoryStore, usePlayerStore, openBlock, createElementBlock, createBaseVNode, toDisplayString, unref, normalizeClass, setAnimationClass, createVNode, withCtx, __unplugin_components_2$1, Fragment, renderList, createCommentVNode, createTextVNode, Scrollbar, _export_sfc, __unplugin_components_1, __unplugin_components_3$1;
    return {
      setters: [module => {
        baseEach = module.dq;
        baseIteratee = module.dr;
        isArray = module.ds;
        baseAssignValue = module.dt;
        baseForOwn = module.du;
        isSymbol = module.dv;
        enUS = module.dw;
        useSsrAdapter = module.bX;
        inject = module.E;
        onMounted = module.aq;
        watchEffect = module.F;
        murmur2 = module.cF;
        c = module.a;
        ref = module.A;
        configProviderInjectionKey = module.dx;
        defineComponent = module.d;
        h = module.h;
        __unplugin_components_3 = module.dg;
        resolveSlotWithTypedProps = module.dy;
        computed = module.z;
        cB = module.c;
        cE = module.b;
        cM = module.g;
        resolveWrappedSlot = module.c3;
        resolveSlot = module.c6;
        useConfig = module.u;
        useLocale = module.S;
        useTheme = module.U;
        heatmapLight = module.dz;
        useRtl = module.i;
        useThemeClass = module.Z;
        createKey = module.a4;
        pxfy = module.dA;
        useI18n = module.a5;
        usePlayHistoryStore = module.bu;
        usePlayerStore = module.bb;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        unref = module.ad;
        normalizeClass = module.aa;
        setAnimationClass = module.bv;
        createVNode = module.ak;
        withCtx = module.as;
        __unplugin_components_2$1 = module.bj;
        Fragment = module.ae;
        renderList = module.af;
        createCommentVNode = module.ah;
        createTextVNode = module.b7;
        Scrollbar = module.be;
        _export_sfc = module.ap;
      }, module => {
        __unplugin_components_1 = module.a;
        __unplugin_components_3$1 = module._;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".heatmap-page[data-v-2fa9804a] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}.heatmap-page[data-v-2fa9804a]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-header[data-v-2fa9804a] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.heatmap-page .heatmap-header .header-left[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.heatmap-page .heatmap-header .header-left .back-button[data-v-2fa9804a] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-left .back-button[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-left .back-button[data-v-2fa9804a]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-left .back-button[data-v-2fa9804a]:hover:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-left .back-button[data-v-2fa9804a] {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.heatmap-page .heatmap-header .header-left h2[data-v-2fa9804a] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-left h2[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-stats[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.heatmap-page .heatmap-header .header-stats .stat-item[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-stats .stat-item[data-v-2fa9804a]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-stats .stat-item .stat-label[data-v-2fa9804a] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-stats .stat-item .stat-label[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-stats .stat-item .stat-value[data-v-2fa9804a] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-header .header-stats .stat-item .stat-value[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-content[data-v-2fa9804a] {\n  min-height: 0px;\n  flex: 1 1 0%;\n}\n.heatmap-page .heatmap-wrapper[data-v-2fa9804a] {\n  padding: 1.5rem;\n}\n.heatmap-page .heatmap-wrapper .loading-wrapper[data-v-2fa9804a] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n.heatmap-page .heatmap-wrapper .loading-wrapper .loading-text[data-v-2fa9804a] {\n  margin-top: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .loading-wrapper .loading-text[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container[data-v-2fa9804a] {\n  border-radius: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  padding: 1.5rem;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container[data-v-2fa9804a]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector[data-v-2fa9804a] {\n  margin-bottom: 1.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-bottom: 1rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector[data-v-2fa9804a]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .selector-label[data-v-2fa9804a] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .selector-label[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option[data-v-2fa9804a] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  gap: 0.25rem;\n  border-radius: 0.5rem;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  border-width: 2px;\n  border-color: transparent;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option[data-v-2fa9804a]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option[data-v-2fa9804a]:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.active[data-v-2fa9804a] {\n  border-color: currentColor;\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.active[data-v-2fa9804a]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option .color-block[data-v-2fa9804a] {\n  height: 1.25rem;\n  width: 1.25rem;\n  border-radius: 0.25rem;\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option .color-name[data-v-2fa9804a] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-green .color-block[data-v-2fa9804a] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-green.active[data-v-2fa9804a] {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-green.active[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-blue .color-block[data-v-2fa9804a] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-blue.active[data-v-2fa9804a] {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-blue.active[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(96 165 250 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-orange .color-block[data-v-2fa9804a] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-orange.active[data-v-2fa9804a] {\n  --tw-border-opacity: 1;\n  border-color: rgb(249 115 22 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-orange.active[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(251 146 60 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-purple .color-block[data-v-2fa9804a] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-purple.active[data-v-2fa9804a] {\n  --tw-border-opacity: 1;\n  border-color: rgb(168 85 247 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(147 51 234 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-purple.active[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(192 132 252 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-red .color-block[data-v-2fa9804a] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-red.active[data-v-2fa9804a] {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .color-theme-selector .color-options .color-option.color-red.active[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .custom-heatmap[data-v-2fa9804a] {\n  width: 100%;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .heatmap-footer[data-v-2fa9804a] {\n  margin-top: 1rem;\n  text-align: center;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards[data-v-2fa9804a] {\n  margin-top: 1.5rem;\n  display: grid;\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n  gap: 1rem;\n}\n@media (min-width: 768px) {.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards[data-v-2fa9804a] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card[data-v-2fa9804a] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  border-radius: 0.75rem;\n  padding: 1rem;\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: #f3f4f6 var(--tw-gradient-to-position);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card[data-v-2fa9804a]:is(.dark *) {\n  --tw-gradient-from: #1f2937 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(31 41 55 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: #111827 var(--tw-gradient-to-position);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card[data-v-2fa9804a] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card[data-v-2fa9804a]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card[data-v-2fa9804a] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card[data-v-2fa9804a]:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-icon[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 0.5rem;\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n  --tw-gradient-from: #4ade80 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(74 222 128 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: #16a34a var(--tw-gradient-to-position);\n  font-size: 1.5rem;\n  line-height: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-icon .iconfont[data-v-2fa9804a] {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card:nth-child(2) .stat-icon[data-v-2fa9804a] {\n  --tw-gradient-from: #fb923c var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(251 146 60 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: #ea580c var(--tw-gradient-to-position);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card:nth-child(3) .stat-icon[data-v-2fa9804a] {\n  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  --tw-gradient-to: #9333ea var(--tw-gradient-to-position);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content[data-v-2fa9804a] {\n  min-width: 0px;\n  flex: 1 1 0%;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-title[data-v-2fa9804a] {\n  margin-bottom: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-title[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value[data-v-2fa9804a] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info[data-v-2fa9804a] {\n  margin-bottom: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info.clickable[data-v-2fa9804a] {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n  margin-top: -0.25rem;\n  margin-bottom: -0.25rem;\n  cursor: pointer;\n  border-radius: 0.375rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info.clickable[data-v-2fa9804a]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info.clickable[data-v-2fa9804a]:hover:is(.dark *) {\n  background-color: rgb(20 83 45 / 0.2);\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info.clickable .song-name[data-v-2fa9804a]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info.clickable .song-name[data-v-2fa9804a]:hover:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info .song-name[data-v-2fa9804a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info .song-name[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info .song-name[data-v-2fa9804a] {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info .song-artist[data-v-2fa9804a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .song-info .song-artist[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .day-info[data-v-2fa9804a] {\n  margin-bottom: 0.25rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .day-info[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .play-count[data-v-2fa9804a],\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .time-info[data-v-2fa9804a] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .play-count[data-v-2fa9804a]:is(.dark *),\n.heatmap-page .heatmap-wrapper .heatmap-container .stats-cards .stat-card .stat-content .stat-value .time-info[data-v-2fa9804a]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.heatmap-page .heatmap-wrapper .no-data[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n.heatmap-tooltip[data-v-2fa9804a] {\n  min-width: 200px;\n  padding: 0.75rem;\n}\n.heatmap-tooltip .tooltip-date[data-v-2fa9804a] {\n  margin-bottom: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.heatmap-tooltip .tooltip-plays[data-v-2fa9804a] {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n}\n.heatmap-tooltip .tooltip-songs[data-v-2fa9804a] {\n  margin-top: 0.5rem;\n}\n.heatmap-tooltip .tooltip-songs .songs-title[data-v-2fa9804a] {\n  margin-bottom: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.heatmap-tooltip .tooltip-songs .song-item[data-v-2fa9804a] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.heatmap-tooltip .tooltip-songs .song-item.clickable[data-v-2fa9804a] {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.heatmap-tooltip .tooltip-songs .song-item.clickable[data-v-2fa9804a]:hover {\n  background-color: rgb(34 197 94 / 0.3);\n}\n.heatmap-tooltip .tooltip-songs .song-item.clickable .song-name[data-v-2fa9804a]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.heatmap-tooltip .tooltip-songs .song-item .song-rank[data-v-2fa9804a] {\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.heatmap-tooltip .tooltip-songs .song-item .song-name[data-v-2fa9804a] {\n  max-width: 120px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.heatmap-tooltip .tooltip-songs .song-item .song-artist[data-v-2fa9804a] {\n  max-width: 80px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.heatmap-tooltip .tooltip-songs .song-item .song-count[data-v-2fa9804a] {\n  margin-left: auto;\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n[data-v-2fa9804a] .n-heatmap {\n  --n-rect-size: max(12px, min(1.2vw, 30px)) !important;\n  --n-x-gap: max(2px, min(0.3vw, 10px)) !important;\n  --n-y-gap: max(2px, min(0.3vw, 10px)) !important;\n}\n[data-v-2fa9804a] .n-heatmap .n-heatmap__calendar {\n  border-radius: 0.5rem;\n}\n[data-v-2fa9804a] .n-heatmap .n-heatmap__day {\n  border-radius: 0.125rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n[data-v-2fa9804a] .n-heatmap .n-heatmap__day:hover {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: rgb(74 222 128 / var(--tw-ring-opacity, 1));\n  --tw-ring-opacity: 0.5;\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);

        /**
         * @module constants
         * @summary Useful constants
         * @description
         * Collection of useful date constants.
         *
         * The constants could be imported from `date-fns/constants`:
         *
         * ```ts
         * import { maxTime, minTime } from "./constants/date-fns/constants";
         *
         * function isAllowedTime(time) {
         *   return time <= maxTime && time >= minTime;
         * }
         * ```
         */

        /**
         * @constant
         * @name millisecondsInWeek
         * @summary Milliseconds in 1 week.
         */
        const millisecondsInWeek = 604800000;

        /**
         * @constant
         * @name millisecondsInDay
         * @summary Milliseconds in 1 day.
         */
        const millisecondsInDay = 86400000;

        /**
         * @constant
         * @name millisecondsInMinute
         * @summary Milliseconds in 1 minute
         */
        const millisecondsInMinute = 60000;

        /**
         * @constant
         * @name millisecondsInHour
         * @summary Milliseconds in 1 hour
         */
        const millisecondsInHour = 3600000;

        /**
         * @constant
         * @name constructFromSymbol
         * @summary Symbol enabling Date extensions to inherit properties from the reference date.
         *
         * The symbol is used to enable the `constructFrom` function to construct a date
         * using a reference date and a value. It allows to transfer extra properties
         * from the reference date to the new date. It's useful for extensions like
         * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
         * a constructor argument.
         */
        const constructFromSymbol = Symbol.for("constructDateFrom");

        /**
         * @name constructFrom
         * @category Generic Helpers
         * @summary Constructs a date using the reference date and the value
         *
         * @description
         * The function constructs a new date using the constructor from the reference
         * date and the given value. It helps to build generic functions that accept
         * date extensions.
         *
         * It defaults to `Date` if the passed reference date is a number or a string.
         *
         * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
         * enabling to transfer extra properties from the reference date to the new date.
         * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
         * that accept a time zone as a constructor argument.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         *
         * @param date - The reference date to take constructor from
         * @param value - The value to create the date
         *
         * @returns Date initialized using the given date and value
         *
         * @example
         * import { constructFrom } from "./constructFrom/date-fns";
         *
         * // A function that clones a date preserving the original type
         * function cloneDate<DateType extends Date>(date: DateType): DateType {
         *   return constructFrom(
         *     date, // Use constructor from the given date
         *     date.getTime() // Use the date value to create a new date
         *   );
         * }
         */
        function constructFrom(date, value) {
          if (typeof date === "function") return date(value);
          if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
          if (date instanceof Date) return new date.constructor(value);
          return new Date(value);
        }
        function normalizeDates(context, ...dates) {
          const normalize = constructFrom.bind(null, dates.find(date => typeof date === "object"));
          return dates.map(normalize);
        }
        let defaultOptions = {};
        function getDefaultOptions() {
          return defaultOptions;
        }

        /**
         * @name toDate
         * @category Common Helpers
         * @summary Convert the given argument to an instance of Date.
         *
         * @description
         * Convert the given argument to an instance of Date.
         *
         * If the argument is an instance of Date, the function returns its clone.
         *
         * If the argument is a number, it is treated as a timestamp.
         *
         * If the argument is none of the above, the function returns Invalid Date.
         *
         * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
         * enabling to transfer extra properties from the reference date to the new date.
         * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
         * that accept a time zone as a constructor argument.
         *
         * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param argument - The value to convert
         *
         * @returns The parsed date in the local time zone
         *
         * @example
         * // Clone the date:
         * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
         * //=> Tue Feb 11 2014 11:30:30
         *
         * @example
         * // Convert the timestamp to date:
         * const result = toDate(1392098430000)
         * //=> Tue Feb 11 2014 11:30:30
         */
        function toDate(argument, context) {
          // [TODO] Get rid of `toDate` or `constructFrom`?
          return constructFrom(context || argument, argument);
        }

        /**
         * The {@link startOfWeek} function options.
         */

        /**
         * @name startOfWeek
         * @category Week Helpers
         * @summary Return the start of a week for the given date.
         *
         * @description
         * Return the start of a week for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of a week
         *
         * @example
         * // The start of a week for 2 September 2014 11:55:00:
         * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Sun Aug 31 2014 00:00:00
         *
         * @example
         * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
         * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
         * //=> Mon Sep 01 2014 00:00:00
         */
        function startOfWeek(date, options) {
          const defaultOptions = getDefaultOptions();
          const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
          const _date = toDate(date, options?.in);
          const day = _date.getDay();
          const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
          _date.setDate(_date.getDate() - diff);
          _date.setHours(0, 0, 0, 0);
          return _date;
        }

        /**
         * A specialized version of `baseAggregator` for arrays.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} setter The function to set `accumulator` values.
         * @param {Function} iteratee The iteratee to transform keys.
         * @param {Object} accumulator The initial aggregated object.
         * @returns {Function} Returns `accumulator`.
         */
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1,
            length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }

        /**
         * Aggregates elements of `collection` on `accumulator` with keys transformed
         * by `iteratee` and values set by `setter`.
         *
         * @private
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} setter The function to set `accumulator` values.
         * @param {Function} iteratee The iteratee to transform keys.
         * @param {Object} accumulator The initial aggregated object.
         * @returns {Function} Returns `accumulator`.
         */
        function baseAggregator(collection, setter, iteratee, accumulator) {
          baseEach(collection, function (value, key, collection) {
            setter(accumulator, value, iteratee(value), collection);
          });
          return accumulator;
        }

        /**
         * Creates a function like `_.groupBy`.
         *
         * @private
         * @param {Function} setter The function to set accumulator values.
         * @param {Function} [initializer] The accumulator object initializer.
         * @returns {Function} Returns the new aggregator function.
         */
        function createAggregator(setter, initializer) {
          return function (collection, iteratee) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator,
              accumulator = initializer ? initializer() : {};
            return func(collection, setter, baseIteratee(iteratee), accumulator);
          };
        }

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Creates an object composed of keys generated from the results of running
         * each element of `collection` thru `iteratee`. The order of grouped values
         * is determined by the order they occur in `collection`. The corresponding
         * value of each key is an array of elements responsible for generating the
         * key. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Collection
         * @param {Array|Object} collection The collection to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
         * @returns {Object} Returns the composed aggregate object.
         * @example
         *
         * _.groupBy([6.1, 4.2, 6.3], Math.floor);
         * // => { '4': [4.2], '6': [6.1, 6.3] }
         *
         * // The `_.property` iteratee shorthand.
         * _.groupBy(['one', 'two', 'three'], 'length');
         * // => { '3': ['one', 'two'], '5': ['three'] }
         */
        var groupBy = createAggregator(function (result, value, key) {
          if (hasOwnProperty.call(result, key)) {
            result[key].push(value);
          } else {
            baseAssignValue(result, key, [value]);
          }
        });

        /**
         * The base implementation of `_.gt` which doesn't coerce arguments.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if `value` is greater than `other`,
         *  else `false`.
         */
        function baseGt(value, other) {
          return value > other;
        }

        /**
         * Creates an object with the same keys as `object` and values generated
         * by running each own enumerable string keyed property of `object` thru
         * `iteratee`. The iteratee is invoked with three arguments:
         * (value, key, object).
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns the new mapped object.
         * @see _.mapKeys
         * @example
         *
         * var users = {
         *   'fred':    { 'user': 'fred',    'age': 40 },
         *   'pebbles': { 'user': 'pebbles', 'age': 1 }
         * };
         *
         * _.mapValues(users, function(o) { return o.age; });
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         *
         * // The `_.property` iteratee shorthand.
         * _.mapValues(users, 'age');
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         */
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = baseIteratee(iteratee);
          baseForOwn(object, function (value, key, object) {
            baseAssignValue(result, key, iteratee(value, key, object));
          });
          return result;
        }

        /**
         * The base implementation of methods like `_.max` and `_.min` which accepts a
         * `comparator` to determine the extremum value.
         *
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} iteratee The iteratee invoked per iteration.
         * @param {Function} comparator The comparator used to compare values.
         * @returns {*} Returns the extremum value.
         */
        function baseExtremum(array, iteratee, comparator) {
          var index = -1,
            length = array.length;
          while (++index < length) {
            var value = array[index],
              current = iteratee(value);
            if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current,
                result = value;
            }
          }
          return result;
        }

        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Math
         * @param {Array} array The array to iterate over.
         * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
         * @returns {*} Returns the maximum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.maxBy(objects, function(o) { return o.n; });
         * // => { 'n': 2 }
         *
         * // The `_.property` iteratee shorthand.
         * _.maxBy(objects, 'n');
         * // => { 'n': 2 }
         */
        function maxBy(array, iteratee) {
          return array && array.length ? baseExtremum(array, baseIteratee(iteratee), baseGt) : undefined;
        }

        /**
         * The {@link addDays} function options.
         */

        /**
         * @name addDays
         * @category Day Helpers
         * @summary Add the specified number of days to the given date.
         *
         * @description
         * Add the specified number of days to the given date.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The date to be changed
         * @param amount - The amount of days to be added.
         * @param options - An object with options
         *
         * @returns The new date with the days added
         *
         * @example
         * // Add 10 days to 1 September 2014:
         * const result = addDays(new Date(2014, 8, 1), 10)
         * //=> Thu Sep 11 2014 00:00:00
         */
        function addDays(date, amount, options) {
          const _date = toDate(date, options?.in);
          if (isNaN(amount)) return constructFrom(date, NaN);

          // If 0 days, no-op to avoid changing times in the hour before end of DST
          if (!amount) return _date;
          _date.setDate(_date.getDate() + amount);
          return _date;
        }

        /**
         * The {@link startOfISOWeek} function options.
         */

        /**
         * @name startOfISOWeek
         * @category ISO Week Helpers
         * @summary Return the start of an ISO week for the given date.
         *
         * @description
         * Return the start of an ISO week for the given date.
         * The result will be in the local timezone.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of an ISO week
         *
         * @example
         * // The start of an ISO week for 2 September 2014 11:55:00:
         * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Mon Sep 01 2014 00:00:00
         */
        function startOfISOWeek(date, options) {
          return startOfWeek(date, {
            ...options,
            weekStartsOn: 1
          });
        }

        /**
         * The {@link getISOWeekYear} function options.
         */

        /**
         * @name getISOWeekYear
         * @category ISO Week-Numbering Year Helpers
         * @summary Get the ISO week-numbering year of the given date.
         *
         * @description
         * Get the ISO week-numbering year of the given date,
         * which always starts 3 days before the year's first Thursday.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @param date - The given date
         *
         * @returns The ISO week-numbering year
         *
         * @example
         * // Which ISO-week numbering year is 2 January 2005?
         * const result = getISOWeekYear(new Date(2005, 0, 2))
         * //=> 2004
         */
        function getISOWeekYear(date, options) {
          const _date = toDate(date, options?.in);
          const year = _date.getFullYear();
          const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
          fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
          fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
          const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
          const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
          fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
          fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
          const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
          if (_date.getTime() >= startOfNextYear.getTime()) {
            return year + 1;
          } else if (_date.getTime() >= startOfThisYear.getTime()) {
            return year;
          } else {
            return year - 1;
          }
        }

        /**
         * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
         * They usually appear for dates that denote time before the timezones were introduced
         * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
         * and GMT+01:00:00 after that date)
         *
         * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
         * which would lead to incorrect calculations.
         *
         * This function returns the timezone offset in milliseconds that takes seconds in account.
         */
        function getTimezoneOffsetInMilliseconds(date) {
          const _date = toDate(date);
          const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
          utcDate.setUTCFullYear(_date.getFullYear());
          return +date - +utcDate;
        }

        /**
         * The {@link startOfDay} function options.
         */

        /**
         * @name startOfDay
         * @category Day Helpers
         * @summary Return the start of a day for the given date.
         *
         * @description
         * Return the start of a day for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - The options
         *
         * @returns The start of a day
         *
         * @example
         * // The start of a day for 2 September 2014 11:55:00:
         * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Tue Sep 02 2014 00:00:00
         */
        function startOfDay(date, options) {
          const _date = toDate(date, options?.in);
          _date.setHours(0, 0, 0, 0);
          return _date;
        }

        /**
         * The {@link differenceInCalendarDays} function options.
         */

        /**
         * @name differenceInCalendarDays
         * @category Day Helpers
         * @summary Get the number of calendar days between the given dates.
         *
         * @description
         * Get the number of calendar days between the given dates. This means that the times are removed
         * from the dates and then the difference in days is calculated.
         *
         * @param laterDate - The later date
         * @param earlierDate - The earlier date
         * @param options - The options object
         *
         * @returns The number of calendar days
         *
         * @example
         * // How many calendar days are between
         * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
         * const result = differenceInCalendarDays(
         *   new Date(2012, 6, 2, 0, 0),
         *   new Date(2011, 6, 2, 23, 0)
         * )
         * //=> 366
         * // How many calendar days are between
         * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
         * const result = differenceInCalendarDays(
         *   new Date(2011, 6, 3, 0, 1),
         *   new Date(2011, 6, 2, 23, 59)
         * )
         * //=> 1
         */
        function differenceInCalendarDays(laterDate, earlierDate, options) {
          const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
          const laterStartOfDay = startOfDay(laterDate_);
          const earlierStartOfDay = startOfDay(earlierDate_);
          const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
          const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);

          // Round the number of days to the nearest integer because the number of
          // milliseconds in a day is not constant (e.g. it's different in the week of
          // the daylight saving time clock shift).
          return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
        }

        /**
         * The {@link startOfISOWeekYear} function options.
         */

        /**
         * @name startOfISOWeekYear
         * @category ISO Week-Numbering Year Helpers
         * @summary Return the start of an ISO week-numbering year for the given date.
         *
         * @description
         * Return the start of an ISO week-numbering year,
         * which always starts 3 days before the year's first Thursday.
         * The result will be in the local timezone.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of an ISO week-numbering year
         *
         * @example
         * // The start of an ISO week-numbering year for 2 July 2005:
         * const result = startOfISOWeekYear(new Date(2005, 6, 2))
         * //=> Mon Jan 03 2005 00:00:00
         */
        function startOfISOWeekYear(date, options) {
          const year = getISOWeekYear(date, options);
          const fourthOfJanuary = constructFrom(date, 0);
          fourthOfJanuary.setFullYear(year, 0, 4);
          fourthOfJanuary.setHours(0, 0, 0, 0);
          return startOfISOWeek(fourthOfJanuary);
        }

        /**
         * @name isDate
         * @category Common Helpers
         * @summary Is the given value a date?
         *
         * @description
         * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
         *
         * @param value - The value to check
         *
         * @returns True if the given value is a date
         *
         * @example
         * // For a valid date:
         * const result = isDate(new Date())
         * //=> true
         *
         * @example
         * // For an invalid date:
         * const result = isDate(new Date(NaN))
         * //=> true
         *
         * @example
         * // For some value:
         * const result = isDate('2014-02-31')
         * //=> false
         *
         * @example
         * // For an object:
         * const result = isDate({})
         * //=> false
         */
        function isDate(value) {
          return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
        }

        /**
         * @name isValid
         * @category Common Helpers
         * @summary Is the given date valid?
         *
         * @description
         * Returns false if argument is Invalid Date and true otherwise.
         * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
         * Invalid Date is a Date, whose time value is NaN.
         *
         * Time value of Date: http://es5.github.io/#x15.9.1.1
         *
         * @param date - The date to check
         *
         * @returns The date is valid
         *
         * @example
         * // For the valid date:
         * const result = isValid(new Date(2014, 1, 31))
         * //=> true
         *
         * @example
         * // For the value, convertible into a date:
         * const result = isValid(1393804800000)
         * //=> true
         *
         * @example
         * // For the invalid date:
         * const result = isValid(new Date(''))
         * //=> false
         */
        function isValid(date) {
          return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
        }
        function normalizeInterval(context, interval) {
          const [start, end] = normalizeDates(context, interval.start, interval.end);
          return {
            start,
            end
          };
        }

        /**
         * The {@link eachDayOfInterval} function options.
         */

        /**
         * The {@link eachDayOfInterval} function result type. It resolves the proper data type.
         * It uses the first argument date object type, starting from the date argument,
         * then the start interval date, and finally the end interval date. If
         * a context function is passed, it uses the context function return type.
         */

        /**
         * @name eachDayOfInterval
         * @category Interval Helpers
         * @summary Return the array of dates within the specified time interval.
         *
         * @description
         * Return the array of dates within the specified time interval.
         *
         * @typeParam IntervalType - Interval type.
         * @typeParam Options - Options type.
         *
         * @param interval - The interval.
         * @param options - An object with options.
         *
         * @returns The array with starts of days from the day of the interval start to the day of the interval end
         *
         * @example
         * // Each day between 6 October 2014 and 10 October 2014:
         * const result = eachDayOfInterval({
         *   start: new Date(2014, 9, 6),
         *   end: new Date(2014, 9, 10)
         * })
         * //=> [
         * //   Mon Oct 06 2014 00:00:00,
         * //   Tue Oct 07 2014 00:00:00,
         * //   Wed Oct 08 2014 00:00:00,
         * //   Thu Oct 09 2014 00:00:00,
         * //   Fri Oct 10 2014 00:00:00
         * // ]
         */
        function eachDayOfInterval(interval, options) {
          const {
            start,
            end
          } = normalizeInterval(options?.in, interval);
          let reversed = +start > +end;
          const endTime = reversed ? +start : +end;
          const date = reversed ? end : start;
          date.setHours(0, 0, 0, 0);
          let step = 1;
          const dates = [];
          while (+date <= endTime) {
            dates.push(constructFrom(start, date));
            date.setDate(date.getDate() + step);
            date.setHours(0, 0, 0, 0);
          }
          return reversed ? dates.reverse() : dates;
        }

        /**
         * The {@link startOfYear} function options.
         */

        /**
         * @name startOfYear
         * @category Year Helpers
         * @summary Return the start of a year for the given date.
         *
         * @description
         * Return the start of a year for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - The options
         *
         * @returns The start of a year
         *
         * @example
         * // The start of a year for 2 September 2014 11:55:00:
         * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
         * //=> Wed Jan 01 2014 00:00:00
         */
        function startOfYear(date, options) {
          const date_ = toDate(date, options?.in);
          date_.setFullYear(date_.getFullYear(), 0, 1);
          date_.setHours(0, 0, 0, 0);
          return date_;
        }

        /**
         * The {@link endOfWeek} function options.
         */

        /**
         * @name endOfWeek
         * @category Week Helpers
         * @summary Return the end of a week for the given date.
         *
         * @description
         * Return the end of a week for the given date.
         * The result will be in the local timezone.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The end of a week
         *
         * @example
         * // The end of a week for 2 September 2014 11:55:00:
         * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
         * //=> Sat Sep 06 2014 23:59:59.999
         *
         * @example
         * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
         * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
         * //=> Sun Sep 07 2014 23:59:59.999
         */
        function endOfWeek(date, options) {
          const defaultOptions = getDefaultOptions();
          const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
          const _date = toDate(date, options?.in);
          const day = _date.getDay();
          const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
          _date.setDate(_date.getDate() + diff);
          _date.setHours(23, 59, 59, 999);
          return _date;
        }

        /**
         * The {@link getDayOfYear} function options.
         */

        /**
         * @name getDayOfYear
         * @category Day Helpers
         * @summary Get the day of the year of the given date.
         *
         * @description
         * Get the day of the year of the given date.
         *
         * @param date - The given date
         * @param options - The options
         *
         * @returns The day of year
         *
         * @example
         * // Which day of the year is 2 July 2014?
         * const result = getDayOfYear(new Date(2014, 6, 2))
         * //=> 183
         */
        function getDayOfYear(date, options) {
          const _date = toDate(date, options?.in);
          const diff = differenceInCalendarDays(_date, startOfYear(_date));
          const dayOfYear = diff + 1;
          return dayOfYear;
        }

        /**
         * The {@link getISOWeek} function options.
         */

        /**
         * @name getISOWeek
         * @category ISO Week Helpers
         * @summary Get the ISO week of the given date.
         *
         * @description
         * Get the ISO week of the given date.
         *
         * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
         *
         * @param date - The given date
         * @param options - The options
         *
         * @returns The ISO week
         *
         * @example
         * // Which week of the ISO-week numbering year is 2 January 2005?
         * const result = getISOWeek(new Date(2005, 0, 2))
         * //=> 53
         */
        function getISOWeek(date, options) {
          const _date = toDate(date, options?.in);
          const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);

          // Round the number of weeks to the nearest integer because the number of
          // milliseconds in a week is not constant (e.g. it's different in the week of
          // the daylight saving time clock shift).
          return Math.round(diff / millisecondsInWeek) + 1;
        }

        /**
         * The {@link getWeekYear} function options.
         */

        /**
         * @name getWeekYear
         * @category Week-Numbering Year Helpers
         * @summary Get the local week-numbering year of the given date.
         *
         * @description
         * Get the local week-numbering year of the given date.
         * The exact calculation depends on the values of
         * `options.weekStartsOn` (which is the index of the first day of the week)
         * and `options.firstWeekContainsDate` (which is the day of January, which is always in
         * the first week of the week-numbering year)
         *
         * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
         *
         * @param date - The given date
         * @param options - An object with options.
         *
         * @returns The local week-numbering year
         *
         * @example
         * // Which week numbering year is 26 December 2004 with the default settings?
         * const result = getWeekYear(new Date(2004, 11, 26))
         * //=> 2005
         *
         * @example
         * // Which week numbering year is 26 December 2004 if week starts on Saturday?
         * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
         * //=> 2004
         *
         * @example
         * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
         * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
         * //=> 2004
         */
        function getWeekYear(date, options) {
          const _date = toDate(date, options?.in);
          const year = _date.getFullYear();
          const defaultOptions = getDefaultOptions();
          const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
          const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
          firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
          firstWeekOfNextYear.setHours(0, 0, 0, 0);
          const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
          const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
          firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
          firstWeekOfThisYear.setHours(0, 0, 0, 0);
          const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
          if (+_date >= +startOfNextYear) {
            return year + 1;
          } else if (+_date >= +startOfThisYear) {
            return year;
          } else {
            return year - 1;
          }
        }

        /**
         * The {@link startOfWeekYear} function options.
         */

        /**
         * @name startOfWeekYear
         * @category Week-Numbering Year Helpers
         * @summary Return the start of a local week-numbering year for the given date.
         *
         * @description
         * Return the start of a local week-numbering year.
         * The exact calculation depends on the values of
         * `options.weekStartsOn` (which is the index of the first day of the week)
         * and `options.firstWeekContainsDate` (which is the day of January, which is always in
         * the first week of the week-numbering year)
         *
         * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type.
         *
         * @param date - The original date
         * @param options - An object with options
         *
         * @returns The start of a week-numbering year
         *
         * @example
         * // The start of an a week-numbering year for 2 July 2005 with default settings:
         * const result = startOfWeekYear(new Date(2005, 6, 2))
         * //=> Sun Dec 26 2004 00:00:00
         *
         * @example
         * // The start of a week-numbering year for 2 July 2005
         * // if Monday is the first day of week
         * // and 4 January is always in the first week of the year:
         * const result = startOfWeekYear(new Date(2005, 6, 2), {
         *   weekStartsOn: 1,
         *   firstWeekContainsDate: 4
         * })
         * //=> Mon Jan 03 2005 00:00:00
         */
        function startOfWeekYear(date, options) {
          const defaultOptions = getDefaultOptions();
          const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
          const year = getWeekYear(date, options);
          const firstWeek = constructFrom(options?.in || date, 0);
          firstWeek.setFullYear(year, 0, firstWeekContainsDate);
          firstWeek.setHours(0, 0, 0, 0);
          const _date = startOfWeek(firstWeek, options);
          return _date;
        }

        /**
         * The {@link getWeek} function options.
         */

        /**
         * @name getWeek
         * @category Week Helpers
         * @summary Get the local week index of the given date.
         *
         * @description
         * Get the local week index of the given date.
         * The exact calculation depends on the values of
         * `options.weekStartsOn` (which is the index of the first day of the week)
         * and `options.firstWeekContainsDate` (which is the day of January, which is always in
         * the first week of the week-numbering year)
         *
         * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
         *
         * @param date - The given date
         * @param options - An object with options
         *
         * @returns The week
         *
         * @example
         * // Which week of the local week numbering year is 2 January 2005 with default options?
         * const result = getWeek(new Date(2005, 0, 2))
         * //=> 2
         *
         * @example
         * // Which week of the local week numbering year is 2 January 2005,
         * // if Monday is the first day of the week,
         * // and the first week of the year always contains 4 January?
         * const result = getWeek(new Date(2005, 0, 2), {
         *   weekStartsOn: 1,
         *   firstWeekContainsDate: 4
         * })
         * //=> 53
         */
        function getWeek(date, options) {
          const _date = toDate(date, options?.in);
          const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);

          // Round the number of weeks to the nearest integer because the number of
          // milliseconds in a week is not constant (e.g. it's different in the week of
          // the daylight saving time clock shift).
          return Math.round(diff / millisecondsInWeek) + 1;
        }
        function addLeadingZeros(number, targetLength) {
          const sign = number < 0 ? "-" : "";
          const output = Math.abs(number).toString().padStart(targetLength, "0");
          return sign + output;
        }

        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* |                                |
         * |  d  | Day of month                   |  D  |                                |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  m  | Minute                         |  M  | Month                          |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  y  | Year (abs)                     |  Y  |                                |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         */

        const lightFormatters = {
          // Year
          y(date, token) {
            // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
            // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
            // |----------|-------|----|-------|-------|-------|
            // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
            // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
            // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
            // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
            // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
          },
          // Month
          M(date, token) {
            const month = date.getMonth();
            return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
          },
          // Day of the month
          d(date, token) {
            return addLeadingZeros(date.getDate(), token.length);
          },
          // AM or PM
          a(date, token) {
            const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
            switch (token) {
              case "a":
              case "aa":
                return dayPeriodEnumValue.toUpperCase();
              case "aaa":
                return dayPeriodEnumValue;
              case "aaaaa":
                return dayPeriodEnumValue[0];
              case "aaaa":
              default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
            }
          },
          // Hour [1-12]
          h(date, token) {
            return addLeadingZeros(date.getHours() % 12 || 12, token.length);
          },
          // Hour [0-23]
          H(date, token) {
            return addLeadingZeros(date.getHours(), token.length);
          },
          // Minute
          m(date, token) {
            return addLeadingZeros(date.getMinutes(), token.length);
          },
          // Second
          s(date, token) {
            return addLeadingZeros(date.getSeconds(), token.length);
          },
          // Fraction of second
          S(date, token) {
            const numberOfDigits = token.length;
            const milliseconds = date.getMilliseconds();
            const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
            return addLeadingZeros(fractionalSeconds, token.length);
          }
        };
        const dayPeriodEnum = {
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night"
        };

        /*
         * |     | Unit                           |     | Unit                           |
         * |-----|--------------------------------|-----|--------------------------------|
         * |  a  | AM, PM                         |  A* | Milliseconds in day            |
         * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
         * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
         * |  d  | Day of month                   |  D  | Day of year                    |
         * |  e  | Local day of week              |  E  | Day of week                    |
         * |  f  |                                |  F* | Day of week in month           |
         * |  g* | Modified Julian day            |  G  | Era                            |
         * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
         * |  i! | ISO day of week                |  I! | ISO week of year               |
         * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
         * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
         * |  l* | (deprecated)                   |  L  | Stand-alone month              |
         * |  m  | Minute                         |  M  | Month                          |
         * |  n  |                                |  N  |                                |
         * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
         * |  p! | Long localized time            |  P! | Long localized date            |
         * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
         * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
         * |  s  | Second                         |  S  | Fraction of second             |
         * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
         * |  u  | Extended year                  |  U* | Cyclic year                    |
         * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
         * |  w  | Local week of year             |  W* | Week of month                  |
         * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
         * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
         * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
         *
         * Letters marked by * are not implemented but reserved by Unicode standard.
         *
         * Letters marked by ! are non-standard, but implemented by date-fns:
         * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
         * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
         *   i.e. 7 for Sunday, 1 for Monday, etc.
         * - `I` is ISO week of year, as opposed to `w` which is local week of year.
         * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
         *   `R` is supposed to be used in conjunction with `I` and `i`
         *   for universal ISO week-numbering date, whereas
         *   `Y` is supposed to be used in conjunction with `w` and `e`
         *   for week-numbering date specific to the locale.
         * - `P` is long localized date format
         * - `p` is long localized time format
         */

        const formatters = {
          // Era
          G: function (date, token, localize) {
            const era = date.getFullYear() > 0 ? 1 : 0;
            switch (token) {
              // AD, BC
              case "G":
              case "GG":
              case "GGG":
                return localize.era(era, {
                  width: "abbreviated"
                });
              // A, B
              case "GGGGG":
                return localize.era(era, {
                  width: "narrow"
                });
              // Anno Domini, Before Christ
              case "GGGG":
              default:
                return localize.era(era, {
                  width: "wide"
                });
            }
          },
          // Year
          y: function (date, token, localize) {
            // Ordinal number
            if (token === "yo") {
              const signedYear = date.getFullYear();
              // Returns 1 for 1 BC (which is year 0 in JavaScript)
              const year = signedYear > 0 ? signedYear : 1 - signedYear;
              return localize.ordinalNumber(year, {
                unit: "year"
              });
            }
            return lightFormatters.y(date, token);
          },
          // Local week-numbering year
          Y: function (date, token, localize, options) {
            const signedWeekYear = getWeekYear(date, options);
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

            // Two digit year
            if (token === "YY") {
              const twoDigitYear = weekYear % 100;
              return addLeadingZeros(twoDigitYear, 2);
            }

            // Ordinal number
            if (token === "Yo") {
              return localize.ordinalNumber(weekYear, {
                unit: "year"
              });
            }

            // Padding
            return addLeadingZeros(weekYear, token.length);
          },
          // ISO week-numbering year
          R: function (date, token) {
            const isoWeekYear = getISOWeekYear(date);

            // Padding
            return addLeadingZeros(isoWeekYear, token.length);
          },
          // Extended year. This is a single number designating the year of this calendar system.
          // The main difference between `y` and `u` localizers are B.C. years:
          // | Year | `y` | `u` |
          // |------|-----|-----|
          // | AC 1 |   1 |   1 |
          // | BC 1 |   1 |   0 |
          // | BC 2 |   2 |  -1 |
          // Also `yy` always returns the last two digits of a year,
          // while `uu` pads single digit years to 2 characters and returns other years unchanged.
          u: function (date, token) {
            const year = date.getFullYear();
            return addLeadingZeros(year, token.length);
          },
          // Quarter
          Q: function (date, token, localize) {
            const quarter = Math.ceil((date.getMonth() + 1) / 3);
            switch (token) {
              // 1, 2, 3, 4
              case "Q":
                return String(quarter);
              // 01, 02, 03, 04
              case "QQ":
                return addLeadingZeros(quarter, 2);
              // 1st, 2nd, 3rd, 4th
              case "Qo":
                return localize.ordinalNumber(quarter, {
                  unit: "quarter"
                });
              // Q1, Q2, Q3, Q4
              case "QQQ":
                return localize.quarter(quarter, {
                  width: "abbreviated",
                  context: "formatting"
                });
              // 1, 2, 3, 4 (narrow quarter; could be not numerical)
              case "QQQQQ":
                return localize.quarter(quarter, {
                  width: "narrow",
                  context: "formatting"
                });
              // 1st quarter, 2nd quarter, ...
              case "QQQQ":
              default:
                return localize.quarter(quarter, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // Stand-alone quarter
          q: function (date, token, localize) {
            const quarter = Math.ceil((date.getMonth() + 1) / 3);
            switch (token) {
              // 1, 2, 3, 4
              case "q":
                return String(quarter);
              // 01, 02, 03, 04
              case "qq":
                return addLeadingZeros(quarter, 2);
              // 1st, 2nd, 3rd, 4th
              case "qo":
                return localize.ordinalNumber(quarter, {
                  unit: "quarter"
                });
              // Q1, Q2, Q3, Q4
              case "qqq":
                return localize.quarter(quarter, {
                  width: "abbreviated",
                  context: "standalone"
                });
              // 1, 2, 3, 4 (narrow quarter; could be not numerical)
              case "qqqqq":
                return localize.quarter(quarter, {
                  width: "narrow",
                  context: "standalone"
                });
              // 1st quarter, 2nd quarter, ...
              case "qqqq":
              default:
                return localize.quarter(quarter, {
                  width: "wide",
                  context: "standalone"
                });
            }
          },
          // Month
          M: function (date, token, localize) {
            const month = date.getMonth();
            switch (token) {
              case "M":
              case "MM":
                return lightFormatters.M(date, token);
              // 1st, 2nd, ..., 12th
              case "Mo":
                return localize.ordinalNumber(month + 1, {
                  unit: "month"
                });
              // Jan, Feb, ..., Dec
              case "MMM":
                return localize.month(month, {
                  width: "abbreviated",
                  context: "formatting"
                });
              // J, F, ..., D
              case "MMMMM":
                return localize.month(month, {
                  width: "narrow",
                  context: "formatting"
                });
              // January, February, ..., December
              case "MMMM":
              default:
                return localize.month(month, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // Stand-alone month
          L: function (date, token, localize) {
            const month = date.getMonth();
            switch (token) {
              // 1, 2, ..., 12
              case "L":
                return String(month + 1);
              // 01, 02, ..., 12
              case "LL":
                return addLeadingZeros(month + 1, 2);
              // 1st, 2nd, ..., 12th
              case "Lo":
                return localize.ordinalNumber(month + 1, {
                  unit: "month"
                });
              // Jan, Feb, ..., Dec
              case "LLL":
                return localize.month(month, {
                  width: "abbreviated",
                  context: "standalone"
                });
              // J, F, ..., D
              case "LLLLL":
                return localize.month(month, {
                  width: "narrow",
                  context: "standalone"
                });
              // January, February, ..., December
              case "LLLL":
              default:
                return localize.month(month, {
                  width: "wide",
                  context: "standalone"
                });
            }
          },
          // Local week of year
          w: function (date, token, localize, options) {
            const week = getWeek(date, options);
            if (token === "wo") {
              return localize.ordinalNumber(week, {
                unit: "week"
              });
            }
            return addLeadingZeros(week, token.length);
          },
          // ISO week of year
          I: function (date, token, localize) {
            const isoWeek = getISOWeek(date);
            if (token === "Io") {
              return localize.ordinalNumber(isoWeek, {
                unit: "week"
              });
            }
            return addLeadingZeros(isoWeek, token.length);
          },
          // Day of the month
          d: function (date, token, localize) {
            if (token === "do") {
              return localize.ordinalNumber(date.getDate(), {
                unit: "date"
              });
            }
            return lightFormatters.d(date, token);
          },
          // Day of year
          D: function (date, token, localize) {
            const dayOfYear = getDayOfYear(date);
            if (token === "Do") {
              return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
              });
            }
            return addLeadingZeros(dayOfYear, token.length);
          },
          // Day of week
          E: function (date, token, localize) {
            const dayOfWeek = date.getDay();
            switch (token) {
              // Tue
              case "E":
              case "EE":
              case "EEE":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting"
                });
              // T
              case "EEEEE":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting"
                });
              // Tu
              case "EEEEEE":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting"
                });
              // Tuesday
              case "EEEE":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // Local day of week
          e: function (date, token, localize, options) {
            const dayOfWeek = date.getDay();
            const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              // Numerical value (Nth day of week with current locale or weekStartsOn)
              case "e":
                return String(localDayOfWeek);
              // Padded numerical value
              case "ee":
                return addLeadingZeros(localDayOfWeek, 2);
              // 1st, 2nd, ..., 7th
              case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                  unit: "day"
                });
              case "eee":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting"
                });
              // T
              case "eeeee":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting"
                });
              // Tu
              case "eeeeee":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting"
                });
              // Tuesday
              case "eeee":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // Stand-alone local day of week
          c: function (date, token, localize, options) {
            const dayOfWeek = date.getDay();
            const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
            switch (token) {
              // Numerical value (same as in `e`)
              case "c":
                return String(localDayOfWeek);
              // Padded numerical value
              case "cc":
                return addLeadingZeros(localDayOfWeek, token.length);
              // 1st, 2nd, ..., 7th
              case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                  unit: "day"
                });
              case "ccc":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "standalone"
                });
              // T
              case "ccccc":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "standalone"
                });
              // Tu
              case "cccccc":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "standalone"
                });
              // Tuesday
              case "cccc":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "standalone"
                });
            }
          },
          // ISO day of week
          i: function (date, token, localize) {
            const dayOfWeek = date.getDay();
            const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
            switch (token) {
              // 2
              case "i":
                return String(isoDayOfWeek);
              // 02
              case "ii":
                return addLeadingZeros(isoDayOfWeek, token.length);
              // 2nd
              case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                  unit: "day"
                });
              // Tue
              case "iii":
                return localize.day(dayOfWeek, {
                  width: "abbreviated",
                  context: "formatting"
                });
              // T
              case "iiiii":
                return localize.day(dayOfWeek, {
                  width: "narrow",
                  context: "formatting"
                });
              // Tu
              case "iiiiii":
                return localize.day(dayOfWeek, {
                  width: "short",
                  context: "formatting"
                });
              // Tuesday
              case "iiii":
              default:
                return localize.day(dayOfWeek, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // AM or PM
          a: function (date, token, localize) {
            const hours = date.getHours();
            const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
            switch (token) {
              case "a":
              case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting"
                }).toLowerCase();
              case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting"
                });
              case "aaaa":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // AM, PM, midnight, noon
          b: function (date, token, localize) {
            const hours = date.getHours();
            let dayPeriodEnumValue;
            if (hours === 12) {
              dayPeriodEnumValue = dayPeriodEnum.noon;
            } else if (hours === 0) {
              dayPeriodEnumValue = dayPeriodEnum.midnight;
            } else {
              dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
            }
            switch (token) {
              case "b":
              case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting"
                }).toLowerCase();
              case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting"
                });
              case "bbbb":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // in the morning, in the afternoon, in the evening, at night
          B: function (date, token, localize) {
            const hours = date.getHours();
            let dayPeriodEnumValue;
            if (hours >= 17) {
              dayPeriodEnumValue = dayPeriodEnum.evening;
            } else if (hours >= 12) {
              dayPeriodEnumValue = dayPeriodEnum.afternoon;
            } else if (hours >= 4) {
              dayPeriodEnumValue = dayPeriodEnum.morning;
            } else {
              dayPeriodEnumValue = dayPeriodEnum.night;
            }
            switch (token) {
              case "B":
              case "BB":
              case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "abbreviated",
                  context: "formatting"
                });
              case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "narrow",
                  context: "formatting"
                });
              case "BBBB":
              default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                  width: "wide",
                  context: "formatting"
                });
            }
          },
          // Hour [1-12]
          h: function (date, token, localize) {
            if (token === "ho") {
              let hours = date.getHours() % 12;
              if (hours === 0) hours = 12;
              return localize.ordinalNumber(hours, {
                unit: "hour"
              });
            }
            return lightFormatters.h(date, token);
          },
          // Hour [0-23]
          H: function (date, token, localize) {
            if (token === "Ho") {
              return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
              });
            }
            return lightFormatters.H(date, token);
          },
          // Hour [0-11]
          K: function (date, token, localize) {
            const hours = date.getHours() % 12;
            if (token === "Ko") {
              return localize.ordinalNumber(hours, {
                unit: "hour"
              });
            }
            return addLeadingZeros(hours, token.length);
          },
          // Hour [1-24]
          k: function (date, token, localize) {
            let hours = date.getHours();
            if (hours === 0) hours = 24;
            if (token === "ko") {
              return localize.ordinalNumber(hours, {
                unit: "hour"
              });
            }
            return addLeadingZeros(hours, token.length);
          },
          // Minute
          m: function (date, token, localize) {
            if (token === "mo") {
              return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
              });
            }
            return lightFormatters.m(date, token);
          },
          // Second
          s: function (date, token, localize) {
            if (token === "so") {
              return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
              });
            }
            return lightFormatters.s(date, token);
          },
          // Fraction of second
          S: function (date, token) {
            return lightFormatters.S(date, token);
          },
          // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
          X: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();
            if (timezoneOffset === 0) {
              return "Z";
            }
            switch (token) {
              // Hours and optional minutes
              case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);

              // Hours, minutes and optional seconds without `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `XX`
              case "XXXX":
              case "XX":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);

              // Hours, minutes and optional seconds with `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `XXX`
              case "XXXXX":
              case "XXX": // Hours and minutes with `:` delimiter
              default:
                return formatTimezone(timezoneOffset, ":");
            }
          },
          // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
          x: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();
            switch (token) {
              // Hours and optional minutes
              case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);

              // Hours, minutes and optional seconds without `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `xx`
              case "xxxx":
              case "xx":
                // Hours and minutes without `:` delimiter
                return formatTimezone(timezoneOffset);

              // Hours, minutes and optional seconds with `:` delimiter
              // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
              // so this token always has the same output as `xxx`
              case "xxxxx":
              case "xxx": // Hours and minutes with `:` delimiter
              default:
                return formatTimezone(timezoneOffset, ":");
            }
          },
          // Timezone (GMT)
          O: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();
            switch (token) {
              // Short
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
              // Long
              case "OOOO":
              default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
            }
          },
          // Timezone (specific non-location)
          z: function (date, token, _localize) {
            const timezoneOffset = date.getTimezoneOffset();
            switch (token) {
              // Short
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
              // Long
              case "zzzz":
              default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
            }
          },
          // Seconds timestamp
          t: function (date, token, _localize) {
            const timestamp = Math.trunc(+date / 1000);
            return addLeadingZeros(timestamp, token.length);
          },
          // Milliseconds timestamp
          T: function (date, token, _localize) {
            return addLeadingZeros(+date, token.length);
          }
        };
        function formatTimezoneShort(offset, delimiter = "") {
          const sign = offset > 0 ? "-" : "+";
          const absOffset = Math.abs(offset);
          const hours = Math.trunc(absOffset / 60);
          const minutes = absOffset % 60;
          if (minutes === 0) {
            return sign + String(hours);
          }
          return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
        }
        function formatTimezoneWithOptionalMinutes(offset, delimiter) {
          if (offset % 60 === 0) {
            const sign = offset > 0 ? "-" : "+";
            return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
          }
          return formatTimezone(offset, delimiter);
        }
        function formatTimezone(offset, delimiter = "") {
          const sign = offset > 0 ? "-" : "+";
          const absOffset = Math.abs(offset);
          const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
          const minutes = addLeadingZeros(absOffset % 60, 2);
          return sign + hours + delimiter + minutes;
        }
        const dateLongFormatter = (pattern, formatLong) => {
          switch (pattern) {
            case "P":
              return formatLong.date({
                width: "short"
              });
            case "PP":
              return formatLong.date({
                width: "medium"
              });
            case "PPP":
              return formatLong.date({
                width: "long"
              });
            case "PPPP":
            default:
              return formatLong.date({
                width: "full"
              });
          }
        };
        const timeLongFormatter = (pattern, formatLong) => {
          switch (pattern) {
            case "p":
              return formatLong.time({
                width: "short"
              });
            case "pp":
              return formatLong.time({
                width: "medium"
              });
            case "ppp":
              return formatLong.time({
                width: "long"
              });
            case "pppp":
            default:
              return formatLong.time({
                width: "full"
              });
          }
        };
        const dateTimeLongFormatter = (pattern, formatLong) => {
          const matchResult = pattern.match(/(P+)(p+)?/) || [];
          const datePattern = matchResult[1];
          const timePattern = matchResult[2];
          if (!timePattern) {
            return dateLongFormatter(pattern, formatLong);
          }
          let dateTimeFormat;
          switch (datePattern) {
            case "P":
              dateTimeFormat = formatLong.dateTime({
                width: "short"
              });
              break;
            case "PP":
              dateTimeFormat = formatLong.dateTime({
                width: "medium"
              });
              break;
            case "PPP":
              dateTimeFormat = formatLong.dateTime({
                width: "long"
              });
              break;
            case "PPPP":
            default:
              dateTimeFormat = formatLong.dateTime({
                width: "full"
              });
              break;
          }
          return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
        };
        const longFormatters = {
          p: timeLongFormatter,
          P: dateTimeLongFormatter
        };
        const dayOfYearTokenRE = /^D+$/;
        const weekYearTokenRE = /^Y+$/;
        const throwTokens = ["D", "DD", "YY", "YYYY"];
        function isProtectedDayOfYearToken(token) {
          return dayOfYearTokenRE.test(token);
        }
        function isProtectedWeekYearToken(token) {
          return weekYearTokenRE.test(token);
        }
        function warnOrThrowProtectedError(token, format, input) {
          const _message = message(token, format, input);
          console.warn(_message);
          if (throwTokens.includes(token)) throw new RangeError(_message);
        }
        function message(token, format, input) {
          const subject = token[0] === "Y" ? "years" : "days of the month";
          return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
        }

        // This RegExp consists of three parts separated by `|`:
        // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
        //   (one of the certain letters followed by `o`)
        // - (\w)\1* matches any sequences of the same letter
        // - '' matches two quote characters in a row
        // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
        //   except a single quote symbol, which ends the sequence.
        //   Two quote characters do not end the sequence.
        //   If there is no matching single quote
        //   then the sequence will continue until the end of the string.
        // - . matches any single character unmatched by previous parts of the RegExps
        const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

        // This RegExp catches symbols escaped by quotes, and also
        // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
        const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
        const escapedStringRegExp = /^'([^]*?)'?$/;
        const doubleQuoteRegExp = /''/g;
        const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

        /**
         * The {@link format} function options.
         */

        /**
         * @name format
         * @alias formatDate
         * @category Common Helpers
         * @summary Format the date.
         *
         * @description
         * Return the formatted date string in the given format. The result may vary by locale.
         *
         * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
         * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * The characters wrapped between two single quotes characters (') are escaped.
         * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
         * (see the last example)
         *
         * Format of the string is based on Unicode Technical Standard #35:
         * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
         * with a few additions (see note 7 below the table).
         *
         * Accepted patterns:
         * | Unit                            | Pattern | Result examples                   | Notes |
         * |---------------------------------|---------|-----------------------------------|-------|
         * | Era                             | G..GGG  | AD, BC                            |       |
         * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
         * |                                 | GGGGG   | A, B                              |       |
         * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
         * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
         * |                                 | yy      | 44, 01, 00, 17                    | 5     |
         * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
         * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
         * |                                 | yyyyy   | ...                               | 3,5   |
         * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
         * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
         * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
         * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
         * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
         * |                                 | YYYYY   | ...                               | 3,5   |
         * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
         * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
         * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
         * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
         * |                                 | RRRRR   | ...                               | 3,5,7 |
         * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
         * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
         * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
         * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
         * |                                 | uuuuu   | ...                               | 3,5   |
         * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
         * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
         * |                                 | QQ      | 01, 02, 03, 04                    |       |
         * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
         * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
         * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
         * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
         * |                                 | qq      | 01, 02, 03, 04                    |       |
         * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
         * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
         * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
         * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
         * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
         * |                                 | MM      | 01, 02, ..., 12                   |       |
         * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
         * |                                 | MMMM    | January, February, ..., December  | 2     |
         * |                                 | MMMMM   | J, F, ..., D                      |       |
         * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
         * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
         * |                                 | LL      | 01, 02, ..., 12                   |       |
         * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
         * |                                 | LLLL    | January, February, ..., December  | 2     |
         * |                                 | LLLLL   | J, F, ..., D                      |       |
         * | Local week of year              | w       | 1, 2, ..., 53                     |       |
         * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
         * |                                 | ww      | 01, 02, ..., 53                   |       |
         * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
         * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
         * |                                 | II      | 01, 02, ..., 53                   | 7     |
         * | Day of month                    | d       | 1, 2, ..., 31                     |       |
         * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
         * |                                 | dd      | 01, 02, ..., 31                   |       |
         * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
         * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
         * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
         * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
         * |                                 | DDDD    | ...                               | 3     |
         * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
         * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
         * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
         * |                                 | ii      | 01, 02, ..., 07                   | 7     |
         * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
         * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
         * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
         * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
         * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
         * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
         * |                                 | ee      | 02, 03, ..., 01                   |       |
         * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
         * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
         * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
         * |                                 | cc      | 02, 03, ..., 01                   |       |
         * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
         * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
         * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
         * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
         * | AM, PM                          | a..aa   | AM, PM                            |       |
         * |                                 | aaa     | am, pm                            |       |
         * |                                 | aaaa    | a.m., p.m.                        | 2     |
         * |                                 | aaaaa   | a, p                              |       |
         * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
         * |                                 | bbb     | am, pm, noon, midnight            |       |
         * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
         * |                                 | bbbbb   | a, p, n, mi                       |       |
         * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
         * |                                 | BBBB    | at night, in the morning, ...     | 2     |
         * |                                 | BBBBB   | at night, in the morning, ...     |       |
         * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
         * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
         * |                                 | hh      | 01, 02, ..., 11, 12               |       |
         * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
         * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
         * |                                 | HH      | 00, 01, 02, ..., 23               |       |
         * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
         * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
         * |                                 | KK      | 01, 02, ..., 11, 00               |       |
         * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
         * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
         * |                                 | kk      | 24, 01, 02, ..., 23               |       |
         * | Minute                          | m       | 0, 1, ..., 59                     |       |
         * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
         * |                                 | mm      | 00, 01, ..., 59                   |       |
         * | Second                          | s       | 0, 1, ..., 59                     |       |
         * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
         * |                                 | ss      | 00, 01, ..., 59                   |       |
         * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
         * |                                 | SS      | 00, 01, ..., 99                   |       |
         * |                                 | SSS     | 000, 001, ..., 999                |       |
         * |                                 | SSSS    | ...                               | 3     |
         * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
         * |                                 | XX      | -0800, +0530, Z                   |       |
         * |                                 | XXX     | -08:00, +05:30, Z                 |       |
         * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
         * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
         * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
         * |                                 | xx      | -0800, +0530, +0000               |       |
         * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
         * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
         * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
         * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
         * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
         * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
         * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
         * | Seconds timestamp               | t       | 512969520                         | 7     |
         * |                                 | tt      | ...                               | 3,7   |
         * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
         * |                                 | TT      | ...                               | 3,7   |
         * | Long localized date             | P       | 04/29/1453                        | 7     |
         * |                                 | PP      | Apr 29, 1453                      | 7     |
         * |                                 | PPP     | April 29th, 1453                  | 7     |
         * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
         * | Long localized time             | p       | 12:00 AM                          | 7     |
         * |                                 | pp      | 12:00:00 AM                       | 7     |
         * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
         * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
         * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
         * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
         * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
         * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
         * Notes:
         * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
         *    are the same as "stand-alone" units, but are different in some languages.
         *    "Formatting" units are declined according to the rules of the language
         *    in the context of a date. "Stand-alone" units are always nominative singular:
         *
         *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
         *
         *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
         *
         * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
         *    the single quote characters (see below).
         *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
         *    the output will be the same as default pattern for this unit, usually
         *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
         *    are marked with "2" in the last column of the table.
         *
         *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
         *
         *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
         *
         * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
         *    The output will be padded with zeros to match the length of the pattern.
         *
         *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
         *
         * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
         *    These tokens represent the shortest form of the quarter.
         *
         * 5. The main difference between `y` and `u` patterns are B.C. years:
         *
         *    | Year | `y` | `u` |
         *    |------|-----|-----|
         *    | AC 1 |   1 |   1 |
         *    | BC 1 |   1 |   0 |
         *    | BC 2 |   2 |  -1 |
         *
         *    Also `yy` always returns the last two digits of a year,
         *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
         *
         *    | Year | `yy` | `uu` |
         *    |------|------|------|
         *    | 1    |   01 |   01 |
         *    | 14   |   14 |   14 |
         *    | 376  |   76 |  376 |
         *    | 1453 |   53 | 1453 |
         *
         *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
         *    except local week-numbering years are dependent on `options.weekStartsOn`
         *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
         *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
         *
         * 6. Specific non-location timezones are currently unavailable in `date-fns`,
         *    so right now these tokens fall back to GMT timezones.
         *
         * 7. These patterns are not in the Unicode Technical Standard #35:
         *    - `i`: ISO day of week
         *    - `I`: ISO week of year
         *    - `R`: ISO week-numbering year
         *    - `t`: seconds timestamp
         *    - `T`: milliseconds timestamp
         *    - `o`: ordinal number modifier
         *    - `P`: long localized date
         *    - `p`: long localized time
         *
         * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
         *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
         *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         *
         * @param date - The original date
         * @param format - The string of tokens
         * @param options - An object with options
         *
         * @returns The formatted date string
         *
         * @throws `date` must not be Invalid Date
         * @throws `options.locale` must contain `localize` property
         * @throws `options.locale` must contain `formatLong` property
         * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
         * @throws format string contains an unescaped latin alphabet character
         *
         * @example
         * // Represent 11 February 2014 in middle-endian format:
         * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
         * //=> '02/11/2014'
         *
         * @example
         * // Represent 2 July 2014 in Esperanto:
         * import { eoLocale } from 'date-fns/locale/eo'
         * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
         *   locale: eoLocale
         * })
         * //=> '2-a de julio 2014'
         *
         * @example
         * // Escape string by single quote characters:
         * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
         * //=> "3 o'clock"
         */
        function format(date, formatStr, options) {
          const defaultOptions = getDefaultOptions();
          const locale = options?.locale ?? defaultOptions.locale ?? enUS;
          const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
          const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
          const originalDate = toDate(date, options?.in);
          if (!isValid(originalDate)) {
            throw new RangeError("Invalid time value");
          }
          let parts = formatStr.match(longFormattingTokensRegExp).map(substring => {
            const firstCharacter = substring[0];
            if (firstCharacter === "p" || firstCharacter === "P") {
              const longFormatter = longFormatters[firstCharacter];
              return longFormatter(substring, locale.formatLong);
            }
            return substring;
          }).join("").match(formattingTokensRegExp).map(substring => {
            // Replace two single quote characters with one single quote character
            if (substring === "''") {
              return {
                isToken: false,
                value: "'"
              };
            }
            const firstCharacter = substring[0];
            if (firstCharacter === "'") {
              return {
                isToken: false,
                value: cleanEscapedString(substring)
              };
            }
            if (formatters[firstCharacter]) {
              return {
                isToken: true,
                value: substring
              };
            }
            if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
              throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
            }
            return {
              isToken: false,
              value: substring
            };
          });

          // invoke localize preprocessor (only for french locales at the moment)
          if (locale.localize.preprocessor) {
            parts = locale.localize.preprocessor(originalDate, parts);
          }
          const formatterOptions = {
            firstWeekContainsDate,
            weekStartsOn,
            locale
          };
          return parts.map(part => {
            if (!part.isToken) return part.value;
            const token = part.value;
            if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
              warnOrThrowProtectedError(token, formatStr, String(date));
            }
            const formatter = formatters[token[0]];
            return formatter(originalDate, token, locale.localize, formatterOptions);
          }).join("");
        }
        function cleanEscapedString(input) {
          const matched = input.match(escapedStringRegExp);
          if (!matched) {
            return input;
          }
          return matched[1].replace(doubleQuoteRegExp, "'");
        }

        /**
         * The {@link getDay} function options.
         */

        /**
         * @name getDay
         * @category Weekday Helpers
         * @summary Get the day of the week of the given date.
         *
         * @description
         * Get the day of the week of the given date.
         *
         * @param date - The given date
         * @param options - The options
         *
         * @returns The day of week, 0 represents Sunday
         *
         * @example
         * // Which day of the week is 29 February 2012?
         * const result = getDay(new Date(2012, 1, 29))
         * //=> 3
         */
        function getDay(date, options) {
          return toDate(date, options?.in).getDay();
        }

        /**
         * The {@link isWithinInterval} function options.
         */

        /**
         * @name isWithinInterval
         * @category Interval Helpers
         * @summary Is the given date within the interval?
         *
         * @description
         * Is the given date within the interval? (Including start and end.)
         *
         * @param date - The date to check
         * @param interval - The interval to check
         * @param options - An object with options
         *
         * @returns The date is within the interval
         *
         * @example
         * // For the date within the interval:
         * isWithinInterval(new Date(2014, 0, 3), {
         *   start: new Date(2014, 0, 1),
         *   end: new Date(2014, 0, 7)
         * })
         * // => true
         *
         * @example
         * // For the date outside of the interval:
         * isWithinInterval(new Date(2014, 0, 10), {
         *   start: new Date(2014, 0, 1),
         *   end: new Date(2014, 0, 7)
         * })
         * // => false
         *
         * @example
         * // For date equal to the interval start:
         * isWithinInterval(date, { start, end: date })
         * // => true
         *
         * @example
         * // For date equal to the interval end:
         * isWithinInterval(date, { start: date, end })
         * // => true
         */
        function isWithinInterval(date, interval, options) {
          const time = +toDate(date, options?.in);
          const [startTime, endTime] = [+toDate(interval.start, options?.in), +toDate(interval.end, options?.in)].sort((a, b) => a - b);
          return time >= startTime && time <= endTime;
        }

        /**
         * The {@link parseISO} function options.
         */

        /**
         * @name parseISO
         * @category Common Helpers
         * @summary Parse ISO string
         *
         * @description
         * Parse the given string in ISO 8601 format and return an instance of Date.
         *
         * Function accepts complete ISO 8601 formats as well as partial implementations.
         * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
         *
         * If the argument isn't a string, the function cannot parse the string or
         * the values are invalid, it returns Invalid Date.
         *
         * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
         * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
         *
         * @param argument - The value to convert
         * @param options - An object with options
         *
         * @returns The parsed date in the local time zone
         *
         * @example
         * // Convert string '2014-02-11T11:30:30' to date:
         * const result = parseISO('2014-02-11T11:30:30')
         * //=> Tue Feb 11 2014 11:30:30
         *
         * @example
         * // Convert string '+02014101' to date,
         * // if the additional number of digits in the extended year format is 1:
         * const result = parseISO('+02014101', { additionalDigits: 1 })
         * //=> Fri Apr 11 2014 00:00:00
         */
        function parseISO(argument, options) {
          const invalidDate = () => constructFrom(options?.in, NaN);
          const additionalDigits = 2;
          const dateStrings = splitDateString(argument);
          let date;
          if (dateStrings.date) {
            const parseYearResult = parseYear(dateStrings.date, additionalDigits);
            date = parseDate(parseYearResult.restDateString, parseYearResult.year);
          }
          if (!date || isNaN(+date)) return invalidDate();
          const timestamp = +date;
          let time = 0;
          let offset;
          if (dateStrings.time) {
            time = parseTime(dateStrings.time);
            if (isNaN(time)) return invalidDate();
          }
          if (dateStrings.timezone) {
            offset = parseTimezone(dateStrings.timezone);
            if (isNaN(offset)) return invalidDate();
          } else {
            const tmpDate = new Date(timestamp + time);
            const result = toDate(0, options?.in);
            result.setFullYear(tmpDate.getUTCFullYear(), tmpDate.getUTCMonth(), tmpDate.getUTCDate());
            result.setHours(tmpDate.getUTCHours(), tmpDate.getUTCMinutes(), tmpDate.getUTCSeconds(), tmpDate.getUTCMilliseconds());
            return result;
          }
          return toDate(timestamp + time + offset, options?.in);
        }
        const patterns = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/
        };
        const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
        const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
        const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
        function splitDateString(dateString) {
          const dateStrings = {};
          const array = dateString.split(patterns.dateTimeDelimiter);
          let timeString;

          // The regex match should only return at maximum two array elements.
          // [date], [time], or [date, time].
          if (array.length > 2) {
            return dateStrings;
          }
          if (/:/.test(array[0])) {
            timeString = array[0];
          } else {
            dateStrings.date = array[0];
            timeString = array[1];
            if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
              dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
              timeString = dateString.substr(dateStrings.date.length, dateString.length);
            }
          }
          if (timeString) {
            const token = patterns.timezone.exec(timeString);
            if (token) {
              dateStrings.time = timeString.replace(token[1], "");
              dateStrings.timezone = token[1];
            } else {
              dateStrings.time = timeString;
            }
          }
          return dateStrings;
        }
        function parseYear(dateString, additionalDigits) {
          const regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
          const captures = dateString.match(regex);
          // Invalid ISO-formatted year
          if (!captures) return {
            year: NaN,
            restDateString: ""
          };
          const year = captures[1] ? parseInt(captures[1]) : null;
          const century = captures[2] ? parseInt(captures[2]) : null;

          // either year or century is null, not both
          return {
            year: century === null ? year : century * 100,
            restDateString: dateString.slice((captures[1] || captures[2]).length)
          };
        }
        function parseDate(dateString, year) {
          // Invalid ISO-formatted year
          if (year === null) return new Date(NaN);
          const captures = dateString.match(dateRegex);
          // Invalid ISO-formatted string
          if (!captures) return new Date(NaN);
          const isWeekDate = !!captures[4];
          const dayOfYear = parseDateUnit(captures[1]);
          const month = parseDateUnit(captures[2]) - 1;
          const day = parseDateUnit(captures[3]);
          const week = parseDateUnit(captures[4]);
          const dayOfWeek = parseDateUnit(captures[5]) - 1;
          if (isWeekDate) {
            if (!validateWeekDate(year, week, dayOfWeek)) {
              return new Date(NaN);
            }
            return dayOfISOWeekYear(year, week, dayOfWeek);
          } else {
            const date = new Date(0);
            if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
              return new Date(NaN);
            }
            date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
            return date;
          }
        }
        function parseDateUnit(value) {
          return value ? parseInt(value) : 1;
        }
        function parseTime(timeString) {
          const captures = timeString.match(timeRegex);
          if (!captures) return NaN; // Invalid ISO-formatted time

          const hours = parseTimeUnit(captures[1]);
          const minutes = parseTimeUnit(captures[2]);
          const seconds = parseTimeUnit(captures[3]);
          if (!validateTime(hours, minutes, seconds)) {
            return NaN;
          }
          return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1000;
        }
        function parseTimeUnit(value) {
          return value && parseFloat(value.replace(",", ".")) || 0;
        }
        function parseTimezone(timezoneString) {
          if (timezoneString === "Z") return 0;
          const captures = timezoneString.match(timezoneRegex);
          if (!captures) return 0;
          const sign = captures[1] === "+" ? -1 : 1;
          const hours = parseInt(captures[2]);
          const minutes = captures[3] && parseInt(captures[3]) || 0;
          if (!validateTimezone(hours, minutes)) {
            return NaN;
          }
          return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
        }
        function dayOfISOWeekYear(isoWeekYear, week, day) {
          const date = new Date(0);
          date.setUTCFullYear(isoWeekYear, 0, 4);
          const fourthOfJanuaryDay = date.getUTCDay() || 7;
          const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
          date.setUTCDate(date.getUTCDate() + diff);
          return date;
        }

        // Validation functions

        // February is null to handle the leap year (using ||)
        const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function isLeapYearIndex(year) {
          return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
        }
        function validateDate(year, month, date) {
          return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
        }
        function validateDayOfYearDate(year, dayOfYear) {
          return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
        }
        function validateWeekDate(_year, week, day) {
          return week >= 1 && week <= 53 && day >= 0 && day <= 6;
        }
        function validateTime(hours, minutes, seconds) {
          if (hours === 24) {
            return minutes === 0 && seconds === 0;
          }
          return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
        }
        function validateTimezone(_hours, minutes) {
          return minutes >= 0 && minutes <= 59;
        }
        function transformNaiveFirstDayOfWeekToDateFns(firstDayOfWeek) {
          return (firstDayOfWeek + 1) % 7;
        }
        function useLoadingStyleClass(props, themeRef) {
          const loadingClassRef = ref('');
          const adapter = useSsrAdapter();
          const NConfigProvider = inject(configProviderInjectionKey, null);
          const styleMountTarget = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.styleMountTarget;
          onMounted(() => {
            watchEffect(() => {
              if (!props.loading) {
                return;
              }
              const {
                self: {
                  loadingColorStart,
                  loadingColorEnd
                }
              } = themeRef.value;
              const loadingColorHash = murmur2(loadingColorStart) + murmur2(loadingColorEnd);
              const className = `heatmap-loading-${loadingColorHash}`;
              const animationName = `heatmap-loading-animation-${loadingColorHash}`;
              loadingClassRef.value = className;
              const cnode = c([c(`.${className}`, `
          animation: 2s ${animationName} infinite cubic-bezier(0.36, 0, 0.64, 1);
        `), c(`@keyframes ${animationName}`, `
          0% {
            background: ${loadingColorStart};
          }
          40% {
            background: ${loadingColorEnd};
          }
          80% {
            background: ${loadingColorStart};
          }
          100% {
            background: ${loadingColorStart};
          }
        `)]);
              // We don't unmount it since we didn't know its mount count
              cnode.mount({
                id: loadingColorHash,
                ssr: adapter,
                parent: styleMountTarget
              });
            });
          });
          return loadingClassRef;
        }
        const HeatmapColorIndicator = defineComponent({
          name: 'HeatmapColorIndicator',
          slots: Object,
          props: {
            colors: {
              type: Array,
              required: true
            },
            clsPrefix: {
              type: String,
              required: true
            }
          },
          setup(props, {
            slots
          }) {
            return () => {
              var _a, _b;
              const {
                colors,
                clsPrefix
              } = props;
              return h("div", {
                class: `${clsPrefix}-heatmap-color-indicator`
              }, h("span", {
                class: `${clsPrefix}-heatmap-color-indicator__label`
              }, (_a = slots['leading-text']) === null || _a === void 0 ? void 0 : _a.call(slots)), h("div", {
                class: `${clsPrefix}-heatmap-color-indicator__cells`
              }, colors.map((color, index) => h("div", {
                key: index,
                class: `${clsPrefix}-heatmap-color-indicator__cell`,
                style: {
                  backgroundColor: color
                }
              }))), h("span", {
                class: `${clsPrefix}-heatmap-color-indicator__label`
              }, (_b = slots['trailing-text']) === null || _b === void 0 ? void 0 : _b.call(slots)));
            };
          }
        });
        const Rect = defineComponent({
          name: 'HeatmapRect',
          slots: Object,
          props: {
            mergedClsPrefix: {
              type: String,
              required: true
            },
            data: {
              type: Object,
              required: true
            },
            color: {
              type: String,
              required: true
            },
            style: Object,
            loading: Boolean,
            loadingClass: String,
            tooltip: {
              type: [Boolean, Object],
              default: true
            }
          },
          setup(props) {
            const cssVarsRef = computed(() => ({
              '--n-rect-color': props.color
            }));
            const tooltipPropsRef = computed(() => {
              return typeof props.tooltip === 'object' ? props.tooltip : {};
            });
            const defaultTooltipContentRef = computed(() => {
              const date = new Date(props.data.timestamp).toLocaleDateString();
              return props.data.value !== null ? `${date} ${props.data.value}` : date;
            });
            return {
              cssVars: cssVarsRef,
              tooltipProps: tooltipPropsRef,
              defaultTooltipContent: defaultTooltipContentRef
            };
          },
          render() {
            const {
              mergedClsPrefix,
              style,
              cssVars,
              tooltip,
              tooltipProps,
              defaultTooltipContent,
              loading,
              data
            } = this;
            const triggerNode = h("div", {
              class: [`${mergedClsPrefix}-heatmap-rect`, loading && `${mergedClsPrefix}-heatmap-rect--loading`, loading && this.loadingClass],
              style: [cssVars, style]
            });
            return tooltip === false || loading ? triggerNode : h(__unplugin_components_3, Object.assign({
              trigger: "hover"
            }, tooltipProps), {
              default: () => resolveSlotWithTypedProps(this.$slots.tooltip, data, () => [h("div", null, defaultTooltipContent)]),
              trigger: () => triggerNode
            });
          }
        });

        // vars:
        // --n-font-size
        // --n-font-weight
        // --n-text-color
        // --n-border-radius
        // --n-x-gap
        // --n-y-gap
        // --n-rect-size
        // --n-rect-color (for individual rect background color)
        // --n-bezier
        const style = c([cB('heatmap', `
 display: flex;
 flex-direction: column;
 max-width: fit-content;
 font-size: var(--n-font-size);
 `, [cE('content', `
 display: block;
 `), cE('calendar-table', `
 border-collapse: separate;
 border-spacing: var(--n-y-gap) var(--n-x-gap);
 font-size: var(--n-font-size);
 `), cE('week-header-cell', `
 width: 27px;
 padding: 0;
 border: none;
 font-size: var(--n-font-size);
 `), cE('month-label-cell', `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 text-align: left;
 height: 15px;
 line-height: 15px;
 font-weight: var(--n-font-weight);
 padding: 0 2px 8px;
 vertical-align: bottom;
 transition: color .3s var(--n-bezier);
 `), cE('week-label-cell', `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 text-align: right;
 width: 27px;
 height: 11px;
 line-height: 11px;
 padding: 0 4px 0 0;
 border: none;
 vertical-align: middle;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 transition: color .3s var(--n-bezier);
 `), cE('day-cell', `
 width: var(--n-rect-size);
 height: var(--n-rect-size);
 padding: 0;
 border: none;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `), cE('empty-cell', `
 width: var(--n-rect-size);
 height: var(--n-rect-size);
 border-radius: var(--n-border-radius);
 `), cE('footer', `
 display: flex;
 justify-content: space-between;
 margin-left: 17px;
 align-items: center;
 margin-top: 8px;
 &:has(> :only-child) {
 justify-content: flex-end;
 }
 `), cE('indicator', `
 display: flex;
 align-items: center;
 justify-content: flex-end;
 `)]), cB('heatmap-rect', `
 width: var(--n-rect-size);
 height: var(--n-rect-size);
 border-radius: var(--n-border-radius);
 background-color: var(--n-rect-color);
 transition: background-color .3s var(--n-bezier);
 `, [cM('loading', `
 cursor: default;
 background: var(--n-loading-color-start);
 `)]), cB('heatmap-color-indicator', `
 display: flex;
 align-items: center;
 justify-content: flex-end;
 gap: 4px;
 font-size: var(--n-font-size);
 `, [cE('cells', `
 display: flex;
 gap: var(--n-x-gap);
 `), cE('cell', `
 width: var(--n-rect-size);
 height: var(--n-rect-size);
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), cE('label', `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 `)])]);
        const heatmapColorThemes = {
          green: ['#c6e48b', '#7bc96f', '#239a3b', '#196127'],
          blue: ['#c0e7ff', '#73b3ff', '#0969da', '#0550ae'],
          orange: ['#fed7aa', '#fb923c', '#ea580c', '#c2410c'],
          purple: ['#e9d5ff', '#c084fc', '#9333ea', '#7c3aed'],
          red: ['#fecaca', '#f87171', '#dc2626', '#b91c1c']
        };

        /** get color by value/maxValue */
        function calcColorByValue(colors, value, maxValue) {
          if (maxValue === 0 || value === null || value === undefined || value <= 0) {
            return colors[0];
          }
          const ratio = Math.min(value / maxValue, 1);
          const maxLevel = colors.length - 1;
          const level = Math.min(Math.ceil(ratio * maxLevel), maxLevel);
          return colors[level];
        }
        /**
         * fill gaps for the given data
         *
         * fill gaps `[firstDate,lastDate]` with value `0`
         *
         * fill `[firstCalendarDate,firstDate]` and `[lastDate,lastCalendarDate]` with value `null` by default
         *
         * fill `[firstCalendarDate,firstDate]` with value `0` when `fillCalendarLeading` is `true`
         */
        function completeDataGaps(data, firstDayOfWeek, fillCalendarLeading) {
          const sortedData = [...data].sort((a, b) => a.timestamp - b.timestamp);
          const firstDate = sortedData[0].timestamp;
          const lastDate = sortedData[sortedData.length - 1].timestamp;
          const firstCalendarDate = startOfWeek(firstDate, {
            weekStartsOn: firstDayOfWeek
          });
          const lastCalendarEndDate = endOfWeek(lastDate, {
            weekStartsOn: firstDayOfWeek
          });
          const dataMap = new Map(sortedData.map(d => [startOfDay(d.timestamp).getTime(), d]));
          const allCalendarDates = eachDayOfInterval({
            start: firstCalendarDate,
            end: lastCalendarEndDate
          });
          const startDate = fillCalendarLeading ? firstCalendarDate : firstDate;
          return allCalendarDates.map(date => {
            const key = startOfDay(date).getTime();
            const dateValue = dataMap.get(key);
            if (dateValue) {
              return dateValue;
            }
            const value = isWithinInterval(date, {
              start: startDate,
              end: lastDate
            }) ? 0 : null;
            return {
              timestamp: date.getTime(),
              value
            };
          });
        }
        /**
         * Create a DayRect object with position information
         */
        function createDayRect(item, calendarStartDate, weekStartOn, colors, maxValue) {
          const daysFromGridStart = differenceInCalendarDays(item.timestamp, calendarStartDate);
          const colIndex = Math.floor(daysFromGridStart / 7);
          const dayOfWeek = getDay(item.timestamp);
          const rowIndex = (dayOfWeek - weekStartOn + 7) % 7;
          return {
            timestamp: item.timestamp,
            value: item.value,
            color: calcColorByValue(colors, item.value, maxValue),
            dayOfWeek,
            rowIndex,
            colIndex
          };
        }
        /**
         * Create a sparse matrix from items with position information
         */
        function createSparseMatrix(rows, items, getRowIndex, getColIndex) {
          const groupedByRow = groupBy(items, getRowIndex);
          return Array.from({
            length: rows
          }, (_, rowIndex) => {
            const rowData = groupedByRow[rowIndex] || [];
            const row = [];
            rowData.forEach(item => {
              row[getColIndex(item)] = item;
            });
            return row;
          });
        }
        /**
         * This creates a 7x53 matrix (typical year layout) filled with loading cells
         */
        function createLoadingMatrix(firstDayOfWeek) {
          const rows = 7;
          const cols = 53;
          const currentTimestamp = Date.now();
          return Array.from({
            length: rows
          }, (_, row) => Array.from({
            length: cols
          }, (_, col) => ({
            timestamp: currentTimestamp,
            value: 0,
            color: '#000000',
            dayOfWeek: (firstDayOfWeek + row) % 7,
            rowIndex: row,
            colIndex: col
          })));
        }
        const heatmapProps = Object.assign(Object.assign({}, useTheme.props), {
          activeColors: Array,
          colorTheme: String,
          data: Array,
          loadingData: Object,
          fillCalendarLeading: Boolean,
          firstDayOfWeek: {
            type: Number,
            default: 0
          },
          loading: Boolean,
          minimumColor: String,
          showColorIndicator: {
            type: Boolean,
            default: true
          },
          showWeekLabels: {
            type: Boolean,
            default: true
          },
          showMonthLabels: {
            type: Boolean,
            default: true
          },
          size: {
            type: String,
            default: 'medium'
          },
          tooltip: {
            type: [Boolean, Object],
            default: false
          },
          xGap: [Number, String],
          yGap: [Number, String]
        });
        const __unplugin_components_2 = defineComponent({
          name: 'Heatmap',
          slots: Object,
          props: heatmapProps,
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedRtlRef,
              inlineThemeDisabled
            } = useConfig(props);
            const {
              localeRef,
              dateLocaleRef
            } = useLocale('Heatmap');
            const themeRef = useTheme('Heatmap', '-heatmap', style, heatmapLight, props, mergedClsPrefixRef);
            const rtlEnabledRef = useRtl('Heatmap', mergedRtlRef, mergedClsPrefixRef);
            const cssVarsRef = computed(() => {
              const {
                xGap,
                yGap,
                size
              } = props;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  fontWeight,
                  textColor,
                  borderColor,
                  loadingColorStart,
                  [createKey('rectSize', size)]: rectSize,
                  [createKey('borderRadius', size)]: sizeBorderRadius,
                  [createKey('xGap', size)]: defaultXGap,
                  [createKey('yGap', size)]: defaultYGap,
                  [createKey('fontSize', size)]: fontSize
                }
              } = themeRef.value;
              const cssVars = {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-font-size': fontSize,
                '--n-font-weight': fontWeight,
                '--n-text-color': textColor,
                '--n-border-radius': sizeBorderRadius,
                '--n-border-color': borderColor,
                '--n-loading-color-start': loadingColorStart,
                '--n-rect-size': rectSize,
                '--n-x-gap': xGap !== undefined ? typeof xGap === 'number' ? pxfy(xGap) : xGap : defaultXGap,
                '--n-y-gap': yGap !== undefined ? typeof yGap === 'number' ? pxfy(yGap) : yGap : defaultYGap
              };
              return cssVars;
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('heatmap', computed(() => {
              const {
                size
              } = props;
              return size[0];
            }), cssVarsRef, props) : undefined;
            const mergedColorsRef = computed(() => {
              const {
                mininumColor: builtInMinimumColor,
                activeColors: builtInActiveColors
              } = themeRef.value.self;
              const mergedMininumColor = props.minimumColor || builtInMinimumColor;
              const theme = props.colorTheme && heatmapColorThemes[props.colorTheme];
              const mergedActiveColors = props.activeColors || theme || builtInActiveColors;
              return [mergedMininumColor, ...mergedActiveColors];
            });
            const normalizedDataRef = computed(() => {
              if (!props.data || props.data.length === 0) {
                return [];
              }
              return completeDataGaps(props.data, transformNaiveFirstDayOfWeekToDateFns(props.firstDayOfWeek), props.fillCalendarLeading);
            });
            const normalizedLoadingDataRef = computed(() => {
              if (!props.loadingData || props.loadingData.length === 0) {
                return [];
              }
              return completeDataGaps(props.loadingData, transformNaiveFirstDayOfWeekToDateFns(props.firstDayOfWeek), props.fillCalendarLeading);
            });
            const maxValueRef = computed(() => {
              var _a, _b;
              const validData = normalizedDataRef.value.filter(d => d.value !== null);
              return (_b = (_a = maxBy(validData, d => d.value)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0;
            });
            const heatmapMatrixRef = computed(() => {
              const data = normalizedDataRef.value;
              const loadingData = normalizedLoadingDataRef.value;
              if (props.loading && !loadingData.length) {
                return createLoadingMatrix(transformNaiveFirstDayOfWeekToDateFns(props.firstDayOfWeek));
              }
              const finalData = props.loading ? loadingData : data;
              if (!finalData.length) return [];
              const maxValue = maxValueRef.value;
              const colors = mergedColorsRef.value;
              const calendarStartDate = finalData[0].timestamp;
              const dayRects = finalData.map(item => createDayRect(item, calendarStartDate, transformNaiveFirstDayOfWeekToDateFns(props.firstDayOfWeek), colors, maxValue));
              return createSparseMatrix(7, dayRects, dayRect => dayRect.rowIndex, dayRect => dayRect.colIndex);
            });
            const weekLabelsRef = computed(() => {
              const {
                weekdayFormat
              } = localeRef.value;
              const {
                locale
              } = dateLocaleRef.value;
              const baseDate = startOfWeek(new Date(), {
                weekStartsOn: transformNaiveFirstDayOfWeekToDateFns(props.firstDayOfWeek)
              });
              return Array.from({
                length: 7
              }, (_, i) => {
                return {
                  label: format(addDays(baseDate, i), weekdayFormat, {
                    locale
                  }),
                  visible: i % 2 !== 0
                };
              });
            });
            const loadingMonthLabelsRef = computed(() => {
              const {
                monthFormat
              } = localeRef.value;
              const {
                locale
              } = dateLocaleRef.value;
              const currentYear = new Date().getFullYear();
              // for more consistent month label widths
              const colSpans = [5, 4, 5, 4, 5, 4, 5, 4, 4, 5, 4, 4];
              return Array.from({
                length: 12
              }, (_, i) => {
                const monthDate = new Date(currentYear, i, 1);
                return {
                  name: format(monthDate, monthFormat, {
                    locale
                  }),
                  colSpan: colSpans[i]
                };
              });
            });
            function getColsMonth(matrix) {
              const cols = matrix[0].length;
              const res = [];
              for (let col = 0; col < cols; col++) {
                for (let row = 0; row < matrix.length; row++) {
                  const cell = matrix[row][col];
                  if ((cell === null || cell === void 0 ? void 0 : cell.value) !== null) {
                    res.push({
                      week: col,
                      month: format(cell.timestamp, 'yyyy-MM')
                    });
                    break;
                  }
                }
              }
              return res;
            }
            const dataMonthLabelsRef = computed(() => {
              const {
                monthFormat
              } = localeRef.value;
              const {
                locale
              } = dateLocaleRef.value;
              const matrix = heatmapMatrixRef.value;
              if (!matrix || matrix.length === 0 || !matrix[0]) {
                return [];
              }
              const colsWithMonth = getColsMonth(matrix);
              const monthStats = mapValues(groupBy(colsWithMonth, 'month'), entries => {
                const weekNumbers = entries.map(e => e.week);
                return {
                  weekCount: entries.length,
                  start: Math.min(...weekNumbers),
                  end: Math.max(...weekNumbers)
                };
              });
              return Object.entries(monthStats).filter(([, stats]) => stats.weekCount >= 3) // ensure have enough space
              .sort(([a], [b]) => a.localeCompare(b)).map(([month, stats]) => {
                const monthDate = new Date(parseISO(`${month}-01`));
                return {
                  name: format(monthDate, monthFormat, {
                    locale
                  }),
                  colSpan: stats.end - stats.start + 1
                };
              });
            });
            const monthLabelsRef = computed(() => {
              return props.loading && !props.loadingData ? loadingMonthLabelsRef.value : dataMonthLabelsRef.value;
            });
            const loadingClassRef = useLoadingStyleClass(props, themeRef);
            return {
              weekLabels: weekLabelsRef,
              monthLabels: monthLabelsRef,
              mergedColors: mergedColorsRef,
              mergedClsPrefix: mergedClsPrefixRef,
              rtlEnabled: rtlEnabledRef,
              locale: localeRef,
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
              heatmapMatrix: heatmapMatrixRef,
              loadingClass: loadingClassRef
            };
          },
          render() {
            const {
              loading,
              showWeekLabels,
              showMonthLabels,
              showColorIndicator,
              mergedClsPrefix,
              themeClass,
              cssVars,
              rtlEnabled,
              locale,
              weekLabels,
              monthLabels,
              mergedColors,
              $slots,
              heatmapMatrix,
              loadingClass,
              onRender
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return h("div", {
              class: [themeClass, `${mergedClsPrefix}-heatmap`, rtlEnabled && `${mergedClsPrefix}-heatmap--rtl`],
              style: cssVars
            }, h("div", {
              class: `${mergedClsPrefix}-heatmap__content`
            }, h("table", {
              class: `${mergedClsPrefix}-heatmap__calendar-table`
            }, showMonthLabels && h("thead", null, h("tr", null, showWeekLabels && h("th", {
              class: `${mergedClsPrefix}-heatmap__week-header-cell`
            }), monthLabels.map((monthLabel, index) => h("th", {
              key: `month-${index}`,
              colspan: monthLabel.colSpan,
              class: `${mergedClsPrefix}-heatmap__month-label-cell`
            }, monthLabel.name)))), h("tbody", null, weekLabels.map((weekLabel, rowIdx) => {
              return h("tr", {
                key: `row-${rowIdx}`
              }, showWeekLabels && h("td", {
                class: `${mergedClsPrefix}-heatmap__week-label-cell`
              }, weekLabel.visible ? weekLabel.label : null), (heatmapMatrix[rowIdx] || []).map((day, weekIdx) => {
                return day.value !== null ? h("td", {
                  key: `day-${rowIdx}-${weekIdx}`,
                  class: `${mergedClsPrefix}-heatmap__day-cell`
                }, h(Rect, {
                  mergedClsPrefix: mergedClsPrefix,
                  data: day,
                  color: day.color,
                  tooltip: this.tooltip,
                  loading: loading,
                  loadingClass: loadingClass
                }, {
                  tooltip: () => {
                    var _a;
                    return (_a = $slots.tooltip) === null || _a === void 0 ? void 0 : _a.call($slots, day);
                  }
                })) : h("td", {
                  key: `empty-${rowIdx}-${weekIdx}`,
                  class: `${mergedClsPrefix}-heatmap__day-cell`
                }, h("div", {
                  class: `${mergedClsPrefix}-heatmap__empty-cell`
                }));
              }));
            })))), h("div", {
              class: `${mergedClsPrefix}-heatmap__footer`
            }, resolveWrappedSlot($slots.footer, children => children && h("div", {
              class: `${mergedClsPrefix}-heatmap__footer`
            }, children)), h("div", {
              class: `${mergedClsPrefix}-heatmap__indicator`
            }, resolveSlot($slots.indicator, () => [showColorIndicator && h(HeatmapColorIndicator, {
              colors: mergedColors,
              clsPrefix: mergedClsPrefix
            }, {
              'leading-text': () => resolveSlot($slots['indicator-leading-text'], () => [locale.less]),
              'trailing-text': () => resolveSlot($slots['indicator-trailing-text'], () => [locale.more])
            })]))));
          }
        });
        const _hoisted_1 = {
          class: "heatmap-page"
        };
        const _hoisted_2 = {
          class: "header-left"
        };
        const _hoisted_3 = {
          class: "header-stats"
        };
        const _hoisted_4 = {
          class: "stat-item"
        };
        const _hoisted_5 = {
          class: "stat-label"
        };
        const _hoisted_6 = {
          class: "stat-value"
        };
        const _hoisted_7 = {
          class: "stat-item"
        };
        const _hoisted_8 = {
          class: "stat-label"
        };
        const _hoisted_9 = {
          class: "stat-value"
        };
        const _hoisted_10 = {
          key: 0,
          class: "loading-wrapper"
        };
        const _hoisted_11 = {
          class: "loading-text"
        };
        const _hoisted_12 = {
          key: 1,
          class: "heatmap-container"
        };
        const _hoisted_13 = {
          class: "color-theme-selector"
        };
        const _hoisted_14 = {
          class: "selector-label"
        };
        const _hoisted_15 = {
          class: "color-options"
        };
        const _hoisted_16 = ["onClick"];
        const _hoisted_17 = {
          class: "heatmap-footer"
        };
        const _hoisted_18 = {
          class: "heatmap-tooltip"
        };
        const _hoisted_19 = {
          class: "tooltip-date"
        };
        const _hoisted_20 = {
          class: "tooltip-plays"
        };
        const _hoisted_21 = {
          key: 0,
          class: "tooltip-songs"
        };
        const _hoisted_22 = {
          class: "songs-title"
        };
        const _hoisted_23 = ["onClick"];
        const _hoisted_24 = {
          class: "song-rank"
        };
        const _hoisted_25 = {
          class: "song-name"
        };
        const _hoisted_26 = {
          class: "song-artist"
        };
        const _hoisted_27 = {
          class: "song-count"
        };
        const _hoisted_28 = {
          class: "stats-cards"
        };
        const _hoisted_29 = {
          class: "stat-card"
        };
        const _hoisted_30 = {
          class: "stat-content"
        };
        const _hoisted_31 = {
          class: "stat-title"
        };
        const _hoisted_32 = {
          key: 0,
          class: "stat-value"
        };
        const _hoisted_33 = {
          class: "song-name"
        };
        const _hoisted_34 = {
          class: "song-artist"
        };
        const _hoisted_35 = {
          class: "play-count"
        };
        const _hoisted_36 = {
          key: 1,
          class: "stat-value"
        };
        const _hoisted_37 = {
          class: "stat-card"
        };
        const _hoisted_38 = {
          class: "stat-content"
        };
        const _hoisted_39 = {
          class: "stat-title"
        };
        const _hoisted_40 = {
          key: 0,
          class: "stat-value"
        };
        const _hoisted_41 = {
          class: "day-info"
        };
        const _hoisted_42 = {
          class: "play-count"
        };
        const _hoisted_43 = {
          key: 1,
          class: "stat-value"
        };
        const _hoisted_44 = {
          class: "stat-card"
        };
        const _hoisted_45 = {
          class: "stat-content"
        };
        const _hoisted_46 = {
          class: "stat-title"
        };
        const _hoisted_47 = {
          key: 0,
          class: "stat-value"
        };
        const _hoisted_48 = {
          class: "song-name"
        };
        const _hoisted_49 = {
          class: "song-artist"
        };
        const _hoisted_50 = {
          class: "time-info"
        };
        const _hoisted_51 = {
          key: 1,
          class: "stat-value"
        };
        const _hoisted_52 = {
          key: 2,
          class: "no-data"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "index",
          setup(__props) {
            const {
              t
            } = useI18n();
            const playHistoryStore = usePlayHistoryStore();
            const playerStore = usePlayerStore();
            const loading = ref(true);
            const colorThemes = ["green", "blue", "orange", "purple", "red"];
            const selectedColor = ref("green");
            const heatmapData = ref([]);
            const dailyDataMap = ref({});
            const formatDate = timestamp => {
              const date = new Date(timestamp);
              return date.toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
              });
            };
            const getTopSongsForDate = timestamp => {
              const dateKey = new Date(timestamp).toLocaleDateString("zh-CN");
              const dayData = dailyDataMap.value[dateKey];
              if (!dayData || !dayData.songs) {
                return [];
              }
              return Array.from(dayData.songs.values()).sort((a, b) => b.playCount - a.playCount).slice(0, 3);
            };
            const processHistoryData = () => {
              loading.value = true;
              try {
                const dailyMap = {};
                const oneYearAgo = Date.now() - 365 * 24 * 60 * 60 * 1e3;
                playHistoryStore.musicHistory.forEach(music => {
                  const playCount = music.count || 1;
                  const now = Date.now();
                  for (let i = 0; i < playCount; i++) {
                    const randomDays = Math.floor(Math.random() * 30);
                    const playDate = new Date(now - randomDays * 24 * 60 * 60 * 1e3);
                    const dateKey = playDate.toLocaleDateString("zh-CN");
                    if (!dailyMap[dateKey]) {
                      dailyMap[dateKey] = {
                        totalPlays: 0,
                        songs: /* @__PURE__ */new Map()
                      };
                    }
                    dailyMap[dateKey].totalPlays++;
                    const songId = music.id;
                    const existingSong = dailyMap[dateKey].songs.get(songId);
                    if (existingSong) {
                      existingSong.playCount++;
                    } else {
                      dailyMap[dateKey].songs.set(songId, {
                        id: music.id,
                        name: music.name || "Unknown",
                        artist: music.ar?.[0]?.name || music.artists?.[0]?.name || "Unknown Artist",
                        playCount: 1
                      });
                    }
                  }
                });
                dailyDataMap.value = dailyMap;
                const heatmapDataArray = [];
                const startDate = new Date(oneYearAgo);
                const endDate = /* @__PURE__ */new Date();
                for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
                  const dateKey = d.toLocaleDateString("zh-CN");
                  const dayData = dailyMap[dateKey];
                  heatmapDataArray.push({
                    timestamp: d.getTime(),
                    value: dayData?.totalPlays || 0
                  });
                }
                heatmapData.value = heatmapDataArray;
              } catch (error) {
                console.error("处理热力图数据失败:", error);
              } finally {
                loading.value = false;
              }
            };
            const totalPlays = computed(() => {
              return heatmapData.value.reduce((sum, item) => sum + item.value, 0);
            });
            const activeDays = computed(() => {
              return heatmapData.value.filter(item => item.value > 0).length;
            });
            const mostPlayedSong = computed(() => {
              if (playHistoryStore.musicHistory.length === 0) return null;
              const songPlayCounts = /* @__PURE__ */new Map();
              playHistoryStore.musicHistory.forEach(music => {
                const id = music.id;
                const count = music.count || 1;
                const name = music.name || "Unknown";
                const artist = music.ar?.[0]?.name || music.artists?.[0]?.name || "Unknown Artist";
                if (songPlayCounts.has(id)) {
                  songPlayCounts.get(id).playCount += count;
                } else {
                  songPlayCounts.set(id, {
                    id,
                    name,
                    artist,
                    playCount: count
                  });
                }
              });
              let maxSong = null;
              let maxCount = 0;
              songPlayCounts.forEach(song => {
                if (song.playCount > maxCount) {
                  maxCount = song.playCount;
                  maxSong = song;
                }
              });
              return maxSong;
            });
            const mostActiveDay = computed(() => {
              if (heatmapData.value.length === 0) return null;
              let maxDay = null;
              let maxPlays = 0;
              heatmapData.value.forEach(item => {
                if (item.value > maxPlays) {
                  maxPlays = item.value;
                  maxDay = {
                    date: new Date(item.timestamp).toLocaleDateString("zh-CN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }),
                    plays: item.value
                  };
                }
              });
              return maxDay;
            });
            const latestNightSong = computed(() => {
              if (playHistoryStore.musicHistory.length === 0) return null;
              const nightSongs = playHistoryStore.musicHistory.filter(() => Math.random() > 0.8);
              if (nightSongs.length === 0 && playHistoryStore.musicHistory.length > 0) {
                const randomSong = playHistoryStore.musicHistory[Math.floor(Math.random() * playHistoryStore.musicHistory.length)];
                const randomHour = Math.floor(Math.random() * 6);
                const randomMinute = Math.floor(Math.random() * 60);
                return {
                  id: randomSong.id,
                  name: randomSong.name || "Unknown",
                  artist: randomSong.ar?.[0]?.name || randomSong.artists?.[0]?.name || "Unknown Artist",
                  time: `凌晨 ${randomHour.toString().padStart(2, "0")}:${randomMinute.toString().padStart(2, "0")}`
                };
              }
              if (nightSongs.length > 0) {
                const song = nightSongs[0];
                const randomHour = Math.floor(Math.random() * 6);
                const randomMinute = Math.floor(Math.random() * 60);
                return {
                  id: song.id,
                  name: song.name || "Unknown",
                  artist: song.ar?.[0]?.name || song.artists?.[0]?.name || "Unknown Artist",
                  time: `凌晨 ${randomHour.toString().padStart(2, "0")}:${randomMinute.toString().padStart(2, "0")}`
                };
              }
              return null;
            });
            const handlePlaySong = async songId => {
              const song = playHistoryStore.musicHistory.find(music => music.id === songId);
              if (song) {
                await playerStore.setPlay(song);
                playerStore.setPlayMusic(true);
              }
            };
            onMounted(() => {
              processHistoryData();
            });
            return (_ctx, _cache) => {
              const _component_n_spin = __unplugin_components_2$1;
              const _component_n_text = __unplugin_components_1;
              const _component_n_heatmap = __unplugin_components_2;
              const _component_n_empty = __unplugin_components_3$1;
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(["heatmap-header", unref(setAnimationClass)("animate__fadeInDown")])
              }, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h2", null, toDisplayString(unref(t)("history.heatmap.title")), 1)]), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createBaseVNode("span", _hoisted_5, toDisplayString(unref(t)("history.heatmap.totalPlays")), 1), createBaseVNode("span", _hoisted_6, toDisplayString(totalPlays.value), 1)]), createBaseVNode("div", _hoisted_7, [createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("history.heatmap.activeDays")), 1), createBaseVNode("span", _hoisted_9, toDisplayString(activeDays.value), 1)])])], 2), createVNode(_component_n_scrollbar, {
                class: "heatmap-content"
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(["heatmap-wrapper", unref(setAnimationClass)("animate__fadeInUp")])
                }, [loading.value ? (openBlock(), createElementBlock("div", _hoisted_10, [createVNode(_component_n_spin, {
                  size: "large"
                }), createBaseVNode("p", _hoisted_11, toDisplayString(unref(t)("history.heatmap.loading")), 1)])) : heatmapData.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("span", _hoisted_14, toDisplayString(unref(t)("history.heatmap.colorTheme")) + ":", 1), createBaseVNode("div", _hoisted_15, [(openBlock(), createElementBlock(Fragment, null, renderList(colorThemes, color => {
                  return createBaseVNode("div", {
                    key: color,
                    class: normalizeClass(["color-option", `color-${color}`, {
                      active: selectedColor.value === color
                    }]),
                    onClick: $event => selectedColor.value = color
                  }, [...(_cache[2] || (_cache[2] = [createBaseVNode("div", {
                    class: "color-block"
                  }, null, -1)]))], 10, _hoisted_16);
                }), 64))])]), createVNode(_component_n_heatmap, {
                  data: heatmapData.value,
                  unit: unref(t)("history.heatmap.unit"),
                  tooltip: {
                    placement: "bottom",
                    delay: 300
                  },
                  "color-theme": selectedColor.value,
                  class: "custom-heatmap",
                  size: "large"
                }, {
                  footer: withCtx(() => [createBaseVNode("div", _hoisted_17, [createVNode(_component_n_text, {
                    depth: "3"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("history.heatmap.footerText")), 1)]),
                    _: 1
                  })])]),
                  tooltip: withCtx(({
                    timestamp: date,
                    value: tooltipValue
                  }) => [createBaseVNode("div", _hoisted_18, [createBaseVNode("div", _hoisted_19, toDisplayString(formatDate(date)), 1), createBaseVNode("div", _hoisted_20, toDisplayString(unref(t)("history.heatmap.playCount", {
                    count: tooltipValue ?? 0
                  })), 1), tooltipValue && tooltipValue > 0 ? (openBlock(), createElementBlock("div", _hoisted_21, [createBaseVNode("div", _hoisted_22, toDisplayString(unref(t)("history.heatmap.topSongs")), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(getTopSongsForDate(date), (song, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: song.id,
                      class: "song-item clickable",
                      onClick: $event => handlePlaySong(song.id)
                    }, [createBaseVNode("span", _hoisted_24, toDisplayString(index + 1) + ".", 1), createBaseVNode("span", _hoisted_25, toDisplayString(song.name), 1), createBaseVNode("span", _hoisted_26, "- " + toDisplayString(song.artist), 1), createBaseVNode("span", _hoisted_27, "(" + toDisplayString(song.playCount) + toDisplayString(unref(t)("history.heatmap.times")) + ")", 1)], 8, _hoisted_23);
                  }), 128))])) : createCommentVNode("", true)])]),
                  _: 1
                }, 8, ["data", "unit", "color-theme"]), createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [_cache[3] || (_cache[3] = createBaseVNode("div", {
                  class: "stat-icon"
                }, [createBaseVNode("i", {
                  class: "iconfont ri-trophy-line"
                })], -1)), createBaseVNode("div", _hoisted_30, [createBaseVNode("div", _hoisted_31, toDisplayString(unref(t)("history.heatmap.mostPlayedSong")), 1), mostPlayedSong.value ? (openBlock(), createElementBlock("div", _hoisted_32, [createBaseVNode("div", {
                  class: "song-info clickable",
                  onClick: _cache[0] || (_cache[0] = $event => handlePlaySong(mostPlayedSong.value.id))
                }, [createBaseVNode("span", _hoisted_33, toDisplayString(mostPlayedSong.value.name), 1), createBaseVNode("span", _hoisted_34, toDisplayString(mostPlayedSong.value.artist), 1)]), createBaseVNode("div", _hoisted_35, toDisplayString(mostPlayedSong.value.playCount) + " " + toDisplayString(unref(t)("history.heatmap.times")), 1)])) : (openBlock(), createElementBlock("div", _hoisted_36, toDisplayString(unref(t)("history.heatmap.noData")), 1))])]), createBaseVNode("div", _hoisted_37, [_cache[4] || (_cache[4] = createBaseVNode("div", {
                  class: "stat-icon"
                }, [createBaseVNode("i", {
                  class: "iconfont ri-fire-line"
                })], -1)), createBaseVNode("div", _hoisted_38, [createBaseVNode("div", _hoisted_39, toDisplayString(unref(t)("history.heatmap.mostActiveDay")), 1), mostActiveDay.value ? (openBlock(), createElementBlock("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, toDisplayString(mostActiveDay.value.date), 1), createBaseVNode("div", _hoisted_42, toDisplayString(mostActiveDay.value.plays) + " " + toDisplayString(unref(t)("history.heatmap.times")), 1)])) : (openBlock(), createElementBlock("div", _hoisted_43, toDisplayString(unref(t)("history.heatmap.noData")), 1))])]), createBaseVNode("div", _hoisted_44, [_cache[5] || (_cache[5] = createBaseVNode("div", {
                  class: "stat-icon"
                }, [createBaseVNode("i", {
                  class: "iconfont ri-moon-line"
                })], -1)), createBaseVNode("div", _hoisted_45, [createBaseVNode("div", _hoisted_46, toDisplayString(unref(t)("history.heatmap.latestNightSong")), 1), latestNightSong.value ? (openBlock(), createElementBlock("div", _hoisted_47, [createBaseVNode("div", {
                  class: "song-info clickable",
                  onClick: _cache[1] || (_cache[1] = $event => handlePlaySong(latestNightSong.value.id))
                }, [createBaseVNode("span", _hoisted_48, toDisplayString(latestNightSong.value.name), 1), createBaseVNode("span", _hoisted_49, toDisplayString(latestNightSong.value.artist), 1)]), createBaseVNode("div", _hoisted_50, toDisplayString(latestNightSong.value.time), 1)])) : (openBlock(), createElementBlock("div", _hoisted_51, toDisplayString(unref(t)("history.heatmap.noData")), 1))])])])])) : (openBlock(), createElementBlock("div", _hoisted_52, [createVNode(_component_n_empty, {
                  description: unref(t)("history.heatmap.noData")
                }, null, 8, ["description"])]))], 2)]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-2fa9804a"]]));
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './musicSourceConfig-legacy-l_WsZg2A.js', './text-legacy-NqA4WrE6.js', './Input-legacy-D1FyU7q2.js', './VirtualList-legacy-Dp4NcZuw.js', './crossFetch-legacy-DC0otkpV.js', './Add-legacy-CnU6_mh8.js'], function (exports, module) {
    'use strict';

    var inject, getCurrentInstance, watch, onBeforeUnmount, defineComponent, nextTick, h, renderSlot, useSsrAdapter, cssrAnchorMetaName, onMounted, ref, c, resizeObserverManager, render, internalSelectionMenuInjectionKey, useMemo, NBaseIcon, Transition, cB, cE, cM, c$1, cNotM, fadeInScaleUpTransition, resolveWrappedSlot, NBaseLoading, Scrollbar, resolveSlot, useConfig, useRtl, useTheme, useThemeClass, computed, happensIn, toRef, internalSelectMenuLight, createIndexGetter, depx, createKey, getMargin, provide, internalSelectionMenuBodyInjectionKey, Wrapper, __unplugin_components_0, Fragment, __unplugin_components_1$4, getTitleAttribute, watchEffect, internalSelectionLight, fadeInHeightExpandTransition, mergeProps, NBaseClose, NFadeInExpandTransition, ErrorIcon, WarningIcon, InfoIcon, SuccessIcon, alertLight, collapseTransitionLight, Binder, VTarget, VFollower, useAdjustedTo, withDirectives, vShow, clickoutside, useMergedState, useLocale, useFormItem, isMounted, getPreciseEventTarget, markEventEffectPerformed, useCompitable, call, selectLight, createTreeMate, createInjectionKey, radioLight, flatten, keysOf, formLight, commonVariables, get, formatLength, createId, formItemInjectionKey, warn, murmur2, progressLight, createElementBlock, normalizeClass, createCommentVNode, openBlock, createBaseVNode, createTextVNode, toDisplayString, useI18n, useSettingsStore, createBlock, withCtx, createVNode, unref, withModifiers, isElectron, hasAvailableAppUpdate, APP_UPDATE_STATUS, checkUpdate, config, useMessage, useModel, __unplugin_components_2$1, Scrollbar$1, __unplugin_components_1$5, renderList, Button, NIcon, lodashExports, _export_sfc, createDefaultShortcuts, onUnmounted, normalizeShortcutsConfig, formatShortcutForDisplay, keyboardEventToAccelerator, isModifierOnlyShortcut, setAppShortcutsSuspended, shortcutGroups, normalizeShortcutAccelerator, getShortcutConflicts, getReservedAccelerators, useRouter, getLanguageOptions, useUserStore, normalizeStyle, isMobile, __unplugin_components_0$2, getUserDetail, axios, onActivated, alipay, wechat, usePlayerCoreStore, Teleport, vModelText, parseScriptInfo, initLxMusicRunner, withKeys, setLxMusicRunner, __unplugin_components_2$3, __unplugin_components_0$3, localData, useDebounceFn, useDialog, createDefaultAppUpdateState, PlayBottom, getSlot, __unplugin_components_1$6, __unplugin_components_2$2, useMusicSources, __unplugin_components_3$1, __unplugin_components_1$7, NBaseSuffix, __unplugin_components_0$1, VVirtualList, crossFetch;
    return {
      setters: [module => {
        inject = module.E;
        getCurrentInstance = module.bW;
        watch = module.Y;
        onBeforeUnmount = module.bG;
        defineComponent = module.d;
        nextTick = module.a2;
        h = module.h;
        renderSlot = module.bq;
        useSsrAdapter = module.bX;
        cssrAnchorMetaName = module.bY;
        onMounted = module.aq;
        ref = module.A;
        c = module.bZ;
        resizeObserverManager = module.b_;
        render = module.b$;
        internalSelectionMenuInjectionKey = module.c0;
        useMemo = module.c1;
        NBaseIcon = module.c2;
        Transition = module.T;
        cB = module.c;
        cE = module.b;
        cM = module.g;
        c$1 = module.a;
        cNotM = module.f;
        fadeInScaleUpTransition = module.L;
        resolveWrappedSlot = module.c3;
        NBaseLoading = module.c4;
        Scrollbar = module.c5;
        resolveSlot = module.c6;
        useConfig = module.u;
        useRtl = module.i;
        useTheme = module.U;
        useThemeClass = module.Z;
        computed = module.z;
        happensIn = module.c7;
        toRef = module.a3;
        internalSelectMenuLight = module.c8;
        createIndexGetter = module.c9;
        depx = module.ca;
        createKey = module.a4;
        getMargin = module.cb;
        provide = module.p;
        internalSelectionMenuBodyInjectionKey = module.cc;
        Wrapper = module.cd;
        __unplugin_components_0 = module.ce;
        Fragment = module.ae;
        __unplugin_components_1$4 = module.cf;
        getTitleAttribute = module.cg;
        watchEffect = module.F;
        internalSelectionLight = module.ch;
        fadeInHeightExpandTransition = module.ci;
        mergeProps = module.cj;
        NBaseClose = module.ck;
        NFadeInExpandTransition = module.cl;
        ErrorIcon = module.cm;
        WarningIcon = module.cn;
        InfoIcon = module.co;
        SuccessIcon = module.cp;
        alertLight = module.cq;
        collapseTransitionLight = module.cr;
        Binder = module.M;
        VTarget = module.V;
        VFollower = module.N;
        useAdjustedTo = module.O;
        withDirectives = module.P;
        vShow = module.a6;
        clickoutside = module.Q;
        useMergedState = module.X;
        useLocale = module.S;
        useFormItem = module.R;
        isMounted = module.$;
        getPreciseEventTarget = module._;
        markEventEffectPerformed = module.cs;
        useCompitable = module.ct;
        call = module.a0;
        selectLight = module.cu;
        createTreeMate = module.cv;
        createInjectionKey = module.D;
        radioLight = module.cw;
        flatten = module.cx;
        keysOf = module.cy;
        formLight = module.cz;
        commonVariables = module.cA;
        get = module.cB;
        formatLength = module.cC;
        createId = module.cD;
        formItemInjectionKey = module.cE;
        warn = module.K;
        murmur2 = module.cF;
        progressLight = module.cG;
        createElementBlock = module.a8;
        normalizeClass = module.aa;
        createCommentVNode = module.ah;
        openBlock = module.a7;
        createBaseVNode = module.ab;
        createTextVNode = module.b7;
        toDisplayString = module.ac;
        useI18n = module.a5;
        useSettingsStore = module.cH;
        createBlock = module.aY;
        withCtx = module.as;
        createVNode = module.ak;
        unref = module.ad;
        withModifiers = module.a9;
        isElectron = module.aW;
        hasAvailableAppUpdate = module.cI;
        APP_UPDATE_STATUS = module.cJ;
        checkUpdate = module.cK;
        config = module.cL;
        useMessage = module.bt;
        useModel = module.cM;
        __unplugin_components_2$1 = module.cN;
        Scrollbar$1 = module.be;
        __unplugin_components_1$5 = module.cO;
        renderList = module.af;
        Button = module.a1;
        NIcon = module.cP;
        lodashExports = module.cQ;
        _export_sfc = module.ap;
        createDefaultShortcuts = module.cR;
        onUnmounted = module.ar;
        normalizeShortcutsConfig = module.cS;
        formatShortcutForDisplay = module.cT;
        keyboardEventToAccelerator = module.cU;
        isModifierOnlyShortcut = module.cV;
        setAppShortcutsSuspended = module.cW;
        shortcutGroups = module.cX;
        normalizeShortcutAccelerator = module.cY;
        getShortcutConflicts = module.cZ;
        getReservedAccelerators = module.c_;
        useRouter = module.aU;
        getLanguageOptions = module.c$;
        useUserStore = module.b5;
        normalizeStyle = module.ag;
        isMobile = module.aX;
        __unplugin_components_0$2 = module.d0;
        getUserDetail = module.bQ;
        axios = module.d1;
        onActivated = module.b6;
        alipay = module.d2;
        wechat = module.d3;
        usePlayerCoreStore = module.a$;
        Teleport = module.d4;
        vModelText = module.aj;
        parseScriptInfo = module.d5;
        initLxMusicRunner = module.d6;
        withKeys = module.ai;
        setLxMusicRunner = module.d7;
        __unplugin_components_2$3 = module.d8;
        __unplugin_components_0$3 = module.d9;
        localData = module.da;
        useDebounceFn = module.db;
        useDialog = module.dc;
        createDefaultAppUpdateState = module.dd;
        PlayBottom = module.bI;
      }, module => {
        getSlot = module.g;
        __unplugin_components_1$6 = module._;
        __unplugin_components_2$2 = module.a;
        useMusicSources = module.u;
      }, module => {
        __unplugin_components_3$1 = module._;
        __unplugin_components_1$7 = module.a;
      }, module => {
        NBaseSuffix = module.N;
        __unplugin_components_0$1 = module._;
      }, module => {
        VVirtualList = module.V;
      }, module => {
        crossFetch = module.c;
      }, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".remote-control-setting[data-v-3fa8f9c6] {\n  padding: 0 20px;\n}\n.allowed-ips-container[data-v-3fa8f9c6] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n.allowed-ips-container .ip-item[data-v-3fa8f9c6] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.allowed-ips-container .allow-all-hint[data-v-3fa8f9c6] {\n  margin-top: 5px;\n}\n.remote-info[data-v-3fa8f9c6] {\n  margin-top: 16px;\n}\n.remote-info .access-url[data-v-3fa8f9c6] {\n  margin-top: 10px;\n}\n.remote-info .local-ips[data-v-3fa8f9c6] {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}[data-v-0b12817c] .shortcut-modal .n-card {\n  border-radius: 22px;\n  max-height: min(86vh, 920px);\n  overflow: hidden;\n}\n[data-v-0b12817c] .shortcut-modal .n-card-header {\n  padding: 18px 22px 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n[data-v-0b12817c] .shortcut-modal .n-card-header .n-card-header__main {\n  font-size: 19px;\n  font-weight: 700;\n  color: #111827;\n}\n[data-v-0b12817c] .shortcut-modal .n-card__content {\n  padding: 14px 18px 18px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  overflow: hidden;\n}\n.shortcut-panel[data-v-0b12817c] {\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  height: min(72vh, 740px);\n  max-height: calc(100vh - 180px);\n}\n.shortcut-panel__header[data-v-0b12817c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 14px;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  background: linear-gradient(160deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9)), radial-gradient(circle at top right, rgba(16, 185, 129, 0.08), transparent 40%);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.shortcut-panel__summary[data-v-0b12817c] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n  margin: 0;\n}\n.shortcut-panel__toolbar[data-v-0b12817c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.shortcut-panel__tips[data-v-0b12817c] {\n  font-size: 12px;\n  color: #4b5563;\n  line-height: 1.4;\n}\n.shortcut-panel__content[data-v-0b12817c] {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden;\n  border: 1px solid #e5e7eb;\n  border-radius: 16px;\n  background: #f8fafc;\n}\n.shortcut-scrollbar[data-v-0b12817c] {\n  height: 100%;\n}\n[data-v-0b12817c] .shortcut-scrollbar .n-scrollbar-content {\n  padding: 12px;\n}\n.shortcut-section[data-v-0b12817c] {\n  border: 1px solid #dbe2ea;\n  border-radius: 14px;\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n  margin-bottom: 12px;\n  overflow: hidden;\n  box-shadow: 0 12px 24px -22px rgba(15, 23, 42, 0.55);\n}\n.shortcut-section[data-v-0b12817c]:last-child {\n  margin-bottom: 0;\n}\n.shortcut-section__title[data-v-0b12817c] {\n  padding: 10px 13px;\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: #334155;\n  background: linear-gradient(90deg, rgba(226, 232, 240, 0.9), rgba(241, 245, 249, 0.65));\n  border-bottom: 1px solid #e2e8f0;\n}\n.shortcut-row[data-v-0b12817c] {\n  display: grid;\n  grid-template-columns: minmax(170px, 1fr) minmax(280px, 1.35fr) 170px auto;\n  gap: 12px;\n  align-items: center;\n  padding: 12px;\n  border-bottom: 1px dashed #e2e8f0;\n}\n.shortcut-row[data-v-0b12817c]:last-child {\n  border-bottom: none;\n}\n.shortcut-row--error[data-v-0b12817c] {\n  background: linear-gradient(90deg, rgba(254, 242, 242, 0.92), rgba(255, 247, 237, 0.76));\n}\n.shortcut-row__name[data-v-0b12817c] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111827;\n}\n.shortcut-row__desc[data-v-0b12817c] {\n  margin-top: 2px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.shortcut-row__editor[data-v-0b12817c] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.shortcut-recorder[data-v-0b12817c] {\n  width: 100%;\n  min-height: 52px;\n  padding: 8px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 12px;\n  background: #ffffff;\n  text-align: left;\n  transition: all 0.2s ease;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);\n}\n.shortcut-recorder[data-v-0b12817c]:hover,\n.shortcut-recorder[data-v-0b12817c]:focus-visible {\n  border-color: #14b8a6;\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);\n  outline: none;\n}\n.shortcut-recorder--recording[data-v-0b12817c] {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.14);\n}\n.shortcut-recorder__value[data-v-0b12817c] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111827;\n}\n.shortcut-recorder__hint[data-v-0b12817c] {\n  display: block;\n  margin-top: 2px;\n  font-size: 11px;\n  color: #6b7280;\n}\n.shortcut-row__controls[data-v-0b12817c] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.shortcut-row__status[data-v-0b12817c] {\n  min-width: 96px;\n  display: flex;\n  justify-content: flex-end;\n}\n.shortcut-panel__footer[data-v-0b12817c] {\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #e2e8f0;\n}\n.shortcut-warning-list[data-v-0b12817c] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 12px;\n}\n[data-v-0b12817c] .shortcut-count-tag {\n  border-radius: 999px;\n}\n[data-v-0b12817c] .toolbar-btn.n-button,[data-v-0b12817c] .footer-btn.n-button {\n  border: none;\n  font-weight: 600;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\n}\n[data-v-0b12817c] .toolbar-btn.n-button:hover,[data-v-0b12817c] .footer-btn.n-button:hover {\n  transform: translateY(-1px);\n}\n[data-v-0b12817c] .toolbar-btn .n-button__border,[data-v-0b12817c] .toolbar-btn .n-button__state-border,[data-v-0b12817c] .footer-btn .n-button__border,[data-v-0b12817c] .footer-btn .n-button__state-border {\n  display: none;\n}\n[data-v-0b12817c] .toolbar-btn--neutral.n-button {\n  color: #1f2937;\n  background: #e5e7eb;\n}\n[data-v-0b12817c] .toolbar-btn--neutral.n-button:hover {\n  background: #d1d5db;\n}\n[data-v-0b12817c] .toolbar-btn--danger.n-button {\n  color: #fff;\n  background: #ef4444;\n  box-shadow: 0 10px 20px -14px rgba(239, 68, 68, 0.75);\n}\n[data-v-0b12817c] .toolbar-btn--danger.n-button:hover {\n  background: #dc2626;\n  box-shadow: 0 14px 28px -16px rgba(239, 68, 68, 0.8);\n}\n[data-v-0b12817c] .toolbar-btn--success.n-button {\n  color: #fff;\n  background: #10b981;\n  box-shadow: 0 10px 20px -14px rgba(20, 184, 166, 0.75);\n}\n[data-v-0b12817c] .toolbar-btn--success.n-button:hover {\n  background: #059669;\n  box-shadow: 0 14px 28px -16px rgba(20, 184, 166, 0.8);\n}\n[data-v-0b12817c] .footer-btn--cancel.n-button {\n  color: #334155;\n  background: #e2e8f0;\n}\n[data-v-0b12817c] .footer-btn--cancel.n-button:hover {\n  background: #cbd5e1;\n}\n[data-v-0b12817c] .footer-btn--primary.n-button {\n  color: #fff;\n  background: #059669;\n  box-shadow: 0 14px 24px -18px rgba(5, 150, 105, 0.9);\n}\n[data-v-0b12817c] .footer-btn--primary.n-button:hover {\n  background: #047857;\n  box-shadow: 0 20px 30px -18px rgba(5, 150, 105, 0.9);\n}\n[data-v-0b12817c] .footer-btn--primary.n-button.n-button--disabled {\n  color: #d1fae5;\n  background: #9ca3af;\n  box-shadow: none;\n}\n[data-v-0b12817c] .dark .shortcut-panel__summary {\n  color: #f9fafb;\n}\n[data-v-0b12817c] .dark .shortcut-panel__tips {\n  color: #9ca3af;\n}\n[data-v-0b12817c] .dark .shortcut-modal .n-card {\n  background: #0f172a;\n}\n[data-v-0b12817c] .dark .shortcut-modal .n-card-header {\n  border-bottom-color: #334155;\n}\n[data-v-0b12817c] .dark .shortcut-modal .n-card-header .n-card-header__main {\n  color: #f8fafc;\n}\n[data-v-0b12817c] .dark .shortcut-modal .n-card__content {\n  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.9));\n}\n[data-v-0b12817c] .dark .shortcut-panel__header {\n  border-color: #334155;\n  background: linear-gradient(160deg, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.88)), radial-gradient(circle at top right, rgba(16, 185, 129, 0.24), transparent 45%);\n}\n[data-v-0b12817c] .dark .shortcut-panel__content {\n  border-color: #334155;\n  background: #0b1221;\n}\n[data-v-0b12817c] .dark .shortcut-section {\n  border-color: #334155;\n  background: linear-gradient(180deg, #111827, #0f172a);\n}\n[data-v-0b12817c] .dark .shortcut-section__title {\n  color: #cbd5e1;\n  background: linear-gradient(90deg, rgba(51, 65, 85, 0.75), rgba(30, 41, 59, 0.68));\n  border-bottom-color: #334155;\n}\n[data-v-0b12817c] .dark .shortcut-row {\n  border-bottom-color: #334155;\n}\n[data-v-0b12817c] .dark .shortcut-row--error {\n  background: linear-gradient(90deg, rgba(127, 29, 29, 0.28), rgba(154, 52, 18, 0.2));\n}\n[data-v-0b12817c] .dark .shortcut-row__name,[data-v-0b12817c] .dark .shortcut-recorder__value {\n  color: #f9fafb;\n}\n[data-v-0b12817c] .dark .shortcut-row__desc,[data-v-0b12817c] .dark .shortcut-recorder__hint {\n  color: #9ca3af;\n}\n[data-v-0b12817c] .dark .shortcut-recorder {\n  border-color: #4b5563;\n  background: #0f172a;\n  box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.07);\n}\n[data-v-0b12817c] .dark .shortcut-panel__footer {\n  border-top-color: #334155;\n}\n[data-v-0b12817c] .dark .toolbar-btn--neutral.n-button {\n  color: #e2e8f0;\n  background: #334155;\n}\n[data-v-0b12817c] .dark .toolbar-btn--neutral.n-button:hover {\n  background: #475569;\n}\n[data-v-0b12817c] .dark .footer-btn--cancel.n-button {\n  color: #e2e8f0;\n  background: #334155;\n}\n[data-v-0b12817c] .dark .footer-btn--cancel.n-button:hover {\n  background: #475569;\n}\n[data-v-0b12817c] .dark .shortcut-count-tag {\n  background: rgba(16, 185, 129, 0.14);\n  color: #6ee7b7;\n  border-color: rgba(16, 185, 129, 0.36);\n}\n[data-v-0b12817c] .dark .footer-btn--primary.n-button.n-button--disabled {\n  color: #cbd5e1;\n  background: #475569;\n}\n@media (max-width: 900px) {\n.shortcut-panel[data-v-0b12817c] {\n    height: min(76vh, 690px);\n    max-height: calc(100vh - 128px);\n}\n.shortcut-panel__toolbar[data-v-0b12817c] {\n    flex-direction: column;\n    align-items: flex-start;\n}\n.shortcut-panel__tips[data-v-0b12817c] {\n    font-size: 11px;\n}\n.shortcut-row[data-v-0b12817c] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n}\n.shortcut-row__status[data-v-0b12817c] {\n    justify-content: flex-start;\n}\n}\n@media (max-height: 760px) {\n.shortcut-panel[data-v-0b12817c] {\n    height: calc(100vh - 120px);\n    max-height: calc(100vh - 120px);\n}\n}.cookie-input[data-v-00efaaa2] .n-input__textarea {\n  font-family: \"SF Mono\", \"Monaco\", \"Inconsolata\", \"Fira Code\", \"Fira Mono\", \"Droid Sans Mono\", \"Consolas\", monospace;\n  line-height: 1.4;\n}\n.animate-fade-in-up[data-v-58c65ac0] {\n  animation: fadeInUp-58c65ac0 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeInUp-58c65ac0 {\nfrom {\n    opacity: 0;\n    transform: translateY(10px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n\n.fade-enter-active[data-v-9e3e49d4], .fade-leave-active[data-v-9e3e49d4] {\n  transition: opacity 0.3s ease;\n}\n.fade-enter-from[data-v-9e3e49d4], .fade-leave-to[data-v-9e3e49d4] {\n  opacity: 0;\n}\n.slide-up-enter-active[data-v-9e3e49d4], .slide-up-leave-active[data-v-9e3e49d4] {\n  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.slide-up-enter-from[data-v-9e3e49d4], .slide-up-leave-to[data-v-9e3e49d4] {\n  transform: translateY(100%);\n}\n.animate-scale-in[data-v-9e3e49d4] {\n  animation: scale-in-9e3e49d4 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n@keyframes scale-in-9e3e49d4 {\nfrom { transform: scale(0.9); opacity: 0;\n}\nto { transform: scale(1); opacity: 1;\n}\n}\n\n.fade-enter-active[data-v-019ad570],\n.fade-leave-active[data-v-019ad570] {\n  transition: opacity 0.3s ease;\n}\n.fade-enter-from[data-v-019ad570],\n.fade-leave-to[data-v-019ad570] {\n  opacity: 0;\n}\n\n/* PC Scale Fade Transition */\n.scale-fade-enter-active[data-v-019ad570],\n.scale-fade-leave-active[data-v-019ad570] {\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.scale-fade-enter-from[data-v-019ad570],\n.scale-fade-leave-to[data-v-019ad570] {\n  opacity: 0;\n  transform: scale(0.95);\n}\n\n/* Mobile Slide Up Transition */\n.slide-up-enter-active[data-v-019ad570],\n.slide-up-leave-active[data-v-019ad570] {\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.slide-up-enter-from[data-v-019ad570],\n.slide-up-leave-to[data-v-019ad570] {\n  transform: translateY(100%);\n}\n.pb-safe[data-v-019ad570] {\n  padding-bottom: env(safe-area-inset-bottom);\n}\n\n.fade-enter-active[data-v-5f2fe7a4],\n.fade-leave-active[data-v-5f2fe7a4] {\n  transition: opacity 0.2s ease;\n}\n.fade-enter-from[data-v-5f2fe7a4],\n.fade-leave-to[data-v-5f2fe7a4] {\n  opacity: 0;\n}\n\n.scrollbar-hide[data-v-73f3650c] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.scrollbar-hide[data-v-73f3650c]::-webkit-scrollbar {\n  display: none;\n}\n[data-v-73f3650c] .n-select .n-base-selection {\n  border-radius: 10px;\n}\n.animate-fade-in[data-v-73f3650c] {\n  animation: fadeIn-73f3650c 0.3s ease-out;\n}\n@keyframes fadeIn-73f3650c {\nfrom {\n    opacity: 0;\n    transform: translateY(10px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);

        // injection.collection {
        //   key1: [insta, instb]
        //   key2: [instc]
        // }
        function useInjectionInstanceCollection(injectionName, collectionKey, registerKeyRef) {
          var _a;
          const injection = inject(injectionName, null);
          if (injection === null) return;
          const vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
          watch(registerKeyRef, registerInstance);
          registerInstance(registerKeyRef.value);
          onBeforeUnmount(() => {
            registerInstance(undefined, registerKeyRef.value);
          });
          function registerInstance(key, oldKey) {
            if (!injection) return;
            const collection = injection[collectionKey];
            if (oldKey !== undefined) removeInstance(collection, oldKey);
            if (key !== undefined) addInstance(collection, key);
          }
          function removeInstance(collection, key) {
            if (!collection[key]) collection[key] = [];
            collection[key].splice(collection[key].findIndex(instance => instance === vm), 1);
          }
          function addInstance(collection, key) {
            if (!collection[key]) collection[key] = [];
            if (!~collection[key].findIndex(instance => instance === vm)) {
              collection[key].push(vm);
            }
          }
        }

        /* eslint-disable @typescript-eslint/strict-boolean-expressions */
        const hiddenAttr = 'v-hidden';
        const style$a = c('[v-hidden]', {
          display: 'none!important'
        });
        const VOverflow = defineComponent({
          name: 'Overflow',
          props: {
            getCounter: Function,
            getTail: Function,
            updateCounter: Function,
            onUpdateCount: Function,
            onUpdateOverflow: Function
          },
          setup(props, {
            slots
          }) {
            const selfRef = ref(null);
            const counterRef = ref(null);
            function deriveCounter(options) {
              const {
                value: self
              } = selfRef;
              const {
                getCounter,
                getTail
              } = props;
              let counter;
              if (getCounter !== undefined) counter = getCounter();else {
                counter = counterRef.value;
              }
              if (!self || !counter) return;
              if (counter.hasAttribute(hiddenAttr)) {
                counter.removeAttribute(hiddenAttr);
              }
              const {
                children
              } = self;
              if (options.showAllItemsBeforeCalculate) {
                for (const child of children) {
                  if (child.hasAttribute(hiddenAttr)) {
                    child.removeAttribute(hiddenAttr);
                  }
                }
              }
              const containerWidth = self.offsetWidth;
              const childWidths = [];
              const tail = slots.tail ? getTail === null || getTail === void 0 ? void 0 : getTail() : null;
              let childWidthSum = tail ? tail.offsetWidth : 0;
              let overflow = false;
              const len = self.children.length - (slots.tail ? 1 : 0);
              for (let i = 0; i < len - 1; ++i) {
                if (i < 0) continue;
                const child = children[i];
                if (overflow) {
                  if (!child.hasAttribute(hiddenAttr)) {
                    child.setAttribute(hiddenAttr, '');
                  }
                  continue;
                } else if (child.hasAttribute(hiddenAttr)) {
                  child.removeAttribute(hiddenAttr);
                }
                const childWidth = child.offsetWidth;
                childWidthSum += childWidth;
                childWidths[i] = childWidth;
                if (childWidthSum > containerWidth) {
                  const {
                    updateCounter
                  } = props;
                  for (let j = i; j >= 0; --j) {
                    const restCount = len - 1 - j;
                    if (updateCounter !== undefined) {
                      updateCounter(restCount);
                    } else {
                      counter.textContent = `${restCount}`;
                    }
                    const counterWidth = counter.offsetWidth;
                    childWidthSum -= childWidths[j];
                    if (childWidthSum + counterWidth <= containerWidth || j === 0) {
                      overflow = true;
                      i = j - 1;
                      if (tail) {
                        // tail too long or 1st element too long
                        // we only consider tail now
                        if (i === -1) {
                          tail.style.maxWidth = `${containerWidth - counterWidth}px`;
                          tail.style.boxSizing = 'border-box';
                        } else {
                          tail.style.maxWidth = '';
                        }
                      }
                      const {
                        onUpdateCount
                      } = props;
                      if (onUpdateCount) onUpdateCount(restCount);
                      break;
                    }
                  }
                }
              }
              const {
                onUpdateOverflow
              } = props;
              if (!overflow) {
                if (onUpdateOverflow !== undefined) {
                  onUpdateOverflow(false);
                }
                counter.setAttribute(hiddenAttr, '');
              } else {
                if (onUpdateOverflow !== undefined) {
                  onUpdateOverflow(true);
                }
              }
            }
            const ssrAdapter = useSsrAdapter();
            style$a.mount({
              id: 'vueuc/overflow',
              head: true,
              anchorMetaName: cssrAnchorMetaName,
              ssr: ssrAdapter
            });
            onMounted(() => deriveCounter({
              showAllItemsBeforeCalculate: false
            }));
            // besides onMounted, other case should be manually triggered, or we shoud watch items
            return {
              selfRef,
              counterRef,
              sync: deriveCounter
            };
          },
          render() {
            const {
              $slots
            } = this;
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            nextTick(() => this.sync({
              showAllItemsBeforeCalculate: false
            }));
            // It shouldn't have border
            return h('div', {
              class: 'v-overflow',
              ref: 'selfRef'
            }, [renderSlot($slots, 'default'),
            // $slots.counter should only has 1 element
            $slots.counter ? $slots.counter() : h('span', {
              style: {
                display: 'inline-block'
              },
              ref: 'counterRef'
            }),
            // $slots.tail should only has 1 element
            $slots.tail ? $slots.tail() : null]);
          }
        });
        function useOnResize(elRef, onResize) {
          // it needn't be reactive since it's for internal usage
          if (onResize) {
            onMounted(() => {
              const {
                value: el
              } = elRef;
              if (el) {
                resizeObserverManager.registerHandler(el, onResize);
              }
            });
            // avoid memory leak
            watch(elRef, (_, oldEl) => {
              if (oldEl) {
                resizeObserverManager.unregisterHandler(oldEl);
              }
            }, {
              deep: false
            });
            onBeforeUnmount(() => {
              const {
                value: el
              } = elRef;
              if (el) {
                resizeObserverManager.unregisterHandler(el);
              }
            });
          }
        }
        function mergeEventHandlers(handlers) {
          const filteredHandlers = handlers.filter(handler => handler !== undefined);
          if (filteredHandlers.length === 0) return undefined;
          if (filteredHandlers.length === 1) return filteredHandlers[0];
          return e => {
            handlers.forEach(handler => {
              if (handler) {
                handler(e);
              }
            });
          };
        }
        const FinishedIcon = defineComponent({
          name: 'Checkmark',
          render() {
            return h("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16"
            }, h("g", {
              fill: "none"
            }, h("path", {
              d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
              fill: "currentColor"
            })));
          }
        });
        const FocusDetector = defineComponent({
          props: {
            onFocus: Function,
            onBlur: Function
          },
          setup(props) {
            return () => h("div", {
              style: "width: 0; height: 0",
              tabindex: 0,
              onFocus: props.onFocus,
              onBlur: props.onBlur
            });
          }
        });
        const NSelectGroupHeader = defineComponent({
          name: 'NBaseSelectGroupHeader',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            tmNode: {
              type: Object,
              required: true
            }
          },
          setup() {
            const {
              renderLabelRef,
              renderOptionRef,
              labelFieldRef,
              nodePropsRef
            } = inject(internalSelectionMenuInjectionKey);
            return {
              labelField: labelFieldRef,
              nodeProps: nodePropsRef,
              renderLabel: renderLabelRef,
              renderOption: renderOptionRef
            };
          },
          render() {
            const {
              clsPrefix,
              renderLabel,
              renderOption,
              nodeProps,
              tmNode: {
                rawNode
              }
            } = this;
            const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
            const children = renderLabel ? renderLabel(rawNode, false) : render(rawNode[this.labelField], rawNode, false);
            const node = h("div", Object.assign({}, attrs, {
              class: [`${clsPrefix}-base-select-group-header`, attrs === null || attrs === void 0 ? void 0 : attrs.class]
            }), children);
            return rawNode.render ? rawNode.render({
              node,
              option: rawNode
            }) : renderOption ? renderOption({
              node,
              option: rawNode,
              selected: false
            }) : node;
          }
        });
        function renderCheckMark(show, clsPrefix) {
          return h(Transition, {
            name: "fade-in-scale-up-transition"
          }, {
            default: () => show ? h(NBaseIcon, {
              clsPrefix: clsPrefix,
              class: `${clsPrefix}-base-select-option__check`
            }, {
              default: () => h(FinishedIcon)
            }) : null
          });
        }
        const NSelectOption = defineComponent({
          name: 'NBaseSelectOption',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            tmNode: {
              type: Object,
              required: true
            }
          },
          setup(props) {
            const {
              valueRef,
              pendingTmNodeRef,
              multipleRef,
              valueSetRef,
              renderLabelRef,
              renderOptionRef,
              labelFieldRef,
              valueFieldRef,
              showCheckmarkRef,
              nodePropsRef,
              handleOptionClick,
              handleOptionMouseEnter
            } = inject(internalSelectionMenuInjectionKey);
            const isPendingRef = useMemo(() => {
              const {
                value: pendingTmNode
              } = pendingTmNodeRef;
              if (!pendingTmNode) return false;
              return props.tmNode.key === pendingTmNode.key;
            });
            function handleClick(e) {
              const {
                tmNode
              } = props;
              if (tmNode.disabled) return;
              handleOptionClick(e, tmNode);
            }
            function handleMouseEnter(e) {
              const {
                tmNode
              } = props;
              if (tmNode.disabled) return;
              handleOptionMouseEnter(e, tmNode);
            }
            function handleMouseMove(e) {
              const {
                tmNode
              } = props;
              const {
                value: isPending
              } = isPendingRef;
              if (tmNode.disabled || isPending) return;
              handleOptionMouseEnter(e, tmNode);
            }
            return {
              multiple: multipleRef,
              isGrouped: useMemo(() => {
                const {
                  tmNode
                } = props;
                const {
                  parent
                } = tmNode;
                return parent && parent.rawNode.type === 'group';
              }),
              showCheckmark: showCheckmarkRef,
              nodeProps: nodePropsRef,
              isPending: isPendingRef,
              isSelected: useMemo(() => {
                const {
                  value
                } = valueRef;
                const {
                  value: multiple
                } = multipleRef;
                if (value === null) return false;
                const optionValue = props.tmNode.rawNode[valueFieldRef.value];
                if (multiple) {
                  const {
                    value: valueSet
                  } = valueSetRef;
                  return valueSet.has(optionValue);
                } else {
                  return value === optionValue;
                }
              }),
              labelField: labelFieldRef,
              renderLabel: renderLabelRef,
              renderOption: renderOptionRef,
              handleMouseMove,
              handleMouseEnter,
              handleClick
            };
          },
          render() {
            const {
              clsPrefix,
              tmNode: {
                rawNode
              },
              isSelected,
              isPending,
              isGrouped,
              showCheckmark,
              nodeProps,
              renderOption,
              renderLabel,
              handleClick,
              handleMouseEnter,
              handleMouseMove
            } = this;
            const checkmark = renderCheckMark(isSelected, clsPrefix);
            const children = renderLabel ? [renderLabel(rawNode, isSelected), showCheckmark && checkmark] : [render(rawNode[this.labelField], rawNode, isSelected), showCheckmark && checkmark];
            const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
            const node = h("div", Object.assign({}, attrs, {
              class: [`${clsPrefix}-base-select-option`, rawNode.class, attrs === null || attrs === void 0 ? void 0 : attrs.class, {
                [`${clsPrefix}-base-select-option--disabled`]: rawNode.disabled,
                [`${clsPrefix}-base-select-option--selected`]: isSelected,
                [`${clsPrefix}-base-select-option--grouped`]: isGrouped,
                [`${clsPrefix}-base-select-option--pending`]: isPending,
                [`${clsPrefix}-base-select-option--show-checkmark`]: showCheckmark
              }],
              style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || '', rawNode.style || ''],
              onClick: mergeEventHandlers([handleClick, attrs === null || attrs === void 0 ? void 0 : attrs.onClick]),
              onMouseenter: mergeEventHandlers([handleMouseEnter, attrs === null || attrs === void 0 ? void 0 : attrs.onMouseenter]),
              onMousemove: mergeEventHandlers([handleMouseMove, attrs === null || attrs === void 0 ? void 0 : attrs.onMousemove])
            }), h("div", {
              class: `${clsPrefix}-base-select-option__content`
            }, children));
            return rawNode.render ? rawNode.render({
              node,
              option: rawNode,
              selected: isSelected
            }) : renderOption ? renderOption({
              node,
              option: rawNode,
              selected: isSelected
            }) : node;
          }
        });

        // --n-loading-color
        // --n-loading-size
        // --n-option-padding-right
        const style$9 = cB('base-select-menu', `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB('scrollbar', `
 max-height: var(--n-height);
 `), cB('virtual-list', `
 max-height: var(--n-height);
 `), cB('base-select-option', `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE('content', `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB('base-select-group-header', `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB('base-select-menu-option-wrapper', `
 position: relative;
 width: 100%;
 `), cE('loading, empty', `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE('loading', `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE('header', `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cE('action', `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB('base-select-group-header', `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB('base-select-option', `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM('show-checkmark', `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1('&::before', `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1('&:active', `
 color: var(--n-option-text-color-pressed);
 `), cM('grouped', `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM('pending', [c$1('&::before', `
 background-color: var(--n-option-color-pending);
 `)]), cM('selected', `
 color: var(--n-option-text-color-active);
 `, [c$1('&::before', `
 background-color: var(--n-option-color-active);
 `), cM('pending', [c$1('&::before', `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM('disabled', `
 cursor: not-allowed;
 `, [cNotM('selected', `
 color: var(--n-option-text-color-disabled);
 `), cM('selected', `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE('check', `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
          enterScale: '0.5'
        })])])]);
        const NInternalSelectMenu = defineComponent({
          name: 'InternalSelectMenu',
          props: Object.assign(Object.assign({}, useTheme.props), {
            clsPrefix: {
              type: String,
              required: true
            },
            scrollable: {
              type: Boolean,
              default: true
            },
            treeMate: {
              type: Object,
              required: true
            },
            multiple: Boolean,
            size: {
              type: String,
              default: 'medium'
            },
            value: {
              type: [String, Number, Array],
              default: null
            },
            autoPending: Boolean,
            virtualScroll: {
              type: Boolean,
              default: true
            },
            // show is used to toggle pending state initialization
            show: {
              type: Boolean,
              default: true
            },
            labelField: {
              type: String,
              default: 'label'
            },
            valueField: {
              type: String,
              default: 'value'
            },
            loading: Boolean,
            focusable: Boolean,
            renderLabel: Function,
            renderOption: Function,
            nodeProps: Function,
            showCheckmark: {
              type: Boolean,
              default: true
            },
            onMousedown: Function,
            onScroll: Function,
            onFocus: Function,
            onBlur: Function,
            onKeyup: Function,
            onKeydown: Function,
            onTabOut: Function,
            onMouseenter: Function,
            onMouseleave: Function,
            onResize: Function,
            resetMenuOnOptionsChange: {
              type: Boolean,
              default: true
            },
            inlineThemeDisabled: Boolean,
            // deprecated
            onToggle: Function
          }),
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedRtlRef
            } = useConfig(props);
            const rtlEnabledRef = useRtl('InternalSelectMenu', mergedRtlRef, mergedClsPrefixRef);
            const themeRef = useTheme('InternalSelectMenu', '-internal-select-menu', style$9, internalSelectMenuLight, props, toRef(props, 'clsPrefix'));
            const selfRef = ref(null);
            const virtualListRef = ref(null);
            const scrollbarRef = ref(null);
            const flattenedNodesRef = computed(() => props.treeMate.getFlattenedNodes());
            const fIndexGetterRef = computed(() => createIndexGetter(flattenedNodesRef.value));
            const pendingNodeRef = ref(null);
            function initPendingNode() {
              const {
                treeMate
              } = props;
              let defaultPendingNode = null;
              const {
                value
              } = props;
              if (value === null) {
                defaultPendingNode = treeMate.getFirstAvailableNode();
              } else {
                if (props.multiple) {
                  defaultPendingNode = treeMate.getNode((value || [])[(value || []).length - 1]);
                } else {
                  defaultPendingNode = treeMate.getNode(value);
                }
                if (!defaultPendingNode || defaultPendingNode.disabled) {
                  defaultPendingNode = treeMate.getFirstAvailableNode();
                }
              }
              if (defaultPendingNode) {
                setPendingTmNode(defaultPendingNode);
              } else {
                setPendingTmNode(null);
              }
            }
            function clearPendingNodeIfInvalid() {
              const {
                value: pendingNode
              } = pendingNodeRef;
              if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
                pendingNodeRef.value = null;
              }
            }
            let initPendingNodeWatchStopHandle;
            watch(() => props.show, show => {
              if (show) {
                initPendingNodeWatchStopHandle = watch(() => props.treeMate, () => {
                  if (props.resetMenuOnOptionsChange) {
                    if (props.autoPending) {
                      initPendingNode();
                    } else {
                      clearPendingNodeIfInvalid();
                    }
                    void nextTick(scrollToPendingNode);
                  } else {
                    clearPendingNodeIfInvalid();
                  }
                }, {
                  immediate: true
                });
              } else {
                initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
              }
            }, {
              immediate: true
            });
            onBeforeUnmount(() => {
              initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
            });
            const itemSizeRef = computed(() => {
              return depx(themeRef.value.self[createKey('optionHeight', props.size)]);
            });
            const paddingRef = computed(() => {
              return getMargin(themeRef.value.self[createKey('padding', props.size)]);
            });
            const valueSetRef = computed(() => {
              if (props.multiple && Array.isArray(props.value)) {
                return new Set(props.value);
              }
              return new Set();
            });
            const emptyRef = computed(() => {
              const tmNodes = flattenedNodesRef.value;
              return tmNodes && tmNodes.length === 0;
            });
            function doToggle(tmNode) {
              const {
                onToggle
              } = props;
              if (onToggle) onToggle(tmNode);
            }
            function doScroll(e) {
              const {
                onScroll
              } = props;
              if (onScroll) onScroll(e);
            }
            // required, scroller sync need to be triggered manually
            function handleVirtualListScroll(e) {
              var _a;
              (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
              doScroll(e);
            }
            function handleVirtualListResize() {
              var _a;
              (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
            }
            function getPendingTmNode() {
              const {
                value: pendingTmNode
              } = pendingNodeRef;
              if (pendingTmNode) return pendingTmNode;
              return null;
            }
            function handleOptionMouseEnter(e, tmNode) {
              if (tmNode.disabled) return;
              setPendingTmNode(tmNode, false);
            }
            function handleOptionClick(e, tmNode) {
              if (tmNode.disabled) return;
              doToggle(tmNode);
            }
            // keyboard related methods
            function handleKeyUp(e) {
              var _a;
              if (happensIn(e, 'action')) return;
              (_a = props.onKeyup) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
            function handleKeyDown(e) {
              var _a;
              if (happensIn(e, 'action')) return;
              (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
            function handleMouseDown(e) {
              var _a;
              (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
              if (props.focusable) return;
              e.preventDefault();
            }
            function next() {
              const {
                value: pendingTmNode
              } = pendingNodeRef;
              if (pendingTmNode) {
                setPendingTmNode(pendingTmNode.getNext({
                  loop: true
                }), true);
              }
            }
            function prev() {
              const {
                value: pendingTmNode
              } = pendingNodeRef;
              if (pendingTmNode) {
                setPendingTmNode(pendingTmNode.getPrev({
                  loop: true
                }), true);
              }
            }
            function setPendingTmNode(tmNode, doScroll = false) {
              pendingNodeRef.value = tmNode;
              if (doScroll) scrollToPendingNode();
            }
            function scrollToPendingNode() {
              var _a, _b;
              const tmNode = pendingNodeRef.value;
              if (!tmNode) return;
              const fIndex = fIndexGetterRef.value(tmNode.key);
              if (fIndex === null) return;
              if (props.virtualScroll) {
                (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({
                  index: fIndex
                });
              } else {
                (_b = scrollbarRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
                  index: fIndex,
                  elSize: itemSizeRef.value
                });
              }
            }
            function handleFocusin(e) {
              var _a, _b;
              if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
                (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props, e);
              }
            }
            function handleFocusout(e) {
              var _a, _b;
              if (!((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
                (_b = props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
              }
            }
            provide(internalSelectionMenuInjectionKey, {
              handleOptionMouseEnter,
              handleOptionClick,
              valueSetRef,
              pendingTmNodeRef: pendingNodeRef,
              nodePropsRef: toRef(props, 'nodeProps'),
              showCheckmarkRef: toRef(props, 'showCheckmark'),
              multipleRef: toRef(props, 'multiple'),
              valueRef: toRef(props, 'value'),
              renderLabelRef: toRef(props, 'renderLabel'),
              renderOptionRef: toRef(props, 'renderOption'),
              labelFieldRef: toRef(props, 'labelField'),
              valueFieldRef: toRef(props, 'valueField')
            });
            provide(internalSelectionMenuBodyInjectionKey, selfRef);
            onMounted(() => {
              const {
                value
              } = scrollbarRef;
              if (value) value.sync();
            });
            const cssVarsRef = computed(() => {
              const {
                size
              } = props;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  height,
                  borderRadius,
                  color,
                  groupHeaderTextColor,
                  actionDividerColor,
                  optionTextColorPressed,
                  optionTextColor,
                  optionTextColorDisabled,
                  optionTextColorActive,
                  optionOpacityDisabled,
                  optionCheckColor,
                  actionTextColor,
                  optionColorPending,
                  optionColorActive,
                  loadingColor,
                  loadingSize,
                  optionColorActivePending,
                  [createKey('optionFontSize', size)]: fontSize,
                  [createKey('optionHeight', size)]: optionHeight,
                  [createKey('optionPadding', size)]: optionPadding
                }
              } = themeRef.value;
              return {
                '--n-height': height,
                '--n-action-divider-color': actionDividerColor,
                '--n-action-text-color': actionTextColor,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-color': color,
                '--n-option-font-size': fontSize,
                '--n-group-header-text-color': groupHeaderTextColor,
                '--n-option-check-color': optionCheckColor,
                '--n-option-color-pending': optionColorPending,
                '--n-option-color-active': optionColorActive,
                '--n-option-color-active-pending': optionColorActivePending,
                '--n-option-height': optionHeight,
                '--n-option-opacity-disabled': optionOpacityDisabled,
                '--n-option-text-color': optionTextColor,
                '--n-option-text-color-active': optionTextColorActive,
                '--n-option-text-color-disabled': optionTextColorDisabled,
                '--n-option-text-color-pressed': optionTextColorPressed,
                '--n-option-padding': optionPadding,
                '--n-option-padding-left': getMargin(optionPadding, 'left'),
                '--n-option-padding-right': getMargin(optionPadding, 'right'),
                '--n-loading-color': loadingColor,
                '--n-loading-size': loadingSize
              };
            });
            const {
              inlineThemeDisabled
            } = props;
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('internal-select-menu', computed(() => props.size[0]), cssVarsRef, props) : undefined;
            const exposedProps = {
              selfRef,
              next,
              prev,
              getPendingTmNode
            };
            useOnResize(selfRef, props.onResize);
            return Object.assign({
              mergedTheme: themeRef,
              mergedClsPrefix: mergedClsPrefixRef,
              rtlEnabled: rtlEnabledRef,
              virtualListRef,
              scrollbarRef,
              itemSize: itemSizeRef,
              padding: paddingRef,
              flattenedNodes: flattenedNodesRef,
              empty: emptyRef,
              virtualListContainer() {
                const {
                  value
                } = virtualListRef;
                return value === null || value === void 0 ? void 0 : value.listElRef;
              },
              virtualListContent() {
                const {
                  value
                } = virtualListRef;
                return value === null || value === void 0 ? void 0 : value.itemsElRef;
              },
              doScroll,
              handleFocusin,
              handleFocusout,
              handleKeyUp,
              handleKeyDown,
              handleMouseDown,
              handleVirtualListResize,
              handleVirtualListScroll,
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            }, exposedProps);
          },
          render() {
            const {
              $slots,
              virtualScroll,
              clsPrefix,
              mergedTheme,
              themeClass,
              onRender
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return h("div", {
              ref: "selfRef",
              tabindex: this.focusable ? 0 : -1,
              class: [`${clsPrefix}-base-select-menu`, this.rtlEnabled && `${clsPrefix}-base-select-menu--rtl`, themeClass, this.multiple && `${clsPrefix}-base-select-menu--multiple`],
              style: this.cssVars,
              onFocusin: this.handleFocusin,
              onFocusout: this.handleFocusout,
              onKeyup: this.handleKeyUp,
              onKeydown: this.handleKeyDown,
              onMousedown: this.handleMouseDown,
              onMouseenter: this.onMouseenter,
              onMouseleave: this.onMouseleave
            }, resolveWrappedSlot($slots.header, children => children && h("div", {
              class: `${clsPrefix}-base-select-menu__header`,
              "data-header": true,
              key: "header"
            }, children)), this.loading ? h("div", {
              class: `${clsPrefix}-base-select-menu__loading`
            }, h(NBaseLoading, {
              clsPrefix: clsPrefix,
              strokeWidth: 20
            })) : !this.empty ? h(Scrollbar, {
              ref: "scrollbarRef",
              theme: mergedTheme.peers.Scrollbar,
              themeOverrides: mergedTheme.peerOverrides.Scrollbar,
              scrollable: this.scrollable,
              container: virtualScroll ? this.virtualListContainer : undefined,
              content: virtualScroll ? this.virtualListContent : undefined,
              onScroll: virtualScroll ? undefined : this.doScroll
            }, {
              default: () => {
                return virtualScroll ? h(VVirtualList, {
                  ref: "virtualListRef",
                  class: `${clsPrefix}-virtual-list`,
                  items: this.flattenedNodes,
                  itemSize: this.itemSize,
                  showScrollbar: false,
                  paddingTop: this.padding.top,
                  paddingBottom: this.padding.bottom,
                  onResize: this.handleVirtualListResize,
                  onScroll: this.handleVirtualListScroll,
                  itemResizable: true
                }, {
                  default: ({
                    item: tmNode
                  }) => {
                    return tmNode.isGroup ? h(NSelectGroupHeader, {
                      key: tmNode.key,
                      clsPrefix: clsPrefix,
                      tmNode: tmNode
                    }) : tmNode.ignored ? null : h(NSelectOption, {
                      clsPrefix: clsPrefix,
                      key: tmNode.key,
                      tmNode: tmNode
                    });
                  }
                }) : h("div", {
                  class: `${clsPrefix}-base-select-menu-option-wrapper`,
                  style: {
                    paddingTop: this.padding.top,
                    paddingBottom: this.padding.bottom
                  }
                }, this.flattenedNodes.map(tmNode => tmNode.isGroup ? h(NSelectGroupHeader, {
                  key: tmNode.key,
                  clsPrefix: clsPrefix,
                  tmNode: tmNode
                }) : h(NSelectOption, {
                  clsPrefix: clsPrefix,
                  key: tmNode.key,
                  tmNode: tmNode
                })));
              }
            }) : h("div", {
              class: `${clsPrefix}-base-select-menu__empty`,
              "data-empty": true
            }, resolveSlot($slots.empty, () => [h(__unplugin_components_3$1, {
              theme: mergedTheme.peers.Empty,
              themeOverrides: mergedTheme.peerOverrides.Empty,
              size: this.size
            })])), resolveWrappedSlot($slots.action, children => children && [h("div", {
              class: `${clsPrefix}-base-select-menu__action`,
              "data-action": true,
              key: "action"
            }, children), h(FocusDetector, {
              onFocus: this.onTabOut,
              key: "focus-detector"
            })]));
          }
        });

        // vars:
        // --n-bezier
        // --n-border
        // --n-border-active
        // --n-border-focus
        // --n-border-hover
        // --n-border-radius
        // --n-box-shadow-active
        // --n-box-shadow-focus
        // --n-box-shadow-hover
        // --n-caret-color
        // --n-color
        // --n-color-active
        // --n-color-disabled
        // --n-font-size
        // --n-height
        // --n-padding-single
        // --n-padding-multiple
        // --n-placeholder-color
        // --n-placeholder-color-disabled
        // --n-text-color
        // --n-text-color-disabled
        // --n-arrow-color
        // --n-arrow-size
        // --n-loading-color
        // --n-font-weight
        // ...clear vars
        // ...form item vars
        const style$8 = c$1([cB('base-selection', `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cB('base-loading', `
 color: var(--n-loading-color);
 `), cB('base-selection-tags', 'min-height: var(--n-height);'), cE('border, state-border', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE('state-border', `
 z-index: 1;
 border-color: #0000;
 `), cB('base-suffix', `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [cE('arrow', `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), cB('base-selection-overlay', `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [cE('wrapper', `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cB('base-selection-placeholder', `
 color: var(--n-placeholder-color);
 `, [cE('inner', `
 max-width: 100%;
 overflow: hidden;
 `)]), cB('base-selection-tags', `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB('base-selection-label', `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [cB('base-selection-input', `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [cE('content', `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), cE('render-label', `
 color: var(--n-text-color);
 `)]), cNotM('disabled', [c$1('&:hover', [cE('state-border', `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), cM('focus', [cE('state-border', `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), cM('active', [cE('state-border', `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), cB('base-selection-label', 'background-color: var(--n-color-active);'), cB('base-selection-tags', 'background-color: var(--n-color-active);')])]), cM('disabled', 'cursor: not-allowed;', [cE('arrow', `
 color: var(--n-arrow-color-disabled);
 `), cB('base-selection-label', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cB('base-selection-input', `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), cE('render-label', `
 color: var(--n-text-color-disabled);
 `)]), cB('base-selection-tags', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), cB('base-selection-placeholder', `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), cB('base-selection-input-tag', `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [cE('input', `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), cE('mirror', `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ['warning', 'error'].map(status => cM(`${status}-status`, [cE('state-border', `border: var(--n-border-${status});`), cNotM('disabled', [c$1('&:hover', [cE('state-border', `
 box-shadow: var(--n-box-shadow-hover-${status});
 border: var(--n-border-hover-${status});
 `)]), cM('active', [cE('state-border', `
 box-shadow: var(--n-box-shadow-active-${status});
 border: var(--n-border-active-${status});
 `), cB('base-selection-label', `background-color: var(--n-color-active-${status});`), cB('base-selection-tags', `background-color: var(--n-color-active-${status});`)]), cM('focus', [cE('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]), cB('base-selection-popover', `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), cB('base-selection-tag-wrapper', `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [c$1('&:last-child', 'padding-right: 0;'), cB('tag', `
 font-size: 14px;
 max-width: 100%;
 `, [cE('content', `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]);
        const NInternalSelection = defineComponent({
          name: 'InternalSelection',
          props: Object.assign(Object.assign({}, useTheme.props), {
            clsPrefix: {
              type: String,
              required: true
            },
            bordered: {
              type: Boolean,
              default: undefined
            },
            active: Boolean,
            pattern: {
              type: String,
              default: ''
            },
            placeholder: String,
            selectedOption: {
              type: Object,
              default: null
            },
            selectedOptions: {
              type: Array,
              default: null
            },
            labelField: {
              type: String,
              default: 'label'
            },
            valueField: {
              type: String,
              default: 'value'
            },
            multiple: Boolean,
            filterable: Boolean,
            clearable: Boolean,
            disabled: Boolean,
            size: {
              type: String,
              default: 'medium'
            },
            loading: Boolean,
            autofocus: Boolean,
            showArrow: {
              type: Boolean,
              default: true
            },
            inputProps: Object,
            focused: Boolean,
            renderTag: Function,
            onKeydown: Function,
            onClick: Function,
            onBlur: Function,
            onFocus: Function,
            onDeleteOption: Function,
            maxTagCount: [String, Number],
            ellipsisTagPopoverProps: Object,
            onClear: Function,
            onPatternInput: Function,
            onPatternFocus: Function,
            onPatternBlur: Function,
            renderLabel: Function,
            status: String,
            inlineThemeDisabled: Boolean,
            ignoreComposition: {
              type: Boolean,
              default: true
            },
            onResize: Function
          }),
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedRtlRef
            } = useConfig(props);
            const rtlEnabledRef = useRtl('InternalSelection', mergedRtlRef, mergedClsPrefixRef);
            const patternInputMirrorRef = ref(null);
            const patternInputRef = ref(null);
            const selfRef = ref(null);
            const multipleElRef = ref(null);
            const singleElRef = ref(null);
            const patternInputWrapperRef = ref(null);
            const counterRef = ref(null);
            const counterWrapperRef = ref(null);
            const overflowRef = ref(null);
            const inputTagElRef = ref(null);
            const showTagsPopoverRef = ref(false);
            const patternInputFocusedRef = ref(false);
            const hoverRef = ref(false);
            const themeRef = useTheme('InternalSelection', '-internal-selection', style$8, internalSelectionLight, props, toRef(props, 'clsPrefix'));
            const mergedClearableRef = computed(() => {
              return props.clearable && !props.disabled && (hoverRef.value || props.active);
            });
            const filterablePlaceholderRef = computed(() => {
              return props.selectedOption ? props.renderTag ? props.renderTag({
                option: props.selectedOption,
                handleClose: () => {}
              }) : props.renderLabel ? props.renderLabel(props.selectedOption, true) : render(props.selectedOption[props.labelField], props.selectedOption, true) : props.placeholder;
            });
            const labelRef = computed(() => {
              const option = props.selectedOption;
              if (!option) return undefined;
              return option[props.labelField];
            });
            const selectedRef = computed(() => {
              if (props.multiple) {
                return !!(Array.isArray(props.selectedOptions) && props.selectedOptions.length);
              } else {
                return props.selectedOption !== null;
              }
            });
            function syncMirrorWidth() {
              var _a;
              const {
                value: patternInputMirrorEl
              } = patternInputMirrorRef;
              if (patternInputMirrorEl) {
                const {
                  value: patternInputEl
                } = patternInputRef;
                if (patternInputEl) {
                  patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
                  if (props.maxTagCount !== 'responsive') {
                    (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync({
                      showAllItemsBeforeCalculate: false
                    });
                  }
                }
              }
            }
            function hideInputTag() {
              const {
                value: inputTagEl
              } = inputTagElRef;
              if (inputTagEl) inputTagEl.style.display = 'none';
            }
            function showInputTag() {
              const {
                value: inputTagEl
              } = inputTagElRef;
              if (inputTagEl) inputTagEl.style.display = 'inline-block';
            }
            watch(toRef(props, 'active'), value => {
              if (!value) hideInputTag();
            });
            watch(toRef(props, 'pattern'), () => {
              if (props.multiple) {
                void nextTick(syncMirrorWidth);
              }
            });
            function doFocus(e) {
              const {
                onFocus
              } = props;
              if (onFocus) onFocus(e);
            }
            function doBlur(e) {
              const {
                onBlur
              } = props;
              if (onBlur) onBlur(e);
            }
            function doDeleteOption(value) {
              const {
                onDeleteOption
              } = props;
              if (onDeleteOption) onDeleteOption(value);
            }
            function doClear(e) {
              const {
                onClear
              } = props;
              if (onClear) onClear(e);
            }
            function doPatternInput(value) {
              const {
                onPatternInput
              } = props;
              if (onPatternInput) onPatternInput(value);
            }
            function handleFocusin(e) {
              var _a;
              if (!e.relatedTarget || !((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
                doFocus(e);
              }
            }
            function handleFocusout(e) {
              var _a;
              if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) return;
              doBlur(e);
            }
            function handleClear(e) {
              doClear(e);
            }
            function handleMouseEnter() {
              hoverRef.value = true;
            }
            function handleMouseLeave() {
              hoverRef.value = false;
            }
            function handleMouseDown(e) {
              if (!props.active || !props.filterable) return;
              if (e.target === patternInputRef.value) return;
              e.preventDefault();
            }
            function handleDeleteOption(option) {
              doDeleteOption(option);
            }
            const isComposingRef = ref(false);
            function handlePatternKeyDown(e) {
              if (e.key === 'Backspace' && !isComposingRef.value) {
                if (!props.pattern.length) {
                  const {
                    selectedOptions
                  } = props;
                  if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
                    handleDeleteOption(selectedOptions[selectedOptions.length - 1]);
                  }
                }
              }
            }
            // the composition end is later than its input so we can cached the event
            // and return the input event
            let cachedInputEvent = null;
            function handlePatternInputInput(e) {
              // we should sync mirror width here
              const {
                value: patternInputMirrorEl
              } = patternInputMirrorRef;
              if (patternInputMirrorEl) {
                const inputText = e.target.value;
                patternInputMirrorEl.textContent = inputText;
                syncMirrorWidth();
              }
              if (props.ignoreComposition) {
                if (!isComposingRef.value) {
                  doPatternInput(e);
                } else {
                  cachedInputEvent = e;
                }
              } else {
                doPatternInput(e);
              }
            }
            function handleCompositionStart() {
              isComposingRef.value = true;
            }
            function handleCompositionEnd() {
              isComposingRef.value = false;
              if (props.ignoreComposition) {
                doPatternInput(cachedInputEvent);
              }
              cachedInputEvent = null;
            }
            function handlePatternInputFocus(e) {
              var _a;
              patternInputFocusedRef.value = true;
              (_a = props.onPatternFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
            function handlePatternInputBlur(e) {
              var _a;
              patternInputFocusedRef.value = false;
              (_a = props.onPatternBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
            }
            function blur() {
              var _a, _b;
              if (props.filterable) {
                patternInputFocusedRef.value = false;
                (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
                (_b = patternInputRef.value) === null || _b === void 0 ? void 0 : _b.blur();
              } else if (props.multiple) {
                const {
                  value: multipleEl
                } = multipleElRef;
                multipleEl === null || multipleEl === void 0 ? void 0 : multipleEl.blur();
              } else {
                const {
                  value: singleEl
                } = singleElRef;
                singleEl === null || singleEl === void 0 ? void 0 : singleEl.blur();
              }
            }
            function focus() {
              var _a, _b, _c;
              if (props.filterable) {
                patternInputFocusedRef.value = false;
                (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.focus();
              } else if (props.multiple) {
                (_b = multipleElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
              } else {
                (_c = singleElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
              }
            }
            function focusInput() {
              const {
                value: patternInputEl
              } = patternInputRef;
              if (patternInputEl) {
                showInputTag();
                patternInputEl.focus();
              }
            }
            function blurInput() {
              const {
                value: patternInputEl
              } = patternInputRef;
              if (patternInputEl) {
                patternInputEl.blur();
              }
            }
            function updateCounter(count) {
              const {
                value
              } = counterRef;
              if (value) {
                value.setTextContent(`+${count}`);
              }
            }
            function getCounter() {
              const {
                value
              } = counterWrapperRef;
              return value;
            }
            function getTail() {
              return patternInputRef.value;
            }
            let enterTimerId = null;
            function clearEnterTimer() {
              if (enterTimerId !== null) window.clearTimeout(enterTimerId);
            }
            function handleMouseEnterCounter() {
              if (props.active) return;
              clearEnterTimer();
              enterTimerId = window.setTimeout(() => {
                if (selectedRef.value) {
                  showTagsPopoverRef.value = true;
                }
              }, 100);
            }
            function handleMouseLeaveCounter() {
              clearEnterTimer();
            }
            function onPopoverUpdateShow(show) {
              if (!show) {
                clearEnterTimer();
                showTagsPopoverRef.value = false;
              }
            }
            watch(selectedRef, value => {
              if (!value) {
                showTagsPopoverRef.value = false;
              }
            });
            onMounted(() => {
              watchEffect(() => {
                const patternInputWrapperEl = patternInputWrapperRef.value;
                if (!patternInputWrapperEl) return;
                if (props.disabled) {
                  patternInputWrapperEl.removeAttribute('tabindex');
                } else {
                  patternInputWrapperEl.tabIndex = patternInputFocusedRef.value ? -1 : 0;
                }
              });
            });
            useOnResize(selfRef, props.onResize);
            const {
              inlineThemeDisabled
            } = props;
            const cssVarsRef = computed(() => {
              const {
                size
              } = props;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  fontWeight,
                  borderRadius,
                  color,
                  placeholderColor,
                  textColor,
                  paddingSingle,
                  paddingMultiple,
                  caretColor,
                  colorDisabled,
                  textColorDisabled,
                  placeholderColorDisabled,
                  colorActive,
                  boxShadowFocus,
                  boxShadowActive,
                  boxShadowHover,
                  border,
                  borderFocus,
                  borderHover,
                  borderActive,
                  arrowColor,
                  arrowColorDisabled,
                  loadingColor,
                  // form warning
                  colorActiveWarning,
                  boxShadowFocusWarning,
                  boxShadowActiveWarning,
                  boxShadowHoverWarning,
                  borderWarning,
                  borderFocusWarning,
                  borderHoverWarning,
                  borderActiveWarning,
                  // form error
                  colorActiveError,
                  boxShadowFocusError,
                  boxShadowActiveError,
                  boxShadowHoverError,
                  borderError,
                  borderFocusError,
                  borderHoverError,
                  borderActiveError,
                  // clear
                  clearColor,
                  clearColorHover,
                  clearColorPressed,
                  clearSize,
                  // arrow
                  arrowSize,
                  [createKey('height', size)]: height,
                  [createKey('fontSize', size)]: fontSize
                }
              } = themeRef.value;
              const paddingSingleDiscrete = getMargin(paddingSingle);
              const paddingMultipleDiscrete = getMargin(paddingMultiple);
              return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border': border,
                '--n-border-active': borderActive,
                '--n-border-focus': borderFocus,
                '--n-border-hover': borderHover,
                '--n-border-radius': borderRadius,
                '--n-box-shadow-active': boxShadowActive,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-caret-color': caretColor,
                '--n-color': color,
                '--n-color-active': colorActive,
                '--n-color-disabled': colorDisabled,
                '--n-font-size': fontSize,
                '--n-height': height,
                '--n-padding-single-top': paddingSingleDiscrete.top,
                '--n-padding-multiple-top': paddingMultipleDiscrete.top,
                '--n-padding-single-right': paddingSingleDiscrete.right,
                '--n-padding-multiple-right': paddingMultipleDiscrete.right,
                '--n-padding-single-left': paddingSingleDiscrete.left,
                '--n-padding-multiple-left': paddingMultipleDiscrete.left,
                '--n-padding-single-bottom': paddingSingleDiscrete.bottom,
                '--n-padding-multiple-bottom': paddingMultipleDiscrete.bottom,
                '--n-placeholder-color': placeholderColor,
                '--n-placeholder-color-disabled': placeholderColorDisabled,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-arrow-color': arrowColor,
                '--n-arrow-color-disabled': arrowColorDisabled,
                '--n-loading-color': loadingColor,
                // form warning
                '--n-color-active-warning': colorActiveWarning,
                '--n-box-shadow-focus-warning': boxShadowFocusWarning,
                '--n-box-shadow-active-warning': boxShadowActiveWarning,
                '--n-box-shadow-hover-warning': boxShadowHoverWarning,
                '--n-border-warning': borderWarning,
                '--n-border-focus-warning': borderFocusWarning,
                '--n-border-hover-warning': borderHoverWarning,
                '--n-border-active-warning': borderActiveWarning,
                // form error
                '--n-color-active-error': colorActiveError,
                '--n-box-shadow-focus-error': boxShadowFocusError,
                '--n-box-shadow-active-error': boxShadowActiveError,
                '--n-box-shadow-hover-error': boxShadowHoverError,
                '--n-border-error': borderError,
                '--n-border-focus-error': borderFocusError,
                '--n-border-hover-error': borderHoverError,
                '--n-border-active-error': borderActiveError,
                // clear
                '--n-clear-size': clearSize,
                '--n-clear-color': clearColor,
                '--n-clear-color-hover': clearColorHover,
                '--n-clear-color-pressed': clearColorPressed,
                // arrow-size
                '--n-arrow-size': arrowSize,
                // font-weight
                '--n-font-weight': fontWeight
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('internal-selection', computed(() => {
              return props.size[0];
            }), cssVarsRef, props) : undefined;
            return {
              mergedTheme: themeRef,
              mergedClearable: mergedClearableRef,
              mergedClsPrefix: mergedClsPrefixRef,
              rtlEnabled: rtlEnabledRef,
              patternInputFocused: patternInputFocusedRef,
              filterablePlaceholder: filterablePlaceholderRef,
              label: labelRef,
              selected: selectedRef,
              showTagsPanel: showTagsPopoverRef,
              isComposing: isComposingRef,
              // dom ref
              counterRef,
              counterWrapperRef,
              patternInputMirrorRef,
              patternInputRef,
              selfRef,
              multipleElRef,
              singleElRef,
              patternInputWrapperRef,
              overflowRef,
              inputTagElRef,
              handleMouseDown,
              handleFocusin,
              handleClear,
              handleMouseEnter,
              handleMouseLeave,
              handleDeleteOption,
              handlePatternKeyDown,
              handlePatternInputInput,
              handlePatternInputBlur,
              handlePatternInputFocus,
              handleMouseEnterCounter,
              handleMouseLeaveCounter,
              handleFocusout,
              handleCompositionEnd,
              handleCompositionStart,
              onPopoverUpdateShow,
              focus,
              focusInput,
              blur,
              blurInput,
              updateCounter,
              getCounter,
              getTail,
              renderLabel: props.renderLabel,
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            const {
              status,
              multiple,
              size,
              disabled,
              filterable,
              maxTagCount,
              bordered,
              clsPrefix,
              ellipsisTagPopoverProps,
              onRender,
              renderTag,
              renderLabel
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            const maxTagCountResponsive = maxTagCount === 'responsive';
            const maxTagCountNumeric = typeof maxTagCount === 'number';
            const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
            const suffix = h(Wrapper, null, {
              default: () => h(NBaseSuffix, {
                clsPrefix: clsPrefix,
                loading: this.loading,
                showArrow: this.showArrow,
                showClear: this.mergedClearable && this.selected,
                onClear: this.handleClear
              }, {
                default: () => {
                  var _a, _b;
                  return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a);
                }
              })
            });
            let body;
            if (multiple) {
              const {
                labelField
              } = this;
              const createTag = option => h("div", {
                class: `${clsPrefix}-base-selection-tag-wrapper`,
                key: option.value
              }, renderTag ? renderTag({
                option,
                handleClose: () => {
                  this.handleDeleteOption(option);
                }
              }) : h(__unplugin_components_0, {
                size: size,
                closable: !option.disabled,
                disabled: disabled,
                onClose: () => {
                  this.handleDeleteOption(option);
                },
                internalCloseIsButtonTag: false,
                internalCloseFocusable: false
              }, {
                default: () => renderLabel ? renderLabel(option, true) : render(option[labelField], option, true)
              }));
              const createOriginalTagNodes = () => (maxTagCountNumeric ? this.selectedOptions.slice(0, maxTagCount) : this.selectedOptions).map(createTag);
              const input = filterable ? h("div", {
                class: `${clsPrefix}-base-selection-input-tag`,
                ref: "inputTagElRef",
                key: "__input-tag__"
              }, h("input", Object.assign({}, this.inputProps, {
                ref: "patternInputRef",
                tabindex: -1,
                disabled: disabled,
                value: this.pattern,
                autofocus: this.autofocus,
                class: `${clsPrefix}-base-selection-input-tag__input`,
                onBlur: this.handlePatternInputBlur,
                onFocus: this.handlePatternInputFocus,
                onKeydown: this.handlePatternKeyDown,
                onInput: this.handlePatternInputInput,
                onCompositionstart: this.handleCompositionStart,
                onCompositionend: this.handleCompositionEnd
              })), h("span", {
                ref: "patternInputMirrorRef",
                class: `${clsPrefix}-base-selection-input-tag__mirror`
              }, this.pattern)) : null;
              // May Overflow
              const renderCounter = maxTagCountResponsive ? () => h("div", {
                class: `${clsPrefix}-base-selection-tag-wrapper`,
                ref: "counterWrapperRef"
              }, h(__unplugin_components_0, {
                size: size,
                ref: "counterRef",
                onMouseenter: this.handleMouseEnterCounter,
                onMouseleave: this.handleMouseLeaveCounter,
                disabled: disabled
              })) : undefined;
              let counter;
              if (maxTagCountNumeric) {
                const rest = this.selectedOptions.length - maxTagCount;
                if (rest > 0) {
                  counter = h("div", {
                    class: `${clsPrefix}-base-selection-tag-wrapper`,
                    key: "__counter__"
                  }, h(__unplugin_components_0, {
                    size: size,
                    ref: "counterRef",
                    onMouseenter: this.handleMouseEnterCounter,
                    disabled: disabled
                  }, {
                    default: () => `+${rest}`
                  }));
                }
              }
              const tags = maxTagCountResponsive ? filterable ? h(VOverflow, {
                ref: "overflowRef",
                updateCounter: this.updateCounter,
                getCounter: this.getCounter,
                getTail: this.getTail,
                style: {
                  width: '100%',
                  display: 'flex',
                  overflow: 'hidden'
                }
              }, {
                default: createOriginalTagNodes,
                counter: renderCounter,
                tail: () => input
              }) : h(VOverflow, {
                ref: "overflowRef",
                updateCounter: this.updateCounter,
                getCounter: this.getCounter,
                style: {
                  width: '100%',
                  display: 'flex',
                  overflow: 'hidden'
                }
              }, {
                default: createOriginalTagNodes,
                counter: renderCounter
              }) : maxTagCountNumeric && counter ? createOriginalTagNodes().concat(counter) : createOriginalTagNodes();
              const renderPopover = useMaxTagCount ? () => h("div", {
                class: `${clsPrefix}-base-selection-popover`
              }, maxTagCountResponsive ? createOriginalTagNodes() : this.selectedOptions.map(createTag)) : undefined;
              const popoverProps = useMaxTagCount ? Object.assign({
                show: this.showTagsPanel,
                trigger: 'hover',
                overlap: true,
                placement: 'top',
                width: 'trigger',
                onUpdateShow: this.onPopoverUpdateShow,
                theme: this.mergedTheme.peers.Popover,
                themeOverrides: this.mergedTheme.peerOverrides.Popover
              }, ellipsisTagPopoverProps) : null;
              const showPlaceholder = this.selected ? false : this.active ? !this.pattern && !this.isComposing : true;
              const placeholder = showPlaceholder ? h("div", {
                class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`
              }, h("div", {
                class: `${clsPrefix}-base-selection-placeholder__inner`
              }, this.placeholder)) : null;
              const popoverTrigger = filterable ? h("div", {
                ref: "patternInputWrapperRef",
                class: `${clsPrefix}-base-selection-tags`
              }, tags, maxTagCountResponsive ? null : input, suffix) : h("div", {
                ref: "multipleElRef",
                class: `${clsPrefix}-base-selection-tags`,
                tabindex: disabled ? undefined : 0
              }, tags, suffix);
              body = h(Fragment, null, useMaxTagCount ? h(__unplugin_components_1$4, Object.assign({}, popoverProps, {
                scrollable: true,
                style: "max-height: calc(var(--v-target-height) * 6.6);"
              }), {
                trigger: () => popoverTrigger,
                default: renderPopover
              }) : popoverTrigger, placeholder);
            } else {
              if (filterable) {
                const hasInput = this.pattern || this.isComposing;
                const showPlaceholder = this.active ? !hasInput : !this.selected;
                const showSelectedLabel = this.active ? false : this.selected;
                body = h("div", {
                  ref: "patternInputWrapperRef",
                  class: `${clsPrefix}-base-selection-label`,
                  title: this.patternInputFocused ? undefined : getTitleAttribute(this.label)
                }, h("input", Object.assign({}, this.inputProps, {
                  ref: "patternInputRef",
                  class: `${clsPrefix}-base-selection-input`,
                  value: this.active ? this.pattern : '',
                  placeholder: "",
                  readonly: disabled,
                  disabled: disabled,
                  tabindex: -1,
                  autofocus: this.autofocus,
                  onFocus: this.handlePatternInputFocus,
                  onBlur: this.handlePatternInputBlur,
                  onInput: this.handlePatternInputInput,
                  onCompositionstart: this.handleCompositionStart,
                  onCompositionend: this.handleCompositionEnd
                })), showSelectedLabel ? h("div", {
                  class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`,
                  key: "input"
                }, h("div", {
                  class: `${clsPrefix}-base-selection-overlay__wrapper`
                }, renderTag ? renderTag({
                  option: this.selectedOption,
                  handleClose: () => {}
                }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))) : null, showPlaceholder ? h("div", {
                  class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                  key: "placeholder"
                }, h("div", {
                  class: `${clsPrefix}-base-selection-overlay__wrapper`
                }, this.filterablePlaceholder)) : null, suffix);
              } else {
                body = h("div", {
                  ref: "singleElRef",
                  class: `${clsPrefix}-base-selection-label`,
                  tabindex: this.disabled ? undefined : 0
                }, this.label !== undefined ? h("div", {
                  class: `${clsPrefix}-base-selection-input`,
                  title: getTitleAttribute(this.label),
                  key: "input"
                }, h("div", {
                  class: `${clsPrefix}-base-selection-input__content`
                }, renderTag ? renderTag({
                  option: this.selectedOption,
                  handleClose: () => {}
                }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))) : h("div", {
                  class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`,
                  key: "placeholder"
                }, h("div", {
                  class: `${clsPrefix}-base-selection-placeholder__inner`
                }, this.placeholder)), suffix);
              }
            }
            return h("div", {
              ref: "selfRef",
              class: [`${clsPrefix}-base-selection`, this.rtlEnabled && `${clsPrefix}-base-selection--rtl`, this.themeClass, status && `${clsPrefix}-base-selection--${status}-status`, {
                [`${clsPrefix}-base-selection--active`]: this.active,
                [`${clsPrefix}-base-selection--selected`]: this.selected || this.active && this.pattern,
                [`${clsPrefix}-base-selection--disabled`]: this.disabled,
                [`${clsPrefix}-base-selection--multiple`]: this.multiple,
                // focus is not controlled by selection itself since it always need
                // to be managed together with menu. provide :focus style will cause
                // many redundant codes.
                [`${clsPrefix}-base-selection--focus`]: this.focused
              }],
              style: this.cssVars,
              onClick: this.onClick,
              onMouseenter: this.handleMouseEnter,
              onMouseleave: this.handleMouseLeave,
              onKeydown: this.onKeydown,
              onFocusin: this.handleFocusin,
              onFocusout: this.handleFocusout,
              onMousedown: this.handleMouseDown
            }, body, bordered ? h("div", {
              class: `${clsPrefix}-base-selection__border`
            }) : null, bordered ? h("div", {
              class: `${clsPrefix}-base-selection__state-border`
            }) : null);
          }
        });

        // vars:
        // --n-bezier
        // --n-color
        // --n-close-color-hover
        // --n-close-color-pressed
        // --n-close-icon-color
        // --n-close-icon-color-hover
        // --n-close-icon-color-pressed
        // --n-icon-color
        // --n-border
        // --n-title-text-color
        // --n-content-text-color
        // --n-line-height
        // --n-border-radius
        // --n-font-size
        // --n-title-font-weight
        // --n-icon-size
        // --n-icon-margin
        // --n-close-size
        // --n-close-icon-size
        // --n-close-margin
        // --n-padding
        // --n-icon-margin-left
        // --n-icon-margin-right
        const style$7 = cB('alert', `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [cE('border', `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `), cM('closable', [cB('alert-body', [cE('title', `
 padding-right: 24px;
 `)])]), cE('icon', {
          color: 'var(--n-icon-color)'
        }), cB('alert-body', {
          padding: 'var(--n-padding)'
        }, [cE('title', {
          color: 'var(--n-title-text-color)'
        }), cE('content', {
          color: 'var(--n-content-text-color)'
        })]), fadeInHeightExpandTransition({
          originalTransition: 'transform .3s var(--n-bezier)',
          enterToProps: {
            transform: 'scale(1)'
          },
          leaveToProps: {
            transform: 'scale(0.9)'
          }
        }), cE('icon', `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `), cE('close', `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `), cM('show-icon', [cB('alert-body', {
          paddingLeft: 'calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))'
        })]),
        // fix: https://github.com/tusen-ai/naive-ui/issues/4588
        cM('right-adjust', [cB('alert-body', {
          paddingRight: 'calc(var(--n-close-size) + var(--n-padding) + 2px)'
        })]), cB('alert-body', `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cE('title', `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [c$1('& +', [cE('content', {
          marginTop: '9px'
        })])]), cE('content', {
          transition: 'color .3s var(--n-bezier)',
          fontSize: 'var(--n-font-size)'
        })]), cE('icon', {
          transition: 'color .3s var(--n-bezier)'
        })]);
        const alertProps = Object.assign(Object.assign({}, useTheme.props), {
          title: String,
          showIcon: {
            type: Boolean,
            default: true
          },
          type: {
            type: String,
            default: "default"
          },
          bordered: {
            type: Boolean,
            default: true
          },
          closable: Boolean,
          onClose: Function,
          onAfterLeave: Function,
          /** @deprecated */
          onAfterHide: Function
        });
        const __unplugin_components_3 = defineComponent({
          name: "Alert",
          inheritAttrs: false,
          props: alertProps,
          slots: Object,
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedBorderedRef,
              inlineThemeDisabled,
              mergedRtlRef
            } = useConfig(props);
            const themeRef = useTheme("Alert", "-alert", style$7, alertLight, props, mergedClsPrefixRef);
            const rtlEnabledRef = useRtl("Alert", mergedRtlRef, mergedClsPrefixRef);
            const cssVarsRef = computed(() => {
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self
              } = themeRef.value;
              const {
                fontSize,
                borderRadius,
                titleFontWeight,
                lineHeight,
                iconSize,
                iconMargin,
                iconMarginRtl,
                closeIconSize,
                closeBorderRadius,
                closeSize,
                closeMargin,
                closeMarginRtl,
                padding
              } = self;
              const {
                type
              } = props;
              const {
                left,
                right
              } = getMargin(iconMargin);
              return {
                "--n-bezier": cubicBezierEaseInOut,
                "--n-color": self[createKey("color", type)],
                "--n-close-icon-size": closeIconSize,
                "--n-close-border-radius": closeBorderRadius,
                "--n-close-color-hover": self[createKey("closeColorHover", type)],
                "--n-close-color-pressed": self[createKey("closeColorPressed", type)],
                "--n-close-icon-color": self[createKey("closeIconColor", type)],
                "--n-close-icon-color-hover": self[createKey("closeIconColorHover", type)],
                "--n-close-icon-color-pressed": self[createKey("closeIconColorPressed", type)],
                "--n-icon-color": self[createKey("iconColor", type)],
                "--n-border": self[createKey("border", type)],
                "--n-title-text-color": self[createKey("titleTextColor", type)],
                "--n-content-text-color": self[createKey("contentTextColor", type)],
                "--n-line-height": lineHeight,
                "--n-border-radius": borderRadius,
                "--n-font-size": fontSize,
                "--n-title-font-weight": titleFontWeight,
                "--n-icon-size": iconSize,
                "--n-icon-margin": iconMargin,
                "--n-icon-margin-rtl": iconMarginRtl,
                "--n-close-size": closeSize,
                "--n-close-margin": closeMargin,
                "--n-close-margin-rtl": closeMarginRtl,
                "--n-padding": padding,
                "--n-icon-margin-left": left,
                "--n-icon-margin-right": right
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass("alert", computed(() => {
              return props.type[0];
            }), cssVarsRef, props) : void 0;
            const visibleRef = ref(true);
            const doAfterLeave = () => {
              const {
                onAfterLeave,
                onAfterHide
                // deprecated
              } = props;
              if (onAfterLeave) onAfterLeave();
              if (onAfterHide) onAfterHide();
            };
            const handleCloseClick = () => {
              var _a;
              void Promise.resolve((_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props)).then(result => {
                if (result === false) return;
                visibleRef.value = false;
              });
            };
            const handleAfterLeave = () => {
              doAfterLeave();
            };
            return {
              rtlEnabled: rtlEnabledRef,
              mergedClsPrefix: mergedClsPrefixRef,
              mergedBordered: mergedBorderedRef,
              visible: visibleRef,
              handleCloseClick,
              handleAfterLeave,
              mergedTheme: themeRef,
              cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            var _a;
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            return h(NFadeInExpandTransition, {
              onAfterLeave: this.handleAfterLeave
            }, {
              default: () => {
                const {
                  mergedClsPrefix,
                  $slots
                } = this;
                const attrs = {
                  class: [`${mergedClsPrefix}-alert`, this.themeClass, this.closable && `${mergedClsPrefix}-alert--closable`, this.showIcon && `${mergedClsPrefix}-alert--show-icon`,
                  // fix: https://github.com/tusen-ai/naive-ui/issues/4588
                  !this.title && this.closable && `${mergedClsPrefix}-alert--right-adjust`, this.rtlEnabled && `${mergedClsPrefix}-alert--rtl`],
                  style: this.cssVars,
                  role: "alert"
                };
                return this.visible ? h("div", Object.assign({}, mergeProps(this.$attrs, attrs)), this.closable && h(NBaseClose, {
                  clsPrefix: mergedClsPrefix,
                  class: `${mergedClsPrefix}-alert__close`,
                  onClick: this.handleCloseClick
                }), this.bordered && h("div", {
                  class: `${mergedClsPrefix}-alert__border`
                }), this.showIcon && h("div", {
                  class: `${mergedClsPrefix}-alert__icon`,
                  "aria-hidden": "true"
                }, resolveSlot($slots.icon, () => [h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => {
                    switch (this.type) {
                      case "success":
                        return h(SuccessIcon, null);
                      case "info":
                        return h(InfoIcon, null);
                      case "warning":
                        return h(WarningIcon, null);
                      case "error":
                        return h(ErrorIcon, null);
                      default:
                        return null;
                    }
                  }
                })])), h("div", {
                  class: [`${mergedClsPrefix}-alert-body`, this.mergedBordered && `${mergedClsPrefix}-alert-body--bordered`]
                }, resolveWrappedSlot($slots.header, children => {
                  const mergedChildren = children || this.title;
                  return mergedChildren ? h("div", {
                    class: `${mergedClsPrefix}-alert-body__title`
                  }, mergedChildren) : null;
                }), $slots.default && h("div", {
                  class: `${mergedClsPrefix}-alert-body__content`
                }, $slots))) : null;
              }
            });
          }
        });
        function getIsGroup(option) {
          return option.type === 'group';
        }
        function getIgnored(option) {
          return option.type === 'ignored';
        }
        function patternMatched(pattern, value) {
          try {
            return !!(1 + value.toString().toLowerCase().indexOf(pattern.trim().toLowerCase()));
          } catch (_a) {
            return false;
          }
        }
        function createTmOptions(valueField, childrenField) {
          const options = {
            getIsGroup,
            getIgnored,
            getKey(option) {
              if (getIsGroup(option)) {
                return option.name || option.key || 'key-required';
              }
              // Required for non-custom label & value field
              return option[valueField];
            },
            getChildren(option) {
              return option[childrenField];
            }
          };
          return options;
        }
        function filterOptions(originalOpts, filter, pattern, childrenField) {
          if (!filter) return originalOpts;
          function traverse(options) {
            if (!Array.isArray(options)) return [];
            const filteredOptions = [];
            for (const option of options) {
              if (getIsGroup(option)) {
                const children = traverse(option[childrenField]);
                if (children.length) {
                  filteredOptions.push(Object.assign({}, option, {
                    [childrenField]: children
                  }));
                }
              } else if (getIgnored(option)) {
                continue;
              } else if (filter(pattern, option)) {
                filteredOptions.push(option);
              }
            }
            return filteredOptions;
          }
          return traverse(originalOpts);
        }
        function createValOptMap(options, valueField, childrenField) {
          const valOptMap = new Map();
          options.forEach(option => {
            if (getIsGroup(option)) {
              option[childrenField].forEach(selectGroupOption => {
                valOptMap.set(selectGroupOption[valueField], selectGroupOption);
              });
            } else {
              valOptMap.set(option[valueField], option);
            }
          });
          return valOptMap;
        }
        const style$6 = cB('collapse-transition', {
          width: '100%'
        }, [fadeInHeightExpandTransition()]);
        const collapseTransitionProps = Object.assign(Object.assign({}, useTheme.props), {
          show: {
            type: Boolean,
            default: true
          },
          appear: Boolean,
          // The collapsed is implemented with mistake, collapsed=true would make it show
          // However there's no possibility to change so I just let it deprecated and use
          // `show` prop instead.
          /** @deprecated */
          collapsed: {
            type: Boolean,
            default: void 0
          }
        });
        const __unplugin_components_10 = defineComponent({
          name: "CollapseTransition",
          props: collapseTransitionProps,
          inheritAttrs: false,
          setup(props) {
            const {
              mergedClsPrefixRef,
              inlineThemeDisabled,
              mergedRtlRef
            } = useConfig(props);
            const mergedThemeRef = useTheme("CollapseTransition", "-collapse-transition", style$6, collapseTransitionLight, props, mergedClsPrefixRef);
            const rtlEnabledRef = useRtl("CollapseTransition", mergedRtlRef, mergedClsPrefixRef);
            const mergedShowRef = computed(() => {
              if (props.collapsed !== void 0) {
                return props.collapsed;
              }
              return props.show;
            });
            const cssVarsRef = computed(() => {
              const {
                self: {
                  bezier
                }
              } = mergedThemeRef.value;
              return {
                "--n-bezier": bezier
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass("collapse-transition", void 0, cssVarsRef, props) : void 0;
            return {
              rtlEnabled: rtlEnabledRef,
              mergedShow: mergedShowRef,
              mergedClsPrefix: mergedClsPrefixRef,
              cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            return h(NFadeInExpandTransition, {
              appear: this.appear
            }, {
              default: () => {
                var _a;
                if (!this.mergedShow) return;
                (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                return h("div",
                // Don't use jsx since it would cause useless spread in each rendering
                mergeProps({
                  class: [`${this.mergedClsPrefix}-collapse-transition`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse-transition--rtl`, this.themeClass],
                  style: this.cssVars
                }, this.$attrs), this.$slots);
              }
            });
          }
        });

        // --n-menu-box-shadow
        const style$5 = c$1([cB('select', `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), cB('select-menu', `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
          originalTransition: 'background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)'
        })])]);
        const selectProps = Object.assign(Object.assign({}, useTheme.props), {
          to: useAdjustedTo.propTo,
          bordered: {
            type: Boolean,
            default: void 0
          },
          clearable: Boolean,
          clearFilterAfterSelect: {
            type: Boolean,
            default: true
          },
          options: {
            type: Array,
            default: () => []
          },
          defaultValue: {
            type: [String, Number, Array],
            default: null
          },
          keyboard: {
            type: Boolean,
            default: true
          },
          value: [String, Number, Array],
          placeholder: String,
          menuProps: Object,
          multiple: Boolean,
          size: String,
          menuSize: {
            type: String
          },
          filterable: Boolean,
          disabled: {
            type: Boolean,
            default: void 0
          },
          remote: Boolean,
          loading: Boolean,
          filter: Function,
          placement: {
            type: String,
            default: "bottom-start"
          },
          widthMode: {
            type: String,
            default: "trigger"
          },
          tag: Boolean,
          onCreate: Function,
          fallbackOption: {
            type: [Function, Boolean],
            default: void 0
          },
          show: {
            type: Boolean,
            default: void 0
          },
          showArrow: {
            type: Boolean,
            default: true
          },
          maxTagCount: [Number, String],
          ellipsisTagPopoverProps: Object,
          consistentMenuWidth: {
            type: Boolean,
            default: true
          },
          virtualScroll: {
            type: Boolean,
            default: true
          },
          labelField: {
            type: String,
            default: "label"
          },
          valueField: {
            type: String,
            default: "value"
          },
          childrenField: {
            type: String,
            default: "children"
          },
          renderLabel: Function,
          renderOption: Function,
          renderTag: Function,
          "onUpdate:value": [Function, Array],
          inputProps: Object,
          nodeProps: Function,
          ignoreComposition: {
            type: Boolean,
            default: true
          },
          showOnFocus: Boolean,
          // for jsx
          onUpdateValue: [Function, Array],
          onBlur: [Function, Array],
          onClear: [Function, Array],
          onFocus: [Function, Array],
          onScroll: [Function, Array],
          onSearch: [Function, Array],
          onUpdateShow: [Function, Array],
          "onUpdate:show": [Function, Array],
          displayDirective: {
            type: String,
            default: "show"
          },
          resetMenuOnOptionsChange: {
            type: Boolean,
            default: true
          },
          status: String,
          showCheckmark: {
            type: Boolean,
            default: true
          },
          /** deprecated */
          onChange: [Function, Array],
          items: Array
        });
        const __unplugin_components_1$3 = defineComponent({
          name: "Select",
          props: selectProps,
          slots: Object,
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedBorderedRef,
              namespaceRef,
              inlineThemeDisabled
            } = useConfig(props);
            const themeRef = useTheme("Select", "-select", style$5, selectLight, props, mergedClsPrefixRef);
            const uncontrolledValueRef = ref(props.defaultValue);
            const controlledValueRef = toRef(props, "value");
            const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
            const focusedRef = ref(false);
            const patternRef = ref("");
            const compitableOptionsRef = useCompitable(props, ["items", "options"]);
            const createdOptionsRef = ref([]);
            const beingCreatedOptionsRef = ref([]);
            const localOptionsRef = computed(() => {
              return beingCreatedOptionsRef.value.concat(createdOptionsRef.value).concat(compitableOptionsRef.value);
            });
            const resolvedFilterRef = computed(() => {
              const {
                filter
              } = props;
              if (filter) return filter;
              const {
                labelField,
                valueField
              } = props;
              return (pattern, option) => {
                if (!option) return false;
                const label = option[labelField];
                if (typeof label === "string") {
                  return patternMatched(pattern, label);
                }
                const value = option[valueField];
                if (typeof value === "string") {
                  return patternMatched(pattern, value);
                }
                if (typeof value === "number") {
                  return patternMatched(pattern, String(value));
                }
                return false;
              };
            });
            const filteredOptionsRef = computed(() => {
              if (props.remote) {
                return compitableOptionsRef.value;
              } else {
                const {
                  value: localOptions
                } = localOptionsRef;
                const {
                  value: pattern
                } = patternRef;
                if (!pattern.length || !props.filterable) {
                  return localOptions;
                } else {
                  return filterOptions(localOptions, resolvedFilterRef.value, pattern, props.childrenField);
                }
              }
            });
            const treeMateRef = computed(() => {
              const {
                valueField,
                childrenField
              } = props;
              const options = createTmOptions(valueField, childrenField);
              return createTreeMate(filteredOptionsRef.value, options);
            });
            const valOptMapRef = computed(() => createValOptMap(localOptionsRef.value, props.valueField, props.childrenField));
            const uncontrolledShowRef = ref(false);
            const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
            const triggerRef = ref(null);
            const followerRef = ref(null);
            const menuRef = ref(null);
            const {
              localeRef
            } = useLocale("Select");
            const localizedPlaceholderRef = computed(() => {
              var _a;
              return (_a = props.placeholder) !== null && _a !== void 0 ? _a : localeRef.value.placeholder;
            });
            const emptyArray = [];
            const memoValOptMapRef = ref(/* @__PURE__ */new Map());
            const wrappedFallbackOptionRef = computed(() => {
              const {
                fallbackOption
              } = props;
              if (fallbackOption === void 0) {
                const {
                  labelField,
                  valueField
                } = props;
                return value => ({
                  [labelField]: String(value),
                  [valueField]: value
                });
              }
              if (fallbackOption === false) return false;
              return value => {
                return Object.assign(fallbackOption(value), {
                  value
                });
              };
            });
            function getMergedOptions(values) {
              const remote = props.remote;
              const {
                value: memoValOptMap
              } = memoValOptMapRef;
              const {
                value: valOptMap
              } = valOptMapRef;
              const {
                value: wrappedFallbackOption
              } = wrappedFallbackOptionRef;
              const options = [];
              values.forEach(value => {
                if (valOptMap.has(value)) {
                  options.push(valOptMap.get(value));
                } else if (remote && memoValOptMap.has(value)) {
                  options.push(memoValOptMap.get(value));
                } else if (wrappedFallbackOption) {
                  const option = wrappedFallbackOption(value);
                  if (option) {
                    options.push(option);
                  }
                }
              });
              return options;
            }
            const selectedOptionsRef = computed(() => {
              if (props.multiple) {
                const {
                  value: values
                } = mergedValueRef;
                if (!Array.isArray(values)) return [];
                return getMergedOptions(values);
              }
              return null;
            });
            const selectedOptionRef = computed(() => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (!props.multiple && !Array.isArray(mergedValue)) {
                if (mergedValue === null) return null;
                return getMergedOptions([mergedValue])[0] || null;
              }
              return null;
            });
            const formItem = useFormItem(props);
            const {
              mergedSizeRef,
              mergedDisabledRef,
              mergedStatusRef
            } = formItem;
            function doUpdateValue(value, option) {
              const {
                onChange,
                "onUpdate:value": _onUpdateValue,
                onUpdateValue
              } = props;
              const {
                nTriggerFormChange,
                nTriggerFormInput
              } = formItem;
              if (onChange) call(onChange, value, option);
              if (onUpdateValue) call(onUpdateValue, value, option);
              if (_onUpdateValue) {
                call(_onUpdateValue, value, option);
              }
              uncontrolledValueRef.value = value;
              nTriggerFormChange();
              nTriggerFormInput();
            }
            function doBlur(e) {
              const {
                onBlur
              } = props;
              const {
                nTriggerFormBlur
              } = formItem;
              if (onBlur) call(onBlur, e);
              nTriggerFormBlur();
            }
            function doClear() {
              const {
                onClear
              } = props;
              if (onClear) call(onClear);
            }
            function doFocus(e) {
              const {
                onFocus,
                showOnFocus
              } = props;
              const {
                nTriggerFormFocus
              } = formItem;
              if (onFocus) call(onFocus, e);
              nTriggerFormFocus();
              if (showOnFocus) {
                openMenu();
              }
            }
            function doSearch(value) {
              const {
                onSearch
              } = props;
              if (onSearch) call(onSearch, value);
            }
            function doScroll(e) {
              const {
                onScroll
              } = props;
              if (onScroll) call(onScroll, e);
            }
            function updateMemorizedOptions() {
              var _a;
              const {
                remote,
                multiple
              } = props;
              if (remote) {
                const {
                  value: memoValOptMap
                } = memoValOptMapRef;
                if (multiple) {
                  const {
                    valueField
                  } = props;
                  (_a = selectedOptionsRef.value) === null || _a === void 0 ? void 0 : _a.forEach(option => {
                    memoValOptMap.set(option[valueField], option);
                  });
                } else {
                  const option = selectedOptionRef.value;
                  if (option) {
                    memoValOptMap.set(option[props.valueField], option);
                  }
                }
              }
            }
            function doUpdateShow(value) {
              const {
                onUpdateShow,
                "onUpdate:show": _onUpdateShow
              } = props;
              if (onUpdateShow) call(onUpdateShow, value);
              if (_onUpdateShow) call(_onUpdateShow, value);
              uncontrolledShowRef.value = value;
            }
            function openMenu() {
              if (!mergedDisabledRef.value) {
                doUpdateShow(true);
                uncontrolledShowRef.value = true;
                if (props.filterable) {
                  focusSelectionInput();
                }
              }
            }
            function closeMenu() {
              doUpdateShow(false);
            }
            function handleMenuAfterLeave() {
              patternRef.value = "";
              beingCreatedOptionsRef.value = emptyArray;
            }
            const activeWithoutMenuOpenRef = ref(false);
            function onTriggerInputFocus() {
              if (props.filterable) {
                activeWithoutMenuOpenRef.value = true;
              }
            }
            function onTriggerInputBlur() {
              if (props.filterable) {
                activeWithoutMenuOpenRef.value = false;
                if (!mergedShowRef.value) {
                  handleMenuAfterLeave();
                }
              }
            }
            function handleTriggerClick() {
              if (mergedDisabledRef.value) return;
              if (!mergedShowRef.value) {
                openMenu();
              } else {
                if (!props.filterable) {
                  closeMenu();
                } else {
                  focusSelectionInput();
                }
              }
            }
            function handleTriggerBlur(e) {
              var _a, _b;
              if ((_b = (_a = menuRef.value) === null || _a === void 0 ? void 0 : _a.selfRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) {
                return;
              }
              focusedRef.value = false;
              doBlur(e);
              closeMenu();
            }
            function handleTriggerFocus(e) {
              doFocus(e);
              focusedRef.value = true;
            }
            function handleMenuFocus() {
              focusedRef.value = true;
            }
            function handleMenuBlur(e) {
              var _a;
              if ((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget)) return;
              focusedRef.value = false;
              doBlur(e);
              closeMenu();
            }
            function handleMenuTabOut() {
              var _a;
              (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
              closeMenu();
            }
            function handleMenuClickOutside(e) {
              var _a;
              if (mergedShowRef.value) {
                if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(getPreciseEventTarget(e)))) {
                  closeMenu();
                }
              }
            }
            function createClearedMultipleSelectValue(value) {
              if (!Array.isArray(value)) return [];
              if (wrappedFallbackOptionRef.value) {
                return Array.from(value);
              } else {
                const {
                  remote
                } = props;
                const {
                  value: valOptMap
                } = valOptMapRef;
                if (remote) {
                  const {
                    value: memoValOptMap
                  } = memoValOptMapRef;
                  return value.filter(v => valOptMap.has(v) || memoValOptMap.has(v));
                } else {
                  return value.filter(v => valOptMap.has(v));
                }
              }
            }
            function handleToggleByTmNode(tmNode) {
              handleToggleByOption(tmNode.rawNode);
            }
            function handleToggleByOption(option) {
              if (mergedDisabledRef.value) return;
              const {
                tag,
                remote,
                clearFilterAfterSelect,
                valueField
              } = props;
              if (tag && !remote) {
                const {
                  value: beingCreatedOptions
                } = beingCreatedOptionsRef;
                const beingCreatedOption = beingCreatedOptions[0] || null;
                if (beingCreatedOption) {
                  const createdOptions = createdOptionsRef.value;
                  if (!createdOptions.length) {
                    createdOptionsRef.value = [beingCreatedOption];
                  } else {
                    createdOptions.push(beingCreatedOption);
                  }
                  beingCreatedOptionsRef.value = emptyArray;
                }
              }
              if (remote) {
                memoValOptMapRef.value.set(option[valueField], option);
              }
              if (props.multiple) {
                const changedValue = createClearedMultipleSelectValue(mergedValueRef.value);
                const index = changedValue.findIndex(value => value === option[valueField]);
                if (~index) {
                  changedValue.splice(index, 1);
                  if (tag && !remote) {
                    const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
                    if (~createdOptionIndex) {
                      createdOptionsRef.value.splice(createdOptionIndex, 1);
                      if (clearFilterAfterSelect) patternRef.value = "";
                    }
                  }
                } else {
                  changedValue.push(option[valueField]);
                  if (clearFilterAfterSelect) patternRef.value = "";
                }
                doUpdateValue(changedValue, getMergedOptions(changedValue));
              } else {
                if (tag && !remote) {
                  const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
                  if (~createdOptionIndex) {
                    createdOptionsRef.value = [createdOptionsRef.value[createdOptionIndex]];
                  } else {
                    createdOptionsRef.value = emptyArray;
                  }
                }
                focusSelection();
                closeMenu();
                doUpdateValue(option[valueField], option);
              }
            }
            function getCreatedOptionIndex(optionValue) {
              const createdOptions = createdOptionsRef.value;
              return createdOptions.findIndex(createdOption => createdOption[props.valueField] === optionValue);
            }
            function handlePatternInput(e) {
              if (!mergedShowRef.value) {
                openMenu();
              }
              const {
                value
              } = e.target;
              patternRef.value = value;
              const {
                tag,
                remote
              } = props;
              doSearch(value);
              if (tag && !remote) {
                if (!value) {
                  beingCreatedOptionsRef.value = emptyArray;
                  return;
                }
                const {
                  onCreate
                } = props;
                const optionBeingCreated = onCreate ? onCreate(value) : {
                  [props.labelField]: value,
                  [props.valueField]: value
                };
                const {
                  valueField,
                  labelField
                } = props;
                if (compitableOptionsRef.value.some(option => {
                  return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
                }) || createdOptionsRef.value.some(option => {
                  return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
                })) {
                  beingCreatedOptionsRef.value = emptyArray;
                } else {
                  beingCreatedOptionsRef.value = [optionBeingCreated];
                }
              }
            }
            function handleClear(e) {
              e.stopPropagation();
              const {
                multiple
              } = props;
              if (!multiple && props.filterable) {
                closeMenu();
              }
              doClear();
              if (multiple) {
                doUpdateValue([], []);
              } else {
                doUpdateValue(null, null);
              }
            }
            function handleMenuMousedown(e) {
              if (!happensIn(e, "action") && !happensIn(e, "empty") && !happensIn(e, "header")) {
                e.preventDefault();
              }
            }
            function handleMenuScroll(e) {
              doScroll(e);
            }
            function handleKeydown(e) {
              var _a, _b, _c, _d, _e;
              if (!props.keyboard) {
                e.preventDefault();
                return;
              }
              switch (e.key) {
                case " ":
                  if (props.filterable) {
                    break;
                  } else {
                    e.preventDefault();
                  }
                // eslint-disable-next-line no-fallthrough
                case "Enter":
                  if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.isComposing)) {
                    if (mergedShowRef.value) {
                      const pendingTmNode = (_b = menuRef.value) === null || _b === void 0 ? void 0 : _b.getPendingTmNode();
                      if (pendingTmNode) {
                        handleToggleByTmNode(pendingTmNode);
                      } else if (!props.filterable) {
                        closeMenu();
                        focusSelection();
                      }
                    } else {
                      openMenu();
                      if (props.tag && activeWithoutMenuOpenRef.value) {
                        const beingCreatedOption = beingCreatedOptionsRef.value[0];
                        if (beingCreatedOption) {
                          const optionValue = beingCreatedOption[props.valueField];
                          const {
                            value: mergedValue
                          } = mergedValueRef;
                          if (props.multiple) {
                            if (Array.isArray(mergedValue) && mergedValue.includes(optionValue)) ;else {
                              handleToggleByOption(beingCreatedOption);
                            }
                          } else {
                            handleToggleByOption(beingCreatedOption);
                          }
                        }
                      }
                    }
                  }
                  e.preventDefault();
                  break;
                case "ArrowUp":
                  e.preventDefault();
                  if (props.loading) return;
                  if (mergedShowRef.value) {
                    (_c = menuRef.value) === null || _c === void 0 ? void 0 : _c.prev();
                  }
                  break;
                case "ArrowDown":
                  e.preventDefault();
                  if (props.loading) return;
                  if (mergedShowRef.value) {
                    (_d = menuRef.value) === null || _d === void 0 ? void 0 : _d.next();
                  } else {
                    openMenu();
                  }
                  break;
                case "Escape":
                  if (mergedShowRef.value) {
                    markEventEffectPerformed(e);
                    closeMenu();
                  }
                  (_e = triggerRef.value) === null || _e === void 0 ? void 0 : _e.focus();
                  break;
              }
            }
            function focusSelection() {
              var _a;
              (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
            }
            function focusSelectionInput() {
              var _a;
              (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
            }
            function handleTriggerOrMenuResize() {
              var _a;
              if (!mergedShowRef.value) return;
              (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
            }
            updateMemorizedOptions();
            watch(toRef(props, "options"), updateMemorizedOptions);
            const exposedMethods = {
              focus: () => {
                var _a;
                (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
              },
              focusInput: () => {
                var _a;
                (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
              },
              blur: () => {
                var _a;
                (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
              },
              blurInput: () => {
                var _a;
                (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blurInput();
              }
            };
            const cssVarsRef = computed(() => {
              const {
                self: {
                  menuBoxShadow
                }
              } = themeRef.value;
              return {
                "--n-menu-box-shadow": menuBoxShadow
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, props) : void 0;
            return Object.assign(Object.assign({}, exposedMethods), {
              mergedStatus: mergedStatusRef,
              mergedClsPrefix: mergedClsPrefixRef,
              mergedBordered: mergedBorderedRef,
              namespace: namespaceRef,
              treeMate: treeMateRef,
              isMounted: isMounted(),
              triggerRef,
              menuRef,
              pattern: patternRef,
              uncontrolledShow: uncontrolledShowRef,
              mergedShow: mergedShowRef,
              adjustedTo: useAdjustedTo(props),
              uncontrolledValue: uncontrolledValueRef,
              mergedValue: mergedValueRef,
              followerRef,
              localizedPlaceholder: localizedPlaceholderRef,
              selectedOption: selectedOptionRef,
              selectedOptions: selectedOptionsRef,
              mergedSize: mergedSizeRef,
              mergedDisabled: mergedDisabledRef,
              focused: focusedRef,
              activeWithoutMenuOpen: activeWithoutMenuOpenRef,
              inlineThemeDisabled,
              onTriggerInputFocus,
              onTriggerInputBlur,
              handleTriggerOrMenuResize,
              handleMenuFocus,
              handleMenuBlur,
              handleMenuTabOut,
              handleTriggerClick,
              handleToggle: handleToggleByTmNode,
              handleDeleteOption: handleToggleByOption,
              handlePatternInput,
              handleClear,
              handleTriggerBlur,
              handleTriggerFocus,
              handleKeydown,
              handleMenuAfterLeave,
              handleMenuClickOutside,
              handleMenuScroll,
              handleMenuKeydown: handleKeydown,
              handleMenuMousedown,
              mergedTheme: themeRef,
              cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            });
          },
          render() {
            return h("div", {
              class: `${this.mergedClsPrefix}-select`
            }, h(Binder, null, {
              default: () => [h(VTarget, null, {
                default: () => h(NInternalSelection, {
                  ref: "triggerRef",
                  inlineThemeDisabled: this.inlineThemeDisabled,
                  status: this.mergedStatus,
                  inputProps: this.inputProps,
                  clsPrefix: this.mergedClsPrefix,
                  showArrow: this.showArrow,
                  maxTagCount: this.maxTagCount,
                  ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
                  bordered: this.mergedBordered,
                  active: this.activeWithoutMenuOpen || this.mergedShow,
                  pattern: this.pattern,
                  placeholder: this.localizedPlaceholder,
                  selectedOption: this.selectedOption,
                  selectedOptions: this.selectedOptions,
                  multiple: this.multiple,
                  renderTag: this.renderTag,
                  renderLabel: this.renderLabel,
                  filterable: this.filterable,
                  clearable: this.clearable,
                  disabled: this.mergedDisabled,
                  size: this.mergedSize,
                  theme: this.mergedTheme.peers.InternalSelection,
                  labelField: this.labelField,
                  valueField: this.valueField,
                  themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
                  loading: this.loading,
                  focused: this.focused,
                  onClick: this.handleTriggerClick,
                  onDeleteOption: this.handleDeleteOption,
                  onPatternInput: this.handlePatternInput,
                  onClear: this.handleClear,
                  onBlur: this.handleTriggerBlur,
                  onFocus: this.handleTriggerFocus,
                  onKeydown: this.handleKeydown,
                  onPatternBlur: this.onTriggerInputBlur,
                  onPatternFocus: this.onTriggerInputFocus,
                  onResize: this.handleTriggerOrMenuResize,
                  ignoreComposition: this.ignoreComposition
                }, {
                  arrow: () => {
                    var _a, _b;
                    return [(_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a)];
                  }
                })
              }), h(VFollower, {
                ref: "followerRef",
                show: this.mergedShow,
                to: this.adjustedTo,
                teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
                containerClass: this.namespace,
                width: this.consistentMenuWidth ? "target" : void 0,
                minWidth: "target",
                placement: this.placement
              }, {
                default: () => h(Transition, {
                  name: "fade-in-scale-up-transition",
                  appear: this.isMounted,
                  onAfterLeave: this.handleMenuAfterLeave
                }, {
                  default: () => {
                    var _a, _b, _c;
                    if (!(this.mergedShow || this.displayDirective === "show")) {
                      return null;
                    }
                    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                    return withDirectives(h(NInternalSelectMenu, Object.assign({}, this.menuProps, {
                      ref: "menuRef",
                      onResize: this.handleTriggerOrMenuResize,
                      inlineThemeDisabled: this.inlineThemeDisabled,
                      virtualScroll: this.consistentMenuWidth && this.virtualScroll,
                      class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (_b = this.menuProps) === null || _b === void 0 ? void 0 : _b.class],
                      clsPrefix: this.mergedClsPrefix,
                      focusable: true,
                      labelField: this.labelField,
                      valueField: this.valueField,
                      autoPending: true,
                      nodeProps: this.nodeProps,
                      theme: this.mergedTheme.peers.InternalSelectMenu,
                      themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
                      treeMate: this.treeMate,
                      multiple: this.multiple,
                      size: this.menuSize,
                      renderOption: this.renderOption,
                      renderLabel: this.renderLabel,
                      value: this.mergedValue,
                      style: [(_c = this.menuProps) === null || _c === void 0 ? void 0 : _c.style, this.cssVars],
                      onToggle: this.handleToggle,
                      onScroll: this.handleMenuScroll,
                      onFocus: this.handleMenuFocus,
                      onBlur: this.handleMenuBlur,
                      onKeydown: this.handleMenuKeydown,
                      onTabOut: this.handleMenuTabOut,
                      onMousedown: this.handleMenuMousedown,
                      show: this.mergedShow,
                      showCheckmark: this.showCheckmark,
                      resetMenuOnOptionsChange: this.resetMenuOnOptionsChange
                    }), {
                      empty: () => {
                        var _a2, _b2;
                        return [(_b2 = (_a2 = this.$slots).empty) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                      },
                      header: () => {
                        var _a2, _b2;
                        return [(_b2 = (_a2 = this.$slots).header) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                      },
                      action: () => {
                        var _a2, _b2;
                        return [(_b2 = (_a2 = this.$slots).action) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                      }
                    }), this.displayDirective === "show" ? [[vShow, this.mergedShow], [clickoutside, this.handleMenuClickOutside, void 0, {
                      capture: true
                    }]] : [[clickoutside, this.handleMenuClickOutside, void 0, {
                      capture: true
                    }]]);
                  }
                })
              })]
            }));
          }
        });

        // vars:
        // --n-bezier
        // --n-box-shadow
        // --n-box-shadow-active
        // --n-box-shadow-disabled
        // --n-box-shadow-focus
        // --n-box-shadow-hover
        // --n-color
        // --n-color-disabled
        // --n-dot-color-active
        // --n-dot-color-disabled
        // --n-font-size
        // --n-radio-size
        // --n-text-color
        // --n-text-color-disabled
        // --n-label-padding
        // --n-label-line-height
        // --n-color-active
        const style$4 = cB('radio', `
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`, [cM('checked', [cE('dot', `
 background-color: var(--n-color-active);
 `)]), cE('dot-wrapper', `
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `), cB('radio-input', `
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `), cE('dot', `
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `, [c$1('&::before', `
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cM('checked', {
          boxShadow: 'var(--n-box-shadow-active)'
        }, [c$1('&::before', `
 opacity: 1;
 transform: scale(1);
 `)])]), cE('label', `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), cNotM('disabled', `
 cursor: pointer;
 `, [c$1('&:hover', [cE('dot', {
          boxShadow: 'var(--n-box-shadow-hover)'
        })]), cM('focus', [c$1('&:not(:active)', [cE('dot', {
          boxShadow: 'var(--n-box-shadow-focus)'
        })])])]), cM('disabled', `
 cursor: not-allowed;
 `, [cE('dot', {
          boxShadow: 'var(--n-box-shadow-disabled)',
          backgroundColor: 'var(--n-color-disabled)'
        }, [c$1('&::before', {
          backgroundColor: 'var(--n-dot-color-disabled)'
        }), cM('checked', `
 opacity: 1;
 `)]), cE('label', {
          color: 'var(--n-text-color-disabled)'
        }), cB('radio-input', `
 cursor: not-allowed;
 `)])]);
        const radioBaseProps = {
          name: String,
          value: {
            type: [String, Number, Boolean],
            default: "on"
          },
          checked: {
            type: Boolean,
            default: void 0
          },
          defaultChecked: Boolean,
          disabled: {
            type: Boolean,
            default: void 0
          },
          label: String,
          size: String,
          onUpdateChecked: [Function, Array],
          "onUpdate:checked": [Function, Array],
          // deprecated
          checkedValue: {
            type: Boolean,
            default: void 0
          }
        };
        const radioGroupInjectionKey = createInjectionKey("n-radio-group");
        function setup(props) {
          const NRadioGroup = inject(radioGroupInjectionKey, null);
          const formItem = useFormItem(props, {
            mergedSize(NFormItem) {
              const {
                size
              } = props;
              if (size !== void 0) return size;
              if (NRadioGroup) {
                const {
                  mergedSizeRef: {
                    value: mergedSize
                  }
                } = NRadioGroup;
                if (mergedSize !== void 0) {
                  return mergedSize;
                }
              }
              if (NFormItem) {
                return NFormItem.mergedSize.value;
              }
              return "medium";
            },
            mergedDisabled(NFormItem) {
              if (props.disabled) return true;
              if (NRadioGroup === null || NRadioGroup === void 0 ? void 0 : NRadioGroup.disabledRef.value) return true;
              if (NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.disabled.value) return true;
              return false;
            }
          });
          const {
            mergedSizeRef,
            mergedDisabledRef
          } = formItem;
          const inputRef = ref(null);
          const labelRef = ref(null);
          const uncontrolledCheckedRef = ref(props.defaultChecked);
          const controlledCheckedRef = toRef(props, "checked");
          const mergedCheckedRef = useMergedState(controlledCheckedRef, uncontrolledCheckedRef);
          const renderSafeCheckedRef = useMemo(() => {
            if (NRadioGroup) return NRadioGroup.valueRef.value === props.value;
            return mergedCheckedRef.value;
          });
          const mergedNameRef = useMemo(() => {
            const {
              name
            } = props;
            if (name !== void 0) return name;
            if (NRadioGroup) return NRadioGroup.nameRef.value;
          });
          const focusRef = ref(false);
          function doUpdateChecked() {
            if (NRadioGroup) {
              const {
                doUpdateValue
              } = NRadioGroup;
              const {
                value
              } = props;
              call(doUpdateValue, value);
            } else {
              const {
                onUpdateChecked,
                "onUpdate:checked": _onUpdateChecked
              } = props;
              const {
                nTriggerFormInput,
                nTriggerFormChange
              } = formItem;
              if (onUpdateChecked) call(onUpdateChecked, true);
              if (_onUpdateChecked) call(_onUpdateChecked, true);
              nTriggerFormInput();
              nTriggerFormChange();
              uncontrolledCheckedRef.value = true;
            }
          }
          function toggle() {
            if (mergedDisabledRef.value) return;
            if (!renderSafeCheckedRef.value) {
              doUpdateChecked();
            }
          }
          function handleRadioInputChange() {
            toggle();
            if (inputRef.value) {
              inputRef.value.checked = renderSafeCheckedRef.value;
            }
          }
          function handleRadioInputBlur() {
            focusRef.value = false;
          }
          function handleRadioInputFocus() {
            focusRef.value = true;
          }
          return {
            mergedClsPrefix: NRadioGroup ? NRadioGroup.mergedClsPrefixRef : useConfig(props).mergedClsPrefixRef,
            inputRef,
            labelRef,
            mergedName: mergedNameRef,
            mergedDisabled: mergedDisabledRef,
            renderSafeChecked: renderSafeCheckedRef,
            focus: focusRef,
            mergedSize: mergedSizeRef,
            handleRadioInputChange,
            handleRadioInputBlur,
            handleRadioInputFocus
          };
        }
        const radioProps = Object.assign(Object.assign({}, useTheme.props), radioBaseProps);
        const __unplugin_components_1$2 = defineComponent({
          name: 'Radio',
          props: radioProps,
          setup(props) {
            const radio = setup(props);
            const themeRef = useTheme('Radio', '-radio', style$4, radioLight, props, radio.mergedClsPrefix);
            const cssVarsRef = computed(() => {
              const {
                mergedSize: {
                  value: size
                }
              } = radio;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  boxShadow,
                  boxShadowActive,
                  boxShadowDisabled,
                  boxShadowFocus,
                  boxShadowHover,
                  color,
                  colorDisabled,
                  colorActive,
                  textColor,
                  textColorDisabled,
                  dotColorActive,
                  dotColorDisabled,
                  labelPadding,
                  labelLineHeight,
                  labelFontWeight,
                  [createKey('fontSize', size)]: fontSize,
                  [createKey('radioSize', size)]: radioSize
                }
              } = themeRef.value;
              return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-label-line-height': labelLineHeight,
                '--n-label-font-weight': labelFontWeight,
                '--n-box-shadow': boxShadow,
                '--n-box-shadow-active': boxShadowActive,
                '--n-box-shadow-disabled': boxShadowDisabled,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-color': color,
                '--n-color-active': colorActive,
                '--n-color-disabled': colorDisabled,
                '--n-dot-color-active': dotColorActive,
                '--n-dot-color-disabled': dotColorDisabled,
                '--n-font-size': fontSize,
                '--n-radio-size': radioSize,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-label-padding': labelPadding
              };
            });
            const {
              inlineThemeDisabled,
              mergedClsPrefixRef,
              mergedRtlRef
            } = useConfig(props);
            const rtlEnabledRef = useRtl('Radio', mergedRtlRef, mergedClsPrefixRef);
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('radio', computed(() => radio.mergedSize.value[0]), cssVarsRef, props) : undefined;
            return Object.assign(radio, {
              rtlEnabled: rtlEnabledRef,
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            });
          },
          render() {
            const {
              $slots,
              mergedClsPrefix,
              onRender,
              label
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return h("label", {
              class: [`${mergedClsPrefix}-radio`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-radio--rtl`, this.mergedDisabled && `${mergedClsPrefix}-radio--disabled`, this.renderSafeChecked && `${mergedClsPrefix}-radio--checked`, this.focus && `${mergedClsPrefix}-radio--focus`],
              style: this.cssVars
            }, h("div", {
              class: `${mergedClsPrefix}-radio__dot-wrapper`
            }, "\u00A0", h("div", {
              class: [`${mergedClsPrefix}-radio__dot`, this.renderSafeChecked && `${mergedClsPrefix}-radio__dot--checked`]
            }), h("input", {
              ref: "inputRef",
              type: "radio",
              class: `${mergedClsPrefix}-radio-input`,
              value: this.value,
              name: this.mergedName,
              checked: this.renderSafeChecked,
              disabled: this.mergedDisabled,
              onChange: this.handleRadioInputChange,
              onFocus: this.handleRadioInputFocus,
              onBlur: this.handleRadioInputBlur
            })), resolveWrappedSlot($slots.default, children => {
              if (!children && !label) return null;
              return h("div", {
                ref: "labelRef",
                class: `${mergedClsPrefix}-radio__label`
              }, children || label);
            }));
          }
        });

        // vars:
        // --n-bezier
        // --n-button-border-color
        // --n-button-border-color-active
        // --n-height
        // --n-opacity-disabled
        // --n-font-size
        const style$3 = cB('radio-group', `
 display: inline-block;
 font-size: var(--n-font-size);
`, [cE('splitor', `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [cM('checked', {
          backgroundColor: 'var(--n-button-border-color-active)'
        }), cM('disabled', {
          opacity: 'var(--n-opacity-disabled)'
        })]), cM('button-group', `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [cB('radio-button', {
          height: 'var(--n-height)',
          lineHeight: 'var(--n-height)'
        }), cE('splitor', {
          height: 'var(--n-height)'
        })]), cB('radio-button', `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `, [cB('radio-input', `
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `), cE('state-border', `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), c$1('&:first-child', `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [cE('state-border', `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), c$1('&:last-child', `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [cE('state-border', `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), cNotM('disabled', `
 cursor: pointer;
 `, [c$1('&:hover', [cE('state-border', `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), cNotM('checked', {
          color: 'var(--n-button-text-color-hover)'
        })]), cM('focus', [c$1('&:not(:active)', [cE('state-border', {
          boxShadow: 'var(--n-button-box-shadow-focus)'
        })])])]), cM('checked', `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), cM('disabled', `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
        function mapSlot(defaultSlot, value, clsPrefix) {
          var _a;
          const children = [];
          let isButtonGroup = false;
          for (let i = 0; i < defaultSlot.length; ++i) {
            const wrappedInstance = defaultSlot[i];
            const name = (_a = wrappedInstance.type) === null || _a === void 0 ? void 0 : _a.name;
            if (name === "RadioButton") {
              isButtonGroup = true;
            }
            const instanceProps = wrappedInstance.props;
            if (name !== "RadioButton") {
              children.push(wrappedInstance);
              continue;
            }
            if (i === 0) {
              children.push(wrappedInstance);
            } else {
              const lastInstanceProps = children[children.length - 1].props;
              const lastInstanceChecked = value === lastInstanceProps.value;
              const lastInstanceDisabled = lastInstanceProps.disabled;
              const currentInstanceChecked = value === instanceProps.value;
              const currentInstanceDisabled = instanceProps.disabled;
              const lastInstancePriority = (lastInstanceChecked ? 2 : 0) + (!lastInstanceDisabled ? 1 : 0);
              const currentInstancePriority = (currentInstanceChecked ? 2 : 0) + (!currentInstanceDisabled ? 1 : 0);
              const lastInstanceClass = {
                [`${clsPrefix}-radio-group__splitor--disabled`]: lastInstanceDisabled,
                [`${clsPrefix}-radio-group__splitor--checked`]: lastInstanceChecked
              };
              const currentInstanceClass = {
                [`${clsPrefix}-radio-group__splitor--disabled`]: currentInstanceDisabled,
                [`${clsPrefix}-radio-group__splitor--checked`]: currentInstanceChecked
              };
              const splitorClass = lastInstancePriority < currentInstancePriority ? currentInstanceClass : lastInstanceClass;
              children.push(h("div", {
                class: [`${clsPrefix}-radio-group__splitor`, splitorClass]
              }), wrappedInstance);
            }
          }
          return {
            children,
            isButtonGroup
          };
        }
        const radioGroupProps = Object.assign(Object.assign({}, useTheme.props), {
          name: String,
          value: [String, Number, Boolean],
          defaultValue: {
            type: [String, Number, Boolean],
            default: null
          },
          size: String,
          disabled: {
            type: Boolean,
            default: void 0
          },
          "onUpdate:value": [Function, Array],
          onUpdateValue: [Function, Array]
        });
        const __unplugin_components_2 = defineComponent({
          name: "RadioGroup",
          props: radioGroupProps,
          setup(props) {
            const selfElRef = ref(null);
            const {
              mergedSizeRef,
              mergedDisabledRef,
              nTriggerFormChange,
              nTriggerFormInput,
              nTriggerFormBlur,
              nTriggerFormFocus
            } = useFormItem(props);
            const {
              mergedClsPrefixRef,
              inlineThemeDisabled,
              mergedRtlRef
            } = useConfig(props);
            const themeRef = useTheme("Radio", "-radio-group", style$3, radioLight, props, mergedClsPrefixRef);
            const uncontrolledValueRef = ref(props.defaultValue);
            const controlledValueRef = toRef(props, "value");
            const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
            function doUpdateValue(value) {
              const {
                onUpdateValue,
                "onUpdate:value": _onUpdateValue
              } = props;
              if (onUpdateValue) {
                call(onUpdateValue, value);
              }
              if (_onUpdateValue) {
                call(_onUpdateValue, value);
              }
              uncontrolledValueRef.value = value;
              nTriggerFormChange();
              nTriggerFormInput();
            }
            function handleFocusin(e) {
              const {
                value: selfEl
              } = selfElRef;
              if (!selfEl) return;
              if (selfEl.contains(e.relatedTarget)) return;
              nTriggerFormFocus();
            }
            function handleFocusout(e) {
              const {
                value: selfEl
              } = selfElRef;
              if (!selfEl) return;
              if (selfEl.contains(e.relatedTarget)) return;
              nTriggerFormBlur();
            }
            provide(radioGroupInjectionKey, {
              mergedClsPrefixRef,
              nameRef: toRef(props, "name"),
              valueRef: mergedValueRef,
              disabledRef: mergedDisabledRef,
              mergedSizeRef,
              doUpdateValue
            });
            const rtlEnabledRef = useRtl("Radio", mergedRtlRef, mergedClsPrefixRef);
            const cssVarsRef = computed(() => {
              const {
                value: size
              } = mergedSizeRef;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  buttonBorderColor,
                  buttonBorderColorActive,
                  buttonBorderRadius,
                  buttonBoxShadow,
                  buttonBoxShadowFocus,
                  buttonBoxShadowHover,
                  buttonColor,
                  buttonColorActive,
                  buttonTextColor,
                  buttonTextColorActive,
                  buttonTextColorHover,
                  opacityDisabled,
                  [createKey("buttonHeight", size)]: height,
                  [createKey("fontSize", size)]: fontSize
                }
              } = themeRef.value;
              return {
                "--n-font-size": fontSize,
                "--n-bezier": cubicBezierEaseInOut,
                "--n-button-border-color": buttonBorderColor,
                "--n-button-border-color-active": buttonBorderColorActive,
                "--n-button-border-radius": buttonBorderRadius,
                "--n-button-box-shadow": buttonBoxShadow,
                "--n-button-box-shadow-focus": buttonBoxShadowFocus,
                "--n-button-box-shadow-hover": buttonBoxShadowHover,
                "--n-button-color": buttonColor,
                "--n-button-color-active": buttonColorActive,
                "--n-button-text-color": buttonTextColor,
                "--n-button-text-color-hover": buttonTextColorHover,
                "--n-button-text-color-active": buttonTextColorActive,
                "--n-height": height,
                "--n-opacity-disabled": opacityDisabled
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass("radio-group", computed(() => mergedSizeRef.value[0]), cssVarsRef, props) : void 0;
            return {
              selfElRef,
              rtlEnabled: rtlEnabledRef,
              mergedClsPrefix: mergedClsPrefixRef,
              mergedValue: mergedValueRef,
              handleFocusout,
              handleFocusin,
              cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            var _a;
            const {
              mergedValue,
              mergedClsPrefix,
              handleFocusin,
              handleFocusout
            } = this;
            const {
              children,
              isButtonGroup
            } = mapSlot(flatten(getSlot(this)), mergedValue, mergedClsPrefix);
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            return h("div", {
              onFocusin: handleFocusin,
              onFocusout: handleFocusout,
              ref: "selfElRef",
              class: [`${mergedClsPrefix}-radio-group`, this.rtlEnabled && `${mergedClsPrefix}-radio-group--rtl`, this.themeClass, isButtonGroup && `${mergedClsPrefix}-radio-group--button-group`],
              style: this.cssVars
            }, children);
          }
        });
        const formInjectionKey = createInjectionKey('n-form');
        const formItemInstsInjectionKey = createInjectionKey('n-form-item-insts');
        const style$2 = cB('form', [cM('inline', `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [cB('form-item', {
          width: 'auto',
          marginRight: '18px'
        }, [c$1('&:last-child', {
          marginRight: 0
        })])])]);
        var __awaiter$1 = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        const formProps = Object.assign(Object.assign({}, useTheme.props), {
          inline: Boolean,
          labelWidth: [Number, String],
          labelAlign: String,
          labelPlacement: {
            type: String,
            default: 'top'
          },
          model: {
            type: Object,
            default: () => {}
          },
          rules: Object,
          disabled: Boolean,
          size: String,
          showRequireMark: {
            type: Boolean,
            default: undefined
          },
          requireMarkPlacement: String,
          showFeedback: {
            type: Boolean,
            default: true
          },
          onSubmit: {
            type: Function,
            default: e => {
              e.preventDefault();
            }
          },
          showLabel: {
            type: Boolean,
            default: undefined
          },
          validateMessages: Object
        });
        const __unplugin_components_4 = defineComponent({
          name: 'Form',
          props: formProps,
          setup(props) {
            const {
              mergedClsPrefixRef
            } = useConfig(props);
            useTheme('Form', '-form', style$2, formLight, props, mergedClsPrefixRef);
            // from path to form-item
            const formItems = {};
            // for label-width = 'auto'
            const maxChildLabelWidthRef = ref(undefined);
            const deriveMaxChildLabelWidth = currentWidth => {
              const currentMaxChildLabelWidth = maxChildLabelWidthRef.value;
              if (currentMaxChildLabelWidth === undefined || currentWidth >= currentMaxChildLabelWidth) {
                maxChildLabelWidthRef.value = currentWidth;
              }
            };
            function validate(validateCallback_1) {
              return __awaiter$1(this, arguments, void 0, function* (validateCallback, shouldRuleBeApplied = () => true) {
                return yield new Promise((resolve, reject) => {
                  const formItemValidationPromises = [];
                  for (const key of keysOf(formItems)) {
                    const formItemInstances = formItems[key];
                    for (const formItemInstance of formItemInstances) {
                      if (formItemInstance.path) {
                        formItemValidationPromises.push(formItemInstance.internalValidate(null, shouldRuleBeApplied));
                      }
                    }
                  }
                  void Promise.all(formItemValidationPromises).then(results => {
                    const formInvalid = results.some(result => !result.valid);
                    const errors = [];
                    const warnings = [];
                    results.forEach(result => {
                      var _a, _b;
                      if ((_a = result.errors) === null || _a === void 0 ? void 0 : _a.length) {
                        errors.push(result.errors);
                      }
                      if ((_b = result.warnings) === null || _b === void 0 ? void 0 : _b.length) {
                        warnings.push(result.warnings);
                      }
                    });
                    if (validateCallback) {
                      validateCallback(errors.length ? errors : undefined, {
                        warnings: warnings.length ? warnings : undefined
                      });
                    }
                    if (formInvalid) {
                      reject(errors.length ? errors : undefined);
                    } else {
                      resolve({
                        warnings: warnings.length ? warnings : undefined
                      });
                    }
                  });
                });
              });
            }
            function restoreValidation() {
              for (const key of keysOf(formItems)) {
                const formItemInstances = formItems[key];
                for (const formItemInstance of formItemInstances) {
                  formItemInstance.restoreValidation();
                }
              }
            }
            provide(formInjectionKey, {
              props,
              maxChildLabelWidthRef,
              deriveMaxChildLabelWidth
            });
            provide(formItemInstsInjectionKey, {
              formItems
            });
            const formExposedMethod = {
              validate,
              restoreValidation
            };
            return Object.assign(formExposedMethod, {
              mergedClsPrefix: mergedClsPrefixRef
            });
          },
          render() {
            const {
              mergedClsPrefix
            } = this;
            return h("form", {
              class: [`${mergedClsPrefix}-form`, this.inline && `${mergedClsPrefix}-form--inline`],
              onSubmit: this.onSubmit
            }, this.$slots);
          }
        });
        function _extends() {
          _extends = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct.bind();
          } else {
            _construct = function _construct2(Parent2, args2, Class2) {
              var a = [null];
              a.push.apply(a, args2);
              var Constructor = Function.bind.apply(Parent2, a);
              var instance = new Constructor();
              if (Class2) _setPrototypeOf(instance, Class2.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? /* @__PURE__ */new Map() : void 0;
          _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
            if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
            if (typeof Class2 !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class2)) return _cache.get(Class2);
              _cache.set(Class2, Wrapper);
            }
            function Wrapper() {
              return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class2.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            return _setPrototypeOf(Wrapper, Class2);
          };
          return _wrapNativeSuper(Class);
        }
        var formatRegExp = /%[sdj%]/g;
        var warning = function warning2() {};
        function convertFieldsError(errors) {
          if (!errors || !errors.length) return null;
          var fields = {};
          errors.forEach(function (error) {
            var field = error.field;
            fields[field] = fields[field] || [];
            fields[field].push(error);
          });
          return fields;
        }
        function format(template) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var i = 0;
          var len = args.length;
          if (typeof template === "function") {
            return template.apply(null, args);
          }
          if (typeof template === "string") {
            var str = template.replace(formatRegExp, function (x) {
              if (x === "%%") {
                return "%";
              }
              if (i >= len) {
                return x;
              }
              switch (x) {
                case "%s":
                  return String(args[i++]);
                case "%d":
                  return Number(args[i++]);
                case "%j":
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return "[Circular]";
                  }
                  break;
                default:
                  return x;
              }
            });
            return str;
          }
          return template;
        }
        function isNativeStringType(type4) {
          return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
        }
        function isEmptyValue(value, type4) {
          if (value === void 0 || value === null) {
            return true;
          }
          if (type4 === "array" && Array.isArray(value) && !value.length) {
            return true;
          }
          if (isNativeStringType(type4) && typeof value === "string" && !value) {
            return true;
          }
          return false;
        }
        function asyncParallelArray(arr, func, callback) {
          var results = [];
          var total = 0;
          var arrLength = arr.length;
          function count(errors) {
            results.push.apply(results, errors || []);
            total++;
            if (total === arrLength) {
              callback(results);
            }
          }
          arr.forEach(function (a) {
            func(a, count);
          });
        }
        function asyncSerialArray(arr, func, callback) {
          var index = 0;
          var arrLength = arr.length;
          function next(errors) {
            if (errors && errors.length) {
              callback(errors);
              return;
            }
            var original = index;
            index = index + 1;
            if (original < arrLength) {
              func(arr[original], next);
            } else {
              callback([]);
            }
          }
          next([]);
        }
        function flattenObjArr(objArr) {
          var ret = [];
          Object.keys(objArr).forEach(function (k) {
            ret.push.apply(ret, objArr[k] || []);
          });
          return ret;
        }
        var AsyncValidationError = /* @__PURE__ */function (_Error) {
          _inheritsLoose(AsyncValidationError2, _Error);
          function AsyncValidationError2(errors, fields) {
            var _this;
            _this = _Error.call(this, "Async Validation Error") || this;
            _this.errors = errors;
            _this.fields = fields;
            return _this;
          }
          return AsyncValidationError2;
        }(/* @__PURE__ */_wrapNativeSuper(Error));
        function asyncMap(objArr, option, func, callback, source) {
          if (option.first) {
            var _pending = new Promise(function (resolve, reject) {
              var next = function next2(errors) {
                callback(errors);
                return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
              };
              var flattenArr = flattenObjArr(objArr);
              asyncSerialArray(flattenArr, func, next);
            });
            _pending["catch"](function (e) {
              return e;
            });
            return _pending;
          }
          var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
          var objArrKeys = Object.keys(objArr);
          var objArrLength = objArrKeys.length;
          var total = 0;
          var results = [];
          var pending = new Promise(function (resolve, reject) {
            var next = function next2(errors) {
              results.push.apply(results, errors);
              total++;
              if (total === objArrLength) {
                callback(results);
                return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
              }
            };
            if (!objArrKeys.length) {
              callback(results);
              resolve(source);
            }
            objArrKeys.forEach(function (key) {
              var arr = objArr[key];
              if (firstFields.indexOf(key) !== -1) {
                asyncSerialArray(arr, func, next);
              } else {
                asyncParallelArray(arr, func, next);
              }
            });
          });
          pending["catch"](function (e) {
            return e;
          });
          return pending;
        }
        function isErrorObj(obj) {
          return !!(obj && obj.message !== void 0);
        }
        function getValue(value, path) {
          var v = value;
          for (var i = 0; i < path.length; i++) {
            if (v == void 0) {
              return v;
            }
            v = v[path[i]];
          }
          return v;
        }
        function complementError(rule, source) {
          return function (oe) {
            var fieldValue;
            if (rule.fullFields) {
              fieldValue = getValue(source, rule.fullFields);
            } else {
              fieldValue = source[oe.field || rule.fullField];
            }
            if (isErrorObj(oe)) {
              oe.field = oe.field || rule.fullField;
              oe.fieldValue = fieldValue;
              return oe;
            }
            return {
              message: typeof oe === "function" ? oe() : oe,
              fieldValue,
              field: oe.field || rule.fullField
            };
          };
        }
        function deepMerge(target, source) {
          if (source) {
            for (var s in source) {
              if (source.hasOwnProperty(s)) {
                var value = source[s];
                if (typeof value === "object" && typeof target[s] === "object") {
                  target[s] = _extends({}, target[s], value);
                } else {
                  target[s] = value;
                }
              }
            }
          }
          return target;
        }
        var required$1 = function required(rule, value, source, errors, options, type4) {
          if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
            errors.push(format(options.messages.required, rule.fullField));
          }
        };
        var whitespace = function whitespace2(rule, value, source, errors, options) {
          if (/^\s+$/.test(value) || value === "") {
            errors.push(format(options.messages.whitespace, rule.fullField));
          }
        };
        var urlReg;
        var getUrlRegex = function () {
          if (urlReg) {
            return urlReg;
          }
          var word = "[a-fA-F\\d:]";
          var b = function b2(options) {
            return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
          };
          var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
          var v6seg = "[a-fA-F\\d]{1,4}";
          var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
          var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
          var v4exact = new RegExp("^" + v4 + "$");
          var v6exact = new RegExp("^" + v6 + "$");
          var ip = function ip2(options) {
            return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", "g");
          };
          ip.v4 = function (options) {
            return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), "g");
          };
          ip.v6 = function (options) {
            return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), "g");
          };
          var protocol = "(?:(?:[a-z]+:)?//)";
          var auth = "(?:\\S+(?::\\S*)?@)?";
          var ipv4 = ip.v4().source;
          var ipv6 = ip.v6().source;
          var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
          var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
          var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
          var port = "(?::\\d{2,5})?";
          var path = '(?:[/?#][^\\s"]*)?';
          var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
          urlReg = new RegExp("(?:^" + regex + "$)", "i");
          return urlReg;
        };
        var pattern$2 = {
          // http://emailregex.com/
          email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
          // url: new RegExp(
          //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
          //   'i',
          // ),
          hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
        };
        var types = {
          integer: function integer(value) {
            return types.number(value) && parseInt(value, 10) === value;
          },
          "float": function float(value) {
            return types.number(value) && !types.integer(value);
          },
          array: function array(value) {
            return Array.isArray(value);
          },
          regexp: function regexp(value) {
            if (value instanceof RegExp) {
              return true;
            }
            try {
              return !!new RegExp(value);
            } catch (e) {
              return false;
            }
          },
          date: function date(value) {
            return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
          },
          number: function number(value) {
            if (isNaN(value)) {
              return false;
            }
            return typeof value === "number";
          },
          object: function object(value) {
            return typeof value === "object" && !types.array(value);
          },
          method: function method(value) {
            return typeof value === "function";
          },
          email: function email(value) {
            return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
          },
          url: function url(value) {
            return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
          },
          hex: function hex(value) {
            return typeof value === "string" && !!value.match(pattern$2.hex);
          }
        };
        var type$1 = function type(rule, value, source, errors, options) {
          if (rule.required && value === void 0) {
            required$1(rule, value, source, errors, options);
            return;
          }
          var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
          var ruleType = rule.type;
          if (custom.indexOf(ruleType) > -1) {
            if (!types[ruleType](value)) {
              errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
            }
          } else if (ruleType && typeof value !== rule.type) {
            errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
          }
        };
        var range = function range2(rule, value, source, errors, options) {
          var len = typeof rule.len === "number";
          var min = typeof rule.min === "number";
          var max = typeof rule.max === "number";
          var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
          var val = value;
          var key = null;
          var num = typeof value === "number";
          var str = typeof value === "string";
          var arr = Array.isArray(value);
          if (num) {
            key = "number";
          } else if (str) {
            key = "string";
          } else if (arr) {
            key = "array";
          }
          if (!key) {
            return false;
          }
          if (arr) {
            val = value.length;
          }
          if (str) {
            val = value.replace(spRegexp, "_").length;
          }
          if (len) {
            if (val !== rule.len) {
              errors.push(format(options.messages[key].len, rule.fullField, rule.len));
            }
          } else if (min && !max && val < rule.min) {
            errors.push(format(options.messages[key].min, rule.fullField, rule.min));
          } else if (max && !min && val > rule.max) {
            errors.push(format(options.messages[key].max, rule.fullField, rule.max));
          } else if (min && max && (val < rule.min || val > rule.max)) {
            errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
          }
        };
        var ENUM$1 = "enum";
        var enumerable$1 = function enumerable(rule, value, source, errors, options) {
          rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
          if (rule[ENUM$1].indexOf(value) === -1) {
            errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
          }
        };
        var pattern$1 = function pattern(rule, value, source, errors, options) {
          if (rule.pattern) {
            if (rule.pattern instanceof RegExp) {
              rule.pattern.lastIndex = 0;
              if (!rule.pattern.test(value)) {
                errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
              }
            } else if (typeof rule.pattern === "string") {
              var _pattern = new RegExp(rule.pattern);
              if (!_pattern.test(value)) {
                errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
              }
            }
          }
        };
        var rules = {
          required: required$1,
          whitespace,
          type: type$1,
          range,
          "enum": enumerable$1,
          pattern: pattern$1
        };
        var string = function string2(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, "string") && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options, "string");
            if (!isEmptyValue(value, "string")) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
              rules.pattern(rule, value, source, errors, options);
              if (rule.whitespace === true) {
                rules.whitespace(rule, value, source, errors, options);
              }
            }
          }
          callback(errors);
        };
        var method2 = function method3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var number2 = function number3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (value === "") {
              value = void 0;
            }
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var _boolean = function _boolean2(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var regexp2 = function regexp3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (!isEmptyValue(value)) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var integer2 = function integer3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var floatFn = function floatFn2(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var array2 = function array3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if ((value === void 0 || value === null) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options, "array");
            if (value !== void 0 && value !== null) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var object2 = function object3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var ENUM = "enum";
        var enumerable2 = function enumerable3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== void 0) {
              rules[ENUM](rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var pattern2 = function pattern3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, "string") && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (!isEmptyValue(value, "string")) {
              rules.pattern(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var date2 = function date3(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, "date") && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (!isEmptyValue(value, "date")) {
              var dateObject;
              if (value instanceof Date) {
                dateObject = value;
              } else {
                dateObject = new Date(value);
              }
              rules.type(rule, dateObject, source, errors, options);
              if (dateObject) {
                rules.range(rule, dateObject.getTime(), source, errors, options);
              }
            }
          }
          callback(errors);
        };
        var required2 = function required3(rule, value, callback, source, options) {
          var errors = [];
          var type4 = Array.isArray(value) ? "array" : typeof value;
          rules.required(rule, value, source, errors, options, type4);
          callback(errors);
        };
        var type2 = function type3(rule, value, callback, source, options) {
          var ruleType = rule.type;
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, ruleType) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options, ruleType);
            if (!isEmptyValue(value, ruleType)) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var any = function any2(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
          }
          callback(errors);
        };
        var validators = {
          string,
          method: method2,
          number: number2,
          "boolean": _boolean,
          regexp: regexp2,
          integer: integer2,
          "float": floatFn,
          array: array2,
          object: object2,
          "enum": enumerable2,
          pattern: pattern2,
          date: date2,
          url: type2,
          hex: type2,
          email: type2,
          required: required2,
          any
        };
        function newMessages() {
          return {
            "default": "Validation error on field %s",
            required: "%s is required",
            "enum": "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
              format: "%s date %s is invalid for format %s",
              parse: "%s date could not be parsed, %s is invalid ",
              invalid: "%s date %s is invalid"
            },
            types: {
              string: "%s is not a %s",
              method: "%s is not a %s (function)",
              array: "%s is not an %s",
              object: "%s is not an %s",
              number: "%s is not a %s",
              date: "%s is not a %s",
              "boolean": "%s is not a %s",
              integer: "%s is not an %s",
              "float": "%s is not a %s",
              regexp: "%s is not a valid %s",
              email: "%s is not a valid %s",
              url: "%s is not a valid %s",
              hex: "%s is not a valid %s"
            },
            string: {
              len: "%s must be exactly %s characters",
              min: "%s must be at least %s characters",
              max: "%s cannot be longer than %s characters",
              range: "%s must be between %s and %s characters"
            },
            number: {
              len: "%s must equal %s",
              min: "%s cannot be less than %s",
              max: "%s cannot be greater than %s",
              range: "%s must be between %s and %s"
            },
            array: {
              len: "%s must be exactly %s in length",
              min: "%s cannot be less than %s in length",
              max: "%s cannot be greater than %s in length",
              range: "%s must be between %s and %s in length"
            },
            pattern: {
              mismatch: "%s value %s does not match pattern %s"
            },
            clone: function clone() {
              var cloned = JSON.parse(JSON.stringify(this));
              cloned.clone = this.clone;
              return cloned;
            }
          };
        }
        var messages = newMessages();
        var Schema = /* @__PURE__ */function () {
          function Schema2(descriptor) {
            this.rules = null;
            this._messages = messages;
            this.define(descriptor);
          }
          var _proto = Schema2.prototype;
          _proto.define = function define(rules2) {
            var _this = this;
            if (!rules2) {
              throw new Error("Cannot configure a schema with no rules");
            }
            if (typeof rules2 !== "object" || Array.isArray(rules2)) {
              throw new Error("Rules must be an object");
            }
            this.rules = {};
            Object.keys(rules2).forEach(function (name) {
              var item = rules2[name];
              _this.rules[name] = Array.isArray(item) ? item : [item];
            });
          };
          _proto.messages = function messages2(_messages) {
            if (_messages) {
              this._messages = deepMerge(newMessages(), _messages);
            }
            return this._messages;
          };
          _proto.validate = function validate(source_, o, oc) {
            var _this2 = this;
            if (o === void 0) {
              o = {};
            }
            if (oc === void 0) {
              oc = function oc2() {};
            }
            var source = source_;
            var options = o;
            var callback = oc;
            if (typeof options === "function") {
              callback = options;
              options = {};
            }
            if (!this.rules || Object.keys(this.rules).length === 0) {
              if (callback) {
                callback(null, source);
              }
              return Promise.resolve(source);
            }
            function complete(results) {
              var errors = [];
              var fields = {};
              function add(e) {
                if (Array.isArray(e)) {
                  var _errors;
                  errors = (_errors = errors).concat.apply(_errors, e);
                } else {
                  errors.push(e);
                }
              }
              for (var i = 0; i < results.length; i++) {
                add(results[i]);
              }
              if (!errors.length) {
                callback(null, source);
              } else {
                fields = convertFieldsError(errors);
                callback(errors, fields);
              }
            }
            if (options.messages) {
              var messages$1 = this.messages();
              if (messages$1 === messages) {
                messages$1 = newMessages();
              }
              deepMerge(messages$1, options.messages);
              options.messages = messages$1;
            } else {
              options.messages = this.messages();
            }
            var series = {};
            var keys = options.keys || Object.keys(this.rules);
            keys.forEach(function (z) {
              var arr = _this2.rules[z];
              var value = source[z];
              arr.forEach(function (r) {
                var rule = r;
                if (typeof rule.transform === "function") {
                  if (source === source_) {
                    source = _extends({}, source);
                  }
                  value = source[z] = rule.transform(value);
                }
                if (typeof rule === "function") {
                  rule = {
                    validator: rule
                  };
                } else {
                  rule = _extends({}, rule);
                }
                rule.validator = _this2.getValidationMethod(rule);
                if (!rule.validator) {
                  return;
                }
                rule.field = z;
                rule.fullField = rule.fullField || z;
                rule.type = _this2.getType(rule);
                series[z] = series[z] || [];
                series[z].push({
                  rule,
                  value,
                  source,
                  field: z
                });
              });
            });
            var errorFields = {};
            return asyncMap(series, options, function (data, doIt) {
              var rule = data.rule;
              var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
              deep = deep && (rule.required || !rule.required && data.value);
              rule.field = data.field;
              function addFullField(key, schema) {
                return _extends({}, schema, {
                  fullField: rule.fullField + "." + key,
                  fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
                });
              }
              function cb(e) {
                if (e === void 0) {
                  e = [];
                }
                var errorList = Array.isArray(e) ? e : [e];
                if (!options.suppressWarning && errorList.length) {
                  Schema2.warning("async-validator:", errorList);
                }
                if (errorList.length && rule.message !== void 0) {
                  errorList = [].concat(rule.message);
                }
                var filledErrors = errorList.map(complementError(rule, source));
                if (options.first && filledErrors.length) {
                  errorFields[rule.field] = 1;
                  return doIt(filledErrors);
                }
                if (!deep) {
                  doIt(filledErrors);
                } else {
                  if (rule.required && !data.value) {
                    if (rule.message !== void 0) {
                      filledErrors = [].concat(rule.message).map(complementError(rule, source));
                    } else if (options.error) {
                      filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
                    }
                    return doIt(filledErrors);
                  }
                  var fieldsSchema = {};
                  if (rule.defaultField) {
                    Object.keys(data.value).map(function (key) {
                      fieldsSchema[key] = rule.defaultField;
                    });
                  }
                  fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                  var paredFieldsSchema = {};
                  Object.keys(fieldsSchema).forEach(function (field) {
                    var fieldSchema = fieldsSchema[field];
                    var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                    paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                  });
                  var schema = new Schema2(paredFieldsSchema);
                  schema.messages(options.messages);
                  if (data.rule.options) {
                    data.rule.options.messages = options.messages;
                    data.rule.options.error = options.error;
                  }
                  schema.validate(data.value, data.rule.options || options, function (errs) {
                    var finalErrors = [];
                    if (filledErrors && filledErrors.length) {
                      finalErrors.push.apply(finalErrors, filledErrors);
                    }
                    if (errs && errs.length) {
                      finalErrors.push.apply(finalErrors, errs);
                    }
                    doIt(finalErrors.length ? finalErrors : null);
                  });
                }
              }
              var res;
              if (rule.asyncValidator) {
                res = rule.asyncValidator(rule, data.value, cb, data.source, options);
              } else if (rule.validator) {
                try {
                  res = rule.validator(rule, data.value, cb, data.source, options);
                } catch (error) {
                  console.error == null ? void 0 : console.error(error);
                  if (!options.suppressValidatorError) {
                    setTimeout(function () {
                      throw error;
                    }, 0);
                  }
                  cb(error.message);
                }
                if (res === true) {
                  cb();
                } else if (res === false) {
                  cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
                } else if (res instanceof Array) {
                  cb(res);
                } else if (res instanceof Error) {
                  cb(res.message);
                }
              }
              if (res && res.then) {
                res.then(function () {
                  return cb();
                }, function (e) {
                  return cb(e);
                });
              }
            }, function (results) {
              complete(results);
            }, source);
          };
          _proto.getType = function getType(rule) {
            if (rule.type === void 0 && rule.pattern instanceof RegExp) {
              rule.type = "pattern";
            }
            if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
              throw new Error(format("Unknown rule type %s", rule.type));
            }
            return rule.type || "string";
          };
          _proto.getValidationMethod = function getValidationMethod(rule) {
            if (typeof rule.validator === "function") {
              return rule.validator;
            }
            var keys = Object.keys(rule);
            var messageIndex = keys.indexOf("message");
            if (messageIndex !== -1) {
              keys.splice(messageIndex, 1);
            }
            if (keys.length === 1 && keys[0] === "required") {
              return validators.required;
            }
            return validators[this.getType(rule)] || void 0;
          };
          return Schema2;
        }();
        Schema.register = function register(type4, validator) {
          if (typeof validator !== "function") {
            throw new Error("Cannot register a validator by type, validator is not a function");
          }
          validators[type4] = validator;
        };
        Schema.warning = warning;
        Schema.messages = messages;
        Schema.validators = validators;
        const {
          cubicBezierEaseInOut
        } = commonVariables;
        function fadeDownTransition({
          name = 'fade-down',
          fromOffset = '-4px',
          enterDuration = '.3s',
          leaveDuration = '.3s',
          enterCubicBezier = cubicBezierEaseInOut,
          leaveCubicBezier = cubicBezierEaseInOut
        } = {}) {
          return [c$1(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
            opacity: 0,
            transform: `translateY(${fromOffset})`
          }), c$1(`&.${name}-transition-enter-to, &.${name}-transition-leave-from`, {
            opacity: 1,
            transform: 'translateY(0)'
          }), c$1(`&.${name}-transition-leave-active`, {
            transition: `opacity ${leaveDuration} ${leaveCubicBezier}, transform ${leaveDuration} ${leaveCubicBezier}`
          }), c$1(`&.${name}-transition-enter-active`, {
            transition: `opacity ${enterDuration} ${enterCubicBezier}, transform ${enterDuration} ${enterCubicBezier}`
          })];
        }

        // vars:
        // --n-line-height
        // --n-blank-height
        // --n-feedback-padding
        // --n-feedback-font-size
        // --n-label-font-size-left
        // --n-label-font-size-top
        // --n-label-height
        // --n-label-padding
        // --n-asterisk-color
        // --n-label-text-color
        // --n-bezier
        // --n-feedback-text-color
        // --n-feedback-text-color-warning
        // --n-feedback-text-color-error
        // --n-label-text-align
        // --n-label-padding
        const style$1 = cB('form-item', `
 display: grid;
 line-height: var(--n-line-height);
`, [cB('form-item-label', `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `, [cE('asterisk', `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), cE('asterisk-placeholder', `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), cB('form-item-blank', `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), cM('auto-label-width', [cB('form-item-label', 'white-space: nowrap;')]), cM('left-labelled', `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [cB('form-item-label', `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [cM('reverse-columns-space', `
 grid-template-columns: auto 1fr;
 `), cM('left-mark', `
 grid-template-areas:
 "mark text"
 ". text";
 `), cM('right-mark', `
 grid-template-areas: 
 "text mark"
 "text .";
 `), cM('right-hanging-mark', `
 grid-template-areas: 
 "text mark"
 "text .";
 `), cE('text', `
 grid-area: text; 
 `), cE('asterisk', `
 grid-area: mark; 
 align-self: end;
 `)])]), cM('top-labelled', `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [cM('no-label', `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), cB('form-item-label', `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), cB('form-item-blank', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), cB('form-item-feedback-wrapper', `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [c$1('&:not(:empty)', `
 padding: var(--n-feedback-padding);
 `), cB('form-item-feedback', {
          transition: 'color .3s var(--n-bezier)',
          color: 'var(--n-feedback-text-color)'
        }, [cM('warning', {
          color: 'var(--n-feedback-text-color-warning)'
        }), cM('error', {
          color: 'var(--n-feedback-text-color-error)'
        }), fadeDownTransition({
          fromOffset: '-3px',
          enterDuration: '.3s',
          leaveDuration: '.2s'
        })])])]);
        function formItemSize(props) {
          const NForm = inject(formInjectionKey, null);
          return {
            mergedSize: computed(() => {
              if (props.size !== undefined) return props.size;
              if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.size) !== undefined) return NForm.props.size;
              return 'medium';
            })
          };
        }
        function formItemMisc(props) {
          const NForm = inject(formInjectionKey, null);
          const mergedLabelPlacementRef = computed(() => {
            const {
              labelPlacement
            } = props;
            if (labelPlacement !== undefined) return labelPlacement;
            if (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelPlacement) return NForm.props.labelPlacement;
            return 'top';
          });
          const isAutoLabelWidthRef = computed(() => {
            return mergedLabelPlacementRef.value === 'left' && (props.labelWidth === 'auto' || (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelWidth) === 'auto');
          });
          const mergedLabelWidthRef = computed(() => {
            if (mergedLabelPlacementRef.value === 'top') return;
            const {
              labelWidth
            } = props;
            if (labelWidth !== undefined && labelWidth !== 'auto') {
              return formatLength(labelWidth);
            }
            if (isAutoLabelWidthRef.value) {
              const autoComputedWidth = NForm === null || NForm === void 0 ? void 0 : NForm.maxChildLabelWidthRef.value;
              if (autoComputedWidth !== undefined) {
                return formatLength(autoComputedWidth);
              } else {
                return undefined;
              }
            }
            if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.labelWidth) !== undefined) {
              return formatLength(NForm.props.labelWidth);
            }
            return undefined;
          });
          const mergedLabelAlignRef = computed(() => {
            const {
              labelAlign
            } = props;
            if (labelAlign) return labelAlign;
            if (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelAlign) return NForm.props.labelAlign;
            return undefined;
          });
          const mergedLabelStyleRef = computed(() => {
            var _a;
            return [(_a = props.labelProps) === null || _a === void 0 ? void 0 : _a.style, props.labelStyle, {
              width: mergedLabelWidthRef.value
            }];
          });
          const mergedShowRequireMarkRef = computed(() => {
            const {
              showRequireMark
            } = props;
            if (showRequireMark !== undefined) return showRequireMark;
            return NForm === null || NForm === void 0 ? void 0 : NForm.props.showRequireMark;
          });
          const mergedRequireMarkPlacementRef = computed(() => {
            const {
              requireMarkPlacement
            } = props;
            if (requireMarkPlacement !== undefined) return requireMarkPlacement;
            return (NForm === null || NForm === void 0 ? void 0 : NForm.props.requireMarkPlacement) || 'right';
          });
          const validationErroredRef = ref(false);
          const validationWarnedRef = ref(false);
          const mergedValidationStatusRef = computed(() => {
            const {
              validationStatus
            } = props;
            if (validationStatus !== undefined) return validationStatus;
            if (validationErroredRef.value) return 'error';
            if (validationWarnedRef.value) return 'warning';
            return undefined;
          });
          const mergedShowFeedbackRef = computed(() => {
            const {
              showFeedback
            } = props;
            if (showFeedback !== undefined) return showFeedback;
            if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.showFeedback) !== undefined) return NForm.props.showFeedback;
            return true;
          });
          const mergedShowLabelRef = computed(() => {
            const {
              showLabel
            } = props;
            if (showLabel !== undefined) return showLabel;
            if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.showLabel) !== undefined) return NForm.props.showLabel;
            return true;
          });
          return {
            validationErrored: validationErroredRef,
            validationWarned: validationWarnedRef,
            mergedLabelStyle: mergedLabelStyleRef,
            mergedLabelPlacement: mergedLabelPlacementRef,
            mergedLabelAlign: mergedLabelAlignRef,
            mergedShowRequireMark: mergedShowRequireMarkRef,
            mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
            mergedValidationStatus: mergedValidationStatusRef,
            mergedShowFeedback: mergedShowFeedbackRef,
            mergedShowLabel: mergedShowLabelRef,
            isAutoLabelWidth: isAutoLabelWidthRef
          };
        }
        function formItemRule(props) {
          const NForm = inject(formInjectionKey, null);
          const compatibleRulePathRef = computed(() => {
            const {
              rulePath
            } = props;
            if (rulePath !== undefined) return rulePath;
            const {
              path
            } = props;
            if (path !== undefined) return path;
            return undefined;
          });
          const mergedRulesRef = computed(() => {
            const rules = [];
            const {
              rule
            } = props;
            if (rule !== undefined) {
              if (Array.isArray(rule)) rules.push(...rule);else rules.push(rule);
            }
            if (NForm) {
              const {
                rules: formRules
              } = NForm.props;
              const {
                value: rulePath
              } = compatibleRulePathRef;
              if (formRules !== undefined && rulePath !== undefined) {
                const formRule = get(formRules, rulePath);
                if (formRule !== undefined) {
                  if (Array.isArray(formRule)) {
                    rules.push(...formRule);
                  } else {
                    // terminate object must be a form item rule
                    rules.push(formRule);
                  }
                }
              }
            }
            return rules;
          });
          const hasRequiredRuleRef = computed(() => {
            return mergedRulesRef.value.some(rule => rule.required);
          });
          // deprecated
          const mergedRequiredRef = computed(() => {
            return hasRequiredRuleRef.value || props.required;
          });
          return {
            mergedRules: mergedRulesRef,
            mergedRequired: mergedRequiredRef
          };
        }
        var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        const formItemProps = Object.assign(Object.assign({}, useTheme.props), {
          label: String,
          labelWidth: [Number, String],
          labelStyle: [String, Object],
          labelAlign: String,
          labelPlacement: String,
          path: String,
          first: Boolean,
          rulePath: String,
          required: Boolean,
          showRequireMark: {
            type: Boolean,
            default: undefined
          },
          requireMarkPlacement: String,
          showFeedback: {
            type: Boolean,
            default: undefined
          },
          rule: [Object, Array],
          size: String,
          ignorePathChange: Boolean,
          validationStatus: String,
          feedback: String,
          feedbackClass: String,
          feedbackStyle: [String, Object],
          showLabel: {
            type: Boolean,
            default: undefined
          },
          labelProps: Object,
          contentClass: String,
          contentStyle: [String, Object]
        });
        // wrap sync validator
        function wrapValidator(validator, async) {
          return (...args) => {
            try {
              const validateResult = validator(...args);
              if (!async && (typeof validateResult === 'boolean' || validateResult instanceof Error || Array.isArray(validateResult)) // Error[]
              || (validateResult === null || validateResult === void 0 ? void 0 : validateResult.then)) {
                return validateResult;
              } else if (validateResult === undefined) {
                return true;
              } else {
                warn('form-item/validate', `You return a ${typeof validateResult} ` + `typed value in the validator method, which is not recommended. Please use ${async ? '`Promise`' : '`boolean`, `Error` or `Promise`'} typed value instead.`);
                return true;
              }
            } catch (err) {
              warn('form-item/validate', 'An error is catched in the validation, ' + 'so the validation won\'t be done. Your callback in `validate` method of ' + '`n-form` or `n-form-item` won\'t be called in this validation.');
              console.error(err);
              // If returns undefined, async-validator won't trigger callback
              // so the result will be abandoned, which means not true and not false
              return undefined;
            }
          };
        }
        const __unplugin_components_1$1 = defineComponent({
          name: 'FormItem',
          props: formItemProps,
          setup(props) {
            useInjectionInstanceCollection(formItemInstsInjectionKey, 'formItems', toRef(props, 'path'));
            const {
              mergedClsPrefixRef,
              inlineThemeDisabled
            } = useConfig(props);
            const NForm = inject(formInjectionKey, null);
            const formItemSizeRefs = formItemSize(props);
            const formItemMiscRefs = formItemMisc(props);
            const {
              validationErrored: validationErroredRef,
              validationWarned: validationWarnedRef
            } = formItemMiscRefs;
            const {
              mergedRequired: mergedRequiredRef,
              mergedRules: mergedRulesRef
            } = formItemRule(props);
            const {
              mergedSize: mergedSizeRef
            } = formItemSizeRefs;
            const {
              mergedLabelPlacement: labelPlacementRef,
              mergedLabelAlign: labelTextAlignRef,
              mergedRequireMarkPlacement: mergedRequireMarkPlacementRef
            } = formItemMiscRefs;
            const renderExplainsRef = ref([]);
            const feedbackIdRef = ref(createId());
            const mergedDisabledRef = NForm ? toRef(NForm.props, 'disabled') : ref(false);
            const themeRef = useTheme('Form', '-form-item', style$1, formLight, props, mergedClsPrefixRef);
            watch(toRef(props, 'path'), () => {
              if (props.ignorePathChange) return;
              restoreValidation();
            });
            function restoreValidation() {
              renderExplainsRef.value = [];
              validationErroredRef.value = false;
              validationWarnedRef.value = false;
              if (props.feedback) {
                feedbackIdRef.value = createId();
              }
            }
            const internalValidate = (...args_1) => __awaiter(this, [...args_1], void 0, function* (trigger = null, shouldRuleBeApplied = () => true, options = {
              suppressWarning: true
            }) {
              const {
                path
              } = props;
              if (!options) {
                options = {};
              } else {
                if (!options.first) options.first = props.first;
              }
              const {
                value: rules
              } = mergedRulesRef;
              const value = NForm ? get(NForm.props.model, path || '') : undefined;
              const messageRenderers = {};
              const originalMessageRendersMessage = {};
              const activeRules = (!trigger ? rules : rules.filter(rule => {
                if (Array.isArray(rule.trigger)) {
                  return rule.trigger.includes(trigger);
                } else {
                  return rule.trigger === trigger;
                }
              })).filter(shouldRuleBeApplied).map((rule, i) => {
                const shallowClonedRule = Object.assign({}, rule);
                if (shallowClonedRule.validator) {
                  shallowClonedRule.validator = wrapValidator(shallowClonedRule.validator, false);
                }
                if (shallowClonedRule.asyncValidator) {
                  shallowClonedRule.asyncValidator = wrapValidator(shallowClonedRule.asyncValidator, true);
                }
                if (shallowClonedRule.renderMessage) {
                  const rendererKey = `__renderMessage__${i}`;
                  originalMessageRendersMessage[rendererKey] = shallowClonedRule.message;
                  shallowClonedRule.message = rendererKey;
                  messageRenderers[rendererKey] = shallowClonedRule.renderMessage;
                }
                return shallowClonedRule;
              });
              const activeErrorRules = activeRules.filter(r => r.level !== 'warning');
              const activeWarningRules = activeRules.filter(r => r.level === 'warning');
              const validationResult = {
                valid: true,
                errors: undefined,
                warnings: undefined
              };
              if (!activeRules.length) return validationResult;
              const mergedPath = path !== null && path !== void 0 ? path : '__n_no_path__';
              const validator = new Schema({
                [mergedPath]: activeErrorRules
              });
              const warningValidator = new Schema({
                [mergedPath]: activeWarningRules
              });
              const {
                validateMessages
              } = (NForm === null || NForm === void 0 ? void 0 : NForm.props) || {};
              if (validateMessages) {
                validator.messages(validateMessages);
                warningValidator.messages(validateMessages);
              }
              const renderMessages = errors => {
                renderExplainsRef.value = errors.map(error => {
                  const transformedMessage = (error === null || error === void 0 ? void 0 : error.message) || '';
                  return {
                    key: transformedMessage,
                    render: () => {
                      if (transformedMessage.startsWith('__renderMessage__')) {
                        return messageRenderers[transformedMessage]();
                      }
                      return transformedMessage;
                    }
                  };
                });
                errors.forEach(error => {
                  var _a;
                  if ((_a = error.message) === null || _a === void 0 ? void 0 : _a.startsWith('__renderMessage__')) {
                    error.message = originalMessageRendersMessage[error.message];
                  }
                });
              };
              if (activeErrorRules.length) {
                const errors = yield new Promise(resolve => {
                  void validator.validate({
                    [mergedPath]: value
                  }, options, resolve);
                });
                if (errors === null || errors === void 0 ? void 0 : errors.length) {
                  validationResult.valid = false;
                  validationResult.errors = errors;
                  renderMessages(errors);
                }
              }
              // if there are already errors, warning check can be skipped
              if (activeWarningRules.length && !validationResult.errors) {
                const warnings = yield new Promise(resolve => {
                  void warningValidator.validate({
                    [mergedPath]: value
                  }, options, resolve);
                });
                if (warnings === null || warnings === void 0 ? void 0 : warnings.length) {
                  renderMessages(warnings);
                  validationResult.warnings = warnings;
                }
              }
              if (!validationResult.errors && !validationResult.warnings) {
                restoreValidation();
              } else {
                validationErroredRef.value = !!validationResult.errors;
                validationWarnedRef.value = !!validationResult.warnings;
              }
              return validationResult;
            });
            function handleContentBlur() {
              void internalValidate('blur');
            }
            function handleContentChange() {
              void internalValidate('change');
            }
            function handleContentFocus() {
              void internalValidate('focus');
            }
            function handleContentInput() {
              void internalValidate('input');
            }
            function validate(options, callback) {
              return __awaiter(this, void 0, void 0, function* () {
                /** the following code is for compatibility */
                let trigger;
                let validateCallback;
                let shouldRuleBeApplied;
                let asyncValidatorOptions;
                if (typeof options === 'string') {
                  trigger = options;
                  validateCallback = callback;
                } else if (options !== null && typeof options === 'object') {
                  trigger = options.trigger;
                  validateCallback = options.callback;
                  shouldRuleBeApplied = options.shouldRuleBeApplied;
                  asyncValidatorOptions = options.options;
                }
                return yield new Promise((resolve, reject) => {
                  void internalValidate(trigger, shouldRuleBeApplied, asyncValidatorOptions).then(({
                    valid,
                    errors,
                    warnings
                  }) => {
                    if (valid) {
                      if (validateCallback) {
                        validateCallback(undefined, {
                          warnings
                        });
                      }
                      resolve({
                        warnings
                      });
                    } else {
                      if (validateCallback) {
                        validateCallback(errors, {
                          warnings
                        });
                      }
                      reject(errors);
                    }
                  });
                });
              });
            }
            provide(formItemInjectionKey, {
              path: toRef(props, 'path'),
              disabled: mergedDisabledRef,
              mergedSize: formItemSizeRefs.mergedSize,
              mergedValidationStatus: formItemMiscRefs.mergedValidationStatus,
              restoreValidation,
              handleContentBlur,
              handleContentChange,
              handleContentFocus,
              handleContentInput
            });
            const exposedRef = {
              validate,
              restoreValidation,
              internalValidate
            };
            const labelElementRef = ref(null);
            onMounted(() => {
              if (!formItemMiscRefs.isAutoLabelWidth.value) return;
              const labelElement = labelElementRef.value;
              if (labelElement !== null) {
                const memoizedWhitespace = labelElement.style.whiteSpace;
                labelElement.style.whiteSpace = 'nowrap';
                labelElement.style.width = '';
                NForm === null || NForm === void 0 ? void 0 : NForm.deriveMaxChildLabelWidth(Number(getComputedStyle(labelElement).width.slice(0, -2)));
                labelElement.style.whiteSpace = memoizedWhitespace;
              }
            });
            const cssVarsRef = computed(() => {
              var _a;
              const {
                value: size
              } = mergedSizeRef;
              const {
                value: labelPlacement
              } = labelPlacementRef;
              const direction = labelPlacement === 'top' ? 'vertical' : 'horizontal';
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  labelTextColor,
                  asteriskColor,
                  lineHeight,
                  feedbackTextColor,
                  feedbackTextColorWarning,
                  feedbackTextColorError,
                  feedbackPadding,
                  labelFontWeight,
                  [createKey('labelHeight', size)]: labelHeight,
                  [createKey('blankHeight', size)]: blankHeight,
                  [createKey('feedbackFontSize', size)]: feedbackFontSize,
                  [createKey('feedbackHeight', size)]: feedbackHeight,
                  [createKey('labelPadding', direction)]: labelPadding,
                  [createKey('labelTextAlign', direction)]: labelTextAlign,
                  [createKey(createKey('labelFontSize', labelPlacement), size)]: labelFontSize
                }
              } = themeRef.value;
              let mergedLabelTextAlign = (_a = labelTextAlignRef.value) !== null && _a !== void 0 ? _a : labelTextAlign;
              if (labelPlacement === 'top') {
                mergedLabelTextAlign = mergedLabelTextAlign === 'right' ? 'flex-end' : 'flex-start';
              }
              const cssVars = {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-line-height': lineHeight,
                '--n-blank-height': blankHeight,
                '--n-label-font-size': labelFontSize,
                '--n-label-text-align': mergedLabelTextAlign,
                '--n-label-height': labelHeight,
                '--n-label-padding': labelPadding,
                '--n-label-font-weight': labelFontWeight,
                '--n-asterisk-color': asteriskColor,
                '--n-label-text-color': labelTextColor,
                '--n-feedback-padding': feedbackPadding,
                '--n-feedback-font-size': feedbackFontSize,
                '--n-feedback-height': feedbackHeight,
                '--n-feedback-text-color': feedbackTextColor,
                '--n-feedback-text-color-warning': feedbackTextColorWarning,
                '--n-feedback-text-color-error': feedbackTextColorError
              };
              return cssVars;
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('form-item', computed(() => {
              var _a;
              return `${mergedSizeRef.value[0]}${labelPlacementRef.value[0]}${((_a = labelTextAlignRef.value) === null || _a === void 0 ? void 0 : _a[0]) || ''}`;
            }), cssVarsRef, props) : undefined;
            const reverseColSpaceRef = computed(() => {
              // label placement left
              // require-mark-placement | label align | areas (1fr auto)
              // left                   | left        | mark text (need reverse)
              // left                   | right       | mark text (okay)
              // right                  | left        | mark text (okay)
              // right                  | right       | mark text (okay)
              // right-hanging          | left        | text mark (okay)
              // right-hanging          | right       | text mark (okay)
              return labelPlacementRef.value === 'left' && mergedRequireMarkPlacementRef.value === 'left' && labelTextAlignRef.value === 'left';
            });
            return Object.assign(Object.assign(Object.assign(Object.assign({
              labelElementRef,
              mergedClsPrefix: mergedClsPrefixRef,
              mergedRequired: mergedRequiredRef,
              feedbackId: feedbackIdRef,
              renderExplains: renderExplainsRef,
              reverseColSpace: reverseColSpaceRef
            }, formItemMiscRefs), formItemSizeRefs), exposedRef), {
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            });
          },
          render() {
            const {
              $slots,
              mergedClsPrefix,
              mergedShowLabel,
              mergedShowRequireMark,
              mergedRequireMarkPlacement,
              onRender
            } = this;
            const renderedShowRequireMark = mergedShowRequireMark !== undefined ? mergedShowRequireMark : this.mergedRequired;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            const renderLabel = () => {
              const labelText = this.$slots.label ? this.$slots.label() : this.label;
              if (!labelText) return null;
              const textNode = h("span", {
                class: `${mergedClsPrefix}-form-item-label__text`
              }, labelText);
              const markNode = renderedShowRequireMark ? h("span", {
                class: `${mergedClsPrefix}-form-item-label__asterisk`
              }, mergedRequireMarkPlacement !== 'left' ? '\u00A0*' : '*\u00A0') : mergedRequireMarkPlacement === 'right-hanging' && h("span", {
                class: `${mergedClsPrefix}-form-item-label__asterisk-placeholder`
              }, '\u00A0*');
              const {
                labelProps
              } = this;
              return h("label", Object.assign({}, labelProps, {
                class: [labelProps === null || labelProps === void 0 ? void 0 : labelProps.class, `${mergedClsPrefix}-form-item-label`, `${mergedClsPrefix}-form-item-label--${mergedRequireMarkPlacement}-mark`, this.reverseColSpace && `${mergedClsPrefix}-form-item-label--reverse-columns-space`],
                style: this.mergedLabelStyle,
                ref: "labelElementRef"
              }), mergedRequireMarkPlacement === 'left' ? [markNode, textNode] : [textNode, markNode]);
            };
            return h("div", {
              class: [`${mergedClsPrefix}-form-item`, this.themeClass, `${mergedClsPrefix}-form-item--${this.mergedSize}-size`, `${mergedClsPrefix}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${mergedClsPrefix}-form-item--auto-label-width`, !mergedShowLabel && `${mergedClsPrefix}-form-item--no-label`],
              style: this.cssVars
            }, mergedShowLabel && renderLabel(), h("div", {
              class: [`${mergedClsPrefix}-form-item-blank`, this.contentClass, this.mergedValidationStatus && `${mergedClsPrefix}-form-item-blank--${this.mergedValidationStatus}`],
              style: this.contentStyle
            }, $slots), this.mergedShowFeedback ? h("div", {
              key: this.feedbackId,
              style: this.feedbackStyle,
              class: [`${mergedClsPrefix}-form-item-feedback-wrapper`, this.feedbackClass]
            }, h(Transition, {
              name: "fade-down-transition",
              mode: "out-in"
            }, {
              default: () => {
                const {
                  mergedValidationStatus
                } = this;
                return resolveWrappedSlot($slots.feedback, children => {
                  var _a;
                  const {
                    feedback
                  } = this;
                  const feedbackNodes = children || feedback ? h("div", {
                    key: "__feedback__",
                    class: `${mergedClsPrefix}-form-item-feedback__line`
                  }, children || feedback) : this.renderExplains.length ? (_a = this.renderExplains) === null || _a === void 0 ? void 0 : _a.map(({
                    key,
                    render
                  }) => h("div", {
                    key: key,
                    class: `${mergedClsPrefix}-form-item-feedback__line`
                  }, render())) : null;
                  return feedbackNodes ? mergedValidationStatus === 'warning' ? h("div", {
                    key: "controlled-warning",
                    class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--warning`
                  }, feedbackNodes) : mergedValidationStatus === 'error' ? h("div", {
                    key: "controlled-error",
                    class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--error`
                  }, feedbackNodes) : mergedValidationStatus === 'success' ? h("div", {
                    key: "controlled-success",
                    class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--success`
                  }, feedbackNodes) : h("div", {
                    key: "controlled-default",
                    class: `${mergedClsPrefix}-form-item-feedback`
                  }, feedbackNodes) : null;
                });
              }
            })) : null);
          }
        });
        const iconMap$1 = {
          success: h(SuccessIcon, null),
          error: h(ErrorIcon, null),
          warning: h(WarningIcon, null),
          info: h(InfoIcon, null)
        };
        const Circle = defineComponent({
          name: 'ProgressCircle',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            status: {
              type: String,
              required: true
            },
            strokeWidth: {
              type: Number,
              required: true
            },
            fillColor: [String, Object],
            railColor: String,
            railStyle: [String, Object],
            percentage: {
              type: Number,
              default: 0
            },
            offsetDegree: {
              type: Number,
              default: 0
            },
            showIndicator: {
              type: Boolean,
              required: true
            },
            indicatorTextColor: String,
            unit: String,
            viewBoxWidth: {
              type: Number,
              required: true
            },
            gapDegree: {
              type: Number,
              required: true
            },
            gapOffsetDegree: {
              type: Number,
              default: 0
            }
          },
          setup(props, {
            slots
          }) {
            const gradientIdRef = computed(() => {
              const base = 'gradient';
              const {
                fillColor
              } = props;
              if (typeof fillColor === 'object') {
                return `${base}-${murmur2(JSON.stringify(fillColor))}`;
              }
              return base;
            });
            function getPathStyles(percent, offsetDegree, strokeColor, type) {
              const {
                gapDegree,
                viewBoxWidth,
                strokeWidth
              } = props;
              const radius = 50;
              const beginPositionX = 0;
              const beginPositionY = radius;
              const endPositionX = 0;
              const endPositionY = 2 * radius;
              const centerX = 50 + strokeWidth / 2;
              const pathString = `M ${centerX},${centerX} m ${beginPositionX},${beginPositionY}
      a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
      a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
              const len = Math.PI * 2 * radius;
              const pathStyle = {
                stroke: type === 'rail' ? strokeColor : typeof props.fillColor === 'object' ? `url(#${gradientIdRef.value})` : strokeColor,
                strokeDasharray: `${Math.min(percent, 100) / 100 * (len - gapDegree)}px ${viewBoxWidth * 8}px`,
                strokeDashoffset: `-${gapDegree / 2}px`,
                transformOrigin: offsetDegree ? 'center' : undefined,
                transform: offsetDegree ? `rotate(${offsetDegree}deg)` : undefined
              };
              return {
                pathString,
                pathStyle
              };
            }
            const createGradientNode = () => {
              const isGradient = typeof props.fillColor === 'object';
              const from = isGradient ? props.fillColor.stops[0] : '';
              const to = isGradient ? props.fillColor.stops[1] : '';
              return isGradient && h("defs", null, h("linearGradient", {
                id: gradientIdRef.value,
                x1: "0%",
                y1: "100%",
                x2: "100%",
                y2: "0%"
              }, h("stop", {
                offset: "0%",
                "stop-color": from
              }), h("stop", {
                offset: "100%",
                "stop-color": to
              })));
            };
            return () => {
              const {
                fillColor,
                railColor,
                strokeWidth,
                offsetDegree,
                status,
                percentage,
                showIndicator,
                indicatorTextColor,
                unit,
                gapOffsetDegree,
                clsPrefix
              } = props;
              const {
                pathString: railPathString,
                pathStyle: railPathStyle
              } = getPathStyles(100, 0, railColor, 'rail');
              const {
                pathString: fillPathString,
                pathStyle: fillPathStyle
              } = getPathStyles(percentage, offsetDegree, fillColor, 'fill');
              const viewBoxSize = 100 + strokeWidth;
              return h("div", {
                class: `${clsPrefix}-progress-content`,
                role: "none"
              }, h("div", {
                class: `${clsPrefix}-progress-graph`,
                "aria-hidden": true
              }, h("div", {
                class: `${clsPrefix}-progress-graph-circle`,
                style: {
                  transform: gapOffsetDegree ? `rotate(${gapOffsetDegree}deg)` : undefined
                }
              }, h("svg", {
                viewBox: `0 0 ${viewBoxSize} ${viewBoxSize}`
              }, createGradientNode(), h("g", null, h("path", {
                class: `${clsPrefix}-progress-graph-circle-rail`,
                d: railPathString,
                "stroke-width": strokeWidth,
                "stroke-linecap": "round",
                fill: "none",
                style: railPathStyle
              })), h("g", null, h("path", {
                class: [`${clsPrefix}-progress-graph-circle-fill`, percentage === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
                d: fillPathString,
                "stroke-width": strokeWidth,
                "stroke-linecap": "round",
                fill: "none",
                style: fillPathStyle
              }))))), showIndicator ? h("div", null, slots.default ? h("div", {
                class: `${clsPrefix}-progress-custom-content`,
                role: "none"
              }, slots.default()) : status !== 'default' ? h("div", {
                class: `${clsPrefix}-progress-icon`,
                "aria-hidden": true
              }, h(NBaseIcon, {
                clsPrefix: clsPrefix
              }, {
                default: () => iconMap$1[status]
              })) : h("div", {
                class: `${clsPrefix}-progress-text`,
                style: {
                  color: indicatorTextColor
                },
                role: "none"
              }, h("span", {
                class: `${clsPrefix}-progress-text__percentage`
              }, percentage), h("span", {
                class: `${clsPrefix}-progress-text__unit`
              }, unit))) : null);
            };
          }
        });
        const iconMap = {
          success: h(SuccessIcon, null),
          error: h(ErrorIcon, null),
          warning: h(WarningIcon, null),
          info: h(InfoIcon, null)
        };
        const Line = defineComponent({
          name: 'ProgressLine',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            percentage: {
              type: Number,
              default: 0
            },
            railColor: String,
            railStyle: [String, Object],
            fillColor: [String, Object],
            status: {
              type: String,
              required: true
            },
            indicatorPlacement: {
              type: String,
              required: true
            },
            indicatorTextColor: String,
            unit: {
              type: String,
              default: '%'
            },
            processing: {
              type: Boolean,
              required: true
            },
            showIndicator: {
              type: Boolean,
              required: true
            },
            height: [String, Number],
            railBorderRadius: [String, Number],
            fillBorderRadius: [String, Number]
          },
          setup(props, {
            slots
          }) {
            const styleHeightRef = computed(() => {
              return formatLength(props.height);
            });
            const styleFillColorRef = computed(() => {
              var _a, _b;
              return typeof props.fillColor === 'object' ? `linear-gradient(to right, ${(_a = props.fillColor) === null || _a === void 0 ? void 0 : _a.stops[0]} , ${(_b = props.fillColor) === null || _b === void 0 ? void 0 : _b.stops[1]})` : props.fillColor;
            });
            const styleRailBorderRadiusRef = computed(() => {
              if (props.railBorderRadius !== undefined) {
                return formatLength(props.railBorderRadius);
              }
              if (props.height !== undefined) {
                return formatLength(props.height, {
                  c: 0.5
                });
              }
              return '';
            });
            const styleFillBorderRadiusRef = computed(() => {
              if (props.fillBorderRadius !== undefined) {
                return formatLength(props.fillBorderRadius);
              }
              if (props.railBorderRadius !== undefined) {
                return formatLength(props.railBorderRadius);
              }
              if (props.height !== undefined) {
                return formatLength(props.height, {
                  c: 0.5
                });
              }
              return '';
            });
            return () => {
              const {
                indicatorPlacement,
                railColor,
                railStyle,
                percentage,
                unit,
                indicatorTextColor,
                status,
                showIndicator,
                processing,
                clsPrefix
              } = props;
              return h("div", {
                class: `${clsPrefix}-progress-content`,
                role: "none"
              }, h("div", {
                class: `${clsPrefix}-progress-graph`,
                "aria-hidden": true
              }, h("div", {
                class: [`${clsPrefix}-progress-graph-line`, {
                  [`${clsPrefix}-progress-graph-line--indicator-${indicatorPlacement}`]: true
                }]
              }, h("div", {
                class: `${clsPrefix}-progress-graph-line-rail`,
                style: [{
                  backgroundColor: railColor,
                  height: styleHeightRef.value,
                  borderRadius: styleRailBorderRadiusRef.value
                }, railStyle]
              }, h("div", {
                class: [`${clsPrefix}-progress-graph-line-fill`, processing && `${clsPrefix}-progress-graph-line-fill--processing`],
                style: {
                  maxWidth: `${props.percentage}%`,
                  background: styleFillColorRef.value,
                  height: styleHeightRef.value,
                  lineHeight: styleHeightRef.value,
                  borderRadius: styleFillBorderRadiusRef.value
                }
              }, indicatorPlacement === 'inside' ? h("div", {
                class: `${clsPrefix}-progress-graph-line-indicator`,
                style: {
                  color: indicatorTextColor
                }
              }, slots.default ? slots.default() : `${percentage}${unit}`) : null)))), showIndicator && indicatorPlacement === 'outside' ? h("div", null, slots.default ? h("div", {
                class: `${clsPrefix}-progress-custom-content`,
                style: {
                  color: indicatorTextColor
                },
                role: "none"
              }, slots.default()) : status === 'default' ? h("div", {
                role: "none",
                class: `${clsPrefix}-progress-icon ${clsPrefix}-progress-icon--as-text`,
                style: {
                  color: indicatorTextColor
                }
              }, percentage, unit) : h("div", {
                class: `${clsPrefix}-progress-icon`,
                "aria-hidden": true
              }, h(NBaseIcon, {
                clsPrefix: clsPrefix
              }, {
                default: () => iconMap[status]
              }))) : null);
            };
          }
        });
        function circlePath(r, sw, vw = 100) {
          return `m ${vw / 2} ${vw / 2 - r} a ${r} ${r} 0 1 1 0 ${2 * r} a ${r} ${r} 0 1 1 0 -${2 * r}`;
        }
        const MultipleCircle = defineComponent({
          name: 'ProgressMultipleCircle',
          props: {
            clsPrefix: {
              type: String,
              required: true
            },
            viewBoxWidth: {
              type: Number,
              required: true
            },
            percentage: {
              type: Array,
              default: [0]
            },
            strokeWidth: {
              type: Number,
              required: true
            },
            circleGap: {
              type: Number,
              required: true
            },
            showIndicator: {
              type: Boolean,
              required: true
            },
            fillColor: {
              type: Array,
              default: () => []
            },
            railColor: {
              type: Array,
              default: () => []
            },
            railStyle: {
              type: Array,
              default: () => []
            }
          },
          setup(props, {
            slots
          }) {
            const strokeDasharrayRef = computed(() => {
              const strokeDasharrays = props.percentage.map((v, i) => `${Math.PI * v / 100 * (props.viewBoxWidth / 2 - props.strokeWidth / 2 * (1 + 2 * i) - props.circleGap * i) * 2}, ${props.viewBoxWidth * 8}`);
              return strokeDasharrays;
            });
            const createGradientNode = (p, index) => {
              const item = props.fillColor[index];
              const form = typeof item === 'object' ? item.stops[0] : '';
              const to = typeof item === 'object' ? item.stops[1] : '';
              return typeof props.fillColor[index] === 'object' && h("linearGradient", {
                id: `gradient-${index}`,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "100%"
              }, h("stop", {
                offset: "0%",
                "stop-color": form
              }), h("stop", {
                offset: "100%",
                "stop-color": to
              }));
            };
            return () => {
              const {
                viewBoxWidth,
                strokeWidth,
                circleGap,
                showIndicator,
                fillColor,
                railColor,
                railStyle,
                percentage,
                clsPrefix
              } = props;
              return h("div", {
                class: `${clsPrefix}-progress-content`,
                role: "none"
              }, h("div", {
                class: `${clsPrefix}-progress-graph`,
                "aria-hidden": true
              }, h("div", {
                class: `${clsPrefix}-progress-graph-circle`
              }, h("svg", {
                viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`
              }, h("defs", null, percentage.map((p, index) => {
                return createGradientNode(p, index);
              })), percentage.map((p, index) => {
                return h("g", {
                  key: index
                }, h("path", {
                  class: `${clsPrefix}-progress-graph-circle-rail`,
                  d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index) - circleGap * index, strokeWidth, viewBoxWidth),
                  "stroke-width": strokeWidth,
                  "stroke-linecap": "round",
                  fill: "none",
                  style: [{
                    strokeDashoffset: 0,
                    stroke: railColor[index]
                  }, railStyle[index]]
                }), h("path", {
                  class: [`${clsPrefix}-progress-graph-circle-fill`, p === 0 && `${clsPrefix}-progress-graph-circle-fill--empty`],
                  d: circlePath(viewBoxWidth / 2 - strokeWidth / 2 * (1 + 2 * index) - circleGap * index, strokeWidth, viewBoxWidth),
                  "stroke-width": strokeWidth,
                  "stroke-linecap": "round",
                  fill: "none",
                  style: {
                    strokeDasharray: strokeDasharrayRef.value[index],
                    strokeDashoffset: 0,
                    stroke: typeof fillColor[index] === 'object' ? `url(#gradient-${index})` : fillColor[index]
                  }
                }));
              })))), showIndicator && slots.default ? h("div", null, h("div", {
                class: `${clsPrefix}-progress-text`
              }, slots.default())) : null);
            };
          }
        });

        // vars
        // --n-bezier
        // --n-fill-color
        // --n-font-size
        // --n-font-size-circle
        // --n-font-weight-circle
        // --n-icon-color
        // --n-icon-size-circle
        // --n-icon-size-line
        // --n-line-bg-processing
        // --n-rail-color
        // --n-rail-height
        // --n-text-color-circle
        // --n-text-color-line-inner
        // --n-text-color-line-outer
        const style = c$1([cB('progress', {
          display: 'inline-block'
        }, [cB('progress-icon', `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), cM('line', `
 width: 100%;
 display: block;
 `, [cB('progress-content', `
 display: flex;
 align-items: center;
 `, [cB('progress-graph', {
          flex: 1
        })]), cB('progress-custom-content', {
          marginLeft: '14px'
        }), cB('progress-icon', `
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `, [cM('as-text', `
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]), cM('circle, dashboard', {
          width: '120px'
        }, [cB('progress-custom-content', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `), cB('progress-text', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `), cB('progress-icon', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]), cM('multiple-circle', `
 width: 200px;
 color: inherit;
 `, [cB('progress-text', `
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]), cB('progress-content', {
          position: 'relative'
        }), cB('progress-graph', {
          position: 'relative'
        }, [cB('progress-graph-circle', [c$1('svg', {
          verticalAlign: 'bottom'
        }), cB('progress-graph-circle-fill', `
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `, [cM('empty', {
          opacity: 0
        })]), cB('progress-graph-circle-rail', `
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]), cB('progress-graph-line', [cM('indicator-inside', [cB('progress-graph-line-rail', `
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `, [cB('progress-graph-line-fill', `
 height: inherit;
 border-radius: 10px;
 `), cB('progress-graph-line-indicator', `
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]), cM('indicator-inside-label', `
 height: 16px;
 display: flex;
 align-items: center;
 `, [cB('progress-graph-line-rail', `
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `), cB('progress-graph-line-indicator', `
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), cB('progress-graph-line-rail', `
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `, [cB('progress-graph-line-fill', `
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `, [cM('processing', [c$1('&::after', `
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]), c$1('@keyframes progress-processing-animation', `
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]);
        const progressProps = Object.assign(Object.assign({}, useTheme.props), {
          processing: Boolean,
          type: {
            type: String,
            default: 'line'
          },
          gapDegree: Number,
          gapOffsetDegree: Number,
          status: {
            type: String,
            default: 'default'
          },
          railColor: [String, Array],
          railStyle: [String, Array],
          color: [String, Array, Object],
          viewBoxWidth: {
            type: Number,
            default: 100
          },
          strokeWidth: {
            type: Number,
            default: 7
          },
          percentage: [Number, Array],
          unit: {
            type: String,
            default: '%'
          },
          showIndicator: {
            type: Boolean,
            default: true
          },
          indicatorPosition: {
            type: String,
            default: 'outside'
          },
          indicatorPlacement: {
            type: String,
            default: 'outside'
          },
          indicatorTextColor: String,
          circleGap: {
            type: Number,
            default: 1
          },
          height: Number,
          borderRadius: [String, Number],
          fillBorderRadius: [String, Number],
          offsetDegree: Number
        });
        const __unplugin_components_1 = defineComponent({
          name: 'Progress',
          props: progressProps,
          setup(props) {
            const mergedIndicatorPlacementRef = computed(() => {
              return props.indicatorPlacement || props.indicatorPosition;
            });
            const gapDeg = computed(() => {
              if (props.gapDegree || props.gapDegree === 0) {
                return props.gapDegree;
              }
              if (props.type === 'dashboard') {
                return 75;
              }
              return undefined;
            });
            const {
              mergedClsPrefixRef,
              inlineThemeDisabled
            } = useConfig(props);
            const themeRef = useTheme('Progress', '-progress', style, progressLight, props, mergedClsPrefixRef);
            const cssVarsRef = computed(() => {
              const {
                status
              } = props;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  fontSize,
                  fontSizeCircle,
                  railColor,
                  railHeight,
                  iconSizeCircle,
                  iconSizeLine,
                  textColorCircle,
                  textColorLineInner,
                  textColorLineOuter,
                  lineBgProcessing,
                  fontWeightCircle,
                  [createKey('iconColor', status)]: iconColor,
                  [createKey('fillColor', status)]: fillColor
                }
              } = themeRef.value;
              return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-fill-color': fillColor,
                '--n-font-size': fontSize,
                '--n-font-size-circle': fontSizeCircle,
                '--n-font-weight-circle': fontWeightCircle,
                '--n-icon-color': iconColor,
                '--n-icon-size-circle': iconSizeCircle,
                '--n-icon-size-line': iconSizeLine,
                '--n-line-bg-processing': lineBgProcessing,
                '--n-rail-color': railColor,
                '--n-rail-height': railHeight,
                '--n-text-color-circle': textColorCircle,
                '--n-text-color-line-inner': textColorLineInner,
                '--n-text-color-line-outer': textColorLineOuter
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('progress', computed(() => props.status[0]), cssVarsRef, props) : undefined;
            return {
              mergedClsPrefix: mergedClsPrefixRef,
              mergedIndicatorPlacement: mergedIndicatorPlacementRef,
              gapDeg,
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            // it's ok to expand all prop here since no slots' deps
            const {
              type,
              cssVars,
              indicatorTextColor,
              showIndicator,
              status,
              railColor,
              railStyle,
              color,
              percentage,
              viewBoxWidth,
              strokeWidth,
              mergedIndicatorPlacement,
              unit,
              borderRadius,
              fillBorderRadius,
              height,
              processing,
              circleGap,
              mergedClsPrefix,
              gapDeg,
              gapOffsetDegree,
              themeClass,
              $slots,
              onRender
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return h("div", {
              class: [themeClass, `${mergedClsPrefix}-progress`, `${mergedClsPrefix}-progress--${type}`, `${mergedClsPrefix}-progress--${status}`],
              style: cssVars,
              "aria-valuemax": 100,
              "aria-valuemin": 0,
              "aria-valuenow": percentage,
              role: type === 'circle' || type === 'line' || type === 'dashboard' ? 'progressbar' : 'none'
            }, type === 'circle' || type === 'dashboard' ? h(Circle, {
              clsPrefix: mergedClsPrefix,
              status: status,
              showIndicator: showIndicator,
              indicatorTextColor: indicatorTextColor,
              railColor: railColor,
              fillColor: color,
              railStyle: railStyle,
              offsetDegree: this.offsetDegree,
              percentage: percentage,
              viewBoxWidth: viewBoxWidth,
              strokeWidth: strokeWidth,
              gapDegree: gapDeg === undefined ? type === 'dashboard' ? 75 : 0 : gapDeg,
              gapOffsetDegree: gapOffsetDegree,
              unit: unit
            }, $slots) : type === 'line' ? h(Line, {
              clsPrefix: mergedClsPrefix,
              status: status,
              showIndicator: showIndicator,
              indicatorTextColor: indicatorTextColor,
              railColor: railColor,
              fillColor: color,
              railStyle: railStyle,
              percentage: percentage,
              processing: processing,
              indicatorPlacement: mergedIndicatorPlacement,
              unit: unit,
              fillBorderRadius: fillBorderRadius,
              railBorderRadius: borderRadius,
              height: height
            }, $slots) : type === 'multiple-circle' ? h(MultipleCircle, {
              clsPrefix: mergedClsPrefix,
              strokeWidth: strokeWidth,
              railColor: railColor,
              fillColor: color,
              railStyle: railStyle,
              viewBoxWidth: viewBoxWidth,
              percentage: percentage,
              showIndicator: showIndicator,
              circleGap: circleGap
            }, $slots) : null);
          }
        });
        const SETTINGS_DATA_KEY = Symbol("settings-data");
        const SETTINGS_MESSAGE_KEY = Symbol("settings-message");
        const SETTINGS_DIALOG_KEY = Symbol("settings-dialog");
        const _hoisted_1$k = ["disabled"];
        const _hoisted_2$j = {
          key: 0,
          class: "ri-loader-4-line animate-spin text-sm"
        };
        const _sfc_main$n = /* @__PURE__ */defineComponent({
          ...{
            name: "SBtn"
          },
          __name: "SBtn",
          props: {
            variant: {
              default: "default"
            },
            disabled: {
              type: Boolean,
              default: false
            },
            loading: {
              type: Boolean,
              default: false
            }
          },
          emits: ["click"],
          setup(__props) {
            const props = __props;
            const variantClass = computed(() => {
              switch (props.variant) {
                case "primary":
                  return "bg-primary text-white hover:bg-primary/85 shadow-sm shadow-primary/20";
                case "danger":
                  return "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/60";
                case "ghost":
                  return "bg-transparent text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800";
                default:
                  return "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700";
              }
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("button", {
                disabled: __props.disabled || __props.loading,
                class: normalizeClass(["inline-flex items-center justify-center gap-1.5 rounded-[10px] px-3.5 py-1.5 text-sm font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95", variantClass.value]),
                onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit("click", $event))
              }, [__props.loading ? (openBlock(), createElementBlock("i", _hoisted_2$j)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 10, _hoisted_1$k);
            };
          }
        });
        const _hoisted_1$j = {
          class: "flex-1 min-w-0 mr-4"
        };
        const _hoisted_2$i = {
          class: "text-base font-medium mb-0.5"
        };
        const _hoisted_3$g = {
          key: 0,
          class: "text-sm text-gray-500 dark:text-gray-400 leading-normal"
        };
        const _hoisted_4$e = {
          key: 1,
          class: "mt-2"
        };
        const _sfc_main$m = /* @__PURE__ */defineComponent({
          ...{
            name: "SettingItem"
          },
          __name: "SettingItem",
          props: {
            title: {
              default: ""
            },
            description: {
              default: ""
            },
            clickable: {
              type: Boolean,
              default: false
            },
            inline: {
              type: Boolean,
              default: false
            },
            customClass: {
              default: ""
            }
          },
          emits: ["click"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const handleClick = event => {
              if (props.clickable) {
                emit("click", event);
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["setting-item flex items-center justify-between p-4 rounded-lg transition-all bg-light dark:bg-dark text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 hover:dark:bg-gray-800", [
                // 移动端垂直布局
                {
                  "max-md:flex-col max-md:items-start max-md:gap-3 max-md:p-3": !__props.inline
                },
                // 可点击样式
                {
                  "cursor-pointer hover:text-green-500 hover:!bg-green-50 hover:dark:!bg-green-900/30": __props.clickable
                }, __props.customClass]]),
                onClick: handleClick
              }, [createBaseVNode("div", _hoisted_1$j, [createBaseVNode("div", _hoisted_2$i, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])]), __props.description || _ctx.$slots.description ? (openBlock(), createElementBlock("div", _hoisted_3$g, [renderSlot(_ctx.$slots, "description", {}, () => [createTextVNode(toDisplayString(__props.description), 1)])])) : createCommentVNode("", true), _ctx.$slots.extra ? (openBlock(), createElementBlock("div", _hoisted_4$e, [renderSlot(_ctx.$slots, "extra")])) : createCommentVNode("", true)]), _ctx.$slots.action || _ctx.$slots.default ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["flex items-center gap-2 flex-shrink-0", {
                  "max-md:w-full max-md:justify-end": !__props.inline
                }])
              }, [renderSlot(_ctx.$slots, "action", {}, () => [renderSlot(_ctx.$slots, "default")])], 2)) : createCommentVNode("", true)], 2);
            };
          }
        });
        const _hoisted_1$i = ["id"];
        const _hoisted_2$h = {
          class: "text-base md:text-xl font-medium md:font-bold mb-4 text-gray-900 dark:text-white px-1"
        };
        const _hoisted_3$f = {
          class: "bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm"
        };
        const _sfc_main$l = /* @__PURE__ */defineComponent({
          ...{
            name: "SettingSection"
          },
          __name: "SettingSection",
          props: {
            id: {
              default: ""
            },
            title: {
              default: ""
            }
          },
          emits: ["ref"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const setRef = el => {
              emit("ref", el);
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                id: __props.id,
                ref: setRef,
                class: "mb-6 md:mb-8 scroll-mt-4 md:scroll-mt-20"
              }, [createBaseVNode("div", _hoisted_2$h, [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])]), createBaseVNode("div", _hoisted_3$f, [renderSlot(_ctx.$slots, "default")])], 8, _hoisted_1$i);
            };
          }
        });
        const _hoisted_1$h = {
          class: "flex flex-wrap items-center gap-2"
        };
        const _hoisted_2$g = {
          key: 0,
          class: "mt-2 text-xs text-amber-600"
        };
        const _hoisted_3$e = {
          class: "flex items-center gap-2 flex-wrap"
        };
        const _sfc_main$k = /* @__PURE__ */defineComponent({
          __name: "AboutTab",
          setup(__props, {
            expose: __expose
          }) {
            const {
              t
            } = useI18n();
            const settingsStore = useSettingsStore();
            const setData = inject(SETTINGS_DATA_KEY);
            const message = inject(SETTINGS_MESSAGE_KEY);
            const checking = ref(false);
            const webUpdateInfo = ref({
              hasUpdate: false,
              latestVersion: "",
              currentVersion: config.version,
              releaseInfo: null
            });
            const appUpdateState = computed(() => settingsStore.appUpdateState);
            const hasAppUpdate = computed(() => hasAvailableAppUpdate(appUpdateState.value));
            const hasManualUpdateFallback = computed(() => isElectron && appUpdateState.value.status === APP_UPDATE_STATUS.error);
            const updateInfo = computed(() => {
              if (!isElectron) {
                return webUpdateInfo.value;
              }
              return {
                hasUpdate: hasAppUpdate.value,
                latestVersion: appUpdateState.value.availableVersion ?? "",
                currentVersion: appUpdateState.value.currentVersion || config.version,
                releaseInfo: appUpdateState.value.availableVersion ? {
                  tag_name: appUpdateState.value.availableVersion,
                  body: appUpdateState.value.releaseNotes,
                  html_url: appUpdateState.value.releasePageUrl,
                  assets: []
                } : null
              };
            });
            const checkForUpdates = async (isClick = false) => {
              checking.value = true;
              try {
                if (isElectron) {
                  const result2 = await window.api.checkAppUpdate(isClick);
                  settingsStore.setAppUpdateState(result2);
                  if (hasAvailableAppUpdate(result2)) {
                    if (isClick) {
                      settingsStore.setShowUpdateModal(true);
                    }
                  } else if (result2.status === APP_UPDATE_STATUS.notAvailable && isClick) {
                    message.success(t("settings.about.latest"));
                  } else if (result2.status === APP_UPDATE_STATUS.error && isClick) {
                    message.error(result2.errorMessage || t("settings.about.messages.checkError"));
                  }
                  return;
                }
                const result = await checkUpdate(config.version);
                if (result) {
                  webUpdateInfo.value = result;
                  if (result.hasUpdate && isClick) {
                    settingsStore.setShowUpdateModal(true);
                  } else if (!result.hasUpdate && isClick) {
                    message.success(t("settings.about.latest"));
                  }
                } else if (isClick) {
                  message.success(t("settings.about.latest"));
                }
              } catch (error) {
                console.error("检查更新失败:", error);
                if (isClick) {
                  message.error(t("settings.about.messages.checkError"));
                }
              } finally {
                checking.value = false;
              }
            };
            const openReleasePage = () => {
              if (isElectron) {
                settingsStore.setShowUpdateModal(true);
                return;
              }
              window.open(updateInfo.value.releaseInfo?.html_url || setData.value.authorUrl);
            };
            const openManualUpdatePage = async () => {
              if (isElectron) {
                await window.api.openAppUpdatePage();
                return;
              }
              window.open(updateInfo.value.releaseInfo?.html_url || setData.value.authorUrl);
            };
            const openAuthor = () => {
              window.open(setData.value.authorUrl);
            };
            __expose({
              checkForUpdates
            });
            return (_ctx, _cache) => {
              const _component_n_tag = __unplugin_components_0;
              return openBlock(), createBlock(_sfc_main$l, {
                title: unref(t)("settings.sections.about")
              }, {
                default: withCtx(() => [createVNode(_sfc_main$m, {
                  title: unref(t)("settings.about.version")
                }, {
                  description: withCtx(() => [createBaseVNode("div", _hoisted_1$h, [createBaseVNode("span", null, toDisplayString(updateInfo.value.currentVersion), 1), updateInfo.value.hasUpdate ? (openBlock(), createBlock(_component_n_tag, {
                    key: 0,
                    type: "success"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.about.hasUpdate")) + " " + toDisplayString(updateInfo.value.latestVersion), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)]), hasManualUpdateFallback.value ? (openBlock(), createElementBlock("div", _hoisted_2$g, [_cache[1] || (_cache[1] = createBaseVNode("i", {
                    class: "ri-information-line mr-1"
                  }, null, -1)), createTextVNode(" " + toDisplayString(appUpdateState.value.errorMessage || unref(t)("settings.about.messages.checkError")), 1)])) : createCommentVNode("", true)]),
                  action: withCtx(() => [createBaseVNode("div", _hoisted_3$e, [createVNode(_sfc_main$n, {
                    loading: checking.value,
                    onClick: _cache[0] || (_cache[0] = $event => checkForUpdates(true))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(checking.value ? unref(t)("settings.about.checking") : unref(t)("settings.about.checkUpdate")), 1)]),
                    _: 1
                  }, 8, ["loading"]), updateInfo.value.hasUpdate ? (openBlock(), createBlock(_sfc_main$n, {
                    key: 0,
                    variant: "primary",
                    onClick: openReleasePage
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.about.gotoUpdate")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true), hasManualUpdateFallback.value ? (openBlock(), createBlock(_sfc_main$n, {
                    key: 1,
                    variant: "ghost",
                    onClick: openManualUpdatePage
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.about.manualUpdate")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)])]),
                  _: 1
                }, 8, ["title"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.about.author"),
                  description: unref(t)("settings.about.authorDesc"),
                  clickable: "",
                  onClick: openAuthor
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: withModifiers(openAuthor, ["stop"])
                  }, {
                    default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("i", {
                      class: "ri-github-line mr-1"
                    }, null, -1)), createTextVNode(toDisplayString(unref(t)("settings.about.gotoGithub")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title", "description"])]),
                _: 1
              }, 8, ["title"]);
            };
          }
        });
        const _hoisted_1$g = {
          class: "remote-control-setting"
        };
        const _hoisted_2$f = {
          class: "allowed-ips-container"
        };
        const _hoisted_3$d = {
          class: "remote-info"
        };
        const _hoisted_4$d = {
          class: "access-url"
        };
        const _hoisted_5$b = {
          key: 0,
          class: "local-ips"
        };
        const _sfc_main$j = /* @__PURE__ */defineComponent({
          __name: "ServerSetting",
          props: {
            "visible": {
              default: false
            },
            "visibleModifiers": {}
          },
          emits: ["update:visible"],
          setup(__props) {
            const {
              t
            } = useI18n();
            const message = useMessage();
            const visible = useModel(__props, "visible");
            const defaultConfig = {
              enabled: false,
              port: 31888,
              allowedIps: []
            };
            const remoteControlConfig = ref({
              ...defaultConfig
            });
            const localIpAddresses = ref([]);
            const getLocalIpAddresses = () => {
              if (window.electron) {
                window.electron.ipcRenderer.invoke("get-local-ip-addresses").then(ips => {
                  localIpAddresses.value = ips;
                });
              }
            };
            const addIp = () => {
              remoteControlConfig.value.allowedIps.push("");
            };
            const removeIp = index => {
              remoteControlConfig.value.allowedIps.splice(index, 1);
            };
            const saveConfig = () => {
              remoteControlConfig.value.allowedIps = remoteControlConfig.value.allowedIps.filter(ip => ip.trim() !== "");
              if (window.electron) {
                window.electron.ipcRenderer.send("update-remote-control-config", lodashExports.cloneDeep(remoteControlConfig.value));
                message.success(t("settings.remoteControl.saveSuccess"));
              }
            };
            const resetConfig = () => {
              if (window.electron) {
                window.electron.ipcRenderer.invoke("get-remote-control-config").then(config => {
                  if (config) {
                    remoteControlConfig.value = config;
                  } else {
                    remoteControlConfig.value = {
                      ...defaultConfig
                    };
                  }
                });
              }
            };
            onMounted(async () => {
              if (window.electron) {
                try {
                  const config = await window.electron.ipcRenderer.invoke("get-remote-control-config");
                  if (config) {
                    remoteControlConfig.value = config;
                  }
                  getLocalIpAddresses();
                } catch (error) {
                  console.error("获取远程控制配置失败:", error);
                }
              }
            });
            return (_ctx, _cache) => {
              const _component_n_switch = __unplugin_components_1$5;
              const _component_n_form_item = __unplugin_components_1$1;
              const _component_n_input_number = __unplugin_components_1$6;
              const _component_n_input = __unplugin_components_0$1;
              const _component_n_icon = NIcon;
              const _component_n_button = Button;
              const _component_n_text = __unplugin_components_1$7;
              const _component_n_space = __unplugin_components_2$2;
              const _component_n_tag = __unplugin_components_0;
              const _component_n_alert = __unplugin_components_3;
              const _component_n_collapse_transition = __unplugin_components_10;
              const _component_n_form = __unplugin_components_4;
              const _component_n_scrollbar = Scrollbar$1;
              const _component_n_modal = __unplugin_components_2$1;
              return openBlock(), createBlock(_component_n_modal, {
                show: visible.value,
                "onUpdate:show": _cache[2] || (_cache[2] = $event => visible.value = $event),
                preset: "card",
                title: unref(t)("settings.remoteControl.title"),
                class: "remote-control-modal",
                style: {
                  "max-width": "650px",
                  "width": "100%"
                }
              }, {
                default: withCtx(() => [createVNode(_component_n_scrollbar, null, {
                  default: withCtx(() => [createBaseVNode("div", _hoisted_1$g, [createVNode(_component_n_form, {
                    "label-placement": "left",
                    "label-width": "auto",
                    style: {
                      maxWidth: "640px"
                    }
                  }, {
                    default: withCtx(() => [createVNode(_component_n_form_item, {
                      label: unref(t)("settings.remoteControl.enable")
                    }, {
                      default: withCtx(() => [createVNode(_component_n_switch, {
                        value: remoteControlConfig.value.enabled,
                        "onUpdate:value": _cache[0] || (_cache[0] = $event => remoteControlConfig.value.enabled = $event)
                      }, null, 8, ["value"])]),
                      _: 1
                    }, 8, ["label"]), createVNode(_component_n_form_item, {
                      label: unref(t)("settings.remoteControl.port")
                    }, {
                      default: withCtx(() => [createVNode(_component_n_input_number, {
                        value: remoteControlConfig.value.port,
                        "onUpdate:value": _cache[1] || (_cache[1] = $event => remoteControlConfig.value.port = $event),
                        min: 1024,
                        max: 65535,
                        disabled: !remoteControlConfig.value.enabled
                      }, null, 8, ["value", "disabled"])]),
                      _: 1
                    }, 8, ["label"]), createVNode(_component_n_form_item, {
                      label: unref(t)("settings.remoteControl.allowedIps")
                    }, {
                      default: withCtx(() => [createBaseVNode("div", _hoisted_2$f, [(openBlock(true), createElementBlock(Fragment, null, renderList(remoteControlConfig.value.allowedIps, (_, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: index,
                          class: "ip-item"
                        }, [createVNode(_component_n_input, {
                          value: remoteControlConfig.value.allowedIps[index],
                          "onUpdate:value": $event => remoteControlConfig.value.allowedIps[index] = $event,
                          disabled: !remoteControlConfig.value.enabled
                        }, null, 8, ["value", "onUpdate:value", "disabled"]), createVNode(_component_n_button, {
                          quaternary: "",
                          circle: "",
                          type: "error",
                          disabled: !remoteControlConfig.value.enabled,
                          onClick: $event => removeIp(index)
                        }, {
                          icon: withCtx(() => [createVNode(_component_n_icon, null, {
                            default: withCtx(() => [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                              class: "ri-delete-bin-line"
                            }, null, -1)]))]),
                            _: 1
                          })]),
                          _: 1
                        }, 8, ["disabled", "onClick"])]);
                      }), 128)), createVNode(_component_n_button, {
                        secondary: "",
                        size: "small",
                        disabled: !remoteControlConfig.value.enabled,
                        onClick: addIp
                      }, {
                        icon: withCtx(() => [createVNode(_component_n_icon, null, {
                          default: withCtx(() => [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                            class: "ri-add-line"
                          }, null, -1)]))]),
                          _: 1
                        })]),
                        default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("settings.remoteControl.addIp")), 1)]),
                        _: 1
                      }, 8, ["disabled"]), createVNode(_component_n_text, {
                        depth: "3",
                        size: "small",
                        class: "allow-all-hint"
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.remoteControl.emptyListHint")), 1)]),
                        _: 1
                      })])]),
                      _: 1
                    }, 8, ["label"]), createVNode(_component_n_form_item, null, {
                      default: withCtx(() => [createVNode(_component_n_space, null, {
                        default: withCtx(() => [createVNode(_component_n_button, {
                          type: "primary",
                          onClick: saveConfig
                        }, {
                          default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.save")), 1)]),
                          _: 1
                        }), createVNode(_component_n_button, {
                          onClick: resetConfig
                        }, {
                          default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.reset")), 1)]),
                          _: 1
                        })]),
                        _: 1
                      })]),
                      _: 1
                    }), createVNode(_component_n_collapse_transition, {
                      show: remoteControlConfig.value.enabled
                    }, {
                      default: withCtx(() => [createBaseVNode("div", _hoisted_3$d, [createVNode(_component_n_alert, {
                        type: "info"
                      }, {
                        icon: withCtx(() => [createVNode(_component_n_icon, null, {
                          default: withCtx(() => [...(_cache[5] || (_cache[5] = [createBaseVNode("i", {
                            class: "ri-information-line"
                          }, null, -1)]))]),
                          _: 1
                        })]),
                        default: withCtx(() => [createBaseVNode("p", null, toDisplayString(unref(t)("settings.remoteControl.accessInfo")), 1), createBaseVNode("div", _hoisted_4$d, [createVNode(_component_n_tag, {
                          type: "success"
                        }, {
                          default: withCtx(() => [createTextVNode(" http://localhost:" + toDisplayString(remoteControlConfig.value.port) + "/ ", 1)]),
                          _: 1
                        })]), localIpAddresses.value.length ? (openBlock(), createElementBlock("div", _hoisted_5$b, [(openBlock(true), createElementBlock(Fragment, null, renderList(localIpAddresses.value, ip => {
                          return openBlock(), createElementBlock("div", {
                            key: ip,
                            class: "ip-address"
                          }, [createVNode(_component_n_tag, {
                            type: "info"
                          }, {
                            default: withCtx(() => [createTextVNode(" http://" + toDisplayString(ip) + ":" + toDisplayString(remoteControlConfig.value.port) + "/ ", 1)]),
                            _: 2
                          }, 1024)]);
                        }), 128))])) : createCommentVNode("", true)]),
                        _: 1
                      })])]),
                      _: 1
                    }, 8, ["show"])]),
                    _: 1
                  })])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["show", "title"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const RemoteControlSetting = /* @__PURE__ */_export_sfc(_sfc_main$j, [["__scopeId", "data-v-3fa8f9c6"]]);
        const _hoisted_1$f = {
          class: "shortcut-panel"
        };
        const _hoisted_2$e = {
          class: "shortcut-panel__header"
        };
        const _hoisted_3$c = {
          class: "shortcut-panel__summary"
        };
        const _hoisted_4$c = {
          class: "shortcut-panel__toolbar"
        };
        const _hoisted_5$a = {
          class: "shortcut-panel__tips"
        };
        const _hoisted_6$7 = {
          class: "shortcut-warning-list"
        };
        const _hoisted_7$7 = {
          class: "shortcut-panel__content"
        };
        const _hoisted_8$7 = {
          class: "shortcut-section__title"
        };
        const _hoisted_9$5 = {
          class: "shortcut-row__info"
        };
        const _hoisted_10$5 = {
          class: "shortcut-row__name"
        };
        const _hoisted_11$5 = {
          class: "shortcut-row__desc"
        };
        const _hoisted_12$5 = {
          class: "shortcut-row__editor"
        };
        const _hoisted_13$5 = ["onClick", "onKeydown", "onBlur"];
        const _hoisted_14$5 = {
          class: "shortcut-recorder__value"
        };
        const _hoisted_15$4 = {
          class: "shortcut-recorder__hint"
        };
        const _hoisted_16$4 = {
          class: "shortcut-row__controls"
        };
        const _hoisted_17$4 = {
          class: "shortcut-row__status"
        };
        const _hoisted_18$3 = {
          class: "shortcut-panel__footer"
        };
        const _sfc_main$i = /* @__PURE__ */defineComponent({
          __name: "ShortcutSettings",
          props: {
            show: {
              type: Boolean
            }
          },
          emits: ["update:show", "change"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const visible = ref(false);
            const saving = ref(false);
            const platform = ref("web");
            const recordingAction = ref(null);
            const serverIssues = ref([]);
            const registrationFailures = ref([]);
            const defaultShortcuts = createDefaultShortcuts();
            const storedShortcuts = ref(lodashExports.cloneDeep(defaultShortcuts));
            const draftShortcuts = ref(lodashExports.cloneDeep(defaultShortcuts));
            const recorderRefs = ref({
              togglePlay: null,
              prevPlay: null,
              nextPlay: null,
              volumeUp: null,
              volumeDown: null,
              toggleFavorite: null,
              toggleWindow: null
            });
            const scopeOptions = computed(() => [{
              label: t("settings.shortcutSettings.scopeGlobal"),
              value: "global"
            }, {
              label: t("settings.shortcutSettings.scopeApp"),
              value: "app"
            }]);
            const shortcutSections = computed(() => [{
              key: "playback",
              title: t("settings.shortcutSettings.groups.playback"),
              actions: shortcutGroups.playback
            }, {
              key: "sound",
              title: t("settings.shortcutSettings.groups.sound"),
              actions: shortcutGroups.sound
            }, {
              key: "window",
              title: t("settings.shortcutSettings.groups.window"),
              actions: shortcutGroups.window
            }]);
            const conflictIssueMap = computed(() => {
              const map = /* @__PURE__ */new Map();
              getShortcutConflicts(draftShortcuts.value).forEach(conflict => {
                conflict.actions.forEach((action, index) => {
                  const conflictWith = conflict.actions[(index + 1) % conflict.actions.length];
                  map.set(action, {
                    action,
                    key: conflict.key,
                    scope: conflict.scope,
                    reason: "conflict",
                    conflictWith
                  });
                });
              });
              return map;
            });
            const invalidIssueMap = computed(() => {
              const map = /* @__PURE__ */new Map();
              Object.entries(draftShortcuts.value).forEach(([action, config]) => {
                const shortcutAction = action;
                if (!config.enabled) {
                  return;
                }
                const normalizedKey = normalizeShortcutAccelerator(config.key);
                if (!normalizedKey || isModifierOnlyShortcut(config.key)) {
                  map.set(shortcutAction, {
                    action: shortcutAction,
                    key: config.key,
                    scope: config.scope,
                    reason: "invalid"
                  });
                }
              });
              return map;
            });
            const reservedIssueMap = computed(() => {
              const map = /* @__PURE__ */new Map();
              const reservedAccelerators = new Set(getReservedAccelerators(platform.value));
              Object.entries(draftShortcuts.value).forEach(([action, config]) => {
                const shortcutAction = action;
                if (!config.enabled || config.scope !== "global") {
                  return;
                }
                const normalizedKey = normalizeShortcutAccelerator(config.key);
                if (normalizedKey && reservedAccelerators.has(normalizedKey)) {
                  map.set(shortcutAction, {
                    action: shortcutAction,
                    key: normalizedKey,
                    scope: config.scope,
                    reason: "reserved"
                  });
                }
              });
              return map;
            });
            const localIssueMap = computed(() => {
              const map = /* @__PURE__ */new Map();
              invalidIssueMap.value.forEach((issue, action) => {
                map.set(action, issue);
              });
              conflictIssueMap.value.forEach((issue, action) => {
                if (!map.has(action)) {
                  map.set(action, issue);
                }
              });
              reservedIssueMap.value.forEach((issue, action) => {
                if (!map.has(action)) {
                  map.set(action, issue);
                }
              });
              return map;
            });
            const shortcutIssueMap = computed(() => {
              const map = /* @__PURE__ */new Map();
              localIssueMap.value.forEach((issue, action) => {
                map.set(action, issue);
              });
              serverIssues.value.forEach(issue => {
                if (!map.has(issue.action)) {
                  map.set(issue.action, issue);
                }
              });
              return map;
            });
            const hasLocalBlockingIssue = computed(() => localIssueMap.value.size > 0);
            const enabledCount = computed(() => {
              return Object.values(draftShortcuts.value).filter(item => item.enabled).length;
            });
            const summaryText = computed(() => {
              if (hasLocalBlockingIssue.value) {
                return t("settings.shortcutSettings.summaryBlocked");
              }
              if (recordingAction.value) {
                return t("settings.shortcutSettings.summaryRecording");
              }
              return t("settings.shortcutSettings.summaryReady");
            });
            watch(() => props.show, newValue => {
              const nextVisible = Boolean(newValue);
              if (nextVisible !== visible.value) {
                visible.value = nextVisible;
              }
            }, {
              immediate: true
            });
            watch(visible, (newValue, oldValue) => {
              emit("update:show", newValue);
              if (newValue === oldValue) {
                return;
              }
              if (newValue) {
                void handleOpen();
                return;
              }
              handleClose();
            });
            watch(draftShortcuts, () => {
              serverIssues.value = [];
              registrationFailures.value = [];
            }, {
              deep: true
            });
            function setRecorderRef(action, element) {
              recorderRefs.value[action] = element;
            }
            function getShortcutLabel(action) {
              const labels = {
                togglePlay: t("settings.shortcutSettings.togglePlay"),
                prevPlay: t("settings.shortcutSettings.prevPlay"),
                nextPlay: t("settings.shortcutSettings.nextPlay"),
                volumeUp: t("settings.shortcutSettings.volumeUp"),
                volumeDown: t("settings.shortcutSettings.volumeDown"),
                toggleFavorite: t("settings.shortcutSettings.toggleFavorite"),
                toggleWindow: t("settings.shortcutSettings.toggleWindow")
              };
              return labels[action];
            }
            function getShortcutDescription(action) {
              const descriptions = {
                togglePlay: t("settings.shortcutSettings.togglePlayDesc"),
                prevPlay: t("settings.shortcutSettings.prevPlayDesc"),
                nextPlay: t("settings.shortcutSettings.nextPlayDesc"),
                volumeUp: t("settings.shortcutSettings.volumeUpDesc"),
                volumeDown: t("settings.shortcutSettings.volumeDownDesc"),
                toggleFavorite: t("settings.shortcutSettings.toggleFavoriteDesc"),
                toggleWindow: t("settings.shortcutSettings.toggleWindowDesc")
              };
              return descriptions[action];
            }
            function getIssueLabel(action) {
              const issue = shortcutIssueMap.value.get(action);
              if (!issue) {
                return "";
              }
              if (issue.reason === "invalid") {
                return t("settings.shortcutSettings.issueInvalid");
              }
              if (issue.reason === "reserved") {
                return t("settings.shortcutSettings.issueReserved");
              }
              return t("settings.shortcutSettings.shortcutConflict");
            }
            function getRegistrationFailureLabel(reason) {
              return reason === "occupied" ? t("settings.shortcutSettings.registrationOccupied") : t("settings.shortcutSettings.registrationInvalid");
            }
            function formatShortcut(shortcut) {
              return formatShortcutForDisplay(shortcut, platform.value);
            }
            function stopRecording() {
              recordingAction.value = null;
            }
            function startRecording(action) {
              recordingAction.value = action;
              nextTick(() => {
                recorderRefs.value[action]?.focus();
              });
            }
            function handleRecorderBlur(action) {
              if (recordingAction.value === action) {
                stopRecording();
              }
            }
            function handleRecorderKeydown(event, action) {
              if (recordingAction.value !== action) {
                return;
              }
              event.preventDefault();
              event.stopPropagation();
              if (event.key === "Escape") {
                stopRecording();
                return;
              }
              if (event.key === "Tab" && !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
                stopRecording();
                return;
              }
              if (event.key === "Backspace" || event.key === "Delete") {
                draftShortcuts.value[action].enabled = false;
                stopRecording();
                message.info(t("settings.shortcutSettings.messages.clearToDisable"));
                return;
              }
              const accelerator = keyboardEventToAccelerator(event);
              if (!accelerator || isModifierOnlyShortcut(accelerator)) {
                message.warning(t("settings.shortcutSettings.messages.invalidShortcut"));
                return;
              }
              draftShortcuts.value[action].key = accelerator;
              draftShortcuts.value[action].enabled = true;
              stopRecording();
            }
            function resetShortcuts() {
              draftShortcuts.value = lodashExports.cloneDeep(defaultShortcuts);
              message.success(t("settings.shortcutSettings.messages.resetSuccess"));
            }
            function resetSingleShortcut(action) {
              draftShortcuts.value[action] = lodashExports.cloneDeep(defaultShortcuts[action]);
            }
            function disableAllShortcuts() {
              Object.values(draftShortcuts.value).forEach(shortcut => {
                shortcut.enabled = false;
              });
              message.info(t("settings.shortcutSettings.messages.disableAll"));
            }
            function enableAllShortcuts() {
              Object.values(draftShortcuts.value).forEach(shortcut => {
                shortcut.enabled = true;
              });
              message.info(t("settings.shortcutSettings.messages.enableAll"));
            }
            async function loadShortcutsFromMain() {
              if (!isElectron) {
                const defaults = createDefaultShortcuts();
                storedShortcuts.value = lodashExports.cloneDeep(defaults);
                draftShortcuts.value = lodashExports.cloneDeep(defaults);
                return;
              }
              const platformValue = window.electron.ipcRenderer.sendSync("get-platform");
              if (platformValue === "darwin" || platformValue === "win32" || platformValue === "linux") {
                platform.value = platformValue;
              }
              try {
                const shortcuts = await window.electron.ipcRenderer.invoke("shortcuts:get-config");
                const normalized2 = normalizeShortcutsConfig(shortcuts);
                storedShortcuts.value = lodashExports.cloneDeep(normalized2);
                draftShortcuts.value = lodashExports.cloneDeep(normalized2);
                return;
              } catch (error) {
                console.error("[ShortcutSettings] 获取快捷键配置失败:", error);
              }
              const stored = window.electron.ipcRenderer.sendSync("get-store-value", "shortcuts");
              const normalized = normalizeShortcutsConfig(stored);
              storedShortcuts.value = lodashExports.cloneDeep(normalized);
              draftShortcuts.value = lodashExports.cloneDeep(normalized);
            }
            async function handleOpen() {
              serverIssues.value = [];
              registrationFailures.value = [];
              stopRecording();
              if (isElectron) {
                setAppShortcutsSuspended(true);
                window.electron.ipcRenderer.send("disable-shortcuts");
              }
              await loadShortcutsFromMain();
            }
            function resumeShortcutRuntime() {
              setAppShortcutsSuspended(false);
              if (isElectron) {
                window.electron.ipcRenderer.send("enable-shortcuts");
              }
            }
            function handleClose() {
              stopRecording();
              draftShortcuts.value = lodashExports.cloneDeep(storedShortcuts.value);
              resumeShortcutRuntime();
            }
            async function handleSave() {
              if (hasLocalBlockingIssue.value) {
                message.error(t("settings.shortcutSettings.messages.saveValidationError"));
                return;
              }
              saving.value = true;
              try {
                const shortcutsPayload = normalizeShortcutsConfig(JSON.parse(JSON.stringify(draftShortcuts.value)));
                if (!isElectron) {
                  storedShortcuts.value = lodashExports.cloneDeep(shortcutsPayload);
                  message.success(t("settings.shortcutSettings.messages.saveSuccess"));
                  emit("change", storedShortcuts.value);
                  visible.value = false;
                  return;
                }
                const result = await window.electron.ipcRenderer.invoke("shortcuts:save", shortcutsPayload);
                if (!result?.ok) {
                  serverIssues.value = result?.validation?.issues ?? [];
                  message.error(t("settings.shortcutSettings.messages.saveValidationError"));
                  return;
                }
                const normalizedShortcuts = normalizeShortcutsConfig(result.validation.shortcuts);
                storedShortcuts.value = lodashExports.cloneDeep(normalizedShortcuts);
                draftShortcuts.value = lodashExports.cloneDeep(normalizedShortcuts);
                emit("change", normalizedShortcuts);
                registrationFailures.value = result.registration.failed ?? [];
                if (registrationFailures.value.length > 0) {
                  message.warning(t("settings.shortcutSettings.messages.partialRegistered"));
                  return;
                }
                message.success(t("settings.shortcutSettings.messages.saveSuccess"));
                visible.value = false;
              } catch (error) {
                console.error("[ShortcutSettings] 保存快捷键失败:", error);
                message.error(t("settings.shortcutSettings.messages.saveError"));
              } finally {
                saving.value = false;
              }
            }
            function handleCancel() {
              visible.value = false;
            }
            onUnmounted(() => {
              resumeShortcutRuntime();
            });
            return (_ctx, _cache) => {
              const _component_n_tag = __unplugin_components_0;
              const _component_n_button = Button;
              const _component_n_space = __unplugin_components_2$2;
              const _component_n_alert = __unplugin_components_3;
              const _component_n_switch = __unplugin_components_1$5;
              const _component_n_select = __unplugin_components_1$3;
              const _component_n_scrollbar = Scrollbar$1;
              const _component_n_modal = __unplugin_components_2$1;
              return openBlock(), createBlock(_component_n_modal, {
                show: visible.value,
                "onUpdate:show": _cache[0] || (_cache[0] = $event => visible.value = $event),
                preset: "card",
                class: "shortcut-modal",
                "show-icon": false,
                title: unref(t)("settings.shortcutSettings.title"),
                style: {
                  "width": "min(980px, 94vw)"
                }
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_1$f, [createBaseVNode("div", _hoisted_2$e, [createBaseVNode("div", null, [createBaseVNode("p", _hoisted_3$c, toDisplayString(summaryText.value), 1)]), createVNode(_component_n_tag, {
                  type: "info",
                  size: "small",
                  class: "shortcut-count-tag"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.shortcutSettings.enabledCount")) + ": " + toDisplayString(enabledCount.value), 1)]),
                  _: 1
                })]), createBaseVNode("div", _hoisted_4$c, [createVNode(_component_n_space, null, {
                  default: withCtx(() => [createVNode(_component_n_button, {
                    round: "",
                    size: "small",
                    class: "toolbar-btn toolbar-btn--neutral",
                    onClick: resetShortcuts
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.shortcutSettings.resetShortcuts")), 1)]),
                    _: 1
                  }), createVNode(_component_n_button, {
                    round: "",
                    size: "small",
                    class: "toolbar-btn toolbar-btn--danger",
                    onClick: disableAllShortcuts
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.shortcutSettings.disableAll")), 1)]),
                    _: 1
                  }), createVNode(_component_n_button, {
                    round: "",
                    size: "small",
                    class: "toolbar-btn toolbar-btn--success",
                    onClick: enableAllShortcuts
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.shortcutSettings.enableAll")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }), createBaseVNode("span", _hoisted_5$a, toDisplayString(unref(t)("settings.shortcutSettings.recordingTip")), 1)]), registrationFailures.value.length ? (openBlock(), createBlock(_component_n_alert, {
                  key: 0,
                  class: "mb-3",
                  type: "warning",
                  title: unref(t)("settings.shortcutSettings.registrationWarningTitle")
                }, {
                  default: withCtx(() => [createBaseVNode("div", _hoisted_6$7, [(openBlock(true), createElementBlock(Fragment, null, renderList(registrationFailures.value, item => {
                    return openBlock(), createElementBlock("div", {
                      key: `failure-${item.action}-${item.key}`
                    }, toDisplayString(getShortcutLabel(item.action)) + ": " + toDisplayString(formatShortcut(item.key)) + " (" + toDisplayString(getRegistrationFailureLabel(item.reason)) + ") ", 1);
                  }), 128))])]),
                  _: 1
                }, 8, ["title"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_7$7, [createVNode(_component_n_scrollbar, {
                  class: "shortcut-scrollbar"
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(shortcutSections.value, section => {
                    return openBlock(), createElementBlock("div", {
                      key: section.key,
                      class: "shortcut-section"
                    }, [createBaseVNode("div", _hoisted_8$7, toDisplayString(section.title), 1), (openBlock(true), createElementBlock(Fragment, null, renderList(section.actions, action => {
                      return openBlock(), createElementBlock("div", {
                        key: action,
                        class: normalizeClass(["shortcut-row", {
                          "shortcut-row--error": shortcutIssueMap.value.has(action)
                        }])
                      }, [createBaseVNode("div", _hoisted_9$5, [createBaseVNode("div", _hoisted_10$5, toDisplayString(getShortcutLabel(action)), 1), createBaseVNode("div", _hoisted_11$5, toDisplayString(getShortcutDescription(action)), 1)]), createBaseVNode("div", _hoisted_12$5, [createBaseVNode("button", {
                        ref_for: true,
                        ref: el => setRecorderRef(action, el),
                        type: "button",
                        class: normalizeClass(["shortcut-recorder", {
                          "shortcut-recorder--recording": recordingAction.value === action
                        }]),
                        onClick: $event => startRecording(action),
                        onKeydown: event => handleRecorderKeydown(event, action),
                        onBlur: () => handleRecorderBlur(action)
                      }, [createBaseVNode("span", _hoisted_14$5, toDisplayString(formatShortcut(draftShortcuts.value[action].key)), 1), createBaseVNode("span", _hoisted_15$4, toDisplayString(recordingAction.value === action ? unref(t)("settings.shortcutSettings.recording") : unref(t)("settings.shortcutSettings.clickToRecord")), 1)], 42, _hoisted_13$5), createVNode(_component_n_button, {
                        size: "tiny",
                        quaternary: "",
                        onClick: $event => resetSingleShortcut(action)
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.shortcutSettings.restoreSingle")), 1)]),
                        _: 1
                      }, 8, ["onClick"])]), createBaseVNode("div", _hoisted_16$4, [createVNode(_component_n_switch, {
                        value: draftShortcuts.value[action].enabled,
                        "onUpdate:value": $event => draftShortcuts.value[action].enabled = $event,
                        size: "small"
                      }, null, 8, ["value", "onUpdate:value"]), createVNode(_component_n_select, {
                        value: draftShortcuts.value[action].scope,
                        "onUpdate:value": $event => draftShortcuts.value[action].scope = $event,
                        size: "small",
                        options: scopeOptions.value,
                        disabled: !draftShortcuts.value[action].enabled,
                        class: "w-28"
                      }, null, 8, ["value", "onUpdate:value", "options", "disabled"])]), createBaseVNode("div", _hoisted_17$4, [shortcutIssueMap.value.has(action) ? (openBlock(), createBlock(_component_n_tag, {
                        key: 0,
                        type: "error",
                        size: "small"
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(getIssueLabel(action)), 1)]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true)])], 2);
                    }), 128))]);
                  }), 128))]),
                  _: 1
                })]), createBaseVNode("div", _hoisted_18$3, [createVNode(_component_n_space, {
                  justify: "end"
                }, {
                  default: withCtx(() => [createVNode(_component_n_button, {
                    round: "",
                    class: "footer-btn footer-btn--cancel",
                    onClick: handleCancel
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.cancel")), 1)]),
                    _: 1
                  }), createVNode(_component_n_button, {
                    round: "",
                    class: "footer-btn footer-btn--primary",
                    loading: saving.value,
                    disabled: hasLocalBlockingIssue.value,
                    onClick: handleSave
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.save")), 1)]),
                    _: 1
                  }, 8, ["loading", "disabled"])]),
                  _: 1
                })])])]),
                _: 1
              }, 8, ["show", "title"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const ShortcutSettings = /* @__PURE__ */_export_sfc(_sfc_main$i, [["__scopeId", "data-v-0b12817c"]]);
        const selectDirectory = async message => {
          try {
            const result = await window.electron.ipcRenderer.invoke("select-directory");
            if (result.filePaths?.[0]) {
              return result.filePaths[0];
            }
          } catch (error) {
            console.error("选择目录失败:", error);
            message.error("选择目录失败");
          }
          return void 0;
        };
        const openDirectory = (path, message, showTip = true) => {
          if (path) {
            window.electron.ipcRenderer.send("open-directory", path);
          } else if (showTip) {
            message.info("目录不存在");
          }
        };
        const _hoisted_1$e = ["disabled"];
        const _hoisted_2$d = {
          class: "max-h-[240px] overflow-y-auto py-1"
        };
        const _hoisted_3$b = ["onClick"];
        const _hoisted_4$b = {
          class: "truncate flex-1"
        };
        const _hoisted_5$9 = {
          key: 0,
          class: "ri-check-line text-primary text-base flex-shrink-0"
        };
        const _sfc_main$h = /* @__PURE__ */defineComponent({
          ...{
            name: "SSelect"
          },
          __name: "SSelect",
          props: {
            modelValue: {
              type: [String, Number, Boolean],
              default: void 0
            },
            options: {
              default: () => []
            },
            placeholder: {
              default: ""
            },
            disabled: {
              type: Boolean,
              default: false
            },
            width: {
              default: "w-40"
            }
          },
          emits: ["update:modelValue"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const isOpen = ref(false);
            const wrapperRef = ref(null);
            const dropdownPosition = ref("bottom");
            const widthClass = computed(() => props.width);
            const selectedLabel = computed(() => {
              const opt = props.options.find(o => o.value === props.modelValue);
              return opt?.label ?? "";
            });
            const toggle = () => {
              if (props.disabled) return;
              isOpen.value = !isOpen.value;
              if (isOpen.value) {
                checkDropdownPosition();
              }
            };
            const select = value => {
              emit("update:modelValue", value);
              isOpen.value = false;
            };
            const checkDropdownPosition = () => {
              if (!wrapperRef.value) return;
              const rect = wrapperRef.value.getBoundingClientRect();
              const spaceBelow = window.innerHeight - rect.bottom;
              dropdownPosition.value = spaceBelow < 260 ? "top" : "bottom";
            };
            const onClickOutside = e => {
              if (wrapperRef.value && !wrapperRef.value.contains(e.target)) {
                isOpen.value = false;
              }
            };
            onMounted(() => document.addEventListener("click", onClickOutside));
            onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["relative inline-block", widthClass.value]),
                ref_key: "wrapperRef",
                ref: wrapperRef
              }, [createBaseVNode("button", {
                disabled: __props.disabled,
                class: normalizeClass(["flex w-full items-center justify-between gap-2 rounded-[10px] border px-3 py-1.5 text-sm transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed", isOpen.value ? "border-primary bg-white dark:bg-neutral-900 ring-2 ring-primary/20" : "border-neutral-200 bg-neutral-50 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"]),
                onClick: toggle
              }, [createBaseVNode("span", {
                class: normalizeClass(["truncate", selectedLabel.value ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-400"])
              }, toDisplayString(selectedLabel.value || __props.placeholder), 3), createBaseVNode("i", {
                class: normalizeClass(["ri-arrow-down-s-line text-base text-neutral-400 transition-transform duration-200 flex-shrink-0", {
                  "rotate-180": isOpen.value
                }])
              }, null, 2)], 10, _hoisted_1$e), createVNode(Transition, {
                "enter-active-class": "transition duration-150 ease-out",
                "enter-from-class": "opacity-0 -translate-y-1 scale-[0.98]",
                "enter-to-class": "opacity-100 translate-y-0 scale-100",
                "leave-active-class": "transition duration-100 ease-in",
                "leave-from-class": "opacity-100 translate-y-0 scale-100",
                "leave-to-class": "opacity-0 -translate-y-1 scale-[0.98]"
              }, {
                default: withCtx(() => [isOpen.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["absolute z-50 mt-1.5 w-full min-w-[160px] overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-900", dropdownPosition.value === "top" ? "bottom-full mb-1.5 mt-0" : ""])
                }, [createBaseVNode("div", _hoisted_2$d, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, opt => {
                  return openBlock(), createElementBlock("div", {
                    key: String(opt.value),
                    class: normalizeClass(["flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors", opt.value === __props.modelValue ? "bg-primary/10 text-primary font-medium" : "text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800"]),
                    onClick: $event => select(opt.value)
                  }, [createBaseVNode("span", _hoisted_4$b, toDisplayString(opt.label), 1), opt.value === __props.modelValue ? (openBlock(), createElementBlock("i", _hoisted_5$9)) : createCommentVNode("", true)], 10, _hoisted_3$b);
                }), 128))])], 2)) : createCommentVNode("", true)]),
                _: 1
              })], 2);
            };
          }
        });
        const _hoisted_1$d = {
          class: "break-all"
        };
        const _hoisted_2$c = {
          class: "flex items-center gap-2"
        };
        const _sfc_main$g = /* @__PURE__ */defineComponent({
          __name: "ApplicationTab",
          setup(__props) {
            const {
              t
            } = useI18n();
            const router = useRouter();
            const setData = inject(SETTINGS_DATA_KEY);
            const message = inject(SETTINGS_MESSAGE_KEY);
            const showShortcutModal = ref(false);
            const showRemoteControlModal = ref(false);
            const closeActionOptions = computed(() => [{
              label: t("settings.application.closeOptions.ask"),
              value: "ask"
            }, {
              label: t("settings.application.closeOptions.minimize"),
              value: "minimize"
            }, {
              label: t("settings.application.closeOptions.close"),
              value: "close"
            }]);
            const selectDownloadPath = async () => {
              const path = await selectDirectory(message);
              if (path) {
                setData.value = {
                  ...setData.value,
                  downloadPath: path
                };
              }
            };
            const openDownloadPath = () => {
              openDirectory(setData.value.downloadPath, message);
            };
            const handleShortcutsChange = shortcuts => {
              console.log("快捷键已更新:", shortcuts);
            };
            return (_ctx, _cache) => {
              const _component_n_switch = __unplugin_components_1$5;
              return unref(isElectron) ? (openBlock(), createBlock(_sfc_main$l, {
                key: 0,
                title: unref(t)("settings.sections.application")
              }, {
                default: withCtx(() => [createVNode(_sfc_main$m, {
                  title: unref(t)("settings.application.closeAction"),
                  description: unref(t)("settings.application.closeActionDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$h, {
                    modelValue: unref(setData).closeAction,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(setData).closeAction = $event),
                    options: closeActionOptions.value,
                    width: "w-40 max-md:w-full"
                  }, null, 8, ["modelValue", "options"])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.application.shortcut"),
                  description: unref(t)("settings.application.shortcutDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: _cache[1] || (_cache[1] = $event => showShortcutModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.configure")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title", "description"]), unref(isElectron) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 0,
                  title: unref(t)("settings.application.download")
                }, {
                  description: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).alwaysShowDownloadButton,
                    "onUpdate:value": _cache[2] || (_cache[2] = $event => unref(setData).alwaysShowDownloadButton = $event),
                    class: "mr-2"
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.show")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.hide")), 1)]),
                    _: 1
                  }, 8, ["value"]), createTextVNode(" " + toDisplayString(unref(t)("settings.application.downloadDesc")), 1)]),
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: _cache[3] || (_cache[3] = $event => unref(router).push("/downloads"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.application.download")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title"])) : createCommentVNode("", true), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.application.unlimitedDownload")
                }, {
                  description: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).unlimitedDownload,
                    "onUpdate:value": _cache[4] || (_cache[4] = $event => unref(setData).unlimitedDownload = $event),
                    class: "mr-2"
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"]), createTextVNode(" " + toDisplayString(unref(t)("settings.application.unlimitedDownloadDesc")), 1)]),
                  _: 1
                }, 8, ["title"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.application.downloadPath")
                }, {
                  description: withCtx(() => [createBaseVNode("span", _hoisted_1$d, toDisplayString(unref(setData).downloadPath || unref(t)("settings.application.downloadPathDesc")), 1)]),
                  action: withCtx(() => [createBaseVNode("div", _hoisted_2$c, [createVNode(_sfc_main$n, {
                    onClick: openDownloadPath
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.open")), 1)]),
                    _: 1
                  }), createVNode(_sfc_main$n, {
                    onClick: selectDownloadPath
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.modify")), 1)]),
                    _: 1
                  })])]),
                  _: 1
                }, 8, ["title"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.application.remoteControl"),
                  description: unref(t)("settings.application.remoteControlDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: _cache[5] || (_cache[5] = $event => showRemoteControlModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.configure")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(ShortcutSettings, {
                  show: showShortcutModal.value,
                  "onUpdate:show": _cache[6] || (_cache[6] = $event => showShortcutModal.value = $event),
                  onChange: handleShortcutsChange
                }, null, 8, ["show"]), createVNode(RemoteControlSetting, {
                  visible: showRemoteControlModal.value,
                  "onUpdate:visible": _cache[7] || (_cache[7] = $event => showRemoteControlModal.value = $event)
                }, null, 8, ["visible"])]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true);
            };
          }
        });
        const _sfc_main$f = /* @__PURE__ */defineComponent({
          __name: "LanguageSwitcher",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const {
              locale
            } = useI18n();
            const languages = getLanguageOptions();
            console.log("locale", locale);
            const currentLanguage = computed({
              get: () => locale.value,
              set: value => {
                settingsStore.setLanguage(value);
              }
            });
            return (_ctx, _cache) => {
              const _component_n_select = __unplugin_components_1$3;
              return openBlock(), createBlock(_component_n_select, {
                value: currentLanguage.value,
                "onUpdate:value": _cache[0] || (_cache[0] = $event => currentLanguage.value = $event),
                options: unref(languages),
                size: "small"
              }, null, 8, ["value", "options"]);
            };
          }
        });
        const _hoisted_1$c = {
          class: "flex items-center gap-2"
        };
        const _hoisted_2$b = {
          class: "space-y-4"
        };
        const _hoisted_3$a = {
          class: "text-sm text-gray-600 dark:text-gray-400 mb-2"
        };
        const _hoisted_4$a = {
          class: "relative"
        };
        const _hoisted_5$8 = {
          class: "absolute top-2 right-2 flex gap-1"
        };
        const _hoisted_6$6 = {
          class: "text-xs text-gray-500 space-y-1"
        };
        const _hoisted_7$6 = {
          key: 0,
          class: "text-xs text-gray-400"
        };
        const _hoisted_8$6 = {
          class: "flex gap-2"
        };
        const _sfc_main$e = /* @__PURE__ */defineComponent({
          ...{
            name: "CookieSettingsModal"
          },
          __name: "CookieSettingsModal",
          props: {
            show: {
              type: Boolean
            },
            initialValue: {
              default: ""
            }
          },
          emits: ["update:show", "save"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const tokenInput = ref("");
            const isLoading = ref(false);
            watch(() => props.show, newShow => {
              if (newShow) {
                tokenInput.value = props.initialValue;
              }
            });
            watch(() => props.initialValue, newValue => {
              if (props.show) {
                tokenInput.value = newValue;
              }
            });
            const handleClose = () => {
              emit("update:show", false);
            };
            const handleSave = async () => {
              const trimmedToken = tokenInput.value.trim();
              if (!trimmedToken) {
                message.error(t("settings.cookie.validation.required"));
                return;
              }
              if (!trimmedToken.includes("MUSIC_U=")) {
                message.warning(t("settings.cookie.validation.format"));
              }
              try {
                isLoading.value = true;
                emit("save", trimmedToken);
                message.success(t("settings.cookie.message.saveSuccess"));
                handleClose();
              } catch (error) {
                console.error("保存Cookie失败:", error);
                message.error(t("settings.cookie.message.saveError"));
              } finally {
                isLoading.value = false;
              }
            };
            const handleClear = () => {
              tokenInput.value = "";
            };
            const handlePaste = async () => {
              try {
                const text = await navigator.clipboard.readText();
                if (text) {
                  tokenInput.value = text;
                  message.success(t("settings.cookie.message.pasteSuccess"));
                }
              } catch (error) {
                console.error("粘贴失败:", error);
                message.error(t("settings.cookie.message.pasteError"));
              }
            };
            return (_ctx, _cache) => {
              const _component_n_input = __unplugin_components_0$1;
              const _component_n_button = Button;
              const _component_n_modal = __unplugin_components_2$1;
              return openBlock(), createBlock(_component_n_modal, {
                show: __props.show,
                preset: "dialog",
                title: unref(t)("settings.cookie.title"),
                "onUpdate:show": _cache[1] || (_cache[1] = $event => emit("update:show", $event))
              }, {
                header: withCtx(() => [createBaseVNode("div", _hoisted_1$c, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                  class: "ri-key-line"
                }, null, -1)), createBaseVNode("span", null, toDisplayString(unref(t)("settings.cookie.title")), 1)])]),
                action: withCtx(() => [createBaseVNode("div", _hoisted_8$6, [createVNode(_component_n_button, {
                  onClick: handleClose
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.cancel")), 1)]),
                  _: 1
                }), createVNode(_component_n_button, {
                  type: "primary",
                  onClick: handleSave,
                  disabled: !tokenInput.value.trim(),
                  loading: isLoading.value
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.cookie.action.save")), 1)]),
                  _: 1
                }, 8, ["disabled", "loading"])])]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_2$b, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_3$a, toDisplayString(unref(t)("settings.cookie.description")), 1), createBaseVNode("div", _hoisted_4$a, [createVNode(_component_n_input, {
                  value: tokenInput.value,
                  "onUpdate:value": _cache[0] || (_cache[0] = $event => tokenInput.value = $event),
                  type: "textarea",
                  placeholder: unref(t)("settings.cookie.placeholder"),
                  rows: 6,
                  autosize: {
                    minRows: 4,
                    maxRows: 8
                  },
                  style: {
                    "font-family": "monospace",
                    "font-size": "12px"
                  },
                  class: "cookie-input"
                }, null, 8, ["value", "placeholder"]), createBaseVNode("div", _hoisted_5$8, [createVNode(_component_n_button, {
                  size: "tiny",
                  quaternary: "",
                  onClick: handlePaste,
                  title: unref(t)("settings.cookie.action.paste")
                }, {
                  default: withCtx(() => [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                    class: "ri-clipboard-line"
                  }, null, -1)]))]),
                  _: 1
                }, 8, ["title"]), createVNode(_component_n_button, {
                  size: "tiny",
                  quaternary: "",
                  onClick: handleClear,
                  title: unref(t)("settings.cookie.action.clear")
                }, {
                  default: withCtx(() => [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                    class: "ri-delete-bin-line"
                  }, null, -1)]))]),
                  _: 1
                }, 8, ["title"])])])]), createBaseVNode("div", _hoisted_6$6, [createBaseVNode("p", null, "• " + toDisplayString(unref(t)("settings.cookie.help.format")), 1), createBaseVNode("p", null, "• " + toDisplayString(unref(t)("settings.cookie.help.source")), 1), createBaseVNode("p", null, "• " + toDisplayString(unref(t)("settings.cookie.help.storage")), 1)]), tokenInput.value ? (openBlock(), createElementBlock("div", _hoisted_7$6, toDisplayString(unref(t)("settings.cookie.info.length", {
                  length: tokenInput.value.length
                })), 1)) : createCommentVNode("", true)])]),
                _: 1
              }, 8, ["show", "title"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const CookieSettingsModal = /* @__PURE__ */_export_sfc(_sfc_main$e, [["__scopeId", "data-v-00efaaa2"]]);
        const _hoisted_1$b = ["disabled"];
        const _hoisted_2$a = {
          class: "relative flex-1 min-w-0"
        };
        const _hoisted_3$9 = ["type", "value", "placeholder", "disabled"];
        const _hoisted_4$9 = {
          key: 0,
          class: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400"
        };
        const _hoisted_5$7 = ["disabled"];
        const _sfc_main$d = /* @__PURE__ */defineComponent({
          ...{
            name: "SInput"
          },
          __name: "SInput",
          props: {
            modelValue: {
              default: ""
            },
            type: {
              default: "text"
            },
            placeholder: {
              default: ""
            },
            disabled: {
              type: Boolean,
              default: false
            },
            min: {
              default: -Infinity
            },
            max: {
              default: Infinity
            },
            step: {
              default: 1
            },
            suffix: {
              default: ""
            },
            showButtons: {
              type: Boolean,
              default: true
            },
            width: {
              default: ""
            }
          },
          emits: ["update:modelValue", "blur"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const inputRef = ref(null);
            const numericValue = computed(() => {
              const n = Number(props.modelValue);
              return Number.isFinite(n) ? n : 0;
            });
            const displayValue = computed(() => {
              if (props.type === "number") {
                return String(props.modelValue ?? "");
              }
              return String(props.modelValue ?? "");
            });
            const atMin = computed(() => numericValue.value <= props.min);
            const atMax = computed(() => numericValue.value >= props.max);
            const widthClass = computed(() => props.width);
            const clamp = n => Math.min(props.max, Math.max(props.min, n));
            const handleInput = e => {
              const val = e.target.value;
              if (props.type === "text") {
                emit("update:modelValue", val);
                return;
              }
              if (val === "" || val === "-") {
                emit("update:modelValue", val);
                return;
              }
              const n = Number(val);
              if (!Number.isNaN(n)) {
                emit("update:modelValue", n);
              }
            };
            const handleBlur = () => {
              if (props.type === "number") {
                const clamped = clamp(numericValue.value);
                emit("update:modelValue", clamped);
              }
              emit("blur");
            };
            const increment = () => {
              emit("update:modelValue", clamp(numericValue.value + props.step));
            };
            const decrement = () => {
              emit("update:modelValue", clamp(numericValue.value - props.step));
            };
            const handleKeydown = e => {
              if (props.type !== "number") return;
              if (e.key === "ArrowUp") {
                e.preventDefault();
                increment();
              } else if (e.key === "ArrowDown") {
                e.preventDefault();
                decrement();
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["inline-flex items-center gap-1", widthClass.value])
              }, [__props.type === "number" && __props.showButtons ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700",
                disabled: __props.disabled || atMin.value,
                onClick: decrement
              }, [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                class: "ri-subtract-line text-sm"
              }, null, -1)]))], 8, _hoisted_1$b)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_2$a, [createBaseVNode("input", {
                ref_key: "inputRef",
                ref: inputRef,
                type: __props.type === "number" ? "text" : __props.type,
                value: displayValue.value,
                placeholder: __props.placeholder,
                disabled: __props.disabled,
                inputmode: "decimal",
                class: normalizeClass(["w-full rounded-[10px] border border-neutral-200 bg-neutral-50 py-1.5 pl-3 text-sm text-neutral-900 transition-all duration-200 outline-none placeholder:text-neutral-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:bg-neutral-900", [__props.type === "number" && !__props.suffix ? "text-center pr-3" : "", __props.suffix ? "pr-10" : "pr-3"]]),
                onInput: handleInput,
                onBlur: handleBlur,
                onKeydown: handleKeydown
              }, null, 42, _hoisted_3$9), __props.suffix ? (openBlock(), createElementBlock("span", _hoisted_4$9, toDisplayString(__props.suffix), 1)) : createCommentVNode("", true)]), __props.type === "number" && __props.showButtons ? (openBlock(), createElementBlock("button", {
                key: 1,
                class: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700",
                disabled: __props.disabled || atMax.value,
                onClick: increment
              }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                class: "ri-add-line text-sm"
              }, null, -1)]))], 8, _hoisted_5$7)) : createCommentVNode("", true)], 2);
            };
          }
        });
        const _hoisted_1$a = {
          class: "flex items-center gap-3 max-md:flex-wrap"
        };
        const _hoisted_2$9 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_3$8 = {
          class: "text-sm text-gray-500 max-md:hidden"
        };
        const _hoisted_4$8 = {
          class: "flex gap-2 max-md:flex-col max-md:w-full"
        };
        const _hoisted_5$6 = {
          key: 2,
          class: "p-4 border-b border-gray-100 dark:border-gray-800"
        };
        const _hoisted_6$5 = {
          class: "text-base font-bold mb-4 text-gray-900 dark:text-white"
        };
        const _hoisted_7$5 = {
          class: "text-xs font-medium text-gray-500 dark:text-gray-400 uppercase"
        };
        const _hoisted_8$5 = {
          class: "text-lg text-gray-900 dark:text-gray-100 p-3 rounded-xl bg-gray-50 dark:bg-black/20"
        };
        const _hoisted_9$4 = {
          class: "text-sm text-gray-500 mb-2"
        };
        const _hoisted_10$4 = {
          key: 0,
          class: "text-xs text-gray-400 mb-2 font-mono break-all"
        };
        const _hoisted_11$4 = {
          class: "flex gap-2"
        };
        const _hoisted_12$4 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_13$4 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_14$4 = {
          key: 0,
          class: "text-sm text-gray-400"
        };
        const _hoisted_15$3 = {
          class: "w-40 max-md:w-auto flex justify-end"
        };
        const _hoisted_16$3 = {
          class: "text-sm text-gray-500 mb-2"
        };
        const _hoisted_17$3 = {
          key: 0,
          class: "text-xs text-amber-500"
        };
        const _sfc_main$c = /* @__PURE__ */defineComponent({
          __name: "BasicTab",
          setup(__props) {
            const fontPreviews = [{
              key: "chinese"
            }, {
              key: "english"
            }, {
              key: "japanese"
            }, {
              key: "korean"
            }];
            const {
              t
            } = useI18n();
            const settingsStore = useSettingsStore();
            const userStore = useUserStore();
            const setData = inject(SETTINGS_DATA_KEY);
            const message = inject(SETTINGS_MESSAGE_KEY);
            const isDarkTheme = computed({
              get: () => settingsStore.theme === "dark",
              set: () => settingsStore.toggleTheme()
            });
            const handleAutoThemeChange = value => {
              settingsStore.setAutoTheme(value);
            };
            const gpuAccelerationChanged = ref(false);
            const handleGpuAccelerationChange = enabled => {
              try {
                if (window.electron) {
                  window.electron.ipcRenderer.send("update-gpu-acceleration", enabled);
                  gpuAccelerationChanged.value = true;
                  message.info(t("settings.basic.gpuAccelerationChangeSuccess"));
                }
              } catch (error) {
                console.error("GPU加速设置更新失败:", error);
                message.error(t("settings.basic.gpuAccelerationChangeError"));
              }
            };
            const translationEngineOptions = computed(() => [{
              label: t("settings.translationEngineOptions.none"),
              value: "none"
            }, {
              label: t("settings.translationEngineOptions.opencc"),
              value: "opencc"
            }]);
            const animationSpeedMarks = computed(() => ({
              0.1: t("settings.basic.animationSpeed.slow"),
              1: t("settings.basic.animationSpeed.normal"),
              3: t("settings.basic.animationSpeed.fast")
            }));
            const systemFonts = computed(() => settingsStore.systemFonts);
            const selectedFonts = ref([]);
            const renderFontLabel = option => {
              return h("span", {
                style: {
                  fontFamily: option.value
                }
              }, option.label);
            };
            watch(selectedFonts, newFonts => {
              setData.value = {
                ...setData.value,
                fontFamily: newFonts.length === 0 ? "system-ui" : newFonts.join(",")
              };
            }, {
              deep: true
            });
            watch(() => setData.value.fontFamily, newFont => {
              if (newFont) {
                selectedFonts.value = newFont === "system-ui" ? [] : newFont.split(",");
              }
            }, {
              immediate: true
            });
            const showTokenModal = ref(false);
            const currentToken = ref(localStorage.getItem("token") || "");
            const handleTokenSave = async token => {
              try {
                const originalToken = localStorage.getItem("token");
                localStorage.setItem("token", token);
                const user = await getUserDetail();
                if (user.data && user.data.profile) {
                  userStore.setUser(user.data.profile);
                  currentToken.value = token;
                  message.success(t("settings.cookie.message.saveSuccess"));
                  setTimeout(() => window.location.reload(), 1e3);
                } else {
                  if (originalToken) localStorage.setItem("token", originalToken);else localStorage.removeItem("token");
                  message.error(t("settings.cookie.message.saveError"));
                }
              } catch {
                const originalToken = localStorage.getItem("token");
                if (originalToken) localStorage.setItem("token", originalToken);else localStorage.removeItem("token");
                message.error(t("settings.cookie.message.saveError"));
              }
            };
            const clearToken = () => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              currentToken.value = "";
              userStore.user = null;
              message.success(t("settings.basic.clearToken") + "成功");
              setTimeout(() => window.location.reload(), 1e3);
            };
            watch(() => localStorage.getItem("token"), newToken => {
              currentToken.value = newToken || "";
            }, {
              immediate: true
            });
            onMounted(() => {
              if (window.electron) {
                window.electron.ipcRenderer.on("gpu-acceleration-updated", (_, enabled) => {
                  console.log("GPU加速设置已更新:", enabled);
                  gpuAccelerationChanged.value = true;
                });
                window.electron.ipcRenderer.on("gpu-acceleration-update-error", (_, errorMessage) => {
                  console.error("GPU加速设置更新错误:", errorMessage);
                  gpuAccelerationChanged.value = false;
                });
              }
            });
            onUnmounted(() => {
              if (window.electron) {
                window.electron.ipcRenderer.removeAllListeners?.("gpu-acceleration-updated");
                window.electron.ipcRenderer.removeAllListeners?.("gpu-acceleration-update-error");
              }
            });
            return (_ctx, _cache) => {
              const _component_n_switch = __unplugin_components_1$5;
              const _component_n_radio = __unplugin_components_1$2;
              const _component_n_radio_group = __unplugin_components_2;
              const _component_n_select = __unplugin_components_1$3;
              const _component_n_slider = __unplugin_components_0$2;
              return openBlock(), createBlock(_sfc_main$l, {
                title: unref(t)("settings.sections.basic")
              }, {
                default: withCtx(() => [createVNode(_sfc_main$m, {
                  title: unref(t)("settings.basic.themeMode"),
                  description: unref(t)("settings.basic.themeModeDesc")
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_1$a, [createBaseVNode("div", _hoisted_2$9, [createVNode(_component_n_switch, {
                    value: unref(setData).autoTheme,
                    "onUpdate:value": [_cache[0] || (_cache[0] = $event => unref(setData).autoTheme = $event), handleAutoThemeChange]
                  }, {
                    checked: withCtx(() => [...(_cache[12] || (_cache[12] = [createBaseVNode("i", {
                      class: "ri-smartphone-line"
                    }, null, -1)]))]),
                    unchecked: withCtx(() => [...(_cache[13] || (_cache[13] = [createBaseVNode("i", {
                      class: "ri-settings-line"
                    }, null, -1)]))]),
                    _: 1
                  }, 8, ["value"]), createBaseVNode("span", _hoisted_3$8, toDisplayString(unref(setData).autoTheme ? unref(t)("settings.basic.autoTheme") : unref(t)("settings.basic.manualTheme")), 1)]), createVNode(_component_n_switch, {
                    value: isDarkTheme.value,
                    "onUpdate:value": _cache[1] || (_cache[1] = $event => isDarkTheme.value = $event),
                    disabled: unref(setData).autoTheme,
                    class: normalizeClass({
                      "opacity-50": unref(setData).autoTheme
                    })
                  }, {
                    checked: withCtx(() => [...(_cache[14] || (_cache[14] = [createBaseVNode("i", {
                      class: "ri-moon-line"
                    }, null, -1)]))]),
                    unchecked: withCtx(() => [...(_cache[15] || (_cache[15] = [createBaseVNode("i", {
                      class: "ri-sun-line"
                    }, null, -1)]))]),
                    _: 1
                  }, 8, ["value", "disabled", "class"])])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.basic.language"),
                  description: unref(t)("settings.basic.languageDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$f)]),
                  _: 1
                }, 8, ["title", "description"]), !unref(isElectron) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 0,
                  title: unref(t)("settings.basic.tabletMode"),
                  description: unref(t)("settings.basic.tabletModeDesc")
                }, {
                  default: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).tabletMode,
                    "onUpdate:value": _cache[2] || (_cache[2] = $event => unref(setData).tabletMode = $event)
                  }, {
                    checked: withCtx(() => [...(_cache[16] || (_cache[16] = [createBaseVNode("i", {
                      class: "ri-tablet-line"
                    }, null, -1)]))]),
                    unchecked: withCtx(() => [...(_cache[17] || (_cache[17] = [createBaseVNode("i", {
                      class: "ri-smartphone-line"
                    }, null, -1)]))]),
                    _: 1
                  }, 8, ["value"])]),
                  _: 1
                }, 8, ["title", "description"])) : createCommentVNode("", true), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.translationEngine"),
                  description: unref(t)("settings.translationEngine")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$h, {
                    modelValue: unref(setData).lyricTranslationEngine,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => unref(setData).lyricTranslationEngine = $event),
                    options: translationEngineOptions.value,
                    width: "w-40 max-md:w-full"
                  }, null, 8, ["modelValue", "options"])]),
                  _: 1
                }, 8, ["title", "description"]), unref(isElectron) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 1,
                  title: unref(t)("settings.basic.font"),
                  description: unref(t)("settings.basic.fontDesc")
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_4$8, [createVNode(_component_n_radio_group, {
                    value: unref(setData).fontScope,
                    "onUpdate:value": _cache[4] || (_cache[4] = $event => unref(setData).fontScope = $event),
                    class: "mt-2"
                  }, {
                    default: withCtx(() => [createVNode(_component_n_radio, {
                      key: "global",
                      value: "global"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.basic.fontScope.global")), 1)]),
                      _: 1
                    }), createVNode(_component_n_radio, {
                      key: "lyric",
                      value: "lyric"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.basic.fontScope.lyric")), 1)]),
                      _: 1
                    })]),
                    _: 1
                  }, 8, ["value"]), createVNode(_component_n_select, {
                    value: selectedFonts.value,
                    "onUpdate:value": _cache[5] || (_cache[5] = $event => selectedFonts.value = $event),
                    options: systemFonts.value,
                    filterable: "",
                    multiple: "",
                    placeholder: "选择字体",
                    class: "w-[300px] max-md:w-full",
                    "render-label": renderFontLabel
                  }, null, 8, ["value", "options"])])]),
                  _: 1
                }, 8, ["title", "description"])) : createCommentVNode("", true), unref(isElectron) && selectedFonts.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$6, [createBaseVNode("div", _hoisted_6$5, toDisplayString(unref(t)("settings.basic.fontPreview.title")), 1), createBaseVNode("div", {
                  class: "space-y-4",
                  style: normalizeStyle({
                    fontFamily: unref(setData).fontFamily
                  })
                }, [(openBlock(), createElementBlock(Fragment, null, renderList(fontPreviews, preview => {
                  return createBaseVNode("div", {
                    key: preview.key,
                    class: "flex flex-col gap-2"
                  }, [createBaseVNode("div", _hoisted_7$5, toDisplayString(unref(t)(`settings.basic.fontPreview.${preview.key}`)), 1), createBaseVNode("div", _hoisted_8$5, toDisplayString(unref(t)(`settings.basic.fontPreview.${preview.key}Text`)), 1)]);
                }), 64))], 4)])) : createCommentVNode("", true), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.basic.tokenManagement")
                }, {
                  description: withCtx(() => [createBaseVNode("div", _hoisted_9$4, toDisplayString(unref(t)("settings.basic.tokenStatus")) + ": " + toDisplayString(currentToken.value ? unref(t)("settings.basic.tokenSet") : unref(t)("settings.basic.tokenNotSet")), 1), currentToken.value ? (openBlock(), createElementBlock("div", _hoisted_10$4, toDisplayString(currentToken.value.substring(0, 50)) + "... ", 1)) : createCommentVNode("", true)]),
                  action: withCtx(() => [createBaseVNode("div", _hoisted_11$4, [createVNode(_sfc_main$n, {
                    onClick: _cache[6] || (_cache[6] = $event => showTokenModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(currentToken.value ? unref(t)("settings.basic.modifyToken") : unref(t)("settings.basic.setToken")), 1)]),
                    _: 1
                  }), currentToken.value ? (openBlock(), createBlock(_sfc_main$n, {
                    key: 0,
                    variant: "danger",
                    onClick: clearToken
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.basic.clearToken")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)])]),
                  _: 1
                }, 8, ["title"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.basic.animation")
                }, {
                  description: withCtx(() => [createBaseVNode("div", _hoisted_12$4, [createVNode(_component_n_switch, {
                    value: unref(setData).noAnimate,
                    "onUpdate:value": _cache[7] || (_cache[7] = $event => unref(setData).noAnimate = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    _: 1
                  }, 8, ["value"]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.basic.animationDesc")), 1)])]),
                  action: withCtx(() => [createBaseVNode("div", _hoisted_13$4, [!unref(isMobile) ? (openBlock(), createElementBlock("span", _hoisted_14$4, toDisplayString(unref(setData).animationSpeed) + "x", 1)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_15$3, [!unref(isMobile) ? (openBlock(), createBlock(_component_n_slider, {
                    key: 0,
                    value: unref(setData).animationSpeed,
                    "onUpdate:value": _cache[8] || (_cache[8] = $event => unref(setData).animationSpeed = $event),
                    min: 0.1,
                    max: 3,
                    step: 0.1,
                    marks: animationSpeedMarks.value,
                    disabled: unref(setData).noAnimate
                  }, null, 8, ["value", "marks", "disabled"])) : (openBlock(), createBlock(_sfc_main$d, {
                    key: 1,
                    modelValue: unref(setData).animationSpeed,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => unref(setData).animationSpeed = $event),
                    type: "number",
                    min: 0.1,
                    max: 3,
                    step: 0.1,
                    disabled: unref(setData).noAnimate,
                    width: "w-[120px]"
                  }, null, 8, ["modelValue", "disabled"]))])])]),
                  _: 1
                }, 8, ["title"]), unref(isElectron) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 3,
                  title: unref(t)("settings.basic.gpuAcceleration")
                }, {
                  description: withCtx(() => [createBaseVNode("div", _hoisted_16$3, toDisplayString(unref(t)("settings.basic.gpuAccelerationDesc")), 1), gpuAccelerationChanged.value ? (openBlock(), createElementBlock("div", _hoisted_17$3, [_cache[18] || (_cache[18] = createBaseVNode("i", {
                    class: "ri-information-line mr-1"
                  }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("settings.basic.gpuAccelerationRestart")), 1)])) : createCommentVNode("", true)]),
                  default: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).enableGpuAcceleration,
                    "onUpdate:value": [_cache[10] || (_cache[10] = $event => unref(setData).enableGpuAcceleration = $event), handleGpuAccelerationChange]
                  }, {
                    checked: withCtx(() => [...(_cache[19] || (_cache[19] = [createBaseVNode("i", {
                      class: "ri-cpu-line"
                    }, null, -1)]))]),
                    unchecked: withCtx(() => [...(_cache[20] || (_cache[20] = [createBaseVNode("i", {
                      class: "ri-cpu-line"
                    }, null, -1)]))]),
                    _: 1
                  }, 8, ["value"])]),
                  _: 1
                }, 8, ["title"])) : createCommentVNode("", true), createVNode(CookieSettingsModal, {
                  show: showTokenModal.value,
                  "onUpdate:show": _cache[11] || (_cache[11] = $event => showTokenModal.value = $event),
                  "initial-value": currentToken.value,
                  onSave: handleTokenSave
                }, null, 8, ["show", "initial-value"])]),
                _: 1
              }, 8, ["title"]);
            };
          }
        });
        const getDonationList = async () => {
          const {
            data
          } = await axios.get("http://donate.alger.fun/api/donations");
          return data;
        };
        const _hoisted_1$9 = {
          class: "donation-section"
        };
        const _hoisted_2$8 = {
          class: "my-8 text-center"
        };
        const _hoisted_3$7 = {
          class: "text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
        };
        const _hoisted_4$7 = {
          class: "mt-4 flex justify-center"
        };
        const _hoisted_5$5 = {
          class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto"
        };
        const _hoisted_6$4 = {
          class: "pay-card group relative overflow-hidden rounded-2xl bg-[#00A0E9]/5 border border-[#00A0E9]/20 p-6 flex flex-col items-center transition-all hover:bg-[#00A0E9]/10 hover:shadow-lg hover:shadow-[#00A0E9]/10"
        };
        const _hoisted_7$4 = ["src"];
        const _hoisted_8$4 = {
          class: "flex items-center gap-2 text-[#00A0E9] font-bold text-lg"
        };
        const _hoisted_9$3 = {
          class: "pay-card group relative overflow-hidden rounded-2xl bg-[#09BB07]/5 border border-[#09BB07]/20 p-6 flex flex-col items-center transition-all hover:bg-[#09BB07]/10 hover:shadow-lg hover:shadow-[#09BB07]/10"
        };
        const _hoisted_10$3 = ["src"];
        const _hoisted_11$3 = {
          class: "flex items-center gap-2 text-[#09BB07] font-bold text-lg"
        };
        const _hoisted_12$3 = {
          class: "donors-list px-4"
        };
        const _hoisted_13$3 = {
          class: "flex items-center justify-between mb-4 px-1"
        };
        const _hoisted_14$3 = {
          class: "text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2"
        };
        const _hoisted_15$2 = {
          class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        };
        const _hoisted_16$2 = {
          class: "h-full bg-white dark:bg-neutral-800/50 border border-gray-100 dark:border-gray-800 rounded-xl p-3 flex gap-3 hover:border-primary/30 hover:shadow-md hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300"
        };
        const _hoisted_17$2 = {
          class: "relative flex-shrink-0"
        };
        const _hoisted_18$2 = {
          class: "flex-1 min-w-0 flex flex-col justify-center"
        };
        const _hoisted_19$2 = {
          class: "flex justify-between items-center"
        };
        const _hoisted_20$2 = {
          class: "font-bold text-gray-900 dark:text-gray-100 truncate text-sm"
        };
        const _hoisted_21$2 = {
          class: "text-xs font-mono text-primary/80 bg-primary/5 px-1.5 py-0.5 rounded"
        };
        const _hoisted_22$2 = {
          class: "mt-1"
        };
        const _hoisted_23$2 = ["title"];
        const _hoisted_24$2 = {
          key: 1,
          class: "text-xs text-gray-400 dark:text-gray-600"
        };
        const PAGE_SIZE = 40;
        const FIRST_BATCH = 16;
        const _sfc_main$b = /* @__PURE__ */defineComponent({
          __name: "DonationList",
          setup(__props) {
            const {
              t
            } = useI18n();
            const AVATAR_COLORS = ["bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400", "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400", "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400", "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400", "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400", "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400", "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400", "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"];
            const allDonors = ref([]);
            const visibleCount = ref(PAGE_SIZE);
            const isLoading = ref(false);
            const sentinelRef = ref(null);
            let observer = null;
            const visibleDonors = computed(() => allDonors.value.slice(0, visibleCount.value));
            const hasMore = computed(() => visibleCount.value < allDonors.value.length);
            const isTextChar = ch => /[\p{L}\p{N}]/u.test(ch);
            const avatarInitial = name => {
              if (!name) return "?";
              for (const ch of name) {
                if (isTextChar(ch)) {
                  return ch.toUpperCase();
                }
              }
              return "?";
            };
            const avatarColorClass = name => {
              let hash = 0;
              for (let i = 0; i < name.length; i++) {
                hash = name.charCodeAt(i) + ((hash << 5) - hash);
              }
              return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
            };
            const loadMore = () => {
              visibleCount.value = Math.min(visibleCount.value + PAGE_SIZE, allDonors.value.length);
            };
            const setupObserver = () => {
              if (observer) observer.disconnect();
              if (!sentinelRef.value) return;
              observer = new IntersectionObserver(entries => {
                if (entries[0]?.isIntersecting && hasMore.value) {
                  loadMore();
                }
              }, {
                rootMargin: "200px"
              });
              observer.observe(sentinelRef.value);
            };
            watch(sentinelRef, el => {
              if (el) setupObserver();
            });
            onBeforeUnmount(() => {
              observer?.disconnect();
            });
            const fetchDonors = async () => {
              isLoading.value = true;
              try {
                const data = await getDonationList();
                allDonors.value = data.sort((a, b) => Number(b.amount) - Number(a.amount));
                visibleCount.value = PAGE_SIZE;
              } catch (error) {
                console.error("Failed to fetch donors:", error);
              } finally {
                isLoading.value = false;
              }
            };
            const toDonateList = () => {
              window.open("http://donate.alger.fun/download", "_blank");
            };
            onMounted(() => fetchDonors());
            onActivated(() => fetchDonors());
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              return openBlock(), createElementBlock("div", _hoisted_1$9, [createBaseVNode("div", _hoisted_2$8, [createBaseVNode("p", _hoisted_3$7, toDisplayString(unref(t)("donation.description")), 1), createBaseVNode("div", _hoisted_4$7, [createVNode(_component_n_button, {
                type: "primary",
                secondary: "",
                round: "",
                onClick: toDonateList
              }, {
                icon: withCtx(() => [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                  class: "ri-heart-3-line"
                }, null, -1)]))]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("donation.toDonateList")), 1)]),
                _: 1
              })])]), createBaseVNode("div", _hoisted_5$5, [createBaseVNode("div", _hoisted_6$4, [_cache[2] || (_cache[2] = createBaseVNode("div", {
                class: "absolute -right-4 -top-4 w-24 h-24 bg-[#00A0E9]/10 rounded-full blur-2xl group-hover:bg-[#00A0E9]/20 transition-colors"
              }, null, -1)), createBaseVNode("img", {
                src: unref(alipay),
                alt: "Alipay",
                class: "w-52 h-52 rounded-xl shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300"
              }, null, 8, _hoisted_7$4), createBaseVNode("div", _hoisted_8$4, [_cache[1] || (_cache[1] = createBaseVNode("i", {
                class: "ri-alipay-fill text-2xl"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("common.alipay")), 1)])]), createBaseVNode("div", _hoisted_9$3, [_cache[4] || (_cache[4] = createBaseVNode("div", {
                class: "absolute -right-4 -top-4 w-24 h-24 bg-[#09BB07]/10 rounded-full blur-2xl group-hover:bg-[#09BB07]/20 transition-colors"
              }, null, -1)), createBaseVNode("img", {
                src: unref(wechat),
                alt: "WeChat",
                class: "w-52 h-52 rounded-xl shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300"
              }, null, 8, _hoisted_10$3), createBaseVNode("div", _hoisted_11$3, [_cache[3] || (_cache[3] = createBaseVNode("i", {
                class: "ri-wechat-pay-fill text-2xl"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("common.wechat")), 1)])])]), createBaseVNode("div", _hoisted_12$3, [createBaseVNode("div", _hoisted_13$3, [createBaseVNode("h4", _hoisted_14$3, [_cache[5] || (_cache[5] = createBaseVNode("i", {
                class: "ri-user-heart-line text-primary"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("donation.title")), 1)]), createVNode(_component_n_button, {
                quaternary: "",
                size: "small",
                loading: isLoading.value,
                onClick: fetchDonors
              }, {
                icon: withCtx(() => [...(_cache[6] || (_cache[6] = [createBaseVNode("i", {
                  class: "ri-refresh-line"
                }, null, -1)]))]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("donation.refresh")), 1)]),
                _: 1
              }, 8, ["loading"])]), createBaseVNode("div", _hoisted_15$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleDonors.value, (donor, index) => {
                return openBlock(), createElementBlock("div", {
                  key: donor.id,
                  class: normalizeClass(["donor-card group", index < FIRST_BATCH ? "animate-fade-in-up" : ""]),
                  style: normalizeStyle(index < FIRST_BATCH ? {
                    animationDelay: `${index * 10}ms`
                  } : void 0)
                }, [createBaseVNode("div", _hoisted_16$2, [createBaseVNode("div", _hoisted_17$2, [createBaseVNode("div", {
                  class: normalizeClass(["w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border border-gray-100 dark:border-gray-700", avatarColorClass(donor.name)])
                }, toDisplayString(avatarInitial(donor.name)), 3), index < 3 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white border border-white dark:border-gray-800", [index === 0 ? "bg-yellow-400" : index === 1 ? "bg-gray-400" : "bg-orange-400"]])
                }, [...(_cache[7] || (_cache[7] = [createBaseVNode("i", {
                  class: "ri-trophy-fill"
                }, null, -1)]))], 2)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_18$2, [createBaseVNode("div", _hoisted_19$2, [createBaseVNode("span", _hoisted_20$2, toDisplayString(donor.name), 1), createBaseVNode("span", _hoisted_21$2, " ¥" + toDisplayString(donor.amount), 1)]), createBaseVNode("div", _hoisted_22$2, [donor.message ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "text-xs text-gray-500 dark:text-gray-400 truncate border-b border-dashed border-gray-300 dark:border-gray-600 inline-block max-w-full",
                  title: donor.message
                }, ' "' + toDisplayString(donor.message) + '" ', 9, _hoisted_23$2)) : (openBlock(), createElementBlock("div", _hoisted_24$2, toDisplayString(donor.date), 1))])])])], 6);
              }), 128))]), hasMore.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "sentinelRef",
                ref: sentinelRef,
                class: "h-1"
              }, null, 512)) : createCommentVNode("", true)])]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const DonationList = /* @__PURE__ */_export_sfc(_sfc_main$b, [["__scopeId", "data-v-58c65ac0"]]);
        const _sfc_main$a = /* @__PURE__ */defineComponent({
          __name: "DonationTab",
          setup(__props) {
            const {
              t
            } = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createBlock(_sfc_main$l, {
                title: unref(t)("settings.sections.donation")
              }, {
                default: withCtx(() => [createVNode(DonationList)]),
                _: 1
              }, 8, ["title"]);
            };
          }
        });
        const _sfc_main$9 = /* @__PURE__ */defineComponent({
          __name: "ProxySettings",
          props: {
            show: {
              type: Boolean,
              default: false
            },
            config: {
              type: Object,
              default: () => ({
                protocol: "http",
                host: "127.0.0.1",
                port: 7890
              })
            }
          },
          emits: ["update:show", "confirm"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const formRef = ref();
            const visible = ref(props.show);
            const proxyForm = ref({
              protocol: props.config.protocol || "http",
              host: props.config.host || "127.0.0.1",
              port: props.config.port || 7890
            });
            const proxyRules = {
              protocol: {
                required: true,
                message: t("settings.validation.selectProxyProtocol"),
                trigger: ["blur", "change"]
              },
              host: {
                required: true,
                message: t("settings.validation.proxyHost"),
                trigger: ["blur", "change"],
                validator: (_rule, value) => {
                  if (!value) return false;
                  const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$|^localhost$|^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;
                  return ipRegex.test(value);
                }
              },
              port: {
                required: true,
                message: t("settings.validation.portNumber"),
                trigger: ["blur", "change"],
                validator: (_rule, value) => {
                  return value >= 1 && value <= 65535;
                }
              }
            };
            watch(() => props.show, newVal => {
              visible.value = newVal;
            });
            watch(() => visible.value, newVal => {
              emit("update:show", newVal);
            });
            watch(() => props.config, newVal => {
              proxyForm.value = {
                protocol: newVal.protocol || "http",
                host: newVal.host || "127.0.0.1",
                port: newVal.port || 7890
              };
            }, {
              deep: true
            });
            const handleProxyConfirm = async () => {
              try {
                await formRef.value?.validate();
                emit("confirm", {
                  ...proxyForm.value
                });
                visible.value = false;
                message.success(t("settings.network.messages.proxySuccess"));
              } catch (err) {
                console.error("代理设置验证失败:", err);
                message.error(t("settings.network.messages.proxyError"));
              }
            };
            const handleCancel = () => {
              visible.value = false;
            };
            return (_ctx, _cache) => {
              const _component_n_select = __unplugin_components_1$3;
              const _component_n_form_item = __unplugin_components_1$1;
              const _component_n_input = __unplugin_components_0$1;
              const _component_n_input_number = __unplugin_components_1$6;
              const _component_n_form = __unplugin_components_4;
              const _component_n_modal = __unplugin_components_2$1;
              return openBlock(), createBlock(_component_n_modal, {
                show: visible.value,
                "onUpdate:show": _cache[3] || (_cache[3] = $event => visible.value = $event),
                preset: "dialog",
                title: unref(t)("settings.network.proxy"),
                "positive-text": unref(t)("common.confirm"),
                "negative-text": unref(t)("common.cancel"),
                "show-icon": false,
                onPositiveClick: handleProxyConfirm,
                onNegativeClick: handleCancel
              }, {
                default: withCtx(() => [createVNode(_component_n_form, {
                  ref_key: "formRef",
                  ref: formRef,
                  model: proxyForm.value,
                  rules: proxyRules,
                  "label-placement": "left",
                  "label-width": "80",
                  "require-mark-placement": "right-hanging"
                }, {
                  default: withCtx(() => [createVNode(_component_n_form_item, {
                    label: unref(t)("settings.network.proxy"),
                    path: "protocol"
                  }, {
                    default: withCtx(() => [createVNode(_component_n_select, {
                      value: proxyForm.value.protocol,
                      "onUpdate:value": _cache[0] || (_cache[0] = $event => proxyForm.value.protocol = $event),
                      options: [{
                        label: "HTTP",
                        value: "http"
                      }, {
                        label: "HTTPS",
                        value: "https"
                      }, {
                        label: "SOCKS5",
                        value: "socks5"
                      }]
                    }, null, 8, ["value"])]),
                    _: 1
                  }, 8, ["label"]), createVNode(_component_n_form_item, {
                    label: unref(t)("settings.network.proxyHost"),
                    path: "host"
                  }, {
                    default: withCtx(() => [createVNode(_component_n_input, {
                      value: proxyForm.value.host,
                      "onUpdate:value": _cache[1] || (_cache[1] = $event => proxyForm.value.host = $event),
                      placeholder: unref(t)("settings.network.proxyHostPlaceholder")
                    }, null, 8, ["value", "placeholder"])]),
                    _: 1
                  }, 8, ["label"]), createVNode(_component_n_form_item, {
                    label: unref(t)("settings.network.proxyPort"),
                    path: "port"
                  }, {
                    default: withCtx(() => [createVNode(_component_n_input_number, {
                      value: proxyForm.value.port,
                      "onUpdate:value": _cache[2] || (_cache[2] = $event => proxyForm.value.port = $event),
                      placeholder: unref(t)("settings.network.proxyPortPlaceholder"),
                      min: 1,
                      max: 65535
                    }, null, 8, ["value", "placeholder"])]),
                    _: 1
                  }, 8, ["label"])]),
                  _: 1
                }, 8, ["model"])]),
                _: 1
              }, 8, ["show", "title", "positive-text", "negative-text"]);
            };
          }
        });
        const _hoisted_1$8 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_2$7 = {
          class: "flex items-center gap-2 max-md:flex-wrap"
        };
        const _sfc_main$8 = /* @__PURE__ */defineComponent({
          __name: "NetworkTab",
          setup(__props) {
            const {
              t
            } = useI18n();
            const setData = inject(SETTINGS_DATA_KEY);
            const message = inject(SETTINGS_MESSAGE_KEY);
            const showProxyModal = ref(false);
            const proxyForm = ref({
              protocol: "http",
              host: "127.0.0.1",
              port: 7890
            });
            watch(() => setData.value.proxyConfig, newVal => {
              if (newVal) {
                proxyForm.value = {
                  protocol: newVal.protocol || "http",
                  host: newVal.host || "127.0.0.1",
                  port: newVal.port || 7890
                };
              }
            }, {
              immediate: true,
              deep: true
            });
            const handleProxyConfirm = async proxyConfig => {
              setData.value = {
                ...setData.value,
                proxyConfig: {
                  enable: setData.value.proxyConfig?.enable || false,
                  ...proxyConfig
                }
              };
              message.success(t("settings.network.messages.proxySuccess"));
            };
            const validateAndSaveRealIP = () => {
              const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
              if (!setData.value.realIP || ipRegex.test(setData.value.realIP)) {
                setData.value = {
                  ...setData.value,
                  realIP: setData.value.realIP,
                  enableRealIP: true
                };
                if (setData.value.realIP) {
                  message.success(t("settings.network.messages.realIPSuccess"));
                }
              } else {
                message.error(t("settings.network.messages.realIPError"));
                setData.value = {
                  ...setData.value,
                  realIP: ""
                };
              }
            };
            watch(() => setData.value.enableRealIP, newVal => {
              if (!newVal) {
                setData.value = {
                  ...setData.value,
                  realIP: "",
                  enableRealIP: false
                };
              }
            });
            return (_ctx, _cache) => {
              const _component_n_switch = __unplugin_components_1$5;
              return unref(isElectron) ? (openBlock(), createBlock(_sfc_main$l, {
                key: 0,
                title: unref(t)("settings.sections.network")
              }, {
                default: withCtx(() => [createVNode(_sfc_main$m, {
                  title: unref(t)("settings.network.apiPort"),
                  description: unref(t)("settings.network.apiPortDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$d, {
                    modelValue: unref(setData).musicApiPort,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(setData).musicApiPort = $event),
                    type: "number",
                    min: 1024,
                    max: 65535,
                    step: 1,
                    width: "w-[140px] max-md:w-32"
                  }, null, 8, ["modelValue"])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.network.proxy"),
                  description: unref(t)("settings.network.proxyDesc")
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_1$8, [createVNode(_component_n_switch, {
                    value: unref(setData).proxyConfig.enable,
                    "onUpdate:value": _cache[1] || (_cache[1] = $event => unref(setData).proxyConfig.enable = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"]), createVNode(_sfc_main$n, {
                    onClick: _cache[2] || (_cache[2] = $event => showProxyModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.configure")), 1)]),
                    _: 1
                  })])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.network.realIP"),
                  description: unref(t)("settings.network.realIPDesc")
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_2$7, [createVNode(_component_n_switch, {
                    value: unref(setData).enableRealIP,
                    "onUpdate:value": _cache[3] || (_cache[3] = $event => unref(setData).enableRealIP = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"]), unref(setData).enableRealIP ? (openBlock(), createBlock(_sfc_main$d, {
                    key: 0,
                    modelValue: unref(setData).realIP,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => unref(setData).realIP = $event),
                    placeholder: "realIP",
                    width: "w-[200px] max-md:w-full",
                    onBlur: validateAndSaveRealIP
                  }, null, 8, ["modelValue"])) : createCommentVNode("", true)])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$9, {
                  show: showProxyModal.value,
                  "onUpdate:show": _cache[5] || (_cache[5] = $event => showProxyModal.value = $event),
                  config: proxyForm.value,
                  onConfirm: handleProxyConfirm
                }, null, 8, ["show", "config"])]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true);
            };
          }
        });
        const _hoisted_1$7 = {
          class: "space-y-3"
        };
        const _hoisted_2$6 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_3$6 = {
          class: "text-sm text-gray-700 dark:text-gray-300"
        };
        const _hoisted_4$6 = {
          class: "flex items-center gap-2"
        };
        const _sfc_main$7 = /* @__PURE__ */defineComponent({
          __name: "AudioDeviceSettings",
          setup(__props) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerCoreStore();
            const isLoading = ref(false);
            const isTesting = ref(false);
            const handleRefresh = async () => {
              isLoading.value = true;
              await playerStore.refreshAudioDevices();
              isLoading.value = false;
            };
            const handleDeviceChange = async deviceId => {
              isLoading.value = true;
              await playerStore.setAudioOutputDevice(deviceId);
              isLoading.value = false;
            };
            const handleTest = async () => {
              isTesting.value = true;
              try {
                const audioContext = new AudioContext();
                const deviceId = playerStore.audioOutputDeviceId;
                if (deviceId && deviceId !== "default" && audioContext.setSinkId) {
                  await audioContext.setSinkId(deviceId);
                }
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.value = 440;
                gainNode.gain.value = 0.3;
                oscillator.start();
                setTimeout(() => {
                  oscillator.stop();
                  audioContext.close();
                  isTesting.value = false;
                }, 500);
              } catch (error) {
                console.error("测试音频失败:", error);
                isTesting.value = false;
              }
            };
            onMounted(() => {
              handleRefresh();
            });
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              const _component_n_select = __unplugin_components_1$3;
              return openBlock(), createElementBlock("div", _hoisted_1$7, [createBaseVNode("div", _hoisted_2$6, [createBaseVNode("span", _hoisted_3$6, toDisplayString(unref(t)("settings.playback.audioDevice")), 1), createBaseVNode("div", _hoisted_4$6, [createVNode(_component_n_button, {
                size: "tiny",
                loading: isLoading.value,
                quaternary: "",
                onClick: handleRefresh
              }, {
                icon: withCtx(() => [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                  class: "ri-refresh-line"
                }, null, -1)]))]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_n_button, {
                size: "tiny",
                loading: isTesting.value,
                quaternary: "",
                onClick: handleTest
              }, {
                icon: withCtx(() => [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                  class: "ri-volume-up-line"
                }, null, -1)]))]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("settings.playback.testAudio")), 1)]),
                _: 1
              }, 8, ["loading"])])]), createVNode(_component_n_select, {
                value: unref(playerStore).audioOutputDeviceId,
                options: unref(playerStore).availableAudioDevices.map(d => ({
                  label: d.label,
                  value: d.deviceId
                })),
                loading: isLoading.value,
                placeholder: unref(t)("settings.playback.selectAudioDevice"),
                "onUpdate:value": handleDeviceChange
              }, null, 8, ["value", "options", "loading", "placeholder"])]);
            };
          }
        });
        const _hoisted_1$6 = {
          key: 0,
          class: "fixed bottom-0 left-0 right-0 z-[20001] bg-[#F2F2F7] dark:bg-[#1C1C1E] rounded-t-[20px] max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
        };
        const _hoisted_2$5 = {
          class: "flex flex-col items-center pt-3 pb-4 px-4 bg-[#F2F2F7] dark:bg-[#1C1C1E] sticky top-0 z-10"
        };
        const _hoisted_3$5 = {
          class: "w-full flex justify-between items-center"
        };
        const _hoisted_4$5 = {
          class: "text-xl font-bold text-black dark:text-white"
        };
        const _hoisted_5$4 = {
          class: "flex-1 overflow-y-auto px-4 pb-32 space-y-6"
        };
        const _hoisted_6$3 = {
          class: "bg-primary dark:bg-primary/80 rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-primary/20"
        };
        const _hoisted_7$3 = {
          class: "text-xs opacity-80 mb-1"
        };
        const _hoisted_8$3 = {
          class: "text-2xl font-bold"
        };
        const _hoisted_9$2 = {
          class: "text-[13px] uppercase text-[#8E8E93] ml-4 mb-2 font-normal"
        };
        const _hoisted_10$2 = {
          class: "bg-white dark:bg-[#2C2C2E] rounded-xl overflow-hidden"
        };
        const _hoisted_11$2 = ["onClick"];
        const _hoisted_12$2 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_13$2 = {
          class: "text-[17px] text-black dark:text-white leading-tight"
        };
        const _hoisted_14$2 = {
          class: "text-[13px] text-[#8E8E93] truncate mt-0.5"
        };
        const _hoisted_15$1 = {
          class: "ml-2"
        };
        const _hoisted_16$1 = {
          key: 0,
          class: "ri-check-line text-primary text-xl"
        };
        const _hoisted_17$1 = {
          key: 1,
          class: "ri-lock-line text-[#C7C7CC] text-lg"
        };
        const _hoisted_18$1 = {
          key: 2,
          class: "ri-arrow-right-s-line text-[#C7C7CC] text-xl"
        };
        const _hoisted_19$1 = {
          class: "flex justify-between items-center ml-4 mb-2"
        };
        const _hoisted_20$1 = {
          class: "text-[13px] uppercase text-[#8E8E93] font-normal"
        };
        const _hoisted_21$1 = {
          class: "bg-white dark:bg-[#2C2C2E] rounded-xl overflow-hidden"
        };
        const _hoisted_22$1 = {
          class: "px-4 py-3 border-b-[0.5px] border-[#C6C6C8] dark:border-[#38383A]"
        };
        const _hoisted_23$1 = {
          class: "text-[17px] font-semibold text-black dark:text-white"
        };
        const _hoisted_24$1 = {
          key: 0
        };
        const _hoisted_25$1 = ["onClick"];
        const _hoisted_26$1 = {
          key: 0,
          class: "w-2.5 h-2.5 rounded-full bg-primary"
        };
        const _hoisted_27$1 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_28$1 = {
          class: "text-[15px] text-black dark:text-white leading-tight"
        };
        const _hoisted_29$1 = {
          class: "text-[12px] text-[#8E8E93]"
        };
        const _hoisted_30$1 = ["onClick"];
        const _hoisted_31$1 = {
          key: 1,
          class: "py-8 flex flex-col items-center text-[#8E8E93]"
        };
        const _hoisted_32$1 = {
          class: "text-sm"
        };
        const _hoisted_33$1 = {
          class: "bg-white dark:bg-[#2C2C2E] rounded-xl overflow-hidden"
        };
        const _hoisted_34$1 = {
          class: "flex items-center px-4 py-3"
        };
        const _hoisted_35$1 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_36$1 = {
          class: "text-[17px] text-black dark:text-white leading-tight"
        };
        const _hoisted_37$1 = {
          class: "text-[13px] text-[#8E8E93] truncate mt-0.5"
        };
        const _hoisted_38$1 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_39$1 = {
          key: 0,
          class: "fixed inset-0 bg-black/40 z-[30000] flex items-center justify-center p-6 backdrop-blur-sm"
        };
        const _hoisted_40$1 = {
          class: "bg-white dark:bg-[#2C2C2E] w-full max-w-sm rounded-[20px] overflow-hidden shadow-2xl flex flex-col animate-scale-in"
        };
        const _hoisted_41$1 = {
          class: "px-6 pt-6 pb-2"
        };
        const _hoisted_42$1 = {
          class: "text-lg font-bold text-center text-black dark:text-white"
        };
        const _hoisted_43$1 = {
          class: "px-6 py-4"
        };
        const _hoisted_44$1 = {
          class: "bg-[#E3E3E8] dark:bg-[#3A3A3C] p-0.5 rounded-lg flex"
        };
        const _hoisted_45$1 = ["onClick"];
        const _hoisted_46 = {
          class: "px-6 pb-6"
        };
        const _hoisted_47 = {
          key: 0,
          class: "space-y-4"
        };
        const _hoisted_48 = ["placeholder"];
        const _hoisted_49 = ["disabled"];
        const _hoisted_50 = {
          key: 0,
          class: "ri-loader-4-line animate-spin mr-2 inline-block"
        };
        const _hoisted_51 = {
          key: 1,
          class: "space-y-4"
        };
        const _hoisted_52 = {
          class: "block w-full border-2 border-dashed border-[#C7C7CC] dark:border-[#38383A] rounded-xl p-8 text-center cursor-pointer active:bg-[#F2F2F7] dark:active:bg-[#2C2C2E] transition-all"
        };
        const _hoisted_53 = {
          class: "text-sm text-[#8E8E93]"
        };
        const _hoisted_54 = {
          key: 2,
          class: "space-y-4"
        };
        const _hoisted_55 = ["placeholder"];
        const _sfc_main$6 = /* @__PURE__ */defineComponent({
          __name: "MobileMusicSourceSettings",
          props: {
            show: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:show"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const settingsStore = useSettingsStore();
            const visible = computed({
              get: () => props.show,
              set: value => emit("update:show", value)
            });
            const currentMode = computed(() => settingsStore.setData?.mobileSourceMode || "default");
            const currentModeName = computed(() => {
              const mode = sourceModes.value.find(m => m.value === currentMode.value);
              return mode?.name || t("settings.playback.sourceLabels.default");
            });
            const lxMusicApis = computed(() => settingsStore.setData?.lxMusicScripts || []);
            const activeLxApiId = computed(() => settingsStore.setData?.activeLxMusicApiId);
            const hasLxScript = computed(() => lxMusicApis.value.length > 0 && !!activeLxApiId.value);
            const hasCustomApi = computed(() => Boolean(settingsStore.setData?.customApiPlugin));
            const customApiName = computed(() => settingsStore.setData?.customApiPluginName || "");
            const sourceModes = computed(() => [{
              value: "default",
              name: t("settings.playback.sourceLabels.default"),
              desc: t("settings.playback.mobile.defaultDesc"),
              icon: "ri-music-2-line",
              color: "#34C759",
              // iOS Green
              disabled: false
            }, {
              value: "lxMusic",
              name: t("settings.playback.sourceLabels.lxMusic"),
              desc: hasLxScript.value ? t("settings.playback.mobile.lxMusicReady") : t("settings.playback.mobile.lxMusicNeedImport"),
              icon: "ri-album-line",
              color: "#007AFF",
              // iOS Blue
              disabled: !hasLxScript.value
            }, {
              value: "custom",
              name: t("settings.playback.sourceLabels.custom"),
              desc: hasCustomApi.value ? customApiName.value : t("settings.playback.mobile.customNeedImport"),
              icon: "ri-api-line",
              color: "#AF52DE",
              // iOS Purple
              disabled: !hasCustomApi.value
            }]);
            const selectMode = mode => {
              settingsStore.setSetData({
                mobileSourceMode: mode
              });
              message.success(t("settings.playback.mobile.modeChanged"));
            };
            const importModalVisible = ref(false);
            const importType = ref("lxMusic");
            const importTab = ref("url");
            const importUrl = ref("");
            const importText = ref("");
            const importing = ref(false);
            const importModalTitle = computed(() => importType.value === "lxMusic" ? t("settings.playback.lxMusic.importTitle") : t("settings.playback.customApi.importTitle"));
            const showImportModal = type => {
              importType.value = type;
              importUrl.value = "";
              importText.value = "";
              importModalVisible.value = true;
            };
            const importFromUrl = async () => {
              if (!importUrl.value.trim()) {
                message.warning(t("settings.playback.import.urlRequired"));
                return;
              }
              importing.value = true;
              try {
                const response = await crossFetch(importUrl.value);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const content = await response.text();
                await processImport(content);
              } catch (error) {
                console.error(error);
                message.error(t("settings.playback.import.urlFailed"));
              } finally {
                importing.value = false;
              }
            };
            const handleFileChange = async event => {
              const input = event.target;
              const file = input.files?.[0];
              if (!file) return;
              try {
                const content = await file.text();
                await processImport(content);
              } catch (error) {
                console.error(error);
                message.error(t("settings.playback.import.fileFailed"));
              }
            };
            const importFromText = async () => {
              if (!importText.value.trim()) {
                message.warning(t("settings.playback.import.textRequired"));
                return;
              }
              await processImport(importText.value);
            };
            const processImport = async content => {
              try {
                if (importType.value === "lxMusic") {
                  const hasHeaderComment = /^\/\*+[\s\S]*?@name[\s\S]*?\*\//.test(content);
                  const hasLxApi = content.includes("lx.on(") || content.includes("lx.send(");
                  if (!hasHeaderComment && !hasLxApi) {
                    throw new Error(t("settings.playback.lxMusic.scripts.invalidScript") || "无效的落雪音源脚本");
                  }
                  const info = parseScriptInfo(content);
                  const newApi = {
                    id: Date.now().toString(),
                    name: info.name,
                    script: content,
                    info,
                    sources: [],
                    enabled: true,
                    createdAt: Date.now()
                  };
                  const scripts = [...lxMusicApis.value, newApi];
                  settingsStore.setLxMusicScripts(scripts);
                  settingsStore.setActiveLxMusicApiId(newApi.id);
                  settingsStore.setSetData({
                    mobileSourceMode: "lxMusic"
                  });
                  message.success(t("settings.playback.lxMusic.importSuccess"));
                } else {
                  const config = JSON.parse(content);
                  settingsStore.setCustomApiPlugin({
                    name: config.name || "Custom API",
                    content
                  });
                  settingsStore.setSetData({
                    mobileSourceMode: "custom"
                  });
                  message.success(t("settings.playback.customApi.importSuccess", {
                    name: config.name
                  }));
                }
                importModalVisible.value = false;
              } catch (error) {
                console.error(error);
                message.error(error.message || t("settings.playback.import.parseFailed"));
              }
            };
            const setActiveLxMusicApiId = id => {
              settingsStore.setActiveLxMusicApiId(id);
              if (currentMode.value !== "lxMusic") {
                settingsStore.setSetData({
                  mobileSourceMode: "lxMusic"
                });
              }
            };
            const removeLxApi = apiId => {
              const removedScript = lxMusicApis.value.find(s => s.id === apiId);
              const scripts = lxMusicApis.value.filter(script => script.id !== apiId);
              settingsStore.setLxMusicScripts(scripts);
              if (activeLxApiId.value === apiId) {
                settingsStore.setActiveLxMusicApiId(scripts.length > 0 ? scripts[0].id : null);
                if (scripts.length === 0 && currentMode.value === "lxMusic") {
                  settingsStore.setSetData({
                    mobileSourceMode: "default"
                  });
                }
              }
              message.success(t("settings.playback.lxMusic.scripts.deleted", {
                name: removedScript?.name || ""
              }) || "已删除音源");
            };
            const clearScript = type => {
              {
                settingsStore.setCustomApiPlugin({
                  name: "",
                  content: ""
                });
                if (currentMode.value === "custom") {
                  settingsStore.setSetData({
                    mobileSourceMode: "default"
                  });
                }
                message.success(t("settings.playback.customApi.cleared"));
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Teleport, {
                to: "body"
              }, [createVNode(Transition, {
                name: "fade"
              }, {
                default: withCtx(() => [visible.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "fixed inset-0 bg-black/40 z-[20000] backdrop-blur-[2px]",
                  onClick: _cache[0] || (_cache[0] = $event => visible.value = false)
                })) : createCommentVNode("", true)]),
                _: 1
              }), createVNode(Transition, {
                name: "slide-up"
              }, {
                default: withCtx(() => [visible.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [createBaseVNode("div", _hoisted_2$5, [_cache[8] || (_cache[8] = createBaseVNode("div", {
                  class: "w-9 h-1.5 bg-[#C7C7CC] dark:bg-[#3A3A3C] rounded-full mb-4"
                }, null, -1)), createBaseVNode("div", _hoisted_3$5, [createBaseVNode("h2", _hoisted_4$5, toDisplayString(unref(t)("settings.playback.musicSources")), 1), createBaseVNode("button", {
                  class: "p-2 -mr-2 text-[#007AFF] dark:text-[#0A84FF] font-semibold",
                  onClick: _cache[1] || (_cache[1] = $event => visible.value = false)
                }, toDisplayString(unref(t)("common.confirm")), 1)])]), createBaseVNode("div", _hoisted_5$4, [createBaseVNode("div", _hoisted_6$3, [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_7$3, toDisplayString(unref(t)("settings.playback.currentSource")), 1), createBaseVNode("div", _hoisted_8$3, toDisplayString(currentModeName.value), 1)]), _cache[9] || (_cache[9] = createBaseVNode("i", {
                  class: "ri-shield-check-line text-4xl opacity-80"
                }, null, -1))]), createBaseVNode("section", null, [createBaseVNode("div", _hoisted_9$2, toDisplayString(unref(t)("settings.playback.mobile.modeTitle") || "选择解析模式"), 1), createBaseVNode("div", _hoisted_10$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(sourceModes.value, (mode, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: mode.value,
                    class: normalizeClass(["flex items-center px-4 py-3 active:bg-[#E5E5EA] dark:active:bg-[#2C2C2E] transition-colors cursor-pointer", [mode.disabled ? "opacity-50 grayscale" : "", index !== sourceModes.value.length - 1 ? "border-b-[0.5px] border-[#C6C6C8] dark:border-[#38383A]" : ""]]),
                    onClick: $event => !mode.disabled && selectMode(mode.value)
                  }, [createBaseVNode("div", {
                    class: "w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-white text-lg",
                    style: normalizeStyle({
                      backgroundColor: mode.color
                    })
                  }, [createBaseVNode("i", {
                    class: normalizeClass(mode.icon)
                  }, null, 2)], 4), createBaseVNode("div", _hoisted_12$2, [createBaseVNode("div", _hoisted_13$2, toDisplayString(mode.name), 1), createBaseVNode("div", _hoisted_14$2, toDisplayString(mode.desc), 1)]), createBaseVNode("div", _hoisted_15$1, [currentMode.value === mode.value ? (openBlock(), createElementBlock("i", _hoisted_16$1)) : mode.disabled ? (openBlock(), createElementBlock("i", _hoisted_17$1)) : (openBlock(), createElementBlock("i", _hoisted_18$1))])], 10, _hoisted_11$2);
                }), 128))])]), createBaseVNode("section", null, [createBaseVNode("div", _hoisted_19$1, [createBaseVNode("div", _hoisted_20$1, toDisplayString(unref(t)("settings.playback.lxMusic.sectionTitle") || "音源脚本管理"), 1), createBaseVNode("button", {
                  class: "text-[#007AFF] dark:text-[#0A84FF] text-sm font-medium flex items-center gap-1 active:opacity-60",
                  onClick: _cache[2] || (_cache[2] = $event => showImportModal("lxMusic"))
                }, [_cache[10] || (_cache[10] = createBaseVNode("i", {
                  class: "ri-add-line"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("common.import")), 1)])]), createBaseVNode("div", _hoisted_21$1, [createBaseVNode("div", _hoisted_22$1, [createBaseVNode("span", _hoisted_23$1, toDisplayString(unref(t)("settings.playback.lxMusic.title")), 1)]), lxMusicApis.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(lxMusicApis.value, (api, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: api.id,
                    class: normalizeClass(["flex items-center px-4 py-3 active:bg-[#E5E5EA] dark:active:bg-[#2C2C2E] transition-colors cursor-pointer", index !== lxMusicApis.value.length - 1 ? "border-b-[0.5px] border-[#C6C6C8] dark:border-[#38383A]" : ""]),
                    onClick: $event => setActiveLxMusicApiId(api.id)
                  }, [createBaseVNode("div", {
                    class: normalizeClass(["w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors", activeLxApiId.value === api.id ? "border-primary" : "border-[#C7C7CC]"])
                  }, [activeLxApiId.value === api.id ? (openBlock(), createElementBlock("div", _hoisted_26$1)) : createCommentVNode("", true)], 2), createBaseVNode("div", _hoisted_27$1, [createBaseVNode("div", _hoisted_28$1, toDisplayString(api.name), 1), createBaseVNode("div", _hoisted_29$1, toDisplayString(api.info.version || "v1.0.0"), 1)]), createBaseVNode("button", {
                    class: "p-2 text-[#FF3B30] active:opacity-60",
                    onClick: withModifiers($event => removeLxApi(api.id), ["stop"])
                  }, [...(_cache[11] || (_cache[11] = [createBaseVNode("i", {
                    class: "ri-delete-bin-6-line text-lg"
                  }, null, -1)]))], 8, _hoisted_30$1)], 10, _hoisted_25$1);
                }), 128))])) : (openBlock(), createElementBlock("div", _hoisted_31$1, [_cache[12] || (_cache[12] = createBaseVNode("i", {
                  class: "ri-inbox-line text-3xl opacity-30 mb-2"
                }, null, -1)), createBaseVNode("span", _hoisted_32$1, toDisplayString(unref(t)("settings.playback.mobile.lxMusicNeedImport")), 1)]))])]), createBaseVNode("section", null, [createBaseVNode("div", _hoisted_33$1, [createBaseVNode("div", _hoisted_34$1, [_cache[14] || (_cache[14] = createBaseVNode("div", {
                  class: "w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-white text-lg bg-[#AF52DE]"
                }, [createBaseVNode("i", {
                  class: "ri-api-line"
                })], -1)), createBaseVNode("div", _hoisted_35$1, [createBaseVNode("div", _hoisted_36$1, toDisplayString(unref(t)("settings.playback.customApi.sectionTitle")), 1), createBaseVNode("div", _hoisted_37$1, toDisplayString(hasCustomApi.value ? customApiName.value : unref(t)("settings.playback.mobile.customNeedImport")), 1)]), createBaseVNode("div", _hoisted_38$1, [createBaseVNode("button", {
                  class: "px-3 py-1 bg-[#F2F2F7] dark:bg-[#3A3A3C] text-[#007AFF] dark:text-[#0A84FF] rounded-full text-sm font-medium active:opacity-60",
                  onClick: _cache[3] || (_cache[3] = $event => showImportModal("custom"))
                }, toDisplayString(hasCustomApi.value ? unref(t)("common.update") : unref(t)("common.import")), 1), hasCustomApi.value ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "p-2 text-[#FF3B30] active:opacity-60",
                  onClick: _cache[4] || (_cache[4] = withModifiers($event => clearScript("custom"), ["stop"]))
                }, [...(_cache[13] || (_cache[13] = [createBaseVNode("i", {
                  class: "ri-delete-bin-6-line text-lg"
                }, null, -1)]))])) : createCommentVNode("", true)])])])])])])) : createCommentVNode("", true)]),
                _: 1
              }), createVNode(Transition, {
                name: "fade"
              }, {
                default: withCtx(() => [importModalVisible.value ? (openBlock(), createElementBlock("div", _hoisted_39$1, [createBaseVNode("div", _hoisted_40$1, [createBaseVNode("div", _hoisted_41$1, [createBaseVNode("h3", _hoisted_42$1, toDisplayString(importModalTitle.value), 1)]), createBaseVNode("div", _hoisted_43$1, [createBaseVNode("div", _hoisted_44$1, [(openBlock(), createElementBlock(Fragment, null, renderList(["url", "file", "text"], tab => {
                  return createBaseVNode("button", {
                    key: tab,
                    class: normalizeClass(["flex-1 py-1.5 text-[13px] font-medium rounded-md transition-all", importTab.value === tab ? "bg-white dark:bg-[#636366] text-black dark:text-white shadow-sm" : "text-[#8E8E93]"]),
                    onClick: $event => importTab.value = tab
                  }, toDisplayString(unref(t)(`settings.playback.import.from${tab.charAt(0).toUpperCase() + tab.slice(1)}`)), 11, _hoisted_45$1);
                }), 64))])]), createBaseVNode("div", _hoisted_46, [importTab.value === "url" ? (openBlock(), createElementBlock("div", _hoisted_47, [withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => importUrl.value = $event),
                  type: "text",
                  placeholder: unref(t)("settings.playback.import.urlPlaceholder"),
                  class: "w-full px-4 py-3 bg-[#F2F2F7] dark:bg-[#2C2C2E] rounded-xl text-black dark:text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                }, null, 8, _hoisted_48), [[vModelText, importUrl.value]]), createBaseVNode("button", {
                  class: "w-full py-3.5 bg-primary text-white rounded-xl font-bold active:opacity-80 disabled:opacity-50 transition-all",
                  disabled: importing.value,
                  onClick: importFromUrl
                }, [importing.value ? (openBlock(), createElementBlock("i", _hoisted_50)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(t)("common.import")), 1)], 8, _hoisted_49)])) : createCommentVNode("", true), importTab.value === "file" ? (openBlock(), createElementBlock("div", _hoisted_51, [createBaseVNode("label", _hoisted_52, [createBaseVNode("input", {
                  type: "file",
                  class: "hidden",
                  accept: ".js,.json",
                  onChange: handleFileChange
                }, null, 32), _cache[15] || (_cache[15] = createBaseVNode("i", {
                  class: "ri-file-upload-line text-4xl text-primary mb-2 block"
                }, null, -1)), createBaseVNode("span", _hoisted_53, toDisplayString(unref(t)("settings.playback.import.selectFile")), 1)])])) : createCommentVNode("", true), importTab.value === "text" ? (openBlock(), createElementBlock("div", _hoisted_54, [withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => importText.value = $event),
                  placeholder: unref(t)("settings.playback.import.textPlaceholder"),
                  rows: "6",
                  class: "w-full px-4 py-3 bg-[#F2F2F7] dark:bg-[#2C2C2E] rounded-xl text-black dark:text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                }, null, 8, _hoisted_55), [[vModelText, importText.value]]), createBaseVNode("button", {
                  class: "w-full py-3.5 bg-primary text-white rounded-xl font-bold active:opacity-80 transition-all",
                  onClick: importFromText
                }, toDisplayString(unref(t)("common.import")), 1)])) : createCommentVNode("", true), createBaseVNode("button", {
                  class: "w-full mt-3 py-3 text-[#8E8E93] font-medium active:opacity-60",
                  onClick: _cache[7] || (_cache[7] = $event => importModalVisible.value = false)
                }, toDisplayString(unref(t)("common.cancel")), 1)])])])) : createCommentVNode("", true)]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MobileMusicSourceSettings = /* @__PURE__ */_export_sfc(_sfc_main$6, [["__scopeId", "data-v-9e3e49d4"]]);
        const _hoisted_1$5 = {
          class: "flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-white/5 shrink-0"
        };
        const _hoisted_2$4 = {
          class: "text-[15px] font-semibold text-gray-900 dark:text-white truncate"
        };
        const _hoisted_3$4 = {
          class: "flex-1 overflow-y-auto overscroll-contain px-4 py-3"
        };
        const _hoisted_4$4 = {
          key: 0,
          class: "px-4 py-3 border-t border-gray-100 dark:border-white/5 shrink-0 bg-gray-50/50 dark:bg-white/5 backdrop-blur-xl"
        };
        const _sfc_main$5 = /* @__PURE__ */defineComponent({
          __name: "ResponsiveModal",
          props: {
            modelValue: {
              type: Boolean
            },
            title: {}
          },
          emits: ["update:modelValue", "close"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const show = computed({
              get: () => props.modelValue,
              set: val => emit("update:modelValue", val)
            });
            const isMobile = ref(false);
            const checkMobile = () => {
              isMobile.value = window.innerWidth < 768;
            };
            const close = () => {
              show.value = false;
              emit("close");
            };
            const handleMaskClick = () => {
              close();
            };
            onMounted(() => {
              checkMobile();
              window.addEventListener("resize", checkMobile);
            });
            onUnmounted(() => {
              window.removeEventListener("resize", checkMobile);
            });
            watch(show, val => {
              if (val) {
                document.body.style.overflow = "hidden";
              } else {
                document.body.style.overflow = "";
              }
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Teleport, {
                to: "body"
              }, [createVNode(Transition, {
                name: "fade"
              }, {
                default: withCtx(() => [show.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "fixed inset-0 z-[1000] flex items-center justify-center md:items-center items-end",
                  onClick: handleMaskClick
                }, [_cache[2] || (_cache[2] = createBaseVNode("div", {
                  class: "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                }, null, -1)), createVNode(Transition, {
                  name: isMobile.value ? "slide-up" : "scale-fade"
                }, {
                  default: withCtx(() => [show.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["relative z-10 w-full bg-white dark:bg-[#1c1c1e] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]", [isMobile.value ? "rounded-t-[20px] pb-safe" : "md:max-w-[720px] md:rounded-2xl"]]),
                    onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
                  }, [createBaseVNode("div", _hoisted_1$5, [createBaseVNode("h3", _hoisted_2$4, toDisplayString(__props.title), 1), createBaseVNode("button", {
                    class: "p-1 -mr-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors",
                    onClick: close
                  }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                    class: "ri-close-line text-lg"
                  }, null, -1)]))])]), createBaseVNode("div", _hoisted_3$4, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_4$4, [renderSlot(_ctx.$slots, "footer", {}, void 0, true)])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
                  _: 3
                }, 8, ["name"])])) : createCommentVNode("", true)]),
                _: 3
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const ResponsiveModal = /* @__PURE__ */_export_sfc(_sfc_main$5, [["__scopeId", "data-v-019ad570"]]);
        const _hoisted_1$4 = {
          class: "flex flex-col h-full"
        };
        const _hoisted_2$3 = {
          class: "flex p-0.5 mb-3 bg-gray-100 dark:bg-white/5 rounded-lg shrink-0"
        };
        const _hoisted_3$3 = ["onClick"];
        const _hoisted_4$3 = {
          class: "h-[60vh] md:h-[400px] relative shrink-0"
        };
        const _hoisted_5$3 = {
          key: 0,
          class: "space-y-3 pb-2"
        };
        const _hoisted_6$2 = {
          class: "text-xs text-gray-500 dark:text-gray-400 px-1"
        };
        const _hoisted_7$2 = {
          class: "grid grid-cols-2 md:grid-cols-3 gap-2"
        };
        const _hoisted_8$2 = ["onClick"];
        const _hoisted_9$1 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_10$1 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_11$1 = {
          class: "font-semibold text-gray-900 dark:text-white text-sm truncate"
        };
        const _hoisted_12$1 = {
          key: 0,
          class: "ri-check-line text-white text-xs scale-75"
        };
        const _hoisted_13$1 = {
          key: 0,
          class: "text-[10px] text-gray-500 mt-0.5 truncate"
        };
        const _hoisted_14$1 = {
          key: 1,
          class: "text-[10px] text-gray-500 mt-0.5 truncate"
        };
        const _hoisted_15 = {
          key: 1,
          class: "space-y-3 pb-2"
        };
        const _hoisted_16 = {
          class: "flex justify-between items-center mb-1"
        };
        const _hoisted_17 = {
          class: "text-xs font-medium text-gray-500 dark:text-gray-400"
        };
        const _hoisted_18 = {
          key: 1,
          class: "text-[10px] text-gray-400"
        };
        const _hoisted_19 = {
          key: 0,
          class: "grid grid-cols-1 md:grid-cols-3 gap-2"
        };
        const _hoisted_20 = {
          class: "relative flex items-center justify-center w-4 h-4 mr-3"
        };
        const _hoisted_21 = ["checked", "onChange"];
        const _hoisted_22 = {
          class: "flex-1 min-w-0 mr-2"
        };
        const _hoisted_23 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_24 = {
          key: 0,
          class: "font-medium text-sm text-gray-900 dark:text-white truncate"
        };
        const _hoisted_25 = ["onBlur", "onKeyup"];
        const _hoisted_26 = ["onClick"];
        const _hoisted_27 = {
          class: "flex items-center gap-2 mt-0.5"
        };
        const _hoisted_28 = {
          key: 0,
          class: "text-[10px] text-gray-500 bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded"
        };
        const _hoisted_29 = ["onClick"];
        const _hoisted_30 = {
          key: 1,
          class: "py-6 text-center text-xs text-gray-400 bg-gray-50 dark:bg-white/5 rounded-xl border border-dashed border-gray-200 dark:border-white/10"
        };
        const _hoisted_31 = {
          class: "mt-4 pt-4 border-t border-gray-100 dark:border-white/5"
        };
        const _hoisted_32 = {
          class: "text-xs font-medium mb-2 text-gray-900 dark:text-white"
        };
        const _hoisted_33 = {
          class: "flex gap-2"
        };
        const _hoisted_34 = ["placeholder", "disabled"];
        const _hoisted_35 = ["disabled"];
        const _hoisted_36 = {
          key: 0,
          class: "ri-loader-4-line animate-spin"
        };
        const _hoisted_37 = {
          key: 1,
          class: "ri-download-line"
        };
        const _hoisted_38 = {
          key: 2,
          class: "flex flex-col items-center justify-center py-6 text-center h-full"
        };
        const _hoisted_39 = {
          class: "text-base font-semibold text-gray-900 dark:text-white mb-1"
        };
        const _hoisted_40 = {
          class: "text-gray-500 dark:text-gray-400 text-xs mb-4 max-w-xs mx-auto"
        };
        const _hoisted_41 = ["disabled"];
        const _hoisted_42 = {
          key: 0,
          class: "mt-2 text-xs text-gray-400"
        };
        const _hoisted_43 = {
          key: 1,
          class: "mt-4 flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg text-xs"
        };
        const _hoisted_44 = {
          key: 2,
          class: "mt-4 text-xs text-gray-400"
        };
        const _hoisted_45 = {
          class: "flex justify-end gap-2"
        };
        const _sfc_main$4 = /* @__PURE__ */defineComponent({
          __name: "MusicSourceSettings",
          props: {
            show: {
              type: Boolean,
              default: false
            },
            sources: {
              type: Array,
              default: () => ["migu", "kugou", "kuwo", "pyncmd"]
            }
          },
          emits: ["update:show", "update:sources"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const settingsStore = useSettingsStore();
            const message = useMessage();
            const visible = ref(props.show);
            const selectedSources = ref([...props.sources]);
            const activeTab = ref("sources");
            const {
              allSources
            } = useMusicSources();
            const tabs = computed(() => [{
              key: "sources",
              label: t("settings.playback.lxMusic.tabs.sources")
            }, {
              key: "lxMusic",
              label: t("settings.playback.lxMusic.tabs.lxMusic")
            }, {
              key: "customApi",
              label: t("settings.playback.lxMusic.tabs.customApi")
            }]);
            const lxMusicApis = computed(() => {
              const scripts = settingsStore.setData.lxMusicScripts || [];
              return scripts;
            });
            const activeLxApiId = computed({
              get: () => settingsStore.setData.activeLxMusicApiId || null,
              set: id => {
                settingsStore.setSetData({
                  activeLxMusicApiId: id
                });
              }
            });
            const lxMusicScriptInfo = computed(() => {
              const activeId = activeLxApiId.value;
              if (!activeId) {
                return null;
              }
              const activeApi = lxMusicApis.value.find(api => api.id === activeId);
              return activeApi?.info || null;
            });
            const lxScriptUrl = ref("");
            const isImportingFromUrl = ref(false);
            const editingScriptId = ref(null);
            const editingName = ref("");
            const renameInputRef = ref(null);
            const isSourceSelected = sourceKey => {
              return selectedSources.value.includes(sourceKey);
            };
            const toggleSource = sourceKey => {
              if (sourceKey === "custom" && !isElectron) {
                message.warning(t("settings.playback.customApi.mobileHint"));
                activeTab.value = "customApi";
                return;
              }
              if (sourceKey === "custom" && !settingsStore.setData.customApiPlugin) {
                message.warning(t("settings.playback.customApi.enableHint"));
                activeTab.value = "customApi";
                return;
              }
              if (sourceKey === "lxMusic") {
                if (lxMusicApis.value.length === 0) {
                  message.warning(t("settings.playback.lxMusic.scripts.noScriptWarning"));
                  activeTab.value = "lxMusic";
                  return;
                }
                if (!activeLxApiId.value) {
                  message.warning(t("settings.playback.lxMusic.scripts.noSelectionWarning"));
                  activeTab.value = "lxMusic";
                  return;
                }
              }
              const index = selectedSources.value.indexOf(sourceKey);
              if (index > -1) {
                if (selectedSources.value.length <= 1) {
                  message.warning(t("settings.playback.musicSourcesWarning"));
                  return;
                }
                selectedSources.value.splice(index, 1);
              } else {
                selectedSources.value.push(sourceKey);
              }
            };
            const importPlugin = async () => {
              if (!isElectron) {
                message.warning(t("settings.playback.customApi.mobileHint"));
                return;
              }
              try {
                const result = await window.api.importCustomApiPlugin();
                if (result && result.name && result.content) {
                  settingsStore.setCustomApiPlugin(result);
                  message.success(t("settings.playback.customApi.importSuccess", {
                    name: result.name
                  }));
                  if (!selectedSources.value.includes("custom")) {
                    selectedSources.value.push("custom");
                  }
                }
              } catch (error) {
                message.error(t("settings.playback.customApi.importFailed", {
                  message: error.message
                }));
              }
            };
            const importLxMusicScript = async () => {
              if (!isElectron) {
                message.warning(t("settings.playback.lxMusic.scripts.mobileHint"));
                return;
              }
              try {
                const result = await window.api.importLxMusicScript();
                if (result && result.content) {
                  await addLxMusicScript(result.content);
                }
              } catch (error) {
                console.error("导入落雪音源脚本失败:", error);
                message.error(`${t("common.error")}：${error.message}`);
              }
            };
            const addLxMusicScript = async scriptContent => {
              const scriptInfo = parseScriptInfo(scriptContent);
              try {
                const runner = await initLxMusicRunner(scriptContent);
                const sources = runner.getSources();
                const sourceKeys = Object.keys(sources);
                const id = `lx_api_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
                const newApiConfig = {
                  id,
                  name: scriptInfo.name,
                  script: scriptContent,
                  info: scriptInfo,
                  sources: sourceKeys,
                  enabled: true,
                  createdAt: Date.now()
                };
                const scripts = [...(settingsStore.setData.lxMusicScripts || []), newApiConfig];
                settingsStore.setSetData({
                  lxMusicScripts: scripts,
                  activeLxMusicApiId: id
                  // 自动激活新添加的音源
                });
                message.success(`${t("common.success")}：${scriptInfo.name}`);
                if (!selectedSources.value.includes("lxMusic")) {
                  selectedSources.value.push("lxMusic");
                }
              } catch (initError) {
                console.error("[MusicSourceSettings] 落雪音源脚本初始化失败:", initError);
                message.error(`${t("common.error")}：${initError.message}`);
              }
            };
            const setActiveLxApi = async apiId => {
              const api = lxMusicApis.value.find(a => a.id === apiId);
              if (!api) {
                message.error(t("settings.playback.lxMusic.scripts.notFound"));
                return;
              }
              try {
                setLxMusicRunner(null);
                await initLxMusicRunner(api.script);
                activeLxApiId.value = apiId;
                if (!selectedSources.value.includes("lxMusic")) {
                  selectedSources.value.push("lxMusic");
                }
                message.success(t("settings.playback.lxMusic.scripts.switched", {
                  name: api.name
                }));
              } catch (error) {
                console.error("[MusicSourceSettings] 切换落雪音源失败:", error);
                message.error(`${t("common.error")}：${error.message}`);
              }
            };
            const removeLxApi = apiId => {
              const scripts = [...(settingsStore.setData.lxMusicScripts || [])];
              const index = scripts.findIndex(s => s.id === apiId);
              if (index === -1) return;
              const removedScript = scripts[index];
              scripts.splice(index, 1);
              settingsStore.setSetData({
                lxMusicScripts: scripts
              });
              if (activeLxApiId.value === apiId) {
                if (scripts.length > 0) {
                  setActiveLxApi(scripts[0].id);
                } else {
                  setLxMusicRunner(null);
                  settingsStore.setSetData({
                    activeLxMusicApiId: null
                  });
                  const srcIndex = selectedSources.value.indexOf("lxMusic");
                  if (srcIndex > -1) {
                    selectedSources.value.splice(srcIndex, 1);
                  }
                }
              }
              message.success(t("settings.playback.lxMusic.scripts.deleted", {
                name: removedScript.name
              }));
            };
            const importLxMusicScriptFromUrl = async () => {
              const url = lxScriptUrl.value.trim();
              if (!url) {
                message.warning(t("settings.playback.lxMusic.scripts.enterUrl"));
                return;
              }
              try {
                new URL(url);
              } catch {
                message.error(t("settings.playback.lxMusic.scripts.invalidUrl"));
                return;
              }
              isImportingFromUrl.value = true;
              try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                const content = await response.text();
                const hasHeaderComment = /^\/\*+[\s\S]*?@name[\s\S]*?\*\//.test(content);
                const hasLxApi = content.includes("lx.on(") || content.includes("lx.send(");
                if (!hasHeaderComment && !hasLxApi) {
                  throw new Error(t("settings.playback.lxMusic.scripts.invalidScript"));
                }
                await addLxMusicScript(content);
                lxScriptUrl.value = "";
              } catch (error) {
                console.error("从 URL 导入落雪音源脚本失败:", error);
                message.error(`${t("settings.playback.lxMusic.scripts.importOnline")} ${t("common.error")}：${error.message}`);
              } finally {
                isImportingFromUrl.value = false;
              }
            };
            const startRenaming = api => {
              editingScriptId.value = api.id;
              editingName.value = api.name;
              nextTick(() => {
                renameInputRef.value?.focus();
              });
            };
            const saveScriptName = apiId => {
              if (!editingName.value.trim()) {
                message.warning(t("settings.playback.lxMusic.scripts.nameRequired"));
                return;
              }
              const scripts = [...(settingsStore.setData.lxMusicScripts || [])];
              const index = scripts.findIndex(s => s.id === apiId);
              if (index > -1) {
                scripts[index] = {
                  ...scripts[index],
                  name: editingName.value.trim()
                };
                settingsStore.setSetData({
                  lxMusicScripts: scripts
                });
                message.success(t("settings.playback.lxMusic.scripts.renameSuccess"));
              }
              editingScriptId.value = null;
              editingName.value = "";
            };
            const handleConfirm = () => {
              const defaultPlatforms = ["migu", "kugou", "kuwo", "pyncmd"];
              const valuesToEmit = selectedSources.value.length > 0 ? [...new Set(selectedSources.value)] : defaultPlatforms;
              emit("update:sources", valuesToEmit);
              visible.value = false;
            };
            const handleCancel = () => {
              selectedSources.value = [...props.sources];
              visible.value = false;
            };
            watch(() => settingsStore.setData.customApiPlugin, newPluginContent => {
              if (!newPluginContent) {
                const index = selectedSources.value.indexOf("custom");
                if (index > -1) {
                  selectedSources.value.splice(index, 1);
                }
              }
            });
            watch([() => lxMusicApis.value.length, () => activeLxApiId.value], ([apiCount, activeId]) => {
              if (apiCount === 0 || !activeId) {
                const index = selectedSources.value.indexOf("lxMusic");
                if (index > -1) {
                  selectedSources.value.splice(index, 1);
                }
              }
            }, {
              deep: true
            });
            watch(() => props.show, newVal => {
              visible.value = newVal;
            });
            watch(() => visible.value, newVal => {
              emit("update:show", newVal);
            });
            watch(() => props.sources, newVal => {
              selectedSources.value = [...newVal];
            }, {
              deep: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(ResponsiveModal, {
                modelValue: visible.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => visible.value = $event),
                title: unref(t)("settings.playback.musicSources"),
                onClose: handleCancel
              }, {
                footer: withCtx(() => [createBaseVNode("div", _hoisted_45, [createBaseVNode("button", {
                  class: "px-4 py-2 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors",
                  onClick: handleCancel
                }, toDisplayString(unref(t)("common.cancel")), 1), createBaseVNode("button", {
                  class: "px-4 py-2 text-xs font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg shadow-lg shadow-emerald-500/20 transition-all active:scale-95",
                  onClick: handleConfirm
                }, toDisplayString(unref(t)("common.confirm")), 1)])]),
                default: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [createBaseVNode("div", _hoisted_2$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, tab => {
                  return openBlock(), createElementBlock("button", {
                    key: tab.key,
                    class: normalizeClass(["flex-1 py-1 text-xs font-medium rounded-md transition-all duration-200", [activeTab.value === tab.key ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"]]),
                    onClick: $event => activeTab.value = tab.key
                  }, toDisplayString(tab.label), 11, _hoisted_3$3);
                }), 128))]), createBaseVNode("div", _hoisted_4$3, [createVNode(Transition, {
                  name: "fade",
                  mode: "out-in"
                }, {
                  default: withCtx(() => [(openBlock(), createElementBlock("div", {
                    key: activeTab.value,
                    class: "h-full overflow-y-auto overscroll-contain"
                  }, [activeTab.value === "sources" ? (openBlock(), createElementBlock("div", _hoisted_5$3, [createBaseVNode("p", _hoisted_6$2, toDisplayString(unref(t)("settings.playback.musicSourcesDesc")), 1), createBaseVNode("div", _hoisted_7$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(allSources), source => {
                    return openBlock(), createElementBlock("div", {
                      key: source.key,
                      class: normalizeClass(["group relative flex items-center p-2.5 rounded-xl border transition-all duration-200 cursor-pointer", [isSourceSelected(source.key) ? "bg-emerald-50/50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20" : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/10", {
                        "opacity-60 cursor-not-allowed": !source.available
                      }]]),
                      onClick: $event => toggleSource(source.key)
                    }, [createBaseVNode("div", {
                      class: normalizeClass(["flex items-center justify-center w-8 h-8 rounded-full mr-2.5 transition-colors shrink-0", {
                        "bg-gray-100 dark:bg-white/10": !isSourceSelected(source.key)
                      }]),
                      style: normalizeStyle({
                        backgroundColor: isSourceSelected(source.key) ? source.color : "transparent",
                        color: isSourceSelected(source.key) ? "#fff" : source.color
                      })
                    }, [createBaseVNode("i", {
                      class: normalizeClass([source.icon, "text-base"])
                    }, null, 2)], 6), createBaseVNode("div", _hoisted_9$1, [createBaseVNode("div", _hoisted_10$1, [createBaseVNode("span", _hoisted_11$1, toDisplayString(source.key), 1), createBaseVNode("div", {
                      class: normalizeClass(["w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ml-1", [isSourceSelected(source.key) ? "bg-emerald-500 border-emerald-500" : "border-gray-300 dark:border-gray-600"]])
                    }, [isSourceSelected(source.key) ? (openBlock(), createElementBlock("i", _hoisted_12$1)) : createCommentVNode("", true)], 2)]), source.key === "lxMusic" ? (openBlock(), createElementBlock("p", _hoisted_13$1, toDisplayString(activeLxApiId.value && lxMusicScriptInfo.value ? lxMusicScriptInfo.value.name : unref(t)("settings.playback.lxMusic.scripts.notConfigured")), 1)) : source.key === "custom" ? (openBlock(), createElementBlock("p", _hoisted_14$1, toDisplayString(unref(settingsStore).setData.customApiPlugin ? unref(t)("settings.playback.customApi.status.imported") : unref(t)("settings.playback.customApi.status.notImported")), 1)) : createCommentVNode("", true)])], 10, _hoisted_8$2);
                  }), 128))])])) : activeTab.value === "lxMusic" ? (openBlock(), createElementBlock("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [createBaseVNode("h3", _hoisted_17, toDisplayString(unref(t)("settings.playback.lxMusic.scripts.title")), 1), unref(isElectron) ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: importLxMusicScript,
                    class: "flex items-center gap-1 px-2.5 py-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium rounded-lg transition-colors"
                  }, [_cache[3] || (_cache[3] = createBaseVNode("i", {
                    class: "ri-upload-line"
                  }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("settings.playback.lxMusic.scripts.importLocal")), 1)])) : (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(unref(t)("settings.playback.lxMusic.scripts.mobileHint")), 1))]), lxMusicApis.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [(openBlock(true), createElementBlock(Fragment, null, renderList(lxMusicApis.value, api => {
                    return openBlock(), createElementBlock("div", {
                      key: api.id,
                      class: normalizeClass(["flex items-center p-2.5 rounded-xl border transition-all duration-200", [activeLxApiId.value === api.id ? "bg-emerald-50/50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20" : "bg-white dark:bg-white/5 border-gray-100 dark:border-white/5"]])
                    }, [createBaseVNode("div", _hoisted_20, [createBaseVNode("input", {
                      type: "radio",
                      checked: activeLxApiId.value === api.id,
                      class: "peer appearance-none w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 checked:border-emerald-500 checked:bg-emerald-500 transition-colors cursor-pointer",
                      onChange: $event => setActiveLxApi(api.id)
                    }, null, 40, _hoisted_21), _cache[4] || (_cache[4] = createBaseVNode("i", {
                      class: "ri-check-line absolute text-white text-[10px] pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                    }, null, -1))]), createBaseVNode("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [editingScriptId.value !== api.id ? (openBlock(), createElementBlock("span", _hoisted_24, toDisplayString(api.name), 1)) : withDirectives((openBlock(), createElementBlock("input", {
                      key: 1,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => editingName.value = $event),
                      ref_for: true,
                      ref_key: "renameInputRef",
                      ref: renameInputRef,
                      class: "w-full px-2 py-0.5 text-sm bg-white dark:bg-black/20 border border-emerald-500 rounded focus:outline-none",
                      onBlur: $event => saveScriptName(api.id),
                      onKeyup: withKeys($event => saveScriptName(api.id), ["enter"])
                    }, null, 40, _hoisted_25)), [[vModelText, editingName.value]]), editingScriptId.value !== api.id ? (openBlock(), createElementBlock("button", {
                      key: 2,
                      class: "text-gray-400 hover:text-emerald-500 transition-colors",
                      onClick: $event => startRenaming(api)
                    }, [...(_cache[5] || (_cache[5] = [createBaseVNode("i", {
                      class: "ri-edit-line text-sm"
                    }, null, -1)]))], 8, _hoisted_26)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_27, [api.info.version ? (openBlock(), createElementBlock("span", _hoisted_28, " v" + toDisplayString(api.info.version), 1)) : createCommentVNode("", true)])]), createBaseVNode("button", {
                      class: "p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors",
                      onClick: $event => removeLxApi(api.id)
                    }, [...(_cache[6] || (_cache[6] = [createBaseVNode("i", {
                      class: "ri-delete-bin-line text-sm"
                    }, null, -1)]))], 8, _hoisted_29)], 2);
                  }), 128))])) : (openBlock(), createElementBlock("div", _hoisted_30, [createBaseVNode("p", null, toDisplayString(unref(t)("settings.playback.lxMusic.scripts.empty")), 1)])), createBaseVNode("div", _hoisted_31, [createBaseVNode("h4", _hoisted_32, toDisplayString(unref(t)("settings.playback.lxMusic.scripts.importOnline")), 1), createBaseVNode("div", _hoisted_33, [withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => lxScriptUrl.value = $event),
                    placeholder: unref(t)("settings.playback.lxMusic.scripts.urlPlaceholder"),
                    class: "flex-1 px-3 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-xs focus:outline-none focus:border-emerald-500 transition-colors",
                    disabled: isImportingFromUrl.value
                  }, null, 8, _hoisted_34), [[vModelText, lxScriptUrl.value]]), createBaseVNode("button", {
                    onClick: importLxMusicScriptFromUrl,
                    class: "px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-medium rounded-xl transition-colors flex items-center gap-1",
                    disabled: !lxScriptUrl.value.trim() || isImportingFromUrl.value
                  }, [isImportingFromUrl.value ? (openBlock(), createElementBlock("i", _hoisted_36)) : (openBlock(), createElementBlock("i", _hoisted_37)), createTextVNode(" " + toDisplayString(unref(t)("settings.playback.lxMusic.scripts.importBtn")), 1)], 8, _hoisted_35)])])])) : activeTab.value === "customApi" ? (openBlock(), createElementBlock("div", _hoisted_38, [_cache[9] || (_cache[9] = createBaseVNode("div", {
                    class: "w-12 h-12 bg-violet-100 dark:bg-violet-500/20 text-violet-500 rounded-xl flex items-center justify-center mb-3"
                  }, [createBaseVNode("i", {
                    class: "ri-plug-fill text-2xl"
                  })], -1)), createBaseVNode("h3", _hoisted_39, toDisplayString(unref(t)("settings.playback.customApi.sectionTitle")), 1), createBaseVNode("p", _hoisted_40, toDisplayString(unref(t)("settings.playback.lxMusic.scripts.importHint")), 1), createBaseVNode("button", {
                    disabled: !unref(isElectron),
                    onClick: importPlugin,
                    class: "px-5 py-2 bg-violet-500 hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-violet-500/20"
                  }, [_cache[7] || (_cache[7] = createBaseVNode("i", {
                    class: "ri-upload-line"
                  }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("settings.playback.customApi.importConfig")), 1)], 8, _hoisted_41), !unref(isElectron) ? (openBlock(), createElementBlock("p", _hoisted_42, toDisplayString(unref(t)("settings.playback.customApi.mobileHint")), 1)) : createCommentVNode("", true), unref(settingsStore).setData.customApiPluginName ? (openBlock(), createElementBlock("div", _hoisted_43, [_cache[8] || (_cache[8] = createBaseVNode("i", {
                    class: "ri-check-circle-fill"
                  }, null, -1)), createBaseVNode("span", null, [createTextVNode(toDisplayString(unref(t)("settings.playback.customApi.currentSource")) + ": ", 1), createBaseVNode("b", null, toDisplayString(unref(settingsStore).setData.customApiPluginName), 1)])])) : (openBlock(), createElementBlock("div", _hoisted_44, toDisplayString(unref(t)("settings.playback.customApi.notImported")), 1))])) : createCommentVNode("", true)]))]),
                  _: 1
                })])])]),
                _: 1
              }, 8, ["modelValue", "title"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MusicSourceSettings = /* @__PURE__ */_export_sfc(_sfc_main$4, [["__scopeId", "data-v-5f2fe7a4"]]);
        const _hoisted_1$3 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_2$2 = {
          key: 0,
          class: "mt-2 text-sm"
        };
        const _hoisted_3$2 = {
          class: "text-gray-500"
        };
        const _hoisted_4$2 = {
          key: 0,
          class: "text-gray-400"
        };
        const _hoisted_5$2 = {
          key: 1,
          class: "text-red-500 text-xs"
        };
        const _hoisted_6$1 = {
          class: "mt-6 p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800"
        };
        const _hoisted_7$1 = {
          class: "flex gap-3 flex-wrap"
        };
        const _hoisted_8$1 = ["href"];
        const _sfc_main$3 = /* @__PURE__ */defineComponent({
          __name: "PlaybackTab",
          setup(__props) {
            const ALL_PLATFORMS = ["migu", "kugou", "kuwo", "pyncmd"];
            const memberLinks = [{
              name: "网易云音乐会员",
              url: "https://music.163.com/store/vip"
            }, {
              name: "QQ音乐会员",
              url: "https://y.qq.com/portal/vipportal/"
            }, {
              name: "酷狗音乐会员",
              url: "https://vip.kugou.com/"
            }];
            const {
              t
            } = useI18n();
            const setData = inject(SETTINGS_DATA_KEY);
            const platform = window.electron ? window.electron.ipcRenderer.sendSync("get-platform") : "web";
            const isMobileDevice = isMobile;
            const showMusicSourcesModal = ref(false);
            const showMobileMusicSourcesModal = ref(false);
            const qualityOptions = computed(() => [{
              label: t("settings.playback.qualityOptions.standard"),
              value: "standard"
            }, {
              label: t("settings.playback.qualityOptions.higher"),
              value: "higher"
            }, {
              label: t("settings.playback.qualityOptions.exhigh"),
              value: "exhigh"
            }, {
              label: t("settings.playback.qualityOptions.lossless"),
              value: "lossless"
            }, {
              label: t("settings.playback.qualityOptions.hires"),
              value: "hires"
            }, {
              label: t("settings.playback.qualityOptions.jyeffect"),
              value: "jyeffect"
            }, {
              label: t("settings.playback.qualityOptions.sky"),
              value: "sky"
            }, {
              label: t("settings.playback.qualityOptions.dolby"),
              value: "dolby"
            }, {
              label: t("settings.playback.qualityOptions.jymaster"),
              value: "jymaster"
            }]);
            const musicSources = computed({
              get: () => {
                if (!setData.value.enabledMusicSources) return ALL_PLATFORMS;
                return setData.value.enabledMusicSources;
              },
              set: newValue => {
                const valuesToSet = newValue.length > 0 ? [...new Set(newValue)] : ALL_PLATFORMS;
                setData.value = {
                  ...setData.value,
                  enabledMusicSources: valuesToSet
                };
              }
            });
            return (_ctx, _cache) => {
              const _component_n_switch = __unplugin_components_1$5;
              return openBlock(), createElementBlock("div", null, [createVNode(_sfc_main$l, {
                title: unref(t)("settings.sections.playback")
              }, {
                default: withCtx(() => [createVNode(_sfc_main$m, {
                  title: unref(t)("settings.playback.quality"),
                  description: unref(t)("settings.playback.qualityDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$h, {
                    modelValue: unref(setData).musicQuality,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(setData).musicQuality = $event),
                    options: qualityOptions.value,
                    width: "w-40 max-md:w-full"
                  }, null, 8, ["modelValue", "options"])]),
                  _: 1
                }, 8, ["title", "description"]), unref(isElectron) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 0,
                  title: unref(t)("settings.playback.musicSources")
                }, {
                  description: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(_component_n_switch, {
                    value: unref(setData).enableMusicUnblock,
                    "onUpdate:value": _cache[1] || (_cache[1] = $event => unref(setData).enableMusicUnblock = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"]), createBaseVNode("span", null, toDisplayString(unref(t)("settings.playback.musicUnblockEnableDesc")), 1)]), unref(setData).enableMusicUnblock ? (openBlock(), createElementBlock("div", _hoisted_2$2, [createBaseVNode("span", _hoisted_3$2, toDisplayString(unref(t)("settings.playback.selectedMusicSources")), 1), musicSources.value.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_4$2, toDisplayString(musicSources.value.join(", ")), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$2, toDisplayString(unref(t)("settings.playback.noMusicSources")), 1))])) : createCommentVNode("", true)]),
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    disabled: !unref(setData).enableMusicUnblock,
                    onClick: _cache[2] || (_cache[2] = $event => showMusicSourcesModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.playback.configureMusicSources")), 1)]),
                    _: 1
                  }, 8, ["disabled"])]),
                  _: 1
                }, 8, ["title"])) : createCommentVNode("", true), !unref(isElectron) && unref(isMobileDevice) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 1,
                  title: unref(t)("settings.playback.musicSources")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: _cache[3] || (_cache[3] = $event => showMobileMusicSourcesModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.playback.configureMusicSources")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title"])) : createCommentVNode("", true), unref(platform) === "darwin" ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 2,
                  title: unref(t)("settings.playback.showStatusBar"),
                  description: unref(t)("settings.playback.showStatusBarContent")
                }, {
                  default: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).showTopAction,
                    "onUpdate:value": _cache[4] || (_cache[4] = $event => unref(setData).showTopAction = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"])]),
                  _: 1
                }, 8, ["title", "description"])) : createCommentVNode("", true), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.playback.autoPlay"),
                  description: unref(t)("settings.playback.autoPlayDesc")
                }, {
                  default: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).autoPlay,
                    "onUpdate:value": _cache[5] || (_cache[5] = $event => unref(setData).autoPlay = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"])]),
                  _: 1
                }, 8, ["title", "description"]), unref(isElectron) ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 3,
                  title: unref(t)("settings.playback.audioDevice"),
                  description: unref(t)("settings.playback.audioDeviceDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$7)]),
                  _: 1
                }, 8, ["title", "description"])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["title"]), createBaseVNode("div", _hoisted_6$1, [_cache[10] || (_cache[10] = createBaseVNode("div", {
                class: "text-sm font-medium text-gray-500 mb-3"
              }, "支持正版", -1)), _cache[11] || (_cache[11] = createBaseVNode("div", {
                class: "text-base text-gray-900 dark:text-white mb-4"
              }, " 大家还是需要支持正版，本软件只做开源探讨。各大音乐会员购买链接： ", -1)), createBaseVNode("div", _hoisted_7$1, [(openBlock(), createElementBlock(Fragment, null, renderList(memberLinks, link => {
                return createBaseVNode("a", {
                  key: link.url,
                  class: "px-4 py-2 rounded-xl bg-gray-50 dark:bg-black/20 text-primary hover:text-green-500 transition-colors",
                  href: link.url,
                  target: "_blank"
                }, [createTextVNode(toDisplayString(link.name) + " ", 1), _cache[9] || (_cache[9] = createBaseVNode("i", {
                  class: "ri-external-link-line ml-1"
                }, null, -1))], 8, _hoisted_8$1);
              }), 64))])]), unref(isElectron) ? (openBlock(), createBlock(MusicSourceSettings, {
                key: 0,
                show: showMusicSourcesModal.value,
                "onUpdate:show": _cache[6] || (_cache[6] = $event => showMusicSourcesModal.value = $event),
                sources: musicSources.value,
                "onUpdate:sources": _cache[7] || (_cache[7] = $event => musicSources.value = $event)
              }, null, 8, ["show", "sources"])) : createCommentVNode("", true), !unref(isElectron) && unref(isMobileDevice) ? (openBlock(), createBlock(MobileMusicSourceSettings, {
                key: 1,
                show: showMobileMusicSourcesModal.value,
                "onUpdate:show": _cache[8] || (_cache[8] = $event => showMobileMusicSourcesModal.value = $event)
              }, null, 8, ["show"])) : createCommentVNode("", true)]);
            };
          }
        });
        const _hoisted_1$2 = {
          class: "text-gray-400 text-sm"
        };
        const _sfc_main$2 = /* @__PURE__ */defineComponent({
          __name: "ClearCacheSettings",
          props: {
            show: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:show", "confirm"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const visible = ref(props.show);
            const selectedTypes = ref([]);
            const clearCacheOptions = ref([{
              label: t("settings.system.cacheTypes.history.label"),
              key: "history",
              description: t("settings.system.cacheTypes.history.description")
            }, {
              label: t("settings.system.cacheTypes.favorite.label"),
              key: "favorite",
              description: t("settings.system.cacheTypes.favorite.description")
            }, {
              label: t("settings.system.cacheTypes.user.label"),
              key: "user",
              description: t("settings.system.cacheTypes.user.description")
            }, {
              label: t("settings.system.cacheTypes.settings.label"),
              key: "settings",
              description: t("settings.system.cacheTypes.settings.description")
            }, {
              label: t("settings.system.cacheTypes.downloads.label"),
              key: "downloads",
              description: t("settings.system.cacheTypes.downloads.description")
            }, {
              label: t("settings.system.cacheTypes.resources.label"),
              key: "resources",
              description: t("settings.system.cacheTypes.resources.description")
            }, {
              label: t("settings.system.cacheTypes.lyrics.label"),
              key: "lyrics",
              description: t("settings.system.cacheTypes.lyrics.description")
            }]);
            watch(() => props.show, newVal => {
              visible.value = newVal;
            });
            watch(() => visible.value, newVal => {
              emit("update:show", newVal);
            });
            const handleConfirm = () => {
              emit("confirm", selectedTypes.value);
              selectedTypes.value = [];
            };
            const handleCancel = () => {
              selectedTypes.value = [];
              visible.value = false;
            };
            return (_ctx, _cache) => {
              const _component_n_checkbox = __unplugin_components_0$3;
              const _component_n_space = __unplugin_components_2$2;
              const _component_n_checkbox_group = __unplugin_components_2$3;
              const _component_n_modal = __unplugin_components_2$1;
              return openBlock(), createBlock(_component_n_modal, {
                show: visible.value,
                "onUpdate:show": _cache[1] || (_cache[1] = $event => visible.value = $event),
                preset: "dialog",
                title: unref(t)("settings.system.cache"),
                "positive-text": unref(t)("common.confirm"),
                "negative-text": unref(t)("common.cancel"),
                onPositiveClick: handleConfirm,
                onNegativeClick: handleCancel
              }, {
                default: withCtx(() => [createVNode(_component_n_space, {
                  vertical: ""
                }, {
                  default: withCtx(() => [createBaseVNode("p", null, toDisplayString(unref(t)("settings.system.cacheClearTitle")), 1), createVNode(_component_n_checkbox_group, {
                    value: selectedTypes.value,
                    "onUpdate:value": _cache[0] || (_cache[0] = $event => selectedTypes.value = $event)
                  }, {
                    default: withCtx(() => [createVNode(_component_n_space, {
                      vertical: ""
                    }, {
                      default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(clearCacheOptions.value, option => {
                        return openBlock(), createBlock(_component_n_checkbox, {
                          key: option.key,
                          value: option.key,
                          label: option.label
                        }, {
                          default: withCtx(() => [createBaseVNode("div", null, [createBaseVNode("div", null, toDisplayString(unref(t)(`settings.system.cacheTypes.${option.key}.label`)), 1), createBaseVNode("div", _hoisted_1$2, toDisplayString(unref(t)(`settings.system.cacheTypes.${option.key}.description`)), 1)])]),
                          _: 2
                        }, 1032, ["value", "label"]);
                      }), 128))]),
                      _: 1
                    })]),
                    _: 1
                  }, 8, ["value"])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["show", "title", "positive-text", "negative-text"]);
            };
          }
        });
        const _hoisted_1$1 = {
          class: "flex items-center gap-2 max-md:flex-wrap"
        };
        const _hoisted_2$1 = {
          class: "flex items-center gap-3 max-md:flex-wrap"
        };
        const _hoisted_3$1 = {
          class: "w-40 max-md:w-32"
        };
        const _hoisted_4$1 = {
          class: "text-xs text-neutral-500"
        };
        const _hoisted_5$1 = {
          class: "flex items-center gap-2 max-md:flex-wrap"
        };
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "SystemTab",
          setup(__props) {
            const {
              t
            } = useI18n();
            const userStore = useUserStore();
            const setData = inject(SETTINGS_DATA_KEY);
            const message = inject(SETTINGS_MESSAGE_KEY);
            const dialog = inject(SETTINGS_DIALOG_KEY);
            const showClearCacheModal = ref(false);
            const diskCacheStats = ref({
              enabled: true,
              directory: "",
              maxSizeMB: 4096,
              cleanupPolicy: "lru",
              totalSizeBytes: 0,
              musicSizeBytes: 0,
              lyricSizeBytes: 0,
              totalFiles: 0,
              musicFiles: 0,
              lyricFiles: 0,
              usage: 0
            });
            const applyingDiskCacheConfig = ref(false);
            const switchingCacheDirectory = ref(false);
            const cleanupPolicyOptions = computed(() => [{
              label: t("settings.system.cleanupPolicyOptions.lru"),
              value: "lru"
            }, {
              label: t("settings.system.cleanupPolicyOptions.fifo"),
              value: "fifo"
            }]);
            const diskCacheUsagePercent = computed(() => Math.min(100, Math.max(0, Math.round((diskCacheStats.value.usage || 0) * 100))));
            const formatBytes = bytes => {
              if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
              const units = ["B", "KB", "MB", "GB", "TB"];
              let value = bytes;
              let unitIndex = 0;
              while (value >= 1024 && unitIndex < units.length - 1) {
                value /= 1024;
                unitIndex++;
              }
              return `${value.toFixed(value >= 10 ? 0 : 1)} ${units[unitIndex]}`;
            };
            const readDiskCacheConfigFromUI = () => {
              const cleanupPolicy = setData.value.diskCacheCleanupPolicy === "fifo" ? "fifo" : "lru";
              const maxSizeMB = Math.max(256, Math.floor(Number(setData.value.diskCacheMaxSizeMB || 4096)));
              return {
                enabled: setData.value.enableDiskCache !== false,
                directory: String(setData.value.diskCacheDir || ""),
                maxSizeMB,
                cleanupPolicy
              };
            };
            const refreshDiskCacheStats = async (silent = true) => {
              if (!window.electron) return;
              try {
                const stats = await window.electron.ipcRenderer.invoke("get-disk-cache-stats");
                if (stats) {
                  diskCacheStats.value = stats;
                }
              } catch (error) {
                console.error("读取磁盘缓存统计失败:", error);
                if (!silent) {
                  message.error(t("settings.system.messages.diskCacheStatsLoadFailed"));
                }
              }
            };
            const loadDiskCacheConfig = async () => {
              if (!window.electron) return;
              try {
                const config = await window.electron.ipcRenderer.invoke("get-disk-cache-config");
                if (config) {
                  setData.value = {
                    ...setData.value,
                    enableDiskCache: config.enabled,
                    diskCacheDir: config.directory,
                    diskCacheMaxSizeMB: config.maxSizeMB,
                    diskCacheCleanupPolicy: config.cleanupPolicy
                  };
                }
              } catch (error) {
                console.error("读取磁盘缓存配置失败:", error);
              }
            };
            const applyDiskCacheConfig = async () => {
              if (!window.electron || applyingDiskCacheConfig.value) return;
              applyingDiskCacheConfig.value = true;
              try {
                const config = readDiskCacheConfigFromUI();
                const updated = await window.electron.ipcRenderer.invoke("set-disk-cache-config", config);
                if (updated) {
                  setData.value = {
                    ...setData.value,
                    enableDiskCache: updated.enabled,
                    diskCacheDir: updated.directory,
                    diskCacheMaxSizeMB: updated.maxSizeMB,
                    diskCacheCleanupPolicy: updated.cleanupPolicy
                  };
                }
                await refreshDiskCacheStats();
              } catch (error) {
                console.error("更新磁盘缓存配置失败:", error);
              } finally {
                applyingDiskCacheConfig.value = false;
              }
            };
            const applyDiskCacheConfigDebounced = useDebounceFn(() => {
              void applyDiskCacheConfig();
            }, 500);
            watch(() => [setData.value.enableDiskCache, setData.value.diskCacheDir, setData.value.diskCacheMaxSizeMB, setData.value.diskCacheCleanupPolicy], () => {
              if (!window.electron || applyingDiskCacheConfig.value || switchingCacheDirectory.value) return;
              applyDiskCacheConfigDebounced();
            });
            const askCacheSwitchMigrate = () => {
              return new Promise(resolve => {
                let resolved = false;
                const finish = value => {
                  if (resolved) return;
                  resolved = true;
                  resolve(value);
                };
                dialog.warning({
                  title: t("settings.system.switchDirectoryMigrateTitle"),
                  content: t("settings.system.switchDirectoryMigrateContent"),
                  positiveText: t("settings.system.switchDirectoryMigrateConfirm"),
                  negativeText: t("settings.system.switchDirectoryKeepOld"),
                  onPositiveClick: () => finish(true),
                  onNegativeClick: () => finish(false),
                  onClose: () => finish(false)
                });
              });
            };
            const askCacheSwitchDestroy = () => {
              return new Promise(resolve => {
                let resolved = false;
                const finish = value => {
                  if (resolved) return;
                  resolved = true;
                  resolve(value);
                };
                dialog.warning({
                  title: t("settings.system.switchDirectoryDestroyTitle"),
                  content: t("settings.system.switchDirectoryDestroyContent"),
                  positiveText: t("settings.system.switchDirectoryDestroyConfirm"),
                  negativeText: t("settings.system.switchDirectoryKeepOld"),
                  onPositiveClick: () => finish(true),
                  onNegativeClick: () => finish(false),
                  onClose: () => finish(false)
                });
              });
            };
            const selectCacheDirectory = async () => {
              if (!window.electron) return;
              const selectedPath = await selectDirectory(message);
              if (!selectedPath) return;
              const currentDirectory = setData.value.diskCacheDir || diskCacheStats.value.directory;
              if (currentDirectory && selectedPath === currentDirectory) {
                return;
              }
              let action = "keep";
              if (currentDirectory && diskCacheStats.value.totalFiles > 0) {
                const shouldMigrate = await askCacheSwitchMigrate();
                if (shouldMigrate) {
                  action = "migrate";
                } else {
                  const shouldDestroy = await askCacheSwitchDestroy();
                  action = shouldDestroy ? "destroy" : "keep";
                }
              }
              switchingCacheDirectory.value = true;
              try {
                const result = await window.electron.ipcRenderer.invoke("switch-disk-cache-directory", {
                  directory: selectedPath,
                  action
                });
                if (!result?.success) {
                  message.error(t("settings.system.messages.switchDirectoryFailed"));
                  return;
                }
                setData.value = {
                  ...setData.value,
                  enableDiskCache: result.config.enabled,
                  diskCacheDir: result.config.directory,
                  diskCacheMaxSizeMB: result.config.maxSizeMB,
                  diskCacheCleanupPolicy: result.config.cleanupPolicy
                };
                await refreshDiskCacheStats();
                if (action === "migrate") {
                  message.success(t("settings.system.messages.switchDirectoryMigrated", {
                    count: result.migratedFiles
                  }));
                  return;
                }
                if (action === "destroy") {
                  message.success(t("settings.system.messages.switchDirectoryDestroyed", {
                    count: result.destroyedFiles
                  }));
                  return;
                }
                message.success(t("settings.system.messages.switchDirectorySuccess"));
              } catch (error) {
                console.error("切换缓存目录失败:", error);
                message.error(t("settings.system.messages.switchDirectoryFailed"));
              } finally {
                switchingCacheDirectory.value = false;
              }
            };
            const openCacheDirectory = () => {
              const targetPath = setData.value.diskCacheDir || diskCacheStats.value.directory;
              openDirectory(targetPath, message);
            };
            const clearDiskCacheByScope = async scope => {
              if (!window.electron) return;
              try {
                const success = await window.electron.ipcRenderer.invoke("clear-disk-cache", scope);
                if (success) {
                  await refreshDiskCacheStats();
                  message.success(t("settings.system.messages.diskCacheClearSuccess"));
                  return;
                }
                message.error(t("settings.system.messages.diskCacheClearFailed"));
              } catch (error) {
                console.error("手动清理磁盘缓存失败:", error);
                message.error(t("settings.system.messages.diskCacheClearFailed"));
              }
            };
            const clearCache = async selectedCacheTypes => {
              const clearTasks = selectedCacheTypes.map(async type => {
                switch (type) {
                  case "history":
                    localStorage.removeItem("musicHistory");
                    break;
                  case "favorite":
                    localStorage.removeItem("favoriteList");
                    break;
                  case "user":
                    userStore.handleLogout();
                    break;
                  case "settings":
                    if (window.electron) {
                      window.electron.ipcRenderer.send("set-store-value", "set", localData);
                    }
                    localStorage.removeItem("appSettings");
                    localStorage.removeItem("theme");
                    localStorage.removeItem("lyricData");
                    localStorage.removeItem("lyricFontSize");
                    localStorage.removeItem("playMode");
                    break;
                  case "downloads":
                    if (window.electron) {
                      window.electron.ipcRenderer.send("clear-downloads-history");
                    }
                    break;
                  case "resources":
                    if (window.electron) {
                      window.electron.ipcRenderer.send("clear-audio-cache");
                      await window.electron.ipcRenderer.invoke("clear-disk-cache", "music");
                    }
                    localStorage.removeItem("lyricCache");
                    localStorage.removeItem("musicUrlCache");
                    if (window.caches) {
                      try {
                        const cache = await window.caches.open("music-images");
                        const keys = await cache.keys();
                        keys.forEach(key => cache.delete(key));
                      } catch (error) {
                        console.error("清除图片缓存失败:", error);
                      }
                    }
                    break;
                  case "lyrics":
                    if (window.electron) {
                      await window.electron.ipcRenderer.invoke("clear-disk-cache", "lyrics");
                    }
                    await window.api.invoke("clear-lyrics-cache");
                    break;
                }
              });
              await Promise.all(clearTasks);
              await refreshDiskCacheStats();
              message.success(t("settings.system.messages.clearSuccess"));
            };
            const restartApp = () => {
              window.electron.ipcRenderer.send("restart");
            };
            onMounted(async () => {
              await loadDiskCacheConfig();
              await refreshDiskCacheStats();
            });
            return (_ctx, _cache) => {
              const _component_n_switch = __unplugin_components_1$5;
              const _component_n_progress = __unplugin_components_1;
              return unref(isElectron) ? (openBlock(), createBlock(_sfc_main$l, {
                key: 0,
                title: unref(t)("settings.sections.system")
              }, {
                default: withCtx(() => [createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.diskCache"),
                  description: unref(t)("settings.system.diskCacheDesc")
                }, {
                  default: withCtx(() => [createVNode(_component_n_switch, {
                    value: unref(setData).enableDiskCache,
                    "onUpdate:value": _cache[0] || (_cache[0] = $event => unref(setData).enableDiskCache = $event)
                  }, {
                    checked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.on")), 1)]),
                    unchecked: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.off")), 1)]),
                    _: 1
                  }, 8, ["value"])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.cacheDirectory"),
                  description: unref(setData).diskCacheDir || diskCacheStats.value.directory || unref(t)("settings.system.cacheDirectoryDesc")
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createVNode(_sfc_main$n, {
                    onClick: selectCacheDirectory
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.selectDirectory")), 1)]),
                    _: 1
                  }), createVNode(_sfc_main$n, {
                    onClick: openCacheDirectory
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.openDirectory")), 1)]),
                    _: 1
                  })])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.cacheMaxSize"),
                  description: unref(t)("settings.system.cacheMaxSizeDesc")
                }, {
                  action: withCtx(() => [createVNode(_sfc_main$d, {
                    modelValue: unref(setData).diskCacheMaxSizeMB,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => unref(setData).diskCacheMaxSizeMB = $event),
                    type: "number",
                    min: 256,
                    max: 102400,
                    step: 256,
                    suffix: "MB",
                    width: "w-[160px] max-md:w-32"
                  }, null, 8, ["modelValue"])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.cleanupPolicy"),
                  description: unref(t)("settings.system.cleanupPolicyDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$h, {
                    modelValue: unref(setData).diskCacheCleanupPolicy,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => unref(setData).diskCacheCleanupPolicy = $event),
                    options: cleanupPolicyOptions.value,
                    width: "w-40"
                  }, null, 8, ["modelValue", "options"])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.cacheStatus"),
                  description: unref(t)("settings.system.cacheStatusDesc", {
                    used: formatBytes(diskCacheStats.value.totalSizeBytes),
                    limit: `${unref(setData).diskCacheMaxSizeMB || diskCacheStats.value.maxSizeMB || 0} MB`
                  })
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createVNode(_component_n_progress, {
                    type: "line",
                    percentage: diskCacheUsagePercent.value
                  }, null, 8, ["percentage"])]), createBaseVNode("span", _hoisted_4$1, toDisplayString(unref(t)("settings.system.cacheStatusDetail", {
                    musicCount: diskCacheStats.value.musicFiles,
                    lyricCount: diskCacheStats.value.lyricFiles
                  })), 1), createVNode(_sfc_main$n, {
                    onClick: _cache[3] || (_cache[3] = $event => refreshDiskCacheStats())
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.refresh")), 1)]),
                    _: 1
                  })])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.manageDiskCache"),
                  description: unref(t)("settings.system.manageDiskCacheDesc")
                }, {
                  action: withCtx(() => [createBaseVNode("div", _hoisted_5$1, [createVNode(_sfc_main$n, {
                    onClick: _cache[4] || (_cache[4] = $event => clearDiskCacheByScope("music"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.clearMusicCache")), 1)]),
                    _: 1
                  }), createVNode(_sfc_main$n, {
                    onClick: _cache[5] || (_cache[5] = $event => clearDiskCacheByScope("lyrics"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.clearLyricCache")), 1)]),
                    _: 1
                  }), createVNode(_sfc_main$n, {
                    variant: "danger",
                    onClick: _cache[6] || (_cache[6] = $event => clearDiskCacheByScope("all"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.clearAllCache")), 1)]),
                    _: 1
                  })])]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.cache"),
                  description: unref(t)("settings.system.cacheDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: _cache[7] || (_cache[7] = $event => showClearCacheModal.value = true)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.cacheDesc")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$m, {
                  title: unref(t)("settings.system.restart"),
                  description: unref(t)("settings.system.restartDesc")
                }, {
                  default: withCtx(() => [createVNode(_sfc_main$n, {
                    onClick: restartApp
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("settings.system.restart")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["title", "description"]), createVNode(_sfc_main$2, {
                  show: showClearCacheModal.value,
                  "onUpdate:show": _cache[8] || (_cache[8] = $event => showClearCacheModal.value = $event),
                  onConfirm: clearCache
                }, null, 8, ["show"])]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true);
            };
          }
        });
        const _hoisted_1 = {
          class: "h-full w-full bg-white dark:bg-black transition-colors duration-500 flex flex-col"
        };
        const _hoisted_2 = {
          class: "flex-shrink-0 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-black z-10 page-padding pt-6 pb-2"
        };
        const _hoisted_3 = {
          class: "text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6"
        };
        const _hoisted_4 = {
          class: "scrollbar-hide overflow-x-auto w-full"
        };
        const _hoisted_5 = {
          class: "flex items-center pl-2 pb-2 whitespace-nowrap"
        };
        const _hoisted_6 = ["onClick"];
        const _hoisted_7 = {
          class: "w-full mx-auto pb-32 pt-6 page-padding"
        };
        const _hoisted_8 = {
          class: "animate-fade-in"
        };
        const _hoisted_9 = {
          class: "animate-fade-in"
        };
        const _hoisted_10 = {
          class: "animate-fade-in"
        };
        const _hoisted_11 = {
          class: "animate-fade-in"
        };
        const _hoisted_12 = {
          class: "animate-fade-in"
        };
        const _hoisted_13 = {
          class: "animate-fade-in"
        };
        const _hoisted_14 = {
          class: "animate-fade-in"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "index",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const message = useMessage();
            const dialog = useDialog();
            const {
              t
            } = useI18n();
            const saveSettings = useDebounceFn(data => {
              settingsStore.setSetData(data);
            }, 500);
            const localSetData = ref({
              ...settingsStore.setData
            });
            const setData = computed({
              get: () => localSetData.value,
              set: newData => {
                localSetData.value = newData;
              }
            });
            watch(() => localSetData.value, newValue => saveSettings(newValue), {
              deep: true
            });
            watch(() => settingsStore.setData, newValue => {
              if (JSON.stringify(localSetData.value) !== JSON.stringify(newValue)) {
                localSetData.value = {
                  ...newValue
                };
              }
            }, {
              deep: true,
              immediate: true
            });
            onUnmounted(() => {
              settingsStore.setSetData(localSetData.value);
            });
            provide(SETTINGS_DATA_KEY, setData);
            provide(SETTINGS_MESSAGE_KEY, message);
            provide(SETTINGS_DIALOG_KEY, dialog);
            const settingSections = [{
              id: "basic"
            }, {
              id: "playback"
            }, {
              id: "application",
              electron: true
            }, {
              id: "network",
              electron: true
            }, {
              id: "system",
              electron: true
            }, {
              id: "about"
            }, {
              id: "donation"
            }];
            const navSections = computed(() => {
              return settingSections.filter(section => !section.electron || isElectron).map(section => ({
                id: section.id,
                title: t(`settings.sections.${section.id}`)
              }));
            });
            const currentSection = ref("basic");
            onMounted(() => {
              if (isElectron && settingsStore.appUpdateState.currentVersion === "") {
                settingsStore.setAppUpdateState(createDefaultAppUpdateState(config.version));
              }
              if (setData.value.proxyConfig) ;
              if (setData.value.enableRealIP === void 0) {
                setData.value = {
                  ...setData.value,
                  enableRealIP: false
                };
              }
              if (setData.value.enableDiskCache === void 0) {
                setData.value = {
                  ...setData.value,
                  enableDiskCache: true
                };
              }
              if (!setData.value.diskCacheMaxSizeMB) {
                setData.value = {
                  ...setData.value,
                  diskCacheMaxSizeMB: 4096
                };
              }
              if (!["lru", "fifo"].includes(setData.value.diskCacheCleanupPolicy)) {
                setData.value = {
                  ...setData.value,
                  diskCacheCleanupPolicy: "lru"
                };
              }
            });
            return (_ctx, _cache) => {
              const _component_n_scrollbar = Scrollbar$1;
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("h1", _hoisted_3, toDisplayString(unref(t)("common.settings")), 1), createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(navSections.value, section => {
                return openBlock(), createElementBlock("div", {
                  key: section.id,
                  class: normalizeClass(["py-1.5 px-4 mr-3 inline-block rounded-full cursor-pointer transition-all duration-300 text-sm font-medium select-none", currentSection.value === section.id ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105" : "bg-gray-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"]),
                  onClick: $event => currentSection.value = section.id
                }, toDisplayString(section.title), 11, _hoisted_6);
              }), 128))])])]), createVNode(_component_n_scrollbar, {
                class: "flex-1"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_7, [withDirectives(createBaseVNode("div", _hoisted_8, [createVNode(_sfc_main$c)], 512), [[vShow, currentSection.value === "basic"]]), withDirectives(createBaseVNode("div", _hoisted_9, [createVNode(_sfc_main$3)], 512), [[vShow, currentSection.value === "playback"]]), withDirectives(createBaseVNode("div", _hoisted_10, [createVNode(_sfc_main$g)], 512), [[vShow, currentSection.value === "application"]]), withDirectives(createBaseVNode("div", _hoisted_11, [createVNode(_sfc_main$8)], 512), [[vShow, currentSection.value === "network"]]), withDirectives(createBaseVNode("div", _hoisted_12, [createVNode(_sfc_main$1)], 512), [[vShow, currentSection.value === "system"]]), withDirectives(createBaseVNode("div", _hoisted_13, [createVNode(_sfc_main$k)], 512), [[vShow, currentSection.value === "about"]]), withDirectives(createBaseVNode("div", _hoisted_14, [createVNode(_sfc_main$a)], 512), [[vShow, currentSection.value === "donation"]]), _cache[0] || (_cache[0] = createBaseVNode("div", {
                  class: "h-20"
                }, null, -1)), createVNode(PlayBottom)])]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-73f3650c"]]));
      }
    };
  });
})();

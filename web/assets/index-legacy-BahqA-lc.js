;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useMessage, onMounted, isElectron, onBeforeUnmount, createElementBlock, normalizeClass, unref, setAnimationClass, createBaseVNode, toDisplayString, withDirectives, vModelText, isRef, createVNode, Button, withCtx, createTextVNode, createBlock, createCommentVNode, ref, getUserDetail, openBlock, _export_sfc, onUnmounted, __unplugin_components_2, getQrKey, createQr, checkQr, withKeys, loginByUid, useRouter, useUserStore, Fragment, renderList, Transition, computed, loginByCellphone;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useMessage = module.bt;
        onMounted = module.aq;
        isElectron = module.aW;
        onBeforeUnmount = module.bG;
        createElementBlock = module.a8;
        normalizeClass = module.aa;
        unref = module.ad;
        setAnimationClass = module.bv;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        withDirectives = module.P;
        vModelText = module.aj;
        isRef = module.bP;
        createVNode = module.ak;
        Button = module.a1;
        withCtx = module.as;
        createTextVNode = module.b7;
        createBlock = module.aY;
        createCommentVNode = module.ah;
        ref = module.A;
        getUserDetail = module.bQ;
        openBlock = module.a7;
        _export_sfc = module.ap;
        onUnmounted = module.ar;
        __unplugin_components_2 = module.bj;
        getQrKey = module.bR;
        createQr = module.bS;
        checkQr = module.bT;
        withKeys = module.ai;
        loginByUid = module.bU;
        useRouter = module.aU;
        useUserStore = module.b5;
        Fragment = module.ae;
        renderList = module.af;
        Transition = module.T;
        computed = module.z;
        loginByCellphone = module.bV;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "@charset \"UTF-8\";\n.cookie-login[data-v-7cccb029] {\n  animation-duration: 0.5s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-title[data-v-7cccb029]{\n  margin-bottom: 1.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.text[data-v-7cccb029]{\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.phone-page[data-v-7cccb029]{\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.phone-page[data-v-7cccb029]:is(.dark *){\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.phone-page[data-v-7cccb029] {\n  width: 250px;\n  overflow: hidden;\n  border-radius: 1rem;\n  padding: 0;\n  border: none;\n}\n.token-input[data-v-7cccb029]{\n  width: 100%;\n  resize: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.token-input[data-v-7cccb029]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.token-input[data-v-7cccb029]::-moz-placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.token-input[data-v-7cccb029]::placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.token-input[data-v-7cccb029]:is(.dark *)::-moz-placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));\n}\n.token-input[data-v-7cccb029]:is(.dark *)::placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));\n}\n.token-input[data-v-7cccb029] {\n  font-family: monospace;\n  font-size: 12px;\n  line-height: 1.4;\n  min-height: 100px;\n  padding: 16px;\n  margin: 0;\n  border: none;\n  border-radius: inherit;\n  box-sizing: border-box;\n}\n.token-input[data-v-7cccb029]:focus{\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  box-shadow: none;\n  border: none;\n}\n.token-input[data-v-7cccb029]::-moz-placeholder{\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.token-input[data-v-7cccb029]::placeholder{\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.token-input[data-v-7cccb029]:is(.dark *)::-moz-placeholder{\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.token-input[data-v-7cccb029]:is(.dark *)::placeholder{\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.token-input[data-v-7cccb029] {\n  /* 移除浏览器默认样式 */\n}\n.token-input[data-v-7cccb029]::-webkit-scrollbar {\n  width: 4px;\n}\n.token-input[data-v-7cccb029]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.token-input[data-v-7cccb029]::-webkit-scrollbar-thumb {\n  background: rgba(156, 163, 175, 0.3);\n  border-radius: 2px;\n}\n.token-input[data-v-7cccb029]::-webkit-scrollbar-thumb:hover {\n  background: rgba(156, 163, 175, 0.5);\n}\n.btn-login[data-v-7cccb029] {\n  width: 250px;\n  height: 40px;\n  margin-top: 2.5rem;\n  border-radius: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.btn-login[data-v-7cccb029]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1));\n}\n.btn-auto-cookie[data-v-7cccb029] {\n  width: 250px;\n  height: 40px;\n  margin-top: 1rem;\n  border-radius: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.btn-auto-cookie[data-v-7cccb029]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));\n}.qr-login[data-v-a71991b9] {\n  animation-duration: 0.5s;\n}\n.login-title[data-v-a71991b9] {\n  margin-bottom: 1.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.qr-container[data-v-a71991b9] {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.qr-loading[data-v-a71991b9] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.qr-loading .loading-text[data-v-a71991b9] {\n  margin-top: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.qr-image-wrapper[data-v-a71991b9] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.qr-image-wrapper.expired .qr-img[data-v-a71991b9] {\n  opacity: 0.3;\n}\n.qr-img[data-v-a71991b9] {\n  height: 100%;\n  width: 100%;\n  border-radius: 1rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.expired-overlay[data-v-a71991b9] {\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.5;\n}\n.expired-overlay .expired-text[data-v-a71991b9] {\n  margin-bottom: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.expired-overlay .refresh-btn[data-v-a71991b9] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.scanned-overlay[data-v-a71991b9] {\n  position: absolute;\n  inset: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.8;\n}\n.scanned-overlay .scanned-icon[data-v-a71991b9] {\n  margin-bottom: 0.5rem;\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.scanned-overlay .scanned-text[data-v-a71991b9] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.text[data-v-a71991b9] {\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.text.expired[data-v-a71991b9] {\n  --tw-text-opacity: 1;\n  color: rgb(251 146 60 / var(--tw-text-opacity, 1));\n}\n.text.scanned[data-v-a71991b9] {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.refresh-area[data-v-a71991b9] {\n  margin-top: 0.75rem;\n}\n.refresh-area .manual-refresh[data-v-a71991b9] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.refresh-area .manual-refresh[data-v-a71991b9]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}.uid-login[data-v-15c4dc4d] {\n  animation-duration: 0.5s;\n  width: 250px;\n}\n.uid-login .login-title[data-v-15c4dc4d] {\n  margin-bottom: 1.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.uid-login .text[data-v-15c4dc4d] {\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.uid-login .warning-text[data-v-15c4dc4d] {\n  margin-top: 0.5rem;\n  max-width: 20rem;\n  text-align: center;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(251 146 60 / var(--tw-text-opacity, 1));\n  line-height: 1.4;\n}\n.uid-login .uid-page[data-v-15c4dc4d] {\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.uid-login .uid-page[data-v-15c4dc4d]:is(.dark *) {\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.uid-login .uid-page[data-v-15c4dc4d] {\n  overflow: hidden;\n  border-radius: 1rem;\n}\n.uid-login .uid-input[data-v-15c4dc4d] {\n  height: 40px;\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d] {\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]:is(.dark *)::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]:is(.dark *)::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));\n}\n.uid-login .uid-input[data-v-15c4dc4d]:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity, 1));\n}\n.uid-login .btn-login[data-v-15c4dc4d] {\n  width: 250px;\n  height: 40px;\n  margin-top: 2.5rem;\n  border-radius: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.uid-login .btn-login[data-v-15c4dc4d]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1));\n}\n.login-page[data-v-f4c74bb0]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.login-page[data-v-f4c74bb0]:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.login-title[data-v-f4c74bb0]{\n  margin-bottom: 1.5rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.text[data-v-f4c74bb0]{\n  margin-top: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.phone-login[data-v-f4c74bb0] {\n  width: 350px;\n  height: 550px; /* 恢复原来的高度 */ position: relative; overflow: hidden; border-radius: 1rem; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px; background-size: cover; background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='400' height='560' preserveAspectRatio='none' viewBox='0 0 400 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1066%26quot%3b)' fill='none'%3e%3crect width='400' height='560' x='0' y='0' fill='rgba(24%2c 106%2c 59%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c234.738C43.535%2c236.921%2c80.103%2c205.252%2c116.272%2c180.923C151.738%2c157.067%2c188.295%2c132.929%2c207.855%2c94.924C227.898%2c55.979%2c233.386%2c10.682%2c226.119%2c-32.511C218.952%2c-75.107%2c199.189%2c-115.793%2c167.469%2c-145.113C137.399%2c-172.909%2c92.499%2c-171.842%2c55.779%2c-189.967C8.719%2c-213.196%2c-28.344%2c-282.721%2c-78.217%2c-266.382C-128.725%2c-249.834%2c-111.35%2c-166.696%2c-143.781%2c-124.587C-173.232%2c-86.348%2c-244.72%2c-83.812%2c-255.129%2c-36.682C-265.368%2c9.678%2c-217.952%2c48.26%2c-190.512%2c87.004C-167.691%2c119.226%2c-140.216%2c145.431%2c-109.013%2c169.627C-74.874%2c196.1%2c-43.147%2c232.575%2c0%2c234.738' fill='%23114b2a'%3e%3c/path%3e%3cpath d='M400 800.9010000000001C443.973 795.023 480.102 765.6 513.011 735.848 541.923 709.71 561.585 676.6320000000001 577.037 640.85 592.211 605.712 606.958 568.912 601.458 531.035 595.962 493.182 568.394 464.36400000000003 546.825 432.775 522.317 396.88300000000004 507.656 347.475 466.528 333.426 425.366 319.366 384.338 352.414 342.111 362.847 297.497 373.869 242.385 362.645 211.294 396.486 180.212 430.318 192.333 483.83299999999997 188.872 529.644 185.656 572.218 178.696 614.453 191.757 655.101 205.885 699.068 227.92 742.4110000000001 265.75 768.898 304.214 795.829 353.459 807.1220000000001 400 800.9010000000001' fill='%231f894c'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1066'%3e%3crect width='400' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\");\n  box-shadow: inset 0px 0px 20px 5px rgba(0, 0, 0, 0.37);\n  animation-duration: 0.8s;\n}\n.phone-login .bg[data-v-f4c74bb0]{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 249 250 / var(--tw-bg-opacity, 1));\n  opacity: 0.2;\n}\n.phone-login .bg[data-v-f4c74bb0]:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 22 22 / var(--tw-bg-opacity, 1));\n}\n.phone-login .content[data-v-f4c74bb0]{\n  position: absolute;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  text-align: center;\n}\n.phone-login .content .login-tabs[data-v-f4c74bb0]{\n  margin-bottom: 1.5rem;\n  display: flex;\n  border-radius: 0.75rem;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.2;\n  padding: 0.25rem;\n  width: 320px;\n  animation-duration: 0.6s;\n  animation-delay: 0.2s;\n}\n.phone-login .content .login-tabs .tab-item[data-v-f4c74bb0]{\n  flex: 1 1 0%;\n  cursor: pointer;\n  border-radius: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.phone-login .content .login-tabs .tab-item[data-v-f4c74bb0]:hover{\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.1;\n}\n.phone-login .content .login-tabs .tab-item[data-v-f4c74bb0] {\n  transform: translateY(0);\n}\n.phone-login .content .login-tabs .tab-item[data-v-f4c74bb0]:hover {\n  transform: translateY(-2px);\n}\n.phone-login .content .login-tabs .tab-item.active[data-v-f4c74bb0]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1));\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  transform: translateY(-1px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n.phone-login .content .login-content[data-v-f4c74bb0]{\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n}\n.phone-login .content .phone[data-v-f4c74bb0] {\n  animation-duration: 0.5s;\n  width: 100%;\n  max-width: 300px;\n}\n.phone-login .content .phone-page[data-v-f4c74bb0]{\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.phone-login .content .phone-page[data-v-f4c74bb0]:is(.dark *){\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.phone-login .content .phone-page[data-v-f4c74bb0] {\n  width: 250px;\n  overflow: hidden;\n  border-radius: 1rem;\n  margin: 0 auto;\n}\n.phone-login .content .phone-input[data-v-f4c74bb0] {\n  height: 40px;\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]{\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]:is(.dark *){\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]::-moz-placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]::placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]:is(.dark *)::-moz-placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]:is(.dark *)::placeholder{\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity, 1));\n}\n.phone-login .content .phone-input[data-v-f4c74bb0] {\n  transition: all 0.3s ease;\n}\n.phone-login .content .phone-input[data-v-f4c74bb0]:focus{\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity, 1));\n  transform: translateY(-1px);\n}\n.phone-login .content .btn-login[data-v-f4c74bb0] {\n  width: 250px;\n  height: 40px;\n  margin-top: 2.5rem;\n  border-radius: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n}\n.phone-login .content .btn-login[data-v-f4c74bb0]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1));\n}\n.phone-login .content .btn-login[data-v-f4c74bb0] {\n  transform: translateY(0);\n}\n.phone-login .content .btn-login[data-v-f4c74bb0]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 12px rgba(34, 197, 94, 0.3);\n}\n\n/* 登录内容切换动画 */\n.login-content-enter-active[data-v-f4c74bb0],\n.login-content-leave-active[data-v-f4c74bb0] {\n  animation-duration: 0.3s;\n}\n.login-content-enter-from[data-v-f4c74bb0] {\n  opacity: 0;\n  transform: translateY(20px);\n}\n.login-content-leave-to[data-v-f4c74bb0] {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n.mobile .login-page[data-v-f4c74bb0]{\n  padding-top: 0px;\n}\n.mobile .phone-login[data-v-f4c74bb0] {\n  width: 90vw;\n  max-width: 350px;\n  height: 500px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1$3 = {
          class: "login-title"
        };
        const _hoisted_2$3 = {
          class: "phone-page"
        };
        const _hoisted_3$3 = ["placeholder"];
        const _hoisted_4$3 = {
          class: "text"
        };
        const _sfc_main$3 = /* @__PURE__ */defineComponent({
          ...{
            name: "CookieLogin"
          },
          __name: "CookieLogin",
          emits: ["loginSuccess", "loginError"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const token = ref("");
            const loginByToken = async () => {
              if (!token.value.trim()) {
                const errorMsg = t("login.message.tokenRequired");
                message.error(errorMsg);
                emit("loginError", errorMsg);
                return;
              }
              try {
                localStorage.setItem("token", token.value.trim());
                const user = await getUserDetail();
                if (user.data && user.data.profile) {
                  const successMsg = t("login.message.tokenLoginSuccess");
                  message.success(successMsg);
                  emit("loginSuccess", user.data.profile, "cookie");
                } else {
                  localStorage.removeItem("token");
                  const errorMsg = t("login.message.tokenInvalid");
                  message.error(errorMsg);
                  emit("loginError", errorMsg);
                }
              } catch (error) {
                localStorage.removeItem("token");
                const errorMsg = t("login.message.tokenInvalid");
                message.error(errorMsg);
                emit("loginError", errorMsg);
                console.error("Token登录失败:", error);
              }
            };
            const autoGetCookie = () => {
              if (!isElectron) {
                message.error("此功能仅在桌面版中可用");
                return;
              }
              message.info(t("login.message.autoGetCookieTip"));
              window.electron.ipcRenderer.send("open-login");
            };
            const handleCookieReceived = async (_event, cookieValue) => {
              try {
                localStorage.setItem("token", cookieValue);
                const user = await getUserDetail();
                if (user.data && user.data.profile) {
                  const successMsg = t("login.message.autoGetCookieSuccess");
                  message.success(successMsg);
                  emit("loginSuccess", user.data.profile, "cookie");
                } else {
                  localStorage.removeItem("token");
                  const errorMsg = t("login.message.autoGetCookieFailed");
                  message.error(errorMsg);
                  emit("loginError", errorMsg);
                }
              } catch (error) {
                localStorage.removeItem("token");
                const errorMsg = t("login.message.autoGetCookieFailed");
                message.error(errorMsg);
                emit("loginError", errorMsg);
                console.error("自动获取Cookie失败:", error);
              }
            };
            onMounted(() => {
              if (isElectron) {
                window.electron.ipcRenderer.on("send-cookies", handleCookieReceived);
              }
            });
            onBeforeUnmount(() => {
              if (isElectron) {
                window.electron.ipcRenderer.removeAllListeners("send-cookies");
              }
            });
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["cookie-login", unref(setAnimationClass)("animate__fadeInUp")])
              }, [createBaseVNode("div", _hoisted_1$3, toDisplayString(unref(t)("login.title.cookie")), 1), createBaseVNode("div", _hoisted_2$3, [withDirectives(createBaseVNode("textarea", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(token) ? token.value = $event : null),
                class: "token-input",
                placeholder: unref(t)("login.placeholder.cookie"),
                rows: "4"
              }, null, 8, _hoisted_3$3), [[vModelText, unref(token)]])]), createBaseVNode("div", _hoisted_4$3, toDisplayString(unref(t)("login.tokenTip")), 1), createVNode(_component_n_button, {
                class: "btn-login",
                onClick: _cache[1] || (_cache[1] = $event => loginByToken())
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("login.button.cookieLogin")), 1)]),
                _: 1
              }), unref(isElectron) ? (openBlock(), createBlock(_component_n_button, {
                key: 0,
                class: "btn-auto-cookie",
                onClick: _cache[2] || (_cache[2] = $event => autoGetCookie()),
                type: "info"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("login.button.autoGetCookie")), 1)]),
                _: 1
              })) : createCommentVNode("", true)], 2);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const CookieLogin = /* @__PURE__ */_export_sfc(_sfc_main$3, [["__scopeId", "data-v-7cccb029"]]);
        const _hoisted_1$2 = {
          class: "login-title"
        };
        const _hoisted_2$2 = {
          class: "qr-container"
        };
        const _hoisted_3$2 = {
          key: 0,
          class: "qr-loading"
        };
        const _hoisted_4$2 = {
          class: "loading-text"
        };
        const _hoisted_5$2 = ["src"];
        const _hoisted_6$2 = {
          key: 0,
          class: "expired-overlay"
        };
        const _hoisted_7$1 = {
          class: "expired-text"
        };
        const _hoisted_8$1 = {
          key: 1,
          class: "scanned-overlay"
        };
        const _hoisted_9$1 = {
          class: "scanned-text"
        };
        const _hoisted_10$1 = {
          key: 0,
          class: "refresh-area"
        };
        const _sfc_main$2 = /* @__PURE__ */defineComponent({
          ...{
            name: "QrLogin"
          },
          __name: "QrLogin",
          emits: ["loginSuccess", "loginError"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const qrUrl = ref();
            const timerRef = ref(null);
            const qrStatus = ref("loading");
            const isRefreshing = ref(false);
            const loadLogin = async () => {
              try {
                isRefreshing.value = true;
                qrStatus.value = "loading";
                if (timerRef.value) {
                  clearInterval(timerRef.value);
                  timerRef.value = null;
                }
                const qrKey = await getQrKey();
                const key = qrKey.data.data.unikey;
                const {
                  data
                } = await createQr(key);
                qrUrl.value = data.data.qrimg;
                qrStatus.value = "active";
                const timer = timerIsQr(key);
                timerRef.value = timer;
              } catch (error) {
                console.error(t("login.message.loadError"), error);
                qrStatus.value = "expired";
                const errorMsg = t("login.message.loadError");
                message.error(errorMsg);
                emit("loginError", errorMsg);
              } finally {
                isRefreshing.value = false;
              }
            };
            const timerIsQr = key => {
              const timer = setInterval(async () => {
                try {
                  const {
                    data
                  } = await checkQr(key);
                  if (data.code === 800) {
                    qrStatus.value = "expired";
                    clearInterval(timer);
                    timerRef.value = null;
                    message.warning(t("login.message.qrExpiredWarning"));
                    return;
                  }
                  if (data.code === 801) {
                    qrStatus.value = "active";
                    return;
                  }
                  if (data.code === 802) {
                    qrStatus.value = "scanned";
                    message.info(t("login.message.qrScannedInfo"));
                    return;
                  }
                  if (data.code === 803) {
                    qrStatus.value = "confirmed";
                    localStorage.setItem("token", data.cookie);
                    const user = await getUserDetail();
                    const successMsg = t("login.message.loginSuccess");
                    message.success(successMsg);
                    emit("loginSuccess", user.data.profile, "qr");
                    clearInterval(timer);
                    timerRef.value = null;
                  }
                } catch (error) {
                  console.error(t("login.message.qrCheckError"), error);
                  qrStatus.value = "expired";
                  clearInterval(timer);
                  timerRef.value = null;
                  const errorMsg = t("login.message.qrCheckFailed");
                  message.error(errorMsg);
                  emit("loginError", errorMsg);
                }
              }, 3e3);
              return timer;
            };
            const refreshQr = () => {
              loadLogin();
            };
            const getStatusText = () => {
              switch (qrStatus.value) {
                case "loading":
                  return t("login.message.qrLoading");
                case "active":
                  return t("login.qrTip");
                case "expired":
                  return t("login.message.qrExpired");
                case "scanned":
                  return t("login.message.qrScanned");
                case "confirmed":
                  return t("login.message.qrConfirmed");
                default:
                  return t("login.qrTip");
              }
            };
            onMounted(() => {
              loadLogin();
            });
            onUnmounted(() => {
              if (timerRef.value) {
                clearInterval(timerRef.value);
                timerRef.value = null;
              }
            });
            return (_ctx, _cache) => {
              const _component_n_spin = __unplugin_components_2;
              const _component_n_button = Button;
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["qr-login", unref(setAnimationClass)("animate__fadeInUp")])
              }, [createBaseVNode("div", _hoisted_1$2, toDisplayString(unref(t)("login.title.qr")), 1), createBaseVNode("div", _hoisted_2$2, [unref(qrStatus) === "loading" ? (openBlock(), createElementBlock("div", _hoisted_3$2, [createVNode(_component_n_spin, {
                size: "large"
              }), createBaseVNode("div", _hoisted_4$2, toDisplayString(unref(t)("login.message.qrGenerating")), 1)])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["qr-image-wrapper", {
                  expired: unref(qrStatus) === "expired"
                }])
              }, [createBaseVNode("img", {
                class: "qr-img",
                src: unref(qrUrl)
              }, null, 8, _hoisted_5$2), unref(qrStatus) === "expired" ? (openBlock(), createElementBlock("div", _hoisted_6$2, [createBaseVNode("div", _hoisted_7$1, toDisplayString(unref(t)("login.message.qrExpiredShort")), 1), createVNode(_component_n_button, {
                class: "refresh-btn",
                type: "primary",
                onClick: refreshQr,
                loading: unref(isRefreshing)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(isRefreshing) ? unref(t)("login.button.refreshing") : unref(t)("login.button.refresh")), 1)]),
                _: 1
              }, 8, ["loading"])])) : createCommentVNode("", true), unref(qrStatus) === "scanned" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [_cache[0] || (_cache[0] = createBaseVNode("div", {
                class: "scanned-icon"
              }, "✓", -1)), createBaseVNode("div", _hoisted_9$1, toDisplayString(unref(t)("login.message.qrScannedShort")), 1)])) : createCommentVNode("", true)], 2))]), createBaseVNode("div", {
                class: normalizeClass(["text", {
                  expired: unref(qrStatus) === "expired",
                  scanned: unref(qrStatus) === "scanned"
                }])
              }, toDisplayString(getStatusText()), 3), unref(qrStatus) === "active" ? (openBlock(), createElementBlock("div", _hoisted_10$1, [createVNode(_component_n_button, {
                text: "",
                class: "manual-refresh",
                onClick: refreshQr,
                loading: unref(isRefreshing)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("login.button.refreshQr")), 1)]),
                _: 1
              }, 8, ["loading"])])) : createCommentVNode("", true)], 2);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const QrLogin = /* @__PURE__ */_export_sfc(_sfc_main$2, [["__scopeId", "data-v-a71991b9"]]);
        const _hoisted_1$1 = {
          class: "uid-login"
        };
        const _hoisted_2$1 = {
          class: "login-title"
        };
        const _hoisted_3$1 = {
          class: "uid-page"
        };
        const _hoisted_4$1 = ["placeholder"];
        const _hoisted_5$1 = {
          class: "text"
        };
        const _hoisted_6$1 = {
          class: "warning-text"
        };
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          ...{
            name: "UidLogin"
          },
          __name: "UidLogin",
          props: {
            disabled: {
              type: Boolean,
              default: false
            }
          },
          emits: ["loginSuccess", "loginError"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              t
            } = useI18n();
            const message = useMessage();
            const uid = ref("");
            const loading = ref(false);
            const handleLogin = async () => {
              if (props.disabled || loading.value) return;
              if (!uid.value.trim()) {
                const errorMsg = t("login.message.uidRequired");
                message.error(errorMsg);
                emit("loginError", errorMsg);
                return;
              }
              try {
                loading.value = true;
                const {
                  data
                } = await loginByUid(uid.value);
                if (data && data.profile) {
                  const successMsg = t("login.message.uidLoginSuccess");
                  message.success(successMsg);
                  emit("loginSuccess", data.profile, "uid");
                } else {
                  const errorMsg = t("login.message.uidInvalid");
                  message.error(errorMsg);
                  emit("loginError", errorMsg);
                }
              } catch (error) {
                console.error("UID登录失败:", error);
                let errorMsg = t("login.message.uidLoginFailed");
                if (error.response?.status === 404 || error.response?.data?.code === 404) {
                  errorMsg = t("login.message.uidInvalid");
                }
                message.error(errorMsg);
                emit("loginError", errorMsg);
              } finally {
                loading.value = false;
              }
            };
            const reset = () => {
              uid.value = "";
              loading.value = false;
            };
            __expose({
              reset
            });
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, toDisplayString(unref(t)("login.title.uid")), 1), createBaseVNode("div", _hoisted_3$1, [withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(uid) ? uid.value = $event : null),
                class: "uid-input",
                type: "text",
                placeholder: unref(t)("login.placeholder.uid"),
                onKeyup: withKeys(handleLogin, ["enter"])
              }, null, 40, _hoisted_4$1), [[vModelText, unref(uid)]])]), createBaseVNode("div", _hoisted_5$1, toDisplayString(unref(t)("login.uidTip")), 1), createBaseVNode("div", _hoisted_6$1, toDisplayString(unref(t)("login.uidWarning")), 1), createVNode(_component_n_button, {
                class: "btn-login",
                loading: unref(loading),
                onClick: handleLogin
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("login.button.login")), 1)]),
                _: 1
              }, 8, ["loading"])]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const UidLogin = /* @__PURE__ */_export_sfc(_sfc_main$1, [["__scopeId", "data-v-15c4dc4d"]]);
        const _hoisted_1 = {
          class: "login-page"
        };
        const _hoisted_2 = {
          class: "content"
        };
        const _hoisted_3 = ["onClick"];
        const _hoisted_4 = {
          class: "login-content"
        };
        const _hoisted_5 = {
          key: "qr",
          class: "phone"
        };
        const _hoisted_6 = {
          key: "phone",
          class: "phone"
        };
        const _hoisted_7 = {
          class: "login-title"
        };
        const _hoisted_8 = {
          class: "phone-page"
        };
        const _hoisted_9 = ["placeholder"];
        const _hoisted_10 = ["placeholder"];
        const _hoisted_11 = {
          class: "text"
        };
        const _hoisted_12 = {
          key: "uid",
          class: "phone"
        };
        const _hoisted_13 = {
          key: "token",
          class: "phone"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "Login"
          },
          __name: "index",
          setup(__props) {
            const {
              t
            } = useI18n();
            const message = useMessage();
            const router = useRouter();
            const userStore = useUserStore();
            const activeMode = ref("qr" /* QR */);
            const isTransitioning = ref(false);
            const loginTabs = computed(() => [{
              key: "qr" /* QR */,
              label: t("login.title.qr")
            }, {
              key: "cookie" /* COOKIE */,
              label: t("login.title.cookie")
            }, {
              key: "uid" /* UID */,
              label: t("login.title.uid")
            }]);
            const phone = ref("");
            const password = ref("");
            const loginPhone = async () => {
              try {
                if (!phone.value.trim()) {
                  message.error(t("login.message.phoneRequired"));
                  return;
                }
                if (!password.value.trim()) {
                  message.error(t("login.message.passwordRequired"));
                  return;
                }
                const {
                  data
                } = await loginByCellphone(phone.value, password.value);
                if (data.code === 200) {
                  message.success(t("login.message.loginSuccess"));
                  userStore.setUser(data.profile);
                  localStorage.setItem("token", data.cookie);
                  setTimeout(() => {
                    router.push("/user");
                  }, 1e3);
                } else {
                  message.error(t("login.message.phoneLoginFailed"));
                }
              } catch (error) {
                message.error(t("login.message.phoneLoginFailed"));
                console.error(t("login.message.loginFailed") + ":", error);
              }
            };
            const switchToMode = mode => {
              if (mode === activeMode.value) return;
              isTransitioning.value = true;
              setTimeout(() => {
                activeMode.value = mode;
                setTimeout(() => {
                  isTransitioning.value = false;
                }, 50);
              }, 150);
            };
            const handleLoginSuccess = (userProfile, loginType) => {
              userStore.setUser(userProfile);
              userStore.setLoginType(loginType);
              const token = loginType !== "uid" ? localStorage.getItem("token") : void 0;
              if (token) {
                localStorage.setItem("token", token);
              }
              if (loginType === "uid") {
                localStorage.setItem("uidLogin", "true");
              }
              setTimeout(() => {
                router.push("/user");
              }, 1e3);
            };
            const handleLoginError = error => {
              console.error(t("login.message.loginFailed") + ":", error);
            };
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(["phone-login", unref(setAnimationClass)("animate__fadeInDown")])
              }, [_cache[3] || (_cache[3] = createBaseVNode("div", {
                class: "bg"
              }, null, -1)), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", {
                class: normalizeClass(["login-tabs", unref(setAnimationClass)("animate__fadeInUp")])
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(loginTabs), tab => {
                return openBlock(), createElementBlock("div", {
                  key: tab.key,
                  class: normalizeClass(["tab-item", {
                    active: unref(activeMode) === tab.key
                  }]),
                  onClick: $event => switchToMode(tab.key)
                }, toDisplayString(tab.label), 11, _hoisted_3);
              }), 128))], 2), createBaseVNode("div", _hoisted_4, [createVNode(Transition, {
                name: "login-content",
                mode: "out-in",
                "enter-active-class": "animate__animated animate__fadeIn",
                "leave-active-class": "animate__animated animate__fadeOut"
              }, {
                default: withCtx(() => [unref(activeMode) === "qr" /* QR */ && !unref(isTransitioning) ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(QrLogin, {
                  onLoginSuccess: handleLoginSuccess,
                  onLoginError: handleLoginError
                })])) : unref(activeMode) === "phone" /* PHONE */ && !unref(isTransitioning) ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, toDisplayString(unref(t)("login.title.phone")), 1), createBaseVNode("div", _hoisted_8, [withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => isRef(phone) ? phone.value = $event : null),
                  class: "phone-input",
                  type: "text",
                  placeholder: unref(t)("login.placeholder.phone")
                }, null, 8, _hoisted_9), [[vModelText, unref(phone)]]), withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => isRef(password) ? password.value = $event : null),
                  class: "phone-input",
                  type: "password",
                  placeholder: unref(t)("login.placeholder.password")
                }, null, 8, _hoisted_10), [[vModelText, unref(password)]])]), createBaseVNode("div", _hoisted_11, toDisplayString(unref(t)("login.phoneTip")), 1), createVNode(_component_n_button, {
                  class: "btn-login",
                  onClick: _cache[2] || (_cache[2] = $event => loginPhone())
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("login.button.login")), 1)]),
                  _: 1
                })])) : unref(activeMode) === "uid" /* UID */ && !unref(isTransitioning) ? (openBlock(), createElementBlock("div", _hoisted_12, [createVNode(UidLogin, {
                  onLoginSuccess: handleLoginSuccess,
                  onLoginError: handleLoginError
                })])) : unref(activeMode) === "cookie" /* COOKIE */ && !unref(isTransitioning) ? (openBlock(), createElementBlock("div", _hoisted_13, [createVNode(CookieLogin, {
                  onLoginSuccess: handleLoginSuccess,
                  onLoginError: handleLoginError
                })])) : createCommentVNode("", true)]),
                _: 1
              })])])], 2)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const LoginComponent = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-f4c74bb0"]]));
      }
    };
  });
})();

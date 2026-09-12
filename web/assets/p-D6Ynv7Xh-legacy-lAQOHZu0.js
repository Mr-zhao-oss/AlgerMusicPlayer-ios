;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var t$1;
    return {
      setters: [module => {
        t$1 = module.aI;
      }],
      execute: function () {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */
        const t = "ionKeyboardDidShow",
          o = "ionKeyboardDidHide";
        exports({
          KEYBOARD_DID_OPEN: t,
          KEYBOARD_DID_CLOSE: o
        });
        let i = {},
          a = {},
          d = false;
        const s = () => {
            i = {}, a = {}, d = false;
          },
          n = t => {
            if (t$1.getEngine()) r(t);else {
              if (!t.visualViewport) return;
              a = g(t.visualViewport), t.visualViewport.onresize = () => {
                D(t), p() || b(t) ? f(t) : c(t) && h(t);
              };
            }
          },
          r = e => {
            e.addEventListener("keyboardDidShow", t => f(e, t)), e.addEventListener("keyboardDidHide", () => h(e));
          },
          f = (e, t) => {
            w(e, t), d = true;
          },
          h = e => {
            y(e), d = false;
          },
          p = () => !d && i.width === a.width && (i.height - a.height) * a.scale > 150,
          b = e => d && !c(e),
          c = e => d && a.height === e.innerHeight,
          w = (e, o) => {
            const i = new CustomEvent(t, {
              detail: {
                keyboardHeight: o ? o.keyboardHeight : e.innerHeight - a.height
              }
            });
            e.dispatchEvent(i);
          },
          y = e => {
            const t = new CustomEvent(o);
            e.dispatchEvent(t);
          },
          D = e => {
            i = Object.assign({}, a), a = g(e.visualViewport);
          },
          g = e => ({
            width: Math.round(e.width),
            height: Math.round(e.height),
            offsetTop: e.offsetTop,
            offsetLeft: e.offsetLeft,
            pageTop: e.pageTop,
            pageLeft: e.pageLeft,
            scale: e.scale
          });
        exports({
          resetKeyboardAssist: s,
          startKeyboardAssist: n,
          setKeyboardOpen: f,
          setKeyboardClose: h,
          keyboardDidOpen: p,
          keyboardDidResize: b,
          keyboardDidClose: c,
          trackViewportChanges: D,
          copyVisualViewport: g
        });
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var o, s, b;
    return {
      setters: [module => {
        o = module.aw;
        s = module.ax;
        b = module.ay;
      }],
      execute: function () {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */
        const e = exports("createSwipeBackGesture", (e, s$1, n, a, c) => {
          const i = e.ownerDocument.defaultView;
          let p = o(e);
          const m = t => p ? -t.deltaX : t.deltaX;
          return s({
            el: e,
            gestureName: "goback-swipe",
            gesturePriority: 101,
            threshold: 10,
            canStart: t => (p = o(e), (t => {
              const {
                startX: o
              } = t;
              return p ? o >= i.innerWidth - 50 : o <= 50;
            })(t) && s$1()),
            onStart: n,
            onMove: t => {
              const o = m(t);
              a(o / i.innerWidth);
            },
            onEnd: o => {
              const r = m(o),
                e = i.innerWidth,
                s = r / e,
                n = (t => p ? -t.velocityX : t.velocityX)(o),
                a = n >= 0 && (n > .2 || r > e / 2),
                f = (a ? 1 - s : s) * e;
              let g = 0;
              if (f > 5) {
                const t = f / Math.abs(n);
                g = Math.min(t, 540);
              }
              c(a, s <= 0 ? .01 : b(0, s, .9999), g);
            }
          });
        });
      }
    };
  });
})();

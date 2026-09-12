;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var W, f, e, P, m;
    return {
      setters: [module => {
        W = module.aD;
        f = module.aE;
        e = module.aF;
        P = module.aG;
        m = module.aH;
      }],
      execute: function () {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */
        const n = exports("startStatusTap", () => {
          const n = window;
          n.addEventListener("statusTap", () => {
            W(() => {
              const o = document.elementFromPoint(n.innerWidth / 2, n.innerHeight / 2);
              if (!o) return;
              const e$1 = f(o);
              e$1 && new Promise(o => e(e$1, o)).then(() => {
                P(async () => {
                  e$1.style.setProperty("--overflow", "hidden"), await m(e$1, 300), e$1.style.removeProperty("--overflow");
                });
              });
            });
          });
        });
      }
    };
  });
})();

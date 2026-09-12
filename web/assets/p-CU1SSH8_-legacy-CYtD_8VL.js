;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var x, r;
    return {
      setters: [module => {
        x = module.aA;
        r = module.az;
      }],
      execute: function () {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */
        const i = exports("mdTransitionAnimation", (i, r$1) => {
          var a, n, s;
          const c = "40px",
            e = "back" === r$1.direction,
            l = r$1.leavingEl,
            p = x(r$1.enteringEl),
            b = p.querySelector("ion-toolbar"),
            u = r();
          if (u.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"), e ? u.duration((null !== (a = r$1.duration) && void 0 !== a ? a : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : u.duration((null !== (n = r$1.duration) && void 0 !== n ? n : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${c})`, "translateY(0px)").fromTo("opacity", .01, 1), b) {
            const t = r();
            t.addElement(b), u.addAnimation(t);
          }
          if (l && e) {
            u.duration((null !== (s = r$1.duration) && void 0 !== s ? s : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
            const i = r();
            i.addElement(x(l)).onFinish(o => {
              1 === o && i.elements.length > 0 && i.elements[0].style.setProperty("display", "none");
            }).fromTo("transform", "translateY(0px)", `translateY(${c})`).fromTo("opacity", 1, 0), u.addAnimation(i);
          }
          return u;
        });
      }
    };
  });
})();

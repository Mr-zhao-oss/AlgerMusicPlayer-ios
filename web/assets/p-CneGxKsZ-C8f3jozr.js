import { aD as W, aE as f, aF as e, aG as P, aH as m } from "./index-BMNXZoHW.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", (() => {
    W((() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o) return;
      const e$1 = f(o);
      e$1 && new Promise(((o2) => e(e$1, o2))).then((() => {
        P((async () => {
          e$1.style.setProperty("--overflow", "hidden"), await m(e$1, 300), e$1.style.removeProperty("--overflow");
        }));
      }));
    }));
  }));
};
export {
  n as startStatusTap
};

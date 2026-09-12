const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-BK_2HvV3.js","./index-BMNXZoHW.js","./index-DFoib_22.css"])))=>i.map(i=>d[i]);
import { eO as registerPlugin, aT as __vitePreload } from "./index-BMNXZoHW.js";
const ScreenOrientation = registerPlugin("ScreenOrientation", {
  web: () => __vitePreload(() => import("./web-BK_2HvV3.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then((m) => new m.ScreenOrientationWeb())
});
export {
  ScreenOrientation
};

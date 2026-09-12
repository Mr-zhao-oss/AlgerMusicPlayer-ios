const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./opencc-BAp-aKWf.js","./index-BMNXZoHW.js","./index-DFoib_22.css"])))=>i.map(i=>d[i]);
import { cH as useSettingsStore, aT as __vitePreload } from "./index-BMNXZoHW.js";
async function translateLyrics(lines) {
  var _a;
  if (!lines || lines.length === 0) return lines || [];
  const settingsStore = useSettingsStore();
  const engine = ((_a = settingsStore.setData) == null ? void 0 : _a.lyricTranslationEngine) || "none";
  switch (engine) {
    case "opencc": {
      const mod = await __vitePreload(() => import("./opencc-BAp-aKWf.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
      const engineMod = await mod.ensureOpenccConverter();
      return engineMod.translateLines(lines);
    }
    default: {
      return lines.map((l) => ({ ...l, trText: l.trText || "" }));
    }
  }
}
const lyricTranslation = {
  translateLyrics
};
export {
  lyricTranslation as default,
  translateLyrics
};

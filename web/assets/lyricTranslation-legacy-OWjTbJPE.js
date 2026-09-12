;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var useSettingsStore, __vitePreload;
    return {
      setters: [module => {
        useSettingsStore = module.cH;
        __vitePreload = module.aT;
      }],
      execute: function () {
        exports("translateLyrics", translateLyrics);
        async function translateLyrics(lines) {
          if (!lines || lines.length === 0) return lines || [];
          const settingsStore = useSettingsStore();
          const engine = settingsStore.setData?.lyricTranslationEngine || "none";
          switch (engine) {
            case "opencc":
              {
                const mod = await __vitePreload(() => module.import('./opencc-legacy-Bm40nlT2.js'), false              ? __VITE_PRELOAD__ : void 0, module.meta.url);
                const engineMod = await mod.ensureOpenccConverter();
                return engineMod.translateLines(lines);
              }
            default:
              {
                return lines.map(l => ({
                  ...l,
                  trText: l.trText || ""
                }));
              }
          }
        }
        const lyricTranslation = exports("default", {
          translateLyrics
        });
      }
    };
  });
})();

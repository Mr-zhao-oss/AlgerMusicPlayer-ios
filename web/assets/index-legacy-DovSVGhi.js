;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var registerPlugin, __vitePreload;
    return {
      setters: [module => {
        registerPlugin = module.eO;
        __vitePreload = module.aT;
      }],
      execute: function () {
        const ScreenOrientation = exports("ScreenOrientation", registerPlugin('ScreenOrientation', {
          web: () => __vitePreload(() => module.import('./web-legacy-BdG5LdpJ.js'), false              ? __VITE_PRELOAD__ : void 0, module.meta.url).then(m => new m.ScreenOrientationWeb())
        }));
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var WebPlugin;
    return {
      setters: [module => {
        WebPlugin = module.eL;
      }],
      execute: function () {
        class ScreenOrientationWeb extends WebPlugin {
          constructor() {
            super();
            if (typeof screen !== 'undefined' && typeof screen.orientation !== 'undefined') {
              screen.orientation.addEventListener('change', () => {
                const type = screen.orientation.type;
                this.notifyListeners('screenOrientationChange', {
                  type
                });
              });
            }
          }
          async orientation() {
            if (typeof screen === 'undefined' || !screen.orientation) {
              throw this.unavailable('ScreenOrientation API not available in this browser');
            }
            return {
              type: screen.orientation.type
            };
          }
          async lock(options) {
            if (typeof screen === 'undefined' || !screen.orientation || !screen.orientation.lock) {
              throw this.unavailable('ScreenOrientation API not available in this browser');
            }
            try {
              await screen.orientation.lock(options.orientation);
            } catch (_a) {
              throw this.unavailable('ScreenOrientation API not available in this browser');
            }
          }
          async unlock() {
            if (typeof screen === 'undefined' || !screen.orientation || !screen.orientation.unlock) {
              throw this.unavailable('ScreenOrientation API not available in this browser');
            }
            try {
              screen.orientation.unlock();
            } catch (_a) {
              throw this.unavailable('ScreenOrientation API not available in this browser');
            }
          }
        }
        exports("ScreenOrientationWeb", ScreenOrientationWeb);
      }
    };
  });
})();

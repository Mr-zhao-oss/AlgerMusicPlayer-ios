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
        class AppWeb extends WebPlugin {
          constructor() {
            super();
            this.handleVisibilityChange = () => {
              const data = {
                isActive: document.hidden !== true
              };
              this.notifyListeners('appStateChange', data);
              if (document.hidden) {
                this.notifyListeners('pause', null);
              } else {
                this.notifyListeners('resume', null);
              }
            };
            document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
          }
          exitApp() {
            throw this.unimplemented('Not implemented on web.');
          }
          async getInfo() {
            throw this.unimplemented('Not implemented on web.');
          }
          async getLaunchUrl() {
            return {
              url: ''
            };
          }
          async getState() {
            return {
              isActive: document.hidden !== true
            };
          }
          async minimizeApp() {
            throw this.unimplemented('Not implemented on web.');
          }
          async toggleBackButtonHandler() {
            throw this.unimplemented('Not implemented on web.');
          }
        }
        exports("AppWeb", AppWeb);
      }
    };
  });
})();

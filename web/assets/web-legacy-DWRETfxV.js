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
        class MediaSessionWeb extends WebPlugin {
          async setMetadata(options) {
            if ('mediaSession' in navigator) {
              navigator.mediaSession.metadata = new MediaMetadata(options);
            } else {
              throw this.unavailable('Media Session API not available in this browser.');
            }
          }
          async setPlaybackState(options) {
            if ('mediaSession' in navigator) {
              navigator.mediaSession.playbackState = options.playbackState;
            } else {
              throw this.unavailable('Media Session API not available in this browser.');
            }
          }
          async setActionHandler(options, handler) {
            if ('mediaSession' in navigator) {
              navigator.mediaSession.setActionHandler(options.action, handler);
            } else {
              throw this.unavailable('Media Session API not available in this browser.');
            }
          }
          async setPositionState(options) {
            if ('mediaSession' in navigator) {
              navigator.mediaSession.setPositionState(options);
            } else {
              throw this.unavailable('Media Session API not available in this browser.');
            }
          }
        }
        exports("MediaSessionWeb", MediaSessionWeb);
      }
    };
  });
})();

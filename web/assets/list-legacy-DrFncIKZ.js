;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var request;
    return {
      setters: [module => {
        request = module.bl;
      }],
      execute: function () {
        exports({
          a: getListDetail,
          b: getListByCat,
          c: getToplist,
          g: getAlbum
        });
        function getListByCat(params) {
          return request.get("/top/playlist", {
            params
          });
        }
        function getListDetail(id) {
          return request.get("/playlist/detail", {
            params: {
              id
            }
          });
        }
        function getAlbum(id) {
          return request.get("/album", {
            params: {
              id
            }
          });
        }
        function getToplist() {
          return request.get("/toplist");
        }
      }
    };
  });
})();

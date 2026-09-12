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
        const subscribeDj = exports("s", (rid, t) => {
          return request.get("/dj/sub", {
            params: {
              rid,
              t
            }
          });
        });
        const getDjSublist = exports("d", () => {
          return request.get("/dj/sublist");
        });
        const getDjDetail = exports("e", rid => {
          return request.get("/dj/detail", {
            params: {
              rid
            }
          });
        });
        const getDjProgram = exports("f", (rid, limit = 30, offset = 0, asc = false) => {
          return request.get("/dj/program", {
            params: {
              rid,
              limit,
              offset,
              asc
            }
          });
        });
        const getDjRecommend = exports("b", () => {
          return request.get("/dj/recommend");
        });
        const getDjCategoryList = exports("a", () => {
          return request.get("/dj/catelist");
        });
        const getDjTodayPerfered = exports("c", () => {
          return request.get("/dj/today/perfered");
        });
        const getDjRadioHot = exports("g", (cateId, limit = 30, offset = 0) => {
          return request.get("/dj/radio/hot", {
            params: {
              cateId,
              limit,
              offset
            }
          });
        });
      }
    };
  });
})();

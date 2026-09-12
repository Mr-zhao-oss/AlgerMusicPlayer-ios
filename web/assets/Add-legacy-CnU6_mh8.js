;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, h;
    return {
      setters: [module => {
        defineComponent = module.d;
        h = module.h;
      }],
      execute: function () {
        const AddIcon = exports("A", defineComponent({
          name: 'Add',
          render() {
            return h("svg", {
              width: "512",
              height: "512",
              viewBox: "0 0 512 512",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
              d: "M256 112V400M400 256H112",
              stroke: "currentColor",
              "stroke-width": "32",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }));
          }
        }));
      }
    };
  });
})();

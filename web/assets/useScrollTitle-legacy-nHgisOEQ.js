;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var useNavTitleStore, onMounted, isRef, watch, onUnmounted;
    return {
      setters: [module => {
        useNavTitleStore = module.e7;
        onMounted = module.aq;
        isRef = module.bP;
        watch = module.Y;
        onUnmounted = module.ar;
      }],
      execute: function () {
        exports("u", useScrollTitle);
        function useScrollTitle(title, titleEl) {
          const store = useNavTitleStore();
          let observer = null;
          const setupObserver = el => {
            observer?.disconnect();
            observer = new IntersectionObserver(([entry]) => store.setVisible(!entry.isIntersecting), {
              threshold: 0,
              rootMargin: "-56px 0px 0px 0px"
            });
            observer.observe(el);
          };
          onMounted(() => {
            store.setTitle(isRef(title) ? title.value : title);
            if (titleEl.value) {
              setupObserver(titleEl.value);
            }
          });
          if (isRef(title)) {
            watch(title, v => store.setTitle(v));
          }
          watch(titleEl, el => {
            if (el) setupObserver(el);
          });
          onUnmounted(() => {
            observer?.disconnect();
            store.clear();
          });
        }
      }
    };
  });
})();

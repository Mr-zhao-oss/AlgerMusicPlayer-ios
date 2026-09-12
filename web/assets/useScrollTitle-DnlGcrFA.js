import { e7 as useNavTitleStore, aq as onMounted, bP as isRef, Y as watch, ar as onUnmounted } from "./index-BMNXZoHW.js";
function useScrollTitle(title, titleEl) {
  const store = useNavTitleStore();
  let observer = null;
  const setupObserver = (el) => {
    observer == null ? void 0 : observer.disconnect();
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
    watch(title, (v) => store.setTitle(v));
  }
  watch(titleEl, (el) => {
    if (el) setupObserver(el);
  });
  onUnmounted(() => {
    observer == null ? void 0 : observer.disconnect();
    store.clear();
  });
}
export {
  useScrollTitle as u
};

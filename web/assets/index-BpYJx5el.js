import { d as defineComponent, a5 as useI18n, aU as useRouter, bh as useRoute, bb as usePlayerStore, Y as watch, aq as onMounted, a8 as createElementBlock, ak as createVNode, as as withCtx, a7 as openBlock, ae as Fragment, af as renderList, ab as createBaseVNode, ag as normalizeStyle, ad as unref, aZ as calculateAnimationDelay, aQ as getImgUrl, b7 as createTextVNode, ac as toDisplayString, aR as formatNumber, bj as __unplugin_components_2, ah as createCommentVNode, A as ref, z as computed, bm as audioService, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { g as getTopMv, a as getAllMv, M as MvPlayer } from "./MvPlayer-DMP7W4CI.js";
import { S as StickyTabPage } from "./StickyTabPage-B6MvziGP.js";
import "./index-Ufy0OYbr.js";
const _hoisted_1 = { class: "h-full w-full" };
const _hoisted_2 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
};
const _hoisted_3 = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "relative aspect-video overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { class: "absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" };
const _hoisted_8 = { class: "mt-3 space-y-1" };
const _hoisted_9 = { class: "text-sm md:text-base font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors" };
const _hoisted_10 = { class: "text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1" };
const _hoisted_11 = { class: "mt-12 py-8 border-t border-neutral-100 dark:border-neutral-800" };
const _hoisted_12 = {
  key: 0,
  class: "flex flex-col items-center gap-4"
};
const _hoisted_13 = { class: "text-xs text-neutral-400 font-medium tracking-widest uppercase" };
const _hoisted_14 = {
  key: 1,
  class: "text-center"
};
const _hoisted_15 = { class: "text-xs text-neutral-400 font-medium tracking-widest uppercase opacity-50" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Mv"
  },
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const showMv = ref(false);
    const mvList = ref([]);
    const playMvItem = ref();
    const initLoading = ref(false);
    const loadingMore = ref(false);
    const currentIndex = ref(0);
    const offset = ref(0);
    const limit = ref(40);
    const hasMore = ref(true);
    const pageRef = ref();
    const categories = computed(() => [
      { label: t("comp.pages.mv.area.all"), value: "全部" },
      { label: t("comp.pages.mv.area.mainland"), value: "内地" },
      { label: t("comp.pages.mv.area.hktw"), value: "港台" },
      { label: t("comp.pages.mv.area.western"), value: "欧美" },
      { label: t("comp.pages.mv.area.japan"), value: "日本" },
      { label: t("comp.pages.mv.area.korea"), value: "韩国" }
    ]);
    const selectedCategory = ref("全部");
    const router = useRouter();
    const route = useRoute();
    const playerStore = usePlayerStore();
    const handleCategoryChange = async (value) => {
      selectedCategory.value = value;
      offset.value = 0;
      mvList.value = [];
      hasMore.value = true;
      router.replace({ query: { ...route.query, area: value } });
      await loadMvList();
    };
    watch(
      () => route.query,
      async (newParams) => {
        if (route.path !== "/mv") return;
        const newArea = newParams.area || "全部";
        if (newArea !== selectedCategory.value) {
          selectedCategory.value = newArea;
        }
      }
    );
    onMounted(async () => {
      selectedCategory.value = route.query.area || "全部";
      await loadMvList();
    });
    const handleShowMv = async (item, index2) => {
      playerStore.setIsPlay(false);
      audioService.pause();
      showMv.value = true;
      currentIndex.value = index2;
      playMvItem.value = item;
    };
    const playPrevMv = async (setLoading) => {
      try {
        if (currentIndex.value > 0) {
          const prevItem = mvList.value[currentIndex.value - 1];
          await handleShowMv(prevItem, currentIndex.value - 1);
        }
      } finally {
        setLoading(false);
      }
    };
    const playNextMv = async (setLoading) => {
      try {
        if (currentIndex.value < mvList.value.length - 1) {
          const nextItem = mvList.value[currentIndex.value + 1];
          await handleShowMv(nextItem, currentIndex.value + 1);
        } else if (hasMore.value) {
          await loadMvList();
          if (mvList.value.length > currentIndex.value + 1) {
            const nextItem = mvList.value[currentIndex.value + 1];
            await handleShowMv(nextItem, currentIndex.value + 1);
          } else {
            showMv.value = false;
          }
        } else {
          showMv.value = false;
        }
      } catch (error) {
        console.error("加载更多MV失败:", error);
        showMv.value = false;
      } finally {
        setLoading(false);
      }
    };
    const loadMvList = async () => {
      try {
        if (!hasMore.value || loadingMore.value) return;
        if (offset.value === 0) {
          initLoading.value = true;
        } else {
          loadingMore.value = true;
        }
        const params = {
          limit: limit.value,
          offset: offset.value,
          area: selectedCategory.value === "全部" ? "" : selectedCategory.value
        };
        const res = selectedCategory.value === "全部" ? await getTopMv(params) : await getAllMv(params);
        const { data } = res.data;
        mvList.value.push(...data);
        hasMore.value = data.length === limit.value;
        offset.value += limit.value;
      } finally {
        initLoading.value = false;
        loadingMore.value = false;
      }
    };
    const handleScroll = (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      if (scrollHeight - (scrollTop + clientHeight) < 150) {
        loadMvList();
      }
    };
    const isPrevDisabled = computed(() => currentIndex.value === 0);
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(StickyTabPage, {
          ref_key: "pageRef",
          ref: pageRef,
          title: "MV",
          description: unref(t)("comp.pages.mv.desc"),
          "model-value": selectedCategory.value,
          categories: categories.value,
          onChange: handleCategoryChange,
          onScroll: handleScroll
        }, {
          default: withCtx(() => [
            initLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              (openBlock(), createElementBlock(Fragment, null, renderList(12, (i) => {
                return createBaseVNode("div", {
                  key: i,
                  class: "space-y-3"
                }, [..._cache[1] || (_cache[1] = [
                  createBaseVNode("div", { class: "aspect-video skeleton-shimmer rounded-2xl" }, null, -1),
                  createBaseVNode("div", { class: "h-4 w-3/4 skeleton-shimmer rounded-lg" }, null, -1),
                  createBaseVNode("div", { class: "h-3 w-1/2 skeleton-shimmer rounded-lg" }, null, -1)
                ])]);
              }), 64))
            ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(mvList.value, (item, index2) => {
                return openBlock(), createElementBlock("div", {
                  key: item.id,
                  class: "mv-card group cursor-pointer animate-item",
                  style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index2, 0.05) }),
                  onClick: ($event) => handleShowMv(item, index2)
                }, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("img", {
                      src: unref(getImgUrl)(item.cover, "400y225"),
                      alt: item.name,
                      class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                      loading: "lazy"
                    }, null, 8, _hoisted_6),
                    _cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute inset-0 bg-transparent group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center" }, [
                      createBaseVNode("div", { class: "play-icon w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl" }, [
                        createBaseVNode("i", { class: "ri-play-fill text-2xl text-neutral-900 ml-1" })
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_7, [
                      _cache[2] || (_cache[2] = createBaseVNode("i", { class: "ri-play-fill" }, null, -1)),
                      createTextVNode(" " + toDisplayString(unref(formatNumber)(item.playCount)), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("h3", _hoisted_9, toDisplayString(item.name), 1),
                    createBaseVNode("p", _hoisted_10, toDisplayString(item.artistName), 1)
                  ])
                ], 12, _hoisted_4);
              }), 128))
            ])),
            createBaseVNode("div", _hoisted_11, [
              loadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
                createVNode(_component_n_spin, { size: "small" }),
                createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)("comp.pages.mv.loadingMore")), 1)
              ])) : createCommentVNode("", true),
              !hasMore.value && !initLoading.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("span", _hoisted_15, toDisplayString(unref(t)("comp.pages.mv.noMore")), 1)
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["description", "model-value", "categories"]),
        createVNode(MvPlayer, {
          show: showMv.value,
          "onUpdate:show": _cache[0] || (_cache[0] = ($event) => showMv.value = $event),
          "current-mv": playMvItem.value,
          "is-prev-disabled": isPrevDisabled.value,
          onNext: playNextMv,
          onPrev: playPrevMv
        }, null, 8, ["show", "current-mv", "is-prev-disabled"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9cebf1f"]]);
export {
  index as default
};

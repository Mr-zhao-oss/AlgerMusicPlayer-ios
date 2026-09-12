import { d as defineComponent, a5 as useI18n, aU as useRouter, bh as useRoute, A as ref, aq as onMounted, bi as onDeactivated, Y as watch, aY as createBlock, as as withCtx, ab as createBaseVNode, a7 as openBlock, a8 as createElementBlock, ae as Fragment, af as renderList, a9 as withModifiers, ag as normalizeStyle, ad as unref, aZ as calculateAnimationDelay, aa as normalizeClass, aQ as getImgUrl, b7 as createTextVNode, ac as toDisplayString, aR as formatNumber, ak as createVNode, bj as __unplugin_components_2, ah as createCommentVNode, a_ as reactive, a2 as nextTick, bk as getPlaylistCategory, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { b as getListByCat } from "./list-evjySziV.js";
import { n as navigateToMusicList } from "./MusicListNavigator-jSUM_tQ9.js";
import { S as StickyTabPage } from "./StickyTabPage-B6MvziGP.js";
import "./music-JQhEZ-U3.js";
const _hoisted_1 = { class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" };
const _hoisted_2 = ["onClick", "onAnimationend"];
const _hoisted_3 = { class: "relative aspect-square overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = { class: "absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" };
const _hoisted_6 = { class: "mt-3 space-y-1" };
const _hoisted_7 = { class: "text-sm md:text-base font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors" };
const _hoisted_8 = {
  key: 0,
  class: "flex justify-center items-center py-8"
};
const _hoisted_9 = { class: "ml-2 text-neutral-500" };
const _hoisted_10 = {
  key: 1,
  class: "text-center py-8 text-neutral-500"
};
const TOTAL_ITEMS = 42;
const DEFAULT_CAT = "每日推荐";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "List"
  },
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const recommendList = ref([]);
    const page = ref(0);
    const hasMore = ref(true);
    const isLoadingMore = ref(false);
    const animatedIds = reactive(/* @__PURE__ */ new Set());
    const pageRef = ref();
    const router = useRouter();
    const openPlaylist = (item) => {
      navigateToMusicList(router, {
        id: item.id,
        type: "playlist",
        name: item.name,
        listInfo: item,
        canRemove: false
      });
    };
    const route = useRoute();
    const listTitle = ref(route.query.type || t("comp.pages.list.dailyRecommend"));
    const loading = ref(false);
    const loadList = async (type, isLoadMore = false) => {
      var _a;
      if (!hasMore.value && isLoadMore) return;
      if (isLoadMore) {
        isLoadingMore.value = true;
      } else {
        loading.value = true;
        page.value = 0;
        recommendList.value = [];
        await nextTick();
        (_a = pageRef.value) == null ? void 0 : _a.scrollTo({ top: 0 });
      }
      try {
        const params = {
          cat: type === DEFAULT_CAT ? "" : type,
          limit: TOTAL_ITEMS,
          offset: page.value * TOTAL_ITEMS
        };
        const { data } = await getListByCat(params);
        if (isLoadMore) {
          recommendList.value.push(...data.playlists);
        } else {
          recommendList.value = data.playlists;
        }
        hasMore.value = data.more;
        page.value++;
      } catch (error) {
        console.error("加载歌单列表失败:", error);
      } finally {
        loading.value = false;
        isLoadingMore.value = false;
      }
    };
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoadingMore.value && hasMore.value) {
        loadList(currentType.value, true);
      }
    };
    const playlistCategory = ref();
    const currentType = ref(route.query.type || DEFAULT_CAT);
    const loadPlaylistCategory = async () => {
      const { data } = await getPlaylistCategory();
      playlistCategory.value = {
        ...data,
        sub: [
          {
            name: DEFAULT_CAT,
            category: 0
          },
          ...data.sub
        ]
      };
    };
    const handleTypeChange = (type) => {
      router.replace({ query: { ...route.query, type } });
    };
    onMounted(() => {
      loadPlaylistCategory();
      currentType.value = route.query.type || currentType.value;
      loadList(currentType.value);
    });
    onDeactivated(() => {
      recommendList.value.forEach((item) => animatedIds.add(item.id));
    });
    watch(
      () => route.query,
      async (newParams) => {
        if (route.path !== "/list") return;
        const newType = newParams.type || DEFAULT_CAT;
        if (newType !== currentType.value) {
          listTitle.value = newType === DEFAULT_CAT ? t("comp.pages.list.dailyRecommend") : newType;
          currentType.value = newType;
          loading.value = true;
          loadList(newType);
        }
      }
    );
    return (_ctx, _cache) => {
      var _a;
      const _component_n_spin = __unplugin_components_2;
      return openBlock(), createBlock(StickyTabPage, {
        ref_key: "pageRef",
        ref: pageRef,
        title: listTitle.value,
        description: unref(t)("comp.pages.list.desc"),
        "model-value": currentType.value,
        categories: ((_a = playlistCategory.value) == null ? void 0 : _a.sub) || [],
        "label-key": "name",
        "value-key": "name",
        onChange: handleTypeChange,
        onScroll: handleScroll
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            loading.value && page.value === 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(15, (i) => {
              return createBaseVNode("div", {
                key: "loading-".concat(i),
                class: "space-y-3"
              }, [..._cache[0] || (_cache[0] = [
                createBaseVNode("div", { class: "aspect-square skeleton-shimmer rounded-2xl" }, null, -1),
                createBaseVNode("div", { class: "h-4 w-3/4 skeleton-shimmer rounded-lg" }, null, -1)
              ])]);
            }), 64)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(recommendList.value, (item, index2) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: normalizeClass(["list-card group cursor-pointer", { "animate-item": !animatedIds.has(item.id) }]),
                style: normalizeStyle({
                  animationDelay: !animatedIds.has(item.id) ? unref(calculateAnimationDelay)(index2 % TOTAL_ITEMS, 0.05) : "0s"
                }),
                onClick: withModifiers(($event) => openPlaylist(item), ["stop"]),
                onAnimationend: ($event) => animatedIds.add(item.id)
              }, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("img", {
                    src: unref(getImgUrl)(item.picUrl || item.coverImgUrl, "400y400"),
                    alt: item.name,
                    class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                    loading: "lazy"
                  }, null, 8, _hoisted_4),
                  _cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center" }, [
                    createBaseVNode("div", { class: "play-icon w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl" }, [
                      createBaseVNode("i", { class: "ri-play-fill text-2xl text-neutral-900 ml-1" })
                    ])
                  ], -1)),
                  createBaseVNode("div", _hoisted_5, [
                    _cache[1] || (_cache[1] = createBaseVNode("i", { class: "ri-play-fill" }, null, -1)),
                    createTextVNode(" " + toDisplayString(unref(formatNumber)(item.playCount)), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("h3", _hoisted_7, toDisplayString(item.name), 1)
                ])
              ], 46, _hoisted_2);
            }), 128))
          ]),
          isLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(_component_n_spin, { size: "small" }),
            createBaseVNode("span", _hoisted_9, toDisplayString(unref(t)("common.loading")), 1)
          ])) : createCommentVNode("", true),
          !hasMore.value && recommendList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(unref(t)("common.noMore")), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["title", "description", "model-value", "categories"]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b3d2e31"]]);
export {
  index as default
};

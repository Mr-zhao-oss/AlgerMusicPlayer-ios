import { d as defineComponent, a5 as useI18n, aU as useRouter, aq as onMounted, a8 as createElementBlock, ak as createVNode, as as withCtx, ab as createBaseVNode, ac as toDisplayString, ad as unref, a7 as openBlock, ae as Fragment, af as renderList, a9 as withModifiers, ag as normalizeStyle, aZ as calculateAnimationDelay, aQ as getImgUrl, ah as createCommentVNode, b7 as createTextVNode, aR as formatNumber, be as Scrollbar, A as ref, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { c as getToplist } from "./list-evjySziV.js";
import { n as navigateToMusicList } from "./MusicListNavigator-jSUM_tQ9.js";
import "./music-JQhEZ-U3.js";
const _hoisted_1 = { class: "toplist-page h-full w-full bg-white dark:bg-black transition-colors duration-500" };
const _hoisted_2 = { class: "toplist-content w-full pb-32 pt-6 page-padding" };
const _hoisted_3 = { class: "mb-10" };
const _hoisted_4 = { class: "text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2" };
const _hoisted_5 = { class: "text-neutral-500 dark:text-neutral-400" };
const _hoisted_6 = { class: "toplist-grid-container" };
const _hoisted_7 = {
  key: 0,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
};
const _hoisted_8 = {
  key: 1,
  class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "relative aspect-square overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500" };
const _hoisted_11 = ["src", "alt"];
const _hoisted_12 = {
  key: 0,
  class: "absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
};
const _hoisted_13 = { class: "absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" };
const _hoisted_14 = { class: "mt-3 space-y-1" };
const _hoisted_15 = { class: "text-sm md:text-base font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors" };
const _hoisted_16 = { class: "text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Toplist"
  },
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const router = useRouter();
    const topList = ref([]);
    const loading = ref(false);
    const openToplist = async (item) => {
      try {
        navigateToMusicList(router, {
          id: item.id,
          type: "playlist",
          name: item.name,
          listInfo: item,
          canRemove: false
        });
      } catch (error) {
        console.error("获取榜单详情失败:", error);
      }
    };
    const loadToplist = async () => {
      loading.value = true;
      try {
        const { data } = await getToplist();
        topList.value = data.list || [];
      } catch (error) {
        console.error("加载排行榜列表失败:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      loadToplist();
    });
    return (_ctx, _cache) => {
      const _component_n_scrollbar = Scrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_scrollbar, { class: "h-full" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("h1", _hoisted_4, toDisplayString(unref(t)("comp.toplist")), 1),
                createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("comp.pages.toplist.desc")), 1)
              ]),
              createBaseVNode("div", _hoisted_6, [
                loading.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(15, (i) => {
                    return createBaseVNode("div", {
                      key: i,
                      class: "space-y-3"
                    }, [..._cache[0] || (_cache[0] = [
                      createBaseVNode("div", { class: "aspect-square skeleton-shimmer rounded-2xl" }, null, -1),
                      createBaseVNode("div", { class: "h-4 w-3/4 skeleton-shimmer rounded-lg" }, null, -1),
                      createBaseVNode("div", { class: "h-3 w-1/2 skeleton-shimmer rounded-lg" }, null, -1)
                    ])]);
                  }), 64))
                ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(topList.value, (item, index2) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.id,
                      class: "toplist-card group cursor-pointer animate-item",
                      style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index2, 0.05) }),
                      onClick: withModifiers(($event) => openToplist(item), ["stop"])
                    }, [
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("img", {
                          src: unref(getImgUrl)(item.coverImgUrl, "400y400"),
                          alt: item.name,
                          class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                          loading: "lazy"
                        }, null, 8, _hoisted_11),
                        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center" }, [
                          createBaseVNode("div", { class: "play-icon w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl" }, [
                            createBaseVNode("i", { class: "ri-play-fill text-2xl text-neutral-900 ml-1" })
                          ])
                        ], -1)),
                        item.updateFrequency ? (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(item.updateFrequency), 1)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_13, [
                          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "ri-play-fill" }, null, -1)),
                          createTextVNode(" " + toDisplayString(unref(formatNumber)(item.playCount)), 1)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("h3", _hoisted_15, toDisplayString(item.name), 1),
                        createBaseVNode("p", _hoisted_16, toDisplayString(item.updateFrequency), 1)
                      ])
                    ], 12, _hoisted_9);
                  }), 128))
                ]))
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0662d985"]]);
export {
  index as default
};

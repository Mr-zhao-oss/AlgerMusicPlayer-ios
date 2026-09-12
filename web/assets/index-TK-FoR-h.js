import { d as defineComponent, a5 as useI18n, bh as useRoute, aU as useRouter, bb as usePlayerStore, bf as useSearchStore, E as inject, A as ref, Y as watch, aq as onMounted, a7 as openBlock, a8 as createElementBlock, ab as createBaseVNode, ac as toDisplayString, aa as normalizeClass, ad as unref, ae as Fragment, af as renderList, ak as createVNode, bj as __unplugin_components_2, ed as SEARCH_TYPE, aY as createBlock, bd as _sfc_main$1, ah as createCommentVNode, z as computed, ee as getSearch, ec as SEARCH_TYPES, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { S as SearchItem } from "./SearchItem-CNpnAL99.js";
import "./MusicListNavigator-jSUM_tQ9.js";
import "./music-JQhEZ-U3.js";
import "./MvPlayer-DMP7W4CI.js";
import "./index-Ufy0OYbr.js";
const _hoisted_1 = { class: "mobile-search-result" };
const _hoisted_2 = { class: "header-keyword" };
const _hoisted_3 = { class: "search-types" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_6 = { class: "ml-2" };
const _hoisted_7 = {
  key: 1,
  class: "result-list"
};
const _hoisted_8 = {
  key: 2,
  class: "loading-more"
};
const _hoisted_9 = { class: "ml-2" };
const _hoisted_10 = {
  key: 3,
  class: "no-more"
};
const _hoisted_11 = {
  key: 2,
  class: "empty-state"
};
const ITEMS_PER_PAGE = 30;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t, locale } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const playerStore = usePlayerStore();
    const searchStore = useSearchStore();
    const hasSafeArea = inject("hasSafeArea", false);
    const keyword = ref(route.query.keyword || "");
    const searchType = ref(Number(route.query.type) || searchStore.searchType || 1);
    const searchTypes = computed(() => {
      locale.value;
      return SEARCH_TYPES.map((type) => ({
        label: t(type.label),
        key: type.key
      }));
    });
    const results = ref([]);
    const loading = ref(false);
    const page = ref(1);
    const hasMore = ref(true);
    const isLoadingMore = ref(false);
    const performSearch = async (isLoadMore = false) => {
      if (!keyword.value) return;
      if (isLoadMore) {
        if (!hasMore.value || isLoadingMore.value) return;
        isLoadingMore.value = true;
      } else {
        loading.value = true;
        results.value = [];
        page.value = 1;
        hasMore.value = true;
      }
      try {
        if (searchType.value === SEARCH_TYPE.MUSIC) {
          const { data } = await getSearch({
            keywords: keyword.value,
            type: searchType.value,
            limit: ITEMS_PER_PAGE,
            offset: (page.value - 1) * ITEMS_PER_PAGE
          });
          const songs = (data.result.songs || []).map((item) => {
            var _a;
            return {
              ...item,
              picUrl: (_a = item.al) == null ? void 0 : _a.picUrl,
              artists: item.ar
            };
          });
          if (isLoadMore) {
            results.value = [...results.value, ...songs];
          } else {
            results.value = songs;
          }
          hasMore.value = songs.length === ITEMS_PER_PAGE;
        } else if (searchType.value === SEARCH_TYPE.ALBUM) {
          const { data } = await getSearch({
            keywords: keyword.value,
            type: searchType.value,
            limit: ITEMS_PER_PAGE,
            offset: (page.value - 1) * ITEMS_PER_PAGE
          });
          const albums = (data.result.albums || []).map((item) => {
            var _a;
            return {
              ...item,
              desc: "".concat(((_a = item.artist) == null ? void 0 : _a.name) || "", " ").concat(item.company || ""),
              type: "album"
            };
          });
          if (isLoadMore) {
            results.value = [...results.value, ...albums];
          } else {
            results.value = albums;
          }
          hasMore.value = albums.length === ITEMS_PER_PAGE;
        } else if (searchType.value === SEARCH_TYPE.PLAYLIST) {
          const { data } = await getSearch({
            keywords: keyword.value,
            type: searchType.value,
            limit: ITEMS_PER_PAGE,
            offset: (page.value - 1) * ITEMS_PER_PAGE
          });
          const playlists = (data.result.playlists || []).map((item) => {
            var _a;
            return {
              ...item,
              picUrl: item.coverImgUrl,
              playCount: item.playCount,
              desc: ((_a = item.creator) == null ? void 0 : _a.nickname) || "",
              type: "playlist"
            };
          });
          if (isLoadMore) {
            results.value = [...results.value, ...playlists];
          } else {
            results.value = playlists;
          }
          hasMore.value = playlists.length === ITEMS_PER_PAGE;
        } else if (searchType.value === SEARCH_TYPE.MV) {
          const { data } = await getSearch({
            keywords: keyword.value,
            type: searchType.value,
            limit: ITEMS_PER_PAGE,
            offset: (page.value - 1) * ITEMS_PER_PAGE
          });
          const mvs = (data.result.mvs || []).map((item) => {
            var _a;
            return {
              ...item,
              picUrl: item.cover,
              playCount: item.playCount,
              desc: ((_a = item.artists) == null ? void 0 : _a.map((artist) => artist.name).join("/")) || "",
              type: "mv"
            };
          });
          if (isLoadMore) {
            results.value = [...results.value, ...mvs];
          } else {
            results.value = mvs;
          }
          hasMore.value = mvs.length === ITEMS_PER_PAGE;
        }
        page.value++;
      } catch (error) {
        console.error("搜索失败:", error);
      } finally {
        loading.value = false;
        isLoadingMore.value = false;
      }
    };
    const selectType = (type) => {
      if (searchType.value === type) return;
      searchType.value = type;
      searchStore.searchType = type;
      router.replace({
        query: {
          ...route.query,
          type: type.toString()
        }
      });
      performSearch();
    };
    const handleScroll = (e) => {
      const target = e.target;
      const { scrollTop, scrollHeight, clientHeight } = target;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        performSearch(true);
      }
    };
    const handlePlay = (item) => {
      playerStore.addToNextPlay(item);
    };
    const goBack = () => {
      router.back();
    };
    const openSearch = () => {
      router.push("/mobile-search");
    };
    watch(
      () => route.query,
      (query) => {
        if (route.path === "/mobile-search-result" && query.keyword) {
          keyword.value = query.keyword;
          searchType.value = Number(query.type) || searchStore.searchType || 1;
          performSearch();
        }
      }
    );
    onMounted(() => {
      if (keyword.value) {
        performSearch();
      }
    });
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: normalizeClass(["result-header", { "safe-area-top": unref(hasSafeArea) }])
        }, [
          createBaseVNode("div", {
            class: "header-back",
            onClick: goBack
          }, [..._cache[0] || (_cache[0] = [
            createBaseVNode("i", { class: "ri-arrow-left-s-line" }, null, -1)
          ])]),
          createBaseVNode("div", _hoisted_2, toDisplayString(keyword.value), 1),
          createBaseVNode("div", { class: "header-actions" }, [
            createBaseVNode("div", {
              class: "action-btn",
              onClick: openSearch
            }, [..._cache[1] || (_cache[1] = [
              createBaseVNode("i", { class: "ri-search-line" }, null, -1)
            ])])
          ])
        ], 2),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(searchTypes.value, (type) => {
            return openBlock(), createElementBlock("div", {
              key: type.key,
              class: normalizeClass(["type-tag", { active: searchType.value === type.key }]),
              onClick: ($event) => selectType(type.key)
            }, toDisplayString(type.label), 11, _hoisted_4);
          }), 128))
        ]),
        createBaseVNode("div", {
          class: "result-content",
          onScroll: handleScroll
        }, [
          loading.value && !results.value.length ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(_component_n_spin, { size: "medium" }),
            createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("search.loading.searching")), 1)
          ])) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_7, [
            searchType.value === unref(SEARCH_TYPE).MUSIC ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(results.value, (item) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: item.id,
                item,
                "is-next": true,
                onPlay: handlePlay
              }, null, 8, ["item"]);
            }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(results.value, (item) => {
              return openBlock(), createBlock(SearchItem, {
                key: item.id,
                item,
                class: "mb-3"
              }, null, 8, ["item"]);
            }), 128)),
            isLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createVNode(_component_n_spin, { size: "small" }),
              createBaseVNode("span", _hoisted_9, toDisplayString(unref(t)("search.loading.more")), 1)
            ])) : createCommentVNode("", true),
            !hasMore.value && results.value.length ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(unref(t)("search.noMore")), 1)) : createCommentVNode("", true)
          ])) : !loading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
            _cache[2] || (_cache[2] = createBaseVNode("i", { class: "ri-search-line" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(unref(t)("comp.musicList.noSearchResults")), 1)
          ])) : createCommentVNode("", true)
        ], 32)
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0d2d29f"]]);
export {
  index as default
};

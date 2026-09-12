;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './SearchItem-legacy-CVv33wxW.js', './MusicListNavigator-legacy-0pJHpxez.js', './music-legacy-CGPq9ktk.js', './MvPlayer-legacy-CFWnKFW4.js', './index-legacy-BqM8rotH.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useRoute, useRouter, usePlayerStore, useSearchStore, inject, ref, watch, onMounted, openBlock, createElementBlock, createBaseVNode, toDisplayString, normalizeClass, unref, Fragment, renderList, createVNode, __unplugin_components_2, SEARCH_TYPE, createBlock, _sfc_main$1, createCommentVNode, computed, getSearch, SEARCH_TYPES, _export_sfc, SearchItem;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useRoute = module.bh;
        useRouter = module.aU;
        usePlayerStore = module.bb;
        useSearchStore = module.bf;
        inject = module.E;
        ref = module.A;
        watch = module.Y;
        onMounted = module.aq;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        normalizeClass = module.aa;
        unref = module.ad;
        Fragment = module.ae;
        renderList = module.af;
        createVNode = module.ak;
        __unplugin_components_2 = module.bj;
        SEARCH_TYPE = module.ed;
        createBlock = module.aY;
        _sfc_main$1 = module.bd;
        createCommentVNode = module.ah;
        computed = module.z;
        getSearch = module.ee;
        SEARCH_TYPES = module.ec;
        _export_sfc = module.ap;
      }, module => {
        SearchItem = module.S;
      }, null, null, null, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".mobile-search-result[data-v-c0d2d29f] {\n  position: fixed;\n  inset: 0px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}.mobile-search-result[data-v-c0d2d29f]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}.mobile-search-result[data-v-c0d2d29f] {\n  display: flex;\n  flex-direction: column;\n}\n.result-header[data-v-c0d2d29f] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));\n}\n.result-header[data-v-c0d2d29f]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.result-header.safe-area-top[data-v-c0d2d29f] {\n  padding-top: calc(var(--safe-area-inset-top, 0px) + 12px);\n}\n.header-back[data-v-c0d2d29f] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  border-radius: 9999px;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.header-back[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.header-back[data-v-c0d2d29f]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.header-back[data-v-c0d2d29f]:active:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.header-keyword[data-v-c0d2d29f] {\n  flex: 1 1 0%;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.header-keyword[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.header-keyword[data-v-c0d2d29f] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.header-actions[data-v-c0d2d29f] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.action-btn[data-v-c0d2d29f] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 2.5rem;\n  border-radius: 9999px;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.action-btn[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.action-btn[data-v-c0d2d29f]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.action-btn[data-v-c0d2d29f]:active:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.search-types[data-v-c0d2d29f] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));\n}\n.search-types[data-v-c0d2d29f]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.search-types[data-v-c0d2d29f]::-webkit-scrollbar {\n  display: none;\n}\n.type-tag[data-v-c0d2d29f] {\n  white-space: nowrap;\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.type-tag[data-v-c0d2d29f]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.type-tag[data-v-c0d2d29f] {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.type-tag.active[data-v-c0d2d29f] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.result-content[data-v-c0d2d29f] {\n  flex: 1 1 0%;\n  overflow-y: auto;\n}\n.loading-state[data-v-c0d2d29f] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.loading-state[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.result-list[data-v-c0d2d29f] {\n  padding-bottom: 5rem;\n}\n.loading-more[data-v-c0d2d29f] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.loading-more[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.no-more[data-v-c0d2d29f] {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.no-more[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.empty-state[data-v-c0d2d29f] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.empty-state[data-v-c0d2d29f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.empty-state i[data-v-c0d2d29f] {\n  margin-bottom: 1rem;\n  font-size: 3.75rem;\n  line-height: 1;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "mobile-search-result"
        };
        const _hoisted_2 = {
          class: "header-keyword"
        };
        const _hoisted_3 = {
          class: "search-types"
        };
        const _hoisted_4 = ["onClick"];
        const _hoisted_5 = {
          key: 0,
          class: "loading-state"
        };
        const _hoisted_6 = {
          class: "ml-2"
        };
        const _hoisted_7 = {
          key: 1,
          class: "result-list"
        };
        const _hoisted_8 = {
          key: 2,
          class: "loading-more"
        };
        const _hoisted_9 = {
          class: "ml-2"
        };
        const _hoisted_10 = {
          key: 3,
          class: "no-more"
        };
        const _hoisted_11 = {
          key: 2,
          class: "empty-state"
        };
        const ITEMS_PER_PAGE = 30;
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "index",
          setup(__props) {
            const {
              t,
              locale
            } = useI18n();
            const route = useRoute();
            const router = useRouter();
            const playerStore = usePlayerStore();
            const searchStore = useSearchStore();
            const hasSafeArea = inject("hasSafeArea", false);
            const keyword = ref(route.query.keyword || "");
            const searchType = ref(Number(route.query.type) || searchStore.searchType || 1);
            const searchTypes = computed(() => {
              locale.value;
              return SEARCH_TYPES.map(type => ({
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
                  const {
                    data
                  } = await getSearch({
                    keywords: keyword.value,
                    type: searchType.value,
                    limit: ITEMS_PER_PAGE,
                    offset: (page.value - 1) * ITEMS_PER_PAGE
                  });
                  const songs = (data.result.songs || []).map(item => ({
                    ...item,
                    picUrl: item.al?.picUrl,
                    artists: item.ar
                  }));
                  if (isLoadMore) {
                    results.value = [...results.value, ...songs];
                  } else {
                    results.value = songs;
                  }
                  hasMore.value = songs.length === ITEMS_PER_PAGE;
                } else if (searchType.value === SEARCH_TYPE.ALBUM) {
                  const {
                    data
                  } = await getSearch({
                    keywords: keyword.value,
                    type: searchType.value,
                    limit: ITEMS_PER_PAGE,
                    offset: (page.value - 1) * ITEMS_PER_PAGE
                  });
                  const albums = (data.result.albums || []).map(item => ({
                    ...item,
                    desc: `${item.artist?.name || ""} ${item.company || ""}`,
                    type: "album"
                  }));
                  if (isLoadMore) {
                    results.value = [...results.value, ...albums];
                  } else {
                    results.value = albums;
                  }
                  hasMore.value = albums.length === ITEMS_PER_PAGE;
                } else if (searchType.value === SEARCH_TYPE.PLAYLIST) {
                  const {
                    data
                  } = await getSearch({
                    keywords: keyword.value,
                    type: searchType.value,
                    limit: ITEMS_PER_PAGE,
                    offset: (page.value - 1) * ITEMS_PER_PAGE
                  });
                  const playlists = (data.result.playlists || []).map(item => ({
                    ...item,
                    picUrl: item.coverImgUrl,
                    playCount: item.playCount,
                    desc: item.creator?.nickname || "",
                    type: "playlist"
                  }));
                  if (isLoadMore) {
                    results.value = [...results.value, ...playlists];
                  } else {
                    results.value = playlists;
                  }
                  hasMore.value = playlists.length === ITEMS_PER_PAGE;
                } else if (searchType.value === SEARCH_TYPE.MV) {
                  const {
                    data
                  } = await getSearch({
                    keywords: keyword.value,
                    type: searchType.value,
                    limit: ITEMS_PER_PAGE,
                    offset: (page.value - 1) * ITEMS_PER_PAGE
                  });
                  const mvs = (data.result.mvs || []).map(item => ({
                    ...item,
                    picUrl: item.cover,
                    playCount: item.playCount,
                    desc: item.artists?.map(artist => artist.name).join("/") || "",
                    type: "mv"
                  }));
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
            const selectType = type => {
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
            const handleScroll = e => {
              const target = e.target;
              const {
                scrollTop,
                scrollHeight,
                clientHeight
              } = target;
              if (scrollTop + clientHeight >= scrollHeight - 100) {
                performSearch(true);
              }
            };
            const handlePlay = item => {
              playerStore.addToNextPlay(item);
            };
            const goBack = () => {
              router.back();
            };
            const openSearch = () => {
              router.push("/mobile-search");
            };
            watch(() => route.query, query => {
              if (route.path === "/mobile-search-result" && query.keyword) {
                keyword.value = query.keyword;
                searchType.value = Number(query.type) || searchStore.searchType || 1;
                performSearch();
              }
            });
            onMounted(() => {
              if (keyword.value) {
                performSearch();
              }
            });
            return (_ctx, _cache) => {
              const _component_n_spin = __unplugin_components_2;
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(["result-header", {
                  "safe-area-top": unref(hasSafeArea)
                }])
              }, [createBaseVNode("div", {
                class: "header-back",
                onClick: goBack
              }, [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                class: "ri-arrow-left-s-line"
              }, null, -1)]))]), createBaseVNode("div", _hoisted_2, toDisplayString(keyword.value), 1), createBaseVNode("div", {
                class: "header-actions"
              }, [createBaseVNode("div", {
                class: "action-btn",
                onClick: openSearch
              }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                class: "ri-search-line"
              }, null, -1)]))])])], 2), createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchTypes.value, type => {
                return openBlock(), createElementBlock("div", {
                  key: type.key,
                  class: normalizeClass(["type-tag", {
                    active: searchType.value === type.key
                  }]),
                  onClick: $event => selectType(type.key)
                }, toDisplayString(type.label), 11, _hoisted_4);
              }), 128))]), createBaseVNode("div", {
                class: "result-content",
                onScroll: handleScroll
              }, [loading.value && !results.value.length ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(_component_n_spin, {
                size: "medium"
              }), createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("search.loading.searching")), 1)])) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_7, [searchType.value === unref(SEARCH_TYPE).MUSIC ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(results.value, item => {
                return openBlock(), createBlock(_sfc_main$1, {
                  key: item.id,
                  item,
                  "is-next": true,
                  onPlay: handlePlay
                }, null, 8, ["item"]);
              }), 128)) : (openBlock(true), createElementBlock(Fragment, {
                key: 1
              }, renderList(results.value, item => {
                return openBlock(), createBlock(SearchItem, {
                  key: item.id,
                  item,
                  class: "mb-3"
                }, null, 8, ["item"]);
              }), 128)), isLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(_component_n_spin, {
                size: "small"
              }), createBaseVNode("span", _hoisted_9, toDisplayString(unref(t)("search.loading.more")), 1)])) : createCommentVNode("", true), !hasMore.value && results.value.length ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(unref(t)("search.noMore")), 1)) : createCommentVNode("", true)])) : !loading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                class: "ri-search-line"
              }, null, -1)), createBaseVNode("span", null, toDisplayString(unref(t)("comp.musicList.noSearchResults")), 1)])) : createCommentVNode("", true)], 32)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-c0d2d29f"]]));
      }
    };
  });
})();

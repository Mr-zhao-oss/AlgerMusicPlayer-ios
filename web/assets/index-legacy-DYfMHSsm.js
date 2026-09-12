;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useRouter, useSearchStore, onMounted, createElementBlock, createVNode, withCtx, createBaseVNode, toDisplayString, unref, openBlock, Fragment, renderList, normalizeStyle, calculateAnimationDelay, normalizeClass, createCommentVNode, withModifiers, Scrollbar, ref, getHotSearch, _export_sfc;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useRouter = module.aU;
        useSearchStore = module.bf;
        onMounted = module.aq;
        createElementBlock = module.a8;
        createVNode = module.ak;
        withCtx = module.as;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        unref = module.ad;
        openBlock = module.a7;
        Fragment = module.ae;
        renderList = module.af;
        normalizeStyle = module.ag;
        calculateAnimationDelay = module.aZ;
        normalizeClass = module.aa;
        createCommentVNode = module.ah;
        withModifiers = module.a9;
        Scrollbar = module.be;
        ref = module.A;
        getHotSearch = module.bg;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".search-page-container[data-v-84592c3f] {\n  position: relative;\n}\n.animate-item[data-v-84592c3f] {\n  animation: fadeInUp-84592c3f 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeInUp-84592c3f {\nfrom {\n    opacity: 0;\n    transform: translateY(24px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n.hot-search-card:hover .hot-search-item-count[data-v-84592c3f] {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "search-page-container h-full w-full bg-white dark:bg-black transition-colors duration-500"
        };
        const _hoisted_2 = {
          class: "search-content w-full pb-32 pt-6 page-padding"
        };
        const _hoisted_3 = {
          class: "mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        };
        const _hoisted_4 = {
          class: "text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2"
        };
        const _hoisted_5 = {
          class: "text-neutral-500 dark:text-neutral-400"
        };
        const _hoisted_6 = {
          class: "space-y-12"
        };
        const _hoisted_7 = {
          class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        };
        const _hoisted_8 = ["onClick"];
        const _hoisted_9 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_10 = {
          class: "text-sm font-semibold text-neutral-900 dark:text-white truncate group-hover:text-primary transition-colors"
        };
        const _hoisted_11 = {
          key: 0,
          class: "text-xs text-neutral-400 truncate mt-0.5"
        };
        const _hoisted_12 = {
          key: 0,
          class: "flex-shrink-0"
        };
        const _hoisted_13 = ["src"];
        const _hoisted_14 = {
          key: 0
        };
        const _hoisted_15 = {
          class: "mb-6 flex items-center justify-between"
        };
        const _hoisted_16 = {
          class: "text-xl font-bold text-neutral-900 dark:text-white"
        };
        const _hoisted_17 = {
          class: "flex flex-wrap gap-2"
        };
        const _hoisted_18 = ["onClick"];
        const _hoisted_19 = ["onClick"];
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "Search"
          },
          __name: "index",
          setup(__props) {
            const {
              t
            } = useI18n();
            const router = useRouter();
            const searchStore = useSearchStore();
            const searchHistory = ref([]);
            const loadSearchHistory = () => {
              const history = localStorage.getItem("searchHistory");
              searchHistory.value = history ? JSON.parse(history) : [];
            };
            const saveSearchHistory = (keyword, type) => {
              if (!keyword) return;
              const history = searchHistory.value;
              const index = history.findIndex(item => item.keyword === keyword);
              if (index > -1) {
                history.splice(index, 1);
              }
              history.unshift({
                keyword,
                type
              });
              if (history.length > 20) {
                history.pop();
              }
              searchHistory.value = history;
              localStorage.setItem("searchHistory", JSON.stringify(history));
            };
            const clearSearchHistory = () => {
              searchHistory.value = [];
              localStorage.removeItem("searchHistory");
            };
            const handleCloseSearchHistory = item => {
              searchHistory.value = searchHistory.value.filter(h => h.keyword !== item.keyword);
              localStorage.setItem("searchHistory", JSON.stringify(searchHistory.value));
            };
            const hotSearchData = ref();
            const loadHotSearch = async () => {
              const {
                data
              } = await getHotSearch();
              hotSearchData.value = data;
            };
            const handleSearch = (keyword, type) => {
              const searchType = type ?? searchStore.searchType;
              saveSearchHistory(keyword, searchType);
              searchStore.searchValue = keyword;
              searchStore.searchType = searchType;
              router.push({
                path: "/search-result",
                query: {
                  keyword,
                  type: searchType
                }
              });
            };
            onMounted(() => {
              loadHotSearch();
              loadSearchHistory();
            });
            return (_ctx, _cache) => {
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_scrollbar, {
                class: "h-full"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", null, [createBaseVNode("h1", _hoisted_4, toDisplayString(unref(t)("search.title.hotSearch")), 1), createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("comp.pages.search.desc")), 1)])]), createBaseVNode("div", _hoisted_6, [createBaseVNode("section", null, [createBaseVNode("div", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(hotSearchData.value?.data, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "hot-search-card group flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 cursor-pointer transition-all duration-300 animate-item",
                    style: normalizeStyle({
                      animationDelay: unref(calculateAnimationDelay)(index, 0.03)
                    }),
                    onClick: $event => handleSearch(item.searchWord)
                  }, [createBaseVNode("span", {
                    class: normalizeClass(["flex-shrink-0 w-8 text-lg font-bold italic transition-colors duration-300", index < 3 ? "text-primary" : "text-neutral-300 dark:text-neutral-700"])
                  }, toDisplayString(String(index + 1).padStart(2, "0")), 3), createBaseVNode("div", _hoisted_9, [createBaseVNode("p", _hoisted_10, toDisplayString(item.searchWord), 1), item.content ? (openBlock(), createElementBlock("p", _hoisted_11, toDisplayString(item.content), 1)) : createCommentVNode("", true)]), item.iconUrl ? (openBlock(), createElementBlock("div", _hoisted_12, [createBaseVNode("img", {
                    src: item.iconUrl,
                    class: "h-4 object-contain opacity-80"
                  }, null, 8, _hoisted_13)])) : createCommentVNode("", true)], 12, _hoisted_8);
                }), 128))])]), searchHistory.value.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_14, [createBaseVNode("div", _hoisted_15, [createBaseVNode("h2", _hoisted_16, toDisplayString(unref(t)("search.title.searchHistory")), 1), createBaseVNode("button", {
                  class: "text-xs text-neutral-400 hover:text-red-500 transition-colors",
                  onClick: clearSearchHistory
                }, toDisplayString(unref(t)("search.button.clear")), 1)]), createBaseVNode("div", _hoisted_17, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchHistory.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "group relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all cursor-pointer",
                    onClick: $event => handleSearch(item.keyword, item.type)
                  }, [createBaseVNode("span", null, toDisplayString(item.keyword), 1), createBaseVNode("i", {
                    class: "ri-close-line text-neutral-400 hover:text-red-500 transition-colors",
                    onClick: withModifiers($event => handleCloseSearchHistory(item), ["stop"])
                  }, null, 8, _hoisted_19)], 8, _hoisted_18);
                }), 128))])])) : createCommentVNode("", true)])])]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-84592c3f"]]));
      }
    };
  });
})();

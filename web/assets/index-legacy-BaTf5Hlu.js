;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useRouter, useSearchStore, inject, ref, onMounted, nextTick, openBlock, createElementBlock, createBaseVNode, withDirectives, vModelText, withKeys, createCommentVNode, toDisplayString, unref, normalizeClass, Fragment, renderList, computed, getSearchKeyword, getHotSearch, useDebounceFn, getSearchSuggestions, SEARCH_TYPES, _export_sfc;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useRouter = module.aU;
        useSearchStore = module.bf;
        inject = module.E;
        ref = module.A;
        onMounted = module.aq;
        nextTick = module.a2;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        withDirectives = module.P;
        vModelText = module.aj;
        withKeys = module.ai;
        createCommentVNode = module.ah;
        toDisplayString = module.ac;
        unref = module.ad;
        normalizeClass = module.aa;
        Fragment = module.ae;
        renderList = module.af;
        computed = module.z;
        getSearchKeyword = module.ea;
        getHotSearch = module.bg;
        useDebounceFn = module.db;
        getSearchSuggestions = module.eb;
        SEARCH_TYPES = module.ec;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".mobile-search-page[data-v-7fa429ab] {\n  position: fixed;\n  inset: 0px;\n  z-index: 50;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}.mobile-search-page[data-v-7fa429ab]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}.mobile-search-page[data-v-7fa429ab] {\n  display: flex;\n  flex-direction: column;\n}\n.search-header[data-v-7fa429ab] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 0.25rem;\n  padding-right: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));\n}\n.search-header[data-v-7fa429ab]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.search-header.safe-area-top[data-v-7fa429ab] {\n  padding-top: calc(var(--safe-area-inset-top, 0px) + 12px);\n}\n.header-back[data-v-7fa429ab] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem;\n  border-radius: 9999px;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.header-back[data-v-7fa429ab]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.header-back[data-v-7fa429ab]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.header-back[data-v-7fa429ab]:active:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.search-input-wrapper[data-v-7fa429ab] {\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.search-input-wrapper[data-v-7fa429ab]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.search-input-wrapper[data-v-7fa429ab] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.search-icon[data-v-7fa429ab] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.search-input[data-v-7fa429ab] {\n  flex: 1 1 0%;\n  border-style: none;\n  background-color: transparent;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.search-input[data-v-7fa429ab]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.search-input[data-v-7fa429ab]::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.search-input[data-v-7fa429ab]::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.clear-icon[data-v-7fa429ab] {\n  cursor: pointer;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.search-types[data-v-7fa429ab] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));\n}\n.search-types[data-v-7fa429ab]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.search-types[data-v-7fa429ab]::-webkit-scrollbar {\n  display: none;\n}\n.type-tag[data-v-7fa429ab] {\n  white-space: nowrap;\n  border-radius: 9999px;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.type-tag[data-v-7fa429ab]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.type-tag[data-v-7fa429ab] {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.type-tag.active[data-v-7fa429ab] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.search-content[data-v-7fa429ab] {\n  flex: 1 1 0%;\n  overflow-y: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.search-section[data-v-7fa429ab] {\n  margin-bottom: 1.5rem;\n}\n.section-header[data-v-7fa429ab] {\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.section-title[data-v-7fa429ab] {\n  margin-bottom: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.section-title[data-v-7fa429ab]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.clear-history[data-v-7fa429ab] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.clear-history[data-v-7fa429ab]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.suggestion-list[data-v-7fa429ab] > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.suggestion-item[data-v-7fa429ab] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.suggestion-item[data-v-7fa429ab]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n.suggestion-item[data-v-7fa429ab]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.suggestion-item[data-v-7fa429ab]:active:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.suggestion-item i[data-v-7fa429ab] {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.history-tags[data-v-7fa429ab] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.history-tag[data-v-7fa429ab] {\n  border-radius: 9999px;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.history-tag[data-v-7fa429ab]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.history-tag[data-v-7fa429ab]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.history-tag[data-v-7fa429ab]:active:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));\n}\n.hot-list[data-v-7fa429ab] > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.hot-item[data-v-7fa429ab] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.hot-item[data-v-7fa429ab]:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.hot-item[data-v-7fa429ab]:active:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.hot-rank[data-v-7fa429ab] {\n  width: 1.25rem;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.hot-rank.top[data-v-7fa429ab] {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.hot-word[data-v-7fa429ab] {\n  flex: 1 1 0%;\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.hot-word[data-v-7fa429ab]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n.hot-icon img[data-v-7fa429ab] {\n  height: 1rem;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "mobile-search-page"
        };
        const _hoisted_2 = {
          class: "search-input-wrapper"
        };
        const _hoisted_3 = ["placeholder"];
        const _hoisted_4 = {
          class: "search-types"
        };
        const _hoisted_5 = ["onClick"];
        const _hoisted_6 = {
          class: "search-content"
        };
        const _hoisted_7 = {
          key: 0,
          class: "search-section"
        };
        const _hoisted_8 = {
          class: "section-title"
        };
        const _hoisted_9 = {
          class: "suggestion-list"
        };
        const _hoisted_10 = ["onClick"];
        const _hoisted_11 = {
          key: 1,
          class: "search-section"
        };
        const _hoisted_12 = {
          class: "section-header"
        };
        const _hoisted_13 = {
          class: "section-title"
        };
        const _hoisted_14 = {
          class: "history-tags"
        };
        const _hoisted_15 = ["onClick"];
        const _hoisted_16 = {
          key: 2,
          class: "search-section"
        };
        const _hoisted_17 = {
          class: "section-title"
        };
        const _hoisted_18 = {
          class: "hot-list"
        };
        const _hoisted_19 = ["onClick"];
        const _hoisted_20 = {
          class: "hot-word"
        };
        const _hoisted_21 = {
          key: 0,
          class: "hot-icon"
        };
        const _hoisted_22 = ["src"];
        const HISTORY_KEY = "mobile_search_history";
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "index",
          setup(__props) {
            const {
              t,
              locale
            } = useI18n();
            const router = useRouter();
            const searchStore = useSearchStore();
            const hasSafeArea = inject("hasSafeArea", false);
            const searchValue = ref("");
            const searchInputRef = ref(null);
            const hotSearchKeyword = ref("搜索音乐、歌手、歌单");
            const searchType = ref(searchStore.searchType || 1);
            const searchTypes = computed(() => {
              locale.value;
              return SEARCH_TYPES.map(type => ({
                label: t(type.label),
                key: type.key
              }));
            });
            const suggestions = ref([]);
            const searchHistory = ref([]);
            const hotSearchList = ref([]);
            const loadHotSearchKeyword = async () => {
              try {
                const {
                  data
                } = await getSearchKeyword();
                hotSearchKeyword.value = data.data.showKeyword;
              } catch (e) {
                console.error("加载热门搜索关键词失败:", e);
              }
            };
            const loadHotSearchList = async () => {
              try {
                const {
                  data
                } = await getHotSearch();
                hotSearchList.value = data.data || [];
              } catch (e) {
                console.error("加载热门搜索失败:", e);
              }
            };
            const loadSearchHistory = () => {
              try {
                const history = localStorage.getItem(HISTORY_KEY);
                searchHistory.value = history ? JSON.parse(history) : [];
              } catch (e) {
                console.error("加载搜索历史失败:", e);
                searchHistory.value = [];
              }
            };
            const saveSearchHistory = keyword => {
              if (!keyword.trim()) return;
              const history = searchHistory.value.filter(item => item !== keyword);
              history.unshift(keyword);
              searchHistory.value = history.slice(0, 20);
              localStorage.setItem(HISTORY_KEY, JSON.stringify(searchHistory.value));
            };
            const clearHistory = () => {
              searchHistory.value = [];
              localStorage.removeItem(HISTORY_KEY);
            };
            const debouncedGetSuggestions = useDebounceFn(async keyword => {
              if (!keyword.trim()) {
                suggestions.value = [];
                return;
              }
              suggestions.value = await getSearchSuggestions(keyword);
            }, 300);
            const handleInput = () => {
              debouncedGetSuggestions(searchValue.value);
            };
            const clearSearch = () => {
              searchValue.value = "";
              suggestions.value = [];
            };
            const selectType = type => {
              searchType.value = type;
              searchStore.searchType = type;
            };
            const selectSuggestion = keyword => {
              searchValue.value = keyword;
              handleSearch();
            };
            const handleSearch = () => {
              const keyword = searchValue.value.trim();
              if (!keyword) return;
              saveSearchHistory(keyword);
              router.push({
                path: "/mobile-search-result",
                query: {
                  keyword,
                  type: searchType.value
                }
              });
            };
            const goBack = () => {
              router.back();
            };
            onMounted(() => {
              loadHotSearchKeyword();
              loadHotSearchList();
              loadSearchHistory();
              nextTick(() => {
                searchInputRef.value?.focus();
              });
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(["search-header", {
                  "safe-area-top": unref(hasSafeArea)
                }])
              }, [createBaseVNode("div", {
                class: "header-back",
                onClick: goBack
              }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                class: "ri-arrow-left-s-line"
              }, null, -1)]))]), createBaseVNode("div", _hoisted_2, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                class: "ri-search-line search-icon"
              }, null, -1)), withDirectives(createBaseVNode("input", {
                ref_key: "searchInputRef",
                ref: searchInputRef,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => searchValue.value = $event),
                type: "text",
                class: "search-input",
                placeholder: hotSearchKeyword.value,
                onInput: handleInput,
                onKeydown: withKeys(handleSearch, ["enter"])
              }, null, 40, _hoisted_3), [[vModelText, searchValue.value]]), searchValue.value ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: "ri-close-circle-fill clear-icon",
                onClick: clearSearch
              })) : createCommentVNode("", true)]), createBaseVNode("div", {
                class: "search-button",
                onClick: handleSearch
              }, toDisplayString(unref(t)("common.search")), 1)], 2), createBaseVNode("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchTypes.value, type => {
                return openBlock(), createElementBlock("div", {
                  key: type.key,
                  class: normalizeClass(["type-tag", {
                    active: searchType.value === type.key
                  }]),
                  onClick: $event => selectType(type.key)
                }, toDisplayString(type.label), 11, _hoisted_5);
              }), 128))]), createBaseVNode("div", _hoisted_6, [suggestions.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, toDisplayString(unref(t)("search.suggestions")), 1), createBaseVNode("div", _hoisted_9, [(openBlock(true), createElementBlock(Fragment, null, renderList(suggestions.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "suggestion-item",
                  onClick: $event => selectSuggestion(item)
                }, [_cache[3] || (_cache[3] = createBaseVNode("i", {
                  class: "ri-search-line"
                }, null, -1)), createBaseVNode("span", null, toDisplayString(item), 1)], 8, _hoisted_10);
              }), 128))])])) : searchHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("span", _hoisted_13, toDisplayString(unref(t)("search.history")), 1), createBaseVNode("span", {
                class: "clear-history",
                onClick: clearHistory
              }, toDisplayString(unref(t)("common.clear")), 1)]), createBaseVNode("div", _hoisted_14, [(openBlock(true), createElementBlock(Fragment, null, renderList(searchHistory.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "history-tag",
                  onClick: $event => selectSuggestion(item)
                }, toDisplayString(item), 9, _hoisted_15);
              }), 128))])])) : createCommentVNode("", true), hotSearchList.value.length > 0 && !searchValue.value ? (openBlock(), createElementBlock("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, toDisplayString(unref(t)("search.hot")), 1), createBaseVNode("div", _hoisted_18, [(openBlock(true), createElementBlock(Fragment, null, renderList(hotSearchList.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "hot-item",
                  onClick: $event => selectSuggestion(item.searchWord)
                }, [createBaseVNode("span", {
                  class: normalizeClass(["hot-rank", {
                    top: index < 3
                  }])
                }, toDisplayString(index + 1), 3), createBaseVNode("span", _hoisted_20, toDisplayString(item.searchWord), 1), item.iconUrl ? (openBlock(), createElementBlock("span", _hoisted_21, [createBaseVNode("img", {
                  src: item.iconUrl,
                  alt: ""
                }, null, 8, _hoisted_22)])) : createCommentVNode("", true)], 8, _hoisted_19);
              }), 128))])])) : createCommentVNode("", true)])]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-7fa429ab"]]));
      }
    };
  });
})();

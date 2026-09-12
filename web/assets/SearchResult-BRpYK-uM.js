import { d as defineComponent, a5 as useI18n, bh as useRoute, aU as useRouter, bb as usePlayerStore, bf as useSearchStore, dj as useDownload, A as ref, aX as isMobile, aq as onMounted, Y as watch, a7 as openBlock, a8 as createElementBlock, ak as createVNode, as as withCtx, ab as createBaseVNode, ac as toDisplayString, ad as unref, ae as Fragment, af as renderList, aa as normalizeClass, ed as SEARCH_TYPE, aW as isElectron, ah as createCommentVNode, d9 as __unplugin_components_0, b7 as createTextVNode, bj as __unplugin_components_2, ag as normalizeStyle, aZ as calculateAnimationDelay, bd as _sfc_main$1, be as Scrollbar, bI as PlayBottom, z as computed, ee as getSearch, di as useDateFormat, ec as SEARCH_TYPES, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { S as SearchItem } from "./SearchItem-CNpnAL99.js";
import { u as useScrollTitle } from "./useScrollTitle-DnlGcrFA.js";
import "./MusicListNavigator-jSUM_tQ9.js";
import "./music-JQhEZ-U3.js";
import "./MvPlayer-DMP7W4CI.js";
import "./index-Ufy0OYbr.js";
const _hoisted_1 = { class: "search-result-page h-full w-full bg-white dark:bg-black transition-colors duration-500" };
const _hoisted_2 = { class: "search-result-content pb-32" };
const _hoisted_3 = { class: "header-section page-padding-x pt-8 pb-6" };
const _hoisted_4 = { class: "flex flex-col gap-6" };
const _hoisted_5 = { class: "text-neutral-500 dark:text-neutral-400" };
const _hoisted_6 = { class: "flex items-center gap-2 overflow-x-auto no-scrollbar pb-2" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 0,
  class: "action-bar sticky top-0 z-20 page-padding-x py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800/50"
};
const _hoisted_9 = { class: "flex items-center justify-between gap-4" };
const _hoisted_10 = { class: "flex items-center gap-3" };
const _hoisted_11 = {
  key: 0,
  class: "h-8 w-[1px] bg-neutral-200 dark:bg-neutral-800 mx-1 hidden md:block"
};
const _hoisted_12 = {
  key: 2,
  class: "flex items-center gap-2 animate-in fade-in slide-in-from-left-2"
};
const _hoisted_13 = ["disabled"];
const _hoisted_14 = { class: "flex items-center gap-3" };
const _hoisted_15 = { class: "results-section page-padding-x mt-6" };
const _hoisted_16 = {
  key: 0,
  class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
};
const _hoisted_17 = {
  key: 0,
  class: "song-results-list"
};
const _hoisted_18 = { key: 1 };
const _hoisted_19 = {
  key: 0,
  class: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
};
const _hoisted_20 = {
  key: 1,
  class: "grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
};
const _hoisted_21 = {
  key: 2,
  class: "flex flex-col items-center justify-center py-20 text-neutral-400"
};
const _hoisted_22 = { class: "mt-12 py-8 border-t border-neutral-100 dark:border-neutral-800" };
const _hoisted_23 = {
  key: 0,
  class: "flex flex-col items-center gap-4"
};
const _hoisted_24 = { class: "text-xs text-neutral-400 font-medium tracking-widest uppercase" };
const _hoisted_25 = {
  key: 1,
  class: "text-center"
};
const _hoisted_26 = { class: "text-xs text-neutral-400 font-medium tracking-widest uppercase opacity-50" };
const ITEMS_PER_PAGE = 30;
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "SearchResult"
  },
  __name: "SearchResult",
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();
    const playerStore = usePlayerStore();
    const searchStore = useSearchStore();
    const formatSong = (item) => {
      var _a;
      if (!item) return null;
      return {
        ...item,
        picUrl: ((_a = item.al) == null ? void 0 : _a.picUrl) || item.picUrl,
        song: {
          artists: item.ar || item.artists,
          name: item.name,
          id: item.id
        }
      };
    };
    const searchDetail = ref();
    const searchType = computed(() => searchStore.searchType);
    const searchDetailLoading = ref(false);
    const page = ref(0);
    const hasMore = ref(true);
    const isLoadingMore = ref(false);
    const currentKeyword = computed(() => route.query.keyword || "");
    const titleElRef = ref(null);
    useScrollTitle(currentKeyword, titleElRef);
    const searchTypeOptions = computed(() => {
      return SEARCH_TYPES.map((type) => ({
        label: t(type.label),
        key: type.key
      }));
    });
    const isResultEmpty = computed(() => {
      if (!searchDetail.value) return false;
      return Object.values(searchDetail.value).every((list) => !list || list.length === 0);
    });
    const isSelecting = ref(false);
    const selectedSongs = ref([]);
    const { isDownloading, batchDownloadMusic } = useDownload();
    const isCompactLayout = ref(
      isMobile.value ? false : localStorage.getItem("musicListLayout") === "compact"
    );
    const startSelect = () => {
      isSelecting.value = true;
      selectedSongs.value = [];
    };
    const cancelSelect = () => {
      isSelecting.value = false;
      selectedSongs.value = [];
    };
    const handleSelect = (id, selected) => {
      if (selected) {
        if (!selectedSongs.value.includes(id)) {
          selectedSongs.value.push(id);
        }
      } else {
        selectedSongs.value = selectedSongs.value.filter((i) => i !== id);
      }
    };
    const isAllSelected = computed(
      () => {
        var _a, _b;
        return ((_b = (_a = searchDetail.value) == null ? void 0 : _a.songs) == null ? void 0 : _b.length) > 0 && selectedSongs.value.length === searchDetail.value.songs.length;
      }
    );
    const isIndeterminate = computed(
      () => {
        var _a, _b;
        return selectedSongs.value.length > 0 && selectedSongs.value.length < (((_b = (_a = searchDetail.value) == null ? void 0 : _a.songs) == null ? void 0 : _b.length) || 0);
      }
    );
    const handleSelectAll = (checked) => {
      selectedSongs.value = checked ? searchDetail.value.songs.map((s) => s.id) : [];
    };
    const handleBatchDownload = async () => {
      const list = selectedSongs.value.map((id) => searchDetail.value.songs.find((s) => s.id === id)).filter((s) => s).map(formatSong);
      await batchDownloadMusic(list);
      cancelSelect();
    };
    const toggleLayout = () => {
      isCompactLayout.value = !isCompactLayout.value;
      localStorage.setItem("musicListLayout", isCompactLayout.value ? "compact" : "normal");
    };
    const loadSearch = async (isLoadMore = false) => {
      const keywords = currentKeyword.value;
      if (!keywords) return;
      const type = searchType.value;
      if (!isLoadMore) {
        searchDetail.value = void 0;
        page.value = 0;
        hasMore.value = true;
        searchDetailLoading.value = true;
      } else {
        if (isLoadingMore.value || !hasMore.value) return;
        isLoadingMore.value = true;
      }
      try {
        const { data } = await getSearch({
          keywords,
          type,
          limit: ITEMS_PER_PAGE,
          offset: page.value * ITEMS_PER_PAGE
        });
        const songs = data.result.songs || [];
        const albums = data.result.albums || [];
        const mvs = (data.result.mvs || []).map((item) => ({
          ...item,
          picUrl: item.cover,
          playCount: item.playCount,
          desc: item.artists.map((artist) => artist.name).join("/"),
          type: "mv"
        }));
        const playlists = (data.result.playlists || []).map((item) => ({
          ...item,
          picUrl: item.coverImgUrl,
          playCount: item.playCount,
          desc: item.creator.nickname,
          type: "playlist"
        }));
        const djRadios = (data.result.djRadios || []).map((item) => ({
          ...item,
          picUrl: item.picUrl,
          desc: item.dj.nickname,
          type: "djRadio"
        }));
        songs.forEach((item) => {
          item.picUrl = item.al.picUrl;
          item.artists = item.ar;
        });
        albums.forEach((item) => {
          item.type = "专辑";
          item.desc = "".concat(item.artist.name, " ").concat(item.company, " ").concat(dateFormat(item.publishTime));
        });
        if (isLoadMore && searchDetail.value) {
          searchDetail.value.songs = [...searchDetail.value.songs || [], ...songs];
          searchDetail.value.albums = [...searchDetail.value.albums || [], ...albums];
          searchDetail.value.mvs = [...searchDetail.value.mvs || [], ...mvs];
          searchDetail.value.playlists = [...searchDetail.value.playlists || [], ...playlists];
          searchDetail.value.djRadios = [...searchDetail.value.djRadios || [], ...djRadios];
        } else {
          searchDetail.value = { songs, albums, mvs, playlists, djRadios };
        }
        hasMore.value = songs.length === ITEMS_PER_PAGE || albums.length === ITEMS_PER_PAGE || mvs.length === ITEMS_PER_PAGE || playlists.length === ITEMS_PER_PAGE || djRadios.length === ITEMS_PER_PAGE;
        page.value++;
      } catch (error) {
        console.error(t("search.error.searchFailed"), error);
      } finally {
        searchDetailLoading.value = false;
        isLoadingMore.value = false;
      }
    };
    const handleTypeChange = (type) => {
      searchStore.searchType = type;
      router.replace({
        path: "/search-result",
        query: {
          ...route.query,
          type
        }
      });
    };
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoadingMore.value && hasMore.value) {
        loadSearch(true);
      }
    };
    const dateFormat = (time) => useDateFormat(time, "YYYY.MM.DD").value;
    const handlePlay = (item) => {
      playerStore.addToNextPlay(item);
    };
    const handlePlayAll = () => {
      var _a, _b;
      if (!((_b = (_a = searchDetail.value) == null ? void 0 : _a.songs) == null ? void 0 : _b.length)) return;
      const songs = searchDetail.value.songs.map(formatSong);
      playerStore.setPlayList(songs);
      if (songs[0]) {
        playerStore.setPlay(songs[0]);
      }
    };
    onMounted(() => {
      if (route.query.type) {
        searchStore.searchType = Number(route.query.type);
      }
      if (currentKeyword.value) {
        loadSearch();
      }
    });
    watch(
      () => [route.query.keyword, route.query.type],
      () => {
        if (route.name === "searchResult") {
          if (route.query.type) {
            searchStore.searchType = Number(route.query.type);
          }
          loadSearch();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n_checkbox = __unplugin_components_0;
      const _component_n_spin = __unplugin_components_2;
      const _component_n_scrollbar = Scrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_scrollbar, {
          class: "h-full",
          onScroll: handleScroll
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("section", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", null, [
                      createBaseVNode("h1", {
                        ref_key: "titleElRef",
                        ref: titleElRef,
                        class: "text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-1"
                      }, toDisplayString(currentKeyword.value), 513),
                      createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("search.title.searchList")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(searchTypeOptions.value, (type) => {
                        return openBlock(), createElementBlock("button", {
                          key: type.key,
                          class: normalizeClass([
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap",
                            searchType.value === type.key ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                          ]),
                          onClick: ($event) => handleTypeChange(type.key)
                        }, toDisplayString(type.label), 11, _hoisted_7);
                      }), 128))
                    ])
                  ])
                ]),
                ((_b = (_a = searchDetail.value) == null ? void 0 : _a.songs) == null ? void 0 : _b.length) && searchType.value === unref(SEARCH_TYPE).MUSIC ? (openBlock(), createElementBlock("section", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("button", {
                        class: "play-all-btn flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25",
                        onClick: handlePlayAll
                      }, [
                        _cache[1] || (_cache[1] = createBaseVNode("i", { class: "ri-play-circle-line text-lg" }, null, -1)),
                        createBaseVNode("span", null, toDisplayString(unref(t)("search.button.playAll")), 1)
                      ]),
                      unref(isElectron) ? (openBlock(), createElementBlock("div", _hoisted_11)) : createCommentVNode("", true),
                      !isSelecting.value && unref(isElectron) ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                        onClick: startSelect
                      }, [..._cache[2] || (_cache[2] = [
                        createBaseVNode("i", { class: "ri-checkbox-multiple-line text-lg" }, null, -1)
                      ])])) : createCommentVNode("", true),
                      isSelecting.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
                        createVNode(_component_n_checkbox, {
                          checked: isAllSelected.value,
                          indeterminate: isIndeterminate.value,
                          "onUpdate:checked": handleSelectAll
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("common.selectAll")), 1)
                          ]),
                          _: 1
                        }, 8, ["checked", "indeterminate"]),
                        createBaseVNode("button", {
                          class: "px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition-all",
                          disabled: selectedSongs.value.length === 0 || unref(isDownloading),
                          onClick: handleBatchDownload
                        }, [
                          _cache[3] || (_cache[3] = createBaseVNode("i", { class: "ri-download-line mr-1" }, null, -1)),
                          createTextVNode(" " + toDisplayString(unref(t)("favorite.download", { count: selectedSongs.value.length })), 1)
                        ], 8, _hoisted_13),
                        createBaseVNode("button", {
                          class: "text-xs text-neutral-400 hover:text-neutral-600",
                          onClick: cancelSelect
                        }, toDisplayString(unref(t)("common.cancel")), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      !unref(isMobile) ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                        onClick: toggleLayout
                      }, [
                        createBaseVNode("i", {
                          class: normalizeClass([isCompactLayout.value ? "ri-list-check-2" : "ri-grid-line", "text-lg"])
                        }, null, 2)
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("section", _hoisted_15, [
                  createVNode(_component_n_spin, { show: searchDetailLoading.value }, {
                    default: withCtx(() => {
                      var _a2, _b2;
                      return [
                        searchDetailLoading.value && !isLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(12, (i) => {
                            return createBaseVNode("div", {
                              key: i,
                              class: "space-y-3"
                            }, [..._cache[4] || (_cache[4] = [
                              createBaseVNode("div", { class: "aspect-square skeleton-shimmer rounded-2xl" }, null, -1),
                              createBaseVNode("div", { class: "h-4 w-3/4 skeleton-shimmer rounded-lg" }, null, -1)
                            ])]);
                          }), 64))
                        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          searchType.value === unref(SEARCH_TYPE).MUSIC ? (openBlock(), createElementBlock("div", _hoisted_17, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList((_a2 = searchDetail.value) == null ? void 0 : _a2.songs, (item, index) => {
                              return openBlock(), createElementBlock("div", {
                                key: item.id,
                                class: "mb-2 animate-item",
                                style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index % 30, 0.04) })
                              }, [
                                createVNode(_sfc_main$1, {
                                  index,
                                  item: formatSong(item),
                                  compact: isCompactLayout.value,
                                  selectable: isSelecting.value,
                                  selected: selectedSongs.value.includes(item.id),
                                  "is-next": true,
                                  onPlay: handlePlay,
                                  onSelect: _cache[0] || (_cache[0] = (id, selected) => handleSelect(id, selected))
                                }, null, 8, ["index", "item", "compact", "selectable", "selected"])
                              ], 4);
                            }), 128))
                          ])) : (openBlock(), createElementBlock("div", _hoisted_18, [
                            searchType.value === unref(SEARCH_TYPE).MV ? (openBlock(), createElementBlock("div", _hoisted_19, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList((_b2 = searchDetail.value) == null ? void 0 : _b2.mvs, (item, index) => {
                                return openBlock(), createElementBlock("div", {
                                  key: item.id,
                                  class: "animate-item",
                                  style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index % 30, 0.04) })
                                }, [
                                  createVNode(SearchItem, { item }, null, 8, ["item"])
                                ], 4);
                              }), 128))
                            ])) : (openBlock(), createElementBlock("div", _hoisted_20, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(searchDetail.value, (list, key) => {
                                return openBlock(), createElementBlock(Fragment, { key }, [
                                  key.toString() !== "songs" && key.toString() !== "djRadios" && key.toString() !== "mvs" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(list, (item, index) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: item.id,
                                      class: "animate-item",
                                      style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index % 30, 0.04) })
                                    }, [
                                      createVNode(SearchItem, { item }, null, 8, ["item"])
                                    ], 4);
                                  }), 128)) : createCommentVNode("", true),
                                  key.toString() === "djRadios" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(searchDetail.value.djRadios, (item, index) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: item.id,
                                      class: "animate-item",
                                      style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index % 30, 0.04) })
                                    }, [
                                      createVNode(SearchItem, { item }, null, 8, ["item"])
                                    ], 4);
                                  }), 128)) : createCommentVNode("", true)
                                ], 64);
                              }), 128))
                            ]))
                          ])),
                          !searchDetailLoading.value && isResultEmpty.value ? (openBlock(), createElementBlock("div", _hoisted_21, [
                            _cache[5] || (_cache[5] = createBaseVNode("i", { class: "ri-search-line text-6xl mb-4 opacity-20" }, null, -1)),
                            createBaseVNode("p", null, toDisplayString(unref(t)("comp.musicList.noSearchResults")), 1)
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_22, [
                            isLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                              createVNode(_component_n_spin, { size: "small" }),
                              createBaseVNode("span", _hoisted_24, toDisplayString(unref(t)("search.loading.more")), 1)
                            ])) : createCommentVNode("", true),
                            !hasMore.value && !isResultEmpty.value ? (openBlock(), createElementBlock("div", _hoisted_25, [
                              createBaseVNode("span", _hoisted_26, " — " + toDisplayString(unref(t)("search.noMore")) + " — ", 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ], 64))
                      ];
                    }),
                    _: 1
                  }, 8, ["show"])
                ])
              ])
            ];
          }),
          _: 1
        }),
        createVNode(PlayBottom)
      ]);
    };
  }
});
const SearchResult = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-29584c52"]]);
export {
  SearchResult as default
};

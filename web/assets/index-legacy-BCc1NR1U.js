;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, usePlayerStore, useDownload, onMounted, watch, useRouter, createElementBlock, createBaseVNode, toDisplayString, unref, isElectron, Fragment, renderList, normalizeClass, createTextVNode, createVNode, withCtx, __unplugin_components_0, createCommentVNode, setAnimationClass, openBlock, createBlock, _sfc_main$1, normalizeStyle, Button, Scrollbar, PlayBottom, computed, ref, getMusicDetail, setAnimationDelay, _export_sfc;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        usePlayerStore = module.bb;
        useDownload = module.dj;
        onMounted = module.aq;
        watch = module.Y;
        useRouter = module.aU;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        unref = module.ad;
        isElectron = module.aW;
        Fragment = module.ae;
        renderList = module.af;
        normalizeClass = module.aa;
        createTextVNode = module.b7;
        createVNode = module.ak;
        withCtx = module.as;
        __unplugin_components_0 = module.d9;
        createCommentVNode = module.ah;
        setAnimationClass = module.bv;
        openBlock = module.a7;
        createBlock = module.aY;
        _sfc_main$1 = module.bd;
        normalizeStyle = module.ag;
        Button = module.a1;
        Scrollbar = module.be;
        PlayBottom = module.bI;
        computed = module.z;
        ref = module.A;
        getMusicDetail = module.bw;
        setAnimationDelay = module.bp;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* Scoped styles kept minimal as we use Tailwind classes *//*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          key: 0,
          class: "favorite-page h-full flex flex-col"
        };
        const _hoisted_2 = {
          class: "flex items-center gap-4"
        };
        const _hoisted_3 = {
          class: "text-2xl font-bold text-gray-900 dark:text-white"
        };
        const _hoisted_4 = {
          class: "text-sm text-gray-500 dark:text-gray-400 mt-0.5"
        };
        const _hoisted_5 = {
          key: 0,
          class: "flex items-center gap-3"
        };
        const _hoisted_6 = {
          class: "flex items-center bg-gray-100 dark:bg-neutral-800 rounded-full p-1 h-9"
        };
        const _hoisted_7 = ["onClick"];
        const _hoisted_8 = {
          key: 1,
          class: "flex items-center gap-3 bg-white dark:bg-neutral-800 shadow-sm rounded-full px-4 py-1.5 border border-gray-100 dark:border-neutral-700 h-9"
        };
        const _hoisted_9 = {
          class: "text-xs"
        };
        const _hoisted_10 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_11 = ["disabled"];
        const _hoisted_12 = {
          key: 0,
          class: "h-full flex flex-col items-center justify-center text-gray-400"
        };
        const _hoisted_13 = {
          key: 0,
          class: "pt-4 text-center"
        };
        const _hoisted_14 = {
          key: 1,
          class: "space-y-2 pt-2"
        };
        const _hoisted_15 = {
          key: 2,
          class: "text-center py-8 text-sm text-gray-400 dark:text-gray-500"
        };
        const pageSize = 100;
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "index",
          props: {
            isComponent: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerStore();
            const favoriteList = computed(() => playerStore.favoriteList);
            const favoriteSongs = ref([]);
            const loading = ref(false);
            const noMore = ref(false);
            const isSelecting = ref(false);
            const selectedSongs = ref([]);
            const {
              batchDownloadMusic
            } = useDownload();
            const startSelect = () => {
              isSelecting.value = true;
              selectedSongs.value = [];
            };
            const cancelSelect = () => {
              isSelecting.value = false;
              selectedSongs.value = [];
            };
            const handleSelect = (songId, selected) => {
              if (selected) {
                selectedSongs.value.push(songId);
              } else {
                selectedSongs.value = selectedSongs.value.filter(id => id !== songId);
              }
            };
            const handleBatchDownload = async () => {
              const selectedSongsList = selectedSongs.value.map(songId => favoriteSongs.value.find(s => s.id === songId)).filter(song => song);
              await batchDownloadMusic(selectedSongsList);
              cancelSelect();
            };
            const isDescending = ref(true);
            const toggleSort = descending => {
              if (isDescending.value === descending) return;
              isDescending.value = descending;
              currentPage.value = 1;
              favoriteSongs.value = [];
              noMore.value = false;
              getFavoriteSongs();
            };
            const currentPage = ref(1);
            const props = __props;
            const getCurrentPageIds = () => {
              let ids = [...favoriteList.value];
              if (isDescending.value) {
                ids = ids.reverse();
              }
              const startIndex = (currentPage.value - 1) * pageSize;
              const endIndex = startIndex + pageSize;
              return ids.slice(startIndex, endIndex);
            };
            const getFavoriteSongs = async () => {
              if (favoriteList.value.length === 0) {
                favoriteSongs.value = [];
                return;
              }
              if (props.isComponent && favoriteSongs.value.length >= 16) {
                return;
              }
              loading.value = true;
              try {
                const currentIds = getCurrentPageIds();
                const musicIds = currentIds.filter(id => typeof id === "number");
                let neteaseSongs = [];
                if (musicIds.length > 0) {
                  const res = await getMusicDetail(musicIds);
                  if (res.data.songs) {
                    neteaseSongs = res.data.songs.map(song => ({
                      ...song,
                      picUrl: song.al?.picUrl || "",
                      source: "netease"
                    }));
                  }
                }
                console.log("获取数据统计:", {
                  neteaseSongs: neteaseSongs.length
                });
                const newSongs = currentIds.map(id => {
                  const strId = String(id);
                  const found = neteaseSongs.find(song => String(song.id) === strId);
                  return found;
                }).filter(song => !!song);
                console.log(`最终歌曲列表: ${newSongs.length}首`);
                if (currentPage.value === 1) {
                  favoriteSongs.value = newSongs;
                } else {
                  favoriteSongs.value = [...favoriteSongs.value, ...newSongs];
                }
                noMore.value = favoriteSongs.value.length >= favoriteList.value.length;
              } catch (error) {
                console.error("获取收藏歌曲失败:", error);
              } finally {
                loading.value = false;
              }
            };
            const handleScroll = e => {
              const {
                scrollTop,
                scrollHeight,
                offsetHeight
              } = e.target;
              const threshold = 100;
              if (!loading.value && !noMore.value && scrollHeight - (scrollTop + offsetHeight) < threshold) {
                currentPage.value++;
                getFavoriteSongs();
              }
            };
            const hasLoaded = ref(false);
            onMounted(async () => {
              if (!hasLoaded.value) {
                await playerStore.initializeFavoriteList();
                await getFavoriteSongs();
                hasLoaded.value = true;
              }
            });
            watch(favoriteList, async () => {
              hasLoaded.value = false;
              currentPage.value = 1;
              noMore.value = false;
              await getFavoriteSongs();
              hasLoaded.value = true;
            }, {
              deep: true
            });
            const handlePlay = () => {
              playerStore.setPlayList(favoriteSongs.value);
            };
            const getItemAnimationDelay = index => {
              return setAnimationDelay(index, 30);
            };
            const router = useRouter();
            const handleMore = () => {
              router.push("/history");
            };
            const isAllSelected = computed(() => {
              return favoriteSongs.value.length > 0 && selectedSongs.value.length === favoriteSongs.value.length;
            });
            const isIndeterminate = computed(() => {
              return selectedSongs.value.length > 0 && selectedSongs.value.length < favoriteSongs.value.length;
            });
            const handleSelectAll = checked => {
              if (checked) {
                selectedSongs.value = favoriteSongs.value.map(song => song.id);
              } else {
                selectedSongs.value = [];
              }
            };
            return (_ctx, _cache) => {
              const _component_n_checkbox = __unplugin_components_0;
              const _component_n_button = Button;
              const _component_n_scrollbar = Scrollbar;
              return (__props.isComponent ? favoriteSongs.value.length : true) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: normalizeClass(["flex items-center justify-between px-6 py-4 flex-shrink-0", unref(setAnimationClass)("animate__fadeInLeft")])
              }, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", null, [createBaseVNode("h2", _hoisted_3, toDisplayString(unref(t)("favorite.title")), 1), createBaseVNode("p", _hoisted_4, toDisplayString(unref(t)("favorite.count", {
                count: favoriteList.value.length
              })), 1)])]), !__props.isComponent && unref(isElectron) ? (openBlock(), createElementBlock("div", _hoisted_5, [!isSelecting.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createBaseVNode("div", _hoisted_6, [(openBlock(), createElementBlock(Fragment, null, renderList([true, false], isDesc => {
                return createBaseVNode("button", {
                  key: String(isDesc),
                  class: normalizeClass(["px-3 h-full rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1", isDescending.value === isDesc ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"]),
                  onClick: $event => toggleSort(isDesc)
                }, [createBaseVNode("i", {
                  class: normalizeClass(["text-sm", isDesc ? "ri-sort-desc" : "ri-sort-asc"])
                }, null, 2), createTextVNode(" " + toDisplayString(isDesc ? unref(t)("favorite.descending") : unref(t)("favorite.ascending")), 1)], 10, _hoisted_7);
              }), 64))]), createBaseVNode("button", {
                class: "h-9 px-4 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-medium transition-all duration-300 flex items-center gap-1.5",
                onClick: startSelect
              }, [_cache[0] || (_cache[0] = createBaseVNode("i", {
                class: "ri-checkbox-multiple-line text-sm"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("favorite.batchDownload")), 1)])], 64)) : (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(_component_n_checkbox, {
                checked: isAllSelected.value,
                indeterminate: isIndeterminate.value,
                size: "small",
                "onUpdate:checked": handleSelectAll
              }, {
                default: withCtx(() => [createBaseVNode("span", _hoisted_9, toDisplayString(unref(t)("common.selectAll")), 1)]),
                _: 1
              }, 8, ["checked", "indeterminate"]), _cache[2] || (_cache[2] = createBaseVNode("div", {
                class: "h-3 w-px bg-gray-200 dark:bg-neutral-700 mx-1"
              }, null, -1)), createBaseVNode("div", _hoisted_10, [createBaseVNode("button", {
                class: "h-6 px-3 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1",
                disabled: selectedSongs.value.length === 0,
                onClick: handleBatchDownload
              }, [_cache[1] || (_cache[1] = createBaseVNode("i", {
                class: "ri-download-line"
              }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("favorite.download", {
                count: selectedSongs.value.length
              })), 1)], 8, _hoisted_11), createBaseVNode("button", {
                class: "h-6 px-3 rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 text-xs font-medium hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors",
                onClick: cancelSelect
              }, toDisplayString(unref(t)("common.cancel")), 1)])]))])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(["flex-grow min-h-0 px-2", unref(setAnimationClass)("animate__bounceInRight")])
              }, [createVNode(_component_n_scrollbar, {
                ref: "scrollbarRef",
                class: "h-full pr-4",
                onScroll: handleScroll
              }, {
                default: withCtx(() => [favoriteList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [_cache[3] || (_cache[3] = createBaseVNode("div", {
                  class: "w-24 h-24 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-4"
                }, [createBaseVNode("i", {
                  class: "ri-heart-line text-4xl text-gray-300 dark:text-gray-600"
                })], -1)), createBaseVNode("p", null, toDisplayString(unref(t)("favorite.emptyTip")), 1)])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(["space-y-1 pb-24", {
                    "max-w-[400px]": __props.isComponent
                  }])
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(favoriteSongs.value, (song, index) => {
                  return openBlock(), createBlock(_sfc_main$1, {
                    key: song.id,
                    item: song,
                    favorite: false,
                    class: normalizeClass(["rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors", [unref(setAnimationClass)("animate__bounceInLeft"), {
                      "!bg-primary/10": selectedSongs.value.includes(song.id)
                    }]]),
                    style: normalizeStyle(getItemAnimationDelay(index)),
                    selectable: isSelecting.value,
                    selected: selectedSongs.value.includes(song.id),
                    onPlay: handlePlay,
                    onSelect: handleSelect
                  }, null, 8, ["item", "class", "style", "selectable", "selected"]);
                }), 128)), __props.isComponent ? (openBlock(), createElementBlock("div", _hoisted_13, [createVNode(_component_n_button, {
                  text: "",
                  type: "primary",
                  onClick: handleMore
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.viewMore")) + " ", 1), _cache[4] || (_cache[4] = createBaseVNode("i", {
                    class: "ri-arrow-right-s-line ml-1"
                  }, null, -1))]),
                  _: 1
                })])) : createCommentVNode("", true), loading.value ? (openBlock(), createElementBlock("div", _hoisted_14, [(openBlock(), createElementBlock(Fragment, null, renderList(5, i => {
                  return createBaseVNode("div", {
                    key: i,
                    class: "flex items-center gap-4 rounded-xl p-2 animate-pulse"
                  }, [...(_cache[5] || (_cache[5] = [createBaseVNode("div", {
                    class: "h-12 w-12 rounded-xl bg-gray-200 dark:bg-neutral-800"
                  }, null, -1), createBaseVNode("div", {
                    class: "flex-1 space-y-2"
                  }, [createBaseVNode("div", {
                    class: "h-4 w-1/3 rounded bg-gray-200 dark:bg-neutral-800"
                  }), createBaseVNode("div", {
                    class: "h-3 w-1/4 rounded bg-gray-200 dark:bg-neutral-800"
                  })], -1)]))]);
                }), 64))])) : createCommentVNode("", true), noMore.value ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(unref(t)("common.noMore")), 1)) : createCommentVNode("", true)], 2))]),
                _: 1
              }, 512), createVNode(PlayBottom)], 2)])) : createCommentVNode("", true);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const Favorite = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-83e96eec"]]));
      }
    };
  });
})();

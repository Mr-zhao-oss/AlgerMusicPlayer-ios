;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './Tabs-legacy-Dw_wmx3F.js', './VirtualList-legacy-nZVZUnH5.js', './Add-legacy-CnU6_mh8.js', './VirtualList-legacy-Dp4NcZuw.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useMessage, usePlayerStore, ref, isMobile, onMounted, openBlock, createElementBlock, createBaseVNode, createVNode, withCtx, toDisplayString, unref, __unplugin_components_2, createTextVNode, __unplugin_components_3, normalizeClass, createCommentVNode, Fragment, renderList, createBlock, _sfc_main$1, __unplugin_components_2$2, PlayBottom, computed, getHistoryRecommendDates, getHistoryRecommendSongs, _export_sfc, __unplugin_components_2$1, __unplugin_components_3$1, __unplugin_components_1;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useMessage = module.bt;
        usePlayerStore = module.bb;
        ref = module.A;
        isMobile = module.aX;
        onMounted = module.aq;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        createVNode = module.ak;
        withCtx = module.as;
        toDisplayString = module.ac;
        unref = module.ad;
        __unplugin_components_2 = module.bs;
        createTextVNode = module.b7;
        __unplugin_components_3 = module.dg;
        normalizeClass = module.aa;
        createCommentVNode = module.ah;
        Fragment = module.ae;
        renderList = module.af;
        createBlock = module.aY;
        _sfc_main$1 = module.bd;
        __unplugin_components_2$2 = module.bj;
        PlayBottom = module.bI;
        computed = module.z;
        getHistoryRecommendDates = module.e8;
        getHistoryRecommendSongs = module.e9;
        _export_sfc = module.ap;
      }, module => {
        __unplugin_components_2$1 = module._;
        __unplugin_components_3$1 = module.a;
      }, module => {
        __unplugin_components_1 = module._;
      }, null, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "@charset \"UTF-8\";\n.history-recommend-page[data-v-c67d6321]{\n  margin-right: 0.5rem;\n  height: 100%;\n  border-radius: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 249 250 / var(--tw-bg-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.history-recommend-page[data-v-c67d6321]:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 22 22 / var(--tw-bg-opacity, 1));\n}\n.music-header[data-v-c67d6321]{\n  display: flex;\n  height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.music-title[data-v-c67d6321]{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.music-title[data-v-c67d6321]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.music-content[data-v-c67d6321]{\n  height: calc(100% - 60px);\n}\n.music-list[data-v-c67d6321]{\n  min-height: 0px;\n  flex-grow: 1;\n}\n.music-list-container[data-v-c67d6321]{\n  position: relative;\n  display: flex;\n  min-height: 0px;\n  width: 100%;\n  flex-grow: 1;\n  flex-direction: column;\n}\n.music-list-content[data-v-c67d6321]{\n  min-height: calc(80vh - 60px);\n}\n.date-tabs-wrapper[data-v-c67d6321]{\n  margin-bottom: 1rem;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.action-button[data-v-c67d6321]{\n  display: flex;\n  height: 2rem;\n  width: 2rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.action-button[data-v-c67d6321]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(222 226 230 / var(--tw-bg-opacity, 1));\n}\n.action-button[data-v-c67d6321]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.action-button[data-v-c67d6321]:hover:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1));\n}\n.action-button .icon[data-v-c67d6321]{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.action-button.hover-green:hover .icon[data-v-c67d6321]{\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n\n/* 虚拟列表样式 */\n.song-virtual-list[data-v-c67d6321]{\n  width: 100%;\n}\n.song-virtual-list[data-v-c67d6321] .n-virtual-list__scroll {\n  scrollbar-width: thin;\n}\n.song-virtual-list[data-v-c67d6321] .n-virtual-list__scroll::-webkit-scrollbar {\n  width: 4px;\n}\n.song-virtual-list[data-v-c67d6321] .n-virtual-list__scroll::-webkit-scrollbar-thumb{\n  border-radius: 0.25rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));\n}\n.song-virtual-list[data-v-c67d6321] .n-virtual-list__scroll:is(.dark *)::-webkit-scrollbar-thumb{\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));\n}\n.double-item[data-v-c67d6321]{\n  margin-bottom: 0.5rem;\n  width: 100%;\n  border-radius: 1.5rem;\n  background-color: rgb(233 236 239 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.3;\n}\n.double-item[data-v-c67d6321]:is(.dark *){\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.2;\n}\n.empty-state[data-v-c67d6321]{\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.empty-state[data-v-c67d6321]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.empty-state .icon[data-v-c67d6321]{\n  margin-bottom: 1rem;\n  font-size: 3.75rem;\n  line-height: 1;\n}\n.empty-state p[data-v-c67d6321]{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n[data-v-c67d6321] .n-tabs-rail{\n  overflow: hidden !important;\n  border-radius: 0.75rem !important;\n}\n[data-v-c67d6321] .n-tabs-rail .n-tabs-capsule{\n  border-radius: 0.75rem !important;\n}\n.date-tabs-wrapper[data-v-c67d6321] .n-tabs-rail{\n  overflow: hidden !important;\n  border-radius: 0.75rem !important;\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)) !important;\n}\n.date-tabs-wrapper[data-v-c67d6321] .n-tabs-rail:is(.dark *){\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1)) !important;\n}\n.date-tabs-wrapper[data-v-c67d6321] .n-tabs-rail .n-tabs-capsule{\n  border-radius: 0.75rem !important;\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1)) !important;\n}\n.date-tabs-wrapper[data-v-c67d6321] .n-tabs-rail .n-tabs-capsule:is(.dark *){\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1)) !important;\n}\n.date-tabs-wrapper[data-v-c67d6321] .n-tabs-rail .n-tabs-tab--active{\n  --tw-text-opacity: 1 !important;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;\n}\n.layout-toggle .toggle-button[data-v-c67d6321]{\n  display: flex;\n  height: 2rem;\n  width: 2rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.layout-toggle .toggle-button[data-v-c67d6321]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(222 226 230 / var(--tw-bg-opacity, 1));\n}\n.layout-toggle .toggle-button[data-v-c67d6321]:hover:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1));\n}\n.layout-toggle .toggle-button .icon[data-v-c67d6321]{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.layout-toggle .toggle-button .icon[data-v-c67d6321]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "history-recommend-page"
        };
        const _hoisted_2 = {
          class: "music-header h-12 flex items-center justify-between"
        };
        const _hoisted_3 = {
          class: "music-title"
        };
        const _hoisted_4 = {
          class: "flex-grow flex-1 flex items-center justify-end gap-2"
        };
        const _hoisted_5 = {
          key: 0,
          class: "layout-toggle"
        };
        const _hoisted_6 = {
          key: 0,
          class: "date-tabs-wrapper"
        };
        const _hoisted_7 = {
          class: "music-content"
        };
        const _hoisted_8 = {
          key: 0,
          class: "music-list-container"
        };
        const _hoisted_9 = {
          class: "music-list"
        };
        const _hoisted_10 = {
          class: "music-list-content"
        };
        const _hoisted_11 = {
          class: "double-item"
        };
        const _hoisted_12 = {
          key: 0,
          class: "h-36"
        };
        const _hoisted_13 = {
          key: 1,
          class: "empty-state"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "HistoryRecommend",
          setup(__props) {
            const {
              t
            } = useI18n();
            const message = useMessage();
            const playerStore = usePlayerStore();
            const availableDates = ref([]);
            const selectedDate = ref("");
            const songs = ref([]);
            const loadingDates = ref(false);
            const loadingSongs = ref(false);
            const isCompactLayout = ref(isMobile.value ? false : localStorage.getItem("musicListLayout") === "compact");
            const displayedDates = computed(() => {
              return availableDates.value.slice(0, 10);
            });
            const formatDate = dateStr => {
              const date = new Date(dateStr);
              const today = /* @__PURE__ */new Date();
              const yesterday = new Date(today);
              yesterday.setDate(yesterday.getDate() - 1);
              if (date.toDateString() === today.toDateString()) {
                return t("common.today");
              } else if (date.toDateString() === yesterday.toDateString()) {
                return t("common.yesterday");
              }
              const month = date.getMonth() + 1;
              const day = date.getDate();
              return `${month}月${day}日`;
            };
            const formatSong = item => {
              if (!item) return null;
              return {
                ...item,
                picUrl: item.al?.picUrl || item.album?.picUrl || item.picUrl,
                song: {
                  artists: item.ar || item.artists || [],
                  name: item.al?.name || item.album?.name || item.name,
                  id: item.al?.id || item.album?.id || item.id
                }
              };
            };
            const fetchAvailableDates = async () => {
              try {
                loadingDates.value = true;
                const {
                  data
                } = await getHistoryRecommendDates();
                if (data?.data?.dates) {
                  availableDates.value = data.data.dates;
                  if (availableDates.value.length > 0) {
                    selectedDate.value = availableDates.value[0];
                    await fetchSongsByDate(selectedDate.value);
                  }
                }
              } catch (error) {
                console.error("获取历史日推日期列表失败:", error);
                message.error(t("comp.musicList.fetchDatesFailed"));
              } finally {
                loadingDates.value = false;
              }
            };
            const fetchSongsByDate = async date => {
              try {
                loadingSongs.value = true;
                const {
                  data
                } = await getHistoryRecommendSongs(date);
                if (data?.data?.songs) {
                  songs.value = data.data.songs;
                } else {
                  songs.value = [];
                }
              } catch (error) {
                console.error("获取历史日推歌曲失败:", error);
                message.error(t("comp.musicList.fetchSongsFailed"));
                songs.value = [];
              } finally {
                loadingSongs.value = false;
              }
            };
            const handleDateChange = async date => {
              selectedDate.value = date;
              await fetchSongsByDate(date);
            };
            const toggleLayout = () => {
              isCompactLayout.value = !isCompactLayout.value;
              localStorage.setItem("musicListLayout", isCompactLayout.value ? "compact" : "normal");
            };
            const addToPlaylist = () => {
              if (songs.value.length === 0) return;
              const currentList = playerStore.playList;
              const newSongs = songs.value.filter(song => !currentList.some(item => item.id === song.id));
              if (newSongs.length === 0) {
                message.info(t("comp.musicList.songsAlreadyInPlaylist"));
                return;
              }
              const newList = [...currentList, ...newSongs.map(formatSong)];
              playerStore.setPlayList(newList);
              message.success(t("comp.musicList.addToPlaylistSuccess", {
                count: newSongs.length
              }));
            };
            const handlePlay = () => {
              if (songs.value.length === 0) return;
              playerStore.setPlayList(songs.value.map(formatSong));
            };
            const handlePlayAll = () => {
              if (songs.value.length === 0) return;
              playerStore.setPlayList(songs.value.map(formatSong));
              playerStore.setPlay(formatSong(songs.value[0]));
            };
            onMounted(() => {
              fetchAvailableDates();
            });
            return (_ctx, _cache) => {
              const _component_n_ellipsis = __unplugin_components_2;
              const _component_n_tooltip = __unplugin_components_3;
              const _component_n_tab = __unplugin_components_2$1;
              const _component_n_tabs = __unplugin_components_3$1;
              const _component_n_virtual_list = __unplugin_components_1;
              const _component_n_spin = __unplugin_components_2$2;
              return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_n_ellipsis, {
                "line-clamp": 1,
                class: "flex-shrink-0 mr-3"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_3, toDisplayString(unref(t)("comp.musicList.historyRecommend")), 1)]),
                _: 1
              }), createBaseVNode("div", _hoisted_4, [createVNode(_component_n_tooltip, {
                placement: "bottom",
                trigger: "hover"
              }, {
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: "action-button hover-green",
                  onClick: handlePlayAll
                }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                  class: "icon iconfont ri-play-fill"
                }, null, -1)]))])]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("comp.musicList.playAll")), 1)]),
                _: 1
              }), createVNode(_component_n_tooltip, {
                placement: "bottom",
                trigger: "hover"
              }, {
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: "action-button hover-green",
                  onClick: addToPlaylist
                }, [...(_cache[2] || (_cache[2] = [createBaseVNode("i", {
                  class: "icon iconfont ri-add-line"
                }, null, -1)]))])]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("comp.musicList.addToPlaylist")), 1)]),
                _: 1
              }), !unref(isMobile) ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(_component_n_tooltip, {
                placement: "bottom",
                trigger: "hover"
              }, {
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: "toggle-button hover-green",
                  onClick: toggleLayout
                }, [createBaseVNode("i", {
                  class: normalizeClass(["icon iconfont", isCompactLayout.value ? "ri-list-check-2" : "ri-grid-line"])
                }, null, 2)])]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(isCompactLayout.value ? unref(t)("comp.musicList.switchToNormal") : unref(t)("comp.musicList.switchToCompact")), 1)]),
                _: 1
              })])) : createCommentVNode("", true)])]), availableDates.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(_component_n_tabs, {
                value: selectedDate.value,
                "onUpdate:value": [_cache[0] || (_cache[0] = $event => selectedDate.value = $event), handleDateChange],
                type: "segment",
                animated: "",
                size: "large"
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(displayedDates.value, date => {
                  return openBlock(), createBlock(_component_n_tab, {
                    key: date,
                    name: date,
                    tab: formatDate(date)
                  }, null, 8, ["name", "tab"]);
                }), 128))]),
                _: 1
              }, 8, ["value"])])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_7, [createVNode(_component_n_spin, {
                show: loadingDates.value || loadingSongs.value
              }, {
                default: withCtx(() => [songs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createVNode(_component_n_virtual_list, {
                  class: "song-virtual-list",
                  style: {
                    "max-height": "calc(100vh - 200px)"
                  },
                  items: songs.value,
                  "item-size": isCompactLayout.value ? 50 : 70,
                  "item-resizable": "",
                  "key-field": "id"
                }, {
                  default: withCtx(({
                    item,
                    index
                  }) => [createBaseVNode("div", null, [createBaseVNode("div", _hoisted_11, [createVNode(_sfc_main$1, {
                    index,
                    compact: isCompactLayout.value,
                    item: formatSong(item),
                    onPlay: handlePlay
                  }, null, 8, ["index", "compact", "item"])]), index === songs.value.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_12)) : createCommentVNode("", true)])]),
                  _: 1
                }, 8, ["items", "item-size"])])])])) : !loadingSongs.value && selectedDate.value ? (openBlock(), createElementBlock("div", _hoisted_13, [_cache[3] || (_cache[3] = createBaseVNode("i", {
                  class: "icon iconfont ri-disc-line"
                }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("comp.musicList.noSongs")), 1)])) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["show"])]), createVNode(PlayBottom)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const HistoryRecommend = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-c67d6321"]]));
      }
    };
  });
})();

import { d as defineComponent, a5 as useI18n, bt as useMessage, bb as usePlayerStore, A as ref, aX as isMobile, aq as onMounted, a7 as openBlock, a8 as createElementBlock, ab as createBaseVNode, ak as createVNode, as as withCtx, ac as toDisplayString, ad as unref, bs as __unplugin_components_2, b7 as createTextVNode, dg as __unplugin_components_3, aa as normalizeClass, ah as createCommentVNode, ae as Fragment, af as renderList, aY as createBlock, bd as _sfc_main$1, bj as __unplugin_components_2$2, bI as PlayBottom, z as computed, e8 as getHistoryRecommendDates, e9 as getHistoryRecommendSongs, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { _ as __unplugin_components_2$1, a as __unplugin_components_3$1 } from "./Tabs-8m4e6uMb.js";
import { _ as __unplugin_components_1 } from "./VirtualList-D43SwD_y.js";
import "./Add-CaNEP7Ig.js";
import "./VirtualList-C8MUTgFm.js";
const _hoisted_1 = { class: "history-recommend-page" };
const _hoisted_2 = { class: "music-header h-12 flex items-center justify-between" };
const _hoisted_3 = { class: "music-title" };
const _hoisted_4 = { class: "flex-grow flex-1 flex items-center justify-end gap-2" };
const _hoisted_5 = {
  key: 0,
  class: "layout-toggle"
};
const _hoisted_6 = {
  key: 0,
  class: "date-tabs-wrapper"
};
const _hoisted_7 = { class: "music-content" };
const _hoisted_8 = {
  key: 0,
  class: "music-list-container"
};
const _hoisted_9 = { class: "music-list" };
const _hoisted_10 = { class: "music-list-content" };
const _hoisted_11 = { class: "double-item" };
const _hoisted_12 = {
  key: 0,
  class: "h-36"
};
const _hoisted_13 = {
  key: 1,
  class: "empty-state"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HistoryRecommend",
  setup(__props) {
    const { t } = useI18n();
    const message = useMessage();
    const playerStore = usePlayerStore();
    const availableDates = ref([]);
    const selectedDate = ref("");
    const songs = ref([]);
    const loadingDates = ref(false);
    const loadingSongs = ref(false);
    const isCompactLayout = ref(
      isMobile.value ? false : localStorage.getItem("musicListLayout") === "compact"
    );
    const displayedDates = computed(() => {
      return availableDates.value.slice(0, 10);
    });
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const today = /* @__PURE__ */ new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (date.toDateString() === today.toDateString()) {
        return t("common.today");
      } else if (date.toDateString() === yesterday.toDateString()) {
        return t("common.yesterday");
      }
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return "".concat(month, "月").concat(day, "日");
    };
    const formatSong = (item) => {
      var _a, _b, _c, _d, _e, _f;
      if (!item) return null;
      return {
        ...item,
        picUrl: ((_a = item.al) == null ? void 0 : _a.picUrl) || ((_b = item.album) == null ? void 0 : _b.picUrl) || item.picUrl,
        song: {
          artists: item.ar || item.artists || [],
          name: ((_c = item.al) == null ? void 0 : _c.name) || ((_d = item.album) == null ? void 0 : _d.name) || item.name,
          id: ((_e = item.al) == null ? void 0 : _e.id) || ((_f = item.album) == null ? void 0 : _f.id) || item.id
        }
      };
    };
    const fetchAvailableDates = async () => {
      var _a;
      try {
        loadingDates.value = true;
        const { data } = await getHistoryRecommendDates();
        if ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.dates) {
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
    const fetchSongsByDate = async (date) => {
      var _a;
      try {
        loadingSongs.value = true;
        const { data } = await getHistoryRecommendSongs(date);
        if ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.songs) {
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
    const handleDateChange = async (date) => {
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
      const newSongs = songs.value.filter((song) => !currentList.some((item) => item.id === song.id));
      if (newSongs.length === 0) {
        message.info(t("comp.musicList.songsAlreadyInPlaylist"));
        return;
      }
      const newList = [...currentList, ...newSongs.map(formatSong)];
      playerStore.setPlayList(newList);
      message.success(t("comp.musicList.addToPlaylistSuccess", { count: newSongs.length }));
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_n_ellipsis, {
            "line-clamp": 1,
            class: "flex-shrink-0 mr-3"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_3, toDisplayString(unref(t)("comp.musicList.historyRecommend")), 1)
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_n_tooltip, {
              placement: "bottom",
              trigger: "hover"
            }, {
              trigger: withCtx(() => [
                createBaseVNode("div", {
                  class: "action-button hover-green",
                  onClick: handlePlayAll
                }, [..._cache[1] || (_cache[1] = [
                  createBaseVNode("i", { class: "icon iconfont ri-play-fill" }, null, -1)
                ])])
              ]),
              default: withCtx(() => [
                createTextVNode(" " + toDisplayString(unref(t)("comp.musicList.playAll")), 1)
              ]),
              _: 1
            }),
            createVNode(_component_n_tooltip, {
              placement: "bottom",
              trigger: "hover"
            }, {
              trigger: withCtx(() => [
                createBaseVNode("div", {
                  class: "action-button hover-green",
                  onClick: addToPlaylist
                }, [..._cache[2] || (_cache[2] = [
                  createBaseVNode("i", { class: "icon iconfont ri-add-line" }, null, -1)
                ])])
              ]),
              default: withCtx(() => [
                createTextVNode(" " + toDisplayString(unref(t)("comp.musicList.addToPlaylist")), 1)
              ]),
              _: 1
            }),
            !unref(isMobile) ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createVNode(_component_n_tooltip, {
                placement: "bottom",
                trigger: "hover"
              }, {
                trigger: withCtx(() => [
                  createBaseVNode("div", {
                    class: "toggle-button hover-green",
                    onClick: toggleLayout
                  }, [
                    createBaseVNode("i", {
                      class: normalizeClass(["icon iconfont", isCompactLayout.value ? "ri-list-check-2" : "ri-grid-line"])
                    }, null, 2)
                  ])
                ]),
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(isCompactLayout.value ? unref(t)("comp.musicList.switchToNormal") : unref(t)("comp.musicList.switchToCompact")), 1)
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])
        ]),
        availableDates.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(_component_n_tabs, {
            value: selectedDate.value,
            "onUpdate:value": [
              _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
              handleDateChange
            ],
            type: "segment",
            animated: "",
            size: "large"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(displayedDates.value, (date) => {
                return openBlock(), createBlock(_component_n_tab, {
                  key: date,
                  name: date,
                  tab: formatDate(date)
                }, null, 8, ["name", "tab"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["value"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_n_spin, {
            show: loadingDates.value || loadingSongs.value
          }, {
            default: withCtx(() => [
              songs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_n_virtual_list, {
                      class: "song-virtual-list",
                      style: { "max-height": "calc(100vh - 200px)" },
                      items: songs.value,
                      "item-size": isCompactLayout.value ? 50 : 70,
                      "item-resizable": "",
                      "key-field": "id"
                    }, {
                      default: withCtx(({ item, index }) => [
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_11, [
                            createVNode(_sfc_main$1, {
                              index,
                              compact: isCompactLayout.value,
                              item: formatSong(item),
                              onPlay: handlePlay
                            }, null, 8, ["index", "compact", "item"])
                          ]),
                          index === songs.value.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_12)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }, 8, ["items", "item-size"])
                  ])
                ])
              ])) : !loadingSongs.value && selectedDate.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                _cache[3] || (_cache[3] = createBaseVNode("i", { class: "icon iconfont ri-disc-line" }, null, -1)),
                createBaseVNode("p", null, toDisplayString(unref(t)("comp.musicList.noSongs")), 1)
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["show"])
        ]),
        createVNode(PlayBottom)
      ]);
    };
  }
});
const HistoryRecommend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c67d6321"]]);
export {
  HistoryRecommend as default
};

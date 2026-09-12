import { d as defineComponent, a8 as createElementBlock, ak as createVNode, br as __unplugin_components_1, ab as createBaseVNode, bs as __unplugin_components_2, as as withCtx, b7 as createTextVNode, ac as toDisplayString, ah as createCommentVNode, a9 as withModifiers, a7 as openBlock, a5 as useI18n, aY as createBlock, ad as unref, aQ as getImgUrl, bt as useMessage, aU as useRouter, bu as usePlayHistoryStore, b5 as useUserStore, bb as usePlayerStore, aq as onMounted, Y as watch, ae as Fragment, af as renderList, aa as normalizeClass, bv as setAnimationClass, be as Scrollbar, ag as normalizeStyle, bp as setAnimationDelay, bd as _sfc_main$5, aX as isMobile, P as withDirectives, a6 as vShow, A as ref, bw as getMusicDetail, bx as getRecentSongs, by as getRecentPlaylists, bz as getRecentAlbums, ap as _export_sfc } from "./index-BMNXZoHW.js";
import Favorite from "./index-C5KMoRX4.js";
import { n as navigateToMusicList } from "./MusicListNavigator-jSUM_tQ9.js";
import { m as mapDjProgramToSongResult } from "./podcastUtils-CNldpqcK.js";
import "./music-JQhEZ-U3.js";
const _hoisted_1$2 = { class: "flex-1 min-w-0" };
const _hoisted_2$1 = { class: "text-base text-gray-900 dark:text-white mb-1" };
const _hoisted_3$1 = { class: "text-sm text-gray-500 dark:text-gray-400 truncate" };
const _hoisted_4$1 = {
  key: 0,
  class: "px-4 text-lg text-center min-w-[60px] text-gray-600 dark:text-gray-400 flex-shrink-0"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HistoryItem",
  props: {
    imageUrl: {},
    name: {},
    description: {},
    count: {},
    showCount: { type: Boolean },
    showDelete: { type: Boolean }
  },
  emits: ["click", "delete"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_n_image = __unplugin_components_1;
      const _component_n_ellipsis = __unplugin_components_2;
      return openBlock(), createElementBlock("div", {
        class: "flex items-center gap-3 px-2 py-2 mb-2 rounded-xl cursor-pointer transition-colors duration-200 bg-light-100 dark:bg-dark-100 hover:bg-light-200 dark:hover:bg-dark-200",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click"))
      }, [
        createVNode(_component_n_image, {
          src: __props.imageUrl,
          class: "w-[60px] h-[60px] flex-shrink-0 rounded-xl bg-light-300 dark:bg-dark-300",
          lazy: "",
          "preview-disabled": ""
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(_component_n_ellipsis, { "line-clamp": 1 }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.name), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_3$1, toDisplayString(__props.description), 1)
        ]),
        __props.showCount && __props.count ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(__props.count), 1)) : createCommentVNode("", true),
        __props.showDelete ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "cursor-pointer rounded-full border-2 w-8 h-8 flex flex-shrink-0 justify-center items-center border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-red-500 hover:text-red-500 transition-colors duration-200",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("delete"), ["stop"]))
        }, [..._cache[2] || (_cache[2] = [
          createBaseVNode("i", { class: "iconfont icon-close" }, null, -1)
        ])])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AlbumItem",
  props: {
    item: {},
    showCount: { type: Boolean, default: false },
    showDelete: { type: Boolean, default: false }
  },
  emits: ["click", "delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const getDescription = () => {
      var _a;
      const parts = [];
      if ((_a = props.item.artist) == null ? void 0 : _a.name) parts.push(props.item.artist.name);
      if (props.item.size !== void 0) parts.push(t("common.songCount", { count: props.item.size }));
      return parts.join(" · ") || t("history.noDescription");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, {
        "image-url": unref(getImgUrl)(__props.item.picUrl || "", "100y100"),
        name: __props.item.name,
        description: getDescription(),
        count: __props.item.count,
        "show-count": __props.showCount,
        "show-delete": __props.showDelete,
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", __props.item)),
        onDelete: _cache[1] || (_cache[1] = ($event) => emit("delete", __props.item))
      }, null, 8, ["image-url", "name", "description", "count", "show-count", "show-delete"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PlaylistItem",
  props: {
    item: {},
    showCount: { type: Boolean, default: false },
    showDelete: { type: Boolean, default: false }
  },
  emits: ["click", "delete"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const getDescription = () => {
      var _a;
      const parts = [];
      if (props.item.trackCount !== void 0)
        parts.push(t("user.playlist.trackCount", { count: props.item.trackCount }));
      if ((_a = props.item.creator) == null ? void 0 : _a.nickname) parts.push(props.item.creator.nickname);
      return parts.join(" · ") || t("history.noDescription");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, {
        "image-url": unref(getImgUrl)(__props.item.coverImgUrl || __props.item.picUrl || "", "100y100"),
        name: __props.item.name,
        description: getDescription(),
        count: __props.item.count,
        "show-count": __props.showCount,
        "show-delete": __props.showDelete,
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", __props.item)),
        onDelete: _cache[1] || (_cache[1] = ($event) => emit("delete", __props.item))
      }, null, 8, ["image-url", "name", "description", "count", "show-count", "show-delete"]);
    };
  }
});
const _hoisted_1$1 = { class: "history-page h-full flex flex-col" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _hoisted_3 = { class: "text-lg md:text-2xl font-bold text-gray-900 dark:text-white" };
const _hoisted_4 = { class: "flex items-center justify-between gap-4" };
const _hoisted_5 = { class: "bg-gray-100 dark:bg-neutral-800 p-1 rounded-full inline-flex h-8 md:h-9 items-center overflow-x-auto no-scrollbar max-w-full" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = {
  key: 0,
  class: "flex items-center bg-gray-100 dark:bg-neutral-800 rounded-full p-1 h-8 md:h-9 flex-shrink-0"
};
const _hoisted_8 = { class: "pb-24 space-y-1" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "mb-4 px-2" };
const _hoisted_11 = { class: "flex items-center bg-gray-100 dark:bg-neutral-800 rounded-full p-1 w-fit h-8" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { key: 1 };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = {
  key: 4,
  class: "text-center py-12 text-gray-400"
};
const _hoisted_17 = {
  key: 5,
  class: "space-y-2 pt-2"
};
const _hoisted_18 = {
  key: 6,
  class: "text-center py-8 text-sm text-gray-400 dark:text-gray-500"
};
const pageSize = 100;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const message = useMessage();
    const router = useRouter();
    const playHistoryStore = usePlayHistoryStore();
    const userStore = useUserStore();
    const scrollbarRef = ref();
    const loading = ref(false);
    const noMore = ref(false);
    const displayList = ref([]);
    const playerStore = usePlayerStore();
    const hasLoaded = ref(false);
    const currentCategory = ref("songs");
    const currentTab = ref("local");
    const cloudRecords = ref([]);
    const cloudPlaylists = ref([]);
    const cloudAlbums = ref([]);
    const currentPodcastSubTab = ref("episodes");
    const currentPage = ref(1);
    const getCloudRecords = async () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_a = userStore.user) == null ? void 0 : _a.userId) || userStore.loginType !== "cookie") {
        message.warning(t("history.needLogin"));
        return [];
      }
      try {
        const res = await getRecentSongs(1e3);
        if ((_c = (_b = res.data) == null ? void 0 : _b.data) == null ? void 0 : _c.list) {
          return res.data.data.list.map((item) => {
            var _a2;
            return {
              id: (_a2 = item.data) == null ? void 0 : _a2.id,
              playTime: item.playTime,
              source: "netease",
              count: 1,
              data: item.data
            };
          });
        }
        return [];
      } catch (error) {
        console.error(t("history.getCloudRecordFailed"), error);
        if (((_d = error == null ? void 0 : error.response) == null ? void 0 : _d.status) !== 301 && ((_f = (_e = error == null ? void 0 : error.response) == null ? void 0 : _e.data) == null ? void 0 : _f.code) !== -2) {
          message.error(t("history.getCloudRecordFailed"));
        }
        return [];
      }
    };
    const getCloudPlaylists = async () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_a = userStore.user) == null ? void 0 : _a.userId) || userStore.loginType !== "cookie") {
        message.warning(t("history.needLogin"));
        return [];
      }
      try {
        const res = await getRecentPlaylists(100);
        if ((_c = (_b = res.data) == null ? void 0 : _b.data) == null ? void 0 : _c.list) {
          return res.data.data.list.map((item) => {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g;
            return {
              id: (_a2 = item.data) == null ? void 0 : _a2.id,
              name: (_b2 = item.data) == null ? void 0 : _b2.name,
              coverImgUrl: (_c2 = item.data) == null ? void 0 : _c2.coverImgUrl,
              picUrl: (_d2 = item.data) == null ? void 0 : _d2.picUrl,
              trackCount: (_e2 = item.data) == null ? void 0 : _e2.trackCount,
              playCount: (_f2 = item.data) == null ? void 0 : _f2.playCount,
              creator: (_g = item.data) == null ? void 0 : _g.creator,
              playTime: item.playTime
            };
          });
        }
        return [];
      } catch (error) {
        console.error(t("history.getCloudRecordFailed"), error);
        if (((_d = error == null ? void 0 : error.response) == null ? void 0 : _d.status) !== 301 && ((_f = (_e = error == null ? void 0 : error.response) == null ? void 0 : _e.data) == null ? void 0 : _f.code) !== -2) {
          message.error(t("history.getCloudRecordFailed"));
        }
        return [];
      }
    };
    const getCloudAlbums = async () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_a = userStore.user) == null ? void 0 : _a.userId) || userStore.loginType !== "cookie") {
        message.warning(t("history.needLogin"));
        return [];
      }
      try {
        const res = await getRecentAlbums(100);
        if ((_c = (_b = res.data) == null ? void 0 : _b.data) == null ? void 0 : _c.list) {
          return res.data.data.list.map((item) => {
            var _a2, _b2, _c2, _d2, _e2;
            return {
              id: (_a2 = item.data) == null ? void 0 : _a2.id,
              name: (_b2 = item.data) == null ? void 0 : _b2.name,
              picUrl: (_c2 = item.data) == null ? void 0 : _c2.picUrl,
              size: (_d2 = item.data) == null ? void 0 : _d2.size,
              artist: (_e2 = item.data) == null ? void 0 : _e2.artist,
              playTime: item.playTime
            };
          });
        }
        return [];
      } catch (error) {
        console.error(t("history.getCloudRecordFailed"), error);
        if (((_d = error == null ? void 0 : error.response) == null ? void 0 : _d.status) !== 301 && ((_f = (_e = error == null ? void 0 : error.response) == null ? void 0 : _e.data) == null ? void 0 : _f.code) !== -2) {
          message.error(t("history.getCloudRecordFailed"));
        }
        return [];
      }
    };
    const getCurrentList = () => {
      if (currentCategory.value === "songs") {
        switch (currentTab.value) {
          case "local":
            return playHistoryStore.musicHistory;
          case "cloud":
            return cloudRecords.value.filter((item) => item.id);
        }
      } else if (currentCategory.value === "playlists") {
        switch (currentTab.value) {
          case "local":
            return playHistoryStore.playlistHistory;
          case "cloud":
            return cloudPlaylists.value;
        }
      } else if (currentCategory.value === "albums") {
        switch (currentTab.value) {
          case "local":
            return playHistoryStore.albumHistory;
          case "cloud":
            return cloudAlbums.value;
        }
      } else if (currentCategory.value === "podcasts") {
        if (currentPodcastSubTab.value === "episodes") {
          return playHistoryStore.podcastHistory;
        } else {
          return playHistoryStore.podcastRadioHistory;
        }
      }
      return [];
    };
    const handleCategoryChange = async (value) => {
      currentCategory.value = value;
      currentPage.value = 1;
      noMore.value = false;
      displayList.value = [];
      if (value === "podcasts") {
        currentTab.value = "local";
      }
      if (currentTab.value === "cloud") {
        loading.value = true;
        if (value === "songs" && cloudRecords.value.length === 0) {
          cloudRecords.value = await getCloudRecords();
        } else if (value === "playlists" && cloudPlaylists.value.length === 0) {
          cloudPlaylists.value = await getCloudPlaylists();
        } else if (value === "albums" && cloudAlbums.value.length === 0) {
          cloudAlbums.value = await getCloudAlbums();
        }
        loading.value = false;
      }
      await loadHistoryData();
    };
    const handlePlaylistClick = async (item) => {
      try {
        navigateToMusicList(router, {
          id: item.id,
          type: "playlist",
          name: item.name,
          listInfo: item,
          canRemove: false
        });
      } catch (error) {
        console.error("打开歌单失败:", error);
        message.error("打开歌单失败");
      }
    };
    const handleAlbumClick = async (item) => {
      try {
        navigateToMusicList(router, {
          id: item.id,
          type: "album",
          name: item.name,
          listInfo: {
            ...item,
            coverImgUrl: item.picUrl || item.coverImgUrl
          },
          canRemove: false
        });
      } catch (error) {
        console.error("打开专辑失败:", error);
        message.error("打开专辑失败");
      }
    };
    const handleDelPlaylist = (item) => {
      playHistoryStore.delPlaylist(item);
      displayList.value = displayList.value.filter((playlist) => playlist.id !== item.id);
    };
    const handleDelAlbum = (item) => {
      playHistoryStore.delAlbum(item);
      displayList.value = displayList.value.filter((album) => album.id !== item.id);
    };
    const mapDjProgramToSong = (program) => {
      return mapDjProgramToSongResult(program);
    };
    const mapPodcastRadioToPlaylistItem = (radio) => {
      var _a;
      return {
        id: radio.id,
        name: radio.name,
        picUrl: radio.picUrl,
        coverImgUrl: radio.picUrl,
        desc: ((_a = radio.dj) == null ? void 0 : _a.nickname) || radio.desc,
        type: "podcast"
      };
    };
    const handlePlayPodcast = (item) => {
      const song = mapDjProgramToSong(item);
      playerStore.setPlay(song);
    };
    const handlePodcastRadioClick = (item) => {
      router.push({
        name: "podcastRadio",
        params: { id: item.id }
      });
    };
    const handleDelPodcast = (item) => {
      playHistoryStore.delPodcast(item);
      displayList.value = displayList.value.filter((p) => p.id !== item.id);
    };
    const handleDelPodcastRadio = (item) => {
      playHistoryStore.delPodcastRadio(item);
      displayList.value = displayList.value.filter((r) => r.id !== item.id);
    };
    const loadHistoryData = async () => {
      const currentList = getCurrentList();
      if (currentList.length === 0) {
        displayList.value = [];
        return;
      }
      loading.value = true;
      try {
        const startIndex = (currentPage.value - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentPageItems = currentList.slice(startIndex, endIndex);
        if (currentCategory.value === "songs") {
          const localItems = [];
          const neteaseItems = [];
          currentPageItems.forEach((item) => {
            var _a;
            if (((_a = item.playMusicUrl) == null ? void 0 : _a.startsWith("local://")) || typeof item.id === "string") {
              localItems.push(item);
            } else if (item.source !== "bilibili") {
              neteaseItems.push(item);
            }
          });
          let neteaseSongs = [];
          if (neteaseItems.length > 0) {
            try {
              const currentIds = neteaseItems.map((item) => item.id);
              const res = await getMusicDetail(currentIds);
              if (res.data.songs) {
                neteaseSongs = res.data.songs.map((song) => {
                  var _a;
                  const historyItem = neteaseItems.find((item) => item.id === song.id);
                  return {
                    ...song,
                    picUrl: ((_a = song.al) == null ? void 0 : _a.picUrl) || "",
                    count: (historyItem == null ? void 0 : historyItem.count) || 0,
                    source: "netease"
                  };
                });
              }
            } catch (error) {
              console.error("获取歌曲详情失败:", error);
            }
          }
          const newSongs = currentPageItems.map((item) => {
            var _a;
            if (((_a = item.playMusicUrl) == null ? void 0 : _a.startsWith("local://")) || typeof item.id === "string") {
              return item;
            }
            return neteaseSongs.find((song) => song.id === item.id);
          }).filter((song) => !!song);
          if (currentPage.value === 1) {
            displayList.value = newSongs;
          } else {
            displayList.value = [...displayList.value, ...newSongs];
          }
        } else {
          if (currentPage.value === 1) {
            displayList.value = currentPageItems;
          } else {
            displayList.value = [...displayList.value, ...currentPageItems];
          }
        }
        const totalLength = getCurrentList().length;
        noMore.value = displayList.value.length >= totalLength;
      } catch (error) {
        console.error(t("history.getHistoryFailed"), error);
      } finally {
        loading.value = false;
      }
    };
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target;
      const threshold = 100;
      if (!loading.value && !noMore.value && scrollHeight - (scrollTop + offsetHeight) < threshold) {
        currentPage.value++;
        loadHistoryData();
      }
    };
    const handlePlay = () => {
      playerStore.setPlayList(displayList.value);
    };
    const handleTabChange = async (value) => {
      currentTab.value = value;
      currentPage.value = 1;
      noMore.value = false;
      displayList.value = [];
      if (value === "cloud") {
        loading.value = true;
        if (currentCategory.value === "songs" && cloudRecords.value.length === 0) {
          cloudRecords.value = await getCloudRecords();
        } else if (currentCategory.value === "playlists" && cloudPlaylists.value.length === 0) {
          cloudPlaylists.value = await getCloudPlaylists();
        } else if (currentCategory.value === "albums" && cloudAlbums.value.length === 0) {
          cloudAlbums.value = await getCloudAlbums();
        }
        loading.value = false;
      }
      await loadHistoryData();
    };
    onMounted(async () => {
      if (!hasLoaded.value) {
        await loadHistoryData();
        hasLoaded.value = true;
      }
    });
    watch(
      () => [
        playHistoryStore.musicHistory,
        playHistoryStore.playlistHistory,
        playHistoryStore.albumHistory,
        playHistoryStore.podcastHistory,
        playHistoryStore.podcastRadioHistory
      ],
      async () => {
        if (hasLoaded.value) {
          currentPage.value = 1;
          noMore.value = false;
          await loadHistoryData();
        }
      },
      { deep: true }
    );
    const handleDelMusic = async (item) => {
      playHistoryStore.delMusic(item);
      displayList.value = displayList.value.filter((music) => music.id !== item.id);
    };
    const handleNavigateToHeatmap = () => {
      router.push("/heatmap");
    };
    return (_ctx, _cache) => {
      const _component_n_scrollbar = Scrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: normalizeClass(["flex flex-col gap-4 px-4 md:px-6 pt-3 md:pt-4 pb-2 flex-shrink-0", unref(setAnimationClass)("animate__fadeInRight")])
        }, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h2", _hoisted_3, toDisplayString(unref(t)("history.title")), 1),
            createBaseVNode("button", {
              class: "h-8 px-3 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-600 dark:text-gray-300 text-xs font-medium transition-colors flex items-center gap-1.5",
              onClick: handleNavigateToHeatmap
            }, [
              _cache[4] || (_cache[4] = createBaseVNode("i", { class: "ri-calendar-2-line" }, null, -1)),
              createTextVNode(" " + toDisplayString(unref(t)("history.heatmapTitle")), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["songs", "playlists", "albums", "podcasts"], (tab) => {
                return createBaseVNode("div", {
                  key: tab,
                  class: normalizeClass([
                    "px-3 md:px-4 h-6 md:h-7 rounded-full text-[11px] md:text-xs font-medium cursor-pointer transition-all duration-300 flex items-center justify-center whitespace-nowrap",
                    currentCategory.value === tab ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  ]),
                  onClick: ($event) => handleCategoryChange(tab)
                }, toDisplayString(unref(t)("history.categoryTabs.".concat(tab))), 11, _hoisted_6);
              }), 64))
            ]),
            currentCategory.value !== "podcasts" ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createBaseVNode("button", {
                class: normalizeClass([
                  "px-3 h-6 md:h-7 rounded-full text-[11px] md:text-xs font-medium transition-all duration-300",
                  currentTab.value === "local" ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                ]),
                onClick: _cache[0] || (_cache[0] = ($event) => handleTabChange("local"))
              }, toDisplayString(unref(t)("history.tabs.local")), 3),
              createBaseVNode("button", {
                class: normalizeClass([
                  "px-3 h-6 md:h-7 rounded-full text-[11px] md:text-xs font-medium transition-all duration-300",
                  currentTab.value === "cloud" ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700"
                ]),
                onClick: _cache[1] || (_cache[1] = ($event) => handleTabChange("cloud"))
              }, toDisplayString(unref(t)("history.tabs.cloud")), 3)
            ])) : createCommentVNode("", true)
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["flex-grow min-h-0 px-2 mt-2", unref(setAnimationClass)("animate__bounceInLeft")])
        }, [
          createVNode(_component_n_scrollbar, {
            ref_key: "scrollbarRef",
            ref: scrollbarRef,
            class: "h-full pr-4",
            size: 100,
            onScroll: handleScroll
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_8, [
                currentCategory.value === "songs" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(displayList.value, (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: normalizeClass(["group flex items-center justify-between rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors p-1", unref(setAnimationClass)("animate__bounceInRight")]),
                    style: normalizeStyle(unref(setAnimationDelay)(index2, 30))
                  }, [
                    createVNode(_sfc_main$5, {
                      class: "flex-1 !bg-transparent hover:!bg-transparent",
                      item,
                      onPlay: handlePlay
                    }, null, 8, ["item"]),
                    !unref(isMobile) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      withDirectives(createBaseVNode("div", { class: "px-4 text-xs text-gray-400 dark:text-gray-600 font-medium min-w-[60px] text-right" }, toDisplayString(unref(t)("history.playCount", { count: item.count })), 513), [
                        [vShow, currentTab.value === "local"]
                      ]),
                      withDirectives(createBaseVNode("div", {
                        class: "w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer transition-all opacity-0 group-hover:opacity-100",
                        onClick: ($event) => handleDelMusic(item)
                      }, [..._cache[5] || (_cache[5] = [
                        createBaseVNode("i", { class: "ri-close-line text-lg" }, null, -1)
                      ])], 8, _hoisted_9), [
                        [vShow, currentTab.value === "local"]
                      ])
                    ], 64)) : createCommentVNode("", true)
                  ], 6);
                }), 128)) : createCommentVNode("", true),
                currentCategory.value === "playlists" ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(displayList.value, (item, index2) => {
                  return openBlock(), createBlock(_sfc_main$2, {
                    key: item.id,
                    item,
                    "show-count": currentTab.value === "local",
                    "show-delete": currentTab.value === "local",
                    class: normalizeClass(["rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors", unref(setAnimationClass)("animate__bounceInRight")]),
                    style: normalizeStyle(unref(setAnimationDelay)(index2, 30)),
                    onClick: ($event) => handlePlaylistClick(item),
                    onDelete: ($event) => handleDelPlaylist(item)
                  }, null, 8, ["item", "show-count", "show-delete", "class", "style", "onClick", "onDelete"]);
                }), 128)) : createCommentVNode("", true),
                currentCategory.value === "albums" ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(displayList.value, (item, index2) => {
                  return openBlock(), createBlock(_sfc_main$3, {
                    key: item.id,
                    item,
                    "show-count": currentTab.value === "local",
                    "show-delete": currentTab.value === "local",
                    class: normalizeClass(["rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors", unref(setAnimationClass)("animate__bounceInRight")]),
                    style: normalizeStyle(unref(setAnimationDelay)(index2, 30)),
                    onClick: ($event) => handleAlbumClick(item),
                    onDelete: ($event) => handleDelAlbum(item)
                  }, null, 8, ["item", "show-count", "show-delete", "class", "style", "onClick", "onDelete"]);
                }), 128)) : createCommentVNode("", true),
                currentCategory.value === "podcasts" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("button", {
                        class: normalizeClass([
                          "px-3 h-6 rounded-full text-xs font-medium transition-all duration-300",
                          currentPodcastSubTab.value === "episodes" ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        ]),
                        onClick: _cache[2] || (_cache[2] = ($event) => {
                          currentPodcastSubTab.value = "episodes";
                          loadHistoryData();
                        })
                      }, toDisplayString(unref(t)("history.podcastTabs.episodes")), 3),
                      createBaseVNode("button", {
                        class: normalizeClass([
                          "px-3 h-6 rounded-full text-xs font-medium transition-all duration-300",
                          currentPodcastSubTab.value === "radios" ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                        ]),
                        onClick: _cache[3] || (_cache[3] = ($event) => {
                          currentPodcastSubTab.value = "radios";
                          loadHistoryData();
                        })
                      }, toDisplayString(unref(t)("history.podcastTabs.radios")), 3)
                    ])
                  ]),
                  currentPodcastSubTab.value === "episodes" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(displayList.value, (item, index2) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: normalizeClass(["group flex items-center justify-between rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors p-1", unref(setAnimationClass)("animate__bounceInRight")]),
                        style: normalizeStyle(unref(setAnimationDelay)(index2, 30))
                      }, [
                        createVNode(_sfc_main$5, {
                          class: "flex-1 !bg-transparent hover:!bg-transparent",
                          item: mapDjProgramToSong(item),
                          onPlay: ($event) => handlePlayPodcast(item)
                        }, null, 8, ["item", "onPlay"]),
                        createBaseVNode("div", {
                          class: "w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer transition-all opacity-0 group-hover:opacity-100",
                          onClick: ($event) => handleDelPodcast(item)
                        }, [..._cache[6] || (_cache[6] = [
                          createBaseVNode("i", { class: "ri-close-line text-lg" }, null, -1)
                        ])], 8, _hoisted_13)
                      ], 6);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_14, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(displayList.value, (item, index2) => {
                      return openBlock(), createElementBlock("div", {
                        key: item.id,
                        class: normalizeClass(["group flex items-center justify-between rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors", unref(setAnimationClass)("animate__bounceInRight")]),
                        style: normalizeStyle(unref(setAnimationDelay)(index2, 30))
                      }, [
                        createVNode(_sfc_main$2, {
                          class: "flex-1 !bg-transparent hover:!bg-transparent",
                          item: mapPodcastRadioToPlaylistItem(item),
                          onClick: ($event) => handlePodcastRadioClick(item)
                        }, null, 8, ["item", "onClick"]),
                        createBaseVNode("div", {
                          class: "w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer transition-all opacity-0 group-hover:opacity-100 mr-2",
                          onClick: ($event) => handleDelPodcastRadio(item)
                        }, [..._cache[7] || (_cache[7] = [
                          createBaseVNode("i", { class: "ri-close-line text-lg" }, null, -1)
                        ])], 8, _hoisted_15)
                      ], 6);
                    }), 128))
                  ]))
                ], 64)) : createCommentVNode("", true),
                displayList.value.length === 0 && !loading.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  _cache[8] || (_cache[8] = createBaseVNode("div", { class: "w-20 h-20 mx-auto rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center mb-4" }, [
                    createBaseVNode("i", { class: "ri-history-line text-3xl text-gray-300 dark:text-gray-600" })
                  ], -1)),
                  createBaseVNode("p", null, toDisplayString(unref(t)("history.noData")), 1)
                ])) : createCommentVNode("", true),
                loading.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(8, (i) => {
                    return createBaseVNode("div", {
                      key: i,
                      class: "flex items-center gap-4 rounded-xl p-2 animate-pulse"
                    }, [..._cache[9] || (_cache[9] = [
                      createBaseVNode("div", { class: "h-12 w-12 rounded-xl bg-gray-200 dark:bg-neutral-800" }, null, -1),
                      createBaseVNode("div", { class: "flex-1 space-y-2" }, [
                        createBaseVNode("div", { class: "h-4 w-1/3 rounded bg-gray-200 dark:bg-neutral-800" }),
                        createBaseVNode("div", { class: "h-3 w-1/4 rounded bg-gray-200 dark:bg-neutral-800" })
                      ], -1)
                    ])]);
                  }), 64))
                ])) : createCommentVNode("", true),
                noMore.value && displayList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_18, toDisplayString(unref(t)("common.noMore")), 1)) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 512)
        ], 2)
      ]);
    };
  }
});
const HistoryList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-56cc2eda"]]);
const _hoisted_1 = { class: "flex gap-6 h-full pb-4 page-padding pt-6 bg-white dark:bg-black" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "History"
  },
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        !unref(isMobile) ? (openBlock(), createBlock(Favorite, {
          key: 0,
          class: "flex-item"
        })) : createCommentVNode("", true),
        createVNode(HistoryList, { class: "flex-item" })
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3b6ccd79"]]);
export {
  index as default
};

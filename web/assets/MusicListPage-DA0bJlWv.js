import { d as defineComponent, a5 as useI18n, bh as useRoute, bb as usePlayerStore, b3 as useRecommendStore, b5 as useUserStore, bt as useMessage, bu as usePlayHistoryStore, Y as watch, dj as useDownload, A as ref, aX as isMobile, aq as onMounted, a7 as openBlock, a8 as createElementBlock, ak as createVNode, as as withCtx, ab as createBaseVNode, bj as __unplugin_components_2, ag as normalizeStyle, ad as unref, aQ as getImgUrl, br as __unplugin_components_1, aa as normalizeClass, a9 as withModifiers, ah as createCommentVNode, ac as toDisplayString, bH as __unplugin_components_1$1, aW as isElectron, d9 as __unplugin_components_0, b7 as createTextVNode, ae as Fragment, af as renderList, aZ as calculateAnimationDelay, bd as _sfc_main$1, be as Scrollbar, bI as PlayBottom, z as computed, dk as updatePlaylistTracks, dl as hasPermission, dm as getLoginErrorMessage, dn as subscribeAlbum, dp as subscribePlaylist, a2 as nextTick, bw as getMusicDetail, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { l } from "./main-Bco1MTsi.js";
import { g as getAlbum, a as getListDetail } from "./list-evjySziV.js";
import { u as useScrollTitle } from "./useScrollTitle-DnlGcrFA.js";
import { u as useMusicStore } from "./music-JQhEZ-U3.js";
import { _ as __unplugin_components_0$1 } from "./Input-C2vwYCZR.js";
const _hoisted_1 = { class: "music-list-page h-full w-full bg-white dark:bg-black transition-colors duration-500" };
const _hoisted_2 = { class: "music-list-content pb-32" };
const _hoisted_3 = { class: "hero-section relative overflow-hidden rounded-tl-2xl" };
const _hoisted_4 = { class: "hero-bg absolute inset-0 -top-20" };
const _hoisted_5 = { class: "hero-content relative z-10 page-padding-x pt-4 md:pt-10 pb-8" };
const _hoisted_6 = { class: "flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-end" };
const _hoisted_7 = { class: "cover-wrapper relative group" };
const _hoisted_8 = { class: "cover-container relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-neutral-800/50" };
const _hoisted_9 = { class: "playlist-info flex-1 text-center md:text-left" };
const _hoisted_10 = { class: "playlist-badge mb-3" };
const _hoisted_11 = { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider" };
const _hoisted_12 = { class: "flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6" };
const _hoisted_13 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_14 = { class: "text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:text-primary cursor-pointer transition-colors" };
const _hoisted_15 = {
  key: 1,
  class: "flex items-center gap-2"
};
const _hoisted_16 = { class: "text-sm font-semibold text-neutral-700 dark:text-neutral-200" };
const _hoisted_17 = { class: "text-sm text-neutral-500 dark:text-neutral-400" };
const _hoisted_18 = {
  key: 0,
  class: "text-sm md:text-base text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed max-w-3xl"
};
const _hoisted_19 = {
  key: 0,
  class: "action-bar sticky top-0 z-20 page-padding-x py-3 md:py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800/50"
};
const _hoisted_20 = { class: "flex items-center justify-between gap-4" };
const _hoisted_21 = { class: "flex items-center gap-3" };
const _hoisted_22 = {
  key: 1,
  class: "h-8 w-[1px] bg-neutral-200 dark:bg-neutral-800 mx-1 hidden md:block"
};
const _hoisted_23 = {
  key: 3,
  class: "flex items-center gap-2 animate-in fade-in slide-in-from-left-2"
};
const _hoisted_24 = ["disabled"];
const _hoisted_25 = ["disabled"];
const _hoisted_26 = { class: "flex items-center gap-3" };
const _hoisted_27 = { class: "relative group hidden sm:block" };
const _hoisted_28 = ["title"];
const _hoisted_29 = { class: "song-list-section page-padding-x mt-6" };
const _hoisted_30 = {
  key: 0,
  class: "empty-state py-20 text-center text-neutral-400"
};
const _hoisted_31 = {
  key: 1,
  class: "song-list-container"
};
const _hoisted_32 = {
  key: 1,
  class: "flex items-center justify-center py-6 gap-2"
};
const _hoisted_33 = { class: "text-sm text-neutral-400" };
const _hoisted_34 = {
  key: 2,
  class: "py-6 text-center text-sm text-neutral-300 dark:text-neutral-600"
};
const pageSize = 40;
const initialAnimateCount = 20;
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "MusicList"
  },
  __name: "MusicListPage",
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const playerStore = usePlayerStore();
    const musicStore = useMusicStore();
    const recommendStore = useRecommendStore();
    const userStore = useUserStore();
    const message = useMessage();
    const playHistoryStore = usePlayHistoryStore();
    const loading = ref(false);
    const fetchData = async () => {
      var _a, _b, _c, _d;
      const id = route.params.id;
      const type = route.query.type;
      if (!id || type === "dailyRecommend") return;
      if (((_b = (_a = musicStore.currentListInfo) == null ? void 0 : _a.id) == null ? void 0 : _b.toString()) === id.toString() && musicStore.currentMusicList && musicStore.currentMusicList.length > 0) {
        return;
      }
      loading.value = true;
      try {
        let data;
        if (type === "album") {
          const res = await getAlbum(Number(id));
          data = res.data;
          if (data.code === 200) {
            musicStore.setCurrentMusicList(
              data.songs,
              data.album.name,
              { ...data.album, picUrl: data.album.picUrl },
              false
            );
          } else {
            message.error(t("common.loadFailed"));
          }
        } else if (type === "playlist") {
          const res = await getListDetail(id.toString());
          data = res.data;
          if (data.code === 200) {
            const playlist = data.playlist;
            musicStore.setCurrentMusicList(
              playlist.tracks || [],
              playlist.name,
              playlist,
              ((_c = playlist.creator) == null ? void 0 : _c.userId) === ((_d = userStore.user) == null ? void 0 : _d.userId)
            );
          } else {
            message.error(t("common.loadFailed"));
          }
        }
      } catch (error) {
        console.error("加载列表数据失败:", error);
        message.error(t("common.loadFailed"));
      } finally {
        loading.value = false;
      }
    };
    watch(
      () => route.fullPath,
      () => {
        fetchData();
      },
      { immediate: true }
    );
    const isDailyRecommend = computed(() => route.query.type === "dailyRecommend");
    const isAlbum = computed(() => route.query.type === "album");
    const name = computed(() => {
      if (isDailyRecommend.value) return t("comp.recommendSinger.songlist");
      return musicStore.currentMusicListName || "";
    });
    const titleElRef = ref(null);
    useScrollTitle(name, titleElRef);
    const songList = computed(() => {
      if (isDailyRecommend.value) return recommendStore.dailyRecommendSongs;
      return musicStore.currentMusicList || [];
    });
    const listInfo = computed(() => {
      if (isDailyRecommend.value) return null;
      return musicStore.currentListInfo || null;
    });
    const canRemove = computed(() => {
      if (isDailyRecommend.value) return false;
      return musicStore.canRemoveSong || false;
    });
    const canCollect = ref(false);
    const isCollected = ref(false);
    const displayedSongs = ref([]);
    const renderLimit = ref(pageSize);
    const loadingList = ref(false);
    const loadedIds = ref(/* @__PURE__ */ new Set());
    const isPlaylistLoading = ref(false);
    const completePlaylist = ref([]);
    const hasMore = ref(true);
    const searchKeyword = ref("");
    const isFullPlaylistLoaded = ref(false);
    const isSelecting = ref(false);
    const selectedSongs = ref([]);
    const { isDownloading, batchDownloadMusic } = useDownload();
    const isCompactLayout = ref(
      isMobile.value ? false : localStorage.getItem("musicListLayout") === "compact"
    );
    const total = computed(() => {
      var _a;
      if ((_a = listInfo.value) == null ? void 0 : _a.trackIds) return listInfo.value.trackIds.length;
      return songList.value.length;
    });
    const getCoverImgUrl = computed(() => {
      var _a, _b, _c, _d;
      const coverImgUrl = ((_a = listInfo.value) == null ? void 0 : _a.coverImgUrl) || ((_b = listInfo.value) == null ? void 0 : _b.picUrl);
      if (coverImgUrl) return coverImgUrl;
      const song = songList.value[0];
      return (song == null ? void 0 : song.picUrl) || ((_c = song == null ? void 0 : song.al) == null ? void 0 : _c.picUrl) || ((_d = song == null ? void 0 : song.album) == null ? void 0 : _d.picUrl) || "";
    });
    const allFilteredSongs = computed(() => {
      const sourceList = isDailyRecommend.value ? songList.value : displayedSongs.value;
      return sourceList.filter((s) => !playerStore.dislikeList.includes(s.id));
    });
    const filteredSongs = computed(() => {
      if (searchKeyword.value) {
        const keyword = searchKeyword.value.toLowerCase().trim();
        return allFilteredSongs.value.filter((song) => {
          var _a, _b, _c;
          const songName = ((_a = song.name) == null ? void 0 : _a.toLowerCase()) || "";
          const albumName = ((_c = (_b = song.al) == null ? void 0 : _b.name) == null ? void 0 : _c.toLowerCase()) || "";
          const artists = song.ar || song.artists || [];
          return songName.includes(keyword) || albumName.includes(keyword) || artists.some((a) => {
            var _a2;
            return (_a2 = a.name) == null ? void 0 : _a2.toLowerCase().includes(keyword);
          }) || l.match(songName, keyword);
        });
      }
      return allFilteredSongs.value.slice(0, renderLimit.value);
    });
    const estimatedItemHeight = computed(() => isCompactLayout.value ? 50 : 70);
    const placeholderHeight = computed(() => {
      if (searchKeyword.value) return 0;
      const unrenderedCount = allFilteredSongs.value.length - filteredSongs.value.length;
      return Math.max(0, unrenderedCount) * estimatedItemHeight.value;
    });
    const resetListState = () => {
      loadedIds.value.clear();
      displayedSongs.value = [];
      completePlaylist.value = [];
      hasMore.value = true;
      isFullPlaylistLoaded.value = false;
    };
    const formatSong = (item) => {
      var _a;
      if (!item) return null;
      const picUrl = ((_a = item.al) == null ? void 0 : _a.picUrl) || item.picUrl || (isAlbum.value ? getCoverImgUrl.value : "");
      return {
        ...item,
        picUrl,
        song: {
          artists: item.ar || item.artists,
          name: item.name,
          id: item.id
        }
      };
    };
    const loadSongs = async (ids, appendToList = true, updateComplete = false) => {
      if (ids.length === 0) return [];
      try {
        const { data } = await getMusicDetail(ids);
        if (data == null ? void 0 : data.songs) {
          const { songs } = data;
          songs.forEach((song) => loadedIds.value.add(song.id));
          if (appendToList) displayedSongs.value.push(...songs);
          if (updateComplete) completePlaylist.value.push(...songs);
          return songs;
        }
      } catch (error) {
        console.error("加载歌曲失败:", error);
      }
      return [];
    };
    const loadFullPlaylist = async () => {
      var _a;
      if (isPlaylistLoading.value || isFullPlaylistLoaded.value) return;
      isPlaylistLoading.value = true;
      try {
        if (!((_a = listInfo.value) == null ? void 0 : _a.trackIds)) {
          isFullPlaylistLoaded.value = true;
          return;
        }
        const allIds = listInfo.value.trackIds.map((item) => item.id);
        const loadedSongIds = new Set(displayedSongs.value.map((s) => s.id));
        completePlaylist.value = [...displayedSongs.value];
        const unloadedIds = allIds.filter((id) => !loadedSongIds.has(id));
        if (unloadedIds.length === 0) {
          isFullPlaylistLoaded.value = true;
          return;
        }
        const batchSize = 500;
        for (let i = 0; i < unloadedIds.length; i += batchSize) {
          const batchIds = unloadedIds.slice(i, i + batchSize);
          const loadedBatch = await loadSongs(batchIds, false, false);
          if (loadedBatch.length > 0) {
            displayedSongs.value = [...displayedSongs.value, ...loadedBatch];
            completePlaylist.value = [...completePlaylist.value, ...loadedBatch];
          }
        }
        isFullPlaylistLoaded.value = true;
        hasMore.value = false;
      } catch (error) {
        console.error("加载完整播放列表失败:", error);
      } finally {
        isPlaylistLoading.value = false;
      }
    };
    const handlePlayAll = () => {
      if (displayedSongs.value.length === 0) return;
      saveHistory();
      const list = searchKeyword.value ? filteredSongs.value : isFullPlaylistLoaded.value ? completePlaylist.value : allFilteredSongs.value;
      playerStore.setPlayList(list.map(formatSong));
      playerStore.setPlay(formatSong(list[0]));
      if (!isFullPlaylistLoaded.value) loadFullPlaylist();
    };
    const handlePlayItem = (item) => {
      playerStore.setPlay(formatSong(item));
      if (!playerStore.playList.some((s) => s.id === item.id)) {
        playerStore.addToNextPlay(formatSong(item));
      }
    };
    const handleRemoveSong = async (songId) => {
      var _a;
      if (!((_a = listInfo.value) == null ? void 0 : _a.id) || !canRemove.value) return;
      try {
        const res = await updatePlaylistTracks({
          op: "del",
          pid: listInfo.value.id,
          tracks: songId.toString()
        });
        if (res.status === 200) {
          message.success(t("user.message.deleteSuccess"));
          displayedSongs.value = displayedSongs.value.filter((s) => s.id !== songId);
          completePlaylist.value = completePlaylist.value.filter((s) => s.id !== songId);
          musicStore.removeSongFromList(songId);
        }
      } catch (error) {
        console.error("删除歌曲失败:", error);
        message.error(t("user.message.deleteFailed"));
      }
    };
    const handleScroll = (e) => {
      if (searchKeyword.value) return;
      const target = e.target;
      const { scrollTop, clientHeight } = target;
      const listSection = document.querySelector(".song-list-section");
      const listStart = (listSection == null ? void 0 : listSection.offsetTop) || 0;
      const visibleBottom = scrollTop + clientHeight - listStart;
      if (visibleBottom <= 0) return;
      const bufferHeight = clientHeight;
      const neededIndex = Math.ceil((visibleBottom + bufferHeight) / estimatedItemHeight.value);
      const allCount = allFilteredSongs.value.length;
      if (neededIndex > renderLimit.value) {
        renderLimit.value = Math.min(neededIndex, allCount);
      }
      if (renderLimit.value >= allCount && !loadingList.value && hasMore.value) {
        loadMoreSongs();
      }
    };
    const loadMoreSongs = async () => {
      var _a;
      if (isFullPlaylistLoaded.value || searchKeyword.value || displayedSongs.value.length >= total.value)
        return;
      loadingList.value = true;
      try {
        const start = displayedSongs.value.length;
        const end = Math.min(start + pageSize, total.value);
        if ((_a = listInfo.value) == null ? void 0 : _a.trackIds) {
          const ids = listInfo.value.trackIds.slice(start, end).map((i) => i.id).filter((id) => !loadedIds.value.has(id));
          if (ids.length > 0) await loadSongs(ids);
        }
        hasMore.value = displayedSongs.value.length < total.value;
        renderLimit.value = displayedSongs.value.length;
      } finally {
        loadingList.value = false;
      }
    };
    const saveHistory = () => {
      var _a;
      if (!((_a = listInfo.value) == null ? void 0 : _a.id)) return;
      if (isAlbum.value) {
        playHistoryStore.addAlbum({
          id: listInfo.value.id,
          name: listInfo.value.name || "",
          picUrl: getCoverImgUrl.value,
          size: total.value,
          artist: listInfo.value.artist
        });
      } else if (route.query.type === "playlist") {
        playHistoryStore.addPlaylist({
          id: listInfo.value.id,
          name: listInfo.value.name || "",
          coverImgUrl: getCoverImgUrl.value,
          trackCount: total.value,
          playCount: listInfo.value.playCount,
          creator: listInfo.value.creator
        });
      }
    };
    const toggleCollect = async () => {
      var _a, _b;
      if (!((_a = listInfo.value) == null ? void 0 : _a.id) || !hasPermission(true)) {
        if (!((_b = listInfo.value) == null ? void 0 : _b.id)) return;
        message.error(getLoginErrorMessage(true));
        return;
      }
      const type = route.query.type;
      try {
        const tVal = isCollected.value ? 2 : 1;
        const response = type === "album" ? await subscribeAlbum({ t: tVal, id: listInfo.value.id }) : await subscribePlaylist({ t: tVal, id: listInfo.value.id });
        if (response.data.code === 200) {
          isCollected.value = !isCollected.value;
          message.success(
            t(
              isCollected.value ? "comp.musicList.collectSuccess" : "comp.musicList.cancelCollectSuccess"
            )
          );
          if (type === "album") {
            isCollected.value ? userStore.addCollectedAlbum(listInfo.value.id) : userStore.removeCollectedAlbum(listInfo.value.id);
          } else {
            listInfo.value.subscribed = isCollected.value;
          }
        }
      } catch (error) {
        console.error("操作收藏失败:", error);
        message.error(t("comp.musicList.operationFailed"));
      }
    };
    const startSelect = () => {
      isSelecting.value = true;
      selectedSongs.value = [];
    };
    const cancelSelect = () => {
      isSelecting.value = false;
      selectedSongs.value = [];
    };
    const handleSelect = (id, selected) => {
      selected ? selectedSongs.value.push(id) : selectedSongs.value = selectedSongs.value.filter((i) => i !== id);
    };
    const isAllSelected = computed(
      () => filteredSongs.value.length > 0 && selectedSongs.value.length === filteredSongs.value.length
    );
    const isIndeterminate = computed(
      () => selectedSongs.value.length > 0 && selectedSongs.value.length < filteredSongs.value.length
    );
    const handleSelectAll = (checked) => {
      selectedSongs.value = checked ? filteredSongs.value.map((s) => s.id) : [];
    };
    const handleBatchDownload = async () => {
      const list = selectedSongs.value.map((id) => filteredSongs.value.find((s) => s.id === id)).filter((s) => s);
      await batchDownloadMusic(list);
      cancelSelect();
    };
    const handleAddToPlaylist = () => {
      const songs = selectedSongs.value.map((id) => filteredSongs.value.find((s) => s.id === id)).filter((s) => s).map((s) => formatSong(s)).filter((s) => s);
      if (songs.length === 0) return;
      const currentList = playerStore.playList;
      const newSongs = songs.filter((s) => !currentList.some((item) => item.id === s.id));
      if (newSongs.length === 0) {
        message.warning(t("comp.musicList.songsAlreadyInPlaylist"));
        return;
      }
      playerStore.setPlayList([...currentList, ...newSongs], true);
      message.success(t("comp.musicList.addToPlaylistSuccess", { count: newSongs.length }));
      cancelSelect();
    };
    const currentPlayingIndex = computed(() => {
      var _a;
      const currentId = (_a = playerStore.playMusic) == null ? void 0 : _a.id;
      if (!currentId) return -1;
      return allFilteredSongs.value.findIndex((s) => s.id === currentId);
    });
    const scrollbarRef = ref(null);
    const scrollToCurrentSong = async () => {
      const index = currentPlayingIndex.value;
      if (index < 0) return;
      if (index >= renderLimit.value) {
        renderLimit.value = index + 5;
        await nextTick();
      }
      const container = document.querySelector(".song-list-container");
      const target = container == null ? void 0 : container.children[index];
      if (!target || !scrollbarRef.value) return;
      const scrollEl = document.querySelector(".music-list-page .n-scrollbar-container");
      if (!scrollEl) return;
      const scrollRect = scrollEl.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const currentScrollTop = scrollEl.scrollTop;
      const targetAbsoluteTop = currentScrollTop + targetRect.top - scrollRect.top;
      const actionBarEl = document.querySelector(".action-bar");
      const actionBarHeight = (actionBarEl == null ? void 0 : actionBarEl.offsetHeight) || 0;
      const visibleHeight = scrollRect.height - actionBarHeight;
      const scrollTop = targetAbsoluteTop - actionBarHeight - visibleHeight / 2 + targetRect.height / 2;
      scrollbarRef.value.scrollTo({ top: Math.max(0, scrollTop), behavior: "smooth" });
      await nextTick();
      target.classList.add("song-highlight");
      setTimeout(() => target.classList.remove("song-highlight"), 2e3);
    };
    const toggleLayout = () => {
      isCompactLayout.value = !isCompactLayout.value;
      localStorage.setItem("musicListLayout", isCompactLayout.value ? "compact" : "normal");
    };
    const checkCollectionStatus = () => {
      var _a, _b;
      const type = route.query.type;
      if (type === "playlist" && ((_a = listInfo.value) == null ? void 0 : _a.id)) {
        canCollect.value = true;
        isCollected.value = listInfo.value.subscribed || false;
      } else if (type === "album" && ((_b = listInfo.value) == null ? void 0 : _b.id)) {
        canCollect.value = true;
        isCollected.value = userStore.isAlbumCollected(listInfo.value.id);
      } else {
        canCollect.value = false;
      }
    };
    watch(
      songList,
      (newSongs) => {
        resetListState();
        renderLimit.value = pageSize;
        if (newSongs.length > 0) {
          displayedSongs.value = [...newSongs];
          newSongs.forEach((s) => loadedIds.value.add(s.id));
        }
        hasMore.value = displayedSongs.value.length < total.value;
        checkCollectionStatus();
      },
      { immediate: true }
    );
    onMounted(checkCollectionStatus);
    return (_ctx, _cache) => {
      const _component_n_image = __unplugin_components_1;
      const _component_n_avatar = __unplugin_components_1$1;
      const _component_n_spin = __unplugin_components_2;
      const _component_n_checkbox = __unplugin_components_0;
      const _component_n_input = __unplugin_components_0$1;
      const _component_n_scrollbar = Scrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_scrollbar, {
          ref_key: "scrollbarRef",
          ref: scrollbarRef,
          class: "h-full",
          onScroll: handleScroll
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_spin, { show: loading.value }, {
                default: withCtx(() => {
                  var _a, _b, _c;
                  return [
                    createBaseVNode("section", _hoisted_3, [
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("div", {
                          class: "absolute inset-0 bg-cover bg-center scale-110 blur-3xl opacity-40 dark:opacity-30",
                          style: normalizeStyle({
                            backgroundImage: "url(".concat(unref(getImgUrl)(getCoverImgUrl.value, "800y800"), ")")
                          })
                        }, null, 4),
                        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" }, null, -1))
                      ]),
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("div", _hoisted_6, [
                          createBaseVNode("div", _hoisted_7, [
                            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "cover-glow absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
                            createBaseVNode("div", _hoisted_8, [
                              createVNode(_component_n_image, {
                                src: unref(getImgUrl)(getCoverImgUrl.value, "500y500"),
                                class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                "preview-disabled": ""
                              }, null, 8, ["src"]),
                              createBaseVNode("div", {
                                class: normalizeClass(["absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/30 transition-all duration-300", unref(isMobile) ? "pointer-events-none" : "cursor-pointer"]),
                                onClick: _cache[0] || (_cache[0] = ($event) => !unref(isMobile) && handlePlayAll())
                              }, [
                                !unref(isMobile) ? (openBlock(), createElementBlock("button", {
                                  key: 0,
                                  type: "button",
                                  class: "play-icon w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 pointer-events-auto",
                                  onClick: withModifiers(handlePlayAll, ["stop"])
                                }, [..._cache[4] || (_cache[4] = [
                                  createBaseVNode("i", { class: "ri-play-fill text-3xl text-neutral-900 ml-1" }, null, -1)
                                ])])) : createCommentVNode("", true)
                              ], 2)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("div", _hoisted_10, [
                              createBaseVNode("span", _hoisted_11, toDisplayString(isAlbum.value ? "Album" : "Playlist"), 1)
                            ]),
                            createBaseVNode("h1", {
                              ref_key: "titleElRef",
                              ref: titleElRef,
                              class: "playlist-name text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-4"
                            }, toDisplayString(name.value), 513),
                            createBaseVNode("div", _hoisted_12, [
                              isAlbum.value && ((_a = listInfo.value) == null ? void 0 : _a.artist) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                createVNode(_component_n_avatar, {
                                  round: "",
                                  size: 28,
                                  src: unref(getImgUrl)(listInfo.value.artist.picUrl, "50y50")
                                }, null, 8, ["src"]),
                                createBaseVNode("span", _hoisted_14, toDisplayString(listInfo.value.artist.name), 1)
                              ])) : !isAlbum.value && ((_b = listInfo.value) == null ? void 0 : _b.creator) ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                createVNode(_component_n_avatar, {
                                  round: "",
                                  size: 28,
                                  src: unref(getImgUrl)(listInfo.value.creator.avatarUrl, "50y50")
                                }, null, 8, ["src"]),
                                createBaseVNode("span", _hoisted_16, toDisplayString(listInfo.value.creator.nickname), 1)
                              ])) : createCommentVNode("", true),
                              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700" }, null, -1)),
                              createBaseVNode("span", _hoisted_17, toDisplayString(unref(t)("player.songNum", { num: total.value })), 1)
                            ]),
                            ((_c = listInfo.value) == null ? void 0 : _c.description) ? (openBlock(), createElementBlock("p", _hoisted_18, toDisplayString(listInfo.value.description), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ])
                  ];
                }),
                _: 1
              }, 8, ["show"]),
              songList.value.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    createBaseVNode("button", {
                      class: "play-all-btn flex items-center gap-1.5 md:gap-2 px-3.5 md:px-6 py-1.5 md:py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-xs md:text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25",
                      onClick: handlePlayAll
                    }, [
                      _cache[7] || (_cache[7] = createBaseVNode("i", { class: "ri-play-circle-line text-base md:text-lg" }, null, -1)),
                      createBaseVNode("span", null, toDisplayString(unref(t)("comp.musicList.playAll")), 1)
                    ]),
                    canCollect.value ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      class: normalizeClass([
                        "action-btn-pill flex items-center gap-1.5 md:gap-2 px-3.5 md:px-6 py-1.5 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm border",
                        isCollected.value ? "bg-neutral-100 dark:bg-neutral-800 text-red-500 border-neutral-200 dark:border-neutral-700" : "bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800"
                      ]),
                      onClick: toggleCollect
                    }, [
                      createBaseVNode("i", {
                        class: normalizeClass([isCollected.value ? "ri-heart-fill" : "ri-heart-line", "text-base md:text-lg"])
                      }, null, 2),
                      createBaseVNode("span", null, toDisplayString(isCollected.value ? unref(t)("comp.musicList.cancelCollect") : unref(t)("comp.musicList.collect")), 1)
                    ], 2)) : createCommentVNode("", true),
                    filteredSongs.value.length > 0 && unref(isElectron) ? (openBlock(), createElementBlock("div", _hoisted_22)) : createCommentVNode("", true),
                    !isSelecting.value && unref(isElectron) ? (openBlock(), createElementBlock("button", {
                      key: 2,
                      class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                      onClick: startSelect
                    }, [..._cache[8] || (_cache[8] = [
                      createBaseVNode("i", { class: "ri-checkbox-multiple-line text-lg" }, null, -1)
                    ])])) : createCommentVNode("", true),
                    isSelecting.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
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
                        _cache[9] || (_cache[9] = createBaseVNode("i", { class: "ri-download-line mr-1" }, null, -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("favorite.download", { count: selectedSongs.value.length })), 1)
                      ], 8, _hoisted_24),
                      createBaseVNode("button", {
                        class: "px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary/20 transition-all",
                        disabled: selectedSongs.value.length === 0,
                        onClick: handleAddToPlaylist
                      }, [
                        _cache[10] || (_cache[10] = createBaseVNode("i", { class: "ri-play-list-add-line mr-1" }, null, -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("comp.musicList.addToPlaylist")), 1)
                      ], 8, _hoisted_25),
                      createBaseVNode("button", {
                        class: "text-xs text-neutral-400 hover:text-neutral-600",
                        onClick: cancelSelect
                      }, toDisplayString(unref(t)("common.cancel")), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", _hoisted_27, [
                      createVNode(_component_n_input, {
                        value: searchKeyword.value,
                        "onUpdate:value": _cache[1] || (_cache[1] = ($event) => searchKeyword.value = $event),
                        placeholder: unref(t)("comp.musicList.searchSongs"),
                        round: "",
                        clearable: "",
                        size: "small",
                        class: "w-48 focus:w-64 transition-all duration-300 !bg-neutral-100 dark:!bg-neutral-900 border-none"
                      }, {
                        prefix: withCtx(() => [..._cache[11] || (_cache[11] = [
                          createBaseVNode("i", { class: "ri-search-line text-neutral-400" }, null, -1)
                        ])]),
                        _: 1
                      }, 8, ["value", "placeholder"])
                    ]),
                    currentPlayingIndex.value >= 0 ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                      title: unref(t)("comp.musicList.locateCurrent", "定位当前播放"),
                      onClick: scrollToCurrentSong
                    }, [..._cache[12] || (_cache[12] = [
                      createBaseVNode("i", { class: "ri-focus-3-line text-lg" }, null, -1)
                    ])], 8, _hoisted_28)) : createCommentVNode("", true),
                    !unref(isMobile) ? (openBlock(), createElementBlock("button", {
                      key: 1,
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
              createBaseVNode("section", _hoisted_29, [
                filteredSongs.value.length === 0 && searchKeyword.value ? (openBlock(), createElementBlock("div", _hoisted_30, [
                  _cache[13] || (_cache[13] = createBaseVNode("i", { class: "ri-search-line text-4xl mb-4 opacity-20" }, null, -1)),
                  createBaseVNode("p", null, toDisplayString(unref(t)("comp.musicList.noSearchResults")), 1)
                ])) : (openBlock(), createElementBlock("div", _hoisted_31, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(filteredSongs.value, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.id,
                      class: normalizeClass(["mb-2", { "animate-item": index < initialAnimateCount }]),
                      style: normalizeStyle(
                        index < initialAnimateCount ? { animationDelay: unref(calculateAnimationDelay)(index, 0.03) } : void 0
                      )
                    }, [
                      createVNode(_sfc_main$1, {
                        index,
                        compact: isCompactLayout.value,
                        item: formatSong(item),
                        "can-remove": canRemove.value,
                        selectable: isSelecting.value,
                        selected: selectedSongs.value.includes(item.id),
                        onPlay: ($event) => handlePlayItem(item),
                        onRemoveSong: handleRemoveSong,
                        onSelect: _cache[2] || (_cache[2] = (id, selected) => handleSelect(id, selected))
                      }, null, 8, ["index", "compact", "item", "can-remove", "selectable", "selected", "onPlay"])
                    ], 6);
                  }), 128)),
                  placeholderHeight.value > 0 ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    style: normalizeStyle({ height: placeholderHeight.value + "px" })
                  }, null, 4)) : createCommentVNode("", true),
                  loadingList.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                    createVNode(_component_n_spin, { size: 18 }),
                    createBaseVNode("span", _hoisted_33, toDisplayString(unref(t)("common.loading")), 1)
                  ])) : !hasMore.value && renderLimit.value >= allFilteredSongs.value.length && filteredSongs.value.length > 0 && !searchKeyword.value ? (openBlock(), createElementBlock("div", _hoisted_34, " — " + toDisplayString(unref(t)("common.noMore")) + " — ", 1)) : createCommentVNode("", true)
                ]))
              ])
            ])
          ]),
          _: 1
        }, 512),
        createVNode(PlayBottom)
      ]);
    };
  }
});
const MusicListPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-580192e5"]]);
export {
  MusicListPage as default
};

import { bl as request, d as defineComponent, a5 as useI18n, bh as useRoute, bb as usePlayerStore, bt as useMessage, A as ref, aX as isMobile, Y as watch, b6 as onActivated, aq as onMounted, bi as onDeactivated, ar as onUnmounted, a7 as openBlock, a8 as createElementBlock, ak as createVNode, as as withCtx, ab as createBaseVNode, ae as Fragment, af as renderList, ag as normalizeStyle, ad as unref, aQ as getImgUrl, b7 as createTextVNode, ac as toDisplayString, ah as createCommentVNode, aa as normalizeClass, T as Transition, P as withDirectives, aj as vModelText, bd as _sfc_main$1, a6 as vShow, aZ as calculateAnimationDelay, be as Scrollbar, bI as PlayBottom, z as computed, dh as router, a2 as nextTick, bw as getMusicDetail, di as useDateFormat, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { l } from "./main-Bco1MTsi.js";
import { n as navigateToMusicList } from "./MusicListNavigator-jSUM_tQ9.js";
import { u as useScrollTitle } from "./useScrollTitle-DnlGcrFA.js";
import "./music-JQhEZ-U3.js";
const getArtistDetail = (id) => {
  return request.get("/artist/detail", { params: { id } });
};
const getArtistTopSongs = (params) => {
  return request.get("/artist/songs", {
    params: {
      ...params,
      order: "hot"
    }
  });
};
const getArtistAlbums = (params) => {
  return request.get("/artist/album", { params });
};
const _hoisted_1 = { class: "artist-detail-page h-full w-full bg-white dark:bg-neutral-900 transition-colors duration-500" };
const _hoisted_2 = { class: "artist-detail-content w-full pb-32" };
const _hoisted_3 = {
  key: 0,
  class: "artist-content"
};
const _hoisted_4 = { class: "mt-8 page-padding-x" };
const _hoisted_5 = { class: "space-y-4" };
const _hoisted_6 = {
  key: 1,
  class: "artist-content"
};
const _hoisted_7 = { class: "hero-section relative overflow-hidden overflow-hidden rounded-tl-2xl" };
const _hoisted_8 = { class: "hero-bg absolute inset-0 -top-20" };
const _hoisted_9 = { class: "hero-content relative z-10 page-padding-x pt-4 md:pt-8 pb-6" };
const _hoisted_10 = { class: "flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-end" };
const _hoisted_11 = { class: "artist-avatar-wrapper relative group" };
const _hoisted_12 = { class: "avatar-container relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-neutral-800/50" };
const _hoisted_13 = ["src", "alt"];
const _hoisted_14 = { class: "artist-info flex-1 text-center md:text-left" };
const _hoisted_15 = { class: "artist-stats flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-4 md:mt-5" };
const _hoisted_16 = {
  key: 0,
  class: "stat-item flex items-center gap-2"
};
const _hoisted_17 = { class: "text-sm font-medium text-neutral-600 dark:text-neutral-300" };
const _hoisted_18 = { class: "font-bold text-neutral-900 dark:text-white" };
const _hoisted_19 = {
  key: 1,
  class: "stat-item flex items-center gap-2"
};
const _hoisted_20 = { class: "text-sm font-medium text-neutral-600 dark:text-neutral-300" };
const _hoisted_21 = { class: "font-bold text-neutral-900 dark:text-white" };
const _hoisted_22 = { class: "action-bar sticky top-0 z-20 page-padding-x py-3 md:py-4 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800/50" };
const _hoisted_23 = { class: "flex items-center justify-between gap-3" };
const _hoisted_24 = { class: "flex items-center gap-2 md:gap-3" };
const _hoisted_25 = { class: "hidden sm:inline" };
const _hoisted_26 = { class: "hidden md:inline ml-2" };
const _hoisted_27 = { class: "flex items-center gap-2" };
const _hoisted_28 = ["title"];
const _hoisted_29 = {
  key: 0,
  class: "search-container mt-3"
};
const _hoisted_30 = { class: "relative flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden" };
const _hoisted_31 = ["placeholder"];
const _hoisted_32 = { class: "tab-nav page-padding-x pt-4 md:pt-6" };
const _hoisted_33 = { class: "tab-list relative flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl w-fit" };
const _hoisted_34 = ["onClick"];
const _hoisted_35 = { class: "relative z-10" };
const _hoisted_36 = {
  key: 0,
  class: "absolute inset-0 bg-white dark:bg-neutral-700 rounded-lg shadow-sm"
};
const _hoisted_37 = { class: "tab-content page-padding-x py-6 md:py-8" };
const _hoisted_38 = { class: "songs-tab" };
const _hoisted_39 = {
  key: 0,
  class: "empty-state flex flex-col items-center justify-center py-16"
};
const _hoisted_40 = { class: "text-neutral-500 dark:text-neutral-400" };
const _hoisted_41 = {
  key: 0,
  class: "flex items-center justify-center gap-2"
};
const _hoisted_42 = { class: "text-sm text-neutral-400 dark:text-neutral-500" };
const _hoisted_43 = {
  key: 1,
  class: "text-center text-sm text-neutral-400 dark:text-neutral-500"
};
const _hoisted_44 = { class: "albums-tab" };
const _hoisted_45 = {
  key: 0,
  class: "album-grid grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
};
const _hoisted_46 = ["onClick"];
const _hoisted_47 = { class: "album-cover relative aspect-square overflow-hidden rounded-2xl shadow-lg" };
const _hoisted_48 = ["src", "alt"];
const _hoisted_49 = { class: "album-info mt-3" };
const _hoisted_50 = { class: "album-name line-clamp-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary dark:group-hover:text-primary transition-colors" };
const _hoisted_51 = { class: "album-date mt-1 text-xs text-neutral-400 dark:text-neutral-500" };
const _hoisted_52 = {
  key: 0,
  class: "flex items-center justify-center gap-2"
};
const _hoisted_53 = { class: "text-sm text-neutral-400 dark:text-neutral-500" };
const _hoisted_54 = {
  key: 1,
  class: "text-center text-sm text-neutral-400 dark:text-neutral-500"
};
const _hoisted_55 = { class: "about-tab" };
const _hoisted_56 = { class: "about-content" };
const _hoisted_57 = { class: "text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4 md:mb-6" };
const _hoisted_58 = {
  key: 0,
  class: "prose prose-neutral dark:prose-invert max-w-none"
};
const _hoisted_59 = { class: "text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300 whitespace-pre-line" };
const _hoisted_60 = {
  key: 1,
  class: "empty-state flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500"
};
const _hoisted_61 = {
  key: 2,
  class: "empty-state flex flex-col items-center justify-center min-h-[60vh] text-neutral-400 dark:text-neutral-500"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "ArtistDetail"
  },
  __name: "detail",
  setup(__props) {
    const { t } = useI18n();
    const route = useRoute();
    const playerStore = usePlayerStore();
    const message = useMessage();
    const artistId = computed(() => Number(route.params.id));
    const activeTab = ref("songs");
    const scrollbarRef = ref(null);
    const tabs = computed(() => [
      { value: "songs", label: t("artist.hotSongs") },
      { value: "albums", label: t("artist.albums") },
      { value: "about", label: t("artist.description") }
    ]);
    const artistInfo = ref();
    const songs = ref([]);
    const albums = ref([]);
    const titleElRef = ref(null);
    const artistTitle = computed(() => {
      var _a, _b;
      return (_b = (_a = artistInfo.value) == null ? void 0 : _a.name) != null ? _b : "";
    });
    useScrollTitle(artistTitle, titleElRef);
    const loading = ref(false);
    const songLoading = ref(false);
    const albumLoading = ref(false);
    const songPage = ref({
      page: 1,
      pageSize: 30,
      hasMore: true
    });
    const albumPage = ref({
      page: 1,
      pageSize: 30,
      hasMore: true
    });
    const songsLoadMoreRef = ref(null);
    const albumsLoadMoreRef = ref(null);
    let songsObserver = null;
    let albumsObserver = null;
    const previousId = ref(null);
    const artistDataCache = /* @__PURE__ */ new Map();
    const getCacheKey = (id) => "artist_".concat(id);
    const searchKeyword = ref("");
    const isSearchVisible = ref(false);
    const isCompactLayout = ref(
      isMobile.value ? false : localStorage.getItem("musicListLayout") === "compact"
    );
    const handleAlbumClick = async (album) => {
      try {
        navigateToMusicList(router, {
          id: album.id,
          type: "album",
          name: album.name,
          listInfo: {
            ...album,
            coverImgUrl: album.picUrl
          },
          canRemove: false
        });
      } catch (error) {
        console.error("Failed to navigate to album:", error);
        message.error(t("common.loadFailed"));
      }
    };
    const loadArtistInfo = async () => {
      var _a, _b;
      if (!artistId.value) return;
      nextTick(() => {
        var _a2;
        (_a2 = scrollbarRef.value) == null ? void 0 : _a2.scrollTo(0, 0);
      });
      const cacheKey = getCacheKey(artistId.value);
      if (artistDataCache.has(cacheKey)) {
        console.log("使用缓存数据");
        const cachedData = artistDataCache.get(cacheKey);
        artistInfo.value = cachedData.artistInfo;
        songs.value = cachedData.songs;
        albums.value = cachedData.albums;
        songPage.value = cachedData.songPage;
        albumPage.value = cachedData.albumPage;
        return;
      }
      loading.value = true;
      try {
        const info = await getArtistDetail(artistId.value);
        if ((_b = (_a = info.data) == null ? void 0 : _a.data) == null ? void 0 : _b.artist) {
          artistInfo.value = info.data.data.artist;
        }
        resetPagination();
        await Promise.all([loadSongs(), loadAlbums()]);
        artistDataCache.set(cacheKey, {
          artistInfo: artistInfo.value,
          songs: [...songs.value],
          albums: [...albums.value],
          songPage: { ...songPage.value },
          albumPage: { ...albumPage.value }
        });
      } catch (error) {
        console.error("加载歌手信息失败:", error);
      } finally {
        loading.value = false;
      }
    };
    const resetPagination = () => {
      songPage.value = {
        page: 1,
        pageSize: 50,
        hasMore: true
      };
      albumPage.value = {
        page: 1,
        pageSize: 50,
        hasMore: true
      };
      songs.value = [];
      albums.value = [];
    };
    const loadSongs = async () => {
      var _a;
      if (!artistId.value || !songPage.value.hasMore || songLoading.value) return;
      try {
        songLoading.value = true;
        const { page, pageSize } = songPage.value;
        const res = await getArtistTopSongs({
          id: artistId.value,
          limit: pageSize,
          offset: (page - 1) * pageSize
        });
        const ids = res.data.songs.map((item) => item.id);
        const songsDetail = await getMusicDetail(ids);
        if ((_a = songsDetail.data) == null ? void 0 : _a.songs) {
          const newSongs = songsDetail.data.songs.map((item) => {
            return {
              ...item,
              picUrl: item.al.picUrl,
              song: {
                artists: item.ar,
                name: item.name,
                id: item.id
              }
            };
          });
          songs.value = page === 1 ? newSongs : [...songs.value, ...newSongs];
          songPage.value.hasMore = newSongs.length === pageSize;
          songPage.value.page++;
        } else {
          songPage.value.hasMore = false;
        }
      } catch (error) {
        console.error("加载歌曲失败:", error);
      } finally {
        songLoading.value = false;
      }
    };
    const loadAlbums = async () => {
      var _a;
      if (!artistId.value || !albumPage.value.hasMore || albumLoading.value) return;
      try {
        albumLoading.value = true;
        const { page, pageSize } = albumPage.value;
        const res = await getArtistAlbums({
          id: artistId.value,
          limit: pageSize,
          offset: (page - 1) * pageSize
        });
        if ((_a = res.data) == null ? void 0 : _a.hotAlbums) {
          const newAlbums = res.data.hotAlbums;
          albums.value = page === 1 ? newAlbums : [...albums.value, ...newAlbums];
          albumPage.value.hasMore = newAlbums.length === pageSize;
          albumPage.value.page++;
        } else {
          albumPage.value.hasMore = false;
        }
      } catch (error) {
        console.error("加载专辑失败:", error);
      } finally {
        albumLoading.value = false;
      }
    };
    const formatPublishTime = (time) => {
      return useDateFormat(time, "YYYY-MM-DD").value;
    };
    const showSearch = () => {
      isSearchVisible.value = true;
      nextTick(() => {
        const inputEl = document.querySelector(".search-container input");
        if (inputEl) {
          inputEl.focus();
        }
      });
    };
    const closeSearch = () => {
      isSearchVisible.value = false;
      searchKeyword.value = "";
    };
    const handleSearchBlur = () => {
      if (!searchKeyword.value) {
        setTimeout(() => {
          isSearchVisible.value = false;
        }, 200);
      }
    };
    const filteredSongs = computed(() => {
      if (!searchKeyword.value) {
        return songs.value;
      }
      const keyword = searchKeyword.value.toLowerCase().trim();
      return songs.value.filter((song) => {
        var _a, _b, _c, _d;
        const songName = ((_a = song.name) == null ? void 0 : _a.toLowerCase()) || "";
        const albumName = ((_c = (_b = song.al) == null ? void 0 : _b.name) == null ? void 0 : _c.toLowerCase()) || "";
        const artists = song.ar || song.artists || [];
        const nameMatch = songName.includes(keyword);
        const albumMatch = albumName.includes(keyword);
        const artistsMatch = artists.some((artist) => {
          var _a2;
          return (_a2 = artist.name) == null ? void 0 : _a2.toLowerCase().includes(keyword);
        });
        const namePinyinMatch = song.name && l.match(song.name, keyword);
        const albumPinyinMatch = ((_d = song.al) == null ? void 0 : _d.name) && l.match(song.al.name, keyword);
        const artistsPinyinMatch = artists.some((artist) => {
          return artist.name && l.match(artist.name, keyword);
        });
        return nameMatch || albumMatch || artistsMatch || namePinyinMatch || albumPinyinMatch || artistsPinyinMatch;
      });
    });
    const toggleLayout = () => {
      isCompactLayout.value = !isCompactLayout.value;
      localStorage.setItem("musicListLayout", isCompactLayout.value ? "compact" : "normal");
    };
    const handlePlayAll = () => {
      if (filteredSongs.value.length === 0) return;
      playerStore.setPlayList(
        filteredSongs.value.map((song) => ({
          ...song,
          picUrl: song.al.picUrl
        }))
      );
      playerStore.setPlay(filteredSongs.value[0]);
      message.success(t("comp.musicList.playAll"));
    };
    const addToPlaylist = () => {
      if (filteredSongs.value.length === 0) return;
      const currentList = playerStore.playList;
      const newSongs = filteredSongs.value.filter(
        (song) => !currentList.some((item) => item.id === song.id)
      );
      if (newSongs.length === 0) {
        message.info(t("comp.musicList.songsAlreadyInPlaylist"));
        return;
      }
      const newList = [
        ...currentList,
        ...newSongs.map((song) => ({
          ...song,
          picUrl: song.al.picUrl
        }))
      ];
      playerStore.setPlayList(newList);
      message.success(t("comp.musicList.addToPlaylistSuccess", { count: newSongs.length }));
    };
    const handlePlay = (song) => {
      if (song) {
        const songList = [...filteredSongs.value];
        const index = songList.findIndex((item) => item.id === song.id);
        if (index !== -1) {
          const clickedSong = songList.splice(index, 1)[0];
          songList.unshift(clickedSong);
        }
        playerStore.setPlayList(
          songList.map((item) => {
            var _a;
            return {
              ...item,
              picUrl: ((_a = item.al) == null ? void 0 : _a.picUrl) || item.picUrl
            };
          })
        );
        playerStore.setPlay(song);
      } else {
        playerStore.setPlayList(
          filteredSongs.value.map((item) => {
            var _a;
            return {
              ...item,
              picUrl: ((_a = item.al) == null ? void 0 : _a.picUrl) || item.picUrl
            };
          })
        );
      }
    };
    const setupObservers = () => {
      if (songsObserver) songsObserver.disconnect();
      if (albumsObserver) albumsObserver.disconnect();
      if (!songsObserver) {
        songsObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && songPage.value.hasMore) {
              loadSongs();
            }
          },
          { threshold: 0.1 }
        );
      }
      if (!albumsObserver) {
        albumsObserver = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && albumPage.value.hasMore) {
              loadAlbums();
            }
          },
          { threshold: 0.1 }
        );
      }
      nextTick(() => {
        if (activeTab.value === "songs" && songsLoadMoreRef.value) {
          songsObserver == null ? void 0 : songsObserver.observe(songsLoadMoreRef.value);
        } else if (activeTab.value === "albums" && albumsLoadMoreRef.value) {
          albumsObserver == null ? void 0 : albumsObserver.observe(albumsLoadMoreRef.value);
        }
      });
    };
    watch(activeTab, () => {
      setupObservers();
    });
    watch([songsLoadMoreRef, albumsLoadMoreRef], () => {
      setupObservers();
    });
    watch(searchKeyword, () => {
      nextTick(() => {
        setupObservers();
      });
    });
    onActivated(() => {
      if (route.name === "artistDetail") {
        const currentId = route.params.id;
        nextTick(() => {
          var _a;
          (_a = scrollbarRef.value) == null ? void 0 : _a.scrollTo(0, 0);
        });
        if (!previousId.value || previousId.value !== currentId) {
          console.log("ID已变化，加载新数据");
          previousId.value = currentId;
          activeTab.value = "songs";
          loadArtistInfo();
        }
        setupObservers();
      }
    });
    onMounted(() => {
      if (route.params.id) {
        previousId.value = route.params.id;
        loadArtistInfo();
        setupObservers();
      }
    });
    onDeactivated(() => {
      if (songsObserver) songsObserver.disconnect();
      if (albumsObserver) albumsObserver.disconnect();
    });
    onUnmounted(() => {
      if (songsObserver) {
        songsObserver.disconnect();
        songsObserver = null;
      }
      if (albumsObserver) {
        albumsObserver.disconnect();
        albumsObserver = null;
      }
    });
    const formatSong = (item) => {
      var _a;
      if (!item) {
        return null;
      }
      return {
        ...item,
        picUrl: ((_a = item.al) == null ? void 0 : _a.picUrl) || item.picUrl
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Scrollbar), {
          ref_key: "scrollbarRef",
          ref: scrollbarRef,
          class: "h-full"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "hero-section relative h-[400px] overflow-hidden rounded-tl-2xl" }, [
                  createBaseVNode("div", { class: "hero-bg absolute inset-0 -top-20" }, [
                    createBaseVNode("div", { class: "absolute inset-0 skeleton-shimmer" })
                  ]),
                  createBaseVNode("div", { class: "hero-content relative z-10 px-4 pb-6 pt-4 md:px-8 md:pt-8" }, [
                    createBaseVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-10" }, [
                      createBaseVNode("div", { class: "h-36 w-36 md:h-48 md:w-48 skeleton-shimmer rounded-full flex-shrink-0" }),
                      createBaseVNode("div", { class: "flex-1 space-y-4 text-center md:text-left" }, [
                        createBaseVNode("div", { class: "h-6 w-20 skeleton-shimmer rounded-full" }),
                        createBaseVNode("div", { class: "h-10 w-1/2 md:h-12 skeleton-shimmer rounded-xl" }),
                        createBaseVNode("div", { class: "flex justify-center gap-4 md:justify-start" }, [
                          createBaseVNode("div", { class: "h-6 w-24 skeleton-shimmer rounded-lg" }),
                          createBaseVNode("div", { class: "h-6 w-24 skeleton-shimmer rounded-lg" })
                        ])
                      ])
                    ])
                  ])
                ], -1)),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(8, (i) => {
                      return createBaseVNode("div", {
                        key: i,
                        class: "flex items-center gap-4"
                      }, [..._cache[3] || (_cache[3] = [
                        createBaseVNode("div", { class: "h-12 w-12 skeleton-shimmer rounded-xl flex-shrink-0" }, null, -1),
                        createBaseVNode("div", { class: "flex-1 space-y-2" }, [
                          createBaseVNode("div", { class: "h-4 w-1/3 skeleton-shimmer rounded-lg" }),
                          createBaseVNode("div", { class: "h-3 w-1/4 skeleton-shimmer rounded-lg" })
                        ], -1),
                        createBaseVNode("div", { class: "h-8 w-8 skeleton-shimmer rounded-full flex-shrink-0" }, null, -1)
                      ])]);
                    }), 64))
                  ])
                ])
              ])) : artistInfo.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                createBaseVNode("section", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", {
                      class: "absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40 dark:opacity-30",
                      style: normalizeStyle({
                        backgroundImage: "url(".concat(unref(getImgUrl)(artistInfo.value.cover || artistInfo.value.picUrl, "800y800"), ")")
                      })
                    }, null, 4),
                    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-neutral-900/80 dark:to-neutral-900" }, null, -1))
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "avatar-glow absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
                        createBaseVNode("div", _hoisted_12, [
                          createBaseVNode("img", {
                            src: unref(getImgUrl)(artistInfo.value.cover || artistInfo.value.picUrl, "500y500"),
                            alt: artistInfo.value.name,
                            class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          }, null, 8, _hoisted_13),
                          createBaseVNode("div", { class: "absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300" }, [
                            createBaseVNode("div", {
                              class: "play-icon w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95",
                              onClick: handlePlayAll
                            }, [..._cache[6] || (_cache[6] = [
                              createBaseVNode("i", { class: "iconfont icon-playfill text-2xl text-neutral-900 ml-1" }, null, -1)
                            ])])
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        _cache[10] || (_cache[10] = createBaseVNode("div", { class: "artist-badge mb-2 md:mb-3" }, [
                          createBaseVNode("span", { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider" }, [
                            createBaseVNode("i", { class: "iconfont icon-verified text-sm" }),
                            createTextVNode(" Artist ")
                          ])
                        ], -1)),
                        createBaseVNode("h1", {
                          ref_key: "titleElRef",
                          ref: titleElRef,
                          class: "artist-name text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
                        }, toDisplayString(artistInfo.value.name), 513),
                        createBaseVNode("div", _hoisted_15, [
                          artistInfo.value.musicSize ? (openBlock(), createElementBlock("div", _hoisted_16, [
                            _cache[8] || (_cache[8] = createBaseVNode("i", { class: "iconfont icon-music text-primary text-lg" }, null, -1)),
                            createBaseVNode("span", _hoisted_17, [
                              createBaseVNode("span", _hoisted_18, toDisplayString(artistInfo.value.musicSize), 1),
                              createTextVNode(" " + toDisplayString(unref(t)("artist.hotSongs")), 1)
                            ])
                          ])) : createCommentVNode("", true),
                          artistInfo.value.albumSize ? (openBlock(), createElementBlock("div", _hoisted_19, [
                            _cache[9] || (_cache[9] = createBaseVNode("i", { class: "iconfont icon-album text-primary text-lg" }, null, -1)),
                            createBaseVNode("span", _hoisted_20, [
                              createBaseVNode("span", _hoisted_21, toDisplayString(artistInfo.value.albumSize), 1),
                              createTextVNode(" " + toDisplayString(unref(t)("artist.albums")), 1)
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("section", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("button", {
                        class: "play-all-btn flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25",
                        onClick: handlePlayAll
                      }, [
                        _cache[11] || (_cache[11] = createBaseVNode("i", { class: "iconfont icon-playfill text-lg" }, null, -1)),
                        createBaseVNode("span", _hoisted_25, toDisplayString(unref(t)("comp.musicList.playAll")), 1)
                      ]),
                      createBaseVNode("button", {
                        class: "add-btn flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:px-4 md:py-2.5 rounded-full md:rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95",
                        onClick: addToPlaylist
                      }, [
                        _cache[12] || (_cache[12] = createBaseVNode("i", { class: "iconfont icon-add text-lg" }, null, -1)),
                        createBaseVNode("span", _hoisted_26, toDisplayString(unref(t)("comp.musicList.addToPlaylist")), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      activeTab.value === "songs" ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        class: normalizeClass([
                          "action-btn w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95",
                          isSearchVisible.value ? "bg-primary/10 dark:bg-primary/20 text-primary" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        ]),
                        onClick: _cache[0] || (_cache[0] = ($event) => isSearchVisible.value ? closeSearch() : showSearch())
                      }, [
                        createBaseVNode("i", {
                          class: normalizeClass(["iconfont", isSearchVisible.value ? "icon-close" : "icon-search"])
                        }, null, 2)
                      ], 2)) : createCommentVNode("", true),
                      activeTab.value === "songs" && !unref(isMobile) ? (openBlock(), createElementBlock("button", {
                        key: 1,
                        class: "action-btn w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 hover:scale-105 active:scale-95",
                        title: isCompactLayout.value ? unref(t)("comp.musicList.switchToNormal") : unref(t)("comp.musicList.switchToCompact"),
                        onClick: toggleLayout
                      }, [
                        createBaseVNode("i", {
                          class: normalizeClass(["iconfont", isCompactLayout.value ? "icon-list" : "icon-menu"])
                        }, null, 2)
                      ], 8, _hoisted_28)) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode(Transition, { name: "search-slide" }, {
                    default: withCtx(() => [
                      isSearchVisible.value && activeTab.value === "songs" ? (openBlock(), createElementBlock("div", _hoisted_29, [
                        createBaseVNode("div", _hoisted_30, [
                          _cache[14] || (_cache[14] = createBaseVNode("i", { class: "iconfont icon-search text-neutral-400 dark:text-neutral-500 ml-4" }, null, -1)),
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchKeyword.value = $event),
                            type: "text",
                            placeholder: unref(t)("comp.musicList.searchSongs"),
                            class: "flex-1 px-3 py-2.5 bg-transparent text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none",
                            onBlur: handleSearchBlur
                          }, null, 40, _hoisted_31), [
                            [vModelText, searchKeyword.value]
                          ]),
                          searchKeyword.value ? (openBlock(), createElementBlock("button", {
                            key: 0,
                            class: "px-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300",
                            onClick: _cache[2] || (_cache[2] = ($event) => searchKeyword.value = "")
                          }, [..._cache[13] || (_cache[13] = [
                            createBaseVNode("i", { class: "iconfont icon-close text-sm" }, null, -1)
                          ])])) : createCommentVNode("", true)
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("section", _hoisted_32, [
                  createBaseVNode("div", _hoisted_33, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
                      return openBlock(), createElementBlock("button", {
                        key: tab.value,
                        class: normalizeClass([
                          "tab-item relative px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                          activeTab.value === tab.value ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
                        ]),
                        onClick: ($event) => activeTab.value = tab.value
                      }, [
                        createBaseVNode("span", _hoisted_35, toDisplayString(tab.label), 1),
                        createVNode(Transition, { name: "tab-indicator" }, {
                          default: withCtx(() => [
                            activeTab.value === tab.value ? (openBlock(), createElementBlock("div", _hoisted_36)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ], 10, _hoisted_34);
                    }), 128))
                  ])
                ]),
                createBaseVNode("section", _hoisted_37, [
                  withDirectives(createBaseVNode("div", _hoisted_38, [
                    filteredSongs.value.length === 0 && searchKeyword.value ? (openBlock(), createElementBlock("div", _hoisted_39, [
                      _cache[15] || (_cache[15] = createBaseVNode("i", { class: "iconfont icon-search text-5xl text-neutral-300 dark:text-neutral-600 mb-4" }, null, -1)),
                      createBaseVNode("p", _hoisted_40, toDisplayString(unref(t)("comp.musicList.noSearchResults")), 1)
                    ])) : (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass(["song-list", { "compact-mode": isCompactLayout.value }])
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredSongs.value, (song, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: song.id,
                          class: "song-item-container"
                        }, [
                          createVNode(_sfc_main$1, {
                            item: formatSong(song),
                            compact: isCompactLayout.value,
                            index,
                            onPlay: ($event) => handlePlay(song)
                          }, null, 8, ["item", "compact", "index", "onPlay"])
                        ]);
                      }), 128))
                    ], 2)),
                    createBaseVNode("div", {
                      ref_key: "songsLoadMoreRef",
                      ref: songsLoadMoreRef,
                      class: "load-more-trigger py-8"
                    }, [
                      songLoading.value ? (openBlock(), createElementBlock("div", _hoisted_41, [
                        _cache[16] || (_cache[16] = createBaseVNode("div", { class: "w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" }, null, -1)),
                        createBaseVNode("span", _hoisted_42, toDisplayString(unref(t)("common.loading") || "Loading..."), 1)
                      ])) : !songPage.value.hasMore && songs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_43, " — " + toDisplayString(unref(t)("common.noMore") || "No more") + " — ", 1)) : createCommentVNode("", true)
                    ], 512)
                  ], 512), [
                    [vShow, activeTab.value === "songs"]
                  ]),
                  withDirectives(createBaseVNode("div", _hoisted_44, [
                    albums.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_45, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(albums.value, (album, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: album.id,
                          class: "album-card group cursor-pointer",
                          style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index, 0.03) }),
                          onClick: ($event) => handleAlbumClick(album)
                        }, [
                          createBaseVNode("div", _hoisted_47, [
                            createBaseVNode("img", {
                              src: unref(getImgUrl)(album.picUrl, "500y500"),
                              alt: album.name,
                              class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                              loading: "lazy"
                            }, null, 8, _hoisted_48),
                            _cache[17] || (_cache[17] = createBaseVNode("div", { class: "play-overlay absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 group-hover:bg-black/20 group-hover:opacity-100 transition-all duration-300" }, [
                              createBaseVNode("div", { class: "play-icon w-12 h-12 rounded-full bg-white/90 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl" }, [
                                createBaseVNode("i", { class: "iconfont icon-playfill text-xl text-neutral-900 ml-0.5" })
                              ])
                            ], -1))
                          ]),
                          createBaseVNode("div", _hoisted_49, [
                            createBaseVNode("h3", _hoisted_50, toDisplayString(album.name), 1),
                            createBaseVNode("p", _hoisted_51, toDisplayString(formatPublishTime(album.publishTime)), 1)
                          ])
                        ], 12, _hoisted_46);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      ref_key: "albumsLoadMoreRef",
                      ref: albumsLoadMoreRef,
                      class: "load-more-trigger py-8"
                    }, [
                      albumLoading.value ? (openBlock(), createElementBlock("div", _hoisted_52, [
                        _cache[18] || (_cache[18] = createBaseVNode("div", { class: "w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" }, null, -1)),
                        createBaseVNode("span", _hoisted_53, toDisplayString(unref(t)("common.loading") || "Loading..."), 1)
                      ])) : !albumPage.value.hasMore && albums.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_54, " — " + toDisplayString(unref(t)("common.noMore") || "No more") + " — ", 1)) : createCommentVNode("", true)
                    ], 512)
                  ], 512), [
                    [vShow, activeTab.value === "albums"]
                  ]),
                  withDirectives(createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", _hoisted_56, [
                      createBaseVNode("h2", _hoisted_57, toDisplayString(unref(t)("artist.description")), 1),
                      artistInfo.value.briefDesc ? (openBlock(), createElementBlock("div", _hoisted_58, [
                        createBaseVNode("p", _hoisted_59, toDisplayString(artistInfo.value.briefDesc), 1)
                      ])) : (openBlock(), createElementBlock("div", _hoisted_60, [
                        _cache[19] || (_cache[19] = createBaseVNode("i", { class: "iconfont icon-info text-5xl mb-4 opacity-50" }, null, -1)),
                        createBaseVNode("p", null, toDisplayString(unref(t)("common.noData") || "No description available"), 1)
                      ]))
                    ])
                  ], 512), [
                    [vShow, activeTab.value === "about"]
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_61, [
                _cache[20] || (_cache[20] = createBaseVNode("i", { class: "iconfont icon-user text-6xl mb-4 opacity-30" }, null, -1)),
                createBaseVNode("p", null, toDisplayString(unref(t)("common.noData") || "Artist not found"), 1)
              ]))
            ])
          ]),
          _: 1
        }, 512),
        createVNode(PlayBottom)
      ]);
    };
  }
});
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2be28c1d"]]);
export {
  detail as default
};

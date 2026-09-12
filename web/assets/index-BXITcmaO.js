const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BMNXZoHW.js","./index-DFoib_22.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, a5 as useI18n, a8 as createElementBlock, ag as normalizeStyle, ab as createBaseVNode, ad as unref, aQ as getImgUrl, ae as Fragment, af as renderList, ac as toDisplayString, ah as createCommentVNode, a9 as withModifiers, aa as normalizeClass, aR as formatNumber, A as ref, z as computed, aS as getImageBackground, aT as __vitePreload, a7 as openBlock, ap as _export_sfc, aU as useRouter, aq as onMounted, aV as getTopAlbum, aW as isElectron, aX as isMobile, aY as createBlock, aZ as calculateAnimationDelay, a_ as reactive, a$ as usePlayerCoreStore, b0 as usePlaylistStore, b1 as useArtist, b2 as getHotSinger, b3 as useRecommendStore, b4 as useIntelligenceModeStore, b5 as useUserStore, b6 as onActivated, b7 as createTextVNode, b8 as getPersonalizedPlaylist, b9 as getPersonalFM, ba as fmTrash, bb as usePlayerStore, bc as getRecommendMusic, bd as _sfc_main$7, ak as createVNode, as as withCtx, be as Scrollbar } from "./index-BMNXZoHW.js";
import { g as getAlbum, a as getListDetail } from "./list-evjySziV.js";
import { n as navigateToMusicList } from "./MusicListNavigator-jSUM_tQ9.js";
import "./music-JQhEZ-U3.js";
const _hoisted_1$6 = { class: "relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 shadow-sm transition-all duration-300 ease-out group-hover:shadow-xl dark:bg-neutral-800" };
const _hoisted_2$6 = ["src", "alt"];
const _hoisted_3$6 = { class: "flex w-full items-end justify-between gap-3 p-4" };
const _hoisted_4$5 = { class: "min-w-0 flex-1 translate-y-3 space-y-1.5 transition-all duration-500 ease-out group-hover:translate-y-0" };
const _hoisted_5$4 = { class: "w-5 flex-shrink-0 text-center text-xs font-bold text-white/40" };
const _hoisted_6$4 = { class: "truncate text-sm font-semibold tracking-wide" };
const _hoisted_7$3 = {
  key: 0,
  class: "py-4 text-center text-xs text-white/50"
};
const _hoisted_8$2 = {
  key: 2,
  class: "absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md"
};
const _hoisted_9$1 = { class: "mt-3 px-0.5" };
const _hoisted_10$1 = { class: "truncate text-base font-bold tracking-tight text-neutral-900 transition-colors duration-200 group-hover:text-primary dark:text-neutral-50 dark:group-hover:text-white" };
const _hoisted_11$1 = {
  key: 0,
  class: "mt-1.5 truncate text-sm font-medium text-neutral-500 transition-colors duration-200 group-hover:text-neutral-600 dark:text-neutral-400 dark:group-hover:text-neutral-300"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "HomeListItem",
  props: {
    cover: {},
    title: {},
    subtitle: {},
    tracks: { default: () => [] },
    badge: {},
    badgeType: {},
    playCount: {},
    animationDelay: { default: "0s" },
    showHoverTracks: { type: Boolean, default: true }
  },
  emits: ["click", "play"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const coverRef = ref(null);
    const backgroundGradient = ref(
      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)"
    );
    const displayTracks = computed(() => props.tracks.slice(0, 3));
    const badgeClass = computed(() => {
      switch (props.badgeType) {
        case "new":
          return "bg-gradient-to-r from-orange-500 to-rose-500";
        case "hot":
          return "bg-gradient-to-r from-rose-500 to-pink-500";
        case "recommend":
          return "bg-gradient-to-r from-primary to-blue-500";
        default:
          return "bg-gradient-to-r from-primary to-blue-500";
      }
    });
    const overlayStyle = computed(() => ({
      background: backgroundGradient.value
    }));
    const extractColor = async () => {
      const img = coverRef.value;
      if (!img) return;
      try {
        const { primaryColor } = await getImageBackground(img);
        if (primaryColor) {
          const tinycolor = (await __vitePreload(async () => {
            const { default: __vite_default__ } = await import("./index-BMNXZoHW.js").then((n) => n.eQ);
            return { default: __vite_default__ };
          }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url)).default;
          const baseColor = tinycolor(primaryColor);
          const hsl = baseColor.toHsl();
          const darkColor = tinycolor({
            h: hsl.h,
            s: Math.min(hsl.s * 1.3, 1),
            l: Math.max(hsl.l * 0.15, 0.05)
          }).setAlpha(0.95);
          const midColor = tinycolor({
            h: hsl.h,
            s: Math.min(hsl.s * 1.1, 1),
            l: Math.max(hsl.l * 0.4, 0.1)
          }).setAlpha(0.85);
          const topColor = tinycolor({
            h: hsl.h,
            s: hsl.s * 0.8,
            l: Math.min(hsl.l * 0.6, 0.2)
          }).setAlpha(0.3);
          backgroundGradient.value = "linear-gradient(to top, ".concat(darkColor.toRgbString(), " 0%, ").concat(midColor.toRgbString(), " 60%, ").concat(topColor.toRgbString(), " 100%)");
        }
      } catch (error) {
        console.debug("Color extraction failed:", error);
        backgroundGradient.value = "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.3) 100%)";
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "home-list-card group cursor-pointer",
        style: normalizeStyle({ animationDelay: __props.animationDelay }),
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("click"))
      }, [
        createBaseVNode("div", _hoisted_1$6, [
          createBaseVNode("img", {
            ref_key: "coverRef",
            ref: coverRef,
            src: unref(getImgUrl)(__props.cover, "512y512"),
            class: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
            loading: "lazy",
            alt: __props.title,
            crossorigin: "anonymous",
            onLoad: extractColor
          }, null, 40, _hoisted_2$6),
          __props.showHoverTracks ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "absolute inset-0 flex items-end opacity-0 transition-all duration-500 ease-out group-hover:opacity-100",
            style: normalizeStyle(overlayStyle.value)
          }, [
            createBaseVNode("div", _hoisted_3$6, [
              createBaseVNode("div", _hoisted_4$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayTracks.value, (track, idx) => {
                  return openBlock(), createElementBlock("div", {
                    key: idx,
                    class: "flex items-center gap-2.5 text-white/95"
                  }, [
                    createBaseVNode("span", _hoisted_5$4, toDisplayString(idx + 1), 1),
                    createBaseVNode("span", _hoisted_6$4, toDisplayString(track.name), 1)
                  ]);
                }), 128)),
                __props.tracks.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7$3, toDisplayString(unref(t)("comp.homeListItem.loading")), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("button", {
                class: "flex h-12 w-12 flex-shrink-0 translate-y-2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-2xl transition-all duration-500 ease-out hover:scale-110 group-hover:translate-y-0 active:scale-95",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$emit("play"), ["stop"]))
              }, [..._cache[2] || (_cache[2] = [
                createBaseVNode("i", { class: "ri-play-fill ml-0.5 text-lg" }, null, -1)
              ])])
            ])
          ], 4)) : createCommentVNode("", true),
          __props.badge ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["absolute left-3 top-3 rounded-lg px-2.5 py-1 text-[11px] font-bold text-white shadow-lg backdrop-blur-sm", badgeClass.value])
          }, toDisplayString(__props.badge), 3)) : createCommentVNode("", true),
          __props.playCount ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
            _cache[3] || (_cache[3] = createBaseVNode("i", { class: "ri-play-fill text-[10px]" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(unref(formatNumber)(__props.playCount)), 1)
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          createBaseVNode("h3", _hoisted_10$1, toDisplayString(__props.title), 1),
          __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_11$1, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
        ])
      ], 4);
    };
  }
});
const HomeListItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a7546005"]]);
const _hoisted_1$5 = { class: "album-section" };
const _hoisted_2$5 = { class: "mb-6 flex items-center justify-between" };
const _hoisted_3$5 = { class: "flex items-center gap-3" };
const _hoisted_4$4 = { class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white" };
const _hoisted_5$3 = {
  key: 0,
  class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
};
const _hoisted_6$3 = {
  key: 1,
  class: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
};
const _hoisted_7$2 = {
  key: 2,
  class: "flex flex-col items-center justify-center py-20 text-neutral-400"
};
const _hoisted_8$1 = { class: "text-sm font-medium" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HomeAlbumSection",
  props: {
    title: {},
    limit: { default: 10 },
    columns: { default: 5 },
    rows: { default: 2 }
  },
  emits: ["more"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const router = useRouter();
    const albums = ref([]);
    const loading = ref(true);
    const albumTracksMap = reactive({});
    const displayCount = computed(() => {
      if (isMobile.value) {
        return 6;
      }
      return props.columns * props.rows;
    });
    const displayAlbums = computed(() => {
      const count = displayCount.value;
      return albums.value.slice(0, count);
    });
    const fetchAlbums = async () => {
      try {
        const { data } = await getTopAlbum({ limit: props.limit || displayCount.value + 5 });
        if (data.code === 200) {
          albums.value = data.weekData || data.monthData || data.albums || [];
          if (isElectron && !isMobile.value) {
            preloadAllTracks();
          }
        }
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      } finally {
        loading.value = false;
      }
    };
    const preloadAllTracks = async () => {
      const albumsToLoad = displayAlbums.value;
      const batchSize = 4;
      for (let i = 0; i < albumsToLoad.length; i += batchSize) {
        const batch = albumsToLoad.slice(i, i + batchSize);
        await Promise.all(
          batch.map(async (album) => {
            if (albumTracksMap[album.id]) return;
            try {
              const { data } = await getAlbum(album.id);
              if (data.code === 200 && data.songs) {
                albumTracksMap[album.id] = data.songs.slice(0, 3).map((s) => ({
                  id: s.id,
                  name: s.name
                }));
              }
            } catch (error) {
              console.debug("Failed to load tracks for album:", album.id, error);
            }
          })
        );
      }
    };
    const getArtistNames = (album) => {
      if (album.artists) {
        return album.artists.map((ar) => ar.name).join(" / ");
      }
      if (album.artist) {
        return album.artist.name;
      }
      return "";
    };
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
      }
    };
    const playAlbum = async (album) => {
      var _a, _b;
      try {
        const { data } = await getAlbum(album.id);
        if (data.code === 200 && ((_a = data.songs) == null ? void 0 : _a.length) > 0) {
          const playerCore = usePlayerCoreStore();
          const playlistStore = usePlaylistStore();
          const albumCover = ((_b = data.album) == null ? void 0 : _b.picUrl) || album.picUrl;
          const playlist = data.songs.map((s) => {
            var _a2;
            return {
              id: s.id,
              name: s.name,
              source: "netease",
              song: s,
              ...s,
              picUrl: ((_a2 = s.al) == null ? void 0 : _a2.picUrl) || albumCover,
              playLoading: false
            };
          });
          playlistStore.setPlayList(playlist, false, false);
          await playerCore.handlePlayMusic(playlist[0], true);
        }
      } catch (error) {
        console.error("Failed to play album:", error);
      }
    };
    onMounted(() => {
      fetchAlbums();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$5, [
            createBaseVNode("h2", _hoisted_4$4, toDisplayString(__props.title), 1),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "h-1.5 w-1.5 rounded-full bg-primary" }, null, -1))
          ]),
          createBaseVNode("button", {
            class: "group flex items-center gap-1.5 text-sm font-semibold text-neutral-400 transition-colors hover:text-primary dark:text-neutral-500 dark:hover:text-white",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("more"))
          }, [
            createBaseVNode("span", null, toDisplayString(unref(t)("comp.more")), 1),
            _cache[2] || (_cache[2] = createBaseVNode("i", { class: "ri-arrow-right-s-line text-base transition-transform group-hover:translate-x-1" }, null, -1))
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayCount.value, (i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: "space-y-3"
            }, [..._cache[3] || (_cache[3] = [
              createBaseVNode("div", { class: "aspect-square skeleton-shimmer rounded-2xl" }, null, -1),
              createBaseVNode("div", { class: "h-4 w-3/4 skeleton-shimmer rounded-lg" }, null, -1),
              createBaseVNode("div", { class: "h-3 w-1/2 skeleton-shimmer rounded-lg" }, null, -1)
            ])]);
          }), 128))
        ])) : displayAlbums.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayAlbums.value, (album, index2) => {
            return openBlock(), createBlock(HomeListItem, {
              key: album.id,
              cover: album.picUrl,
              title: album.name,
              subtitle: getArtistNames(album),
              tracks: albumTracksMap[album.id] || [],
              "show-hover-tracks": !unref(isMobile),
              "animation-delay": unref(calculateAnimationDelay)(index2, 0.04),
              onClick: ($event) => handleAlbumClick(album),
              onPlay: ($event) => playAlbum(album)
            }, null, 8, ["cover", "title", "subtitle", "tracks", "show-hover-tracks", "animation-delay", "onClick", "onPlay"]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_7$2, [
          _cache[4] || (_cache[4] = createBaseVNode("i", { class: "ri-album-line mb-4 text-5xl opacity-20" }, null, -1)),
          createBaseVNode("p", _hoisted_8$1, toDisplayString(unref(t)("comp.newAlbum.empty")), 1)
        ]))
      ]);
    };
  }
});
const _hoisted_1$4 = { class: "artists-section" };
const _hoisted_2$4 = {
  key: 0,
  class: "artists-scroll flex gap-6 md:gap-8 overflow-x-hidden pb-4"
};
const _hoisted_3$4 = { class: "artists-track flex gap-6 md:gap-8 lg:gap-10" };
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$2 = { class: "artist-avatar relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20" };
const _hoisted_6$2 = ["src", "alt"];
const _hoisted_7$1 = { class: "artist-name text-xs sm:text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-300 transition-all duration-300 group-hover:text-primary dark:group-hover:text-white group-hover:scale-105" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "HomeArtists",
  props: {
    title: {},
    limit: {}
  },
  setup(__props) {
    const props = __props;
    const { navigateToArtist } = useArtist();
    const artists = ref([]);
    const loading = ref(true);
    const scrollContainer = ref(null);
    const showLeftFade = ref(false);
    const showRightFade = ref(false);
    const fetchArtists = async () => {
      try {
        const { data } = await getHotSinger({ offset: 0, limit: props.limit || 10 });
        if (data.code === 200) {
          artists.value = data.artists.slice(0, props.limit || 10);
        }
      } catch (error) {
        console.error("Failed to fetch hot artists:", error);
      } finally {
        loading.value = false;
        setTimeout(updateScrollIndicators, 100);
      }
    };
    const handleWheel = (e) => {
      if (isMobile.value) return;
      if (!scrollContainer.value) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scrollContainer.value.scrollBy({
          left: e.deltaY,
          behavior: "auto"
          // Instant for smooth tracking
        });
      }
      updateScrollIndicators();
    };
    const updateScrollIndicators = () => {
      if (!scrollContainer.value) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value;
      showLeftFade.value = scrollLeft > 20;
      showRightFade.value = scrollLeft < scrollWidth - clientWidth - 20;
    };
    onMounted(() => {
      fetchArtists();
      if (scrollContainer.value) {
        scrollContainer.value.addEventListener("scroll", updateScrollIndicators);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$4, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          (openBlock(), createElementBlock(Fragment, null, renderList(8, (i) => {
            return createBaseVNode("div", {
              key: i,
              class: "flex flex-col items-center gap-3"
            }, [..._cache[0] || (_cache[0] = [
              createBaseVNode("div", { class: "h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 skeleton-shimmer rounded-full" }, null, -1),
              createBaseVNode("div", { class: "h-3 w-16 skeleton-shimmer rounded-lg" }, null, -1)
            ])]);
          }), 64))
        ])) : (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "scrollContainer",
          ref: scrollContainer,
          class: "artists-scroll relative overflow-x-auto overflow-y-hidden pt-2",
          style: { "margin-left": "calc(var(--page-pl) * -1)", "margin-right": "calc(var(--page-pr) * -1)", "padding-left": "var(--page-pl)", "padding-right": "var(--page-pr)" },
          onWheel: handleWheel
        }, [
          createBaseVNode("div", _hoisted_3$4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(artists.value, (item, index2) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "artist-item animate-item group flex flex-shrink-0 snap-start flex-col items-center gap-3 md:gap-4 cursor-pointer",
                style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index2, 0.04) }),
                onClick: ($event) => unref(navigateToArtist)(item.id)
              }, [
                createBaseVNode("div", _hoisted_5$2, [
                  createBaseVNode("img", {
                    src: unref(getImgUrl)(item.picUrl, "300y300"),
                    class: "h-full w-full object-cover grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-110",
                    loading: "lazy",
                    alt: item.name
                  }, null, 8, _hoisted_6$2),
                  _cache[1] || (_cache[1] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }, null, -1))
                ]),
                createBaseVNode("span", _hoisted_7$1, toDisplayString(item.name), 1)
              ], 12, _hoisted_4$3);
            }), 128))
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["scroll-fade-left pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-black to-transparent opacity-0 transition-opacity", { "opacity-100": showLeftFade.value }])
          }, null, 2),
          createBaseVNode("div", {
            class: normalizeClass(["scroll-fade-right pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-black to-transparent opacity-0 transition-opacity", { "opacity-100": showRightFade.value }])
          }, null, 2)
        ], 544))
      ]);
    };
  }
});
const HomeArtists = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-dac4788c"]]);
const _hoisted_1$3 = { class: "hero-section mb-6 md:mb-10" };
const _hoisted_2$3 = {
  key: 0,
  class: "space-y-4"
};
const _hoisted_3$3 = { class: "flex gap-1.5 overflow-hidden md:hidden" };
const _hoisted_4$2 = {
  key: 1,
  class: "space-y-4"
};
const _hoisted_5$1 = { class: "scrollbar-hide flex gap-1.5 overflow-x-auto pb-0.5 md:hidden" };
const _hoisted_6$1 = ["onClick"];
const _hoisted_7 = { class: "whitespace-nowrap" };
const _hoisted_8 = {
  key: 0,
  class: "h-[5px] w-[5px] rounded-full bg-white/50"
};
const _hoisted_9 = { class: "hero-grid grid gap-3" };
const _hoisted_10 = {
  class: "hero-card",
  style: { animationDelay: "0.12s" }
};
const _hoisted_11 = ["src"];
const _hoisted_12 = { class: "relative flex h-full flex-col justify-between p-5 md:p-6" };
const _hoisted_13 = { class: "text-2xl font-black leading-tight tracking-wider text-white md:text-3xl" };
const _hoisted_14 = { class: "mt-1.5 inline-flex items-center gap-1 rounded-md bg-white/15 px-2 py-0.5 text-[11px] font-semibold text-white/80 backdrop-blur-sm" };
const _hoisted_15 = { class: "flex items-end justify-between gap-4" };
const _hoisted_16 = {
  key: 0,
  class: "hidden min-w-0 flex-1 flex-col gap-0.5 md:flex"
};
const _hoisted_17 = { class: "w-4 flex-shrink-0 text-center text-xs tabular-nums text-white/40" };
const _hoisted_18 = { class: "min-w-0 flex-1 truncate text-sm font-medium text-white/90" };
const _hoisted_19 = { class: "flex-shrink-0 truncate text-xs text-white/40" };
const _hoisted_20 = {
  key: 0,
  class: "hero-card",
  style: { animationDelay: "0.22s" }
};
const _hoisted_21 = ["src"];
const _hoisted_22 = { class: "relative flex h-full items-center gap-4 p-5" };
const _hoisted_23 = { class: "fm-cover relative aspect-square flex-shrink-0 overflow-hidden rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.03]" };
const _hoisted_24 = ["src"];
const _hoisted_25 = {
  key: 1,
  class: "flex h-full w-full items-center justify-center bg-white/10"
};
const _hoisted_26 = {
  key: 2,
  class: "absolute bottom-2 right-2 flex items-end gap-[2px]"
};
const _hoisted_27 = { class: "flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5" };
const _hoisted_28 = { class: "min-w-0" };
const _hoisted_29 = { class: "truncate text-base font-bold text-white md:text-lg" };
const _hoisted_30 = { class: "mt-0.5 truncate text-sm text-white/60" };
const _hoisted_31 = { class: "flex items-center justify-between" };
const _hoisted_32 = { class: "flex items-center gap-3" };
const _hoisted_33 = ["title"];
const _hoisted_34 = ["title"];
const _hoisted_35 = { class: "flex items-center gap-1 text-xs font-semibold text-white/50" };
const _hoisted_36 = { class: "fm-card relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm transition-all duration-300 ease-out group-hover:shadow-xl dark:bg-neutral-800" };
const _hoisted_37 = { class: "absolute inset-0 grid grid-cols-2 grid-rows-2" };
const _hoisted_38 = ["src"];
const _hoisted_39 = { class: "relative flex h-full flex-col justify-between p-5" };
const _hoisted_40 = { class: "inline-flex w-fit items-center gap-1 rounded-md bg-black/30 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm" };
const _hoisted_41 = { class: "flex items-end justify-between gap-4" };
const _hoisted_42 = { class: "text-lg font-bold text-white" };
const _hoisted_43 = { class: "mt-0.5 text-sm text-white/70" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeHero",
  setup(__props) {
    const { t } = useI18n();
    const router = useRouter();
    const recommendStore = useRecommendStore();
    const intelligenceModeStore = useIntelligenceModeStore();
    const userStore = useUserStore();
    const playerCoreStore = usePlayerCoreStore();
    const loading = ref(false);
    const fmCurrentSong = ref(null);
    const fmNextSong = ref(null);
    const fmLoading = ref(false);
    const hotPlaylists = ref([]);
    const hotArtistsList = ref([]);
    const dailyCoverRef = ref(null);
    const fmCoverRef = ref(null);
    const dailyCardBg = ref("linear-gradient(135deg, #667eea 0%, #764ba2 100%)");
    const fmCardBg = ref("linear-gradient(135deg, #e91e63 0%, #c2185b 100%)");
    const isLoggedIn = computed(() => !!userStore.user);
    const dayRecommendSongs = computed(() => recommendStore.dailyRecommendSongs);
    const dayRecommendCover = computed(() => {
      var _a, _b;
      return ((_b = (_a = dayRecommendSongs.value[0]) == null ? void 0 : _a.al) == null ? void 0 : _b.picUrl) || "";
    });
    const fmCurrentCover = computed(
      () => {
        var _a, _b, _c, _d;
        return ((_b = (_a = fmCurrentSong.value) == null ? void 0 : _a.album) == null ? void 0 : _b.picUrl) || ((_d = (_c = fmCurrentSong.value) == null ? void 0 : _c.al) == null ? void 0 : _d.picUrl) || "";
      }
    );
    const fmCurrentArtist = computed(() => {
      const song = fmCurrentSong.value;
      if (!song) return t("comp.homeHero.personalFmDesc");
      const artists = song.artists || song.ar;
      return (artists == null ? void 0 : artists.map((a) => a.name).join(" / ")) || "";
    });
    const isIntelligenceMode = computed(() => intelligenceModeStore.isIntelligenceMode);
    const isFmPlaying = computed(
      () => {
        var _a;
        return !!fmCurrentSong.value && ((_a = playerCoreStore.currentSong) == null ? void 0 : _a.id) === fmCurrentSong.value.id && playerCoreStore.isPlaying;
      }
    );
    const extractDailyColor = async () => {
      const img = dailyCoverRef.value;
      if (!img) return;
      try {
        const { primaryColor } = await getImageBackground(img);
        if (primaryColor) {
          const tinycolor = (await __vitePreload(async () => {
            const { default: __vite_default__ } = await import("./index-BMNXZoHW.js").then((n) => n.eQ);
            return { default: __vite_default__ };
          }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url)).default;
          const base = tinycolor(primaryColor);
          const hsl = base.toHsl();
          const c1 = tinycolor({ h: hsl.h, s: Math.min(hsl.s * 1.2, 1), l: 0.35 });
          const c2 = tinycolor({ h: (hsl.h + 30) % 360, s: Math.min(hsl.s * 1.1, 1), l: 0.25 });
          dailyCardBg.value = "linear-gradient(135deg, ".concat(c1.toHexString(), " 0%, ").concat(c2.toHexString(), " 100%)");
        }
      } catch (e) {
      }
    };
    const extractFmColor = async () => {
      const img = fmCoverRef.value;
      if (!img) return;
      try {
        const { primaryColor } = await getImageBackground(img);
        if (primaryColor) {
          const tinycolor = (await __vitePreload(async () => {
            const { default: __vite_default__ } = await import("./index-BMNXZoHW.js").then((n) => n.eQ);
            return { default: __vite_default__ };
          }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url)).default;
          const base = tinycolor(primaryColor);
          const hsl = base.toHsl();
          const c1 = tinycolor({ h: hsl.h, s: Math.min(hsl.s * 1.3, 1), l: 0.4 });
          const c2 = tinycolor({ h: (hsl.h + 20) % 360, s: Math.min(hsl.s * 1.1, 1), l: 0.3 });
          fmCardBg.value = "linear-gradient(135deg, ".concat(c1.toHexString(), " 0%, ").concat(c2.toHexString(), " 100%)");
        }
      } catch (e) {
      }
    };
    const fetchFmSongs = async (retries = 3) => {
      var _a;
      for (let i = 0; i < retries; i++) {
        try {
          const res = await getPersonalFM();
          const songs = (_a = res.data) == null ? void 0 : _a.data;
          if (Array.isArray(songs) && songs.length > 0) return songs;
        } catch (e) {
          if (i < retries - 1) await new Promise((r) => setTimeout(r, 1e3));
        }
      }
      return [];
    };
    const loadFmSongs = async () => {
      if (fmLoading.value) return;
      fmLoading.value = true;
      try {
        const songs = await fetchFmSongs();
        if (songs.length > 0) {
          fmCurrentSong.value = songs[0];
          fmNextSong.value = songs[1] || null;
        }
      } finally {
        fmLoading.value = false;
      }
    };
    const preloadNextFm = async () => {
      if (fmNextSong.value) return;
      try {
        const songs = await fetchFmSongs(1);
        if (songs.length > 0) {
          fmNextSong.value = songs[0];
        }
      } catch (e) {
      }
    };
    const handleFmPlay = async () => {
      var _a, _b, _c;
      if (!fmCurrentSong.value) return;
      if (((_a = playerCoreStore.currentSong) == null ? void 0 : _a.id) === fmCurrentSong.value.id) {
        const { usePlaylistStore: usePlaylistStore2 } = await __vitePreload(async () => {
          const { usePlaylistStore: usePlaylistStore3 } = await import("./index-BMNXZoHW.js").then((n) => n.eS);
          return { usePlaylistStore: usePlaylistStore3 };
        }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
        const playlistStore = usePlaylistStore2();
        await playlistStore.setPlay(playerCoreStore.currentSong);
        return;
      }
      try {
        const { usePlayerCoreStore: usePlayerCoreStore2 } = await __vitePreload(async () => {
          const { usePlayerCoreStore: usePlayerCoreStore22 } = await import("./index-BMNXZoHW.js").then((n) => n.eR);
          return { usePlayerCoreStore: usePlayerCoreStore22 };
        }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
        const { usePlaylistStore: usePlaylistStore2 } = await __vitePreload(async () => {
          const { usePlaylistStore: usePlaylistStore3 } = await import("./index-BMNXZoHW.js").then((n) => n.eS);
          return { usePlaylistStore: usePlaylistStore3 };
        }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
        const playerCore = usePlayerCoreStore2();
        const playlistStore = usePlaylistStore2();
        const song = fmCurrentSong.value;
        const playlist = [
          {
            id: song.id,
            name: song.name,
            picUrl: ((_b = song.al) == null ? void 0 : _b.picUrl) || ((_c = song.album) == null ? void 0 : _c.picUrl),
            ar: song.artists || song.ar,
            al: song.al || song.album,
            source: "netease",
            song,
            ...song,
            playLoading: false
          }
        ];
        playlistStore.setPlayList(playlist, false, false);
        playerCore.isFmPlaying = true;
        await playerCore.handlePlayMusic(playlist[0], true);
      } catch (error) {
        console.error("Failed to play Personal FM:", error);
      }
    };
    const handleFmNext = async () => {
      if (fmLoading.value) return;
      if (fmNextSong.value) {
        fmCurrentSong.value = fmNextSong.value;
        fmNextSong.value = null;
        preloadNextFm();
      } else {
        await loadFmSongs();
      }
      await handleFmPlay();
    };
    const handleFmTrash = async () => {
      const song = fmCurrentSong.value;
      if (!song) return;
      try {
        await fmTrash(song.id);
      } catch (e) {
      }
      await handleFmNext();
    };
    const quickNavItems = computed(() => {
      const items = [
        {
          key: "intelligence",
          label: t("comp.homeHero.intelligenceMode"),
          icon: "ri-heart-pulse-fill",
          active: isIntelligenceMode.value,
          action: toggleIntelligenceMode,
          show: isLoggedIn.value
        },
        {
          key: "toplist",
          label: t("comp.toplist"),
          icon: "ri-trophy-line",
          active: false,
          action: () => router.push("/toplist"),
          show: true
        },
        {
          key: "favorite",
          label: t("comp.homeHero.quickNav.myFavorite"),
          icon: "ri-heart-3-line",
          active: false,
          action: () => router.push("/favorite"),
          show: true
        },
        {
          key: "podcast",
          label: t("podcast.podcast"),
          icon: "ri-radio-2-line",
          active: false,
          action: () => router.push("/podcast"),
          show: true
        },
        {
          key: "mv",
          label: t("comp.mv"),
          icon: "ri-movie-2-line",
          active: false,
          action: () => router.push("/mv"),
          show: true
        },
        {
          key: "playlist",
          label: t("comp.list"),
          icon: "ri-play-list-2-line",
          active: false,
          action: () => router.push("/list"),
          show: true
        },
        {
          key: "album",
          label: t("comp.newAlbum.title"),
          icon: "ri-album-line",
          active: false,
          action: () => router.push("/album"),
          show: true
        },
        {
          key: "history",
          label: t("comp.history"),
          icon: "ri-history-line",
          active: false,
          action: () => router.push("/history"),
          show: true
        }
      ];
      return items.filter((item) => item.show);
    });
    const fetchHeroData = async () => {
      try {
        loading.value = true;
        const promises = [];
        promises.push(recommendStore.refreshIfStale());
        promises.push(
          getPersonalizedPlaylist(8).then((res) => {
            const list = res.result || res.data;
            if (list && !isLoggedIn.value) hotPlaylists.value = list;
          }).catch(() => {
          })
        );
        if (isLoggedIn.value) {
          promises.push(loadFmSongs());
        } else {
          promises.push(
            getHotSinger({ offset: 0, limit: 6 }).then((res) => {
              if (res.artists) hotArtistsList.value = res.artists;
            }).catch(() => {
            })
          );
        }
        await Promise.all(promises);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      } finally {
        loading.value = false;
      }
    };
    const showDayRecommend = () => {
      if (dayRecommendSongs.value.length === 0) return;
      navigateToMusicList(router, {
        type: "dailyRecommend",
        name: t("comp.recommendSinger.songlist"),
        songList: dayRecommendSongs.value,
        canRemove: false
      });
    };
    const playDayRecommend = async () => {
      if (dayRecommendSongs.value.length === 0) return;
      try {
        const { usePlayerCoreStore: usePlayerCoreStore2 } = await __vitePreload(async () => {
          const { usePlayerCoreStore: usePlayerCoreStore22 } = await import("./index-BMNXZoHW.js").then((n) => n.eR);
          return { usePlayerCoreStore: usePlayerCoreStore22 };
        }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
        const { usePlaylistStore: usePlaylistStore2 } = await __vitePreload(async () => {
          const { usePlaylistStore: usePlaylistStore3 } = await import("./index-BMNXZoHW.js").then((n) => n.eS);
          return { usePlaylistStore: usePlaylistStore3 };
        }, true ? __vite__mapDeps([0,1]) : void 0, import.meta.url);
        const playerCore = usePlayerCoreStore2();
        const playlistStore = usePlaylistStore2();
        const songs = dayRecommendSongs.value.map((s) => {
          var _a;
          return {
            id: s.id,
            name: s.name,
            picUrl: (_a = s.al) == null ? void 0 : _a.picUrl,
            source: "netease",
            song: s,
            ...s,
            playLoading: false
          };
        });
        playlistStore.setPlayList(songs, false, false);
        await playerCore.handlePlayMusic(songs[0], true);
      } catch (error) {
        console.error("Failed to play daily recommend:", error);
      }
    };
    const toggleIntelligenceMode = () => {
      if (isIntelligenceMode.value) {
        intelligenceModeStore.clearIntelligenceMode();
      } else {
        intelligenceModeStore.playIntelligenceMode();
      }
    };
    onMounted(() => {
      fetchHeroData();
    });
    onActivated(() => {
      recommendStore.refreshIfStale();
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            (openBlock(), createElementBlock(Fragment, null, renderList(6, (i) => {
              return createBaseVNode("div", {
                key: i,
                class: "h-9 w-20 flex-shrink-0 skeleton-shimmer rounded-full"
              });
            }), 64))
          ]),
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "hero-grid grid gap-3" }, [
            createBaseVNode("div", {
              class: "skeleton-shimmer rounded-2xl",
              style: { "height": "160px" }
            }),
            createBaseVNode("div", {
              class: "skeleton-shimmer rounded-2xl",
              style: { "height": "160px" }
            })
          ], -1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_4$2, [
          createBaseVNode("nav", _hoisted_5$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(quickNavItems.value, (item, index2) => {
              return openBlock(), createElementBlock("button", {
                key: item.key,
                class: normalizeClass(["nav-chip flex flex-shrink-0 items-center gap-1.5 rounded-full px-3.5 py-[7px] text-[13px] font-medium transition-all duration-250 hover:text-neutral-900 dark:hover:text-neutral-100", [
                  item.active ? "bg-primary text-white" : "bg-neutral-100/60 text-neutral-500 hover:bg-neutral-200/80 dark:bg-white/[0.04] dark:text-neutral-400 dark:hover:bg-white/[0.07]"
                ]]),
                style: normalizeStyle({ animationDelay: "".concat(index2 * 0.03, "s") }),
                onClick: item.action
              }, [
                createBaseVNode("i", {
                  class: normalizeClass([item.icon, "text-sm"])
                }, null, 2),
                createBaseVNode("span", _hoisted_7, toDisplayString(item.label), 1),
                item.active ? (openBlock(), createElementBlock("span", _hoisted_8)) : createCommentVNode("", true)
              ], 14, _hoisted_6$1);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", {
                class: "daily-card group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:shadow-xl",
                style: normalizeStyle({ background: dailyCardBg.value }),
                onClick: showDayRecommend
              }, [
                dayRecommendCover.value ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  ref_key: "dailyCoverRef",
                  ref: dailyCoverRef,
                  src: unref(getImgUrl)(dayRecommendCover.value, "512y512"),
                  alt: "",
                  class: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                  crossorigin: "anonymous",
                  onLoad: extractDailyColor
                }, null, 40, _hoisted_11)) : createCommentVNode("", true),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" }, null, -1)),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", null, [
                    createBaseVNode("h3", _hoisted_13, toDisplayString(unref(t)("comp.homeHero.dailyRecommend")), 1),
                    createBaseVNode("span", _hoisted_14, [
                      _cache[2] || (_cache[2] = createBaseVNode("i", { class: "ri-calendar-check-fill" }, null, -1)),
                      createTextVNode(" " + toDisplayString(dayRecommendSongs.value.length) + " " + toDisplayString(unref(t)("comp.homeHero.songs")), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    dayRecommendSongs.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(dayRecommendSongs.value.slice(0, 3), (song, idx) => {
                        var _a2, _b;
                        return openBlock(), createElementBlock("div", {
                          key: song.id,
                          class: "flex items-center gap-2 py-0.5"
                        }, [
                          createBaseVNode("span", _hoisted_17, toDisplayString(idx + 1), 1),
                          createBaseVNode("span", _hoisted_18, toDisplayString(song.name), 1),
                          createBaseVNode("span", _hoisted_19, toDisplayString((_b = (_a2 = song.ar) == null ? void 0 : _a2[0]) == null ? void 0 : _b.name), 1)
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true),
                    createBaseVNode("button", {
                      class: "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95",
                      onClick: withModifiers(playDayRecommend, ["stop"])
                    }, [..._cache[3] || (_cache[3] = [
                      createBaseVNode("i", { class: "ri-play-fill ml-0.5 text-xl" }, null, -1)
                    ])])
                  ])
                ])
              ], 4)
            ]),
            isLoggedIn.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
              createBaseVNode("div", {
                class: "fm-card group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-out hover:shadow-xl",
                style: normalizeStyle({ background: fmCardBg.value }),
                onClick: handleFmPlay
              }, [
                fmCurrentCover.value ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  ref_key: "fmCoverRef",
                  ref: fmCoverRef,
                  src: unref(getImgUrl)(fmCurrentCover.value, "512y512"),
                  alt: "",
                  class: normalizeClass(["absolute inset-0 h-full w-full scale-150 object-cover opacity-30 blur-2xl", isFmPlaying.value ? "fm-bg-flow" : ""]),
                  crossorigin: "anonymous",
                  onLoad: extractFmColor
                }, null, 42, _hoisted_21)) : createCommentVNode("", true),
                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" }, null, -1)),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    fmCurrentCover.value ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: unref(getImgUrl)(fmCurrentCover.value, "256y256"),
                      alt: "",
                      class: "h-full w-full object-cover"
                    }, null, 8, _hoisted_24)) : (openBlock(), createElementBlock("div", _hoisted_25, [..._cache[5] || (_cache[5] = [
                      createBaseVNode("i", { class: "ri-radio-fill text-3xl text-white/40" }, null, -1)
                    ])])),
                    isFmPlaying.value ? (openBlock(), createElementBlock("div", _hoisted_26, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(3, (i) => {
                        return createBaseVNode("span", {
                          key: i,
                          class: "eq-bar",
                          style: normalizeStyle({ animationDelay: "".concat((i - 1) * 0.15, "s") })
                        }, null, 4);
                      }), 64))
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("div", _hoisted_28, [
                      createBaseVNode("h3", _hoisted_29, toDisplayString(((_a = fmCurrentSong.value) == null ? void 0 : _a.name) || unref(t)("comp.homeHero.discoverMusic")), 1),
                      createBaseVNode("p", _hoisted_30, toDisplayString(fmCurrentArtist.value), 1)
                    ]),
                    createBaseVNode("div", _hoisted_31, [
                      createBaseVNode("div", _hoisted_32, [
                        createBaseVNode("button", {
                          class: "flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white",
                          title: unref(t)("comp.homeHero.fmTrash"),
                          onClick: withModifiers(handleFmTrash, ["stop"])
                        }, [..._cache[6] || (_cache[6] = [
                          createBaseVNode("i", { class: "ri-thumb-down-line text-lg" }, null, -1)
                        ])], 8, _hoisted_33),
                        createBaseVNode("button", {
                          class: "flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-white/30 active:scale-95",
                          onClick: withModifiers(handleFmPlay, ["stop"])
                        }, [
                          createBaseVNode("i", {
                            class: normalizeClass([isFmPlaying.value ? "ri-pause-fill" : "ri-play-fill ml-0.5", "text-xl"])
                          }, null, 2)
                        ]),
                        createBaseVNode("button", {
                          class: "flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white",
                          title: unref(t)("comp.homeHero.fmNext"),
                          onClick: withModifiers(handleFmNext, ["stop"])
                        }, [..._cache[7] || (_cache[7] = [
                          createBaseVNode("i", { class: "ri-skip-forward-fill text-lg" }, null, -1)
                        ])], 8, _hoisted_34)
                      ]),
                      createBaseVNode("span", _hoisted_35, [
                        _cache[8] || (_cache[8] = createBaseVNode("i", { class: "ri-radio-fill" }, null, -1)),
                        createTextVNode(" " + toDisplayString(unref(t)("comp.homeHero.personalFm")), 1)
                      ])
                    ])
                  ])
                ])
              ], 4)
            ])) : createCommentVNode("", true),
            !isLoggedIn.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "hero-card group cursor-pointer",
              style: { animationDelay: "0.22s" },
              onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/list"))
            }, [
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("div", _hoisted_37, [
                  hotPlaylists.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(hotPlaylists.value.slice(0, 4), (pl, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: idx,
                      class: "overflow-hidden"
                    }, [
                      createBaseVNode("img", {
                        src: unref(getImgUrl)(pl.picUrl, "256y256"),
                        alt: "",
                        class: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      }, null, 8, _hoisted_38)
                    ]);
                  }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(4, (i) => {
                    return createBaseVNode("div", {
                      key: "empty-".concat(i),
                      class: "flex items-center justify-center bg-neutral-200/80 dark:bg-neutral-700/50"
                    }, [..._cache[10] || (_cache[10] = [
                      createBaseVNode("i", { class: "ri-play-list-2-line text-lg text-neutral-300 dark:text-neutral-600" }, null, -1)
                    ])]);
                  }), 64))
                ]),
                _cache[13] || (_cache[13] = createBaseVNode("div", { class: "absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" }, null, -1)),
                createBaseVNode("div", _hoisted_39, [
                  createBaseVNode("span", _hoisted_40, [
                    _cache[11] || (_cache[11] = createBaseVNode("i", { class: "ri-play-list-2-line" }, null, -1)),
                    createTextVNode(" " + toDisplayString(unref(t)("comp.homeHero.hotPlaylists")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_41, [
                    createBaseVNode("div", null, [
                      createBaseVNode("h3", _hoisted_42, toDisplayString(unref(t)("comp.homeHero.hotPlaylists")), 1),
                      createBaseVNode("p", _hoisted_43, toDisplayString(unref(t)("comp.homeHero.discoverNewReleases")), 1)
                    ]),
                    _cache[12] || (_cache[12] = createBaseVNode("div", { class: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30" }, [
                      createBaseVNode("i", { class: "ri-arrow-right-s-line text-xl" })
                    ], -1))
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ])
        ]))
      ]);
    };
  }
});
const HomeHero = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-378e0be0"]]);
const _hoisted_1$2 = { class: "new-songs-section" };
const _hoisted_2$2 = { class: "mb-6 flex items-center justify-between" };
const _hoisted_3$2 = { class: "flex items-center gap-3" };
const _hoisted_4$1 = { class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeNewSongs",
  props: {
    title: {},
    limit: {}
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const playerStore = usePlayerStore();
    const songs = ref([]);
    const loading = ref(true);
    const gridClass = computed(
      () => isMobile.value ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    );
    const fetchSongs = async () => {
      try {
        const { data } = await getRecommendMusic({ limit: props.limit || 12 });
        if (data.code === 200) {
          songs.value = data.result.slice(0, props.limit || 12).map((item) => ({
            ...item,
            source: "netease",
            picUrl: item.picUrl,
            al: {
              picUrl: item.picUrl,
              name: item.name,
              id: item.id
            },
            ar: item.song.artists
          }));
        }
      } catch (error) {
        console.error("Failed to fetch new songs:", error);
      } finally {
        loading.value = false;
      }
    };
    const playSong = (song) => {
      playerStore.setPlay(song);
    };
    const playAll = () => {
      if (songs.value.length > 0) {
        playerStore.setPlayList(songs.value);
        playerStore.setPlay(songs.value[0]);
      }
    };
    onMounted(() => {
      fetchSongs();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("h2", _hoisted_4$1, toDisplayString(__props.title), 1),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "h-1.5 w-1.5 rounded-full bg-primary" }, null, -1))
          ]),
          createBaseVNode("button", {
            class: "play-all-btn text-xs md:text-sm font-bold text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80 transition-colors flex items-center gap-1.5",
            onClick: playAll
          }, [
            _cache[1] || (_cache[1] = createBaseVNode("i", { class: "iconfont icon-playfill text-sm" }, null, -1)),
            createBaseVNode("span", null, toDisplayString(unref(t)("common.playAll")), 1)
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["songs-grid grid gap-3", gridClass.value])
        }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(10, (i) => {
            return createBaseVNode("div", {
              key: i,
              class: "h-20 skeleton-shimmer rounded-xl md:rounded-2xl"
            });
          }), 64))
        ], 2)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["songs-grid grid gap-2 md:gap-3", gridClass.value])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(songs.value, (song, index2) => {
            return openBlock(), createBlock(_sfc_main$7, {
              key: song.id,
              item: song,
              home: "",
              favorite: false,
              style: normalizeStyle({ animationDelay: unref(calculateAnimationDelay)(index2 % 5, 0.05) }),
              class: "animate-item",
              onPlay: ($event) => playSong(song)
            }, null, 8, ["item", "style", "onPlay"]);
          }), 128))
        ], 2))
      ]);
    };
  }
});
const HomeNewSongs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-33480896"]]);
const _hoisted_1$1 = { class: "playlist-section" };
const _hoisted_2$1 = { class: "mb-6 flex items-center justify-between" };
const _hoisted_3$1 = { class: "flex items-center gap-3" };
const _hoisted_4 = { class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white" };
const _hoisted_5 = {
  key: 2,
  class: "flex flex-col items-center justify-center py-20 text-neutral-400"
};
const _hoisted_6 = { class: "text-sm font-medium" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomePlaylistSection",
  props: {
    title: {},
    limit: { default: 15 },
    columns: { default: 5 },
    rows: { default: 3 }
  },
  emits: ["more"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const router = useRouter();
    const playlists = ref([]);
    const loading = ref(true);
    const playlistTracksMap = reactive({});
    const effectiveColumns = computed(
      () => isMobile.value ? Math.min(2, props.columns) : props.columns
    );
    const effectiveRows = computed(() => isMobile.value ? 2 : props.rows);
    const displayCount = computed(() => effectiveColumns.value * effectiveRows.value);
    const displayPlaylists = computed(() => {
      const count = displayCount.value;
      return playlists.value.slice(0, count);
    });
    const gridStyle = computed(() => ({
      gridTemplateColumns: "repeat(".concat(effectiveColumns.value, ", minmax(0, 1fr))")
    }));
    const fetchPlaylists = async () => {
      try {
        const { data } = await getPersonalizedPlaylist(props.limit || displayCount.value + 5);
        if (data.code === 200) {
          playlists.value = data.result || [];
        }
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      } finally {
        loading.value = false;
      }
    };
    const loadTracksOnHover = async (id) => {
      var _a;
      if (playlistTracksMap[id]) return;
      try {
        const { data } = await getListDetail(id);
        if ((_a = data.playlist) == null ? void 0 : _a.tracks) {
          playlistTracksMap[id] = data.playlist.tracks.slice(0, 3).map((s) => ({
            id: s.id,
            name: s.name
          }));
        }
      } catch (e) {
      }
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
        console.error("Failed to navigate to playlist:", error);
      }
    };
    const playPlaylist = async (item) => {
      var _a, _b;
      try {
        const { data } = await getListDetail(item.id);
        if (((_b = (_a = data.playlist) == null ? void 0 : _a.tracks) == null ? void 0 : _b.length) > 0) {
          const playerCore = usePlayerCoreStore();
          const playlistStore = usePlaylistStore();
          const playlist = data.playlist.tracks.map((s) => {
            var _a2;
            return {
              id: s.id,
              name: s.name,
              picUrl: ((_a2 = s.al) == null ? void 0 : _a2.picUrl) || item.picUrl,
              source: "netease",
              song: s,
              ...s,
              playLoading: false
            };
          });
          playlistStore.setPlayList(playlist, false, false);
          await playerCore.handlePlayMusic(playlist[0], true);
        }
      } catch (error) {
        console.error("Failed to play playlist:", error);
      }
    };
    onMounted(() => {
      fetchPlaylists();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("h2", _hoisted_4, toDisplayString(__props.title), 1),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "h-1.5 w-1.5 rounded-full bg-primary" }, null, -1))
          ]),
          createBaseVNode("button", {
            class: "group flex items-center gap-1.5 text-sm font-semibold text-neutral-400 transition-colors hover:text-primary dark:text-neutral-500 dark:hover:text-white",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("more"))
          }, [
            createBaseVNode("span", null, toDisplayString(unref(t)("comp.more")), 1),
            _cache[2] || (_cache[2] = createBaseVNode("i", { class: "ri-arrow-right-s-line text-base transition-transform group-hover:translate-x-1" }, null, -1))
          ])
        ]),
        loading.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "grid gap-6",
          style: normalizeStyle(gridStyle.value)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayCount.value, (i) => {
            return openBlock(), createElementBlock("div", {
              key: i,
              class: "space-y-3"
            }, [..._cache[3] || (_cache[3] = [
              createBaseVNode("div", { class: "aspect-square skeleton-shimmer rounded-2xl" }, null, -1),
              createBaseVNode("div", { class: "h-4 w-3/4 skeleton-shimmer rounded-lg" }, null, -1),
              createBaseVNode("div", { class: "h-3 w-1/2 skeleton-shimmer rounded-lg" }, null, -1)
            ])]);
          }), 128))
        ], 4)) : displayPlaylists.value.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "grid gap-6",
          style: normalizeStyle(gridStyle.value)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayPlaylists.value, (item, index2) => {
            return openBlock(), createBlock(HomeListItem, {
              key: item.id,
              cover: item.picUrl,
              title: item.name,
              subtitle: item.copywriter,
              tracks: unref(isElectron) ? playlistTracksMap[item.id] || [] : [],
              "show-hover-tracks": unref(isElectron),
              "play-count": item.playCount,
              "animation-delay": unref(calculateAnimationDelay)(index2, 0.04),
              onClick: ($event) => handlePlaylistClick(item),
              onPlay: ($event) => playPlaylist(item),
              onMouseenter: ($event) => unref(isElectron) && loadTracksOnHover(item.id)
            }, null, 8, ["cover", "title", "subtitle", "tracks", "show-hover-tracks", "play-count", "animation-delay", "onClick", "onPlay", "onMouseenter"]);
          }), 128))
        ], 4)) : (openBlock(), createElementBlock("div", _hoisted_5, [
          _cache[4] || (_cache[4] = createBaseVNode("i", { class: "ri-play-list-2-line mb-4 text-5xl opacity-20" }, null, -1)),
          createBaseVNode("p", _hoisted_6, toDisplayString(unref(t)("comp.recommendSonglist.empty")), 1)
        ]))
      ]);
    };
  }
});
const _hoisted_1 = { class: "home-container h-full w-full bg-white dark:bg-black transition-colors duration-500" };
const _hoisted_2 = { class: "home-content w-full pb-32 page-padding" };
const _hoisted_3 = { class: "content-sections space-y-10 md:space-y-8 lg:space-y-12" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Home"
  },
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Scrollbar), { class: "h-full" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(HomeHero),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_sfc_main$1, {
                  title: unref(t)("comp.recommendSonglist.title"),
                  limit: 18
                }, null, 8, ["title"]),
                createVNode(HomeArtists, {
                  title: unref(t)("comp.recommendSinger.title"),
                  limit: 15
                }, null, 8, ["title"]),
                createVNode(_sfc_main$5, {
                  title: unref(t)("comp.newAlbum.title"),
                  limit: 6,
                  columns: 5,
                  rows: 1,
                  onMore: _cache[0] || (_cache[0] = ($event) => unref(router).push("/album"))
                }, null, 8, ["title"]),
                createVNode(HomeNewSongs, {
                  title: unref(t)("comp.recommendNewMusic.title"),
                  limit: 20
                }, null, 8, ["title"])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8ce86cf1"]]);
export {
  index as default
};

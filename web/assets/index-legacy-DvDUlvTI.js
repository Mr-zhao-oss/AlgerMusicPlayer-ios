;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './list-legacy-DrFncIKZ.js', './MusicListNavigator-legacy-0pJHpxez.js', './StickyTabPage-legacy-Bb01b8RU.js', './music-legacy-CGPq9ktk.js'], function (exports, module) {
    'use strict';

    var request, defineComponent, useI18n, useRouter, useRoute, ref, onMounted, watch, createBlock, withCtx, createBaseVNode, openBlock, createElementBlock, Fragment, renderList, withModifiers, normalizeStyle, unref, calculateAnimationDelay, getImgUrl, createTextVNode, toDisplayString, createCommentVNode, createVNode, __unplugin_components_2, computed, nextTick, usePlayerCoreStore, usePlaylistStore, _export_sfc, getAlbum, navigateToMusicList, StickyTabPage;
    return {
      setters: [module => {
        request = module.bl;
        defineComponent = module.d;
        useI18n = module.a5;
        useRouter = module.aU;
        useRoute = module.bh;
        ref = module.A;
        onMounted = module.aq;
        watch = module.Y;
        createBlock = module.aY;
        withCtx = module.as;
        createBaseVNode = module.ab;
        openBlock = module.a7;
        createElementBlock = module.a8;
        Fragment = module.ae;
        renderList = module.af;
        withModifiers = module.a9;
        normalizeStyle = module.ag;
        unref = module.ad;
        calculateAnimationDelay = module.aZ;
        getImgUrl = module.aQ;
        createTextVNode = module.b7;
        toDisplayString = module.ac;
        createCommentVNode = module.ah;
        createVNode = module.ak;
        __unplugin_components_2 = module.bj;
        computed = module.z;
        nextTick = module.a2;
        usePlayerCoreStore = module.a$;
        usePlaylistStore = module.b0;
        _export_sfc = module.ap;
      }, module => {
        getAlbum = module.g;
      }, module => {
        navigateToMusicList = module.n;
      }, module => {
        StickyTabPage = module.S;
      }, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".animate-item[data-v-1b1e634a] {\n  animation: fadeInUp-1b1e634a 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeInUp-1b1e634a {\nfrom {\n    opacity: 0;\n    transform: translateY(24px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const getNewAlbums = params => {
          return request.get("/album/new", {
            params
          });
        };
        const _hoisted_1 = {
          class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        };
        const _hoisted_2 = ["onClick"];
        const _hoisted_3 = {
          class: "relative aspect-square overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500"
        };
        const _hoisted_4 = ["src", "alt"];
        const _hoisted_5 = {
          class: "absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
        };
        const _hoisted_6 = ["onClick"];
        const _hoisted_7 = {
          key: 0,
          class: "absolute top-3 left-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        };
        const _hoisted_8 = {
          class: "mt-3 space-y-1"
        };
        const _hoisted_9 = {
          class: "text-sm md:text-base font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors"
        };
        const _hoisted_10 = {
          key: 0,
          class: "text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1"
        };
        const _hoisted_11 = {
          key: 0,
          class: "flex justify-center items-center py-8"
        };
        const _hoisted_12 = {
          class: "ml-2 text-neutral-500"
        };
        const _hoisted_13 = {
          key: 1,
          class: "text-center py-8 text-neutral-500"
        };
        const TOTAL_ITEMS = 30;
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "Album"
          },
          __name: "index",
          setup(__props) {
            const {
              t
            } = useI18n();
            const router = useRouter();
            const route = useRoute();
            const pageRef = ref();
            const areas = computed(() => [{
              name: t("comp.pages.album.area.all"),
              value: "ALL"
            }, {
              name: t("comp.pages.album.area.chinese"),
              value: "ZH"
            }, {
              name: t("comp.pages.album.area.western"),
              value: "EA"
            }, {
              name: t("comp.pages.album.area.korea"),
              value: "KR"
            }, {
              name: t("comp.pages.album.area.japan"),
              value: "JP"
            }]);
            const albumList = ref([]);
            const page = ref(0);
            const hasMore = ref(true);
            const isLoadingMore = ref(false);
            const loading = ref(false);
            const currentArea = ref(route.query.area || "ALL");
            const currentAreaName = computed(() => areas.value.find(a => a.value === currentArea.value)?.name || t("comp.pages.album.area.all"));
            const handleAreaChange = value => {
              router.replace({
                query: {
                  area: value
                }
              });
              loadList(value);
            };
            const loadList = async (area, isLoadMore = false) => {
              if (!hasMore.value && isLoadMore) return;
              if (isLoadMore) {
                isLoadingMore.value = true;
              } else {
                loading.value = true;
                page.value = 0;
                albumList.value = [];
                await nextTick();
                pageRef.value?.scrollTo({
                  top: 0
                });
              }
              try {
                const params = {
                  area,
                  limit: TOTAL_ITEMS,
                  offset: page.value * TOTAL_ITEMS
                };
                const {
                  data
                } = await getNewAlbums(params);
                const albums = data.albums || [];
                if (isLoadMore) {
                  albumList.value.push(...albums);
                } else {
                  albumList.value = albums;
                }
                hasMore.value = albums.length === TOTAL_ITEMS;
                page.value++;
              } catch (error) {
                console.error("加载专辑列表失败:", error);
              } finally {
                loading.value = false;
                isLoadingMore.value = false;
              }
            };
            const handleScroll = e => {
              const {
                scrollTop,
                scrollHeight,
                clientHeight
              } = e.target;
              if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoadingMore.value && hasMore.value) {
                loadList(currentArea.value, true);
              }
            };
            const getArtistNames = album => {
              if (album.artists) {
                return album.artists.map(ar => ar.name).join(" / ");
              }
              return "";
            };
            const openAlbum = async album => {
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
            const playAlbum = async album => {
              try {
                const {
                  data
                } = await getAlbum(album.id);
                if (data.code === 200 && data.songs?.length > 0) {
                  const playerCore = usePlayerCoreStore();
                  const playlistStore = usePlaylistStore();
                  const albumCover = data.album?.picUrl || album.picUrl;
                  const playlist = data.songs.map(s => ({
                    id: s.id,
                    name: s.name,
                    source: "netease",
                    song: s,
                    ...s,
                    picUrl: s.al?.picUrl || albumCover,
                    playLoading: false
                  }));
                  playlistStore.setPlayList(playlist, false, false);
                  await playerCore.handlePlayMusic(playlist[0], true);
                }
              } catch (error) {
                console.error("Failed to play album:", error);
              }
            };
            onMounted(() => {
              currentArea.value = route.query.area || "ALL";
              loadList(currentArea.value);
            });
            watch(() => route.query.area, newArea => {
              if (newArea && newArea !== currentArea.value) {
                currentArea.value = newArea;
                loadList(newArea);
              }
            });
            return (_ctx, _cache) => {
              const _component_n_spin = __unplugin_components_2;
              return openBlock(), createBlock(StickyTabPage, {
                ref_key: "pageRef",
                ref: pageRef,
                title: unref(t)("comp.newAlbum.title"),
                description: currentAreaName.value,
                "model-value": currentArea.value,
                categories: areas.value,
                "label-key": "name",
                "value-key": "value",
                onChange: handleAreaChange,
                onScroll: handleScroll
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_1, [loading.value && page.value === 0 ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, renderList(15, i => {
                  return createBaseVNode("div", {
                    key: `loading-${i}`,
                    class: "space-y-3"
                  }, [...(_cache[0] || (_cache[0] = [createBaseVNode("div", {
                    class: "aspect-square skeleton-shimmer rounded-2xl"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-4 w-3/4 skeleton-shimmer rounded-lg"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-3 w-1/2 skeleton-shimmer rounded-lg"
                  }, null, -1)]))]);
                }), 64)) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(albumList.value, (album, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: album.id,
                    class: "list-card group cursor-pointer animate-item",
                    style: normalizeStyle({
                      animationDelay: unref(calculateAnimationDelay)(index % TOTAL_ITEMS, 0.05)
                    }),
                    onClick: withModifiers($event => openAlbum(album), ["stop"])
                  }, [createBaseVNode("div", _hoisted_3, [createBaseVNode("img", {
                    src: unref(getImgUrl)(album.picUrl, "400y400"),
                    alt: album.name,
                    class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                    loading: "lazy",
                    crossorigin: "anonymous"
                  }, null, 8, _hoisted_4), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", {
                    class: "play-icon w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl",
                    onClick: withModifiers($event => playAlbum(album), ["stop"])
                  }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                    class: "ri-play-fill text-2xl text-neutral-900 ml-1"
                  }, null, -1)]))], 8, _hoisted_6)]), album.size ? (openBlock(), createElementBlock("div", _hoisted_7, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                    class: "ri-music-2-fill"
                  }, null, -1)), createTextVNode(" " + toDisplayString(album.size) + " " + toDisplayString(unref(t)("comp.playlistDrawer.count")), 1)])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_8, [createBaseVNode("h3", _hoisted_9, toDisplayString(album.name), 1), getArtistNames(album) ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(getArtistNames(album)), 1)) : createCommentVNode("", true)])], 12, _hoisted_2);
                }), 128))]), isLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_11, [createVNode(_component_n_spin, {
                  size: "small"
                }), createBaseVNode("span", _hoisted_12, toDisplayString(unref(t)("comp.homeListItem.loading")), 1)])) : createCommentVNode("", true), !hasMore.value && albumList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(unref(t)("comp.recommendSonglist.empty")), 1)) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["title", "description", "model-value", "categories"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-1b1e634a"]]));
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './MusicListNavigator-legacy-0pJHpxez.js', './music-legacy-CGPq9ktk.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useRouter, useRoute, useMessage, usePlayerStore, ref, onMounted, watch, openBlock, createElementBlock, createVNode, withCtx, createBaseVNode, Fragment, renderList, normalizeStyle, unref, getImgUrl, createTextVNode, toDisplayString, createCommentVNode, formatNumber, normalizeClass, Transition, withDirectives, __unplugin_components_1, vShow, _sfc_main$1, Scrollbar, PlayBottom, computed, getUserDetail, getUserPlaylist, getUserRecord, _export_sfc, navigateToMusicList;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useRouter = module.aU;
        useRoute = module.bh;
        useMessage = module.bt;
        usePlayerStore = module.bb;
        ref = module.A;
        onMounted = module.aq;
        watch = module.Y;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createVNode = module.ak;
        withCtx = module.as;
        createBaseVNode = module.ab;
        Fragment = module.ae;
        renderList = module.af;
        normalizeStyle = module.ag;
        unref = module.ad;
        getImgUrl = module.aQ;
        createTextVNode = module.b7;
        toDisplayString = module.ac;
        createCommentVNode = module.ah;
        formatNumber = module.aR;
        normalizeClass = module.aa;
        Transition = module.T;
        withDirectives = module.P;
        __unplugin_components_1 = module.br;
        vShow = module.a6;
        _sfc_main$1 = module.bd;
        Scrollbar = module.be;
        PlayBottom = module.bI;
        computed = module.z;
        getUserDetail = module.bK;
        getUserPlaylist = module.bM;
        getUserRecord = module.bL;
        _export_sfc = module.ap;
      }, module => {
        navigateToMusicList = module.n;
      }, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".hero-section[data-v-03c92677] {\n  min-height: 200px;\n}\n.tab-indicator-enter-active[data-v-03c92677],\n.tab-indicator-leave-active[data-v-03c92677] {\n  transition: all 0.2s ease;\n}\n.tab-indicator-enter-from[data-v-03c92677],\n.tab-indicator-leave-to[data-v-03c92677] {\n  opacity: 0;\n  transform: scale(0.95);\n}\n.song-item-container[data-v-03c92677] {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 52px;\n}\nbutton[data-v-03c92677]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-color);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "h-full w-full bg-white dark:bg-neutral-900 transition-colors duration-500"
        };
        const _hoisted_2 = {
          class: "w-full pb-32"
        };
        const _hoisted_3 = {
          key: 0
        };
        const _hoisted_4 = {
          class: "mt-8 page-padding-x"
        };
        const _hoisted_5 = {
          class: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        };
        const _hoisted_6 = {
          key: 1
        };
        const _hoisted_7 = {
          class: "hero-section relative overflow-hidden rounded-tl-2xl"
        };
        const _hoisted_8 = {
          class: "absolute inset-0 -top-20"
        };
        const _hoisted_9 = {
          class: "relative z-10 page-padding-x pt-4 md:pt-8 pb-6"
        };
        const _hoisted_10 = {
          class: "flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-end"
        };
        const _hoisted_11 = {
          class: "relative group"
        };
        const _hoisted_12 = {
          class: "relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-neutral-800/50"
        };
        const _hoisted_13 = ["src", "alt"];
        const _hoisted_14 = {
          class: "flex-1 text-center md:text-left"
        };
        const _hoisted_15 = {
          key: 0,
          class: "mb-2 md:mb-3"
        };
        const _hoisted_16 = {
          class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
        };
        const _hoisted_17 = {
          class: "text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight"
        };
        const _hoisted_18 = {
          class: "flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-4 md:mt-5"
        };
        const _hoisted_19 = {
          class: "text-lg font-bold text-neutral-900 dark:text-white"
        };
        const _hoisted_20 = {
          class: "text-xs text-neutral-500 dark:text-neutral-400"
        };
        const _hoisted_21 = {
          class: "text-lg font-bold text-neutral-900 dark:text-white"
        };
        const _hoisted_22 = {
          class: "text-xs text-neutral-500 dark:text-neutral-400"
        };
        const _hoisted_23 = {
          class: "flex flex-col items-center gap-0.5 px-3 py-1.5"
        };
        const _hoisted_24 = {
          class: "text-lg font-bold text-neutral-900 dark:text-white"
        };
        const _hoisted_25 = {
          class: "text-xs text-neutral-500 dark:text-neutral-400"
        };
        const _hoisted_26 = {
          key: 1,
          class: "mt-3 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 max-w-lg"
        };
        const _hoisted_27 = {
          class: "page-padding-x pt-4 md:pt-6"
        };
        const _hoisted_28 = {
          class: "relative flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl w-fit"
        };
        const _hoisted_29 = ["onClick"];
        const _hoisted_30 = {
          class: "relative z-10"
        };
        const _hoisted_31 = {
          key: 0,
          class: "absolute inset-0 bg-white dark:bg-neutral-700 rounded-lg shadow-sm"
        };
        const _hoisted_32 = {
          class: "page-padding-x py-6 md:py-8"
        };
        const _hoisted_33 = {
          key: 0,
          class: "flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500"
        };
        const _hoisted_34 = {
          key: 1,
          class: "grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        };
        const _hoisted_35 = ["onClick"];
        const _hoisted_36 = {
          class: "relative aspect-square overflow-hidden rounded-2xl shadow-lg"
        };
        const _hoisted_37 = {
          class: "absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs bg-black/50 text-white flex items-center gap-1"
        };
        const _hoisted_38 = {
          class: "mt-3"
        };
        const _hoisted_39 = {
          class: "line-clamp-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary dark:group-hover:text-primary transition-colors"
        };
        const _hoisted_40 = {
          class: "mt-1 text-xs text-neutral-400 dark:text-neutral-500"
        };
        const _hoisted_41 = {
          key: 0,
          class: "flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500"
        };
        const _hoisted_42 = {
          key: 1,
          class: "flex flex-col items-center justify-center py-16 text-neutral-400 dark:text-neutral-500"
        };
        const _hoisted_43 = {
          key: 2,
          class: "w-full"
        };
        const _hoisted_44 = {
          key: 2,
          class: "flex flex-col items-center justify-center min-h-[60vh] text-neutral-400 dark:text-neutral-500"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "UserDetail"
          },
          __name: "detail",
          setup(__props) {
            const {
              t
            } = useI18n();
            const router = useRouter();
            const route = useRoute();
            const message = useMessage();
            const playerStore = usePlayerStore();
            const userId = ref(Number(route.params.uid));
            const userDetail = ref();
            const playList = ref([]);
            const recordList = ref([]);
            const loading = ref(true);
            const hasRecordPermission = ref(true);
            const activeTab = ref("playlists");
            const tabs = computed(() => [{
              value: "playlists",
              label: t("user.detail.playlists")
            }, {
              value: "records",
              label: t("user.detail.records")
            }]);
            const loadUserData = async () => {
              if (!userId.value) {
                message.error(t("user.detail.invalidUserId"));
                router.back();
                return;
              }
              try {
                loading.value = true;
                recordList.value = [];
                hasRecordPermission.value = true;
                try {
                  const [userDetailRes, playlistRes] = await Promise.all([getUserDetail(userId.value), getUserPlaylist(userId.value)]);
                  userDetail.value = userDetailRes.data;
                  playList.value = playlistRes.data.playlist;
                } catch (error) {
                  console.error("加载用户基本信息失败:", error);
                  message.error(t("user.message.loadFailed"));
                  return;
                }
                try {
                  const recordRes = await getUserRecord(userId.value);
                  if (recordRes.data?.allData) {
                    recordList.value = recordRes.data.allData.map(item => ({
                      ...item,
                      ...item.song,
                      picUrl: item.song.al.picUrl
                    }));
                  }
                } catch (error) {
                  console.error("加载听歌记录失败:", error);
                  if (error.response?.data?.code === -2 || error.data?.code === -2) {
                    hasRecordPermission.value = false;
                  }
                }
              } catch (error) {
                console.error("加载用户数据失败:", error);
                message.error(t("user.message.loadFailed"));
              } finally {
                loading.value = false;
              }
            };
            onMounted(() => {
              loadUserData();
            });
            watch(() => route.params.uid, newUid => {
              if (newUid && Number(newUid) !== userId.value) {
                userId.value = Number(newUid);
                activeTab.value = "playlists";
                loadUserData();
              }
            });
            const openPlaylist = item => {
              navigateToMusicList(router, {
                id: item.id,
                type: "playlist",
                name: item.name,
                listInfo: item,
                canRemove: false
              });
            };
            const handlePlay = () => {
              if (!recordList.value || recordList.value.length === 0) return;
              playerStore.setPlayList(recordList.value);
            };
            const showFollowList = () => {
              if (!userDetail.value) return;
              router.push({
                path: `/user/follows`,
                query: {
                  uid: userId.value.toString(),
                  name: userDetail.value.profile.nickname
                }
              });
            };
            const showFollowerList = () => {
              if (!userDetail.value) return;
              router.push({
                path: `/user/followers`,
                query: {
                  uid: userId.value.toString(),
                  name: userDetail.value.profile.nickname
                }
              });
            };
            const isArtist = profile => {
              return profile.userType === 4 || profile.userType === 2 || profile.accountType === 2;
            };
            return (_ctx, _cache) => {
              const _component_n_image = __unplugin_components_1;
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_scrollbar, {
                class: "h-full"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_2, [loading.value ? (openBlock(), createElementBlock("div", _hoisted_3, [_cache[2] || (_cache[2] = createBaseVNode("div", {
                  class: "relative h-[300px] overflow-hidden rounded-tl-2xl"
                }, [createBaseVNode("div", {
                  class: "absolute inset-0 skeleton-shimmer"
                }), createBaseVNode("div", {
                  class: "relative z-10 page-padding-x pt-8 pb-6"
                }, [createBaseVNode("div", {
                  class: "flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-10"
                }, [createBaseVNode("div", {
                  class: "h-28 w-28 md:h-40 md:w-40 skeleton-shimmer rounded-full flex-shrink-0"
                }), createBaseVNode("div", {
                  class: "flex-1 space-y-4 text-center md:text-left"
                }, [createBaseVNode("div", {
                  class: "h-8 w-40 skeleton-shimmer rounded-xl"
                }), createBaseVNode("div", {
                  class: "flex justify-center gap-6 md:justify-start"
                }, [createBaseVNode("div", {
                  class: "h-12 w-16 skeleton-shimmer rounded-xl"
                }), createBaseVNode("div", {
                  class: "h-12 w-16 skeleton-shimmer rounded-xl"
                }), createBaseVNode("div", {
                  class: "h-12 w-16 skeleton-shimmer rounded-xl"
                })]), createBaseVNode("div", {
                  class: "h-4 w-2/3 skeleton-shimmer rounded-lg"
                })])])])], -1)), createBaseVNode("div", _hoisted_4, [_cache[1] || (_cache[1] = createBaseVNode("div", {
                  class: "h-10 w-48 mb-6 skeleton-shimmer rounded-xl"
                }, null, -1)), createBaseVNode("div", _hoisted_5, [(openBlock(), createElementBlock(Fragment, null, renderList(10, i => {
                  return createBaseVNode("div", {
                    key: i,
                    class: "space-y-2"
                  }, [...(_cache[0] || (_cache[0] = [createBaseVNode("div", {
                    class: "aspect-square w-full skeleton-shimmer rounded-2xl"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-4 w-3/4 skeleton-shimmer rounded-lg"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-3 w-1/2 skeleton-shimmer rounded-lg"
                  }, null, -1)]))]);
                }), 64))])])])) : userDetail.value ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("section", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("div", {
                  class: "absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40 dark:opacity-30",
                  style: normalizeStyle({
                    backgroundImage: `url(${unref(getImgUrl)(userDetail.value.profile.backgroundUrl)})`
                  })
                }, null, 4), _cache[3] || (_cache[3] = createBaseVNode("div", {
                  class: "absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-neutral-900/80 dark:to-neutral-900"
                }, null, -1))]), createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [_cache[4] || (_cache[4] = createBaseVNode("div", {
                  class: "absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                }, null, -1)), createBaseVNode("div", _hoisted_12, [createBaseVNode("img", {
                  src: unref(getImgUrl)(userDetail.value.profile.avatarUrl, "300y300"),
                  alt: userDetail.value.profile.nickname,
                  class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                }, null, 8, _hoisted_13)])]), createBaseVNode("div", _hoisted_14, [isArtist(userDetail.value.profile) ? (openBlock(), createElementBlock("div", _hoisted_15, [createBaseVNode("span", _hoisted_16, [_cache[5] || (_cache[5] = createBaseVNode("i", {
                  class: "ri-verified-badge-fill text-sm"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("user.detail.artist")), 1)])])) : createCommentVNode("", true), createBaseVNode("h1", _hoisted_17, toDisplayString(userDetail.value.profile.nickname), 1), createBaseVNode("div", _hoisted_18, [createBaseVNode("div", {
                  class: "flex flex-col items-center gap-0.5 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200",
                  onClick: showFollowerList
                }, [createBaseVNode("span", _hoisted_19, toDisplayString(unref(formatNumber)(userDetail.value.profile.followeds)), 1), createBaseVNode("span", _hoisted_20, toDisplayString(unref(t)("user.profile.followers")), 1)]), createBaseVNode("div", {
                  class: "flex flex-col items-center gap-0.5 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200",
                  onClick: showFollowList
                }, [createBaseVNode("span", _hoisted_21, toDisplayString(unref(formatNumber)(userDetail.value.profile.follows)), 1), createBaseVNode("span", _hoisted_22, toDisplayString(unref(t)("user.profile.following")), 1)]), createBaseVNode("div", _hoisted_23, [createBaseVNode("span", _hoisted_24, " Lv." + toDisplayString(userDetail.value.level), 1), createBaseVNode("span", _hoisted_25, toDisplayString(unref(t)("user.profile.level")), 1)])]), userDetail.value.profile.signature ? (openBlock(), createElementBlock("p", _hoisted_26, toDisplayString(userDetail.value.profile.signature), 1)) : createCommentVNode("", true)])])])]), createBaseVNode("section", _hoisted_27, [createBaseVNode("div", _hoisted_28, [(openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, tab => {
                  return openBlock(), createElementBlock("button", {
                    key: tab.value,
                    class: normalizeClass(["relative px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-200", activeTab.value === tab.value ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"]),
                    onClick: $event => activeTab.value = tab.value
                  }, [createBaseVNode("span", _hoisted_30, toDisplayString(tab.label), 1), createVNode(Transition, {
                    name: "tab-indicator"
                  }, {
                    default: withCtx(() => [activeTab.value === tab.value ? (openBlock(), createElementBlock("div", _hoisted_31)) : createCommentVNode("", true)]),
                    _: 2
                  }, 1024)], 10, _hoisted_29);
                }), 128))])]), createBaseVNode("section", _hoisted_32, [withDirectives(createBaseVNode("div", null, [playList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_33, [_cache[6] || (_cache[6] = createBaseVNode("i", {
                  class: "ri-play-list-line text-5xl mb-4 opacity-50"
                }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("user.detail.noPlaylists")), 1)])) : (openBlock(), createElementBlock("div", _hoisted_34, [(openBlock(true), createElementBlock(Fragment, null, renderList(playList.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id || index,
                    class: "group cursor-pointer",
                    style: normalizeStyle({
                      animationDelay: `${index * 0.03}s`
                    }),
                    onClick: $event => openPlaylist(item)
                  }, [createBaseVNode("div", _hoisted_36, [createVNode(_component_n_image, {
                    src: unref(getImgUrl)(item.coverImgUrl, "300y300"),
                    lazy: "",
                    "preview-disabled": "",
                    class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }, null, 8, ["src"]), createBaseVNode("div", _hoisted_37, [_cache[7] || (_cache[7] = createBaseVNode("i", {
                    class: "ri-play-fill"
                  }, null, -1)), createTextVNode(" " + toDisplayString(unref(formatNumber)(item.playCount)), 1)]), _cache[8] || (_cache[8] = createBaseVNode("div", {
                    class: "absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 group-hover:bg-black/20 group-hover:opacity-100 transition-all duration-300"
                  }, [createBaseVNode("div", {
                    class: "w-12 h-12 rounded-full bg-white/90 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl"
                  }, [createBaseVNode("i", {
                    class: "ri-play-fill text-xl text-neutral-900 ml-0.5"
                  })])], -1))]), createBaseVNode("div", _hoisted_38, [createBaseVNode("h3", _hoisted_39, toDisplayString(item.name), 1), createBaseVNode("p", _hoisted_40, toDisplayString(unref(t)("user.playlist.trackCount", {
                    count: item.trackCount
                  })), 1)])], 12, _hoisted_35);
                }), 128))]))], 512), [[vShow, activeTab.value === "playlists"]]), withDirectives(createBaseVNode("div", null, [!hasRecordPermission.value ? (openBlock(), createElementBlock("div", _hoisted_41, [_cache[9] || (_cache[9] = createBaseVNode("i", {
                  class: "ri-lock-line text-5xl mb-4 opacity-50"
                }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("user.detail.noRecordPermission", {
                  name: userDetail.value.profile.nickname
                })), 1)])) : !recordList.value || recordList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_42, [_cache[10] || (_cache[10] = createBaseVNode("i", {
                  class: "ri-music-2-line text-5xl mb-4 opacity-50"
                }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("user.detail.noRecords")), 1)])) : (openBlock(), createElementBlock("div", _hoisted_43, [(openBlock(true), createElementBlock(Fragment, null, renderList(recordList.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: "song-item-container"
                  }, [createVNode(_sfc_main$1, {
                    index,
                    item,
                    compact: "",
                    onPlay: handlePlay
                  }, null, 8, ["index", "item"])]);
                }), 128))]))], 512), [[vShow, activeTab.value === "records"]])])])) : !loading.value ? (openBlock(), createElementBlock("div", _hoisted_44, [_cache[11] || (_cache[11] = createBaseVNode("i", {
                  class: "ri-user-line text-6xl mb-4 opacity-30"
                }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("user.message.loadFailed")), 1)])) : createCommentVNode("", true)])]),
                _: 1
              }), createVNode(PlayBottom)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const detail = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-03c92677"]]));
      }
    };
  });
})();

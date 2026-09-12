import { d as defineComponent, bb as usePlayerStore, bu as usePlayHistoryStore, a7 as openBlock, a8 as createElementBlock, ak as createVNode, bj as __unplugin_components_2, as as withCtx, ae as Fragment, af as renderList, ab as createBaseVNode, ad as unref, aQ as getImgUrl, ac as toDisplayString, bo as secondToMinute, aR as formatNumber, a5 as useI18n, bn as createDiscreteApi, bh as useRoute, b0 as usePlaylistStore, b5 as useUserStore, aq as onMounted, ag as normalizeStyle, b7 as createTextVNode, aa as normalizeClass, ah as createCommentVNode, be as Scrollbar, A as ref, z as computed, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { e as getDjDetail, f as getDjProgram, d as getDjSublist, s as subscribeDj } from "./podcast-DVeYZ7O-.js";
import { m as mapDjProgramToSongResult } from "./podcastUtils-CNldpqcK.js";
const _hoisted_1$1 = { class: "program-list" };
const _hoisted_2$1 = {
  key: 0,
  class: "text-center py-12 text-gray-400"
};
const _hoisted_3$1 = {
  key: 1,
  class: "space-y-2"
};
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = { class: "relative flex-shrink-0 w-16 h-16" };
const _hoisted_6$1 = ["src", "alt"];
const _hoisted_7$1 = { class: "flex-1 min-w-0" };
const _hoisted_8$1 = { class: "text-sm font-medium truncate" };
const _hoisted_9$1 = { class: "text-xs text-gray-500 dark:text-gray-400 truncate mt-1" };
const _hoisted_10$1 = { class: "text-xs text-gray-400 mt-1" };
const _hoisted_11$1 = { class: "flex-shrink-0 text-xs text-gray-400 text-right" };
const _hoisted_12$1 = { class: "mt-1" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgramList",
  props: {
    programs: {},
    loading: { type: Boolean }
  },
  setup(__props) {
    const playerStore = usePlayerStore();
    const playHistoryStore = usePlayHistoryStore();
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - date.getTime();
      if (diff < 864e5) {
        const hours = Math.floor(diff / 36e5);
        if (hours < 1) {
          const minutes = Math.floor(diff / 6e4);
          return "".concat(minutes, "分钟前");
        }
        return "".concat(hours, "小时前");
      }
      return "".concat(date.getMonth() + 1, "月").concat(date.getDate(), "日");
    };
    const playProgram = async (program) => {
      try {
        const songData = {
          id: program.mainSong.id,
          name: program.mainSong.name || program.name || "播客节目",
          duration: program.mainSong.duration,
          picUrl: program.coverUrl,
          ar: [
            {
              id: program.radio.id,
              name: program.radio.name,
              picId: 0,
              img1v1Id: 0,
              briefDesc: "",
              picUrl: "",
              img1v1Url: "",
              albumSize: 0,
              alias: [],
              trans: "",
              musicSize: 0,
              topicPerson: 0
            }
          ],
          al: {
            id: program.radio.id,
            name: program.radio.name,
            picUrl: program.coverUrl,
            type: "",
            size: 0,
            picId: 0,
            blurPicUrl: "",
            companyId: 0,
            pic: 0,
            picId_str: "",
            publishTime: 0,
            description: "",
            tags: "",
            company: "",
            briefDesc: "",
            artist: {
              id: 0,
              name: "",
              picUrl: "",
              alias: [],
              albumSize: 0,
              picId: 0,
              img1v1Url: "",
              img1v1Id: 0,
              trans: "",
              briefDesc: "",
              musicSize: 0,
              topicPerson: 0
            },
            songs: [],
            alias: [],
            status: 0,
            copyrightId: 0,
            commentThreadId: "",
            artists: [],
            subType: "",
            onSale: false,
            mark: 0
          },
          source: "netease",
          count: 0
        };
        await playerStore.setPlay(songData);
        playHistoryStore.addPodcast(program);
      } catch (error) {
        console.error("播放节目失败:", error);
      }
    };
    return (_ctx, _cache) => {
      const _component_n_spin = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_n_spin, { show: __props.loading }, {
          default: withCtx(() => [
            __props.programs.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$1, "暂无节目")) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.programs, (program) => {
                return openBlock(), createElementBlock("div", {
                  key: program.id,
                  class: "flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer group",
                  onClick: ($event) => playProgram(program)
                }, [
                  createBaseVNode("div", _hoisted_5$1, [
                    createBaseVNode("img", {
                      src: unref(getImgUrl)(program.coverUrl, "100y100"),
                      alt: program.mainSong.name,
                      class: "w-full h-full rounded object-cover"
                    }, null, 8, _hoisted_6$1),
                    _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 bg-black/40 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" }, [
                      createBaseVNode("i", { class: "ri-play-fill text-white text-2xl" })
                    ], -1))
                  ]),
                  createBaseVNode("div", _hoisted_7$1, [
                    createBaseVNode("h4", _hoisted_8$1, toDisplayString(program.mainSong.name || program.name), 1),
                    createBaseVNode("p", _hoisted_9$1, toDisplayString(program.description), 1),
                    createBaseVNode("div", _hoisted_10$1, toDisplayString(formatDate(program.createTime)) + " · " + toDisplayString(unref(secondToMinute)(program.mainSong.duration / 1e3)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_11$1, [
                    createBaseVNode("div", null, toDisplayString(unref(formatNumber)(program.listenerCount)) + " " + toDisplayString(_ctx.$t("podcast.listeners")), 1),
                    createBaseVNode("div", _hoisted_12$1, toDisplayString(unref(formatNumber)(program.commentCount)) + " 评论", 1)
                  ])
                ], 8, _hoisted_4$1);
              }), 128))
            ]))
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "radio-detail-page h-full w-full bg-white dark:bg-black transition-colors duration-500" };
const _hoisted_2 = { class: "radio-detail-content w-full pb-32" };
const _hoisted_3 = {
  key: 0,
  class: "radio-content"
};
const _hoisted_4 = { class: "hero-section relative overflow-hidden rounded-tl-2xl" };
const _hoisted_5 = { class: "hero-bg absolute inset-0 -top-20" };
const _hoisted_6 = { class: "hero-content relative z-10 page-padding-x pt-4 md:pt-8 pb-6" };
const _hoisted_7 = { class: "flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-end" };
const _hoisted_8 = { class: "radio-cover-wrapper relative group" };
const _hoisted_9 = { class: "cover-container relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-neutral-800/50" };
const _hoisted_10 = ["src", "alt"];
const _hoisted_11 = { class: "radio-info flex-1 text-center md:text-left" };
const _hoisted_12 = { class: "radio-badge mb-2 md:mb-3" };
const _hoisted_13 = { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider" };
const _hoisted_14 = { class: "radio-name text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight" };
const _hoisted_15 = { class: "radio-stats flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-4 md:mt-5" };
const _hoisted_16 = { class: "stat-item flex items-center gap-2" };
const _hoisted_17 = { class: "text-sm font-medium text-neutral-600 dark:text-neutral-300" };
const _hoisted_18 = { class: "font-bold text-neutral-900 dark:text-white" };
const _hoisted_19 = { class: "stat-item flex items-center gap-2" };
const _hoisted_20 = { class: "text-sm font-medium text-neutral-600 dark:text-neutral-300" };
const _hoisted_21 = { class: "font-bold text-neutral-900 dark:text-white" };
const _hoisted_22 = { class: "mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed max-w-2xl" };
const _hoisted_23 = { class: "action-bar sticky top-0 z-20 page-padding-x py-3 md:py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800/50" };
const _hoisted_24 = { class: "flex items-center justify-between gap-3" };
const _hoisted_25 = { class: "flex items-center gap-3" };
const _hoisted_26 = { class: "tab-content page-padding-x py-6 md:py-8" };
const _hoisted_27 = { class: "mb-6 flex items-center gap-3" };
const _hoisted_28 = { class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white" };
const _hoisted_29 = {
  key: 0,
  class: "mt-8 flex justify-center"
};
const limit = 30;
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "PodcastRadio"
  },
  __name: "radio",
  setup(__props) {
    const { t } = useI18n();
    const { message } = createDiscreteApi(["message"]);
    const route = useRoute();
    const playlistStore = usePlaylistStore();
    const playerStore = usePlayerStore();
    const userStore = useUserStore();
    const currentRadio = ref(null);
    const currentPrograms = ref([]);
    const subscribedRadioIds = ref(/* @__PURE__ */ new Set());
    const isLoading = ref(false);
    const loadingMore = ref(false);
    const offset = ref(0);
    const radioId = computed(() => Number(route.params.id));
    const isSubscribed = computed(() => subscribedRadioIds.value.has(radioId.value));
    const hasMore = computed(() => {
      if (!currentRadio.value) return false;
      return currentPrograms.value.length < currentRadio.value.programCount;
    });
    const loadRadioDetail = async () => {
      var _a;
      try {
        isLoading.value = true;
        const res = await getDjDetail(radioId.value);
        currentRadio.value = ((_a = res.data) == null ? void 0 : _a.data) || null;
      } catch (error) {
        console.error("获取电台详情失败:", error);
        message.error(t("common.loadFailed"));
      } finally {
        isLoading.value = false;
      }
    };
    const loadPrograms = async (loadMore = false) => {
      var _a;
      if (loadMore) {
        if (loadingMore.value || !hasMore.value) return;
        loadingMore.value = true;
      } else {
        isLoading.value = true;
        offset.value = 0;
        currentPrograms.value = [];
      }
      try {
        const res = await getDjProgram(radioId.value, limit, offset.value);
        const programs = ((_a = res.data) == null ? void 0 : _a.programs) || [];
        if (loadMore) {
          currentPrograms.value.push(...programs);
        } else {
          currentPrograms.value = programs;
        }
        offset.value += limit;
      } catch (error) {
        console.error("获取节目列表失败:", error);
      } finally {
        isLoading.value = false;
        loadingMore.value = false;
      }
    };
    const loadSubscribedRadios = async () => {
      var _a;
      if (!userStore.user) return;
      try {
        const res = await getDjSublist();
        const radios = ((_a = res.data) == null ? void 0 : _a.djRadios) || [];
        subscribedRadioIds.value = new Set(radios.map((r) => r.id));
      } catch (error) {
        console.error("获取订阅列表失败:", error);
      }
    };
    const handleScroll = async (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        if (!loadingMore.value && hasMore.value) {
          await loadPrograms(true);
        }
      }
    };
    const handlePlayAll = async () => {
      if (!currentRadio.value) return;
      const total = currentRadio.value.programCount;
      try {
        message.loading(t("common.loading"));
        const { data } = await getDjProgram(radioId.value, total);
        const allPrograms = data.programs || [];
        const songList = allPrograms.map(
          (program) => mapDjProgramToSongResult(program)
        );
        playlistStore.setPlayList(songList);
        if (songList[0]) {
          playerStore.setPlay(songList[0]);
        }
      } catch (error) {
        console.error("获取全部节目失败:", error);
        message.error(t("common.loadFailed"));
      }
    };
    const handleSubscribe = async () => {
      if (!userStore.user) {
        message.warning(t("history.needLogin"));
        return;
      }
      const isSubed = isSubscribed.value;
      try {
        await subscribeDj(radioId.value, isSubed ? 0 : 1);
        if (isSubed) {
          subscribedRadioIds.value.delete(radioId.value);
        } else {
          subscribedRadioIds.value.add(radioId.value);
        }
        if (currentRadio.value && currentRadio.value.subCount !== void 0) {
          currentRadio.value.subCount = Math.max(0, currentRadio.value.subCount + (isSubed ? -1 : 1));
        }
        message.success(isSubed ? t("podcast.unsubscribed") : t("podcast.subscribeSuccess"));
      } catch (error) {
        console.error("订阅操作失败:", error);
        message.error(isSubed ? t("podcast.unsubscribeFailed") : t("podcast.subscribeFailed"));
      }
    };
    onMounted(async () => {
      await Promise.all([loadRadioDetail(), loadPrograms(), loadSubscribedRadios()]);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Scrollbar), {
          class: "h-full",
          onScroll: handleScroll
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(__unplugin_components_2), {
                show: isLoading.value && !currentRadio.value
              }, {
                default: withCtx(() => [
                  currentRadio.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    createBaseVNode("section", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("div", {
                          class: "absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40 dark:opacity-30",
                          style: normalizeStyle({
                            backgroundImage: "url(".concat(unref(getImgUrl)(currentRadio.value.picUrl, "800y800"), ")")
                          })
                        }, null, 4),
                        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" }, null, -1))
                      ]),
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          createBaseVNode("div", _hoisted_8, [
                            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "cover-glow absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
                            createBaseVNode("div", _hoisted_9, [
                              createBaseVNode("img", {
                                src: unref(getImgUrl)(currentRadio.value.picUrl, "500y500"),
                                alt: currentRadio.value.name,
                                class: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              }, null, 8, _hoisted_10),
                              createBaseVNode("div", { class: "absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-black/30 transition-all duration-300" }, [
                                createBaseVNode("div", {
                                  class: "play-icon w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl cursor-pointer hover:scale-110 active:scale-95",
                                  onClick: handlePlayAll
                                }, [..._cache[1] || (_cache[1] = [
                                  createBaseVNode("i", { class: "iconfont icon-playfill text-2xl text-neutral-900 ml-1" }, null, -1)
                                ])])
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_11, [
                            createBaseVNode("div", _hoisted_12, [
                              createBaseVNode("span", _hoisted_13, [
                                _cache[3] || (_cache[3] = createBaseVNode("i", { class: "ri-radio-line text-sm" }, null, -1)),
                                createTextVNode(" " + toDisplayString(currentRadio.value.category), 1)
                              ])
                            ]),
                            createBaseVNode("h1", _hoisted_14, toDisplayString(currentRadio.value.name), 1),
                            createBaseVNode("div", _hoisted_15, [
                              createBaseVNode("div", _hoisted_16, [
                                _cache[4] || (_cache[4] = createBaseVNode("i", { class: "ri-user-follow-line text-primary text-lg" }, null, -1)),
                                createBaseVNode("span", _hoisted_17, [
                                  createBaseVNode("span", _hoisted_18, toDisplayString(unref(formatNumber)(currentRadio.value.subCount)), 1),
                                  createTextVNode(" " + toDisplayString(unref(t)("podcast.subscribeCount")), 1)
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_19, [
                                _cache[5] || (_cache[5] = createBaseVNode("i", { class: "ri-play-list-2-line text-primary text-lg" }, null, -1)),
                                createBaseVNode("span", _hoisted_20, [
                                  createBaseVNode("span", _hoisted_21, toDisplayString(currentRadio.value.programCount), 1),
                                  createTextVNode(" " + toDisplayString(unref(t)("podcast.programCount")), 1)
                                ])
                              ])
                            ]),
                            createBaseVNode("p", _hoisted_22, toDisplayString(currentRadio.value.desc), 1)
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("section", _hoisted_23, [
                      createBaseVNode("div", _hoisted_24, [
                        createBaseVNode("div", _hoisted_25, [
                          createBaseVNode("button", {
                            class: "play-all-btn flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-primary/25",
                            onClick: handlePlayAll
                          }, [
                            _cache[6] || (_cache[6] = createBaseVNode("i", { class: "iconfont icon-playfill text-lg" }, null, -1)),
                            createBaseVNode("span", null, toDisplayString(unref(t)("search.button.playAll")), 1)
                          ]),
                          createBaseVNode("button", {
                            class: normalizeClass([
                              "subscribe-btn flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm",
                              isSubscribed.value ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200" : "bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20"
                            ]),
                            onClick: handleSubscribe
                          }, [
                            createBaseVNode("i", {
                              class: normalizeClass([isSubscribed.value ? "ri-checkbox-circle-line" : "ri-add-line", "text-lg"])
                            }, null, 2),
                            createBaseVNode("span", null, toDisplayString(isSubscribed.value ? unref(t)("podcast.subscribed") : unref(t)("podcast.subscribe")), 1)
                          ], 2)
                        ])
                      ])
                    ]),
                    createBaseVNode("section", _hoisted_26, [
                      createBaseVNode("div", _hoisted_27, [
                        createBaseVNode("h2", _hoisted_28, toDisplayString(unref(t)("podcast.programList")), 1),
                        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "h-1.5 w-1.5 rounded-full bg-primary" }, null, -1))
                      ]),
                      createVNode(_sfc_main$1, {
                        programs: currentPrograms.value,
                        loading: isLoading.value
                      }, null, 8, ["programs", "loading"]),
                      loadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_29, [
                        createVNode(unref(__unplugin_components_2), { size: "small" })
                      ])) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["show"])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const radio = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f08695dd"]]);
export {
  radio as default
};

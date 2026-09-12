;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './podcast-legacy-CLiRW11e.js', './StickyTabPage-legacy-Bb01b8RU.js', './podcastUtils-legacy-DdknKy-V.js'], function (exports, module) {
    'use strict';

    var defineComponent, useRouter, createElementBlock, createBaseVNode, unref, getImgUrl, toDisplayString, createCommentVNode, createTextVNode, formatNumber, normalizeStyle, openBlock, _export_sfc, useI18n, createDiscreteApi, useRoute, usePlaylistStore, usePlayerStore, useUserStore, watch, onMounted, createBlock, withCtx, Fragment, renderList, calculateAnimationDelay, createVNode, Button, secondToMinute, __unplugin_components_2, ref, computed, nextTick, getDjRadioHot, getDjCategoryList, getDjRecommend, getDjTodayPerfered, getDjSublist, StickyTabPage, mapDjProgramToSongResult;
    return {
      setters: [module => {
        defineComponent = module.d;
        useRouter = module.aU;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        unref = module.ad;
        getImgUrl = module.aQ;
        toDisplayString = module.ac;
        createCommentVNode = module.ah;
        createTextVNode = module.b7;
        formatNumber = module.aR;
        normalizeStyle = module.ag;
        openBlock = module.a7;
        _export_sfc = module.ap;
        useI18n = module.a5;
        createDiscreteApi = module.bn;
        useRoute = module.bh;
        usePlaylistStore = module.b0;
        usePlayerStore = module.bb;
        useUserStore = module.b5;
        watch = module.Y;
        onMounted = module.aq;
        createBlock = module.aY;
        withCtx = module.as;
        Fragment = module.ae;
        renderList = module.af;
        calculateAnimationDelay = module.aZ;
        createVNode = module.ak;
        Button = module.a1;
        secondToMinute = module.bo;
        __unplugin_components_2 = module.bj;
        ref = module.A;
        computed = module.z;
        nextTick = module.a2;
      }, module => {
        getDjRadioHot = module.g;
        getDjCategoryList = module.a;
        getDjRecommend = module.b;
        getDjTodayPerfered = module.c;
        getDjSublist = module.d;
      }, module => {
        StickyTabPage = module.S;
      }, module => {
        mapDjProgramToSongResult = module.m;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n.animate-item[data-v-4d3b919f] {\n  animation: fadeInUp-4d3b919f 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeInUp-4d3b919f {\nfrom {\n    opacity: 0;\n    transform: translateY(24px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n.animate-item[data-v-0129f8e5] {\n  animation: fadeInUp-0129f8e5 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeInUp-0129f8e5 {\nfrom {\n    opacity: 0;\n    transform: translateY(24px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1$1 = {
          class: "relative aspect-square overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500"
        };
        const _hoisted_2$1 = ["src", "alt"];
        const _hoisted_3$1 = {
          key: 0,
          class: "absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent text-white text-xs truncate"
        };
        const _hoisted_4$1 = {
          key: 1,
          class: "absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        };
        const _hoisted_5$1 = {
          class: "mt-3 space-y-1"
        };
        const _hoisted_6$1 = ["title"];
        const _hoisted_7$1 = {
          key: 0,
          class: "text-xs text-neutral-500 dark:text-neutral-400"
        };
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "RadioCard",
          props: {
            radio: {},
            program: {},
            animationDelay: {}
          },
          setup(__props) {
            const props = __props;
            const router = useRouter();
            const goToDetail = () => {
              if (props.radio?.id) {
                router.push(`/podcast/radio/${props.radio.id}`);
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: "group cursor-pointer animate-item",
                style: normalizeStyle({
                  animationDelay: __props.animationDelay
                }),
                onClick: goToDetail
              }, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("img", {
                src: unref(getImgUrl)(__props.radio?.picUrl || __props.program?.coverUrl || "", "400y400"),
                alt: __props.radio?.name || "",
                class: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
                loading: "lazy"
              }, null, 8, _hoisted_2$1), _cache[1] || (_cache[1] = createBaseVNode("div", {
                class: "absolute inset-0 bg-transparent group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
              }, [createBaseVNode("div", {
                class: "w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl"
              }, [createBaseVNode("i", {
                class: "ri-play-fill text-2xl text-neutral-900 ml-0.5"
              })])], -1)), __props.program ? (openBlock(), createElementBlock("div", _hoisted_3$1, toDisplayString(__props.program.mainSong?.name || __props.program.name), 1)) : createCommentVNode("", true), __props.radio?.programCount && !__props.program ? (openBlock(), createElementBlock("div", _hoisted_4$1, [_cache[0] || (_cache[0] = createBaseVNode("i", {
                class: "ri-mic-fill"
              }, null, -1)), createTextVNode(" " + toDisplayString(__props.radio.programCount), 1)])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_5$1, [createBaseVNode("h3", {
                class: "text-sm md:text-base font-bold text-neutral-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors",
                title: __props.radio?.name || ""
              }, toDisplayString(__props.radio?.name || __props.program?.name || ""), 9, _hoisted_6$1), __props.radio?.subCount !== void 0 ? (openBlock(), createElementBlock("p", _hoisted_7$1, toDisplayString(unref(formatNumber)(__props.radio?.subCount || 0)) + " subscribers ", 1)) : createCommentVNode("", true)])], 4);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const RadioCard = /* @__PURE__ */_export_sfc(_sfc_main$1, [["__scopeId", "data-v-4d3b919f"]]);
        const _hoisted_1 = {
          key: 0,
          class: "space-y-10"
        };
        const _hoisted_2 = {
          key: 0
        };
        const _hoisted_3 = {
          class: "mb-6 flex items-center gap-3"
        };
        const _hoisted_4 = {
          class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white"
        };
        const _hoisted_5 = {
          class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        };
        const _hoisted_6 = {
          key: 1
        };
        const _hoisted_7 = {
          class: "mb-6 flex items-center justify-between"
        };
        const _hoisted_8 = {
          class: "flex items-center gap-3"
        };
        const _hoisted_9 = {
          class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white"
        };
        const _hoisted_10 = {
          class: "space-y-3"
        };
        const _hoisted_11 = ["onClick"];
        const _hoisted_12 = {
          class: "relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20"
        };
        const _hoisted_13 = ["src", "alt"];
        const _hoisted_14 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_15 = {
          class: "text-sm md:text-base font-semibold text-neutral-900 dark:text-white truncate"
        };
        const _hoisted_16 = {
          class: "text-xs md:text-sm text-neutral-500 dark:text-neutral-400 truncate mt-1"
        };
        const _hoisted_17 = {
          class: "flex items-center gap-3 text-xs text-neutral-400 mt-2"
        };
        const _hoisted_18 = {
          class: "mb-6 flex items-center gap-3"
        };
        const _hoisted_19 = {
          class: "text-xl font-bold tracking-tight text-neutral-900 md:text-2xl dark:text-white"
        };
        const _hoisted_20 = {
          key: 0,
          class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        };
        const _hoisted_21 = {
          key: 1,
          class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        };
        const _hoisted_22 = {
          key: 1
        };
        const _hoisted_23 = {
          class: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        };
        const _hoisted_24 = {
          key: 0,
          class: "flex flex-col items-center justify-center py-20 text-neutral-400"
        };
        const _hoisted_25 = {
          class: "text-sm font-medium"
        };
        const _hoisted_26 = {
          key: 1,
          class: "flex justify-center items-center py-8"
        };
        const _hoisted_27 = {
          class: "ml-2 text-neutral-500"
        };
        const _hoisted_28 = {
          key: 2,
          class: "text-center py-8 text-neutral-500"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "Podcast"
          },
          __name: "index",
          setup(__props) {
            const {
              t
            } = useI18n();
            const {
              message
            } = createDiscreteApi(["message"]);
            const router = useRouter();
            const route = useRoute();
            const playlistStore = usePlaylistStore();
            const playerStore = usePlayerStore();
            const userStore = useUserStore();
            const pageRef = ref();
            const currentCategoryId = ref(-1);
            const categories = ref([]);
            const recommendRadios = ref([]);
            const todayPerfered = ref([]);
            const subscribedRadios = ref([]);
            const recommendLoading = ref(false);
            const categoryRadios = ref([]);
            const categoryLoading = ref(false);
            const categoryLoadingMore = ref(false);
            const categoryPage = ref(0);
            const categoryLimit = ref(30);
            const categoryHasMore = ref(true);
            const categoryList = computed(() => [{
              id: -1,
              name: t("podcast.discover")
            }, ...categories.value]);
            const currentCategoryName = computed(() => {
              if (currentCategoryId.value === -1) return t("podcast.recommended");
              return categories.value.find(c => c.id === currentCategoryId.value)?.name || "";
            });
            const formatDate = timestamp => {
              const date = new Date(timestamp);
              const now = /* @__PURE__ */new Date();
              const diff = now.getTime() - date.getTime();
              if (diff < 864e5) {
                const hours = Math.floor(diff / 36e5);
                if (hours < 1) return `${Math.floor(diff / 6e4)}分钟前`;
                return `${hours}小时前`;
              }
              return `${date.getMonth() + 1}月${date.getDate()}日`;
            };
            const handleCategoryChange = id => {
              router.replace({
                query: {
                  ...route.query,
                  category: id === -1 ? void 0 : String(id)
                }
              });
            };
            const loadCategoryRadios = async (id, loadMore = false) => {
              if (loadMore) {
                if (categoryLoadingMore.value || !categoryHasMore.value) return;
                categoryLoadingMore.value = true;
              } else {
                if (categoryLoading.value) return;
                categoryLoading.value = true;
                categoryPage.value = 0;
                categoryRadios.value = [];
                categoryHasMore.value = true;
                await nextTick();
                pageRef.value?.scrollTo({
                  top: 0
                });
              }
              try {
                const offset = categoryPage.value * categoryLimit.value;
                const res = await getDjRadioHot(id, categoryLimit.value, offset);
                const radios = res.data?.djRadios || [];
                if (loadMore) categoryRadios.value.push(...radios);else categoryRadios.value = radios;
                categoryHasMore.value = radios.length === categoryLimit.value;
                categoryPage.value++;
              } catch (error) {
                console.error("获取分类电台失败:", error);
                message.error(t("common.loadFailed"));
              } finally {
                categoryLoading.value = false;
                categoryLoadingMore.value = false;
              }
            };
            const handleScroll = e => {
              if (currentCategoryId.value === -1) return;
              const {
                scrollTop,
                clientHeight,
                scrollHeight
              } = e.target;
              if (scrollHeight - (scrollTop + clientHeight) < 150) {
                loadCategoryRadios(currentCategoryId.value, true);
              }
            };
            const playProgram = async program => {
              const song = mapDjProgramToSongResult(program);
              playlistStore.setPlayList([song]);
              await playerStore.setPlay(song);
            };
            const handlePlayTodayPerfered = async () => {
              if (todayPerfered.value.length === 0) return;
              const songList = todayPerfered.value.map(mapDjProgramToSongResult);
              playlistStore.setPlayList(songList);
              await playerStore.setPlay(songList[0]);
            };
            const loadCategories = async () => {
              try {
                const res = await getDjCategoryList();
                categories.value = res.data?.categories || [];
              } catch (error) {
                console.error("获取分类列表失败:", error);
              }
            };
            const loadRecommendRadios = async () => {
              try {
                recommendLoading.value = true;
                const res = await getDjRecommend();
                recommendRadios.value = res.data?.djRadios || [];
              } catch (error) {
                console.error("获取推荐电台失败:", error);
              } finally {
                recommendLoading.value = false;
              }
            };
            const loadTodayPerfered = async () => {
              try {
                const res = await getDjTodayPerfered();
                todayPerfered.value = res.data?.data || [];
              } catch (error) {
                console.error("获取今日优选失败:", error);
              }
            };
            const loadSubscribedRadios = async () => {
              if (!userStore.user) return;
              try {
                const res = await getDjSublist();
                subscribedRadios.value = res.data?.djRadios || [];
              } catch (error) {
                console.error("获取订阅列表失败:", error);
              }
            };
            const loadDashboard = async () => {
              await Promise.all([loadCategories(), loadRecommendRadios(), loadTodayPerfered(), loadSubscribedRadios()]);
            };
            const loadData = async categoryId => {
              if (categoryId === -1) {
                categoryRadios.value = [];
                categoryPage.value = 0;
                categoryHasMore.value = true;
                await loadDashboard();
              } else {
                await loadCategoryRadios(categoryId);
              }
            };
            watch(() => route.query.category, async newCategory => {
              if (route.path !== "/podcast") return;
              const newId = newCategory ? Number(newCategory) : -1;
              if (newId !== currentCategoryId.value) {
                currentCategoryId.value = newId;
                await loadData(newId);
              }
            });
            watch(() => userStore.user, async user => {
              if (user) {
                await loadSubscribedRadios();
              } else {
                subscribedRadios.value = [];
              }
            });
            onMounted(async () => {
              const queryId = route.query.category ? Number(route.query.category) : -1;
              currentCategoryId.value = queryId;
              await loadData(queryId);
            });
            return (_ctx, _cache) => {
              const _component_n_button = Button;
              const _component_n_spin = __unplugin_components_2;
              return openBlock(), createBlock(StickyTabPage, {
                ref_key: "pageRef",
                ref: pageRef,
                title: currentCategoryId.value === -1 ? unref(t)("podcast.podcast") : currentCategoryName.value,
                description: currentCategoryId.value === -1 ? unref(t)("podcast.discover") : unref(t)("podcast.exploreCategoryRadios"),
                "model-value": currentCategoryId.value,
                categories: categoryList.value,
                "label-key": "name",
                "value-key": "id",
                onChange: handleCategoryChange,
                onScroll: handleScroll
              }, {
                default: withCtx(() => [currentCategoryId.value === -1 ? (openBlock(), createElementBlock("div", _hoisted_1, [unref(userStore).user && subscribedRadios.value.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("h2", _hoisted_4, toDisplayString(unref(t)("podcast.mySubscriptions")), 1), _cache[0] || (_cache[0] = createBaseVNode("div", {
                  class: "h-1.5 w-1.5 rounded-full bg-primary"
                }, null, -1))]), createBaseVNode("div", _hoisted_5, [(openBlock(true), createElementBlock(Fragment, null, renderList(subscribedRadios.value.slice(0, 10), (radio, index) => {
                  return openBlock(), createBlock(RadioCard, {
                    key: `sub-${radio.id}`,
                    radio,
                    "animation-delay": unref(calculateAnimationDelay)(index, 0.04)
                  }, null, 8, ["radio", "animation-delay"]);
                }), 128))])])) : createCommentVNode("", true), todayPerfered.value.length > 0 ? (openBlock(), createElementBlock("section", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [createBaseVNode("h2", _hoisted_9, toDisplayString(unref(t)("podcast.todayPerfered")), 1), _cache[1] || (_cache[1] = createBaseVNode("div", {
                  class: "h-1.5 w-1.5 rounded-full bg-primary"
                }, null, -1))]), createVNode(_component_n_button, {
                  type: "primary",
                  secondary: "",
                  round: "",
                  size: "small",
                  onClick: handlePlayTodayPerfered
                }, {
                  icon: withCtx(() => [...(_cache[2] || (_cache[2] = [createBaseVNode("i", {
                    class: "ri-play-circle-line"
                  }, null, -1)]))]),
                  default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("search.button.playAll")), 1)]),
                  _: 1
                })]), createBaseVNode("div", _hoisted_10, [(openBlock(true), createElementBlock(Fragment, null, renderList(todayPerfered.value.slice(0, 5), (program, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: `today-${program.id}`,
                    class: "flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 cursor-pointer group transition-all duration-300 animate-item",
                    style: normalizeStyle({
                      animationDelay: unref(calculateAnimationDelay)(index, 0.04)
                    }),
                    onClick: $event => playProgram(program)
                  }, [createBaseVNode("div", _hoisted_12, [createBaseVNode("img", {
                    src: unref(getImgUrl)(program.coverUrl, "100y100"),
                    alt: program.mainSong?.name || program.name,
                    class: "w-full h-full rounded-lg object-cover"
                  }, null, 8, _hoisted_13), _cache[3] || (_cache[3] = createBaseVNode("div", {
                    class: "absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  }, [createBaseVNode("i", {
                    class: "ri-play-fill text-white text-2xl"
                  })], -1))]), createBaseVNode("div", _hoisted_14, [createBaseVNode("h4", _hoisted_15, toDisplayString(program.mainSong?.name || program.name), 1), createBaseVNode("p", _hoisted_16, toDisplayString(program.description), 1), createBaseVNode("div", _hoisted_17, [createBaseVNode("span", null, toDisplayString(formatDate(program.createTime)), 1), createBaseVNode("span", null, toDisplayString(unref(secondToMinute)((program.mainSong?.duration || 0) / 1e3)), 1), createBaseVNode("span", null, toDisplayString(unref(formatNumber)(program.listenerCount)) + " " + toDisplayString(unref(t)("podcast.listeners")), 1)])])], 12, _hoisted_11);
                }), 128))])])) : createCommentVNode("", true), createBaseVNode("section", null, [createBaseVNode("div", _hoisted_18, [createBaseVNode("h2", _hoisted_19, toDisplayString(unref(t)("podcast.recommended")), 1), _cache[4] || (_cache[4] = createBaseVNode("div", {
                  class: "h-1.5 w-1.5 rounded-full bg-primary"
                }, null, -1))]), recommendLoading.value ? (openBlock(), createElementBlock("div", _hoisted_20, [(openBlock(), createElementBlock(Fragment, null, renderList(10, i => {
                  return createBaseVNode("div", {
                    key: `skeleton-${i}`,
                    class: "space-y-3"
                  }, [...(_cache[5] || (_cache[5] = [createBaseVNode("div", {
                    class: "aspect-square skeleton-shimmer rounded-2xl"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-4 w-3/4 skeleton-shimmer rounded-lg"
                  }, null, -1)]))]);
                }), 64))])) : (openBlock(), createElementBlock("div", _hoisted_21, [(openBlock(true), createElementBlock(Fragment, null, renderList(recommendRadios.value.slice(0, 10), (radio, index) => {
                  return openBlock(), createBlock(RadioCard, {
                    key: `recommend-${radio.id}`,
                    radio,
                    "animation-delay": unref(calculateAnimationDelay)(index, 0.04)
                  }, null, 8, ["radio", "animation-delay"]);
                }), 128))]))])])) : (openBlock(), createElementBlock("div", _hoisted_22, [createBaseVNode("div", _hoisted_23, [categoryLoading.value && categoryPage.value === 0 ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, renderList(15, i => {
                  return createBaseVNode("div", {
                    key: `loading-${i}`,
                    class: "space-y-3"
                  }, [...(_cache[6] || (_cache[6] = [createBaseVNode("div", {
                    class: "aspect-square skeleton-shimmer rounded-2xl"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-4 w-3/4 skeleton-shimmer rounded-lg"
                  }, null, -1)]))]);
                }), 64)) : (openBlock(true), createElementBlock(Fragment, {
                  key: 1
                }, renderList(categoryRadios.value, (radio, index) => {
                  return openBlock(), createBlock(RadioCard, {
                    key: `cat-${radio.id}`,
                    radio,
                    "animation-delay": unref(calculateAnimationDelay)(index % 30, 0.04)
                  }, null, 8, ["radio", "animation-delay"]);
                }), 128))]), !categoryLoading.value && categoryRadios.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [_cache[7] || (_cache[7] = createBaseVNode("i", {
                  class: "ri-radio-line mb-4 text-5xl opacity-20"
                }, null, -1)), createBaseVNode("p", _hoisted_25, toDisplayString(unref(t)("podcast.noCategoryRadios")), 1)])) : createCommentVNode("", true), categoryLoadingMore.value ? (openBlock(), createElementBlock("div", _hoisted_26, [createVNode(_component_n_spin, {
                  size: "small"
                }), createBaseVNode("span", _hoisted_27, toDisplayString(unref(t)("common.loading")), 1)])) : createCommentVNode("", true), !categoryHasMore.value && categoryRadios.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_28, toDisplayString(unref(t)("common.noMore")), 1)) : createCommentVNode("", true)]))]),
                _: 1
              }, 8, ["title", "description", "model-value", "categories"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-0129f8e5"]]));
      }
    };
  });
})();

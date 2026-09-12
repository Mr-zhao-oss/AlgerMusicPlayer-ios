;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './useScrollTitle-legacy-nHgisOEQ.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useUserStore, useRouter, useMessage, useRoute, onMounted, watch, openBlock, createElementBlock, createVNode, withCtx, createBaseVNode, Fragment, renderList, createTextVNode, toDisplayString, unref, normalizeStyle, getImgUrl, createCommentVNode, Scrollbar, PlayBottom, ref, checkLoginStatus, getUserFollows, computed, _export_sfc, useScrollTitle;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useUserStore = module.b5;
        useRouter = module.aU;
        useMessage = module.bt;
        useRoute = module.bh;
        onMounted = module.aq;
        watch = module.Y;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createVNode = module.ak;
        withCtx = module.as;
        createBaseVNode = module.ab;
        Fragment = module.ae;
        renderList = module.af;
        createTextVNode = module.b7;
        toDisplayString = module.ac;
        unref = module.ad;
        normalizeStyle = module.ag;
        getImgUrl = module.aQ;
        createCommentVNode = module.ah;
        Scrollbar = module.be;
        PlayBottom = module.bI;
        ref = module.A;
        checkLoginStatus = module.bJ;
        getUserFollows = module.de;
        computed = module.z;
        _export_sfc = module.ap;
      }, module => {
        useScrollTitle = module.u;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".user-card[data-v-4b4c90ab] {\n  animation: fadeInUp-4b4c90ab 0.4s ease backwards;\n}\n@keyframes fadeInUp-4b4c90ab {\nfrom {\n    opacity: 0;\n    transform: translateY(20px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\nbutton[data-v-4b4c90ab]:focus-visible {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--primary-color);\n}/*$vite$:1*/";
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
          class: "page-padding-x pt-8"
        };
        const _hoisted_5 = {
          class: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        };
        const _hoisted_6 = {
          class: "page-padding-x pt-6 md:pt-8 pb-4"
        };
        const _hoisted_7 = {
          key: 0,
          class: "flex flex-col items-center justify-center py-20 text-neutral-400 dark:text-neutral-500"
        };
        const _hoisted_8 = {
          key: 1,
          class: "page-padding-x"
        };
        const _hoisted_9 = {
          class: "grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        };
        const _hoisted_10 = ["onClick"];
        const _hoisted_11 = {
          class: "relative mx-auto w-fit"
        };
        const _hoisted_12 = {
          class: "w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-transparent group-hover:ring-primary/30 transition-all duration-300"
        };
        const _hoisted_13 = ["src", "alt"];
        const _hoisted_14 = {
          key: 0,
          class: "absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-md"
        };
        const _hoisted_15 = {
          class: "mt-3 text-center"
        };
        const _hoisted_16 = {
          class: "text-sm font-semibold text-neutral-800 dark:text-neutral-100 group-hover:text-primary transition-colors truncate px-1"
        };
        const _hoisted_17 = {
          class: "mt-1 text-xs text-neutral-400 dark:text-neutral-500 line-clamp-1 px-1"
        };
        const _hoisted_18 = {
          key: 0,
          class: "flex items-center justify-center gap-2 py-8"
        };
        const _hoisted_19 = {
          class: "text-sm text-neutral-400 dark:text-neutral-500"
        };
        const _hoisted_20 = {
          key: 1,
          class: "flex justify-center py-8"
        };
        const _hoisted_21 = {
          key: 2,
          class: "text-center text-sm text-neutral-400 dark:text-neutral-500 py-8"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "UserFollows"
          },
          __name: "follows",
          setup(__props) {
            const {
              t
            } = useI18n();
            const userStore = useUserStore();
            const router = useRouter();
            const message = useMessage();
            const route = useRoute();
            const followList = ref([]);
            const followOffset = ref(0);
            const followLimit = ref(30);
            const hasMoreFollows = ref(false);
            const followListLoading = ref(false);
            const targetUserId = ref(null);
            const targetUserName = ref("");
            const user = computed(() => userStore.user);
            const titleElRef = ref(null);
            const followsTitle = computed(() => targetUserName.value ? targetUserName.value + t("user.follow.userFollowsTitle") : t("user.follow.myFollowsTitle"));
            useScrollTitle(followsTitle, titleElRef);
            const checkTargetUser = () => {
              const uid = route.query.uid;
              const name = route.query.name;
              if (uid && typeof uid === "string") {
                targetUserId.value = parseInt(uid);
                targetUserName.value = typeof name === "string" ? name : "";
                return true;
              }
              return checkLoginStatus$1();
            };
            const checkLoginStatus$1 = () => {
              const loginInfo = checkLoginStatus();
              if (!loginInfo.isLoggedIn) {
                router.push("/login");
                return false;
              }
              if (!userStore.user && loginInfo.user) {
                userStore.setUser(loginInfo.user);
              }
              return true;
            };
            const loadFollowList = async () => {
              const userId = targetUserId.value || user.value?.userId;
              if (!userId) return;
              try {
                followListLoading.value = true;
                const {
                  data
                } = await getUserFollows(userId, followLimit.value, followOffset.value);
                if (!data?.follow) {
                  hasMoreFollows.value = false;
                  return;
                }
                const newFollows = data.follow;
                followList.value = [...followList.value, ...newFollows];
                hasMoreFollows.value = newFollows.length >= followLimit.value;
              } catch (error) {
                console.error("加载关注列表失败:", error);
                message.error(t("common.loadFailed"));
              } finally {
                followListLoading.value = false;
              }
            };
            const loadMoreFollows = async () => {
              followOffset.value += followLimit.value;
              await loadFollowList();
            };
            const viewUserDetail = (userId, nickname) => {
              router.push({
                path: `/user/detail/${userId}`,
                query: {
                  name: nickname
                }
              });
            };
            const isArtist = user2 => {
              return user2.userType === 4 || user2.userType === 2 || user2.accountType === 2;
            };
            onMounted(() => {
              if (checkTargetUser()) {
                loadFollowList();
              }
            });
            watch(() => route.query, newQuery => {
              if (newQuery.uid && newQuery.uid !== targetUserId.value?.toString()) {
                followList.value = [];
                followOffset.value = 0;
                checkTargetUser();
                loadFollowList();
              }
            });
            return (_ctx, _cache) => {
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_scrollbar, {
                class: "h-full"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_2, [followListLoading.value && followList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [_cache[1] || (_cache[1] = createBaseVNode("div", {
                  class: "h-8 w-48 mb-6 skeleton-shimmer rounded-xl"
                }, null, -1)), createBaseVNode("div", _hoisted_5, [(openBlock(), createElementBlock(Fragment, null, renderList(12, i => {
                  return createBaseVNode("div", {
                    key: i,
                    class: "flex flex-col items-center space-y-3"
                  }, [...(_cache[0] || (_cache[0] = [createBaseVNode("div", {
                    class: "h-20 w-20 skeleton-shimmer rounded-full"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-4 w-16 skeleton-shimmer rounded-lg"
                  }, null, -1), createBaseVNode("div", {
                    class: "h-3 w-24 skeleton-shimmer rounded-lg"
                  }, null, -1)]))]);
                }), 64))])])])) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createBaseVNode("section", _hoisted_6, [createBaseVNode("h1", {
                  ref_key: "titleElRef",
                  ref: titleElRef,
                  class: "text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight"
                }, [targetUserName.value ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [createTextVNode(toDisplayString(targetUserName.value + unref(t)("user.follow.userFollowsTitle")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createTextVNode(toDisplayString(unref(t)("user.follow.myFollowsTitle")), 1)], 64))], 512)]), followList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                  class: "ri-user-follow-line text-5xl mb-4 opacity-50"
                }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("user.follow.noFollowings")), 1)])) : (openBlock(), createElementBlock("section", _hoisted_8, [createBaseVNode("div", _hoisted_9, [(openBlock(true), createElementBlock(Fragment, null, renderList(followList.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.userId,
                    class: "user-card group cursor-pointer",
                    style: normalizeStyle({
                      animationDelay: `${index * 0.03}s`
                    }),
                    onClick: $event => viewUserDetail(item.userId, item.nickname)
                  }, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("img", {
                    src: unref(getImgUrl)(item.avatarUrl, "100y100"),
                    alt: item.nickname,
                    class: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                    loading: "lazy"
                  }, null, 8, _hoisted_13)]), isArtist(item) ? (openBlock(), createElementBlock("div", _hoisted_14, [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                    class: "ri-verified-badge-fill text-primary text-sm"
                  }, null, -1)]))])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_15, [createBaseVNode("h3", _hoisted_16, toDisplayString(item.nickname), 1), createBaseVNode("p", _hoisted_17, toDisplayString(item.signature || unref(t)("user.follow.noSignature")), 1)])], 12, _hoisted_10);
                }), 128))]), followListLoading.value ? (openBlock(), createElementBlock("div", _hoisted_18, [_cache[4] || (_cache[4] = createBaseVNode("div", {
                  class: "w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"
                }, null, -1)), createBaseVNode("span", _hoisted_19, toDisplayString(unref(t)("common.loading")), 1)])) : hasMoreFollows.value ? (openBlock(), createElementBlock("div", _hoisted_20, [createBaseVNode("button", {
                  class: "px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-200 transition-all duration-200 hover:scale-105 active:scale-95",
                  onClick: loadMoreFollows
                }, toDisplayString(unref(t)("user.follow.loadMore")), 1)])) : followList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_21, " — " + toDisplayString(unref(t)("common.noMore") || "没有更多了") + " — ", 1)) : createCommentVNode("", true)]))], 64))])]),
                _: 1
              }), createVNode(PlayBottom)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const follows = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-4b4c90ab"]]));
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './MusicListNavigator-legacy-0pJHpxez.js', './index-legacy-BahqA-lc.js', './Tabs-legacy-Dw_wmx3F.js', './music-legacy-CGPq9ktk.js', './Add-legacy-CnU6_mh8.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useUserStore, usePlayerStore, useRouter, storeToRefs, useMessage, onBeforeUnmount, watch, onMounted, createElementBlock, Fragment, createBaseVNode, renderList, unref, isMobile, createCommentVNode, normalizeStyle, getImgUrl, normalizeClass, setAnimationClass, toDisplayString, createVNode, __unplugin_components_1, withCtx, openBlock, __unplugin_components_2$1, isElectron, __unplugin_components_1$1, __unplugin_components_2$2, createTextVNode, PlayBottom, Scrollbar, setAnimationDelay, _sfc_main$1, ref, computed, checkLoginStatus, getUserDetail, getUserRecord, getUserPlaylist, createStaticVNode, getUserAlbumSublist, _export_sfc, navigateToMusicList, LoginComponent, __unplugin_components_2, __unplugin_components_3;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useUserStore = module.b5;
        usePlayerStore = module.bb;
        useRouter = module.aU;
        storeToRefs = module.bF;
        useMessage = module.bt;
        onBeforeUnmount = module.bG;
        watch = module.Y;
        onMounted = module.aq;
        createElementBlock = module.a8;
        Fragment = module.ae;
        createBaseVNode = module.ab;
        renderList = module.af;
        unref = module.ad;
        isMobile = module.aX;
        createCommentVNode = module.ah;
        normalizeStyle = module.ag;
        getImgUrl = module.aQ;
        normalizeClass = module.aa;
        setAnimationClass = module.bv;
        toDisplayString = module.ac;
        createVNode = module.ak;
        __unplugin_components_1 = module.bH;
        withCtx = module.as;
        openBlock = module.a7;
        __unplugin_components_2$1 = module.bj;
        isElectron = module.aW;
        __unplugin_components_1$1 = module.br;
        __unplugin_components_2$2 = module.bs;
        createTextVNode = module.b7;
        PlayBottom = module.bI;
        Scrollbar = module.be;
        setAnimationDelay = module.bp;
        _sfc_main$1 = module.bd;
        ref = module.A;
        computed = module.z;
        checkLoginStatus = module.bJ;
        getUserDetail = module.bK;
        getUserRecord = module.bL;
        getUserPlaylist = module.bM;
        createStaticVNode = module.bN;
        getUserAlbumSublist = module.bO;
        _export_sfc = module.ap;
      }, module => {
        navigateToMusicList = module.n;
      }, module => {
        LoginComponent = module.default;
      }, module => {
        __unplugin_components_2 = module._;
        __unplugin_components_3 = module.a;
      }, null, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".user-page[data-v-2e406e11] {\n  display: flex;\n  height: 100%;\n}\n.user-page .left[data-v-2e406e11] {\n  max-width: 600px;\n  position: relative;\n  height: 100%;\n  flex: 1 1 0%;\n  overflow: hidden;\n  border-radius: 1rem;\n  background-repeat: no-repeat;\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));\n}\n.user-page .left[data-v-2e406e11]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.user-page .left .page[data-v-2e406e11] {\n  z-index: 10;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  padding: 1rem;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.4;\n}\n.user-page .left .title[data-v-2e406e11] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.user-page .left .title[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.user-page .left .user-name[data-v-2e406e11] {\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-text-opacity: 0.7;\n}\n.user-page .left .uesr-signature[data-v-2e406e11] {\n  margin-top: 1rem;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-text-opacity: 0.7;\n}\n.user-page .left .user-info[data-v-2e406e11] {\n  display: flex;\n  align-items: center;\n}\n.user-page .left .user-info-list[data-v-2e406e11] {\n  display: flex;\n  width: 40%;\n  justify-content: space-around;\n  text-align: center;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  --tw-text-opacity: 0.7;\n}\n.user-page .left .user-info-list .label[data-v-2e406e11] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.user-page .left .user-info-item[data-v-2e406e11] {\n  cursor: pointer;\n}\n.user-page .right[data-v-2e406e11] {\n  margin-left: 1rem;\n  height: 100%;\n  flex: 1 1 0%;\n  overflow: hidden;\n}\n.user-page .right .record-list[data-v-2e406e11] {\n  border-radius: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.user-page .right .record-list[data-v-2e406e11]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.user-page .right .record-list[data-v-2e406e11] {\n  height: calc(100% - 60px);\n}\n.user-page .right .record-list .record-item[data-v-2e406e11] {\n  margin-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  border-radius: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 249 250 / var(--tw-bg-opacity, 1));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.user-page .right .record-list .record-item[data-v-2e406e11]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 22 22 / var(--tw-bg-opacity, 1));\n}\n.user-page .right .record-list .song-item[data-v-2e406e11] {\n  flex: 1 1 0%;\n}\n.user-page .right .record-list .play-score[data-v-2e406e11] {\n  margin-right: 0.5rem;\n  display: flex;\n  height: 2.5rem;\n  width: 2.5rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.user-page .right .record-list .play-score[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.user-page .right .title[data-v-2e406e11] {\n  margin: 1rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.user-page .right .title[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.play-list[data-v-2e406e11] {\n  margin-top: 1rem;\n  flex: 1 1 0%;\n  overflow: hidden;\n  border-radius: 0.75rem;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.play-list[data-v-2e406e11]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.play-list-title[data-v-2e406e11] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.play-list-title[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.play-list-item[data-v-2e406e11] {\n  display: flex;\n  width: 100%;\n  cursor: pointer;\n  align-items: center;\n  border-radius: 0.75rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n}\n.play-list-item[data-v-2e406e11]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(233 236 239 / var(--tw-bg-opacity, 1));\n}\n.play-list-item[data-v-2e406e11]:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity, 1));\n}\n.play-list-item-img[data-v-2e406e11] {\n  display: flex;\n  height: 60px;\n  width: 60px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(222 226 230 / var(--tw-bg-opacity, 1));\n  font-size: 40px;\n}\n.play-list-item-img[data-v-2e406e11]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1));\n}\n.play-list-item-img .iconfont[data-v-2e406e11] {\n  font-size: 40px;\n}\n.play-list-item-info[data-v-2e406e11] {\n  margin-left: 0.5rem;\n  flex: 1 1 0%;\n}\n.play-list-item-name[data-v-2e406e11] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.play-list-item-name[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.play-list-item-name .playlist-creator-tag[data-v-2e406e11] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(222 226 230 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.play-list-item-name .playlist-creator-tag[data-v-2e406e11]:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1));\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.play-list-item-name .playlist-creator-tag[data-v-2e406e11] {\n  border-width: 1px;\n  border-color: rgb(34 197 94 / 0.2);\n}\n.play-list-item-name .playlist-creator-tag[data-v-2e406e11]:is(.dark *) {\n  border-color: rgb(34 197 94 / 0.3);\n}\n.play-list-item-name .playlist-creator-tag[data-v-2e406e11] {\n  height: 18px;\n  font-size: 10px;\n  font-weight: 500;\n  min-width: 60px;\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n}\n.play-list-item-count[data-v-2e406e11] {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.play-list-item-count[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.login-type[data-v-2e406e11] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.login-type[data-v-2e406e11]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.mobile .user-page[data-v-2e406e11] {\n  padding-left: var(--page-pl);\n  padding-right: var(--page-pr);\n}\n.mobile .login-container[data-v-2e406e11] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n[data-v-2e406e11] .n-tabs-rail {\n  overflow: hidden !important;\n  border-radius: 0.75rem !important;\n}\n[data-v-2e406e11] .n-tabs-rail .n-tabs-capsule {\n  border-radius: 0.75rem !important;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "user-page"
        };
        const _hoisted_2 = {
          class: "left-skeleton flex-1 max-w-[600px] rounded-2xl overflow-hidden p-4 bg-light-200 dark:bg-dark-100"
        };
        const _hoisted_3 = {
          class: "flex flex-col gap-6"
        };
        const _hoisted_4 = {
          class: "flex items-center gap-4"
        };
        const _hoisted_5 = {
          class: "flex w-2/5 justify-around"
        };
        const _hoisted_6 = {
          class: "mt-4 rounded-xl bg-light p-4 dark:bg-black"
        };
        const _hoisted_7 = {
          class: "space-y-4"
        };
        const _hoisted_8 = {
          key: 0,
          class: "right"
        };
        const _hoisted_9 = {
          class: "rounded-2xl bg-light p-4 dark:bg-black"
        };
        const _hoisted_10 = {
          class: "space-y-2"
        };
        const _hoisted_11 = {
          class: "page"
        };
        const _hoisted_12 = {
          class: "user-name"
        };
        const _hoisted_13 = {
          key: 0,
          class: "login-type"
        };
        const _hoisted_14 = {
          class: "user-info"
        };
        const _hoisted_15 = {
          class: "user-info-list"
        };
        const _hoisted_16 = {
          class: "user-info-item"
        };
        const _hoisted_17 = {
          class: "label"
        };
        const _hoisted_18 = {
          class: "label"
        };
        const _hoisted_19 = {
          class: "user-info-item"
        };
        const _hoisted_20 = {
          class: "label"
        };
        const _hoisted_21 = {
          class: "uesr-signature"
        };
        const _hoisted_22 = {
          class: "tab-container"
        };
        const _hoisted_23 = {
          class: "mt-4"
        };
        const _hoisted_24 = {
          key: 0,
          class: "flex h-32 items-center justify-center"
        };
        const _hoisted_25 = {
          class: "play-list-item-info"
        };
        const _hoisted_26 = {
          class: "play-list-item-name"
        };
        const _hoisted_27 = ["onClick"];
        const _hoisted_28 = {
          class: "play-list-item-info"
        };
        const _hoisted_29 = {
          class: "play-list-item-name"
        };
        const _hoisted_30 = {
          class: "play-list-item-count"
        };
        const _hoisted_31 = {
          class: "title"
        };
        const _hoisted_32 = {
          class: "record-list"
        };
        const _hoisted_33 = {
          class: "play-score"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          ...{
            name: "User"
          },
          __name: "index",
          setup(__props) {
            const {
              t
            } = useI18n();
            const userStore = useUserStore();
            const playerStore = usePlayerStore();
            const router = useRouter();
            const {
              userDetail,
              recordList
            } = storeToRefs(userStore);
            const infoLoading = ref(false);
            const albumLoading = ref(false);
            const mounted = ref(true);
            const message = useMessage();
            const tabs = [{
              key: "created",
              label: "user.tabs.created"
            }, {
              key: "favorite",
              label: "user.tabs.favorite"
            }, {
              key: "album",
              label: "user.tabs.album"
            }];
            const currentTab = ref("created");
            const user = computed(() => userStore.user);
            const createdPlaylists = computed(() => {
              if (!user.value) return [];
              return userStore.playList.filter(item => item.creator?.userId === user.value.userId);
            });
            const favoritePlaylists = computed(() => {
              if (!user.value) return [];
              return userStore.playList.filter(item => item.creator?.userId !== user.value.userId);
            });
            const currentList = computed(() => {
              if (currentTab.value === "album") {
                return userStore.albumList;
              }
              return currentTab.value === "created" ? createdPlaylists.value : favoritePlaylists.value;
            });
            const getCoverUrl = item => {
              return item.coverImgUrl || item.picUrl || "";
            };
            const getItemDescription = item => {
              if (currentTab.value === "album") {
                const artist = item.artist?.name || "";
                const size = item.size ? ` · ${item.size}首` : "";
                return `${artist}${size}`;
              } else {
                return `${t("user.playlist.trackCount", {
                  count: item.trackCount
                })}，${t("user.playlist.playCount", {
                  count: item.playCount
                })}`;
              }
            };
            const handleItemClick = item => {
              if (currentTab.value === "album") {
                openAlbum(item);
              } else {
                openPlaylist(item);
              }
            };
            const goToImportPlaylist = () => {
              router.push("/playlist/import");
            };
            onBeforeUnmount(() => {
              mounted.value = false;
            });
            const checkLoginStatus$1 = () => {
              if (userStore.user && userStore.loginType) {
                return true;
              }
              const loginInfo = checkLoginStatus();
              if (!loginInfo.isLoggedIn) {
                !isMobile.value && router.push("/login");
                return false;
              }
              return true;
            };
            const loadPage = async () => {
              if (!mounted.value) return;
              if (!checkLoginStatus$1()) return;
              await loadData();
            };
            const loadData = async () => {
              try {
                if (!userDetail.value || !recordList.value?.length) {
                  infoLoading.value = true;
                }
                if (!user.value) {
                  console.warn("用户数据不存在，尝试重新获取");
                  return;
                }
                const promises = [getUserDetail(user.value.userId), getUserRecord(user.value.userId)];
                if (userStore.playList.length === 0) {
                  promises.push(getUserPlaylist(user.value.userId));
                }
                const results = await Promise.all(promises);
                if (!mounted.value) return;
                userDetail.value = results[0].data;
                recordList.value = results[1].data.allData.map(item => ({
                  ...item,
                  ...item.song,
                  picUrl: item.song.al.picUrl
                }));
                if (results.length > 2 && results[2].data?.playlist) {
                  userStore.playList = results[2].data.playlist;
                }
              } catch (error) {
                console.error("加载用户页面失败:", error);
                if (error.response?.status === 401) {
                  userStore.handleLogout();
                  router.push("/login");
                } else {
                  message.error(t("user.message.loadFailed"));
                }
              } finally {
                if (mounted.value) {
                  infoLoading.value = false;
                }
              }
            };
            const loadAlbumList = async () => {
              if (userStore.albumList.length > 0) {
                return;
              }
              try {
                albumLoading.value = true;
                const res = await getUserAlbumSublist({
                  limit: 100,
                  offset: 0
                });
                if (!mounted.value) return;
                userStore.albumList = res.data.data || [];
              } catch (error) {
                console.error("加载专辑列表失败:", error);
                message.error("加载专辑列表失败");
              } finally {
                if (mounted.value) {
                  albumLoading.value = false;
                }
              }
            };
            watch(() => router.currentRoute.value.path, newPath => {
              console.log("newPath", newPath);
              if (newPath === "/user") {
                checkLoginStatus$1();
                loadData();
              }
            });
            watch(() => userStore.user, newUser => {
              if (!mounted.value) return;
              if (newUser) {
                checkLoginStatus$1();
                loadPage();
              }
            });
            watch(currentTab, async newTab => {
              if (newTab === "album") {
                await userStore.initializeCollectedAlbums();
                if (userStore.albumList.length === 0) {
                  loadAlbumList();
                }
              }
            });
            onMounted(() => {
              checkLoginStatus$1() && loadData();
            });
            const openPlaylist = item => {
              navigateToMusicList(router, {
                id: item.id,
                type: "playlist",
                name: item.name,
                listInfo: item,
                canRemove: true
                // 保留可移除功能
              });
            };
            const openAlbum = async item => {
              navigateToMusicList(router, {
                id: item.id,
                type: "album",
                name: item.name,
                listInfo: {
                  ...item,
                  coverImgUrl: item.picUrl || item.coverImgUrl
                },
                canRemove: false
                // 专辑不支持移除歌曲
              });
            };
            const handlePlay = () => {
              const tracks = recordList.value || [];
              playerStore.setPlayList(tracks);
            };
            const showFollowList = () => {
              if (!user.value) return;
              router.push("/user/follows");
            };
            const handleLoginSuccess = () => {
              checkLoginStatus$1();
              loadData();
            };
            const isLoggedIn = computed(() => userStore.user);
            const currentLoginType = computed(() => userStore.loginType);
            return (_ctx, _cache) => {
              const _component_n_avatar = __unplugin_components_1;
              const _component_n_tab = __unplugin_components_2;
              const _component_n_tabs = __unplugin_components_3;
              const _component_n_spin = __unplugin_components_2$1;
              const _component_n_image = __unplugin_components_1$1;
              const _component_n_ellipsis = __unplugin_components_2$2;
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [infoLoading.value ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [_cache[5] || (_cache[5] = createBaseVNode("div", {
                class: "flex justify-between"
              }, [createBaseVNode("div", {
                class: "h-8 w-32 skeleton-shimmer rounded-lg"
              }), createBaseVNode("div", {
                class: "h-6 w-20 skeleton-shimmer rounded-lg"
              })], -1)), createBaseVNode("div", _hoisted_4, [_cache[2] || (_cache[2] = createBaseVNode("div", {
                class: "h-[50px] w-[50px] skeleton-shimmer rounded-full"
              }, null, -1)), createBaseVNode("div", _hoisted_5, [(openBlock(), createElementBlock(Fragment, null, renderList(3, i => {
                return createBaseVNode("div", {
                  key: i,
                  class: "flex flex-col items-center gap-1"
                }, [...(_cache[1] || (_cache[1] = [createBaseVNode("div", {
                  class: "h-5 w-8 skeleton-shimmer rounded-lg"
                }, null, -1), createBaseVNode("div", {
                  class: "h-4 w-12 skeleton-shimmer rounded-lg"
                }, null, -1)]))]);
              }), 64))])]), _cache[6] || (_cache[6] = createBaseVNode("div", {
                class: "h-4 w-3/4 skeleton-shimmer rounded-lg"
              }, null, -1)), createBaseVNode("div", _hoisted_6, [_cache[4] || (_cache[4] = createBaseVNode("div", {
                class: "mb-4 h-8 w-full skeleton-shimmer rounded-xl"
              }, null, -1)), createBaseVNode("div", _hoisted_7, [(openBlock(), createElementBlock(Fragment, null, renderList(5, i => {
                return createBaseVNode("div", {
                  key: i,
                  class: "flex gap-3"
                }, [...(_cache[3] || (_cache[3] = [createBaseVNode("div", {
                  class: "h-[50px] w-[50px] skeleton-shimmer rounded-xl flex-shrink-0"
                }, null, -1), createBaseVNode("div", {
                  class: "flex flex-1 flex-col justify-center gap-2"
                }, [createBaseVNode("div", {
                  class: "h-4 w-1/2 skeleton-shimmer rounded-lg"
                }), createBaseVNode("div", {
                  class: "h-3 w-1/3 skeleton-shimmer rounded-lg"
                })], -1)]))]);
              }), 64))])])])]), !unref(isMobile) ? (openBlock(), createElementBlock("div", _hoisted_8, [_cache[8] || (_cache[8] = createBaseVNode("div", {
                class: "title"
              }, [createBaseVNode("div", {
                class: "h-8 w-32 skeleton-shimmer rounded-lg"
              })], -1)), createBaseVNode("div", _hoisted_9, [createBaseVNode("div", _hoisted_10, [(openBlock(), createElementBlock(Fragment, null, renderList(10, i => {
                return createBaseVNode("div", {
                  key: i,
                  class: "flex items-center gap-4 rounded-2xl bg-light-100 p-2 dark:bg-dark-100"
                }, [...(_cache[7] || (_cache[7] = [createStaticVNode('<div class="h-10 w-10 skeleton-shimmer rounded-full flex-shrink-0" data-v-2e406e11></div><div class="h-10 w-10 skeleton-shimmer rounded-xl flex-shrink-0" data-v-2e406e11></div><div class="flex flex-1 flex-col gap-2" data-v-2e406e11><div class="h-4 w-1/3 skeleton-shimmer rounded-lg" data-v-2e406e11></div><div class="h-3 w-1/4 skeleton-shimmer rounded-lg" data-v-2e406e11></div></div>', 3)]))]);
              }), 64))])])])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [unref(userDetail) && user.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["left", unref(setAnimationClass)("animate__fadeIn")]),
                style: normalizeStyle({
                  backgroundImage: `url(${unref(getImgUrl)(user.value.backgroundUrl)})`
                })
              }, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("span", null, toDisplayString(user.value.nickname), 1), currentLoginType.value ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(unref(t)("login.title." + currentLoginType.value)), 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_14, [createVNode(_component_n_avatar, {
                round: "",
                size: 50,
                src: unref(getImgUrl)(user.value.avatarUrl, "50y50")
              }, null, 8, ["src"]), createBaseVNode("div", _hoisted_15, [createBaseVNode("div", _hoisted_16, [createBaseVNode("div", _hoisted_17, toDisplayString(unref(userDetail).profile.followeds), 1), createBaseVNode("div", null, toDisplayString(unref(t)("user.profile.followers")), 1)]), createBaseVNode("div", {
                class: "user-info-item",
                onClick: showFollowList
              }, [createBaseVNode("div", _hoisted_18, toDisplayString(unref(userDetail).profile.follows), 1), createBaseVNode("div", null, toDisplayString(unref(t)("user.profile.following")), 1)]), createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, toDisplayString(unref(userDetail).level), 1), createBaseVNode("div", null, toDisplayString(unref(t)("user.profile.level")), 1)])])]), createBaseVNode("div", _hoisted_21, toDisplayString(unref(userDetail).profile.signature), 1), createBaseVNode("div", {
                class: normalizeClass(["play-list", unref(setAnimationClass)("animate__fadeIn")])
              }, [createBaseVNode("div", _hoisted_22, [createVNode(_component_n_tabs, {
                value: currentTab.value,
                "onUpdate:value": _cache[0] || (_cache[0] = $event => currentTab.value = $event),
                type: "segment",
                animated: ""
              }, {
                default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(tabs, tab => {
                  return createVNode(_component_n_tab, {
                    key: tab.key,
                    name: tab.key,
                    tab: unref(t)(tab.label)
                  }, null, 8, ["name", "tab"]);
                }), 64))]),
                _: 1
              }, 8, ["value"])]), createVNode(_component_n_scrollbar, null, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_23, [albumLoading.value && currentTab.value === "album" ? (openBlock(), createElementBlock("div", _hoisted_24, [createVNode(_component_n_spin, {
                  size: "medium"
                })])) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [unref(isElectron) && currentTab.value === "created" ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "play-list-item",
                  onClick: goToImportPlaylist
                }, [_cache[9] || (_cache[9] = createBaseVNode("div", {
                  class: "play-list-item-img"
                }, [createBaseVNode("i", {
                  class: "icon iconfont ri-add-line"
                })], -1)), createBaseVNode("div", _hoisted_25, [createBaseVNode("div", _hoisted_26, toDisplayString(unref(t)("comp.playlist.import.button")), 1)])])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(currentList.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "play-list-item",
                    onClick: $event => handleItemClick(item)
                  }, [createVNode(_component_n_image, {
                    src: unref(getImgUrl)(getCoverUrl(item), "50y50"),
                    class: "play-list-item-img",
                    lazy: "",
                    "preview-disabled": ""
                  }, null, 8, ["src"]), createBaseVNode("div", _hoisted_28, [createBaseVNode("div", _hoisted_29, [createVNode(_component_n_ellipsis, {
                    "line-clamp": 1
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
                    _: 2
                  }, 1024)]), createBaseVNode("div", _hoisted_30, toDisplayString(getItemDescription(item)), 1)])], 8, _hoisted_27);
                }), 128)), _cache[10] || (_cache[10] = createBaseVNode("div", {
                  class: "pb-20"
                }, null, -1)), createVNode(PlayBottom)], 64))])]),
                _: 1
              })], 2)])], 6)) : createCommentVNode("", true), !unref(isMobile) ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["right", unref(setAnimationClass)("animate__fadeIn")])
              }, [createBaseVNode("div", _hoisted_31, toDisplayString(unref(t)("user.ranking.title")), 1), createBaseVNode("div", _hoisted_32, [createVNode(_component_n_scrollbar, null, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(recordList), (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.id,
                    class: normalizeClass(["record-item", unref(setAnimationClass)("animate__bounceInUp")]),
                    style: normalizeStyle(unref(setAnimationDelay)(index, 25))
                  }, [createBaseVNode("div", _hoisted_33, toDisplayString(index + 1), 1), createVNode(_sfc_main$1, {
                    class: "song-item",
                    item,
                    mini: "",
                    onPlay: handlePlay
                  }, null, 8, ["item"])], 6);
                }), 128)), createVNode(PlayBottom)]),
                _: 1
              })])], 2)) : createCommentVNode("", true)], 64)), !isLoggedIn.value && unref(isMobile) ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(["login-container", unref(setAnimationClass)("animate__fadeIn")])
              }, [createVNode(LoginComponent, {
                onLoginSuccess: handleLoginSuccess
              })], 2)) : createCommentVNode("", true)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const index = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-2e406e11"]]));
      }
    };
  });
})();

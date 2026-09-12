;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './VirtualList-legacy-nZVZUnH5.js', './VirtualList-legacy-Dp4NcZuw.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useMessage, useDialog, usePlayerStore, watch, nextTick, setDialogState, onMounted, onUnmounted, openBlock, createElementBlock, createCommentVNode, normalizeClass, unref, isMobile, createBaseVNode, toDisplayString, createVNode, withCtx, createTextVNode, __unplugin_components_3, createBlock, _sfc_main$1, withModifiers, Fragment, ref, computed, _export_sfc, __unplugin_components_1;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useMessage = module.bt;
        useDialog = module.dc;
        usePlayerStore = module.bb;
        watch = module.Y;
        nextTick = module.a2;
        setDialogState = module.eF;
        onMounted = module.aq;
        onUnmounted = module.ar;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createCommentVNode = module.ah;
        normalizeClass = module.aa;
        unref = module.ad;
        isMobile = module.aX;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        createVNode = module.ak;
        withCtx = module.as;
        createTextVNode = module.b7;
        __unplugin_components_3 = module.dg;
        createBlock = module.aY;
        _sfc_main$1 = module.bd;
        withModifiers = module.a9;
        Fragment = module.ae;
        ref = module.A;
        computed = module.z;
        _export_sfc = module.ap;
      }, module => {
        __unplugin_components_1 = module._;
      }, null],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".fixed-overlay[data-v-211beb2f] {\n  position: fixed;\n  inset: 0px;\n  z-index: 999999;\n  pointer-events: auto;\n  cursor: default;\n}\n.playlist-panel[data-v-211beb2f] {\n  position: fixed;\n  right: 0px;\n  z-index: 9999999;\n  overflow: hidden;\n  border-top-left-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n  width: 350px;\n  height: 70vh;\n  top: 15vh;\n  animation-duration: 0.4s !important;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.playlist-panel[data-v-211beb2f]:is(.dark *) {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity, 1));\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.playlist-panel-header[data-v-211beb2f] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.playlist-panel-header[data-v-211beb2f]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity, 1));\n}\n.playlist-panel-header[data-v-211beb2f] {\n  backdrop-filter: blur(10px);\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.dark .playlist-panel-header[data-v-211beb2f] {\n  background-color: rgba(18, 18, 18, 0.7);\n}\n.playlist-panel-header .title[data-v-211beb2f] {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .title[data-v-211beb2f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .header-actions[data-v-211beb2f] {\n  display: flex;\n  align-items: center;\n}\n.playlist-panel-header .action-btn[data-v-211beb2f],\n.playlist-panel-header .close-btn[data-v-211beb2f] {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  display: flex;\n  height: 2rem;\n  width: 2rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:is(.dark *),\n.playlist-panel-header .close-btn[data-v-211beb2f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f],\n.playlist-panel-header .close-btn[data-v-211beb2f] {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:hover,\n.playlist-panel-header .close-btn[data-v-211beb2f]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:hover:is(.dark *),\n.playlist-panel-header .close-btn[data-v-211beb2f]:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.playlist-panel-header .action-btn .iconfont[data-v-211beb2f],\n.playlist-panel-header .close-btn .iconfont[data-v-211beb2f] {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.playlist-panel-header .action-btn[data-v-211beb2f] {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:hover:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-content[data-v-211beb2f] {\n  height: calc(70vh - 60px);\n  overflow: hidden;\n}\n.empty-playlist[data-v-211beb2f] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.empty-playlist[data-v-211beb2f]:is(.dark *) {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.empty-playlist .iconfont[data-v-211beb2f] {\n  margin-bottom: 1rem;\n  font-size: 3rem;\n  line-height: 1;\n}\n.empty-playlist p[data-v-211beb2f] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.music-play-list-content[data-v-211beb2f] {\n  padding-right: 0.5rem;\n}\n.music-play-list-content[data-v-211beb2f]:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 249 250 / var(--tw-bg-opacity, 1));\n}\n.music-play-list-content[data-v-211beb2f]:hover:is(.dark *) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 22 22 / var(--tw-bg-opacity, 1));\n}\n.music-play-list-content:hover .delete-btn[data-v-211beb2f] {\n  visibility: visible;\n}\n.music-play-list-content .delete-btn[data-v-211beb2f] {\n  visibility: hidden;\n  cursor: pointer;\n  padding-right: 0.5rem;\n}\n.music-play-list-content .delete-btn .iconfont[data-v-211beb2f] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n@media (max-width: 768px) {\n.playlist-panel[data-v-211beb2f] {\n    position: fixed;\n    width: 100%;\n    height: 80vh;\n    top: auto;\n    bottom: 0;\n    border-radius: 30px 30px 0 0;\n    border-left: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.5);\n    background-color: rgb(17 24 39 / 0.7);\n    --tw-backdrop-blur: blur(40px);\n    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.playlist-panel-header[data-v-211beb2f] {\n    position: relative;\n    border-bottom-width: 1px;\n    border-color: rgb(255 255 255 / 0.1);\n    padding-left: 1rem;\n    padding-right: 1rem;\n    text-align: center;\n    background-color: transparent !important;\n    backdrop-filter: none;\n}\n.playlist-panel-header[data-v-211beb2f]::before {\n    content: \"\";\n    position: absolute;\n    top: -15px;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 40px;\n    height: 5px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.3);\n}\n.playlist-panel-header .title[data-v-211beb2f] {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-header .action-btn[data-v-211beb2f],\n  .playlist-panel-header .close-btn[data-v-211beb2f] {\n    color: rgb(255 255 255 / 0.6);\n}\n.playlist-panel-header .action-btn[data-v-211beb2f]:hover,\n  .playlist-panel-header .close-btn[data-v-211beb2f]:hover {\n    background-color: rgb(255 255 255 / 0.1);\n}\n.playlist-panel-content[data-v-211beb2f] {\n    height: calc(80vh - 60px);\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.playlist-panel-content .delete-btn[data-v-211beb2f] {\n    visibility: visible;\n    color: rgb(255 255 255 / 0.6);\n}\n.playlist-panel-content .delete-btn[data-v-211beb2f]:hover {\n    --tw-text-opacity: 1;\n    color: rgb(248 113 113 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-content .music-play-list-content[data-v-211beb2f] {\n    margin-bottom: 0.25rem;\n    border-radius: 0.5rem;\n}\n.playlist-panel-content .music-play-list-content[data-v-211beb2f]:hover {\n    background-color: rgb(255 255 255 / 0.05);\n}\n.playlist-panel-content[data-v-211beb2f] .song-item .song-name {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.playlist-panel-content[data-v-211beb2f] .song-item .song-artist {\n    color: rgb(255 255 255 / 0.6);\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "playlist-panel-header"
        };
        const _hoisted_2 = {
          class: "title"
        };
        const _hoisted_3 = {
          class: "header-actions"
        };
        const _hoisted_4 = {
          class: "playlist-panel-content"
        };
        const _hoisted_5 = {
          key: 0,
          class: "empty-playlist"
        };
        const _hoisted_6 = {
          class: "music-play-list-content"
        };
        const _hoisted_7 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_8 = ["onClick"];
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "PlayingListDrawer",
          setup(__props) {
            const {
              t
            } = useI18n();
            const message = useMessage();
            const dialog = useDialog();
            const playerStore = usePlayerStore();
            const internalVisible = ref(false);
            const closing = ref(false);
            const show = computed({
              get: () => playerStore.playListDrawerVisible,
              set: value => {
                playerStore.setPlayListDrawerVisible(value);
              }
            });
            watch(show, newValue => {
              if (newValue) {
                internalVisible.value = true;
                closing.value = false;
                nextTick(() => {
                  scrollToCurrentSong();
                });
                setDialogState(true, () => {
                  closePanel();
                });
              } else {
                if (!internalVisible.value) return;
                closing.value = true;
                setTimeout(() => {
                  internalVisible.value = false;
                }, 400);
                setDialogState(false);
              }
            }, {
              immediate: true
            });
            const playList = computed(() => playerStore.playList);
            const playListRef = ref(null);
            const closePanel = () => {
              show.value = false;
            };
            const onAnimationEnd = () => {
              if (closing.value) {
                internalVisible.value = false;
              }
            };
            const handleClearPlaylist = () => {
              if (playList.value.length === 0) {
                message.info(t("player.playList.alreadyEmpty"));
                return;
              }
              if (isMobile.value) {
                closePanel();
              }
              dialog.warning({
                title: t("player.playList.clearConfirmTitle"),
                content: t("player.playList.clearConfirmContent"),
                positiveText: t("common.confirm"),
                negativeText: t("common.cancel"),
                style: {
                  zIndex: 999999999
                },
                // 确保对话框显示在遮罩之上
                onPositiveClick: () => {
                  playerStore.clearPlayAll();
                  message.success(t("player.playList.cleared"));
                }
              });
            };
            const handleKeyDown = event => {
              if (event.key === "Escape" && internalVisible.value) {
                closePanel();
              }
            };
            onMounted(() => {
              window.addEventListener("keydown", handleKeyDown);
            });
            onUnmounted(() => {
              window.removeEventListener("keydown", handleKeyDown);
            });
            const scrollToCurrentSong = () => {
              setTimeout(() => {
                if (playListRef.value && playList.value.length > 0) {
                  const index = playerStore.playListIndex;
                  console.log("滚动到歌曲索引:", index);
                  playListRef.value.scrollTo({
                    top: (index > 3 ? index - 3 : 0) * 62
                  });
                }
              }, 100);
            };
            const handleDeleteSong = song => {
              playerStore.removeFromPlayList(song.id);
            };
            return (_ctx, _cache) => {
              const _component_n_tooltip = __unplugin_components_3;
              const _component_n_virtual_list = __unplugin_components_1;
              return openBlock(), createElementBlock(Fragment, null, [internalVisible.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "fixed-overlay",
                onClick: closePanel
              })) : createCommentVNode("", true), internalVisible.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["playlist-panel", ["animate__animated", closing.value ? unref(isMobile) ? "animate__slideOutDown" : "animate__slideOutRight" : unref(isMobile) ? "animate__slideInUp" : "animate__slideInRight", unref(isMobile) ? "dark" : ""]]),
                onAnimationend: onAnimationEnd
              }, [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, toDisplayString(unref(t)("player.playBar.playList")), 1), createBaseVNode("div", _hoisted_3, [createVNode(_component_n_tooltip, {
                trigger: "hover"
              }, {
                trigger: withCtx(() => [createBaseVNode("div", {
                  class: "action-btn",
                  onClick: handleClearPlaylist
                }, [...(_cache[0] || (_cache[0] = [createBaseVNode("i", {
                  class: "iconfont ri-delete-bin-line"
                }, null, -1)]))])]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("player.playList.clearAll")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: "close-btn",
                onClick: closePanel
              }, [...(_cache[1] || (_cache[1] = [createBaseVNode("i", {
                class: "iconfont ri-close-line"
              }, null, -1)]))])])]), createBaseVNode("div", _hoisted_4, [playList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [_cache[2] || (_cache[2] = createBaseVNode("i", {
                class: "iconfont ri-music-2-line"
              }, null, -1)), createBaseVNode("p", null, toDisplayString(unref(t)("player.playList.empty")), 1)])) : (openBlock(), createBlock(_component_n_virtual_list, {
                key: 1,
                ref_key: "playListRef",
                ref: playListRef,
                "item-size": 62,
                "item-resizable": "",
                items: playList.value
              }, {
                default: withCtx(({
                  item
                }) => [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [(openBlock(), createBlock(_sfc_main$1, {
                  key: item.id,
                  class: "flex-1",
                  item,
                  mini: ""
                }, null, 8, ["item"])), createBaseVNode("div", {
                  class: "delete-btn",
                  onClick: withModifiers($event => handleDeleteSong(item), ["stop"])
                }, [...(_cache[3] || (_cache[3] = [createBaseVNode("i", {
                  class: "iconfont ri-delete-bin-line text-gray-400 hover:text-red-500 transition-colors"
                }, null, -1)]))], 8, _hoisted_8)])])]),
                _: 1
              }, 8, ["items"]))])], 34)) : createCommentVNode("", true)], 64);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const PlayingListDrawer = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-211beb2f"]]));
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-BqM8rotH.js', './MusicFullWrapper.vue_vue_type_script_setup_true_lang-legacy-BmUPc_kE.js', './index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var useSwipe, _sfc_main$1, defineComponent, inject, usePlayerStore, useSettingsStore, watch, safeAreaService, onMounted, playMusic, openBlock, createElementBlock, unref, createBaseVNode, createVNode, getImgUrl, __unplugin_components_1, withCtx, toDisplayString, Fragment, renderList, artistList, __unplugin_components_2, normalizeClass, createCommentVNode, normalizeStyle, textColors, setAnimationClass, computed, ref, _export_sfc;
    return {
      setters: [module => {
        useSwipe = module.e;
      }, module => {
        _sfc_main$1 = module._;
      }, module => {
        defineComponent = module.d;
        inject = module.E;
        usePlayerStore = module.bb;
        useSettingsStore = module.cH;
        watch = module.Y;
        safeAreaService = module.eE;
        onMounted = module.aq;
        playMusic = module.eg;
        openBlock = module.a7;
        createElementBlock = module.a8;
        unref = module.ad;
        createBaseVNode = module.ab;
        createVNode = module.ak;
        getImgUrl = module.aQ;
        __unplugin_components_1 = module.br;
        withCtx = module.as;
        toDisplayString = module.ac;
        Fragment = module.ae;
        renderList = module.af;
        artistList = module.em;
        __unplugin_components_2 = module.bs;
        normalizeClass = module.aa;
        createCommentVNode = module.ah;
        normalizeStyle = module.ag;
        textColors = module.eo;
        setAnimationClass = module.bv;
        computed = module.z;
        ref = module.A;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "@charset \"UTF-8\";\n.mobile-play-bar[data-v-62b57cc6]{\n  position: fixed;\n  bottom: 76px;\n  left: 0px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  z-index: 10000;\n  animation-duration: 0.3s !important;\n  transition: all 0.3s ease;\n}\n.mobile-play-bar.is-menu-show[data-v-62b57cc6] {\n  bottom: calc(var(--safe-area-inset-bottom, 0) + 66px);\n}\n.mobile-play-bar.is-menu-hide[data-v-62b57cc6] {\n  bottom: calc(var(--safe-area-inset-bottom, 0) + 10px);\n}\n.mobile-play-bar.play-bar-expanded[data-v-62b57cc6]{\n  background-color: transparent;\n  height: auto; /* 自动适应内容高度 */\n  max-height: 230px; /* 限制最大高度 */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.9) 100%);\n}\n.mobile-play-bar.play-bar-mini[data-v-62b57cc6]{\n  height: 3.5rem;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.mobile-play-bar .music-progress-bar[data-v-62b57cc6]{\n  position: relative;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.mobile-play-bar .music-progress-bar .current-time[data-v-62b57cc6],\n.mobile-play-bar .music-progress-bar .total-time[data-v-62b57cc6]{\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  opacity: 0.8;\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper[data-v-62b57cc6]{\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n  align-items: center;\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6]{\n  width: 100%;\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider {\n  --n-rail-height: 3px;\n  --n-rail-color: rgba(255, 255, 255, 0.15);\n  --n-rail-color-dark: rgba(255, 255, 255, 0.15);\n  --n-fill-color: #22c55e;\n  --n-handle-size: 0px; /* 隐藏滑块 */\n  --n-handle-color: #22c55e;\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider:hover {\n  --n-handle-size: 10px; /* 鼠标悬停时显示滑块 */\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider .n-slider-rail{\n  border-radius: 9999px !important; /* 圆角进度条 */\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider .n-slider-fill{\n  border-radius: 9999px !important;\n  box-shadow: 0 0 4px rgba(30, 215, 96, 0.5); /* 发光效果 */\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider .n-slider-handle{\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  opacity: 0;\n  box-shadow: 0 0 4px rgba(255, 255, 255, 0.7);\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider:hover .n-slider-handle, .mobile-play-bar .music-progress-bar .progress-wrapper .progress-slider[data-v-62b57cc6] .n-slider:active .n-slider-handle {\n  opacity: 1;\n}\n.mobile-play-bar .music-progress-bar .progress-wrapper .quality-label[data-v-62b57cc6]{\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  opacity: 0.7;\n}\n.mobile-play-bar .player-controls[data-v-62b57cc6]{\n  position: relative;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 0.75rem;\n  padding-bottom: 2rem;\n}\n.mobile-play-bar .player-controls .control-btn[data-v-62b57cc6]{\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.mobile-play-bar .player-controls .control-btn i[data-v-62b57cc6]{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.mobile-play-bar .player-controls .control-btn.like i[data-v-62b57cc6]{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.mobile-play-bar .player-controls .control-btn.prev i[data-v-62b57cc6], .mobile-play-bar .player-controls .control-btn.next i[data-v-62b57cc6]{\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.mobile-play-bar .player-controls .control-btn.play-pause[data-v-62b57cc6]{\n  display: flex;\n  height: 3rem;\n  width: 3rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  background: rgba(255, 255, 255, 0.2);\n}\n.mobile-play-bar .player-controls .control-btn.play-pause i[data-v-62b57cc6]{\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.mobile-play-bar .player-controls .control-btn.list i[data-v-62b57cc6]{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.mobile-play-bar .player-controls .control-btn .like-active[data-v-62b57cc6]{\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls[data-v-62b57cc6]{\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n  display: flex;\n  height: 3rem;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 249 250 / var(--tw-bg-opacity, 1));\n  padding-right: 1rem;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.mobile-play-bar .mobile-mini-controls[data-v-62b57cc6]:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 22 22 / var(--tw-bg-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info[data-v-62b57cc6]{\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  cursor: pointer;\n  align-items: center;\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info .mini-song-cover[data-v-62b57cc6]{\n  height: 3rem;\n  width: 3rem;\n  border-radius: 9999px;\n  border-width: 8px;\n  --tw-border-opacity: 1;\n  border-color: rgb(61 61 61 / var(--tw-border-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info .mini-song-cover[data-v-62b57cc6]:is(.dark *){\n  --tw-border-opacity: 1;\n  border-color: rgb(222 226 230 / var(--tw-border-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info .mini-song-text[data-v-62b57cc6]{\n  margin-left: 0.75rem;\n  display: flex;\n  min-width: 0px;\n  flex: 1 1 0%;\n  align-items: center;\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info .mini-song-text .mini-song-title[data-v-62b57cc6]{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info .mini-song-text .mini-song-artist[data-v-62b57cc6]{\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-song-info .mini-song-text .mini-song-artist[data-v-62b57cc6]:is(.dark *){\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls[data-v-62b57cc6]{\n  display: flex;\n  align-items: center;\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-control-btn[data-v-62b57cc6]{\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-control-btn.play[data-v-62b57cc6]{\n  margin-right: 0.5rem;\n  display: flex;\n  height: 2.25rem;\n  width: 2.25rem;\n  align-items: center;\n  justify-content: center;\n  border-radius: 9999px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-control-btn.play[data-v-62b57cc6]:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-control-btn.play .iconfont[data-v-62b57cc6]{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-control-btn.play .iconfont[data-v-62b57cc6]:hover{\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-list-icon[data-v-62b57cc6]{\n  cursor: pointer;\n  padding: 0.25rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.mobile-play-bar .mobile-mini-controls .mini-playback-controls .mini-list-icon[data-v-62b57cc6]:hover{\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.mobile-play-list-container[data-v-62b57cc6] {\n  height: 60vh;\n  width: 90vw;\n  max-width: 400px;\n  position: relative;\n  overflow: hidden;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.mobile-play-list-container .mobile-play-list-back[data-v-62b57cc6] {\n  backdrop-filter: blur(20px);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.9;\n}\n.mobile-play-list-container .mobile-play-list-back[data-v-62b57cc6]:is(.dark *){\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));\n}\n.mobile-play-list-container .mobile-play-list-item[data-v-62b57cc6]{\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          key: 0,
          class: "mobile-mini-controls"
        };
        const _hoisted_2 = {
          class: "mini-song-text"
        };
        const _hoisted_3 = {
          class: "mini-song-title"
        };
        const _hoisted_4 = {
          class: "mini-playback-controls"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "MobilePlayBar",
          setup(__props) {
            const shouldShowMobileMenu = inject("shouldShowMobileMenu");
            const playerStore = usePlayerStore();
            const settingsStore = useSettingsStore();
            const play = computed(() => playerStore.isPlay);
            const background = ref("#000");
            function handleNext() {
              playerStore.nextPlay();
            }
            function handlePrev() {
              playerStore.prevPlay();
            }
            const MusicFullRef = ref(null);
            const setMusicFull = () => {
              playerStore.setMusicFull(!playerStore.musicFull);
              if (playerStore.musicFull) {
                settingsStore.showArtistDrawer = false;
              }
            };
            watch(() => playerStore.musicFull, newVal => {
              if (!newVal) {
                safeAreaService.updateStatusBarStyle();
              }
            });
            const openPlayListDrawer = () => {
              playerStore.setPlayListDrawerVisible(true);
            };
            const playMusicEvent = async () => {
              try {
                playerStore.setPlay(playMusic.value);
              } catch (error) {
                console.error("播放出错:", error);
                playerStore.nextPlay();
              }
            };
            const playBarRef = ref(null);
            onMounted(() => {
              if (playBarRef.value) {
                const {
                  direction
                } = useSwipe(playBarRef, {
                  onSwipeEnd: () => {
                    if (direction.value === "left") handleNext();
                    if (direction.value === "right") handlePrev();
                  },
                  threshold: 30
                });
              }
            });
            watch(() => playerStore.playMusic, async () => {
              background.value = playMusic.value.backgroundColor;
            }, {
              immediate: true,
              deep: true
            });
            return (_ctx, _cache) => {
              const _component_n_image = __unplugin_components_1;
              const _component_n_ellipsis = __unplugin_components_2;
              return openBlock(), createElementBlock("div", {
                ref_key: "playBarRef",
                ref: playBarRef,
                class: normalizeClass(["mobile-play-bar", [unref(setAnimationClass)("animate__fadeInUp"), unref(playerStore).musicFull ? "play-bar-expanded" : "play-bar-mini", unref(shouldShowMobileMenu) ? "is-menu-show" : "is-menu-hide"]]),
                style: normalizeStyle({
                  color: unref(playerStore).musicFull ? unref(textColors).theme === "dark" ? "#ffffff" : "#ffffff" : unref(settingsStore).theme === "dark" ? "#ffffff" : "#000000"
                })
              }, [!unref(playerStore).musicFull ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                class: "mini-song-info",
                onClick: setMusicFull
              }, [createVNode(_component_n_image, {
                src: unref(getImgUrl)(unref(playMusic)?.picUrl, "100y100"),
                class: "mini-song-cover",
                lazy: "",
                "preview-disabled": ""
              }, null, 8, ["src"]), createBaseVNode("div", _hoisted_2, [createVNode(_component_n_ellipsis, {
                "line-clamp": "1"
              }, {
                default: withCtx(() => [createBaseVNode("span", _hoisted_3, toDisplayString(unref(playMusic).name), 1), _cache[1] || (_cache[1] = createBaseVNode("span", {
                  class: "mx-2 text-gray-500 dark:text-gray-400"
                }, "-", -1)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (artists, artistsindex) => {
                  return openBlock(), createElementBlock("span", {
                    class: "mini-song-artist",
                    key: artistsindex
                  }, toDisplayString(artists.name) + toDisplayString(artistsindex < unref(artistList).length - 1 ? " / " : ""), 1);
                }), 128))]),
                _: 1
              })])]), createBaseVNode("div", _hoisted_4, [createBaseVNode("div", {
                class: "mini-control-btn play",
                onClick: playMusicEvent
              }, [createBaseVNode("i", {
                class: normalizeClass(["iconfont icon", play.value ? "icon-stop" : "icon-play"])
              }, null, 2)]), createBaseVNode("i", {
                class: "iconfont icon-list mini-list-icon",
                onClick: openPlayListDrawer
              })])])) : createCommentVNode("", true), createVNode(_sfc_main$1, {
                ref_key: "MusicFullRef",
                ref: MusicFullRef,
                modelValue: unref(playerStore).musicFull,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => unref(playerStore).musicFull = $event),
                background: background.value
              }, null, 8, ["modelValue", "background"])], 6);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MobilePlayBar = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-62b57cc6"]]));
      }
    };
  });
})();

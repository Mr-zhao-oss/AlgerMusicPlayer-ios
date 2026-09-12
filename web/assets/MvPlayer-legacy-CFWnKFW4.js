;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './index-legacy-BqM8rotH.js'], function (exports, module) {
    'use strict';

    var request, defineComponent, __vitePreload, useI18n, watch, onUnmounted, createBlock, withCtx, createBaseVNode, normalizeClass, openBlock, createElementBlock, createVNode, unref, __unplugin_components_2, createCommentVNode, withModifiers, NIcon, Button, toDisplayString, __unplugin_components_0, Fragment, __unplugin_components_3, createTextVNode, Transition, computed, ref, __unplugin_components_6, isMobile, nextTick, _export_sfc, useBreakpoints, useIdle, useFullscreen, breakpointsTailwind;
    return {
      setters: [module => {
        request = module.bl;
        defineComponent = module.d;
        __vitePreload = module.aT;
        useI18n = module.a5;
        watch = module.Y;
        onUnmounted = module.ar;
        createBlock = module.aY;
        withCtx = module.as;
        createBaseVNode = module.ab;
        normalizeClass = module.aa;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createVNode = module.ak;
        unref = module.ad;
        __unplugin_components_2 = module.bj;
        createCommentVNode = module.ah;
        withModifiers = module.a9;
        NIcon = module.cP;
        Button = module.a1;
        toDisplayString = module.ac;
        __unplugin_components_0 = module.d0;
        Fragment = module.ae;
        __unplugin_components_3 = module.dg;
        createTextVNode = module.b7;
        Transition = module.T;
        computed = module.z;
        ref = module.A;
        __unplugin_components_6 = module.bC;
        isMobile = module.aX;
        nextTick = module.a2;
        _export_sfc = module.ap;
      }, module => {
        useBreakpoints = module.u;
        useIdle = module.a;
        useFullscreen = module.b;
        breakpointsTailwind = module.c;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n/* Custom Slider Styles to override Naive UI default for cleaner look */\n.mv-slider[data-v-411b9a49] {\n  --n-rail-height: 4px !important;\n  --n-rail-color: rgba(255, 255, 255, 0.2) !important;\n  --n-rail-color-hover: rgba(255, 255, 255, 0.3) !important;\n  --n-fill-color: #10b981 !important;\n  --n-fill-color-hover: #34d399 !important;\n  --n-handle-size: 12px !important;\n  --n-handle-color: #fff !important;\n}\n.mv-volume-slider[data-v-411b9a49] {\n  --n-rail-height: 4px !important;\n  --n-rail-color: rgba(255, 255, 255, 0.2) !important;\n  --n-fill-color: #fff !important;\n  --n-handle-size: 10px !important;\n}\n\n/* Hide cursor when needed */\n.cursor-none[data-v-411b9a49] {\n  cursor: none;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const getTopMv = exports("g", params => {
          return request({
            url: "/mv/all",
            method: "get",
            params
          });
        });
        const getAllMv = exports("a", params => {
          return request({
            url: "/mv/all",
            method: "get",
            params
          });
        });
        const getMvUrl = id => {
          return request.get("/mv/url", {
            params: {
              id
            }
          });
        };
        const _hoisted_1 = ["src"];
        const _hoisted_2 = {
          key: 0,
          class: "absolute inset-0 flex items-center justify-center pointer-events-none z-30"
        };
        const _hoisted_3 = {
          key: 1,
          class: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        };
        const _hoisted_4 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_5 = {
          class: "flex items-center gap-4 flex-1 min-w-0"
        };
        const _hoisted_6 = {
          style: {
            "-webkit-app-region": "no-drag"
          }
        };
        const _hoisted_7 = {
          class: "text-white truncate font-medium text-lg"
        };
        const _hoisted_8 = {
          key: 0,
          class: "text-gray-300 text-sm truncate"
        };
        const _hoisted_9 = {
          class: "group/slider relative h-6 w-full flex items-center mb-2 cursor-pointer"
        };
        const _hoisted_10 = {
          key: 0,
          class: "absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded"
        };
        const _hoisted_11 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_12 = {
          class: "flex items-center gap-2 md:gap-4"
        };
        const _hoisted_13 = {
          key: 0,
          class: "text-xs text-gray-300 font-mono"
        };
        const _hoisted_14 = {
          class: "text-xs text-gray-300 font-mono ml-2"
        };
        const _hoisted_15 = {
          class: "flex items-center gap-2 md:gap-4"
        };
        const _hoisted_16 = {
          key: 0,
          class: "group/volume flex items-center relative"
        };
        const _hoisted_17 = {
          class: "w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300 ease-in-out ml-2"
        };
        const _hoisted_18 = {
          key: 0,
          class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur px-6 py-4 rounded-xl flex flex-col items-center gap-2 pointer-events-none z-50"
        };
        const _hoisted_19 = {
          class: "text-white text-sm font-medium"
        };
        const _hoisted_20 = {
          key: 0,
          class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center text-white/90"
        };
        const _hoisted_21 = {
          class: "text-sm font-bold"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "MvPlayer",
          props: {
            show: {
              type: Boolean,
              default: false
            },
            currentMv: {
              default: void 0
            },
            noList: {
              type: Boolean,
              default: false
            }
          },
          emits: ["update:show", "next", "prev"],
          setup(__props, {
            emit: __emit
          }) {
            let ScreenOrientation = null;
            try {
              __vitePreload(() => module.import('./index-legacy-DovSVGhi.js'), false              ? __VITE_PRELOAD__ : void 0, module.meta.url).then(module => {
                ScreenOrientation = module.ScreenOrientation;
              });
            } catch (e) {
              console.warn("ScreenOrientation 插件不可用", e);
            }
            const {
              t
            } = useI18n();
            const breakpoints = useBreakpoints(breakpointsTailwind);
            const isNarrow = breakpoints.smaller("md");
            const isMobile$1 = computed(() => isNarrow.value || isMobile.value);
            const PLAY_MODE = {
              Single: "single",
              Auto: "auto"
            };
            const props = __props;
            const emit = __emit;
            const containerRef = ref(null);
            const videoRef = ref(null);
            const mvUrl = ref();
            const playMode = ref(PLAY_MODE.Auto);
            const isPlaying = ref(false);
            const isBuffering = ref(false);
            const currentTime = ref(0);
            const duration = ref(0);
            const progress = ref(0);
            const volume = ref(100);
            const playLoading = ref(false);
            const autoPlayBlocked = ref(false);
            const isDragging = ref(false);
            const showModeHint = ref(false);
            const doubleTapAction = ref(null);
            const {
              idle
            } = useIdle(3e3);
            const showControls = computed(() => {
              if (!isPlaying.value) return true;
              if (isDragging.value) return true;
              if (isMobile$1.value) return !idle.value;
              return !idle.value || showCursor.value;
            });
            const showCursor = ref(true);
            let cursorTimer = null;
            const {
              isFullscreen,
              toggle: toggleFullscreenState,
              exit: exitFullscreen
            } = useFullscreen(containerRef);
            const formatTime = seconds => {
              if (!seconds || isNaN(seconds)) return "00:00";
              const minutes = Math.floor(seconds / 60);
              const remainingSeconds = Math.floor(seconds % 60);
              return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
            };
            const togglePlay = () => {
              if (!videoRef.value) return;
              if (videoRef.value.paused) {
                videoRef.value.play().catch(() => {
                  autoPlayBlocked.value = true;
                });
              } else {
                videoRef.value.pause();
              }
            };
            const toggleMute = () => {
              if (!videoRef.value) return;
              volume.value = volume.value === 0 ? 100 : 0;
            };
            const handleProgressChange = value => {
              if (!videoRef.value || !duration.value) return;
              const newTime = value / 100 * duration.value;
              videoRef.value.currentTime = newTime;
            };
            const handleTimeUpdate = () => {
              if (!videoRef.value) return;
              currentTime.value = videoRef.value.currentTime;
              if (!isDragging.value) {
                progress.value = currentTime.value / duration.value * 100;
              }
            };
            const handleLoadedMetadata = () => {
              if (!videoRef.value) return;
              duration.value = videoRef.value.duration;
            };
            const handleEnded = () => {
              if (playMode.value === PLAY_MODE.Single) {
                if (videoRef.value) {
                  videoRef.value.currentTime = 0;
                  videoRef.value.play();
                }
              } else {
                emit("next", loading => {
                  playLoading.value = loading;
                });
              }
            };
            const handlePrev = () => {
              emit("prev", loading => {
                playLoading.value = loading;
              });
            };
            const handleNext = () => {
              emit("next", loading => {
                playLoading.value = loading;
              });
            };
            const togglePlayMode = () => {
              playMode.value = playMode.value === PLAY_MODE.Auto ? PLAY_MODE.Single : PLAY_MODE.Auto;
              showModeHint.value = true;
              setTimeout(() => {
                showModeHint.value = false;
              }, 1500);
            };
            const toggleFullscreen = async () => {
              await toggleFullscreenState();
              if (isMobile$1.value && ScreenOrientation) {
                try {
                  if (isFullscreen.value) {
                    await ScreenOrientation.lock({
                      orientation: "landscape"
                    });
                  } else {
                    await ScreenOrientation.unlock();
                  }
                } catch (e) {
                  console.warn("切换屏幕方向失败:", e);
                }
              }
            };
            const handleClose = async () => {
              if (isFullscreen.value) {
                try {
                  await exitFullscreen();
                } catch (e) {
                  console.warn("退出全屏失败:", e);
                }
              }
              if (isMobile$1.value && ScreenOrientation) {
                try {
                  await ScreenOrientation.unlock();
                } catch (e) {
                  console.warn("解锁屏幕方向失败:", e);
                }
              }
              emit("update:show", false);
            };
            const loadMvUrl = async mv => {
              playLoading.value = true;
              autoPlayBlocked.value = false;
              try {
                const res = await getMvUrl(mv.id);
                mvUrl.value = res.data.data.url;
                await nextTick();
                if (videoRef.value) {
                  try {
                    await videoRef.value.play();
                  } catch (error) {
                    console.warn("Auto-play blocked:", error);
                    autoPlayBlocked.value = true;
                  }
                }
              } catch (error) {
                console.error("Failed to load MV:", error);
              } finally {
                playLoading.value = false;
              }
            };
            const handleMouseMove = () => {
              showCursor.value = true;
              if (cursorTimer) clearTimeout(cursorTimer);
              cursorTimer = setTimeout(() => {
                if (isPlaying.value && !isDragging.value) {
                  showCursor.value = false;
                }
              }, 3e3);
            };
            const handleContainerClick = () => {
              if (isMobile$1.value) ;else {
                togglePlay();
              }
            };
            const handleDoubleClick = e => {
              if (!videoRef.value) return;
              const width = containerRef.value?.clientWidth || 0;
              const x = e.clientX;
              if (x < width / 3) {
                videoRef.value.currentTime = Math.max(0, videoRef.value.currentTime - 10);
                doubleTapAction.value = "rewind";
              } else if (x > width * 2 / 3) {
                videoRef.value.currentTime = Math.min(duration.value, videoRef.value.currentTime + 10);
                doubleTapAction.value = "forward";
              } else {
                toggleFullscreen();
                return;
              }
              setTimeout(() => {
                doubleTapAction.value = null;
              }, 500);
            };
            watch(volume, newVolume => {
              if (videoRef.value) videoRef.value.volume = newVolume / 100;
            });
            watch(() => props.currentMv, async newMv => {
              if (newMv) await loadMvUrl(newMv);
            });
            watch(() => props.show, async show => {
              if (!show && videoRef.value) {
                videoRef.value.pause();
              }
              if (!show && isMobile$1.value && ScreenOrientation) {
                try {
                  await ScreenOrientation.unlock();
                } catch (e) {
                  console.warn("MV播放器隐藏时解锁屏幕方向失败:", e);
                }
              }
            });
            onUnmounted(async () => {
              if (cursorTimer) clearTimeout(cursorTimer);
              if (isMobile$1.value && ScreenOrientation) {
                try {
                  await ScreenOrientation.unlock();
                } catch (e) {
                  console.warn("组件卸载时解锁屏幕方向失败:", e);
                }
              }
            });
            return (_ctx, _cache) => {
              const _component_n_drawer = __unplugin_components_6;
              return openBlock(), createBlock(_component_n_drawer, {
                show: __props.show,
                height: "100%",
                placement: "bottom",
                "z-index": 999999999,
                to: `#layout-main`,
                "trap-focus": false
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  ref_key: "containerRef",
                  ref: containerRef,
                  class: normalizeClass(["group relative h-full w-full bg-black overflow-hidden", {
                    "cursor-none": !showCursor.value && isPlaying.value
                  }]),
                  onMousemove: handleMouseMove,
                  onClick: handleContainerClick,
                  onDblclick: handleDoubleClick
                }, [createBaseVNode("video", {
                  ref_key: "videoRef",
                  ref: videoRef,
                  src: mvUrl.value,
                  class: "h-full w-full object-contain",
                  crossorigin: "anonymous",
                  playsinline: "",
                  onEnded: handleEnded,
                  onTimeupdate: handleTimeUpdate,
                  onLoadedmetadata: handleLoadedMetadata,
                  onPlay: _cache[0] || (_cache[0] = $event => isPlaying.value = true),
                  onPause: _cache[1] || (_cache[1] = $event => isPlaying.value = false),
                  onWaiting: _cache[2] || (_cache[2] = $event => isBuffering.value = true),
                  onPlaying: _cache[3] || (_cache[3] = $event => isBuffering.value = false)
                }, null, 40, _hoisted_1), playLoading.value || isBuffering.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(__unplugin_components_2), {
                  size: "large",
                  stroke: "#10b981"
                })])) : createCommentVNode("", true), isMobile$1.value && showControls.value && !playLoading.value && !isBuffering.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("div", {
                  class: "bg-black/40 backdrop-blur-sm rounded-full p-4 pointer-events-auto transition-transform active:scale-95",
                  onClick: withModifiers(togglePlay, ["stop"])
                }, [createVNode(unref(NIcon), {
                  size: "48",
                  color: "white"
                }, {
                  default: withCtx(() => [createBaseVNode("i", {
                    class: normalizeClass(isPlaying.value ? "ri-pause-fill" : "ri-play-fill")
                  }, null, 2)]),
                  _: 1
                })])])) : createCommentVNode("", true), autoPlayBlocked.value && !isMobile$1.value ? (openBlock(), createElementBlock("div", {
                  key: 2,
                  class: "absolute inset-0 flex items-center justify-center bg-black/50 z-30 cursor-pointer",
                  onClick: togglePlay
                }, [createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  size: "large",
                  class: "!text-white hover:!text-green-500 scale-150"
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "48"
                  }, {
                    default: withCtx(() => [...(_cache[10] || (_cache[10] = [createBaseVNode("i", {
                      class: "ri-play-circle-line"
                    }, null, -1)]))]),
                    _: 1
                  })]),
                  _: 1
                })])) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(["absolute top-0 left-0 right-0 p-4 z-[9999999] transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent pointer-events-auto", {
                    "-translate-y-full opacity-0": !showControls.value
                  }]),
                  style: {
                    "-webkit-app-region": "drag"
                  },
                  onClick: _cache[4] || (_cache[4] = withModifiers(() => {}, ["stop"]))
                }, [createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  class: "!text-white hover:!bg-white/10",
                  onClick: withModifiers(handleClose, ["stop"])
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "28"
                  }, {
                    default: withCtx(() => [...(_cache[11] || (_cache[11] = [createBaseVNode("i", {
                      class: "ri-close-line"
                    }, null, -1)]))]),
                    _: 1
                  })]),
                  _: 1
                })]), createBaseVNode("div", _hoisted_7, toDisplayString(__props.currentMv?.name), 1), __props.currentMv?.artistName ? (openBlock(), createElementBlock("div", _hoisted_8, " - " + toDisplayString(__props.currentMv.artistName), 1)) : createCommentVNode("", true)]), _cache[12] || (_cache[12] = createBaseVNode("div", {
                  class: "flex items-center gap-2"
                }, null, -1))])], 2), createBaseVNode("div", {
                  class: normalizeClass(["absolute bottom-0 left-0 right-0 z-40 transition-all duration-300 bg-gradient-to-t from-black/90 via-black/60 to-transparent pb-6 pt-12 px-4 md:px-6", {
                    "translate-y-full opacity-0": !showControls.value
                  }]),
                  onClick: _cache[9] || (_cache[9] = withModifiers(() => {}, ["stop"]))
                }, [createBaseVNode("div", _hoisted_9, [createVNode(unref(__unplugin_components_0), {
                  value: progress.value,
                  "onUpdate:value": [_cache[5] || (_cache[5] = $event => progress.value = $event), handleProgressChange],
                  min: 0,
                  max: 100,
                  tooltip: false,
                  step: 0.01,
                  class: "mv-slider",
                  onDragstart: _cache[6] || (_cache[6] = $event => isDragging.value = true),
                  onDragend: _cache[7] || (_cache[7] = $event => isDragging.value = false)
                }, {
                  thumb: withCtx(() => [...(_cache[13] || (_cache[13] = [createBaseVNode("div", {
                    class: "w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover/slider:scale-100 transition-transform duration-200"
                  }, null, -1)]))]),
                  _: 1
                }, 8, ["value"]), isDragging.value ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(formatTime(progress.value / 100 * duration.value)), 1)) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [isMobile$1.value ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(formatTime(currentTime.value)) + " / " + toDisplayString(formatTime(duration.value)), 1)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  class: "!text-white hover:!text-green-400",
                  onClick: handlePrev,
                  disabled: !props.currentMv
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "24"
                  }, {
                    default: withCtx(() => [...(_cache[14] || (_cache[14] = [createBaseVNode("i", {
                      class: "ri-skip-back-line"
                    }, null, -1)]))]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["disabled"]), createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  class: "!text-white hover:!text-green-400",
                  onClick: togglePlay
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "32"
                  }, {
                    default: withCtx(() => [createBaseVNode("i", {
                      class: normalizeClass(isPlaying.value ? "ri-pause-fill" : "ri-play-fill")
                    }, null, 2)]),
                    _: 1
                  })]),
                  _: 1
                }), createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  class: "!text-white hover:!text-green-400",
                  onClick: handleNext,
                  disabled: !props.currentMv
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "24"
                  }, {
                    default: withCtx(() => [...(_cache[15] || (_cache[15] = [createBaseVNode("i", {
                      class: "ri-skip-forward-line"
                    }, null, -1)]))]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["disabled"]), createBaseVNode("div", _hoisted_14, toDisplayString(formatTime(currentTime.value)) + " / " + toDisplayString(formatTime(duration.value)), 1)], 64))]), createBaseVNode("div", _hoisted_15, [createVNode(unref(__unplugin_components_3), {
                  trigger: "hover",
                  placement: "top"
                }, {
                  trigger: withCtx(() => [createVNode(unref(Button), {
                    quaternary: "",
                    circle: "",
                    class: "!text-white hover:!text-green-400",
                    onClick: togglePlayMode
                  }, {
                    icon: withCtx(() => [createVNode(unref(NIcon), {
                      size: "20"
                    }, {
                      default: withCtx(() => [createBaseVNode("i", {
                        class: normalizeClass(playMode.value === "single" ? "ri-repeat-one-line" : "ri-play-list-line")
                      }, null, 2)]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  default: withCtx(() => [createTextVNode(" " + toDisplayString(playMode.value === "single" ? unref(t)("player.modeHint.single") : unref(t)("player.modeHint.list")), 1)]),
                  _: 1
                }), !isMobile$1.value ? (openBlock(), createElementBlock("div", _hoisted_16, [createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  class: "!text-white hover:!text-green-400",
                  onClick: toggleMute
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "20"
                  }, {
                    default: withCtx(() => [createBaseVNode("i", {
                      class: normalizeClass(volume.value === 0 ? "ri-volume-mute-line" : "ri-volume-up-line")
                    }, null, 2)]),
                    _: 1
                  })]),
                  _: 1
                }), createBaseVNode("div", _hoisted_17, [createVNode(unref(__unplugin_components_0), {
                  value: volume.value,
                  "onUpdate:value": _cache[8] || (_cache[8] = $event => volume.value = $event),
                  min: 0,
                  max: 100,
                  tooltip: false,
                  class: "mv-volume-slider"
                }, null, 8, ["value"])])])) : createCommentVNode("", true), createVNode(unref(Button), {
                  quaternary: "",
                  circle: "",
                  class: "!text-white hover:!text-green-400",
                  onClick: toggleFullscreen
                }, {
                  icon: withCtx(() => [createVNode(unref(NIcon), {
                    size: "20"
                  }, {
                    default: withCtx(() => [createBaseVNode("i", {
                      class: normalizeClass(unref(isFullscreen) ? "ri-fullscreen-exit-line" : "ri-fullscreen-line")
                    }, null, 2)]),
                    _: 1
                  })]),
                  _: 1
                })])])], 2), createVNode(Transition, {
                  "enter-active-class": "transition ease-out duration-300",
                  "enter-from-class": "opacity-0 scale-90",
                  "enter-to-class": "opacity-100 scale-100",
                  "leave-active-class": "transition ease-in duration-200",
                  "leave-from-class": "opacity-100 scale-100",
                  "leave-to-class": "opacity-0 scale-90"
                }, {
                  default: withCtx(() => [showModeHint.value ? (openBlock(), createElementBlock("div", _hoisted_18, [createVNode(unref(NIcon), {
                    size: "32",
                    class: "text-green-500"
                  }, {
                    default: withCtx(() => [createBaseVNode("i", {
                      class: normalizeClass(playMode.value === "single" ? "ri-repeat-one-line" : "ri-play-list-line")
                    }, null, 2)]),
                    _: 1
                  }), createBaseVNode("span", _hoisted_19, toDisplayString(playMode.value === "single" ? unref(t)("player.modeHint.single") : unref(t)("player.modeHint.list")), 1)])) : createCommentVNode("", true)]),
                  _: 1
                }), createVNode(Transition, {
                  "enter-active-class": "transition ease-out duration-200",
                  "enter-from-class": "opacity-0 scale-50",
                  "enter-to-class": "opacity-100 scale-100",
                  "leave-active-class": "transition ease-in duration-150",
                  "leave-from-class": "opacity-100 scale-100",
                  "leave-to-class": "opacity-0 scale-50"
                }, {
                  default: withCtx(() => [doubleTapAction.value ? (openBlock(), createElementBlock("div", _hoisted_20, [createVNode(unref(NIcon), {
                    size: "48"
                  }, {
                    default: withCtx(() => [createBaseVNode("i", {
                      class: normalizeClass(doubleTapAction.value === "forward" ? "ri-forward-10-line" : "ri-replay-10-line")
                    }, null, 2)]),
                    _: 1
                  }), createBaseVNode("span", _hoisted_21, toDisplayString(doubleTapAction.value === "forward" ? "+10s" : "-10s"), 1)])) : createCommentVNode("", true)]),
                  _: 1
                })], 34)]),
                _: 1
              }, 8, ["show"]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MvPlayer = exports("M", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-411b9a49"]]));
      }
    };
  });
})();

import { e as useSwipe } from "./index-Ufy0OYbr.js";
import { _ as _sfc_main$1 } from "./MusicFullWrapper.vue_vue_type_script_setup_true_lang-D5gJq35s.js";
import { d as defineComponent, E as inject, bb as usePlayerStore, cH as useSettingsStore, Y as watch, eE as safeAreaService, aq as onMounted, eg as playMusic, a7 as openBlock, a8 as createElementBlock, ad as unref, ab as createBaseVNode, ak as createVNode, aQ as getImgUrl, br as __unplugin_components_1, as as withCtx, ac as toDisplayString, ae as Fragment, af as renderList, em as artistList, bs as __unplugin_components_2, aa as normalizeClass, ah as createCommentVNode, ag as normalizeStyle, eo as textColors, bv as setAnimationClass, z as computed, A as ref, ap as _export_sfc } from "./index-BMNXZoHW.js";
const _hoisted_1 = {
  key: 0,
  class: "mobile-mini-controls"
};
const _hoisted_2 = { class: "mini-song-text" };
const _hoisted_3 = { class: "mini-song-title" };
const _hoisted_4 = { class: "mini-playback-controls" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    watch(
      () => playerStore.musicFull,
      (newVal) => {
        if (!newVal) {
          safeAreaService.updateStatusBarStyle();
        }
      }
    );
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
        const { direction } = useSwipe(playBarRef, {
          onSwipeEnd: () => {
            if (direction.value === "left") handleNext();
            if (direction.value === "right") handlePrev();
          },
          threshold: 30
        });
      }
    });
    watch(
      () => playerStore.playMusic,
      async () => {
        background.value = playMusic.value.backgroundColor;
      },
      { immediate: true, deep: true }
    );
    return (_ctx, _cache) => {
      var _a;
      const _component_n_image = __unplugin_components_1;
      const _component_n_ellipsis = __unplugin_components_2;
      return openBlock(), createElementBlock("div", {
        ref_key: "playBarRef",
        ref: playBarRef,
        class: normalizeClass(["mobile-play-bar", [
          unref(setAnimationClass)("animate__fadeInUp"),
          unref(playerStore).musicFull ? "play-bar-expanded" : "play-bar-mini",
          unref(shouldShowMobileMenu) ? "is-menu-show" : "is-menu-hide"
        ]]),
        style: normalizeStyle({
          color: unref(playerStore).musicFull ? unref(textColors).theme === "dark" ? "#ffffff" : "#ffffff" : unref(settingsStore).theme === "dark" ? "#ffffff" : "#000000"
        })
      }, [
        !unref(playerStore).musicFull ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", {
            class: "mini-song-info",
            onClick: setMusicFull
          }, [
            createVNode(_component_n_image, {
              src: unref(getImgUrl)((_a = unref(playMusic)) == null ? void 0 : _a.picUrl, "100y100"),
              class: "mini-song-cover",
              lazy: "",
              "preview-disabled": ""
            }, null, 8, ["src"]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_n_ellipsis, { "line-clamp": "1" }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_3, toDisplayString(unref(playMusic).name), 1),
                  _cache[1] || (_cache[1] = createBaseVNode("span", { class: "mx-2 text-gray-500 dark:text-gray-400" }, "-", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(artistList), (artists, artistsindex) => {
                    return openBlock(), createElementBlock("span", {
                      class: "mini-song-artist",
                      key: artistsindex
                    }, toDisplayString(artists.name) + toDisplayString(artistsindex < unref(artistList).length - 1 ? " / " : ""), 1);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", {
              class: "mini-control-btn play",
              onClick: playMusicEvent
            }, [
              createBaseVNode("i", {
                class: normalizeClass(["iconfont icon", play.value ? "icon-stop" : "icon-play"])
              }, null, 2)
            ]),
            createBaseVNode("i", {
              class: "iconfont icon-list mini-list-icon",
              onClick: openPlayListDrawer
            })
          ])
        ])) : createCommentVNode("", true),
        createVNode(_sfc_main$1, {
          ref_key: "MusicFullRef",
          ref: MusicFullRef,
          modelValue: unref(playerStore).musicFull,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(playerStore).musicFull = $event),
          background: background.value
        }, null, 8, ["modelValue", "background"])
      ], 6);
    };
  }
});
const MobilePlayBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62b57cc6"]]);
export {
  MobilePlayBar as default
};

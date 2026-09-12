import { d as defineComponent, b5 as useUserStore, a5 as useI18n, bt as useMessage, Y as watch, a7 as openBlock, aY as createBlock, as as withCtx, ak as createVNode, bB as __unplugin_components_5, be as Scrollbar, ab as createBaseVNode, aa as normalizeClass, ac as toDisplayString, ad as unref, cO as __unplugin_components_1, b7 as createTextVNode, bj as __unplugin_components_2, ah as createCommentVNode, a8 as createElementBlock, ae as Fragment, af as renderList, ag as normalizeStyle, br as __unplugin_components_1$1, aQ as getImgUrl, bC as __unplugin_components_6, A as ref, z as computed, dl as hasPermission, dm as getLoginErrorMessage, bM as getUserPlaylist, dk as updatePlaylistTracks, eJ as createPlaylist, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { _ as __unplugin_components_0 } from "./Input-C2vwYCZR.js";
const _hoisted_1 = { class: "flex items-center gap-3" };
const _hoisted_2 = { class: "text-lg font-bold tracking-tight text-neutral-900 dark:text-white" };
const _hoisted_3 = { class: "flex flex-col gap-5 px-5 py-4" };
const _hoisted_4 = { class: "flex flex-col" };
const _hoisted_5 = { class: "text-sm font-semibold text-neutral-700 dark:text-neutral-200" };
const _hoisted_6 = { class: "flex flex-col gap-4 px-1" };
const _hoisted_7 = { class: "flex items-center justify-between px-1" };
const _hoisted_8 = { class: "flex items-center gap-2.5" };
const _hoisted_9 = { class: "text-sm font-medium text-neutral-600 dark:text-neutral-300" };
const _hoisted_10 = ["disabled"];
const _hoisted_11 = { class: "flex flex-col gap-1.5 pb-32" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-neutral-100 shadow-sm dark:bg-neutral-800" };
const _hoisted_14 = { class: "min-w-0 flex-1" };
const _hoisted_15 = { class: "truncate text-sm font-semibold text-neutral-800 dark:text-neutral-100" };
const _hoisted_16 = { class: "mt-0.5 text-xs font-medium text-neutral-400 dark:text-neutral-500" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlaylistDrawer",
  props: {
    modelValue: { type: Boolean },
    songId: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const store = useUserStore();
    const { t } = useI18n();
    const props = __props;
    const emit = __emit;
    const message = useMessage();
    const playlists = ref([]);
    const creating = ref(false);
    const isCreating = ref(false);
    const formValue = ref({
      name: "",
      privacy: false
    });
    const inputError = computed(() => {
      return isCreating.value && !formValue.value.name;
    });
    const toggleCreateForm = () => {
      if (creating.value) return;
      isCreating.value = !isCreating.value;
      if (!isCreating.value) {
        formValue.value.name = "";
        formValue.value.privacy = false;
      }
    };
    const fetchUserPlaylists = async () => {
      var _a;
      try {
        const { user } = store;
        if (!(user == null ? void 0 : user.userId)) {
          message.error(t("comp.playlistDrawer.loginFirst"));
          emit("update:modelValue", false);
          return;
        }
        if (!hasPermission(true)) {
          message.error(getLoginErrorMessage(true));
          emit("update:modelValue", false);
          return;
        }
        const res = await getUserPlaylist(user.userId, 999);
        if ((_a = res.data) == null ? void 0 : _a.playlist) {
          playlists.value = res.data.playlist.filter((item) => item.userId === user.userId);
        }
      } catch (error) {
        console.error("获取歌单失败:", error);
        message.error(t("comp.playlistDrawer.getPlaylistFailed"));
      }
    };
    const handleAddToPlaylist = async (playlist) => {
      var _a;
      if (!props.songId) return;
      if (!hasPermission(true)) {
        message.error(getLoginErrorMessage(true));
        return;
      }
      try {
        const res = await updatePlaylistTracks({
          op: "add",
          pid: playlist.id,
          tracks: props.songId.toString()
        });
        console.log("res.data", res.data);
        if (res.status === 200) {
          message.success(t("comp.playlistDrawer.addSuccess"));
          emit("update:modelValue", false);
        } else {
          throw new Error(((_a = res.data) == null ? void 0 : _a.msg) || t("comp.playlistDrawer.addFailed"));
        }
      } catch (error) {
        console.error("添加到歌单失败:", error);
        message.error(error.message || t("comp.playlistDrawer.addFailed"));
      }
    };
    const handleCreatePlaylist = async () => {
      var _a;
      if (!formValue.value.name) {
        message.error(t("comp.playlistDrawer.inputPlaylistName"));
        return;
      }
      if (!hasPermission(true)) {
        message.error(getLoginErrorMessage(true));
        return;
      }
      try {
        creating.value = true;
        const res = await createPlaylist({
          name: formValue.value.name,
          privacy: formValue.value.privacy ? 10 : 0
        });
        if ((_a = res.data) == null ? void 0 : _a.id) {
          message.success(t("comp.playlistDrawer.createSuccess"));
          isCreating.value = false;
          formValue.value.name = "";
          formValue.value.privacy = false;
          await fetchUserPlaylists();
        }
      } catch (error) {
        console.error("创建歌单失败:", error);
        message.error(t("comp.playlistDrawer.createFailed"));
      } finally {
        creating.value = false;
      }
    };
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal) {
          fetchUserPlaylists();
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0;
      const _component_n_switch = __unplugin_components_1;
      const _component_n_spin = __unplugin_components_2;
      const _component_n_image = __unplugin_components_1$1;
      const _component_n_scrollbar = Scrollbar;
      const _component_n_drawer_content = __unplugin_components_5;
      const _component_n_drawer = __unplugin_components_6;
      return openBlock(), createBlock(_component_n_drawer, {
        show: __props.modelValue,
        width: 420,
        placement: "right",
        "onUpdate:show": _cache[2] || (_cache[2] = ($event) => _ctx.$emit("update:modelValue", $event)),
        "unstable-show-mask": false,
        "z-index": 1e17,
        "show-mask": false
      }, {
        default: withCtx(() => [
          createVNode(_component_n_drawer_content, { class: "!p-0" }, {
            header: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("h2", _hoisted_2, toDisplayString(unref(t)("comp.playlistDrawer.title")), 1),
                _cache[3] || (_cache[3] = createBaseVNode("div", { class: "h-1.5 w-1.5 rounded-full bg-primary" }, null, -1))
              ])
            ]),
            default: withCtx(() => [
              createVNode(_component_n_scrollbar, { class: "h-full" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("button", {
                        class: normalizeClass([
                          "flex items-center gap-4 rounded-2xl p-3 transition-all duration-200",
                          isCreating.value ? "bg-neutral-100 dark:bg-neutral-800" : "bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-800"
                        ]),
                        onClick: toggleCreateForm
                      }, [
                        createBaseVNode("div", {
                          class: normalizeClass(["flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25 transition-transform duration-300", { "rotate-45": isCreating.value }])
                        }, [
                          createBaseVNode("i", {
                            class: normalizeClass(["iconfont text-xl", isCreating.value ? "ri-close-line" : "ri-add-line"])
                          }, null, 2)
                        ], 2),
                        createBaseVNode("span", _hoisted_5, toDisplayString(isCreating.value ? unref(t)("comp.playlistDrawer.cancelCreate") : unref(t)("comp.playlistDrawer.createPlaylist")), 1)
                      ], 2),
                      createBaseVNode("div", {
                        class: normalizeClass(["overflow-hidden transition-all duration-300 ease-in-out", isCreating.value ? "mt-4 max-h-[200px] opacity-100" : "max-h-0 opacity-0"])
                      }, [
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(_component_n_input, {
                            value: formValue.value.name,
                            "onUpdate:value": _cache[0] || (_cache[0] = ($event) => formValue.value.name = $event),
                            placeholder: unref(t)("comp.playlistDrawer.playlistName"),
                            maxlength: "40",
                            round: "",
                            status: inputError.value ? "error" : void 0
                          }, {
                            prefix: withCtx(() => [..._cache[4] || (_cache[4] = [
                              createBaseVNode("i", { class: "iconfont ri-music-2-line text-neutral-400" }, null, -1)
                            ])]),
                            _: 1
                          }, 8, ["value", "placeholder", "status"]),
                          createBaseVNode("div", _hoisted_7, [
                            createBaseVNode("div", _hoisted_8, [
                              createBaseVNode("i", {
                                class: normalizeClass([
                                  "iconfont text-base",
                                  formValue.value.privacy ? "ri-lock-line text-primary" : "ri-earth-line text-neutral-400 dark:text-neutral-500"
                                ])
                              }, null, 2),
                              createBaseVNode("span", _hoisted_9, toDisplayString(formValue.value.privacy ? unref(t)("comp.playlistDrawer.privatePlaylist") : unref(t)("comp.playlistDrawer.publicPlaylist")), 1)
                            ]),
                            createVNode(_component_n_switch, {
                              value: formValue.value.privacy,
                              "onUpdate:value": _cache[1] || (_cache[1] = ($event) => formValue.value.privacy = $event)
                            }, {
                              checked: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("comp.playlistDrawer.private")), 1)
                              ]),
                              unchecked: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("comp.playlistDrawer.public")), 1)
                              ]),
                              _: 1
                            }, 8, ["value"])
                          ]),
                          createBaseVNode("button", {
                            class: "flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                            disabled: !formValue.value.name || creating.value,
                            onClick: handleCreatePlaylist
                          }, [
                            creating.value ? (openBlock(), createBlock(_component_n_spin, {
                              key: 0,
                              size: 14
                            })) : createCommentVNode("", true),
                            createBaseVNode("span", null, toDisplayString(unref(t)("comp.playlistDrawer.create")), 1)
                          ], 8, _hoisted_10)
                        ])
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(playlists.value, (playlist, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: playlist.id,
                          class: "group flex cursor-pointer items-center gap-3.5 rounded-2xl p-2.5 transition-all duration-200 hover:bg-neutral-50 active:scale-[0.98] dark:hover:bg-neutral-800/60",
                          style: normalizeStyle({ animationDelay: "".concat(index * 0.03, "s") }),
                          onClick: ($event) => handleAddToPlaylist(playlist)
                        }, [
                          createBaseVNode("div", _hoisted_13, [
                            createVNode(_component_n_image, {
                              src: unref(getImgUrl)(playlist.coverImgUrl || playlist.picUrl, "100y100"),
                              class: "h-full w-full object-cover",
                              "preview-disabled": "",
                              "img-props": { crossorigin: "anonymous" }
                            }, null, 8, ["src"])
                          ]),
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("div", _hoisted_15, toDisplayString(playlist.name), 1),
                            createBaseVNode("div", _hoisted_16, toDisplayString(playlist.trackCount) + " " + toDisplayString(unref(t)("comp.playlistDrawer.count")), 1)
                          ]),
                          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-neutral-300 transition-all duration-200 group-hover:bg-primary/10 group-hover:text-primary dark:text-neutral-600 dark:group-hover:text-primary" }, [
                            createBaseVNode("i", { class: "iconfont ri-add-line text-xl" })
                          ], -1))
                        ], 12, _hoisted_12);
                      }), 128))
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]);
    };
  }
});
const PlaylistDrawer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4ca0043"]]);
export {
  PlaylistDrawer as default
};

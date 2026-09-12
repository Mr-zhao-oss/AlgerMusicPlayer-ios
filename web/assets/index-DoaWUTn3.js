import { d as defineComponent, a5 as useI18n, bn as createDiscreteApi, bA as useLocalMusicStore, bb as usePlayerStore, aq as onMounted, a8 as createElementBlock, ak as createVNode, as as withCtx, ab as createBaseVNode, ac as toDisplayString, ad as unref, a7 as openBlock, ah as createCommentVNode, aa as normalizeClass, bj as __unplugin_components_2, b7 as createTextVNode, bd as _sfc_main$1, be as Scrollbar, bB as __unplugin_components_5, ae as Fragment, af as renderList, a1 as Button, bC as __unplugin_components_6, A as ref, z as computed, bD as filterByKeyword, bE as toSongResult, ap as _export_sfc } from "./index-BMNXZoHW.js";
import { _ as __unplugin_components_0 } from "./Input-C2vwYCZR.js";
import { _ as __unplugin_components_1 } from "./VirtualList-D43SwD_y.js";
import "./VirtualList-C8MUTgFm.js";
const _hoisted_1 = { class: "local-music-page h-full w-full bg-white dark:bg-black transition-colors duration-500" };
const _hoisted_2 = { class: "local-music-content pb-32" };
const _hoisted_3 = { class: "hero-section relative overflow-hidden rounded-tl-2xl" };
const _hoisted_4 = { class: "hero-content relative z-10 page-padding-x pt-10 pb-8" };
const _hoisted_5 = { class: "flex flex-col md:flex-row gap-8 items-center md:items-end" };
const _hoisted_6 = { class: "info-content text-center md:text-left" };
const _hoisted_7 = { class: "badge mb-3" };
const _hoisted_8 = { class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider" };
const _hoisted_9 = { class: "text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight" };
const _hoisted_10 = { class: "mt-4 text-sm md:text-base text-neutral-500 dark:text-neutral-400" };
const _hoisted_11 = { class: "action-bar sticky top-0 z-20 page-padding-x py-3 md:py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800/50" };
const _hoisted_12 = { class: "flex items-center justify-between gap-4" };
const _hoisted_13 = { class: "flex-1 max-w-xs" };
const _hoisted_14 = { class: "flex items-center gap-3" };
const _hoisted_15 = { class: "hidden md:inline" };
const _hoisted_16 = ["disabled"];
const _hoisted_17 = {
  key: 0,
  class: "page-padding-x mt-6"
};
const _hoisted_18 = { class: "flex items-center gap-4 p-4 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20" };
const _hoisted_19 = { class: "text-sm font-medium text-neutral-900 dark:text-white" };
const _hoisted_20 = { class: "text-xs text-neutral-500 dark:text-neutral-400 mt-1" };
const _hoisted_21 = { class: "list-section page-padding-x mt-6" };
const _hoisted_22 = {
  key: 0,
  class: "empty-state py-20 text-center"
};
const _hoisted_23 = { class: "text-neutral-400" };
const _hoisted_24 = {
  key: 1,
  class: "song-list-container"
};
const _hoisted_25 = {
  key: 0,
  class: "h-36"
};
const _hoisted_26 = { class: "space-y-3 py-4" };
const _hoisted_27 = { class: "flex items-center gap-3 min-w-0 flex-1" };
const _hoisted_28 = { class: "text-sm text-neutral-700 dark:text-neutral-300 truncate" };
const _hoisted_29 = ["onClick"];
const _hoisted_30 = {
  key: 0,
  class: "text-center py-8"
};
const _hoisted_31 = { class: "text-sm text-neutral-400 mt-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const { message } = createDiscreteApi(["message"]);
    const localMusicStore = useLocalMusicStore();
    const playerStore = usePlayerStore();
    const searchKeyword = ref("");
    const showFolderManager = ref(false);
    const filteredList = computed(() => {
      return filterByKeyword(localMusicStore.musicList, searchKeyword.value);
    });
    const filteredSongResults = computed(() => {
      return filteredList.value.map(toSongResult);
    });
    async function handleAddFolder() {
      var _a;
      try {
        const result = await window.electron.ipcRenderer.invoke("select-directory");
        if (result && !result.canceled && ((_a = result.filePaths) == null ? void 0 : _a.length) > 0) {
          localMusicStore.addFolder(result.filePaths[0]);
          await localMusicStore.scanFolders();
        }
      } catch (error) {
        console.error("选择文件夹失败:", error);
        message.error(String(error));
      }
    }
    function handleRemoveFolder(folder) {
      localMusicStore.removeFolder(folder);
    }
    async function handleScan() {
      if (localMusicStore.folderPaths.length === 0) {
        await handleAddFolder();
        return;
      }
      await localMusicStore.scanFolders();
    }
    async function handlePlaySong(_song) {
      try {
        playerStore.setPlayList(filteredSongResults.value);
      } catch (error) {
        console.error("播放本地音乐失败:", error);
      }
    }
    async function handlePlayAll() {
      if (filteredSongResults.value.length === 0) return;
      try {
        const firstSong = filteredSongResults.value[0];
        const entry = filteredList.value[0];
        const exists = await window.electron.ipcRenderer.invoke("check-file-exists", entry.filePath);
        if (!exists) {
          message.error(t("localMusic.fileNotFound"));
          return;
        }
        playerStore.setPlayList(filteredSongResults.value);
        await playerStore.setPlay(firstSong);
      } catch (error) {
        console.error("播放全部失败:", error);
      }
    }
    onMounted(async () => {
      await localMusicStore.loadFromCache();
    });
    return (_ctx, _cache) => {
      const _component_n_input = __unplugin_components_0;
      const _component_n_spin = __unplugin_components_2;
      const _component_n_virtual_list = __unplugin_components_1;
      const _component_n_scrollbar = Scrollbar;
      const _component_n_button = Button;
      const _component_n_drawer_content = __unplugin_components_5;
      const _component_n_drawer = __unplugin_components_6;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_n_scrollbar, { class: "h-full" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("section", _hoisted_3, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "hero-bg absolute inset-0 -top-20" }, [
                  createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl opacity-50 dark:opacity-30" }),
                  createBaseVNode("div", { class: "absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black" })
                ], -1)),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _cache[3] || (_cache[3] = createBaseVNode("div", { class: "cover-wrapper relative group" }, [
                      createBaseVNode("div", { class: "cover-container relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-primary/10 flex items-center justify-center shadow-2xl ring-4 ring-white/50 dark:ring-neutral-800/50" }, [
                        createBaseVNode("i", { class: "ri-folder-music-fill text-6xl text-primary opacity-80" })
                      ])
                    ], -1)),
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("localMusic.title")), 1)
                      ]),
                      createBaseVNode("h1", _hoisted_9, toDisplayString(unref(t)("localMusic.title")), 1),
                      createBaseVNode("p", _hoisted_10, toDisplayString(unref(t)("localMusic.songCount", { count: unref(localMusicStore).musicList.length })), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("section", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_n_input, {
                      value: searchKeyword.value,
                      "onUpdate:value": _cache[0] || (_cache[0] = ($event) => searchKeyword.value = $event),
                      placeholder: unref(t)("localMusic.search"),
                      clearable: "",
                      size: "small",
                      round: ""
                    }, {
                      prefix: withCtx(() => [..._cache[5] || (_cache[5] = [
                        createBaseVNode("i", { class: "ri-search-line text-neutral-400" }, null, -1)
                      ])]),
                      _: 1
                    }, 8, ["value", "placeholder"])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    filteredList.value.length > 0 ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      class: "action-btn-pill flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all bg-primary text-white hover:bg-primary/90",
                      onClick: handlePlayAll
                    }, [
                      _cache[6] || (_cache[6] = createBaseVNode("i", { class: "ri-play-fill text-lg" }, null, -1)),
                      createBaseVNode("span", _hoisted_15, toDisplayString(unref(t)("localMusic.playAll")), 1)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("button", {
                      class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                      disabled: unref(localMusicStore).scanning,
                      onClick: handleScan
                    }, [
                      createBaseVNode("i", {
                        class: normalizeClass(["ri-refresh-line text-lg", { "animate-spin": unref(localMusicStore).scanning }])
                      }, null, 2)
                    ], 8, _hoisted_16),
                    createBaseVNode("button", {
                      class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                      onClick: handleAddFolder
                    }, [..._cache[7] || (_cache[7] = [
                      createBaseVNode("i", { class: "ri-folder-add-line text-lg" }, null, -1)
                    ])]),
                    unref(localMusicStore).folderPaths.length > 0 ? (openBlock(), createElementBlock("button", {
                      key: 1,
                      class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                      onClick: _cache[1] || (_cache[1] = ($event) => showFolderManager.value = true)
                    }, [..._cache[8] || (_cache[8] = [
                      createBaseVNode("i", { class: "ri-folder-settings-line text-lg" }, null, -1)
                    ])])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              unref(localMusicStore).scanning ? (openBlock(), createElementBlock("section", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_n_spin, { size: "small" }),
                  createBaseVNode("div", null, [
                    createBaseVNode("p", _hoisted_19, toDisplayString(unref(t)("localMusic.scanning")), 1),
                    createBaseVNode("p", _hoisted_20, toDisplayString(unref(t)("localMusic.songCount", { count: unref(localMusicStore).scanProgress })), 1)
                  ])
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("section", _hoisted_21, [
                !unref(localMusicStore).scanning && filteredList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                  _cache[10] || (_cache[10] = createBaseVNode("i", { class: "ri-folder-music-fill text-5xl mb-4 text-neutral-200 dark:text-neutral-800" }, null, -1)),
                  createBaseVNode("p", _hoisted_23, toDisplayString(unref(t)("localMusic.emptyState")), 1),
                  createBaseVNode("button", {
                    class: "mt-6 px-6 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all",
                    onClick: handleAddFolder
                  }, [
                    _cache[9] || (_cache[9] = createBaseVNode("i", { class: "ri-folder-add-line mr-2" }, null, -1)),
                    createTextVNode(" " + toDisplayString(unref(t)("localMusic.scanFolder")), 1)
                  ])
                ])) : filteredList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                  createVNode(_component_n_virtual_list, {
                    class: "song-virtual-list",
                    style: { "max-height": "calc(100vh - 280px)" },
                    items: filteredSongResults.value,
                    "item-size": 70,
                    "item-resizable": "",
                    "key-field": "id"
                  }, {
                    default: withCtx(({ item, index: index2 }) => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$1, {
                          index: index2,
                          item,
                          onPlay: handlePlaySong
                        }, null, 8, ["index", "item"]),
                        index2 === filteredSongResults.value.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_25)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }, 8, ["items"])
                ])) : createCommentVNode("", true)
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(_component_n_drawer, {
          show: showFolderManager.value,
          "onUpdate:show": _cache[2] || (_cache[2] = ($event) => showFolderManager.value = $event),
          width: 400,
          placement: "right"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_drawer_content, {
              title: unref(t)("localMusic.removeFolder"),
              closable: ""
            }, {
              footer: withCtx(() => [
                createVNode(_component_n_button, {
                  type: "primary",
                  block: "",
                  onClick: handleAddFolder
                }, {
                  icon: withCtx(() => [..._cache[14] || (_cache[14] = [
                    createBaseVNode("i", { class: "ri-folder-add-line" }, null, -1)
                  ])]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(t)("localMusic.scanFolder")), 1)
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_26, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localMusicStore).folderPaths, (folder) => {
                    return openBlock(), createElementBlock("div", {
                      key: folder,
                      class: "flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800"
                    }, [
                      createBaseVNode("div", _hoisted_27, [
                        _cache[11] || (_cache[11] = createBaseVNode("i", { class: "ri-folder-line text-lg text-primary flex-shrink-0" }, null, -1)),
                        createBaseVNode("span", _hoisted_28, toDisplayString(folder), 1)
                      ]),
                      createBaseVNode("button", {
                        class: "w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-red-500/10 transition-all flex-shrink-0 ml-2",
                        onClick: ($event) => handleRemoveFolder(folder)
                      }, [..._cache[12] || (_cache[12] = [
                        createBaseVNode("i", { class: "ri-delete-bin-line" }, null, -1)
                      ])], 8, _hoisted_29)
                    ]);
                  }), 128)),
                  unref(localMusicStore).folderPaths.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_30, [
                    _cache[13] || (_cache[13] = createBaseVNode("i", { class: "ri-folder-line text-4xl text-neutral-200 dark:text-neutral-800" }, null, -1)),
                    createBaseVNode("p", _hoisted_31, toDisplayString(unref(t)("localMusic.emptyState")), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["title"])
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9cf7cb6c"]]);
export {
  index as default
};

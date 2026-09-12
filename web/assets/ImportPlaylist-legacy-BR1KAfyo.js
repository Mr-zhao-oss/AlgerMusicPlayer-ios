;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var request, defineComponent, useI18n, useMessage, onMounted, onUnmounted, openBlock, createElementBlock, createBaseVNode, createTextVNode, toDisplayString, unref, createVNode, withCtx, Fragment, renderList, normalizeClass, normalizeStyle, withDirectives, vModelText, createCommentVNode, vShow, Scrollbar, ref, computed, _export_sfc;
    return {
      setters: [module => {
        request = module.bl;
        defineComponent = module.d;
        useI18n = module.a5;
        useMessage = module.bt;
        onMounted = module.aq;
        onUnmounted = module.ar;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        createTextVNode = module.b7;
        toDisplayString = module.ac;
        unref = module.ad;
        createVNode = module.ak;
        withCtx = module.as;
        Fragment = module.ae;
        renderList = module.af;
        normalizeClass = module.aa;
        normalizeStyle = module.ag;
        withDirectives = module.P;
        vModelText = module.aj;
        createCommentVNode = module.ah;
        vShow = module.a6;
        Scrollbar = module.be;
        ref = module.A;
        computed = module.z;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".animate-fade-in[data-v-6d854ba5] {\n  animation: fadeIn-6d854ba5 0.4s ease-out;\n}\n.animate-fade-in-up[data-v-6d854ba5] {\n  animation: fadeInUp-6d854ba5 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeIn-6d854ba5 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeInUp-6d854ba5 {\nfrom {\n    opacity: 0;\n    transform: translateY(20px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        function importPlaylist(params) {
          return request.post("/playlist/import/name/task/create", params);
        }
        function getImportTaskStatus(id) {
          return request({
            url: "/playlist/import/task/status",
            method: "get",
            params: {
              id
            }
          });
        }
        const _hoisted_1 = {
          class: "h-full w-full bg-gray-50 dark:bg-black transition-colors duration-500 overflow-hidden flex flex-col relative"
        };
        const _hoisted_2 = {
          class: "flex-shrink-0 z-10 page-padding pt-8 pb-4 relative"
        };
        const _hoisted_3 = {
          class: "max-w-5xl mx-auto w-full flex items-end justify-between"
        };
        const _hoisted_4 = {
          class: "text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3"
        };
        const _hoisted_5 = {
          class: "text-base text-gray-500 dark:text-gray-400 ml-13"
        };
        const _hoisted_6 = {
          class: "w-full max-w-5xl mx-auto p-6 pb-24"
        };
        const _hoisted_7 = {
          class: "flex justify-center mb-8"
        };
        const _hoisted_8 = {
          class: "bg-white dark:bg-white/5 p-1.5 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 flex gap-1 relative"
        };
        const _hoisted_9 = ["onClick"];
        const _hoisted_10 = {
          class: "grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        };
        const _hoisted_11 = {
          class: "lg:col-span-2 space-y-6"
        };
        const _hoisted_12 = {
          class: "bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none overflow-hidden p-1 transition-all duration-300"
        };
        const _hoisted_13 = {
          key: 0,
          class: "p-6 space-y-6 animate-fade-in"
        };
        const _hoisted_14 = {
          class: "space-y-4"
        };
        const _hoisted_15 = ["onUpdate:modelValue", "placeholder"];
        const _hoisted_16 = ["onClick"];
        const _hoisted_17 = {
          key: 1,
          class: "p-6 space-y-6 animate-fade-in"
        };
        const _hoisted_18 = ["placeholder"];
        const _hoisted_19 = {
          class: "flex items-center gap-2 text-xs text-gray-400 px-2"
        };
        const _hoisted_20 = {
          key: 2,
          class: "p-6 space-y-6 animate-fade-in"
        };
        const _hoisted_21 = {
          class: "space-y-3"
        };
        const _hoisted_22 = {
          class: "w-6 text-center text-xs text-gray-300 font-mono"
        };
        const _hoisted_23 = ["onUpdate:modelValue", "placeholder"];
        const _hoisted_24 = ["onUpdate:modelValue", "placeholder"];
        const _hoisted_25 = ["onUpdate:modelValue", "placeholder"];
        const _hoisted_26 = ["onClick"];
        const _hoisted_27 = {
          class: "bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-5 border border-blue-100 dark:border-blue-900/20"
        };
        const _hoisted_28 = {
          class: "flex gap-3"
        };
        const _hoisted_29 = {
          class: "text-sm text-gray-600 dark:text-gray-400 space-y-1"
        };
        const _hoisted_30 = {
          class: "font-medium text-gray-900 dark:text-gray-200 mb-1"
        };
        const _hoisted_31 = {
          class: "list-disc list-inside opacity-80 space-y-1"
        };
        const _hoisted_32 = {
          key: 0
        };
        const _hoisted_33 = {
          key: 1
        };
        const _hoisted_34 = {
          key: 2
        };
        const _hoisted_35 = {
          key: 3
        };
        const _hoisted_36 = {
          key: 4
        };
        const _hoisted_37 = {
          class: "space-y-6"
        };
        const _hoisted_38 = {
          class: "bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none p-6"
        };
        const _hoisted_39 = {
          class: "font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
        };
        const _hoisted_40 = {
          class: "space-y-4"
        };
        const _hoisted_41 = {
          class: "flex items-center gap-3"
        };
        const _hoisted_42 = {
          key: 0,
          class: "ri-heart-3-fill"
        };
        const _hoisted_43 = {
          key: 1,
          class: "ri-heart-3-line"
        };
        const _hoisted_44 = {
          class: "font-medium text-sm"
        };
        const _hoisted_45 = {
          class: "ri-check-line text-white text-xs"
        };
        const _hoisted_46 = ["placeholder"];
        const _hoisted_47 = ["disabled"];
        const _hoisted_48 = {
          key: 0,
          class: "ri-loader-4-line animate-spin text-xl"
        };
        const _hoisted_49 = {
          key: 1,
          class: "ri-download-cloud-2-line text-xl"
        };
        const _hoisted_50 = {
          key: 0,
          class: "animate-fade-in-up"
        };
        const _hoisted_51 = {
          class: "bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none p-6"
        };
        const _hoisted_52 = {
          class: "flex items-center justify-between mb-4"
        };
        const _hoisted_53 = {
          class: "font-bold text-gray-900 dark:text-white flex items-center gap-2"
        };
        const _hoisted_54 = {
          class: "relative pt-2"
        };
        const _hoisted_55 = {
          class: "flex items-center gap-4 mb-4"
        };
        const _hoisted_56 = {
          key: 0,
          class: "ri-loader-4-line animate-spin"
        };
        const _hoisted_57 = {
          key: 1,
          class: "ri-check-line"
        };
        const _hoisted_58 = {
          key: 2,
          class: "ri-close-line"
        };
        const _hoisted_59 = {
          class: "font-bold text-lg text-gray-900 dark:text-white"
        };
        const _hoisted_60 = {
          class: "text-xs text-gray-400 font-mono"
        };
        const _hoisted_61 = {
          key: 0,
          class: "bg-green-50 dark:bg-green-900/10 rounded-xl p-3 text-green-700 dark:text-green-400 text-sm flex justify-between"
        };
        const _hoisted_62 = {
          class: "font-bold"
        };
        const _hoisted_63 = {
          key: 1,
          class: "bg-red-50 dark:bg-red-900/10 rounded-xl p-3 text-red-700 dark:text-red-400 text-sm"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "ImportPlaylist",
          setup(__props) {
            const {
              t
            } = useI18n();
            const message = useMessage();
            const currentTab = ref("link");
            const tabs = computed(() => [{
              id: "link",
              label: t("comp.playlist.import.linkTab"),
              icon: "ri-link"
            }, {
              id: "text",
              label: t("comp.playlist.import.textTab"),
              icon: "ri-text"
            }, {
              id: "local",
              label: t("comp.playlist.import.localTab"),
              icon: "ri-file-list-3-line"
            }]);
            const tabIndicatorStyle = computed(() => {
              const index = tabs.value.findIndex(tab => tab.id === currentTab.value);
              return {
                left: `calc(${100 / 3 * index}% + 6px)`,
                width: `calc(${100 / 3}% - 12px)`
              };
            });
            const linkInputs = ref([{
              value: ""
            }]);
            const textInput = ref("");
            const localMetadata = ref([{
              name: "",
              artist: "",
              album: ""
            }]);
            const playlistName = ref("");
            const importToStarPlaylist = ref(false);
            const addLinkRow = () => {
              linkInputs.value.push({
                value: ""
              });
            };
            const removeLinkRow = index => {
              linkInputs.value.splice(index, 1);
            };
            const addMetadataRow = () => {
              localMetadata.value.push({
                name: "",
                artist: "",
                album: ""
              });
            };
            const removeMetadataRow = index => {
              localMetadata.value.splice(index, 1);
            };
            const isLinkInputValid = computed(() => linkInputs.value.some(item => item.value.trim() !== ""));
            const isLocalMetadataValid = computed(() => localMetadata.value.some(item => item.name.trim() !== ""));
            const isImportDisabled = computed(() => {
              if (importing.value) return true;
              if (currentTab.value === "link") return !isLinkInputValid.value;
              if (currentTab.value === "text") return !textInput.value.trim();
              if (currentTab.value === "local") return !isLocalMetadataValid.value;
              return true;
            });
            const importing = ref(false);
            const taskId = ref("");
            const taskStatus = ref("");
            const successCount = ref(0);
            const failReason = ref("");
            const checkingStatus = ref(false);
            const statusCheckInterval = ref(null);
            const handleImport = async () => {
              if (isImportDisabled.value) return;
              try {
                importing.value = true;
                let params = {};
                if (currentTab.value === "link") {
                  const links = linkInputs.value.filter(link => link.value.trim()).map(link => link.value.trim());
                  params.link = JSON.stringify(links);
                } else if (currentTab.value === "text") {
                  params.text = encodeURIComponent(textInput.value);
                } else if (currentTab.value === "local") {
                  const filteredData = localMetadata.value.filter(item => item.name.trim() !== "");
                  params.local = JSON.stringify(filteredData);
                }
                if (importToStarPlaylist.value) {
                  params.importStarPlaylist = true;
                } else if (playlistName.value) {
                  params.playlistName = playlistName.value;
                }
                const res = await importPlaylist(params);
                if (res.data.code === 200) {
                  message.success(t("comp.playlist.import.importSuccess"));
                  taskId.value = res.data.data.taskId;
                  startStatusCheck();
                } else {
                  message.error(res.data.message || t("comp.playlist.import.importFailed"));
                }
              } catch (error) {
                console.error("导入歌单失败:", error);
                message.error(t("comp.playlist.import.importFailed"));
              } finally {
                importing.value = false;
              }
            };
            const startStatusCheck = () => {
              if (statusCheckInterval.value) clearInterval(statusCheckInterval.value);
              checkTaskStatus();
              statusCheckInterval.value = window.setInterval(checkTaskStatus, 3e3);
            };
            const checkTaskStatus = async () => {
              if (!taskId.value) return;
              try {
                checkingStatus.value = true;
                const res = await getImportTaskStatus(taskId.value);
                if (res.data.code === 200 && res.data.data.tasks?.length > 0) {
                  const taskData = res.data.data.tasks[0];
                  const statusMap = {
                    PENDING: "pending",
                    PROCESSING: "processing",
                    COMPLETE: "success",
                    FAILED: "failed"
                  };
                  taskStatus.value = statusMap[taskData.status] || "pending";
                  if (taskStatus.value === "success") {
                    successCount.value = taskData.succCount || 0;
                    if (statusCheckInterval.value) clearInterval(statusCheckInterval.value);
                  } else if (taskStatus.value === "failed") {
                    failReason.value = taskData.msg || t("comp.playlist.import.unknownError");
                    if (statusCheckInterval.value) clearInterval(statusCheckInterval.value);
                  }
                }
              } catch (error) {
                console.error("检查任务状态失败:", error);
              } finally {
                checkingStatus.value = false;
              }
            };
            const refreshStatus = () => checkTaskStatus();
            const getStatusText = status => {
              switch (status) {
                case "pending":
                  return t("comp.playlist.import.statusPending");
                case "processing":
                  return t("comp.playlist.import.statusProcessing");
                case "success":
                  return t("comp.playlist.import.statusSuccess");
                case "failed":
                  return t("comp.playlist.import.statusFailed");
                default:
                  return t("comp.playlist.import.statusUnknown");
              }
            };
            onMounted(() => {
              if (taskId.value) startStatusCheck();
            });
            onUnmounted(() => {
              if (statusCheckInterval.value) clearInterval(statusCheckInterval.value);
            });
            return (_ctx, _cache) => {
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [_cache[12] || (_cache[12] = createBaseVNode("div", {
                class: "absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
              }, null, -1)), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("div", null, [createBaseVNode("h2", _hoisted_4, [_cache[3] || (_cache[3] = createBaseVNode("div", {
                class: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"
              }, [createBaseVNode("i", {
                class: "ri-import-fill text-xl"
              })], -1)), createTextVNode(" " + toDisplayString(unref(t)("comp.playlist.import.title")), 1)]), createBaseVNode("p", _hoisted_5, toDisplayString(unref(t)("comp.playlist.import.description")), 1)])])]), createVNode(_component_n_scrollbar, {
                class: "flex-1"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("div", _hoisted_8, [(openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, tab => {
                  return openBlock(), createElementBlock("div", {
                    key: tab.id,
                    class: normalizeClass(["relative z-10 px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all duration-300 flex items-center gap-2", currentTab.value === tab.id ? "text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"]),
                    onClick: $event => currentTab.value = tab.id
                  }, [createBaseVNode("i", {
                    class: normalizeClass(tab.icon)
                  }, null, 2), createTextVNode(" " + toDisplayString(tab.label), 1)], 10, _hoisted_9);
                }), 128)), createBaseVNode("div", {
                  class: "absolute top-1.5 bottom-1.5 bg-primary rounded-xl shadow-md transition-all duration-300 ease-out",
                  style: normalizeStyle(tabIndicatorStyle.value)
                }, null, 4)])]), createBaseVNode("div", _hoisted_10, [createBaseVNode("div", _hoisted_11, [createBaseVNode("div", _hoisted_12, [currentTab.value === "link" ? (openBlock(), createElementBlock("div", _hoisted_13, [createBaseVNode("div", _hoisted_14, [(openBlock(true), createElementBlock(Fragment, null, renderList(linkInputs.value, (link, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "group relative"
                  }, [withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": $event => link.value = $event,
                    placeholder: unref(t)("comp.playlist.import.linkPlaceholder"),
                    class: "w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent focus:border-primary/50 focus:bg-white dark:focus:bg-black rounded-2xl px-5 py-4 outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400"
                  }, null, 8, _hoisted_15), [[vModelText, link.value]]), linkInputs.value.length > 1 ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all opacity-0 group-hover:opacity-100",
                    onClick: $event => removeLinkRow(index)
                  }, [...(_cache[4] || (_cache[4] = [createBaseVNode("i", {
                    class: "ri-delete-bin-line"
                  }, null, -1)]))], 8, _hoisted_16)) : createCommentVNode("", true)]);
                }), 128)), createBaseVNode("button", {
                  class: "w-full py-3 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-gray-500 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2 font-medium",
                  onClick: addLinkRow
                }, [_cache[5] || (_cache[5] = createBaseVNode("i", {
                  class: "ri-add-line text-lg"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("comp.playlist.import.addLinkButton")), 1)])])])) : createCommentVNode("", true), currentTab.value === "text" ? (openBlock(), createElementBlock("div", _hoisted_17, [withDirectives(createBaseVNode("textarea", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => textInput.value = $event),
                  placeholder: unref(t)("comp.playlist.import.textPlaceholder"),
                  rows: "12",
                  class: "w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent focus:border-primary/50 focus:bg-white dark:focus:bg-black rounded-2xl px-5 py-4 outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 font-mono text-sm resize-none"
                }, null, 8, _hoisted_18), [[vModelText, textInput.value]]), createBaseVNode("div", _hoisted_19, [_cache[6] || (_cache[6] = createBaseVNode("i", {
                  class: "ri-information-line"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("comp.playlist.import.textFormat")), 1)])])) : createCommentVNode("", true), currentTab.value === "local" ? (openBlock(), createElementBlock("div", _hoisted_20, [createBaseVNode("div", _hoisted_21, [(openBlock(true), createElementBlock(Fragment, null, renderList(localMetadata.value, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "flex gap-3 items-center group"
                  }, [createBaseVNode("div", _hoisted_22, toDisplayString(index + 1), 1), withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": $event => item.name = $event,
                    placeholder: unref(t)("comp.playlist.import.songNamePlaceholder"),
                    class: "flex-1 bg-gray-50 dark:bg-white/5 border-transparent focus:border-primary/50 rounded-xl px-4 py-2.5 outline-none text-sm transition-all border-2"
                  }, null, 8, _hoisted_23), [[vModelText, item.name]]), withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": $event => item.artist = $event,
                    placeholder: unref(t)("comp.playlist.import.artistNamePlaceholder"),
                    class: "flex-1 bg-gray-50 dark:bg-white/5 border-transparent focus:border-primary/50 rounded-xl px-4 py-2.5 outline-none text-sm transition-all border-2"
                  }, null, 8, _hoisted_24), [[vModelText, item.artist]]), withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": $event => item.album = $event,
                    placeholder: unref(t)("comp.playlist.import.albumNamePlaceholder"),
                    class: "flex-1 bg-gray-50 dark:bg-white/5 border-transparent focus:border-primary/50 rounded-xl px-4 py-2.5 outline-none text-sm transition-all border-2"
                  }, null, 8, _hoisted_25), [[vModelText, item.album]]), localMetadata.value.length > 1 ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all opacity-0 group-hover:opacity-100",
                    onClick: $event => removeMetadataRow(index)
                  }, [...(_cache[7] || (_cache[7] = [createBaseVNode("i", {
                    class: "ri-delete-bin-line"
                  }, null, -1)]))], 8, _hoisted_26)) : createCommentVNode("", true)]);
                }), 128)), createBaseVNode("button", {
                  class: "ml-9 px-4 py-2 rounded-xl text-sm font-medium text-primary hover:bg-primary/10 transition-colors flex items-center gap-1",
                  onClick: addMetadataRow
                }, [_cache[8] || (_cache[8] = createBaseVNode("i", {
                  class: "ri-add-line"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("comp.playlist.import.addSongButton")), 1)])])])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_27, [createBaseVNode("div", _hoisted_28, [_cache[9] || (_cache[9] = createBaseVNode("div", {
                  class: "mt-0.5 text-blue-500"
                }, [createBaseVNode("i", {
                  class: "ri-lightbulb-flash-line text-lg"
                })], -1)), createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, toDisplayString(unref(t)("comp.playlist.import.linkTips")), 1), createBaseVNode("ul", _hoisted_31, [currentTab.value === "link" ? (openBlock(), createElementBlock("li", _hoisted_32, toDisplayString(unref(t)("comp.playlist.import.linkTip1")), 1)) : createCommentVNode("", true), currentTab.value === "link" ? (openBlock(), createElementBlock("li", _hoisted_33, toDisplayString(unref(t)("comp.playlist.import.linkTip2")), 1)) : createCommentVNode("", true), currentTab.value === "link" ? (openBlock(), createElementBlock("li", _hoisted_34, toDisplayString(unref(t)("comp.playlist.import.linkTip3")), 1)) : createCommentVNode("", true), currentTab.value === "text" ? (openBlock(), createElementBlock("li", _hoisted_35, toDisplayString(unref(t)("comp.playlist.import.textTips")), 1)) : createCommentVNode("", true), currentTab.value === "local" ? (openBlock(), createElementBlock("li", _hoisted_36, toDisplayString(unref(t)("comp.playlist.import.localTips")), 1)) : createCommentVNode("", true)])])])])]), createBaseVNode("div", _hoisted_37, [createBaseVNode("div", _hoisted_38, [createBaseVNode("h3", _hoisted_39, [_cache[10] || (_cache[10] = createBaseVNode("i", {
                  class: "ri-settings-4-line text-primary"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("comp.playlist.import.options")), 1)]), createBaseVNode("div", _hoisted_40, [createBaseVNode("div", {
                  class: normalizeClass(["flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border-2", importToStarPlaylist.value ? "bg-primary/5 border-primary/50" : "bg-gray-50 dark:bg-white/5 border-transparent hover:bg-gray-100 dark:hover:bg-white/10"]),
                  onClick: _cache[1] || (_cache[1] = $event => importToStarPlaylist.value = !importToStarPlaylist.value)
                }, [createBaseVNode("div", _hoisted_41, [createBaseVNode("div", {
                  class: normalizeClass(["w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-lg", importToStarPlaylist.value ? "text-primary" : "text-gray-400"])
                }, [importToStarPlaylist.value ? (openBlock(), createElementBlock("i", _hoisted_42)) : (openBlock(), createElementBlock("i", _hoisted_43))], 2), createBaseVNode("span", _hoisted_44, toDisplayString(unref(t)("comp.playlist.import.importToStarPlaylist")), 1)]), createBaseVNode("div", {
                  class: normalizeClass(["w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", importToStarPlaylist.value ? "border-primary bg-primary" : "border-gray-300 dark:border-gray-600"])
                }, [withDirectives(createBaseVNode("i", _hoisted_45, null, 512), [[vShow, importToStarPlaylist.value]])], 2)], 2), createBaseVNode("div", {
                  class: normalizeClass(["relative group", {
                    "opacity-50 pointer-events-none": importToStarPlaylist.value
                  }])
                }, [_cache[11] || (_cache[11] = createBaseVNode("div", {
                  class: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"
                }, [createBaseVNode("i", {
                  class: "ri-play-list-line text-gray-400"
                })], -1)), withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => playlistName.value = $event),
                  placeholder: unref(t)("comp.playlist.import.playlistNamePlaceholder"),
                  class: "w-full bg-gray-50 dark:bg-white/5 border-2 border-transparent focus:border-primary/50 rounded-2xl pl-11 pr-4 py-3.5 outline-none transition-all text-sm text-gray-900 dark:text-white"
                }, null, 8, _hoisted_46), [[vModelText, playlistName.value]])], 2)]), createBaseVNode("button", {
                  class: "w-full mt-6 py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 flex items-center justify-center gap-2",
                  disabled: isImportDisabled.value,
                  onClick: handleImport
                }, [importing.value ? (openBlock(), createElementBlock("i", _hoisted_48)) : (openBlock(), createElementBlock("i", _hoisted_49)), createTextVNode(" " + toDisplayString(importing.value ? unref(t)("comp.playlist.import.statusProcessing") : unref(t)("comp.playlist.import.importButton")), 1)], 8, _hoisted_47)]), taskId.value ? (openBlock(), createElementBlock("div", _hoisted_50, [createBaseVNode("div", _hoisted_51, [createBaseVNode("div", _hoisted_52, [createBaseVNode("h3", _hoisted_53, toDisplayString(unref(t)("comp.playlist.import.importStatus")), 1), createBaseVNode("button", {
                  class: "text-xs text-primary hover:underline",
                  onClick: refreshStatus
                }, toDisplayString(unref(t)("comp.playlist.import.refresh")), 1)]), createBaseVNode("div", _hoisted_54, [createBaseVNode("div", _hoisted_55, [createBaseVNode("div", {
                  class: normalizeClass(["w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors", {
                    "bg-blue-50 text-blue-500": taskStatus.value === "processing" || taskStatus.value === "pending",
                    "bg-green-50 text-green-500": taskStatus.value === "success",
                    "bg-red-50 text-red-500": taskStatus.value === "failed"
                  }])
                }, [taskStatus.value === "processing" || taskStatus.value === "pending" ? (openBlock(), createElementBlock("i", _hoisted_56)) : taskStatus.value === "success" ? (openBlock(), createElementBlock("i", _hoisted_57)) : taskStatus.value === "failed" ? (openBlock(), createElementBlock("i", _hoisted_58)) : createCommentVNode("", true)], 2), createBaseVNode("div", null, [createBaseVNode("div", _hoisted_59, toDisplayString(getStatusText(taskStatus.value)), 1), createBaseVNode("div", _hoisted_60, toDisplayString(taskId.value), 1)])]), taskStatus.value === "success" ? (openBlock(), createElementBlock("div", _hoisted_61, [createBaseVNode("span", null, toDisplayString(unref(t)("comp.playlist.import.successCount")), 1), createBaseVNode("span", _hoisted_62, toDisplayString(successCount.value), 1)])) : createCommentVNode("", true), taskStatus.value === "failed" ? (openBlock(), createElementBlock("div", _hoisted_63, toDisplayString(failReason.value), 1)) : createCommentVNode("", true)])])])) : createCommentVNode("", true)])])])]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const ImportPlaylist = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-6d854ba5"]]));
      }
    };
  });
})();

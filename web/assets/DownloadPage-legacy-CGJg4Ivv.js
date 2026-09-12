;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './Input-legacy-D1FyU7q2.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, usePlayerStore, useMessage, ref, watch, onMounted, openBlock, createElementBlock, createVNode, withCtx, createBaseVNode, toDisplayString, unref, Fragment, renderList, normalizeClass, createCommentVNode, __unplugin_components_1, getImgUrl, normalizeStyle, __unplugin_components_2, __unplugin_components_3, createTextVNode, Scrollbar, __unplugin_components_2$1, __unplugin_components_5, Button, __unplugin_components_1$1, __unplugin_components_6, computed, getMusicDetail, _export_sfc, __unplugin_components_0;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        usePlayerStore = module.bb;
        useMessage = module.bt;
        ref = module.A;
        watch = module.Y;
        onMounted = module.aq;
        openBlock = module.a7;
        createElementBlock = module.a8;
        createVNode = module.ak;
        withCtx = module.as;
        createBaseVNode = module.ab;
        toDisplayString = module.ac;
        unref = module.ad;
        Fragment = module.ae;
        renderList = module.af;
        normalizeClass = module.aa;
        createCommentVNode = module.ah;
        __unplugin_components_1 = module.br;
        getImgUrl = module.aQ;
        normalizeStyle = module.ag;
        __unplugin_components_2 = module.bj;
        __unplugin_components_3 = module.dg;
        createTextVNode = module.b7;
        Scrollbar = module.be;
        __unplugin_components_2$1 = module.cN;
        __unplugin_components_5 = module.bB;
        Button = module.a1;
        __unplugin_components_1$1 = module.cO;
        __unplugin_components_6 = module.bC;
        computed = module.z;
        getMusicDetail = module.bw;
        _export_sfc = module.ap;
      }, module => {
        __unplugin_components_0 = module._;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ".download-page[data-v-9b481727] {\n  position: relative;\n}\n.hero-section[data-v-9b481727] {\n  min-height: 240px;\n}\n.animate-item[data-v-9b481727] {\n  animation: fadeInUp-9b481727 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards;\n}\n@keyframes fadeInUp-9b481727 {\nfrom {\n    opacity: 0;\n    transform: translateY(20px);\n}\nto {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n.action-btn-pill[data-v-9b481727] {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 229 229 / var(--tw-border-opacity, 1));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.action-btn-pill[data-v-9b481727]:is(.dark *) {\n  --tw-border-opacity: 1;\n  border-color: rgb(38 38 38 / var(--tw-border-opacity, 1));\n}\n.action-btn-pill[data-v-9b481727]:hover:not(:disabled) {\n  border-color: rgb(34 197 94 / 0.3);\n  background-color: rgb(34 197 94 / 0.05);\n}\n.action-btn-icon[data-v-9b481727] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.action-btn-icon[data-v-9b481727]:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  background-color: rgb(34 197 94 / 0.1);\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity, 1));\n}\n.downloading-item[data-v-9b481727],\n.downloaded-item[data-v-9b481727] {\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          class: "download-page h-full w-full bg-white dark:bg-black transition-colors duration-500"
        };
        const _hoisted_2 = {
          class: "download-content pb-32"
        };
        const _hoisted_3 = {
          class: "hero-section relative overflow-hidden rounded-tl-2xl"
        };
        const _hoisted_4 = {
          class: "hero-content relative z-10 page-padding-x pt-10 pb-8"
        };
        const _hoisted_5 = {
          class: "flex flex-col md:flex-row gap-8 items-center md:items-end"
        };
        const _hoisted_6 = {
          class: "info-content text-center md:text-left"
        };
        const _hoisted_7 = {
          class: "badge mb-3"
        };
        const _hoisted_8 = {
          class: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
        };
        const _hoisted_9 = {
          class: "text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
        };
        const _hoisted_10 = {
          class: "mt-4 text-sm md:text-base text-neutral-500 dark:text-neutral-400"
        };
        const _hoisted_11 = {
          class: "action-bar sticky top-0 z-20 page-padding-x py-3 md:py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-800/50"
        };
        const _hoisted_12 = {
          class: "flex items-center justify-between gap-4"
        };
        const _hoisted_13 = {
          class: "flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl"
        };
        const _hoisted_14 = ["onClick"];
        const _hoisted_15 = {
          class: "flex items-center gap-3"
        };
        const _hoisted_16 = {
          class: "hidden md:inline"
        };
        const _hoisted_17 = {
          class: "list-section page-padding-x mt-6"
        };
        const _hoisted_18 = {
          key: 0,
          class: "downloading-container"
        };
        const _hoisted_19 = {
          key: 0,
          class: "empty-state py-20 text-center"
        };
        const _hoisted_20 = {
          class: "text-neutral-400"
        };
        const _hoisted_21 = {
          key: 1,
          class: "grid grid-cols-1 xl:grid-cols-2 gap-4"
        };
        const _hoisted_22 = {
          class: "flex items-center gap-4"
        };
        const _hoisted_23 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_24 = {
          class: "flex items-center justify-between mb-2"
        };
        const _hoisted_25 = {
          class: "truncate pr-4"
        };
        const _hoisted_26 = {
          class: "text-sm font-bold text-neutral-900 dark:text-white"
        };
        const _hoisted_27 = {
          class: "ml-2 text-xs text-neutral-400"
        };
        const _hoisted_28 = {
          class: "relative h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden"
        };
        const _hoisted_29 = {
          class: "flex items-center justify-between mt-2"
        };
        const _hoisted_30 = {
          class: "text-[10px] text-neutral-400"
        };
        const _hoisted_31 = {
          class: "text-[10px] text-neutral-400"
        };
        const _hoisted_32 = {
          key: 1,
          class: "downloaded-container"
        };
        const _hoisted_33 = {
          key: 0,
          class: "empty-state py-20 text-center"
        };
        const _hoisted_34 = {
          class: "text-neutral-400"
        };
        const _hoisted_35 = {
          class: "text-xs text-neutral-500 mt-2"
        };
        const _hoisted_36 = {
          key: 1,
          class: "space-y-2"
        };
        const _hoisted_37 = {
          class: "relative w-12 h-12 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
        };
        const _hoisted_38 = ["src"];
        const _hoisted_39 = ["onClick"];
        const _hoisted_40 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_41 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_42 = {
          class: "text-sm font-bold text-neutral-900 dark:text-white truncate"
        };
        const _hoisted_43 = {
          class: "text-xs text-neutral-400 flex-shrink-0"
        };
        const _hoisted_44 = {
          class: "flex items-center gap-4 mt-1"
        };
        const _hoisted_45 = {
          class: "text-xs text-neutral-500 truncate max-w-[150px]"
        };
        const _hoisted_46 = {
          class: "hidden md:flex items-center gap-1 text-[10px] text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full truncate"
        };
        const _hoisted_47 = {
          class: "truncate"
        };
        const _hoisted_48 = {
          class: "flex items-center gap-1"
        };
        const _hoisted_49 = ["onClick"];
        const _hoisted_50 = ["onClick"];
        const _hoisted_51 = ["onClick"];
        const _hoisted_52 = {
          class: "download-settings-content space-y-8 py-4"
        };
        const _hoisted_53 = {
          class: "setting-group"
        };
        const _hoisted_54 = {
          class: "text-sm font-bold text-neutral-900 dark:text-white mb-2"
        };
        const _hoisted_55 = {
          class: "text-xs text-neutral-500 mb-4"
        };
        const _hoisted_56 = {
          class: "space-y-3"
        };
        const _hoisted_57 = {
          class: "flex gap-2"
        };
        const _hoisted_58 = {
          class: "setting-group"
        };
        const _hoisted_59 = {
          class: "flex items-center justify-between"
        };
        const _hoisted_60 = {
          class: "text-sm font-bold text-neutral-900 dark:text-white"
        };
        const _hoisted_61 = {
          class: "text-xs text-neutral-500 mt-1"
        };
        const _hoisted_62 = {
          class: "setting-group"
        };
        const _hoisted_63 = {
          class: "text-sm font-bold text-neutral-900 dark:text-white mb-2"
        };
        const _hoisted_64 = {
          class: "text-xs text-neutral-500 mb-4"
        };
        const _hoisted_65 = {
          class: "space-y-4"
        };
        const _hoisted_66 = {
          class: "flex flex-wrap gap-2"
        };
        const _hoisted_67 = {
          class: "text-[10px] text-neutral-400 mb-2 uppercase font-bold"
        };
        const _hoisted_68 = {
          class: "flex items-center gap-2"
        };
        const _hoisted_69 = {
          class: "text-[10px] text-neutral-400 mb-2 uppercase font-bold"
        };
        const _hoisted_70 = {
          class: "space-y-2"
        };
        const _hoisted_71 = {
          class: "text-xs"
        };
        const _hoisted_72 = {
          class: "flex items-center gap-1"
        };
        const _hoisted_73 = {
          class: "flex flex-wrap gap-2 mt-2"
        };
        const _hoisted_74 = {
          class: "p-3 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-dashed border-neutral-200 dark:border-neutral-800"
        };
        const _hoisted_75 = {
          class: "text-[10px] text-neutral-400 mb-1 uppercase font-bold"
        };
        const _hoisted_76 = {
          class: "text-sm font-medium text-primary truncate"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "DownloadPage",
          setup(__props) {
            const {
              t
            } = useI18n();
            const playerStore = usePlayerStore();
            const message = useMessage();
            const tabName = ref("downloading");
            const downloadList = ref([]);
            const downloadedList = ref(JSON.parse(localStorage.getItem("downloadedList") || "[]"));
            const downList = computed(() => downloadedList.value);
            const totalProgress = computed(() => {
              if (downloadList.value.length === 0) return 0;
              const total = downloadList.value.reduce((sum, item) => sum + item.progress, 0);
              return total / downloadList.value.length;
            });
            watch(totalProgress, newVal => {
              if (newVal === 100) {
                refreshDownloadedList();
              }
            });
            const getStatusText = item => {
              switch (item.status) {
                case "downloading":
                  return t("download.status.downloading");
                case "completed":
                  return t("download.status.completed");
                case "error":
                  return t("download.status.failed");
                default:
                  return t("download.status.unknown");
              }
            };
            const formatSize = bytes => {
              if (!bytes) return "0 B";
              const k = 1024;
              const sizes = ["B", "KB", "MB", "GB"];
              const i = Math.floor(Math.log(bytes) / Math.log(k));
              return `${(bytes / k ** i).toFixed(1)} ${sizes[i]}`;
            };
            const copyPath = path => {
              navigator.clipboard.writeText(path).then(() => {
                message.success(t("download.path.copied"));
              }).catch(err => {
                console.error("复制失败:", err);
                message.error(t("download.path.copyFailed"));
              });
            };
            const shortenPath = path => {
              if (!path) return "";
              const parts = path.split(/[/\\]/);
              const fileName = parts.pop() || "";
              if (path.length < 30) return path;
              if (parts.length <= 2) return path;
              const start = parts.slice(0, 1).join("/");
              const end = parts.slice(-1).join("/");
              return `${start}/.../${end}/${fileName}`;
            };
            const getLocalFilePath = path => {
              if (!path) return "";
              return `local:///${encodeURIComponent(path)}`;
            };
            const openDirectory = path => {
              window.electron.ipcRenderer.send("open-directory", path);
            };
            const handlePlayMusic = async item => {
              try {
                const fileExists = await window.electron.ipcRenderer.invoke("check-file-exists", item.path);
                if (!fileExists) {
                  message.error(t("download.delete.fileNotFound", {
                    name: item.displayName || item.filename
                  }));
                  return;
                }
                const song = {
                  id: item.id,
                  name: item.displayName || item.filename,
                  ar: item.ar?.map(a => ({
                    id: 0,
                    name: a.name,
                    picId: 0,
                    img1v1Id: 0,
                    briefDesc: "",
                    picUrl: "",
                    img1v1Url: "",
                    albumSize: 0,
                    alias: [],
                    trans: "",
                    musicSize: 0,
                    topicPerson: 0
                  })) || [],
                  al: {
                    name: item.filename,
                    id: 0,
                    picUrl: item.picUrl,
                    pic: 0,
                    picId: 0
                  },
                  picUrl: item.picUrl,
                  // 使用本地文件协议
                  playMusicUrl: getLocalFilePath(item.path),
                  source: "netease",
                  count: 0
                };
                console.log("开始播放本地音乐:", song.name, "路径:", song.playMusicUrl);
                await playerStore.setPlay(song);
                playerStore.setPlayMusic(true);
                playerStore.setIsPlay(true);
                message.success(t("download.playStarted", {
                  name: item.displayName || item.filename
                }));
              } catch (error) {
                console.error("播放音乐失败:", error);
                message.error(t("download.playFailed", {
                  name: item.displayName || item.filename
                }));
              }
            };
            const showDeleteConfirm = ref(false);
            const itemToDelete = ref(null);
            const handleDelete = item => {
              itemToDelete.value = item;
              showDeleteConfirm.value = true;
            };
            const confirmDelete = async () => {
              const item = itemToDelete.value;
              if (!item) return;
              try {
                const success = await window.electron.ipcRenderer.invoke("delete-downloaded-music", item.path);
                if (success) {
                  const newList = downloadedList.value.filter(i => i.id !== item.id);
                  downloadedList.value = newList;
                  localStorage.setItem("downloadedList", JSON.stringify(newList));
                  message.success(t("download.delete.success"));
                } else {
                  message.warning(t("download.delete.fileNotFound"));
                }
              } catch (error) {
                console.error("Failed to delete music:", error);
                message.warning(t("download.delete.recordRemoved"));
              } finally {
                showDeleteConfirm.value = false;
                itemToDelete.value = null;
              }
            };
            const showClearConfirm = ref(false);
            const clearDownloadRecords = async () => {
              try {
                downloadedList.value = [];
                localStorage.setItem("downloadedList", "[]");
                await window.electron.ipcRenderer.invoke("clear-downloaded-music");
                message.success(t("download.clear.success"));
              } catch (error) {
                console.error("Failed to clear download records:", error);
                message.error(t("download.clear.failed"));
              } finally {
                showClearConfirm.value = false;
              }
            };
            const isLoadingDownloaded = ref(false);
            const formatSongName = songInfo => {
              if (!songInfo) return "";
              const nameFormat = downloadSettings.value.nameFormat || "{songName} - {artistName}";
              const artistName = songInfo.ar?.map(a => a.name).join("/") || "未知艺术家";
              const songName = songInfo.name || songInfo.filename || "未知歌曲";
              const albumName = songInfo.al?.name || "未知专辑";
              return nameFormat.replace(/\{songName\}/g, songName).replace(/\{artistName\}/g, artistName).replace(/\{albumName\}/g, albumName);
            };
            const refreshDownloadedList = async () => {
              if (isLoadingDownloaded.value) return;
              try {
                isLoadingDownloaded.value = true;
                const list = await window.electron.ipcRenderer.invoke("get-downloaded-music");
                if (!Array.isArray(list) || list.length === 0) {
                  downloadedList.value = [];
                  localStorage.setItem("downloadedList", "[]");
                  return;
                }
                const songIds = list.filter(item => item.id).map(item => item.id);
                if (songIds.length === 0) {
                  const updatedList = list.map(item => ({
                    ...item,
                    displayName: formatSongName(item) || item.filename
                  }));
                  downloadedList.value = updatedList;
                  localStorage.setItem("downloadedList", JSON.stringify(updatedList));
                  return;
                }
                try {
                  const detailRes = await getMusicDetail(songIds);
                  const songDetails = detailRes.data.songs.reduce((acc, song) => {
                    acc[song.id] = song;
                    return acc;
                  }, {});
                  const updatedList = list.map(item => {
                    const songDetail = songDetails[item.id];
                    const updatedItem = {
                      ...item,
                      picUrl: songDetail?.al?.picUrl || item.picUrl || "/images/default_cover.png",
                      ar: songDetail?.ar || item.ar || [{
                        name: t("download.localMusic")
                      }],
                      name: songDetail?.name || item.name || item.filename
                    };
                    updatedItem.displayName = formatSongName(updatedItem) || updatedItem.filename;
                    return updatedItem;
                  });
                  downloadedList.value = updatedList;
                  localStorage.setItem("downloadedList", JSON.stringify(updatedList));
                } catch (error) {
                  console.error("Failed to get music details:", error);
                  const updatedList = list.map(item => ({
                    ...item,
                    displayName: formatSongName(item) || item.filename
                  }));
                  downloadedList.value = updatedList;
                  localStorage.setItem("downloadedList", JSON.stringify(updatedList));
                }
              } catch (error) {
                console.error("Failed to get downloaded music list:", error);
                downloadedList.value = [];
                localStorage.setItem("downloadedList", "[]");
              } finally {
                isLoadingDownloaded.value = false;
              }
            };
            watch(() => tabName.value, newVal => {
              if (newVal) {
                refreshDownloadedList();
              }
            });
            onMounted(() => {
              refreshDownloadedList();
              const processedDownloads = /* @__PURE__ */new Set();
              window.electron.ipcRenderer.on("music-download-progress", (_, data) => {
                const existingItem = downloadList.value.find(item => item.filename === data.filename);
                if (data.progress === 100) {
                  data.status = "completed";
                }
                if (existingItem) {
                  Object.assign(existingItem, {
                    ...data,
                    songInfo: data.songInfo || existingItem.songInfo
                  });
                  if (data.status === "completed") {
                    downloadList.value = downloadList.value.filter(item => item.filename !== data.filename);
                  }
                } else {
                  downloadList.value.push({
                    ...data,
                    songInfo: data.songInfo
                  });
                }
              });
              window.electron.ipcRenderer.on("music-download-complete", async (_, data) => {
                if (processedDownloads.has(data.filename)) {
                  return;
                }
                processedDownloads.add(data.filename);
                if (data.success) {
                  downloadList.value = downloadList.value.filter(item => item.filename !== data.filename);
                  setTimeout(() => refreshDownloadedList(), 500);
                  message.success(t("download.message.downloadComplete", {
                    filename: data.filename
                  }));
                  setTimeout(() => {
                    processedDownloads.delete(data.filename);
                  }, 1e4);
                } else {
                  const existingItem = downloadList.value.find(item => item.filename === data.filename);
                  if (existingItem) {
                    Object.assign(existingItem, {
                      status: "error",
                      error: data.error,
                      progress: 0
                    });
                    setTimeout(() => {
                      downloadList.value = downloadList.value.filter(item => item.filename !== data.filename);
                      processedDownloads.delete(data.filename);
                    }, 3e3);
                  }
                  message.error(t("download.message.downloadFailed", {
                    filename: data.filename,
                    error: data.error
                  }));
                }
              });
              window.electron.ipcRenderer.on("music-download-queued", (_, data) => {
                const existingItem = downloadList.value.find(item => item.filename === data.filename);
                if (!existingItem) {
                  downloadList.value.push({
                    filename: data.filename,
                    progress: 0,
                    loaded: 0,
                    total: 0,
                    path: "",
                    status: "downloading",
                    songInfo: data.songInfo
                  });
                }
              });
            });
            const showSettingsDrawer = ref(false);
            const downloadSettings = ref({
              path: "",
              nameFormat: "{songName} - {artistName}",
              separator: " - ",
              saveLyric: false
            });
            const formatComponents = ref([{
              id: 1,
              type: "songName"
            }, {
              id: 2,
              type: "artistName"
            }]);
            const handleMoveUp = index => {
              if (index > 0) {
                const temp = formatComponents.value.splice(index, 1)[0];
                formatComponents.value.splice(index - 1, 0, temp);
              }
            };
            const handleMoveDown = index => {
              if (index < formatComponents.value.length - 1) {
                const temp = formatComponents.value.splice(index, 1)[0];
                formatComponents.value.splice(index + 1, 0, temp);
              }
            };
            const addFormatComponent = type => {
              if (!formatComponents.value.some(item => item.type === type)) {
                formatComponents.value.push({
                  id: Date.now(),
                  type
                });
              }
            };
            const removeFormatComponent = index => {
              formatComponents.value.splice(index, 1);
            };
            watch(formatComponents, newComponents => {
              let format = "";
              newComponents.forEach((component, index) => {
                format += `{${component.type}}`;
                if (index < newComponents.length - 1) {
                  format += downloadSettings.value.separator;
                }
              });
              downloadSettings.value.nameFormat = format;
            }, {
              deep: true
            });
            watch(() => downloadSettings.value.separator, newSeparator => {
              if (formatComponents.value.length > 1) {
                let format = "";
                formatComponents.value.forEach((component, index) => {
                  format += `{${component.type}}`;
                  if (index < formatComponents.value.length - 1) {
                    format += newSeparator;
                  }
                });
                downloadSettings.value.nameFormat = format;
              }
            });
            const formatNamePreview = computed(() => {
              const format = downloadSettings.value.nameFormat;
              return format.replace(/\{songName\}/g, "莫失莫忘").replace(/\{artistName\}/g, "香蜜沉沉烬如霜").replace(/\{albumName\}/g, "电视剧原声带");
            });
            const selectDownloadPath = async () => {
              const result = await window.electron.ipcRenderer.invoke("select-directory");
              if (result && !result.canceled && result.filePaths.length > 0) {
                downloadSettings.value.path = result.filePaths[0];
              }
            };
            const openDownloadPath = () => {
              if (downloadSettings.value.path) {
                window.electron.ipcRenderer.send("open-directory", downloadSettings.value.path);
              } else {
                message.warning(t("download.settingsPanel.noPathSelected"));
              }
            };
            const saveDownloadSettings = () => {
              window.electron.ipcRenderer.send("set-store-value", "set.downloadPath", downloadSettings.value.path);
              window.electron.ipcRenderer.send("set-store-value", "set.downloadNameFormat", downloadSettings.value.nameFormat);
              window.electron.ipcRenderer.send("set-store-value", "set.downloadSeparator", downloadSettings.value.separator);
              window.electron.ipcRenderer.send("set-store-value", "set.downloadSaveLyric", downloadSettings.value.saveLyric);
              if (tabName.value === "downloaded") {
                refreshDownloadedList();
              }
              message.success(t("download.settingsPanel.saveSuccess"));
              showSettingsDrawer.value = false;
            };
            const initDownloadSettings = async () => {
              const path = await window.electron.ipcRenderer.invoke("get-store-value", "set.downloadPath");
              const nameFormat = await window.electron.ipcRenderer.invoke("get-store-value", "set.downloadNameFormat");
              const separator = await window.electron.ipcRenderer.invoke("get-store-value", "set.downloadSeparator");
              const saveLyric = await window.electron.ipcRenderer.invoke("get-store-value", "set.downloadSaveLyric");
              downloadSettings.value = {
                path: path || (await window.electron.ipcRenderer.invoke("get-downloads-path")),
                nameFormat: nameFormat || "{songName} - {artistName}",
                separator: separator || " - ",
                saveLyric: saveLyric || false
              };
              updateFormatComponents();
            };
            const updateFormatComponents = () => {
              const format = downloadSettings.value.nameFormat;
              const matches = Array.from(format.matchAll(/\{(\w+)\}/g));
              if (matches.length === 0) {
                formatComponents.value = [{
                  id: 1,
                  type: "songName"
                }, {
                  id: 2,
                  type: "artistName"
                }];
                return;
              }
              formatComponents.value = matches.map((match, index) => ({
                id: index + 1,
                type: match[1]
              }));
            };
            watch(() => downloadSettings.value.nameFormat, updateFormatComponents);
            watch(() => downloadSettings.value.nameFormat, () => {
              if (downloadedList.value.length > 0) {
                downloadedList.value = downloadedList.value.map(item => ({
                  ...item,
                  displayName: formatSongName(item) || item.filename
                }));
                localStorage.setItem("downloadedList", JSON.stringify(downloadedList.value));
              }
            });
            onMounted(() => {
              initDownloadSettings();
            });
            return (_ctx, _cache) => {
              const _component_n_image = __unplugin_components_1;
              const _component_n_tooltip = __unplugin_components_3;
              const _component_n_spin = __unplugin_components_2;
              const _component_n_scrollbar = Scrollbar;
              const _component_n_modal = __unplugin_components_2$1;
              const _component_n_input = __unplugin_components_0;
              const _component_n_button = Button;
              const _component_n_switch = __unplugin_components_1$1;
              const _component_n_drawer_content = __unplugin_components_5;
              const _component_n_drawer = __unplugin_components_6;
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_scrollbar, {
                class: "h-full"
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_2, [createBaseVNode("section", _hoisted_3, [_cache[8] || (_cache[8] = createBaseVNode("div", {
                  class: "hero-bg absolute inset-0 -top-20"
                }, [createBaseVNode("div", {
                  class: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl opacity-50 dark:opacity-30"
                }), createBaseVNode("div", {
                  class: "absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-black/80 dark:to-black"
                })], -1)), createBaseVNode("div", _hoisted_4, [createBaseVNode("div", _hoisted_5, [_cache[7] || (_cache[7] = createBaseVNode("div", {
                  class: "cover-wrapper relative group"
                }, [createBaseVNode("div", {
                  class: "cover-container relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-primary/10 flex items-center justify-center shadow-2xl ring-4 ring-white/50 dark:ring-neutral-800/50"
                }, [createBaseVNode("i", {
                  class: "ri-download-cloud-2-line text-6xl text-primary opacity-80"
                })])], -1)), createBaseVNode("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("download.title")), 1)]), createBaseVNode("h1", _hoisted_9, toDisplayString(tabName.value === "downloading" ? unref(t)("download.tabs.downloading") : unref(t)("download.tabs.downloaded")), 1), createBaseVNode("p", _hoisted_10, toDisplayString(tabName.value === "downloading" ? unref(t)("download.progress.total", {
                  progress: totalProgress.value.toFixed(1)
                }) : unref(t)("download.count", {
                  count: downloadedList.value.length
                })), 1)])])])]), createBaseVNode("section", _hoisted_11, [createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [(openBlock(), createElementBlock(Fragment, null, renderList(["downloading", "downloaded"], tab => {
                  return createBaseVNode("button", {
                    key: tab,
                    class: normalizeClass(["px-6 py-1.5 rounded-lg text-sm font-medium transition-all", tabName.value === tab ? "bg-white dark:bg-neutral-800 text-primary shadow-sm" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"]),
                    onClick: $event => tabName.value = tab
                  }, toDisplayString(unref(t)(`download.tabs.${tab}`)), 11, _hoisted_14);
                }), 64))]), createBaseVNode("div", _hoisted_15, [tabName.value === "downloaded" && downloadedList.value.length > 0 ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "action-btn-pill flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all hover:bg-red-50 dark:hover:bg-red-900/10 text-red-500 border border-neutral-200 dark:border-neutral-800",
                  onClick: _cache[0] || (_cache[0] = $event => showClearConfirm.value = true)
                }, [_cache[9] || (_cache[9] = createBaseVNode("i", {
                  class: "ri-delete-bin-line text-lg"
                }, null, -1)), createBaseVNode("span", _hoisted_16, toDisplayString(unref(t)("download.clearAll")), 1)])) : createCommentVNode("", true), createBaseVNode("button", {
                  class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                  onClick: openDownloadPath
                }, [...(_cache[10] || (_cache[10] = [createBaseVNode("i", {
                  class: "ri-folder-open-line text-lg"
                }, null, -1)]))]), createBaseVNode("button", {
                  class: "action-btn-icon w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all",
                  onClick: _cache[1] || (_cache[1] = $event => showSettingsDrawer.value = true)
                }, [...(_cache[11] || (_cache[11] = [createBaseVNode("i", {
                  class: "ri-settings-3-line text-lg"
                }, null, -1)]))])])])]), createBaseVNode("section", _hoisted_17, [tabName.value === "downloading" ? (openBlock(), createElementBlock("div", _hoisted_18, [downloadList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [_cache[12] || (_cache[12] = createBaseVNode("i", {
                  class: "ri-download-cloud-2-line text-5xl mb-4 text-neutral-200 dark:text-neutral-800"
                }, null, -1)), createBaseVNode("p", _hoisted_20, toDisplayString(unref(t)("download.empty.noTasks")), 1)])) : (openBlock(), createElementBlock("div", _hoisted_21, [(openBlock(true), createElementBlock(Fragment, null, renderList(downloadList.value, item => {
                  return openBlock(), createElementBlock("div", {
                    key: item.path,
                    class: "downloading-item group p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
                  }, [createBaseVNode("div", _hoisted_22, [createVNode(_component_n_image, {
                    src: unref(getImgUrl)(item.songInfo?.picUrl, "100y100"),
                    class: "w-12 h-12 rounded-xl flex-shrink-0",
                    "preview-disabled": ""
                  }, null, 8, ["src"]), createBaseVNode("div", _hoisted_23, [createBaseVNode("div", _hoisted_24, [createBaseVNode("div", _hoisted_25, [createBaseVNode("span", _hoisted_26, toDisplayString(item.filename), 1), createBaseVNode("span", _hoisted_27, toDisplayString(item.songInfo?.ar?.map(a => a.name).join(", ")), 1)]), createBaseVNode("span", {
                    class: normalizeClass(["text-xs font-medium", item.status === "error" ? "text-red-500" : "text-primary"])
                  }, toDisplayString(getStatusText(item)), 3)]), createBaseVNode("div", _hoisted_28, [createBaseVNode("div", {
                    class: normalizeClass(["absolute inset-y-0 left-0 bg-primary transition-all duration-300", {
                      "bg-red-500": item.status === "error"
                    }]),
                    style: normalizeStyle({
                      width: `${item.progress}%`
                    })
                  }, null, 6)]), createBaseVNode("div", _hoisted_29, [createBaseVNode("span", _hoisted_30, toDisplayString(formatSize(item.loaded)) + " / " + toDisplayString(formatSize(item.total)), 1), createBaseVNode("span", _hoisted_31, toDisplayString(item.progress.toFixed(1)) + "%", 1)])])])]);
                }), 128))]))])) : (openBlock(), createElementBlock("div", _hoisted_32, [createVNode(_component_n_spin, {
                  show: isLoadingDownloaded.value
                }, {
                  default: withCtx(() => [downloadedList.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_33, [_cache[13] || (_cache[13] = createBaseVNode("i", {
                    class: "ri-inbox-archive-line text-5xl mb-4 text-neutral-200 dark:text-neutral-800"
                  }, null, -1)), createBaseVNode("p", _hoisted_34, toDisplayString(unref(t)("download.empty.noDownloaded")), 1), createBaseVNode("p", _hoisted_35, toDisplayString(unref(t)("download.empty.noDownloadedHint")), 1)])) : (openBlock(), createElementBlock("div", _hoisted_36, [(openBlock(true), createElementBlock(Fragment, null, renderList(downList.value, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.path,
                      class: "downloaded-item group animate-item p-3 rounded-2xl flex items-center gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all",
                      style: normalizeStyle({
                        animationDelay: `${index * 0.03}s`
                      })
                    }, [createBaseVNode("div", _hoisted_37, [createBaseVNode("img", {
                      src: unref(getImgUrl)(item.picUrl, "100y100"),
                      class: "w-full h-full object-cover"
                    }, null, 8, _hoisted_38), createBaseVNode("div", {
                      class: "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all cursor-pointer",
                      onClick: $event => handlePlayMusic(item)
                    }, [...(_cache[14] || (_cache[14] = [createBaseVNode("i", {
                      class: "ri-play-fill text-white text-xl"
                    }, null, -1)]))], 8, _hoisted_39)]), createBaseVNode("div", _hoisted_40, [createBaseVNode("div", _hoisted_41, [createBaseVNode("span", _hoisted_42, toDisplayString(item.displayName || item.filename), 1), createBaseVNode("span", _hoisted_43, toDisplayString(formatSize(item.size)), 1)]), createBaseVNode("div", _hoisted_44, [createBaseVNode("span", _hoisted_45, toDisplayString(item.ar?.map(a => a.name).join(", ")), 1), createBaseVNode("div", _hoisted_46, [_cache[15] || (_cache[15] = createBaseVNode("i", {
                      class: "ri-folder-line"
                    }, null, -1)), createBaseVNode("span", _hoisted_47, toDisplayString(shortenPath(item.path)), 1)])])]), createBaseVNode("div", _hoisted_48, [createVNode(_component_n_tooltip, {
                      trigger: "hover"
                    }, {
                      trigger: withCtx(() => [createBaseVNode("button", {
                        class: "w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-primary hover:bg-primary/10 transition-all",
                        onClick: $event => copyPath(item.path)
                      }, [...(_cache[16] || (_cache[16] = [createBaseVNode("i", {
                        class: "ri-file-copy-line"
                      }, null, -1)]))], 8, _hoisted_49)]),
                      default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("download.path.copy") || "复制路径"), 1)]),
                      _: 2
                    }, 1024), createVNode(_component_n_tooltip, {
                      trigger: "hover"
                    }, {
                      trigger: withCtx(() => [createBaseVNode("button", {
                        class: "w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-primary hover:bg-primary/10 transition-all",
                        onClick: $event => openDirectory(item.path)
                      }, [...(_cache[17] || (_cache[17] = [createBaseVNode("i", {
                        class: "ri-folder-open-line"
                      }, null, -1)]))], 8, _hoisted_50)]),
                      default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("download.settingsPanel.open")), 1)]),
                      _: 2
                    }, 1024), createVNode(_component_n_tooltip, {
                      trigger: "hover"
                    }, {
                      trigger: withCtx(() => [createBaseVNode("button", {
                        class: "w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:text-red-500 hover:bg-red-500/10 transition-all",
                        onClick: $event => handleDelete(item)
                      }, [...(_cache[18] || (_cache[18] = [createBaseVNode("i", {
                        class: "ri-delete-bin-line"
                      }, null, -1)]))], 8, _hoisted_51)]),
                      default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(t)("common.delete")), 1)]),
                      _: 2
                    }, 1024)])], 4);
                  }), 128))]))]),
                  _: 1
                }, 8, ["show"])]))])])]),
                _: 1
              }), createVNode(_component_n_modal, {
                show: showDeleteConfirm.value,
                "onUpdate:show": _cache[2] || (_cache[2] = $event => showDeleteConfirm.value = $event),
                preset: "dialog",
                type: "warning",
                title: unref(t)("download.delete.title"),
                content: unref(t)("download.delete.message", {
                  filename: itemToDelete.value?.displayName || itemToDelete.value?.filename
                }),
                "positive-text": unref(t)("download.delete.confirm"),
                "negative-text": unref(t)("download.delete.cancel"),
                onPositiveClick: confirmDelete
              }, null, 8, ["show", "title", "content", "positive-text", "negative-text"]), createVNode(_component_n_modal, {
                show: showClearConfirm.value,
                "onUpdate:show": _cache[3] || (_cache[3] = $event => showClearConfirm.value = $event),
                preset: "dialog",
                type: "error",
                title: unref(t)("download.clear.title"),
                content: unref(t)("download.clear.message"),
                "positive-text": unref(t)("download.clear.confirm"),
                "negative-text": unref(t)("download.clear.cancel"),
                onPositiveClick: clearDownloadRecords
              }, null, 8, ["show", "title", "content", "positive-text", "negative-text"]), createVNode(_component_n_drawer, {
                show: showSettingsDrawer.value,
                "onUpdate:show": _cache[6] || (_cache[6] = $event => showSettingsDrawer.value = $event),
                width: 400,
                placement: "right"
              }, {
                default: withCtx(() => [createVNode(_component_n_drawer_content, {
                  title: unref(t)("download.settingsPanel.title"),
                  closable: ""
                }, {
                  footer: withCtx(() => [createVNode(_component_n_button, {
                    type: "primary",
                    block: "",
                    onClick: saveDownloadSettings
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("common.save")), 1)]),
                    _: 1
                  })]),
                  default: withCtx(() => [createBaseVNode("div", _hoisted_52, [createBaseVNode("div", _hoisted_53, [createBaseVNode("h3", _hoisted_54, toDisplayString(unref(t)("download.settingsPanel.path")), 1), createBaseVNode("p", _hoisted_55, toDisplayString(unref(t)("download.settingsPanel.pathDesc")), 1), createBaseVNode("div", _hoisted_56, [createVNode(_component_n_input, {
                    value: downloadSettings.value.path,
                    readonly: "",
                    placeholder: "Select path..."
                  }, null, 8, ["value"]), createBaseVNode("div", _hoisted_57, [createVNode(_component_n_button, {
                    class: "flex-1",
                    onClick: selectDownloadPath
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("download.settingsPanel.select")), 1)]),
                    _: 1
                  }), createVNode(_component_n_button, {
                    class: "flex-1",
                    onClick: openDownloadPath
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("download.settingsPanel.open")), 1)]),
                    _: 1
                  })])])]), createBaseVNode("div", _hoisted_58, [createBaseVNode("div", _hoisted_59, [createBaseVNode("div", null, [createBaseVNode("h3", _hoisted_60, toDisplayString(unref(t)("download.settingsPanel.saveLyric")), 1), createBaseVNode("p", _hoisted_61, toDisplayString(unref(t)("download.settingsPanel.saveLyricDesc")), 1)]), createVNode(_component_n_switch, {
                    value: downloadSettings.value.saveLyric,
                    "onUpdate:value": _cache[4] || (_cache[4] = $event => downloadSettings.value.saveLyric = $event)
                  }, null, 8, ["value"])])]), createBaseVNode("div", _hoisted_62, [createBaseVNode("h3", _hoisted_63, toDisplayString(unref(t)("download.settingsPanel.fileFormat")), 1), createBaseVNode("p", _hoisted_64, toDisplayString(unref(t)("download.settingsPanel.fileFormatDesc")), 1), createBaseVNode("div", _hoisted_65, [createBaseVNode("div", _hoisted_66, [(openBlock(), createElementBlock(Fragment, null, renderList([{
                    label: "songArtist",
                    value: "{songName} - {artistName}"
                  }, {
                    label: "artistSong",
                    value: "{artistName} - {songName}"
                  }, {
                    label: "songOnly",
                    value: "{songName}"
                  }], preset => {
                    return createVNode(_component_n_button, {
                      key: preset.label,
                      size: "small",
                      type: downloadSettings.value.nameFormat === preset.value ? "primary" : "default",
                      onClick: $event => downloadSettings.value.nameFormat = preset.value
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(t)(`download.settingsPanel.presets.${preset.label}`)), 1)]),
                      _: 2
                    }, 1032, ["type", "onClick"]);
                  }), 64))]), createBaseVNode("div", null, [createBaseVNode("p", _hoisted_67, toDisplayString(unref(t)("download.settingsPanel.separator")), 1), createBaseVNode("div", _hoisted_68, [(openBlock(), createElementBlock(Fragment, null, renderList([" - ", "_", " "], sep => {
                    return createVNode(_component_n_button, {
                      key: sep,
                      size: "small",
                      type: downloadSettings.value.separator === sep ? "primary" : "default",
                      onClick: $event => downloadSettings.value.separator = sep
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(sep === " " ? "Space" : sep), 1)]),
                      _: 2
                    }, 1032, ["type", "onClick"]);
                  }), 64)), createVNode(_component_n_input, {
                    value: downloadSettings.value.separator,
                    "onUpdate:value": _cache[5] || (_cache[5] = $event => downloadSettings.value.separator = $event),
                    size: "small",
                    class: "w-20"
                  }, null, 8, ["value"])])]), createBaseVNode("div", null, [createBaseVNode("p", _hoisted_69, toDisplayString(unref(t)("download.settingsPanel.dragToArrange")), 1), createBaseVNode("div", _hoisted_70, [(openBlock(true), createElementBlock(Fragment, null, renderList(formatComponents.value, (comp, idx) => {
                    return openBlock(), createElementBlock("div", {
                      key: comp.id,
                      class: "flex items-center justify-between p-2 bg-neutral-50 dark:bg-neutral-900 rounded-lg"
                    }, [createBaseVNode("span", _hoisted_71, toDisplayString(unref(t)(`download.settingsPanel.components.${comp.type}`)), 1), createBaseVNode("div", _hoisted_72, [createVNode(_component_n_button, {
                      quaternary: "",
                      circle: "",
                      size: "tiny",
                      disabled: idx === 0,
                      onClick: $event => handleMoveUp(idx)
                    }, {
                      default: withCtx(() => [...(_cache[19] || (_cache[19] = [createBaseVNode("i", {
                        class: "ri-arrow-up-s-line"
                      }, null, -1)]))]),
                      _: 1
                    }, 8, ["disabled", "onClick"]), createVNode(_component_n_button, {
                      quaternary: "",
                      circle: "",
                      size: "tiny",
                      disabled: idx === formatComponents.value.length - 1,
                      onClick: $event => handleMoveDown(idx)
                    }, {
                      default: withCtx(() => [...(_cache[20] || (_cache[20] = [createBaseVNode("i", {
                        class: "ri-arrow-down-s-line"
                      }, null, -1)]))]),
                      _: 1
                    }, 8, ["disabled", "onClick"]), createVNode(_component_n_button, {
                      quaternary: "",
                      circle: "",
                      size: "tiny",
                      disabled: formatComponents.value.length <= 1,
                      onClick: $event => removeFormatComponent(idx)
                    }, {
                      default: withCtx(() => [...(_cache[21] || (_cache[21] = [createBaseVNode("i", {
                        class: "ri-close-line"
                      }, null, -1)]))]),
                      _: 1
                    }, 8, ["disabled", "onClick"])])]);
                  }), 128)), createBaseVNode("div", _hoisted_73, [(openBlock(), createElementBlock(Fragment, null, renderList(["songName", "artistName", "albumName"], type => {
                    return createVNode(_component_n_button, {
                      key: type,
                      size: "tiny",
                      disabled: formatComponents.value.some(c => c.type === type),
                      onClick: $event => addFormatComponent(type)
                    }, {
                      default: withCtx(() => [createTextVNode(" + " + toDisplayString(unref(t)(`download.settingsPanel.components.${type}`)), 1)]),
                      _: 2
                    }, 1032, ["disabled", "onClick"]);
                  }), 64))])])]), createBaseVNode("div", _hoisted_74, [createBaseVNode("p", _hoisted_75, toDisplayString(unref(t)("download.settingsPanel.preview")), 1), createBaseVNode("p", _hoisted_76, toDisplayString(formatNamePreview.value), 1)])])])])]),
                  _: 1
                }, 8, ["title"])]),
                _: 1
              }, 8, ["show"])]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const DownloadPage = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-9b481727"]]));
      }
    };
  });
})();

;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, useI18n, useSettingsStore, marked, watch, checkUpdate, config, onMounted, openBlock, createBlock, createVNode, withCtx, createElementBlock, createBaseVNode, _imports_0, toDisplayString, unref, createTextVNode, createCommentVNode, Transition, Teleport, ref, computed, _export_sfc;
    return {
      setters: [module => {
        defineComponent = module.d;
        useI18n = module.a5;
        useSettingsStore = module.cH;
        marked = module.eM;
        watch = module.Y;
        checkUpdate = module.cK;
        config = module.cL;
        onMounted = module.aq;
        openBlock = module.a7;
        createBlock = module.aY;
        createVNode = module.ak;
        withCtx = module.as;
        createElementBlock = module.a8;
        createBaseVNode = module.ab;
        _imports_0 = module.eN;
        toDisplayString = module.ac;
        unref = module.ad;
        createTextVNode = module.b7;
        createCommentVNode = module.ah;
        Transition = module.T;
        Teleport = module.d4;
        ref = module.A;
        computed = module.z;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n/* 动画 */\n.update-modal-enter-active[data-v-633eb174],\n.update-modal-leave-active[data-v-633eb174] {\n  transition: opacity 0.3s ease;\n}\n.update-modal-enter-from[data-v-633eb174],\n.update-modal-leave-to[data-v-633eb174] {\n  opacity: 0;\n}\n.update-modal-enter-active .animate-slide-up[data-v-633eb174],\n.update-modal-leave-active .animate-slide-up[data-v-633eb174] {\n  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);\n}\n.update-modal-enter-from .animate-slide-up[data-v-633eb174] {\n  transform: translateY(100%);\n}\n.update-modal-leave-to .animate-slide-up[data-v-633eb174] {\n  transform: translateY(100%);\n}\n\n/* 更新内容样式 */\n[data-v-633eb174] h1 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n[data-v-633eb174] h2 {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n[data-v-633eb174] h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n}\n[data-v-633eb174] ul {\n  list-style-type: disc;\n  padding-left: 1.25rem;\n  margin-bottom: 0.75rem;\n}\n[data-v-633eb174] ol {\n  list-style-type: decimal;\n  padding-left: 1.25rem;\n  margin-bottom: 0.75rem;\n}\n[data-v-633eb174] li {\n  margin-bottom: 0.25rem;\n}\n[data-v-633eb174] p {\n  margin-bottom: 0.5rem;\n}\n[data-v-633eb174] code {\n  padding: 0.125rem 0.375rem;\n  border-radius: 0.25rem;\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 0.875rem;\n}\n[data-v-633eb174] a {\n  color: #22c55e;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1 = {
          key: 0,
          class: "fixed inset-0 z-[999999] flex items-end justify-center bg-black/50 backdrop-blur-sm"
        };
        const _hoisted_2 = {
          class: "w-full max-w-lg bg-white dark:bg-gray-900 rounded-t-3xl overflow-hidden animate-slide-up"
        };
        const _hoisted_3 = {
          class: "px-6 pb-5"
        };
        const _hoisted_4 = {
          class: "flex items-center gap-4"
        };
        const _hoisted_5 = {
          class: "flex-1 min-w-0"
        };
        const _hoisted_6 = {
          class: "flex items-center gap-2 mb-2"
        };
        const _hoisted_7 = {
          class: "px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
        };
        const _hoisted_8 = {
          class: "text-2xl font-bold text-gray-900 dark:text-white truncate"
        };
        const _hoisted_9 = {
          class: "text-sm text-gray-500 dark:text-gray-400 mt-1"
        };
        const _hoisted_10 = {
          class: "mx-6 mb-6 max-h-80 overflow-y-auto rounded-2xl bg-gray-50 dark:bg-gray-800/50"
        };
        const _hoisted_11 = ["innerHTML"];
        const _hoisted_12 = {
          class: "px-6 pb-8 flex gap-3",
          style: {
            paddingBottom: `calc(32px + var(--safe-area-inset-bottom, 0px))`
          }
        };
        const _hoisted_13 = {
          class: "flex items-center justify-center gap-2"
        };
        const REMIND_LATER_KEY = "update_remind_later_timestamp";
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "MobileUpdateModal",
          setup(__props) {
            const {
              t
            } = useI18n();
            const settingsStore = useSettingsStore();
            marked.setOptions({
              breaks: true,
              gfm: true
            });
            const showModal = ref(false);
            const updateInfo = ref({
              hasUpdate: false,
              latestVersion: "",
              currentVersion: config.version,
              releaseInfo: null
            });
            const parsedReleaseNotes = computed(() => {
              if (!updateInfo.value.releaseInfo?.body) return "";
              try {
                return marked.parse(updateInfo.value.releaseInfo.body);
              } catch (error) {
                console.error("Error parsing markdown:", error);
                return updateInfo.value.releaseInfo.body;
              }
            });
            const shouldShowReminder = () => {
              const remindLaterTime = localStorage.getItem(REMIND_LATER_KEY);
              if (!remindLaterTime) return true;
              const savedTime = parseInt(remindLaterTime, 10);
              const now = Date.now();
              const oneDayInMs = 24 * 60 * 60 * 1e3;
              return now - savedTime >= oneDayInMs;
            };
            const handleLater = () => {
              localStorage.setItem(REMIND_LATER_KEY, Date.now().toString());
              showModal.value = false;
            };
            const closeModal = () => {
              showModal.value = false;
            };
            const checkForUpdates = async () => {
              if (!shouldShowReminder()) {
                console.log("更新提醒被延迟，等待24小时后再提醒");
                return;
              }
              try {
                const result = await checkUpdate(config.version);
                if (result && result.hasUpdate) {
                  updateInfo.value = result;
                  showModal.value = true;
                }
              } catch (error) {
                console.error("检查更新失败:", error);
              }
            };
            const handleUpdate = async () => {
              localStorage.removeItem(REMIND_LATER_KEY);
              window.open("https://donate.alger.fun/", "_blank");
              closeModal();
            };
            watch(() => settingsStore.showUpdateModal, async show => {
              if (show) {
                settingsStore.setShowUpdateModal(false);
                try {
                  const result = await checkUpdate(config.version);
                  if (result && result.hasUpdate) {
                    updateInfo.value = result;
                    showModal.value = true;
                  }
                } catch (error) {
                  console.error("手动检查更新失败:", error);
                }
              }
            });
            onMounted(() => {
              setTimeout(() => {
                checkForUpdates();
              }, 2e3);
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Teleport, {
                to: "body"
              }, [createVNode(Transition, {
                name: "update-modal"
              }, {
                default: withCtx(() => [showModal.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [_cache[2] || (_cache[2] = createBaseVNode("div", {
                  class: "h-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600"
                }, null, -1)), _cache[3] || (_cache[3] = createBaseVNode("div", {
                  class: "flex justify-center pt-3 pb-2"
                }, [createBaseVNode("div", {
                  class: "w-10 h-1 rounded-full bg-gray-300 dark:bg-gray-700"
                })], -1)), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [_cache[0] || (_cache[0] = createBaseVNode("div", {
                  class: "w-20 h-20 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 ring-2 ring-green-500/20"
                }, [createBaseVNode("img", {
                  src: _imports_0,
                  alt: "App Icon",
                  class: "w-full h-full object-cover"
                })], -1)), createBaseVNode("div", _hoisted_5, [createBaseVNode("div", _hoisted_6, [createBaseVNode("span", _hoisted_7, toDisplayString(unref(t)("comp.update.title")), 1)]), createBaseVNode("h2", _hoisted_8, " v" + toDisplayString(updateInfo.value.latestVersion), 1), createBaseVNode("p", _hoisted_9, toDisplayString(unref(t)("comp.update.currentVersion")) + ": v" + toDisplayString(updateInfo.value.currentVersion), 1)])])]), createBaseVNode("div", _hoisted_10, [createBaseVNode("div", {
                  class: "p-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed",
                  innerHTML: parsedReleaseNotes.value
                }, null, 8, _hoisted_11)]), createBaseVNode("div", _hoisted_12, [createBaseVNode("button", {
                  onClick: handleLater,
                  class: "flex-1 py-4 px-4 rounded-2xl text-base font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-[0.98] transition-all duration-200"
                }, toDisplayString(unref(t)("comp.update.noThanks")), 1), createBaseVNode("button", {
                  onClick: handleUpdate,
                  class: "flex-1 py-4 px-4 rounded-2xl text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-green-500/25"
                }, [createBaseVNode("span", _hoisted_13, [_cache[1] || (_cache[1] = createBaseVNode("i", {
                  class: "ri-download-2-line text-lg"
                }, null, -1)), createTextVNode(" " + toDisplayString(unref(t)("comp.update.nowUpdate")), 1)])])])])])) : createCommentVNode("", true)]),
                _: 1
              })]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const MobileUpdateModal = exports("default", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-633eb174"]]));
      }
    };
  });
})();

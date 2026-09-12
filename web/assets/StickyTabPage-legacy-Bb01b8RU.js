;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, createElementBlock, createVNode, unref, Scrollbar, withCtx, createBaseVNode, Fragment, renderList, withModifiers, ref, openBlock, normalizeStyle, normalizeClass, toDisplayString, computed, setAnimationDelay, createCommentVNode, renderSlot, _export_sfc;
    return {
      setters: [module => {
        defineComponent = module.d;
        createElementBlock = module.a8;
        createVNode = module.ak;
        unref = module.ad;
        Scrollbar = module.be;
        withCtx = module.as;
        createBaseVNode = module.ab;
        Fragment = module.ae;
        renderList = module.af;
        withModifiers = module.a9;
        ref = module.A;
        openBlock = module.a7;
        normalizeStyle = module.ag;
        normalizeClass = module.aa;
        toDisplayString = module.ac;
        computed = module.z;
        setAnimationDelay = module.bp;
        createCommentVNode = module.ah;
        renderSlot = module.bq;
        _export_sfc = module.ap;
      }],
      execute: function () {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n.sticky-tabs[data-v-9449b931] {\n  background: inherit;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        const _hoisted_1$1 = {
          class: "border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-black z-10"
        };
        const _hoisted_2$1 = ["onClick"];
        const _sfc_main$1 = /* @__PURE__ */defineComponent({
          __name: "CategorySelector",
          props: {
            categories: {},
            modelValue: {},
            labelKey: {
              default: "label"
            },
            valueKey: {
              default: "value"
            },
            animationClass: {
              default: "animate__bounceIn"
            }
          },
          emits: ["update:modelValue", "change"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const scrollbarRef = ref();
            const getItemKey = (item, index) => {
              if (typeof item === "object" && item !== null) {
                return item[props.valueKey] ?? item[props.labelKey] ?? index;
              }
              return item;
            };
            const getItemLabel = item => {
              if (typeof item === "object" && item !== null) {
                return item[props.labelKey] ?? String(item);
              }
              return String(item);
            };
            const getItemValue = item => {
              if (typeof item === "object" && item !== null) {
                return item[props.valueKey] ?? item;
              }
              return item;
            };
            const isActive = item => {
              const itemValue = getItemValue(item);
              return itemValue === props.modelValue;
            };
            const getAnimationDelay = computed(() => {
              return index => setAnimationDelay(index, 30);
            });
            const handleClickCategory = item => {
              const value = getItemValue(item);
              if (value === props.modelValue) return;
              emit("change", value);
            };
            const handleWheel = e => {
              const scrollbar = scrollbarRef.value;
              if (scrollbar) {
                const delta = e.deltaY || e.detail;
                scrollbar.scrollBy({
                  left: delta
                });
              }
            };
            __expose({
              scrollbarRef
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(Scrollbar), {
                ref_key: "scrollbarRef",
                ref: scrollbarRef,
                "x-scrollable": ""
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: "flex items-center py-4 page-padding",
                  style: {
                    "white-space": "nowrap"
                  },
                  onWheel: withModifiers(handleWheel, ["prevent"])
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.categories, (category, index) => {
                  return openBlock(), createElementBlock("span", {
                    key: getItemKey(category, index),
                    class: normalizeClass(["py-1.5 px-4 mr-3 inline-block rounded-full cursor-pointer transition-all duration-300 text-sm font-medium bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white", [__props.animationClass, index === 0 ? "ml-0.5" : "", isActive(category) ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105" : ""]]),
                    style: normalizeStyle(getAnimationDelay.value(index)),
                    onClick: $event => handleClickCategory(category)
                  }, toDisplayString(getItemLabel(category)), 15, _hoisted_2$1);
                }), 128))], 32)]),
                _: 1
              }, 512)]);
            };
          }
        });
        const _hoisted_1 = {
          class: "h-full w-full bg-white transition-colors duration-500 dark:bg-black"
        };
        const _hoisted_2 = {
          class: "w-full pb-32"
        };
        const _hoisted_3 = {
          class: "mb-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl dark:text-white"
        };
        const _hoisted_4 = {
          key: 0,
          class: "text-neutral-500 dark:text-neutral-400"
        };
        const _hoisted_5 = {
          class: "page-padding pt-4"
        };
        const _sfc_main = /* @__PURE__ */defineComponent({
          __name: "StickyTabPage",
          props: {
            title: {},
            description: {},
            modelValue: {},
            categories: {},
            labelKey: {
              default: "label"
            },
            valueKey: {
              default: "value"
            }
          },
          emits: ["change", "scroll"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const emit = __emit;
            const scrollbarRef = ref();
            const headerRef = ref();
            const isSticky = ref(false);
            const handleScroll = e => {
              if (headerRef.value) {
                const headerBottom = headerRef.value.offsetTop + headerRef.value.offsetHeight;
                isSticky.value = e.target.scrollTop >= headerBottom;
              }
              emit("scroll", e);
            };
            const scrollTo = options => {
              scrollbarRef.value?.scrollTo(options);
            };
            __expose({
              scrollbarRef,
              scrollTo
            });
            return (_ctx, _cache) => {
              const _component_n_scrollbar = Scrollbar;
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_n_scrollbar, {
                ref_key: "scrollbarRef",
                ref: scrollbarRef,
                class: "h-full",
                size: 100,
                onScroll: handleScroll
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_2, [createBaseVNode("div", {
                  ref_key: "headerRef",
                  ref: headerRef,
                  class: "page-padding pt-6 pb-2"
                }, [createBaseVNode("h1", _hoisted_3, toDisplayString(__props.title), 1), __props.description ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(__props.description), 1)) : createCommentVNode("", true)], 512), createBaseVNode("div", {
                  class: normalizeClass(["sticky-tabs z-10 transition-shadow duration-200", isSticky.value ? "sticky top-0 shadow-sm" : ""])
                }, [createVNode(_sfc_main$1, {
                  "model-value": __props.modelValue,
                  categories: __props.categories,
                  "label-key": __props.labelKey,
                  "value-key": __props.valueKey,
                  onChange: _cache[0] || (_cache[0] = val => emit("change", val))
                }, null, 8, ["model-value", "categories", "label-key", "value-key"])], 2), createBaseVNode("div", _hoisted_5, [renderSlot(_ctx.$slots, "default", {}, void 0, true)])])]),
                _: 3
              }, 512)]);
            };
          }
        });

        /* unplugin-vue-components disabled */

        const StickyTabPage = exports("S", /* @__PURE__ */_export_sfc(_sfc_main, [["__scopeId", "data-v-9449b931"]]));
      }
    };
  });
})();

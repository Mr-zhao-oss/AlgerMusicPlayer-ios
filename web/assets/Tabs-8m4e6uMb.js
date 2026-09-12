import { d as defineComponent, h, bX as useSsrAdapter, bY as cssrAnchorMetaName, A as ref, bZ as c, dv as isSymbol, dW as isObject, dX as root, D as createInjectionKey, cj as mergeProps, ae as Fragment, c2 as NBaseIcon, b$ as render, ck as NBaseClose, E as inject, z as computed, dY as omit, c as cB, g as cM, a as c$1, b as cE, f as cNotM, cx as flatten, c3 as resolveWrappedSlot, dG as VResizeObserver, u as useConfig, U as useTheme, X as useMergedState, Y as watch, aq as onMounted, dZ as onFontsReady, F as watchEffect, Z as useThemeClass, ct as useCompitable, ca as depx, P as withDirectives, a6 as vShow, d_ as TransitionGroup, d$ as cloneVNode, e0 as tabsLight, a2 as nextTick, a4 as createKey, cb as getMargin, p as provide, a3 as toRef, a0 as call } from "./index-BMNXZoHW.js";
import { A as AddIcon } from "./Add-CaNEP7Ig.js";
const styles = c(".v-x-scroll", {
  overflow: "auto",
  scrollbarWidth: "none"
}, [
  c("&::-webkit-scrollbar", {
    width: 0,
    height: 0
  })
]);
const VXScroll = defineComponent({
  name: "XScroll",
  props: {
    disabled: Boolean,
    onScroll: Function
  },
  setup() {
    const selfRef = ref(null);
    function handleWheel(e) {
      const preventYWheel = e.currentTarget.offsetWidth < e.currentTarget.scrollWidth;
      if (!preventYWheel || e.deltaY === 0)
        return;
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/x-scroll",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    const exposedMethods = {
      scrollTo(...args) {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(...args);
      }
    };
    return Object.assign({
      selfRef,
      handleWheel
    }, exposedMethods);
  },
  render() {
    return h("div", {
      ref: "selfRef",
      onScroll: this.onScroll,
      onWheel: this.disabled ? void 0 : this.handleWheel,
      class: "v-x-scroll"
    }, this.$slots);
  }
});
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle$1(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const tabsInjectionKey = createInjectionKey("n-tabs");
const tabPaneProps = {
  tab: [String, Number, Object, Function],
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean,
  displayDirective: {
    type: String,
    default: "if"
  },
  closable: {
    type: Boolean,
    default: void 0
  },
  tabProps: Object,
  /** @deprecated */
  label: [String, Number, Object, Function]
};
const tabProps = Object.assign({
  internalLeftPadded: Boolean,
  internalAddable: Boolean,
  internalCreatedByPane: Boolean
}, omit(tabPaneProps, ["displayDirective"]));
const __unplugin_components_2 = defineComponent({
  __TAB__: true,
  inheritAttrs: false,
  name: "Tab",
  props: tabProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      valueRef,
      typeRef,
      closableRef,
      tabStyleRef,
      addTabStyleRef,
      tabClassRef,
      addTabClassRef,
      tabChangeIdRef,
      onBeforeLeaveRef,
      triggerRef,
      handleAdd,
      activateTab,
      handleClose
    } = inject(tabsInjectionKey);
    return {
      trigger: triggerRef,
      mergedClosable: computed(() => {
        if (props.internalAddable) return false;
        const {
          closable
        } = props;
        if (closable === void 0) return closableRef.value;
        return closable;
      }),
      style: tabStyleRef,
      addStyle: addTabStyleRef,
      tabClass: tabClassRef,
      addTabClass: addTabClassRef,
      clsPrefix: mergedClsPrefixRef,
      value: valueRef,
      type: typeRef,
      handleClose(e) {
        e.stopPropagation();
        if (props.disabled) return;
        handleClose(props.name);
      },
      activateTab() {
        if (props.disabled) return;
        if (props.internalAddable) {
          handleAdd();
          return;
        }
        const {
          name: nameProp
        } = props;
        const id = ++tabChangeIdRef.id;
        if (nameProp !== valueRef.value) {
          const {
            value: onBeforeLeave
          } = onBeforeLeaveRef;
          if (!onBeforeLeave) {
            activateTab(nameProp);
          } else {
            void Promise.resolve(onBeforeLeave(props.name, valueRef.value)).then((allowLeave) => {
              if (allowLeave && tabChangeIdRef.id === id) {
                activateTab(nameProp);
              }
            });
          }
        }
      }
    };
  },
  render() {
    const {
      internalAddable,
      clsPrefix,
      name,
      disabled,
      label,
      tab,
      value,
      mergedClosable,
      trigger,
      $slots: {
        default: defaultSlot
      }
    } = this;
    const mergedTab = label !== null && label !== void 0 ? label : tab;
    return h("div", {
      class: "".concat(clsPrefix, "-tabs-tab-wrapper")
    }, this.internalLeftPadded ? h("div", {
      class: "".concat(clsPrefix, "-tabs-tab-pad")
    }) : null, h("div", Object.assign({
      key: name,
      "data-name": name,
      "data-disabled": disabled ? true : void 0
    }, mergeProps({
      class: ["".concat(clsPrefix, "-tabs-tab"), value === name && "".concat(clsPrefix, "-tabs-tab--active"), disabled && "".concat(clsPrefix, "-tabs-tab--disabled"), mergedClosable && "".concat(clsPrefix, "-tabs-tab--closable"), internalAddable && "".concat(clsPrefix, "-tabs-tab--addable"), internalAddable ? this.addTabClass : this.tabClass],
      onClick: trigger === "click" ? this.activateTab : void 0,
      onMouseenter: trigger === "hover" ? this.activateTab : void 0,
      style: internalAddable ? this.addStyle : this.style
    }, this.internalCreatedByPane ? this.tabProps || {} : this.$attrs)), h("span", {
      class: "".concat(clsPrefix, "-tabs-tab__label")
    }, internalAddable ? h(Fragment, null, h("div", {
      class: "".concat(clsPrefix, "-tabs-tab__height-placeholder")
    }, " "), h(NBaseIcon, {
      clsPrefix
    }, {
      default: () => h(AddIcon, null)
    })) : defaultSlot ? defaultSlot() : typeof mergedTab === "object" ? mergedTab : render(mergedTab !== null && mergedTab !== void 0 ? mergedTab : name)), mergedClosable && this.type === "card" ? h(NBaseClose, {
      clsPrefix,
      class: "".concat(clsPrefix, "-tabs-tab__close"),
      onClick: this.handleClose,
      disabled
    }) : null));
  }
});
const style = cB("tabs", "\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n", [cM("segment-type", [cB("tabs-rail", [c$1("&.transition-disabled", [cB("tabs-capsule", "\n transition: none;\n ")])])]), cM("top", [cB("tab-pane", "\n padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);\n ")]), cM("left", [cB("tab-pane", "\n padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);\n ")]), cM("left, right", "\n flex-direction: row;\n ", [cB("tabs-bar", "\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "), cB("tabs-tab", "\n padding: var(--n-tab-padding-vertical); \n ")]), cM("right", "\n flex-direction: row-reverse;\n ", [cB("tab-pane", "\n padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);\n "), cB("tabs-bar", "\n left: 0;\n ")]), cM("bottom", "\n flex-direction: column-reverse;\n justify-content: flex-end;\n ", [cB("tab-pane", "\n padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);\n "), cB("tabs-bar", "\n top: 0;\n ")]), cB("tabs-rail", "\n position: relative;\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ", [cB("tabs-capsule", "\n border-radius: var(--n-tab-border-radius);\n position: absolute;\n pointer-events: none;\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n transition: transform 0.3s var(--n-bezier);\n "), cB("tabs-tab-wrapper", "\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ", [cB("tabs-tab", "\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ", [cM("active", "\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n "), c$1("&:hover", "\n color: var(--n-tab-text-color-hover);\n ")])])]), cM("flex", [cB("tabs-nav", "\n width: 100%;\n position: relative;\n ", [cB("tabs-wrapper", "\n width: 100%;\n ", [cB("tabs-tab", "\n margin-right: 0;\n ")])])]), cB("tabs-nav", "\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ", [cE("prefix, suffix", "\n display: flex;\n align-items: center;\n "), cE("prefix", "padding-right: 16px;"), cE("suffix", "padding-left: 16px;")]), cM("top, bottom", [c$1(">", [cB("tabs-nav", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", "\n top: 0;\n bottom: 0;\n left: 0;\n width: 20px;\n "), c$1("&::after", "\n top: 0;\n bottom: 0;\n right: 0;\n width: 20px;\n "), cM("shadow-start", [c$1("&::before", "\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]), cM("shadow-end", [c$1("&::after", "\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")])])])])]), cM("left, right", [cB("tabs-nav-scroll-content", "\n flex-direction: column;\n "), c$1(">", [cB("tabs-nav", [cB("tabs-nav-scroll-wrapper", [c$1("&::before", "\n top: 0;\n left: 0;\n right: 0;\n height: 20px;\n "), c$1("&::after", "\n bottom: 0;\n left: 0;\n right: 0;\n height: 20px;\n "), cM("shadow-start", [c$1("&::before", "\n box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);\n ")]), cM("shadow-end", [c$1("&::after", "\n box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);\n ")])])])])]), cB("tabs-nav-scroll-wrapper", "\n flex: 1;\n position: relative;\n overflow: hidden;\n ", [cB("tabs-nav-y-scroll", "\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ", [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", "\n width: 0;\n height: 0;\n display: none;\n ")]), c$1("&::before, &::after", '\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n z-index: 1;\n ')]), cB("tabs-nav-scroll-content", "\n display: flex;\n position: relative;\n min-width: 100%;\n min-height: 100%;\n width: fit-content;\n box-sizing: border-box;\n "), cB("tabs-wrapper", "\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "), cB("tabs-tab-wrapper", "\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "), cB("tabs-tab", "\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ", [cM("disabled", {
  cursor: "not-allowed"
}), cE("close", "\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "), cE("label", "\n display: flex;\n align-items: center;\n z-index: 1;\n ")]), cB("tabs-bar", "\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n opacity .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ", [c$1("&.transition-disabled", "\n transition: none;\n "), cM("disabled", "\n background-color: var(--n-tab-text-color-disabled)\n ")]), cB("tabs-pane-wrapper", "\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "), cB("tab-pane", "\n color: var(--n-pane-text-color);\n width: 100%;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ", [c$1("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active", "\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "), c$1("&.next-transition-leave-active, &.prev-transition-leave-active", "\n position: absolute;\n "), c$1("&.next-transition-enter-from, &.prev-transition-leave-to", "\n transform: translateX(32px);\n opacity: 0;\n "), c$1("&.next-transition-leave-to, &.prev-transition-enter-from", "\n transform: translateX(-32px);\n opacity: 0;\n "), c$1("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to", "\n transform: translateX(0);\n opacity: 1;\n ")]), cB("tabs-tab-pad", "\n box-sizing: border-box;\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "), cM("line-type, bar-type", [cB("tabs-tab", "\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ", [c$1("&:hover", {
  color: "var(--n-tab-text-color-hover)"
}), cM("active", "\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "), cM("disabled", {
  color: "var(--n-tab-text-color-disabled)"
})])]), cB("tabs-nav", [cM("line-type", [cM("top", [cE("prefix, suffix", "\n border-bottom: 1px solid var(--n-tab-border-color);\n "), cB("tabs-nav-scroll-content", "\n border-bottom: 1px solid var(--n-tab-border-color);\n "), cB("tabs-bar", "\n bottom: -1px;\n ")]), cM("left", [cE("prefix, suffix", "\n border-right: 1px solid var(--n-tab-border-color);\n "), cB("tabs-nav-scroll-content", "\n border-right: 1px solid var(--n-tab-border-color);\n "), cB("tabs-bar", "\n right: -1px;\n ")]), cM("right", [cE("prefix, suffix", "\n border-left: 1px solid var(--n-tab-border-color);\n "), cB("tabs-nav-scroll-content", "\n border-left: 1px solid var(--n-tab-border-color);\n "), cB("tabs-bar", "\n left: -1px;\n ")]), cM("bottom", [cE("prefix, suffix", "\n border-top: 1px solid var(--n-tab-border-color);\n "), cB("tabs-nav-scroll-content", "\n border-top: 1px solid var(--n-tab-border-color);\n "), cB("tabs-bar", "\n top: -1px;\n ")]), cE("prefix, suffix", "\n transition: border-color .3s var(--n-bezier);\n "), cB("tabs-nav-scroll-content", "\n transition: border-color .3s var(--n-bezier);\n "), cB("tabs-bar", "\n border-radius: 0;\n ")]), cM("card-type", [cE("prefix, suffix", "\n transition: border-color .3s var(--n-bezier);\n "), cB("tabs-pad", "\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n "), cB("tabs-tab-pad", "\n transition: border-color .3s var(--n-bezier);\n "), cB("tabs-tab", "\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ", [cM("addable", "\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n justify-content: center;\n ", [cE("height-placeholder", "\n width: 0;\n font-size: var(--n-tab-font-size);\n "), cNotM("disabled", [c$1("&:hover", "\n color: var(--n-tab-text-color-hover);\n ")])]), cM("closable", "padding-right: 8px;"), cM("active", "\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "), cM("disabled", "color: var(--n-tab-text-color-disabled);")])]), cM("left, right", "\n flex-direction: column; \n ", [cE("prefix, suffix", "\n padding: var(--n-tab-padding-vertical);\n "), cB("tabs-wrapper", "\n flex-direction: column;\n "), cB("tabs-tab-wrapper", "\n flex-direction: column;\n ", [cB("tabs-tab-pad", "\n height: var(--n-tab-gap-vertical);\n width: 100%;\n ")])]), cM("top", [cM("card-type", [cB("tabs-scroll-padding", "border-bottom: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", "\n border-bottom: 1px solid var(--n-tab-border-color);\n "), cB("tabs-tab", "\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n ", [cM("active", "\n border-bottom: 1px solid #0000;\n ")]), cB("tabs-tab-pad", "\n border-bottom: 1px solid var(--n-tab-border-color);\n "), cB("tabs-pad", "\n border-bottom: 1px solid var(--n-tab-border-color);\n ")])]), cM("left", [cM("card-type", [cB("tabs-scroll-padding", "border-right: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", "\n border-right: 1px solid var(--n-tab-border-color);\n "), cB("tabs-tab", "\n border-top-left-radius: var(--n-tab-border-radius);\n border-bottom-left-radius: var(--n-tab-border-radius);\n ", [cM("active", "\n border-right: 1px solid #0000;\n ")]), cB("tabs-tab-pad", "\n border-right: 1px solid var(--n-tab-border-color);\n "), cB("tabs-pad", "\n border-right: 1px solid var(--n-tab-border-color);\n ")])]), cM("right", [cM("card-type", [cB("tabs-scroll-padding", "border-left: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", "\n border-left: 1px solid var(--n-tab-border-color);\n "), cB("tabs-tab", "\n border-top-right-radius: var(--n-tab-border-radius);\n border-bottom-right-radius: var(--n-tab-border-radius);\n ", [cM("active", "\n border-left: 1px solid #0000;\n ")]), cB("tabs-tab-pad", "\n border-left: 1px solid var(--n-tab-border-color);\n "), cB("tabs-pad", "\n border-left: 1px solid var(--n-tab-border-color);\n ")])]), cM("bottom", [cM("card-type", [cB("tabs-scroll-padding", "border-top: 1px solid var(--n-tab-border-color);"), cE("prefix, suffix", "\n border-top: 1px solid var(--n-tab-border-color);\n "), cB("tabs-tab", "\n border-bottom-left-radius: var(--n-tab-border-radius);\n border-bottom-right-radius: var(--n-tab-border-radius);\n ", [cM("active", "\n border-top: 1px solid #0000;\n ")]), cB("tabs-tab-pad", "\n border-top: 1px solid var(--n-tab-border-color);\n "), cB("tabs-pad", "\n border-top: 1px solid var(--n-tab-border-color);\n ")])])])]);
const throttle = throttle$1;
const tabsProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  defaultValue: [String, Number],
  trigger: {
    type: String,
    default: "click"
  },
  type: {
    type: String,
    default: "bar"
  },
  closable: Boolean,
  justifyContent: String,
  size: {
    type: String,
    default: "medium"
  },
  placement: {
    type: String,
    default: "top"
  },
  tabStyle: [String, Object],
  tabClass: String,
  addTabStyle: [String, Object],
  addTabClass: String,
  barWidth: Number,
  paneClass: String,
  paneStyle: [String, Object],
  paneWrapperClass: String,
  paneWrapperStyle: [String, Object],
  addable: [Boolean, Object],
  tabsPadding: {
    type: Number,
    default: 0
  },
  animated: Boolean,
  onBeforeLeave: Function,
  onAdd: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onClose: [Function, Array],
  // deprecated
  labelSize: String,
  activeName: [String, Number],
  onActiveNameChange: [Function, Array]
});
const __unplugin_components_3 = defineComponent({
  name: "Tabs",
  props: tabsProps,
  slots: Object,
  setup(props, {
    slots
  }) {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Tabs", "-tabs", style, tabsLight, props, mergedClsPrefixRef);
    const tabsElRef = ref(null);
    const barElRef = ref(null);
    const scrollWrapperElRef = ref(null);
    const addTabInstRef = ref(null);
    const xScrollInstRef = ref(null);
    const yScrollElRef = ref(null);
    const startReachedRef = ref(true);
    const endReachedRef = ref(true);
    const compitableSizeRef = useCompitable(props, ["labelSize", "size"]);
    const compitableValueRef = useCompitable(props, ["activeName", "value"]);
    const uncontrolledValueRef = ref((_b = (_a = compitableValueRef.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : slots.default ? (_d = (_c = flatten(slots.default())[0]) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.name : null);
    const mergedValueRef = useMergedState(compitableValueRef, uncontrolledValueRef);
    const tabChangeIdRef = {
      id: 0
    };
    const tabWrapperStyleRef = computed(() => {
      if (!props.justifyContent || props.type === "card") return void 0;
      return {
        display: "flex",
        justifyContent: props.justifyContent
      };
    });
    watch(mergedValueRef, () => {
      tabChangeIdRef.id = 0;
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    function getCurrentEl() {
      var _a2;
      const {
        value
      } = mergedValueRef;
      if (value === null) return null;
      const tabEl = (_a2 = tabsElRef.value) === null || _a2 === void 0 ? void 0 : _a2.querySelector('[data-name="'.concat(value, '"]'));
      return tabEl;
    }
    function updateBarStyle(tabEl) {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const barIsHide = barEl.style.opacity === "0";
      if (tabEl) {
        const disabledClassName = "".concat(mergedClsPrefixRef.value, "-tabs-bar--disabled");
        const {
          barWidth,
          placement
        } = props;
        if (tabEl.dataset.disabled === "true") {
          barEl.classList.add(disabledClassName);
        } else {
          barEl.classList.remove(disabledClassName);
        }
        if (["top", "bottom"].includes(placement)) {
          clearBarStyle(["top", "maxHeight", "height"]);
          if (typeof barWidth === "number" && tabEl.offsetWidth >= barWidth) {
            const offsetDiffLeft = Math.floor((tabEl.offsetWidth - barWidth) / 2) + tabEl.offsetLeft;
            barEl.style.left = "".concat(offsetDiffLeft, "px");
            barEl.style.maxWidth = "".concat(barWidth, "px");
          } else {
            barEl.style.left = "".concat(tabEl.offsetLeft, "px");
            barEl.style.maxWidth = "".concat(tabEl.offsetWidth, "px");
          }
          barEl.style.width = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetWidth;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        } else {
          clearBarStyle(["left", "maxWidth", "width"]);
          if (typeof barWidth === "number" && tabEl.offsetHeight >= barWidth) {
            const offsetDiffTop = Math.floor((tabEl.offsetHeight - barWidth) / 2) + tabEl.offsetTop;
            barEl.style.top = "".concat(offsetDiffTop, "px");
            barEl.style.maxHeight = "".concat(barWidth, "px");
          } else {
            barEl.style.top = "".concat(tabEl.offsetTop, "px");
            barEl.style.maxHeight = "".concat(tabEl.offsetHeight, "px");
          }
          barEl.style.height = "8192px";
          if (barIsHide) {
            barEl.style.transition = "none";
          }
          void barEl.offsetHeight;
          if (barIsHide) {
            barEl.style.transition = "";
            barEl.style.opacity = "1";
          }
        }
      }
    }
    function hideBarStyle() {
      if (props.type === "card") return;
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      barEl.style.opacity = "0";
    }
    function clearBarStyle(styleProps) {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      for (const prop of styleProps) {
        barEl.style[prop] = "";
      }
    }
    function updateCurrentBarStyle() {
      if (props.type === "card") return;
      const tabEl = getCurrentEl();
      if (tabEl) {
        updateBarStyle(tabEl);
      } else {
        hideBarStyle();
      }
    }
    function updateCurrentScrollPosition() {
      var _a2;
      const scrollWrapperEl = (_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el;
      if (!scrollWrapperEl) return;
      const tabEl = getCurrentEl();
      if (!tabEl) return;
      const {
        scrollLeft: scrollWrapperElScrollLeft,
        offsetWidth: scrollWrapperElOffsetWidth
      } = scrollWrapperEl;
      const {
        offsetLeft: tabElOffsetLeft,
        offsetWidth: tabElOffsetWidth
      } = tabEl;
      if (scrollWrapperElScrollLeft > tabElOffsetLeft) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft,
          behavior: "smooth"
        });
      } else if (tabElOffsetLeft + tabElOffsetWidth > scrollWrapperElScrollLeft + scrollWrapperElOffsetWidth) {
        scrollWrapperEl.scrollTo({
          top: 0,
          left: tabElOffsetLeft + tabElOffsetWidth - scrollWrapperElOffsetWidth,
          behavior: "smooth"
        });
      }
    }
    const tabsPaneWrapperRef = ref(null);
    let fromHeight = 0;
    let hangingTransition = null;
    function onAnimationBeforeLeave(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        fromHeight = el.getBoundingClientRect().height;
        const fromHeightPx = "".concat(fromHeight, "px");
        const applyFromStyle = () => {
          tabsPaneWrapperEl.style.height = fromHeightPx;
          tabsPaneWrapperEl.style.maxHeight = fromHeightPx;
        };
        if (!hangingTransition) {
          hangingTransition = applyFromStyle;
        } else {
          applyFromStyle();
          hangingTransition();
          hangingTransition = null;
        }
      }
    }
    function onAnimationEnter(el) {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        const targetHeight = el.getBoundingClientRect().height;
        const applyTargetStyle = () => {
          void document.body.offsetHeight;
          tabsPaneWrapperEl.style.maxHeight = "".concat(targetHeight, "px");
          tabsPaneWrapperEl.style.height = "".concat(Math.max(fromHeight, targetHeight), "px");
        };
        if (!hangingTransition) {
          hangingTransition = applyTargetStyle;
        } else {
          hangingTransition();
          hangingTransition = null;
          applyTargetStyle();
        }
      }
    }
    function onAnimationAfterEnter() {
      const tabsPaneWrapperEl = tabsPaneWrapperRef.value;
      if (tabsPaneWrapperEl) {
        tabsPaneWrapperEl.style.maxHeight = "";
        tabsPaneWrapperEl.style.height = "";
        const {
          paneWrapperStyle
        } = props;
        if (typeof paneWrapperStyle === "string") {
          tabsPaneWrapperEl.style.cssText = paneWrapperStyle;
        } else if (paneWrapperStyle) {
          const {
            maxHeight,
            height
          } = paneWrapperStyle;
          if (maxHeight !== void 0) {
            tabsPaneWrapperEl.style.maxHeight = maxHeight;
          }
          if (height !== void 0) {
            tabsPaneWrapperEl.style.height = height;
          }
        }
      }
    }
    const renderNameListRef = {
      value: []
    };
    const animationDirectionRef = ref("next");
    function activateTab(panelName) {
      const currentValue = mergedValueRef.value;
      let dir = "next";
      for (const name of renderNameListRef.value) {
        if (name === currentValue) {
          break;
        }
        if (name === panelName) {
          dir = "prev";
          break;
        }
      }
      animationDirectionRef.value = dir;
      doUpdateValue(panelName);
    }
    function doUpdateValue(panelName) {
      const {
        onActiveNameChange,
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onActiveNameChange) {
        call(onActiveNameChange, panelName);
      }
      if (onUpdateValue) call(onUpdateValue, panelName);
      if (_onUpdateValue) call(_onUpdateValue, panelName);
      uncontrolledValueRef.value = panelName;
    }
    function handleClose(panelName) {
      const {
        onClose
      } = props;
      if (onClose) call(onClose, panelName);
    }
    function updateBarPositionInstantly() {
      const {
        value: barEl
      } = barElRef;
      if (!barEl) return;
      const disableTransitionClassName = "transition-disabled";
      barEl.classList.add(disableTransitionClassName);
      updateCurrentBarStyle();
      barEl.classList.remove(disableTransitionClassName);
    }
    const segmentCapsuleElRef = ref(null);
    function updateSegmentPosition({
      transitionDisabled
    }) {
      const tabsEl = tabsElRef.value;
      if (!tabsEl) return;
      if (transitionDisabled) tabsEl.classList.add("transition-disabled");
      const activeTabEl = getCurrentEl();
      if (activeTabEl && segmentCapsuleElRef.value) {
        segmentCapsuleElRef.value.style.width = "".concat(activeTabEl.offsetWidth, "px");
        segmentCapsuleElRef.value.style.height = "".concat(activeTabEl.offsetHeight, "px");
        segmentCapsuleElRef.value.style.transform = "translateX(".concat(activeTabEl.offsetLeft - depx(getComputedStyle(tabsEl).paddingLeft), "px)");
        if (transitionDisabled) {
          void segmentCapsuleElRef.value.offsetWidth;
        }
      }
      if (transitionDisabled) {
        tabsEl.classList.remove("transition-disabled");
      }
    }
    watch([mergedValueRef], () => {
      if (props.type === "segment") {
        void nextTick(() => {
          updateSegmentPosition({
            transitionDisabled: false
          });
        });
      }
    });
    onMounted(() => {
      if (props.type === "segment") {
        updateSegmentPosition({
          transitionDisabled: true
        });
      }
    });
    let memorizedWidth = 0;
    function _handleNavResize(entry) {
      var _b2;
      if (entry.contentRect.width === 0 && entry.contentRect.height === 0) {
        return;
      }
      if (memorizedWidth === entry.contentRect.width) {
        return;
      }
      memorizedWidth = entry.contentRect.width;
      const {
        type
      } = props;
      if (type === "line" || type === "bar") {
        {
          updateBarPositionInstantly();
        }
      }
      if (type !== "segment") {
        const {
          placement
        } = props;
        deriveScrollShadow((placement === "top" || placement === "bottom" ? (_b2 = xScrollInstRef.value) === null || _b2 === void 0 ? void 0 : _b2.$el : yScrollElRef.value) || null);
      }
    }
    const handleNavResize = throttle(_handleNavResize, 64);
    watch([() => props.justifyContent, () => props.size], () => {
      void nextTick(() => {
        const {
          type
        } = props;
        if (type === "line" || type === "bar") {
          updateBarPositionInstantly();
        }
      });
    });
    const addTabFixedRef = ref(false);
    function _handleTabsResize(entry) {
      var _a2;
      const {
        target,
        contentRect: {
          width,
          height
        }
      } = entry;
      const containerWidth = target.parentElement.parentElement.offsetWidth;
      const containerHeight = target.parentElement.parentElement.offsetHeight;
      const {
        placement
      } = props;
      if (!addTabFixedRef.value) {
        if (placement === "top" || placement === "bottom") {
          if (containerWidth < width) {
            addTabFixedRef.value = true;
          }
        } else {
          if (containerHeight < height) {
            addTabFixedRef.value = true;
          }
        }
      } else {
        const {
          value: addTabInst
        } = addTabInstRef;
        if (!addTabInst) return;
        if (placement === "top" || placement === "bottom") {
          if (containerWidth - width > addTabInst.$el.offsetWidth) {
            addTabFixedRef.value = false;
          }
        } else {
          if (containerHeight - height > addTabInst.$el.offsetHeight) {
            addTabFixedRef.value = false;
          }
        }
      }
      deriveScrollShadow(((_a2 = xScrollInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el) || null);
    }
    const handleTabsResize = throttle(_handleTabsResize, 64);
    function handleAdd() {
      const {
        onAdd
      } = props;
      if (onAdd) onAdd();
      void nextTick(() => {
        const currentEl = getCurrentEl();
        const {
          value: xScrollInst
        } = xScrollInstRef;
        if (!currentEl || !xScrollInst) return;
        xScrollInst.scrollTo({
          left: currentEl.offsetLeft,
          top: 0,
          behavior: "smooth"
        });
      });
    }
    function deriveScrollShadow(el) {
      if (!el) return;
      const {
        placement
      } = props;
      if (placement === "top" || placement === "bottom") {
        const {
          scrollLeft,
          scrollWidth,
          offsetWidth
        } = el;
        startReachedRef.value = scrollLeft <= 0;
        endReachedRef.value = scrollLeft + offsetWidth >= scrollWidth;
      } else {
        const {
          scrollTop,
          scrollHeight,
          offsetHeight
        } = el;
        startReachedRef.value = scrollTop <= 0;
        endReachedRef.value = scrollTop + offsetHeight >= scrollHeight;
      }
    }
    const handleScroll = throttle((e) => {
      deriveScrollShadow(e.target);
    }, 64);
    provide(tabsInjectionKey, {
      triggerRef: toRef(props, "trigger"),
      tabStyleRef: toRef(props, "tabStyle"),
      tabClassRef: toRef(props, "tabClass"),
      addTabStyleRef: toRef(props, "addTabStyle"),
      addTabClassRef: toRef(props, "addTabClass"),
      paneClassRef: toRef(props, "paneClass"),
      paneStyleRef: toRef(props, "paneStyle"),
      mergedClsPrefixRef,
      typeRef: toRef(props, "type"),
      closableRef: toRef(props, "closable"),
      valueRef: mergedValueRef,
      tabChangeIdRef,
      onBeforeLeaveRef: toRef(props, "onBeforeLeave"),
      activateTab,
      handleClose,
      handleAdd
    });
    onFontsReady(() => {
      updateCurrentBarStyle();
      updateCurrentScrollPosition();
    });
    watchEffect(() => {
      const {
        value: el
      } = scrollWrapperElRef;
      if (!el) return;
      const {
        value: clsPrefix
      } = mergedClsPrefixRef;
      const shadowStartClass = "".concat(clsPrefix, "-tabs-nav-scroll-wrapper--shadow-start");
      const shadowEndClass = "".concat(clsPrefix, "-tabs-nav-scroll-wrapper--shadow-end");
      if (startReachedRef.value) {
        el.classList.remove(shadowStartClass);
      } else {
        el.classList.add(shadowStartClass);
      }
      if (endReachedRef.value) {
        el.classList.remove(shadowEndClass);
      } else {
        el.classList.add(shadowEndClass);
      }
    });
    const exposedMethods = {
      syncBarPosition: () => {
        updateCurrentBarStyle();
      }
    };
    const handleSegmentResize = () => {
      updateSegmentPosition({
        transitionDisabled: true
      });
    };
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = compitableSizeRef;
      const {
        type
      } = props;
      const typeSuffix = {
        card: "Card",
        bar: "Bar",
        line: "Line",
        segment: "Segment"
      }[type];
      const sizeType = "".concat(size).concat(typeSuffix);
      const {
        self: {
          barColor,
          closeIconColor,
          closeIconColorHover,
          closeIconColorPressed,
          tabColor,
          tabBorderColor,
          paneTextColor,
          tabFontWeight,
          tabBorderRadius,
          tabFontWeightActive,
          colorSegment,
          fontWeightStrong,
          tabColorSegment,
          closeSize,
          closeIconSize,
          closeColorHover,
          closeColorPressed,
          closeBorderRadius,
          [createKey("panePadding", size)]: panePadding,
          [createKey("tabPadding", sizeType)]: tabPadding,
          [createKey("tabPaddingVertical", sizeType)]: tabPaddingVertical,
          [createKey("tabGap", sizeType)]: tabGap,
          [createKey("tabGap", "".concat(sizeType, "Vertical"))]: tabGapVertical,
          [createKey("tabTextColor", type)]: tabTextColor,
          [createKey("tabTextColorActive", type)]: tabTextColorActive,
          [createKey("tabTextColorHover", type)]: tabTextColorHover,
          [createKey("tabTextColorDisabled", type)]: tabTextColorDisabled,
          [createKey("tabFontSize", size)]: tabFontSize
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color-segment": colorSegment,
        "--n-bar-color": barColor,
        "--n-tab-font-size": tabFontSize,
        "--n-tab-text-color": tabTextColor,
        "--n-tab-text-color-active": tabTextColorActive,
        "--n-tab-text-color-disabled": tabTextColorDisabled,
        "--n-tab-text-color-hover": tabTextColorHover,
        "--n-pane-text-color": paneTextColor,
        "--n-tab-border-color": tabBorderColor,
        "--n-tab-border-radius": tabBorderRadius,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-tab-color": tabColor,
        "--n-tab-font-weight": tabFontWeight,
        "--n-tab-font-weight-active": tabFontWeightActive,
        "--n-tab-padding": tabPadding,
        "--n-tab-padding-vertical": tabPaddingVertical,
        "--n-tab-gap": tabGap,
        "--n-tab-gap-vertical": tabGapVertical,
        "--n-pane-padding-left": getMargin(panePadding, "left"),
        "--n-pane-padding-right": getMargin(panePadding, "right"),
        "--n-pane-padding-top": getMargin(panePadding, "top"),
        "--n-pane-padding-bottom": getMargin(panePadding, "bottom"),
        "--n-font-weight-strong": fontWeightStrong,
        "--n-tab-color-segment": tabColorSegment
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tabs", computed(() => {
      return "".concat(compitableSizeRef.value[0]).concat(props.type[0]);
    }), cssVarsRef, props) : void 0;
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      renderedNames: /* @__PURE__ */ new Set(),
      segmentCapsuleElRef,
      tabsPaneWrapperRef,
      tabsElRef,
      barElRef,
      addTabInstRef,
      xScrollInstRef,
      scrollWrapperElRef,
      addTabFixed: addTabFixedRef,
      tabWrapperStyle: tabWrapperStyleRef,
      handleNavResize,
      mergedSize: compitableSizeRef,
      handleScroll,
      handleTabsResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      animationDirection: animationDirectionRef,
      renderNameListRef,
      yScrollElRef,
      handleSegmentResize,
      onAnimationBeforeLeave,
      onAnimationEnter,
      onAnimationAfterEnter,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedMethods);
  },
  render() {
    const {
      mergedClsPrefix,
      type,
      placement,
      addTabFixed,
      addable,
      mergedSize,
      renderNameListRef,
      onRender,
      paneWrapperClass,
      paneWrapperStyle,
      $slots: {
        default: defaultSlot,
        prefix: prefixSlot,
        suffix: suffixSlot
      }
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const tabPaneChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB_PANE__ === true;
    }) : [];
    const tabChildren = defaultSlot ? flatten(defaultSlot()).filter((v) => {
      return v.type.__TAB__ === true;
    }) : [];
    const showPane = !tabChildren.length;
    const isCard = type === "card";
    const isSegment = type === "segment";
    const mergedJustifyContent = !isCard && !isSegment && this.justifyContent;
    renderNameListRef.value = [];
    const scrollContent = () => {
      const tabs = h("div", {
        style: this.tabWrapperStyle,
        class: "".concat(mergedClsPrefix, "-tabs-wrapper")
      }, mergedJustifyContent ? null : h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-scroll-padding"),
        style: placement === "top" || placement === "bottom" ? {
          width: "".concat(this.tabsPadding, "px")
        } : {
          height: "".concat(this.tabsPadding, "px")
        }
      }), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return justifyTabDynamicProps(h(__unplugin_components_2, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0 && (!mergedJustifyContent || mergedJustifyContent === "center" || mergedJustifyContent === "start" || mergedJustifyContent === "end")
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0));
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index !== 0 && !mergedJustifyContent) {
          return justifyTabDynamicProps(createLeftPaddedTabVNode(tabVNode));
        } else {
          return justifyTabDynamicProps(tabVNode);
        }
      }), !addTabFixed && addable && isCard ? createAddTag(addable, (showPane ? tabPaneChildren.length : tabChildren.length) !== 0) : null, mergedJustifyContent ? null : h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-scroll-padding"),
        style: {
          width: "".concat(this.tabsPadding, "px")
        }
      }));
      return h("div", {
        ref: "tabsElRef",
        class: "".concat(mergedClsPrefix, "-tabs-nav-scroll-content")
      }, isCard && addable ? h(VResizeObserver, {
        onResize: this.handleTabsResize
      }, {
        default: () => tabs
      }) : tabs, isCard ? h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-pad")
      }) : null, isCard ? null : h("div", {
        ref: "barElRef",
        class: "".concat(mergedClsPrefix, "-tabs-bar")
      }));
    };
    const resolvedPlacement = isSegment ? "top" : placement;
    return h("div", {
      class: ["".concat(mergedClsPrefix, "-tabs"), this.themeClass, "".concat(mergedClsPrefix, "-tabs--").concat(type, "-type"), "".concat(mergedClsPrefix, "-tabs--").concat(mergedSize, "-size"), mergedJustifyContent && "".concat(mergedClsPrefix, "-tabs--flex"), "".concat(mergedClsPrefix, "-tabs--").concat(resolvedPlacement)],
      style: this.cssVars
    }, h("div", {
      class: [
        // the class should be applied here since it's possible
        // to make tabs nested in tabs, style may influence each
        // other. adding a class will make it easy to write the
        // style.
        "".concat(mergedClsPrefix, "-tabs-nav--").concat(type, "-type"),
        "".concat(mergedClsPrefix, "-tabs-nav--").concat(resolvedPlacement),
        "".concat(mergedClsPrefix, "-tabs-nav")
      ]
    }, resolveWrappedSlot(prefixSlot, (children) => children && h("div", {
      class: "".concat(mergedClsPrefix, "-tabs-nav__prefix")
    }, children)), isSegment ? h(VResizeObserver, {
      onResize: this.handleSegmentResize
    }, {
      default: () => h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-rail"),
        ref: "tabsElRef"
      }, h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-capsule"),
        ref: "segmentCapsuleElRef"
      }, h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-wrapper")
      }, h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-tab")
      }))), showPane ? tabPaneChildren.map((tabPaneVNode, index) => {
        renderNameListRef.value.push(tabPaneVNode.props.name);
        return h(__unplugin_components_2, Object.assign({}, tabPaneVNode.props, {
          internalCreatedByPane: true,
          internalLeftPadded: index !== 0
        }), tabPaneVNode.children ? {
          default: tabPaneVNode.children.tab
        } : void 0);
      }) : tabChildren.map((tabVNode, index) => {
        renderNameListRef.value.push(tabVNode.props.name);
        if (index === 0) {
          return tabVNode;
        } else {
          return createLeftPaddedTabVNode(tabVNode);
        }
      }))
    }) : h(VResizeObserver, {
      onResize: this.handleNavResize
    }, {
      default: () => h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-nav-scroll-wrapper"),
        ref: "scrollWrapperElRef"
      }, ["top", "bottom"].includes(resolvedPlacement) ? h(VXScroll, {
        ref: "xScrollInstRef",
        onScroll: this.handleScroll
      }, {
        default: scrollContent
      }) : h("div", {
        class: "".concat(mergedClsPrefix, "-tabs-nav-y-scroll"),
        onScroll: this.handleScroll,
        ref: "yScrollElRef"
      }, scrollContent()))
    }), addTabFixed && addable && isCard ? createAddTag(addable, true) : null, resolveWrappedSlot(suffixSlot, (children) => children && h("div", {
      class: "".concat(mergedClsPrefix, "-tabs-nav__suffix")
    }, children))), showPane && (this.animated && (resolvedPlacement === "top" || resolvedPlacement === "bottom") ? h("div", {
      ref: "tabsPaneWrapperRef",
      style: paneWrapperStyle,
      class: ["".concat(mergedClsPrefix, "-tabs-pane-wrapper"), paneWrapperClass]
    }, filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames, this.onAnimationBeforeLeave, this.onAnimationEnter, this.onAnimationAfterEnter, this.animationDirection)) : filterMapTabPanes(tabPaneChildren, this.mergedValue, this.renderedNames)));
  }
});
function filterMapTabPanes(tabPaneVNodes, value, renderedNames, onBeforeLeave, onEnter, onAfterEnter, animationDirection) {
  const children = [];
  tabPaneVNodes.forEach((vNode) => {
    const {
      name,
      displayDirective,
      "display-directive": _displayDirective
    } = vNode.props;
    const matchDisplayDirective = (directive) => displayDirective === directive || _displayDirective === directive;
    const show = value === name;
    if (vNode.key !== void 0) {
      vNode.key = name;
    }
    if (show || matchDisplayDirective("show") || matchDisplayDirective("show:lazy") && renderedNames.has(name)) {
      if (!renderedNames.has(name)) {
        renderedNames.add(name);
      }
      const useVShow = !matchDisplayDirective("if");
      children.push(useVShow ? withDirectives(vNode, [[vShow, show]]) : vNode);
    }
  });
  if (!animationDirection) {
    return children;
  }
  return h(TransitionGroup, {
    name: "".concat(animationDirection, "-transition"),
    onBeforeLeave,
    onEnter,
    onAfterEnter
  }, {
    default: () => children
  });
}
function createAddTag(addable, internalLeftPadded) {
  return h(__unplugin_components_2, {
    ref: "addTabInstRef",
    key: "__addable",
    name: "__addable",
    internalCreatedByPane: true,
    internalAddable: true,
    internalLeftPadded,
    disabled: typeof addable === "object" && addable.disabled
  });
}
function createLeftPaddedTabVNode(tabVNode) {
  const modifiedVNode = cloneVNode(tabVNode);
  if (modifiedVNode.props) {
    modifiedVNode.props.internalLeftPadded = true;
  } else {
    modifiedVNode.props = {
      internalLeftPadded: true
    };
  }
  return modifiedVNode;
}
function justifyTabDynamicProps(tabVNode) {
  if (Array.isArray(tabVNode.dynamicProps)) {
    if (!tabVNode.dynamicProps.includes("internalLeftPadded")) {
      tabVNode.dynamicProps.push("internalLeftPadded");
    }
  } else {
    tabVNode.dynamicProps = ["internalLeftPadded"];
  }
  return tabVNode;
}
export {
  __unplugin_components_2 as _,
  __unplugin_components_3 as a
};

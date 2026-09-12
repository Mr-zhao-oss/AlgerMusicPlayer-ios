;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var computed, throttleFilter, tryOnScopeDispose, isClient, toValue, increaseWithUnit, watchEffect, noop, watch, ref, onMounted, getCurrentInstance, isObject, timestamp, createFilterWrapper, reactive, tryOnMounted;
    return {
      setters: [module => {
        computed = module.z;
        throttleFilter = module.dK;
        tryOnScopeDispose = module.dL;
        isClient = module.dM;
        toValue = module.dN;
        increaseWithUnit = module.dO;
        watchEffect = module.F;
        noop = module.dP;
        watch = module.Y;
        ref = module.A;
        onMounted = module.aq;
        getCurrentInstance = module.bW;
        isObject = module.dQ;
        timestamp = module.dR;
        createFilterWrapper = module.dS;
        reactive = module.a_;
        tryOnMounted = module.dT;
      }],
      execute: function () {
        exports({
          a: useIdle,
          b: useFullscreen,
          d: useWindowSize,
          e: useSwipe,
          u: useBreakpoints
        });
        const defaultWindow = isClient ? window : void 0;
        const defaultDocument = isClient ? window.document : void 0;
        function unrefElement(elRef) {
          var _a;
          const plain = toValue(elRef);
          return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
        }
        function useEventListener(...args) {
          let target;
          let events2;
          let listeners;
          let options;
          if (typeof args[0] === "string" || Array.isArray(args[0])) {
            [events2, listeners, options] = args;
            target = defaultWindow;
          } else {
            [target, events2, listeners, options] = args;
          }
          if (!target) return noop;
          if (!Array.isArray(events2)) events2 = [events2];
          if (!Array.isArray(listeners)) listeners = [listeners];
          const cleanups = [];
          const cleanup = () => {
            cleanups.forEach(fn => fn());
            cleanups.length = 0;
          };
          const register = (el, event, listener, options2) => {
            el.addEventListener(event, listener, options2);
            return () => el.removeEventListener(event, listener, options2);
          };
          const stopWatch = watch(() => [unrefElement(target), toValue(options)], ([el, options2]) => {
            cleanup();
            if (!el) return;
            const optionsClone = isObject(options2) ? {
              ...options2
            } : options2;
            cleanups.push(...events2.flatMap(event => {
              return listeners.map(listener => register(el, event, listener, optionsClone));
            }));
          }, {
            immediate: true,
            flush: "post"
          });
          const stop = () => {
            stopWatch();
            cleanup();
          };
          tryOnScopeDispose(stop);
          return stop;
        }
        function useMounted() {
          const isMounted = ref(false);
          const instance = getCurrentInstance();
          if (instance) {
            onMounted(() => {
              isMounted.value = true;
            }, instance);
          }
          return isMounted;
        }
        function useSupported(callback) {
          const isMounted = useMounted();
          return computed(() => {
            isMounted.value;
            return Boolean(callback());
          });
        }
        function useMediaQuery(query, options = {}) {
          const {
            window: window2 = defaultWindow
          } = options;
          const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
          let mediaQuery;
          const matches = ref(false);
          const handler = event => {
            matches.value = event.matches;
          };
          const cleanup = () => {
            if (!mediaQuery) return;
            if ("removeEventListener" in mediaQuery) mediaQuery.removeEventListener("change", handler);else mediaQuery.removeListener(handler);
          };
          const stopWatch = watchEffect(() => {
            if (!isSupported.value) return;
            cleanup();
            mediaQuery = window2.matchMedia(toValue(query));
            if ("addEventListener" in mediaQuery) mediaQuery.addEventListener("change", handler);else mediaQuery.addListener(handler);
            matches.value = mediaQuery.matches;
          });
          tryOnScopeDispose(() => {
            stopWatch();
            cleanup();
            mediaQuery = void 0;
          });
          return matches;
        }
        const breakpointsTailwind = exports("c", {
          "sm": 640,
          "md": 768,
          "lg": 1024,
          "xl": 1280,
          "2xl": 1536
        });
        function useBreakpoints(breakpoints, options = {}) {
          function getValue2(k, delta) {
            let v = toValue(breakpoints[toValue(k)]);
            if (delta != null) v = increaseWithUnit(v, delta);
            if (typeof v === "number") v = `${v}px`;
            return v;
          }
          const {
            window: window2 = defaultWindow,
            strategy = "min-width"
          } = options;
          function match(query) {
            if (!window2) return false;
            return window2.matchMedia(query).matches;
          }
          const greaterOrEqual = k => {
            return useMediaQuery(() => `(min-width: ${getValue2(k)})`, options);
          };
          const smallerOrEqual = k => {
            return useMediaQuery(() => `(max-width: ${getValue2(k)})`, options);
          };
          const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
            Object.defineProperty(shortcuts, k, {
              get: () => strategy === "min-width" ? greaterOrEqual(k) : smallerOrEqual(k),
              enumerable: true,
              configurable: true
            });
            return shortcuts;
          }, {});
          function current() {
            const points = Object.keys(breakpoints).map(i => [i, greaterOrEqual(i)]);
            return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
          }
          return Object.assign(shortcutMethods, {
            greaterOrEqual,
            smallerOrEqual,
            greater(k) {
              return useMediaQuery(() => `(min-width: ${getValue2(k, 0.1)})`, options);
            },
            smaller(k) {
              return useMediaQuery(() => `(max-width: ${getValue2(k, -0.1)})`, options);
            },
            between(a, b) {
              return useMediaQuery(() => `(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`, options);
            },
            isGreater(k) {
              return match(`(min-width: ${getValue2(k, 0.1)})`);
            },
            isGreaterOrEqual(k) {
              return match(`(min-width: ${getValue2(k)})`);
            },
            isSmaller(k) {
              return match(`(max-width: ${getValue2(k, -0.1)})`);
            },
            isSmallerOrEqual(k) {
              return match(`(max-width: ${getValue2(k)})`);
            },
            isInBetween(a, b) {
              return match(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`);
            },
            current,
            active() {
              const bps = current();
              return computed(() => bps.value.length === 0 ? "" : bps.value.at(-1));
            }
          });
        }
        const eventHandlers = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
        function useFullscreen(target, options = {}) {
          const {
            document: document2 = defaultDocument,
            autoExit = false
          } = options;
          const targetRef = computed(() => {
            var _a;
            return (_a = unrefElement(target)) != null ? _a : document2 == null ? void 0 : document2.querySelector("html");
          });
          const isFullscreen = ref(false);
          const requestMethod = computed(() => {
            return ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find(m => document2 && m in document2 || targetRef.value && m in targetRef.value);
          });
          const exitMethod = computed(() => {
            return ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find(m => document2 && m in document2 || targetRef.value && m in targetRef.value);
          });
          const fullscreenEnabled = computed(() => {
            return ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find(m => document2 && m in document2 || targetRef.value && m in targetRef.value);
          });
          const fullscreenElementMethod = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find(m => document2 && m in document2);
          const isSupported = useSupported(() => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0);
          const isCurrentElementFullScreen = () => {
            if (fullscreenElementMethod) return (document2 == null ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
            return false;
          };
          const isElementFullScreen = () => {
            if (fullscreenEnabled.value) {
              if (document2 && document2[fullscreenEnabled.value] != null) {
                return document2[fullscreenEnabled.value];
              } else {
                const target2 = targetRef.value;
                if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
                  return Boolean(target2[fullscreenEnabled.value]);
                }
              }
            }
            return false;
          };
          async function exit() {
            if (!isSupported.value || !isFullscreen.value) return;
            if (exitMethod.value) {
              if ((document2 == null ? void 0 : document2[exitMethod.value]) != null) {
                await document2[exitMethod.value]();
              } else {
                const target2 = targetRef.value;
                if ((target2 == null ? void 0 : target2[exitMethod.value]) != null) await target2[exitMethod.value]();
              }
            }
            isFullscreen.value = false;
          }
          async function enter() {
            if (!isSupported.value || isFullscreen.value) return;
            if (isElementFullScreen()) await exit();
            const target2 = targetRef.value;
            if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
              await target2[requestMethod.value]();
              isFullscreen.value = true;
            }
          }
          async function toggle() {
            await (isFullscreen.value ? exit() : enter());
          }
          const handlerCallback = () => {
            const isElementFullScreenValue = isElementFullScreen();
            if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen()) isFullscreen.value = isElementFullScreenValue;
          };
          useEventListener(document2, eventHandlers, handlerCallback, false);
          useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
          if (autoExit) tryOnScopeDispose(exit);
          return {
            isSupported,
            isFullscreen,
            enter,
            exit,
            toggle
          };
        }
        const defaultEvents$1 = ["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"];
        const oneMinute = 6e4;
        function useIdle(timeout = oneMinute, options = {}) {
          const {
            initialState = false,
            listenForVisibilityChange = true,
            events: events2 = defaultEvents$1,
            window: window2 = defaultWindow,
            eventFilter = throttleFilter(50)
          } = options;
          const idle = ref(initialState);
          const lastActive = ref(timestamp());
          let timer;
          const reset = () => {
            idle.value = false;
            clearTimeout(timer);
            timer = setTimeout(() => idle.value = true, timeout);
          };
          const onEvent = createFilterWrapper(eventFilter, () => {
            lastActive.value = timestamp();
            reset();
          });
          if (window2) {
            const document2 = window2.document;
            for (const event of events2) useEventListener(window2, event, onEvent, {
              passive: true
            });
            if (listenForVisibilityChange) {
              useEventListener(document2, "visibilitychange", () => {
                if (!document2.hidden) onEvent();
              });
            }
            reset();
          }
          return {
            idle,
            lastActive,
            reset
          };
        }
        function useSwipe(target, options = {}) {
          const {
            threshold = 50,
            onSwipe,
            onSwipeEnd,
            onSwipeStart,
            passive = true,
            window: window2 = defaultWindow
          } = options;
          const coordsStart = reactive({
            x: 0,
            y: 0
          });
          const coordsEnd = reactive({
            x: 0,
            y: 0
          });
          const diffX = computed(() => coordsStart.x - coordsEnd.x);
          const diffY = computed(() => coordsStart.y - coordsEnd.y);
          const {
            max,
            abs
          } = Math;
          const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
          const isSwiping = ref(false);
          const direction = computed(() => {
            if (!isThresholdExceeded.value) return "none";
            if (abs(diffX.value) > abs(diffY.value)) {
              return diffX.value > 0 ? "left" : "right";
            } else {
              return diffY.value > 0 ? "up" : "down";
            }
          });
          const getTouchEventCoords = e => [e.touches[0].clientX, e.touches[0].clientY];
          const updateCoordsStart = (x, y) => {
            coordsStart.x = x;
            coordsStart.y = y;
          };
          const updateCoordsEnd = (x, y) => {
            coordsEnd.x = x;
            coordsEnd.y = y;
          };
          let listenerOptions;
          const isPassiveEventSupported = checkPassiveEventSupport(window2 == null ? void 0 : window2.document);
          if (!passive) listenerOptions = isPassiveEventSupported ? {
            passive: false,
            capture: true
          } : {
            capture: true
          };else listenerOptions = isPassiveEventSupported ? {
            passive: true
          } : {
            capture: false
          };
          const onTouchEnd = e => {
            if (isSwiping.value) onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
            isSwiping.value = false;
          };
          const stops = [useEventListener(target, "touchstart", e => {
            if (e.touches.length !== 1) return;
            const [x, y] = getTouchEventCoords(e);
            updateCoordsStart(x, y);
            updateCoordsEnd(x, y);
            onSwipeStart == null ? void 0 : onSwipeStart(e);
          }, listenerOptions), useEventListener(target, "touchmove", e => {
            if (e.touches.length !== 1) return;
            const [x, y] = getTouchEventCoords(e);
            updateCoordsEnd(x, y);
            if (listenerOptions.capture && !listenerOptions.passive && Math.abs(diffX.value) > Math.abs(diffY.value)) e.preventDefault();
            if (!isSwiping.value && isThresholdExceeded.value) isSwiping.value = true;
            if (isSwiping.value) onSwipe == null ? void 0 : onSwipe(e);
          }, listenerOptions), useEventListener(target, ["touchend", "touchcancel"], onTouchEnd, listenerOptions)];
          const stop = () => stops.forEach(s => s());
          return {
            isPassiveEventSupported,
            isSwiping,
            direction,
            coordsStart,
            coordsEnd,
            lengthX: diffX,
            lengthY: diffY,
            stop
          };
        }
        function checkPassiveEventSupport(document2) {
          if (!document2) return false;
          let supportsPassive = false;
          const optionsBlock = {
            get passive() {
              supportsPassive = true;
              return false;
            }
          };
          document2.addEventListener("x", noop, optionsBlock);
          document2.removeEventListener("x", noop);
          return supportsPassive;
        }
        function useWindowSize(options = {}) {
          const {
            window: window2 = defaultWindow,
            initialWidth = Number.POSITIVE_INFINITY,
            initialHeight = Number.POSITIVE_INFINITY,
            listenOrientation = true,
            includeScrollbar = true,
            type = "inner"
          } = options;
          const width = ref(initialWidth);
          const height = ref(initialHeight);
          const update = () => {
            if (window2) {
              if (type === "outer") {
                width.value = window2.outerWidth;
                height.value = window2.outerHeight;
              } else if (includeScrollbar) {
                width.value = window2.innerWidth;
                height.value = window2.innerHeight;
              } else {
                width.value = window2.document.documentElement.clientWidth;
                height.value = window2.document.documentElement.clientHeight;
              }
            }
          };
          update();
          tryOnMounted(update);
          useEventListener("resize", update, {
            passive: true
          });
          if (listenOrientation) {
            const matches = useMediaQuery("(orientation: portrait)");
            watch(matches, () => update());
          }
          return {
            width,
            height
          };
        }
      }
    };
  });
})();

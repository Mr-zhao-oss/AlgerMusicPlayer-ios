;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js', './Input-legacy-D1FyU7q2.js', './Add-legacy-CnU6_mh8.js'], function (exports, module) {
    'use strict';

    var defineComponent, h, isBrowser, flatten, Comment, useConfig, useTheme, useRtl, computed, spaceLight, createKey, getGap, depx, c, cB, resolveWrappedSlot, useLocale, useFormItem, ref, useMergedState, useMemo, watch, resolveSlot, NBaseIcon, XButton, call, nextTick, on, inputNumberLight, rgba, toRef, useSettingsStore, __unplugin_components_0, AddIcon;
    return {
      setters: [module => {
        defineComponent = module.d;
        h = module.h;
        isBrowser = module.e1;
        flatten = module.cx;
        Comment = module.e2;
        useConfig = module.u;
        useTheme = module.U;
        useRtl = module.i;
        computed = module.z;
        spaceLight = module.e3;
        createKey = module.a4;
        getGap = module.e4;
        depx = module.ca;
        c = module.a;
        cB = module.c;
        resolveWrappedSlot = module.c3;
        useLocale = module.S;
        useFormItem = module.R;
        ref = module.A;
        useMergedState = module.X;
        useMemo = module.c1;
        watch = module.Y;
        resolveSlot = module.c6;
        NBaseIcon = module.c2;
        XButton = module.e5;
        call = module.a0;
        nextTick = module.a2;
        on = module.B;
        inputNumberLight = module.e6;
        rgba = module.r;
        toRef = module.a3;
        useSettingsStore = module.cH;
      }, module => {
        __unplugin_components_0 = module._;
      }, module => {
        AddIcon = module.A;
      }],
      execute: function () {
        exports("g", getSlot);
        function getSlot(instance, slotName = 'default', fallback = []) {
          const slots = instance.$slots;
          const slot = slots[slotName];
          if (slot === undefined) return fallback;
          return slot();
        }
        const RemoveIcon = defineComponent({
          name: 'Remove',
          render() {
            return h("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512"
            }, h("line", {
              x1: "400",
              y1: "256",
              x2: "112",
              y2: "256",
              style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
            }));
          }
        });
        let supportFlexGap;
        function ensureSupportFlexGap() {
          if (!isBrowser) return true;
          if (supportFlexGap === undefined) {
            // create flex container with row-gap set
            const flex = document.createElement('div');
            flex.style.display = 'flex';
            flex.style.flexDirection = 'column';
            flex.style.rowGap = '1px';
            // create two, elements inside it
            flex.appendChild(document.createElement('div'));
            flex.appendChild(document.createElement('div'));
            // append to the DOM (needed to obtain scrollHeight)
            document.body.appendChild(flex);
            const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
            document.body.removeChild(flex);
            return supportFlexGap = isSupported;
          }
          return supportFlexGap;
        }
        const spaceProps = Object.assign(Object.assign({}, useTheme.props), {
          align: String,
          justify: {
            type: String,
            default: 'start'
          },
          inline: Boolean,
          vertical: Boolean,
          reverse: Boolean,
          size: {
            type: [String, Number, Array],
            default: 'medium'
          },
          wrapItem: {
            type: Boolean,
            default: true
          },
          itemClass: String,
          itemStyle: [String, Object],
          wrap: {
            type: Boolean,
            default: true
          },
          // internal
          internalUseGap: {
            type: Boolean,
            default: undefined
          }
        });
        const __unplugin_components_2 = exports("a", defineComponent({
          name: 'Space',
          props: spaceProps,
          setup(props) {
            const {
              mergedClsPrefixRef,
              mergedRtlRef
            } = useConfig(props);
            const themeRef = useTheme('Space', '-space', undefined, spaceLight, props, mergedClsPrefixRef);
            const rtlEnabledRef = useRtl('Space', mergedRtlRef, mergedClsPrefixRef);
            return {
              useGap: ensureSupportFlexGap(),
              rtlEnabled: rtlEnabledRef,
              mergedClsPrefix: mergedClsPrefixRef,
              margin: computed(() => {
                const {
                  size
                } = props;
                if (Array.isArray(size)) {
                  return {
                    horizontal: size[0],
                    vertical: size[1]
                  };
                }
                if (typeof size === 'number') {
                  return {
                    horizontal: size,
                    vertical: size
                  };
                }
                const {
                  self: {
                    [createKey('gap', size)]: gap
                  }
                } = themeRef.value;
                const {
                  row,
                  col
                } = getGap(gap);
                return {
                  horizontal: depx(col),
                  vertical: depx(row)
                };
              })
            };
          },
          render() {
            const {
              vertical,
              reverse,
              align,
              inline,
              justify,
              itemClass,
              itemStyle,
              margin,
              wrap,
              mergedClsPrefix,
              rtlEnabled,
              useGap,
              wrapItem,
              internalUseGap
            } = this;
            const children = flatten(getSlot(this), false);
            if (!children.length) return null;
            const horizontalMargin = `${margin.horizontal}px`;
            const semiHorizontalMargin = `${margin.horizontal / 2}px`;
            const verticalMargin = `${margin.vertical}px`;
            const semiVerticalMargin = `${margin.vertical / 2}px`;
            const lastIndex = children.length - 1;
            const isJustifySpace = justify.startsWith('space-');
            return h("div", {
              role: "none",
              class: [`${mergedClsPrefix}-space`, rtlEnabled && `${mergedClsPrefix}-space--rtl`],
              style: {
                display: inline ? 'inline-flex' : 'flex',
                flexDirection: (() => {
                  if (vertical && !reverse) return 'column';
                  if (vertical && reverse) return 'column-reverse';
                  if (!vertical && reverse) return 'row-reverse';
                  /** (!vertical && !reverse) */else return 'row';
                })(),
                justifyContent: ['start', 'end'].includes(justify) ? `flex-${justify}` : justify,
                flexWrap: !wrap || vertical ? 'nowrap' : 'wrap',
                marginTop: useGap || vertical ? '' : `-${semiVerticalMargin}`,
                marginBottom: useGap || vertical ? '' : `-${semiVerticalMargin}`,
                alignItems: align,
                gap: useGap ? `${margin.vertical}px ${margin.horizontal}px` : ''
              }
            }, !wrapItem && (useGap || internalUseGap) ? children : children.map((child, index) => child.type === Comment ? child : h("div", {
              role: "none",
              class: itemClass,
              style: [itemStyle, {
                maxWidth: '100%'
              }, useGap ? '' : vertical ? {
                marginBottom: index !== lastIndex ? verticalMargin : ''
              } : rtlEnabled ? {
                marginLeft: isJustifySpace ? justify === 'space-between' && index === lastIndex ? '' : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : '',
                marginRight: isJustifySpace ? justify === 'space-between' && index === 0 ? '' : semiHorizontalMargin : '',
                paddingTop: semiVerticalMargin,
                paddingBottom: semiVerticalMargin
              } : {
                marginRight: isJustifySpace ? justify === 'space-between' && index === lastIndex ? '' : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : '',
                marginLeft: isJustifySpace ? justify === 'space-between' && index === 0 ? '' : semiHorizontalMargin : '',
                paddingTop: semiVerticalMargin,
                paddingBottom: semiVerticalMargin
              }]
            }, child)));
          }
        }));
        const style = c([cB('input-number-suffix', `
 display: inline-block;
 margin-right: 10px;
 `), cB('input-number-prefix', `
 display: inline-block;
 margin-left: 10px;
 `)]);

        // string => string (expected, not implemented)
        // string => number (legacy)
        function parse(value) {
          if (value === undefined || value === null || typeof value === 'string' && value.trim() === '') {
            return null;
          }
          return Number(value);
        }
        // This function is created for `update-value-on-input` prop. When the prop is
        // true, the input value will update the value and <input />'s value at the same
        // time. So we need to make user's content won't be replaced by its parsed value
        // in some certain cases. For example '0.' should be parsed and replaced by '0',
        // '-0' should be parsed and replaced by '0', since user may input '-0.1' after.
        function isWipValue(value) {
          return value.includes('.') && (/^(-)?\d+.*(\.|0)$/.test(value) || /^-?\d*$/.test(value)) || value === '-' || value === '-0';
        }
        // string => boolean (expected, not implemented)
        // number => boolean (legacy)
        function validator(value) {
          if (value === undefined || value === null) return true;
          if (Number.isNaN(value)) return false;
          return true;
        }
        // string => string (expected, not implemented)
        // number => string (legacy)
        function format(value, precision) {
          if (typeof value !== 'number') return '';
          return precision === undefined ? String(value) : value.toFixed(precision);
        }
        function parseNumber(number) {
          if (number === null) return null;
          if (typeof number === 'number') {
            return number;
          } else {
            const parsedNumber = Number(number);
            if (Number.isNaN(parsedNumber)) {
              return null;
            } else {
              return parsedNumber;
            }
          }
        }
        const HOLDING_CHANGE_THRESHOLD = 800;
        const HOLDING_CHANGE_INTERVAL = 100;
        const inputNumberProps = Object.assign(Object.assign({}, useTheme.props), {
          autofocus: Boolean,
          loading: {
            type: Boolean,
            default: void 0
          },
          placeholder: String,
          defaultValue: {
            type: Number,
            default: null
          },
          value: Number,
          step: {
            type: [Number, String],
            default: 1
          },
          min: [Number, String],
          max: [Number, String],
          size: String,
          disabled: {
            type: Boolean,
            default: void 0
          },
          validator: Function,
          bordered: {
            type: Boolean,
            default: void 0
          },
          showButton: {
            type: Boolean,
            default: true
          },
          buttonPlacement: {
            type: String,
            default: "right"
          },
          inputProps: Object,
          readonly: Boolean,
          clearable: Boolean,
          keyboard: {
            type: Object,
            default: {}
          },
          updateValueOnInput: {
            type: Boolean,
            default: true
          },
          round: {
            type: Boolean,
            default: void 0
          },
          parse: Function,
          format: Function,
          precision: Number,
          status: String,
          "onUpdate:value": [Function, Array],
          onUpdateValue: [Function, Array],
          onFocus: [Function, Array],
          onBlur: [Function, Array],
          onClear: [Function, Array],
          // deprecated
          onChange: [Function, Array]
        });
        const __unplugin_components_1 = exports("_", defineComponent({
          name: "InputNumber",
          props: inputNumberProps,
          slots: Object,
          setup(props) {
            const {
              mergedBorderedRef,
              mergedClsPrefixRef,
              mergedRtlRef
            } = useConfig(props);
            const themeRef = useTheme("InputNumber", "-input-number", style, inputNumberLight, props, mergedClsPrefixRef);
            const {
              localeRef
            } = useLocale("InputNumber");
            const formItem = useFormItem(props);
            const {
              mergedSizeRef,
              mergedDisabledRef,
              mergedStatusRef
            } = formItem;
            const inputInstRef = ref(null);
            const minusButtonInstRef = ref(null);
            const addButtonInstRef = ref(null);
            const uncontrolledValueRef = ref(props.defaultValue);
            const controlledValueRef = toRef(props, "value");
            const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
            const displayedValueRef = ref("");
            const getPrecision = value => {
              const fraction = String(value).split(".")[1];
              return fraction ? fraction.length : 0;
            };
            const getMaxPrecision = currentValue => {
              const precisions = [props.min, props.max, props.step, currentValue].map(value => {
                if (value === void 0) return 0;
                return getPrecision(value);
              });
              return Math.max(...precisions);
            };
            const mergedPlaceholderRef = useMemo(() => {
              const {
                placeholder
              } = props;
              if (placeholder !== void 0) return placeholder;
              return localeRef.value.placeholder;
            });
            const mergedStepRef = useMemo(() => {
              const parsedNumber = parseNumber(props.step);
              if (parsedNumber !== null) {
                return parsedNumber === 0 ? 1 : Math.abs(parsedNumber);
              }
              return 1;
            });
            const mergedMinRef = useMemo(() => {
              const parsedNumber = parseNumber(props.min);
              if (parsedNumber !== null) return parsedNumber;else return null;
            });
            const mergedMaxRef = useMemo(() => {
              const parsedNumber = parseNumber(props.max);
              if (parsedNumber !== null) return parsedNumber;else return null;
            });
            const deriveDisplayedValueFromValue = () => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (validator(mergedValue)) {
                const {
                  format: formatProp,
                  precision
                } = props;
                if (formatProp) {
                  displayedValueRef.value = formatProp(mergedValue);
                } else {
                  if (mergedValue === null || precision === void 0 || getPrecision(mergedValue) > precision) {
                    displayedValueRef.value = format(mergedValue, void 0);
                  } else {
                    displayedValueRef.value = format(mergedValue, precision);
                  }
                }
              } else {
                displayedValueRef.value = String(mergedValue);
              }
            };
            deriveDisplayedValueFromValue();
            const doUpdateValue = value => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (value === mergedValue) {
                deriveDisplayedValueFromValue();
                return;
              }
              const {
                "onUpdate:value": _onUpdateValue,
                onUpdateValue,
                onChange
              } = props;
              const {
                nTriggerFormInput,
                nTriggerFormChange
              } = formItem;
              if (onChange) call(onChange, value);
              if (onUpdateValue) call(onUpdateValue, value);
              if (_onUpdateValue) call(_onUpdateValue, value);
              uncontrolledValueRef.value = value;
              nTriggerFormInput();
              nTriggerFormChange();
            };
            const deriveValueFromDisplayedValue = ({
              offset,
              doUpdateIfValid,
              fixPrecision,
              isInputing
            }) => {
              const {
                value: displayedValue
              } = displayedValueRef;
              if (isInputing && isWipValue(displayedValue)) {
                return false;
              }
              const parsedValue = (props.parse || parse)(displayedValue);
              if (parsedValue === null) {
                if (doUpdateIfValid) doUpdateValue(null);
                return null;
              }
              if (validator(parsedValue)) {
                const currentPrecision = getPrecision(parsedValue);
                const {
                  precision
                } = props;
                if (precision !== void 0 && precision < currentPrecision && !fixPrecision) {
                  return false;
                }
                let nextValue = Number.parseFloat((parsedValue + offset).toFixed(precision !== null && precision !== void 0 ? precision : getMaxPrecision(parsedValue)));
                if (validator(nextValue)) {
                  const {
                    value: mergedMax
                  } = mergedMaxRef;
                  const {
                    value: mergedMin
                  } = mergedMinRef;
                  if (mergedMax !== null && nextValue > mergedMax) {
                    if (!doUpdateIfValid || isInputing) return false;
                    nextValue = mergedMax;
                  }
                  if (mergedMin !== null && nextValue < mergedMin) {
                    if (!doUpdateIfValid || isInputing) return false;
                    nextValue = mergedMin;
                  }
                  if (props.validator && !props.validator(nextValue)) return false;
                  if (doUpdateIfValid) doUpdateValue(nextValue);
                  return nextValue;
                }
              }
              return false;
            };
            const displayedValueInvalidRef = useMemo(() => {
              const derivedValue = deriveValueFromDisplayedValue({
                offset: 0,
                doUpdateIfValid: false,
                isInputing: false,
                fixPrecision: false
              });
              return derivedValue === false;
            });
            const minusableRef = useMemo(() => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (props.validator && mergedValue === null) {
                return false;
              }
              const {
                value: mergedStep
              } = mergedStepRef;
              const derivedNextValue = deriveValueFromDisplayedValue({
                offset: -mergedStep,
                doUpdateIfValid: false,
                isInputing: false,
                fixPrecision: false
              });
              return derivedNextValue !== false;
            });
            const addableRef = useMemo(() => {
              const {
                value: mergedValue
              } = mergedValueRef;
              if (props.validator && mergedValue === null) {
                return false;
              }
              const {
                value: mergedStep
              } = mergedStepRef;
              const derivedNextValue = deriveValueFromDisplayedValue({
                offset: +mergedStep,
                doUpdateIfValid: false,
                isInputing: false,
                fixPrecision: false
              });
              return derivedNextValue !== false;
            });
            function doFocus(e) {
              const {
                onFocus
              } = props;
              const {
                nTriggerFormFocus
              } = formItem;
              if (onFocus) call(onFocus, e);
              nTriggerFormFocus();
            }
            function doBlur(e) {
              var _a, _b;
              if (e.target === ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)) {
                return;
              }
              const value = deriveValueFromDisplayedValue({
                offset: 0,
                doUpdateIfValid: true,
                isInputing: false,
                fixPrecision: true
              });
              if (value !== false) {
                const inputElRef = (_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.inputElRef;
                if (inputElRef) {
                  inputElRef.value = String(value || "");
                }
                if (mergedValueRef.value === value) {
                  deriveDisplayedValueFromValue();
                }
              } else {
                deriveDisplayedValueFromValue();
              }
              const {
                onBlur
              } = props;
              const {
                nTriggerFormBlur
              } = formItem;
              if (onBlur) call(onBlur, e);
              nTriggerFormBlur();
              void nextTick(() => {
                deriveDisplayedValueFromValue();
              });
            }
            function doClear(e) {
              const {
                onClear
              } = props;
              if (onClear) call(onClear, e);
            }
            function doAdd() {
              const {
                value: addable
              } = addableRef;
              if (!addable) {
                clearAddHoldTimeout();
                return;
              }
              const {
                value: mergedValue
              } = mergedValueRef;
              if (mergedValue === null) {
                if (!props.validator) {
                  doUpdateValue(createValidValue());
                }
              } else {
                const {
                  value: mergedStep
                } = mergedStepRef;
                deriveValueFromDisplayedValue({
                  offset: mergedStep,
                  doUpdateIfValid: true,
                  isInputing: false,
                  fixPrecision: true
                });
              }
            }
            function doMinus() {
              const {
                value: minusable
              } = minusableRef;
              if (!minusable) {
                clearMinusHoldTimeout();
                return;
              }
              const {
                value: mergedValue
              } = mergedValueRef;
              if (mergedValue === null) {
                if (!props.validator) {
                  doUpdateValue(createValidValue());
                }
              } else {
                const {
                  value: mergedStep
                } = mergedStepRef;
                deriveValueFromDisplayedValue({
                  offset: -mergedStep,
                  doUpdateIfValid: true,
                  isInputing: false,
                  fixPrecision: true
                });
              }
            }
            const handleFocus = doFocus;
            const handleBlur = doBlur;
            function createValidValue() {
              if (props.validator) return null;
              const {
                value: mergedMin
              } = mergedMinRef;
              const {
                value: mergedMax
              } = mergedMaxRef;
              if (mergedMin !== null) {
                return Math.max(0, mergedMin);
              } else if (mergedMax !== null) {
                return Math.min(0, mergedMax);
              } else {
                return 0;
              }
            }
            function handleClear(e) {
              doClear(e);
              doUpdateValue(null);
            }
            function handleMouseDown(e) {
              var _a, _b, _c;
              if ((_a = addButtonInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.target)) {
                e.preventDefault();
              }
              if ((_b = minusButtonInstRef.value) === null || _b === void 0 ? void 0 : _b.$el.contains(e.target)) {
                e.preventDefault();
              }
              (_c = inputInstRef.value) === null || _c === void 0 ? void 0 : _c.activate();
            }
            let minusHoldStateIntervalId = null;
            let addHoldStateIntervalId = null;
            let firstMinusMousedownId = null;
            function clearMinusHoldTimeout() {
              if (firstMinusMousedownId) {
                window.clearTimeout(firstMinusMousedownId);
                firstMinusMousedownId = null;
              }
              if (minusHoldStateIntervalId) {
                window.clearInterval(minusHoldStateIntervalId);
                minusHoldStateIntervalId = null;
              }
            }
            let firstAddMousedownId = null;
            function clearAddHoldTimeout() {
              if (firstAddMousedownId) {
                window.clearTimeout(firstAddMousedownId);
                firstAddMousedownId = null;
              }
              if (addHoldStateIntervalId) {
                window.clearInterval(addHoldStateIntervalId);
                addHoldStateIntervalId = null;
              }
            }
            function handleMinusMousedown() {
              clearMinusHoldTimeout();
              firstMinusMousedownId = window.setTimeout(() => {
                minusHoldStateIntervalId = window.setInterval(() => {
                  doMinus();
                }, HOLDING_CHANGE_INTERVAL);
              }, HOLDING_CHANGE_THRESHOLD);
              on("mouseup", document, clearMinusHoldTimeout, {
                once: true
              });
            }
            function handleAddMousedown() {
              clearAddHoldTimeout();
              firstAddMousedownId = window.setTimeout(() => {
                addHoldStateIntervalId = window.setInterval(() => {
                  doAdd();
                }, HOLDING_CHANGE_INTERVAL);
              }, HOLDING_CHANGE_THRESHOLD);
              on("mouseup", document, clearAddHoldTimeout, {
                once: true
              });
            }
            const handleAddClick = () => {
              if (addHoldStateIntervalId) return;
              doAdd();
            };
            const handleMinusClick = () => {
              if (minusHoldStateIntervalId) return;
              doMinus();
            };
            function handleKeyDown(e) {
              var _a, _b;
              if (e.key === "Enter") {
                if (e.target === ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)) {
                  return;
                }
                const value = deriveValueFromDisplayedValue({
                  offset: 0,
                  doUpdateIfValid: true,
                  isInputing: false,
                  fixPrecision: true
                });
                if (value !== false) {
                  (_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.deactivate();
                }
              } else if (e.key === "ArrowUp") {
                if (!addableRef.value) return;
                if (props.keyboard.ArrowUp === false) return;
                e.preventDefault();
                const value = deriveValueFromDisplayedValue({
                  offset: 0,
                  doUpdateIfValid: true,
                  isInputing: false,
                  fixPrecision: true
                });
                if (value !== false) {
                  doAdd();
                }
              } else if (e.key === "ArrowDown") {
                if (!minusableRef.value) return;
                if (props.keyboard.ArrowDown === false) return;
                e.preventDefault();
                const value = deriveValueFromDisplayedValue({
                  offset: 0,
                  doUpdateIfValid: true,
                  isInputing: false,
                  fixPrecision: true
                });
                if (value !== false) {
                  doMinus();
                }
              }
            }
            function handleUpdateDisplayedValue(value) {
              displayedValueRef.value = value;
              if (props.updateValueOnInput && !props.format && !props.parse && props.precision === void 0) {
                deriveValueFromDisplayedValue({
                  offset: 0,
                  doUpdateIfValid: true,
                  isInputing: true,
                  fixPrecision: false
                });
              }
            }
            watch(mergedValueRef, () => {
              deriveDisplayedValueFromValue();
            });
            const exposedMethods = {
              focus: () => {
                var _a;
                return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
              },
              blur: () => {
                var _a;
                return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
              },
              select: () => {
                var _a;
                return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.select();
              }
            };
            const rtlEnabledRef = useRtl("InputNumber", mergedRtlRef, mergedClsPrefixRef);
            return Object.assign(Object.assign({}, exposedMethods), {
              rtlEnabled: rtlEnabledRef,
              inputInstRef,
              minusButtonInstRef,
              addButtonInstRef,
              mergedClsPrefix: mergedClsPrefixRef,
              mergedBordered: mergedBorderedRef,
              uncontrolledValue: uncontrolledValueRef,
              mergedValue: mergedValueRef,
              mergedPlaceholder: mergedPlaceholderRef,
              displayedValueInvalid: displayedValueInvalidRef,
              mergedSize: mergedSizeRef,
              mergedDisabled: mergedDisabledRef,
              displayedValue: displayedValueRef,
              addable: addableRef,
              minusable: minusableRef,
              mergedStatus: mergedStatusRef,
              handleFocus,
              handleBlur,
              handleClear,
              handleMouseDown,
              handleAddClick,
              handleMinusClick,
              handleAddMousedown,
              handleMinusMousedown,
              handleKeyDown,
              handleUpdateDisplayedValue,
              // theme
              mergedTheme: themeRef,
              inputThemeOverrides: {
                paddingSmall: "0 8px 0 10px",
                paddingMedium: "0 8px 0 12px",
                paddingLarge: "0 8px 0 14px"
              },
              buttonThemeOverrides: computed(() => {
                const {
                  self: {
                    iconColorDisabled
                  }
                } = themeRef.value;
                const [r, g, b, a] = rgba(iconColorDisabled);
                return {
                  textColorTextDisabled: `rgb(${r}, ${g}, ${b})`,
                  opacityDisabled: `${a}`
                };
              })
            });
          },
          render() {
            const {
              mergedClsPrefix,
              $slots
            } = this;
            const renderMinusButton = () => {
              return h(XButton, {
                text: true,
                disabled: !this.minusable || this.mergedDisabled || this.readonly,
                focusable: false,
                theme: this.mergedTheme.peers.Button,
                themeOverrides: this.mergedTheme.peerOverrides.Button,
                builtinThemeOverrides: this.buttonThemeOverrides,
                onClick: this.handleMinusClick,
                onMousedown: this.handleMinusMousedown,
                ref: "minusButtonInstRef"
              }, {
                icon: () => resolveSlot($slots["minus-icon"], () => [h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => h(RemoveIcon, null)
                })])
              });
            };
            const renderAddButton = () => {
              return h(XButton, {
                text: true,
                disabled: !this.addable || this.mergedDisabled || this.readonly,
                focusable: false,
                theme: this.mergedTheme.peers.Button,
                themeOverrides: this.mergedTheme.peerOverrides.Button,
                builtinThemeOverrides: this.buttonThemeOverrides,
                onClick: this.handleAddClick,
                onMousedown: this.handleAddMousedown,
                ref: "addButtonInstRef"
              }, {
                icon: () => resolveSlot($slots["add-icon"], () => [h(NBaseIcon, {
                  clsPrefix: mergedClsPrefix
                }, {
                  default: () => h(AddIcon, null)
                })])
              });
            };
            return h("div", {
              class: [`${mergedClsPrefix}-input-number`, this.rtlEnabled && `${mergedClsPrefix}-input-number--rtl`]
            }, h(__unplugin_components_0, {
              ref: "inputInstRef",
              autofocus: this.autofocus,
              status: this.mergedStatus,
              bordered: this.mergedBordered,
              loading: this.loading,
              value: this.displayedValue,
              onUpdateValue: this.handleUpdateDisplayedValue,
              theme: this.mergedTheme.peers.Input,
              themeOverrides: this.mergedTheme.peerOverrides.Input,
              builtinThemeOverrides: this.inputThemeOverrides,
              size: this.mergedSize,
              placeholder: this.mergedPlaceholder,
              disabled: this.mergedDisabled,
              readonly: this.readonly,
              round: this.round,
              textDecoration: this.displayedValueInvalid ? "line-through" : void 0,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              onKeydown: this.handleKeyDown,
              onMousedown: this.handleMouseDown,
              onClear: this.handleClear,
              clearable: this.clearable,
              inputProps: this.inputProps,
              internalLoadingBeforeSuffix: true
            }, {
              prefix: () => {
                var _a;
                return this.showButton && this.buttonPlacement === "both" ? [renderMinusButton(), resolveWrappedSlot($slots.prefix, children => {
                  if (children) {
                    return h("span", {
                      class: `${mergedClsPrefix}-input-number-prefix`
                    }, children);
                  }
                  return null;
                })] : (_a = $slots.prefix) === null || _a === void 0 ? void 0 : _a.call($slots);
              },
              suffix: () => {
                var _a;
                return this.showButton ? [resolveWrappedSlot($slots.suffix, children => {
                  if (children) {
                    return h("span", {
                      class: `${mergedClsPrefix}-input-number-suffix`
                    }, children);
                  }
                  return null;
                }), this.buttonPlacement === "right" ? renderMinusButton() : null, renderAddButton()] : (_a = $slots.suffix) === null || _a === void 0 ? void 0 : _a.call($slots);
              }
            }));
          }
        }));
        const MUSIC_SOURCE_REGISTRY = [
        // 内置解锁音源 (UnblockMusicStrategy)
        {
          key: "migu",
          icon: "ri-music-2-fill",
          color: "#ff6600",
          group: "unblock"
        }, {
          key: "kugou",
          icon: "ri-music-fill",
          color: "#2979ff",
          group: "unblock"
        }, {
          key: "kuwo",
          icon: "ri-music-fill",
          color: "#ff8c00",
          group: "unblock"
        }, {
          key: "pyncmd",
          icon: "ri-netease-cloud-music-fill",
          color: "#ec4141",
          group: "unblock"
        },
        // 扩展音源 (GDMusicStrategy)
        {
          key: "gdmusic",
          icon: "ri-google-fill",
          color: "#4285f4",
          group: "extended"
        },
        // 插件音源 (需要用户配置)
        {
          key: "lxMusic",
          icon: "ri-leaf-fill",
          color: "#22c55e",
          group: "plugin"
        }, {
          key: "custom",
          icon: "ri-plug-fill",
          color: "#8b5cf6",
          group: "plugin"
        }];
        const useMusicSources = exports("u", () => {
          const settingsStore = useSettingsStore();
          const allSources = computed(() => {
            return MUSIC_SOURCE_REGISTRY.map(source => {
              let available = true;
              let configHint;
              if (source.key === "lxMusic") {
                available = (settingsStore.setData.lxMusicScripts?.length ?? 0) > 0 && Boolean(settingsStore.setData.activeLxMusicApiId);
                if (!available) configHint = "settings.playback.lxMusic.scripts.notConfigured";
              } else if (source.key === "custom") {
                available = Boolean(settingsStore.setData.customApiPlugin);
                if (!available) configHint = "settings.playback.customApi.notImported";
              }
              return {
                ...source,
                available,
                configHint
              };
            });
          });
          return {
            allSources
          };
        });
      }
    };
  });
})();

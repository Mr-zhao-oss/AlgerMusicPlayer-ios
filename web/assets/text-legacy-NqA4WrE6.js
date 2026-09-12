;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var defineComponent, h, cB, cE, c, NBaseIcon, useConfig, useTheme, useLocale, useThemeClass, computed, emptyLight, createKey, cM, useCompitable, typographyLight;
    return {
      setters: [module => {
        defineComponent = module.d;
        h = module.h;
        cB = module.c;
        cE = module.b;
        c = module.a;
        NBaseIcon = module.c2;
        useConfig = module.u;
        useTheme = module.U;
        useLocale = module.S;
        useThemeClass = module.Z;
        computed = module.z;
        emptyLight = module.dB;
        createKey = module.a4;
        cM = module.g;
        useCompitable = module.ct;
        typographyLight = module.dC;
      }],
      execute: function () {
        const EmptyIcon = defineComponent({
          name: 'Empty',
          render() {
            return h("svg", {
              viewBox: "0 0 28 28",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, h("path", {
              d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
              fill: "currentColor"
            }), h("path", {
              d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
              fill: "currentColor"
            }));
          }
        });

        // vars:
        // --n-font-size
        // --n-icon-size
        // --n-icon-color
        // --n-bezier
        // --n-text-color
        // --n-extra-text-color
        const style$1 = cB('empty', `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE('icon', `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c('+', [cE('description', `
 margin-top: 8px;
 `)])]), cE('description', `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE('extra', `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);
        const emptyProps = Object.assign(Object.assign({}, useTheme.props), {
          description: String,
          showDescription: {
            type: Boolean,
            default: true
          },
          showIcon: {
            type: Boolean,
            default: true
          },
          size: {
            type: String,
            default: 'medium'
          },
          renderIcon: Function
        });
        const __unplugin_components_3 = exports("_", defineComponent({
          name: 'Empty',
          props: emptyProps,
          slots: Object,
          setup(props) {
            const {
              mergedClsPrefixRef,
              inlineThemeDisabled,
              mergedComponentPropsRef
            } = useConfig(props);
            const themeRef = useTheme('Empty', '-empty', style$1, emptyLight, props, mergedClsPrefixRef);
            const {
              localeRef
            } = useLocale('Empty');
            const mergedDescriptionRef = computed(() => {
              var _a, _b, _c;
              return (_a = props.description) !== null && _a !== void 0 ? _a : (_c = (_b = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _b === void 0 ? void 0 : _b.Empty) === null || _c === void 0 ? void 0 : _c.description;
            });
            const mergedRenderIconRef = computed(() => {
              var _a, _b;
              return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Empty) === null || _b === void 0 ? void 0 : _b.renderIcon) || (() => h(EmptyIcon, null));
            });
            const cssVarsRef = computed(() => {
              const {
                size
              } = props;
              const {
                common: {
                  cubicBezierEaseInOut
                },
                self: {
                  [createKey('iconSize', size)]: iconSize,
                  [createKey('fontSize', size)]: fontSize,
                  textColor,
                  iconColor,
                  extraTextColor
                }
              } = themeRef.value;
              return {
                '--n-icon-size': iconSize,
                '--n-font-size': fontSize,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-text-color': textColor,
                '--n-icon-color': iconColor,
                '--n-extra-text-color': extraTextColor
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass('empty', computed(() => {
              let hash = '';
              const {
                size
              } = props;
              hash += size[0];
              return hash;
            }), cssVarsRef, props) : undefined;
            return {
              mergedClsPrefix: mergedClsPrefixRef,
              mergedRenderIcon: mergedRenderIconRef,
              localizedDescription: computed(() => {
                return mergedDescriptionRef.value || localeRef.value.description;
              }),
              cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            const {
              $slots,
              mergedClsPrefix,
              onRender
            } = this;
            onRender === null || onRender === void 0 ? void 0 : onRender();
            return h("div", {
              class: [`${mergedClsPrefix}-empty`, this.themeClass],
              style: this.cssVars
            }, this.showIcon ? h("div", {
              class: `${mergedClsPrefix}-empty__icon`
            }, $slots.icon ? $slots.icon() : h(NBaseIcon, {
              clsPrefix: mergedClsPrefix
            }, {
              default: this.mergedRenderIcon
            })) : null, this.showDescription ? h("div", {
              class: `${mergedClsPrefix}-empty__description`
            }, $slots.default ? $slots.default() : this.localizedDescription) : null, $slots.extra ? h("div", {
              class: `${mergedClsPrefix}-empty__extra`
            }, $slots.extra()) : null);
          }
        }));

        // vars:
        // --n-text-color
        // --n-font-weight-strong
        // --n-font-famliy-mono
        // --n-code-border-radius
        // --n-code-text-color
        // --n-code-color
        // --n-code-border
        const style = cB('text', `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [cM('strong', `
 font-weight: var(--n-font-weight-strong);
 `), cM('italic', {
          fontStyle: 'italic'
        }), cM('underline', {
          textDecoration: 'underline'
        }), cM('code', `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);
        const textProps = Object.assign(Object.assign({}, useTheme.props), {
          code: Boolean,
          type: {
            type: String,
            default: "default"
          },
          delete: Boolean,
          strong: Boolean,
          italic: Boolean,
          underline: Boolean,
          depth: [String, Number],
          tag: String,
          // deprecated
          as: {
            type: String,
            validator: () => {
              return true;
            },
            default: void 0
          }
        });
        const __unplugin_components_1 = exports("a", defineComponent({
          name: "Text",
          props: textProps,
          setup(props) {
            const {
              mergedClsPrefixRef,
              inlineThemeDisabled
            } = useConfig(props);
            const themeRef = useTheme("Typography", "-text", style, typographyLight, props, mergedClsPrefixRef);
            const cssVarsRef = computed(() => {
              const {
                depth,
                type
              } = props;
              const textColorKey = type === "default" ? depth === void 0 ? "textColor" : `textColor${depth}Depth` : createKey("textColor", type);
              const {
                common: {
                  fontWeightStrong,
                  fontFamilyMono,
                  cubicBezierEaseInOut
                },
                self: {
                  codeTextColor,
                  codeBorderRadius,
                  codeColor,
                  codeBorder,
                  [textColorKey]: textColor
                }
              } = themeRef.value;
              return {
                "--n-bezier": cubicBezierEaseInOut,
                "--n-text-color": textColor,
                "--n-font-weight-strong": fontWeightStrong,
                "--n-font-famliy-mono": fontFamilyMono,
                "--n-code-border-radius": codeBorderRadius,
                "--n-code-text-color": codeTextColor,
                "--n-code-color": codeColor,
                "--n-code-border": codeBorder
              };
            });
            const themeClassHandle = inlineThemeDisabled ? useThemeClass("text", computed(() => `${props.type[0]}${props.depth || ""}`), cssVarsRef, props) : void 0;
            return {
              mergedClsPrefix: mergedClsPrefixRef,
              compitableTag: useCompitable(props, ["as", "tag"]),
              cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
              themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
              onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
            };
          },
          render() {
            var _a, _b, _c;
            const {
              mergedClsPrefix
            } = this;
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            const textClass = [`${mergedClsPrefix}-text`, this.themeClass, {
              [`${mergedClsPrefix}-text--code`]: this.code,
              [`${mergedClsPrefix}-text--delete`]: this.delete,
              [`${mergedClsPrefix}-text--strong`]: this.strong,
              [`${mergedClsPrefix}-text--italic`]: this.italic,
              [`${mergedClsPrefix}-text--underline`]: this.underline
            }];
            const children = (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b);
            return this.code ? h("code", {
              class: textClass,
              style: this.cssVars
            }, this.delete ? h("del", null, children) : children) : this.delete ? h("del", {
              class: textClass,
              style: this.cssVars
            }, children) : h(this.compitableTag || "span", {
              class: textClass,
              style: this.cssVars
            }, children);
          }
        }));
      }
    };
  });
})();

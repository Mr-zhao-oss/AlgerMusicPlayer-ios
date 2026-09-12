;
(function () {
  System.register(['./index-legacy-B7mtj-uR.js'], function (exports, module) {
    'use strict';

    var o, t, l, e, f$1, u$1, i, d, d$1, i$1, c;
    return {
      setters: [module => {
        o = module.aB;
        t = module.aI;
        l = module.aJ;
        e = module.aF;
        f$1 = module.aE;
        u$1 = module.aK;
        i = module.aL;
        d = module.aM;
        d$1 = module.aN;
        i$1 = module.aO;
        c = module.aP;
      }],
      execute: function () {
        /*!
         * (C) Ionic http://ionicframework.com - MIT License
         */
        const u = new WeakMap(),
          f = (o, n, t, i = 0, r = false) => {
            u.has(o) !== t && (t ? w(o, n, i, r) : p(o, n));
          },
          w = (o, n, t, i = false) => {
            const r = n.parentNode,
              a = n.cloneNode(false);
            a.classList.add("cloned-input"), a.tabIndex = -1, i && (a.disabled = true);
            const e = "rtl" === o.ownerDocument.dir;
            a.style.insetInlineStart = e ? r.offsetWidth - n.offsetLeft - n.offsetWidth + "px" : `${n.offsetLeft}px`, r.appendChild(a), u.set(o, a);
            const s = e ? 9999 : -9999;
            o.style.pointerEvents = "none", n.style.transform = `translate3d(${s}px,${t}px,0) scale(0)`;
          },
          p = (o, n) => {
            const t = u.get(o);
            t && (u.delete(o), t.remove()), o.style.pointerEvents = "", n.style.transform = "";
          },
          m = "input, textarea, [no-blur], [contenteditable]",
          b = "$ionPaddingTimer",
          y = (o, n, t) => {
            const i = o[b];
            i && clearTimeout(i), n > 0 ? o.style.setProperty("--keyboard-offset", `${n}px`) : o[b] = setTimeout(() => {
              o.style.setProperty("--keyboard-offset", "0px"), t && t();
            }, 120);
          },
          S = (o, n, t) => {
            o.addEventListener("focusout", () => {
              n && y(n, 0, t);
            }, {
              once: true
            });
          };
        let h = 0;
        const D = "data-ionic-skip-scroll-assist",
          v = o => {
            var n;
            if (document.activeElement === o) return;
            const t = o.getAttribute("id"),
              i = o.closest(`label[for="${t}"]`),
              r = null === (n = document.activeElement) || void 0 === n ? void 0 : n.closest(`label[for="${t}"]`);
            null !== i && i === r || (o.setAttribute(D, "true"), o.focus());
          },
          x = async (o, n, r, a, e, d, c$1 = false, l = 0, u = true) => {
            if (!r && !a) return;
            const w = ((o, n, t, i) => {
              var r;
              return ((o, n, t, i) => {
                const r = o.top,
                  a = o.bottom,
                  e = n.top,
                  s = e + 15,
                  d = Math.min(n.bottom, i - t) - 50 - a,
                  c = s - r,
                  l = Math.round(d < 0 ? -d : c > 0 ? -c : 0),
                  u = Math.min(l, r - e),
                  f = Math.abs(u);
                return {
                  scrollAmount: u,
                  scrollDuration: Math.min(400, Math.max(150, f / .3)),
                  scrollPadding: t,
                  inputSafeY: 4 - (r - s)
                };
              })((null !== (r = o.closest("ion-item,[ion-item]")) && void 0 !== r ? r : o).getBoundingClientRect(), n.getBoundingClientRect(), t, i);
            })(o, r || a, e, l);
            if (r && Math.abs(w.scrollAmount) < 4) return v(n), void (d && null !== r && (y(r, h), S(n, r, () => h = 0)));
            if (f(o, n, true, w.inputSafeY, c$1), v(n), d$1(() => o.click()), d && r && (h = w.scrollPadding, y(r, h)), "undefined" != typeof window) {
              let a;
              const e = async () => {
                  void 0 !== a && clearTimeout(a), window.removeEventListener("ionKeyboardDidShow", s), window.removeEventListener("ionKeyboardDidShow", e), r && (await c(r, 0, w.scrollAmount, w.scrollDuration)), f(o, n, false, w.inputSafeY), document.activeElement === n && v(n), d && S(n, r, () => h = 0);
                },
                s = () => {
                  window.removeEventListener("ionKeyboardDidShow", s), window.addEventListener("ionKeyboardDidShow", e);
                };
              if (r) {
                const o = await i$1(r);
                if (u && w.scrollAmount > o.scrollHeight - o.clientHeight - o.scrollTop) return "password" === n.type ? (w.scrollAmount += 50, window.addEventListener("ionKeyboardDidShow", s)) : window.addEventListener("ionKeyboardDidShow", e), void (a = setTimeout(e, 1e3));
              }
              e();
            }
          },
          M = exports("startInputShims", async (t$1, i$1) => {
            if (void 0 === o) return;
            const s = "ios" === i$1,
              u = "android" === i$1,
              w = t$1.getNumber("keyboardHeight", 290),
              p = t$1.getBoolean("scrollAssist", true),
              b = t$1.getBoolean("hideCaretOnScroll", s),
              y = t$1.getBoolean("inputBlurring", false),
              S = t$1.getBoolean("scrollPadding", true),
              h = Array.from(o.querySelectorAll("ion-input, ion-textarea")),
              v = new WeakMap(),
              M = new WeakMap(),
              K = await t.getResizeMode(),
              g = async n => {
                await new Promise(o => e(n, o));
                const t = n.shadowRoot || n,
                  i$1 = t.querySelector("input") || t.querySelector("textarea"),
                  s = f$1(n),
                  l$1 = s ? null : n.closest("ion-footer");
                if (i$1) {
                  if (s && b && !v.has(n)) {
                    const o = ((o, n, t) => {
                      if (!t || !n) return () => {};
                      const i = t => {
                          var i;
                          (i = n) === i.getRootNode().activeElement && f(o, n, t);
                        },
                        r = () => f(o, n, false),
                        s = () => i(true),
                        d = () => i(false);
                      return l(t, "ionScrollStart", s), l(t, "ionScrollEnd", d), n.addEventListener("blur", r), () => {
                        u$1(t, "ionScrollStart", s), u$1(t, "ionScrollEnd", d), n.removeEventListener("blur", r);
                      };
                    })(n, i$1, s);
                    v.set(n, o);
                  }
                  if ("date" !== i$1.type && "datetime-local" !== i$1.type && (s || l$1) && p && !M.has(n)) {
                    const t = ((n, t, i$1, r, a, e, s, d$1 = false) => {
                      const l = e && (void 0 === s || s.mode === i.None);
                      let u = false;
                      const f = void 0 !== d ? d.innerHeight : 0,
                        w = o => {
                          false !== u ? x(n, t, i$1, r, o.detail.keyboardHeight, l, d$1, f, false) : u = true;
                        },
                        p = () => {
                          u = false, null == d || d.removeEventListener("ionKeyboardDidShow", w), n.removeEventListener("focusout", p);
                        },
                        m = async () => {
                          t.hasAttribute(D) ? t.removeAttribute(D) : (x(n, t, i$1, r, a, l, d$1, f), null == d || d.addEventListener("ionKeyboardDidShow", w), n.addEventListener("focusout", p));
                        };
                      return n.addEventListener("focusin", m), () => {
                        n.removeEventListener("focusin", m), null == d || d.removeEventListener("ionKeyboardDidShow", w), n.removeEventListener("focusout", p);
                      };
                    })(n, i$1, s, l$1, w, S, K, u);
                    M.set(n, t);
                  }
                }
              };
            y && (() => {
              let o = true,
                n = false;
              const t = document;
              l(t, "ionScrollStart", () => {
                n = true;
              }), t.addEventListener("focusin", () => {
                o = true;
              }, true), t.addEventListener("touchend", i => {
                if (n) return void (n = false);
                const r = t.activeElement;
                if (!r) return;
                if (r.matches(m)) return;
                const a = i.target;
                a !== r && (a.matches(m) || a.closest(m) || (o = false, setTimeout(() => {
                  o || r.blur();
                }, 50)));
              }, false);
            })();
            for (const o of h) g(o);
            o.addEventListener("ionInputDidLoad", o => {
              g(o.detail);
            }), o.addEventListener("ionInputDidUnload", o => {
              (o => {
                if (b) {
                  const n = v.get(o);
                  n && n(), v.delete(o);
                }
                if (p) {
                  const n = M.get(o);
                  n && n(), M.delete(o);
                }
              })(o.detail);
            });
          });
      }
    };
  });
})();

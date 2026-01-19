var r = Object.defineProperty;
var l = (s, e, t) => e in s ? r(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => l(s, typeof e != "symbol" ? e + "" : e, t);
import "@dxtmisha/functional";
class o {
  constructor(e, t, i) {
    /**
     * Render Ripple
     *
     * Рендер Ripple
     */
    n(this, "render", () => this.components && this.components.is("ripple") && (!this.enabled || this.enabled.isEnabled.value) ? this.components.render(
      "ripple",
      { class: `${this.className}__ripple` }
    ) : []);
    this.className = e, this.components = t, this.enabled = i;
  }
}
export {
  o as R
};

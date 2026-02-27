import "@dxtmisha/functional";
var i = Object.defineProperty, n = (r, e, s) => e in r ? i(r, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[e] = s, a = (r, e, s) => n(r, e + "", s);
class o {
  constructor(e, s, t) {
    a(this, "render", () => this.components && this.components.is("ripple") && (!this.enabled || this.enabled.isEnabled.value) ? this.components.render(
      "ripple",
      { class: `${this.className}__ripple` }
    ) : []), this.className = e, this.components = s, this.enabled = t;
  }
}
export {
  o
};

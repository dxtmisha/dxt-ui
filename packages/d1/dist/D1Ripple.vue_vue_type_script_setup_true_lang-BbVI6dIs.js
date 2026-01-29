import { defineComponent as a, computed as s, openBlock as m, createBlock as d, unref as u, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsRipple as _, RippleDesign as k } from "@dxtmisha/constructor/Ripple";
const x = {
  ..._
}, T = /* @__PURE__ */ a({
  name: "D1Ripple",
  __name: "D1Ripple",
  props: /* @__PURE__ */ f({
    disabled: { type: Boolean }
  }, x),
  setup(o, { expose: t, emit: n }) {
    const p = n, r = o, c = s(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-ripple": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = s(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new k(
      "d1.ripple",
      r,
      {
        emits: p,
        classes: c,
        styles: i
      }
    ), l = e.render();
    return t(e.expose()), (D, R) => (m(), d(u(l)));
  }
});
export {
  T as _
};

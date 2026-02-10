import { defineComponent as l, computed as n, openBlock as c, createBlock as u, unref as m, mergeDefaults as x } from "vue";
import { inArray as f } from "@dxtmisha/functional";
import { defaultsListMenu as M, ListMenuDesign as w } from "@dxtmisha/constructor/ListMenu";
import { D as y } from "./index-Dike0osZ.js";
const _ = {
  // :values [!] System label / Системная метка
  axis: ["x", "y"]
  // :values [!] System label / Системная метка
}, B = {
  ...M
}, C = /* @__PURE__ */ l({
  name: "D1ListMenu",
  __name: "D1ListMenu",
  props: /* @__PURE__ */ x({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    open: { type: Boolean },
    axis: {},
    divider: { type: Boolean }
  }, B),
  emits: ["window"],
  setup(o, { expose: t, emit: i }) {
    const r = i, e = o, a = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listMenu": !0,
        "d1-listMenu--open": e.open,
        [`d1-listMenu--axis--${e.axis}`]: f(_.axis, e.axis),
        "d1-listMenu--divider": e.divider
        // :classes-values [!] System label / Системная метка
      }
    })), p = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), s = new w(
      "d1.listMenu",
      e,
      {
        emits: r,
        classes: a,
        styles: p,
        components: {
          window: y
        }
      }
    ), d = s.render();
    return t(s.expose()), (D, k) => (c(), u(m(d)));
  }
});
export {
  C as _
};

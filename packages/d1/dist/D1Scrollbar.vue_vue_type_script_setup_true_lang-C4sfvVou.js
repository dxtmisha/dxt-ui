import { defineComponent as c, computed as r, openBlock as p, createBlock as m, unref as v, mergeDefaults as b } from "vue";
import "@dxtmisha/functional";
import { defaultsScrollbar as B, ScrollbarDesign as u } from "@dxtmisha/constructor/Scrollbar";
const y = {
  ...B
}, x = /* @__PURE__ */ c({
  name: "D1Scrollbar",
  __name: "D1Scrollbar",
  props: /* @__PURE__ */ b({
    tag: {},
    visible: { type: Boolean },
    divider: { type: Boolean },
    dividerTop: { type: Boolean },
    dividerBottom: { type: Boolean },
    dividerHide: { type: Boolean },
    inverse: { type: Boolean },
    standard: { type: Boolean }
  }, y),
  emits: ["top", "reachTop", "leaveTop", "bottom", "reachBottom", "leaveBottom", "edge"],
  setup(t, { expose: d, emit: s }) {
    const i = s, e = t, l = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-scrollbar": !0,
        "d1-scrollbar--visible": e.visible,
        "d1-scrollbar--divider": e.divider,
        "d1-scrollbar--dividerTop": e.dividerTop,
        "d1-scrollbar--dividerBottom": e.dividerBottom,
        "d1-scrollbar--dividerHide": e.dividerHide,
        "d1-scrollbar--inverse": e.inverse,
        "d1-scrollbar--standard": e.standard
        // :classes-values [!] System label / Системная метка
      }
    })), a = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new u(
      "d1.scrollbar",
      e,
      {
        emits: i,
        classes: l,
        styles: a
      }
    ), n = o.render();
    return d(o.expose()), (f, T) => (p(), m(v(n)));
  }
});
export {
  x as _
};

import { defineComponent as m, computed as o, openBlock as g, createBlock as u, unref as y, mergeDefaults as f } from "vue";
import { inArray as t } from "@dxtmisha/functional";
import { defaultsProgress as z, ProgressDesign as B } from "@dxtmisha/constructor/Progress";
const s = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom", "static"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, k = {
  ...z,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top",
  size: "md"
}, P = /* @__PURE__ */ m({
  name: "D1Progress",
  __name: "D1Progress",
  props: /* @__PURE__ */ f({
    ariaLabel: {},
    textLoading: { type: [String, Function] },
    visible: { type: Boolean },
    value: {},
    max: {},
    linear: { type: Boolean },
    circular: { type: Boolean },
    point: { type: Boolean },
    delay: {},
    delayHide: {},
    indeterminate: {},
    position: {},
    dense: { type: Boolean },
    inverse: { type: Boolean },
    size: {},
    palette: {}
  }, k),
  setup(n, { expose: i, emit: a }) {
    const p = a, e = n, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-progress": !0,
        "d1-progress--point": e.point,
        "d1-progress--linear": e.linear && !e.circular,
        "d1-progress--circular": e.circular,
        [`d1-progress--indeterminate--${e.indeterminate}`]: t(s.indeterminate, e.indeterminate),
        [`d1-progress--position--${e.position}`]: t(s.position, e.position),
        "d1-progress--dense": e.dense,
        "d1-progress--inverse": e.inverse,
        [`d1-progress--size--${e.size}`]: t(s.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: t(s.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), d = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new B(
      "d1.progress",
      e,
      {
        emits: p,
        classes: l,
        styles: d
      }
    ), c = r.render();
    return i(r.expose()), (_, b) => (g(), u(y(c)));
  }
});
export {
  P as _
};

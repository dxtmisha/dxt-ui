import { defineComponent as p, computed as t, openBlock as m, createBlock as u, unref as d, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsSelectValue as _, SelectValueDesign as h } from "@dxtmisha/constructor/SelectValue";
import { D as y } from "./index-BWfsjhQo.js";
const k = {
  ..._,
  chipAttrs: {
    size: "sm"
  },
  iconCancel: "close_small"
}, g = /* @__PURE__ */ p({
  name: "D1SelectValue",
  __name: "D1SelectValue",
  props: /* @__PURE__ */ f({
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    chipAttrs: {},
    placeholder: {},
    value: {},
    multiple: { type: Boolean },
    iconShow: { type: Boolean },
    iconAttrs: {},
    iconCancel: {}
  }, k),
  emits: ["click", "clickLite"],
  setup(o, { expose: s, emit: c }) {
    const l = c, n = o, a = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-selectValue": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new h(
      "d1.selectValue",
      n,
      {
        emits: l,
        classes: a,
        styles: r,
        components: {
          chip: y
        }
      }
    ), i = e.render();
    return s(e.expose()), (B, D) => (m(), u(d(i)));
  }
});
export {
  g as _
};

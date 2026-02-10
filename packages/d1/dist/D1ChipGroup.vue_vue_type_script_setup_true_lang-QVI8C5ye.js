import { defineComponent as a, computed as t, openBlock as d, createBlock as m, unref as u, mergeDefaults as h } from "vue";
import "@dxtmisha/functional";
import { defaultsChipGroup as y, ChipGroupDesign as f } from "@dxtmisha/constructor/ChipGroup";
import { D as k } from "./index-BWfsjhQo.js";
const _ = {
  ...y
}, x = /* @__PURE__ */ a({
  name: "D1ChipGroup",
  __name: "D1ChipGroup",
  props: /* @__PURE__ */ h({
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    readonly: { type: Boolean },
    selected: { type: [Number, String, Boolean, Array] },
    list: {},
    iconWhenSelected: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    chipAttrs: {}
  }, _),
  emits: ["click", "clickLite", "update:selected", "update:modelSelected"],
  setup(o, { expose: n, emit: p }) {
    const s = p, c = o, r = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-chipGroup": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new f(
      "d1.chipGroup",
      c,
      {
        emits: s,
        classes: r,
        styles: i,
        components: {
          chip: k
        }
      }
    ), l = e.render();
    return n(e.expose()), (C, D) => (d(), m(u(l)));
  }
});
export {
  x as _
};

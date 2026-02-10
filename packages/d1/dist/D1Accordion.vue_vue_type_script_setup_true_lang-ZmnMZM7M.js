import { defineComponent as p, computed as n, openBlock as l, createBlock as m, unref as f, mergeDefaults as u } from "vue";
import "@dxtmisha/functional";
import { defaultsAccordion as _, AccordionDesign as y } from "@dxtmisha/constructor/Accordion";
import { _ as D } from "./D1Cell.vue_vue_type_script_setup_true_lang-DUsqN8j7.js";
import { D as k } from "./index-D387qGGl.js";
const A = D, w = {
  ..._,
  iconArrowDown: "keyboard_arrow_down",
  // :default [!] System label / Системная метка
  divider: !0
}, C = /* @__PURE__ */ p({
  name: "D1Accordion",
  __name: "D1Accordion",
  props: /* @__PURE__ */ u({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    icon: {},
    open: { type: Boolean },
    clickOpen: { type: Boolean },
    autoClose: { type: Boolean },
    motionTransformAttrs: {},
    cellAttrs: {},
    iconArrowDown: {},
    modelOpen: { type: Boolean },
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    divider: { type: Boolean }
  }, w),
  emits: ["click", "clickLite", "transform", "transformLite", "update:open", "update:modelOpen"],
  setup(t, { expose: r, emit: c }) {
    const s = c, o = t, i = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-accordion": !0,
        "d1-accordion--divider": o.divider
        // :classes-values [!] System label / Системная метка
      }
    })), d = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new y(
      "d1.accordion",
      o,
      {
        emits: s,
        classes: i,
        styles: d,
        components: {
          cell: A,
          motionTransform: k
        }
      }
    ), a = e.render();
    return r(e.expose()), (B, T) => (l(), m(f(a)));
  }
});
export {
  C as _
};

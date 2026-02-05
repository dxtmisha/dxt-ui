import { defineComponent as p, computed as n, openBlock as m, createBlock as l, unref as f, mergeDefaults as u } from "vue";
import "@dxtmisha/functional";
import { defaultsAccordion as _, AccordionDesign as y } from "@dxtmisha/constructor/Accordion";
import { _ as D } from "./D1Cell.vue_vue_type_script_setup_true_lang-CW1Oebgm.js";
import { _ as k } from "./D1MotionTransform.vue_vue_type_script_setup_true_lang-BsfcAXYR.js";
const A = D, w = k, B = {
  ..._,
  iconArrowDown: "keyboard_arrow_down",
  // :default [!] System label / Системная метка
  divider: !0
}, F = /* @__PURE__ */ p({
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
  }, B),
  emits: ["click", "clickLite", "transform", "transformLite", "update:open", "update:modelOpen"],
  setup(t, { expose: r, emit: c }) {
    const s = c, o = t, i = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-accordion": !0,
        "d1-accordion--divider": o.divider
        // :classes-values [!] System label / Системная метка
      }
    })), a = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new y(
      "d1.accordion",
      o,
      {
        emits: s,
        classes: i,
        styles: a,
        components: {
          cell: A,
          motionTransform: w
        }
      }
    ), d = e.render();
    return r(e.expose()), (T, v) => (m(), l(f(d)));
  }
});
export {
  w as D,
  F as _
};

import { defineComponent as l, computed as t, openBlock as m, createBlock as c, unref as y, mergeDefaults as f } from "vue";
import { inArray as u } from "@dxtmisha/functional";
import { defaultsTooltip as x, TooltipDesign as _ } from "@dxtmisha/constructor/Tooltip";
import { _ as h } from "./D1Arrow.vue_vue_type_script_setup_true_lang-CL7CgsNP.js";
const B = h, w = {
  // :values [!] System label / Системная метка
  maxWidth: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, W = {
  ...x,
  // :default [!] System label / Системная метка
  interactive: !0,
  maxWidth: "md"
}, A = /* @__PURE__ */ l({
  name: "D1Tooltip",
  __name: "D1Tooltip",
  props: /* @__PURE__ */ f({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    arrowShow: { type: Boolean },
    arrowPosition: {},
    arrowAttrs: {},
    open: { type: Boolean },
    disabled: { type: Boolean },
    inDom: { type: Boolean },
    top: { type: Boolean },
    indent: {},
    delay: {},
    delayHide: {},
    embedded: { type: Boolean },
    interactive: { type: Boolean },
    maxWidth: {}
  }, W),
  emits: ["tooltip"],
  setup(n, { expose: i, emit: s }) {
    const r = s, e = n, a = t(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tooltip": !0,
        "d1-tooltip--interactive": e.interactive,
        "d1-tooltip--embedded": e.embedded,
        [`d1-tooltip--maxWidth--${e.maxWidth}`]: u(w.maxWidth, e.maxWidth)
        // :classes-values [!] System label / Системная метка
      }
    })), d = t(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new _(
      "d1.tooltip",
      e,
      {
        emits: r,
        classes: a,
        styles: d,
        components: {
          arrow: B
        }
      }
    ), p = o.render();
    return i(o.expose()), (b, D) => (m(), c(y(p)));
  }
});
export {
  A as _
};

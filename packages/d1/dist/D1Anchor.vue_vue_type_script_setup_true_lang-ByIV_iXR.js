import { defineComponent as l, computed as n, openBlock as m, createBlock as d, unref as f, mergeDefaults as _ } from "vue";
import "@dxtmisha/functional";
import { defaultsAnchor as h, AnchorDesign as u } from "@dxtmisha/constructor/Anchor";
import { D as y } from "./index-CItcax-E.js";
import { _ as k } from "./D1Tooltip.vue_vue_type_script_setup_true_lang-CYtDl5uG.js";
const C = k, g = {
  ...h,
  iconLink: "link",
  iconTag: "tag",
  iconContentCopy: "content_copy"
}, L = /* @__PURE__ */ l({
  name: "D1Anchor",
  __name: "D1Anchor",
  props: /* @__PURE__ */ _({
    label: {},
    labelId: {},
    tooltipAttrs: {},
    textCopiedClipboard: { type: [String, Function] },
    shift: {},
    behavior: {},
    block: {},
    inline: {},
    hide: { type: Boolean },
    name: {},
    isCopy: { type: Boolean },
    iconLink: {},
    iconTag: {},
    iconContentCopy: {},
    delayHide: {}
  }, g),
  setup(e, { expose: t, emit: c }) {
    const s = c, i = e, r = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-anchor": !0
        // :classes-values [!] System label / Системная метка
      }
    })), p = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new u(
      "d1.anchor",
      i,
      {
        emits: s,
        classes: r,
        styles: p,
        components: {
          icon: y,
          tooltip: C
        }
      }
    ), a = o.render();
    return t(o.expose()), (D, b) => (m(), d(f(a)));
  }
});
export {
  L as _
};

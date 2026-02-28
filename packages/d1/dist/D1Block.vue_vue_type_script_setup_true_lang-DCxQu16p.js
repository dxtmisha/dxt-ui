import { defineComponent as l, computed as o, openBlock as d, createBlock as m, unref as B, mergeDefaults as u } from "vue";
import "@dxtmisha/functional";
import { T as f } from "./BlockDesign-B_QkwFRg-bwDWjacW.js";
import { D as k } from "./index-C7bQTPQs.js";
const y = {
  tag: "div",
  tagHeader: "h3"
}, D = {
  ...y
}, H = /* @__PURE__ */ l({
  name: "D1Block",
  __name: "D1Block",
  props: /* @__PURE__ */ u({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    caption: {},
    captionDecorative: { type: Boolean },
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    headline: {},
    tag: {},
    tagHeader: {}
  }, D),
  setup(t, { expose: n, emit: c }) {
    const s = c, a = t, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-block": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new f(
      "d1.block",
      a,
      {
        emits: s,
        classes: r,
        styles: i,
        components: {
          icon: k
        }
      }
    ), p = e.render();
    return n(e.expose()), (_, g) => (d(), m(B(p)));
  }
});
export {
  H as _
};

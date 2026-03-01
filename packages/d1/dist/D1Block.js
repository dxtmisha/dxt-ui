import { defineComponent as p, computed as o, openBlock as d, createBlock as m, unref as B, mergeDefaults as k } from "vue";
import "@dxtmisha/functional";
import { T as u } from "./BlockDesign-B_QkwFRg-bwDWjacW.js";
import { D as f } from "./index-DyLnu_cH.js";
const y = {
  tag: "div",
  tagHeader: "h3"
}, D = {
  ...y
}, g = /* @__PURE__ */ p({
  name: "D1Block",
  __name: "D1Block",
  props: /* @__PURE__ */ k({
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
    })), e = new u(
      "d1.block",
      a,
      {
        emits: s,
        classes: r,
        styles: i,
        components: {
          icon: f
        }
      }
    ), l = e.render();
    return n(e.expose()), (_, b) => (d(), m(B(l)));
  }
}), I = g;
export {
  I as D1Block
};

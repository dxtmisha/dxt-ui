import { defineComponent as p, computed as o, openBlock as d, createBlock as m, unref as B, mergeDefaults as k } from "vue";
import "@dxtmisha/functional";
import { defaultsBlock as u, BlockDesign as f } from "@dxtmisha/constructor/Block";
import { D as y } from "./index-CItcax-E.js";
const D = {
  ...u
}, h = /* @__PURE__ */ p({
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
  setup(n, { expose: t, emit: c }) {
    const s = c, a = n, r = o(() => ({
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
          icon: y
        }
      }
    ), l = e.render();
    return t(e.expose()), (_, g) => (d(), m(B(l)));
  }
});
export {
  h as _
};

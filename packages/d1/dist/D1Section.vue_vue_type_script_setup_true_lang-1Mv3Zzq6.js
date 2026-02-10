import { defineComponent as l, computed as o, openBlock as d, createBlock as m, unref as u, mergeDefaults as f } from "vue";
import "@dxtmisha/functional";
import { defaultsSection as y, SectionDesign as B } from "@dxtmisha/constructor/Section";
const _ = {
  ...y
}, T = /* @__PURE__ */ l({
  name: "D1Section",
  __name: "D1Section",
  props: /* @__PURE__ */ f({
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
  }, _),
  setup(t, { expose: n, emit: s }) {
    const c = s, i = t, a = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-section": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new B(
      "d1.section",
      i,
      {
        emits: c,
        classes: a,
        styles: r
      }
    ), p = e.render();
    return n(e.expose()), (D, g) => (d(), m(u(p)));
  }
});
export {
  T as _
};

import { defineComponent as l, computed as o, openBlock as d, createBlock as m, unref as g, mergeDefaults as u } from "vue";
import "@dxtmisha/functional";
import { defaultsPage as f, PageDesign as y } from "@dxtmisha/constructor/Page";
const B = {
  ...f
}, T = /* @__PURE__ */ l({
  name: "D1Page",
  __name: "D1Page",
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
  }, B),
  setup(t, { expose: n, emit: s }) {
    const a = s, c = t, r = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-page": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new y(
      "d1.page",
      c,
      {
        emits: a,
        classes: r,
        styles: i
      }
    ), p = e.render();
    return n(e.expose()), (_, D) => (d(), m(g(p)));
  }
});
export {
  T as _
};

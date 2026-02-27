import { defineComponent as l, computed as c, openBlock as d, createBlock as m, unref as g, mergeDefaults as u } from "vue";
import "@dxtmisha/functional";
import { T as y, k as B } from "./BlockDesign-B_QkwFRg-bwDWjacW.js";
class f extends B {
}
const _ = {
  tag: "main",
  tagHeader: "h1"
};
class x extends y {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(o, t, n, s = f) {
    super(
      o,
      t,
      n,
      s
    );
  }
}
const k = {
  ..._
}, b = /* @__PURE__ */ l({
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
  }, k),
  setup(e, { expose: o, emit: t }) {
    const n = t, s = e, r = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-page": !0
        // :classes-values [!] System label / Системная метка
      }
    })), p = c(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new x(
      "d1.page",
      s,
      {
        emits: n,
        classes: r,
        styles: p
      }
    ), i = a.render();
    return o(a.expose()), (D, T) => (d(), m(g(i)));
  }
});
export {
  b as _
};

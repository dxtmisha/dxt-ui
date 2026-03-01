import { defineComponent as l, computed as i, openBlock as d, createBlock as m, unref as u, mergeDefaults as y } from "vue";
import "@dxtmisha/functional";
import { T as B, k as f } from "./BlockDesign-B_QkwFRg-bwDWjacW.js";
class g extends f {
}
const x = {
  tag: "section",
  tagHeader: "h2"
};
class D extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(o, t, n, s = g) {
    super(
      o,
      t,
      n,
      s
    );
  }
}
const _ = {
  ...x
}, k = /* @__PURE__ */ l({
  name: "D1Section",
  __name: "D1Section",
  props: /* @__PURE__ */ y({
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
  setup(e, { expose: o, emit: t }) {
    const n = t, s = e, a = i(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-section": !0
        // :classes-values [!] System label / Системная метка
      }
    })), r = i(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), c = new D(
      "d1.section",
      s,
      {
        emits: n,
        classes: a,
        styles: r
      }
    ), p = c.render();
    return o(c.expose()), (T, h) => (d(), m(u(p)));
  }
}), I = k;
export {
  I as D1Section
};

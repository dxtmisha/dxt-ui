import { computed as l, defineComponent as p, openBlock as h, createBlock as g, unref as u, mergeDefaults as b } from "vue";
import { inArray as d } from "@dxtmisha/functional";
import { T as f, F as w } from "./ModalDesignAbstract-CdF7kXxe-4PrOiXMh.js";
import { D as B } from "./index-Bx1lEFLI.js";
import { D } from "./index-bF0IC8Yj.js";
import { D as y } from "./index-D3YDqNji.js";
const P = {
  barsBackHide: !0,
  // :default [!] System label / Системная метка
  imagePosition: "top"
};
class k extends w {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(s, o, i, t, a, n, e, r) {
    super(
      s,
      o,
      i,
      t,
      a,
      n,
      e,
      r,
      l(() => ({
        open: s.open,
        image: s.image,
        adaptive: "modal",
        imagePosition: s.imagePosition,
        closeButton: s.barsBackHide
      }))
    ), this.props = s, this.refs = o, this.element = i, this.classDesign = t, this.className = a, this.components = n, this.slots = e, this.emits = r;
  }
}
class x extends f {
  initItem(s) {
    return new (s != null ? s : k)(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    );
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      title: this.getSubClass("title"),
      header: this.getSubClass("header"),
      body: this.getSubClass("body"),
      footer: this.getSubClass("footer")
    };
  }
}
const c = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  width: ["sm", "md", "lg", "xl", "auto"]
  // :values [!] System label / Системная метка
}, C = {
  ...P,
  // :default [!] System label / Системная метка
  imagePosition: "top",
  width: "md"
}, _ = /* @__PURE__ */ p({
  name: "D1Modal",
  __name: "D1Modal",
  props: /* @__PURE__ */ b({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    image: {},
    open: { type: Boolean },
    imagePosition: {},
    width: {}
  }, C),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite"],
  setup(m, { expose: s, emit: o }) {
    const i = o, t = m, a = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-modal": !0,
        [`d1-modal--imagePosition--${t.imagePosition}`]: d(c.imagePosition, t.imagePosition),
        [`d1-modal--width--${t.width}`]: d(c.width, t.width)
        // :classes-values [!] System label / Системная метка
      }
    })), n = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new x(
      "d1.modal",
      t,
      {
        emits: i,
        classes: a,
        styles: n,
        components: {
          window: B,
          bars: D,
          actions: y
        }
      }
    ), r = e.render();
    return s(e.expose()), (A, H) => (h(), g(u(r)));
  }
}), v = _;
export {
  v as D1Modal
};

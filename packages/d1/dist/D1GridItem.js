import { h, defineComponent as u, computed as d, openBlock as p, createBlock as g, unref as x, mergeDefaults as b } from "vue";
import { DesignConstructorAbstract as f, inArray as r } from "@dxtmisha/functional";
var I = Object.defineProperty, v = (i, s, t) => s in i ? I(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t, D = (i, s, t) => v(i, s + "", t);
class $ {
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
  constructor(s, t, l, e, o, a, m, c) {
    this.props = s, this.refs = t, this.element = l, this.classDesign = e, this.className = o, this.components = a, this.slots = m, this.emits = c;
  }
}
const _ = {
  base: "1"
};
class y extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, t, l, e = $) {
    super(
      s,
      t,
      l
    ), D(this, "item"), this.item = new e(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var s;
    return h("div", {
      ...this.getAttrs(),
      class: (s = this.classes) == null ? void 0 : s.value.main
    }, this.initSlot("default"));
  }
}
const n = {
  // :values [!] System label / Системная метка
  base: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  sm: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  md: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  lg: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  xl: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  xl2: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  // :values [!] System label / Системная метка
}, k = {
  ..._
}, G = /* @__PURE__ */ u({
  name: "D1GridItem",
  __name: "D1GridItem",
  props: /* @__PURE__ */ b({
    base: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
    xl2: {}
  }, k),
  setup(i, { expose: s, emit: t }) {
    const l = t, e = i, o = d(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-gridItem": !0,
        [`d1-gridItem--base--${e.base}`]: r(n.base, e.base),
        [`d1-gridItem--sm--${e.sm}`]: r(n.sm, e.sm),
        [`d1-gridItem--md--${e.md}`]: r(n.md, e.md),
        [`d1-gridItem--lg--${e.lg}`]: r(n.lg, e.lg),
        [`d1-gridItem--xl--${e.xl}`]: r(n.xl, e.xl),
        [`d1-gridItem--xl2--${e.xl2}`]: r(n.xl2, e.xl2)
        // :classes-values [!] System label / Системная метка
      }
    })), a = d(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), m = new y(
      "d1.gridItem",
      e,
      {
        emits: l,
        classes: o,
        styles: a
      }
    ), c = m.render();
    return s(m.expose()), (w, A) => (p(), g(x(c)));
  }
}), N = G;
export {
  N as D1GridItem
};

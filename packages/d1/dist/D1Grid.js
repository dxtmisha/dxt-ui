import { h, defineComponent as m, computed as l, openBlock as u, createBlock as p, unref as d } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
var g = Object.defineProperty, v = (e, s, t) => s in e ? g(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, x = (e, s, t) => v(e, s + "", t);
class D {
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
  constructor(s, t, i, n, o, c, r, a) {
    this.props = s, this.refs = t, this.element = i, this.classDesign = n, this.className = o, this.components = c, this.slots = r, this.emits = a;
  }
}
class _ extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, t, i, n = D) {
    super(
      s,
      t,
      i
    ), x(this, "item"), this.item = new n(
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
const b = /* @__PURE__ */ m({
  name: "D1Grid",
  __name: "D1Grid",
  setup(e, { expose: s, emit: t }) {
    const i = t, n = e, o = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-grid": !0
        // :classes-values [!] System label / Системная метка
      }
    })), c = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new _(
      "d1.grid",
      n,
      {
        emits: i,
        classes: o,
        styles: c
      }
    ), a = r.render();
    return s(r.expose()), (k, y) => (u(), p(d(a)));
  }
}), C = b;
export {
  C as D1Grid
};

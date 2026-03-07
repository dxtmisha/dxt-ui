import { h as p, defineComponent as d, computed as m, openBlock as h, createBlock as y, unref as x, mergeDefaults as f } from "vue";
import { DesignConstructorAbstract as g, inArray as c } from "@dxtmisha/functional";
var D = Object.defineProperty, v = (t, e, s) => e in t ? D(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, b = (t, e, s) => v(t, e + "", s);
class z {
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
  constructor(e, s, n, i, l, o, r, a) {
    this.props = e, this.refs = s, this.element = n, this.classDesign = i, this.className = l, this.components = o, this.slots = r, this.emits = a;
  }
}
const k = {};
class _ extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, s, n, i = z) {
    super(
      e,
      s,
      n
    ), b(this, "item"), this.item = new i(
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
    var e;
    return p("div", {
      class: (e = this.classes) == null ? void 0 : e.value.main
    }, this.initSlot("default"));
  }
}
const u = {
  // :values [!] System label / Системная метка
  size: ["x", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, w = {
  ...k,
  // :default [!] System label / Системная метка
  size: "md"
}, C = /* @__PURE__ */ d({
  name: "D1Dummy",
  __name: "D1Dummy",
  props: /* @__PURE__ */ f({
    size: {},
    palette: {}
  }, w),
  setup(t, { expose: e, emit: s }) {
    const n = s, i = t, l = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-dummy": !0,
        [`d1-dummy--size--${i.size}`]: c(u.size, i.size),
        [`d1-palette d1-palette--${i.palette}`]: c(u.palette, i.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), o = m(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new _(
      "d1.dummy",
      i,
      {
        emits: n,
        classes: l,
        styles: o
      }
    ), a = r.render();
    return e(r.expose()), (A, B) => (h(), y(x(a)));
  }
}), T = C;
export {
  T as D1Dummy
};

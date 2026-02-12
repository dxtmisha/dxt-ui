var c = Object.defineProperty;
var l = (i, t, s) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var o = (i, t, s) => l(i, typeof t != "symbol" ? t + "" : t, s);
import { DesignConstructorAbstract as p } from "@dxtmisha/functional";
import { h as u } from "vue";
class g {
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
  constructor(t, s, e, n, r, a, h, m) {
    this.props = t, this.refs = s, this.element = e, this.classDesign = n, this.className = r, this.components = a, this.slots = h, this.emits = m;
  }
}
const b = {};
class d extends p {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, e, n, r = g) {
    super(
      s,
      e,
      n
    );
    o(this, "item");
    this.item = new r(
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
    return {
      // TODO: list of properties for export
      // TODO: список свойств для экспорта
    };
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
    return {
      // TODO: list of user styles
      // TODO: список пользовательских стилей
    };
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var s;
    return u("div", {
      // ...this.getAttrs(),
      ref: this.element,
      class: (s = this.classes) == null ? void 0 : s.value.main
    });
  }
}
export {
  g as TabsNavigation,
  d as TabsNavigationDesign,
  b as defaultsTabsNavigation
};

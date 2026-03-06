var a = Object.defineProperty;
var c = (i, t, s) => t in i ? a(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var h = (i, t, s) => c(i, typeof t != "symbol" ? t + "" : t, s);
import { DesignConstructorAbstract as p } from "@dxtmisha/functional";
import { h as u } from "vue";
class d {
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
  constructor(t, s, e, r, n, o, l, m) {
    this.props = t, this.refs = s, this.element = e, this.classDesign = r, this.className = n, this.components = o, this.slots = l, this.emits = m;
  }
}
const x = {};
class G extends p {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, e, r, n = d) {
    super(
      s,
      e,
      r
    );
    h(this, "item");
    this.item = new n(
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
    return u("div", {
      ...this.getAttrs(),
      class: (s = this.classes) == null ? void 0 : s.value.main
    }, this.initSlot("default"));
  }
}
export {
  d as Grid,
  G as GridDesign,
  x as defaultsGrid
};

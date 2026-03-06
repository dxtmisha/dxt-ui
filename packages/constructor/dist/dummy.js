var a = Object.defineProperty;
var c = (i, t, s) => t in i ? a(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var m = (i, t, s) => c(i, typeof t != "symbol" ? t + "" : t, s);
import { DesignConstructorAbstract as u } from "@dxtmisha/functional";
import { h as p } from "vue";
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
  constructor(t, s, e, n, r, o, h, l) {
    this.props = t, this.refs = s, this.element = e, this.classDesign = n, this.className = r, this.components = o, this.slots = h, this.emits = l;
  }
}
const y = {};
class x extends u {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, e, n, r = D) {
    super(
      s,
      e,
      n
    );
    m(this, "item");
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
    return p("div", {
      class: (s = this.classes) == null ? void 0 : s.value.main
    }, this.initSlot("default"));
  }
}
export {
  D as Dummy,
  x as DummyDesign,
  y as defaultsDummy
};

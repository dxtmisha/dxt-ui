var l = Object.defineProperty;
var c = (i, s, t) => s in i ? l(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var h = (i, s, t) => c(i, typeof s != "symbol" ? s + "" : s, t);
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
  constructor(s, t, e, r, n, o, m, a) {
    this.props = s, this.refs = t, this.element = e, this.classDesign = r, this.className = n, this.components = o, this.slots = m, this.emits = a;
  }
}
const x = {
  base: "1"
};
class G extends p {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, e, r, n = d) {
    super(
      t,
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
    var t;
    return u("div", {
      ...this.getAttrs(),
      class: (t = this.classes) == null ? void 0 : t.value.main
    }, this.initSlot("default"));
  }
}
export {
  d as GridItem,
  G as GridItemDesign,
  x as defaultsGridItem
};

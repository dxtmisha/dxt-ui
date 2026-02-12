var c = Object.defineProperty;
var m = (i, s, t) => s in i ? c(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var l = (i, s, t) => m(i, typeof s != "symbol" ? s + "" : s, t);
import { computed as p, h as u } from "vue";
import { DesignConstructorAbstract as g } from "@dxtmisha/functional";
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
  constructor(s, t, e, n, r, o, a, h) {
    /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
    l(this, "slotData", p(() => ({
      classItem: `${this.className}__item`,
      binds: {
        class: `${this.className}__item`
      }
    })));
    this.props = s, this.refs = t, this.element = e, this.classDesign = n, this.className = r, this.components = o, this.slots = a, this.emits = h;
  }
}
const v = {
  tag: "div",
  // :default [!] System label / Системная метка
  align: "left"
};
class N extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, e, n, r = d) {
    super(
      t,
      e,
      n
    );
    l(this, "item");
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
    var e, n;
    const t = [];
    return this.initSlot("default", t, this.item.slotData.value), u(
      (e = this.props.tag) != null ? e : "div",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (n = this.classes) == null ? void 0 : n.value.main
      },
      t
    );
  }
}
export {
  d as HorizontalScroll,
  N as HorizontalScrollDesign,
  v as defaultsHorizontalScroll
};

var d = Object.defineProperty;
var p = (i, t, s) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var r = (i, t, s) => p(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as a, h as f } from "vue";
import { DesignConstructorAbstract as g } from "@dxtmisha/functional";
import { S } from "./ScrollToXInclude-DvJzmTtW.js";
class v {
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.ScrollToXIncludeConstructor class for working with scroll/ класс для работы со скроллом
   */
  constructor(t, s, e, l, n, h, c, m, o) {
    r(this, "scroll");
    r(this, "binds", a(() => ({
      ref: this.element,
      ...this.scroll.binds.value
    })));
    /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
    r(this, "slotData", a(() => ({
      classItem: `${this.className}__item`,
      classItemSelected: `${this.className}__item--selected`,
      binds: {
        class: `${this.className}__item`
      }
    })));
    this.props = t, this.refs = s, this.element = e, this.classDesign = l, this.className = n, this.components = h, this.slots = c, this.emits = m;
    const {
      ScrollToXIncludeConstructor: u = S
    } = o != null ? o : {};
    this.scroll = new u(e);
  }
}
const I = {
  tag: "div",
  // :default [!] System label / Системная метка
  flush: !0
};
class x extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, e, l, n = v) {
    super(
      s,
      e,
      l
    );
    r(this, "item");
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
    var e, l;
    const s = [];
    return this.initSlot("default", s, this.item.slotData.value), f(
      (e = this.props.tag) != null ? e : "div",
      {
        ...this.getAttrs(),
        class: (l = this.classes) == null ? void 0 : l.value.main,
        ...this.item.binds.value
      },
      s
    );
  }
}
export {
  v as HorizontalScroll,
  x as HorizontalScrollDesign,
  I as defaultsHorizontalScroll
};

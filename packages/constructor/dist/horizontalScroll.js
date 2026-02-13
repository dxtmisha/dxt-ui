var d = Object.defineProperty;
var S = (s, t, e) => t in s ? d(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var l = (s, t, e) => S(s, typeof t != "symbol" ? t + "" : t, e);
import { onMounted as p, nextTick as g, computed as r, h as v } from "vue";
import { goScrollTo as f, DesignConstructorAbstract as D } from "@dxtmisha/functional";
import { S as I } from "./ScrollToXInclude-DvJzmTtW.js";
class x {
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
  constructor(t, e, i, o, n, c, h, m, a) {
    l(this, "scroll");
    /**
     * Returns bindings for the element.
     *
     * Возвращает привязки для элемента.
     */
    l(this, "binds", r(() => ({
      ref: this.element,
      ...this.scroll.binds.value
    })));
    /**
     * Exposed properties and methods.
     *
     * Открытые свойства и методы.
     */
    l(this, "expose", {
      toSelected: () => this.toSelected()
    });
    /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
    l(this, "slotData", r(() => ({
      classItem: `${this.className}__item`,
      classItemSelected: `${this.className}__item--selected`,
      binds: {
        class: `${this.className}__item`
      }
    })));
    /**
     * Scrolls to the selected element.
     *
     * Прокручивает к выбранному элементу.
     */
    l(this, "toSelected", () => {
      const t = this.getItemSelected();
      this.element.value && t && f(
        this.element.value,
        t
      );
    });
    this.props = t, this.refs = e, this.element = i, this.classDesign = o, this.className = n, this.components = c, this.slots = h, this.emits = m;
    const {
      ScrollToXIncludeConstructor: u = I
    } = a != null ? a : {};
    this.scroll = new u(i), p(async () => {
      await g(), requestAnimationFrame(() => this.toSelected());
    });
  }
  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  getItemSelected() {
    var t, e;
    return (e = (t = this.element.value) == null ? void 0 : t.querySelector(
      `.${this.slotData.value.classItemSelected}`
    )) != null ? e : void 0;
  }
}
const $ = {
  tag: "div",
  // :default [!] System label / Системная метка
  flush: !0
};
class w extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, i, o, n = x) {
    super(
      e,
      i,
      o
    );
    l(this, "item");
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
      ...this.item.expose
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
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var i, o;
    const e = [];
    return this.initSlot("default", e, this.item.slotData.value), v(
      (i = this.props.tag) != null ? i : "div",
      {
        ...this.getAttrs(),
        class: (o = this.classes) == null ? void 0 : o.value.main,
        ...this.item.binds.value
      },
      e
    );
  }
}
export {
  x as HorizontalScroll,
  w as HorizontalScrollDesign,
  $ as defaultsHorizontalScroll
};

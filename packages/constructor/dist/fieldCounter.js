var m = Object.defineProperty;
var c = (e, t, s) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => c(e, typeof t != "symbol" ? t + "" : t, s);
import { computed as o, h as d } from "vue";
import { isFilled as g, toNumber as h, DesignConstructorAbstract as x } from "@dxtmisha/functional";
import { F as b } from "./FieldCounterInclude-D0oojGWY.js";
class f {
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
  constructor(t, s, r, n, u, a, l, p) {
    /** Checks if it is necessary to display the number of input characters/ Проверяет, надо ли выводить количество вводимых символов */
    i(this, "is", o(() => this.props.counter !== void 0 || this.isMax.value));
    /** Checks if it is necessary to display the maximum available number of characters/ Проверяет, надо ли выводить максимальное доступное количество символов */
    i(this, "isMax", o(() => this.getMax() > 0));
    /** Returns text for output/ Возвращает текст для вывода */
    i(this, "item", o(() => {
      const t = this.getCounter().toString(), s = this.getMax().toString();
      return g(this.props.template) ? this.props.template.replace("[c]", t).replace("[m]", s) : this.isMax.value ? `${t} / ${s}` : t;
    }));
    this.props = t, this.refs = s, this.element = r, this.classDesign = n, this.className = u, this.components = a, this.slots = l, this.emits = p;
  }
  /**
   * Returns the number of input characters.
   *
   * Возвращает количество вводимых символов.
   */
  getCounter() {
    var t;
    return h((t = this.props.counter) != null ? t : 0);
  }
  /**
   * Returns the maximum available input number.
   *
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var t;
    return h((t = this.props.maxlength) != null ? t : 0);
  }
}
const F = {};
class D extends x {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, r, n) {
    super(
      s,
      r,
      n
    );
    i(this, "item");
    this.item = new f(
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
    if (this.item.is.value)
      return d(
        "div",
        {
          ...this.getAttrs(),
          id: this.props.id,
          class: (s = this.classes) == null ? void 0 : s.value.main,
          innerHTML: this.item.item.value
        }
      );
  }
}
export {
  f as FieldCounter,
  D as FieldCounterDesign,
  b as FieldCounterInclude,
  F as defaultsFieldCounter
};

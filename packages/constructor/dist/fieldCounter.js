var x = Object.defineProperty;
var d = (s, t, e) => t in s ? x(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => d(s, typeof t != "symbol" ? t + "" : t, e);
import { computed as r, h as o } from "vue";
import { isFilled as v, applyTemplate as f, toNumber as l, DesignConstructorAbstract as M } from "@dxtmisha/functional";
import { T as C } from "./TextInclude-DyFukbT2.js";
import { A as u } from "./AriaStaticInclude-BVCgDZbU.js";
import { F as w } from "./FieldCounterInclude-D0oojGWY.js";
class T {
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
   * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(t, e, n, a, h, m, p, c, g = C) {
    i(this, "text");
    /** Checks if it is necessary to display the number of input characters/ Проверяет, надо ли выводить количество вводимых символов */
    i(this, "is", r(() => this.props.counter !== void 0 || this.isMax.value));
    /** Checks if it is necessary to display the maximum available number of characters/ Проверяет, надо ли выводить максимальное доступное количество символов */
    i(this, "isMax", r(() => this.getMax() > 0));
    /** Returns text for output/ Возвращает текст для вывода */
    i(this, "item", r(() => {
      const t = this.getCounter().toString(), e = this.getMax().toString();
      return v(this.props.template) ? this.props.template.replace("[c]", t).replace("[m]", e) : this.isMax.value ? `${t} / ${e}` : t;
    }));
    /**
     * Returns the text for the screen reader.
     *
     * Возвращает текст для скринридера.
     */
    i(this, "ariaText", r(() => {
      if (this.isMax.value) {
        const t = this.getRemaining();
        if (t <= 0)
          return this.text.characterLimit.value;
        if (t <= this.getMaxlengthOnce() && this.text.characterRemaining.value)
          return f(
            this.text.characterRemaining.value,
            { left: t }
          );
      }
    }));
    this.props = t, this.refs = e, this.element = n, this.classDesign = a, this.className = h, this.components = m, this.slots = p, this.emits = c, this.text = new g(this.props);
  }
  /**
   * Returns the number of input characters.
   *
   * Возвращает количество вводимых символов.
   */
  getCounter() {
    var t;
    return l((t = this.props.counter) != null ? t : 0);
  }
  /**
   * Returns the maximum available input number.
   *
   * Возвращает максимально доступное вводимое число.
   */
  getMax() {
    var t;
    return l((t = this.props.maxlength) != null ? t : 0);
  }
  /**
   * Returns the number of characters remaining at which the screen reader starts announcing.
   *
   * Возвращает количество оставшихся символов, при котором скринридер начинает произносить.
   */
  getMaxlengthOnce() {
    return this.props.maxlengthOnce !== void 0 ? l(this.props.maxlengthOnce) : Math.ceil(this.getMax() * 0.1);
  }
  /**
   * Returns the number of remaining characters.
   *
   * Возвращает количество оставшихся символов.
   */
  getRemaining() {
    return this.getMax() - this.getCounter();
  }
}
const D = {};
class O extends M {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, n, a, h = T) {
    super(
      e,
      n,
      a
    );
    i(this, "item");
    /**
     * Render hidden element for screen reader.
     *
     * Рендер скрытого элемента для скринридера.
     */
    i(this, "renderAria", () => {
      var e;
      return this.item.ariaText.value ? [
        o(
          "div",
          {
            class: (e = this.classes) == null ? void 0 : e.value.aria,
            ...u.live("polite")
          },
          [
            o(
              "span",
              {
                ...u.role("img"),
                ...u.label(this.item.ariaText.value)
              }
            )
          ]
        )
      ] : [];
    });
    this.item = new h(
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
      main: {},
      // :classes [!] System label / Системная метка
      aria: this.getSubClass("aria")
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
    if (this.item.is.value)
      return [
        o(
          "span",
          {
            ...this.getAttrs(),
            id: this.props.id,
            class: (e = this.classes) == null ? void 0 : e.value.main,
            innerHTML: this.item.item.value
          }
        ),
        ...this.renderAria()
      ];
  }
}
export {
  T as FieldCounter,
  O as FieldCounterDesign,
  w as FieldCounterInclude,
  D as defaultsFieldCounter
};

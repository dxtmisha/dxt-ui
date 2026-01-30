var c = Object.defineProperty;
var g = (r, t, s) => t in r ? c(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var e = (r, t, s) => g(r, typeof t != "symbol" ? t + "" : t, s);
import { computed as o, h as l } from "vue";
import { isFilled as n, DesignConstructorAbstract as u } from "@dxtmisha/functional";
import { F as v } from "./FieldCounterInclude-D0oojGWY.js";
import { S as M } from "./SkeletonInclude-BIUzAO2s.js";
import { A as f } from "./AriaStaticInclude-C1f8ebHk.js";
import { F as H } from "./FieldMessageInclude-DoyOsRK_.js";
class C {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
   */
  constructor(t, s) {
    /** Checks if there is text/ Проверяет, есть ли текст */
    e(this, "is", o(
      () => n(this.item.value) || !!(this.slots && ("helper" in this.slots || "validation" in this.slots))
    ));
    /** Checks if there is an error/ Проверяет, есть ли ошибка */
    e(this, "isValidation", o(
      () => n(this.props.validationMessage) || !!(this.slots && "validation" in this.slots)
    ));
    /** Returns text/ Возвращает текст */
    e(this, "item", o(() => this.props.validationMessage ? this.props.validationMessage : this.props.helperMessage ? this.props.helperMessage : ""));
    this.props = t, this.slots = s;
  }
}
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
  constructor(t, s, i, a, h, p, d, m) {
    /** Field counter functionality/ Функциональность счетчика поля */
    e(this, "fieldCounter");
    /** Message functionality/ Функциональность сообщений */
    e(this, "message");
    /** Skeleton include/ Подключение скелетона */
    e(this, "skeleton");
    /**
     * Checks if there are values for outputting the element/ Проверяет, есть ли значения для вывода элемента
     */
    e(this, "is", o(() => (this.props.forceShow || !this.props.disabled) && (this.message.is.value || this.fieldCounter.isCounter.value)));
    /**
     * Returns data for the main style class/ Возвращает данные для главного класса стиля
     */
    e(this, "classes", o(() => ({
      [`${this.className}--validation`]: this.message.isValidation.value
    })));
    /**
     * Data for helper slot/ Данные для слота helper
     */
    e(this, "slotHelperData", o(() => ({
      message: this.props.helperMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    })));
    /**
     * Data for validation slot/ Данные для слота validation
     */
    e(this, "slotValidationData", o(() => ({
      message: this.props.validationMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    })));
    this.props = t, this.refs = s, this.element = i, this.classDesign = a, this.className = h, this.components = p, this.slots = d, this.emits = m, this.fieldCounter = new v(
      this.props,
      this.className,
      this.components
    ), this.message = new C(this.props, this.slots), this.skeleton = new M(
      this.props,
      this.classDesign,
      ["classTextVariant"]
    );
  }
}
const V = {};
class b extends u {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, i, a) {
    super(
      s,
      i,
      a
    );
    e(this, "item");
    /**
     * Rendering text.
     *
     * Рендеринг текста.
     */
    e(this, "renderInfo", () => {
      var a;
      const s = [], i = {
        key: "message",
        id: this.props.helperId,
        class: [
          (a = this.classes) == null ? void 0 : a.value.info,
          this.item.skeleton.classes.value
        ]
      };
      return this.initSlot("helper", s, this.item.slotHelperData.value), s.length < 1 && (i.innerHTML = this.props.helperMessage), [
        l(
          "div",
          i,
          s
        )
      ];
    });
    /**
     * Rendering error.
     *
     * Рендеринг ошибки.
     */
    e(this, "renderError", () => {
      var a;
      const s = [], i = {
        key: "message",
        id: this.props.validationId,
        class: (a = this.classes) == null ? void 0 : a.value.error,
        ...f.role("alert")
      };
      return this.initSlot("validation", s, this.item.slotValidationData.value), s.length < 1 && (i.innerHTML = this.props.validationMessage), [
        l(
          "div",
          i,
          s
        )
      ];
    });
    this.item = new D(
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
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      info: this.getSubClass("info"),
      error: this.getSubClass("error")
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
      return l(
        "div",
        {
          ...this.getAttrs(),
          key: "main",
          class: (s = this.classes) == null ? void 0 : s.value.main
        },
        [
          ...this.renderInfo(),
          ...this.renderError(),
          ...this.item.fieldCounter.render()
        ]
      );
  }
}
export {
  D as FieldMessage,
  b as FieldMessageDesign,
  H as FieldMessageInclude,
  V as defaultsFieldMessage
};

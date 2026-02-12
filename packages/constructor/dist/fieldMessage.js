var M = Object.defineProperty;
var f = (o, i, s) => i in o ? M(o, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[i] = s;
var e = (o, i, s) => f(o, typeof i != "symbol" ? i + "" : i, s);
import { computed as r, h } from "vue";
import { isFilled as p, DesignConstructorAbstract as C } from "@dxtmisha/functional";
import { S as F } from "./SkeletonInclude-BIUzAO2s.js";
import { F as I } from "./FieldCounterInclude-D0oojGWY.js";
import { A as S } from "./AriaStaticInclude-ZrgMZ2ja.js";
import { F as T } from "./FieldMessageInclude-BJDnir34.js";
class D {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
   */
  constructor(i, s) {
    /** Checks if there is text/ Проверяет, есть ли текст */
    e(this, "is", r(
      () => p(this.item.value) || !!(this.slots && ("helper" in this.slots || "validation" in this.slots))
    ));
    /** Checks if there is an error/ Проверяет, есть ли ошибка */
    e(this, "isValidation", r(
      () => p(this.props.validationMessage) || !!(this.slots && "validation" in this.slots)
    ));
    /** Returns text/ Возвращает текст */
    e(this, "item", r(() => this.props.validationMessage ? this.props.validationMessage : this.props.helperMessage ? this.props.helperMessage : ""));
    this.props = i, this.slots = s;
  }
}
class k {
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
   * @param constructors.FieldCounterIncludeConstructor class for working with field counter/ класс для работы со счетчиком поля
   * @param constructors.FieldMessageMessageConstructor class for working with messages/ класс для работы с сообщениями
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   */
  constructor(i, s, t, a, l, d, u, g, n) {
    /** Field counter functionality/ Функциональность счетчика поля */
    e(this, "fieldCounter");
    /** Message functionality/ Функциональность сообщений */
    e(this, "message");
    /** Skeleton include/ Подключение скелетона */
    e(this, "skeleton");
    /**
     * Checks if there are values for outputting the element/ Проверяет, есть ли значения для вывода элемента
     */
    e(this, "is", r(() => (this.props.forceShow || !this.props.disabled) && (this.message.is.value || this.fieldCounter.isCounter.value)));
    /**
     * Checks if there is a helper message.
     *
     * Проверяет, есть ли вспомогательное сообщение.
     */
    e(this, "isHelper", r(() => !!this.props.helperMessage || !!(this.slots && "helper" in this.slots)));
    /**
     * Checks if there is a validation message.
     *
     * Проверяет, есть ли сообщение о валидации.
     */
    e(this, "isValidation", r(() => !!this.props.validationMessage || !!(this.slots && "validation" in this.slots)));
    /**
     * Returns data for the main style class/ Возвращает данные для главного класса стиля
     */
    e(this, "classes", r(() => ({
      [`${this.className}--validation`]: this.message.isValidation.value
    })));
    /**
     * Data for helper slot/ Данные для слота helper
     */
    e(this, "slotHelperData", r(() => ({
      message: this.props.helperMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    })));
    /**
     * Data for validation slot/ Данные для слота validation
     */
    e(this, "slotValidationData", r(() => ({
      message: this.props.validationMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    })));
    this.props = i, this.refs = s, this.element = t, this.classDesign = a, this.className = l, this.components = d, this.slots = u, this.emits = g;
    const {
      FieldCounterIncludeConstructor: m = I,
      FieldMessageMessageConstructor: c = D,
      SkeletonIncludeConstructor: v = F
    } = n != null ? n : {};
    this.fieldCounter = new m(
      this.props,
      this.className,
      this.components
    ), this.message = new c(this.props, this.slots), this.skeleton = new v(
      this.props,
      this.classDesign,
      ["classTextVariant"]
    );
  }
}
const y = {};
class A extends C {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the element/ класс для работы с элементом
   */
  constructor(s, t, a, l = k) {
    super(
      s,
      t,
      a
    );
    e(this, "item");
    /**
     * Rendering text.
     *
     * Рендеринг текста.
     */
    e(this, "renderInfo", () => {
      var s;
      if (this.item.isHelper.value) {
        const t = [], a = {
          key: "message",
          id: this.props.helperId,
          class: [
            (s = this.classes) == null ? void 0 : s.value.info,
            this.item.skeleton.classes.value
          ]
        };
        return this.initSlot("helper", t, this.item.slotHelperData.value), t.length < 1 && (a.innerHTML = this.props.helperMessage), [
          h(
            "div",
            a,
            t
          )
        ];
      }
      return [];
    });
    /**
     * Rendering error.
     *
     * Рендеринг ошибки.
     */
    e(this, "renderError", () => {
      var s;
      if (this.item.isValidation.value) {
        const t = [], a = {
          key: "message",
          id: this.props.validationId,
          class: (s = this.classes) == null ? void 0 : s.value.error,
          ...S.role("alert")
        };
        return this.initSlot("validation", t, this.item.slotValidationData.value), t.length < 1 && (a.innerHTML = this.props.validationMessage), [
          h(
            "div",
            a,
            t
          )
        ];
      }
      return [];
    });
    this.item = new l(
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
      return h(
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
  k as FieldMessage,
  A as FieldMessageDesign,
  T as FieldMessageInclude,
  y as defaultsFieldMessage
};

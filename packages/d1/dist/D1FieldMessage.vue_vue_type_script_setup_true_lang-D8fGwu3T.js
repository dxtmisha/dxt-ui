import { h as c, computed as o, defineComponent as f, openBlock as M, createBlock as C, unref as y, mergeDefaults as D } from "vue";
import { DesignConstructorAbstract as k, isFilled as m } from "@dxtmisha/functional";
import { C as b, D as S } from "./index-DNSGrhyp.js";
import { $ as w } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { l as I } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var x = Object.defineProperty, V = (a, s, t) => s in a ? x(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[s] = t, e = (a, s, t) => V(a, typeof s != "symbol" ? s + "" : s, t);
class _ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
   */
  constructor(s, t) {
    e(this, "is", o(
      () => m(this.item.value) || !!(this.slots && ("helper" in this.slots || "validation" in this.slots))
    )), e(this, "isValidation", o(
      () => m(this.props.validationMessage) || !!(this.slots && "validation" in this.slots)
    )), e(this, "item", o(() => this.props.validationMessage ? this.props.validationMessage : this.props.helperMessage ? this.props.helperMessage : "")), this.props = s, this.slots = t;
  }
}
class B {
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
  constructor(s, t, n, h, l, i, r, p, d) {
    e(this, "fieldCounter"), e(this, "message"), e(this, "skeleton"), e(this, "is", o(() => (this.props.forceShow || !this.props.disabled) && (this.message.is.value || this.fieldCounter.isCounter.value))), e(this, "isHelper", o(() => !!this.props.helperMessage || !!(this.slots && "helper" in this.slots))), e(this, "isValidation", o(() => !!this.props.validationMessage || !!(this.slots && "validation" in this.slots))), e(this, "classes", o(() => ({
      [`${this.className}--validation`]: this.message.isValidation.value
    }))), e(this, "slotHelperData", o(() => ({
      message: this.props.helperMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    }))), e(this, "slotValidationData", o(() => ({
      message: this.props.validationMessage,
      helperMessage: this.props.helperMessage,
      validationMessage: this.props.validationMessage
    }))), this.props = s, this.refs = t, this.element = n, this.classDesign = h, this.className = l, this.components = i, this.slots = r, this.emits = p;
    const {
      FieldCounterIncludeConstructor: u = b,
      FieldMessageMessageConstructor: g = _,
      SkeletonIncludeConstructor: v = w
    } = d != null ? d : {};
    this.fieldCounter = new u(
      this.props,
      this.className,
      this.components
    ), this.message = new g(this.props, this.slots), this.skeleton = new v(
      this.props,
      this.classDesign,
      ["classTextVariant"]
    );
  }
}
const F = {};
class H extends k {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the element/ класс для работы с элементом
   */
  constructor(s, t, n, h = B) {
    super(
      s,
      t,
      n
    ), e(this, "item"), e(this, "renderInfo", () => {
      var l;
      if (this.item.isHelper.value) {
        const i = [], r = {
          key: "message",
          id: this.props.helperId,
          class: [
            (l = this.classes) == null ? void 0 : l.value.info,
            this.item.skeleton.classes.value
          ]
        };
        return this.initSlot("helper", i, this.item.slotHelperData.value), i.length < 1 && (r.innerHTML = this.props.helperMessage), [
          c(
            "div",
            r,
            i
          )
        ];
      }
      return [];
    }), e(this, "renderError", () => {
      var l;
      if (this.item.isValidation.value) {
        const i = [], r = {
          key: "message",
          id: this.props.validationId,
          class: (l = this.classes) == null ? void 0 : l.value.error,
          ...I.role("alert")
        };
        return this.initSlot("validation", i, this.item.slotValidationData.value), i.length < 1 && (r.innerHTML = this.props.validationMessage), [
          c(
            "div",
            r,
            i
          )
        ];
      }
      return [];
    }), this.item = new h(
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
      return c(
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
const T = {
  ...F
}, j = /* @__PURE__ */ f({
  name: "D1FieldMessage",
  __name: "D1FieldMessage",
  props: /* @__PURE__ */ D({
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
    fieldCounterAttrs: {},
    isSkeleton: { type: Boolean },
    forceShow: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    helperId: {},
    validationId: {}
  }, T),
  setup(a, { expose: s, emit: t }) {
    const n = t, h = a, l = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-fieldMessage": !0
        // :classes-values [!] System label / Системная метка
      }
    })), i = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new H(
      "d1.fieldMessage",
      h,
      {
        emits: n,
        classes: l,
        styles: i,
        components: {
          fieldCounter: S
        }
      }
    ), p = r.render();
    return s(r.expose()), (d, u) => (M(), C(y(p)));
  }
});
export {
  j as _
};

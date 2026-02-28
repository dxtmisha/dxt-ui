import { computed as n, ref as H, watch as j, h as E, defineComponent as L, openBlock as z, createBlock as R, unref as U, mergeDefaults as q } from "vue";
import { toNumber as y, isObject as b, anyToString as G, DesignConstructorAbstract as K, toBind as w, getRef as x, getBind as Z, toBinds as I } from "@dxtmisha/functional";
import { D as J, O as Q, T as W, V as X, N as Y, H as tt, w as et } from "./FieldEventInclude-h5Fg7306-DMkm_Aee.js";
import { a as it } from "./FieldInputCheckInclude-CjNYyGTb-C7dFscvh.js";
import { a as st } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { y as rt, D as nt } from "./index-gGxovD48.js";
import { _ as ot } from "./D1Mask.vue_vue_type_script_setup_true_lang-CT8oOyvU.js";
var at = Object.defineProperty, lt = (s, t, e) => t in s ? at(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, h = (s, t, e) => lt(s, typeof t != "symbol" ? t + "" : t, e);
class ht {
  constructor() {
    h(this, "item", H(!1));
  }
  /**
   * Toggles the values.
   *
   * Переключает значения.
   */
  toggle() {
    return this.item.value = !this.item.value, this;
  }
}
class ut {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(t, e) {
    h(this, "item", n(() => {
      var a;
      const r = this.props.type;
      return r === "password" && (a = this.visibility) != null && a.item.value ? "text" : r != null ? r : "text";
    })), this.props = t, this.visibility = e;
  }
  /**
   * Returns the input type.
   *
   * Возвращает тип ввода.
   */
  get() {
    return this.item.value;
  }
}
const B = {
  email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
  password: "[0-9a-zA-Z\\-!@#$%^&*]+"
};
class pt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    h(this, "item", n(() => {
      if (this.props.pattern)
        return this.props.pattern;
      if (this.type)
        return B == null ? void 0 : B[this.type.item.value];
    })), this.props = t, this.type = e;
  }
}
class ct {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    h(this, "item", n(() => {
      if (this.props.inputMode)
        return this.props.inputMode;
      switch (this.type.item.value) {
        case "number":
        case "datetime":
        case "date":
        case "year-month":
        case "time":
        case "hour-minute":
          return "numeric";
        case "number-format":
        case "currency":
          return "decimal";
        case "tel":
          return "tel";
        case "email":
          return "email";
        default:
          return;
      }
    })), h(this, "autocomplete", n(() => {
      if (this.props.autocomplete)
        return this.props.autocomplete;
      switch (this.type.item.value) {
        case "search":
          return "off";
        case "email":
          return "email";
        case "password":
          return "new-password";
        case "tel":
          return "tel";
        case "url":
          return "url";
      }
    })), this.props = t, this.type = e;
  }
}
let mt = class {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e, a) {
    h(this, "is", n(() => !!(this.props.arrow && this.props.arrow !== "none"))), h(this, "disabledPrevious", n(() => !this.isPrevious(this.value.number.value))), h(this, "disabledNext", n(() => !this.isNext(this.value.number.value))), h(this, "step", n(() => {
      var r, l;
      return y((l = (r = this.props.arrowStep) != null ? r : this.props.step) != null ? l : 1);
    })), h(this, "min", n(() => {
      var r;
      return (r = y(this.props.min)) != null ? r : void 0;
    })), h(this, "max", n(() => y(this.props.max) || void 0)), this.props = t, this.value = e, this.type = a;
  }
  /**
   * Checks if the arrow type is carousel.
   *
   * Проверяет, является ли тип стрелок carousel.
   */
  isCarousel() {
    return this.get() === "carousel";
  }
  /**
   * Checks if the arrow type is stepper.
   *
   * Проверяет, является ли тип стрелок stepper.
   */
  isStepper() {
    return this.get() === "stepper";
  }
  /**
   * Checks if it is possible to decrease the value.
   *
   * Проверяет, можно ли уменьшить значение.
   * @param value values for checking/ значения для проверки
   */
  isPrevious(t) {
    const e = this.min.value;
    return e === void 0 || t > e;
  }
  /**
   * Checks if it is possible to increase the value.
   *
   * Проверяет, можно ли увеличить значение.
   * @param value values for checking/ значения для проверки
   */
  isNext(t) {
    const e = this.max.value;
    return e === void 0 || t < e;
  }
  /**
   * Returns arrow type.
   *
   * Возвращает тип стрелок.
   */
  get() {
    var t, e;
    switch (this.props.arrow) {
      case "auto":
        if (((t = this.type) == null ? void 0 : t.get()) === "number" || ((e = this.type) == null ? void 0 : e.get()) === "number-format")
          return "stepper";
        break;
    }
    return this.props.arrow;
  }
  /**
   * Returns arrow alignment.
   *
   * Возвращает выравнивание стрелок.
   */
  align() {
    return this.props.arrowAlign;
  }
  /**
   * Decreases the value.
   *
   * Уменьшает значение.
   */
  previous() {
    const t = this.value.number.value - this.step.value;
    return this.isPrevious(t) ? this.value.set(t.toString()) : this.toMin(), this;
  }
  /**
   * Increases the value.
   *
   * Увеличивает значение.
   */
  next() {
    const t = this.value.number.value + this.step.value;
    return this.isNext(t) ? this.value.set(t.toString()) : this.toMax(), this;
  }
  /**
   * Decreases to the minimum value.
   *
   * Уменьшает до минимального значения.
   */
  toMin() {
    if (!this.disabledPrevious.value) {
      const t = this.min.value;
      t !== void 0 && this.value.set(t.toString());
    }
    return this;
  }
  /**
   * Increases to the maximum value.
   * s
   * Увеличивает до максимального значения.
   */
  toMax() {
    if (!this.disabledNext.value) {
      const t = this.max.value;
      t !== void 0 && this.value.set(t.toString());
    }
    return this;
  }
};
class dt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param value object for working with value/ объект для работы со значениями
   * @param text object for working with texts/ объект для работы с текстами
   */
  constructor(t, e, a, r) {
    this.props = t, this.element = e, this.value = a, this.text = r;
  }
  /**
   * Checks whether matching verification is enabled
   *
   * Проверяет, включена ли проверка совпадения
   */
  is() {
    return !!this.props.match;
  }
  /**
   * Returns selector used to find external element
   *
   * Возвращает селектор для поиска внешнего элемента
   */
  getSelectors() {
    if (this.is())
      return b(this.props.match) ? this.props.match.name : this.props.match;
  }
  /**
   * Returns validation error text
   *
   * Возвращает текст ошибки валидации
   */
  getValidationMessage() {
    var t, e;
    if (this.is()) {
      if (b(this.props.match) && (t = this.props.match) != null && t.validationMessage)
        return this.props.match.validationMessage;
      if (this.text)
        return (e = this.text.entriesMatch.value) != null ? e : "";
    }
    return "";
  }
  /**
   * Checks value against external element
   *
   * Проверяет совпадение значения с внешним элементом
   */
  check() {
    const t = this.getSelectors();
    if (t) {
      const e = this.element.findByName(t);
      if (e && G(e.value) !== this.value.string.value)
        return {
          group: it.getGroupDefault(),
          status: !1,
          input: this.element.get(),
          validationMessage: this.getValidationMessage(),
          value: this.value.item.value
        };
    }
  }
}
var vt = Object.defineProperty, yt = (s, t, e) => t in s ? vt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, i = (s, t, e) => yt(s, typeof t != "symbol" ? t + "" : t, e);
class ft {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   * @param text object for working with text/ объект для работы с текстом
   */
  constructor(t, e, a) {
    i(this, "visible", !1), i(this, "is", n(() => this.props.type === "password")), i(this, "icon", n(() => {
      if (this.is.value)
        return {
          active: this.visibility.item.value,
          icon: this.props.iconVisibilityOff,
          iconActive: this.props.iconVisibility,
          dynamic: !0,
          ariaLabel: this.visibility.item.value ? this.text.hide.value : this.text.show.value
        };
    })), this.props = t, this.visibility = e, this.text = a;
  }
  /**
   * Toggle value.
   *
   * Переключение значения.
   */
  toggle() {
    this.is.value && this.visibility.toggle();
  }
}
class gt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param value object for working with values/ объект для работы со значениями
   * @param valueDefault default value/ значение по умолчанию
   * @param components object for working with components/ объект для работы с компонентами
   * @param type object for working with the input type/ объект для работы с типом ввода
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, a, r, l, c, p, m) {
    i(this, "is", n(() => {
      var o;
      const u = (o = this.type) == null ? void 0 : o.get();
      return this.props.maskNone !== !0 && !!(this.props.mask || u && [
        "number",
        "number-format",
        "currency",
        "datetime",
        "date",
        "year-month",
        "time",
        "hour-minute"
      ].indexOf(u) !== -1);
    })), i(this, "bindsStatic", n(() => {
      var o, u, d;
      const v = w(
        (o = x(this.extra)) != null ? o : {},
        (u = this.props.maskAttrs) != null ? u : {}
      );
      return {
        name: this.props.name,
        valueDefault: x(this.valueDefault),
        currency: this.props.currency,
        currencyHide: this.props.currencyHide,
        fraction: this.props.fraction,
        type: (d = this.type) == null ? void 0 : d.get(),
        visible: this.props.maskVisible,
        ...Z(this.props.mask, v, "mask")
      };
    })), i(this, "binds", n(() => {
      var o;
      return {
        ...this.bindsStatic.value,
        value: (o = this.props.modelValue) != null ? o : this.props.value
      };
    })), i(this, "render", (o) => this.components ? this.components.render(
      "mask",
      {
        ...w(
          o != null ? o : {},
          this.binds.value
        )
      },
      void 0,
      this.index
    ) : []), this.props = t, this.className = e, this.value = a, this.valueDefault = r, this.components = l, this.type = c, this.extra = p, this.index = m, this.value && j(this.is, (o) => {
      o || this.value.setFull(!0);
    });
  }
  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  isActive() {
    return this.is.value;
  }
}
class bt {
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
   * @param constructors.FieldArrowIncludeConstructor class for working with field arrow/ класс для работы со стрелкой поля
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param constructors.FieldInputModeIncludeConstructor class for working with field input mode/ класс для работы с режимом ввода поля
   * @param constructors.FieldMatchIncludeConstructor class for working with field match/ класс для работы с совпадением поля
   * @param constructors.FieldPatternIncludeConstructor class for working with field pattern/ класс для работы с шаблоном поля
   * @param constructors.FieldTypeIncludeConstructor class for working with field type/ класс для работы с типом поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.FieldVisibilityIncludeConstructor class for working with field visibility/ класс для работы с видимостью поля
   * @param constructors.InputPasswordConstructor class for working with input password/ класс для работы с паролем ввода
   * @param constructors.MaskIncludeConstructor class for working with mask/ класс для работы с маской
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(t, e, a, r, l, c, p, m, o) {
    i(this, "text"), i(this, "visibility"), i(this, "type"), i(this, "pattern"), i(this, "inputMode"), i(this, "attributes"), i(this, "elementItem"), i(this, "change"), i(this, "value"), i(this, "arrow"), i(this, "password"), i(this, "match"), i(this, "code"), i(this, "validation"), i(this, "event"), i(this, "field"), i(this, "mask"), this.props = t, this.refs = e, this.element = a, this.classDesign = r, this.className = l, this.components = c, this.slots = p, this.emits = m;
    const {
      FieldArrowIncludeConstructor: u = mt,
      FieldAttributesIncludeConstructor: d = J,
      FieldChangeIncludeConstructor: v = Q,
      FieldCodeIncludeConstructor: k = W,
      FieldElementIncludeConstructor: M = X,
      FieldEventIncludeConstructor: C = Y,
      FieldIncludeConstructor: S = rt,
      FieldInputModeIncludeConstructor: F = ct,
      FieldMatchIncludeConstructor: V = dt,
      FieldPatternIncludeConstructor: A = pt,
      FieldTypeIncludeConstructor: D = ut,
      FieldValidationIncludeConstructor: N = tt,
      FieldValueIncludeConstructor: $ = et,
      FieldVisibilityIncludeConstructor: T = ht,
      InputPasswordConstructor: P = ft,
      MaskIncludeConstructor: O = gt,
      TextIncludeConstructor: _ = st
    } = o != null ? o : {};
    this.text = new _(this.props), this.change = new v(this.props), this.visibility = new T(), this.type = new D(this.props, this.visibility), this.pattern = new A(this.props, this.type), this.inputMode = new F(this.props, this.type), this.attributes = new d(
      this.props,
      this.type,
      this.pattern,
      this.inputMode
    ), this.elementItem = new M(
      this.props,
      this.element
    ), this.value = new $(
      this.props,
      this.refs,
      this.elementItem
    ), this.arrow = new u(this.props, this.value, this.type), this.password = new P(this.props, this.visibility, this.text), this.match = new V(
      this.props,
      this.elementItem,
      this.value
    ), this.code = new k(this.props), this.validation = new N(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code,
      this.match
    ), this.event = new C(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new S(
      this.props,
      this.value,
      this.components,
      this.event,
      this.arrow,
      void 0,
      () => this.password.toggle(),
      void 0,
      void 0,
      n(() => {
        var f, g;
        return {
          iconTrailing: (f = this.password.icon.value) != null ? f : this.props.iconTrailing,
          maxlength: (g = this.props.maxlength) != null ? g : this.props.max
        };
      })
    ), this.mask = new O(
      this.props,
      this.className,
      this.value,
      "",
      this.components,
      this.type
    );
  }
}
const wt = {
  type: "text",
  autocomplete: "off",
  arrow: "auto",
  maskVisible: !0
};
class xt extends K {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, e, a, r = bt) {
    super(
      t,
      e,
      a
    ), i(this, "item"), i(this, "renderInput", (l) => this.item.mask.isActive() ? this.renderMask(l) : [E(
      "input",
      I(
        this.item.attributes.listForInput.value,
        l.binds,
        {
          ref: this.element,
          value: this.item.value.item.value,
          onBlur: this.item.event.onBlur,
          onInput: this.item.event.onInput,
          onChange: this.item.event.onChange
        }
      )
    )]), i(this, "renderMask", (l) => this.item.mask.render({
      ref: this.element,
      class: l.className,
      align: this.props.align,
      inputAttrs: I(
        this.item.attributes.listForInput.value,
        l.binds
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    })), this.item = new r(
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
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
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
    var t;
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
const It = ot, Bt = {
  ...wt,
  iconVisibility: "visibility",
  iconVisibilityOff: "visibility_off"
}, Nt = /* @__PURE__ */ L({
  name: "D1Input",
  __name: "D1Input",
  props: /* @__PURE__ */ q({
    name: {},
    mask: {},
    maskVisible: { type: Boolean },
    maskNone: { type: Boolean },
    currency: {},
    currencyHide: { type: Boolean },
    fraction: { type: [String, Boolean, Number] },
    maskAttrs: {},
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    iconTrailing: {},
    iconTrailingTurnOnly: { type: Boolean },
    iconTrailingDirOnly: { type: Boolean },
    iconTrailingPalette: { type: Boolean },
    prefix: {},
    prefixId: {},
    suffix: {},
    suffixId: {},
    caption: {},
    captionDecorative: { type: Boolean },
    label: {},
    labelId: {},
    counterShow: { type: Boolean },
    counterId: {},
    fieldCounterAttrs: {},
    required: { type: Boolean },
    fieldLabelAttrs: {},
    forceShowMessage: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    fieldMessageAttrs: {},
    helperId: {},
    validationId: {},
    loading: { type: [Boolean, Object] },
    readonly: { type: Boolean },
    href: {},
    detail: {},
    isSkeleton: { type: Boolean },
    textCancel: { type: [String, Function] },
    id: {},
    focus: { type: Boolean },
    align: {},
    cancel: {},
    fieldAttrs: {},
    modelValue: {},
    "onUpdate:value": { type: Function },
    "onUpdate:modelValue": { type: Function },
    placeholder: {},
    value: {},
    type: {},
    autofocus: { type: Boolean },
    tabindex: {},
    form: {},
    validationCode: {},
    match: {},
    inputAttrs: {},
    step: {},
    min: {},
    max: {},
    arrow: {},
    arrowStep: {},
    arrowAlign: {},
    minlength: {},
    maxlength: {},
    pattern: {},
    autocomplete: {},
    autocapitalize: {},
    inputMode: {},
    enterKeyHint: {},
    spellcheck: { type: [Boolean, String] },
    autocorrect: {},
    list: {},
    iconVisibility: {},
    iconVisibilityOff: {}
  }, Bt),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(s, { expose: t, emit: e }) {
    const a = e, r = s, l = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-input": !0
        // :classes-values [!] System label / Системная метка
      }
    })), c = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), p = new xt(
      "d1.input",
      r,
      {
        emits: a,
        classes: l,
        styles: c,
        components: {
          mask: It,
          field: nt
        }
      }
    ), m = p.render();
    return t(p.expose()), (o, u) => (z(), R(U(m)));
  }
});
export {
  Nt as _
};

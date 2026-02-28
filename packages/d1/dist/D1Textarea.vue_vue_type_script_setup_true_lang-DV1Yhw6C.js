import { computed as r, h as B, defineComponent as b, openBlock as C, createBlock as w, unref as A, mergeDefaults as F } from "vue";
import { DesignConstructorAbstract as D, toBinds as d } from "@dxtmisha/functional";
import { w as z, D as T, O as _, T as k, V as S, N as V, H as M } from "./FieldEventInclude-h5Fg7306-DMkm_Aee.js";
import { y as O, D as E } from "./index-gGxovD48.js";
import { _ as H } from "./D1TextareaAutosize.vue_vue_type_script_setup_true_lang-BmW7Vmem.js";
var L = Object.defineProperty, N = (s, e, i) => e in s ? L(s, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[e] = i, t = (s, e, i) => N(s, typeof e != "symbol" ? e + "" : e, i);
class P {
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
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   */
  constructor(e, i, o, a, l, n, u, c, h) {
    t(this, "attributes"), t(this, "elementItem"), t(this, "change"), t(this, "value"), t(this, "code"), t(this, "validation"), t(this, "event"), t(this, "field"), t(this, "binds", r(() => ({
      ref: this.element,
      autosize: this.props.autosize,
      value: this.value.item.value,
      onBlur: this.event.onBlur,
      onInput: this.event.onInput,
      onChange: this.event.onChange
    }))), t(this, "bindsInput", r(() => d(
      this.attributes.listForInput.value,
      this.props.textareaAttrs,
      {
        cols: this.props.cols,
        rows: this.props.rows,
        fieldSizing: this.props.fieldSizing
      }
    ))), this.props = e, this.refs = i, this.element = o, this.classDesign = a, this.className = l, this.components = n, this.slots = u, this.emits = c;
    const {
      FieldAttributesIncludeConstructor: p = T,
      FieldChangeIncludeConstructor: m = _,
      FieldCodeIncludeConstructor: v = k,
      FieldElementIncludeConstructor: f = S,
      FieldEventIncludeConstructor: g = V,
      FieldIncludeConstructor: y = O,
      FieldValidationIncludeConstructor: x = M,
      FieldValueIncludeConstructor: I = z
    } = h != null ? h : {};
    this.change = new m(this.props), this.attributes = new p(this.props), this.elementItem = new f(
      this.props,
      this.element
    ), this.value = new I(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new v(this.props), this.validation = new x(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new g(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new y(
      this.props,
      this.value,
      this.components,
      this.event,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      r(() => ({
        maxlength: this.props.maxlength
      }))
    );
  }
}
const j = {
  cancel: "none",
  autosize: !0
};
class q extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, i, o, a = P) {
    super(
      e,
      i,
      o
    ), t(this, "item"), t(this, "renderInput", (l) => {
      const n = d(
        l.binds,
        this.item.binds.value
      );
      return this.components.is("textareaAutosize") ? [this.components.renderOne("textareaAutosize", {
        ...n,
        inputAttrs: this.item.bindsInput.value
      })] : [B("textarea", {
        ...n,
        ...this.item.bindsInput.value
      })];
    }), this.item = new a(
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
    var e;
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: (e = this.classes) == null ? void 0 : e.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
const U = H, G = {
  ...j
}, W = /* @__PURE__ */ b({
  name: "D1Textarea",
  __name: "D1Textarea",
  props: /* @__PURE__ */ F({
    textareaAttrs: {},
    autosize: { type: Boolean },
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
    name: {},
    autofocus: { type: Boolean },
    tabindex: {},
    form: {},
    validationCode: {},
    match: {},
    inputAttrs: {},
    minlength: {},
    maxlength: {},
    autocomplete: {},
    autocapitalize: {},
    inputMode: {},
    enterKeyHint: {},
    spellcheck: { type: [Boolean, String] },
    autocorrect: {},
    rows: {},
    cols: {},
    wrap: {},
    fieldSizing: {}
  }, G),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(s, { expose: e, emit: i }) {
    const o = i, a = s, l = r(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-textarea": !0
        // :classes-values [!] System label / Системная метка
      }
    })), n = r(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), u = new q(
      "d1.textarea",
      a,
      {
        emits: o,
        classes: l,
        styles: n,
        components: {
          textareaAutosize: U,
          field: E
        }
      }
    ), c = u.render();
    return e(u.expose()), (h, p) => (C(), w(A(c)));
  }
});
export {
  W as _
};

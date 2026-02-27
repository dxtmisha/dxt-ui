import { h as a, computed as p, defineComponent as _, openBlock as $, createBlock as A, unref as H, mergeDefaults as N } from "vue";
import { DesignConstructorAbstract as E, getBind as L, toBinds as T, inArray as m } from "@dxtmisha/functional";
import { v as O } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { h as q } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { x as P } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { D as R, O as X, T as j, V as U, N as z, H as K, w as W } from "./FieldEventInclude-h5Fg7306-DMkm_Aee.js";
import { b as G, D as J } from "./index-C7t4nIAl.js";
import { $ as Q } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { b as Y } from "./ProgressInclude-DlEbC7XP-Cahi9k1c.js";
import { o as Z } from "./RippleInclude-Du5yIzX_-DwebniuR.js";
import { l as v } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { D as ee } from "./index-DQ9Enri3.js";
import { D as te } from "./index-B4sAKw5g.js";
import { _ as ie } from "./D1Ripple.vue_vue_type_script_setup_true_lang-CX94jwSw.js";
var se = Object.defineProperty, ne = (o, t, n) => t in o ? se(o, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[t] = n, e = (o, t, n) => ne(o, typeof t != "symbol" ? t + "" : t, n);
class oe {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param value object for working with values /<br>объект для работы со значениями
   */
  constructor(t, n) {
    e(this, "item", p(
      () => L(this.getIcon(), "value")
    )), this.props = t, this.value = n;
  }
  /**
   * Returns the name of the icon.
   *
   * Возвращает название иконки.
   */
  getIcon() {
    if (this.value.boolean.value && !this.props.loading)
      return this.props.indeterminate ? this.props.iconIndeterminate : this.props.iconCheckbox;
  }
}
class re {
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
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param constructors.FieldAttributesIncludeConstructor class for creating field attributes/ класс для создания атрибутов поля
   * @param constructors.FieldChangeIncludeConstructor class for creating field change attributes/ класс для создания атрибутов изменения поля
   * @param constructors.FieldElementIncludeConstructor class for creating field element attributes/ класс для создания атрибутов элемента поля
   * @param constructors.FieldEventIncludeConstructor class for creating field event/ класс для создания событий поля
   * @param constructors.FieldMessageConstructor class for creating field message/ класс для создания сообщения поля
   * @param constructors.FieldValidationIncludeConstructor class for creating field validation/ класс для создания валидации поля
   * @param constructors.FieldValueIncludeConstructor class for creating field value attributes/ класс для создания атрибутов значения поля
   */
  constructor(t, n, h, s, i, r, l, c, d) {
    e(this, "type", "checkbox"), e(this, "attributes"), e(this, "change"), e(this, "code"), e(this, "description"), e(this, "elementItem"), e(this, "enabled"), e(this, "event"), e(this, "icon"), e(this, "label"), e(this, "message"), e(this, "progress"), e(this, "ripple"), e(this, "skeleton"), e(this, "validation"), e(this, "value"), this.props = t, this.refs = n, this.element = h, this.classDesign = s, this.className = i, this.components = r, this.slots = l, this.emits = c;
    const {
      CheckboxIconConstructor: u = oe,
      DescriptionConstructor: b = O,
      EnabledConstructor: C = q,
      FieldAttributesIncludeConstructor: k = R,
      FieldChangeIncludeConstructor: f = X,
      FieldCodeIncludeConstructor: y = j,
      FieldElementIncludeConstructor: x = U,
      FieldEventIncludeConstructor: I = z,
      FieldMessageConstructor: w = G,
      FieldValidationIncludeConstructor: B = K,
      FieldValueIncludeConstructor: S = W,
      LabelConstructor: D = P,
      ProgressConstructor: V = Y,
      RippleConstructor: F = Z,
      SkeletonConstructor: M = Q
    } = d != null ? d : {};
    this.skeleton = new M(this.props, this.classDesign, ["classText"]), this.progress = new V(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        inverse: !0
      }
    ), this.change = new f(this.props), this.elementItem = new x(this.props, this.element), this.attributes = new k(this.props), this.value = new S(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new y(this.props), this.validation = new B(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new I(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.message = new w(
      this.props,
      this.className,
      this.components,
      this.validation.message
    ), this.icon = new u(this.props, this.value), this.label = new D(
      t,
      i,
      void 0,
      l,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.description = new b(
      t,
      i,
      l,
      this.skeleton
    ), this.enabled = new C(t, this.progress), this.ripple = new F(i, r, this.enabled);
  }
}
const ae = {
  valueVariantHide: "0",
  // :default [!] System label / Системная метка
  block: !0,
  itemCenter: !0
};
class le extends E {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, n, h, s = re) {
    super(
      t,
      n,
      h
    ), e(this, "item"), e(this, "renderBody", () => {
      var i;
      const r = [
        ...this.renderChecked(),
        ...this.renderInfo()
      ];
      return a("span", {
        class: (i = this.classes) == null ? void 0 : i.value.body
      }, r);
    }), e(this, "renderInput", () => {
      var i;
      return a("input", T(
        this.item.attributes.listForCheckbox.value,
        {
          class: (i = this.classes) == null ? void 0 : i.value.input,
          type: this.item.type,
          checked: this.item.value.item.value,
          onInput: this.item.event.onChecked,
          ...v.invalid(this.item.validation.isError())
        }
      ));
    }), e(this, "renderInputHidden", () => a("input", {
      name: this.props.name,
      type: "hidden",
      value: this.props.valueVariantHide
    })), e(this, "renderChecked", () => {
      var i, r;
      return [
        a(
          "span",
          {
            class: (i = this.classes) == null ? void 0 : i.value.item,
            ...v.hidden()
          },
          [
            ...this.item.progress.render(),
            a(
              "span",
              {
                class: [
                  (r = this.classes) == null ? void 0 : r.value.icon,
                  this.item.skeleton.classesSkeleton.classBackground
                ]
              },
              [
                this.components.renderOne(
                  "image",
                  this.item.icon.item.value
                )
              ]
            ),
            ...this.item.ripple.render()
          ]
        )
      ];
    }), e(this, "renderInfo", () => {
      var i;
      return this.item.label.is.value || this.item.description.is.value ? [a(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.info },
        [
          ...this.item.label.render(),
          ...this.item.description.render(),
          ...this.item.message.render()
        ]
      )] : [];
    }), this.item = new s(
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
      main: {},
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input"),
      body: this.getSubClass("body"),
      item: this.getSubClass("item"),
      icon: this.getSubClass("icon"),
      loading: this.getSubClass("loading"),
      info: this.getSubClass("info"),
      label: this.getSubClass("label")
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
    return a(
      "label",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (t = this.classes) == null ? void 0 : t.value.main
      },
      [
        this.renderInputHidden(),
        this.renderInput(),
        this.renderBody()
      ]
    );
  }
}
const he = ie, g = {
  // :values [!] System label / Системная метка
  adaptive: ["rightAlways", "rightSm", "rightMd", "rightLg", "rightXl", "right2xl"],
  container: ["rightSm", "rightMd", "rightLg", "rightXl", "right2xl"]
  // :values [!] System label / Системная метка
}, ce = {
  ...ae,
  iconCheckbox: "check",
  iconIndeterminate: "remove",
  // :default [!] System label / Системная метка
  block: !0,
  itemCenter: !0
}, Be = /* @__PURE__ */ _({
  name: "D1Checkbox",
  __name: "D1Checkbox",
  props: /* @__PURE__ */ N({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    forceShowMessage: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    fieldMessageAttrs: {},
    helperId: {},
    validationId: {},
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
    fieldCounterAttrs: {},
    modelValue: { type: Boolean },
    "onUpdate:value": { type: Function },
    "onUpdate:modelValue": { type: Function },
    placeholder: {},
    value: {},
    detail: {},
    name: {},
    id: {},
    required: { type: Boolean },
    readonly: { type: Boolean },
    autofocus: { type: Boolean },
    tabindex: {},
    form: {},
    validationCode: {},
    match: {},
    inputAttrs: {},
    autocomplete: {},
    autocapitalize: {},
    inputMode: {},
    enterKeyHint: {},
    spellcheck: { type: [Boolean, String] },
    autocorrect: {},
    valueVariant: { type: [Number, String, Boolean] },
    valueVariantHide: { type: [Number, String, Boolean] },
    indeterminate: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    iconCheckbox: {},
    iconIndeterminate: {},
    block: { type: Boolean },
    adaptive: {},
    container: {},
    itemCenter: { type: Boolean },
    focus: { type: Boolean }
  }, ce),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(o, { expose: t, emit: n }) {
    const h = n, s = o, i = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-checkbox": !0,
        "d1-checkbox--block": s.block,
        [`d1-checkbox--adaptive--${s.adaptive}`]: m(g.adaptive, s.adaptive),
        [`d1-checkbox--container--${s.container}`]: m(g.container, s.container),
        "d1-checkbox--required": s.required,
        "d1-checkbox--itemCenter": s.itemCenter,
        "d1-checkbox--focus": s.focus,
        "d1-checkbox--disabled": s.disabled
        // :classes-values [!] System label / Системная метка
      }
    })), r = p(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new le(
      "d1.checkbox",
      s,
      {
        emits: h,
        classes: i,
        styles: r,
        components: {
          image: ee,
          fieldMessage: J,
          progress: te,
          ripple: he
        }
      }
    ), c = l.render();
    return t(l.expose()), (d, u) => ($(), A(H(c)));
  }
});
export {
  Be as _
};

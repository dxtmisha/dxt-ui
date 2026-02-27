import { computed as c, h as u, watch as P, onUnmounted as E, onMounted as F, onUpdated as q, defineComponent as z, openBlock as V, createBlock as R, unref as O, mergeDefaults as j } from "vue";
import { getElementId as f, isFilled as S, toBinds as g, getRef as _, DesignConstructorAbstract as W, isDomRuntime as H, EventItem as K, isString as U, inArray as m } from "@dxtmisha/functional";
import { l as w } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { v as Q } from "./CaptionInclude-CohAZRI2-Ui7bYJab.js";
import { m as X, v as G } from "./SuffixInclude-maZ7235l-4Uh8JpYX.js";
import { h as J } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { m as Y } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { a as Z } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { C as ee } from "./index-DNSGrhyp.js";
import { b as se, D as te } from "./index-C7t4nIAl.js";
import { B as ie } from "./IconTrailingInclude-CdsOcDxv-CocNhqdl.js";
import { b as oe } from "./ProgressInclude-DlEbC7XP-Cahi9k1c.js";
import { $ as le } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { D as re } from "./index-D6uVLbU_.js";
import { _ as ae } from "./D1FieldLabel.vue_vue_type_script_setup_true_lang-lwiKmR8h.js";
import { D as ne } from "./index-B4sAKw5g.js";
var de = Object.defineProperty, ce = (n, e, o) => e in n ? de(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[e] = o, p = (n, e, o) => ce(n, typeof e != "symbol" ? e + "" : e, o);
class he {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param forId element ID/ идентификатор элемента
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, o, a, s, i, l, r, h) {
    p(this, "labelId", f()), p(this, "counterId", f()), p(this, "fieldCounter"), p(this, "is", c(() => {
      var d;
      return S(this.props.label) || !!((d = this.isCounter) != null && d.value);
    })), p(this, "id", c(() => {
      var d;
      return (d = this.isCounter) != null && d.value && this.props.counterShow ? this.counterId : "";
    })), p(this, "binds", c(
      () => {
        var d;
        return g(
          _(this.extra),
          (d = this.isCounter) != null && d.value ? this.fieldCounter.bindsIntermediary.value : {},
          {
            for: _(this.forId),
            label: this.props.label,
            required: this.props.required,
            labelId: this.labelId,
            counterId: this.counterId
          },
          this.props.fieldLabelAttrs
        );
      }
    )), p(this, "render", () => this.components && this.is.value ? this.components.render(
      "fieldLabel",
      {
        ...g(
          this.binds.value,
          { class: `${this.className}__fieldLabel` }
        )
      },
      this.slots,
      this.index
    ) : []), this.props = e, this.className = o, this.components = a, this.slots = s, this.forId = i, this.isCounter = l, this.extra = r, this.index = h, this.fieldCounter = new ee(this.props, this.className);
  }
}
var ue = Object.defineProperty, pe = (n, e, o) => e in n ? ue(n, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[e] = o, t = (n, e, o) => pe(n, typeof e != "symbol" ? e + "" : e, o);
class me {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param text text include/ Подключение текста
   */
  constructor(e, o, a) {
    t(this, "isArrow", c(
      () => !!((this.props.arrowCarousel || this.props.arrowStepper) && !this.props.disabled)
    )), t(this, "isCancel", c(() => !!(this.props.cancel && !this.props.readonly && !this.props.disabled && !this.props.arrowCarousel && !this.props.arrowStepper && (this.props.cancel === "auto" && this.props.cancelShow || this.props.cancel === "always")))), t(this, "cancelBind", c(() => ({
      class: `${this.className}__cancel`,
      icon: this.props.iconClose,
      dynamic: !0,
      "data-event-type": "cancel",
      ariaLabel: this.text.cancel.value
    }))), t(this, "previousBind", c(() => ({
      class: `${this.className}__previous`,
      icon: this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
      disabled: this.props.disabled || this.props.disabledPrevious,
      dynamic: !0,
      "data-event-type": "previous",
      ariaLabel: this.props.arrowCarousel ? this.text.previous.value : this.text.decrement.value
    }))), t(this, "nextBind", c(() => ({
      class: `${this.className}__next`,
      icon: this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
      disabled: this.props.disabled || this.props.disabledNext,
      dynamic: !0,
      "data-event-type": "next",
      ariaLabel: this.props.arrowCarousel ? this.text.next.value : this.text.increment.value
    }))), this.props = e, this.className = o, this.text = a;
  }
}
class be {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param className class name/ название класса
   */
  constructor(e, o) {
    t(this, "left", 0), t(this, "right", 0), t(this, "title", 0), t(this, "event"), t(this, "update", () => {
      requestAnimationFrame(() => {
        var a, s, i, l;
        const r = this.getElementSpace(), h = this.getElementPrefix();
        r && (this.left = r.offsetLeft, this.right = ((s = (a = r.parentElement) == null ? void 0 : a.offsetWidth) != null ? s : 0) - this.left - r.offsetWidth), this.title = (l = (i = h == null ? void 0 : h.offsetLeft) != null ? i : r == null ? void 0 : r.offsetLeft) != null ? l : 0, this.make();
      });
    }), this.element = e, this.className = o, P(e, () => this.update, { immediate: !0 }), H() && (this.event = new K(window, "resize", this.update), E(() => {
      var a;
      return (a = this.event) == null ? void 0 : a.stop();
    })), F(this.update), q(this.update);
  }
  /**
   * Returns separator elements.
   *
   * Возвращает элементы-разделители.
   */
  getElementSpace() {
    var e, o;
    return (o = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__body__scoreboard__space`)) != null ? o : void 0;
  }
  /**
   * Returns element with prefix.
   *
   * Возвращает элемент с префиксом.
   */
  getElementPrefix() {
    var e, o;
    return (o = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__prefix`)) != null ? o : void 0;
  }
  /**
   * Update input field margins.
   *
   * Обновление отступов для поля ввода.
   */
  make() {
    const e = this.element.value;
    e && (e.style.setProperty(`--${this.className}-sys-left`, `${this.left}px`), e.style.setProperty(`--${this.className}-sys-right`, `${this.right}px`), e.style.setProperty(`--${this.className}-sys-title`, `${this.title}px`), e.classList.contains(`${this.className}--show`) || requestAnimationFrame(() => e.classList.add(`${this.className}--show`)));
  }
}
class fe {
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
   * @param constructors.CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
   * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.FieldIconsConstructor class for working with field icons/ класс для работы с иконками поля
   * @param constructors.FieldLabelIncludeConstructor class for working with field label/ класс для работы с меткой поля
   * @param constructors.FieldMessageIncludeConstructor class for working with field message/ класс для работы с сообщением поля
   * @param constructors.FieldSizeConstructor class for working with field size/ класс для работы с размером поля
   * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
   * @param constructors.ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   * @param constructors.SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(e, o, a, s, i, l, r, h, d) {
    t(this, "text"), t(this, "icon"), t(this, "caption"), t(this, "prefix"), t(this, "suffix"), t(this, "fieldLabel"), t(this, "fieldMessage"), t(this, "progress"), t(this, "enabled"), t(this, "event"), t(this, "skeleton"), t(this, "icons"), t(this, "size"), t(this, "isClassic", c(
      () => !!(this.props.classic && !this.props.basic && !this.props.boxed && !this.props.filled && !this.props.outlined && !this.props.tonal)
    )), t(this, "isValidation", c(() => !!(this.props.validationMessage && (this.props.forceShowMessage || !this.props.readonly && !this.props.disabled)))), t(this, "id", c(() => String(this.props.id || f()))), t(this, "classes", c(() => ({
      [`${this.className}--cancel`]: this.icons.isCancel.value,
      [`${this.className}--suffix`]: this.props.suffix,
      [`${this.className}--validation`]: this.isValidation.value
    }))), t(this, "control", c(() => {
      const y = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
      return {
        id: this.id.value,
        className: y,
        classHidden: `${this.className}__body__hidden`,
        classForFocus: `${this.className}__body__focus`,
        binds: {
          id: this.id.value,
          class: y,
          ...w.invalid(this.isValidation.value),
          ...w.describedby(this.getDescribedby())
        }
      };
    })), this.props = e, this.refs = o, this.element = a, this.classDesign = s, this.className = i, this.components = l, this.slots = r, this.emits = h;
    const {
      CaptionIncludeConstructor: v = Q,
      EnabledIncludeConstructor: x = J,
      EventClickIncludeConstructor: B = Y,
      FieldIconsConstructor: C = me,
      FieldLabelIncludeConstructor: $ = he,
      FieldMessageIncludeConstructor: I = se,
      FieldSizeConstructor: N = be,
      IconTrailingIncludeConstructor: L = ie,
      PrefixIncludeConstructor: A = X,
      ProgressIncludeConstructor: k = oe,
      SkeletonIncludeConstructor: T = le,
      SuffixIncludeConstructor: D = G,
      TextIncludeConstructor: M = Z
    } = d != null ? d : {};
    this.skeleton = new T(
      this.props,
      this.classDesign,
      ["classBackground"]
    ), this.icon = new L(this.props, this.className, this.components), this.text = new M(this.props), this.caption = new v(this.props, this.className, this.slots), this.prefix = new A(this.props, this.className, this.slots), this.suffix = new D(this.props, this.className, this.slots), this.fieldLabel = new $(
      this.props,
      this.className,
      this.components,
      this.slots,
      this.id,
      this.refs.counterTop,
      this.skeleton.binds
    ), this.fieldMessage = new I(
      this.props,
      this.className,
      this.components,
      void 0,
      c(() => !this.props.counterTop),
      this.skeleton.binds
    ), this.progress = new k(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.enabled = new x(this.props, this.progress), this.event = new B(this.props, this.enabled, this.emits), this.icons = new C(this.props, this.className, this.text), this.size = new N(this.element, this.className);
  }
  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   */
  getDescribedby() {
    return [
      this.prefix.describedby.value,
      this.suffix.describedby.value,
      this.fieldLabel.id.value,
      this.fieldMessage.id.value
    ].join(" ").trim();
  }
}
const ve = {
  // :default [!] System label / Системная метка
  arrowAlign: "right",
  cancel: "auto"
};
class ye extends W {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, o, a, s = fe) {
    super(
      e,
      o,
      a
    ), t(this, "item"), t(this, "renderBody", () => {
      var i;
      const l = [
        this.initSlot("default", void 0, this.item.control.value),
        this.renderBodyLabel(),
        this.renderBodyScoreboard(),
        this.renderBodyBorder()
      ];
      return [
        u(
          "span",
          {
            class: [
              (i = this.classes) == null ? void 0 : i.value.body,
              this.item.skeleton.classes.value
            ],
            onClick: this.item.event.onClick,
            onKeydown: this.item.event.onKeydown
          },
          l
        )
      ];
    }), t(this, "renderBodyLabel", () => {
      var i, l, r, h;
      const d = [
        this.props.label
      ];
      return this.props.required && d.push(u(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.required }
      )), u(
        "span",
        { class: (l = this.classes) == null ? void 0 : l.value.bodyTitle },
        u(
          "span",
          { class: (r = this.classes) == null ? void 0 : r.value.bodyTitleLabel },
          u(
            "span",
            { class: (h = this.classes) == null ? void 0 : h.value.bodyTitleLabelText },
            d
          )
        )
      );
    }), t(this, "renderBodyScoreboard", () => {
      var i;
      const l = [
        ...this.renderBodyScoreboardSlot(),
        ...this.renderBodyScoreboardIcon(),
        ...this.item.prefix.render(),
        ...this.item.suffix.render(),
        ...this.item.progress.render(),
        ...this.renderBodyScoreboardSpace()
      ];
      return u("span", {
        class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboard,
        "data-element": "scoreboard"
      }, l);
    }), t(this, "renderBodyScoreboardSlot", () => {
      var i, l;
      const r = [];
      return this.slots && ("leading" in this.slots && r.push(u(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboardLeft },
        this.initSlot("leading")
      )), "trailing" in this.slots && r.push(u(
        "span",
        { class: (l = this.classes) == null ? void 0 : l.value.bodyScoreboardRight },
        this.initSlot("trailing")
      ))), r;
    }), t(this, "renderBodyScoreboardIcon", () => {
      const i = [...this.item.icon.render()];
      return this.item.icons.isCancel.value && this.components.renderAdd(
        i,
        "icon",
        this.item.icons.cancelBind.value,
        void 0,
        "cancel"
      ), this.item.icons.isArrow.value && (this.components.renderAdd(
        i,
        "icon",
        this.item.icons.previousBind.value,
        void 0,
        "previous"
      ), this.components.renderAdd(
        i,
        "icon",
        this.item.icons.nextBind.value,
        void 0,
        "next"
      )), i;
    }), t(this, "renderBodyScoreboardSpace", () => {
      var i, l;
      const r = [];
      return this.item.caption.is.value && r.push(
        u(
          "span",
          {
            class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboardInput,
            style: `min-width: ${this.lengthValue()};`
          },
          this.focusValue()
        ),
        ...this.item.caption.render()
      ), [
        u(
          "span",
          { class: (l = this.classes) == null ? void 0 : l.value.bodyScoreboardSpace },
          r
        )
      ];
    }), t(this, "renderBodyBorder", () => {
      var i;
      return u("span", { class: (i = this.classes) == null ? void 0 : i.value.bodyBorder });
    }), t(this, "focusValue", () => !this.lengthElement.value && U(this.props.value) ? this.props.value : ""), t(this, "lengthValue", () => {
      if (this.lengthElement.value)
        return `${this.lengthElement.value.offsetWidth}px`;
    }), t(this, "lengthElement", c(() => {
      var i, l;
      return (l = (i = this.element.value) == null ? void 0 : i.querySelector("*[data-length]")) != null ? l : void 0;
    })), t(this, "inputElement", c(() => {
      var i, l, r, h;
      return (h = (r = this.element.value) == null ? void 0 : r.querySelector(`input.${(i = this.classes) == null ? void 0 : i.value.bodyInput}, .${(l = this.classes) == null ? void 0 : l.value.bodyInput} input`)) != null ? h : void 0;
    })), this.item = new s(
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
      body: this.getSubClass("body"),
      bodyInput: this.getSubClass("body__input"),
      bodyTitle: this.getSubClass("body__title"),
      bodyTitleLabel: this.getSubClass("body__title__label"),
      bodyTitleLabelText: this.getSubClass("body__title__label__text"),
      bodyScoreboard: this.getSubClass("body__scoreboard"),
      bodyScoreboardLeft: this.getSubClass("body__scoreboard__left"),
      bodyScoreboardRight: this.getSubClass("body__scoreboard__right"),
      bodyScoreboardSpace: this.getSubClass("body__scoreboard__space"),
      bodyScoreboardInput: this.getSubClass("body__scoreboard__input"),
      bodyBorder: this.getSubClass("body__border"),
      required: this.getSubClass("required")
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
    var e, o;
    const a = [];
    return this.item.isClassic.value && a.push(...this.item.fieldLabel.render()), a.push(
      ...this.renderBody(),
      ...this.item.fieldMessage.render()
    ), u(
      this.item.isClassic.value ? "div" : "label",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (e = this.classes) == null ? void 0 : e.value.main,
        style: (o = this.styles) == null ? void 0 : o.value,
        for: this.item.isClassic.value ? void 0 : this.item.id.value
      },
      a
    );
  }
}
const ge = ae, b = {
  // :values [!] System label / Системная метка
  arrowAlign: ["center", "right", "left"],
  cancel: ["auto", "always", "none"],
  align: ["center", "right", "left"],
  width: [],
  size: ["sm", "md", "lg", "display"]
  // :values [!] System label / Системная метка
}, _e = {
  ...ve,
  iconArrowLeft: "keyboard_arrow_left",
  iconArrowRight: "keyboard_arrow_right",
  iconPlus: "add",
  iconMinus: "remove",
  iconClose: "close_small",
  // :default [!] System label / Системная метка
  classic: !0,
  arrowAlign: "right",
  cancel: "auto",
  size: "md"
}, Fe = /* @__PURE__ */ z({
  name: "D1Field",
  __name: "D1Field",
  props: /* @__PURE__ */ j({
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
    counter: {},
    counterShow: { type: Boolean },
    counterTemplate: {},
    counterId: {},
    maxlength: {},
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
    to: {},
    value: {},
    detail: {},
    isSkeleton: { type: Boolean },
    textCancel: { type: [String, Function] },
    disabledPrevious: { type: Boolean },
    disabledNext: { type: Boolean },
    id: {},
    counterTop: { type: Boolean },
    cancelShow: { type: Boolean },
    iconArrowLeft: {},
    iconArrowRight: {},
    iconPlus: {},
    iconMinus: {},
    iconClose: {},
    focus: { type: Boolean },
    block: { type: Boolean },
    isValue: { type: Boolean },
    basic: { type: Boolean },
    boxed: { type: Boolean },
    tonal: { type: Boolean },
    filled: { type: Boolean },
    outlined: { type: Boolean },
    classic: { type: Boolean },
    arrowCarousel: { type: Boolean },
    arrowStepper: { type: Boolean },
    arrowAlign: {},
    cancel: {},
    align: {},
    width: {},
    size: {}
  }, _e),
  emits: ["click", "clickLite"],
  setup(n, { expose: e, emit: o }) {
    const a = o, s = n, i = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-field": !0,
        "d1-field--focus": s.focus,
        "d1-field--disabled": s.disabled,
        "d1-field--selected": s.selected,
        "d1-field--readonly": s.readonly,
        "d1-field--block": s.block,
        "d1-field--isValue": s.isValue,
        "d1-field--basic": s.basic,
        "d1-field--boxed": s.boxed,
        "d1-field--tonal": s.tonal,
        "d1-field--filled": s.filled,
        "d1-field--outlined": s.outlined,
        "d1-field--classic": s.classic && !s.basic && !s.boxed && !s.tonal && !s.filled && !s.outlined,
        "d1-field--arrowCarousel": s.arrowCarousel,
        "d1-field--arrowStepper": s.arrowStepper,
        [`d1-field--arrowAlign--${s.arrowAlign}`]: m(b.arrowAlign, s.arrowAlign),
        [`d1-field--cancel--${s.cancel}`]: m(b.cancel, s.cancel),
        [`d1-field--align--${s.align}`]: m(b.align, s.align),
        "d1-field--width--custom": S(s.width) && !m(b.width, s.width),
        [`d1-field--size--${s.size}`]: m(b.size, s.size)
        // :classes-values [!] System label / Системная метка
      }
    })), l = c(() => {
      var d;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-field-sys-width": (d = s.width) != null ? d : null
        // :styles-values [!] System label / Системная метка
      };
    }), r = new ye(
      "d1.field",
      s,
      {
        emits: a,
        classes: i,
        styles: l,
        components: {
          icon: re,
          fieldLabel: ge,
          fieldMessage: te,
          progress: ne
        },
        compMod: {
          icon: {
            rounded: "full"
          },
          iconTrailing: {
            rounded: "full"
          },
          cancel: {
            rounded: "full"
          },
          previous: {
            rounded: "full"
          },
          next: {
            rounded: "full"
          }
        }
      }
    ), h = r.render();
    return e(r.expose()), (d, v) => (V(), R(O(h)));
  }
});
export {
  Fe as _
};

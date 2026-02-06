var u = Object.defineProperty;
var m = (n, e, s) => e in n ? u(n, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[e] = s;
var t = (n, e, s) => m(n, typeof e != "symbol" ? e + "" : e, s);
import { computed as a, watch as b, onUnmounted as f, onMounted as y, onUpdated as v, h as r } from "vue";
import { isDomRuntime as g, EventItem as _, getElementId as S, DesignConstructorAbstract as I, isString as w } from "@dxtmisha/functional";
import { C as N } from "./CaptionInclude-VhkGstz9.js";
import { P as x, S as B } from "./SuffixInclude-C7JNYCJK.js";
import { E as $ } from "./EnabledInclude-IdZAnr6u.js";
import { E as C } from "./EventClickInclude-CgbuezDm.js";
import { A as d } from "./AriaStaticInclude-BVCgDZbU.js";
import { F as L } from "./FieldLabelInclude-BSISy_cb.js";
import { F as E } from "./FieldMessageInclude-DoyOsRK_.js";
import { S as k } from "./SkeletonInclude-BIUzAO2s.js";
import { I as A } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as F } from "./ProgressInclude-NyOp5bMZ.js";
class T {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   */
  constructor(e, s) {
    /**
     * Determines whether to display arrows.
     *
     * Определяет, требуется ли отображение стрелок.
     */
    t(this, "isArrow", a(
      () => !!((this.props.arrowCarousel || this.props.arrowStepper) && !this.props.disabled)
    ));
    /**
     * Determines whether to display the "Delete" button.
     *
     * Определяет, требуется ли отображение кнопки "Удалить".
     */
    t(this, "isCancel", a(() => !!(this.props.cancel && !this.props.readonly && !this.props.disabled && !this.props.arrowCarousel && !this.props.arrowStepper && (this.props.cancel === "auto" && this.props.cancelShow || this.props.cancel === "always"))));
    /**
     * Returns data for the data deletion button.
     *
     * Возвращает данные для кнопки удаления данных.
     */
    t(this, "cancelBind", a(() => ({
      class: `${this.className}__cancel`,
      icon: this.props.iconClose,
      dynamic: !0,
      "data-event-type": "cancel"
    })));
    /**
     * Returns data for the left arrow.
     *
     * Возвращает данные для стрелки слева.
     */
    t(this, "previousBind", a(() => ({
      class: `${this.className}__previous`,
      icon: this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
      disabled: this.props.disabled || this.props.disabledPrevious,
      dynamic: !0,
      "data-event-type": "previous"
    })));
    /**
     * Returns data for the right arrow.
     *
     * Возвращает данные для стрелки справа.
     */
    t(this, "nextBind", a(() => ({
      class: `${this.className}__next`,
      icon: this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
      disabled: this.props.disabled || this.props.disabledNext,
      dynamic: !0,
      "data-event-type": "next"
    })));
    this.props = e, this.className = s;
  }
}
class q {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param className class name/ название класса
   */
  constructor(e, s) {
    t(this, "left", 0);
    t(this, "right", 0);
    t(this, "title", 0);
    t(this, "event");
    /**
     * Update margins.
     *
     * Обновление отступов.
     */
    t(this, "update", () => {
      requestAnimationFrame(() => {
        var i, o, l, h;
        const e = this.getElementSpace(), s = this.getElementPrefix();
        e && (this.left = e.offsetLeft, this.right = ((o = (i = e.parentElement) == null ? void 0 : i.offsetWidth) != null ? o : 0) - this.left - e.offsetWidth), this.title = (h = (l = s == null ? void 0 : s.offsetLeft) != null ? l : e == null ? void 0 : e.offsetLeft) != null ? h : 0, this.make();
      });
    });
    this.element = e, this.className = s, b(e, () => this.update, { immediate: !0 }), g() && (this.event = new _(window, "resize", this.update), f(() => {
      var i;
      return (i = this.event) == null ? void 0 : i.stop();
    })), y(this.update), v(this.update);
  }
  /**
   * Returns separator elements.
   *
   * Возвращает элементы-разделители.
   */
  getElementSpace() {
    var e, s;
    return (s = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__body__scoreboard__space`)) != null ? s : void 0;
  }
  /**
   * Returns element with prefix.
   *
   * Возвращает элемент с префиксом.
   */
  getElementPrefix() {
    var e, s;
    return (s = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__prefix`)) != null ? s : void 0;
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
   */
  constructor(e, s, i, o, l, h, c, p) {
    t(this, "id", S());
    t(this, "labelId", `${this.id}-label`);
    t(this, "helperId", `${this.id}-helper`);
    t(this, "validationId", `${this.id}-validation`);
    t(this, "counterId", `${this.id}-counter`);
    t(this, "icon");
    t(this, "caption");
    t(this, "prefix");
    t(this, "suffix");
    t(this, "fieldLabel");
    t(this, "fieldMessage");
    t(this, "progress");
    t(this, "enabled");
    t(this, "event");
    t(this, "skeleton");
    t(this, "icons");
    t(this, "size");
    /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
    t(this, "isValidation", a(() => !!(this.props.validationMessage && (this.props.forceShowMessage || !this.props.readonly && !this.props.disabled))));
    /** Values for the class/ Значения для класса */
    t(this, "classes", a(() => ({
      [`${this.className}--cancel`]: this.icons.isCancel.value,
      [`${this.className}--suffix`]: this.props.suffix,
      [`${this.className}--validation`]: this.isValidation.value
    })));
    /**
     * Returns data for the slot/ Возвращает данные для слота
     */
    t(this, "control", a(() => {
      const e = String(this.props.id || this.id), s = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
      return {
        id: e,
        className: s,
        classHidden: `${this.className}__body__hidden`,
        classForFocus: `${this.className}__body__focus`,
        binds: {
          id: e,
          className: s,
          ...d.labelledby(this.labelId),
          ...d.describedby(this.getDescribedby()),
          ...d.invalid(this.isValidation.value)
        }
      };
    }));
    this.props = e, this.refs = s, this.element = i, this.classDesign = o, this.className = l, this.components = h, this.slots = c, this.emits = p, this.skeleton = new k(
      this.props,
      this.classDesign,
      ["classBackground"]
    ), this.icon = new A(this.props, this.className, this.components), this.caption = new N(this.props, this.className, this.slots), this.prefix = new x(this.props, this.className, this.slots), this.suffix = new B(this.props, this.className, this.slots), this.fieldLabel = new L(
      this.props,
      this.className,
      this.components,
      this.slots,
      this.refs.counterTop,
      this.labelId,
      this.counterId,
      this.skeleton.binds
    ), this.fieldMessage = new E(
      this.props,
      this.className,
      this.components,
      void 0,
      a(() => !this.props.counterTop),
      this.helperId,
      this.validationId,
      this.counterId,
      this.skeleton.binds
    ), this.progress = new F(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.enabled = new $(this.props, this.progress), this.event = new C(this.props, this.enabled, this.emits), this.icons = new T(this.props, this.className), this.size = new q(this.element, this.className);
  }
  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   */
  getDescribedby() {
    const e = [];
    return this.props.helperMessage && e.push(this.helperId), this.isValidation.value && e.push(this.validationId), this.props.counterShow && e.push(this.counterId), e.join(" ");
  }
}
const Q = {
  // :default [!] System label / Системная метка
  arrowAlign: "right",
  cancel: "auto"
};
class X extends I {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, i, o) {
    super(
      s,
      i,
      o
    );
    t(this, "item");
    /**
     * Generates body.
     *
     * Генерирует тело.
     */
    t(this, "renderBody", () => {
      var i;
      const s = [
        this.initSlot("default", void 0, this.item.control.value),
        this.renderBodyLabel(),
        this.renderBodyScoreboard(),
        this.renderBodyBorder()
      ];
      return [
        r(
          "span",
          {
            class: [
              (i = this.classes) == null ? void 0 : i.value.body,
              this.item.skeleton.classes.value
            ],
            onClick: this.item.event.onClick
          },
          s
        )
      ];
    });
    /**
     * Generates data for the title.
     *
     * Генерирует данные для заголовка.
     */
    t(this, "renderBodyLabel", () => {
      var i, o, l, h;
      const s = [
        this.props.label
      ];
      return this.props.required && s.push(r(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.required }
      )), r(
        "span",
        { class: (o = this.classes) == null ? void 0 : o.value.bodyTitle },
        r(
          "span",
          { class: (l = this.classes) == null ? void 0 : l.value.bodyTitleLabel },
          r(
            "span",
            { class: (h = this.classes) == null ? void 0 : h.value.bodyTitleLabelText },
            s
          )
        )
      );
    });
    /**
     * Generates data for additional controls.
     *
     * Генерирует данные для дополнительных управлений.
     */
    t(this, "renderBodyScoreboard", () => {
      var i;
      const s = [
        ...this.renderBodyScoreboardSlot(),
        ...this.renderBodyScoreboardIcon(),
        ...this.item.prefix.render(),
        ...this.item.suffix.render(),
        ...this.item.progress.render(),
        ...this.renderBodyScoreboardSpace()
      ];
      return r("span", {
        class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboard,
        "data-element": "scoreboard"
      }, s);
    });
    /**
     * Generates data for the slot.
     *
     * Генерирует данные для слота.
     */
    t(this, "renderBodyScoreboardSlot", () => {
      var i, o;
      const s = [];
      return this.slots && ("leading" in this.slots && s.push(r(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboardLeft },
        this.initSlot("leading")
      )), "trailing" in this.slots && s.push(r(
        "span",
        { class: (o = this.classes) == null ? void 0 : o.value.bodyScoreboardRight },
        this.initSlot("trailing")
      ))), s;
    });
    /**
     * Generates all available icons.
     *
     * Генерирует все доступные иконки.
     */
    t(this, "renderBodyScoreboardIcon", () => {
      const s = [...this.item.icon.render()];
      return this.item.icons.isCancel.value && this.components.renderAdd(
        s,
        "icon",
        this.item.icons.cancelBind.value,
        void 0,
        "cancel"
      ), this.item.icons.isArrow.value && (this.components.renderAdd(
        s,
        "icon",
        this.item.icons.previousBind.value,
        void 0,
        "previous"
      ), this.components.renderAdd(
        s,
        "icon",
        this.item.icons.nextBind.value,
        void 0,
        "next"
      )), s;
    });
    /**
     * Generates separators and additional descriptions.
     *
     * Генерирует разделители и дополнительные описания.
     */
    t(this, "renderBodyScoreboardSpace", () => {
      var i, o;
      const s = [];
      return this.item.caption.is.value && s.push(
        r(
          "span",
          {
            class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboardInput,
            style: `min-width: ${this.lengthValue()};`
          },
          this.focusValue()
        ),
        ...this.item.caption.render()
      ), [
        r(
          "span",
          { class: (o = this.classes) == null ? void 0 : o.value.bodyScoreboardSpace },
          s
        )
      ];
    });
    /**
     * Generates border.
     *
     * Генерирует border.
     */
    t(this, "renderBodyBorder", () => {
      var s;
      return r("span", { class: (s = this.classes) == null ? void 0 : s.value.bodyBorder });
    });
    /**
     * Value for focus.
     *
     * Значение для фокуса.
     */
    t(this, "focusValue", () => !this.lengthElement.value && w(this.props.value) ? this.props.value : "");
    /**
     * Length value.
     *
     * Значение длины.
     */
    t(this, "lengthValue", () => {
      if (this.lengthElement.value)
        return `${this.lengthElement.value.offsetWidth}px`;
    });
    /**
     * Element for counting characters.
     *
     * Элемент для подсчёта символов.
     */
    t(this, "lengthElement", a(() => {
      var s, i;
      return (i = (s = this.element.value) == null ? void 0 : s.querySelector("*[data-length]")) != null ? i : void 0;
    }));
    /**
     * Input element.
     *
     * Элемент ввода.
     */
    t(this, "inputElement", a(() => {
      var s, i, o, l;
      return (l = (o = this.element.value) == null ? void 0 : o.querySelector(`input.${(s = this.classes) == null ? void 0 : s.value.bodyInput}, .${(i = this.classes) == null ? void 0 : i.value.bodyInput} input`)) != null ? l : void 0;
    }));
    this.item = new P(
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
    var i, o;
    const s = [];
    return this.props.classic && !this.props.basic && !this.props.boxed && !this.props.filled && !this.props.outlined && !this.props.tonal && s.push(...this.item.fieldLabel.render()), s.push(
      ...this.renderBody(),
      ...this.item.fieldMessage.render()
    ), r(
      "label",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (i = this.classes) == null ? void 0 : i.value.main,
        style: (o = this.styles) == null ? void 0 : o.value
      },
      s
    );
  }
}
export {
  P as Field,
  X as FieldDesign,
  Q as defaultsField
};

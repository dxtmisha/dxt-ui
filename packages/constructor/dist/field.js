var B = Object.defineProperty;
var $ = (n, i, s) => i in n ? B(n, i, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[i] = s;
var e = (n, i, s) => $(n, typeof i != "symbol" ? i + "" : i, s);
import { computed as r, watch as L, onUnmounted as E, onMounted as F, onUpdated as T, h as l } from "vue";
import { isDomRuntime as k, EventItem as A, getElementId as P, DesignConstructorAbstract as q, isString as M } from "@dxtmisha/functional";
import { A as p } from "./AriaStaticInclude-DRHG8ILX.js";
import { C as D } from "./CaptionInclude-CohAZRI2.js";
import { P as V, S as z } from "./SuffixInclude-maZ7235l.js";
import { E as R } from "./EnabledInclude-B9oXYBtR.js";
import { E as W } from "./EventClickInclude-DMbEP-nH.js";
import { T as U } from "./TextInclude--GERRCGj.js";
import { F as j } from "./FieldLabelInclude-Bkxf6rRw.js";
import { F as H } from "./FieldMessageInclude-BJDnir34.js";
import { I as G } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as J } from "./ProgressInclude-DlEbC7XP.js";
import { S as K } from "./SkeletonInclude-BIUzAO2s.js";
class O {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param text text include/ Подключение текста
   */
  constructor(i, s, t) {
    /**
     * Determines whether to display arrows.
     *
     * Определяет, требуется ли отображение стрелок.
     */
    e(this, "isArrow", r(
      () => !!((this.props.arrowCarousel || this.props.arrowStepper) && !this.props.disabled)
    ));
    /**
     * Determines whether to display the "Delete" button.
     *
     * Определяет, требуется ли отображение кнопки "Удалить".
     */
    e(this, "isCancel", r(() => !!(this.props.cancel && !this.props.readonly && !this.props.disabled && !this.props.arrowCarousel && !this.props.arrowStepper && (this.props.cancel === "auto" && this.props.cancelShow || this.props.cancel === "always"))));
    /**
     * Returns data for the data deletion button.
     *
     * Возвращает данные для кнопки удаления данных.
     */
    e(this, "cancelBind", r(() => ({
      class: `${this.className}__cancel`,
      icon: this.props.iconClose,
      dynamic: !0,
      "data-event-type": "cancel",
      ariaLabel: this.text.cancel.value
    })));
    /**
     * Returns data for the left arrow.
     *
     * Возвращает данные для стрелки слева.
     */
    e(this, "previousBind", r(() => ({
      class: `${this.className}__previous`,
      icon: this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
      disabled: this.props.disabled || this.props.disabledPrevious,
      dynamic: !0,
      "data-event-type": "previous",
      ariaLabel: this.props.arrowCarousel ? this.text.previous.value : this.text.decrement.value
    })));
    /**
     * Returns data for the right arrow.
     *
     * Возвращает данные для стрелки справа.
     */
    e(this, "nextBind", r(() => ({
      class: `${this.className}__next`,
      icon: this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
      disabled: this.props.disabled || this.props.disabledNext,
      dynamic: !0,
      "data-event-type": "next",
      ariaLabel: this.props.arrowCarousel ? this.text.next.value : this.text.increment.value
    })));
    this.props = i, this.className = s, this.text = t;
  }
}
class Q {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param className class name/ название класса
   */
  constructor(i, s) {
    e(this, "left", 0);
    e(this, "right", 0);
    e(this, "title", 0);
    e(this, "event");
    /**
     * Update margins.
     *
     * Обновление отступов.
     * @param limit recursion limit/ лимит рекурсии
     */
    e(this, "update", (i = 128) => {
      requestAnimationFrame(() => {
        var o, a, h, d;
        const s = this.getElementSpace(), t = this.getElementPrefix();
        s && (this.left = s.offsetLeft, this.right = ((a = (o = s.parentElement) == null ? void 0 : o.offsetWidth) != null ? a : 0) - this.left - s.offsetWidth), this.title = (d = (h = t == null ? void 0 : t.offsetLeft) != null ? h : s == null ? void 0 : s.offsetLeft) != null ? d : 0, this.left < 0 ? this.update(i - 1) : this.make();
      });
    });
    this.element = i, this.className = s, L(i, () => this.update, { immediate: !0 }), k() && (this.event = new A(window, "resize", () => this.update()), E(() => {
      var t;
      return (t = this.event) == null ? void 0 : t.stop();
    })), F(this.update), T(this.update);
  }
  /**
   * Returns separator elements.
   *
   * Возвращает элементы-разделители.
   */
  getElementSpace() {
    var i, s;
    return (s = (i = this.element.value) == null ? void 0 : i.querySelector(`.${this.className}__body__scoreboard__space`)) != null ? s : void 0;
  }
  /**
   * Returns element with prefix.
   *
   * Возвращает элемент с префиксом.
   */
  getElementPrefix() {
    var i, s;
    return (s = (i = this.element.value) == null ? void 0 : i.querySelector(`.${this.className}__prefix`)) != null ? s : void 0;
  }
  /**
   * Update input field margins.
   *
   * Обновление отступов для поля ввода.
   */
  make() {
    const i = this.element.value;
    i && (i.style.setProperty(`--${this.className}-sys-left`, `${this.left}px`), i.style.setProperty(`--${this.className}-sys-right`, `${this.right}px`), i.style.setProperty(`--${this.className}-sys-title`, `${this.title}px`), i.classList.contains(`${this.className}--show`) || requestAnimationFrame(() => i.classList.add(`${this.className}--show`)));
  }
}
class X {
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
  constructor(i, s, t, o, a, h, d, u, c) {
    /** Text include/ Подключение текста */
    e(this, "text");
    /** Icon trailing include/ Подключение иконки в конце */
    e(this, "icon");
    /** Caption include/ Подключение подписи */
    e(this, "caption");
    /** Prefix include/ Подключение префикса */
    e(this, "prefix");
    /** Suffix include/ Подключение суффикса */
    e(this, "suffix");
    /** Field label include/ Подключение метки поля */
    e(this, "fieldLabel");
    /** Field message include/ Подключение сообщения поля */
    e(this, "fieldMessage");
    /** Progress include/ Подключение прогресса */
    e(this, "progress");
    /** Enabled include/ Подключение активности */
    e(this, "enabled");
    /** Event click include/ Подключение события клика */
    e(this, "event");
    /** Skeleton include/ Подключение скелетона */
    e(this, "skeleton");
    /** Field icons/ Иконки поля */
    e(this, "icons");
    /** Field size/ Размер поля */
    e(this, "size");
    /** Checks if the field is classic/ Проверяет, является ли поле классическим */
    e(this, "isClassic", r(
      () => !!(this.props.classic && !this.props.basic && !this.props.boxed && !this.props.filled && !this.props.outlined && !this.props.tonal)
    ));
    /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
    e(this, "isValidation", r(() => !!(this.props.validationMessage && (this.props.forceShowMessage || !this.props.readonly && !this.props.disabled))));
    /** Field identifier/ Идентификатор поля */
    e(this, "id", r(() => String(this.props.id || P())));
    /** Values for the class/ Значения для класса */
    e(this, "classes", r(() => ({
      [`${this.className}--cancel`]: this.icons.isCancel.value,
      [`${this.className}--suffix`]: this.props.suffix,
      [`${this.className}--validation`]: this.isValidation.value
    })));
    /**
     * Returns data for the slot/ Возвращает данные для слота
     */
    e(this, "control", r(() => {
      const i = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
      return {
        id: this.id.value,
        className: i,
        classHidden: `${this.className}__body__hidden`,
        classForFocus: `${this.className}__body__focus`,
        binds: {
          id: this.id.value,
          class: i,
          ...p.invalid(this.isValidation.value),
          ...p.describedby(this.getDescribedby())
        }
      };
    }));
    this.props = i, this.refs = s, this.element = t, this.classDesign = o, this.className = a, this.components = h, this.slots = d, this.emits = u;
    const {
      CaptionIncludeConstructor: m = D,
      EnabledIncludeConstructor: b = R,
      EventClickIncludeConstructor: f = W,
      FieldIconsConstructor: v = O,
      FieldLabelIncludeConstructor: y = j,
      FieldMessageIncludeConstructor: g = H,
      FieldSizeConstructor: S = Q,
      IconTrailingIncludeConstructor: _ = G,
      PrefixIncludeConstructor: x = V,
      ProgressIncludeConstructor: C = J,
      SkeletonIncludeConstructor: w = K,
      SuffixIncludeConstructor: I = z,
      TextIncludeConstructor: N = U
    } = c != null ? c : {};
    this.skeleton = new w(
      this.props,
      this.classDesign,
      ["classBackground"]
    ), this.icon = new _(this.props, this.className, this.components), this.text = new N(this.props), this.caption = new m(this.props, this.className, this.slots), this.prefix = new x(this.props, this.className, this.slots), this.suffix = new I(this.props, this.className, this.slots), this.fieldLabel = new y(
      this.props,
      this.className,
      this.components,
      this.slots,
      this.id,
      this.refs.counterTop,
      this.skeleton.binds
    ), this.fieldMessage = new g(
      this.props,
      this.className,
      this.components,
      void 0,
      r(() => !this.props.counterTop),
      this.skeleton.binds
    ), this.progress = new C(
      this.props,
      this.className,
      this.components,
      {
        circular: !0,
        position: "static",
        dense: !0
      }
    ), this.enabled = new b(this.props, this.progress), this.event = new f(this.props, this.enabled, this.emits), this.icons = new v(this.props, this.className, this.text), this.size = new S(this.element, this.className);
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
const ps = {
  // :default [!] System label / Системная метка
  arrowAlign: "right",
  cancel: "auto"
};
class us extends q {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, t, o, a = X) {
    super(
      s,
      t,
      o
    );
    e(this, "item");
    /**
     * Generates body.
     *
     * Генерирует тело.
     */
    e(this, "renderBody", () => {
      var t;
      const s = [
        this.initSlot("default", void 0, this.item.control.value),
        this.renderBodyLabel(),
        this.renderBodyScoreboard(),
        this.renderBodyBorder()
      ];
      return [
        l(
          "span",
          {
            class: [
              (t = this.classes) == null ? void 0 : t.value.body,
              this.item.skeleton.classes.value
            ],
            ...this.item.event.binds
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
    e(this, "renderBodyLabel", () => {
      var t, o, a, h;
      const s = [
        this.props.label
      ];
      return this.props.required && s.push(l(
        "span",
        { class: (t = this.classes) == null ? void 0 : t.value.required }
      )), l(
        "span",
        { class: (o = this.classes) == null ? void 0 : o.value.bodyTitle },
        l(
          "span",
          { class: (a = this.classes) == null ? void 0 : a.value.bodyTitleLabel },
          l(
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
    e(this, "renderBodyScoreboard", () => {
      var t;
      const s = [
        ...this.renderBodyScoreboardSlot(),
        ...this.renderBodyScoreboardIcon(),
        ...this.item.prefix.render(),
        ...this.item.suffix.render(),
        ...this.item.progress.render(),
        ...this.renderBodyScoreboardSpace()
      ];
      return l("span", {
        class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboard,
        "data-element": "scoreboard"
      }, s);
    });
    /**
     * Generates data for the slot.
     *
     * Генерирует данные для слота.
     */
    e(this, "renderBodyScoreboardSlot", () => {
      var t, o;
      const s = [];
      return this.slots && ("leading" in this.slots && s.push(l(
        "span",
        { class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboardLeft },
        this.initSlot("leading")
      )), "trailing" in this.slots && s.push(l(
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
    e(this, "renderBodyScoreboardIcon", () => {
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
    e(this, "renderBodyScoreboardSpace", () => {
      var t, o;
      const s = [];
      return this.item.caption.is.value && s.push(
        l(
          "span",
          {
            class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboardInput,
            style: `min-width: ${this.lengthValue()};`
          },
          this.focusValue()
        ),
        ...this.item.caption.render()
      ), [
        l(
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
    e(this, "renderBodyBorder", () => {
      var s;
      return l("span", { class: (s = this.classes) == null ? void 0 : s.value.bodyBorder });
    });
    /**
     * Value for focus.
     *
     * Значение для фокуса.
     */
    e(this, "focusValue", () => !this.lengthElement.value && M(this.props.value) ? this.props.value : "");
    /**
     * Length value.
     *
     * Значение длины.
     */
    e(this, "lengthValue", () => {
      if (this.lengthElement.value)
        return `${this.lengthElement.value.offsetWidth}px`;
    });
    /**
     * Element for counting characters.
     *
     * Элемент для подсчёта символов.
     */
    e(this, "lengthElement", r(() => {
      var s, t;
      return (t = (s = this.element.value) == null ? void 0 : s.querySelector("*[data-length]")) != null ? t : void 0;
    }));
    /**
     * Input element.
     *
     * Элемент ввода.
     */
    e(this, "inputElement", r(() => {
      var s, t, o, a;
      return (a = (o = this.element.value) == null ? void 0 : o.querySelector(`input.${(s = this.classes) == null ? void 0 : s.value.bodyInput}, .${(t = this.classes) == null ? void 0 : t.value.bodyInput} input`)) != null ? a : void 0;
    }));
    this.item = new a(
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
    var t, o;
    const s = [];
    return this.item.isClassic.value && s.push(...this.item.fieldLabel.render()), s.push(
      ...this.renderBody(),
      ...this.item.fieldMessage.render()
    ), l(
      this.item.isClassic.value ? "div" : "label",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (t = this.classes) == null ? void 0 : t.value.main,
        style: (o = this.styles) == null ? void 0 : o.value,
        for: this.item.isClassic.value ? void 0 : this.item.id.value
      },
      s
    );
  }
}
export {
  X as Field,
  us as FieldDesign,
  ps as defaultsField
};

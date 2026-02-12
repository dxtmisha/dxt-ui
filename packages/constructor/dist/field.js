var B = Object.defineProperty;
var $ = (n, t, s) => t in n ? B(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var e = (n, t, s) => $(n, typeof t != "symbol" ? t + "" : t, s);
import { computed as r, watch as L, onUnmounted as E, onMounted as F, onUpdated as k, h as l } from "vue";
import { isDomRuntime as T, EventItem as A, getElementId as P, DesignConstructorAbstract as q, isString as M } from "@dxtmisha/functional";
import { A as c } from "./AriaStaticInclude-ZrgMZ2ja.js";
import { C as D } from "./CaptionInclude-DkMvAqPU.js";
import { P as V, S as z } from "./SuffixInclude-maZ7235l.js";
import { E as R } from "./EnabledInclude-DIc_ZLNR.js";
import { E as W } from "./EventClickInclude-WHJqxZ1b.js";
import { T as K } from "./TextInclude--GERRCGj.js";
import { F as U } from "./FieldLabelInclude-Bkxf6rRw.js";
import { F as j } from "./FieldMessageInclude-BJDnir34.js";
import { I as H } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as G } from "./ProgressInclude-hQsbbhvF.js";
import { S as J } from "./SkeletonInclude-BIUzAO2s.js";
class O {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param text text include/ Подключение текста
   */
  constructor(t, s, i) {
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
    this.props = t, this.className = s, this.text = i;
  }
}
class Q {
  /**
   * Constructor
   * @param element main element/ главный элемент
   * @param className class name/ название класса
   */
  constructor(t, s) {
    e(this, "left", 0);
    e(this, "right", 0);
    e(this, "title", 0);
    e(this, "event");
    /**
     * Update margins.
     *
     * Обновление отступов.
     */
    e(this, "update", () => {
      requestAnimationFrame(() => {
        var i, o, a, h;
        const t = this.getElementSpace(), s = this.getElementPrefix();
        t && (this.left = t.offsetLeft, this.right = ((o = (i = t.parentElement) == null ? void 0 : i.offsetWidth) != null ? o : 0) - this.left - t.offsetWidth), this.title = (h = (a = s == null ? void 0 : s.offsetLeft) != null ? a : t == null ? void 0 : t.offsetLeft) != null ? h : 0, this.make();
      });
    });
    this.element = t, this.className = s, L(t, () => this.update, { immediate: !0 }), T() && (this.event = new A(window, "resize", this.update), E(() => {
      var i;
      return (i = this.event) == null ? void 0 : i.stop();
    })), F(this.update), k(this.update);
  }
  /**
   * Returns separator elements.
   *
   * Возвращает элементы-разделители.
   */
  getElementSpace() {
    var t, s;
    return (s = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.className}__body__scoreboard__space`)) != null ? s : void 0;
  }
  /**
   * Returns element with prefix.
   *
   * Возвращает элемент с префиксом.
   */
  getElementPrefix() {
    var t, s;
    return (s = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.className}__prefix`)) != null ? s : void 0;
  }
  /**
   * Update input field margins.
   *
   * Обновление отступов для поля ввода.
   */
  make() {
    const t = this.element.value;
    t && (t.style.setProperty(`--${this.className}-sys-left`, `${this.left}px`), t.style.setProperty(`--${this.className}-sys-right`, `${this.right}px`), t.style.setProperty(`--${this.className}-sys-title`, `${this.title}px`), t.classList.contains(`${this.className}--show`) || requestAnimationFrame(() => t.classList.add(`${this.className}--show`)));
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
  constructor(t, s, i, o, a, h, p, u, d) {
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
      const t = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
      return {
        id: this.id.value,
        className: t,
        classHidden: `${this.className}__body__hidden`,
        classForFocus: `${this.className}__body__focus`,
        binds: {
          id: this.id.value,
          class: t,
          ...c.invalid(this.isValidation.value),
          ...c.describedby(this.getDescribedby())
        }
      };
    }));
    this.props = t, this.refs = s, this.element = i, this.classDesign = o, this.className = a, this.components = h, this.slots = p, this.emits = u;
    const {
      CaptionIncludeConstructor: m = D,
      EnabledIncludeConstructor: b = R,
      EventClickIncludeConstructor: f = W,
      FieldIconsConstructor: v = O,
      FieldLabelIncludeConstructor: y = U,
      FieldMessageIncludeConstructor: g = j,
      FieldSizeConstructor: S = Q,
      IconTrailingIncludeConstructor: _ = H,
      PrefixIncludeConstructor: C = V,
      ProgressIncludeConstructor: x = G,
      SkeletonIncludeConstructor: w = J,
      SuffixIncludeConstructor: I = z,
      TextIncludeConstructor: N = K
    } = d != null ? d : {};
    this.skeleton = new w(
      this.props,
      this.classDesign,
      ["classBackground"]
    ), this.icon = new _(this.props, this.className, this.components), this.text = new N(this.props), this.caption = new m(this.props, this.className, this.slots), this.prefix = new C(this.props, this.className, this.slots), this.suffix = new I(this.props, this.className, this.slots), this.fieldLabel = new y(
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
    ), this.progress = new x(
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
  constructor(s, i, o, a = X) {
    super(
      s,
      i,
      o
    );
    e(this, "item");
    /**
     * Generates body.
     *
     * Генерирует тело.
     */
    e(this, "renderBody", () => {
      var i;
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
              (i = this.classes) == null ? void 0 : i.value.body,
              this.item.skeleton.classes.value
            ],
            onClick: this.item.event.onClick,
            onKeydown: this.item.event.onKeydown
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
      var i, o, a, h;
      const s = [
        this.props.label
      ];
      return this.props.required && s.push(l(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.required }
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
      var i;
      const s = [
        ...this.renderBodyScoreboardSlot(),
        ...this.renderBodyScoreboardIcon(),
        ...this.item.prefix.render(),
        ...this.item.suffix.render(),
        ...this.item.progress.render(),
        ...this.renderBodyScoreboardSpace()
      ];
      return l("span", {
        class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboard,
        "data-element": "scoreboard"
      }, s);
    });
    /**
     * Generates data for the slot.
     *
     * Генерирует данные для слота.
     */
    e(this, "renderBodyScoreboardSlot", () => {
      var i, o;
      const s = [];
      return this.slots && ("leading" in this.slots && s.push(l(
        "span",
        { class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboardLeft },
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
      var i, o;
      const s = [];
      return this.item.caption.is.value && s.push(
        l(
          "span",
          {
            class: (i = this.classes) == null ? void 0 : i.value.bodyScoreboardInput,
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
      var s, i;
      return (i = (s = this.element.value) == null ? void 0 : s.querySelector("*[data-length]")) != null ? i : void 0;
    }));
    /**
     * Input element.
     *
     * Элемент ввода.
     */
    e(this, "inputElement", r(() => {
      var s, i, o, a;
      return (a = (o = this.element.value) == null ? void 0 : o.querySelector(`input.${(s = this.classes) == null ? void 0 : s.value.bodyInput}, .${(i = this.classes) == null ? void 0 : i.value.bodyInput} input`)) != null ? a : void 0;
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
    var i, o;
    const s = [];
    return this.item.isClassic.value && s.push(...this.item.fieldLabel.render()), s.push(
      ...this.renderBody(),
      ...this.item.fieldMessage.render()
    ), l(
      this.item.isClassic.value ? "div" : "label",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (i = this.classes) == null ? void 0 : i.value.main,
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

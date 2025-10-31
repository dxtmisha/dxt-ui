var M = Object.defineProperty;
var B = (l, t, e) => t in l ? M(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var r = (l, t, e) => B(l, typeof t != "symbol" ? t + "" : t, e);
import { computed as n, toRefs as F, watch as x, isRef as N, isReadonly as C, ref as u } from "vue";
import { isFilled as o, render as p, RouterItemRef as L, getExp as S, isNumber as $, toNumberByMax as R, GeoRef as T, toCamelCaseFirst as v, toCamelCase as b, isFunction as D, toBinds as A, createElement as O, anyToString as d, executeFunction as V, isString as _, toNumber as y, isArray as w, isObject as m, toArray as G, setValues as H, getRef as k, Translate as q } from "@dxtmisha/functional";
class K {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    /**
     * Returns true if caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    r(this, "is", n(() => {
      var t;
      return !!(this.props.caption || (t = this.slots) != null && t.caption);
    }));
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    var e, s, i, a;
    const t = [];
    return o(this.props.caption) && t.push(this.props.caption), (e = this.slots) != null && e.caption && t.push((i = (s = this.slots).caption) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
      p(
        "div",
        {
          class: {
            [`${this.className}__caption`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          },
          "data-event-type": "caption"
        },
        t,
        "caption"
      )
    ] : [];
  }
}
class P {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    r(this, "is", n(() => {
      var t;
      return !!(this.props.description || (t = this.slots) != null && t.description);
    }));
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var e, s, i, a;
    const t = [];
    return o(this.props.description) && t.push(this.props.description), (e = this.slots) != null && e.description && t.push((i = (s = this.slots).description) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
      p(
        "div",
        {
          class: {
            [`${this.className}__description`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          }
        },
        t,
        "description"
      )
    ] : [];
  }
}
class Y {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param progress object for working with progress/ объект для работы с прогрессами
   */
  constructor(t, e) {
    /**
     * Checks if the element is active
     *
     * Проверяет, активен ли элемент
     */
    r(this, "isEnabled", n(
      () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic)
    ));
    /**
     * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
     */
    r(this, "isReadonly", n(() => !!this.props.readonly));
    /**
     * checks if the element is disabled/ проверяет, отключён ли элемент
     */
    r(this, "isDisabled", n(() => !!this.props.disabled));
    /**
     * checks if the element is disabled or the value is empty/
     * проверяет, отключён ли элемент или пустое ли значение
     */
    r(this, "isDisabledOrUndefined", n(() => this.isDisabled.value || void 0));
    this.props = t, this.progress = e;
  }
}
class Z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s) {
    r(this, "refs");
    /**
     * Event trigger function
     *
     * Функция вызова события
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    r(this, "onClick", (t, e) => {
      if (this.emits)
        if (e)
          this.emit(t, e);
        else if (this.toRouter())
          t.preventDefault();
        else if (this.enabled) {
          const s = this.getOptions(t);
          (this.enabled.isEnabled.value || s.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(t, s);
        } else
          this.emit(t, this.getOptions(t));
    });
    this.props = t, this.enabled = e, this.emits = s, this.refs = t ? F(t) : void 0;
  }
  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose() {
    var t, e;
    return {
      value: (t = this.refs) == null ? void 0 : t.value,
      detail: (e = this.refs) == null ? void 0 : e.detail
    };
  }
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(t) {
    var e, s;
    return {
      type: this.getTargetType(t),
      value: (e = this.props) == null ? void 0 : e.value,
      detail: (s = this.props) == null ? void 0 : s.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(t) {
    var s, i, a;
    const e = (a = (i = (s = t.target) == null ? void 0 : s.closest("[data-event-type]")) == null ? void 0 : i.dataset) == null ? void 0 : a.eventType;
    return e != null ? e : "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    var t, e;
    return (t = this.props) != null && t.to ? (L.push((e = this.props) == null ? void 0 : e.to), !0) : !1;
  }
  /**
   * Triggers the click event
   *
   * Вызывает событие клика
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  emit(t, e) {
    this.emits && (this.emits("click", t, e), this.emits("clickLite", e));
  }
}
class I {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param labelReplacing additional elements/ дополнительные элементы
   * @param alternativeSlots alternative slots/ альтернативные слоты
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i, a, h, f, E) {
    /** Label presence check/ Проверка наличия метки */
    r(this, "is", n(() => {
      var t;
      return this.props.label || (t = this.labelReplacing) != null && t.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    this.props = t, this.className = e, this.classesExtra = s, this.slots = i, this.elementsExtra = a, this.labelReplacing = h, this.alternativeSlots = f, this.skeleton = E;
  }
  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   */
  render(t) {
    const e = [];
    if (this.is.value) {
      const s = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ];
      this.elementsExtra && s.push(...this.elementsExtra()), t && s.push(...t), s.length > 0 && e.push(
        p(
          "span",
          { class: this.getClassName() },
          s,
          "label"
        )
      );
    }
    return e;
  }
  /**
   * Get the class name for the label
   *
   * Получение имени класса для метки
   */
  getClassName() {
    const t = [`${this.className}__label`];
    return this.classesExtra && t.push(this.classesExtra), this.skeleton && t.push(this.skeleton.classes.value), t;
  }
  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  initLabel() {
    var t;
    return !((t = this.labelReplacing) != null && t.value) && o(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var t;
    return o((t = this.labelReplacing) == null ? void 0 : t.value) ? [
      p(
        "span",
        { innerHTML: this.labelReplacing.value },
        void 0,
        "highlight"
      )
    ] : [];
  }
  /**
   * Adds a slot for the label if it exists
   *
   * Добавляет слот для метки, если он есть
   */
  initSlot() {
    var t, e, s, i;
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [(e = (t = this.slots).label) == null ? void 0 : e.call(t, {})];
      } else if ("default" in this.slots)
        return [(i = (s = this.slots).default) == null ? void 0 : i.call(s, {})];
    }
    return [];
  }
}
class J extends I {
  /**
   * Constructor for the LabelHighlightInclude class.
   *
   * Конструктор для класса LabelHighlightInclude.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, s, i, a, h, f) {
    super(
      e,
      s,
      i,
      a,
      h,
      n(() => this.getLabel()),
      void 0,
      f
    );
    /**
     * Returns a string with highlighted parts.
     * If highlighting is not required, returns the original string.
     *
     * Возвращает строку с выделенными частями.
     * Если выделение не требуется, возвращает исходную строку.
     */
    r(this, "getLabel", () => {
      const e = this.props;
      if (e.highlight && e.highlight.length >= this.getLengthStart() && e.label) {
        const s = `${this.className}__highlight`, i = e.label.toString(), a = S(e.highlight, "i");
        if (i.match(a))
          return i.replace(a, (h) => `<span class="${s}">${h}</span>`);
        if (o(e.value) && e.value.toString().match(a))
          return `<span class="${s}">${i}</span>`;
      }
    });
    this.props = e, this.className = s, this.classesExtra = i, this.slots = a, this.elementsExtra = h, this.skeleton = f;
  }
  /**
   * Returns the minimum length of the string to start highlighting.
   *
   * Возвращает минимальную длину строки для начала выделения.
   */
  getLengthStart() {
    var e;
    return (e = this.props.highlightLengthStart) != null ? e : 2;
  }
}
class Q extends I {
  /**
   * Constructor for working with text that has maximum values.
   *
   * Конструктор для работы с текстом, у которого есть максимальные значения.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i, a, h) {
    super(
      t,
      e,
      s,
      i,
      a,
      n(() => this.getNumber()),
      void 0,
      h
    ), this.props = t, this.className = e, this.classesExtra = s, this.slots = i, this.elementsExtra = a, this.skeleton = h;
  }
  /**
   * Returns text with conversion to maximum values.
   *
   * Возвращает текст с преобразованием в максимальные значения.
   */
  getNumber() {
    const t = this.props;
    if (t.label && $(t.label))
      return R(
        t.label,
        t.labelMax,
        t.formatting,
        T.getLanguage().value
      ).toString();
  }
}
class W {
  /**
   * Constructor
   * @param index The index key for the model property/ Ключ индекса для свойства модели
   * @param emits Function to emit events/ Функция для испускания событий
   * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
   */
  constructor(t, e, s) {
    /**
     * Updates the synchronized value.
     * Sets the value of the reactive reference if it's a mutable Ref.
     *
     * Обновляет синхронизированное значение.
     * Устанавливает значение реактивной ссылки, если это изменяемый Ref.
     * @param value The new value to set/ Новое значение для установки
     */
    r(this, "update", (t) => {
      this.isValue() && (this.syncValue.value = t);
    });
    this.index = t, this.emits = e, this.syncValue = s, s && x(s, (i) => {
      this.emit(i);
    }, { immediate: !0 });
  }
  /**
   * Type guard to check if syncValue is a mutable Ref.
   * Returns true if syncValue is a reference and not readonly.
   *
   * Проверка типа, является ли syncValue изменяемым Ref.
   * Возвращает true, если syncValue является ссылкой и не readonly.
   * @returns Type predicate indicating syncValue is a mutable Ref/ Предикат типа, указывающий что syncValue - изменяемый Ref
   */
  isValue() {
    return N(this.syncValue) && !C(this.syncValue);
  }
  /**
   * Generates binding object for v-model integration.
   * Creates properties for two-way data binding with model and update handlers.
   *
   * Генерирует объект привязок для интеграции v-model.
   * Создает свойства для двусторонней привязки данных с обработчиками модели и обновления.
   * @returns Object with model value and update handlers/ Объект со значением модели и обработчиками обновления
   */
  getBinds() {
    if (this.isValue()) {
      const t = v(this.index);
      return {
        [`model${t}`]: this.syncValue.value,
        [`onUpdate:${b(this.index)}`]: this.update,
        [`onUpdate:model${t}`]: this.update
      };
    }
    return {};
  }
  /**
   * Emits an event to update the model value.
   * Triggers the corresponding update event with the new value.
   *
   * Испускает событие для обновления значения модели.
   * Запускает соответствующее событие обновления с новым значением.
   * @param value The new value to set/ Новое значение для установки
   */
  emit(t) {
    D(this.emits) && (this.emits(`update:${b(this.index)}`, t), this.emits(`update:model${v(this.index)}`, t));
  }
}
class X {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    /**
     * Returns true if prefix is filled
     *
     * Возвращает true, если prefix заполнен
     */
    r(this, "is", n(() => {
      var t;
      return !!(this.props.prefix || (t = this.slots) != null && t.prefix);
    }));
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   */
  render() {
    var e, s, i, a;
    const t = [];
    return o(this.props.prefix) && t.push(this.props.prefix), (e = this.slots) != null && e.prefix && t.push((i = (s = this.slots).prefix) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
      p(
        "div",
        {
          class: {
            [`${this.className}__prefix`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          },
          "data-event-type": "prefix"
        },
        t,
        "prefix"
      )
    ] : [];
  }
}
class tt {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    /**
     * Returns true if suffix is filled
     *
     * Возвращает true, если suffix заполнен
     */
    r(this, "is", n(() => {
      var t;
      return !!(this.props.suffix || (t = this.slots) != null && t.suffix);
    }));
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   */
  render() {
    var e, s, i, a;
    const t = [];
    return o(this.props.suffix) && t.push(this.props.suffix), (e = this.slots) != null && e.suffix && t.push((i = (s = this.slots).suffix) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
      p(
        "div",
        {
          class: {
            [`${this.className}__suffix`]: !0,
            ...(a = this.skeleton) == null ? void 0 : a.classes.value
          },
          "data-event-type": "suffix"
        },
        t,
        "suffix"
      )
    ] : [];
  }
}
class et {
  constructor() {
    r(this, "item", u(!1));
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
class st {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(t, e) {
    /** Returns the input type/ Возвращает тип ввода */
    r(this, "item", n(() => {
      var e;
      if (this.props.arrow)
        return "number";
      const t = this.props.type;
      return t === "password" && ((e = this.visibility) != null && e.item.value) ? "text" : t != null ? t : "text";
    }));
    this.props = t, this.visibility = e;
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
const g = {
  email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
  password: "[0-9a-zA-Z\\-!@#$%^&*]+"
};
class it {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    /** Returns regular expressions/ Возвращает регулярные выражения */
    r(this, "item", n(() => {
      if (this.props.pattern)
        return this.props.pattern;
      if (this.type)
        return g == null ? void 0 : g[this.type.item.value];
    }));
    this.props = t, this.type = e;
  }
}
class rt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   * @param inputMode object for working with the keyboard/ объект для работы с клавиатурой
   */
  constructor(t, e, s, i) {
    /** Returns data for verification/ Возвращает данные для проверки */
    r(this, "list", n(() => this.getData(this.getAttributes())));
    /** Returns data for verification/ Возвращает данные для проверки */
    r(this, "listForCheck", n(() => {
      const t = this.list.value;
      return this.props.min || this.props.max || this.props.step ? {
        ...t,
        type: "number"
      } : t;
    }));
    /** Returns data for the input element/ Возвращает данные для элемента ввода */
    r(this, "listForInput", n(() => this.getData(this.getInputAttributes())));
    this.props = t, this.type = e, this.pattern = s, this.inputMode = i;
  }
  /**
   * Returns the list of attributes to be set on the input element.
   *
   * Возвращает список атрибутов, которые нужно установить на элемент ввода.
   */
  getAttributes() {
    return [
      "type",
      "name",
      "required",
      "multiple",
      "step",
      "min",
      "max",
      "minlength",
      "maxlength",
      "accept",
      "pattern"
    ];
  }
  /**
   * Returns the list of attributes to be set on the input element.
   *
   * Возвращает список атрибутов, которые нужно установить на элемент ввода.
   */
  getInputAttributes() {
    return [
      ...this.getAttributes(),
      // Input
      "list",
      // Value
      "placeholder",
      // Basic
      "readonly",
      "disabled",
      "autofocus",
      "tabindex",
      "form",
      // UX
      "autocomplete",
      "autocapitalize",
      "inputMode",
      "enterKeyHint",
      "spellcheck",
      "autocorrect"
    ];
  }
  /**
   * Returns data for the specified attributes.
   *
   * Возвращает данные для указанных атрибутов.
   * @param attributes list of attributes/ список атрибутов
   */
  getData(t) {
    const e = {};
    return t.forEach((s) => {
      if (s in this.props)
        switch (s) {
          case "type":
            this.type ? e[s] = this.type.item.value : e[s] = this.props.type;
            break;
          case "pattern":
            this.pattern && (e.pattern = this.pattern.item.value);
            break;
          case "inputMode":
            this.inputMode && (e.inputmode = this.inputMode.item.value);
            break;
          default:
            e[s] = this.props[s];
        }
    }), A(e, this.props.inputAttrs);
  }
}
class at {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    /** Change state flag/ Флаг состояния изменения */
    r(this, "item", u(!1));
    (t.value || t.modelValue) && (this.item.value = !0);
  }
  /**
   * Returns whether value was changed
   *
   * Возвращает, было ли значение изменено
   */
  is() {
    return !!this.item.value;
  }
  /**
   * Sets change state
   *
   * Устанавливает состояние изменения
   * @param change new state value/ новое значение состояния
   */
  set(t) {
    this.item.value = t;
  }
  /**
   * Force mark as changed
   *
   * Принудительно помечает как изменённое
   */
  to() {
    this.item.value || this.set(!0);
  }
}
class lt {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    this.props = t;
  }
  /**
   * Returns error text
   *
   * Возвращает текст ошибки
   * @param state object with validity state/ объект с данными валидности
   */
  get(t) {
    const e = this.props.validationCode;
    if (t && e && !t.valid) {
      if (typeof e == "string")
        return e;
      {
        const s = this.getIndex(t);
        if (s && s in e)
          return e[s];
      }
    }
  }
  /**
   * Returns error key (first matched)
   *
   * Возвращает ключ ошибки (первый найденный)
   * @param state object with validity state/ объект с данными валидности
   */
  getIndex(t) {
    const e = Object.entries(t);
    for (const [s, i] of e)
      if (s !== "valid" && i)
        return s;
  }
}
class nt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   */
  constructor(t, e) {
    this.props = t, this.element = e;
  }
  /**
   * Returns the input element.
   *
   * Возвращает элемент ввода.
   */
  get() {
    const t = this.element.value;
    if (t)
      return "input" in t ? t.input : t;
  }
  /**
   * Returns a reference to the input element.
   *
   * Возвращает ссылку на элемент ввода.
   */
  getElement() {
    return this.element;
  }
  /**
   * Search for an element by its name inside a group or by selector.
   *
   * Поиск элемента по его названию внутри группы или по селектору.
   * @param nameSelectors element name or selector /<br>название элемента или селектор
   */
  findByName(t) {
    var i;
    if (t instanceof Element)
      return t;
    const e = (i = this.get()) == null ? void 0 : i.form;
    if (e) {
      const a = e.querySelector(`[name="${t}"]`);
      if (a)
        return a;
    }
    const s = document.querySelector(t);
    if (s)
      return s;
  }
  /**
   * Clear all values to the original ones.
   *
   * Очисти все значения до оригинальных.
   */
  clear() {
    var e;
    const t = this.element.value;
    return t && "clear" in t && ((e = t.clear) == null || e.call(t)), this;
  }
}
class c {
  /**
   * Constructor
   * @param pattern property for verification/ свойство для проверки
   * @param group group name/ название группы
   * @param code object for error codes/ объект для работы с кодами ошибок
   */
  constructor(t, e = c.getGroupDefault(), s) {
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    r(this, "input");
    this.pattern = t, this.group = e, this.code = s, this.input = O(
      void 0,
      "input",
      this.getAttributes()
    );
  }
  /**
   * Runs validation and returns result
   *
   * Выполняет проверку и возвращает результат
   */
  check(t) {
    const e = this.input;
    return e ? (e.type === "checkbox" || e.type === "radio" ? e.checked = !!t : e.value = d(t), this.checkByInput(e)) : {
      group: this.group,
      status: !0,
      value: t
    };
  }
  /**
   * Runs validation by input and returns result
   *
   * Выполняет проверку по инпуту и возвращает результат
   * @param input input element/ элемент инпута
   */
  checkByInput(t) {
    var e;
    return {
      group: this.group,
      input: t,
      status: t.checkValidity(),
      validationMessage: t.validationMessage,
      validity: t.validity,
      validityMessage: (e = this.code) == null ? void 0 : e.get(t.validity),
      required: t.required,
      pattern: this.pattern,
      value: t.value
    };
  }
  /**
   * Returns attributes for internal input
   *
   * Возвращает атрибуты для внутреннего инпута
   */
  getAttributes() {
    const t = this.pattern;
    if (o(t)) {
      const e = V(t);
      if (o(e))
        return _(e) ? { pattern: e } : e;
    }
    return {};
  }
  /**
   * Returns the default group name
   *
   * Возвращает название группы по умолчанию
   */
  static getGroupDefault() {
    return "check";
  }
}
class ht {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param original original values /<br>оригинальные значения
   */
  constructor(t, e, s, i) {
    /** Current value/ Текущее значение */
    r(this, "item", u());
    /** Indicates if the value is complete/ Указывает, полное ли значение */
    r(this, "isFull", u(!0));
    /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
    r(this, "hasEdit", u(!1));
    /** Checks if there are values or temporary values/ Проверяет, есть ли значения или временные значения */
    r(this, "is", n(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder));
    /** Checks if there are any values/ Проверяет, есть ли значения */
    r(this, "isValue", n(() => this.hasEdit.value || this.boolean.value));
    /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
    r(this, "itemByFull", n(() => this.isFull.value ? this.item.value : void 0));
    /**
     * Returns the current value, converted to a number/
     * Возвращает текущее значение, преобразованное в номер
     */
    r(this, "number", n(() => this.boolean.value ? y(this.string.value) : 0));
    /** Returns the current value of type string/ Возвращает текущее значение типа string */
    r(this, "string", n(() => d(this.item.value)));
    /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
    r(this, "boolean", n(() => o(this.item.value)));
    /** Returns the length of the entered value/ Возвращает длину введенного значения */
    r(this, "length", n(() => {
      var e;
      const t = this.item.value;
      return w(t) ? t.length : m(t) ? Object.keys(t).length : (e = this.string.value.length) != null ? e : 0;
    }));
    /**
     * Changes the values to the original ones.
     *
     * Изменяет значения на оригинальные.
     */
    r(this, "update", () => {
      (this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
    });
    this.props = t, this.refs = e, this.element = s, this.original = i, this.item.value = this.getOriginal(), x([
      e.value,
      e.modelValue
    ], this.update);
  }
  /**
   * Returns the current value as an array.
   *
   * Возвращает текущее значение в виде массива.
   */
  getToArray() {
    return G(this.item.value);
  }
  /**
   * Changes the value.
   *
   * Изменяет значение.
   * @param value changeable value/ изменяемое значение
   */
  set(t) {
    var e, s;
    if (this.isDifference(t)) {
      this.item.value = H(
        this.item.value,
        t,
        {
          multiple: this.props.multiple,
          maxlength: y(this.props.maxlength)
        }
      );
      const i = (e = this.element) == null ? void 0 : e.getElement();
      i && i.value && "setValue" in i.value && ((s = i.value) == null || s.setValue(this.item.value));
    }
    return this;
  }
  setByEvent(t) {
    switch (typeof t) {
      case "object":
        t && ("value" in t && t.value !== void 0 ? this.set(t.value) : "target" in t && this.setByTarget(t.target), "hasEdit" in t && this.setHasEdit(t.hasEdit), "isFull" in t && this.setFull(t.isFull));
        break;
      default:
        this.set(t);
        break;
    }
    return this;
  }
  /**
   * Changes the values by the selected element.
   *
   * Изменяет значения по выбранному элементу.
   * @param target selected elements/ выбранные элементы
   */
  setByTarget(t) {
    return this.set(
      this.isCheckbox(t) ? t.checked : t.value
    );
  }
  /**
   * Changes the value by the checked property.
   *
   * Изменяет значение по свойству checked.
   * @param event event value/ значение события
   */
  setByChecked(t) {
    const e = t.target;
    return this.set(e.checked);
  }
  /**
   * Changes the value for radio type.
   *
   * Изменяет значение для типа radio.
   * @param event event object/ объект события
   */
  setByRadio(t) {
    const e = t.target, s = e.checked ? e.value : "";
    return this.set(s);
  }
  /**
   * Sets the isFull value.
   *
   * Устанавливает значение isFull.
   * @param isFull isFull value/ значение isFull
   */
  setFull(t) {
    this.isFull.value = t;
  }
  /**
   * Sets the hasEdit value.
   *
   * Устанавливает значение hasEdit.
   * @param hasEdit hasEdit value/ значение hasEdit
   */
  setHasEdit(t) {
    this.hasEdit.value = t;
  }
  /**
   * Sets the value to the original one.
   *
   * Устанавливает значение на оригинальное.
   */
  setToOriginal() {
    return this.item.value = this.getOriginal(), this;
  }
  /**
   * Clear all values to the original ones.
   *
   * Очисти все значения до оригинальных.
   */
  clear() {
    var t;
    return this.item.value = k(this.original), (t = this.element) == null || t.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
  }
  /**
   * Is the selected type a checkbox.
   *
   * Является ли выбранный тип чекбокс.
   * @param target selected elements/ выбранные элементы
   */
  isCheckbox(t) {
    return t.type === "checkbox";
  }
  /**
   * Checks if the value has actually been changed.
   *
   * Проверяет, было ли значение действительно изменено.
   * @param value value to check/ значение для проверки
   */
  isDifference(t = this.getOriginal()) {
    return this.string.value !== d(t);
  }
  /**
   * Returns the original value.
   *
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    return this.props.value || this.props.modelValue || k(this.original);
  }
  /**
   * Checks if the value is being edited.
   *
   * Проверяет, редактируется ли значение.
   * @param value value to check/ значение для проверки
   */
  isEdit(t) {
    return t !== void 0 && d(t) !== this.string.value;
  }
}
class ot {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param value object for working with value/ объект для работы со значениями
   */
  constructor(t, e, s) {
    this.props = t, this.element = e, this.value = s;
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
      return m(this.props.match) ? this.props.match.name : this.props.match;
  }
  /**
   * Returns validation error text
   *
   * Возвращает текст ошибки валидации
   */
  getValidationMessage() {
    var t;
    return this.is() ? m(this.props.match) && ((t = this.props.match) != null && t.validationMessage) ? this.props.match.validationMessage : q.getSync("Your entries must match.") : "";
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
      if (e && d(e.value) !== this.value.string.value)
        return {
          group: c.getGroupDefault(),
          status: !1,
          input: this.element.get(),
          validationMessage: this.getValidationMessage(),
          value: this.value.item.value
        };
    }
  }
}
class ut {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for value work/ объект для работы со значениями
   * @param change object for change state/ объект для состояния изменения
   * @param code object for error codes/ объект для работы с кодами ошибок
   * @param match object for match checking/ объект для проверки совпадений
   */
  constructor(t, e, s, i, a, h) {
    /** Internal validation state/ Внутреннее состояние валидации */
    r(this, "validation", u());
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    r(this, "input", n(
      () => new c(
        this.attributes.listForCheck.value,
        void 0,
        this.code
      )
    ));
    /** Returns error data/ Возвращает данные об ошибке */
    r(this, "item", n(() => {
      var s, i;
      const t = this.checkGlobal();
      if (t)
        return t;
      const e = (i = this.checkItem()) != null ? i : (s = this.match) == null ? void 0 : s.check();
      return e || this.getValidationItemNone();
    }));
    /** Returns error string/ Возвращает строку об ошибке */
    r(this, "message", n(() => {
      var t, e;
      if (this.props.validationMessage)
        return this.props.validationMessage;
      if (!this.change || this.change.is()) {
        const s = this.item.value;
        return (e = (t = s.validityMessage) != null ? t : s.validationMessage) != null ? e : "";
      }
      return "";
    }));
    /**
     * Checks whether the element has constraints and satisfies them
     *
     * Проверяет, имеет ли элемент ограничения и удовлетворяет ли им
     */
    r(this, "checkValidity", () => !this.isError());
    this.props = t, this.attributes = e, this.value = s, this.change = i, this.code = a, this.match = h;
  }
  /**
   * Checks if there is an error
   *
   * Проверяет, есть ли ошибка
   */
  isError() {
    var t;
    return !((t = this.item.value) != null && t.status);
  }
  /**
   * Changes the validity data
   *
   * Изменяет данные о валидности
   * @param validation values for validity/ значения для валидности
   */
  set(t) {
    return "status" in t && "validationMessage" in t && "value" in t ? this.validation.value = t : "target" in t && (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement) && Number(t.target.minLength) > -1 ? this.validation.value = this.input.value.checkByInput(t.target) : this.validation.value = void 0, this;
  }
  /**
   * Returns an empty validation item
   *
   * Возвращает пустой элемент валидации
   */
  getValidationItemNone() {
    return {
      group: c.getGroupDefault(),
      status: !0,
      value: void 0
    };
  }
  /**
   * Check for global data
   *
   * Проверка для глобальных данных
   */
  checkGlobal() {
    var t;
    return this.props.validationMessage ? {
      group: c.getGroupDefault(),
      status: !1,
      validationMessage: this.props.validationMessage,
      value: this.value.item.value
    } : (t = this.validation.value) != null ? t : void 0;
  }
  /**
   * Check for selected data
   *
   * Проверка для выбранных данных
   */
  checkItem() {
    const t = this.value.getToArray();
    for (const e of t) {
      const s = this.checkByInput(e);
      if (!s.status)
        return s;
    }
  }
  /**
   * Checks the value using hidden input element
   * @param value value to check/ значение для проверки
   *
   * Проверяет значение с помощью скрытого input
   */
  checkByInput(t) {
    return this.input.value.check(t);
  }
}
const ct = (l) => `${l}-a--static`;
export {
  K as CaptionInclude,
  P as DescriptionInclude,
  Y as EnabledInclude,
  Z as EventClickInclude,
  rt as FieldAttributesInclude,
  at as FieldChangeInclude,
  lt as FieldCodeInclude,
  nt as FieldElementInclude,
  c as FieldInputCheckInclude,
  ot as FieldMatchInclude,
  it as FieldPatternInclude,
  st as FieldTypeInclude,
  ut as FieldValidationInclude,
  ht as FieldValueInclude,
  et as FieldVisibilityInclude,
  J as LabelHighlightInclude,
  I as LabelInclude,
  Q as LabelNumberInclude,
  W as ModelInclude,
  X as PrefixInclude,
  tt as SuffixInclude,
  ct as getClassTegAStatic
};

import { computed as r, toRefs as k, watch as v, ref as o } from "vue";
import { isFilled as n, render as c, RouterItemRef as x, getExp as I, isNumber as E, toNumberByMax as N, GeoRef as B, isFunction as F, toCamelCase as M, toCamelCaseFirst as T, createElement as C, anyToString as p, executeFunction as S, isString as L, toNumber as g, isArray as R, isObject as f, toArray as $, setValues as A, getRef as m, Translate as D } from "@dxtmisha/functional";
class G {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Returns true if caption is filled
   *
   * Возвращает true, если caption заполнен
   */
  is = r(() => !!(this.props.caption || this.slots?.caption));
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    const t = [];
    return n(this.props.caption) && t.push(this.props.caption), this.slots?.caption && t.push(this.slots.caption?.({})), t.length > 0 ? [
      c(
        "div",
        {
          class: {
            [`${this.className}__caption`]: !0,
            ...this.skeleton?.classes.value
          },
          "data-event-type": "caption"
        },
        t,
        "caption"
      )
    ] : [];
  }
}
class H {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Check for the presence of a description
   *
   * Проверка наличия описания
   */
  is = r(() => !!(this.props.description || this.slots?.description));
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    const t = [];
    return n(this.props.description) && t.push(this.props.description), this.slots?.description && t.push(this.slots.description?.({})), t.length > 0 ? [
      c(
        "div",
        {
          class: {
            [`${this.className}__description`]: !0,
            ...this.skeleton?.classes.value
          }
        },
        t,
        "description"
      )
    ] : [];
  }
}
class q {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param progress object for working with progress/ объект для работы с прогрессами
   */
  constructor(t, e) {
    this.props = t, this.progress = e;
  }
  /**
   * Checks if the element is active
   *
   * Проверяет, активен ли элемент
   */
  isEnabled = r(
    () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic)
  );
  /**
   * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
   */
  isReadonly = r(() => !!this.props.readonly);
  /**
   * checks if the element is disabled/ проверяет, отключён ли элемент
   */
  isDisabled = r(() => !!this.props.disabled);
  /**
   * checks if the element is disabled or the value is empty/
   * проверяет, отключён ли элемент или пустое ли значение
   */
  isDisabledOrUndefined = r(() => this.isDisabled.value || void 0);
}
class V {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s) {
    this.props = t, this.enabled = e, this.emits = s, this.refs = t ? k(t) : void 0;
  }
  refs;
  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose() {
    return {
      value: this.refs?.value,
      detail: this.refs?.detail
    };
  }
  /**
   * Event trigger function
   *
   * Функция вызова события
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  onClick = (t, e) => {
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
  };
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(t) {
    return {
      type: this.getTargetType(t),
      value: this.props?.value,
      detail: this.props?.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(t) {
    return t.target?.closest("[data-event-type]")?.dataset?.eventType ?? "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    return this.props?.to ? (x.push(this.props?.to), !0) : !1;
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
class b {
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
  constructor(t, e, s, i, l, h, d, y) {
    this.props = t, this.className = e, this.classesExtra = s, this.slots = i, this.elementsExtra = l, this.labelReplacing = h, this.alternativeSlots = d, this.skeleton = y;
  }
  /** Label presence check/ Проверка наличия метки */
  is = r(() => this.props.label || this.labelReplacing?.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1);
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
        c(
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
    return !this.labelReplacing?.value && n(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    return n(this.labelReplacing?.value) ? [
      c(
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
    if (this.slots) {
      if (this.alternativeSlots) {
        if ("label" in this.slots)
          return [this.slots.label?.({})];
      } else if ("default" in this.slots)
        return [this.slots.default?.({})];
    }
    return [];
  }
}
class j extends b {
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
  constructor(t, e, s, i, l, h) {
    super(
      t,
      e,
      s,
      i,
      l,
      r(() => this.getLabel()),
      void 0,
      h
    ), this.props = t, this.className = e, this.classesExtra = s, this.slots = i, this.elementsExtra = l, this.skeleton = h;
  }
  /**
   * Returns a string with highlighted parts.
   * If highlighting is not required, returns the original string.
   *
   * Возвращает строку с выделенными частями.
   * Если выделение не требуется, возвращает исходную строку.
   */
  getLabel = () => {
    const t = this.props;
    if (t.highlight && t.highlight.length >= this.getLengthStart() && t.label) {
      const e = `${this.className}__highlight`, s = t.label.toString(), i = I(t.highlight, "i");
      if (s.match(i))
        return s.replace(i, (l) => `<span class="${e}">${l}</span>`);
      if (n(t.value) && t.value.toString().match(i))
        return `<span class="${e}">${s}</span>`;
    }
  };
  /**
   * Returns the minimum length of the string to start highlighting.
   *
   * Возвращает минимальную длину строки для начала выделения.
   */
  getLengthStart() {
    return this.props.highlightLengthStart ?? 2;
  }
}
class P extends b {
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
  constructor(t, e, s, i, l, h) {
    super(
      t,
      e,
      s,
      i,
      l,
      r(() => this.getNumber()),
      void 0,
      h
    ), this.props = t, this.className = e, this.classesExtra = s, this.slots = i, this.elementsExtra = l, this.skeleton = h;
  }
  /**
   * Returns text with conversion to maximum values.
   *
   * Возвращает текст с преобразованием в максимальные значения.
   */
  getNumber() {
    const t = this.props;
    if (t.label && E(t.label))
      return N(
        t.label,
        t.labelMax,
        t.formatting,
        B.getLanguage().value
      ).toString();
  }
}
class z {
  /**
   * Constructor
   * @param index The index key for the model property/ Ключ индекса для свойства модели
   * @param emits Function to emit events/ Функция для испускания событий
   * @param syncValue Reactive value to synchronize/ Реактивное значение для синхронизации
   */
  constructor(t, e, s) {
    this.index = t, this.emits = e, this.syncValue = s, s && v(s, (i) => {
      this.emit(i);
    }, { immediate: !0 });
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
    F(this.emits) && (this.emits(`update:${M(this.index)}`, t), this.emits(`update:model${T(this.index)}`, t));
  }
}
class U {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Returns true if prefix is filled
   *
   * Возвращает true, если prefix заполнен
   */
  is = r(() => !!(this.props.prefix || this.slots?.prefix));
  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   */
  render() {
    const t = [];
    return n(this.props.prefix) && t.push(this.props.prefix), this.slots?.prefix && t.push(this.slots.prefix?.({})), t.length > 0 ? [
      c(
        "div",
        {
          class: {
            [`${this.className}__prefix`]: !0,
            ...this.skeleton?.classes.value
          },
          "data-event-type": "prefix"
        },
        t,
        "prefix"
      )
    ] : [];
  }
}
class Y {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Returns true if suffix is filled
   *
   * Возвращает true, если suffix заполнен
   */
  is = r(() => !!(this.props.suffix || this.slots?.suffix));
  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   */
  render() {
    const t = [];
    return n(this.props.suffix) && t.push(this.props.suffix), this.slots?.suffix && t.push(this.slots.suffix?.({})), t.length > 0 ? [
      c(
        "div",
        {
          class: {
            [`${this.className}__suffix`]: !0,
            ...this.skeleton?.classes.value
          },
          "data-event-type": "suffix"
        },
        t,
        "suffix"
      )
    ] : [];
  }
}
class Z {
  item = o(!1);
  /**
   * Toggles the values.
   *
   * Переключает значения.
   */
  toggle() {
    return this.item.value = !this.item.value, this;
  }
}
class J {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(t, e) {
    this.props = t, this.visibility = e;
  }
  /** Returns the input type/ Возвращает тип ввода */
  item = r(() => {
    if (this.props.arrow)
      return "number";
    const t = this.props.type;
    return t === "password" && this.visibility?.item.value ? "text" : t ?? "text";
  });
}
const O = {
  email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
  password: "[0-9a-zA-Z\\-!@#$%^&*]+"
};
class K {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    this.props = t, this.type = e;
  }
  /** Returns regular expressions/ Возвращает регулярные выражения */
  item = r(() => {
    if (this.props.pattern)
      return this.props.pattern;
    if (this.type)
      return O?.[this.type.item.value];
  });
}
class Q {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   */
  constructor(t, e, s) {
    this.props = t, this.type = e, this.pattern = s;
  }
  /** Returns data for verification/ Возвращает данные для проверки */
  list = r(() => {
    const t = {};
    return this.getAttributes().forEach((e) => {
      if (e in this.props)
        switch (e) {
          case "type":
            this.type ? t[e] = this.type.item.value : t[e] = this.props.type;
            break;
          case "pattern":
            this.pattern && (t.pattern = this.pattern.item.value);
            break;
          default:
            t[e] = this.props[e];
        }
    }), {
      ...t,
      ...this.props.inputAttrs
    };
  });
  /** Returns data for verification/ Возвращает данные для проверки */
  listForCheck = r(() => {
    const t = this.list.value;
    return this.props.min || this.props.max || this.props.step ? {
      ...t,
      type: "number"
    } : t;
  });
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
}
class W {
  /** Change state flag/ Флаг состояния изменения */
  item = o(!1);
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
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
  toChange() {
    this.item.value || this.set(!0);
  }
}
class X {
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
class tt {
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
    if (t instanceof Element)
      return t;
    const e = this.get()?.form;
    if (e) {
      const i = e.querySelector(`[name="${t}"]`);
      if (i)
        return i;
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
    const t = this.element.value;
    return t && "clear" in t && t.clear?.(), this;
  }
}
class u {
  /**
   * Constructor
   * @param pattern property for verification/ свойство для проверки
   * @param group group name/ название группы
   * @param code object for error codes/ объект для работы с кодами ошибок
   */
  constructor(t, e = u.getGroupDefault(), s) {
    this.pattern = t, this.group = e, this.code = s, this.input = C(
      void 0,
      "input",
      this.getAttributes()
    );
  }
  /** Hidden input element for native validation/ Скрытый input для нативной валидации */
  input;
  /**
   * Runs validation and returns result
   *
   * Выполняет проверку и возвращает результат
   */
  check(t) {
    const e = this.input;
    return e ? (e.type === "checkbox" || e.type === "radio" ? e.checked = !!t : e.value = p(t), this.checkByInput(e)) : {
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
    return {
      group: this.group,
      input: t,
      status: t.checkValidity(),
      validationMessage: t.validationMessage,
      validity: t.validity,
      validityMessage: this.code?.get(t.validity),
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
    if (n(t)) {
      const e = S(t);
      if (n(e))
        return L(e) ? { pattern: e } : e;
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
class et {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param original original values /<br>оригинальные значения
   */
  constructor(t, e, s, i) {
    this.props = t, this.refs = e, this.element = s, this.original = i, this.item.value = this.getOriginal(), v([
      e.value,
      e.modelValue
    ], this.update);
  }
  /** Current value/ Текущее значение */
  item = o();
  /** Indicates if the value is complete/ Указывает, полное ли значение */
  isFull = o(!0);
  /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
  hasEdit = o(!1);
  /** Checks if there are values or temporary values/ Проверяет, есть ли значения или временные значения */
  is = r(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder);
  /** Checks if there are any values/ Проверяет, есть ли значения */
  isValue = r(() => this.hasEdit.value || this.boolean.value);
  /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
  itemByFull = r(() => this.isFull.value ? this.item.value : void 0);
  /**
   * Returns the current value, converted to a number/
   * Возвращает текущее значение, преобразованное в номер
   */
  number = r(() => this.boolean.value ? g(this.string.value) : 0);
  /** Returns the current value of type string/ Возвращает текущее значение типа string */
  string = r(() => p(this.item.value));
  /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
  boolean = r(() => n(this.item.value));
  /** Returns the length of the entered value/ Возвращает длину введенного значения */
  length = r(() => {
    const t = this.item.value;
    return R(t) ? t.length : f(t) ? Object.keys(t).length : this.string.value.length ?? 0;
  });
  /**
   * Returns the current value as an array.
   *
   * Возвращает текущее значение в виде массива.
   */
  getToArray() {
    return $(this.item.value);
  }
  /**
   * Changes the value.
   *
   * Изменяет значение.
   * @param value changeable value/ изменяемое значение
   */
  set(t) {
    if (this.isDifference(t)) {
      this.item.value = A(
        this.item.value,
        t,
        {
          multiple: this.props.multiple,
          maxlength: g(this.props.maxlength)
        }
      );
      const e = this.element?.getElement();
      e && e.value && "setValue" in e.value && e.value?.setValue(this.item.value);
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
    return this.item.value = m(this.original), this.element?.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
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
    return this.string.value !== p(t);
  }
  /**
   * Returns the original value.
   *
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    return this.props.value || this.props.modelValue || m(this.original);
  }
  /**
   * Changes the values to the original ones.
   *
   * Изменяет значения на оригинальные.
   */
  update = () => {
    (this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
  };
  /**
   * Checks if the value is being edited.
   *
   * Проверяет, редактируется ли значение.
   * @param value value to check/ значение для проверки
   */
  isEdit(t) {
    return t !== void 0 && p(t) !== this.string.value;
  }
}
class st {
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
      return f(this.props.match) ? this.props.match.name : this.props.match;
  }
  /**
   * Returns validation error text
   *
   * Возвращает текст ошибки валидации
   */
  getValidationMessage() {
    return this.is() ? f(this.props.match) && this.props.match?.validationMessage ? this.props.match.validationMessage : D.getSync("Your entries must match.") : "";
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
      if (e && p(e.value) !== this.value.string.value)
        return {
          group: u.getGroupDefault(),
          status: !1,
          input: this.element.get(),
          validationMessage: this.getValidationMessage(),
          value: this.value.item.value
        };
    }
  }
}
class it {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for value work/ объект для работы со значениями
   * @param change object for change state/ объект для состояния изменения
   * @param code object for error codes/ объект для работы с кодами ошибок
   * @param match object for match checking/ объект для проверки совпадений
   */
  constructor(t, e, s, i, l, h, d) {
    this.props = t, this.element = e, this.attributes = s, this.value = i, this.change = l, this.code = h, this.match = d;
  }
  /** Internal validation state/ Внутреннее состояние валидации */
  validation = o();
  /** Hidden input element for native validation/ Скрытый input для нативной валидации */
  input = r(
    () => new u(
      this.attributes.listForCheck.value,
      void 0,
      this.code
    )
  );
  /** Returns error data/ Возвращает данные об ошибке */
  item = r(() => {
    const t = this.checkGlobal();
    if (t)
      return t;
    const e = this.checkItem() ?? this.match?.check();
    return e || this.getValidationItemNone();
  });
  /** Returns error string/ Возвращает строку об ошибке */
  message = r(() => {
    if (this.props.validationMessage)
      return this.props.validationMessage;
    if (!this.change || this.change.is()) {
      const t = this.item.value;
      return t.validityMessage ?? t.validationMessage ?? "";
    }
    return "";
  });
  /**
   * Checks if there is an error
   *
   * Проверяет, есть ли ошибка
   */
  isError() {
    return !this.item.value?.status;
  }
  /**
   * Checks whether the element has constraints and satisfies them
   *
   * Проверяет, имеет ли элемент ограничения и удовлетворяет ли им
   */
  checkValidity = () => !this.isError();
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
      group: u.getGroupDefault(),
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
    return this.props.validationMessage ? {
      group: u.getGroupDefault(),
      status: !1,
      validationMessage: this.props.validationMessage,
      value: this.value.item.value
    } : this.validation.value ?? void 0;
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
const rt = (a) => `${a}-a--static`;
export {
  G as CaptionInclude,
  H as DescriptionInclude,
  q as EnabledInclude,
  V as EventClickInclude,
  Q as FieldAttributesInclude,
  W as FieldChangeInclude,
  X as FieldCodeInclude,
  tt as FieldElementInclude,
  u as FieldInputCheckInclude,
  st as FieldMatchInclude,
  K as FieldPatternInclude,
  J as FieldTypeInclude,
  et as FieldValueInclude,
  Z as FieldVisibilityInclude,
  it as InputValidation,
  j as LabelHighlightInclude,
  b as LabelInclude,
  P as LabelNumberInclude,
  z as ModelInclude,
  U as PrefixInclude,
  Y as SuffixInclude,
  rt as getClassTegAStatic
};

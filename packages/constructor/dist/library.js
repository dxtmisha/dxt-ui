var V = Object.defineProperty;
var w = (l, t, e) => t in l ? V(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var r = (l, t, e) => w(l, typeof t != "symbol" ? t + "" : t, e);
import { A as N, L as B } from "./LabelInclude-BYoIaRWl.js";
import { C as Tt, D as Ft } from "./LabelInclude-BYoIaRWl.js";
import { computed as n, toRefs as L, watch as x, isRef as O, isReadonly as $, ref as o, onUnmounted as P, shallowRef as R } from "vue";
import { RouterItemRef as G, getExp as M, isFilled as u, isNumber as q, toNumberByMax as H, GeoRef as X, toCamelCaseFirst as k, toCamelCase as I, isFunction as A, render as S, isDomRuntime as C, getRef as f, EventItem as Y, executeFunction as y, executePromise as T, toNumber as p, anyToString as d, isArray as j, isObject as b, toArray as U, setValues as K, toBinds as _, createElement as z, isString as Z } from "@dxtmisha/functional";
class et {
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
    /**
     * list of aria properties for the enabled state/
     * список aria свойств для состояния активности
     */
    r(this, "aria", n(
      () => N.disabled(!this.isEnabled.value)
    ));
    this.props = t, this.progress = e;
  }
}
class st {
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
    this.props = t, this.enabled = e, this.emits = s, this.refs = t ? L(t) : void 0;
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
    return (t = this.props) != null && t.to ? (G.push((e = this.props) == null ? void 0 : e.to), !0) : !1;
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
class it extends B {
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
  constructor(e, s, i, a, h, E) {
    super(
      e,
      s,
      i,
      a,
      h,
      n(() => this.getLabel()),
      void 0,
      E
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
        const s = `${this.className}__highlight`, i = e.label.toString(), a = M(e.highlight, "i");
        if (i.match(a))
          return i.replace(a, (h) => `<span class="${s}">${h}</span>`);
        if (u(e.value) && e.value.toString().match(a))
          return `<span class="${s}">${i}</span>`;
      }
    });
    this.props = e, this.className = s, this.classesExtra = i, this.slots = a, this.elementsExtra = h, this.skeleton = E;
  }
  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   */
  isHighlight() {
    const e = this.props;
    if (!e.highlight || e.highlight.length < this.getLengthStart())
      return !0;
    if (!(e.highlight && e.highlight.length >= this.getLengthStart() && e.label))
      return !1;
    const s = e.label.toString(), i = M(e.highlight, "i");
    return !!(s.match(i) || u(e.value) && e.value.toString().match(i));
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
class rt extends B {
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
    if (t.label && q(t.label))
      return H(
        t.label,
        t.labelMax,
        t.formatting,
        X.getLanguage().value
      ).toString();
  }
}
class D {
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
    return O(this.syncValue) && !$(this.syncValue);
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
      const t = k(this.index);
      return {
        [`model${t}`]: this.syncValue.value,
        [`onUpdate:${I(this.index)}`]: this.update,
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
    A(this.emits) && (this.emits(`update:${I(this.index)}`, t), this.emits(`update:model${k(this.index)}`, t));
  }
}
class at {
  /**
   * Constructor
   * @param index identifier/ идентификатор
   * @param emits emits function/ функция эмитов
   * @param event event click handler/ обработчик клика
   * @param inputValue input value reference/ ссылка на входное значение
   * @param readonly readonly flag/ флаг только для чтения
   */
  constructor(t, e, s, i, a) {
    r(this, "value", o());
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    r(this, "onClick", (t, e) => {
      var s, i;
      e && "value" in e && !((s = this.readonly) != null && s.value) && (this.value.value = e.value), (i = this.event) == null || i.onClick(t, e);
    });
    this.index = t, this.emits = e, this.event = s, this.inputValue = i, this.readonly = a, new D(this.index, this.emits, this.value), x(
      [this.inputValue],
      () => {
        var h;
        this.value.value = (h = this.inputValue) == null ? void 0 : h.value;
      },
      { immediate: !0 }
    );
  }
  /**
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  getValue() {
    return this.value.value;
  }
}
class nt {
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
    return u(this.props.prefix) && t.push(this.props.prefix), (e = this.slots) != null && e.prefix && t.push((i = (s = this.slots).prefix) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
      S(
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
class lt {
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
    return u(this.props.suffix) && t.push(this.props.suffix), (e = this.slots) != null && e.suffix && t.push((i = (s = this.slots).suffix) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
      S(
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
class ht {
  /**
   * Сonstructor
   * @param element - Reference to the element/ Ссылка на элемент
   */
  constructor(t) {
    /** Previously focused element/ Ранее сфокусированный элемент */
    r(this, "oldElement");
    /** Event item for focus events/ Элемент события для событий фокуса */
    r(this, "event");
    /**
     * Event listener for keyboard events.
     *
     * Слушатель событий для событий клавиатуры.
     * @param event Keyboard event/ Событие клавиатуры
     */
    r(this, "listenEvent", (t) => {
      var s, i;
      if (!this.isTab(t))
        return;
      const e = document.activeElement;
      e && (this.isShift(t) ? e === this.findFirstElement() && ((s = this.findLastElement()) == null || s.focus(), t.preventDefault()) : e === this.findLastElement() && ((i = this.findFirstElement()) == null || i.focus(), t.preventDefault()));
    });
    this.element = t, P(() => {
      this.stopEvent(), this.event = void 0;
    });
  }
  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo() {
    return this.isElement() && C() && (this.updateOldElement(), this.toFocus(), this.startEvent()), this;
  }
  /**
   * Reset focus to the previously focused element.
   *
   * Сбрасывает фокус на ранее сфокусированный элемент.
   */
  reset() {
    return this.oldElement && "focus" in this.oldElement && this.oldElement.focus(), this.stopEvent(), this;
  }
  /**
   * Toggle focus based on status.
   *
   * Переключает фокус в зависимости от статуса.
   * @param status Focus status/ Статус фокуса
   */
  toggle(t) {
    return t ? this.goTo() : this.reset(), this;
  }
  /**
   * Check if the element is defined.
   *
   * Проверяет, определен ли элемент.
   */
  isElement() {
    return this.getElement() !== void 0;
  }
  /**
   * Check if the event is a Tab key event.
   *
   * Проверяет, является ли событие событием клавиши Tab.
   * @param event Keyboard event/ Событие клавиатуры
   */
  isTab(t) {
    return t.key === "Tab" || t.code === "Tab" || t.keyCode === 9;
  }
  /**
   * Check if the Shift key is pressed.
   *
   * Проверяет, нажата ли клавиша Shift.
   * @param event Keyboard event/ Событие клавиатуры
   */
  isShift(t) {
    return t.shiftKey;
  }
  /**
   * Get the element.
   *
   * Получает элемент.
   */
  getElement() {
    return A(this.element) ? this.element() : f(this.element);
  }
  /**
   * Find the first focusable element.
   *
   * Находит первый фокусируемый элемент.
   */
  findFirstElement() {
    var e;
    const t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
    if (t) {
      for (const s of t)
        if ("tabIndex" in s && s.tabIndex >= 0)
          return s;
    }
  }
  /**
   * Find the last focusable element.
   *
   * Находит последний фокусируемый элемент.
   */
  findLastElement() {
    var e;
    const t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
    if (t)
      for (let s = t.length - 1; s >= 0; s--) {
        const i = t[s];
        if (i && "tabIndex" in i && i.tabIndex >= 0)
          return i;
      }
  }
  /**
   * Set focus with temporary tab index modification.
   *
   * Устанавливает фокус с временным изменением табиндекса.
   */
  toFocus() {
    const t = this.getElement();
    return t && (t.setAttribute("tabindex", "-1"), t.focus(), requestAnimationFrame(() => {
      t.removeAttribute("tabindex");
    })), this;
  }
  /**
   * Save the currently focused element.
   *
   * Сохраняет текущий сфокусированный элемент.
   */
  updateOldElement() {
    C() && (this.oldElement = document.activeElement);
  }
  /**
   * Start the event listener.
   *
   * Запускает слушатель событий.
   */
  startEvent() {
    if (this.event) {
      this.event.start();
      return;
    }
    this.event = new Y(
      document.body,
      "keydown",
      this.listenEvent
    ).start();
  }
  /**
   * Stop the event listener.
   *
   * Останавливает слушатель событий.
   */
  stopEvent() {
    this.event && this.event.stop();
  }
}
const v = class v {
  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(t) {
    /** Close text/ Текст закрытия */
    r(this, "close", n(
      () => this.getText("close", this.props.textClose)
    ));
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    r(this, "copiedClipboard", n(
      () => this.getText("copiedClipboard", this.props.textCopiedClipboard)
    ));
    /** Entries match text/ Текст о несовпадении записей */
    r(this, "entriesMatch", n(
      () => this.getText("entriesMatch", this.props.textEntriesMatch)
    ));
    /** OK text/ Текст подтверждения */
    r(this, "ok", n(
      () => this.getText("ok", this.props.textOk)
    ));
    this.props = t;
  }
  /**
   * Initialize global texts.
   *
   * Инициализация глобальных текстов.
   * @param texts List of texts/ Список текстов
   */
  static initText(t) {
    this.list.value = {
      ...this.list.value,
      ...t
    };
  }
  /**
   * Get text by index, with priority to local value.
   *
   * Получение текста по индексу с приоритетом локального значения.
   * @param index Text index/ Индекс текста
   * @param value Local text value/ Локальное значение текста
   */
  getText(t, e) {
    return e ? y(e) : this.getGlobalText(t);
  }
  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index/ Индекс текста
   */
  getGlobalText(t) {
    var e;
    if ((e = v.list.value) != null && e[t])
      return y(v.list.value[t]);
  }
};
/**
 * Global list of texts for all components/ Глобальный список текстов для всех компонентов
 */
r(v, "list", R({
  close: "Close",
  copiedClipboard: "Copied to the clipboard",
  entriesMatch: "Entries do not match",
  ok: "OK"
}));
let F = v;
const m = 80;
class ot {
  /**
   * Constructor
   * @param start callback on touch/mouse start/ колбэк при начале касания/клика
   * @param move callback on touch/mouse move/ колбэк при движении
   * @param end callback on touch/mouse end/ колбэк при завершении
   * @param element optional element reference/ необязательная ссылка на элемент
   */
  constructor(t, e, s, i) {
    /**
     * Current touch point
     *
     * Текущая точка касания
     */
    r(this, "touche", o());
    /**
     * Touchpoint during move
     *
     * Точка касания во время движения
     */
    r(this, "toucheMove", o());
    /**
     * Current mouse position
     *
     * Текущая позиция мыши
     */
    r(this, "mouse", o());
    /**
     * Mouse position during move
     *
     * Позиция мыши во время движения
     */
    r(this, "mouseMove", o());
    /**
     * Touch event handlers
     *
     * Обработчики событий касания
     */
    r(this, "onTouch", {
      onTouchstart: (t) => {
        var e, s, i, a, h;
        this.touche.value = (e = t.targetTouches) == null ? void 0 : e[0], this.mouse.value = {
          x: (i = (s = this.touche.value) == null ? void 0 : s.clientX) != null ? i : 0,
          y: (h = (a = this.touche.value) == null ? void 0 : a.clientY) != null ? h : 0
        }, this.update(t.target);
      },
      onTouchend: (t) => this.reset(t.target),
      onTouchcancel: (t) => this.reset(t.target),
      onTouchmove: (t) => {
        var e, s, i, a, h;
        this.toucheMove.value = (e = t.targetTouches) == null ? void 0 : e[0], this.mouseMove.value = {
          x: (i = (s = this.toucheMove.value) == null ? void 0 : s.clientX) != null ? i : 0,
          y: (h = (a = this.toucheMove.value) == null ? void 0 : a.clientY) != null ? h : 0
        }, this.updateMove(t.target);
      }
    });
    /**
     * Mouse event handlers
     *
     * Обработчики событий мыши
     */
    r(this, "onMouse", {
      onMousedown: (t) => {
        this.mouse.value = {
          x: t.clientX,
          y: t.clientY
        }, this.update(t.target);
      },
      onMouseup: (t) => this.reset(t.target),
      onMousemove: (t) => {
        this.mouseMove.value = {
          x: t.clientX,
          y: t.clientY
        }, this.updateMove(t.target);
      }
    });
    this.start = t, this.move = e, this.end = s, this.element = i;
  }
  /**
   * Gets the target element for touch events.
   *
   * Получает целевой элемент для событий касания.
   * @param target event target element/ целевой элемент события
   */
  getElement(t) {
    var e, s;
    return (s = (e = this.element) == null ? void 0 : e.value) != null ? s : t.closest("[data-touch]");
  }
  /**
   * Determines horizontal direction type from client X coordinate.
   *
   * Определяет тип горизонтального направления из координаты X.
   * @param clientX horizontal coordinate/ горизонтальная координата
   */
  getTypeX(t) {
    return t >= m ? "right" : t < -m ? "left" : "none";
  }
  /**
   * Determines vertical direction type from client Y coordinate.
   *
   * Определяет тип вертикального направления из координаты Y.
   * @param clientY vertical coordinate/ вертикальная координата
   */
  getTypeY(t) {
    return t >= m ? "bottom" : t < -m ? "top" : "none";
  }
  /**
   * Executes callback with calculated movement data.
   *
   * Выполняет колбэк с рассчитанными данными движения.
   * @param callback callback function/ функция обратного вызова
   */
  async callback(t) {
    const e = this.mouse.value, s = this.mouseMove.value;
    if (e && s) {
      const i = s.x - e.x, a = s.y - e.y;
      if (!t || await T(t(
        this.getTypeX(i),
        this.getTypeY(a),
        i,
        a,
        e,
        s,
        this.touche.value,
        this.toucheMove.value
      )))
        return {
          x: i,
          y: a
        };
    }
  }
  /**
   * Resets touch/mouse state and CSS properties after interaction ends.
   *
   * Сбрасывает состояние касания/мыши и CSS свойства после завершения взаимодействия.
   * @param target selected item/ выбранный элемент
   */
  reset(t) {
    const e = this.getElement(t);
    this.callback(this.end).then((s) => {
      e && (s ? this.resetData(e) : setTimeout(() => this.resetData(e), 400));
    });
  }
  /**
   * Resets all touch/mouse state and removes CSS custom properties.
   *
   * Сбрасывает все состояния касания/мыши и удаляет CSS кастомные свойства.
   * @param elementValue target element/ целевой элемент
   */
  resetData(t) {
    this.touche.value = void 0, this.toucheMove.value = void 0, this.mouse.value = void 0, this.mouseMove.value = void 0, t.style.removeProperty("--sys-touch-start-x"), t.style.removeProperty("--sys-touch-start-y"), t.style.removeProperty("--sys-touch-move-x"), t.style.removeProperty("--sys-touch-move-y");
  }
  /**
   * Updates initial touch/mouse position and sets CSS custom properties.
   *
   * Обновляет начальную позицию касания/мыши и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  update(t) {
    var i;
    const e = this.getElement(t), s = this.mouse.value;
    e && s && (e.style.setProperty("--sys-touch-start-x", `${s.x}px`), e.style.setProperty("--sys-touch-start-y", `${s.y}px`), T((i = this.start) == null ? void 0 : i.call(this, s, this.touche.value)).then());
  }
  /**
   * Updates touch/mouse position during movement and sets CSS custom properties.
   *
   * Обновляет позицию касания/мыши во время движения и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  updateMove(t) {
    const e = this.getElement(t);
    this.callback(this.move).then((s) => {
      e && s && (e.style.setProperty("--sys-touch-move-x", `${s.x}px`), e.style.setProperty("--sys-touch-move-y", `${s.y}px`));
    });
  }
}
class ut {
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
class ct {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param original original values /<br>оригинальные значения
   */
  constructor(t, e, s, i) {
    /** Current value/ Текущее значение */
    r(this, "item", o());
    /** Indicates if the value is complete/ Указывает, полное ли значение */
    r(this, "isFull", o(!0));
    /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
    r(this, "hasEdit", o(!1));
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
    r(this, "number", n(() => this.boolean.value ? p(this.string.value) : 0));
    /** Returns the current value of type string/ Возвращает текущее значение типа string */
    r(this, "string", n(() => d(this.item.value)));
    /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
    r(this, "boolean", n(() => u(this.item.value)));
    /** Returns the length of the entered value/ Возвращает длину введенного значения */
    r(this, "length", n(() => {
      var e;
      const t = this.item.value;
      return j(t) ? t.length : b(t) ? Object.keys(t).length : (e = this.string.value.length) != null ? e : 0;
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
   * Returns the current value.
   *
   * Возвращает текущее значение.
   */
  get() {
    return this.item.value;
  }
  /**
   * Returns the current value as an array.
   *
   * Возвращает текущее значение в виде массива.
   */
  getToArray() {
    return U(this.item.value);
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
      this.item.value = K(
        this.item.value,
        t,
        {
          multiple: this.props.multiple,
          maxlength: p(this.props.maxlength)
        }
      );
      const i = (e = this.element) == null ? void 0 : e.getElement();
      i && i.value && "setValue" in i.value && ((s = i.value) == null || s.setValue(this.item.value));
    }
    return this;
  }
  setByEvent(t) {
    return console.log("setByEvent"), typeof t === "object" ? t && ("value" in t && t.value !== void 0 ? this.set(t.value) : "target" in t && this.setByTarget(t.target), "hasEdit" in t && this.setHasEdit(t.hasEdit), "isFull" in t && this.setFull(t.isFull)) : this.set(t), this;
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
    return this.item.value = f(this.original), (t = this.element) == null || t.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
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
    return this.props.value || this.props.modelValue || f(this.original);
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
class pt {
  constructor() {
    r(this, "item", o(!1));
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
class dt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(t, e) {
    /** Returns the input type/ Возвращает тип ввода */
    r(this, "item", n(() => {
      var e;
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
class vt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e, s) {
    /**
     * Indicates if arrows are enabled/ Указывает, включены ли стрелки
     *
     * @return true if arrows are enabled/ true, если стрелки включены
     */
    r(this, "is", n(() => !!(this.props.arrow && this.props.arrow !== "none")));
    /** Indicates if the previous button is disabled/ Указывает, отключена ли кнопка предыдущего */
    r(this, "disabledPrevious", n(() => !this.isPrevious(this.value.number.value)));
    /** Indicates if the next button is disabled/ Указывает, отключена ли кнопка следующего */
    r(this, "disabledNext", n(() => !this.isNext(this.value.number.value)));
    /** Returns the change step/ Возвращает шаг изменения */
    r(this, "step", n(() => {
      var t, e;
      return p((e = (t = this.props.arrowStep) != null ? t : this.props.step) != null ? e : 1);
    }));
    /** Returns the minimum value/ Возвращает минимальное значение */
    r(this, "min", n(() => {
      var t;
      return (t = p(this.props.min)) != null ? t : void 0;
    }));
    /** Returns the maximum value/ Возвращает максимальное значение */
    r(this, "max", n(() => p(this.props.max) || void 0));
    this.props = t, this.value = e, this.type = s;
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
}
const g = {
  email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
  password: "[0-9a-zA-Z\\-!@#$%^&*]+"
};
class mt {
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
class gt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    /** Returns the keyboard name/ Возвращает название клавиатуры */
    r(this, "item", n(() => {
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
    }));
    this.props = t, this.type = e;
  }
}
class ft {
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
      let i;
      if (s in this.props)
        switch (s) {
          case "type":
            this.type ? i = this.type.item.value : i = this.props.type;
            break;
          case "pattern":
            this.pattern && (i = this.pattern.item.value);
            break;
          case "inputMode":
            this.inputMode && (i = this.inputMode.item.value);
            break;
          default:
            i = this.props[s];
        }
      i !== void 0 && (e[s] = i);
    }), _(e, this.props.inputAttrs);
  }
}
class yt {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    /** Change state flag/ Флаг состояния изменения */
    r(this, "item", o(!1));
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
class bt {
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
    this.pattern = t, this.group = e, this.code = s, this.input = z(
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
    if (u(t)) {
      const e = y(t);
      if (u(e))
        return Z(e) ? { pattern: e } : e;
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
class xt {
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
    r(this, "validation", o());
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
class Et {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param change object for working with data change label/ объект для работы с меткой об изменении данных
   * @param value object for working with values/ объект для работы со значениями
   * @param validation object for working with validity/ объект для работы с валидностью
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i, a) {
    r(this, "model");
    /**
     * Events for losing focus.
     *
     * События для потери фокуса.
     */
    r(this, "onBlur", () => {
      this.change.to();
    });
    /**
     * Call of data change event.
     *
     * Вызов события изменения данных.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    r(this, "onInput", (t, e) => {
      var s;
      if (this.isEnabled()) {
        const i = e != null ? e : t;
        (this.change.is() || e) && ((s = this.validation) == null || s.set(i)), this.value.setByEvent(i), this.on(t);
      }
    });
    /**
     * Triggering the change event after losing focus.
     *
     * Вызов события изменения после потери фокуса.
     * @param event event object/ объект события
     */
    r(this, "onChange", (t) => {
      var e;
      this.isEnabled() && (t && ((e = this.validation) == null || e.set(t)), this.change.to(), this.on(t, "change"));
    });
    /**
     * Triggering the event for select change.
     *
     * Вызов события для изменения селект.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    r(this, "onSelect", (t, e) => {
      this.isEnabled() && (this.value.setByEvent(e != null ? e : t), this.onAndChange(t));
    });
    /**
     * Triggering the event for changes in the checkbox.
     *
     * Вызов события для изменения в checkbox.
     * @param event event object/ объект события
     */
    r(this, "onChecked", (t) => {
      this.isEnabled() && (this.value.setByChecked(t), this.onAndChange(t));
    });
    /**
     * Triggering the event for changes in the radio.
     *
     * Вызов события для изменения в radio.
     * @param event event object/ объект события
     */
    r(this, "onRadio", (t) => {
      this.isEnabled() && (this.value.setByRadio(t), this.onAndChange(t));
    });
    /**
     * Triggering the event to delete all values.<br>
     * Вызов события для удаления всех значений.
     * @param event event object/ объект события
     */
    r(this, "onClear", (t) => {
      this.isEnabled() && (this.value.clear(), this.onAndChange(t));
    });
    /**
     * Triggering the event to set a specific value.
     *
     * Вызов события для установки конкретного значения.
     * @param value new value/ новое значение
     */
    r(this, "onValue", (t) => {
      this.isEnabled() && (this.value.set(t), this.onAndChange());
    });
    /**
     * Triggering the event.
     *
     * Вызов события.
     * @param event event object/ объект события
     * @param type event type/ тип события
     */
    r(this, "on", (t, e = "input") => {
      var s;
      return e === "input" && this.model.emit(this.value.itemByFull.value), (s = this.emits) == null || s.call(this, e, t, {
        ...this.getValidation(e),
        ...this.getData()
      }), this;
    });
    this.props = t, this.change = e, this.value = s, this.validation = i, this.emits = a, this.model = new D(
      "value",
      this.emits,
      this.value.itemByFull
    );
  }
  /**
   * Checks whether additional data needs to be generated for the current event.
   *
   * Проверяет, надо ли генерировать дополнительные данные для текущего события.
   * @param type event type/ тип события
   */
  isValue(t) {
    return !!(t && ["input", "change"].indexOf(t) >= 0);
  }
  /**
   * Checks if it is possible to change the value.
   *
   * Проверяет, возможно ли изменение значения.
   */
  isEnabled() {
    return this.props.disabled !== !0;
  }
  /**
   * Returns input data.
   *
   * Возвращает данные об вводе.
   */
  getData() {
    return {
      value: this.value.itemByFull.value,
      valueInput: this.value.item.value,
      detail: this.props.detail
    };
  }
  /**
   * Returns validity data.
   *
   * Возвращает данные валидности.
   * @param type event type/ тип события
   */
  getValidation(t) {
    return this.isValue(t) ? this.validation ? this.validation.item.value : {
      group: "check",
      value: this.value.item.value
    } : {};
  }
  /**
   * Triggering the event and change event.
   *
   * Вызов события и события изменения.
   * @param event event object/ объект события
   */
  onAndChange(t) {
    return this.on(t).onChange(t), this;
  }
}
class Mt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param value object for working with value/ объект для работы со значениями
   * @param text object for working with texts/ объект для работы с текстами
   */
  constructor(t, e, s, i) {
    this.props = t, this.element = e, this.value = s, this.text = i;
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
      if (b(this.props.match) && ((t = this.props.match) != null && t.validationMessage))
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
const kt = (l) => `${l}-a--static`;
export {
  N as AriaStaticInclude,
  Tt as CaptionInclude,
  Ft as DescriptionInclude,
  et as EnabledInclude,
  st as EventClickInclude,
  vt as FieldArrowInclude,
  ft as FieldAttributesInclude,
  yt as FieldChangeInclude,
  bt as FieldCodeInclude,
  ut as FieldElementInclude,
  Et as FieldEventInclude,
  c as FieldInputCheckInclude,
  gt as FieldInputModeInclude,
  Mt as FieldMatchInclude,
  mt as FieldPatternInclude,
  dt as FieldTypeInclude,
  xt as FieldValidationInclude,
  ct as FieldValueInclude,
  pt as FieldVisibilityInclude,
  it as LabelHighlightInclude,
  B as LabelInclude,
  rt as LabelNumberInclude,
  D as ModelInclude,
  at as ModelValueInclude,
  nt as PrefixInclude,
  lt as SuffixInclude,
  ht as TabIndexInclude,
  F as TextInclude,
  ot as TouchEventInclude,
  kt as getClassTagAStatic
};

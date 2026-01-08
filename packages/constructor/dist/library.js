var L = Object.defineProperty;
var $ = (n, t, e) => t in n ? L(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var r = (n, t, e) => $(n, typeof t != "symbol" ? t + "" : t, e);
import { isString as D, isFilled as u, render as p, getElementId as S, RouterItemRef as R, getRef as b, getExp as M, isNumber as P, toNumberByMax as G, GeoRef as _, toCamelCaseFirst as I, toCamelCase as T, isFunction as A, isDomRuntime as F, EventItem as q, executeFunction as x, executePromise as C, toNumber as d, anyToString as v, isArray as H, isObject as E, toArray as X, setValues as Y, toBinds as j, createElement as U } from "@dxtmisha/functional";
import { computed as l, toRefs as K, watch as k, isRef as z, isReadonly as Z, ref as o, onUnmounted as J, shallowRef as Q } from "vue";
class W {
  /**
   * Get role by props.
   *
   * Получить роль по пропсам.
   * @param role ARIA role type/ Тип ARIA роли
   */
  static role(t) {
    return {
      role: t
    };
  }
  /**
   * Get ARIA atomic attribute.
   *
   * Получить атрибут ARIA atomic.
   * @param isAtomic is atomic/ является атомарным
   */
  static atomic(t) {
    return {
      "aria-atomic": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA checked attribute.
   *
   * Получить атрибут ARIA checked.
   * @param isChecked is checked/ является отмеченным
   */
  static checked(t) {
    return {
      "aria-checked": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA current attribute.
   *
   * Получить атрибут ARIA current.
   * @param value ARIA current attribute/ Атрибут ARIA current
   */
  static current(t) {
    const e = D(t) ? t : this.isTrueOrFalse(t);
    return this.isDataToData("aria-current", e);
  }
  /**
   * Get ARIA busy attribute.
   *
   * Получить атрибут ARIA busy.
   * @param isBusy is busy/ является занятым
   */
  static busy(t) {
    return {
      "aria-busy": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA describedby attribute.
   *
   * Получить атрибут ARIA describedby.
   * @param id Element ID/ Идентификатор элемента
   */
  static describedby(t) {
    return this.isDataToData("aria-describedby", t);
  }
  /**
   * Get ARIA disabled attribute.
   *
   * Получить атрибут ARIA disabled.
   * @param isDisabled is disabled/ является отключенным
   */
  static disabled(t = !0) {
    return {
      "aria-disabled": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA expanded attribute.
   *
   * Получить атрибут ARIA expanded.
   * @param isExpanded is expanded/ является расширенным
   */
  static expanded(t) {
    return {
      "aria-expanded": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA haspopup attribute.
   *
   * Получить атрибут ARIA haspopup.
   * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
   */
  static haspopup(t) {
    return this.isDataToData("aria-haspopup", t);
  }
  /**
   * Get ARIA label.
   *
   * Получить ARIA label.
   * @param label ARIA label/ ARIA метка
   */
  static label(t) {
    return this.isDataToData("aria-label", t);
  }
  /**
   * Get ARIA labelledby attribute.
   *
   * Получить атрибут ARIA labelledby.
   * @param id Element ID/ Идентификатор элемента
   */
  static labelledby(t) {
    return this.isDataToData("aria-labelledby", t);
  }
  /**
   * Get ARIA invalid attribute.
   *
   * Получить атрибут ARIA invalid.
   * @param isInvalid is invalid/ является недействительным
   */
  static invalid(t = !0) {
    return {
      "aria-invalid": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get control role.
   *
   * Получить роль управления.
   * @param id Element ID/ Идентификатор элемента
   * @param controls ARIA controls attribute/ Атрибут ARIA controls
   * @param haspopup ARIA haspopup attribute/ Атрибут ARIA haspopup
   * @param expanded ARIA expanded state/ Состояние ARIA expanded
   */
  static control(t, e, s, i) {
    return {
      id: t,
      "aria-controls": e,
      ...this.haspopup(s),
      ...this.expanded(i)
    };
  }
  /**
   * Get ARIA hidden attribute.
   *
   * Получить атрибут ARIA hidden.
   * @param isHidden is hidden/ является скрытым
   */
  static hidden(t = !0) {
    return {
      "aria-hidden": this.isTrueOrFalse(t)
    };
  }
  /**
   * Get ARIA live attribute.
   *
   * Получить атрибут ARIA live.
   * @param live ARIA live attribute/ Атрибут ARIA live
   */
  static live(t) {
    return {
      "aria-live": t
    };
  }
  /**
   * Get modal role.
   *
   * Получить модальную роль.
   * @param isModal is modal/ является модальным
   * @param ariaLabelledby ARIA labelledby attribute/ Атрибут ARIA labelledby
   * @param ariaDescribedby ARIA describedby attribute/ Атрибут ARIA describedby
   */
  static modal(t = !0, e, s) {
    return {
      ...this.isDataToData("aria-modal", t),
      ...this.labelledby(e),
      ...this.describedby(s)
    };
  }
  /**
   * Returns ARIA value now, min and max.
   *
   * Возвращает ARIA value now, min и max.
   * @param value Current value/ Текущее значение
   * @param min Minimum value/ Минимальное значение
   * @param max Maximum value/ Максимальное значение
   */
  static valueMinMax(t, e, s) {
    return {
      "aria-valuenow": t,
      "aria-valuemin": e,
      "aria-valuemax": s
    };
  }
  /**
   * Returns 'true' or 'false' based on the boolean value.
   *
   * Возвращает 'true' или 'false' в зависимости от булевого значения.
   * @param value boolean value/ булевое значение
   */
  static isTrueOrFalse(t) {
    return t ? "true" : "false";
  }
  /**
   * Returns data as ARIA attribute.
   *
   * Возвращает данные в виде ARIA атрибута.
   * @param name attribute name/ имя атрибута
   * @param value attribute value/ значение атрибута
   */
  static isDataToData(t, e) {
    return e ? {
      [t]: e
    } : {};
  }
}
class it {
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
    r(this, "is", l(() => {
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
    return u(this.props.caption) && t.push(this.props.caption), (e = this.slots) != null && e.caption && t.push((i = (s = this.slots).caption) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
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
class rt {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, e, s, i) {
    /** Unique identifier/ Уникальный идентификатор */
    r(this, "id", S());
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    r(this, "is", l(() => {
      var t;
      return !!(this.props.description || (t = this.slots) != null && t.description);
    }));
    /** Description expose reference/ Ссылка на expose описания */
    r(this, "expose", {
      descriptionId: this.id
    });
    this.props = t, this.className = e, this.slots = s, this.skeleton = i;
  }
  /**
   * Get description ID
   *
   * Получить ID описания
   */
  getId() {
    return this.id;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var e, s, i, a;
    const t = [];
    return u(this.props.description) && t.push(this.props.description), (e = this.slots) != null && e.description && t.push((i = (s = this.slots).description) == null ? void 0 : i.call(s, {})), t.length > 0 ? [
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
class at {
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
    r(this, "isEnabled", l(
      () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic)
    ));
    /**
     * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
     */
    r(this, "isReadonly", l(() => !!this.props.readonly));
    /**
     * checks if the element is disabled/ проверяет, отключён ли элемент
     */
    r(this, "isDisabled", l(() => !!this.props.disabled));
    /**
     * checks if the element is disabled or the value is empty/
     * проверяет, отключён ли элемент или пустое ли значение
     */
    r(this, "isDisabledOrUndefined", l(() => this.isDisabled.value || void 0));
    /**
     * list of aria properties for the enabled state/
     * список aria свойств для состояния активности
     */
    r(this, "aria", l(
      () => W.disabled(!this.isEnabled.value)
    ));
    this.props = t, this.progress = e;
  }
}
class lt {
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
    this.props = t, this.enabled = e, this.emits = s, this.refs = t ? K(t) : void 0;
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
    return (t = this.props) != null && t.to ? (R.push((e = this.props) == null ? void 0 : e.to), !0) : !1;
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
class N {
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
   * @param tag tag name/ имя тега
   */
  constructor(t, e, s, i, a, h, g, V, w = "span") {
    /** Unique identifier/ Уникальный идентификатор */
    r(this, "id", S());
    /** Label presence check/ Проверка наличия метки */
    r(this, "is", l(() => {
      var t;
      return this.props.label || (t = this.labelReplacing) != null && t.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
    }));
    /** Identifier for the element/ Идентификатор для элемента */
    r(this, "idElement", l(() => {
      if (this.is.value)
        return this.getId();
    }));
    /**
     * Expose helpers for Label state and actions.
     *
     * Вспомогательные методы expose для состояния и действий Label.
     */
    r(this, "expose", {
      labelId: this.getId()
    });
    this.props = t, this.className = e, this.classesExtra = s, this.slots = i, this.elementsExtra = a, this.labelReplacing = h, this.alternativeSlots = g, this.skeleton = V, this.tag = w;
  }
  /**
   * Get the unique identifier.
   *
   * Получение уникального идентификатора.
   */
  getId() {
    var t;
    return ((t = this.props) == null ? void 0 : t.labelId) || this.id;
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
          b(this.tag),
          {
            id: this.getId(),
            class: this.getClassName()
          },
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
    return !((t = this.labelReplacing) != null && t.value) && u(this.props.label) ? [this.props.label] : [];
  }
  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  initLabelReplacing() {
    var t;
    return u((t = this.labelReplacing) == null ? void 0 : t.value) ? [
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
class nt extends N {
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
  constructor(e, s, i, a, h, g) {
    super(
      e,
      s,
      i,
      a,
      h,
      l(() => this.getLabel()),
      void 0,
      g
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
    this.props = e, this.className = s, this.classesExtra = i, this.slots = a, this.elementsExtra = h, this.skeleton = g;
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
class ht extends N {
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
      l(() => this.getNumber()),
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
    if (t.label && P(t.label))
      return G(
        t.label,
        t.labelMax,
        t.formatting,
        _.getLanguage().value
      ).toString();
  }
}
class O {
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
    this.index = t, this.emits = e, this.syncValue = s, s && k(s, (i) => {
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
    return z(this.syncValue) && !Z(this.syncValue);
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
      const t = I(this.index);
      return {
        [`model${t}`]: this.syncValue.value,
        [`onUpdate:${T(this.index)}`]: this.update,
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
    A(this.emits) && (this.emits(`update:${T(this.index)}`, t), this.emits(`update:model${I(this.index)}`, t));
  }
}
class ot {
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
    this.index = t, this.emits = e, this.event = s, this.inputValue = i, this.readonly = a, new O(this.index, this.emits, this.value), k(
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
class ut {
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
    r(this, "is", l(() => {
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
class ct {
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
    r(this, "is", l(() => {
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
class pt {
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
    this.element = t, J(() => {
      this.stopEvent(), this.event = void 0;
    });
  }
  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo() {
    return this.isElement() && F() && (this.updateOldElement(), this.toFocus(), this.startEvent()), this;
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
    return A(this.element) ? this.element() : b(this.element);
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
    F() && (this.oldElement = document.activeElement);
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
    this.event = new q(
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
const m = class m {
  /**
   * Constructor
   * @param props Component properties/ Свойства компонента
   */
  constructor(t) {
    /** Close text/ Текст закрытия */
    r(this, "close", l(
      () => this.getText("close", this.props.textClose)
    ));
    /** Copied to the clipboard text/ Текст о копировании в буфер обмена */
    r(this, "copiedClipboard", l(
      () => this.getText("copiedClipboard", this.props.textCopiedClipboard)
    ));
    /** Entries match text/ Текст о несовпадении записей */
    r(this, "entriesMatch", l(
      () => this.getText("entriesMatch", this.props.textEntriesMatch)
    ));
    /** OK text/ Текст подтверждения */
    r(this, "ok", l(
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
    return e ? x(e) : this.getGlobalText(t);
  }
  /**
   * Get text from global list.
   *
   * Получение текста из глобального списка.
   * @param index Text index/ Индекс текста
   */
  getGlobalText(t) {
    var e;
    if ((e = m.list.value) != null && e[t])
      return x(m.list.value[t]);
  }
};
/**
 * Global list of texts for all components/ Глобальный список текстов для всех компонентов
 */
r(m, "list", Q({
  close: "Close",
  copiedClipboard: "Copied to the clipboard",
  entriesMatch: "Entries do not match",
  ok: "OK"
}));
let B = m;
const f = 80;
class dt {
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
    return t >= f ? "right" : t < -f ? "left" : "none";
  }
  /**
   * Determines vertical direction type from client Y coordinate.
   *
   * Определяет тип вертикального направления из координаты Y.
   * @param clientY vertical coordinate/ вертикальная координата
   */
  getTypeY(t) {
    return t >= f ? "bottom" : t < -f ? "top" : "none";
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
      if (!t || await C(t(
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
    e && s && (e.style.setProperty("--sys-touch-start-x", `${s.x}px`), e.style.setProperty("--sys-touch-start-y", `${s.y}px`), C((i = this.start) == null ? void 0 : i.call(this, s, this.touche.value)).then());
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
class vt {
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
class mt {
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
    r(this, "is", l(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder));
    /** Checks if there are any values/ Проверяет, есть ли значения */
    r(this, "isValue", l(() => this.hasEdit.value || this.boolean.value));
    /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
    r(this, "itemByFull", l(() => this.isFull.value ? this.item.value : void 0));
    /**
     * Returns the current value, converted to a number/
     * Возвращает текущее значение, преобразованное в номер
     */
    r(this, "number", l(() => this.boolean.value ? d(this.string.value) : 0));
    /** Returns the current value of type string/ Возвращает текущее значение типа string */
    r(this, "string", l(() => v(this.item.value)));
    /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
    r(this, "boolean", l(() => u(this.item.value)));
    /** Returns the length of the entered value/ Возвращает длину введенного значения */
    r(this, "length", l(() => {
      var e;
      const t = this.item.value;
      return H(t) ? t.length : E(t) ? Object.keys(t).length : (e = this.string.value.length) != null ? e : 0;
    }));
    /**
     * Changes the values to the original ones.
     *
     * Изменяет значения на оригинальные.
     */
    r(this, "update", () => {
      (this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
    });
    this.props = t, this.refs = e, this.element = s, this.original = i, this.item.value = this.getOriginal(), k([
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
    return X(this.item.value);
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
      this.item.value = Y(
        this.item.value,
        t,
        {
          multiple: this.props.multiple,
          maxlength: d(this.props.maxlength)
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
    return this.item.value = b(this.original), (t = this.element) == null || t.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
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
    return this.string.value !== v(t);
  }
  /**
   * Returns the original value.
   *
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    return this.props.value || this.props.modelValue || b(this.original);
  }
  /**
   * Checks if the value is being edited.
   *
   * Проверяет, редактируется ли значение.
   * @param value value to check/ значение для проверки
   */
  isEdit(t) {
    return t !== void 0 && v(t) !== this.string.value;
  }
}
class gt {
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
class ft {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(t, e) {
    /** Returns the input type/ Возвращает тип ввода */
    r(this, "item", l(() => {
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
class bt {
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
    r(this, "is", l(() => !!(this.props.arrow && this.props.arrow !== "none")));
    /** Indicates if the previous button is disabled/ Указывает, отключена ли кнопка предыдущего */
    r(this, "disabledPrevious", l(() => !this.isPrevious(this.value.number.value)));
    /** Indicates if the next button is disabled/ Указывает, отключена ли кнопка следующего */
    r(this, "disabledNext", l(() => !this.isNext(this.value.number.value)));
    /** Returns the change step/ Возвращает шаг изменения */
    r(this, "step", l(() => {
      var t, e;
      return d((e = (t = this.props.arrowStep) != null ? t : this.props.step) != null ? e : 1);
    }));
    /** Returns the minimum value/ Возвращает минимальное значение */
    r(this, "min", l(() => {
      var t;
      return (t = d(this.props.min)) != null ? t : void 0;
    }));
    /** Returns the maximum value/ Возвращает максимальное значение */
    r(this, "max", l(() => d(this.props.max) || void 0));
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
const y = {
  email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
  password: "[0-9a-zA-Z\\-!@#$%^&*]+"
};
class yt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    /** Returns regular expressions/ Возвращает регулярные выражения */
    r(this, "item", l(() => {
      if (this.props.pattern)
        return this.props.pattern;
      if (this.type)
        return y == null ? void 0 : y[this.type.item.value];
    }));
    this.props = t, this.type = e;
  }
}
class xt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    /** Returns the keyboard name/ Возвращает название клавиатуры */
    r(this, "item", l(() => {
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
class Et {
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
    r(this, "list", l(() => this.getData(this.getAttributes())));
    /** Returns data for verification/ Возвращает данные для проверки */
    r(this, "listForCheck", l(() => {
      const t = this.list.value;
      return this.props.min || this.props.max || this.props.step ? {
        ...t,
        type: "number"
      } : t;
    }));
    /** Returns data for the input element/ Возвращает данные для элемента ввода */
    r(this, "listForInput", l(() => this.getData(this.getInputAttributes())));
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
    }), j(e, this.props.inputAttrs);
  }
}
class kt {
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
class Mt {
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
    this.pattern = t, this.group = e, this.code = s, this.input = U(
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
    return e ? (e.type === "checkbox" || e.type === "radio" ? e.checked = !!t : e.value = v(t), this.checkByInput(e)) : {
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
      const e = x(t);
      if (u(e))
        return D(e) ? { pattern: e } : e;
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
class It {
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
    r(this, "input", l(
      () => new c(
        this.attributes.listForCheck.value,
        void 0,
        this.code
      )
    ));
    /** Returns error data/ Возвращает данные об ошибке */
    r(this, "item", l(() => {
      var s, i;
      const t = this.checkGlobal();
      if (t)
        return t;
      const e = (i = this.checkItem()) != null ? i : (s = this.match) == null ? void 0 : s.check();
      return e || this.getValidationItemNone();
    }));
    /** Returns error string/ Возвращает строку об ошибке */
    r(this, "message", l(() => {
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
class Tt {
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
    this.props = t, this.change = e, this.value = s, this.validation = i, this.emits = a, this.model = new O(
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
class Ft {
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
      return E(this.props.match) ? this.props.match.name : this.props.match;
  }
  /**
   * Returns validation error text
   *
   * Возвращает текст ошибки валидации
   */
  getValidationMessage() {
    var t, e;
    if (this.is()) {
      if (E(this.props.match) && ((t = this.props.match) != null && t.validationMessage))
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
      if (e && v(e.value) !== this.value.string.value)
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
const Ct = (n) => `${n}-a--static`;
export {
  W as AriaStaticInclude,
  it as CaptionInclude,
  rt as DescriptionInclude,
  at as EnabledInclude,
  lt as EventClickInclude,
  bt as FieldArrowInclude,
  Et as FieldAttributesInclude,
  kt as FieldChangeInclude,
  Mt as FieldCodeInclude,
  vt as FieldElementInclude,
  Tt as FieldEventInclude,
  c as FieldInputCheckInclude,
  xt as FieldInputModeInclude,
  Ft as FieldMatchInclude,
  yt as FieldPatternInclude,
  ft as FieldTypeInclude,
  It as FieldValidationInclude,
  mt as FieldValueInclude,
  gt as FieldVisibilityInclude,
  nt as LabelHighlightInclude,
  N as LabelInclude,
  ht as LabelNumberInclude,
  O as ModelInclude,
  ot as ModelValueInclude,
  ut as PrefixInclude,
  ct as SuffixInclude,
  pt as TabIndexInclude,
  B as TextInclude,
  dt as TouchEventInclude,
  Ct as getClassTagAStatic
};

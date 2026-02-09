var v = Object.defineProperty;
var m = (n, t, e) => t in n ? v(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var a = (n, t, e) => m(n, typeof t != "symbol" ? t + "" : t, e);
import { ref as u, computed as r, watch as g } from "vue";
import { toBinds as f, toNumber as c, anyToString as h, isFilled as b, isArray as y, isObject as k, toArray as E, setValues as F, getRef as d } from "@dxtmisha/functional";
import { F as o } from "./FieldInputCheckInclude-CjNYyGTb.js";
import { M as I } from "./ModelInclude-BiYm_iCQ.js";
class D {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    /** Change state flag/ Флаг состояния изменения */
    a(this, "item", u(!1));
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
class O {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   * @param inputMode object for working with the keyboard/ объект для работы с клавиатурой
   */
  constructor(t, e, i, s) {
    /** Returns data for verification/ Возвращает данные для проверки */
    a(this, "list", r(() => this.getData(this.getAttributes())));
    /** Returns data for verification/ Возвращает данные для проверки */
    a(this, "listForCheck", r(() => {
      const t = this.list.value;
      return this.props.min || this.props.max || this.props.step ? {
        ...t,
        type: "number"
      } : t;
    }));
    /** Returns data for the input element/ Возвращает данные для элемента ввода */
    a(this, "listForInput", r(() => this.getData(this.getInputAttributes())));
    this.props = t, this.type = e, this.pattern = i, this.inputMode = s;
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
    return t.forEach((i) => {
      let s;
      if (i in this.props)
        switch (i) {
          case "type":
            this.type ? s = this.type.item.value : s = this.props.type;
            break;
          case "pattern":
            this.pattern && (s = this.pattern.item.value);
            break;
          case "inputMode":
            this.inputMode && (s = this.inputMode.item.value);
            break;
          case "autocomplete":
            this.inputMode && (s = this.inputMode.autocomplete.value);
            break;
          default:
            s = this.props[i];
        }
      s !== void 0 && (e[i] = s);
    }), f(e, this.props.inputAttrs);
  }
}
class T {
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
    var s;
    if (t instanceof Element)
      return t;
    const e = (s = this.get()) == null ? void 0 : s.form;
    if (e) {
      const l = e.querySelector(`[name="${t}"]`);
      if (l)
        return l;
    }
    const i = document.querySelector(t);
    if (i)
      return i;
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
class V {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param original original values /<br>оригинальные значения
   */
  constructor(t, e, i, s) {
    /** Current value/ Текущее значение */
    a(this, "item", u());
    /** Indicates if the value is complete/ Указывает, полное ли значение */
    a(this, "isFull", u(!0));
    /** Indicates if there are temporary values/ Указывает, есть ли временные значения */
    a(this, "hasEdit", u(!1));
    /** Checks if there are values or temporary values/ Проверяет, есть ли значения или временные значения */
    a(this, "is", r(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder));
    /** Checks if there are any values/ Проверяет, есть ли значения */
    a(this, "isValue", r(() => this.hasEdit.value || this.boolean.value));
    /** Returns the current value if isFull is true/ Возвращает текущее значение, если isFull истинно */
    a(this, "itemByFull", r(() => this.isFull.value ? this.item.value : void 0));
    /**
     * Returns the current value, converted to a number/
     * Возвращает текущее значение, преобразованное в номер
     */
    a(this, "number", r(() => this.boolean.value ? c(this.string.value) : 0));
    /** Returns the current value of type string/ Возвращает текущее значение типа string */
    a(this, "string", r(() => h(this.item.value)));
    /** Returns the current value of type boolean/ Возвращает текущее значение типа boolean */
    a(this, "boolean", r(() => b(this.item.value)));
    /** Returns the length of the entered value/ Возвращает длину введенного значения */
    a(this, "length", r(() => {
      var e;
      const t = this.item.value;
      return y(t) ? t.length : k(t) ? Object.keys(t).length : (e = this.string.value.length) != null ? e : 0;
    }));
    /**
     * Changes the values to the original ones.
     *
     * Изменяет значения на оригинальные.
     */
    a(this, "update", () => {
      (this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
    });
    this.props = t, this.refs = e, this.element = i, this.original = s, this.item.value = this.getOriginal(), g([
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
    return E(this.item.value);
  }
  /**
   * Changes the value.
   *
   * Изменяет значение.
   * @param value changeable value/ изменяемое значение
   */
  set(t) {
    var e, i;
    if (this.isDifference(t)) {
      this.item.value = F(
        this.item.value,
        t,
        {
          multiple: this.props.multiple,
          maxlength: c(this.props.maxlength)
        }
      );
      const s = (e = this.element) == null ? void 0 : e.getElement();
      s && s.value && "setValue" in s.value && ((i = s.value) == null || i.setValue(this.item.value));
    }
    return this;
  }
  setByEvent(t) {
    return typeof t === "object" ? t && ("value" in t && t.value !== void 0 ? this.set(t.value) : "target" in t && this.setByTarget(t.target), "hasEdit" in t && this.setHasEdit(t.hasEdit), "isFull" in t && this.setFull(t.isFull)) : this.set(t), this;
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
    const e = t.target, i = e.checked ? e.value : "";
    return this.set(i);
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
    return this.item.value = d(this.original), (t = this.element) == null || t.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
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
    return this.string.value !== h(t);
  }
  /**
   * Returns the original value.
   *
   * Возвращает оригинальное значение.
   */
  getOriginal() {
    return this.props.value || this.props.modelValue || d(this.original);
  }
  /**
   * Checks if the value is being edited.
   *
   * Проверяет, редактируется ли значение.
   * @param value value to check/ значение для проверки
   */
  isEdit(t) {
    return t !== void 0 && h(t) !== this.string.value;
  }
}
class w {
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
        const i = this.getIndex(t);
        if (i && i in e)
          return e[i];
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
    for (const [i, s] of e)
      if (i !== "valid" && s)
        return i;
  }
}
class H {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for value work/ объект для работы со значениями
   * @param change object for change state/ объект для состояния изменения
   * @param code object for error codes/ объект для работы с кодами ошибок
   * @param match object for match checking/ объект для проверки совпадений
   */
  constructor(t, e, i, s, l, p) {
    /** Internal validation state/ Внутреннее состояние валидации */
    a(this, "validation", u());
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    a(this, "input", r(
      () => new o(
        this.attributes.listForCheck.value,
        void 0,
        this.code
      )
    ));
    /** Returns error data/ Возвращает данные об ошибке */
    a(this, "item", r(() => {
      var i, s;
      const t = this.checkGlobal();
      if (t)
        return t;
      const e = (s = this.checkItem()) != null ? s : (i = this.match) == null ? void 0 : i.check();
      return e || this.getValidationItemNone();
    }));
    /** Returns error string/ Возвращает строку об ошибке */
    a(this, "message", r(() => {
      var t, e;
      if (this.props.validationMessage)
        return this.props.validationMessage;
      if (!this.change || this.change.is()) {
        const i = this.item.value;
        return (e = (t = i.validityMessage) != null ? t : i.validationMessage) != null ? e : "";
      }
      return "";
    }));
    /**
     * Checks whether the element has constraints and satisfies them
     *
     * Проверяет, имеет ли элемент ограничения и удовлетворяет ли им
     */
    a(this, "checkValidity", () => !this.isError());
    this.props = t, this.attributes = e, this.value = i, this.change = s, this.code = l, this.match = p;
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
      group: o.getGroupDefault(),
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
      group: o.getGroupDefault(),
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
      const i = this.checkByInput(e);
      if (!i.status)
        return i;
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
class N {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param change object for working with data change label/ объект для работы с меткой об изменении данных
   * @param value object for working with values/ объект для работы со значениями
   * @param validation object for working with validity/ объект для работы с валидностью
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i, s, l) {
    a(this, "model");
    /**
     * Events for losing focus.
     *
     * События для потери фокуса.
     */
    a(this, "onBlur", () => {
      this.change.to();
    });
    /**
     * Call of data change event.
     *
     * Вызов события изменения данных.
     * @param event event object/ объект события
     * @param data object with data/ объект с данными
     */
    a(this, "onInput", (t, e) => {
      var i;
      if (this.isEnabled()) {
        const s = e != null ? e : t;
        (this.change.is() || e) && ((i = this.validation) == null || i.set(s)), this.value.setByEvent(s), this.on(t);
      }
    });
    /**
     * Triggering the change event after losing focus.
     *
     * Вызов события изменения после потери фокуса.
     * @param event event object/ объект события
     */
    a(this, "onChange", (t) => {
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
    a(this, "onSelect", (t, e) => {
      this.isEnabled() && (this.value.setByEvent(e != null ? e : t), this.onAndChange(t));
    });
    /**
     * Triggering the event for changes in the checkbox.
     *
     * Вызов события для изменения в checkbox.
     * @param event event object/ объект события
     */
    a(this, "onChecked", (t) => {
      this.isEnabled() && (this.value.setByChecked(t), this.onAndChange(t));
    });
    /**
     * Triggering the event for changes in the radio.
     *
     * Вызов события для изменения в radio.
     * @param event event object/ объект события
     */
    a(this, "onRadio", (t) => {
      this.isEnabled() && (this.value.setByRadio(t), this.onAndChange(t));
    });
    /**
     * Triggering the event to delete all values.<br>
     * Вызов события для удаления всех значений.
     * @param event event object/ объект события
     */
    a(this, "onClear", (t) => {
      this.isEnabled() && (this.value.clear(), this.onAndChange(t));
    });
    /**
     * Triggering the event to set a specific value.
     *
     * Вызов события для установки конкретного значения.
     * @param value new value/ новое значение
     */
    a(this, "onValue", (t) => {
      this.isEnabled() && (this.value.set(t), this.onAndChange());
    });
    /**
     * Triggering the event.
     *
     * Вызов события.
     * @param event event object/ объект события
     * @param type event type/ тип события
     */
    a(this, "on", (t, e = "input") => {
      var i;
      return e === "input" && this.model.emit(this.value.itemByFull.value), (i = this.emits) == null || i.call(this, e, t, {
        ...this.getValidation(e),
        ...this.getData()
      }), this;
    });
    this.props = t, this.change = e, this.value = i, this.validation = s, this.emits = l, this.model = new I(
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
export {
  O as F,
  D as a,
  w as b,
  T as c,
  N as d,
  H as e,
  V as f
};

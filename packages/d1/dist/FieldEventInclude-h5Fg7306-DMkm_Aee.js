import { computed as h, ref as c, watch as f } from "vue";
import { toBinds as b, toNumber as g, anyToString as p, isFilled as y, isArray as E, isObject as k, toArray as V, setValues as B, getRef as m } from "@dxtmisha/functional";
import { a as d } from "./FieldInputCheckInclude-CjNYyGTb-C7dFscvh.js";
import { V as A } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
var C = Object.defineProperty, F = (r, t, e) => t in r ? C(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, i = (r, t, e) => F(r, typeof t != "symbol" ? t + "" : t, e);
class T {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   * @param pattern object for working with checks by regular expressions/
   * объект для работы с проверкой по регулярным выражениям
   * @param inputMode object for working with the keyboard/ объект для работы с клавиатурой
   */
  constructor(t, e, s, l) {
    i(this, "list", h(() => this.getData(this.getAttributes()))), i(this, "listForCheck", h(() => {
      const u = this.list.value;
      return this.props.min || this.props.max || this.props.step ? {
        ...u,
        type: "number"
      } : u;
    })), i(this, "listForInput", h(() => this.getData(this.getInputAttributes()))), i(this, "listForCheckbox", h(() => ({
      ...this.getData(this.getInputAttributes()),
      value: this.props.valueVariant
    }))), this.props = t, this.type = e, this.pattern = s, this.inputMode = l;
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
      let l;
      if (s in this.props)
        switch (s) {
          case "type":
            this.type ? l = this.type.item.value : l = this.props.type;
            break;
          case "pattern":
            this.pattern && (l = this.pattern.item.value);
            break;
          case "inputMode":
            this.inputMode && (l = this.inputMode.item.value);
            break;
          case "autocomplete":
            this.inputMode && (l = this.inputMode.autocomplete.value);
            break;
          default:
            l = this.props[s];
        }
      l !== void 0 && (e[s] = l);
    }), b(e, this.props.inputAttrs);
  }
}
class w {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    i(this, "item", c(!1)), (t.value || t.modelValue) && (this.item.value = !0);
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
class H {
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
    for (const [s, l] of e)
      if (s !== "valid" && l)
        return s;
  }
}
class N {
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
    var e;
    if (t instanceof Element)
      return t;
    const s = (e = this.get()) == null ? void 0 : e.form;
    if (s) {
      const u = s.querySelector(`[name="${t}"]`);
      if (u)
        return u;
    }
    const l = document.querySelector(t);
    if (l)
      return l;
  }
  /**
   * Clear all values to the original ones.
   *
   * Очисти все значения до оригинальных.
   */
  clear() {
    var t;
    const e = this.element.value;
    return e && "clear" in e && ((t = e.clear) == null || t.call(e)), this;
  }
}
class j {
  /**
   * Constructor
   * @param props input data /<br>входные данные
   * @param refs input data in the form of reactive elements /<br>входные данные в виде реактивных элементов
   * @param element object for working with the input element /<br>объект для работы с элементом ввода
   * @param original original values /<br>оригинальные значения
   */
  constructor(t, e, s, l) {
    i(this, "item", c()), i(this, "isFull", c(!0)), i(this, "hasEdit", c(!1)), i(this, "is", h(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder)), i(this, "isValue", h(() => this.hasEdit.value || this.boolean.value)), i(this, "itemByFull", h(() => this.isFull.value ? this.item.value : void 0)), i(this, "number", h(() => this.boolean.value ? g(this.string.value) : 0)), i(this, "string", h(() => p(this.item.value))), i(this, "boolean", h(() => y(this.item.value))), i(this, "length", h(() => {
      var u;
      const a = this.item.value;
      return E(a) ? a.length : k(a) ? Object.keys(a).length : (u = this.string.value.length) != null ? u : 0;
    })), i(this, "update", () => {
      (this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
    }), this.props = t, this.refs = e, this.element = s, this.original = l, this.item.value = this.getOriginal(), f([
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
    return V(this.item.value);
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
      this.item.value = B(
        this.item.value,
        t,
        {
          multiple: this.props.multiple,
          maxlength: g(this.props.maxlength)
        }
      );
      const l = (e = this.element) == null ? void 0 : e.getElement();
      l && l.value && "setValue" in l.value && ((s = l.value) == null || s.setValue(this.item.value));
    }
    return this;
  }
  setByEvent(t) {
    return typeof t == "object" ? t && ("value" in t && t.value !== void 0 ? this.set(t.value) : "target" in t && this.setByTarget(t.target), "hasEdit" in t && this.setHasEdit(t.hasEdit), "isFull" in t && this.setFull(t.isFull)) : this.set(t), this;
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
    return this.item.value = m(this.original), (t = this.element) == null || t.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
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
   * Checks if the value is being edited.
   *
   * Проверяет, редактируется ли значение.
   * @param value value to check/ значение для проверки
   */
  isEdit(t) {
    return t !== void 0 && p(t) !== this.string.value;
  }
}
class G {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for value work/ объект для работы со значениями
   * @param change object for change state/ объект для состояния изменения
   * @param code object for error codes/ объект для работы с кодами ошибок
   * @param match object for match checking/ объект для проверки совпадений
   */
  constructor(t, e, s, l, u, a) {
    i(this, "validation", c()), i(this, "input", h(
      () => new d(
        this.attributes.listForCheck.value,
        void 0,
        this.code
      )
    )), i(this, "item", h(() => {
      var n, o;
      const v = this.checkGlobal();
      return v || ((o = this.checkItem()) != null ? o : (n = this.match) == null ? void 0 : n.check()) || this.getValidationItemNone();
    })), i(this, "message", h(() => {
      var n, o;
      if (this.props.validationMessage)
        return this.props.validationMessage;
      if (!this.change || this.change.is()) {
        const v = this.item.value;
        return (o = (n = v.validityMessage) != null ? n : v.validationMessage) != null ? o : "";
      }
      return "";
    })), i(this, "checkValidity", () => !this.isError()), this.props = t, this.attributes = e, this.value = s, this.change = l, this.code = u, this.match = a;
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
      group: d.getGroupDefault(),
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
      group: d.getGroupDefault(),
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
class R {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param change object for working with data change label/ объект для работы с меткой об изменении данных
   * @param value object for working with values/ объект для работы со значениями
   * @param validation object for working with validity/ объект для работы с валидностью
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, l, u) {
    i(this, "model"), i(this, "onBlur", () => {
      this.change.to();
    }), i(this, "onInput", (a, n) => {
      var o;
      if (this.isEnabled()) {
        const v = n != null ? n : a;
        (this.change.is() || n) && ((o = this.validation) == null || o.set(v)), this.value.setByEvent(v), this.on(a);
      }
    }), i(this, "onChange", (a) => {
      var n;
      this.isEnabled() && (a && ((n = this.validation) == null || n.set(a)), this.change.to(), this.on(a, "change"));
    }), i(this, "onSelect", (a, n) => {
      this.isEnabled() && (this.value.setByEvent(n != null ? n : a), this.onAndChange(a));
    }), i(this, "onChecked", (a) => {
      this.isEnabled() && (this.value.setByChecked(a), this.onAndChange(a));
    }), i(this, "onRadio", (a) => {
      this.isEnabled() && (this.value.setByRadio(a), this.onAndChange(a));
    }), i(this, "onClear", (a) => {
      this.isEnabled() && (this.value.clear(), this.onAndChange(a));
    }), i(this, "onValue", (a) => {
      this.isEnabled() && (this.value.set(a), this.onAndChange());
    }), i(this, "on", (a, n = "input") => {
      var o;
      return n === "input" && this.model.emit(this.value.itemByFull.value), (o = this.emits) == null || o.call(this, n, a, {
        ...this.getValidation(n),
        ...this.getData()
      }), this;
    }), this.props = t, this.change = e, this.value = s, this.validation = l, this.emits = u, this.model = new A(
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
    return this.props.disabled !== !0 && this.props.readonly !== !0;
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
  T as D,
  G as H,
  R as N,
  w as O,
  H as T,
  N as V,
  j as w
};

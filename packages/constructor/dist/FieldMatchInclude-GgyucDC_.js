var h = Object.defineProperty;
var p = (i, t, e) => t in i ? h(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => p(i, typeof t != "symbol" ? t + "" : t, e);
import { ref as c, computed as r } from "vue";
import { toNumber as u, isObject as n, anyToString as m } from "@dxtmisha/functional";
import { F as v } from "./FieldInputCheckInclude-CjNYyGTb.js";
class b {
  constructor() {
    s(this, "item", c(!1));
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
class y {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(t, e) {
    /** Returns the input type/ Возвращает тип ввода */
    s(this, "item", r(() => {
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
const o = {
  email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
  password: "[0-9a-zA-Z\\-!@#$%^&*]+"
};
class w {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    /** Returns regular expressions/ Возвращает регулярные выражения */
    s(this, "item", r(() => {
      if (this.props.pattern)
        return this.props.pattern;
      if (this.type)
        return o == null ? void 0 : o[this.type.item.value];
    }));
    this.props = t, this.type = e;
  }
}
class M {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e) {
    /** Returns the keyboard name/ Возвращает название клавиатуры */
    s(this, "item", r(() => {
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
    s(this, "autocomplete", r(() => {
      if (this.props.autocomplete)
        return this.props.autocomplete;
      switch (this.type.item.value) {
        case "search":
          return "off";
        case "email":
          return "email";
        case "password":
          return "new-password";
        case "tel":
          return "tel";
        case "url":
          return "url";
      }
    }));
    this.props = t, this.type = e;
  }
}
class S {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param value object for working with values/ объект для работы со значениями
   * @param type object for working with input type/ объект для работы с типом ввода
   */
  constructor(t, e, a) {
    /**
     * Indicates if arrows are enabled/ Указывает, включены ли стрелки
     *
     * @return true if arrows are enabled/ true, если стрелки включены
     */
    s(this, "is", r(() => !!(this.props.arrow && this.props.arrow !== "none")));
    /** Indicates if the previous button is disabled/ Указывает, отключена ли кнопка предыдущего */
    s(this, "disabledPrevious", r(() => !this.isPrevious(this.value.number.value)));
    /** Indicates if the next button is disabled/ Указывает, отключена ли кнопка следующего */
    s(this, "disabledNext", r(() => !this.isNext(this.value.number.value)));
    /** Returns the change step/ Возвращает шаг изменения */
    s(this, "step", r(() => {
      var t, e;
      return u((e = (t = this.props.arrowStep) != null ? t : this.props.step) != null ? e : 1);
    }));
    /** Returns the minimum value/ Возвращает минимальное значение */
    s(this, "min", r(() => {
      var t;
      return (t = u(this.props.min)) != null ? t : void 0;
    }));
    /** Returns the maximum value/ Возвращает максимальное значение */
    s(this, "max", r(() => u(this.props.max) || void 0));
    this.props = t, this.value = e, this.type = a;
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
class F {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element object for working with input element/ объект для работы с элементом ввода
   * @param value object for working with value/ объект для работы со значениями
   * @param text object for working with texts/ объект для работы с текстами
   */
  constructor(t, e, a, l) {
    this.props = t, this.element = e, this.value = a, this.text = l;
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
      return n(this.props.match) ? this.props.match.name : this.props.match;
  }
  /**
   * Returns validation error text
   *
   * Возвращает текст ошибки валидации
   */
  getValidationMessage() {
    var t, e;
    if (this.is()) {
      if (n(this.props.match) && ((t = this.props.match) != null && t.validationMessage))
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
      if (e && m(e.value) !== this.value.string.value)
        return {
          group: v.getGroupDefault(),
          status: !1,
          input: this.element.get(),
          validationMessage: this.getValidationMessage(),
          value: this.value.item.value
        };
    }
  }
}
export {
  S as F,
  M as a,
  F as b,
  w as c,
  y as d,
  b as e
};

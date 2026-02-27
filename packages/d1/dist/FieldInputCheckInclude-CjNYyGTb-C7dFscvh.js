import { createElement as n, anyToString as s, isFilled as r, executeFunction as c, isString as o } from "@dxtmisha/functional";
var p = Object.defineProperty, l = (i, t, e) => t in i ? p(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, h = (i, t, e) => l(i, t + "", e);
class u {
  /**
   * Constructor
   * @param pattern property for verification/ свойство для проверки
   * @param group group name/ название группы
   * @param code object for error codes/ объект для работы с кодами ошибок
   */
  constructor(t, e = u.getGroupDefault(), a) {
    h(this, "input"), this.pattern = t, this.group = e, this.code = a, this.input = n(
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
    return e ? (e.type === "checkbox" || e.type === "radio" ? e.checked = !!t : e.value = s(t), this.checkByInput(e)) : {
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
    if (r(t)) {
      const e = c(t);
      if (r(e))
        return o(e) ? { pattern: e } : e;
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
export {
  u as a
};

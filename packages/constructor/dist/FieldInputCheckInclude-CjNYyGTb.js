var n = Object.defineProperty;
var c = (i, t, e) => t in i ? n(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => c(i, typeof t != "symbol" ? t + "" : t, e);
import { createElement as o, anyToString as h, isFilled as s, executeFunction as p, isString as l } from "@dxtmisha/functional";
class a {
  /**
   * Constructor
   * @param pattern property for verification/ свойство для проверки
   * @param group group name/ название группы
   * @param code object for error codes/ объект для работы с кодами ошибок
   */
  constructor(t, e = a.getGroupDefault(), u) {
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    r(this, "input");
    this.pattern = t, this.group = e, this.code = u, this.input = o(
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
    return e ? (e.type === "checkbox" || e.type === "radio" ? e.checked = !!t : e.value = h(t), this.checkByInput(e)) : {
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
    if (s(t)) {
      const e = p(t);
      if (s(e))
        return l(e) ? { pattern: e } : e;
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
  a as F
};

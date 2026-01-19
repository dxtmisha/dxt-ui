var n = Object.defineProperty;
var v = (i, e, t) => e in i ? n(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var a = (i, e, t) => v(i, typeof e != "symbol" ? e + "" : e, t);
import { watch as r, ref as d } from "vue";
import { M as c } from "./ModelInclude-BiYm_iCQ.js";
class f {
  /**
   * Constructor
   * @param index identifier/ идентификатор
   * @param emits emits function/ функция эмитов
   * @param event event click handler/ обработчик клика
   * @param inputValue input value reference/ ссылка на входное значение
   * @param readonly readonly flag/ флаг только для чтения
   */
  constructor(e, t, l, u, h) {
    a(this, "value", d());
    /**
     * Click handler.
     *
     * Обработчик клика.
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    a(this, "onClick", (e, t) => {
      var l, u;
      t && "value" in t && !((l = this.readonly) != null && l.value) && (this.value.value = t.value), (u = this.event) == null || u.onClick(e, t);
    });
    this.index = e, this.emits = t, this.event = l, this.inputValue = u, this.readonly = h, new c(this.index, this.emits, this.value), r(
      [this.inputValue],
      () => {
        var s;
        this.value.value = (s = this.inputValue) == null ? void 0 : s.value;
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
export {
  f as M
};

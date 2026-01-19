var l = Object.defineProperty;
var h = (s, t, e) => t in s ? l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => h(s, typeof t != "symbol" ? t + "" : t, e);
import { ref as p, computed as m } from "vue";
import { toBinds as a, getRef as c } from "@dxtmisha/functional";
class f {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, i, r, n) {
    o(this, "element", p());
    /** Computed bindings for the tooltip/ Вычисляемые привязки для подсказки */
    o(this, "binds", m(() => a(
      c(this.extra),
      this.props.tooltipAttrs,
      {
        ref: this.element,
        class: `${this.className}__tooltip`
      }
    )));
    /**
     * Render the Tooltip component
     *
     * Рендер компонента подсказки
     */
    o(this, "render", (t) => this.components ? this.components.render(
      "tooltip",
      this.binds.value,
      t,
      this.index
    ) : []);
    this.props = t, this.className = e, this.components = i, this.extra = r, this.index = n;
  }
  /**
   * Get the tooltip element.
   *
   * Получить элемент подсказки.
   */
  getElement() {
    return this.element.value;
  }
  /**
   * Open the tooltip.
   *
   * Открыть подсказку.
   */
  open() {
    this.toggle(!0);
  }
  /**
   * Close the tooltip.
   *
   * Закрыть подсказку.
   */
  close() {
    this.toggle(!1);
  }
  /**
   * Toggle the tooltip.
   *
   * Переключить подсказку.
   * @param open open status/ статус открытия
   */
  toggle(t) {
    var e;
    (e = this.getElement()) == null || e.toggle(t);
  }
}
export {
  f as T
};

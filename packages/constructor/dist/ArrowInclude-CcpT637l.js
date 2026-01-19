var m = Object.defineProperty;
var p = (s, t, e) => t in s ? m(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => p(s, typeof t != "symbol" ? t + "" : t, e);
import { computed as i } from "vue";
import { toBinds as c, getRef as l } from "@dxtmisha/functional";
class x {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param elementTarget target element or selector/ целевой элемент или селектор
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, e, o, n, a, h) {
    /**
     * Checks whether arrow should be displayed/
     * Проверяет, нужно ли отображать стрелку
     */
    r(this, "is", i(() => !!this.props.arrowShow));
    /** Computed bindings for the arrow/ Вычисляемые привязки для стрелки */
    r(this, "binds", i(() => c(
      l(this.extra),
      this.props.arrowAttrs,
      {
        class: `${this.className}__arrow`,
        elementTarget: this.elementTarget
      }
    )));
    /**
     * Render the Arrow component
     *
     * Рендер компонента стрелки
     */
    r(this, "render", () => this.components && this.is.value ? this.components.render(
      "arrow",
      this.binds.value,
      void 0,
      this.index
    ) : []);
    this.props = t, this.className = e, this.components = o, this.elementTarget = n, this.extra = a, this.index = h;
  }
}
export {
  x as A
};

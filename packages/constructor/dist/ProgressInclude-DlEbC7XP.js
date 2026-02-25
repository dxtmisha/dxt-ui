var a = Object.defineProperty;
var p = (t, s, i) => s in t ? a(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var r = (t, s, i) => p(t, typeof s != "symbol" ? s + "" : s, i);
import { computed as o } from "vue";
import { getRef as d, getBind as l, toBinds as c } from "@dxtmisha/functional";
import { A as h } from "./AriaStaticInclude-DRHG8ILX.js";
class b {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   */
  constructor(s, i, e, n) {
    /**
     * Checks if data is available for the Progress component/
     * Проверяет, есть ли данные для компонента Progress
     */
    r(this, "is", o(() => !!this.props.loading));
    /**
     * list of aria properties for the progress component/
     * список aria свойств для компонента Progress
     */
    r(this, "aria", o(
      () => h.disabled(this.is.value)
    ));
    /**
     * list of properties for the progress component/ список свойств для компонента Progress
     */
    r(this, "binds", o(() => {
      const s = d(this.extra);
      return l(
        this.props.loading,
        c(
          s,
          { class: `${this.className}__loading` }
        ),
        "visible"
      );
    }));
    /**
     * Рендер компонента Progress
     */
    r(this, "render", () => this.components && this.props.loading ? this.components.render(
      "progress",
      this.binds.value,
      void 0,
      "progress"
    ) : []);
    this.props = s, this.className = i, this.components = e, this.extra = n;
  }
}
export {
  b as P
};

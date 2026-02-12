var a = Object.defineProperty;
var p = (i, s, r) => s in i ? a(i, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[s] = r;
var t = (i, s, r) => p(i, typeof s != "symbol" ? s + "" : s, r);
import { computed as o } from "vue";
import { getRef as l, getBind as c } from "@dxtmisha/functional";
import { A as d } from "./AriaStaticInclude-ZrgMZ2ja.js";
class f {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   */
  constructor(s, r, e, n) {
    /**
     * Checks if data is available for the Progress component/
     * Проверяет, есть ли данные для компонента Progress
     */
    t(this, "is", o(() => !!this.props.loading));
    /**
     * list of aria properties for the progress component/
     * список aria свойств для компонента Progress
     */
    t(this, "aria", o(
      () => d.disabled(this.is.value)
    ));
    /**
     * list of properties for the progress component/ список свойств для компонента Progress
     */
    t(this, "binds", o(() => {
      const s = l(this.extra);
      return c(
        this.props.loading,
        {
          ...s,
          class: [s == null ? void 0 : s.class, `${this.className}__loading`]
        },
        "visible"
      );
    }));
    /**
     * Рендер компонента Progress
     */
    t(this, "render", () => this.components && this.props.loading ? this.components.render(
      "progress",
      this.binds.value,
      void 0,
      "progress"
    ) : []);
    this.props = s, this.className = r, this.components = e, this.extra = n;
  }
}
export {
  f as P
};

import { computed as e } from "vue";
import { getRef as p, getBind as l, toBinds as h } from "@dxtmisha/functional";
import { l as d } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var m = Object.defineProperty, c = (t, s, i) => s in t ? m(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i, r = (t, s, i) => c(t, typeof s != "symbol" ? s + "" : s, i);
class v {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   */
  constructor(s, i, o, a) {
    r(this, "is", e(() => !!this.props.loading)), r(this, "aria", e(
      () => d.disabled(this.is.value)
    )), r(this, "binds", e(() => {
      const n = p(this.extra);
      return l(
        this.props.loading,
        h(
          n,
          { class: `${this.className}__loading` }
        ),
        "visible"
      );
    })), r(this, "render", () => this.components && this.props.loading ? this.components.render(
      "progress",
      this.binds.value,
      void 0,
      "progress"
    ) : []), this.props = s, this.className = i, this.components = o, this.extra = a;
  }
}
export {
  v as b
};

import { computed as o } from "vue";
import { getBind as d, toBind as n, getRef as h } from "@dxtmisha/functional";
var b = Object.defineProperty, l = (e, t, s) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, r = (e, t, s) => l(e, typeof t != "symbol" ? t + "" : t, s);
class c {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, s, a, p) {
    r(this, "is", o(() => !!(this.props.badge || this.props.badgeDot))), r(this, "binds", o(() => {
      var i;
      return d(
        this.props.badgeDot ? {} : this.props.badge,
        {
          dot: this.props.badgeDot,
          ...n(
            (i = h(this.extra)) != null ? i : {},
            {
              class: `${this.className}__badge`
            }
          )
        },
        "label",
        !0
      );
    })), r(this, "render", () => this.components && this.is.value ? this.components.render(
      "badge",
      this.binds.value,
      void 0,
      "badge"
    ) : []), this.props = t, this.className = s, this.components = a, this.extra = p;
  }
}
export {
  c as m
};

var d = Object.defineProperty;
var p = (t, s, e) => s in t ? d(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var o = (t, s, e) => p(t, typeof s != "symbol" ? s + "" : s, e);
import { computed as i } from "vue";
import { getBind as n, toBind as h, getRef as b } from "@dxtmisha/functional";
class m {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(s, e, r, a) {
    /**
     * Checks whether a badge is specified for rendering the component/
     * Проверяет, указан ли бейдж для отображения компонента
     */
    o(this, "is", i(() => !!(this.props.badge || this.props.badgeDot)));
    /**
     * list of properties for the badge component/ список свойств для компонента бейджа
     */
    o(this, "binds", i(() => {
      var s;
      return n(
        this.props.badgeDot ? {} : this.props.badge,
        {
          dot: this.props.badgeDot,
          ...h(
            (s = b(this.extra)) != null ? s : {},
            {
              class: `${this.className}__badge`
            }
          )
        },
        "label",
        !0
      );
    }));
    /**
     * Render of the badge component
     *
     * Рендер компонента бейджа
     */
    o(this, "render", () => this.components && this.is.value ? this.components.render(
      "badge",
      this.binds.value,
      void 0,
      "badge"
    ) : []);
    this.props = s, this.className = e, this.components = r, this.extra = a;
  }
}
export {
  m as B
};

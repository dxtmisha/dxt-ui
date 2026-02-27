import { computed as n } from "vue";
import { getBind as c, toBinds as l, isFilled as p } from "@dxtmisha/functional";
import { B as h } from "./IconInclude-CLqwI29Q-Dlz7DC2a.js";
var g = Object.defineProperty, u = (t, i, r) => i in t ? g(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, s = (t, i, r) => u(t, typeof i != "symbol" ? i + "" : i, r);
class v extends h {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(i, r, o, e) {
    super(
      i,
      r,
      o,
      e,
      n(() => !!(!i.iconTrailing && !i.iconTrailingTurnOnly && i.iconTurn)),
      n(() => !!(!i.iconTrailing && !i.iconTrailingDirOnly && i.iconDir)),
      !0
    ), s(this, "isIconTrailing", n(() => !!this.props.iconTrailing)), s(this, "hasAtLeastOneIcon", n(() => !!(this.props.iconTrailing || this.props.icon))), s(this, "trailingBind", n(() => {
      var a;
      return c(
        this.props.iconTrailing,
        {
          turn: this.props.iconTurn,
          asPalette: this.props.iconPalette,
          dir: this.props.iconDir,
          end: !0,
          high: !0,
          ...l(
            this.getExtra(),
            this.props.iconAttrs,
            this.getClasses((a = this.props.iconAttrs) == null ? void 0 : a.class, "trailing")
          ),
          ...this.getEventType("icon-trailing")
        },
        "icon"
      );
    })), s(this, "renderIconTrailing", () => this.components && p(this.props.iconTrailing) ? this.components.render(
      "icon",
      this.trailingBind.value,
      void 0,
      "iconTrailing"
    ) : []), s(this, "render", () => [
      ...this.renderIcon(),
      ...this.renderIconTrailing()
    ]), this.props = i, this.className = r, this.components = o, this.extra = e;
  }
}
export {
  v as B
};

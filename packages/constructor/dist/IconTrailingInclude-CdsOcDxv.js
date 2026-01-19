var a = Object.defineProperty;
var l = (r, n, i) => n in r ? a(r, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[n] = i;
var t = (r, n, i) => l(r, typeof n != "symbol" ? n + "" : n, i);
import { computed as o } from "vue";
import { getBind as h, toBinds as g, isFilled as d } from "@dxtmisha/functional";
import { I as p } from "./IconInclude-CLqwI29Q.js";
class B extends p {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(i, s, e, c) {
    super(
      i,
      s,
      e,
      c,
      o(() => !!(!i.iconTrailing && !i.iconTrailingTurnOnly && i.iconTurn)),
      o(() => !!(!i.iconTrailing && !i.iconTrailingDirOnly && i.iconDir)),
      !0
    );
    /**
     * Checks whether an icon is specified for rendering the component/
     * Проверяет, указана ли иконка для отображения компонента
     */
    t(this, "isIconTrailing", o(() => !!this.props.iconTrailing));
    /**
     * Checks if there is at least one icon/
     * Проверяет, есть ли хотя бы одна иконка
     */
    t(this, "hasAtLeastOneIcon", o(() => !!(this.props.iconTrailing || this.props.icon)));
    /**
     * list of properties for the secondary icon component/ список свойств для вторичного компонента иконки
     */
    t(this, "trailingBind", o(() => {
      var i;
      return h(
        this.props.iconTrailing,
        {
          turn: this.props.iconTurn,
          asPalette: this.props.iconPalette,
          dir: this.props.iconDir,
          end: !0,
          high: !0,
          ...g(
            this.getExtra(),
            this.props.iconAttrs,
            this.getClasses((i = this.props.iconAttrs) == null ? void 0 : i.class, "trailing")
          ),
          ...this.getEventType("icon-trailing")
        },
        "icon"
      );
    }));
    /**
     * Render of the secondary icon component
     *
     * Рендер вторичного компонента иконки
     */
    t(this, "renderIconTrailing", () => this.components && d(this.props.iconTrailing) ? this.components.render(
      "icon",
      this.trailingBind.value,
      void 0,
      "iconTrailing"
    ) : []);
    /**
     * Method for rendering all icons — first the main ones, then the additional icons
     *
     * Метод для рендеринга всех иконок — сначала основных, затем дополнительных
     */
    t(this, "render", () => [
      ...this.renderIcon(),
      ...this.renderIconTrailing()
    ]);
    this.props = i, this.className = s, this.components = e, this.extra = c;
  }
}
export {
  B as I
};

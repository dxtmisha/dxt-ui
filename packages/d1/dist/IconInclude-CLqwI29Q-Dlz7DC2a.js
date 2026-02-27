import { computed as h } from "vue";
import { getBind as u, toBinds as v, getRef as a, isFilled as x } from "@dxtmisha/functional";
var y = Object.defineProperty, f = (e, t, s) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, o = (e, t, s) => f(e, typeof t != "symbol" ? t + "" : t, s);
class B {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, s, r, i) {
    o(this, "isIcon", h(() => !!this.props.icon)), o(this, "iconBind", h(() => u(
      this.props.icon,
      {
        ...this.getExtra(),
        ...this.getClasses(),
        ...this.getEventType()
      },
      "icon"
    ))), o(this, "renderIcon", () => this.components && x(this.props.icon) ? this.components.render(
      "icon",
      this.iconBind.value
    ) : []), this.props = t, this.className = s, this.components = r, this.extra = i;
  }
  /**
   * Returns an additional property
   *
   * Возвращает дополнительное свойство
   */
  getExtra() {
    return a(this.extra);
  }
  /**
   * Returns a list of classes
   *
   * Возвращает список классов
   * @param classesUser list of additional classes/ список дополнительных классов
   * @param name class name/ название класса
   */
  getClasses(t, s = "icon") {
    var r;
    const i = [`${this.className}__${s}`], n = (r = this.getExtra()) == null ? void 0 : r.class;
    return n && i.push(n), t && i.push(t), {
      class: i
    };
  }
  /**
   * Returns the type used to determine when an event is triggered
   *
   * Возвращает тип для определения при срабатывании события
   * @param type event type/ тип события
   */
  getEventType(t = "icon") {
    return {
      "data-event-type": t
    };
  }
}
let T = class extends B {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   * @param turn should the icon be flipped/ надо ли перевернуть иконку
   * @param dir should the icon be mirrored/ надо ли зеркально отображать иконка
   * @param start add sorting at the beginning/ добавить сортировку в начале
   * @param end add sorting at the end/ добавить сортировку в конце
   */
  constructor(t, s, r, i, n, d, m = !1, g = !1) {
    super(t, s, r, i), o(this, "iconBind", h(() => {
      var p, c, l;
      return u(
        this.props.icon,
        {
          active: this.props.selected,
          turn: (p = a(this.turn)) != null ? p : this.props.iconTurn,
          hide: this.props.iconHide,
          asPalette: this.props.iconPalette,
          animationType: "type2",
          dir: (c = a(this.dir)) != null ? c : this.props.iconDir,
          start: this.start,
          end: this.end,
          ...v(
            this.getExtra(),
            this.props.iconAttrs,
            this.getClasses((l = this.props.iconAttrs) == null ? void 0 : l.class)
          ),
          ...this.getEventType()
        },
        "icon"
      );
    })), this.props = t, this.className = s, this.components = r, this.extra = i, this.turn = n, this.dir = d, this.start = m, this.end = g;
  }
};
export {
  T as B
};

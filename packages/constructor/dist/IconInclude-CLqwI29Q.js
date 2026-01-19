var g = Object.defineProperty;
var m = (n, t, s) => t in n ? g(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var r = (n, t, s) => m(n, typeof t != "symbol" ? t + "" : t, s);
import { computed as c } from "vue";
import { getBind as p, isFilled as x, getRef as h, toBinds as f } from "@dxtmisha/functional";
class E {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, s, i, e) {
    /**
     * Checks whether an icon is specified for rendering the component/
     * Проверяет, указана ли иконка для отображения компонента
     */
    r(this, "isIcon", c(() => !!this.props.icon));
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    r(this, "iconBind", c(() => p(
      this.props.icon,
      {
        ...this.getExtra(),
        ...this.getClasses(),
        ...this.getEventType()
      },
      "icon"
    )));
    /**
     * Render of the Icon component
     *
     * Рендер компонента иконка
     */
    r(this, "renderIcon", () => this.components && x(this.props.icon) ? this.components.render(
      "icon",
      this.iconBind.value
    ) : []);
    this.props = t, this.className = s, this.components = i, this.extra = e;
  }
  /**
   * Returns an additional property
   *
   * Возвращает дополнительное свойство
   */
  getExtra() {
    return h(this.extra);
  }
  /**
   * Returns a list of classes
   *
   * Возвращает список классов
   * @param classesUser list of additional classes/ список дополнительных классов
   * @param name class name/ название класса
   */
  getClasses(t, s = "icon") {
    var o;
    const i = [`${this.className}__${s}`], e = (o = this.getExtra()) == null ? void 0 : o.class;
    return e && i.push(e), t && i.push(t), {
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
class B extends E {
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
  constructor(s, i, e, o, a, d, l = !1, u = !1) {
    super(s, i, e, o);
    /**
     * List of properties for the icon component/ Список свойств для компонента иконки
     */
    r(this, "iconBind", c(() => {
      var s, i, e;
      return p(
        this.props.icon,
        {
          active: this.props.selected,
          turn: (s = h(this.turn)) != null ? s : this.props.iconTurn,
          hide: this.props.iconHide,
          asPalette: this.props.iconPalette,
          animationType: "type2",
          dir: (i = h(this.dir)) != null ? i : this.props.iconDir,
          start: this.start,
          end: this.end,
          ...f(
            this.getExtra(),
            this.props.iconAttrs,
            this.getClasses((e = this.props.iconAttrs) == null ? void 0 : e.class)
          ),
          ...this.getEventType()
        },
        "icon"
      );
    }));
    this.props = s, this.className = i, this.components = e, this.extra = o, this.turn = a, this.dir = d, this.start = l, this.end = u;
  }
}
export {
  B as I,
  E as a
};

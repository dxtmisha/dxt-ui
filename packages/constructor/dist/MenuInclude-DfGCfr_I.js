var p = Object.defineProperty;
var r = (s, e, t) => e in s ? p(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => r(s, typeof e != "symbol" ? e + "" : e, t);
import { ref as h, computed as o } from "vue";
import { toBinds as a, getRef as u, toBind as c } from "@dxtmisha/functional";
class g {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, t, i, l, m) {
    /** Reference to menu element/ Ссылка на элемент меню */
    n(this, "element", h());
    /**
     * Checks whether menu should be displayed/
     * Проверяет, нужно ли отображать меню
     */
    n(this, "is", o(() => !!(!this.props.disabled && this.components)));
    /** Computed bindings for the menu/ Вычисляемые привязки для меню */
    n(this, "binds", o(() => {
      const e = a(
        u(this.extra),
        this.props.menuAttrs,
        {
          class: `${this.className}__menu`
        }
      );
      return {
        disabled: this.props.disabled,
        ...e
      };
    }));
    /** Menu expose functionality/ Функциональность экспорта меню */
    n(this, "expose", {
      open: o(() => {
        var e;
        return !!((e = this.element.value) != null && e.open);
      }),
      setOpen: async (e) => {
        var t;
        return (t = this.element.value) == null ? void 0 : t.setOpen(e);
      },
      toOpen: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toOpen();
      },
      toClose: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toClose();
      },
      toggle: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toggle();
      },
      menuElement: this.element
    });
    /**
     * Render the Menu component
     *
     * Рендер компонента меню
     * @param slotsChildren menu slots/ слоты меню
     * @param attrs additional attributes/ дополнительные атрибуты
     * @returns VNode array/ массив VNode
     */
    n(this, "render", (e, t) => this.components ? this.components.render(
      "menu",
      {
        ref: this.element,
        ...c(
          t != null ? t : {},
          this.binds.value
        )
      },
      e,
      this.index
    ) : []);
    this.props = e, this.className = t, this.components = i, this.extra = l, this.index = m;
  }
  /**
   * Get the menu element
   *
   * Получить элемент меню
   */
  getElement() {
    return this.element.value;
  }
}
export {
  g as M
};

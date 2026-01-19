var m = Object.defineProperty;
var v = (e, t, i) => t in e ? m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var s = (e, t, i) => v(e, typeof t != "symbol" ? t + "" : t, i);
import { computed as n, h as A } from "vue";
import { getBindRef as p, DesignConstructorAbstract as I } from "@dxtmisha/functional";
import { A as a } from "./AriaStaticInclude-CFGewqpn.js";
import { S as f } from "./SkeletonInclude-BIUzAO2s.js";
import { I as D, a as w } from "./IconInclude-CLqwI29Q.js";
import { I as M } from "./IconTrailingInclude-CdsOcDxv.js";
class g {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param SkeletonIncludeConstructor class for working with Skeleton/ класс для работы с Skeleton
   */
  constructor(t, i, c, r, o, l, d, u, h = f) {
    /**
     * Returns the property for the base icon/ Возвращает свойство для базовой иконки
     */
    s(this, "iconBind");
    /**
     * Returns the property for the additional icon/ Возвращает свойство для дополнительной иконки
     */
    s(this, "iconActiveBind");
    /**
     * An object for working with the Skeleton/ Объект для работы с Skeleton
     */
    s(this, "skeleton");
    /**
     * Checks if the additional icon is active/ Проверяет, активна ли дополнительная иконка
     */
    s(this, "isActive", n(() => !!(this.props.active && this.props.iconActive)));
    /**
     * Values for the class/ Значения для класса
     */
    s(this, "classes", n(() => ({
      ...this.skeleton.classes.value
    })));
    /**
     * Computed bindings for the icon element.
     *
     * Вычисляемые привязки для элемента иконки.
     */
    s(this, "binds", n(() => ({
      key: "icon",
      tabindex: this.props.dynamic ? 0 : void 0,
      ...a.role(this.getRole()),
      ...a.label(this.props.ariaLabel),
      ...a.hidden(!this.props.dynamic)
    })));
    /**
     * Triggers an event when the image loading is complete.
     *
     * Вызывает событие, когда завершится загрузка картинки.
     * @param event event object/ объект события
     */
    s(this, "onLoad", (t) => {
      var i;
      return (i = this.emits) == null ? void 0 : i.call(this, "load", t);
    });
    this.props = t, this.refs = i, this.element = c, this.classDesign = r, this.className = o, this.components = l, this.slots = d, this.emits = u, this.SkeletonIncludeConstructor = h, this.iconBind = p(
      i.icon,
      n(() => ({
        key: "mainIcon",
        class: `${o}__icon`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: this.isActive.value,
        onLoad: this.onLoad
      }))
    ), this.iconActiveBind = p(
      i.iconActive,
      n(() => ({
        key: "activeIcon",
        class: `${o}__iconActive`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: !this.isActive.value
      }))
    ), this.skeleton = new h(
      t,
      r,
      ["classBackgroundVariant"]
    );
  }
  /**
   * Get the ARIA role for the icon element.
   *
   * Получить ARIA роль для элемента иконки.
   */
  getRole() {
    if (this.props.role)
      return this.props.role;
    if (this.props.dynamic)
      return "button";
  }
}
const L = {
  // :default [!] System label / Системная метка
  animationType: "type1"
};
class S extends I {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor icon item class/ класс элемента иконки
   */
  constructor(i, c, r, o = g) {
    super(
      i,
      c,
      r
    );
    s(this, "item");
    /**
     * Computed properties for the main element.
     *
     * Вычисляемые свойства для главного элемента.
     */
    s(this, "propsMain", n(() => {
      var i;
      return {
        ...this.getAttrs(),
        ...this.item.binds.value,
        class: (i = this.classes) == null ? void 0 : i.value.main
      };
    }));
    /**
     * Render the main icon.
     *
     * Рендер основной иконки.
     */
    s(this, "renderIcon", () => this.components.renderOne(
      "image",
      this.item.iconBind.value,
      void 0,
      "icon"
    ));
    /**
     * Render the secondary icon.
     *
     * Рендер вторичной иконки.
     */
    s(this, "renderIconActive", () => this.components.renderOne(
      "image",
      this.item.iconActiveBind.value,
      void 0,
      "iconActive"
    ));
    this.item = new o(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work<br>
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      isActive: this.item.isActive
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value
    };
  }
  /**
   * Refinement of the received list of styles.<br>
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    const i = [];
    return this.initSlot("default", i), this.props.icon && i.push(this.renderIcon()), this.props.iconActive && i.push(this.renderIconActive()), A("span", this.propsMain.value, i);
  }
}
export {
  g as Icon,
  S as IconDesign,
  D as IconInclude,
  w as IconLiteInclude,
  M as IconTrailingInclude,
  L as defaultsIcon
};

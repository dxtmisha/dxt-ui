var v = Object.defineProperty;
var I = (s, t, i) => t in s ? v(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var e = (s, t, i) => I(s, typeof t != "symbol" ? t + "" : t, i);
import { computed as n, h as A } from "vue";
import { getBindRef as d, DesignConstructorAbstract as f } from "@dxtmisha/functional";
import { A as h } from "./AriaStaticInclude-CAURwJMb.js";
import { E as g } from "./EventClickInclude-WHJqxZ1b.js";
import { S as y } from "./SkeletonInclude-BIUzAO2s.js";
import { I as E, a as K } from "./IconInclude-CLqwI29Q.js";
import { I as O } from "./IconTrailingInclude-CdsOcDxv.js";
class b {
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
   * @param EventClickIncludeConstructor class for working with events/ класс для работы с событиями
   * @param SkeletonIncludeConstructor class for working with Skeleton/ класс для работы с Skeleton
   */
  constructor(t, i, c, r, o, p, l, a, m = g, u = y) {
    /**
     * Returns the property for the base icon/ Возвращает свойство для базовой иконки
     */
    e(this, "iconBind");
    /**
     * Returns the property for the additional icon/ Возвращает свойство для дополнительной иконки
     */
    e(this, "iconActiveBind");
    /**
     * An object for working with the Skeleton/ Объект для работы с Skeleton
     */
    e(this, "skeleton");
    /**
     * Object for working with events/ Объект для работы с событиями
     */
    e(this, "event");
    /**
     * Checks if the additional icon is active/ Проверяет, активна ли дополнительная иконка
     */
    e(this, "isActive", n(() => !!(this.props.active && this.props.iconActive)));
    /**
     * Values for the class/ Значения для класса
     */
    e(this, "classes", n(() => ({
      ...this.skeleton.classes.value
    })));
    /**
     * Computed bindings for the icon element.
     *
     * Вычисляемые привязки для элемента иконки.
     */
    e(this, "binds", n(() => {
      var t;
      return {
        key: "icon",
        tabindex: this.props.dynamic ? (t = this.props.tabindex) != null ? t : 0 : void 0,
        onClick: this.props.dynamic ? this.event.onClick : void 0,
        onKeydown: this.props.dynamic ? this.event.onKeydown : void 0,
        ...h.role(this.getRole()),
        ...h.label(this.props.ariaLabel),
        ...h.hidden(!this.props.dynamic)
      };
    }));
    /**
     * Triggers an event when the image loading is complete.
     *
     * Вызывает событие, когда завершится загрузка картинки.
     * @param event event object/ объект события
     */
    e(this, "onLoad", (t) => {
      var i;
      return (i = this.emits) == null ? void 0 : i.call(this, "load", t);
    });
    this.props = t, this.refs = i, this.element = c, this.classDesign = r, this.className = o, this.components = p, this.slots = l, this.emits = a, this.iconBind = d(
      i.icon,
      n(() => ({
        key: "mainIcon",
        class: `${o}__icon`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: this.isActive.value,
        onLoad: this.onLoad
      }))
    ), this.iconActiveBind = d(
      i.iconActive,
      n(() => ({
        key: "activeIcon",
        class: `${o}__iconActive`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: !this.isActive.value
      }))
    ), this.event = new m(
      t,
      void 0,
      a
    ), this.skeleton = new u(
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
const S = {
  // :default [!] System label / Системная метка
  animationType: "type1"
};
class R extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor icon item class/ класс элемента иконки
   */
  constructor(i, c, r, o = b) {
    super(
      i,
      c,
      r
    );
    e(this, "item");
    /**
     * Computed properties for the main element.
     *
     * Вычисляемые свойства для главного элемента.
     */
    e(this, "propsMain", n(() => {
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
    e(this, "renderIcon", () => this.components.renderOne(
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
    e(this, "renderIconActive", () => this.components.renderOne(
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
      ...this.item.event.expose,
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
  b as Icon,
  R as IconDesign,
  E as IconInclude,
  K as IconLiteInclude,
  O as IconTrailingInclude,
  S as defaultsIcon
};

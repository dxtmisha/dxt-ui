var I = Object.defineProperty;
var A = (s, t, i) => t in s ? I(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var e = (s, t, i) => A(s, typeof t != "symbol" ? t + "" : t, i);
import { computed as n, h as f } from "vue";
import { getBindRef as d, DesignConstructorAbstract as b } from "@dxtmisha/functional";
import { A as h } from "./AriaStaticInclude-DRHG8ILX.js";
import { E as g } from "./EventClickInclude-DMbEP-nH.js";
import { S as k } from "./SkeletonInclude-BIUzAO2s.js";
import { I as M, a as O } from "./IconInclude-CLqwI29Q.js";
import { I as $ } from "./IconTrailingInclude-CdsOcDxv.js";
class B {
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.EventClickIncludeConstructor class for working with events/ класс для работы с событиями
   * @param constructors.SkeletonIncludeConstructor class for working with Skeleton/ класс для работы с Skeleton
   */
  constructor(t, i, c, r, o, p, u, l, a) {
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
      var i;
      const t = {
        key: "icon",
        ...h.role(this.getRole()),
        ...h.label(this.props.ariaLabel)
      };
      return this.props.dynamic ? {
        ...t,
        tabindex: (i = this.props.tabindex) != null ? i : 0,
        ...this.event.binds
      } : {
        ...t,
        ...h.hidden()
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
    this.props = t, this.refs = i, this.element = c, this.classDesign = r, this.className = o, this.components = p, this.slots = u, this.emits = l;
    const {
      EventClickIncludeConstructor: m = g,
      SkeletonIncludeConstructor: v = k
    } = a != null ? a : {};
    this.iconBind = d(
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
      l
    ), this.skeleton = new v(
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
const R = {
  // :default [!] System label / Системная метка
  animationType: "type1"
};
class _ extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor icon item class/ класс элемента иконки
   */
  constructor(i, c, r, o = B) {
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
    return this.initSlot("default", i), this.props.icon && i.push(this.renderIcon()), this.props.iconActive && i.push(this.renderIconActive()), f("span", this.propsMain.value, i);
  }
}
export {
  B as Icon,
  _ as IconDesign,
  M as IconInclude,
  O as IconLiteInclude,
  $ as IconTrailingInclude,
  R as defaultsIcon
};

var C = Object.defineProperty;
var f = (i, e, s) => e in i ? C(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s;
var t = (i, e, s) => f(i, typeof e != "symbol" ? e + "" : e, s);
import { DesignConstructorAbstract as v } from "@dxtmisha/functional";
import { B as w } from "./BadgeInclude-BwCIBVyK.js";
import { L as k } from "./LabelInclude-D-mLvjK5.js";
import { E } from "./EnabledInclude-Dk-rP4jp.js";
import { E as S } from "./EventClickInclude-WHJqxZ1b.js";
import { S as N } from "./SkeletonInclude-BIUzAO2s.js";
import { I as T } from "./IconTrailingInclude-CdsOcDxv.js";
import { R as x } from "./RippleInclude-Du5yIzX_.js";
import { h as D } from "vue";
class R {
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
   * @param constructors.BadgeIncludeConstructor class for working with badge/ класс для работы с бейджем
   * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   */
  constructor(e, s, n, o, l, a, h, c, r) {
    t(this, "icon");
    t(this, "label");
    t(this, "badge");
    t(this, "skeleton");
    t(this, "enabled");
    t(this, "ripple");
    t(this, "event");
    this.props = e, this.refs = s, this.element = n, this.classDesign = o, this.className = l, this.components = a, this.slots = h, this.emits = c;
    const {
      BadgeIncludeConstructor: m = w,
      EnabledIncludeConstructor: p = E,
      EventClickIncludeConstructor: d = S,
      IconTrailingIncludeConstructor: u = T,
      LabelIncludeConstructor: b = k,
      RippleIncludeConstructor: g = x,
      SkeletonIncludeConstructor: I = N
    } = r != null ? r : {};
    this.skeleton = new I(this.props, this.classDesign, ["classTextVariant"]), this.enabled = new p(this.props), this.icon = new u(this.props, this.className, this.components), this.label = new b(
      this.props,
      this.className,
      void 0,
      this.slots,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.badge = new m(
      this.props,
      this.className,
      this.components
    ), this.ripple = new g(this.className, this.components, this.enabled), this.event = new d(
      this.props,
      this.enabled,
      this.emits
    );
  }
}
const H = {
  tag: "button",
  role: "tab"
};
class J extends v {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, n, o, l = R) {
    super(
      s,
      n,
      o
    );
    t(this, "item");
    this.item = new l(
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      ...this.item.event.expose
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon"),
      badge: this.getSubClass("badge")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
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
    var n;
    const s = [
      ...this.item.icon.render(),
      ...this.item.label.render(),
      ...this.item.badge.render(),
      ...this.item.ripple.render()
    ];
    return D("div", {
      ...this.getAttrs(),
      class: (n = this.classes) == null ? void 0 : n.value.main
    }, s);
  }
}
export {
  R as TabItem,
  J as TabItemDesign,
  H as defaultsTabItem
};

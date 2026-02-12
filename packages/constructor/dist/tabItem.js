var C = Object.defineProperty;
var k = (i, e, s) => e in i ? C(i, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[e] = s;
var t = (i, e, s) => k(i, typeof e != "symbol" ? e + "" : e, s);
import { computed as h, h as w } from "vue";
import { DesignConstructorAbstract as S } from "@dxtmisha/functional";
import { A as a } from "./AriaStaticInclude-ZrgMZ2ja.js";
import { B as x } from "./BadgeInclude-BwCIBVyK.js";
import { L as E } from "./LabelInclude-D-mLvjK5.js";
import { E as N } from "./EnabledInclude-DIc_ZLNR.js";
import { E as T } from "./EventClickInclude-WHJqxZ1b.js";
import { S as B } from "./SkeletonInclude-BIUzAO2s.js";
import { I as D } from "./IconTrailingInclude-CdsOcDxv.js";
import { R as A } from "./RippleInclude-Du5yIzX_.js";
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
  constructor(e, s, n, o, r, p, c, d, l) {
    t(this, "icon");
    t(this, "label");
    t(this, "badge");
    t(this, "skeleton");
    t(this, "enabled");
    t(this, "ripple");
    t(this, "event");
    /** tag type/ тип тега */
    t(this, "tag", h(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button"));
    /** values for attributes/ значения для атрибутов */
    t(this, "binds", h(() => {
      var e;
      return {
        href: this.props.href,
        "data-value": (e = this.props.index) != null ? e : this.props.value,
        onClick: this.event.onClick,
        tabindex: 0,
        ...a.role(this.props.role),
        ...a.selected(!!this.props.selected),
        ...a.disabled(!!this.props.disabled)
      };
    }));
    this.props = e, this.refs = s, this.element = n, this.classDesign = o, this.className = r, this.components = p, this.slots = c, this.emits = d;
    const {
      BadgeIncludeConstructor: m = x,
      EnabledIncludeConstructor: u = N,
      EventClickIncludeConstructor: b = T,
      IconTrailingIncludeConstructor: g = D,
      LabelIncludeConstructor: I = E,
      RippleIncludeConstructor: f = A,
      SkeletonIncludeConstructor: v = B
    } = l != null ? l : {};
    this.skeleton = new v(this.props, this.classDesign, ["classTextVariant"]), this.enabled = new u(this.props), this.icon = new g(this.props, this.className, this.components), this.label = new I(
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
      this.components,
      {
        overlap: "static"
      }
    ), this.ripple = new f(this.className, this.components, this.enabled), this.event = new b(
      this.props,
      this.enabled,
      this.emits
    );
  }
}
const M = {
  role: "tab"
};
class O extends S {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(s, n, o, r = R) {
    super(
      s,
      n,
      o
    );
    t(this, "item");
    this.item = new r(
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
    return w(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        class: (n = this.classes) == null ? void 0 : n.value.main,
        ...this.item.binds.value
      },
      s
    );
  }
}
export {
  R as TabItem,
  O as TabItemDesign,
  M as defaultsTabItem
};

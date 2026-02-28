import { toRefs as x, computed as a, h as A, defineComponent as T, openBlock as w, createBlock as I, unref as _, mergeDefaults as D } from "vue";
import { isObjectNotArray as C, RouterItemRef as b, isEnter as R, DesignConstructorAbstract as O, getBindRef as B, inArray as m } from "@dxtmisha/functional";
import { l as v } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { $ as z } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { D as L } from "./index-DQ9Enri3.js";
var S = Object.defineProperty, $ = (s, e, i) => e in s ? S(s, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[e] = i, y = (s, e, i) => $(s, typeof e != "symbol" ? e + "" : e, i);
let P = class {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, i, n) {
    y(this, "refs"), y(this, "onClick", (t, o) => {
      if (this.emits)
        if (o)
          this.emit(t, o);
        else if (this.toRouter())
          t.preventDefault();
        else if (this.enabled) {
          const l = this.getOptions(t);
          (this.enabled.isEnabled.value || l.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(t, l);
        } else
          this.emit(t, this.getOptions(t));
    }), y(this, "onKeydown", (t, o) => {
      R(t) && (this.onClick(t, o), t.preventDefault());
    }), this.props = e, this.enabled = i, this.emits = n, this.refs = e ? x(e) : void 0;
  }
  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  get binds() {
    return {
      ...this.getHref(),
      onClick: this.onClick,
      onKeydown: this.onKeydown
    };
  }
  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose() {
    var e, i;
    return {
      value: (e = this.refs) == null ? void 0 : e.value,
      detail: (i = this.refs) == null ? void 0 : i.detail
    };
  }
  /**
   * Returns the link value
   *
   * Возвращает значение ссылки
   */
  getHref() {
    var e, i, n;
    const t = (e = this.props) == null ? void 0 : e.to;
    return (i = this.props) != null && i.to && C(t) && "name" in t ? b.rawToHref(t) : {
      href: (n = this.props) == null ? void 0 : n.href
    };
  }
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(e) {
    var i, n;
    return {
      type: this.getTargetType(e),
      value: (i = this.props) == null ? void 0 : i.value,
      detail: (n = this.props) == null ? void 0 : n.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(e) {
    var i, n, t;
    const o = (t = (n = (i = e.target) == null ? void 0 : i.closest("[data-event-type]")) == null ? void 0 : n.dataset) == null ? void 0 : t.eventType;
    return o != null ? o : "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    var e, i;
    return (e = this.props) != null && e.to ? (b.push((i = this.props) == null ? void 0 : i.to), !0) : !1;
  }
  /**
   * Triggers the click event
   *
   * Вызывает событие клика
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  emit(e, i) {
    this.emits && (this.emits("click", e, i), this.emits("clickLite", i));
  }
};
var q = Object.defineProperty, E = (s, e, i) => e in s ? q(s, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[e] = i, r = (s, e, i) => E(s, typeof e != "symbol" ? e + "" : e, i);
class j {
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
  constructor(e, i, n, t, o, l, d, h, u) {
    r(this, "iconBind"), r(this, "iconActiveBind"), r(this, "skeleton"), r(this, "event"), r(this, "isActive", a(() => !!(this.props.active && this.props.iconActive))), r(this, "classes", a(() => ({
      ...this.skeleton.classes.value
    }))), r(this, "binds", a(() => {
      var p;
      const c = {
        key: "icon",
        ...v.role(this.getRole()),
        ...v.label(this.props.ariaLabel)
      };
      return this.props.dynamic ? {
        ...c,
        tabindex: (p = this.props.tabindex) != null ? p : 0,
        ...this.event.binds
      } : {
        ...c,
        ...v.hidden()
      };
    })), r(this, "onLoad", (p) => {
      var c;
      return (c = this.emits) == null ? void 0 : c.call(this, "load", p);
    }), this.props = e, this.refs = i, this.element = n, this.classDesign = t, this.className = o, this.components = l, this.slots = d, this.emits = h;
    const {
      EventClickIncludeConstructor: g = P,
      SkeletonIncludeConstructor: k = z
    } = u != null ? u : {};
    this.iconBind = B(
      i.icon,
      a(() => ({
        key: "mainIcon",
        class: `${o}__icon`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: this.isActive.value,
        onLoad: this.onLoad
      }))
    ), this.iconActiveBind = B(
      i.iconActive,
      a(() => ({
        key: "activeIcon",
        class: `${o}__iconActive`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: !this.isActive.value
      }))
    ), this.event = new g(
      e,
      void 0,
      h
    ), this.skeleton = new k(
      e,
      t,
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
const H = {
  // :default [!] System label / Системная метка
  animationType: "type1"
};
class K extends O {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor icon item class/ класс элемента иконки
   */
  constructor(e, i, n, t = j) {
    super(
      e,
      i,
      n
    ), r(this, "item"), r(this, "propsMain", a(() => {
      var o;
      return {
        ...this.getAttrs(),
        ...this.item.binds.value,
        class: (o = this.classes) == null ? void 0 : o.value.main
      };
    })), r(this, "renderIcon", () => this.components.renderOne(
      "image",
      this.item.iconBind.value,
      void 0,
      "icon"
    )), r(this, "renderIconActive", () => this.components.renderOne(
      "image",
      this.item.iconActiveBind.value,
      void 0,
      "iconActive"
    )), this.item = new t(
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
    const e = [];
    return this.initSlot("default", e), this.props.icon && e.push(this.renderIcon()), this.props.iconActive && e.push(this.renderIconActive()), A("span", this.propsMain.value, e);
  }
}
const f = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  size: ["auto", "x", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
  rounded: ["auto", "sm", "md", "lg", "xl", "full"]
  // :values [!] System label / Системная метка
}, N = {
  ...H,
  // :default [!] System label / Системная метка
  animationType: "type1",
  square: !0,
  size: "auto",
  rounded: "auto"
}, U = /* @__PURE__ */ T({
  name: "D1Icon",
  __name: "D1Icon",
  props: /* @__PURE__ */ D({
    isSkeleton: { type: Boolean },
    ariaLabel: {},
    to: {},
    href: {},
    value: {},
    detail: {},
    active: { type: Boolean },
    icon: {},
    iconActive: {},
    role: {},
    tabindex: {},
    turn: { type: Boolean },
    disabled: { type: Boolean },
    hide: { type: Boolean },
    asPalette: { type: Boolean },
    dir: { type: Boolean },
    overlay: { type: Boolean },
    dynamic: { type: Boolean },
    start: { type: Boolean },
    end: { type: Boolean },
    high: { type: Boolean },
    animationType: {},
    animationShow: { type: Boolean },
    square: { type: Boolean },
    circle: { type: Boolean },
    rect: { type: Boolean },
    size: {},
    inverse: { type: Boolean },
    rounded: {}
  }, N),
  emits: ["load", "click", "clickLite"],
  setup(s, { expose: e, emit: i }) {
    const n = i, t = s, o = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-icon": !0,
        "d1-icon--turn": t.turn,
        "d1-icon--disabled": t.disabled,
        "d1-icon--hide": t.hide,
        "d1-icon--asPalette": t.asPalette,
        "d1-icon--dir": t.dir,
        "d1-icon--overlay": t.overlay,
        "d1-icon--dynamic": t.dynamic,
        "d1-icon--start": t.start,
        "d1-icon--end": t.end,
        "d1-icon--high": t.high,
        [`d1-icon--animationType--${t.animationType}`]: m(f.animationType, t.animationType),
        "d1-icon--animationShow": t.animationShow,
        "d1-icon--square": t.square && !t.circle && !t.rect,
        "d1-icon--circle": t.circle,
        "d1-icon--rect": t.rect,
        [`d1-icon--size--${t.size}`]: m(f.size, t.size),
        "d1-icon--inverse": t.inverse,
        [`d1-icon--rounded--${t.rounded}`]: m(f.rounded, t.rounded)
        // :classes-values [!] System label / Системная метка
      }
    })), l = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), d = new K(
      "d1.icon",
      t,
      {
        emits: n,
        components: {
          image: L
        },
        classes: o,
        styles: l
      }
    ), h = d.render();
    return e(d.expose()), (u, g) => (w(), I(_(h)));
  }
});
export {
  U as _,
  P as g
};

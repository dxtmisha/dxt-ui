import { toRefs as k, computed as a, h as x, defineComponent as A, openBlock as T, createBlock as w, unref as I, mergeDefaults as C } from "vue";
import { RouterItemRef as D, isEnter as _, DesignConstructorAbstract as R, getBindRef as g, inArray as u } from "@dxtmisha/functional";
import { l as m } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { $ as z } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { D as L } from "./index-DQ9Enri3.js";
var O = Object.defineProperty, S = (s, e, t) => e in s ? O(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, v = (s, e, t) => S(s, typeof e != "symbol" ? e + "" : e, t);
class $ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, o) {
    v(this, "refs"), v(this, "onClick", (i, n) => {
      if (this.emits)
        if (n)
          this.emit(i, n);
        else if (this.toRouter())
          i.preventDefault();
        else if (this.enabled) {
          const l = this.getOptions(i);
          (this.enabled.isEnabled.value || l.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(i, l);
        } else
          this.emit(i, this.getOptions(i));
    }), v(this, "onKeydown", (i, n) => {
      _(i) && (this.onClick(i, n), i.preventDefault());
    }), this.props = e, this.enabled = t, this.emits = o, this.refs = e ? k(e) : void 0;
  }
  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  get binds() {
    return {
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
    var e, t;
    return {
      value: (e = this.refs) == null ? void 0 : e.value,
      detail: (t = this.refs) == null ? void 0 : t.detail
    };
  }
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(e) {
    var t, o;
    return {
      type: this.getTargetType(e),
      value: (t = this.props) == null ? void 0 : t.value,
      detail: (o = this.props) == null ? void 0 : o.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(e) {
    var t, o, i;
    const n = (i = (o = (t = e.target) == null ? void 0 : t.closest("[data-event-type]")) == null ? void 0 : o.dataset) == null ? void 0 : i.eventType;
    return n != null ? n : "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    var e, t;
    return (e = this.props) != null && e.to ? (D.push((t = this.props) == null ? void 0 : t.to), !0) : !1;
  }
  /**
   * Triggers the click event
   *
   * Вызывает событие клика
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  emit(e, t) {
    this.emits && (this.emits("click", e, t), this.emits("clickLite", t));
  }
}
var E = Object.defineProperty, K = (s, e, t) => e in s ? E(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, r = (s, e, t) => K(s, typeof e != "symbol" ? e + "" : e, t);
class P {
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
  constructor(e, t, o, i, n, l, c, d, h) {
    r(this, "iconBind"), r(this, "iconActiveBind"), r(this, "skeleton"), r(this, "event"), r(this, "isActive", a(() => !!(this.props.active && this.props.iconActive))), r(this, "classes", a(() => ({
      ...this.skeleton.classes.value
    }))), r(this, "binds", a(() => {
      var p;
      return {
        key: "icon",
        tabindex: this.props.dynamic ? (p = this.props.tabindex) != null ? p : 0 : void 0,
        onClick: this.props.dynamic ? this.event.onClick : void 0,
        onKeydown: this.props.dynamic ? this.event.onKeydown : void 0,
        ...m.role(this.getRole()),
        ...m.label(this.props.ariaLabel),
        ...m.hidden(!this.props.dynamic)
      };
    })), r(this, "onLoad", (p) => {
      var b;
      return (b = this.emits) == null ? void 0 : b.call(this, "load", p);
    }), this.props = e, this.refs = t, this.element = o, this.classDesign = i, this.className = n, this.components = l, this.slots = c, this.emits = d;
    const {
      EventClickIncludeConstructor: f = $,
      SkeletonIncludeConstructor: B = z
    } = h != null ? h : {};
    this.iconBind = g(
      t.icon,
      a(() => ({
        key: "mainIcon",
        class: `${n}__icon`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: this.isActive.value,
        onLoad: this.onLoad
      }))
    ), this.iconActiveBind = g(
      t.iconActive,
      a(() => ({
        key: "activeIcon",
        class: `${n}__iconActive`,
        turn: this.props.turn,
        disabled: this.props.disabled,
        hide: !this.isActive.value
      }))
    ), this.event = new f(
      e,
      void 0,
      d
    ), this.skeleton = new B(
      e,
      i,
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
const q = {
  // :default [!] System label / Системная метка
  animationType: "type1"
};
class j extends R {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor icon item class/ класс элемента иконки
   */
  constructor(e, t, o, i = P) {
    super(
      e,
      t,
      o
    ), r(this, "item"), r(this, "propsMain", a(() => {
      var n;
      return {
        ...this.getAttrs(),
        ...this.item.binds.value,
        class: (n = this.classes) == null ? void 0 : n.value.main
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
    )), this.item = new i(
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
    return this.initSlot("default", e), this.props.icon && e.push(this.renderIcon()), this.props.iconActive && e.push(this.renderIconActive()), x("span", this.propsMain.value, e);
  }
}
const y = {
  // :values [!] System label / Системная метка
  animationType: ["type1", "type2"],
  size: ["auto", "x", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
  rounded: ["auto", "sm", "md", "lg", "xl", "full"]
  // :values [!] System label / Системная метка
}, M = {
  ...q,
  // :default [!] System label / Системная метка
  animationType: "type1",
  square: !0,
  size: "auto",
  rounded: "auto"
}, J = /* @__PURE__ */ A({
  name: "D1Icon",
  __name: "D1Icon",
  props: /* @__PURE__ */ C({
    isSkeleton: { type: Boolean },
    ariaLabel: {},
    to: {},
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
  }, M),
  emits: ["load", "click", "clickLite"],
  setup(s, { expose: e, emit: t }) {
    const o = t, i = s, n = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-icon": !0,
        "d1-icon--turn": i.turn,
        "d1-icon--disabled": i.disabled,
        "d1-icon--hide": i.hide,
        "d1-icon--asPalette": i.asPalette,
        "d1-icon--dir": i.dir,
        "d1-icon--overlay": i.overlay,
        "d1-icon--dynamic": i.dynamic,
        "d1-icon--start": i.start,
        "d1-icon--end": i.end,
        "d1-icon--high": i.high,
        [`d1-icon--animationType--${i.animationType}`]: u(y.animationType, i.animationType),
        "d1-icon--animationShow": i.animationShow,
        "d1-icon--square": i.square && !i.circle && !i.rect,
        "d1-icon--circle": i.circle,
        "d1-icon--rect": i.rect,
        [`d1-icon--size--${i.size}`]: u(y.size, i.size),
        "d1-icon--inverse": i.inverse,
        [`d1-icon--rounded--${i.rounded}`]: u(y.rounded, i.rounded)
        // :classes-values [!] System label / Системная метка
      }
    })), l = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), c = new j(
      "d1.icon",
      i,
      {
        emits: o,
        components: {
          image: L
        },
        classes: n,
        styles: l
      }
    ), d = c.render();
    return e(c.expose()), (h, f) => (T(), w(I(d)));
  }
});
export {
  J as _,
  $ as m
};

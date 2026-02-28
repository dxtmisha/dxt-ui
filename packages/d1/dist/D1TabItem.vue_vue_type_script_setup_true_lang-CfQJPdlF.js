import { h as B, computed as l, defineComponent as C, openBlock as k, createBlock as w, unref as S, mergeDefaults as D } from "vue";
import { DesignConstructorAbstract as $, inArray as b } from "@dxtmisha/functional";
import { l as h } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { m as T } from "./BadgeInclude-BwCIBVyK-CvZerwwH.js";
import { x as L } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { h as N } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { g as A, _ as M } from "./D1Icon.vue_vue_type_script_setup_true_lang-B26p6g1f.js";
import { $ as X } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { B as E } from "./IconTrailingInclude-CdsOcDxv-CocNhqdl.js";
import { o as R } from "./RippleInclude-Du5yIzX_-DwebniuR.js";
import { _ as O } from "./D1Badge.vue_vue_type_script_setup_true_lang-BhlwzpOa.js";
import { _ as P } from "./D1Progress.vue_vue_type_script_setup_true_lang-BBIs4Qvn.js";
import { _ as V } from "./D1Ripple.vue_vue_type_script_setup_true_lang-CX94jwSw.js";
var j = Object.defineProperty, H = (o, e, s) => e in o ? j(o, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[e] = s, i = (o, e, s) => H(o, typeof e != "symbol" ? e + "" : e, s);
class q {
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
  constructor(e, s, n, t, r, c, a, p, m) {
    i(this, "icon"), i(this, "label"), i(this, "badge"), i(this, "skeleton"), i(this, "enabled"), i(this, "ripple"), i(this, "event"), i(this, "tag", l(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), i(this, "binds", l(() => {
      var u;
      return {
        href: this.props.href,
        "data-value": (u = this.props.index) != null ? u : this.props.value,
        tabindex: -1,
        ...this.event.binds,
        ...h.role(this.props.role),
        ...h.selected(!!this.props.selected),
        ...h.disabled(!!this.props.disabled)
      };
    })), this.props = e, this.refs = s, this.element = n, this.classDesign = t, this.className = r, this.components = c, this.slots = a, this.emits = p;
    const {
      BadgeIncludeConstructor: d = T,
      EnabledIncludeConstructor: g = N,
      EventClickIncludeConstructor: v = A,
      IconTrailingIncludeConstructor: y = E,
      LabelIncludeConstructor: I = L,
      RippleIncludeConstructor: _ = R,
      SkeletonIncludeConstructor: x = X
    } = m != null ? m : {};
    this.skeleton = new x(this.props, this.classDesign, ["classTextVariant"]), this.enabled = new g(this.props), this.icon = new y(this.props, this.className, this.components), this.label = new I(
      this.props,
      this.className,
      void 0,
      this.slots,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.badge = new d(
      this.props,
      this.className,
      this.components,
      {
        overlap: "static"
      }
    ), this.ripple = new _(this.className, this.components, this.enabled), this.event = new v(
      this.props,
      this.enabled,
      this.emits
    );
  }
}
const z = {
  role: "tab"
};
class F extends $ {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, s, n, t = q) {
    super(
      e,
      s,
      n
    ), i(this, "item"), this.item = new t(
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
    var e;
    const s = [
      ...this.item.icon.render(),
      ...this.item.label.render(),
      ...this.item.badge.render(),
      ...this.item.ripple.render()
    ];
    return B(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        class: (e = this.classes) == null ? void 0 : e.value.main,
        ...this.item.binds.value
      },
      s
    );
  }
}
const f = {
  // :values [!] System label / Системная метка
  adaptive: ["iconAlways", "auto", "iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"],
  container: ["iconSm", "iconMd", "iconLg", "iconXl", "icon2xl", "fullSm", "fullMd", "fullLg", "fullXl", "full2xl"]
  // :values [!] System label / Системная метка
}, G = {
  ...z
}, ae = /* @__PURE__ */ C({
  name: "D1TabItem",
  __name: "D1TabItem",
  props: /* @__PURE__ */ D({
    label: {},
    labelId: {},
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    badge: {},
    badgeDot: { type: Boolean },
    isSkeleton: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    to: {},
    href: {},
    value: {},
    detail: {},
    role: {},
    index: {},
    tag: {},
    focus: { type: Boolean },
    open: { type: Boolean },
    adaptive: {},
    container: {}
  }, G),
  emits: ["click", "clickLite"],
  setup(o, { expose: e, emit: s }) {
    const n = s, t = o, r = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tabItem": !0,
        "d1-tabItem--focus": t.focus,
        "d1-tabItem--open": t.open,
        "d1-tabItem--selected": t.selected,
        "d1-tabItem--disabled": t.disabled,
        [`d1-tabItem--adaptive--${t.adaptive}`]: b(f.adaptive, t.adaptive),
        [`d1-tabItem--container--${t.container}`]: b(f.container, t.container)
        // :classes-values [!] System label / Системная метка
      }
    })), c = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new F(
      "d1.tabItem",
      t,
      {
        emits: n,
        classes: r,
        styles: c,
        components: {
          icon: M,
          badge: O,
          progress: P,
          ripple: V
        }
      }
    ), p = a.render();
    return e(a.expose()), (m, d) => (k(), w(S(p)));
  }
});
export {
  ae as _
};

import { computed as d, h as p, defineComponent as k, openBlock as T, createBlock as w, unref as $, mergeDefaults as D } from "vue";
import { DesignConstructorAbstract as L, inArray as v } from "@dxtmisha/functional";
import { a as I } from "./getClassTagAStatic-BnVYlXHI-DhbmeMA0.js";
import { x as N } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { v as M } from "./CaptionInclude-CohAZRI2-Ui7bYJab.js";
import { v as A } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { h as H } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { m as O, _ as P } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { $ as E } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { B as j } from "./IconTrailingInclude-CdsOcDxv-CocNhqdl.js";
import { b as R } from "./ProgressInclude-DlEbC7XP-Cahi9k1c.js";
import { o as V } from "./RippleInclude-Du5yIzX_-DwebniuR.js";
import { l as X } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { _ as Y } from "./D1Progress.vue_vue_type_script_setup_true_lang-BBIs4Qvn.js";
import { _ as Z } from "./D1Ripple.vue_vue_type_script_setup_true_lang-CX94jwSw.js";
var q = Object.defineProperty, z = (o, e, n) => e in o ? q(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[e] = n, s = (o, e, n) => z(o, typeof e != "symbol" ? e + "" : e, n);
class F {
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
   * @param constructors.CaptionConstructor class for creating a caption/ класс для создания подписи
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(e, n, a, i, t, r, l, c, h) {
    s(this, "progress"), s(this, "skeleton"), s(this, "label"), s(this, "description"), s(this, "caption"), s(this, "enabled"), s(this, "icon"), s(this, "ripple"), s(this, "event"), s(this, "classes", d(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [I(this.classDesign)]: !0
    }))), s(this, "role", d(() => {
      if (this.props.role)
        return this.props.role;
      if (this.props.dynamic)
        return "button";
    })), this.props = e, this.refs = n, this.element = a, this.classDesign = i, this.className = t, this.components = r, this.slots = l, this.emits = c;
    const {
      CaptionConstructor: m = M,
      DescriptionConstructor: y = A,
      EnabledConstructor: b = H,
      EventConstructor: f = O,
      IconConstructor: C = j,
      LabelConstructor: B = N,
      ProgressConstructor: _ = R,
      RippleConstructor: x = V,
      SkeletonConstructor: S = E
    } = h != null ? h : {}, u = new _(
      e,
      t,
      r,
      {
        position: "bottom"
      }
    );
    this.skeleton = new S(
      e,
      i,
      ["classTextVariant"]
    ), this.label = new B(
      e,
      t,
      void 0,
      l,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.caption = new m(e, t, l), this.description = new y(e, t, l, this.skeleton), this.enabled = new b(e, u), this.icon = new C(e, t, r), this.progress = u, this.ripple = new x(t, r, this.enabled), this.event = new f(
      e,
      this.enabled,
      c
    );
  }
  /**
   * Returns a list of sub-element CSS classes for the cell component.
   *
   * Возвращает список CSS классов для под-элементов компонента ячейки.
   */
  getClassesSub() {
    return {
      label: `${this.className}__label`,
      description: `${this.className}__description`,
      caption: `${this.className}__caption`,
      trailing: `${this.className}__trailing`
    };
  }
}
const G = {
  tag: "div",
  // :default [!] System label / Системная метка
  divider: !0
};
class J extends L {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor cell item class/ класс элемента ячейки
   */
  constructor(e, n, a, i = F) {
    super(
      e,
      n,
      a
    ), s(this, "item"), s(this, "renderContext", () => {
      var t;
      return [
        p(
          "div",
          {
            key: "context",
            class: (t = this.classes) == null ? void 0 : t.value.context
          },
          [
            ...this.item.label.render(),
            ...this.item.caption.render(),
            ...this.item.description.render()
          ]
        )
      ];
    }), s(this, "renderTrailing", () => {
      var t;
      return this.slots && "trailing" in this.slots ? [
        p(
          "div",
          {
            key: "trailing",
            class: (t = this.classes) == null ? void 0 : t.value.contextTrailing
          },
          this.initSlot("trailing", void 0, this.item.getClassesSub())
        )
      ] : [];
    }), s(this, "renderBody", () => {
      var t;
      return this.slots && "body" in this.slots ? [
        p(
          "div",
          {
            key: "body",
            class: (t = this.classes) == null ? void 0 : t.value.body
          },
          this.initSlot("body", void 0, this.item.getClassesSub())
        )
      ] : [];
    }), s(this, "propsMain", d(() => {
      var t;
      const r = {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        "data-value": this.props.value,
        "data-divider": this.props.divider ? "active" : void 0,
        onClick: this.item.event.onClick,
        ...X.role(this.item.role.value)
      };
      return this.props.dynamic ? {
        ...r,
        tabindex: "0"
      } : r;
    })), this.item = new i(
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
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      context: this.getSubClass("context"),
      contextTrailing: this.getSubClass("contextTrailing"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description"),
      caption: this.getSubClass("caption"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      body: this.getSubClass("body"),
      loading: this.getSubClass("loading")
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
    return p(
      (e = this.props.tag) != null ? e : "div",
      this.propsMain.value,
      [
        ...this.item.icon.render(),
        ...this.renderContext(),
        ...this.renderTrailing(),
        ...this.renderBody(),
        ...this.item.ripple.render(),
        ...this.item.progress.render()
      ]
    );
  }
}
const g = {
  // :values [!] System label / Системная метка
  dividerLabel: ["always", "none", "adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, K = {
  ...G,
  // :default [!] System label / Системная метка
  divider: !0,
  padding: "none",
  paddingByIndent: !0
}, he = /* @__PURE__ */ k({
  name: "D1Cell",
  __name: "D1Cell",
  props: /* @__PURE__ */ D({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    caption: {},
    captionDecorative: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    iconTrailing: {},
    iconTrailingTurnOnly: { type: Boolean },
    iconTrailingDirOnly: { type: Boolean },
    iconTrailingPalette: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    to: {},
    value: {},
    detail: {},
    role: {},
    tag: {},
    divider: { type: Boolean },
    dynamic: { type: Boolean },
    focus: { type: Boolean },
    dynamicHover: { type: Boolean },
    dividerLabel: {},
    iconTop: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, K),
  emits: ["click", "clickLite"],
  setup(o, { expose: e, emit: n }) {
    const a = n, i = o, t = d(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-cell": !0,
        "d1-cell--focus": i.focus,
        "d1-cell--selected": i.selected,
        "d1-cell--readonly": i.readonly,
        "d1-cell--disabled": i.disabled,
        "d1-cell--dynamic": i.dynamic,
        "d1-cell--dynamicHover": i.dynamicHover,
        "d1-cell--divider": i.divider,
        [`d1-cell--dividerLabel--${i.dividerLabel}`]: v(g.dividerLabel, i.dividerLabel),
        "d1-cell--iconTop": i.iconTop,
        [`d1-cell--padding--${i.padding}`]: v(g.padding, i.padding),
        "d1-cell--paddingByIndent": i.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), r = d(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new J(
      "d1.cell",
      i,
      {
        emits: a,
        classes: t,
        styles: r,
        components: {
          icon: P,
          progress: Y,
          ripple: Z
        }
      }
    ), c = l.render();
    return e(l.expose()), (h, m) => (T(), w($(c)));
  }
});
export {
  he as _
};

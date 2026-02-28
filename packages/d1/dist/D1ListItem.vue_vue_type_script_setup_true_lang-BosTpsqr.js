import { computed as p, h as x, defineComponent as E, openBlock as O, createBlock as P, unref as N, mergeDefaults as H } from "vue";
import { getExp as S, isFilled as I, DesignConstructorAbstract as j, inArray as g } from "@dxtmisha/functional";
import { a as M } from "./getClassTagAStatic-BnVYlXHI-DhbmeMA0.js";
import { g as R, _ as V } from "./D1Icon.vue_vue_type_script_setup_true_lang-B26p6g1f.js";
import { l as f } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { x as F } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { v as q, m as G } from "./SuffixInclude-maZ7235l-4Uh8JpYX.js";
import { v as J } from "./CaptionInclude-CohAZRI2-Ui7bYJab.js";
import { v as K } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { m as Q } from "./BadgeInclude-BwCIBVyK-CvZerwwH.js";
import { h as U } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { B as W } from "./IconTrailingInclude-CdsOcDxv-CocNhqdl.js";
import { b as X } from "./ProgressInclude-DlEbC7XP-Cahi9k1c.js";
import { o as Y } from "./RippleInclude-Du5yIzX_-DwebniuR.js";
import { $ as Z } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { _ as ee } from "./D1Badge.vue_vue_type_script_setup_true_lang-BhlwzpOa.js";
import { _ as te } from "./D1Progress.vue_vue_type_script_setup_true_lang-BBIs4Qvn.js";
import { _ as ie } from "./D1Ripple.vue_vue_type_script_setup_true_lang-CX94jwSw.js";
var se = Object.defineProperty, ne = (l, e, i) => e in l ? se(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[e] = i, re = (l, e, i) => ne(l, e + "", i);
class oe extends F {
  /**
   * Constructor for the LabelHighlightInclude class.
   *
   * Конструктор для класса LabelHighlightInclude.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, i, r, t, n, a) {
    super(
      e,
      i,
      r,
      t,
      n,
      p(() => this.getLabel()),
      void 0,
      a
    ), re(this, "getLabel", () => {
      const o = this.props;
      if (o.highlight && o.highlight.length >= this.getLengthStart() && o.label) {
        const c = `${this.className}__highlight`, h = o.label.toString(), d = S(o.highlight, "i");
        if (h.match(d))
          return h.replace(d, (v) => `<span class="${c}">${v}</span>`);
        if (I(o.value) && o.value.toString().match(d))
          return `<span class="${c}">${h}</span>`;
      }
    }), this.props = e, this.className = i, this.classesExtra = r, this.slots = t, this.elementsExtra = n, this.skeleton = a;
  }
  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   */
  isHighlight() {
    const e = this.props;
    if (!e.highlight || e.highlight.length < this.getLengthStart())
      return !0;
    if (!(e.highlight && e.highlight.length >= this.getLengthStart() && e.label))
      return !1;
    const i = e.label.toString(), r = S(e.highlight, "i");
    return !!(i.match(r) || I(e.value) && e.value.toString().match(r));
  }
  /**
   * Returns the minimum length of the string to start highlighting.
   *
   * Возвращает минимальную длину строки для начала выделения.
   */
  getLengthStart() {
    var e;
    return (e = this.props.highlightLengthStart) != null ? e : 2;
  }
}
var le = Object.defineProperty, ae = (l, e, i) => e in l ? le(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[e] = i, s = (l, e, i) => ae(l, typeof e != "symbol" ? e + "" : e, i);
class he {
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
   * @param constructors.CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
   * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelHighlightIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
   * @param constructors.ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
   * @param constructors.RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   * @param constructors.SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
   */
  constructor(e, i, r, t, n, a, o, c, h) {
    s(this, "icon"), s(this, "label"), s(this, "prefix"), s(this, "caption"), s(this, "suffix"), s(this, "description"), s(this, "badge"), s(this, "ripple"), s(this, "progress"), s(this, "skeleton"), s(this, "enabled"), s(this, "event"), s(this, "tag", p(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div")), s(this, "classes", p(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [M(this.classDesign)]: !0
    }))), s(this, "binds", p(() => {
      var u;
      return {
        href: this.props.href,
        "data-value": (u = this.props.index) != null ? u : this.props.value,
        "data-divider": this.props.divider ? "active" : void 0,
        "data-parent": this.props.parent,
        "data-list-id": this.props.listId,
        ...this.event.binds
      };
    })), s(this, "aria", p(() => {
      const u = {
        tabindex: this.props.tabindex,
        ...f.role(this.props.role),
        ...f.disabled(!!this.props.disabled)
      };
      switch (this.props.role) {
        case "menuitemradio":
        case "menuitemcheckbox":
          return {
            ...u,
            ...f.checked(!!this.props.selected)
          };
        case "menuitem":
        case "option":
          return {
            ...u,
            ...f.selected(!!this.props.selected)
          };
      }
      return u;
    })), this.props = e, this.refs = i, this.element = r, this.classDesign = t, this.className = n, this.components = a, this.slots = o, this.emits = c;
    const {
      BadgeIncludeConstructor: d = Q,
      CaptionIncludeConstructor: v = J,
      DescriptionIncludeConstructor: B = K,
      EnabledIncludeConstructor: _ = U,
      EventClickIncludeConstructor: w = R,
      IconTrailingIncludeConstructor: k = W,
      LabelHighlightIncludeConstructor: $ = oe,
      PrefixIncludeConstructor: A = G,
      ProgressIncludeConstructor: D = X,
      RippleIncludeConstructor: L = Y,
      SkeletonIncludeConstructor: T = Z,
      SuffixIncludeConstructor: z = q
    } = h != null ? h : {}, C = new D(
      e,
      n,
      a,
      {
        circular: !0
      }
    ), m = new T(
      e,
      t,
      ["classTextVariant"]
    ), y = new _(e, C);
    this.icon = new k(e, n, a), this.label = new $(
      e,
      n,
      void 0,
      o,
      void 0,
      m
    ), this.prefix = new A(e, n, o, m), this.caption = new v(e, n, o), this.suffix = new z(e, n, o), this.description = new B(e, n, o, m), this.badge = new d(
      e,
      n,
      a,
      {
        overlap: "static"
      }
    ), this.ripple = new L(n, a, y), this.progress = C, this.skeleton = m, this.enabled = y, this.event = new w(e, y, c);
  }
}
const ce = {
  tabindex: "-1",
  role: "option",
  // :default [!] System label / Системная метка
  iconAlign: "center"
};
class pe extends j {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(e, i, r) {
    super(
      e,
      i,
      r
    ), s(this, "item"), s(this, "renderBody", () => {
      var t;
      const n = [
        ...this.renderContext(),
        ...this.item.description.render()
      ];
      return this.initSlot("body", n), [
        x(
          "div",
          { class: (t = this.classes) == null ? void 0 : t.value.body },
          n
        )
      ];
    }), s(this, "renderContext", () => {
      var t;
      return [
        x(
          "div",
          { class: (t = this.classes) == null ? void 0 : t.value.context },
          [
            ...this.item.prefix.render(),
            ...this.item.label.render(),
            ...this.item.caption.render(),
            ...this.item.suffix.render(),
            ...this.item.badge.render()
          ]
        )
      ];
    }), this.item = new he(
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
      body: this.getSubClass("body"),
      context: this.getSubClass("context"),
      label: this.getSubClass("label"),
      highlight: this.getSubClass("highlight"),
      prefix: this.getSubClass("prefix"),
      caption: this.getSubClass("caption"),
      description: this.getSubClass("description"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      badge: this.getSubClass("badge"),
      input: this.getSubClass("input")
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
    var e, i;
    if (this.props.filterMode && !this.item.label.isHighlight())
      return;
    const r = [];
    return this.initSlot("leading", r), r.push(...this.renderBody()), this.initSlot("trailing", r), r.push(
      ...this.item.icon.render(),
      ...this.item.progress.render(),
      ...this.item.ripple.render()
    ), x(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (e = this.classes) == null ? void 0 : e.value.main,
        style: (i = this.styles) == null ? void 0 : i.value,
        ...this.item.binds.value,
        ...this.item.aria.value
      },
      r
    );
  }
}
const b = {
  // :values [!] System label / Системная метка
  iconAlign: ["center", "edge"],
  fill: [],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, de = {
  ...ce,
  // :default [!] System label / Системная метка
  iconAlign: "edge",
  size: "md"
}, Le = /* @__PURE__ */ E({
  name: "D1ListItem",
  __name: "D1ListItem",
  props: /* @__PURE__ */ H({
    label: {},
    labelId: {},
    highlight: {},
    highlightLengthStart: {},
    value: {},
    description: {},
    descriptionId: {},
    prefix: {},
    prefixId: {},
    caption: {},
    captionDecorative: { type: Boolean },
    suffix: {},
    suffixId: {},
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
    badge: {},
    badgeDot: { type: Boolean },
    loading: { type: [Boolean, Object] },
    isSkeleton: { type: Boolean },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    to: {},
    href: {},
    detail: {},
    role: {},
    index: {},
    tag: {},
    filterMode: { type: Boolean },
    divider: { type: Boolean },
    tabindex: {},
    type: {},
    parent: {},
    listId: {},
    search: {},
    focus: { type: Boolean },
    open: { type: Boolean },
    selectedChild: { type: Boolean },
    iconTop: { type: Boolean },
    iconAlign: {},
    fill: {},
    size: {},
    dense: { type: Boolean },
    palette: {}
  }, de),
  emits: ["click", "clickLite"],
  setup(l, { expose: e, emit: i }) {
    const r = i, t = l, n = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listItem": !0,
        "d1-listItem--focus": t.focus,
        "d1-listItem--open": t.open,
        "d1-listItem--selected": t.selected,
        "d1-listItem--selectedChild": t.selectedChild,
        "d1-listItem--readonly": t.readonly,
        "d1-listItem--disabled": t.disabled,
        "d1-listItem--iconTop": t.iconTop,
        [`d1-listItem--iconAlign--${t.iconAlign}`]: g(b.iconAlign, t.iconAlign),
        "d1-listItem--fill--custom": I(t.fill) && !g(b.fill, t.fill),
        "d1-listItem--divider": t.divider,
        [`d1-listItem--size--${t.size}`]: g(b.size, t.size),
        "d1-listItem--dense": t.dense,
        [`d1-palette d1-palette--${t.palette}`]: g(b.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), a = p(() => {
      var h;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-listItem-sys-fill": (h = t.fill) != null ? h : null
        // :styles-values [!] System label / Системная метка
      };
    }), o = new pe(
      "d1.listItem",
      t,
      {
        emits: r,
        classes: n,
        styles: a,
        components: {
          icon: V,
          badge: ee,
          progress: te,
          ripple: ie
        }
      }
    ), c = o.render();
    return e(o.expose()), (h, d) => (O(), P(N(c)));
  }
});
export {
  Le as _
};

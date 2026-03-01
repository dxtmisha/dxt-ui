import { computed as n, h as y, defineComponent as f, openBlock as B, createBlock as z, unref as x, mergeDefaults as _ } from "vue";
import { isNumber as N, toNumberByMax as k, GeoRef as $, DesignConstructorAbstract as w, isFilled as b, inArray as p } from "@dxtmisha/functional";
import { l as g } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { x as C } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { B as D } from "./IconInclude-CLqwI29Q-Dlz7DC2a.js";
import { _ as I } from "./D1Icon.vue_vue_type_script_setup_true_lang-Cs247ZwJ.js";
let L = class extends C {
  /**
   * Constructor for working with text that has maximum values.
   *
   * Конструктор для работы с текстом, у которого есть максимальные значения.
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(e, s, i, t, o, r) {
    super(
      e,
      s,
      i,
      t,
      o,
      n(() => this.getNumber()),
      void 0,
      r
    ), this.props = e, this.className = s, this.classesExtra = i, this.slots = t, this.elementsExtra = o, this.skeleton = r;
  }
  /**
   * Returns text with conversion to maximum values.
   *
   * Возвращает текст с преобразованием в максимальные значения.
   */
  getNumber() {
    const e = this.props;
    if (e.label && N(e.label))
      return k(
        e.label,
        e.labelMax,
        e.formatting,
        $.getLanguage().value
      ).toString();
  }
};
var A = Object.defineProperty, H = (a, e, s) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s, l = (a, e, s) => H(a, typeof e != "symbol" ? e + "" : e, s);
class S {
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
   * @param constructors.IconIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelNumberIncludeConstructor class for working with label/ класс для работы с меткой
   */
  constructor(e, s, i, t, o, r, c, h, u) {
    l(this, "label"), l(this, "icon"), l(this, "autoHide", n(
      () => !this.props.dot && !b(this.icon.isIcon.value) && !b(this.label.is.value)
    )), l(this, "classes", n(() => ({
      [`${this.className}--hideAuto`]: this.autoHide.value
    }))), l(this, "aria", n(() => this.props.ariaLabel ? {
      ...g.hidden()
    } : {})), this.props = e, this.refs = s, this.element = i, this.classDesign = t, this.className = o, this.components = r, this.slots = c, this.emits = h;
    const {
      IconIncludeConstructor: m = D,
      LabelNumberIncludeConstructor: v = L
    } = u != null ? u : {};
    this.label = new v(
      e,
      o,
      void 0,
      c
    ), this.icon = new m(
      e,
      o,
      r
    );
  }
}
const E = {
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right"
};
class M extends w {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, s, i, t = S) {
    super(
      e,
      s,
      i
    ), l(this, "item"), this.item = new t(
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
    return {};
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
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon")
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
    const s = [];
    return this.props.dot || s.push(
      ...this.item.label.render(void 0, this.item.aria.value),
      ...this.item.icon.renderIcon()
    ), y("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: (e = this.classes) == null ? void 0 : e.value.main,
      ...g.label(this.props.ariaLabel)
    }, s);
  }
}
const d = {
  // :values [!] System label / Системная метка
  overlap: ["rectangular", "circular", "static"],
  vertical: ["top", "center", "bottom"],
  horizontal: ["right", "center", "left"],
  size: ["sm", "md", "lg", "none"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, T = {
  ...E,
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right",
  primary: !0,
  size: "md"
}, q = /* @__PURE__ */ f({
  name: "D1Badge",
  __name: "D1Badge",
  props: /* @__PURE__ */ _({
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    label: {},
    labelId: {},
    labelMax: {},
    formatting: { type: Boolean },
    ariaLabel: {},
    dot: { type: Boolean },
    hide: { type: Boolean },
    overlap: {},
    vertical: {},
    horizontal: {},
    primary: { type: Boolean },
    secondary: { type: Boolean },
    outline: { type: Boolean },
    size: {},
    palette: {}
  }, T),
  setup(a, { expose: e, emit: s }) {
    const i = s, t = a, o = n(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-badge": !0,
        "d1-badge--selected": t.selected,
        "d1-badge--hide": t.hide,
        "d1-badge--dot": t.dot,
        [`d1-badge--overlap--${t.overlap}`]: p(d.overlap, t.overlap),
        [`d1-badge--vertical--${t.vertical}`]: p(d.vertical, t.vertical),
        [`d1-badge--horizontal--${t.horizontal}`]: p(d.horizontal, t.horizontal),
        "d1-badge--primary": t.primary && !t.secondary && !t.outline,
        "d1-badge--secondary": t.secondary,
        "d1-badge--outline": t.outline,
        [`d1-badge--size--${t.size}`]: p(d.size, t.size),
        [`d1-palette d1-palette--${t.palette}`]: p(d.palette, t.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), r = n(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), c = new M(
      "d1.badge",
      t,
      {
        emits: i,
        classes: o,
        styles: r,
        components: {
          icon: I
        }
      }
    ), h = c.render();
    return e(c.expose()), (u, m) => (B(), z(x(h)));
  }
});
export {
  q as _
};

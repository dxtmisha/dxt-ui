import { h as g, computed as p, defineComponent as y, openBlock as b, createBlock as f, unref as S, mergeDefaults as x } from "vue";
import { DesignConstructorAbstract as A, toBinds as v, inArray as h } from "@dxtmisha/functional";
import { g as B } from "./D1Icon.vue_vue_type_script_setup_true_lang-B26p6g1f.js";
import { D as C } from "./index-DMI1Q7uE.js";
var k = Object.defineProperty, D = (r, t, i) => t in r ? k(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[t] = i, c = (r, t, i) => D(r, typeof t != "symbol" ? t + "" : t, i);
class L {
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
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   */
  constructor(t, i, d, e, s, l, a, n, o) {
    c(this, "event"), c(this, "isList", p(() => !!(this.props.list || this.slots && "default" in this.slots))), c(this, "isSecondary", p(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots))), this.props = t, this.refs = i, this.element = d, this.classDesign = e, this.className = s, this.components = l, this.slots = a, this.emits = n;
    const {
      EventConstructor: m = B
    } = o != null ? o : {};
    this.event = new m(
      void 0,
      void 0,
      n
    );
  }
}
const w = {
  // :default [!] System label / Системная метка
  align: "right"
};
class _ extends A {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor actions item class/ класс элемента действий
   */
  constructor(t, i, d, e = L) {
    super(
      t,
      i,
      d
    ), c(this, "item"), c(this, "renderList", () => {
      const s = [];
      return this.item.isList.value && (this.props.list && this.props.list.forEach((l, a) => {
        var n, o;
        this.components.renderAdd(
          s,
          "button",
          v(
            {
              onClick: this.item.event.onClick
            },
            this.props.buttonAttrs,
            l,
            {
              class: [
                (n = this.classes) == null ? void 0 : n.value.item,
                (o = this.classes) == null ? void 0 : o.value.list
              ]
            }
          ),
          void 0,
          `list-${a}`
        );
      }), this.initSlot("default", s)), s;
    }), c(this, "renderSecondary", () => {
      const s = [];
      return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((l, a) => {
        var n, o;
        this.components.renderAdd(
          s,
          "button",
          v(
            this.props.buttonSecondaryAttrs,
            l,
            {
              class: [
                (n = this.classes) == null ? void 0 : n.value.item,
                (o = this.classes) == null ? void 0 : o.value.secondary
              ]
            }
          ),
          void 0,
          `secondary-${a}`
        );
      }), this.initSlot("secondary", s)), s;
    }), c(this, "renderSpacer", () => {
      var s;
      return [g("div", { class: (s = this.classes) == null ? void 0 : s.value.spacer })];
    }), this.item = new e(
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
      main: {},
      // :classes [!] System label / Системная метка
      item: this.getSubClass("item"),
      list: this.getSubClass("list"),
      secondary: this.getSubClass("secondary"),
      spacer: this.getSubClass("spacer")
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
    var t;
    return g(
      "div",
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main
      },
      [
        ...this.renderList(),
        ...this.renderSpacer(),
        ...this.renderSecondary()
      ]
    );
  }
}
const u = {
  // :values [!] System label / Системная метка
  align: ["none", "center", "left", "right", "block", "auto"],
  flexible: ["adaptiveSm", "adaptiveMd", "adaptiveLg", "adaptiveXl", "adaptive2xl", "containerSm", "containerMd", "containerLg", "containerXl", "container2xl"],
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, $ = {
  ...w,
  buttonSecondaryAttrs: {
    text: !0,
    inverse: !0
  },
  // :default [!] System label / Системная метка
  align: "right",
  paddingByIndent: !0
}, T = /* @__PURE__ */ y({
  name: "D1Actions",
  __name: "D1Actions",
  props: /* @__PURE__ */ x({
    list: {},
    listSecondary: {},
    buttonAttrs: {},
    buttonSecondaryAttrs: {},
    align: {},
    flexible: {},
    wrap: { type: Boolean },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, $),
  emits: ["click", "clickLite"],
  setup(r, { expose: t, emit: i }) {
    const d = i, e = r, s = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-actions": !0,
        [`d1-actions--align--${e.align}`]: h(u.align, e.align),
        [`d1-actions--flexible--${e.flexible}`]: h(u.flexible, e.flexible),
        "d1-actions--wrap": e.wrap,
        [`d1-actions--padding--${e.padding}`]: h(u.padding, e.padding),
        "d1-actions--paddingByIndent": e.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), l = p(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), a = new _(
      "d1.actions",
      e,
      {
        emits: d,
        classes: s,
        styles: l,
        components: {
          button: C
        }
      }
    ), n = a.render();
    return t(a.expose()), (o, m) => (b(), f(S(n)));
  }
});
export {
  T as _
};

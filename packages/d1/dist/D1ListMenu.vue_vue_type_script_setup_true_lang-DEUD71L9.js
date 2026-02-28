import { computed as u, defineComponent as m, openBlock as w, createBlock as f, unref as x, mergeDefaults as v } from "vue";
import { DesignConstructorAbstract as y, inArray as g } from "@dxtmisha/functional";
import { u as b } from "./ListGroupOpen-Bl_HIQoV-DiTsTNMG.js";
import { v as C, D } from "./index-CpH3mZ_W.js";
var M = Object.defineProperty, _ = (t, s, e) => s in t ? M(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e, c = (t, s, e) => _(t, typeof s != "symbol" ? s + "" : s, e);
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
   * @param constructors.ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
   * @param constructors.WindowIncludeConstructor class for working with window/ класс для работы с окном
   */
  constructor(s, e, n, i, r, a, o, l, p) {
    c(this, "open"), c(this, "window"), this.props = s, this.refs = e, this.element = n, this.classDesign = i, this.className = r, this.components = a, this.slots = o, this.emits = l;
    const {
      ListGroupOpenConstructor: d = b,
      WindowIncludeConstructor: h = C
    } = p != null ? p : {};
    this.open = new d(this.props), this.window = new h(
      this.props,
      this.className,
      this.components,
      this.emits,
      u(() => ({
        adaptive: "menu",
        axis: this.props.axis,
        onWindow: this.open.onOpen,
        role: "menu",
        ariaHaspopup: "menu"
      }))
    );
  }
}
const O = {
  autoClose: !0
};
class S extends y {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, e, n, i = B) {
    super(
      s,
      e,
      n
    ), c(this, "item"), this.item = new i(
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
      ...this.item.window.expose
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
      head: this.getSubClass("head"),
      list: this.getSubClass("list")
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
    var s;
    return this.item.window.render(
      {
        control: (e) => this.initSlot("head", void 0, e),
        default: () => this.initSlot("list")
      },
      {
        ...this.getAttrs(),
        open: this.item.open.is.value,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        inert: !1,
        autoTabIndex: !1,
        closeOnEsc: !1
      }
    );
  }
}
const k = {
  // :values [!] System label / Системная метка
  axis: ["x", "y"]
  // :values [!] System label / Системная метка
}, A = {
  ...O
}, E = /* @__PURE__ */ m({
  name: "D1ListMenu",
  __name: "D1ListMenu",
  props: /* @__PURE__ */ v({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    open: { type: Boolean },
    axis: {},
    divider: { type: Boolean }
  }, A),
  emits: ["window"],
  setup(t, { expose: s, emit: e }) {
    const n = e, i = t, r = u(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-listMenu": !0,
        "d1-listMenu--open": i.open,
        [`d1-listMenu--axis--${i.axis}`]: g(k.axis, i.axis),
        "d1-listMenu--divider": i.divider
        // :classes-values [!] System label / Системная метка
      }
    })), a = u(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), o = new S(
      "d1.listMenu",
      i,
      {
        emits: n,
        classes: r,
        styles: a,
        components: {
          window: D
        }
      }
    ), l = o.render();
    return s(o.expose()), (p, d) => (w(), f(x(l)));
  }
});
export {
  E as _
};

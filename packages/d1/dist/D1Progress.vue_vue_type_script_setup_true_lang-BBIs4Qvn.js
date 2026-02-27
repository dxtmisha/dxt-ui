import { computed as a, h as m, ref as B, watch as S, onUnmounted as $, defineComponent as z, openBlock as N, createBlock as P, unref as V, mergeDefaults as k } from "vue";
import { DesignConstructorAbstract as M, toNumber as d, inArray as v } from "@dxtmisha/functional";
import { a as T } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { l as c } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var _ = Object.defineProperty, A = (l, s, r) => s in l ? _(l, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : l[s] = r, t = (l, s, r) => A(l, typeof s != "symbol" ? s + "" : s, r);
class D {
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
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(s, r, h, e, i, n, p, b, y) {
    t(this, "timeout"), t(this, "hide", B(!1)), t(this, "visible", B(!1)), t(this, "text"), t(this, "isProgressbar", a(() => this.isValue())), t(this, "tag", a(() => this.props.circular ? "svg" : "div")), t(this, "value", a(() => {
      var o;
      return d((o = this.props.value) != null ? o : 0);
    })), t(this, "valueInPercent", a(() => {
      if (this.isValue()) {
        const o = this.value.value, u = 100 / this.getMax() * o;
        return this.props.circular ? u.toString() : `${100 - u}%`;
      }
      return null;
    })), t(this, "label", a(() => {
      if (this.props.ariaLabel)
        return this.props.ariaLabel;
      if (!this.isValue() && this.props.visible)
        return this.text.loading.value;
    })), t(this, "role", a(() => this.isValue() ? "progressbar" : "status")), t(this, "classes", a(() => ({
      [`${this.className}--hide`]: this.hide.value,
      [`${this.className}--visible`]: this.visible.value,
      [`${this.className}--value`]: this.isValue()
    }))), t(this, "styles", a(() => ({
      [`--${this.className}-sys-value`]: this.valueInPercent.value
    }))), t(this, "onAnimation", ({ animationName: o }) => {
      o.match("-hidden") && (this.hide.value = !1);
    }), t(this, "switch", () => {
      var o, u;
      const f = this.props.visible;
      if (clearTimeout(this.timeout), this.isValue())
        this.reset();
      else if (!!this.visible.value !== f) {
        const w = d((o = this.props.delay) != null ? o : 0), C = d((u = this.props.delayHide) != null ? u : 0);
        f && w ? this.timeout = setTimeout(() => this.update(), w) : !f && C ? this.timeout = setTimeout(() => this.update(), C) : this.update();
      }
    }), this.props = s, this.refs = r, this.element = h, this.classDesign = e, this.className = i, this.components = n, this.slots = p, this.emits = b;
    const {
      TextIncludeConstructor: x = T
    } = y != null ? y : {};
    this.text = new x(this.props), S(
      [r.visible],
      this.switch,
      { immediate: !0 }
    ), $(() => {
      clearTimeout(this.timeout);
    });
  }
  /**
   * Checks if there are any values.
   *
   * Проверяет, есть ли значения.
   */
  isValue() {
    return this.value.value > 0;
  }
  /**
   * Returns the maximum allowable value.
   *
   * Возвращает максимально допустимое значение.
   */
  getMax() {
    var s;
    return d((s = this.props.max) != null ? s : 100);
  }
  /**
   * Updates dependent data when the visible property changes.
   *
   * Обновляет зависимые данные при изменении свойства visible.
   */
  update() {
    return this.hide.value = !this.props.visible, this.visible.value = !!this.props.visible, this;
  }
  /**
   * Resets values to their initial state.
   *
   * Сбрасывает значения до начального положения.
   */
  reset() {
    return this.hide.value = !1, this.visible.value = !1, this;
  }
}
const I = {
  max: 100,
  delay: 360,
  delayHide: 200,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
};
class L extends M {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor progress item class/ класс элемента progress
   */
  constructor(s, r, h, e = D) {
    super(
      s,
      r,
      h
    ), t(this, "item"), t(this, "renderCircle", () => {
      var i, n;
      return this.props.circular ? [
        m("circle", {
          class: (i = this.classes) == null ? void 0 : i.value.circleSub,
          cx: "24",
          cy: "24",
          r: "20",
          ...c.hidden()
        }),
        m("circle", {
          class: (n = this.classes) == null ? void 0 : n.value.circle,
          cx: "24",
          cy: "24",
          r: "20",
          ...c.hidden()
        })
      ] : [];
    }), t(this, "renderPoint", () => {
      var i;
      return this.props.linear && this.props.point && (this.props.value || this.props.indeterminate === "type1") ? [m("span", { class: (i = this.classes) == null ? void 0 : i.value.point })] : [];
    }), t(this, "propsMain", a(() => {
      var i, n;
      const p = {
        ...this.getAttrs(),
        class: (i = this.classes) == null ? void 0 : i.value.main,
        style: (n = this.styles) == null ? void 0 : n.value,
        onAnimationend: this.item.onAnimation,
        ...c.role(this.item.role.value),
        ...c.label(this.item.label.value)
      };
      return this.props.circular && (p.viewBox = "0 0 48 48"), this.props.value ? {
        ...p,
        ...c.valueMinMax(
          this.props.value,
          0,
          this.props.max
        )
      } : p;
    })), this.item = new e(
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
      circle: this.getSubClass("circle"),
      circleSub: this.getSubClass("circleSub"),
      point: this.getSubClass("point")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return this.item.styles.value;
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    const s = [
      ...this.renderCircle(),
      ...this.renderPoint()
    ];
    return m(
      this.item.tag.value,
      this.propsMain.value,
      s
    );
  }
}
const g = {
  // :values [!] System label / Системная метка
  indeterminate: ["type1", "type2", "type3"],
  position: ["top", "bottom", "static"],
  size: ["sm", "md", "lg"],
  palette: ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "slate", "gray", "zinc", "neutral", "stone", "black", "white"]
  // :values [!] System label / Системная метка
}, H = {
  ...I,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top",
  size: "md"
}, R = /* @__PURE__ */ z({
  name: "D1Progress",
  __name: "D1Progress",
  props: /* @__PURE__ */ k({
    ariaLabel: {},
    textLoading: { type: [String, Function] },
    visible: { type: Boolean },
    value: {},
    max: {},
    linear: { type: Boolean },
    circular: { type: Boolean },
    point: { type: Boolean },
    delay: {},
    delayHide: {},
    indeterminate: {},
    position: {},
    dense: { type: Boolean },
    inverse: { type: Boolean },
    size: {},
    palette: {}
  }, H),
  setup(l, { expose: s, emit: r }) {
    const h = r, e = l, i = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-progress": !0,
        "d1-progress--point": e.point,
        "d1-progress--linear": e.linear && !e.circular,
        "d1-progress--circular": e.circular,
        [`d1-progress--indeterminate--${e.indeterminate}`]: v(g.indeterminate, e.indeterminate),
        [`d1-progress--position--${e.position}`]: v(g.position, e.position),
        "d1-progress--dense": e.dense,
        "d1-progress--inverse": e.inverse,
        [`d1-progress--size--${e.size}`]: v(g.size, e.size),
        [`d1-palette d1-palette--${e.palette}`]: v(g.palette, e.palette)
        // :classes-values [!] System label / Системная метка
      }
    })), n = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), p = new L(
      "d1.progress",
      e,
      {
        emits: h,
        classes: i,
        styles: n
      }
    ), b = p.render();
    return s(p.expose()), (y, x) => (N(), P(V(b)));
  }
});
export {
  R as _
};

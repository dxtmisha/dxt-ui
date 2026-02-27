import { h as u, defineComponent as p, computed as o, openBlock as h, createBlock as v, unref as d, mergeDefaults as f } from "vue";
import { DesignConstructorAbstract as k } from "@dxtmisha/functional";
import { n as g } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { l as a } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var _ = Object.defineProperty, b = (s, e, t) => e in s ? _(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t, x = (s, e, t) => b(s, e + "", t);
const y = {};
class A extends k {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, t, n, i = g) {
    super(
      e,
      t,
      n
    ), x(this, "item"), this.item = new i(
      this.props,
      this.refs,
      this.element,
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
      isActive: this.item.isActive
    };
  }
  /**
   * Improvement of the obtained list of classes.<br>
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
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
   * A method for rendering.<br>
   * Метод для рендеринга.
   */
  initRender() {
    var e;
    const t = [];
    return this.initSlot("default", t, this.item.classes), u("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: (e = this.classes) == null ? void 0 : e.value.main,
      ...a.busy(this.item.isActive.value),
      ...a.live("polite")
    }, t);
  }
}
const D = {
  ...y
}, E = /* @__PURE__ */ p({
  name: "D1Skeleton",
  __name: "D1Skeleton",
  props: /* @__PURE__ */ f({
    active: { type: Boolean }
  }, D),
  setup(s, { expose: e, emit: t }) {
    const n = t, i = s, c = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-skeleton": !0,
        "d1-skeleton--active": i.active
        // :classes-values [!] System label / Системная метка
      }
    })), l = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new A(
      "d1.skeleton",
      i,
      {
        emits: n,
        classes: c,
        styles: l
      }
    ), m = r.render();
    return e(r.expose()), (S, w) => (h(), v(d(m)));
  }
});
export {
  E as _
};

var l = Object.defineProperty;
var m = (i, e, t) => e in i ? l(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => m(i, typeof e != "symbol" ? e + "" : e, t);
import { a } from "./SkeletonInclude-BIUzAO2s.js";
import { S as x } from "./SkeletonInclude-BIUzAO2s.js";
import { h } from "vue";
import { DesignConstructorAbstract as c } from "@dxtmisha/functional";
import { A as n } from "./AriaStaticInclude-C1f8ebHk.js";
const A = {};
class S extends c {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, s, o) {
    super(
      t,
      s,
      o
    );
    r(this, "item");
    this.item = new a(
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
    var s;
    const t = [];
    return this.initSlot("default", t, this.item.classes), h("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: (s = this.classes) == null ? void 0 : s.value.main,
      ...n.busy(this.item.isActive.value),
      ...n.hidden(this.item.isActive.value),
      ...n.live(
        this.item.isActive.value ? "polite" : "off"
      )
    }, t);
  }
}
export {
  a as Skeleton,
  S as SkeletonDesign,
  x as SkeletonInclude,
  A as defaultsSkeleton
};

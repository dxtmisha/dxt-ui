var m = Object.defineProperty;
var a = (s, e, t) => e in s ? m(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => a(s, typeof e != "symbol" ? e + "" : e, t);
import { a as c } from "./SkeletonInclude-BIUzAO2s.js";
import { S as b } from "./SkeletonInclude-BIUzAO2s.js";
import { h } from "vue";
import { DesignConstructorAbstract as u } from "@dxtmisha/functional";
import { A as r } from "./AriaStaticInclude-ZrgMZ2ja.js";
const A = {};
class g extends u {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, i, o, l = c) {
    super(
      t,
      i,
      o
    );
    n(this, "item");
    this.item = new l(
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
    var i;
    const t = [];
    return this.initSlot("default", t, this.item.classes), h("div", {
      ...this.getAttrs(),
      ref: this.element,
      class: (i = this.classes) == null ? void 0 : i.value.main,
      ...r.busy(this.item.isActive.value),
      ...r.live("polite")
    }, t);
  }
}
export {
  c as Skeleton,
  g as SkeletonDesign,
  b as SkeletonInclude,
  A as defaultsSkeleton
};

var p = Object.defineProperty;
var c = (s, i, t) => i in s ? p(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var a = (s, i, t) => c(s, typeof i != "symbol" ? i + "" : i, t);
import { computed as u } from "vue";
import { getExp as n, isFilled as o } from "@dxtmisha/functional";
import { L as m } from "./LabelInclude-D-mLvjK5.js";
class d extends m {
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
  constructor(t, e, h, l, g, r) {
    super(
      t,
      e,
      h,
      l,
      g,
      u(() => this.getLabel()),
      void 0,
      r
    );
    /**
     * Returns a string with highlighted parts.
     * If highlighting is not required, returns the original string.
     *
     * Возвращает строку с выделенными частями.
     * Если выделение не требуется, возвращает исходную строку.
     */
    a(this, "getLabel", () => {
      const t = this.props;
      if (t.highlight && t.highlight.length >= this.getLengthStart() && t.label) {
        const e = `${this.className}__highlight`, h = t.label.toString(), l = n(t.highlight, "i");
        if (h.match(l))
          return h.replace(l, (g) => `<span class="${e}">${g}</span>`);
        if (o(t.value) && t.value.toString().match(l))
          return `<span class="${e}">${h}</span>`;
      }
    });
    this.props = t, this.className = e, this.classesExtra = h, this.slots = l, this.elementsExtra = g, this.skeleton = r;
  }
  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   */
  isHighlight() {
    const t = this.props;
    if (!t.highlight || t.highlight.length < this.getLengthStart())
      return !0;
    if (!(t.highlight && t.highlight.length >= this.getLengthStart() && t.label))
      return !1;
    const e = t.label.toString(), h = n(t.highlight, "i");
    return !!(e.match(h) || o(t.value) && t.value.toString().match(h));
  }
  /**
   * Returns the minimum length of the string to start highlighting.
   *
   * Возвращает минимальную длину строки для начала выделения.
   */
  getLengthStart() {
    var t;
    return (t = this.props.highlightLengthStart) != null ? t : 2;
  }
}
export {
  d as L
};

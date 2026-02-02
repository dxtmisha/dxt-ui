import { computed as a } from "vue";
import { isNumber as l, toNumberByMax as u, GeoRef as m } from "@dxtmisha/functional";
import { L as b } from "./LabelInclude-C9Dk-o4t.js";
class g extends b {
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
  constructor(e, t, r, o, s, i) {
    super(
      e,
      t,
      r,
      o,
      s,
      a(() => this.getNumber()),
      void 0,
      i
    ), this.props = e, this.className = t, this.classesExtra = r, this.slots = o, this.elementsExtra = s, this.skeleton = i;
  }
  /**
   * Returns text with conversion to maximum values.
   *
   * Возвращает текст с преобразованием в максимальные значения.
   */
  getNumber() {
    const e = this.props;
    if (e.label && l(e.label))
      return u(
        e.label,
        e.labelMax,
        e.formatting,
        m.getLanguage().value
      ).toString();
  }
}
export {
  g as L
};

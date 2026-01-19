var n = Object.defineProperty;
var d = (t, s, i) => s in t ? n(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var o = (t, s, i) => d(t, typeof s != "symbol" ? s + "" : s, i);
import { computed as c } from "vue";
import { getElementId as l, isFilled as h, render as a } from "@dxtmisha/functional";
class I {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, i, e, r) {
    /** Unique identifier/ Уникальный идентификатор */
    o(this, "id", l());
    /**
     * Check for the presence of a description
     *
     * Проверка наличия описания
     */
    o(this, "is", c(() => {
      var s;
      return !!(this.props.description || (s = this.slots) != null && s.description);
    }));
    /** Description expose reference/ Ссылка на expose описания */
    o(this, "expose", {
      descriptionId: this.id
    });
    this.props = s, this.className = i, this.slots = e, this.skeleton = r;
  }
  /**
   * Get description ID
   *
   * Получить ID описания
   */
  getId() {
    return this.id;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var i, e, r, p;
    const s = [];
    return h(this.props.description) && s.push(this.props.description), (i = this.slots) != null && i.description && s.push((r = (e = this.slots).description) == null ? void 0 : r.call(e, {})), s.length > 0 ? [
      a(
        "div",
        {
          class: {
            [`${this.className}__description`]: !0,
            ...(p = this.skeleton) == null ? void 0 : p.classes.value
          }
        },
        s,
        "description"
      )
    ] : [];
  }
}
export {
  I as D
};

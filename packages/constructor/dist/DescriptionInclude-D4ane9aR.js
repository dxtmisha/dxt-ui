var c = Object.defineProperty;
var d = (t, s, i) => s in t ? c(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var r = (t, s, i) => d(t, typeof s != "symbol" ? s + "" : s, i);
import { computed as n } from "vue";
import { getElementId as l, isFilled as h, render as a } from "@dxtmisha/functional";
class v {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, i, e, o) {
    /** Check for the presence of a description/ Проверка наличия описания */
    r(this, "is", n(() => {
      var s;
      return !!(this.props.description || (s = this.slots) != null && s.description);
    }));
    /** Unique identifier/ Уникальный идентификатор */
    r(this, "id", n(
      () => {
        var s;
        return ((s = this.props) == null ? void 0 : s.descriptionId) || l();
      }
    ));
    this.props = s, this.className = i, this.slots = e, this.skeleton = o;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var i, e, o, p;
    const s = [];
    return h(this.props.description) && s.push(this.props.description), (i = this.slots) != null && i.description && s.push((o = (e = this.slots).description) == null ? void 0 : o.call(e, {})), s.length > 0 ? [
      a(
        "div",
        {
          id: this.id.value,
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
  v as D
};

import { computed as l } from "vue";
import { getElementId as p, isFilled as d, render as c } from "@dxtmisha/functional";
var u = Object.defineProperty, a = (e, s, t) => s in e ? u(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t, n = (e, s, t) => a(e, typeof s != "symbol" ? s + "" : s, t);
class m {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, t, r, o) {
    n(this, "is", l(() => {
      var i;
      return !!(this.props.description || (i = this.slots) != null && i.description);
    })), n(this, "id", l(
      () => {
        var i;
        return ((i = this.props) == null ? void 0 : i.descriptionId) || p();
      }
    )), this.props = s, this.className = t, this.slots = r, this.skeleton = o;
  }
  /**
   * Render the description
   *
   * Рендер описания
   */
  render() {
    var s, t, r, o;
    const i = [];
    return d(this.props.description) && i.push(this.props.description), (s = this.slots) != null && s.description && i.push((r = (t = this.slots).description) == null ? void 0 : r.call(t, {})), i.length > 0 ? [
      c(
        "div",
        {
          id: this.id.value,
          class: {
            [`${this.className}__description`]: !0,
            ...(o = this.skeleton) == null ? void 0 : o.classes.value
          }
        },
        i,
        "description"
      )
    ] : [];
  }
}
export {
  m as v
};

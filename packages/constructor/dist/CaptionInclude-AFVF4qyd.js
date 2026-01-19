var a = Object.defineProperty;
var r = (i, s, t) => s in i ? a(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t;
var n = (i, s, t) => r(i, typeof s != "symbol" ? s + "" : s, t);
import { computed as c } from "vue";
import { isFilled as l, render as h } from "@dxtmisha/functional";
class f {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, t, o, e) {
    /**
     * Returns true if caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    n(this, "is", c(() => {
      var s;
      return !!(this.props.caption || (s = this.slots) != null && s.caption);
    }));
    this.props = s, this.className = t, this.slots = o, this.skeleton = e;
  }
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    var t, o, e, p;
    const s = [];
    return l(this.props.caption) && s.push(this.props.caption), (t = this.slots) != null && t.caption && s.push((e = (o = this.slots).caption) == null ? void 0 : e.call(o, {})), s.length > 0 ? [
      h(
        "div",
        {
          class: {
            [`${this.className}__caption`]: !0,
            ...(p = this.skeleton) == null ? void 0 : p.classes.value
          },
          "data-event-type": "caption"
        },
        s,
        "caption"
      )
    ] : [];
  }
}
export {
  f as C
};

import { computed as n } from "vue";
import { isFilled as c, render as u } from "@dxtmisha/functional";
import { l as a } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var h = Object.defineProperty, v = (e, t, s) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, p = (e, t, s) => v(e, typeof t != "symbol" ? t + "" : t, s);
class f {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, s, r, i) {
    p(this, "is", n(() => {
      var o;
      return !!(this.props.caption || (o = this.slots) != null && o.caption);
    })), p(this, "binds", n(() => {
      var o;
      const l = {
        class: {
          [`${this.className}__caption`]: !0,
          ...(o = this.skeleton) == null ? void 0 : o.classes.value
        },
        "data-event-type": "caption"
      };
      return this.props.captionDecorative ? {
        ...l,
        ...a.hidden()
      } : {
        ...l,
        ...a.live("polite"),
        ...a.atomic(!0)
      };
    })), this.props = t, this.className = s, this.slots = r, this.skeleton = i;
  }
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    var t, s, r;
    const i = [];
    return c(this.props.caption) && i.push(this.props.caption), (t = this.slots) != null && t.caption && i.push((r = (s = this.slots).caption) == null ? void 0 : r.call(s, {})), i.length > 0 ? [
      u(
        "div",
        this.binds.value,
        i,
        "caption"
      )
    ] : [];
  }
}
export {
  f as v
};

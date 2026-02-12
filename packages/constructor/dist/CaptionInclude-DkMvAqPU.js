var a = Object.defineProperty;
var c = (i, t, s) => t in i ? a(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var n = (i, t, s) => c(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as p } from "vue";
import { isFilled as l, render as h } from "@dxtmisha/functional";
import { A as r } from "./AriaStaticInclude-ZrgMZ2ja.js";
class v {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(t, s, o, e) {
    /**
     * Returns true if the caption is filled
     *
     * Возвращает true, если caption заполнен
     */
    n(this, "is", p(() => {
      var t;
      return !!(this.props.caption || (t = this.slots) != null && t.caption);
    }));
    /**
     * Returns bindings for the caption element.
     *
     * Возвращает привязки для элемента подписи.
     */
    n(this, "binds", p(() => {
      var s;
      const t = {
        class: {
          [`${this.className}__caption`]: !0,
          ...(s = this.skeleton) == null ? void 0 : s.classes.value
        },
        "data-event-type": "caption"
      };
      return this.props.captionDecorative ? {
        ...t,
        ...r.hidden()
      } : {
        ...t,
        ...r.live("polite"),
        ...r.atomic(!0)
      };
    }));
    this.props = t, this.className = s, this.slots = o, this.skeleton = e;
  }
  /**
   * Renders caption element with content from props or slots.
   *
   * Отображает элемент caption с содержимым из props или slots.
   */
  render() {
    var s, o, e;
    const t = [];
    return l(this.props.caption) && t.push(this.props.caption), (s = this.slots) != null && s.caption && t.push((e = (o = this.slots).caption) == null ? void 0 : e.call(o, {})), t.length > 0 ? [
      h(
        "div",
        this.binds.value,
        t,
        "caption"
      )
    ] : [];
  }
}
export {
  v as C
};

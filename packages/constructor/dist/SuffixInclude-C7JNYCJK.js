var u = Object.defineProperty;
var n = (r, s, i) => s in r ? u(r, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[s] = i;
var o = (r, s, i) => n(r, typeof s != "symbol" ? s + "" : s, i);
import { computed as p } from "vue";
import { isFilled as l, render as h } from "@dxtmisha/functional";
class d {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, i, t, e) {
    /**
     * Returns true if prefix is filled
     *
     * Возвращает true, если prefix заполнен
     */
    o(this, "is", p(() => {
      var s;
      return !!(this.props.prefix || (s = this.slots) != null && s.prefix);
    }));
    this.props = s, this.className = i, this.slots = t, this.skeleton = e;
  }
  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   */
  render() {
    var i, t, e, f;
    const s = [];
    return l(this.props.prefix) && s.push(this.props.prefix), (i = this.slots) != null && i.prefix && s.push((e = (t = this.slots).prefix) == null ? void 0 : e.call(t, {})), s.length > 0 ? [
      h(
        "div",
        {
          class: {
            [`${this.className}__prefix`]: !0,
            ...(f = this.skeleton) == null ? void 0 : f.classes.value
          },
          "data-event-type": "prefix"
        },
        s,
        "prefix"
      )
    ] : [];
  }
}
class m {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, i, t, e) {
    /**
     * Returns true if suffix is filled
     *
     * Возвращает true, если suffix заполнен
     */
    o(this, "is", p(() => {
      var s;
      return !!(this.props.suffix || (s = this.slots) != null && s.suffix);
    }));
    this.props = s, this.className = i, this.slots = t, this.skeleton = e;
  }
  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   */
  render() {
    var i, t, e, f;
    const s = [];
    return l(this.props.suffix) && s.push(this.props.suffix), (i = this.slots) != null && i.suffix && s.push((e = (t = this.slots).suffix) == null ? void 0 : e.call(t, {})), s.length > 0 ? [
      h(
        "div",
        {
          class: {
            [`${this.className}__suffix`]: !0,
            ...(f = this.skeleton) == null ? void 0 : f.classes.value
          },
          "data-event-type": "suffix"
        },
        s,
        "suffix"
      )
    ] : [];
  }
}
export {
  d as P,
  m as S
};

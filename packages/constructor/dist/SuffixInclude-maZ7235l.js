var n = Object.defineProperty;
var a = (r, s, i) => s in r ? n(r, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[s] = i;
var f = (r, s, i) => a(r, typeof s != "symbol" ? s + "" : s, i);
import { computed as p } from "vue";
import { getElementId as l, isFilled as o, render as u } from "@dxtmisha/functional";
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
     * Returns true if the prefix is filled
     *
     * Возвращает true, если prefix заполнен
     */
    f(this, "is", p(() => {
      var s;
      return !!(this.props.prefix || (s = this.slots) != null && s.prefix);
    }));
    /** Unique identifier/ Уникальный идентификатор */
    f(this, "id", p(
      () => this.props.prefixId || l()
    ));
    /**
     * Returns the identifier if the element exists.
     *
     * Возвращает идентификатор, если элемент существует.
     */
    f(this, "describedby", p(() => {
      var s;
      return o(this.props.prefix) || (s = this.slots) != null && s.prefix ? this.id.value : "";
    }));
    this.props = s, this.className = i, this.slots = t, this.skeleton = e;
  }
  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   */
  render() {
    var i, t, e, h;
    const s = [];
    return o(this.props.prefix) && s.push(this.props.prefix), (i = this.slots) != null && i.prefix && s.push((e = (t = this.slots).prefix) == null ? void 0 : e.call(t, {})), s.length > 0 ? [
      u(
        "div",
        {
          id: this.id.value,
          class: {
            [`${this.className}__prefix`]: !0,
            ...(h = this.skeleton) == null ? void 0 : h.classes.value
          },
          "data-event-type": "prefix"
        },
        s,
        "prefix"
      )
    ] : [];
  }
}
class v {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(s, i, t, e) {
    /**
     * Returns true if the suffix is filled
     *
     * Возвращает true, если suffix заполнен
     */
    f(this, "is", p(() => {
      var s;
      return !!(this.props.suffix || (s = this.slots) != null && s.suffix);
    }));
    /** Unique identifier/ Уникальный идентификатор */
    f(this, "id", p(
      () => this.props.suffixId || l()
    ));
    /**
     * Returns the identifier if the element exists.
     *
     * Возвращает идентификатор, если элемент существует.
     */
    f(this, "describedby", p(() => {
      var s;
      return o(this.props.suffix) || (s = this.slots) != null && s.suffix ? this.id.value : "";
    }));
    this.props = s, this.className = i, this.slots = t, this.skeleton = e;
  }
  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   */
  render() {
    var i, t, e, h;
    const s = [];
    return o(this.props.suffix) && s.push(this.props.suffix), (i = this.slots) != null && i.suffix && s.push((e = (t = this.slots).suffix) == null ? void 0 : e.call(t, {})), s.length > 0 ? [
      u(
        "div",
        {
          id: this.id.value,
          class: {
            [`${this.className}__suffix`]: !0,
            ...(h = this.skeleton) == null ? void 0 : h.classes.value
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
  m as P,
  v as S
};

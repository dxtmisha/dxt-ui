import { computed as u } from "vue";
import { getElementId as o, isFilled as p, render as f } from "@dxtmisha/functional";
var a = Object.defineProperty, n = (l, i, t) => i in l ? a(l, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[i] = t, h = (l, i, t) => n(l, typeof i != "symbol" ? i + "" : i, t);
class x {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(i, t, e, r) {
    h(this, "is", u(() => {
      var s;
      return !!(this.props.prefix || (s = this.slots) != null && s.prefix);
    })), h(this, "id", u(
      () => this.props.prefixId || o()
    )), h(this, "describedby", u(() => {
      var s;
      return p(this.props.prefix) || (s = this.slots) != null && s.prefix ? this.id.value : "";
    })), this.props = i, this.className = t, this.slots = e, this.skeleton = r;
  }
  /**
   * Renders prefix element with content from props or slots.
   *
   * Отображает элемент prefix с содержимым из props или slots.
   */
  render() {
    var i, t, e, r;
    const s = [];
    return p(this.props.prefix) && s.push(this.props.prefix), (i = this.slots) != null && i.prefix && s.push((e = (t = this.slots).prefix) == null ? void 0 : e.call(t, {})), s.length > 0 ? [
      f(
        "div",
        {
          id: this.id.value,
          class: {
            [`${this.className}__prefix`]: !0,
            ...(r = this.skeleton) == null ? void 0 : r.classes.value
          },
          "data-event-type": "prefix"
        },
        s,
        "prefix"
      )
    ] : [];
  }
}
class c {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param slots object for working with slots/ объект для работы со слотами
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   */
  constructor(i, t, e, r) {
    h(this, "is", u(() => {
      var s;
      return !!(this.props.suffix || (s = this.slots) != null && s.suffix);
    })), h(this, "id", u(
      () => this.props.suffixId || o()
    )), h(this, "describedby", u(() => {
      var s;
      return p(this.props.suffix) || (s = this.slots) != null && s.suffix ? this.id.value : "";
    })), this.props = i, this.className = t, this.slots = e, this.skeleton = r;
  }
  /**
   * Renders suffix element with content from props or slots.
   *
   * Отображает элемент suffix с содержимым из props или slots.
   */
  render() {
    var i, t, e, r;
    const s = [];
    return p(this.props.suffix) && s.push(this.props.suffix), (i = this.slots) != null && i.suffix && s.push((e = (t = this.slots).suffix) == null ? void 0 : e.call(t, {})), s.length > 0 ? [
      f(
        "div",
        {
          id: this.id.value,
          class: {
            [`${this.className}__suffix`]: !0,
            ...(r = this.skeleton) == null ? void 0 : r.classes.value
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
  x as m,
  c as v
};

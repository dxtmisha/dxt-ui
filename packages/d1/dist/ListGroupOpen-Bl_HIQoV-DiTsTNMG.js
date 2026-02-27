import { ref as i, computed as p } from "vue";
var o = Object.defineProperty, n = (r, e, t) => e in r ? o(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, s = (r, e, t) => n(r, typeof e != "symbol" ? e + "" : e, t);
class u {
  /**
   * Constructor initializes the ListGroupOpen with component props.
   *
   * Конструктор инициализирует ListGroupOpen с пропсами компонента.
   * @param props - ListGroup component properties / свойства компонента ListGroup
   */
  constructor(e) {
    s(this, "open", i(!1)), s(this, "is", p(
      () => this.open.value || !!this.props.open
    )), s(this, "onOpen", ({ open: t }) => {
      this.open.value !== t && (this.open.value = t);
    }), this.props = e;
  }
}
export {
  u
};

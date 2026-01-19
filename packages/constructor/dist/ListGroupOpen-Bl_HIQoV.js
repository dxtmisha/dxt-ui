var t = Object.defineProperty;
var i = (e, o, p) => o in e ? t(e, o, { enumerable: !0, configurable: !0, writable: !0, value: p }) : e[o] = p;
var s = (e, o, p) => i(e, typeof o != "symbol" ? o + "" : o, p);
import { ref as n, computed as r } from "vue";
class u {
  /**
   * Constructor initializes the ListGroupOpen with component props.
   *
   * Конструктор инициализирует ListGroupOpen с пропсами компонента.
   * @param props - ListGroup component properties / свойства компонента ListGroup
   */
  constructor(o) {
    /**
     * Internal reactive state for group open/close status.
     * This state is independent from props and can be controlled programmatically.
     *
     * Внутреннее реактивное состояние для статуса открытия/закрытия группы.
     * Это состояние независимо от пропсов и может контролироваться программно.
     */
    s(this, "open", n(!1));
    /**
     * Returns information about the opening status.
     *
     * Возвращает информацию о статусе открытия.
     */
    s(this, "is", r(
      () => this.open.value || !!this.props.open
    ));
    /**
     * Events for opening the element.
     *
     * События для открытия элемента.
     * @param options event parameters/ параметры события
     */
    s(this, "onOpen", ({ open: o }) => {
      this.open.value !== o && (this.open.value = o);
    });
    this.props = o;
  }
}
export {
  u as L
};

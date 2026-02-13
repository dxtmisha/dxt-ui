var s = Object.defineProperty;
var r = (t, e, l) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var o = (t, e, l) => r(t, typeof e != "symbol" ? e + "" : e, l);
import { computed as n } from "vue";
class u {
  /**
   * Constructor
   * @param element element/ элемент
   */
  constructor(e) {
    /**
     * Returns bindings for the element.
     *
     * Возвращает привязки для элемента.
     */
    o(this, "binds", n(() => ({
      onWheelPassive: this.onScrollToX
    })));
    /**
     * Handler for the wheel event.
     *
     * Обработчик события колеса мыши.
     * @param event wheel event/ событие колеса мыши
     */
    o(this, "onScrollToX", (e) => {
      this.element.value && e.deltaY !== 0 && this.isNotScrollSnap() && (e.preventDefault(), this.element.value.scrollLeft += Number(e.deltaY));
    });
    this.element = e;
  }
  /**
   * Checks if scroll snap is not enabled.
   *
   * Проверяет, не включена ли привязка прокрутки.
   */
  isNotScrollSnap() {
    return this.element.value ? getComputedStyle(this.element.value).scrollSnapType !== "x mandatory" : !0;
  }
}
export {
  u as S
};

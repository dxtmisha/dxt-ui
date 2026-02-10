var l = Object.defineProperty;
var m = (s, t, e) => t in s ? l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => m(s, typeof t != "symbol" ? t + "" : t, e);
import { onUnmounted as f } from "vue";
import { isDomRuntime as o, isFunction as h, getRef as u, EventItem as c } from "@dxtmisha/functional";
class v {
  /**
   * Constructor
   * @param element - Reference to the element/ Ссылка на элемент
   * @param active - Return focus to the previous element/ Возвращать фокус на предыдущий элемент
   */
  constructor(t, e = () => !0) {
    /** Previously focused element/ Ранее сфокусированный элемент */
    r(this, "oldElement");
    /** Event item for focus events/ Элемент события для событий фокуса */
    r(this, "event");
    /**
     * Event listener for keyboard events.
     *
     * Слушатель событий для событий клавиатуры.
     * @param event Keyboard event/ Событие клавиатуры
     */
    r(this, "listenEvent", (t) => {
      var i, n;
      if (!this.isTab(t))
        return;
      const e = document.activeElement;
      e && (this.isShift(t) ? e === this.findFirstElement() && ((i = this.findLastElement()) == null || i.focus(), t.preventDefault()) : e === this.findLastElement() && ((n = this.findFirstElement()) == null || n.focus(), t.preventDefault()));
    });
    this.element = t, this.active = e, f(() => {
      this.stopEvent(), this.event = void 0;
    });
  }
  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo() {
    return this.isElement() && this.active() && o() && (this.toFocus(), this.startEvent()), this;
  }
  /**
   * Reset focus to the previously focused element.
   *
   * Сбрасывает фокус на ранее сфокусированный элемент.
   */
  reset() {
    return this.active() && (this.oldElement && "focus" in this.oldElement && this.oldElement.focus(), this.stopEvent()), this;
  }
  /**
   * Toggle focus based on status.
   *
   * Переключает фокус в зависимости от статуса.
   * @param status Focus status/ Статус фокуса
   */
  toggle(t) {
    return t ? this.goTo() : this.reset(), this;
  }
  /**
   * Save the currently focused element.
   *
   * Сохраняет текущий сфокусированный элемент.
   */
  updateOldElement() {
    var t, e;
    if (o()) {
      const i = (e = (t = document.activeElement) == null ? void 0 : t.shadowRoot) == null ? void 0 : e.activeElement;
      this.oldElement = i != null ? i : document.activeElement;
    }
  }
  /**
   * Check if the element is defined.
   *
   * Проверяет, определен ли элемент.
   */
  isElement() {
    return this.getElement() !== void 0;
  }
  /**
   * Check if the event is a Tab key event.
   *
   * Проверяет, является ли событие событием клавиши Tab.
   * @param event Keyboard event/ Событие клавиатуры
   */
  isTab(t) {
    return t.key === "Tab" || t.code === "Tab" || t.keyCode === 9;
  }
  /**
   * Check if the Shift key is pressed.
   *
   * Проверяет, нажата ли клавиша Shift.
   * @param event Keyboard event/ Событие клавиатуры
   */
  isShift(t) {
    return t.shiftKey;
  }
  /**
   * Get the element.
   *
   * Получает элемент.
   */
  getElement() {
    return h(this.element) ? this.element() : u(this.element);
  }
  /**
   * Find the first focusable element.
   *
   * Находит первый фокусируемый элемент.
   */
  findFirstElement() {
    var e;
    const t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
    if (t) {
      for (const i of t)
        if ("tabIndex" in i && i.tabIndex >= 0)
          return i;
    }
  }
  /**
   * Find the last focusable element.
   *
   * Находит последний фокусируемый элемент.
   */
  findLastElement() {
    var e;
    const t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
    if (t)
      for (let i = t.length - 1; i >= 0; i--) {
        const n = t[i];
        if (n && "tabIndex" in n && n.tabIndex >= 0)
          return n;
      }
  }
  /**
   * Set focus with temporary tab index modification.
   *
   * Устанавливает фокус с временным изменением табиндекса.
   */
  toFocus() {
    const t = this.findFirstElement();
    if (t)
      return t.focus(), this;
    const e = this.getElement();
    return e && (e.setAttribute("tabindex", "-1"), e.focus(), requestAnimationFrame(() => {
      e.removeAttribute("tabindex");
    })), this;
  }
  /**
   * Start the event listener.
   *
   * Запускает слушатель событий.
   */
  startEvent() {
    if (this.event) {
      this.event.start();
      return;
    }
    this.event = new c(
      document.body,
      "keydown",
      this.listenEvent
    ).start();
  }
  /**
   * Stop the event listener.
   *
   * Останавливает слушатель событий.
   */
  stopEvent() {
    this.event && this.event.stop();
  }
}
export {
  v as T
};

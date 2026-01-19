var l = Object.defineProperty;
var m = (s, t, e) => t in s ? l(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => m(s, typeof t != "symbol" ? t + "" : t, e);
import { onUnmounted as h } from "vue";
import { isDomRuntime as r, isFunction as f, getRef as u, EventItem as d } from "@dxtmisha/functional";
class v {
  /**
   * Сonstructor
   * @param element - Reference to the element/ Ссылка на элемент
   */
  constructor(t) {
    /** Previously focused element/ Ранее сфокусированный элемент */
    o(this, "oldElement");
    /** Event item for focus events/ Элемент события для событий фокуса */
    o(this, "event");
    /**
     * Event listener for keyboard events.
     *
     * Слушатель событий для событий клавиатуры.
     * @param event Keyboard event/ Событие клавиатуры
     */
    o(this, "listenEvent", (t) => {
      var n, i;
      if (!this.isTab(t))
        return;
      const e = document.activeElement;
      e && (this.isShift(t) ? e === this.findFirstElement() && ((n = this.findLastElement()) == null || n.focus(), t.preventDefault()) : e === this.findLastElement() && ((i = this.findFirstElement()) == null || i.focus(), t.preventDefault()));
    });
    this.element = t, h(() => {
      this.stopEvent(), this.event = void 0;
    });
  }
  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo() {
    return this.isElement() && r() && (this.updateOldElement(), this.toFocus(), this.startEvent()), this;
  }
  /**
   * Reset focus to the previously focused element.
   *
   * Сбрасывает фокус на ранее сфокусированный элемент.
   */
  reset() {
    return this.oldElement && "focus" in this.oldElement && this.oldElement.focus(), this.stopEvent(), this;
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
    return f(this.element) ? this.element() : u(this.element);
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
      for (const n of t)
        if ("tabIndex" in n && n.tabIndex >= 0)
          return n;
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
      for (let n = t.length - 1; n >= 0; n--) {
        const i = t[n];
        if (i && "tabIndex" in i && i.tabIndex >= 0)
          return i;
      }
  }
  /**
   * Set focus with temporary tab index modification.
   *
   * Устанавливает фокус с временным изменением табиндекса.
   */
  toFocus() {
    const t = this.getElement();
    return t && (t.setAttribute("tabindex", "-1"), t.focus(), requestAnimationFrame(() => {
      t.removeAttribute("tabindex");
    })), this;
  }
  /**
   * Save the currently focused element.
   *
   * Сохраняет текущий сфокусированный элемент.
   */
  updateOldElement() {
    r() && (this.oldElement = document.activeElement);
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
    this.event = new d(
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

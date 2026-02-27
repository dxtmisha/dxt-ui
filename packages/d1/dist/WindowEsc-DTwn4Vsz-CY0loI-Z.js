import { onUnmounted as d, watch as f } from "vue";
import { isDomRuntime as h, isFunction as E, getRef as c, EventItem as m, executeFunction as p } from "@dxtmisha/functional";
var b = Object.defineProperty, y = (n, t, e) => t in n ? b(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, l = (n, t, e) => y(n, typeof t != "symbol" ? t + "" : t, e);
class x {
  /**
   * Constructor
   * @param element - Reference to the element/ Ссылка на элемент
   * @param active - Return focus to the previous element/ Возвращать фокус на предыдущий элемент
   * @param activeOpen - Is active when opening/ Активен при открытии
   * @param activeClose - Is active when closing/ Активен при закрытии
   */
  constructor(t, e = () => !0, i = () => !0, s = () => !0) {
    l(this, "oldElement"), l(this, "event"), l(this, "listenEvent", (r) => {
      var a, u;
      if (!this.isTab(r))
        return;
      const o = document.activeElement;
      o && (this.isShift(r) ? o === this.findFirstElement() && ((a = this.findLastElement()) == null || a.focus(), r.preventDefault()) : o === this.findLastElement() && ((u = this.findFirstElement()) == null || u.focus(), r.preventDefault()));
    }), this.element = t, this.active = e, this.activeOpen = i, this.activeClose = s, d(() => {
      this.stopEvent(), this.event = void 0;
    });
  }
  /**
   * Set focus to the element.
   *
   * Устанавливает фокус на элемент.
   */
  goTo() {
    return this.isElement() && this.active() && this.activeOpen() && h() && (this.toFocus(), this.startEvent()), this;
  }
  /**
   * Reset focus to the previously focused element.
   *
   * Сбрасывает фокус на ранее сфокусированный элемент.
   */
  reset() {
    return this.active() && this.activeClose() && (this.oldElement && "focus" in this.oldElement && this.oldElement.focus(), this.stopEvent()), this;
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
    if (h()) {
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
    return E(this.element) ? this.element() : c(this.element);
  }
  /**
   * Find the first focusable element.
   *
   * Находит первый фокусируемый элемент.
   */
  findFirstElement() {
    var t;
    const e = (t = this.getElement()) == null ? void 0 : t.querySelectorAll("*");
    if (e) {
      for (const i of e)
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
    var t;
    const e = (t = this.getElement()) == null ? void 0 : t.querySelectorAll("*");
    if (e)
      for (let i = e.length - 1; i >= 0; i--) {
        const s = e[i];
        if (s && "tabIndex" in s && s.tabIndex >= 0)
          return s;
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
    this.event = new m(
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
var g = Object.defineProperty, k = (n, t, e) => t in n ? g(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, v = (n, t, e) => k(n, typeof t != "symbol" ? t + "" : t, e);
class T {
  /**
   * Constructor
   * @param open Reference to the open state/ Ссылка на состояние открытия
   * @param on Optional callback function when Escape is pressed/ Необязательная функция обратного вызова при нажатии Escape
   * @param active Reference to the active state/ Ссылка на состояние активности
   */
  constructor(t, e, i = !0) {
    v(this, "event"), v(this, "listener", (s) => {
      this.isEsc(s) && (s.preventDefault(), s.stopPropagation(), this.on ? this.on() : this.open.value = !1, this.stop());
    }), this.open = t, this.on = e, this.active = i, f(
      t,
      (s) => {
        p(c(this.active)) && (s ? this.start() : this.stop());
      }
    );
  }
  /**
   * Start listening for the Escape key press.
   *
   * Начать прослушивание нажатия клавиши Escape.
   */
  start() {
    var t;
    return this.make(), (t = this.event) == null || t.start(), this;
  }
  /**
   * Stop listening for the Escape key press.
   *
   * Остановить прослушивание нажатия клавиши Escape.
   */
  stop() {
    return this.event && (this.event.stop(), this.event = void 0), this;
  }
  /**
   * Check if the pressed key is Escape.
   *
   * Проверяет, является ли нажатая клавиша Escape.
   * @param event Keyboard event/ Событие клавиатуры
   */
  isEsc(t) {
    return t.key === "Escape" || t.key === "Esc" || t.code === "Escape" || t.code === "Esc" || t.keyCode === 27;
  }
  /**
   * Create and initialize the event handler.
   *
   * Создать и инициализировать обработчик событий.
   */
  make() {
    h() && !this.event && (this.event = new m(
      document.body,
      "keydown",
      this.listener
    ));
  }
}
export {
  T as E,
  x as v
};

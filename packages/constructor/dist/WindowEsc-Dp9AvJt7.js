var n = Object.defineProperty;
var r = (s, t, e) => t in s ? n(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => r(s, typeof t != "symbol" ? t + "" : t, e);
import { watch as c } from "vue";
import { executeFunction as a, getRef as p, isDomRuntime as f, EventItem as u } from "@dxtmisha/functional";
class E {
  /**
   * Constructor
   * @param open Reference to the open state/ Ссылка на состояние открытия
   * @param on Optional callback function when Escape is pressed/ Необязательная функция обратного вызова при нажатии Escape
   * @param active Reference to the active state/ Ссылка на состояние активности
   */
  constructor(t, e, o = !0) {
    /** Event handler instance/ Экземпляр обработчика событий */
    i(this, "event");
    /**
     * Event listener for keyboard events.
     *
     * Обработчик событий клавиатуры.
     */
    i(this, "listener", (t) => {
      this.isEsc(t) && (t.preventDefault(), t.stopPropagation(), this.on ? this.on() : this.open.value = !1, this.stop());
    });
    this.open = t, this.on = e, this.active = o, c(
      t,
      (h) => {
        a(p(this.active)) && (h ? this.start() : this.stop());
      }
    );
  }
  /**
   * Start listening for Escape key press.
   *
   * Начать прослушивание нажатия клавиши Escape.
   */
  start() {
    var t;
    return this.make(), (t = this.event) == null || t.start(), this;
  }
  /**
   * Stop listening for Escape key press.
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
    f() && !this.event && (this.event = new u(
      document.body,
      "keydown",
      this.listener
    ));
  }
}
export {
  E as W
};

var v = Object.defineProperty;
var n = (r, e, t) => e in r ? v(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var h = (r, e, t) => n(r, typeof e != "symbol" ? e + "" : e, t);
import { ref as a } from "vue";
import { executePromise as l } from "@dxtmisha/functional";
const c = 80;
class M {
  /**
   * Constructor
   * @param start callback on touch/mouse start/ колбэк при начале касания/клика
   * @param move callback on touch/mouse move/ колбэк при движении
   * @param end callback on touch/mouse end/ колбэк при завершении
   * @param element optional element reference/ необязательная ссылка на элемент
   */
  constructor(e, t, o, s) {
    /**
     * Current touch point
     *
     * Текущая точка касания
     */
    h(this, "touche", a());
    /**
     * Touchpoint during move
     *
     * Точка касания во время движения
     */
    h(this, "toucheMove", a());
    /**
     * Current mouse position
     *
     * Текущая позиция мыши
     */
    h(this, "mouse", a());
    /**
     * Mouse position during move
     *
     * Позиция мыши во время движения
     */
    h(this, "mouseMove", a());
    /**
     * Touch event handlers
     *
     * Обработчики событий касания
     */
    h(this, "onTouch", {
      onTouchstart: (e) => {
        var t, o, s, u, i;
        this.touche.value = (t = e.targetTouches) == null ? void 0 : t[0], this.mouse.value = {
          x: (s = (o = this.touche.value) == null ? void 0 : o.clientX) != null ? s : 0,
          y: (i = (u = this.touche.value) == null ? void 0 : u.clientY) != null ? i : 0
        }, this.update(e.target);
      },
      onTouchend: (e) => this.reset(e.target),
      onTouchcancel: (e) => this.reset(e.target),
      onTouchmove: (e) => {
        var t, o, s, u, i;
        this.toucheMove.value = (t = e.targetTouches) == null ? void 0 : t[0], this.mouseMove.value = {
          x: (s = (o = this.toucheMove.value) == null ? void 0 : o.clientX) != null ? s : 0,
          y: (i = (u = this.toucheMove.value) == null ? void 0 : u.clientY) != null ? i : 0
        }, this.updateMove(e.target);
      }
    });
    /**
     * Mouse event handlers
     *
     * Обработчики событий мыши
     */
    h(this, "onMouse", {
      onMousedown: (e) => {
        this.mouse.value = {
          x: e.clientX,
          y: e.clientY
        }, this.update(e.target);
      },
      onMouseup: (e) => this.reset(e.target),
      onMousemove: (e) => {
        this.mouseMove.value = {
          x: e.clientX,
          y: e.clientY
        }, this.updateMove(e.target);
      }
    });
    this.start = e, this.move = t, this.end = o, this.element = s;
  }
  /**
   * Gets the target element for touch events.
   *
   * Получает целевой элемент для событий касания.
   * @param target event target element/ целевой элемент события
   */
  getElement(e) {
    var t, o;
    return (o = (t = this.element) == null ? void 0 : t.value) != null ? o : e.closest("[data-touch]");
  }
  /**
   * Determines horizontal direction type from client X coordinate.
   *
   * Определяет тип горизонтального направления из координаты X.
   * @param clientX horizontal coordinate/ горизонтальная координата
   */
  getTypeX(e) {
    return e >= c ? "right" : e < -c ? "left" : "none";
  }
  /**
   * Determines vertical direction type from client Y coordinate.
   *
   * Определяет тип вертикального направления из координаты Y.
   * @param clientY vertical coordinate/ вертикальная координата
   */
  getTypeY(e) {
    return e >= c ? "bottom" : e < -c ? "top" : "none";
  }
  /**
   * Executes callback with calculated movement data.
   *
   * Выполняет колбэк с рассчитанными данными движения.
   * @param callback callback function/ функция обратного вызова
   */
  async callback(e) {
    const t = this.mouse.value, o = this.mouseMove.value;
    if (t && o) {
      const s = o.x - t.x, u = o.y - t.y;
      if (!e || await l(e(
        this.getTypeX(s),
        this.getTypeY(u),
        s,
        u,
        t,
        o,
        this.touche.value,
        this.toucheMove.value
      )))
        return {
          x: s,
          y: u
        };
    }
  }
  /**
   * Resets touch/mouse state and CSS properties after interaction ends.
   *
   * Сбрасывает состояние касания/мыши и CSS свойства после завершения взаимодействия.
   * @param target selected item/ выбранный элемент
   */
  reset(e) {
    const t = this.getElement(e);
    this.callback(this.end).then((o) => {
      t && (o ? this.resetData(t) : setTimeout(() => this.resetData(t), 400));
    });
  }
  /**
   * Resets all touch/mouse state and removes CSS custom properties.
   *
   * Сбрасывает все состояния касания/мыши и удаляет CSS кастомные свойства.
   * @param elementValue target element/ целевой элемент
   */
  resetData(e) {
    this.touche.value = void 0, this.toucheMove.value = void 0, this.mouse.value = void 0, this.mouseMove.value = void 0, e.style.removeProperty("--sys-touch-start-x"), e.style.removeProperty("--sys-touch-start-y"), e.style.removeProperty("--sys-touch-move-x"), e.style.removeProperty("--sys-touch-move-y");
  }
  /**
   * Updates initial touch/mouse position and sets CSS custom properties.
   *
   * Обновляет начальную позицию касания/мыши и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  update(e) {
    var s;
    const t = this.getElement(e), o = this.mouse.value;
    t && o && (t.style.setProperty("--sys-touch-start-x", `${o.x}px`), t.style.setProperty("--sys-touch-start-y", `${o.y}px`), l((s = this.start) == null ? void 0 : s.call(this, o, this.touche.value)).then());
  }
  /**
   * Updates touch/mouse position during movement and sets CSS custom properties.
   *
   * Обновляет позицию касания/мыши во время движения и устанавливает CSS кастомные свойства.
   * @param target selected item/ выбранный элемент
   */
  updateMove(e) {
    const t = this.getElement(e);
    this.callback(this.move).then((o) => {
      t && o && (t.style.setProperty("--sys-touch-move-x", `${o.x}px`), t.style.setProperty("--sys-touch-move-y", `${o.y}px`));
    });
  }
}
export {
  M as T
};

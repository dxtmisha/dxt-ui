var u = Object.defineProperty;
var b = (l, t, e) => t in l ? u(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var h = (l, t, e) => b(l, typeof t != "symbol" ? t + "" : t, e);
import { watch as f, onUnmounted as g, computed as S, h as w } from "vue";
import { EventItem as a, ScrollbarWidthRef as B, DesignConstructorAbstract as T } from "@dxtmisha/functional";
const m = 8;
class D {
  /**
   * Constructor for ScrollbarBorder class.
   *
   * Конструктор класса ScrollbarBorder.
   * @param props properties/ свойства
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, i, o) {
    h(this, "event");
    h(this, "eventSub");
    /**
     * Top boundary state/ состояние верхней границы
     */
    h(this, "top", !1);
    /**
     * Bottom boundary state/ состояние нижней границы
     */
    h(this, "bottom", !1);
    /**
     * Changing the monitoring status depending on the border parameter.
     *
     * Изменение статуса слежения в зависимости от параметра border.
     */
    h(this, "toggle", () => {
      this.props.divider || this.props.dividerTop || this.props.dividerBottom ? this.start() : this.stop();
    });
    /**
     * Updating the monitoring element for the event object.
     *
     * Обновление элемента слежения для объекта события.
     */
    h(this, "reset", () => {
      var t;
      this.element.value ? (this.event && (this.event.setElement(this.element.value), this.eventSub && ((t = this.element.value.children) != null && t[0]) && this.eventSub.setElement(this.element.value.children[0])), this.toggle(), this.update()) : this.stop();
    });
    /**
     * Updates the list of active classes.
     *
     * Обновляет список активных классов.
     */
    h(this, "update", () => {
      const t = this.element.value;
      t && (t.classList.toggle(`${this.className}--divider--top`, this.top), t.classList.toggle(`${this.className}--divider--bottom`, this.bottom), t.dataset.scrollbarDivider = this.top || this.bottom ? "divider" : "none");
    });
    /**
     * Function for the event of monitoring scroll changes.
     *
     * Функция для события слежения за изменениями скролла.
     */
    h(this, "on", () => {
      const t = this.element.value;
      t && this.setData(
        t.scrollTop > m,
        t.scrollTop < t.scrollHeight - t.clientHeight - m
      );
    });
    this.props = t, this.element = s, this.className = i, this.emits = o, f([
      this.element,
      e.divider,
      e.dividerTop,
      e.dividerBottom,
      e.inverse
    ], this.reset, { immediate: !0 }), g(() => this.stop());
  }
  /**
   * Start monitoring the scroll.
   *
   * Начать слежение за скроллом.
   */
  start() {
    var t, e;
    this.event ? this.event.start() : this.event = new a(this.element.value, ["scroll-sync"], this.on).start(), this.eventSub ? this.eventSub.start() : (e = (t = this.element.value) == null ? void 0 : t.children) != null && e[0] && (this.eventSub = new a(this.element.value.children[0], ["resize"], this.on).start()), this.on();
  }
  /**
   * Stopping the monitoring of scroll changes.
   *
   * Остановка слежения за изменениями скролла.
   */
  stop() {
    this.event && (this.event.stop(), this.event = void 0), this.eventSub && (this.eventSub.stop(), this.eventSub = void 0);
  }
  /**
   * Changing the data for class output.
   *
   * Изменение данных для вывода класса.
   * @param top status of the top border display/ статус отображения верхнего бордера
   * @param bottom status of the bottom border display/ статус отображения нижнего бордера
   */
  setData(t, e) {
    return (this.top !== t || this.bottom !== e) && this.setTop(t).setBottom(e).update(), this;
  }
  /**
   * Sets the top boundary state and emits related events.
   *
   * Устанавливает состояние верхней границы и генерирует связанные события.
   * @param top status of the top border display/ статус отображения верхнего бордера
   */
  setTop(t) {
    var e, s, i, o;
    return this.top !== t && (this.top = t, (e = this.emits) == null || e.call(this, "top", t), (s = this.emits) == null || s.call(this, "edge", t, this.bottom, "top"), t ? (i = this.emits) == null || i.call(this, "reachTop") : (o = this.emits) == null || o.call(this, "leaveTop")), this;
  }
  /**
   * Sets the bottom boundary state and emits related events.
   *
   * Устанавливает состояние нижней границы и генерирует связанные события.
   * @param bottom status of the bottom border display/ статус отображения нижнего бордера
   */
  setBottom(t) {
    var e, s, i, o;
    return this.bottom !== t && (this.bottom = t, (e = this.emits) == null || e.call(this, "bottom", t), (s = this.emits) == null || s.call(this, "edge", this.top, t, "bottom"), t ? (i = this.emits) == null || i.call(this, "reachBottom") : (o = this.emits) == null || o.call(this, "leaveBottom")), this;
  }
}
class C {
  /**
   * Constructor for Scrollbar class.
   *
   * Конструктор класса Scrollbar.
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.ScrollbarBorderConstructor class for working with scrollbar border/ класс для работы с границей скролла
   * @param constructors.ScrollbarWidthRefConstructor class for working with scrollbar width/ класс для работы с шириной скролла
   */
  constructor(t, e, s, i, o, d, v, r, n) {
    h(this, "width");
    h(this, "border");
    /**
     * Returns values for the class.
     *
     * Возвращает значения для класса.
     */
    h(this, "classes", S(() => ({
      [`${this.className}--disabled`]: !!this.width.item.value
    })));
    this.props = t, this.refs = e, this.element = s, this.classDesign = i, this.className = o, this.components = d, this.slots = v, this.emits = r;
    const {
      ScrollbarBorderConstructor: c = D,
      ScrollbarWidthRefConstructor: p = B
    } = n != null ? n : {};
    this.width = new p(), this.border = new c(
      t,
      e,
      s,
      o,
      r
    );
  }
}
const L = {
  tag: "div"
};
class x extends T {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, s, i, o = C) {
    super(
      e,
      s,
      i
    );
    h(this, "item");
    this.item = new o(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init();
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {};
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {};
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var s, i;
    const e = [this.initSlot("default")];
    if (this.item.width.is.value)
      return w(
        (s = this.props.tag) != null ? s : "div",
        {
          ...this.getAttrs(),
          ref: this.element,
          class: (i = this.classes) == null ? void 0 : i.value.main
        },
        e
      );
  }
}
export {
  C as Scrollbar,
  x as ScrollbarDesign,
  L as defaultsScrollbar
};

import { h as b, computed as c, watch as g, onUnmounted as B, defineComponent as f, openBlock as S, createBlock as T, unref as y, mergeDefaults as w } from "vue";
import { DesignConstructorAbstract as D, ScrollbarWidthRef as x, EventItem as v } from "@dxtmisha/functional";
var _ = Object.defineProperty, C = (n, t, e) => t in n ? _(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, r = (n, t, e) => C(n, typeof t != "symbol" ? t + "" : t, e);
const p = 8;
class N {
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
  constructor(t, e, o, s, l) {
    r(this, "event"), r(this, "eventSub"), r(this, "top", !1), r(this, "bottom", !1), r(this, "toggle", () => {
      this.props.divider || this.props.dividerTop || this.props.dividerBottom ? this.start() : this.stop();
    }), r(this, "reset", () => {
      var i;
      this.element.value ? (this.event && (this.event.setElement(this.element.value), this.eventSub && (i = this.element.value.children) != null && i[0] && this.eventSub.setElement(this.element.value.children[0])), this.toggle(), this.update()) : this.stop();
    }), r(this, "update", () => {
      const i = this.element.value;
      i && (i.classList.toggle(`${this.className}--divider--top`, this.top), i.classList.toggle(`${this.className}--divider--bottom`, this.bottom), i.dataset.scrollbarDivider = this.top || this.bottom ? "divider" : "none");
    }), r(this, "on", () => {
      const i = this.element.value;
      i && this.setData(
        i.scrollTop > p,
        i.scrollTop < i.scrollHeight - i.clientHeight - p
      );
    }), this.props = t, this.element = o, this.className = s, this.emits = l, g([
      this.element,
      e.divider,
      e.dividerTop,
      e.dividerBottom,
      e.inverse
    ], this.reset, { immediate: !0 }), B(() => this.stop());
  }
  /**
   * Start monitoring the scroll.
   *
   * Начать слежение за скроллом.
   */
  start() {
    var t, e;
    this.event ? this.event.start() : this.event = new v(this.element.value, ["scroll-sync"], this.on).start(), this.eventSub ? this.eventSub.start() : (e = (t = this.element.value) == null ? void 0 : t.children) != null && e[0] && (this.eventSub = new v(this.element.value.children[0], ["resize"], this.on).start()), this.on();
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
    var e, o, s, l;
    return this.top !== t && (this.top = t, (e = this.emits) == null || e.call(this, "top", t), (o = this.emits) == null || o.call(this, "edge", t, this.bottom, "top"), t ? (s = this.emits) == null || s.call(this, "reachTop") : (l = this.emits) == null || l.call(this, "leaveTop")), this;
  }
  /**
   * Sets the bottom boundary state and emits related events.
   *
   * Устанавливает состояние нижней границы и генерирует связанные события.
   * @param bottom status of the bottom border display/ статус отображения нижнего бордера
   */
  setBottom(t) {
    var e, o, s, l;
    return this.bottom !== t && (this.bottom = t, (e = this.emits) == null || e.call(this, "bottom", t), (o = this.emits) == null || o.call(this, "edge", this.top, t, "bottom"), t ? (s = this.emits) == null || s.call(this, "reachBottom") : (l = this.emits) == null || l.call(this, "leaveBottom")), this;
  }
}
class H {
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
  constructor(t, e, o, s, l, i, h, a, d) {
    r(this, "width"), r(this, "border"), r(this, "classes", c(() => ({
      [`${this.className}--disabled`]: !!this.width.item.value
    }))), this.props = t, this.refs = e, this.element = o, this.classDesign = s, this.className = l, this.components = i, this.slots = h, this.emits = a;
    const {
      ScrollbarBorderConstructor: m = N,
      ScrollbarWidthRefConstructor: u = x
    } = d != null ? d : {};
    this.width = new u(), this.border = new m(
      t,
      e,
      o,
      l,
      a
    );
  }
}
const k = {
  tag: "div"
};
class E extends D {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, e, o, s = H) {
    super(
      t,
      e,
      o
    ), r(this, "item"), this.item = new s(
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
    var t, e;
    const o = [this.initSlot("default")];
    if (this.item.width.is.value)
      return b(
        (t = this.props.tag) != null ? t : "div",
        {
          ...this.getAttrs(),
          ref: this.element,
          class: (e = this.classes) == null ? void 0 : e.value.main
        },
        o
      );
  }
}
const $ = {
  ...k
}, A = /* @__PURE__ */ f({
  name: "D1Scrollbar",
  __name: "D1Scrollbar",
  props: /* @__PURE__ */ w({
    tag: {},
    visible: { type: Boolean },
    divider: { type: Boolean },
    dividerTop: { type: Boolean },
    dividerBottom: { type: Boolean },
    dividerHide: { type: Boolean },
    inverse: { type: Boolean },
    standard: { type: Boolean }
  }, $),
  emits: ["top", "reachTop", "leaveTop", "bottom", "reachBottom", "leaveBottom", "edge"],
  setup(n, { expose: t, emit: e }) {
    const o = e, s = n, l = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-scrollbar": !0,
        "d1-scrollbar--visible": s.visible,
        "d1-scrollbar--divider": s.divider,
        "d1-scrollbar--dividerTop": s.dividerTop,
        "d1-scrollbar--dividerBottom": s.dividerBottom,
        "d1-scrollbar--dividerHide": s.dividerHide,
        "d1-scrollbar--inverse": s.inverse,
        "d1-scrollbar--standard": s.standard
        // :classes-values [!] System label / Системная метка
      }
    })), i = c(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new E(
      "d1.scrollbar",
      s,
      {
        emits: o,
        classes: l,
        styles: i
      }
    ), a = h.render();
    return t(h.expose()), (d, m) => (S(), T(y(a)));
  }
});
export {
  A as _
};

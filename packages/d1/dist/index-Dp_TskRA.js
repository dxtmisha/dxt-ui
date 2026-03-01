import { ref as d, watch as v, nextTick as $, h as p, computed as u, onMounted as N, onUnmounted as S, defineComponent as E, openBlock as k, createBlock as P, unref as L, mergeDefaults as M } from "vue";
import { DesignConstructorAbstract as O, isDomRuntime as g, isFilled as R, isString as H, EventRef as b, EventItem as x, toNumber as W, inArray as y } from "@dxtmisha/functional";
import { l as D } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var _ = Object.defineProperty, z = (o, t, e) => t in o ? _(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, n = (o, t, e) => z(o, typeof t != "symbol" ? t + "" : t, e);
class F {
  /**
   * Constructor
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   */
  constructor(t, e) {
    this.element = t, this.className = e;
  }
  /**
   * Checks that the element exists.
   *
   * Проверяет, что элемент существует.
   */
  is() {
    return !!this.element.value;
  }
  /**
   * Gets the width of the arrow.
   *
   * Получает ширину стрелки.
   */
  getWidth() {
    const t = this.getStyleArrowWidth();
    return t ? Number(
      t.replace(/[^0-9]+/ig, "")
    ) : 0;
  }
  /**
   * Gets the height of the arrow.
   *
   * Получает высоту стрелки.
   */
  getHeight() {
    const t = this.getStyleArrowHeight();
    return t ? Number(
      t.replace(/[^0-9]+/ig, "")
    ) : 0;
  }
  /**
   * Gets the element's bounding rectangle.
   *
   * Получает ограничивающий прямоугольник элемента.
   */
  getRect() {
    var t;
    return (t = this.element.value) == null ? void 0 : t.getBoundingClientRect();
  }
  /**
   * Gets the bounding rectangle of the border element.
   *
   * Получает ограничивающий прямоугольник элемента границы.
   */
  getRectBorder() {
    var t, e, i;
    return (i = (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.className}__border`)) == null ? void 0 : e.getBoundingClientRect()) != null ? i : void 0;
  }
  /**
   * Gets the bounding rectangle of the border element.
   *
   * Получает ограничивающий прямоугольник элемента границы.
   */
  getRectArrowLine() {
    var t, e, i;
    return (i = (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.className}__arrowLine`)) == null ? void 0 : e.getBoundingClientRect()) != null ? i : void 0;
  }
  /**
   * Gets the name of the arrow width variable.
   *
   * Получает имя переменной ширины стрелки.
   */
  getNameArrowWidth() {
    return `--${this.className}-arrowWidth`;
  }
  /**
   * Gets the name of the arrow height variable.
   *
   * Получает имя переменной высоты стрелки.
   */
  getNameArrowHeight() {
    return `--${this.className}-arrowHeight`;
  }
  /**
   * Gets the width of the arrow from styles.
   *
   * Получает ширину стрелки из стилей.
   */
  getStyleArrowWidth() {
    if (this.is())
      return getComputedStyle(this.element.value).getPropertyValue(
        this.getNameArrowWidth()
      );
  }
  /**
   * Gets the size of the arrow from styles.
   *
   * Получает размер стрелки из стилей.
   */
  getStyleArrowHeight() {
    if (this.is())
      return getComputedStyle(this.element.value).getPropertyValue(
        this.getNameArrowHeight()
      );
  }
}
class q {
  /**
   * Constructor
   * @param props input properties/ входящие свойства
   */
  constructor(t) {
    n(this, "element", d()), this.props = t;
  }
  /**
   * Checks that the element exists.
   *
   * Проверяет, что элемент существует.
   */
  is() {
    return this.element.value !== void 0;
  }
  /**
   * Gets the element's bounding rectangle.
   *
   * Получает ограничивающий прямоугольник элемента.
   */
  getRect() {
    var t;
    return (t = this.element.value) == null ? void 0 : t.getBoundingClientRect();
  }
  /**
   * Updates the target element.
   *
   * Обновляет целевой элемент.
   */
  update() {
    this.element.value = this.initElement();
  }
  /**
   * Initializes the target element.
   *
   * Инициализирует целевой элемент.
   */
  initElement() {
    var t;
    const e = this.props.elementTarget;
    if (this.props.position === "auto" && R(e) && g())
      return H(e) ? (t = document.querySelector(e)) != null ? t : void 0 : e;
  }
}
class V {
  /**
   * Constructor
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param elementItem arrow element/ элемент стрелки
   */
  constructor(t, e, i) {
    n(this, "isBorder", u(
      () => this.borderWidth.value !== "0px"
    )), n(this, "elementParent", u(() => {
      var s;
      return (s = this.element.value) == null ? void 0 : s.parentElement;
    })), n(this, "background", u(
      () => {
        var s, r;
        return (r = (s = this.getStyles()) == null ? void 0 : s.backgroundColor) != null ? r : "transparent";
      }
    )), n(this, "borderWidth", u(
      () => {
        var s, r;
        return (r = (s = this.getStyles()) == null ? void 0 : s.borderWidth) != null ? r : "0px";
      }
    )), n(this, "borderColor", u(
      () => {
        var s, r;
        return (r = (s = this.getStyles()) == null ? void 0 : s.borderColor) != null ? r : "transparent";
      }
    )), n(this, "borderRadius", u(
      () => {
        var s, r;
        return (r = (s = this.getStyles()) == null ? void 0 : s.borderRadius) != null ? r : "0px";
      }
    )), n(this, "make", () => {
      requestAnimationFrame(() => {
        if (this.elementParent.value) {
          const s = this.elementParent.value;
          s.classList.add(`${this.className}__parent`), s.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.getHeight())), this.isBorder.value && (s.dataset.arrow = "border");
        }
      });
    }), this.element = t, this.className = e, this.elementItem = i, g() && v(t, this.make);
  }
  /**
   * Get border width as number.
   *
   * Получить ширину границы в виде числа.
   */
  getBorderRadius() {
    return W(this.borderRadius.value);
  }
  /**
   * Get computed styles of the parent element.
   *
   * Получить вычисленные стили родительского элемента.
   */
  getStyles() {
    const t = this.elementParent.value;
    if (t)
      return getComputedStyle(t);
  }
}
var h = /* @__PURE__ */ ((o) => (o.TOP = "top", o.BOTTOM = "bottom", o.LEFT = "left", o.RIGHT = "right", o.HIDE = "hide", o))(h || {});
class G {
  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param elementItem arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param parent parent element / родительский элемент
   */
  constructor(t, e, i, s) {
    n(this, "border", d()), n(this, "direction", d()), n(this, "shift", d()), n(this, "clipPath", d()), n(this, "update", () => {
      this.border.value = this.initBorder(), this.direction.value = this.initDirection(), this.shift.value = this.initShift(), requestAnimationFrame(() => {
        this.clipPath.value = this.initClipPath();
      });
    }), this.props = t, this.elementItem = e, this.elementTarget = i, this.parent = s;
  }
  /**
   * Checks if the arrow is in the X direction.
   *
   * Проверяет, находится ли стрелка в направлении X.
   */
  isX() {
    return this.direction.value === h.TOP || this.direction.value === h.BOTTOM;
  }
  /**
   * Gets the minimum value for the arrow position.
   *
   * Получает минимальное значение для позиции стрелки.
   */
  getMinValue() {
    return this.parent.getBorderRadius() + this.elementItem.getWidth() / 2;
  }
  /**
   * Initializes the border between the item and target elements.
   *
   * Инициализирует границу между элементами item и target.
   */
  initBorder() {
    const t = this.elementItem.getRect(), e = this.elementTarget.getRect();
    if (t && e)
      return {
        top: Math.max(t.top, e.top),
        bottom: Math.min(t.bottom, e.bottom),
        left: Math.max(t.left, e.left),
        right: Math.min(t.right, e.right)
      };
  }
  /**
   * Initializes the direction of the arrow.
   *
   * Инициализирует направление стрелки.
   */
  initDirection() {
    if (this.props.position !== "auto")
      return this.props.position;
    const t = this.elementItem.getRect(), e = this.elementTarget.getRect();
    if (this.border.value && t && e) {
      if (e.top <= t.top && e.right > t.left && e.left < t.right)
        return h.TOP;
      if (e.bottom >= t.bottom && e.right > t.left && e.left < t.right)
        return h.BOTTOM;
      if (e.left <= t.left && e.bottom > t.top && e.top < t.bottom)
        return h.LEFT;
      if (e.right >= t.right && e.bottom > t.top && e.top < t.bottom)
        return h.RIGHT;
    }
  }
  /**
   * Initializes the shift of the arrow.
   *
   * Инициализирует смещение стрелки.
   */
  initShift() {
    const t = this.border.value, e = this.elementItem.getRect();
    if (t && e) {
      const i = this.getMinValue();
      let s;
      return this.isX() ? s = Math.min(e.width - i, t.left - e.left + (t.right - t.left) / 2) : s = Math.min(e.height - i, t.top - e.top + (t.bottom - t.top) / 2), `${Math.max(i, s)}px`;
    }
  }
  /**
   * Initializes the clip path for the arrow.
   *
   * Инициализирует область обрезки для стрелки.
   */
  initClipPath() {
    const t = this.elementItem.getRectBorder(), e = this.elementItem.getRectArrowLine();
    if (t && e) {
      const i = `M0,0 L0,${t.height} L${t.width},${t.height} L${t.width},0 Z`;
      let s, r, a, l;
      switch (this.direction.value) {
        case h.TOP:
          s = e.left - t.left, r = 0, a = s + e.width, l = e.height;
          break;
        case h.BOTTOM:
          s = e.left - t.left, r = t.height - e.height, a = s + e.width, l = t.height;
          break;
        case h.LEFT:
          s = 0, r = e.top - t.top, a = e.width, l = r + e.height;
          break;
        case h.RIGHT:
          s = t.width - e.width, r = e.top - t.top, a = t.width, l = r + e.height;
          break;
        default:
          return;
      }
      const c = `M${s},${r} L${a},${r} L${a},${l} L${s},${l} Z`;
      return `path('${i} ${c}')`;
    }
  }
}
class j {
  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties as refs / входные свойства как ссылки
   * @param element arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param parent parent object / объект родителя
   * @param position position object / объект позиции
   */
  constructor(t, e, i, s, r, a) {
    n(this, "eventItem"), n(this, "eventTarget"), n(this, "eventBody"), n(this, "update", () => {
      requestAnimationFrame(() => {
        this.props.position === "auto" && this.elementTarget.update(), this.position.update();
      });
    }), n(this, "makeEvents", () => {
      this.elementTarget.is() ? this.initEvents().startEvents() : this.stopEvents();
    }), this.props = t, this.refs = e, this.element = i, this.elementTarget = s, this.parent = r, this.position = a, g() && (N(async () => {
      await $(), v(this.elementTarget.element, this.makeEvents), v([...Object.values(this.refs)], this.update, { immediate: !0 });
    }), S(() => {
      this.stopEvents();
    }));
  }
  /**
   * Start events.
   *
   * Запустить события.
   */
  startEvents() {
    var t, e, i;
    return (t = this.eventItem) == null || t.start(), (e = this.eventTarget) == null || e.start(), (i = this.eventBody) == null || i.start(), this;
  }
  /**
   * Stop events.
   *
   * Остановить события.
   */
  stopEvents() {
    var t, e, i;
    return (t = this.eventItem) == null || t.stop(), (e = this.eventTarget) == null || e.stop(), (i = this.eventBody) == null || i.stop(), this;
  }
  /**
   * Initialize events.
   *
   * Инициализировать события.
   */
  initEvents() {
    return this.eventItem || (this.eventItem = new b(this.element, void 0, "resize", this.update)), this.eventTarget || (this.eventTarget = new b(this.elementTarget.element, void 0, "resize", this.update)), this.eventBody || (this.eventBody = new x(window, ["scroll", "resize"], this.update)), this;
  }
}
class X {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.ArrowElementConstructor class for working with the arrow element/ класс для работы с элементом стрелки
   * @param constructors.ArrowElementTargetConstructor class for working with the target element of the arrow/ класс для работы с целевым элементом стрелки
   * @param constructors.ArrowEventConstructor class for working with arrow events/ класс для работы с событиями стрелки
   * @param constructors.ArrowParentConstructor class for working with the parent element of the arrow/ класс для работы с родительским элементом стрелки
   * @param constructors.ArrowPositionConstructor class for working with the position of the arrow/ класс для работы с позицией стрелки
   */
  constructor(t, e, i, s, r, a, l, c, w) {
    n(this, "elementItem"), n(this, "elementTarget"), n(this, "parent"), n(this, "position"), n(this, "event"), n(this, "direction", u(() => {
      if (R(this.props.position)) {
        const m = this.position.direction.value;
        if (m)
          return m;
      }
      return h.HIDE;
    })), n(this, "classes", u(() => ({
      [`${this.className}--direction--${this.direction.value}`]: !!this.direction.value
    }))), n(this, "styles", u(() => {
      const m = {
        [`--${this.className}-sys-background`]: this.parent.background.value,
        [`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
        [`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
        [`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value
      };
      return this.parent.isBorder.value && this.position.clipPath.value && (m[`--${this.className}-sys-clipPath`] = this.position.clipPath.value), this.elementTarget.is() && this.position.shift.value && (m[`--${this.className}-sys-shift`] = this.position.shift.value), m;
    })), this.props = t, this.refs = e, this.element = i, this.classDesign = s, this.className = r, this.components = a, this.slots = l, this.emits = c;
    const {
      ArrowElementConstructor: f = F,
      ArrowElementTargetConstructor: A = q,
      ArrowEventConstructor: B = j,
      ArrowParentConstructor: C = V,
      ArrowPositionConstructor: I = G
    } = w != null ? w : {};
    this.elementItem = new f(
      this.element,
      this.className
    ), this.elementTarget = new A(this.props), this.parent = new C(
      this.element,
      this.className,
      this.elementItem
    ), this.position = new I(
      this.props,
      this.elementItem,
      this.elementTarget,
      this.parent
    ), this.event = new B(
      this.props,
      this.refs,
      this.element,
      this.elementTarget,
      this.parent,
      this.position
    );
  }
}
const Z = {
  // :default [!] System label / Системная метка
  position: "auto"
};
class U extends O {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor arrow item class/ класс элемента стрелки
   */
  constructor(t, e, i, s = X) {
    super(
      t,
      e,
      i
    ), n(this, "item"), n(this, "points", d("")), n(this, "getRePoints", () => {
      const r = this.item.elementItem.getWidth(), a = this.item.elementItem.getHeight();
      switch (this.item.direction.value) {
        case h.BOTTOM:
          return `0, 0 ${r / 2}, ${a} ${r}, 0`;
        case h.LEFT:
          return `${r}, 0 0, ${a / 2} ${r}, ${a}`;
        case h.RIGHT:
          return `0, 0 ${r}, ${a / 2} 0, ${a}`;
        default:
          return `0, ${a} ${r / 2}, 0 ${r}, ${a}`;
      }
    }), this.item = new s(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init(), v([this.classes], () => {
      $().then(
        () => requestAnimationFrame(() => {
          this.points.value = this.getRePoints();
        })
      );
    }, { immediate: !0 });
  }
  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  initExpose() {
    return {
      update: this.item.position.update
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      mask: this.getSubClass("mask"),
      arrow: this.getSubClass("arrow"),
      arrowLine: this.getSubClass("arrowLine"),
      arrowArea: this.getSubClass("arrowArea"),
      border: this.getSubClass("border"),
      borderHidden: this.getSubClass("borderHidden")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return {
      ...this.item.styles.value
    };
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var t, e;
    if (!g())
      return;
    const i = [
      ...this.renderArrow()
    ];
    return this.item.parent.isBorder.value && i.push(
      ...this.renderBorder()
    ), p("div", {
      ref: this.element,
      class: (t = this.classes) == null ? void 0 : t.value.main,
      style: (e = this.styles) == null ? void 0 : e.value,
      ...D.hidden()
    }, i);
  }
  /**
   * Method for rendering an arrow.
   *
   * Метод для рендеринга стрелки.
   */
  renderArrow() {
    var t, e, i;
    return [
      p(
        "svg",
        {
          key: "svg-arrow",
          class: (t = this.classes) == null ? void 0 : t.value.arrowArea
        },
        [
          p(
            "polygon",
            {
              key: "arrow",
              class: (e = this.classes) == null ? void 0 : e.value.arrow,
              points: this.points.value
            }
          ),
          p(
            "polyline",
            {
              key: "arrow-line",
              class: (i = this.classes) == null ? void 0 : i.value.arrowLine,
              points: this.points.value
            }
          )
        ]
      )
    ];
  }
  /**
   * Method for rendering a border.
   *
   * Метод для рендеринга границы.
   */
  renderBorder() {
    var t;
    return [
      p("div", {
        key: "border",
        class: (t = this.classes) == null ? void 0 : t.value.border
      })
    ];
  }
}
const T = {
  // :values [!] System label / Системная метка
  position: ["auto", "top", "bottom", "left", "right"],
  size: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, J = {
  ...Z,
  // :default [!] System label / Системная метка
  position: "auto",
  size: "md"
}, K = /* @__PURE__ */ E({
  name: "D1Arrow",
  __name: "D1Arrow",
  props: /* @__PURE__ */ M({
    elementTarget: {},
    position: {},
    inverse: { type: Boolean },
    size: {}
  }, J),
  setup(o, { expose: t, emit: e }) {
    const i = e, s = o, r = u(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-arrow": !0,
        [`d1-arrow--position--${s.position}`]: y(T.position, s.position),
        "d1-arrow--inverse": s.inverse,
        [`d1-arrow--size--${s.size}`]: y(T.size, s.size)
        // :classes-values [!] System label / Системная метка
      }
    })), a = u(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new U(
      "d1.arrow",
      s,
      {
        emits: i,
        classes: r,
        styles: a
      }
    ), c = l.render();
    return t(l.expose()), (w, f) => (k(), P(L(c)));
  }
}), et = K;
export {
  et as D
};

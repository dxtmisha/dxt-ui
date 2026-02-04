var I = Object.defineProperty;
var A = (n, t, e) => t in n ? I(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var s = (n, t, e) => A(n, typeof t != "symbol" ? t + "" : t, e);
import { ref as u, watch as c, computed as l, onMounted as B, nextTick as f, onUnmounted as S, h as d } from "vue";
import { isFilled as w, isDomRuntime as p, isString as N, toNumber as E, EventRef as v, EventItem as P, DesignConstructorAbstract as C } from "@dxtmisha/functional";
import { A as k } from "./AriaStaticInclude-D1bSJaBp.js";
import { A as Y } from "./ArrowInclude-CcpT637l.js";
class H {
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
class L {
  /**
   * Constructor
   * @param props input properties/ входящие свойства
   */
  constructor(t) {
    s(this, "element", u());
    this.props = t;
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
    var e;
    const t = this.props.elementTarget;
    if (this.props.position === "auto" && w(t) && p())
      return N(t) ? (e = document.querySelector(t)) != null ? e : void 0 : t;
  }
}
class M {
  /**
   * Constructor
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param elementItem arrow element/ элемент стрелки
   */
  constructor(t, e, i) {
    /** Checks if the parent element has a border/ Проверяет, есть ли у родительского элемента граница */
    s(this, "isBorder", l(
      () => this.borderWidth.value !== "0px"
    ));
    /** Parent element/ Родительский элемент **/
    s(this, "elementParent", l(() => {
      var t;
      return (t = this.element.value) == null ? void 0 : t.parentElement;
    }));
    /** Background color of the parent element/ Цвет фона родительского элемента **/
    s(this, "background", l(
      () => {
        var t, e;
        return (e = (t = this.getStyles()) == null ? void 0 : t.backgroundColor) != null ? e : "transparent";
      }
    ));
    /** Border color of the parent element/ Цвет границы родительского элемента **/
    s(this, "borderWidth", l(
      () => {
        var t, e;
        return (e = (t = this.getStyles()) == null ? void 0 : t.borderWidth) != null ? e : "0px";
      }
    ));
    /** Border color of the parent element/ Цвет границы родительского элемента **/
    s(this, "borderColor", l(
      () => {
        var t, e;
        return (e = (t = this.getStyles()) == null ? void 0 : t.borderColor) != null ? e : "transparent";
      }
    ));
    /** Border radius of the parent element/ Радиус границы родительского элемента **/
    s(this, "borderRadius", l(
      () => {
        var t, e;
        return (e = (t = this.getStyles()) == null ? void 0 : t.borderRadius) != null ? e : "0px";
      }
    ));
    /**
     * Method for creating styles for the parent element.
     *
     * Метод для создания стилей для родительского элемента.
     */
    s(this, "make", () => {
      requestAnimationFrame(() => {
        if (this.elementParent.value) {
          const t = this.elementParent.value;
          t.classList.add(`${this.className}__parent`), t.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.getHeight())), this.isBorder.value && (t.dataset.arrow = "border");
        }
      });
    });
    this.element = t, this.className = e, this.elementItem = i, p() && c(t, this.make);
  }
  /**
   * Get border width as number.
   *
   * Получить ширину границы в виде числа.
   */
  getBorderRadius() {
    return E(this.borderRadius.value);
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
var o = /* @__PURE__ */ ((n) => (n.TOP = "top", n.BOTTOM = "bottom", n.LEFT = "left", n.RIGHT = "right", n.HIDE = "hide", n))(o || {});
class O {
  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param elementItem arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param parent parent element / родительский элемент
   */
  constructor(t, e, i, r) {
    /** Border between item and target elements / Граница между элементами item и target */
    s(this, "border", u());
    /** Direction of the arrow / Направление стрелки */
    s(this, "direction", u());
    /** Shift of the arrow / Смещение стрелки */
    s(this, "shift", u());
    /** Clip path for the arrow / Область обрезки для стрелки */
    s(this, "clipPath", u());
    /**
     * Updates the position of the arrow.
     *
     * Обновляет позицию стрелки.
     */
    s(this, "update", () => {
      this.border.value = this.initBorder(), this.direction.value = this.initDirection(), this.shift.value = this.initShift(), requestAnimationFrame(() => {
        this.clipPath.value = this.initClipPath();
      });
    });
    this.props = t, this.elementItem = e, this.elementTarget = i, this.parent = r;
  }
  /**
   * Checks if the arrow is in the X direction.
   *
   * Проверяет, находится ли стрелка в направлении X.
   */
  isX() {
    return this.direction.value === o.TOP || this.direction.value === o.BOTTOM;
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
        return o.TOP;
      if (e.bottom >= t.bottom && e.right > t.left && e.left < t.right)
        return o.BOTTOM;
      if (e.left <= t.left && e.bottom > t.top && e.top < t.bottom)
        return o.LEFT;
      if (e.right >= t.right && e.bottom > t.top && e.top < t.bottom)
        return o.RIGHT;
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
      let r;
      return this.isX() ? r = Math.min(e.width - i, t.left - e.left + (t.right - t.left) / 2) : r = Math.min(e.height - i, t.top - e.top + (t.bottom - t.top) / 2), `${Math.max(i, r)}px`;
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
      let r, a, h, m;
      switch (this.direction.value) {
        case o.TOP:
          r = e.left - t.left, a = 0, h = r + e.width, m = e.height;
          break;
        case o.BOTTOM:
          r = e.left - t.left, a = t.height - e.height, h = r + e.width, m = t.height;
          break;
        case o.LEFT:
          r = 0, a = e.top - t.top, h = e.width, m = a + e.height;
          break;
        case o.RIGHT:
          r = t.width - e.width, a = e.top - t.top, h = t.width, m = a + e.height;
          break;
        default:
          return;
      }
      const g = `M${r},${a} L${h},${a} L${h},${m} L${r},${m} Z`;
      return `path('${i} ${g}')`;
    }
  }
}
class W {
  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties as refs / входные свойства как ссылки
   * @param element arrow element / элемент стрелки
   * @param elementTarget target element / целевой элемент
   * @param parent parent object / объект родителя
   * @param position position object / объект позиции
   */
  constructor(t, e, i, r, a, h) {
    s(this, "eventItem");
    s(this, "eventTarget");
    s(this, "eventBody");
    /**
     * Update all reactive elements.
     *
     * Обновить все реактивные элементы.
     */
    s(this, "update", () => {
      requestAnimationFrame(() => {
        this.props.position === "auto" && this.elementTarget.update(), this.position.update();
      });
    });
    /**
     * Create events.
     *
     * Создать события.
     */
    s(this, "makeEvents", () => {
      this.elementTarget.is() ? this.initEvents().startEvents() : this.stopEvents();
    });
    this.props = t, this.refs = e, this.element = i, this.elementTarget = r, this.parent = a, this.position = h, p() && (B(async () => {
      await f(), c(this.elementTarget.element, this.makeEvents), c([...Object.values(this.refs)], this.update, { immediate: !0 });
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
    return this.eventItem || (this.eventItem = new v(this.element, void 0, "resize", this.update)), this.eventTarget || (this.eventTarget = new v(this.elementTarget.element, void 0, "resize", this.update)), this.eventBody || (this.eventBody = new P(window, ["scroll", "resize"], this.update)), this;
  }
}
class x {
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
   * @param ArrowElementConstructor class for working with the arrow element/ класс для работы с элементом стрелки
   * @param ArrowElementTargetConstructor class for working with the target element of the arrow/ класс для работы с целевым элементом стрелки
   * @param ArrowParentConstructor class for working with the parent element of the arrow/ класс для работы с родительским элементом стрелки
   * @param ArrowPositionConstructor class for working with the position of the arrow/ класс для работы с позицией стрелки
   * @param ArrowEventConstructor class for working with arrow events/ класс для работы с событиями стрелки
   */
  constructor(t, e, i, r, a, h, m, g, b = H, T = L, y = M, $ = O, R = W) {
    s(this, "elementItem");
    s(this, "elementTarget");
    s(this, "parent");
    s(this, "position");
    s(this, "event");
    /** Direction of the arrow/ Направление стрелки */
    s(this, "direction", l(() => {
      if (w(this.props.position)) {
        const t = this.position.direction.value;
        if (t)
          return t;
      }
      return o.HIDE;
    }));
    /** Classes for the component/ Классы для компонента */
    s(this, "classes", l(() => ({
      [`${this.className}--direction--${this.direction.value}`]: !!this.direction.value
    })));
    /** Styles for the component/ Стили для компонента */
    s(this, "styles", l(() => {
      const t = {
        [`--${this.className}-sys-background`]: this.parent.background.value,
        [`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
        [`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
        [`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value
      };
      return this.parent.isBorder.value && this.position.clipPath.value && (t[`--${this.className}-sys-clipPath`] = this.position.clipPath.value), this.elementTarget.is() && this.position.shift.value && (t[`--${this.className}-sys-shift`] = this.position.shift.value), t;
    }));
    this.props = t, this.refs = e, this.element = i, this.classDesign = r, this.className = a, this.components = h, this.slots = m, this.emits = g, this.elementItem = new b(
      this.element,
      this.className
    ), this.elementTarget = new T(this.props), this.parent = new y(
      this.element,
      this.className,
      this.elementItem
    ), this.position = new $(
      this.props,
      this.elementItem,
      this.elementTarget,
      this.parent
    ), this.event = new R(
      this.props,
      this.refs,
      this.element,
      this.elementTarget,
      this.parent,
      this.position
    );
  }
}
const D = {
  // :default [!] System label / Системная метка
  position: "auto"
};
class G extends C {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor arrow item class/ класс элемента стрелки
   */
  constructor(e, i, r, a = x) {
    super(
      e,
      i,
      r
    );
    s(this, "item");
    s(this, "points", u(""));
    /**
     * Gets the points for the arrow.
     *
     * Получает точки для стрелки.
     */
    s(this, "getRePoints", () => {
      const e = this.item.elementItem.getWidth(), i = this.item.elementItem.getHeight();
      switch (this.item.direction.value) {
        case o.BOTTOM:
          return `0, 0 ${e / 2}, ${i} ${e}, 0`;
        case o.LEFT:
          return `${e}, 0 0, ${i / 2} ${e}, ${i}`;
        case o.RIGHT:
          return `0, 0 ${e}, ${i / 2} 0, ${i}`;
        default:
          return `0, ${i} ${e / 2}, 0 ${e}, ${i}`;
      }
    });
    this.item = new a(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    ), this.init(), c([this.classes], () => {
      f().then(
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
    var i, r;
    if (!p())
      return;
    const e = [
      ...this.renderArrow()
    ];
    return this.item.parent.isBorder.value && e.push(
      ...this.renderBorder()
    ), d("div", {
      ref: this.element,
      class: (i = this.classes) == null ? void 0 : i.value.main,
      style: (r = this.styles) == null ? void 0 : r.value,
      ...k.hidden()
    }, e);
  }
  /**
   * Method for rendering an arrow.
   *
   * Метод для рендеринга стрелки.
   */
  renderArrow() {
    var e, i, r;
    return [
      d(
        "svg",
        {
          key: "svg-arrow",
          class: (e = this.classes) == null ? void 0 : e.value.arrowArea
        },
        [
          d(
            "polygon",
            {
              key: "arrow",
              class: (i = this.classes) == null ? void 0 : i.value.arrow,
              points: this.points.value
            }
          ),
          d(
            "polyline",
            {
              key: "arrow-line",
              class: (r = this.classes) == null ? void 0 : r.value.arrowLine,
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
    var e;
    return [
      d("div", {
        key: "border",
        class: (e = this.classes) == null ? void 0 : e.value.border
      })
    ];
  }
}
export {
  x as Arrow,
  G as ArrowDesign,
  o as ArrowDirection,
  Y as ArrowInclude,
  D as defaultsArrow
};

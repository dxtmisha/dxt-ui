var V = Object.defineProperty;
var G = (h, t, e) => t in h ? V(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var i = (h, t, e) => G(h, typeof t != "symbol" ? t + "" : t, e);
import { h as p, computed as m, ref as v, watch as f, onMounted as K, onUnmounted as j, Teleport as Z } from "vue";
import { toBind as z, getBind as J, getRef as Q, executePromise as y, getElement as S, isDomRuntime as B, EventItem as k, setRef as tt, frame as et, isEnter as st, getMouseClientX as it, getMouseClientY as nt, DesignConstructorAbstract as ot } from "@dxtmisha/functional";
import { A as w } from "./AriaStaticInclude-BVCgDZbU.js";
import { M as rt } from "./ModelInclude-BiYm_iCQ.js";
import { T as ht } from "./TabIndexInclude-D8IAq5y9.js";
import { T as at } from "./TextInclude-CodMN5BH.js";
import { a as c, _ as b, b as lt } from "./WindowClassesInclude-B56usxgx.js";
import { W as _t } from "./WindowClassesInclude-B56usxgx.js";
import { W as ct } from "./WindowEsc-DTwn4Vsz.js";
import { W as Ut } from "./WindowInclude-BWm4-0Gh.js";
class dt {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, n) {
    this.props = t, this.className = e, this.components = s, this.emits = n;
  }
  /**
   * Renders scrollbar component or fallback element
   * Рендерит компонент скроллбара или элемент по умолчанию
   */
  render(t, e, s) {
    var n;
    if (this.components) {
      const o = this.components.renderOne(
        "scrollbar",
        z(
          {
            tag: t,
            class: `${this.className}__scrollbar`,
            ...e != null ? e : {},
            ...this.getScrollbarEvents()
          },
          (n = this.props.scrollbarAttrs) != null ? n : {}
        ),
        s
      );
      if (o)
        return [o];
    }
    return [p(t, e, s)];
  }
  /**
   * Returns event handlers for scrollbar
   * Возвращает обработчики событий для скроллбара
   */
  getScrollbarEvents() {
    return {
      onTop: (t) => {
        var e;
        return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarTop", t);
      },
      onReachTop: () => {
        var t;
        return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarReachTop");
      },
      onLeaveTop: () => {
        var t;
        return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarLeaveTop");
      },
      onBottom: (t) => {
        var e;
        return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarBottom", t);
      },
      onReachBottom: () => {
        var t;
        return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarReachBottom");
      },
      onLeaveBottom: () => {
        var t;
        return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarLeaveBottom");
      },
      onEdge: (t, e, s) => {
        var n;
        return (n = this.emits) == null ? void 0 : n.call(this, "scrollbarEdge", t, e, s);
      }
    };
  }
}
class ut {
  /**
   * Constructor for working with images.
   *
   * Конструктор для работы с изображениями.
   * @param props input parameter/ входной параметр
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, e, s, n) {
    /**
     * Проверяет, есть ли изображение/ Checks if an image exists
     */
    i(this, "isImage", m(() => !!this.props.image));
    /**
     * Возвращает данные для передачи компоненту/ Returns data to pass to the component
     */
    i(this, "bind", m(() => J(this.props.image, Q(this.extra), "value")));
    this.props = t, this.components = e, this.emits = s, this.extra = n;
  }
  render() {
    return this.components && this.isImage.value ? this.components.render("image", this.bind.value) : [];
  }
  onLoad(t) {
    var e;
    (e = this.emits) == null || e.call(this, "load", t);
  }
}
const g = -1;
class pt {
  constructor(t) {
    i(this, "x", g);
    i(this, "y", g);
    this.element = t;
  }
  /**
   * Checks if the button was pressed.
   *
   * Проверяет, было ли нажатие на кнопку.
   */
  is() {
    return this.x !== g && this.y !== g;
  }
  /**
   * Checks if the coordinates are at the origin (0,0).
   *
   * Проверяет, находятся ли координаты в начале координат (0,0).
   */
  isZero() {
    return this.x === 0 && this.y === 0;
  }
  /**
   * Returns the X coordinate.
   *
   * Возвращает координату X.
   */
  getX() {
    return this.x;
  }
  /**
   * Returns the Y coordinate.
   *
   * Возвращает координату Y.
   */
  getY() {
    return this.y;
  }
  /**
   * Returns the shift along the X coordinate.
   *
   * Возвращает сдвиг по координате X.
   */
  getShiftX(t) {
    return this.x - t;
  }
  /**
   * Returns the shift along the Y coordinate.
   *
   * Возвращает сдвиг по координате Y.
   */
  getShiftY(t) {
    return this.y - t;
  }
  /**
   * Changes the coordinates.
   *
   * Изменяет координаты.
   * @param x value of X/ значение X
   * @param y value of Y/ значение Y
   */
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.x = g, this.y = g, this;
  }
  /**
   * The method updates the current position.
   *
   * Метод обновляет текущее положение.
   */
  update() {
    if (this.is() && this.isZero()) {
      const t = this.element.getControlRect();
      t && this.set(
        t.left + t.width / 2,
        t.top + t.height / 2
      );
    }
    return this;
  }
}
class gt {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    this.props = t;
  }
  /**
   * Hook for preparing elements before opening/closing.
   *
   * Хук для подготовки элементов перед открытием/закрытием.
   */
  async preparation() {
    this.props.preparation && await y(this.props.preparation);
  }
  /**
   * Hook before opening/closing.
   *
   * Хук перед открытием/закрытием.
   * @param open current state of the window/ текущее состояние окна
   */
  async before(t) {
    return t ? await this.beforeOpening() : await this.beforeClosing();
  }
  /**
   * Hook before opening.
   *
   * Хук перед открытием.
   */
  async beforeOpening() {
    return this.props.beforeOpening ? await y(this.props.beforeOpening) : !0;
  }
  /**
   * Hook before closing.
   *
   * Хук перед закрытием.
   */
  async beforeClosing() {
    return this.props.beforeClosing ? await y(this.props.beforeClosing) : !0;
  }
  /**
   * Hook after opening/closing.
   *
   * Хук после открытия/закрытия.
   * @param open current state of the window/ текущее состояние окна
   */
  async after(t) {
    return t ? await this.opening() : await this.closing();
  }
  /**
   * Hook after opening.
   *
   * Хук после открытия.
   */
  async opening() {
    return this.props.opening ? await y(this.props.opening) : !1;
  }
  /**
   * Hook after closing.
   *
   * Хук после закрытия.
   */
  async closing() {
    return this.props.closing ? await y(this.props.closing) : !1;
  }
}
class mt {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element the element of the window itself/ элемент самого окна
   */
  constructor(t, e) {
    this.classes = t, this.element = e;
  }
  /**
   * Checks if the main element exists.
   *
   * Проверяет, есть ли главный элемент.
   */
  isMain() {
    return !!this.element.value;
  }
  /**
   * Returns the main element.
   *
   * Возвращает главного элемента.
   */
  getMain() {
    return this.element.value;
  }
  /**
   * Returns the control element of the current component.
   *
   * Возвращает элемент управления текущего компонента.
   */
  getControl() {
    return this.classes.findControl();
  }
  /**
   * Returns the dimensions of the control element.
   *
   * Возвращает размеры элемента управления.
   */
  getControlRect() {
    var t;
    return ((t = this.getControl()) == null ? void 0 : t.getBoundingClientRect()) || void 0;
  }
  /**
   * Returns the body element of the window.
   *
   * Возвращает элемент тела окна.
   */
  getBody() {
    return this.classes.findBody();
  }
  /**
   * Returns the dimensions of the window's body element.
   *
   * Возвращает размеры элемента тела окна.
   */
  getBodyRect() {
    var t;
    return ((t = this.getBody()) == null ? void 0 : t.getBoundingClientRect()) || void 0;
  }
  /**
   * Returns the window context element.
   *
   * Возвращает элемент контекста окна.
   */
  getBodyContext() {
    return this.classes.findBodyContext();
  }
}
class ft {
  /**
   * Constructor
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t) {
    i(this, "item", v(c.close));
    this.element = t;
  }
  /**
   * Checks if the current status is closed (hide).
   *
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide() {
    return this.item.value === c.hide;
  }
  /**
   * Checks if the current status is open (open/flash).
   *
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen() {
    return this.item.value === c.open || this.item.value === c.flash;
  }
  /**
   * Change the current status.
   *
   * Изменить текущий статус.
   * @param value value/ значение
   */
  set(t) {
    return this.item.value = t, this.update(), this;
  }
  /**
   * Translates status to display.
   *
   * Переводит статус в display.
   */
  toDisplay() {
    return this.set(c.display), this;
  }
  /**
   * Translates status to preparation.
   *
   * Переводит статус в preparation.
   */
  toPreparation() {
    return this.set(c.preparation), this;
  }
  /**
   * Translates status to flash.
   *
   * Переводит статус в flash.
   */
  toFlash() {
    return this.set(c.flash), this;
  }
  /**
   * Translates status to open.
   *
   * Переводит статус в open.
   */
  toOpen() {
    return this.set(c.open), this;
  }
  /**
   * Translates status to hide.
   *
   * Переводит статус в hide.
   */
  toHide() {
    return this.set(c.hide), this;
  }
  /**
   * Translates status to close.
   *
   * Переводит статус в close.
   */
  toClose() {
    return this.set(c.close), this;
  }
  /**
   * Updates the data-status attribute on the main element and teleport element.
   *
   * Обновляет атрибут data-status на основном элементе и элементе телепорта.
   */
  update() {
    const t = this.element.getMain();
    if (t) {
      const e = t.parentElement;
      t.dataset.status = this.item.value, e && e.dataset.windowTeleport && (e.dataset.status = this.item.value);
    }
  }
}
class yt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t, e, s) {
    i(this, "item", v(!1));
    /**
     * Event of the animation end of the closing prohibition.
     *
     * Событие окончания анимации запрета на закрытие.
     */
    i(this, "onTransitionend", () => {
      this.removeEvent(), this.disabled();
    });
    this.props = t, this.classes = e, this.element = s, f(this.item, (n) => {
      const o = this.element.getMain();
      o && (n ? (this.removeEvent(), o.classList.add(this.classes.list.persistent), o.addEventListener("animationend", this.onTransitionend)) : o.classList.remove(this.classes.list.persistent));
    });
  }
  /**
   * Request to enable animation.
   *
   * Запрос на включение анимации.
   */
  on() {
    return this.props.persistent ? (this.item.value = !0, !0) : !1;
  }
  /**
   * Request to disable animation.
   *
   * Запрос на выключение анимации.
   */
  disabled() {
    return this.item.value && (this.item.value = !1), this;
  }
  /**
   * Removes the event of the end of the animation.
   *
   * Удаляет событие окончания анимации.
   */
  removeEvent() {
    var t;
    (t = this.element.getMain()) == null || t.removeEventListener("animationend", this.onTransitionend);
  }
}
class wt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   */
  constructor(t, e) {
    i(this, "control", !1);
    this.props = t, this.classes = e;
  }
  /**
   * Is the flash property active.
   *
   * Активно ли свойство flash.
   */
  is() {
    return !!this.props.flash;
  }
  /**
   * Checks whether the animation needs to be disabled.
   *
   * Проверяет, надо ли отключить анимацию.
   */
  isOpen() {
    return this.is() || this.control;
  }
  /**
   * Checks whether the animation needs to be disabled when closing.
   *
   * Проверяет, надо ли отключить анимацию при закрытии.
   */
  isClose() {
    return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(c.hide)}`);
  }
  /**
   * Change the value of the control parameter.
   *
   * Изменить значение параметра control.
   * @param target the element that gets focus on click/ элемент, который получает фокус при клике
   */
  setControl(t) {
    var e;
    return this.control = ((e = t == null ? void 0 : t.closest(`.${this.classes.list.control}`)) == null ? void 0 : e.dataset.window) === this.classes.getId(), this;
  }
}
class vt {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t, e) {
    i(this, "top", 0);
    i(this, "right", 0);
    i(this, "bottom", 0);
    i(this, "left", 0);
    i(this, "width", 0);
    i(this, "height", 0);
    i(this, "innerWidth", 0);
    i(this, "innerHeight", 0);
    i(this, "controlWidth", 0);
    i(this, "controlHeight", 0);
    i(this, "padding", 0);
    i(this, "location", "");
    this.classes = t, this.element = e;
  }
  /**
   * Returns the distance from the top point.
   *
   * Возвращает расстояние от верхней точки.
   */
  getTop() {
    return this.top;
  }
  /**
   * Returns the distance from the right point.
   *
   * Возвращает расстояние от правой точки.
   */
  getRight() {
    return this.right;
  }
  /**
   * Returns the distance from the lower point.
   *
   * Возвращает расстояние от нижней точки.
   */
  getBottom() {
    return this.bottom;
  }
  /**
   * Returns the distance from the left point.
   *
   * Возвращает расстояние от левой точки.
   */
  getLeft() {
    return this.left;
  }
  /**
   * Returns the width of the element.
   *
   * Возвращает ширину элемента.
   */
  getWidth() {
    return this.width;
  }
  /**
   * Returns the height of the element.
   *
   * Возвращает высоту элемента.
   */
  getHeight() {
    return this.height;
  }
  /**
   * Returns the width of the window.
   *
   * Возвращает ширину окна.
   */
  getInnerWidth() {
    return this.innerWidth;
  }
  /**
   * Returns the height of the window.
   *
   * Возвращает высоту окна.
   */
  getInnerHeight() {
    return this.innerHeight;
  }
  /**
   * Returns the width of the control element.
   *
   * Возвращает ширину элемента управления.
   */
  getControlWidth() {
    return this.controlWidth;
  }
  /**
   * Returns the height of the control element.
   *
   * Возвращает высоту элемента управления.
   */
  getControlHeight() {
    return this.controlHeight;
  }
  /**
   * Returns the margins of the element.
   *
   * Возвращает отступы у элемента.
   */
  getPadding() {
    return this.padding;
  }
  /**
   * Returns the values of the element's position.
   *
   * Возвращает значения положения элемента.
   */
  getLocation() {
    return this.location;
  }
  /**
   * Returns the maximum height of the body.
   *
   * Возвращает максимальную высоту у body.
   */
  getMaxHeight() {
    return window.innerHeight - this.padding * 2;
  }
  /**
   * Data updates.
   *
   * Обновления данных.
   */
  update() {
    const t = this.element.getMain(), e = this.element.getControlRect();
    return t && e && (this.top !== e.top || this.right !== e.right || this.bottom !== e.bottom || this.left !== e.left || this.width !== t.offsetWidth || this.height !== t.offsetHeight || this.innerWidth !== window.innerWidth || this.innerHeight !== window.innerHeight) ? (this.top = e.top, this.right = e.right, this.bottom = e.bottom, this.left = e.left, this.width = t.offsetWidth, this.height = t.offsetHeight, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.controlWidth = e.width, this.controlHeight = e.height, this.padding = this.initPadding(), this.location = this.initLocation(e.top + e.height / 2), !0) : !1;
  }
  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.innerWidth = 0, this.innerHeight = 0, this;
  }
  /**
   * Initializes padding value from computed styles.
   *
   * Инициализирует значение отступов из вычисленных стилей.
   */
  initPadding() {
    const t = this.element.getMain();
    let e = 0;
    if (t) {
      const s = getComputedStyle(t), n = s.paddingTop.replace(/[^0-9]+/g, ""), o = s.paddingBottom.replace(/[^0-9]+/g, "");
      e = (parseInt(n) + parseInt(o)) / 2;
    }
    return e > 0 ? e : 16;
  }
  /**
   * Calculates control position values.
   *
   * Вычисляет значения положения контроля.
   * @param top position of an element/ положение элемента
   */
  initLocation(t) {
    var r, a;
    const e = (a = (r = this.element.getBody()) == null ? void 0 : r.offsetHeight) != null ? a : 0, s = e / 2, n = this.innerHeight - this.padding * 2 - e, o = t - s - this.padding;
    return o < this.padding ? "0px" : t + s >= this.innerHeight - this.padding ? `${n}px` : `${o}px`;
  }
}
class bt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   */
  constructor(t, e, s, n) {
    i(this, "x", 0);
    i(this, "y", 0);
    this.props = t, this.client = e, this.element = s, this.coordinates = n;
  }
  /**
   * Checks if the alignment type is above the element.
   *
   * Проверяет, является ли тип выравнивания над элементом.
   */
  isOver() {
    return this.props.axis === "on";
  }
  /**
   * Returns the X position.
   *
   * Возвращает позицию X.
   */
  getX() {
    return this.x;
  }
  /**
   * Returns the Y position.
   *
   * Возвращает позицию Y.
   */
  getY() {
    return this.y;
  }
  /**
   * Returns the X position for styles.
   *
   * Возвращает позицию X для стилей.
   */
  getStyleX() {
    return `${this.x}px`;
  }
  /**
   * Returns the Y position for styles.
   *
   * Возвращает позицию Y для стилей.
   */
  getStyleY() {
    return `${this.y}px`;
  }
  /**
   * Update of the element's position coordinates.
   *
   * Обновление координаты положения элемента.
   */
  update() {
    return this.coordinates.update() ? (this.setX(), this.setY(), !0) : !1;
  }
  /**
   * Updates the scroll position if an element is selected.
   *
   * Обновляет место скрола, если выбран элемент.
   */
  updateScroll() {
    var e, s, n;
    const t = this.element.getBodyContext();
    if (this.isOver() && this.props.overElement && t && t.scrollHeight > t.offsetHeight) {
      const o = (e = S(this.props.overElement)) == null ? void 0 : e.getBoundingClientRect(), r = (s = this.element.getBody()) == null ? void 0 : s.getBoundingClientRect(), a = t == null ? void 0 : t.getBoundingClientRect(), l = (n = this.element.getControl()) == null ? void 0 : n.getBoundingClientRect();
      if (t && o && r && a) {
        const d = o.height / 2, u = o.top - a.top;
        if (l && this.coordinates.getMaxHeight() === r.height) {
          if (l.top + d < r.top) {
            t.scrollTop += u;
            return;
          }
          if (l.bottom - d > r.bottom) {
            t.scrollTop += u - a.height + o.height;
            return;
          }
          t.scrollTop += u - (l.top - a.top) - l.height / 2 + d;
          return;
        }
        t.scrollTop += u - a.height / 2 + d;
      }
    }
  }
  /**
   * Updates the scroll display status of the element.
   *
   * Обновляет статус отображения скролла у элемента.
   */
  updateBody() {
    if (B()) {
      const t = document.body, e = t.offsetHeight > window.innerHeight ? "scroll" : "none";
      t.dataset.scroll !== e && (t.dataset.scroll = e);
    }
  }
  /**
   * Returns the axis alignment values.
   *
   * Возвращает значения оси выравнивания.
   */
  getAxis() {
    var t, e;
    return this.isOver() ? "y" : (e = (t = this.props) == null ? void 0 : t.axis) != null ? e : "y";
  }
  /**
   * Returns the margins from the control element.
   *
   * Возвращает отступы от элемента управления.
   * @param axis the axis of alignment of the element/ ось выравнивания элемента
   */
  getIndent(t) {
    var e;
    return this.getAxis() === t ? (e = this.props.indent) != null ? e : 4 : 0;
  }
  /**
   * Calculation of the position for window alignment.
   *
   * Вычисление места положения для выравнивания окна.
   * @param rectTop high control coordinates/ высокие координаты контрола
   * @param rectBottom lower control coordinates/ нижние координаты контрола
   */
  getOverHeight(t, e) {
    var o, r;
    const s = (e - t) / 2;
    if (this.props.overElement) {
      const a = (o = S(this.props.overElement)) == null ? void 0 : o.getBoundingClientRect(), l = (r = this.element.getBody()) == null ? void 0 : r.getBoundingClientRect();
      if (a && l) {
        const d = a.top - l.top, u = a.height / 2;
        return e - d - u - s;
      }
    }
    const n = this.coordinates.getHeight() / 2;
    return e - s - n;
  }
  /**
   * Changes in position along the X coordinate.
   *
   * Изменения положения по координате X.
   */
  setX() {
    const t = this.element.getMain();
    if (t) {
      const e = this.getIndent("x"), s = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + e, n = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - e, o = [];
      this.getAxis() === "x" ? o.push(s, n) : o.push(n, s), this.x = this.calculationInner(
        o[0],
        o[1],
        t.offsetWidth,
        window.innerWidth,
        this.coordinates.getWidth()
      );
    }
    return this;
  }
  /**
   * Changes in position along the Y coordinate.
   *
   * Изменения положения по координате Y.
   */
  setY() {
    const t = this.element.getMain();
    if (t) {
      const e = this.getIndent("y"), s = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - e, n = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + e, o = [];
      if (this.isOver())
        return this.y = this.calculationOver(
          this.getOverHeight(s, n),
          s,
          n,
          t.offsetHeight,
          window.innerHeight
        ), this;
      this.getAxis() !== "x" ? o.push(n, s) : o.push(s, n), this.y = this.calculationInner(
        o[0],
        o[1],
        t.offsetHeight,
        window.innerHeight,
        this.coordinates.getHeight()
      );
    }
    return this;
  }
  /**
   * Calculation of the element's position.
   *
   * Вычисление положения элемента.
   * @param inValue initial values/ начальные значения
   * @param outValue final values/ конечные значения
   * @param length length of the object/ длина объекта
   * @param innerLength length of the indentation/ длина отступа
   * @param maxSize maximum length/ максимальная длина
   */
  calculationInner(t, e, s, n, o) {
    const r = this.coordinates.getPadding();
    return t + s <= n - r ? t : e - s > r ? e - s : n / 2 - o / 2;
  }
  /**
   * Calculation of the element's position.
   *
   * Вычисление положения над элемента.
   * @param value initial values/ начальные значения
   * @param top high control coordinates/ высокие координаты контрола
   * @param bottom lower control coordinates/ нижние координаты контрола
   * @param length length of the object/ длина объекта
   * @param innerLength length of the indentation/ длина отступа
   */
  calculationOver(t, e, s, n, o) {
    const r = this.coordinates.getPadding();
    if (s < r)
      return s;
    if (e > o - r) {
      const a = e - n - r;
      return a < r ? r : a;
    }
    return t < r ? r : t + n <= o - r ? t : o - n - r;
  }
}
class Ct {
  /**
   * Constructor
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   */
  constructor(t, e, s) {
    i(this, "x", null);
    i(this, "y", null);
    this.client = t, this.element = e, this.position = s;
  }
  /**
   * Returns the initial X point for the start of the animation.
   *
   * Возвращает начальную точку X для начала анимации.
   */
  getStyleX() {
    return this.x !== null ? `${this.x}px` : null;
  }
  /**
   * Returns the initial Y point for the start of the animation.
   *
   * Возвращает начальную точку Y для начала анимации.
   */
  getStyleY() {
    return this.y !== null ? `${this.y}px` : null;
  }
  /**
   * Updating the initial position of the element for the animation.
   *
   * Обновление начального положения элемента для анимации.
   */
  update() {
    const t = this.element.getMain();
    if (this.client.update(), !this.client.is())
      this.x = 0, this.y = 0;
    else if (t && getComputedStyle(t).getPropertyValue(b).includes("--MENU--")) {
      const e = this.element.getBodyRect();
      e && (this.x = this.client.getShiftX(e.left), this.y = this.client.getShiftY(e.top));
    } else
      this.x = this.client.getShiftX(this.position.getX()), this.y = this.client.getShiftY(this.position.getY());
    return this;
  }
  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.x = null, this.y = null, this;
  }
}
class xt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t, e, s) {
    i(this, "event");
    i(this, "item", v(!1));
    /**
     * The function called when an event is triggered.
     *
     * Вызываемая функция при срабатывании события.
     */
    i(this, "listener", () => {
      tt(this.item, this.isStatic());
    });
    /**
     * Performs status check and activates events when turned on.
     *
     * Выполняет проверку статуса и активизирует события при включении.
     */
    i(this, "make", () => {
      this.isStaticMod() ? (this.start(), requestAnimationFrame(this.listener)) : this.stop();
    });
    this.props = t, this.element = s, f([e.staticMode], this.make, { immediate: !0 });
  }
  /**
   * Checks if the static mode is enabled.
   *
   * Проверяет, включен ли режим статичности.
   */
  isStaticMod() {
    return !!this.props.staticMode;
  }
  /**
   * Starts the status tracking event.
   *
   * Стартует событие слежения за статусами.
   */
  start() {
    this.event || (this.event = new k(window, ["resize"], this.listener)), this.event.start();
  }
  /**
   * Restores the data to its previous state.
   *
   * Восстанавливает данные в прежнее состояние.
   */
  stop() {
    this.event && (this.event.stop(), this.event = void 0);
  }
  /**
   * Checks if the static window is active.
   *
   * Проверяет, активно ли статичное окно.
   */
  isStatic() {
    const t = this.element.getMain();
    return !!(t && getComputedStyle(t).getPropertyValue(b).includes("--STATIC--"));
  }
}
class Bt {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s) {
    this.classes = t, this.element = e, this.emits = s;
  }
  /**
   * Perform events.
   *
   * Выполнить события.
   * @param open current state of the window/ текущее состояние окна
   */
  on(t) {
    var e;
    (e = this.emits) == null || e.call(this, "window", this.getEmitOptions(t));
  }
  /**
   * Returns an object for calling the event handler.
   *
   * Возвращает объект для вызова обработчика события.
   * @param open current state of the window/ текущее состояние окна
   */
  getEmitOptions(t) {
    return {
      id: this.classes.getId(),
      element: this.element.getMain(),
      control: this.element.getControl(),
      open: t
    };
  }
}
class Mt {
  /**
   * Constructor
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
   * @param className class name/ название класса
   */
  constructor(t, e, s, n, o) {
    this.element = t, this.coordinates = e, this.position = s, this.origin = n, this.className = o, f(this.element.element, () => this.update());
  }
  /**
   * Data update.
   *
   * Обновление данных.
   */
  update() {
    const t = this.element.getMain();
    t && (t.style.setProperty(`--${this.className}-sys-inset-x`, this.position.getStyleX()), t.style.setProperty(`--${this.className}-sys-inset-y`, this.position.getStyleY()), t.style.setProperty(`--${this.className}-origin-x`, this.origin.getStyleX()), t.style.setProperty(`--${this.className}-origin-y`, this.origin.getStyleY()), t.style.setProperty(`--${this.className}-sys-control-width`, `${this.coordinates.getControlWidth()}px`), t.style.setProperty(`--${this.className}-sys-control-height`, `${this.coordinates.getControlHeight()}px`), t.style.setProperty(`--${this.className}-sys-location`, this.coordinates.getLocation()));
  }
  /**
   * Updates the window type (menu or modal).
   *
   * Обновляет тип окна (меню или модальное).
   * @param isMenu whether the window is a menu/ является ли окно меню
   */
  updateType(t) {
    const e = this.element.getMain();
    if (e && (t && e.dataset.windowMenu !== "menu" || !t && e.dataset.windowMenu === "menu")) {
      const s = e.parentElement;
      e.dataset.windowMenu = t ? "menu" : "modal", s && s.dataset.windowTeleport && (s.dataset.windowMenu = e.dataset.windowMenu);
    }
  }
}
class St {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param hook object for working with hooks/ объект для работы с хуками
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param tabIndex class object for working with tab indices/ объект класса для работы с табуляцией
   * @param status object for working with statuses/ объект для работы со статусами
   * @param flash class object for working with fast window opening/ объект класса для работы с быстрым открытием окна
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
   * @param emit the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param styles an object for working with the styles of an element/ объект для работы со стилями элемента
   */
  constructor(t, e, s, n, o, r, a, l, d, u, C, x) {
    i(this, "item", v(!1));
    i(this, "first", v(!1));
    i(this, "clicks", 0);
    /**
     * Checks whether the element should be kept in the DOM.
     *
     * Проверяет, надо ли элемент оставить в DOM.
     */
    i(this, "inDom", m(() => this.item.value || this.props.staticMode || !!this.props.inDom && this.first.value));
    /**
     * Changes the current state.
     *
     * Изменяет текущее состояние.
     * @param open the value of the current state/ значение текущего состояния
     */
    i(this, "set", async (t) => {
      this.item.value !== !!t && await this.toggle();
    });
    /**
     * Opens the window.
     *
     * Открывает окно.
     */
    i(this, "open", async () => this.set(!0));
    /**
     * Closes the window.
     *
     * Закрывает окно.
     */
    i(this, "close", async () => this.set(!1));
    /**
     * Switches the state, that is, opens or closes the window, depending on the value of item.
     *
     * Переключает состояние, то есть открывает или закрывает окно, в зависимости от значения item.
     */
    i(this, "toggle", async () => {
      if (this.clicks > 1)
        return;
      const t = !this.item.value;
      await this.hook.before(t) && (t ? (this.reset(), this.status.toDisplay(), await this.setOpen(t), requestAnimationFrame(async () => {
        this.status.update(), await this.hook.preparation(), await this.watchPosition(), this.styles.updateType(!0), requestAnimationFrame(async () => {
          this.position.updateScroll(), this.status.toPreparation(), requestAnimationFrame(async () => {
            this.flash.isClose() ? this.status.toFlash() : this.status.toOpen(), requestAnimationFrame(() => {
              this.hook.opening(), this.resetClicks(), this.props.embedded || this.tabIndex.goTo();
            }), this.emit.on(this.item.value);
          });
        });
      })) : (this.client.reset(), this.flash.isOpen() ? this.toClose() : requestAnimationFrame(() => {
        this.status.toHide(), this.resetClicks();
      })));
    });
    this.props = t, this.client = e, this.hook = s, this.element = n, this.tabIndex = o, this.status = r, this.flash = a, this.coordinates = l, this.position = d, this.origin = u, this.emit = C, this.styles = x;
  }
  /**
   * Checks if the window is open.
   *
   * Проверяет, открыто ли окно.
   */
  isClicks() {
    return this.clicks > 0;
  }
  /**
   * Close handler on animation end.
   *
   * Обработчик закрытия по окончании анимации.
   */
  closeForEvent() {
    this.status.isHide() ? this.toClose() : this.status.isOpen() || this.hook.closing().then();
  }
  /**
   * Resets all data to initial values.
   *
   * Сбрасывает все данные к начальным значениям.
   */
  reset() {
    return this.coordinates.reset(), this.origin.reset(), this;
  }
  /**
   * The method increases the number of clicks.
   *
   * Метод увеличивает количество кликов.
   */
  pressed() {
    return this.clicks++, setTimeout(() => this.resetClicks(), 128), this;
  }
  /**
   * The method resets the number of clicks.
   *
   * Метод сбрасывает количество кликов.
   */
  resetClicks() {
    return this.clicks = 0, this;
  }
  /**
   * The method updates the current position.
   *
   * Метод обновляет текущее положение.
   */
  async watchPosition() {
    this.item.value && this.element.isMain() ? (this.position.update(), this.position.updateBody(), this.styles.update(), this.origin.update(), this.styles.update(), this.watchCoordinates()) : this.reset();
  }
  /**
   * Changes values and triggers events.
   *
   * Изменяет значения и вызывает события.
   * @param open the value of the current state/ значение текущего состояния
   */
  async setOpen(t) {
    return this.item.value = t, t && !this.first.value && (this.first.value = !0), this;
  }
  /**
   * Changing the location of the menu window.
   *
   * Изменение расположения окна меню.
   */
  watchCoordinates() {
    return et(
      () => {
        const t = this.element.getMain();
        if (t) {
          const e = getComputedStyle(t).getPropertyValue(b).includes("--MENU--");
          e && this.position.update() && this.styles.update(), this.styles.updateType(e);
        }
      },
      () => this.item.value && !this.status.isHide()
    ), this;
  }
  /**
   * Transition to the closing state.
   *
   * Переход в состояние закрытия.
   */
  toClose() {
    setTimeout(async () => {
      await this.setOpen(!1), await this.hook.closing(), this.resetClicks(), this.tabIndex.reset(), this.emit.on(this.item.value);
    }, 48), this.status.toClose();
  }
}
class kt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param persistent object for working with the animation before turning off the window/ объект для работы с анимацией перед выключением окна
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param staticMode class object for working with static status/ объект класса для работы со статическим статусом
   * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
   */
  constructor(t, e, s, n, o, r) {
    i(this, "target");
    i(this, "focus");
    this.props = t, this.persistent = e, this.classes = s, this.element = n, this.staticMode = o, this.open = r;
  }
  /**
   * Updates the window opening status.
   *
   * Обновления статус открытия окно.
   * @param target the selected window/ выбранное окно
   */
  async update(t) {
    if (!this.open.isClicks() && (this.target = t, this.focus = this.getFocus(), !!B() && this.isTargetInBody() && !this.staticMode.item.value))
      if (this.open.pressed(), this.open.item.value) {
        if (this.isOpenOnly() || this.isBlockOther())
          return;
        this.isContextmenu() ? await this.open.reset().watchPosition() : this.focus ? this.isFocus() ? this.isTarget() ? this.isNotBlockChildren() && (this.persistent.on() || await this.open.toggle()) : (this.isClose() || this.isAutoClose() || !this.isChildren()) && await this.open.toggle() : this.isNotBlock() && (this.isChildren() ? setTimeout(() => {
          requestAnimationFrame(async () => {
            var e;
            ["open", "flash"].indexOf(((e = this.focus) == null ? void 0 : e.dataset.status) || "") === -1 && this.isMenu() && await this.open.toggle();
          });
        }, 40) : await this.open.toggle()) : await this.open.toggle();
      } else this.isEnabled() && await this.open.toggle();
  }
  /**
   * Returns the element in focus.
   *
   * Возвращает элемент в фокусе.
   */
  getFocus() {
    return this.classes.findMain(this.getTarget());
  }
  getTarget() {
    var t, e;
    return (e = (t = this.target) != null ? t : this.element.getMain()) != null ? e : document.body;
  }
  /**
   * Checks if the selected element is in focus.
   *
   * Проверяет, находится ли выбранный элемент в фокусе.
   */
  isFocus() {
    return this.element.getMain() === this.focus;
  }
  /**
   * Checks if the target element is the window itself.
   *
   * Проверяет, является ли элемент-цель самим окном.
   */
  isTarget() {
    return this.element.getMain() === this.target;
  }
  isTargetInBody() {
    var t;
    return !!((t = this.target) != null && t.closest("body"));
  }
  /**
   * Checks if the selected window is under other windows.
   *
   * Проверяет, находится ли выбранное окно под другими окнами.
   * @param target the selected window/ выбранное окно
   */
  isChildren(t = this.getTarget()) {
    const e = this.classes.findMain(t);
    if (e) {
      if (e.dataset.window === this.classes.getId())
        return !0;
      const s = this.classes.findControlByElement(e);
      if (s)
        return this.isChildren(s);
    }
    return !1;
  }
  /**
   * Checks if the window is enabled or if the conditions for opening the window are met.
   *
   * Проверяет, включено ли окно или подходят ли условия для открытия окна.
   */
  isEnabled() {
    return !this.props.disabled && !this.getTarget().closest(`.${this.classes.list.controlStatic}`);
  }
  /**
   * Checks if the window needs to be closed automatically.
   *
   * Проверяет, нужно ли автоматически закрывать окно.
   */
  isAutoClose() {
    return !!this.props.autoClose && !this.getTarget().closest(`.${this.classes.list.static}, .${this.classes.getId()} .${this.classes.list.control}`);
  }
  /**
   * Checks if the change of the opening status of the window is blocked.
   *
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   */
  isNotBlock() {
    return this.isNotBlockItem(this.focus);
  }
  /**
   * Checks if the change of the opening status of the window is blocked.
   *
   * Проверяет, заблокировано ли изменение статуса открытия окна.
   * @param item element for testing/ элемент для проверки
   */
  isNotBlockItem(t) {
    var s;
    const e = this.getTarget();
    return (!this.isMenu(e) || !this.classes.isWindow(e)) && !((s = this.classes.findControlByElement(t)) != null && s.closest(`.${this.classes.list.block}`));
  }
  /**
   * Checks if there is an element with a close lock.
   *
   * Проверяет, есть ли элемент с блокировкой закрытия.
   */
  isNotBlockChildren() {
    var t, e;
    return !((t = this.classes.findBody()) != null && t.querySelector(`.${this.classes.list.blockChildren}`)) && !((e = this.classes.findBody()) != null && e.querySelector('[data-window-open="open"]'));
  }
  /**
   * Checks if there is a blocking element from other windows.
   *
   * Проверяет, есть ли блокирующий элемент от других окон.
   */
  isBlockOther() {
    return !!this.classes.findBodyOther(`.${this.classes.list.blockOther}`);
  }
  /**
   * Checks if it needs to be opened when the right button is pressed.
   *
   * Проверяет, нужно ли открывать при нажатии правой кнопки.
   */
  isContextmenu() {
    return !!(this.props.contextmenu && this.getTarget().closest(this.classes.getSelectorControl()));
  }
  /**
   * Checks if the window can be closed.
   *
   * Проверяет, можно ли закрыть окно.
   */
  isClose() {
    return !!this.getTarget().closest(`.${this.classes.list.close}:not(.${this.classes.list.static})`);
  }
  /**
   * Checks if the element is a menu.
   *
   * Проверяет, является ли элемент меню.
   */
  isMenu(t = this.element.getMain()) {
    if (t) {
      const s = getComputedStyle(t).getPropertyValue(b);
      return s.includes("--MENU--") || s.includes("--MENU-WINDOW--");
    }
    return !1;
  }
  /**
   * Checks if the element should only open.
   *
   * Проверяет, должен ли элемент только открываться.
   */
  isOpenOnly() {
    return !!this.getTarget().closest(`.${this.classes.list.controlOpenOnly}`);
  }
}
class It {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param tabIndex class object for working with tab indices/ объект класса для работы с табуляцией
   * @param status object for working with statuses/ объект для работы со статусами
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param flash class object for working with fast window opening/ объект класса для работы с быстрым открытием окна
   * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
   * @param verification an object for working with the check for changing the status of opening or closing/ объект для работы с проверкой изменения статуса открытия или закрытия
   */
  constructor(t, e, s, n, o, r, a) {
    i(this, "event");
    /**
     * Events of pressing a control element.
     *
     * События нажатия на элемент управления.
     * @param event event object/ объект события
     */
    i(this, "onClick", async (t) => {
      this.props.contextmenu || await this.on(t);
    });
    /**
     * Events of pressing a key.
     *
     * События нажатия на клавишу.
     * @param event event object/ объект события
     */
    i(this, "onKeydown", async (t) => {
      st(t) && (t.preventDefault(), await this.onClick(t));
    });
    /**
     * Events of pressing the right mouse button on a control element.
     *
     * События нажатия на правую кнопку мыши на элемент управления.
     * @param event event object/ объект события
     */
    i(this, "onContextmenu", async (t) => {
      this.props.contextmenu && (t.preventDefault(), await this.on(t));
    });
    /**
     * Event of animation end when closing the window.
     *
     * Событие окончания анимации при закрытии окна.
     */
    i(this, "onTransition", () => this.open.closeForEvent());
    /**
     * Callback of the event when pressing any area for checking and changing the opening state.
     *
     * Callback события при нажатии на любую область для проверки и изменения состояния открытия.
     * @param event event instance/ экземпляр события
     */
    i(this, "onGlobal", async (t) => {
      (!t || t.type === "click" && (!this.props.contextmenu || this.open.item.value) || t.type === "contextmenu" && this.props.contextmenu) && (this.open.item.value ? (this.flash.setControl(t == null ? void 0 : t.target), await this.verification.update(t == null ? void 0 : t.target)) : this.event.stop());
    });
    this.props = t, this.tabIndex = e, this.status = s, this.client = n, this.flash = o, this.open = r, this.verification = a, this.event = new k(
      "body",
      ["click", "contextmenu"],
      this.onGlobal
    ), f(
      [
        this.open.item,
        this.status.item
      ],
      () => this.toggle()
    );
  }
  /**
   * Starts listening to global events.
   *
   * Стартует прослушивание глобальных событий.
   */
  start() {
    return this.props.embedded || this.event.start(), this;
  }
  /**
   * Stop the global event.
   *
   * Остановить глобальное событие.
   */
  stop() {
    return this.event.stop(), this;
  }
  /**
   * Changes the event listening status depending on the window's open status.
   *
   * Изменяет статус прослушивания события в зависимости от статуса открытия окна.
   */
  toggle() {
    return this.open.item.value && this.status.isOpen() ? this.start() : this.stop(), this;
  }
  /**
   * Event activation.
   *
   * Активация события.
   * @param event event object/ объект события
   */
  async on(t) {
    this.tabIndex.updateOldElement(), this.client.set(
      it(t),
      nt(t)
    ), await this.verification.update(t.target);
  }
}
class Wt {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param classes an object for working with class names / объект для работы с названиями классов
   * @param staticMode class object for working with static status / объект класса для работы со статическим статусом
   * @param open an object for working with the open state of the window / объект для работы с состоянием открытия окна
   */
  constructor(t, e, s, n) {
    i(this, "elements", []);
    this.props = t, this.classes = e, this.staticMode = s, this.open = n, f(
      this.open.item,
      (o) => {
        this.props.embedded || this.staticMode.item.value || (o ? this.toHidden() : this.toShow());
      },
      {
        immediate: !0
      }
    );
  }
  /**
   * Returns the aria attribute data for hiding elements.
   *
   * Возвращает данные aria-атрибута для скрытия элементов.
   */
  getAriaData() {
    const t = w.hidden(), e = Object.keys(t)[0], s = Object.values(t)[0];
    return {
      key: e,
      value: s
    };
  }
  /**
   * Finds all elements outside the window that need to be hidden.
   *
   * Находит все элементы вне окна, которые нужно скрыть.
   */
  findElements() {
    if (B()) {
      const t = this.classes.getId();
      return document.querySelectorAll(
        `body > *:not([data-window-teleport="${t}"]):not(.${t}):not(script):not(style)`
      );
    }
  }
  /**
   * Hides elements outside the window by adding aria-hidden attribute.
   *
   * Скрывает элементы вне окна, добавляя атрибут aria-hidden.
   */
  toHidden() {
    const t = this.findElements();
    if (t) {
      const e = this.getAriaData();
      this.elements = [], t.forEach((s) => {
        s.hasAttribute(e.key) || s.hasAttribute("inert") || (s.setAttribute(e.key, e.value), this.classes.isWindowOrTeleport(s) || s.setAttribute("inert", ""), this.elements.push(s));
      });
    } else
      this.elements = [];
  }
  /**
   * Shows previously hidden elements by removing aria-hidden attribute.
   *
   * Показывает ранее скрытые элементы, удаляя атрибут aria-hidden.
   */
  toShow() {
    const t = this.getAriaData();
    this.elements.forEach((e) => {
      e.removeAttribute(t.key), e.removeAttribute("inert");
    }), this.elements = [];
  }
}
class Tt {
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
   * @param WindowClassesConstructor class for working with window classes/ класс для работы с классами окна
   * @param WindowClientConstructor class for working with window client/ класс для работы с клиентом окна
   * @param WindowCoordinatesConstructor class for working with coordinates/ класс для работы с координатами
   * @param WindowElementConstructor class for working with window elements/ класс для работы с элементами окна
   * @param WindowEmitConstructor class for working with emits/ класс для работы с событиями
   * @param WindowEscConstructor class for working with escape key/ класс для работы с клавишей Escape
   * @param WindowEventConstructor class for working with events/ класс для работы с событиями
   * @param WindowFlashConstructor class for working with flash animation/ класс для работы с анимацией вспышки
   * @param WindowHiddenConstructor class for working with hidden elements/ класс для работы со скрытыми элементами
   * @param WindowHookConstructor class for working with window hooks/ класс для работы с хуками окна
   * @param WindowOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param WindowOriginConstructor class for working with origin/ класс для работы с точкой начала
   * @param WindowPersistentConstructor class for working with persistent state/ класс для работы с постоянным состоянием
   * @param WindowPositionConstructor class for working with position/ класс для работы с позицией
   * @param WindowStaticConstructor class for working with static mode/ класс для работы со статическим режимом
   * @param WindowStatusConstructor class for working with window status/ класс для работы со статусом окна
   * @param WindowStylesConstructor class for working with styles/ класс для работы со стилями
   * @param WindowVerificationConstructor class for working with verification/ класс для работы с проверкой
   * @param ImageConstructor class for working with image/ класс для работы с изображением
   * @param ModelConstructor class for working with model/ класс для работы с моделью
   * @param ScrollbarConstructor class for working with scrollbar/ класс для работы со скроллбаром
   * @param TabIndexConstructor class for working with tab index/ класс для работы с индексом табуляции
   * @param TextConstructor class for working with text/ класс для работы с текстом
   */
  constructor(t, e, s, n, o, r, a, l, d = lt, u = pt, C = vt, x = mt, I = Bt, W = ct, T = It, O = wt, E = Wt, H = gt, A = St, $ = Ct, D = yt, P = bt, N = xt, R = ft, L = Mt, Y = kt, F = ut, X = rt, _ = dt, q = ht, U = at) {
    /** Client instance for window management/ Экземпляр клиента для управления окном */
    i(this, "client");
    /** Hook instance for window events/ Экземпляр хука для событий окна */
    i(this, "hook");
    /** Class manager for window styles/ Менеджер классов для стилей окна */
    i(this, "classes");
    /** Element manager for window DOM element/ Менеджер элементов для DOM элемента окна */
    i(this, "element");
    i(this, "tabIndex");
    /** Status manager for window state/ Менеджер статуса для состояния окна */
    i(this, "status");
    /** Persistent manager for window data/ Менеджер постоянных данных для окна */
    i(this, "persistent");
    /** Flash manager for window animations/ Менеджер анимаций для окна */
    i(this, "flash");
    /** Coordinates manager for window positioning/ Менеджер координат для позиционирования окна */
    i(this, "coordinates");
    /** Position manager for window placement/ Менеджер позиции для размещения окна */
    i(this, "position");
    /** Origin manager for window transformations/ Менеджер начальной точки для трансформаций окна */
    i(this, "origin");
    /** Static mode manager for window behavior/ Менеджер статического режима для поведения окна */
    i(this, "staticMode");
    /** Emit manager for window events/ Менеджер событий для окна */
    i(this, "emit");
    /** Styles manager for window appearance/ Менеджер стилей для внешнего вида окна */
    i(this, "styles");
    /** Open manager for window visibility/ Менеджер открытия для видимости окна */
    i(this, "open");
    /** Verification manager for window state validation/ Менеджер проверки для валидации состояния окна */
    i(this, "verification");
    /** Event manager for window interactions/ Менеджер событий для взаимодействий с окном */
    i(this, "event");
    /** Scrollbar manager for window content/ Менеджер скроллбара для содержимого окна */
    i(this, "scrollbar");
    /** Image manager for window content/ Менеджер изображений для содержимого окна */
    i(this, "image");
    /** Escape key manager for window closing/ Менеджер клавиши Escape для закрытия окна */
    i(this, "esc");
    i(this, "text");
    /** Hidden manager for hiding elements outside the window when open/ Менеджер скрытия элементов вне окна при открытии */
    i(this, "hidden");
    /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
    i(this, "slotData", m(() => ({
      classesWindow: this.classes.list,
      class: this.classes.list.controlId,
      open: this.open.item,
      onclick: this.event.onClick,
      onKeydown: this.event.onKeydown,
      oncontextmenu: this.event.onContextmenu,
      binds: {
        class: this.classes.list.controlId,
        onclick: this.event.onClick,
        onKeydown: this.event.onKeydown,
        oncontextmenu: this.event.onContextmenu,
        ...w.control(
          this.classes.getControlId(),
          this.classes.getId(),
          this.props.ariaHaspopup,
          this.open.item.value
        )
      }
    })));
    /**
     * Returns the list of available classes.
     *
     * Возвращает список доступных классов.
     */
    i(this, "classesList", m(() => ({
      [this.classes.getId()]: !0,
      [`${this.className}--staticMode`]: this.staticMode.item.value
    })));
    /**
     * Restores the data to its previous state.
     *
     * Восстанавливает данные в прежнее состояние.
     */
    i(this, "stop", () => {
      this.event.stop(), this.staticMode.stop();
    });
    this.props = t, this.refs = e, this.classDesign = n, this.className = o, this.components = r, this.slots = a, this.emits = l, this.hook = new H(t), this.classes = new d(o), this.element = new x(this.classes, s), this.client = new u(this.element), this.tabIndex = new q(
      () => this.element.getBody()
    ), this.status = new R(this.element), this.persistent = new D(t, this.classes, this.element), this.flash = new O(t, this.classes), this.coordinates = new C(this.classes, this.element), this.position = new P(t, this.client, this.element, this.coordinates), this.origin = new $(this.client, this.element, this.position), this.staticMode = new N(t, e, this.element), this.emit = new I(this.classes, this.element, l), this.styles = new L(
      this.element,
      this.coordinates,
      this.position,
      this.origin,
      o
    ), this.open = new A(
      t,
      this.client,
      this.hook,
      this.element,
      this.tabIndex,
      this.status,
      this.flash,
      this.coordinates,
      this.position,
      this.origin,
      this.emit,
      this.styles
    ), this.verification = new Y(
      t,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open
    ), this.event = new T(
      t,
      this.tabIndex,
      this.status,
      this.client,
      this.flash,
      this.open,
      this.verification
    ), this.scrollbar = new _(
      t,
      o,
      r,
      l
    ), this.image = new F(
      t,
      r,
      l
    ), this.esc = new W(
      this.open.item,
      () => this.open.close(),
      () => {
        var M;
        return !this.props.persistent && ((M = this.props.closeOnEsc) != null ? M : !0);
      }
    ), this.text = new U(this.props), this.hidden = new E(
      this.props,
      this.classes,
      this.staticMode,
      this.open
    ), new X("open", this.emits, this.open.item), K(() => {
      f([e.open], () => this.open.set(t.open), { immediate: !0 });
    }), j(this.stop);
  }
  /** Checks if the role is a menu/ Проверяет, является ли роль меню */
  isMenu() {
    return this.props.role === "menu" || this.props.role === "menuitemcheckbox" || this.props.role === "menuitemradio";
  }
}
const Lt = {
  indent: 4,
  ariaHaspopup: "dialog",
  role: "dialog",
  closeOnEsc: !0,
  // :default [!] System label / Системная метка
  axis: "y",
  imagePosition: "top",
  overscroll: !0
};
class Yt extends ot {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor window item class/ класс элемента окна
   */
  constructor(e, s, n, o = Tt) {
    super(
      e,
      s,
      n
    );
    i(this, "item");
    /**
     * Render main window element.
     *
     * Рендер главного элемента окна.
     */
    i(this, "renderMain", () => p(
      "div",
      this.propsMain.value,
      this.renderBody()
    ));
    /**
     * Render body element.
     *
     * Рендер элемента тела.
     */
    i(this, "renderBody", () => {
      var e, s;
      return p(
        "div",
        {
          key: "body",
          ...this.getAttrs(),
          class: {
            [String((e = this.classes) == null ? void 0 : e.value.body)]: !0,
            ...this.toClass((s = this.attrs) == null ? void 0 : s.class)
          }
        },
        [
          ...this.renderBodyImage(),
          ...this.renderBodyClose(),
          ...this.renderBodyGroup()
        ]
      );
    });
    /**
     * Generates an element to group the displayed data.
     *
     * Генерирует элемент для группировки выводимых данных.
     */
    i(this, "renderBodyGroup", () => {
      var s;
      const e = [];
      return this.initSlot("title", e, this.item.slotData.value), e.push(this.renderBodyContext()), this.initSlot("footer", e, this.item.slotData.value), [
        p("div", {
          key: "group",
          class: (s = this.classes) == null ? void 0 : s.value.bodyGroup
        }, e)
      ];
    });
    /**
     * Render context element.
     *
     * Рендер элемента контекста.
     */
    i(this, "renderBodyContext", () => {
      var e;
      return this.item.scrollbar.render(
        "div",
        {
          key: "bodyContext",
          class: (e = this.classes) == null ? void 0 : e.value.bodyContext,
          divider: this.props.divider,
          "data-window-body": "1"
        },
        () => this.initSlot("default", void 0, this.item.slotData.value)
      );
    });
    /**
     * Generates an element to display the image.
     *
     * Генерирует элемент для вывода изображения
     */
    i(this, "renderBodyImage", () => {
      var e;
      return this.props.image ? [p(
        "div",
        {
          key: "image",
          class: (e = this.classes) == null ? void 0 : e.value.image
        },
        this.item.image.render()
      )] : [];
    });
    /**
     * Generates an element to display the close button.
     *
     * Генерирует элемент для вывода кнопки закрытия.
     */
    i(this, "renderBodyClose", () => {
      var e;
      return this.props.closeButton ? this.components.render(
        "button",
        {
          key: "button-close",
          class: [
            (e = this.classes) == null ? void 0 : e.value.close,
            this.item.classes.list.close
          ],
          icon: this.props.iconClose,
          ...w.label(this.item.text.close.value)
        }
      ) : [];
    });
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    i(this, "propsMain", m(() => {
      var s, n;
      const e = {
        key: "main",
        ref: this.element,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        style: (n = this.styles) == null ? void 0 : n.value,
        "data-window": this.item.classes.getId(),
        onTransitionend: this.item.event.onTransition
      };
      return this.item.staticMode.isStaticMod() ? e : {
        ...e,
        ...w.role(this.props.role),
        ...w.modal(
          !0,
          this.props.ariaLabelledby,
          this.props.ariaDescribedby
        )
      };
    }));
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
    return {
      id: this.item.classes.getId(),
      open: this.item.open.item,
      setOpen: this.item.open.set,
      toOpen: this.item.open.open,
      toClose: this.item.open.close,
      toggle: this.item.open.toggle,
      control: this.item.slotData
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classesList.value,
      // :classes [!] System label / Системная метка
      body: this.getSubClass("body"),
      bodyGroup: this.getSubClass("body__group"),
      bodyContext: this.getSubClass("body__context"),
      control: this.getSubClass("control"),
      image: this.getSubClass("image"),
      close: this.getSubClass("close"),
      teleport: this.getSubClass("teleport")
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
    var s;
    const e = [];
    return this.initSlot("control", e, this.item.slotData.value), this.item.open.inDom.value && (this.item.staticMode.item.value || this.props.embedded ? e.push(this.renderMain()) : e.push(
      p(
        Z,
        {
          key: "teleport",
          to: "body"
        },
        p(
          "div",
          {
            class: (s = this.classes) == null ? void 0 : s.value.teleport,
            "data-window-teleport": this.item.classes.getId()
          },
          this.renderMain()
        )
      )
    )), e;
  }
}
export {
  Tt as Window,
  _t as WindowClassesInclude,
  Yt as WindowDesign,
  Ut as WindowInclude,
  Lt as defaultsWindow
};

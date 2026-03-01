import { computed as m, h as y, Teleport as Z, onMounted as J, watch as f, onUnmounted as Q, ref as x, defineComponent as tt, openBlock as et, createBlock as st, unref as it, mergeDefaults as ot } from "vue";
import { DesignConstructorAbstract as nt, isDomRuntime as k, getBind as rt, getRef as ht, toBind as lt, EventItem as E, getMouseClientX as at, getMouseClientY as ct, executePromise as b, frame as dt, getElement as O, setRef as ut, isEnter as pt, inArray as p, isFilled as H } from "@dxtmisha/functional";
import { l as C } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { V as gt } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { v as mt, E as wt } from "./WindowEsc-DTwn4Vsz-CY0loI-Z.js";
import { a as yt } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { l as vt, _ as B, r as u } from "./WindowClassesInclude-B56usxgx-Y5bmzXSo.js";
import { _ as ft } from "./D1Scrollbar.vue_vue_type_script_setup_true_lang-B6K5qHIs.js";
import { _ as bt } from "./D1Button.vue_vue_type_script_setup_true_lang-D8zgpiL8.js";
import { _ as Ct } from "./index-CoclgqEF.js";
var xt = Object.defineProperty, Bt = (l, t, e) => t in l ? xt(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e, o = (l, t, e) => Bt(l, typeof t != "symbol" ? t + "" : t, e);
class Mt {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i, s) {
    this.props = t, this.className = e, this.components = i, this.emits = s;
  }
  /**
   * Renders scrollbar component or fallback element
   * Рендерит компонент скроллбара или элемент по умолчанию
   */
  render(t, e, i) {
    var s;
    if (this.components) {
      const n = this.components.renderOne(
        "scrollbar",
        lt(
          {
            tag: t,
            class: `${this.className}__scrollbar`,
            ...e != null ? e : {},
            ...this.getScrollbarEvents()
          },
          (s = this.props.scrollbarAttrs) != null ? s : {}
        ),
        i
      );
      if (n)
        return [n];
    }
    return [y(t, e, i)];
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
      onEdge: (t, e, i) => {
        var s;
        return (s = this.emits) == null ? void 0 : s.call(this, "scrollbarEdge", t, e, i);
      }
    };
  }
}
class St {
  /**
   * Constructor for working with images.
   *
   * Конструктор для работы с изображениями.
   * @param props input parameter/ входной параметр
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, e, i, s) {
    o(this, "isImage", m(() => !!this.props.image)), o(this, "bind", m(() => rt(this.props.image, ht(this.extra), "value"))), this.props = t, this.components = e, this.emits = i, this.extra = s;
  }
  render() {
    return this.components && this.isImage.value ? this.components.render("image", this.bind.value) : [];
  }
  onLoad(t) {
    var e;
    (e = this.emits) == null || e.call(this, "load", t);
  }
}
const v = -1;
class kt {
  constructor(t) {
    o(this, "x", v), o(this, "y", v), this.element = t;
  }
  /**
   * Checks if the button was pressed.
   *
   * Проверяет, было ли нажатие на кнопку.
   */
  is() {
    return this.x !== v && this.y !== v;
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
    return this.x = v, this.y = v, this;
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
class Tt {
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
    this.props.preparation && await b(this.props.preparation);
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
    return this.props.beforeOpening ? await b(this.props.beforeOpening) : !0;
  }
  /**
   * Hook before closing.
   *
   * Хук перед закрытием.
   */
  async beforeClosing() {
    return this.props.beforeClosing ? await b(this.props.beforeClosing) : !0;
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
    return this.props.opening ? await b(this.props.opening) : !1;
  }
  /**
   * Hook after closing.
   *
   * Хук после закрытия.
   */
  async closing() {
    return this.props.closing ? await b(this.props.closing) : !1;
  }
}
class Ot {
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
class Ht {
  /**
   * Constructor
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t) {
    o(this, "item", x(u.close)), this.element = t;
  }
  /**
   * Checks if the current status is closed (hide).
   *
   * Проверяет, является ли текущий статус закрытым (hide).
   */
  isHide() {
    return this.item.value === u.hide;
  }
  /**
   * Checks if the current status is open (open/flash).
   *
   * Проверяет, является ли текущий статус открытым (open/flash).
   */
  isOpen() {
    return this.item.value === u.open || this.item.value === u.flash;
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
    return this.set(u.display), this;
  }
  /**
   * Translates status to preparation.
   *
   * Переводит статус в preparation.
   */
  toPreparation() {
    return this.set(u.preparation), this;
  }
  /**
   * Translates status to flash.
   *
   * Переводит статус в flash.
   */
  toFlash() {
    return this.set(u.flash), this;
  }
  /**
   * Translates status to open.
   *
   * Переводит статус в open.
   */
  toOpen() {
    return this.set(u.open), this;
  }
  /**
   * Translates status to hide.
   *
   * Переводит статус в hide.
   */
  toHide() {
    return this.set(u.hide), this;
  }
  /**
   * Translates status to close.
   *
   * Переводит статус в close.
   */
  toClose() {
    return this.set(u.close), this;
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
class It {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t, e, i) {
    o(this, "item", x(!1)), o(this, "onTransitionend", () => {
      this.removeEvent(), this.disabled();
    }), this.props = t, this.classes = e, this.element = i, f(this.item, (s) => {
      const n = this.element.getMain();
      n && (s ? (this.removeEvent(), n.classList.add(this.classes.list.persistent), n.addEventListener("animationend", this.onTransitionend)) : n.classList.remove(this.classes.list.persistent));
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
class Et {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   */
  constructor(t, e) {
    o(this, "control", !1), this.props = t, this.classes = e;
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
    return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(u.hide)}`);
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
class Wt {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t, e) {
    o(this, "top", 0), o(this, "right", 0), o(this, "bottom", 0), o(this, "left", 0), o(this, "width", 0), o(this, "height", 0), o(this, "innerWidth", 0), o(this, "innerHeight", 0), o(this, "controlWidth", 0), o(this, "controlHeight", 0), o(this, "padding", 0), o(this, "location", ""), this.classes = t, this.element = e;
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
      const i = getComputedStyle(t), s = i.paddingTop.replace(/[^0-9]+/g, ""), n = i.paddingBottom.replace(/[^0-9]+/g, "");
      e = (parseInt(s) + parseInt(n)) / 2;
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
    var e, i;
    const s = (i = (e = this.element.getBody()) == null ? void 0 : e.offsetHeight) != null ? i : 0, n = s / 2, r = this.innerHeight - this.padding * 2 - s, a = t - n - this.padding;
    return a < this.padding ? "0px" : t + n >= this.innerHeight - this.padding ? `${r}px` : `${a}px`;
  }
}
class $t {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   */
  constructor(t, e, i, s) {
    o(this, "x", 0), o(this, "y", 0), this.props = t, this.client = e, this.element = i, this.coordinates = s;
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
    var t, e, i;
    const s = this.element.getBodyContext();
    if (this.isOver() && this.props.overElement && s && s.scrollHeight > s.offsetHeight) {
      const n = (t = O(this.props.overElement)) == null ? void 0 : t.getBoundingClientRect(), r = (e = this.element.getBody()) == null ? void 0 : e.getBoundingClientRect(), a = s == null ? void 0 : s.getBoundingClientRect(), h = (i = this.element.getControl()) == null ? void 0 : i.getBoundingClientRect();
      if (s && n && r && a) {
        const c = n.height / 2, d = n.top - a.top;
        if (h && this.coordinates.getMaxHeight() === r.height) {
          if (h.top + c < r.top) {
            s.scrollTop += d;
            return;
          }
          if (h.bottom - c > r.bottom) {
            s.scrollTop += d - a.height + n.height;
            return;
          }
          s.scrollTop += d - (h.top - a.top) - h.height / 2 + c;
          return;
        }
        s.scrollTop += d - a.height / 2 + c;
      }
    }
  }
  /**
   * Updates the scroll display status of the element.
   *
   * Обновляет статус отображения скролла у элемента.
   */
  updateBody() {
    if (k()) {
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
    var i, s;
    const n = (e - t) / 2;
    if (this.props.overElement) {
      const a = (i = O(this.props.overElement)) == null ? void 0 : i.getBoundingClientRect(), h = (s = this.element.getBody()) == null ? void 0 : s.getBoundingClientRect();
      if (a && h) {
        const c = a.top - h.top, d = a.height / 2;
        return e - c - d - n;
      }
    }
    const r = this.coordinates.getHeight() / 2;
    return e - n - r;
  }
  /**
   * Changes in position along the X coordinate.
   *
   * Изменения положения по координате X.
   */
  setX() {
    const t = this.element.getMain();
    if (t) {
      const e = this.getIndent("x"), i = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + e, s = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - e, n = [];
      this.getAxis() === "x" ? n.push(i, s) : n.push(s, i), this.x = this.calculationInner(
        n[0],
        n[1],
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
      const e = this.getIndent("y"), i = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - e, s = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + e, n = [];
      if (this.isOver())
        return this.y = this.calculationOver(
          this.getOverHeight(i, s),
          i,
          s,
          t.offsetHeight,
          window.innerHeight
        ), this;
      this.getAxis() !== "x" ? n.push(s, i) : n.push(i, s), this.y = this.calculationInner(
        n[0],
        n[1],
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
  calculationInner(t, e, i, s, n) {
    const r = this.coordinates.getPadding();
    return t + i <= s - r ? t : e - i > r ? e - i : s / 2 - n / 2;
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
  calculationOver(t, e, i, s, n) {
    const r = this.coordinates.getPadding();
    if (i < r)
      return i;
    if (e > n - r) {
      const a = e - s - r;
      return a < r ? r : a;
    }
    return t < r ? r : t + s <= n - r ? t : n - s - r;
  }
}
class Dt {
  /**
   * Constructor
   * @param client object for working with mouse pointer coordinates/ объект для работы с координатами указателя мыши
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   */
  constructor(t, e, i) {
    o(this, "x", null), o(this, "y", null), this.client = t, this.element = e, this.position = i;
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
    else if (t && getComputedStyle(t).getPropertyValue(B).includes("--MENU--")) {
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
class At {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   */
  constructor(t, e, i) {
    o(this, "event"), o(this, "item", x(!1)), o(this, "listener", () => {
      ut(this.item, this.isStatic());
    }), o(this, "make", () => {
      this.isStaticMod() ? (this.start(), requestAnimationFrame(this.listener)) : this.stop();
    }), this.props = t, this.element = i, f([e.staticMode], this.make, { immediate: !0 });
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
    this.event || (this.event = new E(window, ["resize"], this.listener)), this.event.start();
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
    return !!(t && getComputedStyle(t).getPropertyValue(B).includes("--STATIC--"));
  }
}
class Pt {
  /**
   * Constructor
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i) {
    this.classes = t, this.element = e, this.emits = i;
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
class Ft {
  /**
   * Constructor
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param coordinates object for working with coordinates/ объект для работы с координатами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param origin the object for work is in the initial position upon opening/ объект для работы в начальной позиции при открытии
   * @param className class name/ название класса
   */
  constructor(t, e, i, s, n) {
    this.element = t, this.coordinates = e, this.position = i, this.origin = s, this.className = n, f(this.element.element, () => this.update());
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
      const i = e.parentElement;
      e.dataset.windowMenu = t ? "menu" : "modal", i && i.dataset.windowTeleport && (i.dataset.windowMenu = e.dataset.windowMenu);
    }
  }
}
class Rt {
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
  constructor(t, e, i, s, n, r, a, h, c, d, M, S) {
    o(this, "item", x(!1)), o(this, "first", x(!1)), o(this, "clicks", 0), o(this, "inDom", m(() => this.item.value || this.props.staticMode || !!this.props.inDom && this.first.value)), o(this, "set", async (w) => {
      this.item.value !== !!w && await this.toggle();
    }), o(this, "open", async () => this.set(!0)), o(this, "close", async () => this.set(!1)), o(this, "toggle", async () => {
      if (this.clicks > 1)
        return;
      const w = !this.item.value;
      await this.hook.before(w) && (w ? (this.reset(), this.status.toDisplay(), await this.setOpen(w), requestAnimationFrame(async () => {
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
    }), this.props = t, this.client = e, this.hook = i, this.element = s, this.tabIndex = n, this.status = r, this.flash = a, this.coordinates = h, this.position = c, this.origin = d, this.emit = M, this.styles = S;
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
    return dt(
      () => {
        const t = this.element.getMain();
        if (t) {
          const e = getComputedStyle(t).getPropertyValue(B).includes("--MENU--");
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
class Lt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param persistent object for working with the animation before turning off the window/ объект для работы с анимацией перед выключением окна
   * @param classes an object for working with classes and searching for elements/ объект для работы с классами и поиском элементов
   * @param element an object of the class for working with elements/ объект класса для работы с элементами
   * @param staticMode class object for working with static status/ объект класса для работы со статическим статусом
   * @param open the class object for working with the status of closing or opening the window/ объект класса для работы со статусом закрытия или открытия окна
   */
  constructor(t, e, i, s, n, r) {
    o(this, "target"), o(this, "focus"), this.props = t, this.persistent = e, this.classes = i, this.element = s, this.staticMode = n, this.open = r;
  }
  /**
   * Updates the window opening status.
   *
   * Обновления статус открытия окно.
   * @param target the selected window/ выбранное окно
   */
  async update(t) {
    if (!this.open.isClicks() && (this.target = t, this.focus = this.getFocus(), !!k() && this.isTargetInBody() && !this.staticMode.item.value))
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
      const i = this.classes.findControlByElement(e);
      if (i)
        return this.isChildren(i);
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
    var e;
    const i = this.getTarget();
    return (!this.isMenu(i) || !this.classes.isWindow(i)) && !((e = this.classes.findControlByElement(t)) != null && e.closest(`.${this.classes.list.block}`));
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
    var t;
    if (this.target) {
      const e = this.classes.findMain(this.target);
      if (e && (e === this.element.getMain() || (t = this.classes.findControl()) != null && t.closest(`[data-window="${e.dataset.window}"]`)))
        return !1;
    }
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
      const e = getComputedStyle(t).getPropertyValue(B);
      return e.includes("--MENU--") || e.includes("--MENU-WINDOW--");
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
class Nt {
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
  constructor(t, e, i, s, n, r, a) {
    o(this, "event"), o(this, "onClick", async (h) => {
      this.props.contextmenu || await this.on(h);
    }), o(this, "onKeydown", async (h) => {
      (pt(h, !1) || this.isArrowDown(h)) && (h.preventDefault(), await this.onClick(h));
    }), o(this, "onContextmenu", async (h) => {
      this.props.contextmenu && (h.preventDefault(), await this.on(h));
    }), o(this, "onTransition", () => this.open.closeForEvent()), o(this, "onGlobal", async (h) => {
      (!h || h.type === "click" && (!this.props.contextmenu || this.open.item.value) || h.type === "contextmenu" && this.props.contextmenu) && (this.open.item.value ? (this.flash.setControl(h == null ? void 0 : h.target), await this.verification.update(h == null ? void 0 : h.target)) : this.event.stop());
    }), this.props = t, this.tabIndex = e, this.status = i, this.client = s, this.flash = n, this.open = r, this.verification = a, this.event = new E(
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
   * Checks if the down arrow key is pressed.
   *
   * Проверяет, нажата ли стрелка вниз.
   * @param event event object/ объект события
   */
  isArrowDown(t) {
    return !!(this.props.openOnArrowDown && (t.code === "ArrowDown" || t.key === "ArrowDown" || t.key === "Down" || t.keyCode === 40));
  }
  /**
   * Event activation.
   *
   * Активация события.
   * @param event event object/ объект события
   */
  async on(t) {
    this.tabIndex.updateOldElement(), this.client.set(
      at(t),
      ct(t)
    ), await this.verification.update(t.target);
  }
}
let I = 0;
class _t {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param classes an object for working with class names / объект для работы с названиями классов
   * @param staticMode class object for working with static status / объект класса для работы со статическим статусом
   * @param open an object for working with the open state of the window / объект для работы с состоянием открытия окна
   */
  constructor(t, e, i, s) {
    o(this, "elements", []), this.props = t, this.classes = e, this.staticMode = i, this.open = s, f(
      this.open.item,
      (n) => {
        !this.props.inert || this.props.embedded || this.staticMode.item.value || (n ? this.toHidden() : this.toShow());
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
    const t = C.hidden(), e = Object.keys(t)[0], i = Object.values(t)[0];
    return {
      key: e,
      value: i
    };
  }
  /**
   * Finds all elements outside the window that need to be hidden.
   *
   * Находит все элементы вне окна, которые нужно скрыть.
   */
  findElements() {
    if (k()) {
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
    I++;
    const t = this.findElements();
    if (t) {
      const e = this.getAriaData();
      this.elements = [], t.forEach((i) => {
        i.hasAttribute(e.key) || i.hasAttribute("inert") || (i.setAttribute(e.key, e.value), this.classes.isWindowOrTeleport(i) || i.setAttribute("inert", ""), this.elements.push(i));
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
    if (--I > 0)
      return;
    const t = this.getAriaData();
    this.elements.forEach((e) => {
      e.removeAttribute(t.key), e.removeAttribute("inert");
    }), this.elements = [];
  }
}
class Xt {
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
   * @param constructors.ImageConstructor class for working with image/ класс для работы с изображением
   * @param constructors.ModelConstructor class for working with model/ класс для работы с моделью
   * @param constructors.ScrollbarConstructor class for working with scrollbar/ класс для работы со скроллбаром
   * @param constructors.TabIndexConstructor class for working with tab index/ класс для работы с индексом табуляции
   * @param constructors.TextConstructor class for working with text/ класс для работы с текстом
   * @param constructors.WindowClassesConstructor class for working with window classes/ класс для работы с классами окна
   * @param constructors.WindowClientConstructor class for working with window client/ класс для работы с клиентом окна
   * @param constructors.WindowCoordinatesConstructor class for working with coordinates/ класс для работы с координатами
   * @param constructors.WindowElementConstructor class for working with window elements/ класс для работы с элементами окна
   * @param constructors.WindowEmitConstructor class for working with emits/ класс для работы с событиями
   * @param constructors.WindowEscConstructor class for working with escape key/ класс для работы с клавишей Escape
   * @param constructors.WindowEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.WindowFlashConstructor class for working with flash animation/ класс для работы с анимацией вспышки
   * @param constructors.WindowHiddenConstructor class for working with hidden elements/ класс для работы со скрытыми элементами
   * @param constructors.WindowHookConstructor class for working with window hooks/ класс для работы с хуками окна
   * @param constructors.WindowOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param constructors.WindowOriginConstructor class for working with origin/ класс для работы с точкой начала
   * @param constructors.WindowPersistentConstructor class for working with persistent state/ класс для работы с постоянным состоянием
   * @param constructors.WindowPositionConstructor class for working with position/ класс для работы с позицией
   * @param constructors.WindowStaticConstructor class for working with static mode/ класс для работы со статическим режимом
   * @param constructors.WindowStatusConstructor class for working with window status/ класс для работы со статусом окна
   * @param constructors.WindowStylesConstructor class for working with styles/ класс для работы со стилями
   * @param constructors.WindowVerificationConstructor class for working with verification/ класс для работы с проверкой
   */
  constructor(t, e, i, s, n, r, a, h, c) {
    o(this, "client"), o(this, "hook"), o(this, "classes"), o(this, "element"), o(this, "tabIndex"), o(this, "status"), o(this, "persistent"), o(this, "flash"), o(this, "coordinates"), o(this, "position"), o(this, "origin"), o(this, "staticMode"), o(this, "emit"), o(this, "styles"), o(this, "open"), o(this, "verification"), o(this, "event"), o(this, "scrollbar"), o(this, "image"), o(this, "esc"), o(this, "text"), o(this, "hidden"), o(this, "slotData", m(() => ({
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
        ...C.control(
          this.classes.getControlId(),
          this.open.inDom.value ? this.classes.getId() : void 0,
          this.props.ariaHaspopup,
          this.open.item.value
        )
      }
    }))), o(this, "classesList", m(() => ({
      [this.classes.getId()]: !0,
      [`${this.className}--staticMode`]: this.staticMode.item.value,
      [`${this.className}--embedded`]: !!this.props.embedded
    }))), o(this, "stop", () => {
      this.event.stop(), this.staticMode.stop();
    }), this.props = t, this.refs = e, this.classDesign = s, this.className = n, this.components = r, this.slots = a, this.emits = h;
    const {
      ImageConstructor: d = St,
      ModelConstructor: M = gt,
      ScrollbarConstructor: S = Mt,
      TabIndexConstructor: w = mt,
      TextConstructor: W = yt,
      WindowClassesConstructor: $ = vt,
      WindowClientConstructor: D = kt,
      WindowCoordinatesConstructor: A = Wt,
      WindowElementConstructor: P = Ot,
      WindowEmitConstructor: F = Pt,
      WindowEscConstructor: R = wt,
      WindowEventConstructor: L = Nt,
      WindowFlashConstructor: N = Et,
      WindowHiddenConstructor: _ = _t,
      WindowHookConstructor: X = Tt,
      WindowOpenConstructor: Y = Rt,
      WindowOriginConstructor: q = Dt,
      WindowPersistentConstructor: z = It,
      WindowPositionConstructor: U = $t,
      WindowStaticConstructor: V = At,
      WindowStatusConstructor: G = Ht,
      WindowStylesConstructor: K = Ft,
      WindowVerificationConstructor: j = Lt
    } = c != null ? c : {};
    this.hook = new X(t), this.classes = new $(n), this.element = new P(this.classes, i), this.client = new D(this.element), this.tabIndex = new w(
      () => this.element.getBody(),
      void 0,
      () => !!this.props.autoTabIndex
    ), this.status = new G(this.element), this.persistent = new z(t, this.classes, this.element), this.flash = new N(t, this.classes), this.coordinates = new A(this.classes, this.element), this.position = new U(t, this.client, this.element, this.coordinates), this.origin = new q(this.client, this.element, this.position), this.staticMode = new V(t, e, this.element), this.emit = new F(this.classes, this.element, h), this.styles = new K(
      this.element,
      this.coordinates,
      this.position,
      this.origin,
      n
    ), this.open = new Y(
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
    ), this.verification = new j(
      t,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open
    ), this.event = new L(
      t,
      this.tabIndex,
      this.status,
      this.client,
      this.flash,
      this.open,
      this.verification
    ), this.scrollbar = new S(
      t,
      n,
      r,
      h
    ), this.image = new d(
      t,
      r,
      h
    ), this.esc = new R(
      this.open.item,
      () => this.open.close(),
      () => {
        var T;
        return !this.props.persistent && ((T = this.props.closeOnEsc) != null ? T : !0);
      }
    ), this.text = new W(this.props), this.hidden = new _(
      this.props,
      this.classes,
      this.staticMode,
      this.open
    ), new M("open", this.emits, this.open.item), J(() => {
      f([e.open], () => this.open.set(t.open), { immediate: !0 });
    }), Q(this.stop);
  }
  /** Checks if the role is a menu/ Проверяет, является ли роль меню */
  isMenu() {
    return this.props.role === "menu" || this.props.role === "menuitemcheckbox" || this.props.role === "menuitemradio";
  }
}
const Yt = {
  indent: 4,
  ariaHaspopup: "dialog",
  role: "dialog",
  inert: !0,
  autoTabIndex: !0,
  closeOnEsc: !0,
  // :default [!] System label / Системная метка
  axis: "y",
  imagePosition: "top",
  overscroll: !0
};
class qt extends nt {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor window item class/ класс элемента окна
   */
  constructor(t, e, i, s = Xt) {
    super(
      t,
      e,
      i
    ), o(this, "item"), o(this, "renderMain", () => y(
      "div",
      this.propsMain.value,
      this.renderBody()
    )), o(this, "renderBody", () => {
      var n, r;
      return y(
        "div",
        {
          key: "body",
          ...this.getAttrs(),
          class: {
            [String((n = this.classes) == null ? void 0 : n.value.body)]: !0,
            ...this.toClass((r = this.attrs) == null ? void 0 : r.class)
          }
        },
        [
          ...this.renderBodyImage(),
          ...this.renderBodyClose(),
          ...this.renderBodyGroup()
        ]
      );
    }), o(this, "renderBodyGroup", () => {
      var n;
      const r = [];
      return this.initSlot("title", r, this.item.slotData.value), r.push(this.renderBodyContext()), this.initSlot("footer", r, this.item.slotData.value), [
        y("div", {
          key: "group",
          class: (n = this.classes) == null ? void 0 : n.value.bodyGroup
        }, r)
      ];
    }), o(this, "renderBodyContext", () => {
      var n;
      return this.item.scrollbar.render(
        "div",
        {
          key: "bodyContext",
          class: (n = this.classes) == null ? void 0 : n.value.bodyContext,
          divider: this.props.divider,
          "data-window-body": "1"
        },
        () => this.initSlot("default", void 0, this.item.slotData.value)
      );
    }), o(this, "renderBodyImage", () => {
      var n;
      return this.props.image ? [y(
        "div",
        {
          key: "image",
          class: (n = this.classes) == null ? void 0 : n.value.image
        },
        this.item.image.render()
      )] : [];
    }), o(this, "renderBodyClose", () => {
      var n;
      return this.props.closeButton ? this.components.render(
        "button",
        {
          key: "button-close",
          class: [
            (n = this.classes) == null ? void 0 : n.value.close,
            this.item.classes.list.close
          ],
          icon: this.props.iconClose,
          ...C.label(this.item.text.close.value)
        }
      ) : [];
    }), o(this, "propsMain", m(() => {
      var n, r;
      const a = {
        key: "main",
        ref: this.element,
        class: (n = this.classes) == null ? void 0 : n.value.main,
        style: (r = this.styles) == null ? void 0 : r.value,
        "data-window": this.item.classes.getId(),
        onTransitionend: this.item.event.onTransition
      };
      return this.item.staticMode.isStaticMod() ? a : {
        ...a,
        ...C.role(this.props.role),
        ...C.modal(
          !0,
          this.props.ariaLabelledby,
          this.props.ariaDescribedby
        )
      };
    })), this.item = new s(
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
    var t;
    const e = [];
    return this.initSlot("control", e, this.item.slotData.value), this.item.open.inDom.value && (this.item.staticMode.item.value || this.props.embedded ? e.push(this.renderMain()) : e.push(
      y(
        Z,
        {
          key: "teleport",
          to: "body"
        },
        y(
          "div",
          {
            class: (t = this.classes) == null ? void 0 : t.value.teleport,
            "data-window-teleport": this.item.classes.getId()
          },
          this.renderMain()
        )
      )
    )), e;
  }
}
const g = {
  // :values [!] System label / Системная метка
  width: ["auto", "max", "sm", "md", "lg"],
  height: ["auto", "max", "sm", "md", "lg"],
  axis: ["x", "y", "on"],
  imagePosition: ["top", "left"],
  alignment: ["center", "top", "topRight", "topLeft", "topFull", "right", "rightFull", "bottom", "bottomRight", "bottomLeft", "bottomFull", "left", "leftFull"],
  origin: ["center", "top", "right", "bottom", "left", "topToBottom", "rightToLeft", "bottomToTop", "leftToRight"],
  adaptive: ["menu", "menuWindow", "modal", "modalDynamic", "actionSheetRight", "actionSheetBottom", "static", "actionSheet", "actionSheetToModal", "autoStaticSm", "autoStaticMd", "autoStaticLg", "autoStaticXl", "autoStatic2xl"],
  imageSize: ["sm", "md", "lg", "quarter", "half"]
  // :values [!] System label / Системная метка
}, zt = {
  ...Yt,
  iconClose: "close",
  // :default [!] System label / Системная метка
  width: "md",
  axis: "y",
  imagePosition: "top",
  overscroll: !0,
  imageSize: "md"
}, Ut = /* @__PURE__ */ tt({
  name: "D1Window",
  __name: "D1Window",
  props: /* @__PURE__ */ ot({
    scrollbarAttrs: {},
    image: {},
    role: {},
    ariaLabelledby: {},
    ariaDescribedby: {},
    ariaHaspopup: { type: [String, Boolean] },
    textClose: { type: [String, Function] },
    modelOpen: {},
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    open: { type: Boolean },
    disabled: { type: Boolean },
    preparation: { type: Function },
    beforeOpening: { type: Function },
    opening: { type: Function },
    beforeClosing: { type: Function },
    closing: { type: Function },
    contextmenu: { type: Boolean },
    staticMode: { type: Boolean },
    overElement: {},
    autoClose: { type: Boolean },
    persistent: { type: Boolean },
    flash: { type: Boolean },
    inDom: { type: Boolean },
    indent: {},
    divider: { type: Boolean },
    closeButton: { type: Boolean },
    iconClose: {},
    inert: { type: Boolean },
    autoTabIndex: { type: Boolean },
    closeOnEsc: { type: Boolean },
    openOnArrowDown: { type: Boolean },
    embedded: { type: Boolean },
    width: {},
    height: {},
    hide: { type: Boolean },
    axis: {},
    imagePosition: {},
    dense: { type: Boolean },
    alignment: {},
    origin: {},
    adaptive: {},
    fullscreen: { type: Boolean },
    overscroll: { type: Boolean },
    closeMobileHide: { type: Boolean },
    widthMatch: { type: Boolean },
    imageSize: {}
  }, zt),
  emits: ["scrollbarTop", "scrollbarReachTop", "scrollbarLeaveTop", "scrollbarBottom", "scrollbarReachBottom", "scrollbarLeaveBottom", "scrollbarEdge", "load", "update:open", "update:modelOpen", "window"],
  setup(l, { expose: t, emit: e }) {
    const i = e, s = l, n = m(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-window": !0,
        "d1-window--width--custom": H(s.width) && !p(g.width, s.width),
        [`d1-window--width--${s.width}`]: p(g.width, s.width),
        "d1-window--height--custom": H(s.height) && !p(g.height, s.height),
        [`d1-window--height--${s.height}`]: p(g.height, s.height),
        "d1-window--hide": s.hide,
        [`d1-window--axis--${s.axis}`]: p(g.axis, s.axis),
        [`d1-window--imagePosition--${s.imagePosition}`]: p(g.imagePosition, s.imagePosition),
        "d1-window--dense": s.dense,
        [`d1-window--alignment--${s.alignment}`]: p(g.alignment, s.alignment),
        [`d1-window--origin--${s.origin}`]: p(g.origin, s.origin),
        [`d1-window--adaptive--${s.adaptive}`]: p(g.adaptive, s.adaptive),
        "d1-window--fullscreen": s.fullscreen,
        "d1-window--overscroll": s.overscroll,
        "d1-window--closeButton": s.closeButton,
        "d1-window--closeMobileHide": s.closeMobileHide,
        "d1-window--widthMatch": s.widthMatch,
        [`d1-window--imageSize--${s.imageSize}`]: p(g.imageSize, s.imageSize)
        // :classes-values [!] System label / Системная метка
      }
    })), r = m(() => {
      var c, d;
      return {
        // :styles-values [!] System label / Системная метка
        "--d1-window-sys-width": (c = s.width) != null ? c : null,
        "--d1-window-sys-height": (d = s.height) != null ? d : null
        // :styles-values [!] System label / Системная метка
      };
    }), a = new qt(
      "d1.window",
      s,
      {
        emits: i,
        classes: n,
        styles: r,
        components: {
          scrollbar: ft,
          button: bt,
          image: Ct
        },
        compMod: {
          button: {
            secondary: !0,
            roundedFull: !0,
            size: "xs",
            palette: "neutral"
          }
        }
      }
    ), h = a.render();
    return t(a.expose()), (c, d) => (et(), st(it(h)));
  }
}), ie = Ut;
export {
  ie as D
};

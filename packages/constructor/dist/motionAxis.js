var A = Object.defineProperty;
var C = (o, t, e) => t in o ? A(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => C(o, typeof t != "symbol" ? t + "" : t, e);
import { ref as l, watch as r, onMounted as N, computed as I, h as u } from "vue";
import { DesignConstructorAbstract as M, forEach as E } from "@dxtmisha/functional";
import { M as P } from "./ModelInclude-BiYm_iCQ.js";
class w {
  /**
   * Constructor
   * @param element window element / элемент окна
   * @param className class name / название класса
   */
  constructor(t, e) {
    s(this, "classStatus");
    s(this, "start", l(!1));
    s(this, "move", l(!1));
    this.element = t, this.className = e, this.classStatus = {
      main: this.getClassStatusItem(),
      previous: this.getClassStatusItem("previous"),
      preparation: this.getClassStatusItem("preparation"),
      active: this.getClassStatusItem("active")
    };
  }
  /**
   * Checks if the element is an active slide.
   *
   * Проверяет, является ли элемент активным слайдом.
   * @param element selected element / выбранный элемент
   */
  isActive(t) {
    return t.classList.contains(this.classStatus.active);
  }
  /**
   * Returns the element.
   *
   * Возвращает элемент.
   */
  get() {
    return this.element.value;
  }
  /**
   * Returns the start state.
   *
   * Возвращает состояние старта.
   */
  getStart() {
    return this.start.value;
  }
  /**
   * Returns the move state.
   *
   * Возвращает состояние движения.
   */
  getMove() {
    return this.move.value;
  }
  /**
   * Returns a list of all classes by status.
   *
   * Возвращает список всех классов по статусу.
   */
  getClassStatus() {
    return this.classStatus;
  }
  /**
   * Returns the element for preparation to transition to the active element.
   *
   * Возвращает элемент для подготовки к переходу к активному элементу.
   */
  getElementPreparation() {
    var t;
    return (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.classStatus.preparation}`);
  }
  /**
   * Blocks scrolling.
   *
   * Блокирует прокрутку.
   */
  blockScroll() {
    const t = this.getElementScroll();
    t && t.classList.add(this.getClassScrollHidden());
  }
  /**
   * Restores scrolling.
   *
   * Восстанавливает прокрутку.
   */
  returnScroll() {
    const t = this.getElementScroll();
    t && t.classList.remove(this.getClassScrollHidden());
  }
  /**
   * Transition to start state.
   *
   * Переход в состояние старта.
   */
  toStart() {
    this.start.value = !0;
  }
  /**
   * End of start state.
   *
   * Окончание состояния старта.
   */
  toEnd() {
    this.start.value = !1;
  }
  /**
   * Transition to move state.
   *
   * Переход в состояние движения.
   */
  toMove() {
    this.move.value = !0;
  }
  /**
   * End of move state.
   *
   * Окончание состояния движения.
   */
  toStop() {
    this.move.value = !1;
  }
  /**
   * Activates event listeners for animation end.
   *
   * Активизирует события прослушивания окончания анимации.
   * @param callback event listener / прослушивать события
   */
  initEvent(t) {
    if (this.element.value) {
      const e = (a) => {
        var i;
        this.isTransitionend(a) && (t(), (i = this.element.value) == null || i.removeEventListener("transitionend", e), this.toStop());
      };
      this.element.value.addEventListener("transitionend", e);
    }
  }
  /**
   * Returns class names by status.
   *
   * Возвращает названия классов по статусу.
   * @param status status name / название статуса
   */
  getClassStatusItem(t) {
    return `${this.className}__slide${t ? `--${t}` : ""}`;
  }
  /**
   * Returns the class name for the scroll element.
   *
   * Возвращает название класса для элемента прокрутки.
   */
  getClassScroll() {
    return `${this.className}__scroll`;
  }
  /**
   * Returns the class name for the hidden scroll element.
   *
   * Возвращает название класса для скрытого элемента прокрутки.
   */
  getClassScrollHidden() {
    return `${this.className}__scroll--hidden`;
  }
  /**
   * Returns the scroll element.
   *
   * Возвращает элемент прокрутки.
   */
  getElementScroll() {
    var t, e;
    return (e = (t = this.element.value) == null ? void 0 : t.closest(`.${this.getClassScroll()}`)) != null ? e : void 0;
  }
  /**
   * End of animation event.
   *
   * Событие окончания анимации.
   * @param event event object / объект события
   */
  isTransitionend(t) {
    return ["transform", "translate", "scale"].indexOf(t.propertyName) !== -1 && this.isActive(t.target);
  }
}
class b {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    s(this, "item", l());
    this.props = t, this.item.value = t.selected;
  }
  /**
   * Checks if the current active value corresponds.
   *
   * Проверяет, соответствует ли текущее активное значение.
   * @param selected selected slide/ выбранный слайд
   */
  is(t) {
    return this.item.value === t;
  }
  /**
   * Changes the active slide.
   *
   * Изменяет активный слайд.
   * @param selected selected slide/ выбранный слайд
   */
  set(t) {
    return this.item.value = t, this;
  }
}
class D {
  /**
   * Constructor
   * @param element window element / элемент окна
   * @param className class name / название класса
   * @param selected class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(t, e, a) {
    this.element = t, this.className = e, this.selected = a;
  }
  /**
   * Adding styles for animation.
   *
   * Добавление стилей для анимации.
   * @param slide slide title / название слайда
   */
  add(t) {
    var a;
    const e = this.element.value;
    if (t && e) {
      const i = e.getBoundingClientRect(), n = (a = e.querySelector(`[data-key="${t}"]`)) == null ? void 0 : a.getBoundingClientRect();
      i && n && (e.style.setProperty(`--${this.className}-sys-top`, `${n.top - i.top}px`), e.style.setProperty(`--${this.className}-sys-left`, `${n.left - i.left}px`), e.style.setProperty(`--${this.className}-sys-width`, `${n.width}px`), e.style.setProperty(`--${this.className}-sys-height`, `${n.height}px`));
    }
  }
  /**
   * Adding styles for the next element.
   *
   * Добавление стилей для следующего элемента.
   */
  addNext() {
    var e, a;
    const t = this.element.value;
    if (t) {
      const i = (e = t == null ? void 0 : t.querySelector(`[data-key="${this.selected.item.value}"]`)) == null ? void 0 : e.getBoundingClientRect();
      i && t.style.setProperty(`--${this.className}-sys-next-height`, `${(a = i == null ? void 0 : i.height) != null ? a : "0"}px`);
    }
  }
  /**
   * Removing animation styles.
   *
   * Удаление стилей анимации.
   */
  remove() {
    const t = this.element.value;
    t && (t.style.removeProperty(`--${this.className}-sys-top`), t.style.removeProperty(`--${this.className}-sys-left`), t.style.removeProperty(`--${this.className}-sys-width`), t.style.removeProperty(`--${this.className}-sys-height`), t.style.removeProperty(`--${this.className}-sys-next-height`));
  }
}
class B {
  /**
   * Constructor
   * @param styles style management object/ объект управления стилями
   */
  constructor(t) {
    /**
     * Identifier of the previous slide.
     *
     * Идентификатор предыдущего слайда.
     */
    s(this, "item", l());
    this.styles = t, r(this.item, (e) => {
      e ? this.styles.add(e) : this.styles.remove();
    });
  }
  /**
   * Checks if the value matches the previous slide.
   *
   * Проверяет, совпадает ли значение с предыдущим слайдом.
   * @param value value to check/ значение для проверки
   */
  is(t) {
    return this.item.value === t;
  }
  /**
   * Changing the display status.
   *
   * Изменение статуса отображения.
   * @param value values for change/ значения для изменения
   */
  set(t) {
    return this.item.value = t, this;
  }
}
class H {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param selected class object for managing the active element/ объект класса для управления активным элементом
   * @param previous object for managing the outgoing slide/ объект управления уходящим слайдом
   * @param styles class object for managing styles/ объект класса для управления стилями
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, a, i, n, h) {
    /** Element preparation status/ Статус подготовки элемента */
    s(this, "preparation", l());
    /** Active element status/ Статус активного элемента */
    s(this, "active", l());
    /**
     * Stopping and deleting all data.
     *
     * Остановка и удаление всех данных.
     */
    s(this, "end", () => {
      var t;
      this.previous.set(void 0), this.preparation.value = void 0, (t = this.emits) == null || t.call(this, "end", this.active.value), this.element.returnScroll();
    });
    this.element = e, this.selected = a, this.previous = i, this.styles = n, this.emits = h, this.active.value = t.selected;
  }
  /**
   * Checks if the element is in preparation status.
   *
   * Проверяет, находится ли элемент в статусе подготовки.
   * @param key element key/ ключ элемента
   */
  isPreparation(t) {
    return this.preparation.value === t;
  }
  /**
   * Checks if the element is active.
   *
   * Проверяет, активен ли элемент.
   * @param key element key/ ключ элемента
   */
  isActive(t) {
    return this.active.value === t;
  }
  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  get() {
    return this.selected.item.value;
  }
  /**
   * Changes the active slide.
   *
   * Изменяет активный слайд.
   * @param selected selected slide/ выбранный слайд
   */
  set(t) {
    return this.selected.is(t) || (this.selected.set(t), this.start()), this;
  }
  /**
   * Beginning of activation.
   *
   * Начало активации.
   */
  start() {
    var t;
    this.element.toStart(), this.previous.set(this.active.value), this.preparation.value = this.selected.item.value, (t = this.emits) == null || t.call(this, "start", this.preparation.value), this.element.blockScroll(), this.expectation();
  }
  /**
   * Waiting for element preparation.
   *
   * Ожидание подготовки элемента.
   */
  expectation() {
    requestAnimationFrame(() => {
      const t = this.element.getElementPreparation();
      t && t.offsetHeight > 0 ? (this.styles.addNext(), requestAnimationFrame(() => {
        this.element.toEnd(), this.element.toMove(), this.element.initEvent(this.end), this.active.value = this.selected.item.value;
      })) : this.expectation();
    });
  }
}
class _ {
  constructor(t) {
    s(this, "item", l([]));
    this.status = t;
  }
  get() {
    return this.item;
  }
  /**
   * Returns the selected slide.
   *
   * Возвращает выбранный слайд.
   * @param step change step number / номер шага изменения
   */
  getByIndex(t) {
    var n;
    const e = (n = this.item.value) != null ? n : [], a = this.findIndex();
    if (a === -1)
      return e == null ? void 0 : e[0];
    const i = a + t;
    return i >= e.length ? e == null ? void 0 : e[0] : i <= -1 ? e == null ? void 0 : e[e.length - 1] : e == null ? void 0 : e[i];
  }
  findIndex(t = this.status.get()) {
    return this.item.value.findIndex((e) => e === t);
  }
  add(t) {
    return this.item.value.push(t), this;
  }
  reset() {
    this.item.value = [];
  }
}
class q {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element window element / элемент окна
   * @param slides list of slides / список слайдов
   * @param status class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(t, e, a, i, n) {
    s(this, "axis", l());
    s(this, "direction", l());
    /**
     * Previous slide.
     *
     * Перемещение слайда на один шаг назад.
     */
    s(this, "back", () => {
      this.direction.value = "back", this.status.set(this.slides.getByIndex(-1));
    });
    /**
     * Next slide.
     *
     * Перемещение слайда на один шаг вперед.
     */
    s(this, "next", () => {
      this.direction.value = "next", this.status.set(this.slides.getByIndex(1));
    });
    /**
     * Moving the slide to the selected slide with automatic selection of animation direction.
     *
     * Перемещение слайда на выбранный слайд с автоматическим выбором направления анимации.
     * @param selected selected item / выбранный элемент
     */
    s(this, "to", (t) => {
      const e = this.slides.findIndex(this.status.get()), a = this.slides.findIndex(t);
      e !== -1 && a !== -1 && a !== e && (e > a ? this.direction.value = "back" : this.direction.value = "next", this.status.set(t));
    });
    /**
     * Move to the upper slide.
     *
     * Переместите на верхний слайд.
     * @param selected selected item / выбранный элемент
     */
    s(this, "top", (t) => {
      this.axis.value = "y", this.direction.value = "back", this.status.set(t);
    });
    /**
     * Move to the right slide.
     *
     * Переместите на правый слайд.
     * @param selected selected item / выбранный элемент
     */
    s(this, "right", (t) => {
      this.axis.value = "x", this.direction.value = "next", this.status.set(t);
    });
    /**
     * Move to the lower slide.
     *
     * Переместите на нижний слайд.
     * @param selected selected item / выбранный элемент
     */
    s(this, "bottom", (t) => {
      this.axis.value = "y", this.direction.value = "next", this.status.set(t);
    });
    /**
     * Move to the left slide.
     *
     * Переместите на левый слайд.
     * @param selected selected item / выбранный элемент
     */
    s(this, "left", (t) => {
      this.axis.value = "x", this.direction.value = "back", this.status.set(t);
    });
    /**
     * Move to the back slide.
     *
     * Переместите на задний слайд.
     * @param selected selected item / выбранный элемент
     */
    s(this, "down", (t) => {
      this.axis.value = "z", this.direction.value = "back", this.status.set(t);
    });
    /**
     * Move to the front slide.
     *
     * Переместите на передний слайд.
     * @param selected selected item / выбранный элемент
     */
    s(this, "up", (t) => {
      this.axis.value = "z", this.direction.value = "next", this.status.set(t);
    });
    /**
     * Changes the axis.
     *
     * Изменяет ось.
     * @param axis axis name / название оси
     */
    s(this, "setAxis", (t) => {
      this.axis.value = t;
    });
    /**
     * Changes the direction.
     *
     * Изменяет направление.
     * @param direction direction name / название направления
     */
    s(this, "setDirection", (t) => {
      this.direction.value = t;
    });
    this.props = t, this.refs = e, this.element = a, this.slides = i, this.status = n, this.axis.value = t.axis, this.direction.value = t.direction, r([e.axis], () => this.setAxis(t.axis)), r([e.direction], () => this.setDirection(t.direction));
  }
}
class L {
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
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionAxisElementConstructor class for working with elements/ класс для работы с элементами
   * @param constructors.MotionAxisGoConstructor class for working with go/ класс для работы с переходом
   * @param constructors.MotionAxisPreviousConstructor class for working with previous/ класс для работы с предыдущим
   * @param constructors.MotionAxisSelectedConstructor class for working with selected/ класс для работы с выбранным
   * @param constructors.MotionAxisSlidesConstructor class for working with slides/ класс для работы со слайдами
   * @param constructors.MotionAxisStatusConstructor class for working with status/ класс для работы со статусом
   * @param constructors.MotionAxisStylesConstructor class for working with styles/ класс для работы со стилями
   */
  constructor(t, e, a, i, n, h, m, d, c) {
    s(this, "elementItem");
    s(this, "go");
    s(this, "previous");
    s(this, "selected");
    s(this, "slides");
    s(this, "status");
    s(this, "styles");
    /**
     * Returns a list of available values for the style/
     * Возвращает список доступных значений для стиля
     */
    s(this, "classes", I(() => ({
      [`${this.className}--axis--${this.go.axis.value}`]: !0,
      [`${this.className}--direction--${this.go.direction.value}`]: !0,
      [`${this.className}--start`]: this.elementItem.getStart() && !!this.props.animationHeight,
      [`${this.className}--move`]: this.elementItem.getMove() && !!this.props.animationHeight
    })));
    /**
     * Updating data based on its status.
     *
     * Обновление данных по его статусу.
     */
    s(this, "updateSelected", () => {
      const t = this.props.selected;
      if (this.selected.is(t)) {
        if (this.props.direction === "auto") {
          this.go.to(t);
          return;
        }
        this.status.set(t);
      }
    });
    this.props = t, this.refs = e, this.element = a, this.classDesign = i, this.className = n, this.components = h, this.slots = m, this.emits = d;
    const {
      ModelIncludeConstructor: v = P,
      MotionAxisElementConstructor: p = w,
      MotionAxisGoConstructor: g = q,
      MotionAxisPreviousConstructor: x = B,
      MotionAxisSelectedConstructor: S = b,
      MotionAxisSlidesConstructor: f = _,
      MotionAxisStatusConstructor: y = H,
      MotionAxisStylesConstructor: $ = D
    } = c != null ? c : {};
    this.selected = new S(this.props), this.elementItem = new p(
      this.element,
      this.className
    ), this.styles = new $(
      this.element,
      this.className,
      this.selected
    ), this.previous = new x(this.styles), this.status = new y(
      this.props,
      this.elementItem,
      this.selected,
      this.previous,
      this.styles,
      this.emits
    ), this.slides = new f(this.status), this.go = new g(
      this.props,
      this.refs,
      this.element,
      this.slides,
      this.status
    ), new v(
      "selected",
      this.emits,
      this.selected.item
    ), N(() => {
      r(
        [e.selected],
        this.updateSelected,
        { immediate: !0 }
      );
    });
  }
  isInDom(t) {
    return this.props.inDom || this.isInDomSlide(t) || this.previous.is(t) || this.status.isPreparation(t) || this.status.isActive(t);
  }
  isInDomSlide(t) {
    return !!(this.props.inDomSlide && this.props.inDomSlide.indexOf(t) !== -1);
  }
}
const G = {
  // :default [!] System label / Системная метка
  axis: "x",
  direction: "auto"
};
class O extends M {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(e, a, i, n = L) {
    super(
      e,
      a,
      i
    );
    s(this, "item");
    /**
     * Rendering the slide.
     *
     * Рендеринг слайда.
     */
    s(this, "renderSlides", () => {
      const e = [];
      return this.item.slides.reset(), this.slots && E(this.slots, (a, i) => {
        if (this.item.slides.add(i), this.item.isInDom(i)) {
          const n = this.item.elementItem.getClassStatus();
          e.push(u(
            "div",
            {
              key: i,
              class: {
                [n.main]: !0,
                [n.previous]: this.item.previous.is(i),
                [n.preparation]: this.item.status.isPreparation(i),
                [n.active]: this.item.status.isActive(i)
              },
              "data-key": i
            },
            a == null ? void 0 : a({})
          ));
        }
      }), e;
    });
    this.item = new n(
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
      next: this.item.go.next,
      back: this.item.go.back,
      to: this.item.go.to,
      top: this.item.go.top,
      right: this.item.go.right,
      bottom: this.item.go.bottom,
      left: this.item.go.left,
      down: this.item.go.down,
      up: this.item.go.up
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      slide: this.getSubClass("slide")
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
    var e;
    return u(
      "div",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (e = this.classes) == null ? void 0 : e.value.main
      },
      this.renderSlides
    );
  }
}
export {
  L as MotionAxis,
  O as MotionAxisDesign,
  G as defaultsMotionAxis
};

import { h as x, computed as v, onMounted as b, watch as c, ref as u, defineComponent as D, openBlock as k, createBlock as w, unref as P, mergeDefaults as M } from "vue";
import { DesignConstructorAbstract as E, forEach as _, inArray as g } from "@dxtmisha/functional";
import { V as B } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
var H = Object.defineProperty, q = (n, t, e) => t in n ? H(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, i = (n, t, e) => q(n, typeof t != "symbol" ? t + "" : t, e);
class F {
  /**
   * Constructor
   * @param element window element / элемент окна
   * @param className class name / название класса
   */
  constructor(t, e) {
    i(this, "classStatus"), i(this, "start", u(!1)), i(this, "move", u(!1)), this.element = t, this.className = e, this.classStatus = {
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
      const e = (s) => {
        var o;
        this.isTransitionend(s) && (t(), (o = this.element.value) == null || o.removeEventListener("transitionend", e), this.toStop());
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
class L {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    i(this, "item", u()), this.props = t, this.item.value = t.selected;
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
class O {
  /**
   * Constructor
   * @param element window element / элемент окна
   * @param className class name / название класса
   * @param selected class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(t, e, s) {
    this.element = t, this.className = e, this.selected = s;
  }
  /**
   * Adding styles for animation.
   *
   * Добавление стилей для анимации.
   * @param slide slide title / название слайда
   */
  add(t) {
    var e;
    const s = this.element.value;
    if (t && s) {
      const o = s.getBoundingClientRect(), l = (e = s.querySelector(`[data-key="${t}"]`)) == null ? void 0 : e.getBoundingClientRect();
      o && l && (s.style.setProperty(`--${this.className}-sys-top`, `${l.top - o.top}px`), s.style.setProperty(`--${this.className}-sys-left`, `${l.left - o.left}px`), s.style.setProperty(`--${this.className}-sys-width`, `${l.width}px`), s.style.setProperty(`--${this.className}-sys-height`, `${l.height}px`));
    }
  }
  /**
   * Adding styles for the next element.
   *
   * Добавление стилей для следующего элемента.
   */
  addNext() {
    var t, e;
    const s = this.element.value;
    if (s) {
      const o = (t = s == null ? void 0 : s.querySelector(`[data-key="${this.selected.item.value}"]`)) == null ? void 0 : t.getBoundingClientRect();
      o && s.style.setProperty(`--${this.className}-sys-next-height`, `${(e = o == null ? void 0 : o.height) != null ? e : "0"}px`);
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
class R {
  /**
   * Constructor
   * @param styles style management object / объект управления стилями
   */
  constructor(t) {
    i(this, "item", u()), this.styles = t, c(this.item, (e) => {
      e ? this.styles.add(e) : this.styles.remove();
    });
  }
  /**
   * Checks if the value matches the previous slide.
   *
   * Проверяет, совпадает ли значение с предыдущим слайдом.
   * @param value value to check / значение для проверки
   */
  is(t) {
    return this.item.value === t;
  }
  /**
   * Returns the previous slide.
   *
   * Возвращает предыдущий слайд.
   */
  get() {
    return this.item.value;
  }
  /**
   * Changing the display status.
   *
   * Изменение статуса отображения.
   * @param value values for change / значения для изменения
   */
  set(t) {
    return this.item.value = t, this;
  }
}
class T {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param selected class object for managing the active element/ объект класса для управления активным элементом
   * @param previous object for managing the outgoing slide/ объект управления уходящим слайдом
   * @param styles class object for managing styles/ объект класса для управления стилями
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, o, l, a) {
    i(this, "preparation", u()), i(this, "active", u()), i(this, "end", () => {
      this.previous.set(void 0), this.preparation.value = void 0, this.emit("end"), this.element.returnScroll();
    }), this.element = e, this.selected = s, this.previous = o, this.styles = l, this.emits = a, this.active.value = t.selected;
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
   * Instantly changes the active slide without animation.
   *
   * Мгновенно изменяет активный слайд без анимации.
   * @param selected selected slide/ выбранный слайд
   */
  setFlash(t) {
    return this.selected.set(t), this;
  }
  /**
   * Beginning of activation.
   *
   * Начало активации.
   */
  start() {
    this.element.toStart(), this.previous.set(this.active.value), this.preparation.value = this.selected.item.value, this.element.blockScroll(), this.expectation();
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
        this.element.toEnd(), this.element.toMove(), this.element.initEvent(this.end), this.active.value = this.selected.item.value, this.emit("start");
      })) : this.expectation();
    });
  }
  emit(t) {
    this.emits && this.selected.item.value !== void 0 && (t === "start" ? this.emits("start", this.selected.item.value) : this.emits("end", this.selected.item.value), this.emits("motionAxis", {
      type: t,
      selected: this.selected.item.value,
      previous: this.previous.get(),
      preparation: this.preparation.value,
      active: this.active.value
    }));
  }
}
class z {
  constructor(t) {
    i(this, "item", u([])), this.status = t;
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
    var e;
    const s = (e = this.item.value) != null ? e : [], o = this.findIndex();
    if (o === -1)
      return s == null ? void 0 : s[0];
    const l = o + t;
    return l >= s.length ? s == null ? void 0 : s[0] : l <= -1 ? s == null ? void 0 : s[s.length - 1] : s == null ? void 0 : s[l];
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
class G {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element window element / элемент окна
   * @param slides list of slides / список слайдов
   * @param status class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(t, e, s, o, l) {
    i(this, "axis", u()), i(this, "direction", u()), i(this, "back", () => {
      this.direction.value = "back", this.status.set(this.slides.getByIndex(-1));
    }), i(this, "next", () => {
      this.direction.value = "next", this.status.set(this.slides.getByIndex(1));
    }), i(this, "to", (a) => {
      const r = this.slides.findIndex(), h = this.slides.findIndex(a);
      if (h !== -1 && h !== r) {
        if (r === -1) {
          this.status.setFlash(a);
          return;
        }
        r > h ? this.direction.value = "back" : this.direction.value = "next", this.status.set(a);
      }
    }), i(this, "top", (a) => {
      this.axis.value = "y", this.direction.value = "back", this.status.set(a);
    }), i(this, "right", (a) => {
      this.axis.value = "x", this.direction.value = "next", this.status.set(a);
    }), i(this, "bottom", (a) => {
      this.axis.value = "y", this.direction.value = "next", this.status.set(a);
    }), i(this, "left", (a) => {
      this.axis.value = "x", this.direction.value = "back", this.status.set(a);
    }), i(this, "down", (a) => {
      this.axis.value = "z", this.direction.value = "back", this.status.set(a);
    }), i(this, "up", (a) => {
      this.axis.value = "z", this.direction.value = "next", this.status.set(a);
    }), i(this, "setAxis", (a) => {
      this.axis.value = a;
    }), i(this, "setDirection", (a) => {
      this.direction.value = a;
    }), this.props = t, this.refs = e, this.element = s, this.slides = o, this.status = l, this.axis.value = t.axis, this.direction.value = t.direction, c([e.axis], () => this.setAxis(t.axis)), c([e.direction], () => this.setDirection(t.direction));
  }
}
class U {
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
  constructor(t, e, s, o, l, a, r, h, m) {
    i(this, "elementItem"), i(this, "go"), i(this, "previous"), i(this, "selected"), i(this, "slides"), i(this, "status"), i(this, "styles"), i(this, "classes", v(() => ({
      [`${this.className}--axis--${this.go.axis.value}`]: !0,
      [`${this.className}--direction--${this.go.direction.value}`]: !0,
      [`${this.className}--start`]: this.elementItem.getStart() && !!this.props.animationHeight,
      [`${this.className}--move`]: this.elementItem.getMove() && !!this.props.animationHeight
    }))), i(this, "updateSelected", () => {
      const d = this.props.selected;
      if (!this.selected.is(d)) {
        if (this.props.direction === "auto") {
          this.go.to(d);
          return;
        }
        this.status.set(d);
      }
    }), this.props = t, this.refs = e, this.element = s, this.classDesign = o, this.className = l, this.components = a, this.slots = r, this.emits = h;
    const {
      ModelIncludeConstructor: p = B,
      MotionAxisElementConstructor: S = F,
      MotionAxisGoConstructor: f = G,
      MotionAxisPreviousConstructor: $ = R,
      MotionAxisSelectedConstructor: A = L,
      MotionAxisSlidesConstructor: C = z,
      MotionAxisStatusConstructor: N = T,
      MotionAxisStylesConstructor: I = O
    } = m != null ? m : {};
    this.selected = new A(this.props), this.elementItem = new S(
      this.element,
      this.className
    ), this.styles = new I(
      this.element,
      this.className,
      this.selected
    ), this.previous = new $(this.styles), this.status = new N(
      this.props,
      this.elementItem,
      this.selected,
      this.previous,
      this.styles,
      this.emits
    ), this.slides = new C(this.status), this.go = new f(
      this.props,
      this.refs,
      this.element,
      this.slides,
      this.status
    ), new p(
      "selected",
      this.emits,
      this.selected.item
    ), b(() => {
      c(
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
const V = {
  // :default [!] System label / Системная метка
  axis: "x",
  direction: "auto"
};
class j extends E {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, e, s, o = U) {
    super(
      t,
      e,
      s
    ), i(this, "item"), i(this, "renderSlides", () => {
      const l = [];
      return this.item.slides.reset(), this.slots && _(this.slots, (a, r) => {
        if (this.item.slides.add(r), this.item.isInDom(r)) {
          const h = this.item.elementItem.getClassStatus();
          l.push(x(
            "div",
            {
              key: r,
              class: {
                [h.main]: !0,
                [h.previous]: this.item.previous.is(r),
                [h.preparation]: this.item.status.isPreparation(r),
                [h.active]: this.item.status.isActive(r)
              },
              "data-key": r
            },
            a == null ? void 0 : a({})
          ));
        }
      }), l;
    }), this.item = new o(
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
      main: this.item.classes.value,
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
    var t;
    return x(
      "div",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (t = this.classes) == null ? void 0 : t.value.main
      },
      this.renderSlides()
    );
  }
}
const y = {
  // :values [!] System label / Системная метка
  axis: ["x", "y", "z"],
  direction: ["next", "back", "auto"]
  // :values [!] System label / Системная метка
}, J = {
  ...V,
  // :default [!] System label / Системная метка
  axis: "x",
  direction: "auto"
}, K = /* @__PURE__ */ D({
  name: "D1MotionAxis",
  __name: "D1MotionAxis",
  props: /* @__PURE__ */ M({
    modelSelected: {},
    "onUpdate:selected": { type: Function },
    "onUpdate:modelSelected": { type: Function },
    selected: {},
    animationHeight: { type: Boolean },
    inDom: { type: Boolean },
    inDomSlide: {},
    axis: {},
    direction: {}
  }, J),
  emits: ["update:selected", "update:modelSelected", "motionAxis", "start", "end"],
  setup(n, { expose: t, emit: e }) {
    const s = e, o = n, l = v(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-motionAxis": !0,
        [`d1-motionAxis--axis--${o.axis}`]: g(y.axis, o.axis),
        [`d1-motionAxis--direction--${o.direction}`]: g(y.direction, o.direction)
        // :classes-values [!] System label / Системная метка
      }
    })), a = v(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new j(
      "d1.motionAxis",
      o,
      {
        emits: s,
        classes: l,
        styles: a
      }
    ), h = r.render();
    return t(r.expose()), (m, p) => (k(), w(P(h)));
  }
}), Y = K;
export {
  Y as D
};

var f = Object.defineProperty;
var v = (n, e, t) => e in n ? f(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var s = (n, e, t) => v(n, typeof e != "symbol" ? e + "" : e, t);
import { watch as m, ref as d, computed as a, onUnmounted as w, h as l, Teleport as x } from "vue";
import { EventItem as S, DesignConstructorAbstract as b } from "@dxtmisha/functional";
import { A as p } from "./AriaStaticInclude-D1bSJaBp.js";
import { M as k } from "./ModelInclude-BiYm_iCQ.js";
import { T as C } from "./TabIndexInclude-DFgnqYh5.js";
import { a as u } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { M as L, _ as G } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { W as H } from "./WindowEsc-Dp9AvJt7.js";
import { M as U } from "./MotionTransformInclude-P_oRs3JZ.js";
class T {
  /**
   * Constructor
   * @param element class object for managing an element/ объект класса для управления элементом
   */
  constructor(e) {
    /** Top offset for transform/ Верхнее смещение для трансформации */
    s(this, "top", null);
    /** Left offset for transform/ Левое смещение для трансформации */
    s(this, "left", null);
    /** Head width value/ Ширина шапки */
    s(this, "headWidth", null);
    /** Total height value/ Общая высота */
    s(this, "height", null);
    /** Scale factor/ Коэффициент масштаба */
    s(this, "scale", null);
    /** Context width/ Ширина контекста */
    s(this, "contextWidth", null);
    /** Context height/ Высота контекста */
    s(this, "contextHeight", null);
    /** Head height value/ Высота шапки */
    s(this, "headHeight", null);
    /** Head scale factor/ Коэффициент масштаба шапки */
    s(this, "headScale", null);
    /** Body height value/ Высота тела */
    s(this, "bodyHeight", null);
    this.element = e;
  }
  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update() {
    var t;
    const e = this.element.getRect();
    if (e) {
      const i = this.element.getElementHead(), o = this.element.getElementBody(), h = 1 / window.innerWidth * e.width, r = 1 / e.width * window.innerWidth;
      this.top = `${e.top - h * e.top / (h - 1)}px`, this.left = `${e.left - h * e.left / (h - 1)}px`, this.height = `${100 / window.innerHeight * e.height * r}%`, this.scale = h.toString(), this.contextWidth = `${e.width}px`, this.contextHeight = `${e.height}px`, i && (this.headWidth = `${e.width}px`, this.headHeight = `${(t = i.offsetHeight) != null ? t : "0"}px`, this.headScale = r.toString(), o && (this.bodyHeight = `${o.offsetHeight + (this.element.isSection() ? i.offsetHeight : 0)}px`));
    }
  }
  /**
   * Restores all data to original.
   *
   * Восстанавливает все данные на изначальные.
   */
  reset() {
    this.top = null, this.left = null, this.height = null, this.scale = null, this.contextWidth = null, this.contextHeight = null, this.headWidth = null, this.headHeight = null, this.headScale = null, this.bodyHeight = null;
  }
}
class M {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param tabIndex class object for managing tab indices/ объект класса для управления табуляцией
   * @param size class object for managing sizes/ объект класса для управления размерами
   */
  constructor(e, t, i, o) {
    /** Open state flag/ Флаг состояния открытия */
    s(this, "open", d(!1));
    /** Temporary show state for animation/ Временный флаг показа для анимации */
    s(this, "show", d(!1));
    /** Teleportation state flag/ Флаг состояния телепортации */
    s(this, "teleport", d(!1));
    /** Computed open flag/ Вычисляемый флаг открытия */
    s(this, "isOpen", a(() => this.open.value));
    /** Checks if the element should be shown/ Проверяет, следует ли показывать элемент */
    s(this, "isShow", a(() => this.open.value || this.show.value));
    /**
     * Update of the display class.
     *
     * Обновление класса показа.
     */
    s(this, "makeShow", () => {
      const e = this.element.getElement();
      e && (e.dataset.show = this.show.value ? "show" : "none");
    });
    /**
     * Update of the opening class.
     *
     * Обновление класса открытия.
     */
    s(this, "makeOpen", () => {
      const e = this.element.getElement();
      e && (e.dataset.open = this.open.value ? "open" : "none");
    });
    /**
     * Update of the teleport class.
     *
     * Обновление класса телепорта.
     */
    s(this, "makeTeleport", () => {
      const e = this.element.getElement();
      e && (e.dataset.teleport = this.teleport.value ? "teleport" : "none");
    });
    this.element = t, this.tabIndex = i, this.size = o, m([this.element.element, this.show], this.makeShow), m([this.element.element, this.open], this.makeOpen), m([this.element.element, this.teleport], this.makeTeleport), e.open && requestAnimationFrame(() => {
      this.open.value = !!e.open, this.calculations();
    });
  }
  /**
   * Checks if teleportation should be disabled.
   *
   * Проверяет, нужно ли отключить телепортацию.
   */
  isTeleportClose() {
    return this.teleport.value && !this.open.value;
  }
  /**
   * Changes in the state of the open window.
   *
   * Изменения состояния открытого окна.
   * @param open opening status/ статус открытия
   * @param animation opening with animation/ открытие с анимацией
   */
  set(e, t = !0) {
    this.open.value !== e && (t && this.element.isAnimation() ? (this.show.value = !0, requestAnimationFrame(() => {
      this.calculations(), this.make(), requestAnimationFrame(() => {
        this.open.value = e;
      });
    })) : (this.open.value = e, this.calculations()), setTimeout(() => this.reset(), 480));
  }
  /**
   * Status switching.
   *
   * Переключение статуса.
   */
  toggle() {
    this.set(!this.open.value);
  }
  /**
   * Resets the data to the initial state.
   *
   * Сбрасывает данные в первичное состояние.
   */
  reset() {
    return this.show.value && (this.show.value = !1, this.isTeleportClose() && (this.teleport.value = !1), this.make(), this.tabIndex.toggle(this.open.value)), this;
  }
  /**
   * Calculations before animation.
   *
   * Вычисления перед анимацией.
   */
  calculations() {
    this.size.update(), this.toTeleport();
  }
  /**
   * Animation control.
   *
   * Управление анимацией.
   */
  toTeleport() {
    this.element.isWindow() && (this.teleport.value = this.isShow.value);
  }
  /**
   * Updates the list of styles.
   *
   * Обновляет список стилей.
   */
  make() {
    this.makeShow(), this.makeMain(), this.makeContext();
  }
  /**
   * Updates the list of styles for the main element.
   *
   * Обновляет список стилей для главного элемента.
   */
  makeMain() {
    const e = this.element.getElement();
    if (e) {
      const t = this.element.style;
      this.show.value ? (e.style.setProperty(t.top, this.size.top), e.style.setProperty(t.left, this.size.left), e.style.setProperty(t.height, this.size.height), e.style.setProperty(t.scale, this.size.scale), e.style.setProperty(t.headWidth, this.size.headWidth), e.style.setProperty(t.headHeight, this.size.headHeight), e.style.setProperty(t.headScale, this.size.headScale), e.style.setProperty(t.bodyHeight, this.size.bodyHeight)) : (e.style.removeProperty(t.top), e.style.removeProperty(t.left), e.style.removeProperty(t.height), e.style.removeProperty(t.scale), e.style.removeProperty(t.headWidth), e.style.removeProperty(t.headHeight), e.style.removeProperty(t.headScale), e.style.removeProperty(t.bodyHeight));
    }
  }
  /**
   * Updates the list of styles for the context element.
   *
   * Обновляет список стилей для элемента контекста.
   */
  makeContext() {
    const e = this.element.getElementContext();
    if (e) {
      const t = this.element.style;
      this.element.isWindow() && this.isShow.value ? (e.style.setProperty(t.contextWidth, this.size.contextWidth), e.style.setProperty(t.contextHeight, this.size.contextHeight)) : (e.style.removeProperty(t.contextWidth), e.style.removeProperty(t.contextHeight));
    }
  }
}
class P {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param state class object for status management/ объект класса для управления статусом
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, i, o) {
    s(this, "item");
    /**
     * Click event on the title.
     *
     * Событие клика на заголовок.
     * @param event event object/ объект события
     */
    s(this, "onClick", (e) => {
      this.props.clickOpen && this.element.isClick(e.target) && (this.emit(e, "head"), this.state.toggle());
    });
    /**
     * End of animation event.
     *
     * Событие окончания анимации.
     * @param event event object/ объект события
     */
    s(this, "onTransitionend", (e) => {
      this.element.getElement() === e.target && e.propertyName === "height" && this.state.reset();
    });
    s(this, "listener", (e) => {
      const t = e.target;
      this.state.open.value && this.element.isClickGlobal(t) && (this.element.isClose(t) || this.props.autoClose && this.element.isOutside(t) && this.element.isIgnore(t)) && (this.emit(e, "body"), this.state.set(!1));
    });
    this.props = e, this.element = t, this.state = i, this.emits = o, this.item = new S(document.body, "click", this.listener), m(this.state.open, () => this.item.toggle(this.state.open.value));
  }
  /**
   * Stopping event listening.
   *
   * Остановка прослушивания события.
   */
  stop() {
    return this.item.stop(), this;
  }
  /**
   * Event call.
   *
   * Вызов события.
   * @param event event object/ объект события
   * @param type event type/ тип события
   */
  emit(e, t) {
    var o, h;
    const i = {
      type: t,
      open: !this.state.open.value
    };
    (o = this.emits) == null || o.call(this, "transform", e, i), (h = this.emits) == null || h.call(this, "transformLite", i);
  }
}
class W {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param state class object for status management/ объект класса для управления статусом
   */
  constructor(e) {
    /**
     * Opens.
     *
     * Открывает.
     */
    s(this, "open", () => this.state.set(!0));
    /**
     * Closes.
     *
     * Закрывает.
     */
    s(this, "close", () => this.state.set(!1));
    /**
     * Switching.
     *
     * Переключение.
     */
    s(this, "toggle", () => this.state.toggle());
    /**
     * State changes.
     *
     * Изменение состояния.
     * @param open opening status/ статус открытия
     */
    s(this, "to", (e) => this.state.set(e));
    this.state = e;
  }
}
class z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param elementContext substrate element / элемент подложка
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, i, o, h, r, g, y, c) {
    /** Reference helper for element interactions/ Вспомогательный класс для работы с элементами */
    s(this, "element");
    s(this, "tabIndex");
    /** Size calculation manager/ Менеджер расчёта размеров */
    s(this, "size");
    /** State manager/ Менеджер состояния */
    s(this, "state");
    /** Event manager/ Менеджер событий */
    s(this, "event");
    /** Control actions manager/ Менеджер действий управления */
    s(this, "go");
    /** Window esc manager/ Менеджер esc окна */
    s(this, "esc");
    /**
     * Computed slot data for managing slots/
     * Вычисляемые данные слотов для управления слотами
     */
    s(this, "slotData", a(() => ({
      isOpen: this.state.isOpen,
      isShow: this.state.isShow,
      classes: u.getClassesList(this.className),
      idControl: this.element.idControl,
      idBody: this.element.idBody,
      binds: p.control(
        this.element.idControl,
        this.element.idBody,
        void 0,
        this.state.isOpen.value
      )
    })));
    this.props = e, this.refs = t, this.classDesign = h, this.className = r, this.components = g, this.slots = y, this.emits = c, this.element = new u(
      e,
      i,
      o,
      r
    ), this.tabIndex = new C(
      () => this.element.getElementBody()
    ), this.size = new T(this.element), this.state = new M(
      e,
      this.element,
      this.tabIndex,
      this.size
    ), this.event = new P(e, this.element, this.state, c), this.go = new W(this.state), this.esc = new H(
      this.state.open,
      () => this.go.close(),
      () => this.element.isWindow()
    ), new k("open", this.emits, this.state.open), m([t.open], () => this.state.set(!!e.open)), w(() => this.event.stop());
  }
  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   */
  getSlotData() {
    return this.slotData.value;
  }
  /**
   * Get the ARIA role.
   *
   * Получить ARIA роль.
   */
  getRole() {
    return this.element.isWindow() ? "dialog" : "region";
  }
}
const _ = {
  clickOpen: !0,
  autoClose: !0,
  animationShow: !0,
  tagBody: "section",
  // :default [!] System label / Системная метка
  animationHeadPosition: "top"
};
class R extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, i, o) {
    super(
      t,
      i,
      o
    );
    s(this, "elementContext", d());
    s(this, "item");
    /**
     * Rendering the main element.
     *
     * Рендеринг главного элемента.
     */
    s(this, "renderMain", () => [
      l(
        "div",
        this.propsMain.value,
        [
          ...this.renderHead(),
          ...this.renderBody()
        ]
      )
    ]);
    /**
     * Rendering the title.
     *
     * Рендеринг заголовка.
     */
    s(this, "renderHead", () => [
      l(
        "div",
        this.propsHead.value,
        this.initSlot(
          "head",
          void 0,
          this.item.getSlotData()
        )
      )
    ]);
    /**
     * Rendering the content.
     *
     * Рендеринг содержимого.
     */
    s(this, "renderBody", () => {
      var t;
      return this.props.inDom || this.item.state.isShow.value ? [
        l(
          (t = this.props.tagBody) != null ? t : "div",
          this.propsBody.value,
          this.initSlot(
            "body",
            void 0,
            this.item.getSlotData()
          )
        )
      ] : [];
    });
    /**
     * Rendering the background.
     *
     * Рендеринг задника.
     */
    s(this, "renderScrim", () => {
      var t;
      return this.item.state.teleport.value ? [
        l(
          "div",
          {
            key: "scrim",
            class: (t = this.classes) == null ? void 0 : t.value.scrim
          }
        )
      ] : [];
    });
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    s(this, "propsMain", a(() => {
      var t;
      return {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: (t = this.classes) == null ? void 0 : t.value.main,
        onTransitionend: this.item.event.onTransitionend
      };
    }));
    /**
     * Props for the head element.
     *
     * Свойства для элемента заголовка.
     */
    s(this, "propsHead", a(() => {
      var t;
      return {
        key: "head",
        class: (t = this.classes) == null ? void 0 : t.value.head,
        onClick: this.item.event.onClick
      };
    }));
    /**
     * Props for the body element.
     *
     * Свойства для элемента тела.
     */
    s(this, "propsBody", a(() => {
      var t;
      return {
        key: "body",
        id: this.item.element.idBody,
        class: (t = this.classes) == null ? void 0 : t.value.body,
        ...p.role(this.item.getRole()),
        ...p.modal(
          this.item.element.isWindow(),
          this.props.ariaLabelledby,
          this.props.ariaDescribedby
        )
      };
    }));
    this.item = new z(
      this.props,
      this.refs,
      this.element,
      this.elementContext,
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
      open: this.item.state.open,
      isShow: this.item.state.isShow,
      setOpen: this.item.go.to,
      toOpen: this.item.go.open,
      toClose: this.item.go.close,
      toggle: this.item.go.toggle
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
      context: this.getSubClass("context"),
      head: this.getSubClass("head"),
      body: this.getSubClass("body"),
      backdrop: this.getSubClass("backdrop"),
      scrim: this.getSubClass("scrim"),
      clickNone: this.getSubClass("clickNone")
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
    var i;
    const t = [
      ...this.renderMain(),
      ...this.renderScrim()
    ];
    return l(
      "div",
      {
        ref: this.elementContext,
        class: (i = this.classes) == null ? void 0 : i.value.context
      },
      l(
        x,
        {
          key: "teleport",
          disabled: !this.item.state.teleport.value,
          to: "body"
        },
        t
      )
    );
  }
}
export {
  z as MotionTransform,
  L as MotionTransformClassesInclude,
  R as MotionTransformDesign,
  U as MotionTransformInclude,
  G as __MOTION_TRANSFORM_TYPE_BODY_NAME,
  _ as defaultsMotionTransform
};

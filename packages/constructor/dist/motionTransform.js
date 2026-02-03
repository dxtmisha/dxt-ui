var H = Object.defineProperty;
var T = (h, t, e) => t in h ? H(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var s = (h, t, e) => T(h, typeof t != "symbol" ? t + "" : t, e);
import { watch as m, ref as d, computed as a, onUnmounted as M, h as l, Teleport as P } from "vue";
import { EventItem as B, isEnter as E, DesignConstructorAbstract as O } from "@dxtmisha/functional";
import { A as p } from "./AriaStaticInclude-D1bSJaBp.js";
import { M as W } from "./ModelInclude-BiYm_iCQ.js";
import { T as z } from "./TabIndexInclude-DFgnqYh5.js";
import { a as u } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { M as X, _ as Z } from "./MotionTransformClassesInclude-B23RIq0Q.js";
import { W as I } from "./WindowEsc-Dp9AvJt7.js";
import { M as et } from "./MotionTransformInclude-P_oRs3JZ.js";
class D {
  /**
   * Constructor
   * @param element class object for managing an element/ объект класса для управления элементом
   */
  constructor(t) {
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
    this.element = t;
  }
  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update() {
    var e;
    const t = this.element.getRect();
    if (t) {
      const i = this.element.getElementHead(), o = this.element.getElementBody(), n = 1 / window.innerWidth * t.width, r = 1 / t.width * window.innerWidth;
      this.top = `${t.top - n * t.top / (n - 1)}px`, this.left = `${t.left - n * t.left / (n - 1)}px`, this.height = `${100 / window.innerHeight * t.height * r}%`, this.scale = n.toString(), this.contextWidth = `${t.width}px`, this.contextHeight = `${t.height}px`, i && (this.headWidth = `${t.width}px`, this.headHeight = `${(e = i.offsetHeight) != null ? e : "0"}px`, this.headScale = r.toString(), o && (this.bodyHeight = `${o.offsetHeight + (this.element.isSection() ? i.offsetHeight : 0)}px`));
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
class A {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param tabIndex class object for managing tab indices/ объект класса для управления табуляцией
   * @param size class object for managing sizes/ объект класса для управления размерами
   */
  constructor(t, e, i, o) {
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
      const t = this.element.getElement();
      t && (t.dataset.show = this.show.value ? "show" : "none");
    });
    /**
     * Update of the opening class.
     *
     * Обновление класса открытия.
     */
    s(this, "makeOpen", () => {
      const t = this.element.getElement();
      t && (t.dataset.open = this.open.value ? "open" : "none");
    });
    /**
     * Update of the teleport class.
     *
     * Обновление класса телепорта.
     */
    s(this, "makeTeleport", () => {
      const t = this.element.getElement();
      t && (t.dataset.teleport = this.teleport.value ? "teleport" : "none");
    });
    this.element = e, this.tabIndex = i, this.size = o, m([this.element.element, this.show], this.makeShow), m([this.element.element, this.open], this.makeOpen), m([this.element.element, this.teleport], this.makeTeleport), t.open && requestAnimationFrame(() => {
      this.open.value = !!t.open, this.calculations();
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
  set(t, e = !0) {
    this.open.value !== t && (t && this.tabIndex.updateOldElement(), e && this.element.isAnimation() ? (this.show.value = !0, requestAnimationFrame(() => {
      this.calculations(), this.make(), requestAnimationFrame(() => {
        this.open.value = t;
      });
    })) : (this.open.value = t, this.calculations()), setTimeout(() => this.reset(), 480));
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
    const t = this.element.getElement();
    if (t) {
      const e = this.element.style;
      this.show.value ? (t.style.setProperty(e.top, this.size.top), t.style.setProperty(e.left, this.size.left), t.style.setProperty(e.height, this.size.height), t.style.setProperty(e.scale, this.size.scale), t.style.setProperty(e.headWidth, this.size.headWidth), t.style.setProperty(e.headHeight, this.size.headHeight), t.style.setProperty(e.headScale, this.size.headScale), t.style.setProperty(e.bodyHeight, this.size.bodyHeight)) : (t.style.removeProperty(e.top), t.style.removeProperty(e.left), t.style.removeProperty(e.height), t.style.removeProperty(e.scale), t.style.removeProperty(e.headWidth), t.style.removeProperty(e.headHeight), t.style.removeProperty(e.headScale), t.style.removeProperty(e.bodyHeight));
    }
  }
  /**
   * Updates the list of styles for the context element.
   *
   * Обновляет список стилей для элемента контекста.
   */
  makeContext() {
    const t = this.element.getElementContext();
    if (t) {
      const e = this.element.style;
      this.element.isWindow() && this.isShow.value ? (t.style.setProperty(e.contextWidth, this.size.contextWidth), t.style.setProperty(e.contextHeight, this.size.contextHeight)) : (t.style.removeProperty(e.contextWidth), t.style.removeProperty(e.contextHeight));
    }
  }
}
class N {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param state class object for status management/ объект класса для управления статусом
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i, o) {
    s(this, "item");
    /**
     * Click event on the title.
     *
     * Событие клика на заголовок.
     * @param event event object/ объект события
     */
    s(this, "onClick", (t) => {
      this.isTrigger(t.target) && (this.emit(t, "head"), this.state.toggle());
    });
    /**
     * Events of pressing a key.
     *
     * События нажатия на клавишу.
     * @param event event object/ объект события
     */
    s(this, "onKeydown", async (t) => {
      E(t) && this.isTrigger(t.target) && (t.preventDefault(), this.emit(t, "head"), this.state.toggle());
    });
    /**
     * End of animation event.
     *
     * Событие окончания анимации.
     * @param event event object/ объект события
     */
    s(this, "onTransitionend", (t) => {
      this.element.getElement() === t.target && t.propertyName === "height" && this.state.reset();
    });
    s(this, "listener", (t) => {
      const e = t.target;
      this.state.open.value && this.element.isClickGlobal(e) && (this.element.isClose(e) || this.props.autoClose && this.element.isOutside(e) && this.element.isIgnore(e)) && (this.emit(t, "body"), this.state.set(!1));
    });
    this.props = t, this.element = e, this.state = i, this.emits = o, this.item = new B(document.body, "click", this.listener), m(this.state.open, () => this.item.toggle(this.state.open.value));
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
  emit(t, e) {
    var o, n;
    const i = {
      type: e,
      open: !this.state.open.value
    };
    (o = this.emits) == null || o.call(this, "transform", t, i), (n = this.emits) == null || n.call(this, "transformLite", i);
  }
  /**
   * Checks if the event target is a trigger for opening.
   *
   * Проверяет, является ли цель события триггером для открытия.
   * @param target event target/ цель события
   */
  isTrigger(t) {
    return !!(this.props.clickOpen && this.element.isClick(t));
  }
}
class $ {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param state class object for status management/ объект класса для управления статусом
   */
  constructor(t) {
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
    s(this, "close", () => {
      this.state.set(!1);
    });
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
    s(this, "to", (t) => this.state.set(t));
    this.state = t;
  }
}
class _ {
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
   * @param MotionTransformElementConstructor class for working with elements/ класс для работы с элементами
   * @param MotionTransformSizeConstructor class for working with size/ класс для работы с размером
   * @param MotionTransformStateConstructor class for working with state/ класс для работы с состоянием
   * @param MotionTransformEventConstructor class for working with events/ класс для работы с событиями
   * @param MotionTransformGoConstructor class for working with go/ класс для работы с переходом
   * @param TabIndexIncludeConstructor class for working with tab index/ класс для работы с индексом табуляции
   * @param WindowEscConstructor class for working with esc/ класс для работы с esc
   * @param ModelIncludeConstructor class for working with model/ класс для работы с моделью
   */
  constructor(t, e, i, o, n, r, g, y, c, f = u, v = D, w = A, x = N, S = $, b = z, k = I, C = W) {
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
    this.props = t, this.refs = e, this.classDesign = n, this.className = r, this.components = g, this.slots = y, this.emits = c, this.element = new f(
      t,
      i,
      o,
      r
    ), this.tabIndex = new b(
      () => this.element.getElementBody()
    ), this.size = new v(this.element), this.state = new w(
      t,
      this.element,
      this.tabIndex,
      this.size
    ), this.event = new x(t, this.element, this.state, c), this.go = new S(this.state), this.esc = new k(
      this.state.open,
      () => this.go.close(),
      () => !!this.props.clickOpen
    ), new C("open", this.emits, this.state.open), m([e.open], () => this.state.set(!!t.open)), M(() => this.event.stop());
  }
  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   */
  getSlotData() {
    return this.slotData.value;
  }
}
const j = {
  clickOpen: !0,
  autoClose: !0,
  animationShow: !0,
  tagBody: "section",
  // :default [!] System label / Системная метка
  animationHeadPosition: "top"
};
class J extends O {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, i, o, n = _) {
    super(
      e,
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
      var e;
      return this.props.inDom || this.item.state.isShow.value ? [
        l(
          (e = this.props.tagBody) != null ? e : "div",
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
      var e;
      return this.item.state.teleport.value ? [
        l(
          "div",
          {
            key: "scrim",
            class: (e = this.classes) == null ? void 0 : e.value.scrim
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
      var e;
      return {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: (e = this.classes) == null ? void 0 : e.value.main,
        onTransitionend: this.item.event.onTransitionend
      };
    }));
    /**
     * Props for the head element.
     *
     * Свойства для элемента заголовка.
     */
    s(this, "propsHead", a(() => {
      var i;
      const e = {
        key: "head",
        class: (i = this.classes) == null ? void 0 : i.value.head,
        onClick: this.item.event.onClick
      };
      return this.props.clickOpen ? {
        ...e,
        tabindex: 0,
        onKeydown: this.item.event.onKeydown,
        ...this.item.slotData.value.binds
      } : e;
    }));
    /**
     * Props for the body element.
     *
     * Свойства для элемента тела.
     */
    s(this, "propsBody", a(() => {
      var e;
      return {
        key: "body",
        id: this.item.element.idBody,
        class: (e = this.classes) == null ? void 0 : e.value.body,
        ...p.role("region"),
        ...p.modal(
          !1,
          this.props.ariaLabelledby,
          this.props.ariaDescribedby
        )
      };
    }));
    this.item = new n(
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
    const e = [
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
        P,
        {
          key: "teleport",
          disabled: !this.item.state.teleport.value,
          to: "body"
        },
        e
      )
    );
  }
}
export {
  _ as MotionTransform,
  X as MotionTransformClassesInclude,
  J as MotionTransformDesign,
  et as MotionTransformInclude,
  Z as __MOTION_TRANSFORM_TYPE_BODY_NAME,
  j as defaultsMotionTransform
};

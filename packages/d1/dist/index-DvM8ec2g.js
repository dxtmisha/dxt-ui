import { ref as d, computed as a, h as r, Teleport as B, watch as p, onUnmounted as D, defineComponent as O, openBlock as M, createBlock as W, unref as E, mergeDefaults as z } from "vue";
import { DesignConstructorAbstract as $, EventItem as I, isEnter as A, inArray as v } from "@dxtmisha/functional";
import { l as y } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { V as N } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { E as _, v as F } from "./WindowEsc-DTwn4Vsz-CY0loI-Z.js";
import { n as f } from "./MotionTransformClassesInclude-B23RIq0Q-Cskus7RP.js";
var L = Object.defineProperty, q = (l, t, e) => t in l ? L(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e, i = (l, t, e) => q(l, typeof t != "symbol" ? t + "" : t, e);
class K {
  /**
   * Constructor
   * @param element class object for managing an element/ объект класса для управления элементом
   */
  constructor(t) {
    i(this, "top", null), i(this, "left", null), i(this, "headWidth", null), i(this, "height", null), i(this, "scale", null), i(this, "contextWidth", null), i(this, "contextHeight", null), i(this, "headHeight", null), i(this, "headScale", null), i(this, "bodyHeight", null), this.element = t;
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
      const n = this.element.getElementHead(), o = this.element.getElementBody(), s = 1 / window.innerWidth * e.width, h = 1 / e.width * window.innerWidth;
      this.top = `${e.top - s * e.top / (s - 1)}px`, this.left = `${e.left - s * e.left / (s - 1)}px`, this.height = `${100 / window.innerHeight * e.height * h}%`, this.scale = s.toString(), this.contextWidth = `${e.width}px`, this.contextHeight = `${e.height}px`, n && (this.headWidth = `${e.width}px`, this.headHeight = `${(t = n.offsetHeight) != null ? t : "0"}px`, this.headScale = h.toString(), o && (this.bodyHeight = `${o.offsetHeight + (this.element.isSection() ? n.offsetHeight : 0)}px`));
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
class U {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param tabIndex class object for managing tab indices/ объект класса для управления табуляцией
   * @param size class object for managing sizes/ объект класса для управления размерами
   */
  constructor(t, e, n, o) {
    i(this, "open", d(!1)), i(this, "show", d(!1)), i(this, "teleport", d(!1)), i(this, "isOpen", a(() => this.open.value)), i(this, "isShow", a(() => this.open.value || this.show.value)), i(this, "makeShow", () => {
      const s = this.element.getElement();
      s && (s.dataset.show = this.show.value ? "show" : "none");
    }), i(this, "makeOpen", () => {
      const s = this.element.getElement();
      s && (s.dataset.open = this.open.value ? "open" : "none");
    }), i(this, "makeTeleport", () => {
      const s = this.element.getElement();
      s && (s.dataset.teleport = this.teleport.value ? "teleport" : "none");
    }), this.element = e, this.tabIndex = n, this.size = o, p([this.element.element, this.show], this.makeShow), p([this.element.element, this.open], this.makeOpen), p([this.element.element, this.teleport], this.makeTeleport), t.open && requestAnimationFrame(() => {
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
class G {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data/ входные данные
   * @param element class object for managing an element/ объект класса для управления элементом
   * @param state class object for status management/ объект класса для управления статусом
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, n, o) {
    i(this, "item"), i(this, "onClick", (s) => {
      this.isTrigger(s.target) && (this.emit(s, "head"), this.state.toggle());
    }), i(this, "onKeydown", async (s) => {
      A(s) && this.isTrigger(s.target) && (s.preventDefault(), this.emit(s, "head"), this.state.toggle());
    }), i(this, "onTransitionend", (s) => {
      this.element.getElement() === s.target && s.propertyName === "height" && this.state.reset();
    }), i(this, "listener", (s) => {
      const h = s.target;
      this.state.open.value && this.element.isClickGlobal(h) && (this.element.isClose(h) || this.props.autoClose && this.element.isOutside(h) && this.element.isIgnore(h)) && (this.emit(s, "body"), this.state.set(!1));
    }), this.props = t, this.element = e, this.state = n, this.emits = o, this.item = new I(document.body, "click", this.listener), p(
      this.state.open,
      () => {
        this.props.autoClose && this.state.open.value, this.item.toggle(this.state.open.value);
      }
    );
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
    var n, o;
    const s = {
      type: e,
      open: !this.state.open.value
    };
    (n = this.emits) == null || n.call(this, "transform", t, s), (o = this.emits) == null || o.call(this, "transformLite", s);
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
class R {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param state class object for status management/ объект класса для управления статусом
   */
  constructor(t) {
    i(this, "open", () => this.state.set(!0)), i(this, "close", () => {
      this.state.set(!1);
    }), i(this, "toggle", () => this.state.toggle()), i(this, "to", (e) => this.state.set(e)), this.state = t;
  }
}
class V {
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionTransformElementConstructor class for working with elements/ класс для работы с элементами
   * @param constructors.MotionTransformEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.MotionTransformGoConstructor class for working with go/ класс для работы с переходом
   * @param constructors.MotionTransformSizeConstructor class for working with size/ класс для работы с размером
   * @param constructors.MotionTransformStateConstructor class for working with state/ класс для работы с состоянием
   * @param constructors.TabIndexIncludeConstructor class for working with tab index/ класс для работы с индексом табуляции
   * @param constructors.WindowEscConstructor class for working with esc/ класс для работы с esc
   */
  constructor(t, e, n, o, s, h, m, c, u, g) {
    i(this, "element"), i(this, "tabIndex"), i(this, "size"), i(this, "state"), i(this, "event"), i(this, "go"), i(this, "esc"), i(this, "slotData", a(() => ({
      isOpen: this.state.isOpen,
      isShow: this.state.isShow,
      classes: f.getClassesList(this.className),
      idControl: this.element.idControl,
      idBody: this.element.idBody,
      binds: y.control(
        this.element.idControl,
        this.element.idBody,
        void 0,
        this.state.isOpen.value
      )
    }))), this.props = t, this.refs = e, this.classDesign = s, this.className = h, this.components = m, this.slots = c, this.emits = u;
    const {
      ModelIncludeConstructor: b = N,
      MotionTransformElementConstructor: x = f,
      MotionTransformEventConstructor: C = G,
      MotionTransformGoConstructor: S = R,
      MotionTransformSizeConstructor: k = K,
      MotionTransformStateConstructor: H = U,
      TabIndexIncludeConstructor: T = F,
      WindowEscConstructor: P = _
    } = g != null ? g : {};
    this.element = new x(
      t,
      n,
      o,
      h
    ), this.tabIndex = new T(
      () => this.element.getElementBody(),
      () => this.element.isWindow()
    ), this.size = new k(this.element), this.state = new H(
      t,
      this.element,
      this.tabIndex,
      this.size
    ), this.event = new C(t, this.element, this.state, u), this.go = new S(this.state), this.esc = new P(
      this.state.open,
      () => this.go.close(),
      () => !!this.props.clickOpen
    ), new b("open", this.emits, this.state.open), p([e.open], () => this.state.set(!!t.open)), D(() => this.event.stop());
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
class J extends $ {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, e, n, o = V) {
    super(
      t,
      e,
      n
    ), i(this, "elementContext", d()), i(this, "item"), i(this, "renderMain", () => [
      r(
        "div",
        this.propsMain.value,
        [
          ...this.renderHead(),
          ...this.renderBody()
        ]
      )
    ]), i(this, "renderHead", () => [
      r(
        "div",
        this.propsHead.value,
        this.initSlot(
          "head",
          void 0,
          this.item.getSlotData()
        )
      )
    ]), i(this, "renderBody", () => {
      var s;
      return this.props.inDom || this.item.state.isShow.value ? [
        r(
          (s = this.props.tagBody) != null ? s : "div",
          this.propsBody.value,
          this.initSlot(
            "body",
            void 0,
            this.item.getSlotData()
          )
        )
      ] : [];
    }), i(this, "renderScrim", () => {
      var s;
      return this.item.state.teleport.value ? [
        r(
          "div",
          {
            key: "scrim",
            class: (s = this.classes) == null ? void 0 : s.value.scrim
          }
        )
      ] : [];
    }), i(this, "propsMain", a(() => {
      var s;
      return {
        ...this.getAttrs(),
        ref: this.element,
        key: "main",
        class: (s = this.classes) == null ? void 0 : s.value.main,
        onTransitionend: this.item.event.onTransitionend
      };
    })), i(this, "propsHead", a(() => {
      var s;
      const h = {
        key: "head",
        class: (s = this.classes) == null ? void 0 : s.value.head,
        onClick: this.item.event.onClick
      };
      return this.props.clickOpen ? {
        ...h,
        onKeydown: this.item.event.onKeydown,
        ...this.item.slotData.value.binds
      } : h;
    })), i(this, "propsBody", a(() => {
      var s;
      return {
        key: "body",
        id: this.item.element.idBody,
        class: (s = this.classes) == null ? void 0 : s.value.body,
        ...y.role("region"),
        ...y.modal(
          !1,
          this.props.ariaLabelledby,
          this.props.ariaDescribedby
        )
      };
    })), this.item = new o(
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
    var t;
    const e = [
      ...this.renderMain(),
      ...this.renderScrim()
    ];
    return r(
      "div",
      {
        ref: this.elementContext,
        class: (t = this.classes) == null ? void 0 : t.value.context
      },
      r(
        B,
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
const w = {
  // :values [!] System label / Системная метка
  animationHeadPosition: ["top", "toBottom"],
  adaptive: ["planeAlways", "planeSm", "planeMd", "planeLg", "planeXl", "plane2xl"]
  // :values [!] System label / Системная метка
}, Q = {
  ...j,
  // :default [!] System label / Системная метка
  animationHeadPosition: "top",
  adaptive: "planeMd"
}, X = /* @__PURE__ */ O({
  name: "D1MotionTransform",
  __name: "D1MotionTransform",
  props: /* @__PURE__ */ z({
    ariaLabelledby: {},
    ariaDescribedby: {},
    modelOpen: {},
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    open: { type: Boolean },
    inDom: { type: Boolean },
    ignore: {},
    ignoreSelector: {},
    clickOpen: { type: Boolean },
    autoClose: { type: Boolean },
    animationShow: { type: Boolean },
    tagBody: {},
    section: { type: Boolean },
    animationHeadPosition: {},
    adaptive: {}
  }, Q),
  emits: ["update:open", "update:modelOpen", "transform", "transformLite"],
  setup(l, { expose: t, emit: e }) {
    const n = e, o = l, s = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-motionTransform": !0,
        "d1-motionTransform--section": o.section,
        [`d1-motionTransform--animationHeadPosition--${o.animationHeadPosition}`]: v(w.animationHeadPosition, o.animationHeadPosition),
        [`d1-motionTransform--adaptive--${o.adaptive}`]: v(w.adaptive, o.adaptive)
        // :classes-values [!] System label / Системная метка
      }
    })), h = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), m = new J(
      "d1.motionTransform",
      o,
      {
        emits: n,
        classes: s,
        styles: h
      }
    ), c = m.render();
    return t(m.expose()), (u, g) => (M(), W(E(c)));
  }
}), ot = X;
export {
  ot as D
};

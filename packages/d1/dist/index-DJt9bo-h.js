import { computed as p, onUnmounted as B, watch as D, ref as d, nextTick as g, h as w, Teleport as P, defineComponent as M, openBlock as A, createBlock as _, unref as H, mergeDefaults as L } from "vue";
import { toBinds as W, getRef as k, DesignConstructorAbstract as E, getElementId as b, isDomRuntime as O, EventItem as q, inArray as R } from "@dxtmisha/functional";
import { l as u } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { x as F } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { v as j } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { D as U } from "./index-Dp_TskRA.js";
var V = Object.defineProperty, X = (n, t, s) => t in n ? V(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s, m = (n, t, s) => X(n, typeof t != "symbol" ? t + "" : t, s);
let Y = class {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param elementTarget target element or selector/ целевой элемент или селектор
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, o, i, r, l) {
    m(this, "is", p(() => !!this.props.arrowShow)), m(this, "binds", p(() => W(
      k(this.extra),
      this.props.arrowAttrs,
      {
        class: `${this.className}__arrow`,
        elementTarget: this.elementTarget
      }
    ))), m(this, "render", () => this.components && this.is.value ? this.components.render(
      "arrow",
      this.binds.value,
      void 0,
      this.index
    ) : []), this.props = t, this.className = s, this.components = o, this.elementTarget = i, this.extra = r, this.index = l;
  }
};
var z = Object.defineProperty, G = (n, t, s) => t in n ? z(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s, e = (n, t, s) => G(n, typeof t != "symbol" ? t + "" : t, s);
class J {
  /**
   * Constructor
   * @param className class name/ название класса
   */
  constructor(t) {
    e(this, "id", `tooltip--${b()}`), e(this, "idItem", `tooltip--${b()}-item`), this.className = t;
  }
  /**
   * Returns the identifier of the current window.
   *
   * Возвращает идентификатор текущего окна.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the identifier of the current item.
   *
   * Возвращает идентификатор текущего элемента.
   */
  getIdItem() {
    return this.idItem;
  }
  /**
   * Returns a class for control.
   *
   * Возвращает класс для контроля.
   */
  getClassControl() {
    return `${this.className}__control`;
  }
  /**
   * Returns a class for control.
   *
   * Возвращает класс для контроля.
   */
  getControl() {
    return `${this.getClassControl()} ${this.getId()}`;
  }
  /**
   * Returns the class selector for control.
   *
   * Возвращает селектор класса для управления.
   */
  getSelectorControl() {
    return `.${this.getClassControl()}.${this.id}`;
  }
  /**
   * Finds the control element.
   *
   * Находит элемент управления.
   */
  findControl() {
    var t;
    if (O())
      return (t = document.querySelector(this.getSelectorControl())) != null ? t : void 0;
  }
  /**
   * Finds the control element among its descendants.
   *
   * Находит элемент управления среди его потомков.
   * @param target selected element/ выбранный элемент
   */
  findControlByTarget(t) {
    var s;
    return (s = t.closest(this.getSelectorControl())) != null ? s : void 0;
  }
}
class K {
  /**
   * Constructor
   * @param element instance of the element itself/ экземпляр самого элемента
   * @param className class name/ название класса
   */
  constructor(t, s) {
    this.element = t, this.className = s;
  }
  /**
   * Changing styles.
   *
   * Изменение стилей.
   * @param top should the element be placed on top/ нужно ли поместить элемент сверху
   * @param x value of X/ значение X
   * @param y value of Y/ значение Y
   * @param shift value for shift/ значение для сдвига
   */
  set(t, s, o, i) {
    const r = this.element.value;
    r && (r.classList.toggle(`${this.className}--top`, t), r.style.setProperty(`--${this.className}-sys-x`, `${s}px`), r.style.setProperty(`--${this.className}-sys-y`, `${o}px`), r.style.setProperty(`--${this.className}-sys-shift`, `${i}px`));
  }
  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param status the value of the current state/ значение текущего состояния
   */
  setPreparation(t) {
    const s = this.element.value;
    s && s.classList.toggle(`${this.className}--preparation`, t);
  }
  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param status the value of the current state/ значение текущего состояния
   */
  setShow(t) {
    const s = this.element.value;
    s && (s.classList.toggle(`${this.className}--show`, t), t || this.setMove(t));
  }
  /**
   * Changes the move status.
   *
   * Изменяет статус перемещения.
   * @param status the value of the current state/ значение текущего состояния
   */
  setMove(t) {
    const s = this.element.value;
    s && s.classList.toggle(`${this.className}--move`, t);
  }
  /**
   * Reset all records to the initial state.
   *
   * Сброс всех записей до начального состояния.
   */
  reset() {
    const t = this.element.value;
    t && (t.classList.remove(`${this.className}--top`), t.classList.remove(`${this.className}--preparation`), t.classList.remove(`${this.className}--show`), t.style.removeProperty(`--${this.className}-sys-x`), t.style.removeProperty(`--${this.className}-sys-y`), t.style.removeProperty(`--${this.className}-sys-shift`));
  }
  /**
   * Resets the display state.
   *
   * Сбрасывает состояние показа.
   */
  resetShow() {
    const t = this.element.value;
    t && (t.classList.remove(`${this.className}--preparation`), t.classList.remove(`${this.className}--show`));
  }
}
class Q {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
   */
  constructor(t, s) {
    e(this, "open", d(!1)), e(this, "show", d(!1)), e(this, "preparation", d(!1)), e(this, "isText", p(
      () => !this.props.disabled && !!(this.props.label || this.props.description || this.slots && ("default" in this.slots || "description" in this.slots || "body" in this.slots))
    )), e(this, "isShow", p(
      () => !!(this.show.value || this.open.value || this.props.inDom) && this.isText.value
    )), e(this, "isArray", p(
      () => !!(this.props.arrowShow && this.preparation.value)
    )), this.props = t, this.slots = s;
  }
  /**
   * Checks if the current status matches the selected one.
   *
   * Проверяет, соответствует ли текущий статус выбранному.
   * @param open the value of the current state/ значение текущего состояния
   */
  isMatch(t) {
    return this.open.value === t;
  }
  /**
   * Changes the open state.
   *
   * Изменяет состояние открытия.
   * @param open the value of the current state/ значение текущего состояния
   */
  setOpen(t) {
    this.open.value = t;
  }
  /**
   * Changes the display state.
   *
   * Изменяет состояние показа.
   * @param show the value of the current state/ значение текущего состояния
   */
  setShow(t) {
    this.show.value = t;
  }
  /**
   * Changes the preparation status.
   *
   * Изменяет статус подготовки.
   * @param preparation the value of the current state/ значение текущего состояния
   */
  setPreparation(t) {
    this.preparation.value = t;
  }
}
class Z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element instance of the element itself/ экземпляр самого элемента
   * @param classes object for working with the class/ объект для работы с классом
   * @param style object for working with styles/ объект для работы со стилями
   */
  constructor(t, s, o, i) {
    this.props = t, this.element = s, this.classes = o, this.style = i;
  }
  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update() {
    const t = this.element.value, s = this.classes.findControl();
    if (t && s) {
      const o = s.getBoundingClientRect(), i = t.getBoundingClientRect(), r = this.getIndent(), l = this.isTop(o, i), h = o.left + o.width / 2 - i.width / 2, c = l ? o.top - i.height - r : o.bottom + r;
      let a = 0;
      h < 0 ? a = 0 - h : h + i.width > window.innerWidth && (a = window.innerWidth - (h + i.width)), this.style.set(
        l,
        h,
        c,
        a
      );
    }
  }
  /**
   * Checks whether the element should be displayed on top.
   *
   * Проверяет, надо ли отображать элемент сверху.
   * @param rect the current position of the control element/ данное положение элемента контроля
   * @param tooltipRect the current position of the element itself/ данное положение самого элемента
   */
  isTop(t, s) {
    const o = this.getIndent();
    return this.props.top && t.top - s.height - o >= 0 || t.bottom + s.height + o > window.innerHeight;
  }
  /**
   * Returns the margins for the element.
   *
   * Возвращает отступы для элемента.
   */
  getIndent() {
    var t;
    return (t = this.props.indent) != null ? t : 0;
  }
}
class tt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param style object for working with styles/ объект для работы со стилями
   * @param status object for working with statuses/ объект для работы со статусами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, s, o, i, r, l) {
    e(this, "timeout"), e(this, "timeoutHide"), e(this, "timeoutTo"), e(this, "event"), e(this, "toggle", async (h, c) => {
      this.status.isText.value && !this.status.isMatch(h) && (clearTimeout(this.timeout), clearTimeout(this.timeoutHide), h ? (this.status.setOpen(h), this.status.setShow(!0), await g(), this.position.update(), this.status.setPreparation(!0), await g(), requestAnimationFrame(() => {
        this.timeout = setTimeout(() => {
          this.style.setPreparation(!0), requestAnimationFrame(() => {
            var a;
            this.style.setShow(!0), this.eventStart(), (a = this.emits) == null || a.call(this, "tooltip", !0), this.props.delayHide && (this.timeoutHide = setTimeout(() => this.toggle(!1), Number(this.props.delayHide)));
          });
        }, c ? 48 : this.props.delay);
      })) : this.timeoutTo = setTimeout(() => {
        this.status.setOpen(h), this.style.resetShow(), this.eventStop(), this.timeout = setTimeout(() => {
          var a;
          this.status.setShow(!1), this.status.setPreparation(!1), (a = this.emits) == null || a.call(this, "tooltip", !1);
        }, 128);
      }, c ? 48 : 256));
    }), e(this, "onScroll", () => this.toggle(!1, !0)), this.props = t, this.style = o, this.status = i, this.position = r, this.emits = l, this.event = new q(window, ["scroll-sync"], this.onScroll), D([s.open], () => {
      this.toggle(!!this.props.open).then();
    }, { immediate: this.props.open });
  }
  /**
   * Cancel hiding the element.
   *
   * Отмена скрытия элемента.
   */
  noHide() {
    clearTimeout(this.timeoutTo);
  }
  /**
   * Start listening to scroll events.
   *
   * Запуск прослушивания событий скролла.
   */
  eventStart() {
    this.props.embedded || this.event.start();
  }
  /**
   * Stop listening to scroll events.
   *
   * Остановка прослушивания событий скролла.
   */
  eventStop() {
    this.event.stop();
  }
}
class st {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param classes object for working with the class/ объект для работы с классом
   * @param style object for working with styles/ объект для работы со стилями
   * @param status object for working with statuses/ объект для работы со статусами
   * @param open data opening management/ управление открытием данных
   */
  constructor(t, s, o, i, r) {
    e(this, "next", !1), e(this, "timeout"), e(this, "onClick", () => {
      this.isNotEmbedded() && requestAnimationFrame(async () => {
        this.next || (clearTimeout(this.timeout), await this.open.toggle(!this.status.open.value, !0), this.next = !1);
      });
    }), e(this, "onMouseover", ({ target: l }) => {
      this.isNotEmbedded() && (clearTimeout(this.timeout), this.next = !0, requestAnimationFrame(async () => {
        await this.open.toggle(
          !!this.classes.findControlByTarget(l)
        ), this.timeout = setTimeout(() => {
          this.next = !1;
        }, 640);
      }));
    }), e(this, "onMouseoverTooltip", () => {
      this.open.noHide();
    }), e(this, "onMouseout", ({ relatedTarget: l }) => {
      this.isNotEmbedded() && l && this.open.toggle(
        !!this.classes.findControlByTarget(l)
      ).then();
    }), e(this, "onTransitionend", (l) => {
      l.propertyName === "transform" && this.status.open.value && this.style.setMove(!0);
    }), this.props = t, this.classes = s, this.style = o, this.status = i, this.open = r;
  }
  isNotEmbedded() {
    return !this.props.embedded;
  }
}
class et {
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
   * @param constructors.ArrowIncludeConstructor class for working with arrow/ класс для работы со стрелкой
   * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.TooltipClassesConstructor class for working with classes/ класс для работы с классами
   * @param constructors.TooltipEventConstructor class for working with events/ класс для работы с событиями
   * @param constructors.TooltipOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param constructors.TooltipPositionConstructor class for working with position/ класс для работы с позицией
   * @param constructors.TooltipStatusConstructor class for working with status/ класс для работы со статусом
   * @param constructors.TooltipStyleConstructor class for working with styles/ класс для работы со стилями
   */
  constructor(t, s, o, i, r, l, h, c, a) {
    e(this, "classes"), e(this, "style"), e(this, "status"), e(this, "position"), e(this, "open"), e(this, "event"), e(this, "arrow"), e(this, "label"), e(this, "description"), e(this, "binds", p(() => ({
      id: this.classes.getIdItem(),
      onMouseover: this.event.onMouseoverTooltip,
      onMouseout: this.event.onMouseout,
      onTransitionend: this.event.onTransitionend,
      ...u.role(this.role.value),
      ...u.labelledby(this.label.id.value),
      ...u.describedby(this.description.id.value)
    }))), e(this, "bindsControl", p(() => {
      const y = {
        class: this.classes.getControl(),
        onclick: this.event.onClick,
        onmouseover: this.event.onMouseover,
        onmouseout: this.event.onMouseout
      };
      return this.props.interactive ? {
        ...y,
        ...u.expanded(this.status.open.value),
        ...u.controls(this.classes.getIdItem())
      } : {
        ...y,
        ...u.describedby(this.classes.getIdItem())
      };
    })), e(this, "slotData", p(() => ({
      ...this.bindsControl.value,
      open: this.status.open,
      binds: this.bindsControl.value
    }))), e(this, "role", p(() => this.props.interactive ? "region" : "tooltip")), this.props = t, this.refs = s, this.element = o, this.classDesign = i, this.className = r, this.components = l, this.slots = h, this.emits = c;
    const {
      ArrowIncludeConstructor: v = Y,
      DescriptionIncludeConstructor: f = j,
      LabelIncludeConstructor: T = F,
      TooltipClassesConstructor: C = J,
      TooltipEventConstructor: x = st,
      TooltipOpenConstructor: N = tt,
      TooltipPositionConstructor: S = Z,
      TooltipStatusConstructor: $ = Q,
      TooltipStyleConstructor: I = K
    } = a != null ? a : {};
    this.classes = new C(this.className), this.style = new I(this.element, this.className), this.status = new $(this.props, this.slots), this.position = new S(
      this.props,
      this.element,
      this.classes,
      this.style
    ), this.open = new N(
      this.props,
      this.refs,
      this.style,
      this.status,
      this.position
    ), this.event = new x(
      this.props,
      this.classes,
      this.style,
      this.status,
      this.open
    ), this.arrow = new v(
      this.props,
      this.className,
      this.components,
      this.classes.getSelectorControl()
    ), this.label = new T(
      this.props,
      this.className,
      void 0,
      this.slots
    ), this.description = new f(
      this.props,
      this.className,
      this.slots
    ), B(() => {
      this.open.eventStop();
    });
  }
}
const it = {
  indent: 4,
  delay: 64,
  delayHide: 0,
  // :default [!] System label / Системная метка
  interactive: !0
};
class ot extends E {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor tooltip item class/ класс элемента тултипа
   */
  constructor(t, s, o, i = et) {
    super(
      t,
      s,
      o
    ), e(this, "item"), e(this, "renderControl", () => [
      this.initSlot("control", void 0, this.item.slotData.value)
    ]), e(this, "renderTooltip", () => {
      var r;
      if (this.item.status.isShow.value) {
        const l = [
          ...this.item.label.render(),
          ...this.item.description.render(),
          ...this.renderBody()
        ];
        this.item.status.isArray.value && l.push(
          ...this.item.arrow.render()
        );
        const h = w(
          "div",
          {
            ref: this.element,
            class: (r = this.classes) == null ? void 0 : r.value.main,
            ...this.item.binds.value
          },
          l
        );
        return this.props.embedded ? [h] : [
          w(
            P,
            {
              key: "teleport",
              to: "body"
            },
            h
          )
        ];
      }
      return [];
    }), e(this, "renderBody", () => this.slots && "body" in this.slots ? [
      this.initSlot("body")
    ] : []), this.item = new i(
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
      toggle: this.item.open.toggle
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
      label: this.getSubClass("label"),
      description: this.getSubClass("description"),
      body: this.getSubClass("body")
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
    return [
      ...this.renderControl(),
      ...this.renderTooltip()
    ];
  }
}
const nt = {
  // :values [!] System label / Системная метка
  maxWidth: ["sm", "md", "lg"]
  // :values [!] System label / Системная метка
}, rt = {
  ...it,
  // :default [!] System label / Системная метка
  interactive: !0,
  maxWidth: "md"
}, lt = /* @__PURE__ */ M({
  name: "D1Tooltip",
  __name: "D1Tooltip",
  props: /* @__PURE__ */ L({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    arrowShow: { type: Boolean },
    arrowPosition: {},
    arrowAttrs: {},
    open: { type: Boolean },
    disabled: { type: Boolean },
    inDom: { type: Boolean },
    top: { type: Boolean },
    indent: {},
    delay: {},
    delayHide: {},
    embedded: { type: Boolean },
    interactive: { type: Boolean },
    maxWidth: {}
  }, rt),
  emits: ["tooltip"],
  setup(n, { expose: t, emit: s }) {
    const o = s, i = n, r = p(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-tooltip": !0,
        "d1-tooltip--interactive": i.interactive,
        "d1-tooltip--embedded": i.embedded,
        [`d1-tooltip--maxWidth--${i.maxWidth}`]: R(nt.maxWidth, i.maxWidth)
        // :classes-values [!] System label / Системная метка
      }
    })), l = p(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new ot(
      "d1.tooltip",
      i,
      {
        emits: o,
        classes: r,
        styles: l,
        components: {
          arrow: U
        }
      }
    ), c = h.render();
    return t(h.expose()), (a, v) => (A(), _(H(c)));
  }
}), vt = lt;
export {
  vt as D
};

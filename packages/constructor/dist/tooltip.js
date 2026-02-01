var I = Object.defineProperty;
var x = (l, t, s) => t in l ? I(l, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : l[t] = s;
var e = (l, t, s) => x(l, typeof t != "symbol" ? t + "" : t, s);
import { ref as c, computed as m, watch as M, nextTick as d, onUnmounted as B, h as g, Teleport as P } from "vue";
import { getElementId as y, isDomRuntime as A, EventItem as D, DesignConstructorAbstract as L } from "@dxtmisha/functional";
import { A as v } from "./AriaStaticInclude-D1bSJaBp.js";
import { L as H } from "./LabelInclude-CEuTh1Qi.js";
import { D as k } from "./DescriptionInclude-D4ane9aR.js";
import { A as q } from "./ArrowInclude-CcpT637l.js";
import { T as st } from "./TooltipInclude--QRSE83v.js";
class E {
  /**
   * Constructor
   * @param className class name/ название класса
   */
  constructor(t) {
    /**
     * Identification of the current window. Used to search for the current component and its control/
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля
     */
    e(this, "id", `tooltip--${y()}`);
    e(this, "idItem", `tooltip--${y()}-item`);
    this.className = t;
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
    if (A())
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
class F {
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
  set(t, s, i, o) {
    const n = this.element.value;
    n && (n.classList.toggle(`${this.className}--top`, t), n.style.setProperty(`--${this.className}-sys-x`, `${s}px`), n.style.setProperty(`--${this.className}-sys-y`, `${i}px`), n.style.setProperty(`--${this.className}-sys-shift`, `${o}px`));
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
class O {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param slots object for working with slots/ объект для работы со слотами
   */
  constructor(t, s) {
    e(this, "open", c(!1));
    e(this, "show", c(!1));
    e(this, "preparation", c(!1));
    /**
     * Checks if there is text to display.
     *
     * Проверяет, есть ли текст для отображения.
     */
    e(this, "isText", m(
      () => !this.props.disabled && !!(this.props.label || this.props.description || this.slots && ("default" in this.slots || "description" in this.slots || "body" in this.slots))
    ));
    /** Checks if the element needs to be displayed/ Проверяет, нужно ли отображать элемент */
    e(this, "isShow", m(
      () => !!(this.show.value || this.open.value || this.props.inDom) && this.isText.value
    ));
    /** Checks if the content is an array/ Проверяет, является ли содержимое массивом */
    e(this, "isArray", m(
      () => !!(this.props.arrowShow && this.preparation.value)
    ));
    this.props = t, this.slots = s;
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
class R {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element instance of the element itself/ экземпляр самого элемента
   * @param classes object for working with the class/ объект для работы с классом
   * @param style object for working with styles/ объект для работы со стилями
   */
  constructor(t, s, i, o) {
    this.props = t, this.element = s, this.classes = i, this.style = o;
  }
  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update() {
    const t = this.element.value, s = this.classes.findControl();
    if (t && s) {
      const i = s.getBoundingClientRect(), o = t.getBoundingClientRect(), n = this.getIndent(), h = this.isTop(i, o), r = i.left + i.width / 2 - o.width / 2, p = h ? i.top - o.height - n : i.bottom + n;
      let a = 0;
      r < 0 ? a = 0 - r : r + o.width > window.innerWidth && (a = window.innerWidth - (r + o.width)), this.style.set(
        h,
        r,
        p,
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
    const i = this.getIndent();
    return this.props.top && t.top - s.height - i >= 0 || t.bottom + s.height + i > window.innerHeight;
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
class W {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param style object for working with styles/ объект для работы со стилями
   * @param status object for working with statuses/ объект для работы со статусами
   * @param position object for working with the position of the element/ объект для работы с положением элемента
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, s, i, o, n, h) {
    e(this, "timeout");
    e(this, "timeoutHide");
    e(this, "timeoutTo");
    e(this, "event");
    /**
     * Element display management.
     *
     * Управление отображением элемента.
     * @param open display status/ статус отображения
     * @param flesh immediate display without delay/ мгновенное отображение без задержки
     */
    e(this, "toggle", async (t, s) => {
      this.status.isText.value && !this.status.isMatch(t) && (clearTimeout(this.timeout), clearTimeout(this.timeoutHide), t ? (this.status.setOpen(t), this.status.setShow(!0), await d(), this.position.update(), this.status.setPreparation(!0), await d(), requestAnimationFrame(() => {
        this.timeout = setTimeout(() => {
          this.style.setPreparation(!0), requestAnimationFrame(() => {
            var i;
            this.style.setShow(!0), this.event.start(), (i = this.emits) == null || i.call(this, "tooltip", !0), this.props.delayHide && (this.timeoutHide = setTimeout(() => this.toggle(!1), Number(this.props.delayHide)));
          });
        }, s ? 48 : this.props.delay);
      })) : this.timeoutTo = setTimeout(() => {
        this.status.setOpen(t), this.style.resetShow(), this.event.stop(), this.timeout = setTimeout(() => {
          var i;
          this.status.setShow(!1), this.status.setPreparation(!1), (i = this.emits) == null || i.call(this, "tooltip", !1);
        }, 128);
      }, s ? 48 : 256));
    });
    /**
     * Scroll event management.
     *
     * Управление событиями скролла.
     */
    e(this, "onScroll", () => this.toggle(!1, !0));
    this.props = t, this.style = i, this.status = o, this.position = n, this.emits = h, this.event = new D(window, ["scroll-sync"], this.onScroll), M([s.open], () => {
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
  eventStop() {
    this.event.stop();
  }
}
class _ {
  /**
   * Constructor
   * @param classes object for working with the class/ объект для работы с классом
   * @param style object for working with styles/ объект для работы со стилями
   * @param status object for working with statuses/ объект для работы со статусами
   * @param open data opening management/ управление открытием данных
   */
  constructor(t, s, i, o) {
    e(this, "next", !1);
    e(this, "timeout");
    /**
     * Events on clicking an element in a mobile application.
     *
     * События при клике на элементе в мобильном приложении.
     */
    e(this, "onClick", () => {
      requestAnimationFrame(async () => {
        this.next || (clearTimeout(this.timeout), await this.open.toggle(!this.status.open.value, !0), this.next = !1);
      });
    });
    /**
     * Element management events on receiving focus.
     *
     * События управления элементом при получении фокуса.
     * @param target selected element/ выбранный элемент
     */
    e(this, "onMouseover", ({ target: t }) => {
      clearTimeout(this.timeout), this.next = !0, requestAnimationFrame(async () => {
        await this.open.toggle(
          !!this.classes.findControlByTarget(t)
        ), this.timeout = setTimeout(() => {
          this.next = !1;
        }, 640);
      });
    });
    /**
     * Element management events on receiving focus on the tooltip itself.
     *
     * События управления элементом при получении фокуса на самом тултипе.
     */
    e(this, "onMouseoverTooltip", () => {
      this.open.noHide();
    });
    /**
     * Element management events on losing focus.
     *
     * События управления элементом при потере фокуса.
     * @param relatedTarget selected element/ выбранный элемент
     */
    e(this, "onMouseout", ({ relatedTarget: t }) => {
      t && this.open.toggle(
        !!this.classes.findControlByTarget(t)
      ).then();
    });
    /**
     * Event of the end of the transition.
     *
     * Событие окончания трансформации.
     * @param event event data/ данные события
     */
    e(this, "onTransitionend", (t) => {
      t.propertyName === "transform" && this.status.open.value && this.style.setMove(!0);
    });
    this.classes = t, this.style = s, this.status = i, this.open = o;
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
   * @param TooltipClassesConstructor class for working with classes/ класс для работы с классами
   * @param TooltipStyleConstructor class for working with styles/ класс для работы со стилями
   * @param TooltipStatusConstructor class for working with status/ класс для работы со статусом
   * @param TooltipPositionConstructor class for working with position/ класс для работы с позицией
   * @param TooltipOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param TooltipEventConstructor class for working with events/ класс для работы с событиями
   * @param ArrowIncludeConstructor class for working with arrow/ класс для работы со стрелкой
   * @param LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   */
  constructor(t, s, i, o, n, h, r, p, a = E, f = F, w = O, T = R, C = W, S = _, N = q, $ = H, b = k) {
    e(this, "classes");
    e(this, "style");
    e(this, "status");
    e(this, "position");
    e(this, "open");
    e(this, "event");
    e(this, "arrow");
    e(this, "label");
    e(this, "description");
    /** Data for the control slot/ Данные для слота управления */
    e(this, "slotData");
    this.props = t, this.refs = s, this.element = i, this.classDesign = o, this.className = n, this.components = h, this.slots = r, this.emits = p, this.classes = new a(this.className), this.style = new f(this.element, this.className), this.status = new w(this.props, this.slots), this.position = new T(
      this.props,
      this.element,
      this.classes,
      this.style
    ), this.open = new C(
      this.props,
      this.refs,
      this.style,
      this.status,
      this.position
    ), this.event = new S(
      this.classes,
      this.style,
      this.status,
      this.open
    ), this.arrow = new N(
      this.props,
      this.className,
      this.components,
      this.classes.getSelectorControl()
    ), this.label = new $(
      this.props,
      this.className,
      void 0,
      this.slots
    ), this.description = new b(
      this.props,
      this.className,
      this.slots
    );
    const u = {
      class: this.classes.getControl(),
      onclick: this.event.onClick,
      onmouseover: this.event.onMouseover,
      onmouseout: this.event.onMouseout,
      ...v.describedby(this.classes.getIdItem())
    };
    this.slotData = {
      ...u,
      open: this.status.open,
      binds: u
    }, B(() => {
      this.open.eventStop();
    });
  }
}
const X = {
  indent: 4,
  delay: 64,
  delayHide: 0
};
class Y extends L {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor tooltip item class/ класс элемента тултипа
   */
  constructor(s, i, o, n = U) {
    super(
      s,
      i,
      o
    );
    e(this, "item");
    /**
     * Rendering of the control slot.
     *
     * Рендеринг слота управления.
     */
    e(this, "renderControl", () => [
      this.initSlot("control", void 0, this.item.slotData)
    ]);
    /**
     * Rendering of the tooltip.
     *
     * Рендеринг тултипа.
     */
    e(this, "renderTooltip", () => {
      var s;
      if (this.item.status.isShow.value) {
        const i = [
          ...this.item.label.render(),
          ...this.item.description.render(),
          ...this.renderBody()
        ];
        return this.item.status.isArray.value && i.push(
          ...this.item.arrow.render()
        ), [
          g(
            P,
            {
              key: "teleport",
              to: "body"
            },
            g(
              "div",
              {
                ref: this.element,
                id: this.item.classes.getIdItem(),
                class: (s = this.classes) == null ? void 0 : s.value.main,
                onMouseover: this.item.event.onMouseoverTooltip,
                onMouseout: this.item.event.onMouseout,
                onTransitionend: this.item.event.onTransitionend,
                ...v.role("tooltip")
              },
              i
            )
          )
        ];
      }
      return [];
    });
    /**
     * Rendering of the body slot.
     *
     * Рендеринг слота тела.
     */
    e(this, "renderBody", () => this.slots && "body" in this.slots ? [
      this.initSlot("body")
    ] : []);
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
export {
  U as Tooltip,
  Y as TooltipDesign,
  st as TooltipInclude,
  X as defaultsTooltip
};

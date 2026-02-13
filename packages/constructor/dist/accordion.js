var f = Object.defineProperty;
var y = (r, e, i) => e in r ? f(r, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[e] = i;
var t = (r, e, i) => y(r, typeof e != "symbol" ? e + "" : e, i);
import { computed as h, ref as c, h as g } from "vue";
import { getElementId as m, DesignConstructorAbstract as I, toBinds as C } from "@dxtmisha/functional";
import { E as w } from "./EventClickInclude-Co8CpJqL.js";
import { M as S } from "./ModelInclude-BiYm_iCQ.js";
import { M as A } from "./MotionTransformInclude-P_oRs3JZ.js";
class T {
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
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionTransformIncludeConstructor class for working with motion transform/ класс для работы с анимацией перехода
   */
  constructor(e, i, n, o, l, s, p, a, d) {
    /** Motion transform manager/ Менеджер анимации перехода */
    t(this, "motionTransform");
    /** Event manager/ Менеджер событий */
    t(this, "event");
    /** Open state/ Состояние открытия */
    t(this, "open", c(!1));
    /** Model manager/ Менеджер модели */
    t(this, "model");
    /** Head element reference/ Ссылка на элемент заголовка */
    t(this, "elementHead", c());
    t(this, "labelId", m());
    t(this, "descriptionId", m());
    /**
     * Computed bindings for the cell.
     *
     * Вычисляемые привязки для ячейки.
     */
    t(this, "bindsCell", h(() => ({
      ref: this.elementHead,
      icon: this.props.icon,
      iconTrailing: this.props.iconArrowDown,
      label: this.props.label,
      description: this.props.description,
      dynamic: !0,
      labelId: this.labelId,
      descriptionId: this.descriptionId,
      onClick: this.event.onClick,
      onKeydown: this.event.onKeydown
    })));
    this.props = e, this.refs = i, this.element = n, this.classDesign = o, this.className = l, this.components = s, this.slots = p, this.emits = a;
    const {
      EventClickIncludeConstructor: u = w,
      ModelIncludeConstructor: v = S,
      MotionTransformIncludeConstructor: b = A
    } = d != null ? d : {};
    this.motionTransform = new b(
      this.props,
      this.className,
      this.components,
      this.emits,
      h(() => ({
        section: !0,
        adaptive: "planeAlways",
        inDom: !0,
        ariaLabelledby: this.labelId,
        ariaDescribedby: this.descriptionId
      }))
    ), this.event = new u(
      void 0,
      void 0,
      a
    ), this.model = new v("open", this.emits, this.open);
  }
}
const B = {
  clickOpen: !0,
  autoClose: !0,
  // :default [!] System label / Системная метка
  divider: !0
};
class N extends I {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(i, n, o) {
    super(
      i,
      n,
      o
    );
    t(this, "item");
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param open open status/ статус открытия
     */
    t(this, "renderHead", ({ isOpen: i, binds: n }) => {
      var l;
      const o = {};
      return this.slots && ("label" in this.slots && (o.label = (s) => this.initSlot("label", void 0, s)), "description" in this.slots && (o.description = (s) => this.initSlot("description", void 0, s)), "caption" in this.slots && (o.caption = (s) => this.initSlot("caption", void 0, s)), "trailing" in this.slots && (o.trailing = (s) => this.initSlot("trailing", void 0, s)), "body" in this.slots && (o.body = (s) => this.initSlot("body", void 0, s))), this.components.renderOne(
        "cell",
        C(
          this.item.bindsCell.value,
          n,
          this.props.cellAttrs,
          {
            ref: this.item.elementHead,
            iconTurn: i.value,
            class: (l = this.classes) == null ? void 0 : l.value.head
          }
        ),
        o
      );
    });
    /**
     * Generates data for the body.
     *
     * Генерирует данные для тела.
     */
    t(this, "renderBody", (i) => {
      var n;
      return g(
        "div",
        { class: (n = this.classes) == null ? void 0 : n.value.body },
        this.initSlot("default", void 0, i)
      );
    });
    this.item = new T(
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
      ...this.item.motionTransform.expose
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
      head: this.getSubClass("head"),
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
    var i;
    return this.item.motionTransform.render(
      {
        head: this.renderHead,
        body: this.renderBody
      },
      {
        ...this.getAttrs(),
        class: (i = this.classes) == null ? void 0 : i.value.main,
        "data-divider": this.props.divider ? "divider" : void 0,
        ...this.item.model.getBinds()
      }
    );
  }
}
export {
  T as Accordion,
  N as AccordionDesign,
  B as defaultsAccordion
};

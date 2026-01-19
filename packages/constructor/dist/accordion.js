var p = Object.defineProperty;
var u = (r, s, i) => s in r ? p(r, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : r[s] = i;
var o = (r, s, i) => u(r, typeof s != "symbol" ? s + "" : s, i);
import { computed as v, ref as c, h as f } from "vue";
import { DesignConstructorAbstract as b, toBinds as g } from "@dxtmisha/functional";
import { E as y } from "./EventClickInclude-eDWqxK0d.js";
import { M as S } from "./ModelInclude-BiYm_iCQ.js";
import { M as A } from "./MotionTransformInclude-P_oRs3JZ.js";
class C {
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
   */
  constructor(s, i, n, e, l, t, m, a) {
    o(this, "motionTransform");
    o(this, "event");
    o(this, "open", c(!1));
    o(this, "model");
    o(this, "elementHead", c());
    this.props = s, this.refs = i, this.element = n, this.classDesign = e, this.className = l, this.components = t, this.slots = m, this.emits = a, this.motionTransform = new A(
      this.props,
      this.className,
      this.components,
      this.emits,
      v(() => {
        var d, h;
        return {
          section: !0,
          adaptive: "planeAlways",
          inDom: !0,
          ariaLabelledby: (d = this.elementHead.value) == null ? void 0 : d.labelId,
          ariaDescribedby: (h = this.elementHead.value) == null ? void 0 : h.descriptionId
        };
      })
    ), this.event = new y(
      void 0,
      void 0,
      a
    ), this.model = new S("open", this.emits, this.open);
  }
}
const x = {
  clickOpen: !0,
  autoClose: !0,
  // :default [!] System label / Системная метка
  divider: !0
};
class B extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(i, n, e) {
    super(
      i,
      n,
      e
    );
    o(this, "item");
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param open open status/ статус открытия
     */
    o(this, "renderHead", ({ isOpen: i, binds: n }) => {
      var l;
      const e = {};
      return this.slots && ("label" in this.slots && (e.label = (t) => this.initSlot("label", void 0, t)), "description" in this.slots && (e.description = (t) => this.initSlot("description", void 0, t)), "caption" in this.slots && (e.caption = (t) => this.initSlot("caption", void 0, t)), "trailing" in this.slots && (e.trailing = (t) => this.initSlot("trailing", void 0, t)), "body" in this.slots && (e.body = (t) => this.initSlot("body", void 0, t))), this.components.renderOne(
        "cell",
        g(
          {
            ref: this.item.elementHead,
            icon: this.props.icon,
            iconTrailing: this.props.iconArrowDown,
            iconTurn: i.value,
            label: this.props.label,
            description: this.props.description,
            class: (l = this.classes) == null ? void 0 : l.value.head,
            dynamic: !0,
            onClick: this.item.event.onClick,
            ...n
          },
          this.props.cellAttrs
        ),
        e
      );
    });
    /**
     * Generates data for the body.
     *
     * Генерирует данные для тела.
     */
    o(this, "renderBody", (i) => {
      var n;
      return f(
        "div",
        { class: (n = this.classes) == null ? void 0 : n.value.body },
        this.initSlot("default", void 0, i)
      );
    });
    this.item = new C(
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
  C as Accordion,
  B as AccordionDesign,
  x as defaultsAccordion
};

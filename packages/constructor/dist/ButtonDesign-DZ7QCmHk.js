var d = Object.defineProperty;
var p = (i, e, t) => e in i ? d(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var s = (i, e, t) => p(i, typeof e != "symbol" ? e + "" : e, t);
import { computed as c, h as g } from "vue";
import { DesignConstructorAbstract as b } from "@dxtmisha/functional";
import { g as v } from "./getClassTagAStatic-BnVYlXHI.js";
import { L as f } from "./LabelInclude-BtZrrbCf.js";
import { E as I } from "./EnabledInclude-DGeuJhOr.js";
import { A as m } from "./AriaStaticInclude-CFGewqpn.js";
import { E as C } from "./EventClickInclude-eDWqxK0d.js";
import { P as S } from "./ProgressInclude-UBipdctr.js";
import { I as k } from "./IconTrailingInclude-CdsOcDxv.js";
import { R as w } from "./RippleInclude-Du5yIzX_.js";
import { S as x } from "./SkeletonInclude-BIUzAO2s.js";
class y {
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
  constructor(e, t, r, a, n, l, o, h) {
    s(this, "label");
    s(this, "enabled");
    s(this, "icon");
    s(this, "progress");
    s(this, "ripple");
    s(this, "skeleton");
    s(this, "event");
    /** values for the class/ значения для класса */
    s(this, "classes", c(() => ({
      [`${this.className}--icon`]: this.icon.isIcon.value,
      [v(this.classDesign)]: !0,
      ...this.skeleton.classes.value
    })));
    /**
     * list of aria properties for the button component/
     * список aria свойств для компонента Button
     */
    s(this, "aria", c(() => {
      const e = {
        ...this.progress.aria.value,
        ...m.label(this.props.ariaLabel)
      };
      return this.props.tag !== "button" ? {
        tabindex: "0",
        ...e,
        ...m.role("button"),
        ...this.enabled.aria.value
      } : e;
    }));
    this.props = e, this.refs = t, this.element = r, this.classDesign = a, this.className = n, this.components = l, this.slots = o, this.emits = h;
    const u = new S(
      e,
      n,
      l,
      {
        circular: !0,
        inverse: !0
      }
    );
    this.label = new f(e, n, void 0, o), this.enabled = new I(e, u), this.icon = new k(e, n, l), this.progress = u, this.ripple = new w(n, l, this.enabled), this.skeleton = new x(
      e,
      a,
      ["classBackground"]
    ), this.event = new C(
      e,
      this.enabled,
      h
    );
  }
}
class q extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, r, a) {
    super(
      t,
      r,
      a
    );
    s(this, "item");
    this.item = new y(
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
      ...this.item.event.expose,
      ...this.item.label.expose
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
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      loading: this.getSubClass("loading")
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
    var t, r;
    return g(
      this.props.tag || "button",
      {
        ...this.getAttrs(),
        ref: this.element,
        type: this.props.type,
        class: (t = this.classes) == null ? void 0 : t.value.main,
        style: (r = this.styles) == null ? void 0 : r.value,
        "data-value": this.props.value,
        disabled: this.item.enabled.isDisabledOrUndefined.value,
        onClick: this.item.event.onClick,
        ...this.item.aria.value
      },
      [
        ...this.item.progress.render(),
        ...this.item.label.render(),
        ...this.item.icon.render(),
        ...this.item.ripple.render()
      ]
    );
  }
}
export {
  y as B,
  q as a
};

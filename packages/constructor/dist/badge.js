var d = Object.defineProperty;
var p = (e, t, s) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => p(e, typeof t != "symbol" ? t + "" : t, s);
import { computed as h, h as g } from "vue";
import { isFilled as c, DesignConstructorAbstract as b } from "@dxtmisha/functional";
import { L as f } from "./LabelNumberInclude-DyifvMnr.js";
import { I as v } from "./IconInclude-CLqwI29Q.js";
import { A as u } from "./AriaStaticInclude-CFGewqpn.js";
class I {
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
  constructor(t, s, i, a, l, n, o, m) {
    r(this, "label");
    r(this, "icon");
    /**
     * Computes if the badge should auto-hide when there is no dot, icon, or label.
     *
     * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
     */
    r(this, "autoHide", h(
      () => !this.props.dot && !c(this.icon.isIcon.value) && !c(this.label.is.value)
    ));
    /**
     * Classes for controlling badge visibility.
     *
     * Классы для управления видимостью бейджа.
     */
    r(this, "classes", h(() => ({
      [`${this.className}--hideAuto`]: this.autoHide.value
    })));
    this.props = t, this.refs = s, this.element = i, this.classDesign = a, this.className = l, this.components = n, this.slots = o, this.emits = m, this.label = new f(
      t,
      l,
      void 0,
      o
    ), this.icon = new v(
      t,
      l,
      n
    );
  }
}
const B = {
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right"
};
class L extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(s, i, a) {
    super(
      s,
      i,
      a
    );
    r(this, "item");
    this.item = new I(
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
    return {};
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
      icon: this.getSubClass("icon")
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
    const s = [];
    return this.props.dot || s.push(
      ...this.item.label.render(),
      ...this.item.icon.renderIcon()
    ), g("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: (i = this.classes) == null ? void 0 : i.value.main,
      ...u.role("status"),
      ...u.label(this.props.ariaLabel)
    }, s);
  }
}
export {
  I as Badge,
  L as BadgeDesign,
  B as defaultsBadge
};

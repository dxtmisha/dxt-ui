var g = Object.defineProperty;
var f = (i, t, e) => t in i ? g(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => f(i, typeof t != "symbol" ? t + "" : t, e);
import { computed as o, h as v } from "vue";
import { isFilled as u, DesignConstructorAbstract as I } from "@dxtmisha/functional";
import { A as m } from "./AriaStaticInclude-CAURwJMb.js";
import { L as C } from "./LabelNumberInclude-Cn0qDEgX.js";
import { I as A } from "./IconInclude-CLqwI29Q.js";
class L {
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
   * @param constructors.IconIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelNumberIncludeConstructor class for working with label/ класс для работы с меткой
   */
  constructor(t, e, a, n, r, h, c, d, l) {
    s(this, "label");
    s(this, "icon");
    /**
     * Computes if the badge should auto-hide when there is no dot, icon, or label.
     *
     * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
     */
    s(this, "autoHide", o(
      () => !this.props.dot && !u(this.icon.isIcon.value) && !u(this.label.is.value)
    ));
    /**
     * Classes for controlling badge visibility.
     *
     * Классы для управления видимостью бейджа.
     */
    s(this, "classes", o(() => ({
      [`${this.className}--hideAuto`]: this.autoHide.value
    })));
    s(this, "aria", o(() => this.props.ariaLabel ? {
      ...m.hidden()
    } : {}));
    this.props = t, this.refs = e, this.element = a, this.classDesign = n, this.className = r, this.components = h, this.slots = c, this.emits = d;
    const {
      IconIncludeConstructor: p = A,
      LabelNumberIncludeConstructor: b = C
    } = l != null ? l : {};
    this.label = new b(
      t,
      r,
      void 0,
      c
    ), this.icon = new p(
      t,
      r,
      h
    );
  }
}
const H = {
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right"
};
class y extends I {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, a, n, r = L) {
    super(
      e,
      a,
      n
    );
    s(this, "item");
    this.item = new r(
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
    var a;
    const e = [];
    return this.props.dot || e.push(
      ...this.item.label.render(void 0, this.item.aria.value),
      ...this.item.icon.renderIcon()
    ), v("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: (a = this.classes) == null ? void 0 : a.value.main,
      ...m.label(this.props.ariaLabel)
    }, e);
  }
}
export {
  L as Badge,
  y as BadgeDesign,
  H as defaultsBadge
};

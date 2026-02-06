var b = Object.defineProperty;
var g = (i, t, s) => t in i ? b(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => g(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as l, h as f } from "vue";
import { isFilled as c, DesignConstructorAbstract as v } from "@dxtmisha/functional";
import { A as u } from "./AriaStaticInclude-BVCgDZbU.js";
import { L as I } from "./LabelNumberInclude-Cn0qDEgX.js";
import { I as A } from "./IconInclude-CLqwI29Q.js";
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
   * @param LabelNumberIncludeConstructor class for working with label/ класс для работы с меткой
   * @param IconIncludeConstructor class for working with icon/ класс для работы с иконкой
   */
  constructor(t, s, r, n, a, o, h, m, d = I, p = A) {
    e(this, "label");
    e(this, "icon");
    /**
     * Computes if the badge should auto-hide when there is no dot, icon, or label.
     *
     * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
     */
    e(this, "autoHide", l(
      () => !this.props.dot && !c(this.icon.isIcon.value) && !c(this.label.is.value)
    ));
    /**
     * Classes for controlling badge visibility.
     *
     * Классы для управления видимостью бейджа.
     */
    e(this, "classes", l(() => ({
      [`${this.className}--hideAuto`]: this.autoHide.value
    })));
    e(this, "aria", l(() => this.props.ariaLabel ? {
      ...u.hidden()
    } : {}));
    this.props = t, this.refs = s, this.element = r, this.classDesign = n, this.className = a, this.components = o, this.slots = h, this.emits = m, this.label = new d(
      t,
      a,
      void 0,
      h
    ), this.icon = new p(
      t,
      a,
      o
    );
  }
}
const H = {
  // :default [!] System label / Системная метка
  overlap: "rectangular",
  vertical: "top",
  horizontal: "right"
};
class N extends v {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(s, r, n, a = C) {
    super(
      s,
      r,
      n
    );
    e(this, "item");
    this.item = new a(
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
    var r;
    const s = [];
    return this.props.dot || s.push(
      ...this.item.label.render(void 0, this.item.aria.value),
      ...this.item.icon.renderIcon()
    ), f("span", {
      ...this.getAttrs(),
      ref: this.element,
      class: (r = this.classes) == null ? void 0 : r.value.main,
      ...u.label(this.props.ariaLabel)
    }, s);
  }
}
export {
  C as Badge,
  N as BadgeDesign,
  H as defaultsBadge
};

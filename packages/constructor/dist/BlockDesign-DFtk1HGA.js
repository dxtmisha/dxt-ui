var v = Object.defineProperty;
var f = (r, s, e) => s in r ? v(r, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[s] = e;
var t = (r, s, e) => f(r, typeof s != "symbol" ? s + "" : s, e);
import { computed as o, h as l } from "vue";
import { DesignConstructorAbstract as y } from "@dxtmisha/functional";
import { A as c } from "./AriaStaticInclude-BVCgDZbU.js";
import { L as S } from "./LabelInclude-D-mLvjK5.js";
import { D as C } from "./DescriptionInclude-D4ane9aR.js";
import { C as H } from "./CaptionInclude-gERJdKfG.js";
import { I } from "./IconInclude-CLqwI29Q.js";
class k {
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
   * @param LabelIncludeConstructor class for working with the label/ класс для работы с меткой
   * @param DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
   * @param CaptionIncludeConstructor class for working with the caption/ класс для работы с подписью
   * @param IconIncludeConstructor class for working with the icon/ класс для работы с иконкой
   */
  constructor(s, e, i, a, n, d, h, u, p = S, m = C, b = H, g = I) {
    /**
     * Object for working with label/
     * Объект для работы с меткой
     */
    t(this, "label");
    /**
     * Object for working with description/
     * Объект для работы с описанием
     */
    t(this, "description");
    /**
     * Object for working with caption/
     * Объект для работы с подписью
     */
    t(this, "caption");
    /**
     * Object for working with icon/
     * Объект для работы с иконкой
     */
    t(this, "icon");
    /**
     * Checks if the headline exists/
     * Проверяет, существует ли заголовок
     */
    t(this, "isHeadline", o(() => !!(this.props.headline || this.slots && "headline" in this.slots)));
    /**
     * Checks if the header exists/
     * Проверяет, существует ли шапка
     */
    t(this, "isHeader", o(() => this.label.is.value || this.caption.is.value || this.description.is.value));
    /**
     * Tag name/
     * Название тега
     */
    t(this, "tag", o(() => this.props.tag || "div"));
    this.props = s, this.refs = e, this.element = i, this.classDesign = a, this.className = n, this.components = d, this.slots = h, this.emits = u, this.label = new p(
      s,
      n,
      void 0,
      h,
      void 0,
      void 0,
      !0,
      void 0,
      o(() => this.props.tagHeader || "h3")
    ), this.caption = new b(s, n, h), this.description = new m(s, n, h), this.icon = new g(s, n, d);
  }
}
class P extends y {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(e, i, a, n = k) {
    super(
      e,
      i,
      a
    );
    t(this, "item");
    /**
     * Headline rendering.
     *
     * Рендеринг заголовка.
     */
    t(this, "renderHeadline", () => {
      var e;
      if (this.item.isHeadline.value) {
        const i = [];
        return this.props.headline && i.push(this.props.headline), this.initSlot("headline", i), [
          l("div", {
            key: "headline",
            class: (e = this.classes) == null ? void 0 : e.value.headline
          }, i)
        ];
      }
      return [];
    });
    /**
     * Header rendering.
     *
     * Рендеринг заголовка.
     */
    t(this, "renderHeader", () => {
      var e;
      if (this.item.isHeader.value) {
        const i = [
          ...this.item.icon.renderIcon(),
          ...this.item.label.render(),
          ...this.item.caption.render(),
          ...this.renderTrailing()
        ];
        return [
          l("div", {
            key: "header",
            class: (e = this.classes) == null ? void 0 : e.value.header
          }, i)
        ];
      }
      return [];
    });
    /**
     * Trailing rendering.
     *
     * Рендеринг правого контента.
     */
    t(this, "renderTrailing", () => {
      var i, a;
      const e = [];
      return (i = this.slots) != null && i.trailing && (e.push(l("div", {
        key: "spacer",
        class: (a = this.classes) == null ? void 0 : a.value.space
      })), this.initSlot("trailing", e)), e;
    });
    /**
     * Body rendering.
     *
     * Рендеринг тела.
     */
    t(this, "renderBody", () => {
      var i;
      const e = [
        ...this.renderHeadline(),
        ...this.renderHeader(),
        ...this.item.description.render()
      ];
      return [
        l("div", {
          key: "body",
          class: (i = this.classes) == null ? void 0 : i.value.body
        }, e)
      ];
    });
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
    return {};
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
      headline: this.getSubClass("headline"),
      header: this.getSubClass("header"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description"),
      caption: this.getSubClass("caption"),
      icon: this.getSubClass("icon"),
      space: this.getSubClass("space"),
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
    const e = [
      ...this.renderBody()
    ];
    return this.initSlot("default", e), l(this.item.tag.value, this.getProps(), e);
  }
  /**
   * Returns properties for the main element.
   *
   * Возвращает свойства для главного элемента.
   */
  getProps() {
    var i;
    const e = {
      ...this.getAttrs(),
      class: (i = this.classes) == null ? void 0 : i.value.main
    };
    return this.item.label.is.value && Object.assign(
      e,
      c.labelledby(this.item.label.id.value)
    ), this.item.description.is.value && Object.assign(
      e,
      c.describedby(this.item.description.id.value)
    ), e;
  }
}
export {
  k as B,
  P as a
};

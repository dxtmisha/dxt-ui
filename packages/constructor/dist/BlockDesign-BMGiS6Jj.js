var g = Object.defineProperty;
var v = (n, t, e) => t in n ? g(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var s = (n, t, e) => v(n, typeof t != "symbol" ? t + "" : t, e);
import { computed as o, h as l } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
import { A as S } from "./AriaStaticInclude-D1bSJaBp.js";
import { L as y } from "./LabelInclude-D-mLvjK5.js";
import { D as C } from "./DescriptionInclude-D4ane9aR.js";
import { C as H } from "./CaptionInclude-AFVF4qyd.js";
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
  constructor(t, e, i, a, r, d, h, c, u = y, p = C, m = H, b = I) {
    /**
     * Object for working with label/
     * Объект для работы с меткой
     */
    s(this, "label");
    /**
     * Object for working with description/
     * Объект для работы с описанием
     */
    s(this, "description");
    /**
     * Object for working with caption/
     * Объект для работы с подписью
     */
    s(this, "caption");
    /**
     * Object for working with icon/
     * Объект для работы с иконкой
     */
    s(this, "icon");
    /**
     * Checks if the headline exists/
     * Проверяет, существует ли заголовок
     */
    s(this, "isHeadline", o(() => !!(this.props.headline || this.slots && "headline" in this.slots)));
    /**
     * Checks if the header exists/
     * Проверяет, существует ли шапка
     */
    s(this, "isHeader", o(() => this.label.is.value || this.caption.is.value || this.description.is.value));
    /**
     * Tag name/
     * Название тега
     */
    s(this, "tag", o(() => this.props.tag || "div"));
    this.props = t, this.refs = e, this.element = i, this.classDesign = a, this.className = r, this.components = d, this.slots = h, this.emits = c, this.label = new u(
      t,
      r,
      void 0,
      h,
      void 0,
      void 0,
      !0,
      void 0,
      o(() => this.props.tagHeader || "h3")
    ), this.caption = new m(t, r, h), this.description = new p(t, r, h), this.icon = new b(t, r, d);
  }
}
class R extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(e, i, a, r = k) {
    super(
      e,
      i,
      a
    );
    s(this, "item");
    /**
     * Headline rendering.
     *
     * Рендеринг заголовка.
     */
    s(this, "renderHeadline", () => {
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
    s(this, "renderHeader", () => {
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
            class: (e = this.classes) == null ? void 0 : e.value.header,
            ...S.labelledby(this.item.label.id.value)
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
    s(this, "renderTrailing", () => {
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
    s(this, "renderBody", () => {
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
    var i;
    const e = [
      ...this.renderBody()
    ];
    return this.initSlot("default", e), l(this.item.tag.value, {
      ...this.getAttrs(),
      class: (i = this.classes) == null ? void 0 : i.value.main
    }, e);
  }
}
export {
  k as B,
  R as a
};

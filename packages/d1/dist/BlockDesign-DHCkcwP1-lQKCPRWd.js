import { h as l, computed as o } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
import { l as u } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { x as y } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { v as C } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { v as S } from "./CaptionInclude-CohAZRI2-Ui7bYJab.js";
import { B as H } from "./IconInclude-CLqwI29Q-Dlz7DC2a.js";
var w = Object.defineProperty, I = (a, e, t) => e in a ? w(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, r = (a, e, t) => I(a, typeof e != "symbol" ? e + "" : e, t);
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.CaptionIncludeConstructor class for working with the caption/ класс для работы с подписью
   * @param constructors.DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
   * @param constructors.IconIncludeConstructor class for working with the icon/ класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with the label/ класс для работы с меткой
   */
  constructor(e, t, h, d, i, s, n, p, c) {
    r(this, "label"), r(this, "description"), r(this, "caption"), r(this, "icon"), r(this, "isHeadline", o(() => !!(this.props.headline || this.slots && "headline" in this.slots))), r(this, "isHeader", o(() => this.label.is.value || this.caption.is.value || this.description.is.value)), r(this, "tag", o(() => this.props.tag || "div")), this.props = e, this.refs = t, this.element = h, this.classDesign = d, this.className = i, this.components = s, this.slots = n, this.emits = p;
    const {
      CaptionIncludeConstructor: v = S,
      DescriptionIncludeConstructor: m = C,
      IconIncludeConstructor: b = H,
      LabelIncludeConstructor: g = y
    } = c != null ? c : {};
    this.label = new g(
      e,
      i,
      void 0,
      n,
      void 0,
      void 0,
      !0,
      void 0,
      o(() => this.props.tagHeader || "h3")
    ), this.caption = new v(e, i, n), this.description = new m(e, i, n), this.icon = new b(e, i, s);
  }
}
class $ extends f {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor block item class/ класс элемента блока
   */
  constructor(e, t, h, d = k) {
    super(
      e,
      t,
      h
    ), r(this, "item"), r(this, "renderHeadline", () => {
      var i;
      if (this.item.isHeadline.value) {
        const s = [];
        return this.props.headline && s.push(this.props.headline), this.initSlot("headline", s), [
          l("div", {
            key: "headline",
            class: (i = this.classes) == null ? void 0 : i.value.headline
          }, s)
        ];
      }
      return [];
    }), r(this, "renderHeader", () => {
      var i;
      if (this.item.isHeader.value) {
        const s = [
          ...this.item.icon.renderIcon(),
          ...this.item.label.render(),
          ...this.item.caption.render(),
          ...this.renderTrailing()
        ];
        return [
          l("div", {
            key: "header",
            class: (i = this.classes) == null ? void 0 : i.value.header
          }, s)
        ];
      }
      return [];
    }), r(this, "renderTrailing", () => {
      var i, s;
      const n = [];
      return (i = this.slots) != null && i.trailing && (n.push(l("div", {
        key: "spacer",
        class: (s = this.classes) == null ? void 0 : s.value.space
      })), this.initSlot("trailing", n)), n;
    }), r(this, "renderBody", () => {
      var i;
      const s = [
        ...this.renderHeadline(),
        ...this.renderHeader(),
        ...this.item.description.render()
      ];
      return s.length > 0 ? [
        l("div", {
          key: "body",
          class: (i = this.classes) == null ? void 0 : i.value.body
        }, s)
      ] : [];
    }), this.item = new d(
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
    var e;
    const t = {
      ...this.getAttrs(),
      class: (e = this.classes) == null ? void 0 : e.value.main
    };
    return this.item.label.is.value && Object.assign(
      t,
      u.labelledby(this.item.label.id.value)
    ), this.item.description.is.value && Object.assign(
      t,
      u.describedby(this.item.description.id.value)
    ), t;
  }
}
export {
  $ as T,
  k
};

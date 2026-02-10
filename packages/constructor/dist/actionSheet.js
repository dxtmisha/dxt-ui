var v = Object.defineProperty;
var C = (s, e, t) => e in s ? v(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => C(s, typeof e != "symbol" ? e + "" : e, t);
import { computed as p, h as m } from "vue";
import { toBinds as S } from "@dxtmisha/functional";
import { M as T, a as _ } from "./ModalDesignAbstract-D4A_a_rC.js";
import { T as w } from "./TouchEventInclude-DctYCjt8.js";
class A extends T {
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
   * @param constructors.TouchEventIncludeConstructor class for working with touch event/ класс для работы с событием касания
   */
  constructor(t, i, o, h, a, l, u, c, n) {
    const {
      TouchEventIncludeConstructor: b = w
    } = n != null ? n : {};
    super(
      t,
      i,
      o,
      h,
      a,
      l,
      u,
      c,
      p(() => ({
        open: t.open,
        adaptive: "actionSheet",
        closeButton: t.barsBackHide,
        closeMobileHide: t.touchClose
      })),
      void 0,
      { align: "auto" }
    );
    r(this, "touchEvent");
    this.props = t, this.refs = i, this.element = o, this.classDesign = h, this.className = a, this.components = l, this.slots = u, this.emits = c, this.touchEvent = new b(
      void 0,
      (f, d, E, g) => g >= 0,
      (f, d) => d === "bottom" ? (this.window.expose.setOpen(!1).then(), !1) : !0
    );
  }
}
const I = {
  barsBackHide: !0,
  touchClose: !0
};
class k extends _ {
  constructor() {
    super(...arguments);
    /**
     * Generates data for the header.
     *
     * Генерирует данные для заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    r(this, "renderTitleTouch", (t) => {
      var o, h;
      const i = this.renderTitle(t);
      return this.props.touchClose ? [m(
        "div",
        {
          class: (o = this.classes) == null ? void 0 : o.value.touch,
          ...this.item.touchEvent.onTouch
        },
        [
          m("div", { class: (h = this.classes) == null ? void 0 : h.value.tab }),
          ...i
        ]
      )] : i;
    });
  }
  /**
   * Creates an instance of the item class.
   *
   * Создает экземпляр класса элемента.
   */
  initItem() {
    return new A(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    );
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
      title: this.getSubClass("title"),
      header: this.getSubClass("header"),
      body: this.getSubClass("body"),
      footer: this.getSubClass("footer"),
      touch: this.getSubClass("touch"),
      tab: this.getSubClass("tab")
    };
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    var t;
    return this.item.window.render(
      {
        control: this.renderControl,
        title: this.renderTitleTouch,
        default: this.renderDefault,
        footer: this.renderFooter
      },
      S(
        {
          class: (t = this.classes) == null ? void 0 : t.value.main,
          "data-touch": "touch"
        },
        this.getAttrs()
      )
    );
  }
}
export {
  A as ActionSheet,
  k as ActionSheetDesign,
  I as defaultsActionSheet
};

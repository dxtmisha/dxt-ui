var g = Object.defineProperty;
var f = (s, e, t) => e in s ? g(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => f(s, typeof e != "symbol" ? e + "" : e, t);
import { computed as d, readonly as p, h as C } from "vue";
import { getBind as b, toBinds as w } from "@dxtmisha/functional";
import { L as v } from "./LabelInclude-CEuTh1Qi.js";
import { D as k } from "./DescriptionInclude-D4ane9aR.js";
import { T as I } from "./TextInclude-CodMN5BH.js";
import { M as S, a as x } from "./ModalDesignAbstract-D4A_a_rC.js";
import { I as D } from "./IconInclude-CLqwI29Q.js";
import { W as A } from "./WindowClassesInclude-B56usxgx.js";
class B extends S {
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
  constructor(t, l, u, a, o, h, r, m) {
    super(
      t,
      l,
      u,
      a,
      o,
      h,
      r,
      m,
      d(() => ({
        open: t.open,
        image: t.image,
        adaptive: "modal",
        imagePosition: t.imagePosition,
        closeButton: this.props.closeButton
      })),
      void 0,
      d(() => {
        const c = [];
        return t.buttonClose !== null && c.push(
          b(
            t.buttonClose,
            {
              label: this.text.close.value,
              value: "close",
              class: this.windowClasses.get().close,
              onClick: () => {
                var n;
                return (n = this.emits) == null ? void 0 : n.call(this, "close");
              }
            },
            "label",
            !0
          )
        ), t.buttonOk !== null && c.push(
          b(
            t.buttonOk,
            {
              label: this.text.ok.value,
              value: "ok",
              class: this.props.clickOkAndClose ? this.windowClasses.get().close : void 0,
              onClick: () => {
                var n;
                return (n = this.emits) == null ? void 0 : n.call(this, "ok");
              }
            },
            "label",
            !0
          )
        ), {
          list: c,
          align: "center"
        };
      })
    );
    i(this, "icon");
    i(this, "label");
    i(this, "description");
    i(this, "windowClasses");
    i(this, "text");
    /**
     * Returns the icon for display.
     *
     * Возвращает иконку для отображения.
     */
    i(this, "iconValue", d(() => this.props.success ? this.props.iconSuccess : this.props.error ? this.props.iconError : this.props.icon));
    this.props = t, this.refs = l, this.element = u, this.classDesign = a, this.className = o, this.components = h, this.slots = r, this.emits = m, this.icon = new D(
      p({ icon: this.iconValue }),
      o,
      h,
      l.iconAttrs
    ), this.label = new v(
      t,
      o,
      void 0,
      r,
      void 0,
      void 0,
      !0
    ), this.description = new k(t, o, r), this.windowClasses = new A(a), this.text = new I(this.props);
  }
}
const E = {
  barsBackHide: !0,
  barsHide: !0,
  clickOkAndClose: !0,
  // :default [!] System label / Системная метка
  imagePosition: "top"
};
class F extends x {
  constructor() {
    super(...arguments);
    /**
     * Render for the body layer.
     *
     * Рендер для слоя тела.
     * @param props data for window management/ данные для управления окном
     */
    i(this, "renderContent", (t) => [
      ...this.renderInformation(),
      ...this.renderDefault(t)
    ]);
    /**
     * Render information block.
     *
     * Рендер информационного блока.
     */
    i(this, "renderInformation", () => {
      var t;
      return [
        C(
          "div",
          { class: (t = this.classes) == null ? void 0 : t.value.information },
          [
            ...this.item.icon.renderIcon(),
            ...this.item.label.render(),
            ...this.item.description.render()
          ]
        )
      ];
    });
  }
  /**
   * A method for creating an instance of the class.
   *
   * Метод для создания экземпляра класса.
   */
  initItem() {
    return new B(
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
      information: this.getSubClass("information"),
      icon: this.getSubClass("icon"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description"),
      body: this.getSubClass("body"),
      footer: this.getSubClass("footer")
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
        title: this.renderTitle,
        default: this.renderContent,
        footer: this.renderFooter
      },
      w(
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
  B as Dialog,
  F as DialogDesign,
  E as defaultsDialog
};

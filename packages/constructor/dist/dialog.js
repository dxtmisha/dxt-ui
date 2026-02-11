var v = Object.defineProperty;
var k = (s, e, t) => e in s ? v(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => k(s, typeof e != "symbol" ? e + "" : e, t);
import { computed as u, readonly as x, h as D } from "vue";
import { getBind as C, toBinds as S } from "@dxtmisha/functional";
import { L as A } from "./LabelInclude-D-mLvjK5.js";
import { D as B } from "./DescriptionInclude-D4ane9aR.js";
import { T as O } from "./TextInclude--GERRCGj.js";
import { M as T, a as y } from "./ModalDesignAbstract-CBmtR0oy.js";
import { W as L } from "./WindowClassesInclude-B56usxgx.js";
import { I as M } from "./IconInclude-CLqwI29Q.js";
class P extends T {
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
   * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param constructors.IconIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   * @param constructors.WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
   */
  constructor(t, l, m, a, o, h, r, b, c) {
    const {
      DescriptionIncludeConstructor: g = B,
      IconIncludeConstructor: p = M,
      LabelIncludeConstructor: f = A,
      TextIncludeConstructor: w = O,
      WindowClassesIncludeConstructor: I = L
    } = c != null ? c : {};
    super(
      t,
      l,
      m,
      a,
      o,
      h,
      r,
      b,
      u(() => ({
        open: t.open,
        image: t.image,
        adaptive: "modal",
        imagePosition: t.imagePosition,
        closeButton: this.props.closeButton
      })),
      void 0,
      u(() => {
        const d = [];
        return t.buttonClose !== null && d.push(
          C(
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
        ), t.buttonOk !== null && d.push(
          C(
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
          list: d,
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
    i(this, "iconValue", u(() => this.props.success ? this.props.iconSuccess : this.props.error ? this.props.iconError : this.props.icon));
    this.props = t, this.refs = l, this.element = m, this.classDesign = a, this.className = o, this.components = h, this.slots = r, this.emits = b, this.icon = new p(
      x({ icon: this.iconValue }),
      o,
      h,
      l.iconAttrs
    ), this.label = new f(
      t,
      o,
      void 0,
      r,
      void 0,
      void 0,
      !0
    ), this.description = new g(t, o, r), this.windowClasses = new I(a), this.text = new w(this.props);
  }
}
const G = {
  barsBackHide: !0,
  barsHide: !0,
  clickOkAndClose: !0,
  // :default [!] System label / Системная метка
  imagePosition: "top"
};
class J extends y {
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
        D(
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
    return new P(
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
  P as Dialog,
  J as DialogDesign,
  G as defaultsDialog
};

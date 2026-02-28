import { computed as c, readonly as y, h as B, defineComponent as D, openBlock as x, createBlock as I, unref as S, mergeDefaults as A } from "vue";
import { toBinds as P, getBind as b, inArray as g } from "@dxtmisha/functional";
import { x as O } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { v as _ } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { a as L } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { T as H, F as T, D as F } from "./index-BGhieGzn.js";
import { y as E } from "./WindowClassesInclude-B56usxgx-Y5bmzXSo.js";
import { B as V } from "./IconInclude-CLqwI29Q-Dlz7DC2a.js";
import { D as N } from "./index-CpH3mZ_W.js";
import { D as W } from "./index-BSr-Tto5.js";
import { D as $ } from "./index-C7bQTPQs.js";
var j = Object.defineProperty, z = (o, t, s) => t in o ? j(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s, i = (o, t, s) => z(o, typeof t != "symbol" ? t + "" : t, s);
class G extends T {
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
  constructor(t, s, d, e, n, a, r, u, p) {
    const {
      DescriptionIncludeConstructor: m = _,
      IconIncludeConstructor: C = V,
      LabelIncludeConstructor: f = O,
      TextIncludeConstructor: v = L,
      WindowClassesIncludeConstructor: k = E
    } = p != null ? p : {};
    super(
      t,
      s,
      d,
      e,
      n,
      a,
      r,
      u,
      c(() => ({
        open: t.open,
        image: t.image,
        adaptive: "modal",
        imagePosition: t.imagePosition,
        closeButton: this.props.closeButton
      })),
      void 0,
      c(() => {
        const h = [];
        return t.buttonClose !== null && h.push(
          b(
            t.buttonClose,
            {
              label: this.text.close.value,
              value: "close",
              class: this.windowClasses.get().close,
              onClick: () => {
                var l;
                return (l = this.emits) == null ? void 0 : l.call(this, "close");
              }
            },
            "label",
            !0
          )
        ), t.buttonOk !== null && h.push(
          b(
            t.buttonOk,
            {
              label: this.text.ok.value,
              value: "ok",
              class: this.props.clickOkAndClose ? this.windowClasses.get().close : void 0,
              onClick: () => {
                var l;
                return (l = this.emits) == null ? void 0 : l.call(this, "ok");
              }
            },
            "label",
            !0
          )
        ), {
          list: h,
          align: "center"
        };
      })
    ), i(this, "icon"), i(this, "label"), i(this, "description"), i(this, "windowClasses"), i(this, "text"), i(this, "iconValue", c(() => this.props.success ? this.props.iconSuccess : this.props.error ? this.props.iconError : this.props.icon)), this.props = t, this.refs = s, this.element = d, this.classDesign = e, this.className = n, this.components = a, this.slots = r, this.emits = u, this.icon = new C(
      y({ icon: this.iconValue }),
      n,
      a,
      s.iconAttrs
    ), this.label = new f(
      t,
      n,
      void 0,
      r,
      void 0,
      void 0,
      !0
    ), this.description = new m(t, n, r), this.windowClasses = new k(e), this.text = new v(this.props);
  }
}
const J = {
  barsBackHide: !0,
  barsHide: !0,
  clickOkAndClose: !0,
  // :default [!] System label / Системная метка
  imagePosition: "top"
};
class R extends H {
  constructor() {
    super(...arguments), i(this, "renderContent", (t) => [
      ...this.renderInformation(),
      ...this.renderDefault(t)
    ]), i(this, "renderInformation", () => {
      var t;
      return [
        B(
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
    return new G(
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
      P(
        {
          class: (t = this.classes) == null ? void 0 : t.value.main,
          "data-touch": "touch"
        },
        this.getAttrs()
      )
    );
  }
}
const w = {
  // :values [!] System label / Системная метка
  imagePosition: ["top", "left"],
  width: ["sm", "md", "lg", "auto"]
  // :values [!] System label / Системная метка
}, q = {
  ...J,
  buttonClose: {
    outline: !0
  },
  iconSuccess: "check_circle",
  iconError: "error",
  iconAttrs: {
    size: "3xl"
  },
  // :default [!] System label / Системная метка
  imagePosition: "top",
  width: "md"
}, it = /* @__PURE__ */ D({
  name: "D1Dialog",
  __name: "D1Dialog",
  props: /* @__PURE__ */ A({
    disabled: { type: Boolean },
    autoClose: { type: Boolean },
    windowAttrs: {},
    barsLabel: {},
    barsDescription: {},
    barsBackHide: { type: Boolean },
    barsHide: { type: Boolean },
    barsList: {},
    barsAttrs: {},
    actionsHide: { type: Boolean },
    actionsList: {},
    actionsSecondary: {},
    actionsAttrs: {},
    image: {},
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    textClose: { type: [String, Function] },
    textOk: { type: [String, Function] },
    open: { type: Boolean },
    icon: {},
    buttonOk: {},
    buttonClose: {},
    closeButton: { type: Boolean },
    clickOkAndClose: { type: Boolean },
    iconSuccess: {},
    iconError: {},
    iconAttrs: {},
    success: { type: Boolean },
    error: { type: Boolean },
    imagePosition: {},
    width: {}
  }, q),
  emits: ["window", "bars", "barsLite", "barsBack", "actions", "actionsLite", "ok", "close"],
  setup(o, { expose: t, emit: s }) {
    const d = s, e = o, n = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-dialog": !0,
        "d1-dialog--success": e.success,
        "d1-dialog--error": e.error,
        [`d1-dialog--imagePosition--${e.imagePosition}`]: g(w.imagePosition, e.imagePosition),
        [`d1-dialog--width--${e.width}`]: g(w.width, e.width)
        // :classes-values [!] System label / Системная метка
      }
    })), a = c(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), r = new R(
      "d1.dialog",
      e,
      {
        emits: d,
        classes: n,
        styles: a,
        components: {
          window: N,
          bars: W,
          actions: F,
          icon: $
        }
      }
    ), u = r.render();
    return t(r.expose()), (p, m) => (x(), I(S(u)));
  }
});
export {
  it as _
};

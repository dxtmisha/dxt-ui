import { ref as u, computed as c, h as g, defineComponent as T, openBlock as w, createBlock as C, unref as O, mergeDefaults as k } from "vue";
import { toBind as v, getRef as D, DesignConstructorAbstract as I, getElementId as f, toBinds as x } from "@dxtmisha/functional";
import { m as A } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { V as B } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { _ } from "./D1Cell.vue_vue_type_script_setup_true_lang-CKYIME2n.js";
import { D as S } from "./index-BBAIhCxi.js";
var H = Object.defineProperty, N = (n, t, i) => t in n ? H(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i, m = (n, t, i) => N(n, typeof t != "symbol" ? t + "" : t, i);
let E = class {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается при срабатывании события
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, i, d, r, l, a) {
    m(this, "element", u()), m(this, "binds", c(() => {
      var e, s;
      return {
        ...v(
          (e = D(this.extra)) != null ? e : {},
          (s = this.props.motionTransformAttrs) != null ? s : {}
        ),
        open: this.props.open,
        clickOpen: this.props.clickOpen,
        autoClose: this.props.autoClose
      };
    })), m(this, "expose", {
      open: c(() => {
        var e;
        return !!((e = this.element.value) != null && e.open);
      }),
      isShow: c(() => {
        var e;
        return !!((e = this.element.value) != null && e.isShow);
      }),
      setOpen: async (e) => {
        var s;
        return (s = this.element.value) == null ? void 0 : s.setOpen(e);
      },
      toOpen: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toOpen();
      },
      toClose: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toClose();
      },
      toggle: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toggle();
      },
      motionTransformElement: this.element
    }), m(this, "onTransform", (e, s) => {
      var h, p;
      (h = this.emits) == null || h.call(this, "transform", e, s), (p = this.emits) == null || p.call(this, "transformLite", s);
    }), m(this, "render", (e, s) => this.components ? this.components.render(
      "motionTransform",
      {
        onTransform: this.onTransform,
        ...v(
          s != null ? s : {},
          this.binds.value
        ),
        ref: this.element
      },
      e,
      this.index
    ) : []), this.props = t, this.className = i, this.components = d, this.emits = r, this.extra = l, this.index = a;
  }
};
var L = Object.defineProperty, M = (n, t, i) => t in n ? L(n, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[t] = i, o = (n, t, i) => M(n, typeof t != "symbol" ? t + "" : t, i);
class $ {
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
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.ModelIncludeConstructor class for working with model/ класс для работы с моделью
   * @param constructors.MotionTransformIncludeConstructor class for working with motion transform/ класс для работы с анимацией перехода
   */
  constructor(t, i, d, r, l, a, e, s, h) {
    o(this, "motionTransform"), o(this, "event"), o(this, "open", u(!1)), o(this, "model"), o(this, "elementHead", u()), o(this, "labelId", f()), o(this, "descriptionId", f()), o(this, "bindsCell", c(() => ({
      ref: this.elementHead,
      icon: this.props.icon,
      iconTrailing: this.props.iconArrowDown,
      label: this.props.label,
      description: this.props.description,
      dynamic: !0,
      labelId: this.labelId,
      descriptionId: this.descriptionId,
      onClick: this.event.onClick,
      onKeydown: this.event.onKeydown
    }))), this.props = t, this.refs = i, this.element = d, this.classDesign = r, this.className = l, this.components = a, this.slots = e, this.emits = s;
    const {
      EventClickIncludeConstructor: p = A,
      ModelIncludeConstructor: b = B,
      MotionTransformIncludeConstructor: y = E
    } = h != null ? h : {};
    this.motionTransform = new y(
      this.props,
      this.className,
      this.components,
      this.emits,
      c(() => ({
        section: !0,
        adaptive: "planeAlways",
        inDom: !0,
        ariaLabelledby: this.labelId,
        ariaDescribedby: this.descriptionId
      }))
    ), this.event = new p(
      void 0,
      void 0,
      s
    ), this.model = new b("open", this.emits, this.open);
  }
}
const j = {
  clickOpen: !0,
  autoClose: !0,
  // :default [!] System label / Системная метка
  divider: !0
};
class F extends I {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, i, d) {
    super(
      t,
      i,
      d
    ), o(this, "item"), o(this, "renderHead", ({ isOpen: r, binds: l }) => {
      var a;
      const e = {};
      return this.slots && ("label" in this.slots && (e.label = (s) => this.initSlot("label", void 0, s)), "description" in this.slots && (e.description = (s) => this.initSlot("description", void 0, s)), "caption" in this.slots && (e.caption = (s) => this.initSlot("caption", void 0, s)), "trailing" in this.slots && (e.trailing = (s) => this.initSlot("trailing", void 0, s)), "body" in this.slots && (e.body = (s) => this.initSlot("body", void 0, s))), this.components.renderOne(
        "cell",
        x(
          this.item.bindsCell.value,
          l,
          this.props.cellAttrs,
          {
            ref: this.item.elementHead,
            iconTurn: r.value,
            class: (a = this.classes) == null ? void 0 : a.value.head
          }
        ),
        e
      );
    }), o(this, "renderBody", (r) => {
      var l;
      return g(
        "div",
        { class: (l = this.classes) == null ? void 0 : l.value.body },
        this.initSlot("default", void 0, r)
      );
    }), this.item = new $(
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
    return {
      ...this.item.motionTransform.expose
    };
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
      head: this.getSubClass("head"),
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
    var t;
    return this.item.motionTransform.render(
      {
        head: this.renderHead,
        body: this.renderBody
      },
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        "data-divider": this.props.divider ? "divider" : void 0,
        ...this.item.model.getBinds()
      }
    );
  }
}
const K = _, P = {
  ...j,
  iconArrowDown: "keyboard_arrow_down",
  // :default [!] System label / Системная метка
  divider: !0
}, Q = /* @__PURE__ */ T({
  name: "D1Accordion",
  __name: "D1Accordion",
  props: /* @__PURE__ */ k({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    icon: {},
    open: { type: Boolean },
    clickOpen: { type: Boolean },
    autoClose: { type: Boolean },
    motionTransformAttrs: {},
    modelOpen: {},
    "onUpdate:open": { type: Function },
    "onUpdate:modelOpen": { type: Function },
    cellAttrs: {},
    iconArrowDown: {},
    divider: { type: Boolean }
  }, P),
  emits: ["click", "clickLite", "transform", "transformLite", "update:open", "update:modelOpen"],
  setup(n, { expose: t, emit: i }) {
    const d = i, r = n, l = c(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-accordion": !0,
        "d1-accordion--divider": r.divider
        // :classes-values [!] System label / Системная метка
      }
    })), a = c(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), e = new F(
      "d1.accordion",
      r,
      {
        emits: d,
        classes: l,
        styles: a,
        components: {
          cell: K,
          motionTransform: S
        }
      }
    ), s = e.render();
    return t(e.expose()), (h, p) => (w(), C(O(s)));
  }
});
export {
  Q as _
};

import { h as v, computed as o, reactive as B, ref as I, watch as S, defineComponent as T, openBlock as _, createBlock as $, unref as E, mergeDefaults as H } from "vue";
import { DesignConstructorAbstract as M, toBind as k, getBind as F, forEach as N, inArray as P } from "@dxtmisha/functional";
import { l as f } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { x as V } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { v as j } from "./DescriptionInclude-D4ane9aR-UfnscTQ8.js";
import { m as O } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { V as U } from "./ModelInclude-BiYm_iCQ-BvlyUUtY.js";
import { a as q } from "./TextInclude--GERRCGj-qSMWmRIC.js";
import { y as z } from "./WindowClassesInclude-B56usxgx-Y5bmzXSo.js";
import { $ as R } from "./MotionTransformClassesInclude-B23RIq0Q-Cskus7RP.js";
import { $ as W } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
import { D as G } from "./index-D1XP99th.js";
var J = Object.defineProperty, K = (r, t, e) => t in r ? J(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e, s = (r, t, e) => K(r, typeof t != "symbol" ? t + "" : t, e);
class Q {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   */
  constructor(t, e) {
    s(this, "action", I(!1)), s(this, "isPossible", o(() => !!(this.props.actionLabel || this.props.actionDescription || this.props.actionBars))), this.props = t, this.refs = e, e.action && S(
      e.action,
      (a) => {
        this.action.value = !!a;
      },
      { immediate: !0 }
    );
  }
  /**
   * Включить action‑режим.
   *
   * Enable action mode.
   */
  open() {
    this.action.value || (this.action.value = !0);
  }
  /**
   * Выключить action‑режим.
   *
   * Disable action mode.
   */
  close() {
    this.action.value && (this.action.value = !1);
  }
}
class X {
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
   * @param constructors.BarsActionConstructor class for managing action mode/ класс для управления action-режимом
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ModelConstructor class for working with models/ класс для работы с моделями
   * @param constructors.MotionTransformClassesConstructor helper class for MotionTransform CSS classes/ вспомогательный класс для CSS-классов MotionTransform
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param constructors.TextConstructor class for creating text/ класс для создания текста
   * @param constructors.WindowClassesConstructor helper class for Window CSS classes/ вспомогательный класс для CSS-классов Window
   */
  constructor(t, e, a, n, i, h, c, p, d) {
    s(this, "action"), s(this, "label"), s(this, "description"), s(this, "event"), s(this, "windowClasses"), s(this, "motionTransformClasses"), s(this, "skeleton"), s(this, "text"), s(this, "backBinds", o(
      () => {
        var l;
        return this.initItem(
          k(
            {
              icon: {
                icon: this.props.iconBack,
                iconActive: this.props.iconClose
              },
              iconDir: !0,
              value: "back",
              class: [
                this.windowClasses.get().close,
                this.motionTransformClasses.get().close
              ],
              onClick: this.onClickBack,
              ...f.label(this.text.close.value)
            },
            (l = this.props.backButton) != null ? l : {}
          ),
          "main-back"
        );
      }
    )), s(this, "barsBinds", o(() => this.initList(this.props.bars))), s(this, "actionBarsBinds", o(() => this.initList(this.props.actionBars, !0))), s(this, "backLabel", o(() => {
      var l;
      return this.action.action.value || (l = this.backBinds.value) == null ? void 0 : l.label;
    })), s(this, "classes", o(() => ({
      [`${this.className}--action`]: this.action.action.value
    }))), s(this, "ariaLive", o(() => {
      if (this.action.isPossible.value)
        return "polite";
    })), s(this, "labelBinds", B({
      label: o(() => this.action.action.value ? this.props.actionLabel : this.props.label),
      labelId: o(() => this.props.labelId)
    })), s(this, "descriptionBinds", B({
      description: o(() => this.action.action.value ? this.props.actionDescription : this.props.description),
      descriptionId: o(() => this.props.descriptionId)
    })), s(this, "onClickBack", (l, m) => {
      (m == null ? void 0 : m.value) === "back" && this.action.close(), this.event.onClick(l, m);
    }), this.props = t, this.refs = e, this.element = a, this.classDesign = n, this.className = i, this.components = h, this.slots = c, this.emits = p;
    const {
      BarsActionConstructor: b = Q,
      DescriptionConstructor: C = j,
      EventConstructor: g = O,
      LabelConstructor: y = V,
      ModelConstructor: w = U,
      MotionTransformClassesConstructor: x = R,
      SkeletonConstructor: L = W,
      TextConstructor: A = q,
      WindowClassesConstructor: D = z
    } = d != null ? d : {}, u = new L(this.props, this.classDesign, ["classTextVariant"]);
    this.action = new b(this.props, this.refs), this.label = new y(
      this.labelBinds,
      i,
      void 0,
      c,
      void 0,
      void 0,
      void 0,
      u
    ), this.description = new C(this.descriptionBinds, i, c, u), this.event = new g(void 0, void 0, p), this.windowClasses = new D(n), this.motionTransformClasses = new x(n), this.skeleton = u, this.text = new A(this.props), new w("action", this.emits, this.action.action);
  }
  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает все параметры для кнопки.
   * @param item list of buttons/ список параметры
   * @param key button identifier/ идентификатор кнопки
   * @param isAction is action button/ является ли кнопка действия
   */
  initItem(t, e, a = !1) {
    var n, i;
    return {
      isSkeleton: this.props.isSkeleton,
      onClick: this.event.onClick,
      ...k(
        (n = this.props.buttonAttrs) != null ? n : {},
        t != null ? t : {}
      ),
      key: `${a ? "action" : ""}Bar-${(i = t == null ? void 0 : t.value) != null ? i : e}`,
      icon: F(t == null ? void 0 : t.icon, { animationShow: a }, "icon")
    };
  }
  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает список параметры для кнопки.
   * @param bars list of buttons/ >список кнопок
   * @param isAction is action button/ является ли кнопка действия
   */
  initList(t, e = !1) {
    if (t)
      return N(
        t,
        (a, n) => this.initItem(a, n, e)
      );
  }
}
const Y = {};
class Z extends M {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor bars item class/ класс элемента bars
   */
  constructor(t, e, a, n = X) {
    super(
      t,
      e,
      a
    ), s(this, "item"), s(this, "renderBackButton", () => this.props.backHide && (!this.item.action.action.value || this.props.backActionHide) ? [] : [
      this.components.renderOne(
        "button",
        {
          ...this.item.backBinds.value,
          label: this.item.backLabel.value,
          selected: this.item.action.action.value
        }
      )
    ]), s(this, "renderContext", () => {
      var i;
      return [
        v(
          "div",
          {
            class: (i = this.classes) == null ? void 0 : i.value.context
          },
          [
            ...this.item.label.render(),
            ...this.item.description.render()
          ]
        )
      ];
    }), s(this, "renderBars", () => {
      const i = [];
      return this.item.action.action.value || (i.push(...this.renderList(this.item.barsBinds.value)), this.initSlot("bars", i)), i;
    }), s(this, "renderActionBars", () => {
      const i = [];
      return this.item.action.action.value && (i.push(...this.renderList(this.item.actionBarsBinds.value)), this.initSlot("actionBars", i)), i;
    }), s(this, "renderList", (i) => {
      const h = [];
      return i && i.forEach(
        (c) => this.components.renderAdd(h, "button", c)
      ), h;
    }), this.item = new n(
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
      context: this.getSubClass("context"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description")
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
    return v(
      "div",
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        ...f.live(this.item.ariaLive.value)
      },
      [
        ...this.renderBackButton(),
        ...this.renderContext(),
        ...this.renderBars(),
        ...this.renderActionBars()
      ]
    );
  }
}
const tt = {
  // :values [!] System label / Системная метка
  padding: ["sm", "md", "lg", "ySm", "yMd", "yLg", "none"]
  // :values [!] System label / Системная метка
}, st = {
  ...Y,
  iconBack: "arrow_back",
  iconClose: "close",
  // :default [!] System label / Системная метка
  paddingByIndent: !0
}, mt = /* @__PURE__ */ T({
  name: "D1Bars",
  __name: "D1Bars",
  props: /* @__PURE__ */ H({
    label: {},
    labelId: {},
    description: {},
    descriptionId: {},
    isSkeleton: { type: Boolean },
    textClose: { type: [String, Function] },
    action: { type: Boolean },
    backButton: {},
    backHide: { type: Boolean },
    backActionHide: { type: Boolean },
    bars: {},
    actionLabel: {},
    actionDescription: {},
    actionBars: {},
    buttonAttrs: {},
    iconBack: {},
    iconClose: {},
    modelAction: { type: Boolean },
    "onUpdate:action": { type: Function },
    "onUpdate:modelAction": { type: Function },
    padding: {},
    paddingByIndent: { type: Boolean }
  }, st),
  emits: ["click", "clickLite", "update:action", "update:modelAction"],
  setup(r, { expose: t, emit: e }) {
    const a = e, n = r, i = o(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-bars": !0,
        [`d1-bars--padding--${n.padding}`]: P(tt.padding, n.padding),
        "d1-bars--paddingByIndent": n.paddingByIndent
        // :classes-values [!] System label / Системная метка
      }
    })), h = o(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), c = new Z(
      "d1.bars",
      n,
      {
        emits: a,
        classes: i,
        styles: h,
        components: {
          button: G
        },
        compMod: {
          button: {
            text: !0,
            size: "xs",
            inverse: !0
          }
        }
      }
    ), p = c.render();
    return t(c.expose()), (d, b) => (_(), $(E(p)));
  }
});
export {
  mt as _
};

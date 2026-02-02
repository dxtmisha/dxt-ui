var p = Object.defineProperty;
var m = (s, i, t) => i in s ? p(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var e = (s, i, t) => m(s, typeof i != "symbol" ? i + "" : i, t);
import { computed as d, h } from "vue";
import { DesignConstructorAbstract as g } from "@dxtmisha/functional";
import { g as b } from "./getClassTagAStatic-BnVYlXHI.js";
import { L as v } from "./LabelInclude-C9Dk-o4t.js";
import { C } from "./CaptionInclude-AFVF4qyd.js";
import { D as f } from "./DescriptionInclude-D4ane9aR.js";
import { E as S } from "./EnabledInclude-JzHG2GuX.js";
import { E as x } from "./EventClickInclude-CgbuezDm.js";
import { S as y } from "./SkeletonInclude-BIUzAO2s.js";
import { P as I } from "./ProgressInclude-CPQetoyp.js";
import { I as k } from "./IconTrailingInclude-CdsOcDxv.js";
import { R as w } from "./RippleInclude-Du5yIzX_.js";
import { A as T } from "./AriaStaticInclude-D1bSJaBp.js";
class _ {
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
  constructor(i, t, n, o, r, l, a, c) {
    e(this, "progress");
    e(this, "skeleton");
    e(this, "label");
    e(this, "description");
    e(this, "caption");
    e(this, "enabled");
    e(this, "icon");
    e(this, "ripple");
    e(this, "event");
    /**
     * Computed CSS classes for the cell component.
     *
     * Вычисляемые CSS классы для компонента ячейки.
     */
    e(this, "classes", d(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [b(this.classDesign)]: !0
    })));
    /**
     * Computed role for the cell component.
     *
     * Вычисляемая роль для компонента ячейки.
     */
    e(this, "role", d(() => {
      if (this.props.role)
        return this.props.role;
      if (this.props.dynamic)
        return "button";
    }));
    this.props = i, this.refs = t, this.element = n, this.classDesign = o, this.className = r, this.components = l, this.slots = a, this.emits = c;
    const u = new I(
      i,
      r,
      l,
      {
        inverse: !0,
        position: "bottom"
      }
    );
    this.skeleton = new y(
      i,
      o,
      ["classTextVariant"]
    ), this.label = new v(
      i,
      r,
      void 0,
      a,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.caption = new C(i, r, a), this.description = new f(i, r, a, this.skeleton), this.enabled = new S(i, u), this.icon = new k(i, r, l), this.progress = u, this.ripple = new w(r, l, this.enabled), this.event = new x(
      i,
      this.enabled,
      c
    );
  }
  /**
   * Returns a list of sub-element CSS classes for the cell component.
   *
   * Возвращает список CSS классов для под-элементов компонента ячейки.
   */
  getClassesSub() {
    return {
      label: `${this.className}__label`,
      description: `${this.className}__description`,
      caption: `${this.className}__caption`,
      trailing: `${this.className}__trailing`
    };
  }
}
const F = {
  tag: "div",
  // :default [!] System label / Системная метка
  divider: !0
};
class G extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, n, o) {
    super(
      t,
      n,
      o
    );
    e(this, "item");
    /**
     * Generates text elements.
     *
     * Генерирует элементы текста.
     */
    e(this, "renderContext", () => {
      var t;
      return [
        h(
          "div",
          {
            key: "context",
            class: (t = this.classes) == null ? void 0 : t.value.context
          },
          [
            ...this.item.label.render(),
            ...this.item.caption.render(),
            ...this.item.description.render()
          ]
        )
      ];
    });
    /**
     * Generates a slot for elements on the right.
     *
     * Генерирует слот для элементов справа.
     */
    e(this, "renderTrailing", () => {
      var t;
      return this.slots && "trailing" in this.slots ? [
        h(
          "div",
          {
            key: "trailing",
            class: (t = this.classes) == null ? void 0 : t.value.contextTrailing
          },
          this.initSlot("trailing", void 0, this.item.getClassesSub())
        )
      ] : [];
    });
    /**
     * Generates a slot for elements on the right.
     *
     * Генерирует слот для элементов справа.
     */
    e(this, "renderBody", () => {
      var t;
      return this.slots && "body" in this.slots ? [
        h(
          "div",
          {
            key: "body",
            class: (t = this.classes) == null ? void 0 : t.value.body
          },
          this.initSlot("body", void 0, this.item.getClassesSub())
        )
      ] : [];
    });
    /**
     * Props for the main element.
     *
     * Свойства для главного элемента.
     */
    e(this, "propsMain", d(() => {
      var n;
      const t = {
        ...this.getAttrs(),
        class: (n = this.classes) == null ? void 0 : n.value.main,
        "data-value": this.props.value,
        "data-divider": this.props.divider ? "active" : void 0,
        onClick: this.item.event.onClick,
        ...T.role(this.item.role.value)
      };
      return this.props.dynamic ? {
        ...t,
        tabindex: "0"
      } : t;
    }));
    this.item = new _(
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
      ...this.item.event.expose
    };
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
      contextTrailing: this.getSubClass("contextTrailing"),
      label: this.getSubClass("label"),
      description: this.getSubClass("description"),
      caption: this.getSubClass("caption"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      body: this.getSubClass("body"),
      loading: this.getSubClass("loading")
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
    return h(
      (t = this.props.tag) != null ? t : "div",
      this.propsMain.value,
      [
        ...this.item.icon.render(),
        ...this.renderContext(),
        ...this.renderTrailing(),
        ...this.renderBody(),
        ...this.item.ripple.render(),
        ...this.item.progress.render()
      ]
    );
  }
}
export {
  _ as Cell,
  G as CellDesign,
  F as defaultsCell
};

var y = Object.defineProperty;
var I = (r, i, t) => i in r ? y(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var e = (r, i, t) => I(r, typeof i != "symbol" ? i + "" : i, t);
import { computed as d, h } from "vue";
import { DesignConstructorAbstract as k } from "@dxtmisha/functional";
import { g as w } from "./getClassTagAStatic-BnVYlXHI.js";
import { L as T } from "./LabelInclude-D-mLvjK5.js";
import { C as _ } from "./CaptionInclude-VhkGstz9.js";
import { D } from "./DescriptionInclude-D4ane9aR.js";
import { E as A } from "./EnabledInclude-IdZAnr6u.js";
import { E } from "./EventClickInclude-CgbuezDm.js";
import { I as $ } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as R } from "./ProgressInclude-NyOp5bMZ.js";
import { R as B } from "./RippleInclude-Du5yIzX_.js";
import { S as L } from "./SkeletonInclude-BIUzAO2s.js";
import { A as M } from "./AriaStaticInclude-BVCgDZbU.js";
class P {
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
   * @param LabelConstructor class for creating a label/ класс для создания метки
   * @param CaptionConstructor class for creating a caption/ класс для создания подписи
   * @param DescriptionConstructor class for creating a description/ класс для создания описания
   * @param EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param IconConstructor class for creating an icon/ класс для создания иконки
   * @param ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param EventConstructor class for creating an event/ класс для создания события
   */
  constructor(i, t, n, o, s, l, a, c, u = T, m = _, g = D, b = A, v = $, C = R, f = B, S = L, x = E) {
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
      [w(this.classDesign)]: !0
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
    this.props = i, this.refs = t, this.element = n, this.classDesign = o, this.className = s, this.components = l, this.slots = a, this.emits = c;
    const p = new C(
      i,
      s,
      l,
      {
        position: "bottom"
      }
    );
    this.skeleton = new S(
      i,
      o,
      ["classTextVariant"]
    ), this.label = new u(
      i,
      s,
      void 0,
      a,
      void 0,
      void 0,
      void 0,
      this.skeleton
    ), this.caption = new m(i, s, a), this.description = new g(i, s, a, this.skeleton), this.enabled = new b(i, p), this.icon = new v(i, s, l), this.progress = p, this.ripple = new f(s, l, this.enabled), this.event = new x(
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
const X = {
  tag: "div",
  // :default [!] System label / Системная метка
  divider: !0
};
class Y extends k {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor cell item class/ класс элемента ячейки
   */
  constructor(t, n, o, s = P) {
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
        ...M.role(this.item.role.value)
      };
      return this.props.dynamic ? {
        ...t,
        tabindex: "0"
      } : t;
    }));
    this.item = new s(
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
  P as Cell,
  Y as CellDesign,
  X as defaultsCell
};

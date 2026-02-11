var A = Object.defineProperty;
var L = (n, t, e) => t in n ? A(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var i = (n, t, e) => L(n, typeof t != "symbol" ? t + "" : t, e);
import { computed as d, h as g } from "vue";
import { DesignConstructorAbstract as P } from "@dxtmisha/functional";
import { g as R } from "./getClassTagAStatic-BnVYlXHI.js";
import { E as T } from "./EventClickInclude-WHJqxZ1b.js";
import { A as c } from "./AriaStaticInclude-CAURwJMb.js";
import { L as H } from "./LabelHighlightInclude-CLmTvW_6.js";
import { S as M, P as V } from "./SuffixInclude-maZ7235l.js";
import { C as $ } from "./CaptionInclude-NzS6EYYj.js";
import { D as j } from "./DescriptionInclude-D4ane9aR.js";
import { B as q } from "./BadgeInclude-BwCIBVyK.js";
import { E as z } from "./EnabledInclude-Dk-rP4jp.js";
import { I as F } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as G } from "./ProgressInclude-9MfZWtGP.js";
import { R as J } from "./RippleInclude-Du5yIzX_.js";
import { S as K } from "./SkeletonInclude-BIUzAO2s.js";
class O {
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
   * @param constructors.BadgeIncludeConstructor class for working with badge/ класс для работы с бейджем
   * @param constructors.CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
   * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelHighlightIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
   * @param constructors.ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
   * @param constructors.RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   * @param constructors.SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
   */
  constructor(t, e, r, o, s, a, l, m, u) {
    i(this, "icon");
    i(this, "label");
    i(this, "prefix");
    i(this, "caption");
    i(this, "suffix");
    i(this, "description");
    i(this, "badge");
    i(this, "ripple");
    i(this, "progress");
    i(this, "skeleton");
    i(this, "enabled");
    i(this, "event");
    /** tag type/ тип тега */
    i(this, "tag", d(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div"));
    /** values for the class/ значения для класса */
    i(this, "classes", d(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [R(this.classDesign)]: !0
    })));
    /** values for attributes/ значения для атрибутов */
    i(this, "binds", d(() => {
      var t;
      return {
        "data-value": (t = this.props.index) != null ? t : this.props.value,
        "data-divider": this.props.divider ? "active" : void 0,
        "data-parent": this.props.parent,
        "data-list-id": this.props.listId,
        onClick: this.event.onClick
      };
    }));
    /** values for aria attributes/ значения для атрибутов aria */
    i(this, "aria", d(() => {
      const t = {
        tabindex: this.props.tabindex,
        ...c.role(this.props.role),
        ...c.disabled(!!this.props.disabled)
      };
      switch (this.props.role) {
        case "menuitemradio":
        case "menuitemcheckbox":
          return {
            ...t,
            ...c.checked(!!this.props.selected)
          };
        case "menuitem":
        case "option":
          return {
            ...t,
            ...c.selected(!!this.props.selected)
          };
      }
      return t;
    }));
    this.props = t, this.refs = e, this.element = r, this.classDesign = o, this.className = s, this.components = a, this.slots = l, this.emits = m;
    const {
      BadgeIncludeConstructor: f = q,
      CaptionIncludeConstructor: C = $,
      DescriptionIncludeConstructor: I = j,
      EnabledIncludeConstructor: v = z,
      EventClickIncludeConstructor: x = T,
      IconTrailingIncludeConstructor: S = F,
      LabelHighlightIncludeConstructor: w = H,
      PrefixIncludeConstructor: k = V,
      ProgressIncludeConstructor: y = G,
      RippleIncludeConstructor: B = J,
      SkeletonIncludeConstructor: D = K,
      SuffixIncludeConstructor: E = M
    } = u != null ? u : {}, b = new y(
      t,
      s,
      a,
      {
        circular: !0
      }
    ), h = new D(
      t,
      o,
      ["classTextVariant"]
    ), p = new v(t, b);
    this.icon = new S(t, s, a), this.label = new w(
      t,
      s,
      void 0,
      l,
      void 0,
      h
    ), this.prefix = new k(t, s, l, h), this.caption = new C(t, s, l), this.suffix = new E(t, s, l), this.description = new I(t, s, l, h), this.badge = new f(
      t,
      s,
      a,
      {
        overlap: "static"
      }
    ), this.ripple = new B(s, a, p), this.progress = b, this.skeleton = h, this.enabled = p, this.event = new x(t, p, m);
  }
}
const at = {
  tabindex: "-1",
  role: "option",
  // :default [!] System label / Системная метка
  iconAlign: "center"
};
class ht extends P {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(e, r, o) {
    super(
      e,
      r,
      o
    );
    i(this, "item");
    /**
     * Method for rendering the main part of the component.
     *
     * Метод для рендеринга основной части компонента.
     */
    i(this, "renderBody", () => {
      var r;
      const e = [
        ...this.renderContext(),
        ...this.item.description.render()
      ];
      return this.initSlot("body", e), [
        g(
          "div",
          { class: (r = this.classes) == null ? void 0 : r.value.body },
          e
        )
      ];
    });
    /**
     * Method for rendering the context part of the component.
     * This includes prefix, caption, suffix, badge, and label.
     *
     * Метод для рендеринга контекстной части компонента.
     * Включает в себя префикс, подпись, суффикс, значок и метку.
     */
    i(this, "renderContext", () => {
      var e;
      return [
        g(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.context },
          [
            ...this.item.prefix.render(),
            ...this.item.label.render(),
            ...this.item.caption.render(),
            ...this.item.suffix.render(),
            ...this.item.badge.render()
          ]
        )
      ];
    });
    this.item = new O(
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
      body: this.getSubClass("body"),
      context: this.getSubClass("context"),
      label: this.getSubClass("label"),
      highlight: this.getSubClass("highlight"),
      prefix: this.getSubClass("prefix"),
      caption: this.getSubClass("caption"),
      description: this.getSubClass("description"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
      badge: this.getSubClass("badge"),
      input: this.getSubClass("input")
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
    var r, o;
    if (this.props.filterMode && !this.item.label.isHighlight())
      return;
    const e = [];
    return this.initSlot("leading", e), e.push(...this.renderBody()), this.initSlot("trailing", e), e.push(
      ...this.item.icon.render(),
      ...this.item.progress.render(),
      ...this.item.ripple.render()
    ), g(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (r = this.classes) == null ? void 0 : r.value.main,
        style: (o = this.styles) == null ? void 0 : o.value,
        ...this.item.binds.value,
        ...this.item.aria.value
      },
      e
    );
  }
}
export {
  O as ListItem,
  ht as ListItemDesign,
  at as defaultsListItem
};

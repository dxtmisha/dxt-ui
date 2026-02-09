var A = Object.defineProperty;
var E = (a, t, i) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : a[t] = i;
var e = (a, t, i) => E(a, typeof t != "symbol" ? t + "" : t, i);
import { computed as h, h as u } from "vue";
import { getBind as L, toBind as P, getRef as R, DesignConstructorAbstract as T } from "@dxtmisha/functional";
import { g as H } from "./getClassTagAStatic-BnVYlXHI.js";
import { E as _ } from "./EventClickInclude-CgbuezDm.js";
import { A as c } from "./AriaStaticInclude-BVCgDZbU.js";
import { L as $ } from "./LabelHighlightInclude-CLmTvW_6.js";
import { P as M, S as V } from "./SuffixInclude-maZ7235l.js";
import { C as j } from "./CaptionInclude-gERJdKfG.js";
import { D as q } from "./DescriptionInclude-D4ane9aR.js";
import { E as z } from "./EnabledInclude-IdZAnr6u.js";
import { I as F } from "./IconTrailingInclude-CdsOcDxv.js";
import { R as G } from "./RippleInclude-Du5yIzX_.js";
import { P as J } from "./ProgressInclude-NyOp5bMZ.js";
import { S as K } from "./SkeletonInclude-BIUzAO2s.js";
class O {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, i, s, n) {
    /**
     * Checks whether a badge is specified for rendering the component/
     * Проверяет, указан ли бейдж для отображения компонента
     */
    e(this, "is", h(() => !!(this.props.badge || this.props.badgeDot)));
    /**
     * list of properties for the badge component/ список свойств для компонента бейджа
     */
    e(this, "binds", h(() => {
      var t;
      return L(
        this.props.badgeDot ? {} : this.props.badge,
        {
          dot: this.props.badgeDot,
          ...P(
            (t = R(this.extra)) != null ? t : {},
            {
              class: `${this.className}__badge`
            }
          )
        },
        "label",
        !0
      );
    }));
    /**
     * Render of the badge component
     *
     * Рендер компонента бейджа
     */
    e(this, "render", () => this.components && this.is.value ? this.components.render(
      "badge",
      this.binds.value,
      void 0,
      "badge"
    ) : []);
    this.props = t, this.className = i, this.components = s, this.extra = n;
  }
}
class Q {
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
   * @param IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param LabelHighlightIncludeConstructor class for working with label/ класс для работы с меткой
   * @param PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
   * @param CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
   * @param SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
   * @param DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param BadgeIncludeConstructor class for working with badge/ класс для работы с бейджем
   * @param RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
   * @param ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
   * @param SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   * @param EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   */
  constructor(t, i, s, n, r, l, o, g, b = F, f = $, v = M, x = j, C = V, S = q, I = O, w = G, k = J, y = K, B = z, D = _) {
    e(this, "icon");
    e(this, "label");
    e(this, "prefix");
    e(this, "caption");
    e(this, "suffix");
    e(this, "description");
    e(this, "badge");
    e(this, "ripple");
    e(this, "progress");
    e(this, "skeleton");
    e(this, "enabled");
    e(this, "event");
    /** tag type/ тип тега */
    e(this, "tag", h(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div"));
    /** values for the class/ значения для класса */
    e(this, "classes", h(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [H(this.classDesign)]: !0
    })));
    /** values for attributes/ значения для атрибутов */
    e(this, "binds", h(() => {
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
    e(this, "aria", h(() => {
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
          return {
            ...t,
            ...c.selected(!!this.props.selected)
          };
      }
      return t;
    }));
    this.props = t, this.refs = i, this.element = s, this.classDesign = n, this.className = r, this.components = l, this.slots = o, this.emits = g;
    const m = new k(
      t,
      r,
      l,
      {
        circular: !0
      }
    ), d = new y(
      t,
      n,
      ["classTextVariant"]
    ), p = new B(t, m);
    this.icon = new b(t, r, l), this.label = new f(
      t,
      r,
      void 0,
      o,
      void 0,
      d
    ), this.prefix = new v(t, r, o, d), this.caption = new x(t, r, o), this.suffix = new C(t, r, o), this.description = new S(t, r, o, d), this.badge = new I(
      t,
      r,
      l,
      {
        overlap: "static"
      }
    ), this.ripple = new w(r, l, p), this.progress = m, this.skeleton = d, this.enabled = p, this.event = new D(t, p, g);
  }
}
const lt = {
  tabindex: "-1",
  // :default [!] System label / Системная метка
  iconAlign: "center"
};
class dt extends T {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(i, s, n) {
    super(
      i,
      s,
      n
    );
    e(this, "item");
    /**
     * Method for rendering the main part of the component.
     *
     * Метод для рендеринга основной части компонента.
     */
    e(this, "renderBody", () => {
      var s;
      const i = [
        ...this.renderContext(),
        ...this.item.description.render()
      ];
      return this.initSlot("body", i), [
        u(
          "div",
          { class: (s = this.classes) == null ? void 0 : s.value.body },
          i
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
    e(this, "renderContext", () => {
      var i;
      return [
        u(
          "div",
          { class: (i = this.classes) == null ? void 0 : i.value.context },
          [
            ...this.item.prefix.render(),
            ...this.item.caption.render(),
            ...this.item.suffix.render(),
            ...this.item.label.render(),
            ...this.item.badge.render()
          ]
        )
      ];
    });
    this.item = new Q(
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
    var s, n;
    if (this.props.filterMode && !this.item.label.isHighlight())
      return;
    const i = [];
    return this.initSlot("leading", i), i.push(...this.renderBody()), this.initSlot("trailing", i), i.push(
      ...this.item.icon.render(),
      ...this.item.progress.render(),
      ...this.item.ripple.render()
    ), u(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        style: (n = this.styles) == null ? void 0 : n.value,
        ...this.item.binds.value,
        ...this.item.aria.value
      },
      i
    );
  }
}
export {
  Q as ListItem,
  dt as ListItemDesign,
  lt as defaultsListItem
};

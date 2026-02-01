var m = Object.defineProperty;
var f = (o, t, e) => t in o ? m(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var i = (o, t, e) => f(o, typeof t != "symbol" ? t + "" : t, e);
import { computed as h, h as u } from "vue";
import { getBind as v, toBind as x, getRef as C, DesignConstructorAbstract as S } from "@dxtmisha/functional";
import { g as I } from "./getClassTagAStatic-BnVYlXHI.js";
import { E as w } from "./EventClickInclude-CgbuezDm.js";
import { A as p } from "./AriaStaticInclude-D1bSJaBp.js";
import { L as y } from "./LabelHighlightInclude-7TH42C12.js";
import { P as B, S as D } from "./SuffixInclude-C7JNYCJK.js";
import { C as k } from "./CaptionInclude-AFVF4qyd.js";
import { D as A } from "./DescriptionInclude-D4ane9aR.js";
import { E } from "./EnabledInclude-JzHG2GuX.js";
import { S as L } from "./SkeletonInclude-BIUzAO2s.js";
import { I as O } from "./IconTrailingInclude-CdsOcDxv.js";
import { R as M } from "./RippleInclude-Du5yIzX_.js";
import { P } from "./ProgressInclude-CPQetoyp.js";
class R {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter/ дополнительный параметр
   */
  constructor(t, e, s, r) {
    /**
     * Checks whether a badge is specified for rendering the component/
     * Проверяет, указан ли бейдж для отображения компонента
     */
    i(this, "is", h(() => !!(this.props.badge || this.props.badgeDot)));
    /**
     * list of properties for the badge component/ список свойств для компонента бейджа
     */
    i(this, "binds", h(() => {
      var t;
      return v(
        this.props.badgeDot ? {} : this.props.badge,
        {
          dot: this.props.badgeDot,
          ...x(
            (t = C(this.extra)) != null ? t : {},
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
    i(this, "render", () => this.components && this.is.value ? this.components.render(
      "badge",
      this.binds.value,
      void 0,
      "badge"
    ) : []);
    this.props = t, this.className = e, this.components = s, this.extra = r;
  }
}
class j {
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
  constructor(t, e, s, r, n, l, a, g) {
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
    i(this, "tag", h(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div"));
    /** values for the class/ значения для класса */
    i(this, "classes", h(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [I(this.classDesign)]: !0
    })));
    /** values for attributes/ значения для атрибутов */
    i(this, "binds", h(() => {
      var e;
      const t = {
        "data-value": (e = this.props.index) != null ? e : this.props.value,
        "data-divider": this.props.divider ? "active" : void 0,
        "data-parent": this.props.parent,
        "data-list-id": this.props.listId,
        tabindex: this.props.tabindex,
        role: this.props.role,
        ...p.disabled(!!this.props.disabled),
        onClick: this.event.onClick
      };
      return this.props.isMenu && Object.assign(
        t,
        p.haspopup("menu")
      ), t;
    }));
    /** values for attributes with open state/ значения для атрибутов с состоянием open */
    i(this, "bindsAndOpen", h(() => {
      const t = {
        ...this.binds.value
      };
      return this.props.isMenu && Object.assign(
        t,
        p.expanded(!!this.props.open)
      ), this.props.isItemMenu && Object.assign(
        t,
        p.checked(!!this.props.selected)
      ), t;
    }));
    this.props = t, this.refs = e, this.element = s, this.classDesign = r, this.className = n, this.components = l, this.slots = a, this.emits = g;
    const b = new P(
      t,
      n,
      l,
      {
        circular: !0,
        inverse: !0
      }
    ), d = new L(
      t,
      r,
      ["classTextVariant"]
    ), c = new E(t, b);
    this.icon = new O(t, n, l), this.label = new y(
      t,
      n,
      void 0,
      a,
      void 0,
      d
    ), this.prefix = new B(t, n, a, d), this.caption = new k(t, n, a), this.suffix = new D(t, n, a), this.description = new A(t, n, a, d), this.badge = new R(
      t,
      n,
      l,
      {
        overlap: "static"
      }
    ), this.ripple = new M(n, l, c), this.progress = b, this.skeleton = d, this.enabled = c, this.event = new w(t, c, g);
  }
}
const Y = {
  tabindex: "-1",
  // :default [!] System label / Системная метка
  iconAlign: "center"
};
class Z extends S {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(e, s, r) {
    super(
      e,
      s,
      r
    );
    i(this, "item");
    /**
     * Method for rendering the main part of the component.
     *
     * Метод для рендеринга основной части компонента.
     */
    i(this, "renderBody", () => {
      var s;
      const e = [
        ...this.renderContext(),
        ...this.item.description.render()
      ];
      return this.initSlot("body", e), [
        u(
          "div",
          { class: (s = this.classes) == null ? void 0 : s.value.body },
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
        u(
          "div",
          { class: (e = this.classes) == null ? void 0 : e.value.context },
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
    this.item = new j(
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
    var s, r;
    if (this.props.filterMode && !this.item.label.isHighlight())
      return;
    const e = [];
    return this.initSlot("leading", e), e.push(...this.renderBody()), this.initSlot("trailing", e), e.push(
      ...this.item.icon.render(),
      ...this.item.progress.render(),
      ...this.item.ripple.render()
    ), u(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        style: (r = this.styles) == null ? void 0 : r.value,
        ...this.item.bindsAndOpen.value
      },
      e
    );
  }
}
export {
  j as ListItem,
  Z as ListItemDesign,
  Y as defaultsListItem
};

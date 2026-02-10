var A = Object.defineProperty;
var L = (o, t, i) => t in o ? A(o, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : o[t] = i;
var e = (o, t, i) => L(o, typeof t != "symbol" ? t + "" : t, i);
import { computed as l, h as g } from "vue";
import { getBind as P, toBind as R, getRef as T, DesignConstructorAbstract as H } from "@dxtmisha/functional";
import { g as _ } from "./getClassTagAStatic-BnVYlXHI.js";
import { E as $ } from "./EventClickInclude-WHJqxZ1b.js";
import { A as c } from "./AriaStaticInclude-CAURwJMb.js";
import { L as M } from "./LabelHighlightInclude-CLmTvW_6.js";
import { S as V, P as j } from "./SuffixInclude-maZ7235l.js";
import { C as q } from "./CaptionInclude-NzS6EYYj.js";
import { D as z } from "./DescriptionInclude-D4ane9aR.js";
import { E as F } from "./EnabledInclude-Dk-rP4jp.js";
import { I as G } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as J } from "./ProgressInclude-9MfZWtGP.js";
import { R as K } from "./RippleInclude-Du5yIzX_.js";
import { S as O } from "./SkeletonInclude-BIUzAO2s.js";
class Q {
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
    e(this, "is", l(() => !!(this.props.badge || this.props.badgeDot)));
    /**
     * list of properties for the badge component/ список свойств для компонента бейджа
     */
    e(this, "binds", l(() => {
      var t;
      return P(
        this.props.badgeDot ? {} : this.props.badge,
        {
          dot: this.props.badgeDot,
          ...R(
            (t = T(this.extra)) != null ? t : {},
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
class U {
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
  constructor(t, i, s, n, r, h, a, m, u) {
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
    e(this, "tag", l(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div"));
    /** values for the class/ значения для класса */
    e(this, "classes", l(() => ({
      [`${this.className}--description`]: this.description.is.value,
      [_(this.classDesign)]: !0
    })));
    /** values for attributes/ значения для атрибутов */
    e(this, "binds", l(() => {
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
    e(this, "aria", l(() => {
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
    this.props = t, this.refs = i, this.element = s, this.classDesign = n, this.className = r, this.components = h, this.slots = a, this.emits = m;
    const {
      BadgeIncludeConstructor: f = Q,
      CaptionIncludeConstructor: C = q,
      DescriptionIncludeConstructor: I = z,
      EnabledIncludeConstructor: v = F,
      EventClickIncludeConstructor: x = $,
      IconTrailingIncludeConstructor: S = G,
      LabelHighlightIncludeConstructor: w = M,
      PrefixIncludeConstructor: k = j,
      ProgressIncludeConstructor: B = J,
      RippleIncludeConstructor: D = K,
      SkeletonIncludeConstructor: y = O,
      SuffixIncludeConstructor: E = V
    } = u != null ? u : {}, b = new B(
      t,
      r,
      h,
      {
        circular: !0
      }
    ), d = new y(
      t,
      n,
      ["classTextVariant"]
    ), p = new v(t, b);
    this.icon = new S(t, r, h), this.label = new w(
      t,
      r,
      void 0,
      a,
      void 0,
      d
    ), this.prefix = new k(t, r, a, d), this.caption = new C(t, r, a), this.suffix = new E(t, r, a), this.description = new I(t, r, a, d), this.badge = new f(
      t,
      r,
      h,
      {
        overlap: "static"
      }
    ), this.ripple = new D(r, h, p), this.progress = b, this.skeleton = d, this.enabled = p, this.event = new x(t, p, m);
  }
}
const dt = {
  tabindex: "-1",
  role: "option",
  // :default [!] System label / Системная метка
  iconAlign: "center"
};
class ct extends H {
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
        g(
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
        g(
          "div",
          { class: (i = this.classes) == null ? void 0 : i.value.context },
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
    this.item = new U(
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
    ), g(
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
  U as ListItem,
  ct as ListItemDesign,
  dt as defaultsListItem
};

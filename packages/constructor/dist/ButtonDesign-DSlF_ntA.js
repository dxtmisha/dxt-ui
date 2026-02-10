var w = Object.defineProperty;
var S = (i, t, s) => t in i ? w(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => S(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as l, h as k } from "vue";
import { DesignConstructorAbstract as B, RouterItemRef as E } from "@dxtmisha/functional";
import { g as y } from "./getClassTagAStatic-BnVYlXHI.js";
import { L as x } from "./LabelInclude-D-mLvjK5.js";
import { E as L } from "./EnabledInclude-Dk-rP4jp.js";
import { A as u } from "./AriaStaticInclude-CAURwJMb.js";
import { E as R } from "./EventClickInclude-WHJqxZ1b.js";
import { I as T } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as A } from "./ProgressInclude-9MfZWtGP.js";
import { R as D } from "./RippleInclude-Du5yIzX_.js";
import { S as P } from "./SkeletonInclude-BIUzAO2s.js";
class K {
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
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(t, s, n, a, r, o, p, c, h) {
    e(this, "label");
    e(this, "enabled");
    e(this, "icon");
    e(this, "progress");
    e(this, "ripple");
    e(this, "skeleton");
    e(this, "event");
    /** tag name/ название тега */
    e(this, "tag", l(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button"));
    /** values for the class/ значения для класса */
    e(this, "classes", l(() => ({
      [`${this.className}--icon`]: this.icon.isIcon.value,
      [y(this.classDesign)]: !0,
      ...this.skeleton.classes.value
    })));
    /**
     * list of aria properties for the button component/
     * список aria свойств для компонента Button
     */
    e(this, "aria", l(() => {
      const t = {
        ...this.progress.aria.value,
        ...u.label(this.props.ariaLabel)
      };
      return this.isTagNotButton() ? {
        tabindex: "0",
        ...t,
        ...u.role("button"),
        ...u.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
      } : t;
    }));
    /**
     * Events for the button component.
     *
     * События для компонента кнопки.
     */
    e(this, "eventList", l(() => {
      const t = {
        onClick: this.event.onClick
      };
      return this.isTagNotButton() && (t.onKeydown = this.event.onKeydown), t;
    }));
    this.props = t, this.refs = s, this.element = n, this.classDesign = a, this.className = r, this.components = o, this.slots = p, this.emits = c;
    const {
      EnabledConstructor: m = L,
      EventConstructor: g = R,
      IconConstructor: b = T,
      LabelConstructor: v = x,
      ProgressConstructor: f = A,
      RippleConstructor: C = D,
      SkeletonConstructor: I = P
    } = h != null ? h : {}, d = new f(
      t,
      r,
      o,
      {
        circular: !0,
        inverse: !0
      }
    );
    this.label = new v(t, r, void 0, p), this.enabled = new m(t, d), this.icon = new b(t, r, o), this.progress = d, this.ripple = new C(r, o, this.enabled), this.skeleton = new I(
      t,
      a,
      ["classBackground"]
    ), this.event = new g(
      t,
      this.enabled,
      c
    );
  }
  /**
   * Checks if the tag is not a button or link.
   *
   * Проверяет, не является ли тег кнопкой или ссылкой.
   */
  isTagNotButton() {
    return !!(this.props.tag && ["a", "button"].indexOf(this.props.tag) === -1);
  }
}
class Q extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor button item class/ класс элемента кнопки
   */
  constructor(s, n, a, r = K) {
    super(
      s,
      n,
      a
    );
    e(this, "item");
    this.item = new r(
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
      label: this.getSubClass("label"),
      icon: this.getSubClass("icon"),
      trailing: this.getSubClass("trailing"),
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
    var s, n;
    return k(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        type: this.props.type,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        style: (n = this.styles) == null ? void 0 : n.value,
        "data-value": this.props.value,
        disabled: this.item.enabled.isDisabledOrUndefined.value,
        ...E.rawToHref(this.props.to),
        ...this.item.eventList.value,
        ...this.item.aria.value
      },
      [
        ...this.item.progress.render(),
        ...this.item.label.render(),
        ...this.item.icon.render(),
        ...this.item.ripple.render()
      ]
    );
  }
}
export {
  K as B,
  Q as a
};

var w = Object.defineProperty;
var S = (i, t, s) => t in i ? w(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => S(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as l, h as k } from "vue";
import { DesignConstructorAbstract as B } from "@dxtmisha/functional";
import { g as E } from "./getClassTagAStatic-BnVYlXHI.js";
import { L as y } from "./LabelInclude-D-mLvjK5.js";
import { E as x } from "./EnabledInclude-B9oXYBtR.js";
import { A as u } from "./AriaStaticInclude-DRHG8ILX.js";
import { E as L } from "./EventClickInclude-DMbEP-nH.js";
import { I as A } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as D } from "./ProgressInclude-DlEbC7XP.js";
import { R as T } from "./RippleInclude-Du5yIzX_.js";
import { S as R } from "./SkeletonInclude-BIUzAO2s.js";
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(t, s, r, a, n, o, c, p, h) {
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
      [E(this.classDesign)]: !0,
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
        ...this.event.getHref(),
        onClick: this.event.onClick
      };
      return this.isTagNotButton() && (t.onKeydown = this.event.onKeydown), t;
    }));
    this.props = t, this.refs = s, this.element = r, this.classDesign = a, this.className = n, this.components = o, this.slots = c, this.emits = p;
    const {
      EnabledConstructor: m = x,
      EventConstructor: g = L,
      IconConstructor: b = A,
      LabelConstructor: v = y,
      ProgressConstructor: f = D,
      RippleConstructor: C = T,
      SkeletonConstructor: I = R
    } = h != null ? h : {}, d = new f(
      t,
      n,
      o,
      {
        circular: !0,
        inverse: !0
      }
    );
    this.label = new v(t, n, void 0, c), this.enabled = new m(t, d), this.icon = new b(t, n, o), this.progress = d, this.ripple = new C(n, o, this.enabled), this.skeleton = new I(
      t,
      a,
      ["classBackground"]
    ), this.event = new g(
      t,
      this.enabled,
      p
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
class M extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor button item class/ класс элемента кнопки
   */
  constructor(s, r, a, n = P) {
    super(
      s,
      r,
      a
    );
    e(this, "item");
    this.item = new n(
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
    var s, r;
    return k(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        type: this.props.type,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        style: (r = this.styles) == null ? void 0 : r.value,
        "data-value": this.props.value,
        disabled: this.item.enabled.isDisabledOrUndefined.value,
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
  P as B,
  M as a
};

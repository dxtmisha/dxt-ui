var w = Object.defineProperty;
var C = (i, t, s) => t in i ? w(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => C(i, typeof t != "symbol" ? t + "" : t, s);
import { computed as o, h as S } from "vue";
import { DesignConstructorAbstract as k, RouterItemRef as B } from "@dxtmisha/functional";
import { g as x } from "./getClassTagAStatic-BnVYlXHI.js";
import { L as y } from "./LabelInclude-BtZrrbCf.js";
import { E } from "./EnabledInclude-BeX9VHb_.js";
import { A as h } from "./AriaStaticInclude-CuMRRW17.js";
import { E as T } from "./EventClickInclude-Bi9B51Mm.js";
import { I as A } from "./IconTrailingInclude-CdsOcDxv.js";
import { P as D } from "./ProgressInclude-DJGFmt70.js";
import { R as L } from "./RippleInclude-Du5yIzX_.js";
import { S as R } from "./SkeletonInclude-BIUzAO2s.js";
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
   * @param LabelConstructor class for creating a label/ класс для создания метки
   * @param EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param IconConstructor class for creating an icon/ класс для создания иконки
   * @param ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param EventConstructor class for creating an event/ класс для создания события
   */
  constructor(t, s, n, a, r, l, u, p, m = y, d = E, g = A, b = D, v = L, f = R, I = T) {
    e(this, "label");
    e(this, "enabled");
    e(this, "icon");
    e(this, "progress");
    e(this, "ripple");
    e(this, "skeleton");
    e(this, "event");
    /** tag name/ название тега */
    e(this, "tag", o(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button"));
    /** values for the class/ значения для класса */
    e(this, "classes", o(() => ({
      [`${this.className}--icon`]: this.icon.isIcon.value,
      [x(this.classDesign)]: !0,
      ...this.skeleton.classes.value
    })));
    /**
     * list of aria properties for the button component/
     * список aria свойств для компонента Button
     */
    e(this, "aria", o(() => {
      const t = {
        ...this.progress.aria.value,
        ...h.label(this.props.ariaLabel)
      };
      return this.isTagNotButton() ? {
        tabindex: "0",
        ...t,
        ...h.role("button"),
        ...h.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
      } : t;
    }));
    /**
     * Events for the button component.
     *
     * События для компонента кнопки.
     */
    e(this, "eventList", o(() => {
      const t = {
        onClick: this.event.onClick
      };
      return this.isTagNotButton() && (t.onKeydown = this.event.onKeydown), t;
    }));
    this.props = t, this.refs = s, this.element = n, this.classDesign = a, this.className = r, this.components = l, this.slots = u, this.emits = p;
    const c = new b(
      t,
      r,
      l,
      {
        circular: !0,
        inverse: !0
      }
    );
    this.label = new m(t, r, void 0, u), this.enabled = new d(t, c), this.icon = new g(t, r, l), this.progress = c, this.ripple = new v(r, l, this.enabled), this.skeleton = new f(
      t,
      a,
      ["classBackground"]
    ), this.event = new I(
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
class M extends k {
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
      ...this.item.event.expose,
      ...this.item.label.expose
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
    return S(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        type: this.props.type,
        class: (s = this.classes) == null ? void 0 : s.value.main,
        style: (n = this.styles) == null ? void 0 : n.value,
        "data-value": this.props.value,
        disabled: this.item.enabled.isDisabledOrUndefined.value,
        ...B.rawToHref(this.props.to),
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
  M as a
};

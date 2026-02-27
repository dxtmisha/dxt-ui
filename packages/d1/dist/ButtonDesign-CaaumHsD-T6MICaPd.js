import { h as k, computed as l } from "vue";
import { DesignConstructorAbstract as x, RouterItemRef as S } from "@dxtmisha/functional";
import { a as N } from "./getClassTagAStatic-BnVYlXHI-DhbmeMA0.js";
import { x as B } from "./LabelInclude-D-mLvjK5-Bnui6CyX.js";
import { h as D } from "./EnabledInclude-B9oXYBtR-CUbxFX6i.js";
import { l as u } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { m as E } from "./D1Icon.vue_vue_type_script_setup_true_lang-BINcl8rE.js";
import { B as I } from "./IconTrailingInclude-CdsOcDxv-CocNhqdl.js";
import { b as L } from "./ProgressInclude-DlEbC7XP-Cahi9k1c.js";
import { o as R } from "./RippleInclude-Du5yIzX_-DwebniuR.js";
import { $ as T } from "./SkeletonInclude-BIUzAO2s-5OIs3oxk.js";
var K = Object.defineProperty, O = (i, t, e) => t in i ? K(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e, s = (i, t, e) => O(i, typeof t != "symbol" ? t + "" : t, e);
class A {
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
  constructor(t, e, h, n, r, a, p, m, c) {
    s(this, "label"), s(this, "enabled"), s(this, "icon"), s(this, "progress"), s(this, "ripple"), s(this, "skeleton"), s(this, "event"), s(this, "tag", l(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), s(this, "classes", l(() => ({
      [`${this.className}--icon`]: this.icon.isIcon.value,
      [N(this.classDesign)]: !0,
      ...this.skeleton.classes.value
    }))), s(this, "aria", l(() => {
      const o = {
        ...this.progress.aria.value,
        ...u.label(this.props.ariaLabel)
      };
      return this.isTagNotButton() ? {
        tabindex: "0",
        ...o,
        ...u.role("button"),
        ...u.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
      } : o;
    })), s(this, "eventList", l(() => {
      const o = {
        onClick: this.event.onClick
      };
      return this.isTagNotButton() && (o.onKeydown = this.event.onKeydown), o;
    })), this.props = t, this.refs = e, this.element = h, this.classDesign = n, this.className = r, this.components = a, this.slots = p, this.emits = m;
    const {
      EnabledConstructor: d = D,
      EventConstructor: g = E,
      IconConstructor: v = I,
      LabelConstructor: f = B,
      ProgressConstructor: C = L,
      RippleConstructor: w = R,
      SkeletonConstructor: y = T
    } = c != null ? c : {}, b = new C(
      t,
      r,
      a,
      {
        circular: !0,
        inverse: !0
      }
    );
    this.label = new f(t, r, void 0, p), this.enabled = new d(t, b), this.icon = new v(t, r, a), this.progress = b, this.ripple = new w(r, a, this.enabled), this.skeleton = new y(
      t,
      n,
      ["classBackground"]
    ), this.event = new g(
      t,
      this.enabled,
      m
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
class M extends x {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor button item class/ класс элемента кнопки
   */
  constructor(t, e, h, n = A) {
    super(
      t,
      e,
      h
    ), s(this, "item"), this.item = new n(
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
    var t, e;
    return k(
      this.item.tag.value,
      {
        ...this.getAttrs(),
        ref: this.element,
        type: this.props.type,
        class: (t = this.classes) == null ? void 0 : t.value.main,
        style: (e = this.styles) == null ? void 0 : e.value,
        "data-value": this.props.value,
        disabled: this.item.enabled.isDisabledOrUndefined.value,
        ...S.rawToHref(this.props.to),
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
  M as Q
};

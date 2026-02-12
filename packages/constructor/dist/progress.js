var f = Object.defineProperty;
var g = (a, s, e) => s in a ? f(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e;
var i = (a, s, e) => g(a, typeof s != "symbol" ? s + "" : s, e);
import { watch as x, onUnmounted as y, ref as c, computed as l, h as u } from "vue";
import { toNumber as o, DesignConstructorAbstract as P } from "@dxtmisha/functional";
import { T as S } from "./TextInclude--GERRCGj.js";
import { A as n } from "./AriaStaticInclude-ZrgMZ2ja.js";
import { P as B } from "./ProgressInclude-hQsbbhvF.js";
class C {
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
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(s, e, t, r, h, m, v, d, p) {
    i(this, "timeout");
    i(this, "hide", c(!1));
    i(this, "visible", c(!1));
    i(this, "text");
    /**
     * Checks if the component is in progress bar mode.
     *
     * Проверяет, находится ли компонент в режиме прогресс-бара.
     */
    i(this, "isProgressbar", l(() => this.isValue()));
    /**
     * Returns the tag type for the element.
     *
     * Возвращает тип тега для элемента.
     */
    i(this, "tag", l(() => this.props.circular ? "svg" : "div"));
    /**
     * Returns values.
     *
     * Возвращает значения.
     */
    i(this, "value", l(() => {
      var s;
      return o((s = this.props.value) != null ? s : 0);
    }));
    /**
     * Returns values in percentages.
     *
     * Возвращает значения в процентах.
     */
    i(this, "valueInPercent", l(() => {
      if (this.isValue()) {
        const s = this.value.value, e = 100 / this.getMax() * s;
        return this.props.circular ? e.toString() : `${100 - e}%`;
      }
      return null;
    }));
    /**
     * Returns the label text.
     *
     * Возвращает текст метки.
     */
    i(this, "label", l(() => {
      if (this.props.ariaLabel)
        return this.props.ariaLabel;
      if (!this.isValue() && this.props.visible)
        return this.text.loading.value;
    }));
    /**
     * Returns the role for the component.
     *
     * Возвращает роль для компонента.
     */
    i(this, "role", l(() => this.isValue() ? "progressbar" : "status"));
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    i(this, "classes", l(() => ({
      [`${this.className}--hide`]: this.hide.value,
      [`${this.className}--visible`]: this.visible.value,
      [`${this.className}--value`]: this.isValue()
    })));
    /**
     * Returns the property for style.
     *
     * Возвращает свойство для стиля.
     */
    i(this, "styles", l(() => ({
      [`--${this.className}-sys-value`]: this.valueInPercent.value
    })));
    /**
     * Monitors the animation event for hiding the element.
     *
     * Следит за событием анимации для скрытия элемента.
     * @param animationName A string containing the value of the animation-name that generated the animation/
     * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
     */
    i(this, "onAnimation", ({ animationName: s }) => {
      s.match("-hidden") && (this.hide.value = !1);
    });
    /**
     * The mode is triggered when the visible property changes to change the output status of the element.
     *
     * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
     */
    i(this, "switch", () => {
      var e, t;
      const s = this.props.visible;
      if (clearTimeout(this.timeout), this.isValue())
        this.reset();
      else if (!!this.visible.value !== s) {
        const r = o((e = this.props.delay) != null ? e : 0), h = o((t = this.props.delayHide) != null ? t : 0);
        s && r ? this.timeout = setTimeout(() => this.update(), r) : !s && h ? this.timeout = setTimeout(() => this.update(), h) : this.update();
      }
    });
    this.props = s, this.refs = e, this.element = t, this.classDesign = r, this.className = h, this.components = m, this.slots = v, this.emits = d;
    const {
      TextIncludeConstructor: b = S
    } = p != null ? p : {};
    this.text = new b(this.props), x(
      [e.visible],
      this.switch,
      { immediate: !0 }
    ), y(() => {
      clearTimeout(this.timeout);
    });
  }
  /**
   * Checks if there are any values.
   *
   * Проверяет, есть ли значения.
   */
  isValue() {
    return this.value.value > 0;
  }
  /**
   * Returns the maximum allowable value.
   *
   * Возвращает максимально допустимое значение.
   */
  getMax() {
    var s;
    return o((s = this.props.max) != null ? s : 100);
  }
  /**
   * Updates dependent data when the visible property changes.
   *
   * Обновляет зависимые данные при изменении свойства visible.
   */
  update() {
    return this.hide.value = !this.props.visible, this.visible.value = !!this.props.visible, this;
  }
  /**
   * Resets values to their initial state.
   *
   * Сбрасывает значения до начального положения.
   */
  reset() {
    return this.hide.value = !1, this.visible.value = !1, this;
  }
}
const I = {
  max: 100,
  delay: 360,
  delayHide: 200,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
};
class M extends P {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor progress item class/ класс элемента progress
   */
  constructor(e, t, r, h = C) {
    super(
      e,
      t,
      r
    );
    i(this, "item");
    /**
     * Render elements for the circular loader.
     *
     * Рендер элементов для кругового загрузчика.
     */
    i(this, "renderCircle", () => {
      var e, t;
      return this.props.circular ? [
        u("circle", {
          class: (e = this.classes) == null ? void 0 : e.value.circleSub,
          cx: "24",
          cy: "24",
          r: "20",
          ...n.hidden()
        }),
        u("circle", {
          class: (t = this.classes) == null ? void 0 : t.value.circle,
          cx: "24",
          cy: "24",
          r: "20",
          ...n.hidden()
        })
      ] : [];
    });
    /**
     * Render dot at the end.
     *
     * Рендер точки в конце.
     */
    i(this, "renderPoint", () => {
      var e;
      return this.props.linear && this.props.point && (this.props.value || this.props.indeterminate === "type1") ? [u("span", { class: (e = this.classes) == null ? void 0 : e.value.point })] : [];
    });
    /**
     * Props for the main element/ Свойства для главного элемента
     */
    i(this, "propsMain", l(() => {
      var t, r;
      const e = {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        style: (r = this.styles) == null ? void 0 : r.value,
        onAnimationend: this.item.onAnimation,
        ...n.role(this.item.role.value),
        ...n.label(this.item.label.value)
      };
      return this.props.circular && (e.viewBox = "0 0 48 48"), this.props.value ? {
        ...e,
        ...n.valueMinMax(
          this.props.value,
          0,
          this.props.max
        )
      } : e;
    }));
    this.item = new h(
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
    return {};
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
      circle: this.getSubClass("circle"),
      circleSub: this.getSubClass("circleSub"),
      point: this.getSubClass("point")
    };
  }
  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  initStyles() {
    return this.item.styles.value;
  }
  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  initRender() {
    const e = [
      ...this.renderCircle(),
      ...this.renderPoint()
    ];
    return u(
      this.item.tag.value,
      this.propsMain.value,
      e
    );
  }
}
export {
  C as Progress,
  M as ProgressDesign,
  B as ProgressInclude,
  I as defaultsProgress
};

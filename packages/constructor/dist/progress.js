var d = Object.defineProperty;
var b = (a, e, s) => e in a ? d(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s;
var t = (a, e, s) => b(a, typeof e != "symbol" ? e + "" : e, s);
import { watch as f, onUnmounted as g, ref as p, computed as l, h as u } from "vue";
import { toNumber as o, DesignConstructorAbstract as x } from "@dxtmisha/functional";
import { T as y } from "./TextInclude-CodMN5BH.js";
import { A as n } from "./AriaStaticInclude-BVCgDZbU.js";
import { P as $ } from "./ProgressInclude-NyOp5bMZ.js";
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
   */
  constructor(e, s, i, r, h, c, m, v) {
    t(this, "timeout");
    t(this, "hide", p(!1));
    t(this, "visible", p(!1));
    t(this, "text");
    /**
     * Checks if the component is in progress bar mode.
     *
     * Проверяет, находится ли компонент в режиме прогресс-бара.
     */
    t(this, "isProgressbar", l(() => this.isValue()));
    /**
     * Returns the tag type for the element.
     *
     * Возвращает тип тега для элемента.
     */
    t(this, "tag", l(() => this.props.circular ? "svg" : "div"));
    /**
     * Returns values.
     *
     * Возвращает значения.
     */
    t(this, "value", l(() => {
      var e;
      return o((e = this.props.value) != null ? e : 0);
    }));
    /**
     * Returns values in percentages.
     *
     * Возвращает значения в процентах.
     */
    t(this, "valueInPercent", l(() => {
      if (this.isValue()) {
        const e = this.value.value, s = 100 / this.getMax() * e;
        return this.props.circular ? s.toString() : `${100 - s}%`;
      }
      return null;
    }));
    /**
     * Returns the label text.
     *
     * Возвращает текст метки.
     */
    t(this, "label", l(() => {
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
    t(this, "role", l(() => this.isValue() ? "progressbar" : "status"));
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    t(this, "classes", l(() => ({
      [`${this.className}--hide`]: this.hide.value,
      [`${this.className}--visible`]: this.visible.value,
      [`${this.className}--value`]: this.isValue()
    })));
    /**
     * Returns the property for style.
     *
     * Возвращает свойство для стиля.
     */
    t(this, "styles", l(() => ({
      [`--${this.className}-sys-value`]: this.valueInPercent.value
    })));
    /**
     * Monitors the animation event for hiding the element.
     *
     * Следит за событием анимации для скрытия элемента.
     * @param animationName A string containing the value of the animation-name that generated the animation/
     * Является DOMString содержащей значения animation-name CSS-свойств связанных с transition
     */
    t(this, "onAnimation", ({ animationName: e }) => {
      e.match("-hidden") && (this.hide.value = !1);
    });
    /**
     * The mode is triggered when the visible property changes to change the output status of the element.
     *
     * Метод срабатывает при изменении свойства visible для изменения статуса вывода элемента.
     */
    t(this, "switch", () => {
      var s, i;
      const e = this.props.visible;
      if (clearTimeout(this.timeout), this.isValue())
        this.reset();
      else if (!!this.visible.value !== e) {
        const r = o((s = this.props.delay) != null ? s : 0), h = o((i = this.props.delayHide) != null ? i : 0);
        e && r ? this.timeout = setTimeout(() => this.update(), r) : !e && h ? this.timeout = setTimeout(() => this.update(), h) : this.update();
      }
    });
    this.props = e, this.refs = s, this.element = i, this.classDesign = r, this.className = h, this.components = c, this.slots = m, this.emits = v, this.text = new y(this.props), f(
      [s.visible],
      this.switch,
      { immediate: !0 }
    ), g(() => {
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
    var e;
    return o((e = this.props.max) != null ? e : 100);
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
const w = {
  max: 100,
  delay: 360,
  delayHide: 200,
  // :default [!] System label / Системная метка
  linear: !0,
  indeterminate: "type1",
  position: "top"
};
class M extends x {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor progress item class/ класс элемента progress
   */
  constructor(s, i, r, h = P) {
    super(
      s,
      i,
      r
    );
    t(this, "item");
    /**
     * Render elements for the circular loader.
     *
     * Рендер элементов для кругового загрузчика.
     */
    t(this, "renderCircle", () => {
      var s, i;
      return this.props.circular ? [
        u("circle", {
          class: (s = this.classes) == null ? void 0 : s.value.circleSub,
          cx: "24",
          cy: "24",
          r: "20",
          ...n.hidden()
        }),
        u("circle", {
          class: (i = this.classes) == null ? void 0 : i.value.circle,
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
    t(this, "renderPoint", () => {
      var s;
      return this.props.linear && this.props.point && (this.props.value || this.props.indeterminate === "type1") ? [u("span", { class: (s = this.classes) == null ? void 0 : s.value.point })] : [];
    });
    /**
     * Props for the main element/ Свойства для главного элемента
     */
    t(this, "propsMain", l(() => {
      var i, r;
      const s = {
        ...this.getAttrs(),
        class: (i = this.classes) == null ? void 0 : i.value.main,
        style: (r = this.styles) == null ? void 0 : r.value,
        onAnimationend: this.item.onAnimation,
        ...n.role(this.item.role.value),
        ...n.label(this.item.label.value)
      };
      return this.props.circular && (s.viewBox = "0 0 48 48"), this.props.value ? {
        ...s,
        ...n.valueMinMax(
          this.props.value,
          0,
          this.props.max
        )
      } : s;
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
    const s = [
      ...this.renderCircle(),
      ...this.renderPoint()
    ];
    return u(
      this.item.tag.value,
      this.propsMain.value,
      s
    );
  }
}
export {
  P as Progress,
  M as ProgressDesign,
  $ as ProgressInclude,
  w as defaultsProgress
};

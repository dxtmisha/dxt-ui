var c = Object.defineProperty;
var d = (i, e, t) => e in i ? c(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var s = (i, e, t) => d(i, typeof e != "symbol" ? e + "" : e, t);
import { DesignConstructorAbstract as g } from "@dxtmisha/functional";
import { watch as l, ref as u, nextTick as f, h as r } from "vue";
class v {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, n) {
    s(this, "item", u(""));
    this.props = e, this.refs = t, this.emits = n, l(
      [t.value],
      () => this.set(e.value),
      { immediate: !0 }
    );
  }
  /**
   * Changes values.
   *
   * Изменяет значения.
   * @param value changeable value/ изменяемое значение
   */
  set(e) {
    return this.isDifference(e) ? (this.item.value = e != null ? e : "", !0) : !1;
  }
  /**
   * Event for changing the value.
   *
   * Событие для изменения значения.
   * @param event invoked event/ вызываемое событие
   */
  on(e) {
    var t;
    this.set(e.target.value) && ((t = this.emits) == null || t.call(this, "input", e));
  }
  /**
   * Checks if the value has actually been changed.
   *
   * Проверяет, было ли значение действительно изменено.
   * @param value changeable value/ изменяемое значение
   */
  isDifference(e) {
    return this.item.value !== e;
  }
}
class z {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param value object for working with values/ объект для работы со значениями
   */
  constructor(e, t, n) {
    s(this, "clone", u());
    /**
     * Changes the size of the field.
     *
     * Изменяет размер поля.
     */
    s(this, "updateSize", () => {
      if (this.isElements()) {
        const e = getComputedStyle(this.element.value), t = this.clone.value.style;
        t.paddingTop = e.paddingTop, t.paddingRight = e.paddingRight, t.paddingBottom = e.paddingBottom, t.paddingLeft = e.paddingLeft, t.width = `${this.element.value.offsetWidth}px`;
      }
    });
    /**
     * Event for updating size and value.
     *
     * Событие для обновления размера и значения.
     */
    s(this, "on", () => {
      this.updateSize(), this.updateValue();
    });
    /**
     * Event for changing the value.
     *
     * Событие для изменения значения.
     * @param event invoked event/ вызываемое событие
     */
    s(this, "onInput", (e) => {
      this.value.on(e), this.updateSize(), this.updateValue();
    });
    /**
     * Updates the height of the field.
     *
     * Обновляет высоту поля.
     */
    s(this, "updateHeight", () => {
      this.isElements() && (this.element.value.style.height = `${this.clone.value.offsetHeight}px`);
    });
    this.props = e, this.element = t, this.value = n, l(this.value.item, this.on), f().then(() => requestAnimationFrame(this.on));
  }
  /**
   * Checks if all elements are present.
   *
   * Проверяет, есть ли все элементы.
   */
  isElements() {
    return !!(this.props.autosize && this.element.value && getComputedStyle(this.element.value).getPropertyValue("--sys-field-sizing-none") === '"--YES--"' && this.clone.value);
  }
  /**
   * Updates the content of the clone element.
   *
   * Обновляет содержимое элемента клона.
   */
  updateValue() {
    this.isElements() && (this.clone.value.innerText = `${this.value.item.value} --`, requestAnimationFrame(this.updateHeight));
  }
}
class x {
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
  constructor(e, t, n, a, o, m, p, h) {
    s(this, "value");
    s(this, "resize");
    this.props = e, this.refs = t, this.element = n, this.classDesign = a, this.className = o, this.components = m, this.slots = p, this.emits = h, this.value = new v(e, t, h), this.resize = new z(e, n, this.value);
  }
}
const C = {
  autosize: !0
};
class S extends g {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, n, a) {
    super(
      t,
      n,
      a
    );
    s(this, "item");
    /**
     * Renders a textarea element.
     *
     * Рендерит элемент textarea.
     */
    s(this, "renderTextarea", () => {
      var t;
      return r("textarea", {
        ...this.getAttrs(),
        ...this.props.inputAttrs,
        ref: this.element,
        value: this.item.value.item.value,
        class: (t = this.classes) == null ? void 0 : t.value.main,
        onFocus: this.item.resize.on,
        onInput: this.item.resize.onInput
      });
    });
    /**
     * Renders a clone element.
     *
     * Рендерит элемент-клон.
     */
    s(this, "renderClone", () => {
      var t;
      return r("div", {
        ref: this.item.resize.clone,
        class: (t = this.classes) == null ? void 0 : t.value.clone
      });
    });
    this.item = new x(
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
      value: this.item.value.item
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {},
      // :classes [!] System label / Системная метка
      clone: this.getSubClass("clone")
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
    return [
      this.renderClone(),
      this.renderTextarea()
    ];
  }
}
export {
  x as TextareaAutosize,
  S as TextareaAutosizeDesign,
  C as defaultsTextareaAutosize
};

var f = Object.defineProperty;
var v = (s, e, t) => e in s ? f(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var i = (s, e, t) => v(s, typeof e != "symbol" ? e + "" : e, t);
import { DesignConstructorAbstract as z } from "@dxtmisha/functional";
import { watch as o, ref as m, nextTick as x, h as u } from "vue";
class T {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(e, t, n) {
    i(this, "item", m(""));
    this.props = e, this.refs = t, this.emits = n, o(
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
class A {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param value object for working with values/ объект для работы со значениями
   */
  constructor(e, t, n) {
    i(this, "clone", m());
    /**
     * Changes the size of the field.
     *
     * Изменяет размер поля.
     */
    i(this, "updateSize", () => {
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
    i(this, "on", () => {
      this.updateSize(), this.updateValue();
    });
    /**
     * Event for changing the value.
     *
     * Событие для изменения значения.
     * @param event invoked event/ вызываемое событие
     */
    i(this, "onInput", (e) => {
      this.value.on(e), this.updateSize(), this.updateValue();
    });
    /**
     * Updates the height of the field.
     *
     * Обновляет высоту поля.
     */
    i(this, "updateHeight", () => {
      this.isElements() && (this.element.value.style.height = `${this.clone.value.offsetHeight}px`);
    });
    this.props = e, this.element = t, this.value = n, o(this.value.item, this.on), x().then(() => requestAnimationFrame(this.on));
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
   * @param constructors.TextareaAutosizeResizeConstructor class for working with resize/ класс для работы с изменением размера
   * @param constructors.TextareaAutosizeValueConstructor class for working with value/ класс для работы со значением
   */
  constructor(e, t, n, a, h, p, d, r, l) {
    i(this, "value");
    i(this, "resize");
    this.props = e, this.refs = t, this.element = n, this.classDesign = a, this.className = h, this.components = p, this.slots = d, this.emits = r;
    const {
      TextareaAutosizeResizeConstructor: c = A,
      TextareaAutosizeValueConstructor: g = T
    } = l != null ? l : {};
    this.value = new g(e, t, r), this.resize = new c(e, n, this.value);
  }
}
const E = {
  autosize: !0
};
class V extends z {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, n, a, h = C) {
    super(
      t,
      n,
      a
    );
    i(this, "item");
    /**
     * Renders a textarea element.
     *
     * Рендерит элемент textarea.
     */
    i(this, "renderTextarea", () => {
      var t;
      return u("textarea", {
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
    i(this, "renderClone", () => {
      var t;
      return u("div", {
        ref: this.item.resize.clone,
        class: (t = this.classes) == null ? void 0 : t.value.clone
      });
    });
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
  C as TextareaAutosize,
  V as TextareaAutosizeDesign,
  E as defaultsTextareaAutosize
};

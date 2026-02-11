var b = Object.defineProperty;
var x = (s, i, t) => i in s ? b(s, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[i] = t;
var e = (s, i, t) => x(s, typeof i != "symbol" ? i + "" : i, t);
import { computed as r, h as w } from "vue";
import { toBinds as h, DesignConstructorAbstract as A } from "@dxtmisha/functional";
import { f as z, F as V, a as E, b as D, c as y, d as B, e as S } from "./FieldEventInclude-DBRqmzpF.js";
import { F as T } from "./FieldInclude-BKoBWZdj.js";
class k {
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
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   */
  constructor(i, t, n, a, l, d, u, p, o) {
    e(this, "attributes");
    e(this, "elementItem");
    e(this, "change");
    e(this, "value");
    e(this, "code");
    e(this, "validation");
    e(this, "event");
    e(this, "field");
    /**
     * Returns bindings for the textarea element.
     *
     * Возвращает привязки для элемента textarea.
     */
    e(this, "binds", r(() => ({
      ref: this.element,
      autosize: this.props.autosize,
      value: this.value.item.value,
      onBlur: this.event.onBlur,
      onInput: this.event.onInput,
      onChange: this.event.onChange
    })));
    /**
     * Returns properties for the input element.
     *
     * Возвращает свойства для элемента ввода.
     */
    e(this, "bindsInput", r(() => h(
      this.attributes.listForInput.value,
      this.props.textareaAttrs,
      {
        cols: this.props.cols,
        rows: this.props.rows,
        fieldSizing: this.props.fieldSizing
      }
    )));
    this.props = i, this.refs = t, this.element = n, this.classDesign = a, this.className = l, this.components = d, this.slots = u, this.emits = p;
    const {
      FieldAttributesIncludeConstructor: c = V,
      FieldChangeIncludeConstructor: m = E,
      FieldCodeIncludeConstructor: v = D,
      FieldElementIncludeConstructor: I = y,
      FieldEventIncludeConstructor: g = B,
      FieldIncludeConstructor: F = T,
      FieldValidationIncludeConstructor: f = S,
      FieldValueIncludeConstructor: C = z
    } = o != null ? o : {};
    this.change = new m(this.props), this.attributes = new c(this.props), this.elementItem = new I(
      this.props,
      this.element
    ), this.value = new C(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new v(this.props), this.validation = new f(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new g(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new F(
      this.props,
      this.value,
      this.components,
      this.event,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      r(() => ({
        maxlength: this.props.maxlength
      }))
    );
  }
}
const q = {
  cancel: "none",
  autosize: !0
};
class G extends A {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(t, n, a, l = k) {
    super(
      t,
      n,
      a
    );
    e(this, "item");
    /**
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    e(this, "renderInput", (t) => {
      const n = h(
        t.binds,
        this.item.binds.value
      );
      return this.components.is("textareaAutosize") ? [this.components.renderOne("textareaAutosize", {
        ...n,
        inputAttrs: this.item.bindsInput.value
      })] : [w("textarea", {
        ...n,
        ...this.item.bindsInput.value
      })];
    });
    this.item = new l(
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
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: {}
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
    var t;
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: (t = this.classes) == null ? void 0 : t.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
export {
  k as Textarea,
  G as TextareaDesign,
  q as defaultsTextarea
};

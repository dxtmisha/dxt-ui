var C = Object.defineProperty;
var x = (s, i, e) => i in s ? C(s, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[i] = e;
var t = (s, i, e) => x(s, typeof i != "symbol" ? i + "" : i, e);
import { computed as b, h as w } from "vue";
import { DesignConstructorAbstract as A, toBinds as r } from "@dxtmisha/functional";
import { f as V, F as z, a as E, b as D, c as y, d as B, e as T } from "./FieldEventInclude-DBRqmzpF.js";
import { F as k } from "./FieldInclude-BKoBWZdj.js";
class M {
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
  constructor(i, e, n, a, o, h, d, u, l) {
    t(this, "attributes");
    t(this, "elementItem");
    t(this, "change");
    t(this, "value");
    t(this, "code");
    t(this, "validation");
    t(this, "event");
    t(this, "field");
    this.props = i, this.refs = e, this.element = n, this.classDesign = a, this.className = o, this.components = h, this.slots = d, this.emits = u;
    const {
      FieldAttributesIncludeConstructor: c = z,
      FieldChangeIncludeConstructor: p = E,
      FieldCodeIncludeConstructor: m = D,
      FieldElementIncludeConstructor: v = y,
      FieldEventIncludeConstructor: I = B,
      FieldIncludeConstructor: g = k,
      FieldValidationIncludeConstructor: F = T,
      FieldValueIncludeConstructor: f = V
    } = l != null ? l : {};
    this.change = new p(this.props), this.attributes = new c(this.props), this.elementItem = new v(
      this.props,
      this.element
    ), this.value = new f(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new m(this.props), this.validation = new F(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new I(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new g(
      this.props,
      this.value,
      this.components,
      this.event,
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      b(() => ({
        maxlength: this.props.maxlength
      }))
    );
  }
}
const q = {
  cancel: !1,
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
  constructor(e, n, a, o = M) {
    super(
      e,
      n,
      a
    );
    t(this, "item");
    /**
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    t(this, "renderInput", (e) => {
      const n = r(
        e.binds,
        {
          ref: this.element,
          autosize: this.props.autosize,
          value: this.item.value.item.value,
          onBlur: this.item.event.onBlur,
          onInput: this.item.event.onInput,
          onChange: this.item.event.onChange
        }
      ), a = r(
        this.item.attributes.listForInput.value,
        this.props.textareaAttrs
      );
      return console.log("props", n, a), this.components.is("textareaAutosize") ? [this.components.renderOne("textareaAutosize", {
        ...n,
        inputAttrs: a
      })] : [w("textarea", {
        ...n,
        ...a
      })];
    });
    this.item = new o(
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
    var e;
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: (e = this.classes) == null ? void 0 : e.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
export {
  M as Textarea,
  G as TextareaDesign,
  q as defaultsTextarea
};

var P = Object.defineProperty;
var S = (n, i, e) => i in n ? P(n, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[i] = e;
var t = (n, i, e) => S(n, typeof i != "symbol" ? i + "" : i, e);
import { computed as o, watch as H, h as O } from "vue";
import { toBind as m, getRef as v, getBind as R, DesignConstructorAbstract as L, toBinds as I } from "@dxtmisha/functional";
import { F as j, a as q, b as z, c as G, d as J, e as K, f as Q } from "./FieldEventInclude-DBRqmzpF.js";
import { F as U, a as W, b as X, c as Y, d as Z, e as _ } from "./FieldMatchInclude-GgyucDC_.js";
import { T as $ } from "./TextInclude--GERRCGj.js";
import { F as tt } from "./FieldInclude-BKoBWZdj.js";
class et {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   * @param text object for working with text/ объект для работы с текстом
   */
  constructor(i, e, s) {
    t(this, "visible", !1);
    /** Checks if the type is a password/ Проверяет, является ли тип паролем. */
    t(this, "is", o(() => this.props.type === "password"));
    /** Returns the icon value/ Возвращает значение иконки */
    t(this, "icon", o(() => {
      if (this.is.value)
        return {
          active: this.visibility.item.value,
          icon: this.props.iconVisibilityOff,
          iconActive: this.props.iconVisibility,
          dynamic: !0,
          ariaLabel: this.visibility.item.value ? this.text.hide.value : this.text.show.value
        };
    }));
    this.props = i, this.visibility = e, this.text = s;
  }
  /**
   * Toggle value.
   *
   * Переключение значения.
   */
  toggle() {
    this.is.value && this.visibility.toggle();
  }
}
class it {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param className class name/ название класса
   * @param value object for working with values/ объект для работы со значениями
   * @param valueDefault default value/ значение по умолчанию
   * @param components object for working with components/ объект для работы с компонентами
   * @param type object for working with the input type/ объект для работы с типом ввода
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(i, e, s, r, l, h, u, p) {
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    t(this, "is", o(() => {
      var e;
      const i = (e = this.type) == null ? void 0 : e.get();
      return this.props.maskNone !== !0 && !!(this.props.mask || i && [
        "number",
        "number-format",
        "currency",
        "datetime",
        "date",
        "year-month",
        "time",
        "hour-minute"
      ].indexOf(i) !== -1);
    }));
    /**
     * Returns the basic properties for working with a mask.
     *
     * Возвращает базовые свойства для работы с маской.
     */
    t(this, "bindsStatic", o(() => {
      var e, s, r;
      const i = m(
        (e = v(this.extra)) != null ? e : {},
        (s = this.props.maskAttrs) != null ? s : {}
      );
      return {
        name: this.props.name,
        valueDefault: v(this.valueDefault),
        currency: this.props.currency,
        currencyHide: this.props.currencyHide,
        fraction: this.props.fraction,
        type: (r = this.type) == null ? void 0 : r.get(),
        visible: this.props.maskVisible,
        ...R(this.props.mask, i, "mask")
      };
    }));
    /**
     * Returns all properties for working with the mask.
     *
     * Возвращает все свойства для работы с маской.
     */
    t(this, "binds", o(() => {
      var i;
      return {
        ...this.bindsStatic.value,
        value: (i = this.props.modelValue) != null ? i : this.props.value
      };
    }));
    /**
     * Returns the rendered mask component.
     *
     * Возвращает отрендеренный компонент маски.
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    t(this, "render", (i) => this.components ? this.components.render(
      "mask",
      {
        ...m(
          i != null ? i : {},
          this.binds.value
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = i, this.className = e, this.value = s, this.valueDefault = r, this.components = l, this.type = h, this.extra = u, this.index = p, this.value && H(this.is, (a) => {
      a || this.value.setFull(!0);
    });
  }
  /**
   * Checks if the mask is active.
   *
   * Проверяет, активна ли маска.
   */
  isActive() {
    return this.is.value;
  }
}
class st {
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
   * @param constructors.FieldArrowIncludeConstructor class for working with field arrow/ класс для работы со стрелкой поля
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param constructors.FieldInputModeIncludeConstructor class for working with field input mode/ класс для работы с режимом ввода поля
   * @param constructors.FieldMatchIncludeConstructor class for working with field match/ класс для работы с совпадением поля
   * @param constructors.FieldPatternIncludeConstructor class for working with field pattern/ класс для работы с шаблоном поля
   * @param constructors.FieldTypeIncludeConstructor class for working with field type/ класс для работы с типом поля
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.FieldVisibilityIncludeConstructor class for working with field visibility/ класс для работы с видимостью поля
   * @param constructors.InputPasswordConstructor class for working with input password/ класс для работы с паролем ввода
   * @param constructors.MaskIncludeConstructor class for working with mask/ класс для работы с маской
   * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(i, e, s, r, l, h, u, p, a) {
    t(this, "text");
    t(this, "visibility");
    t(this, "type");
    t(this, "pattern");
    t(this, "inputMode");
    t(this, "attributes");
    t(this, "elementItem");
    t(this, "change");
    t(this, "value");
    t(this, "arrow");
    t(this, "password");
    t(this, "match");
    t(this, "code");
    t(this, "validation");
    t(this, "event");
    t(this, "field");
    t(this, "mask");
    this.props = i, this.refs = e, this.element = s, this.classDesign = r, this.className = l, this.components = h, this.slots = u, this.emits = p;
    const {
      FieldArrowIncludeConstructor: y = U,
      FieldAttributesIncludeConstructor: f = j,
      FieldChangeIncludeConstructor: b = q,
      FieldCodeIncludeConstructor: g = z,
      FieldElementIncludeConstructor: F = G,
      FieldEventIncludeConstructor: w = J,
      FieldIncludeConstructor: C = tt,
      FieldInputModeIncludeConstructor: x = W,
      FieldMatchIncludeConstructor: k = X,
      FieldPatternIncludeConstructor: M = Y,
      FieldTypeIncludeConstructor: V = Z,
      FieldValidationIncludeConstructor: A = K,
      FieldValueIncludeConstructor: B = Q,
      FieldVisibilityIncludeConstructor: D = _,
      InputPasswordConstructor: T = et,
      MaskIncludeConstructor: N = it,
      TextIncludeConstructor: E = $
    } = a != null ? a : {};
    this.text = new E(this.props), this.change = new b(this.props), this.visibility = new D(), this.type = new V(this.props, this.visibility), this.pattern = new M(this.props, this.type), this.inputMode = new x(this.props, this.type), this.attributes = new f(
      this.props,
      this.type,
      this.pattern,
      this.inputMode
    ), this.elementItem = new F(
      this.props,
      this.element
    ), this.value = new B(
      this.props,
      this.refs,
      this.elementItem
    ), this.arrow = new y(this.props, this.value, this.type), this.password = new T(this.props, this.visibility, this.text), this.match = new k(
      this.props,
      this.elementItem,
      this.value
    ), this.code = new g(this.props), this.validation = new A(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code,
      this.match
    ), this.event = new w(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new C(
      this.props,
      this.value,
      this.components,
      this.event,
      this.arrow,
      void 0,
      () => this.password.toggle(),
      void 0,
      void 0,
      o(() => {
        var d, c;
        return {
          iconTrailing: (d = this.password.icon.value) != null ? d : this.props.iconTrailing,
          maxlength: (c = this.props.maxlength) != null ? c : this.props.max
        };
      })
    ), this.mask = new N(
      this.props,
      this.className,
      this.value,
      "",
      this.components,
      this.type
    );
  }
}
const pt = {
  type: "text",
  autocomplete: "off",
  arrow: "auto",
  maskVisible: !0
};
class dt extends L {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, s, r, l = st) {
    super(
      e,
      s,
      r
    );
    t(this, "item");
    /**
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    t(this, "renderInput", (e) => this.item.mask.isActive() ? this.renderMask(e) : [O(
      "input",
      I(
        this.item.attributes.listForInput.value,
        e.binds,
        {
          ref: this.element,
          value: this.item.value.item.value,
          onBlur: this.item.event.onBlur,
          onInput: this.item.event.onInput,
          onChange: this.item.event.onChange
        }
      )
    )]);
    /**
     * Rendering mask element.
     *
     * Рендеринг элемента маски.
     * @param input data for the input element/ данные для элемента ввода
     */
    t(this, "renderMask", (e) => this.item.mask.render({
      ref: this.element,
      class: e.className,
      align: this.props.align,
      inputAttrs: I(
        this.item.attributes.listForInput.value,
        e.binds
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    }));
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
  st as Input,
  dt as InputDesign,
  pt as defaultsInput
};

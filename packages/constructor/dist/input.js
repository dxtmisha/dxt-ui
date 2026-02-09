var E = Object.defineProperty;
var S = (e, s, t) => s in e ? E(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var i = (e, s, t) => S(e, typeof s != "symbol" ? s + "" : s, t);
import { computed as a, watch as T, h as H } from "vue";
import { toBind as m, getRef as v, getBind as O, DesignConstructorAbstract as P, toBinds as f } from "@dxtmisha/functional";
import { a as R, F as j, c as q, f as z, b as G, e as J, d as K } from "./FieldEventInclude-zg02dtQi.js";
import { e as L, d as Q, c as U, a as W, F as X, b as Y } from "./FieldMatchInclude-Vl2gJUaM.js";
import { F as Z } from "./FieldInclude-c6DSD0-y.js";
class _ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   */
  constructor(s, t) {
    i(this, "visible", !1);
    /** Checks if the type is a password/ Проверяет, является ли тип паролем. */
    i(this, "is", a(() => this.props.type === "password"));
    /** Returns the icon value/ Возвращает значение иконки */
    i(this, "icon", a(() => {
      if (this.is.value)
        return {
          active: this.visibility.item.value,
          icon: this.props.iconVisibilityOff,
          iconActive: this.props.iconVisibility,
          dynamic: !0
        };
    }));
    this.props = s, this.visibility = t;
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
class $ {
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
  constructor(s, t, n, r, h, o, l, p) {
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    i(this, "is", a(() => {
      var t;
      const s = (t = this.type) == null ? void 0 : t.get();
      return this.props.maskNone !== !0 && !!(this.props.mask || s && [
        "number",
        "number-format",
        "currency",
        "datetime",
        "date",
        "year-month",
        "time",
        "hour-minute"
      ].indexOf(s) !== -1);
    }));
    /**
     * Returns the basic properties for working with a mask.
     *
     * Возвращает базовые свойства для работы с маской.
     */
    i(this, "bindsStatic", a(() => {
      var t, n, r;
      const s = m(
        (t = v(this.extra)) != null ? t : {},
        (n = this.props.maskAttrs) != null ? n : {}
      );
      return {
        name: this.props.name,
        valueDefault: v(this.valueDefault),
        currency: this.props.currency,
        currencyHide: this.props.currencyHide,
        fraction: this.props.fraction,
        type: (r = this.type) == null ? void 0 : r.get(),
        visible: this.props.maskVisible,
        ...O(this.props.mask, s, "mask")
      };
    }));
    /**
     * Returns all properties for working with the mask.
     *
     * Возвращает все свойства для работы с маской.
     */
    i(this, "binds", a(() => {
      var s;
      return {
        ...this.bindsStatic.value,
        value: (s = this.props.modelValue) != null ? s : this.props.value
      };
    }));
    /**
     * Returns the rendered mask component.
     *
     * Возвращает отрендеренный компонент маски.
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    i(this, "render", (s) => this.components ? this.components.render(
      "mask",
      {
        ...m(
          s != null ? s : {},
          this.binds.value
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = s, this.className = t, this.value = n, this.valueDefault = r, this.components = h, this.type = o, this.extra = l, this.index = p, this.value && T(this.is, (u) => {
      u || this.value.setFull(!0);
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
class tt {
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
   * @param FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param FieldVisibilityIncludeConstructor class for working with field visibility/ класс для работы с видимостью поля
   * @param FieldTypeIncludeConstructor class for working with field type/ класс для работы с типом поля
   * @param FieldPatternIncludeConstructor class for working with field pattern/ класс для работы с шаблоном поля
   * @param FieldInputModeIncludeConstructor class for working with field input mode/ класс для работы с режимом ввода поля
   * @param FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param FieldArrowIncludeConstructor class for working with field arrow/ класс для работы со стрелкой поля
   * @param InputPasswordConstructor class for working with input password/ класс для работы с паролем ввода
   * @param FieldMatchIncludeConstructor class for working with field match/ класс для работы с совпадением поля
   * @param FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param MaskIncludeConstructor class for working with mask/ класс для работы с маской
   */
  constructor(s, t, n, r, h, o, l, p, u = R, y = L, g = Q, I = U, b = W, w = j, F = q, k = z, x = X, M = _, V = Y, A = G, B = J, D = K, C = Z, N = $) {
    i(this, "visibility");
    i(this, "type");
    i(this, "pattern");
    i(this, "inputMode");
    i(this, "attributes");
    i(this, "elementItem");
    i(this, "change");
    i(this, "value");
    i(this, "arrow");
    i(this, "password");
    i(this, "match");
    i(this, "code");
    i(this, "validation");
    i(this, "event");
    i(this, "field");
    i(this, "mask");
    this.props = s, this.refs = t, this.element = n, this.classDesign = r, this.className = h, this.components = o, this.slots = l, this.emits = p, this.change = new u(this.props), this.visibility = new y(), this.type = new g(this.props, this.visibility), this.pattern = new I(this.props, this.type), this.inputMode = new b(this.props, this.type), this.attributes = new w(
      this.props,
      this.type,
      this.pattern,
      this.inputMode
    ), this.elementItem = new F(
      this.props,
      this.element
    ), this.value = new k(
      this.props,
      this.refs,
      this.elementItem
    ), this.arrow = new x(this.props, this.value, this.type), this.password = new M(this.props, this.visibility), this.match = new V(
      this.props,
      this.elementItem,
      this.value
    ), this.code = new A(this.props), this.validation = new B(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code,
      this.match
    ), this.event = new D(
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
      a(() => {
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
const ht = {
  type: "text",
  autocomplete: "off",
  arrow: "auto",
  maskVisible: !0
};
class ot extends P {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, n, r, h = tt) {
    super(
      t,
      n,
      r
    );
    i(this, "item");
    /**
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    i(this, "renderInput", (t) => this.item.mask.isActive() ? this.renderMask(t) : [H(
      "input",
      f(
        this.item.attributes.listForInput.value,
        t.binds,
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
    i(this, "renderMask", (t) => this.item.mask.render({
      ref: this.element,
      class: t.className,
      align: this.props.align,
      inputAttrs: f(
        this.item.attributes.listForInput.value,
        t.binds
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
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
  tt as Input,
  ot as InputDesign,
  ht as defaultsInput
};

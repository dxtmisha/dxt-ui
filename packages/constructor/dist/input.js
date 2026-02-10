var E = Object.defineProperty;
var S = (n, s, i) => s in n ? E(n, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[s] = i;
var t = (n, s, i) => S(n, typeof s != "symbol" ? s + "" : s, i);
import { computed as a, watch as H, h as O } from "vue";
import { toBind as c, getRef as v, getBind as P, DesignConstructorAbstract as R, toBinds as f } from "@dxtmisha/functional";
import { a as L, F as j, c as q, f as z, b as G, e as J, d as K } from "./FieldEventInclude-DBRqmzpF.js";
import { e as Q, d as U, c as W, a as X, F as Y, b as Z } from "./FieldMatchInclude-GgyucDC_.js";
import { T as _ } from "./TextInclude--GERRCGj.js";
import { F as $ } from "./FieldInclude-Rec9lh44.js";
class tt {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param visibility object for working with visualization/ объект для работы с визуализацией
   * @param text object for working with text/ объект для работы с текстом
   */
  constructor(s, i, e) {
    t(this, "visible", !1);
    /** Checks if the type is a password/ Проверяет, является ли тип паролем. */
    t(this, "is", a(() => this.props.type === "password"));
    /** Returns the icon value/ Возвращает значение иконки */
    t(this, "icon", a(() => {
      if (this.is.value)
        return {
          active: this.visibility.item.value,
          icon: this.props.iconVisibilityOff,
          iconActive: this.props.iconVisibility,
          dynamic: !0,
          ariaLabel: this.visibility.item.value ? this.text.hide.value : this.text.show.value
        };
    }));
    this.props = s, this.visibility = i, this.text = e;
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
  constructor(s, i, e, h, r, o, l, p) {
    /**
     * Checks if the mask is active.
     *
     * Проверяет, активна ли маска.
     */
    t(this, "is", a(() => {
      var i;
      const s = (i = this.type) == null ? void 0 : i.get();
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
    t(this, "bindsStatic", a(() => {
      var i, e, h;
      const s = c(
        (i = v(this.extra)) != null ? i : {},
        (e = this.props.maskAttrs) != null ? e : {}
      );
      return {
        name: this.props.name,
        valueDefault: v(this.valueDefault),
        currency: this.props.currency,
        currencyHide: this.props.currencyHide,
        fraction: this.props.fraction,
        type: (h = this.type) == null ? void 0 : h.get(),
        visible: this.props.maskVisible,
        ...P(this.props.mask, s, "mask")
      };
    }));
    /**
     * Returns all properties for working with the mask.
     *
     * Возвращает все свойства для работы с маской.
     */
    t(this, "binds", a(() => {
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
    t(this, "render", (s) => this.components ? this.components.render(
      "mask",
      {
        ...c(
          s != null ? s : {},
          this.binds.value
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = s, this.className = i, this.value = e, this.valueDefault = h, this.components = r, this.type = o, this.extra = l, this.index = p, this.value && H(this.is, (u) => {
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
   * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
   */
  constructor(s, i, e, h, r, o, l, p, u = L, y = Q, g = U, b = W, I = X, w = j, F = q, x = z, k = Y, M = tt, V = Z, A = G, B = J, D = K, C = $, N = it, T = _) {
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
    this.props = s, this.refs = i, this.element = e, this.classDesign = h, this.className = r, this.components = o, this.slots = l, this.emits = p, this.text = new T(this.props), this.change = new u(this.props), this.visibility = new y(), this.type = new g(this.props, this.visibility), this.pattern = new b(this.props, this.type), this.inputMode = new I(this.props, this.type), this.attributes = new w(
      this.props,
      this.type,
      this.pattern,
      this.inputMode
    ), this.elementItem = new F(
      this.props,
      this.element
    ), this.value = new x(
      this.props,
      this.refs,
      this.elementItem
    ), this.arrow = new k(this.props, this.value, this.type), this.password = new M(this.props, this.visibility, this.text), this.match = new V(
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
        var d, m;
        return {
          iconTrailing: (d = this.password.icon.value) != null ? d : this.props.iconTrailing,
          maxlength: (m = this.props.maxlength) != null ? m : this.props.max
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
class ut extends R {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(i, e, h, r = st) {
    super(
      i,
      e,
      h
    );
    t(this, "item");
    /**
     * Rendering the input element.
     *
     * Рендер элемент input.
     * @param input data for the input element/ данные для элемента ввода
     */
    t(this, "renderInput", (i) => this.item.mask.isActive() ? this.renderMask(i) : [O(
      "input",
      f(
        this.item.attributes.listForInput.value,
        i.binds,
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
    t(this, "renderMask", (i) => this.item.mask.render({
      ref: this.element,
      class: i.className,
      align: this.props.align,
      inputAttrs: f(
        this.item.attributes.listForInput.value,
        i.binds
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    }));
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
    var i;
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: (i = this.classes) == null ? void 0 : i.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
export {
  st as Input,
  ut as InputDesign,
  pt as defaultsInput
};

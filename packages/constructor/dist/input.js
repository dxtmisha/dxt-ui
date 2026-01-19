var f = Object.defineProperty;
var y = (e, s, t) => s in e ? f(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var i = (e, s, t) => y(e, typeof s != "symbol" ? s + "" : s, t);
import { computed as a, watch as g, h as I } from "vue";
import { toBind as c, getRef as m, getBind as b, DesignConstructorAbstract as w, toBinds as v } from "@dxtmisha/functional";
import { a as F, F as k, c as x, f as M, b as V, e as A, d as B } from "./FieldEventInclude-zg02dtQi.js";
import { e as D, d as C, c as N, a as E, F as S, b as T } from "./FieldMatchInclude-Vl2gJUaM.js";
import { F as H } from "./FieldInclude-c6DSD0-y.js";
class O {
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
class P {
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
  constructor(s, t, n, r, o, l, p, u) {
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
      const s = c(
        (t = m(this.extra)) != null ? t : {},
        (n = this.props.maskAttrs) != null ? n : {}
      );
      return {
        name: this.props.name,
        valueDefault: m(this.valueDefault),
        currency: this.props.currency,
        currencyHide: this.props.currencyHide,
        fraction: this.props.fraction,
        type: (r = this.type) == null ? void 0 : r.get(),
        visible: this.props.maskVisible,
        ...b(this.props.mask, s, "mask")
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
        ...c(
          s != null ? s : {},
          this.binds.value
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = s, this.className = t, this.value = n, this.valueDefault = r, this.components = o, this.type = l, this.extra = p, this.index = u, this.value && g(this.is, (h) => {
      h || this.value.setFull(!0);
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
class R {
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
  constructor(s, t, n, r, o, l, p, u) {
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
    this.props = s, this.refs = t, this.element = n, this.classDesign = r, this.className = o, this.components = l, this.slots = p, this.emits = u, this.change = new F(this.props), this.visibility = new D(), this.type = new C(this.props, this.visibility), this.pattern = new N(this.props, this.type), this.inputMode = new E(this.props, this.type), this.attributes = new k(
      this.props,
      this.type,
      this.pattern,
      this.inputMode
    ), this.elementItem = new x(
      this.props,
      this.element
    ), this.value = new M(
      this.props,
      this.refs,
      this.elementItem
    ), this.arrow = new S(this.props, this.value, this.type), this.password = new O(this.props, this.visibility), this.match = new T(
      this.props,
      this.elementItem,
      this.value
    ), this.code = new V(this.props), this.validation = new A(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code,
      this.match
    ), this.event = new B(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new H(
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
        var h, d;
        return {
          iconTrailing: (h = this.password.icon.value) != null ? h : this.props.iconTrailing,
          maxlength: (d = this.props.maxlength) != null ? d : this.props.max
        };
      })
    ), this.mask = new P(
      this.props,
      this.className,
      this.value,
      "",
      this.components,
      this.type
    );
  }
}
const L = {
  type: "text",
  autocomplete: "off",
  arrow: "auto",
  maskVisible: !0
};
class Q extends w {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(t, n, r) {
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
    i(this, "renderInput", (t) => this.item.mask.isActive() ? this.renderMask(t) : [I(
      "input",
      v(
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
      inputAttrs: v(
        this.item.attributes.listForInput.value,
        t.binds
      ),
      onBlur: this.item.event.onBlur,
      onInput: this.item.event.onInput
    }));
    this.item = new R(
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
  R as Input,
  Q as InputDesign,
  L as defaultsInput
};

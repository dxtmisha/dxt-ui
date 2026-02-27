import { ref as b, computed as a, h as g, defineComponent as D, openBlock as V, createBlock as T, unref as k, mergeDefaults as O } from "vue";
import { toBinds as m, getRef as E, toBind as L, DesignConstructorAbstract as $, executeFunction as N, isFilled as j } from "@dxtmisha/functional";
import { D as P, O as q, T as z, V as H, N as U, H as K, w as R } from "./FieldEventInclude-h5Fg7306-DMkm_Aee.js";
import { y as W, D as G } from "./index-COZJq3Pe.js";
import { l as y } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { _ as J } from "./D1Menu.vue_vue_type_script_setup_true_lang-DX3t_KY2.js";
import { _ as Q } from "./D1SelectValue.vue_vue_type_script_setup_true_lang-CHv5qTBz.js";
import { _ as X } from "./D1Input.vue_vue_type_script_setup_true_lang-CrVy8l7g.js";
var Y = Object.defineProperty, Z = (r, t, s) => t in r ? Y(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s, p = (r, t, s) => Z(r, typeof t != "symbol" ? t + "" : t, s);
class ee {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, u, h, n) {
    p(this, "element", b()), p(this, "is", a(() => !!(!this.props.disabled && this.components))), p(this, "isOpen", a(() => {
      var e;
      return !!((e = this.element.value) != null && e.open);
    })), p(this, "binds", a(() => {
      const e = m(
        E(this.extra),
        this.props.menuAttrs,
        {
          class: `${this.className}__menu`
        }
      );
      return {
        disabled: this.props.disabled,
        ...e
      };
    })), p(this, "expose", {
      open: a(() => {
        var e;
        return !!((e = this.element.value) != null && e.open);
      }),
      setOpen: async (e) => {
        var l;
        return (l = this.element.value) == null ? void 0 : l.setOpen(e);
      },
      toOpen: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toOpen();
      },
      toClose: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toClose();
      },
      toggle: async () => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.toggle();
      },
      menuElement: this.element
    }), p(this, "render", (e, l) => this.components ? this.components.render(
      "menu",
      {
        ref: this.element,
        ...L(
          l != null ? l : {},
          this.binds.value
        )
      },
      e,
      this.index
    ) : []), this.props = t, this.className = s, this.components = u, this.extra = h, this.index = n;
  }
  /**
   * Get the menu element
   *
   * Получить элемент меню
   */
  getElement() {
    return this.element.value;
  }
}
var te = Object.defineProperty, ie = (r, t, s) => t in r ? te(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s, i = (r, t, s) => ie(r, typeof t != "symbol" ? t + "" : t, s);
class se {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for working with values/ объект для работы со значениями
   * @param event object for working with events/ объект для работы с событиями
   */
  constructor(t, s, u, h) {
    i(this, "isEdit", a(
      () => !!(this.props.editValue && !this.props.multiple)
    )), i(this, "binds", a(() => m(
      this.attributes.listForInput.value,
      {
        name: this.props.name,
        type: "text",
        required: this.props.required,
        readonly: !this.isEdit.value,
        placeholder: this.props.placeholder,
        "data-menu-control": "1",
        onInput: this.isEdit.value ? this.event.onInput : this.event.onSelect
        // 'onKeydown': this.onKeydown
      }
    ))), i(this, "onKeydown", (n) => {
      n.target.click(), n.preventDefault();
    }), this.props = t, this.attributes = s, this.value = u, this.event = h;
  }
}
class ne {
  constructor() {
    i(this, "value", b("")), i(this, "onInput", (t) => {
      var s;
      this.value.value = String((s = t.value) != null ? s : "");
    });
  }
  /**
   * Get current filter value.
   *
   * Получить текущее значение фильтра.
   */
  get() {
    return this.value.value;
  }
  /**
   * Set filter value.
   *
   * Установить значение фильтра.
   * @param value filter string/ строка фильтра
   */
  set(t) {
    this.value.value = t;
  }
}
class oe {
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
   * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
   * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
   * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
   * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
   * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
   * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
   * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
   * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
   * @param constructors.MenuIncludeConstructor class for working with menu/ класс для работы с меню
   * @param constructors.SelectFilterConstructor class for working with select filter/ класс для работы с фильтром выбора
   * @param constructors.SelectInputConstructor class for working with select input/ класс для работы с вводом выбора
   */
  constructor(t, s, u, h, n, e, l, c, d) {
    i(this, "attributes"), i(this, "elementItem"), i(this, "change"), i(this, "value"), i(this, "code"), i(this, "validation"), i(this, "event"), i(this, "field"), i(this, "menu"), i(this, "input"), i(this, "filter"), i(this, "isSlot", a(() => {
      var o, f;
      return !!((o = this.slots) != null && o.contextTop || (f = this.slots) != null && f.contextBottom);
    })), i(this, "iconTrailing", a(() => {
      var o;
      if (!this.props.disabled && !this.isArrow())
        return (o = this.props.iconTrailing) != null ? o : this.props.iconArrowDown;
    })), i(this, "onClick", (o) => {
      o && this.value.set(o);
    }), this.props = t, this.refs = s, this.element = u, this.classDesign = h, this.className = n, this.components = e, this.slots = l, this.emits = c;
    const {
      FieldAttributesIncludeConstructor: v = P,
      FieldChangeIncludeConstructor: w = q,
      FieldCodeIncludeConstructor: x = z,
      FieldElementIncludeConstructor: C = H,
      FieldEventIncludeConstructor: S = U,
      FieldIncludeConstructor: B = W,
      FieldValidationIncludeConstructor: I = K,
      FieldValueIncludeConstructor: A = R,
      MenuIncludeConstructor: M = ee,
      SelectFilterConstructor: F = ne,
      SelectInputConstructor: _ = se
    } = d != null ? d : {};
    this.attributes = new v(this.props), this.change = new w(this.props), this.elementItem = new C(
      this.props,
      this.element
    ), this.value = new A(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new x(this.props), this.validation = new I(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new S(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new B(
      this.props,
      this.value,
      this.components,
      this.event,
      void 0,
      void 0,
      () => {
        var o;
        return (o = this.menu.getElement()) == null ? void 0 : o.toggle();
      },
      () => {
        var o;
        return (o = this.menu.getElement()) == null ? void 0 : o.next();
      },
      () => {
        var o;
        return (o = this.menu.getElement()) == null ? void 0 : o.previous();
      },
      a(() => {
        var o;
        return {
          iconTrailing: this.iconTrailing.value,
          maxlength: this.props.max,
          cancel: (o = this.props.cancel) != null ? o : this.props.multiple ? "auto" : "none"
        };
      })
    ), this.menu = new M(
      this.props,
      this.className,
      this.components,
      a(() => ({
        windowAttrs: {
          hide: !j(this.props.option) && !this.isSlot.value,
          widthMatch: !0
        },
        tag: "span",
        barsLabel: this.props.label,
        barsDescription: this.props.helperMessage,
        disabled: this.props.disabled || this.props.readonly,
        autoClose: !this.props.multiple,
        list: N(this.props.option),
        max: this.props.max,
        filterMode: this.props.filterMode,
        hideList: this.props.hideList,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: this.isArrow() ? this.event.onValue : void 0,
        isSelectedByValue: !0,
        ariaMultiselectable: this.props.multiple
      }))
    ), this.input = new _(this.props, this.attributes, this.value, this.event), this.filter = new F();
  }
  /**
   * Checks whether arrow is set.
   *
   * Проверяет, установлена ли стрелка.
   */
  isArrow() {
    return !!this.props.arrow && this.props.arrow !== "none";
  }
}
const re = {};
class le extends $ {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, s, u, h = oe) {
    super(
      t,
      s,
      u
    ), i(this, "item"), i(this, "renderMenu", (n) => this.item.menu.render(
      {
        control: (e) => this.renderMenuControl(n, e),
        title: (e) => this.renderTitle(e),
        footer: (e) => this.initSlot("footer", void 0, e),
        contextTop: (e) => this.initSlot("contextTop", void 0, e),
        contextBottom: (e) => this.initSlot("contextBottom", void 0, e)
      },
      {
        selected: this.item.value.item.value,
        highlight: this.item.filter.get()
      }
    )), i(this, "renderMenuControl", (n, e) => {
      const l = [];
      return this.item.input.isEdit.value || l.push(this.renderMenuControlValue(n, e)), l.push(
        this.renderMenuControlInput(n, e)
      ), l;
    }), i(this, "renderMenuControlInput", (n, e) => {
      const l = this.item.input.isEdit.value, c = l ? n.className : n.classForFocus, d = {};
      return g(
        "input",
        m(
          this.item.input.binds.value,
          e.binds,
          {
            ref: this.element,
            id: n.id,
            value: this.item.value.get(),
            class: [
              e.classesWindow.controlOpenOnly,
              c
            ],
            ...y.role("combobox")
          },
          l ? void 0 : d
        )
      );
    }), i(this, "renderMenuControlValue", (n, e) => this.components.renderOne(
      "selectValue",
      m(
        e.binds,
        {
          class: n.className,
          disabled: this.props.disabled,
          value: e.selectedList.value,
          multiple: this.props.multiple,
          placeholder: this.props.placeholder,
          onClick: this.item.event.onSelect,
          ...y.role("combobox")
        }
      )
    )), i(this, "renderTitle", (n) => {
      const e = [];
      return this.props.showSearch && e.push(this.renderFilterInput(n)), this.initSlot("title", e, n), e;
    }), i(this, "renderFilterInput", (n) => {
      var e;
      return g(
        "div",
        {
          class: [
            (e = this.classes) == null ? void 0 : e.value.input,
            n.classesWindow.static
          ]
        },
        this.components.renderOne(
          "input",
          m(
            {
              icon: this.props.iconSearch,
              onInputLite: this.item.filter.onInput,
              inputAttrs: {
                "data-menu-control": "1"
              }
            },
            this.props.inputSearchAttrs
          )
        )
      );
    }), this.item = new h(
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
      ...this.item.menu.expose,
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
      main: {},
      // :classes [!] System label / Системная метка
      input: this.getSubClass("input")
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
    const s = this.item.menu.expose.open.value;
    return this.item.field.render(
      {
        default: this.renderMenu
      },
      {
        ...this.getAttrs(),
        focus: s,
        iconTurn: s,
        class: (t = this.classes) == null ? void 0 : t.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
const ae = J, ue = Q, he = X, pe = {
  ...re,
  iconArrowDown: "keyboard_arrow_down",
  iconSearch: "search",
  menuAttrs: {
    itemAttrs: {
      dense: !0
    }
  },
  inputSearchAttrs: {
    fieldAttrs: {
      size: "sm"
    }
  }
}, we = /* @__PURE__ */ D({
  name: "D1Select",
  __name: "D1Select",
  props: /* @__PURE__ */ O({
    icon: {},
    selected: { type: Boolean },
    iconTurn: { type: Boolean },
    iconHide: { type: Boolean },
    iconDir: { type: Boolean },
    iconPalette: { type: Boolean },
    iconAttrs: {},
    iconTrailing: {},
    iconTrailingTurnOnly: { type: Boolean },
    iconTrailingDirOnly: { type: Boolean },
    iconTrailingPalette: { type: Boolean },
    prefix: {},
    prefixId: {},
    suffix: {},
    suffixId: {},
    caption: {},
    captionDecorative: { type: Boolean },
    label: {},
    labelId: {},
    counterShow: { type: Boolean },
    counterId: {},
    fieldCounterAttrs: {},
    required: { type: Boolean },
    fieldLabelAttrs: {},
    forceShowMessage: { type: Boolean },
    disabled: { type: Boolean },
    helperMessage: {},
    validationMessage: {},
    fieldMessageAttrs: {},
    helperId: {},
    validationId: {},
    loading: { type: [Boolean, Object] },
    readonly: { type: Boolean },
    detail: {},
    isSkeleton: { type: Boolean },
    textCancel: { type: [String, Function] },
    id: {},
    focus: { type: Boolean },
    align: {},
    cancel: {},
    fieldAttrs: {},
    modelValue: {},
    "onUpdate:value": { type: Function },
    "onUpdate:modelValue": { type: Function },
    placeholder: {},
    value: {},
    name: {},
    autofocus: { type: Boolean },
    tabindex: {},
    form: {},
    validationCode: {},
    match: {},
    inputAttrs: {},
    max: {},
    arrow: {},
    arrowStep: {},
    arrowAlign: {},
    autocomplete: {},
    autocapitalize: {},
    inputMode: {},
    enterKeyHint: {},
    spellcheck: { type: [Boolean, String] },
    autocorrect: {},
    option: {},
    multiple: { type: Boolean },
    menuAttrs: {},
    editValue: { type: Boolean },
    hideList: { type: Boolean },
    showSearch: { type: Boolean },
    filterMode: { type: Boolean },
    iconArrowDown: {},
    iconSearch: {},
    inputSearchAttrs: {}
  }, pe),
  emits: ["update:value", "update:modelValue", "input", "inputLite", "change", "changeLite"],
  setup(r, { expose: t, emit: s }) {
    const u = s, h = r, n = a(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-select": !0
        // :classes-values [!] System label / Системная метка
      }
    })), e = a(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), l = new le(
      "d1.select",
      h,
      {
        emits: u,
        classes: n,
        styles: e,
        components: {
          menu: ae,
          field: G,
          selectValue: ue,
          input: he
        }
      }
    ), c = l.render();
    return t(l.expose()), (d, v) => (V(), T(k(c)));
  }
});
export {
  we as _
};

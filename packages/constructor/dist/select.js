var A = Object.defineProperty;
var V = (l, i, t) => i in l ? A(l, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[i] = t;
var s = (l, i, t) => V(l, typeof i != "symbol" ? i + "" : i, t);
import { computed as r, ref as T, h as c } from "vue";
import { toBinds as h, executeFunction as y, isFilled as k, DesignConstructorAbstract as B } from "@dxtmisha/functional";
import { F as D, a as N, b as L, c as O, d as q, e as W, f as K } from "./FieldEventInclude-DBRqmzpF.js";
import { F as R } from "./FieldInclude-BKoBWZdj.js";
import { M as U } from "./MenuInclude-CiSj2UK3.js";
import { A as d } from "./AriaStaticInclude-ZrgMZ2ja.js";
class j {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for working with values/ объект для работы со значениями
   * @param event object for working with events/ объект для работы с событиями
   */
  constructor(i, t, e, n) {
    /** Indicates if it is in edit mode/ Указывает, находится ли в режиме редактирования */
    s(this, "isEdit", r(
      () => !!(this.props.editValue && !this.props.multiple)
    ));
    /**
     * Returns data for the input field.
     *
     * Возвращает данные для поля input.
     */
    s(this, "binds", r(() => h(
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
    )));
    /**
     * Handles the keydown event to simulate a click on the input element.
     *
     * Обрабатывает событие нажатия клавиши для имитации клика по элементу ввода.
     * @param event The keydown event object/ Объект события нажатия клавиши
     */
    s(this, "onKeydown", (i) => {
      i.target.click(), i.preventDefault();
    });
    this.props = i, this.attributes = t, this.value = e, this.event = n;
  }
}
class z {
  constructor() {
    /** Reactive filter value/ Реактивное значение фильтра */
    s(this, "value", T(""));
    /**
     * Input event handler.
     *
     * Обработчик события ввода.
     * @param value validation item with input value/ элемент валидации со значением ввода
     */
    s(this, "onInput", (i) => {
      var t;
      this.value.value = String((t = i.value) != null ? t : "");
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
  set(i) {
    this.value.value = i;
  }
}
class G {
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
  constructor(i, t, e, n, a, u, m, v, p) {
    s(this, "attributes");
    s(this, "elementItem");
    s(this, "change");
    s(this, "value");
    s(this, "code");
    s(this, "validation");
    s(this, "event");
    s(this, "field");
    s(this, "menu");
    s(this, "input");
    s(this, "filter");
    /** Checks whether there are slots for context areas/ Проверяет, есть ли слоты для контекстных областей */
    s(this, "isSlot", r(() => {
      var i, t;
      return !!((i = this.slots) != null && i.contextTop || (t = this.slots) != null && t.contextBottom);
    }));
    /** Computes the trailing icon value/ Вычисляет значение иконки трейлинга */
    s(this, "iconTrailing", r(() => {
      var i;
      if (!this.props.disabled && !this.isArrow())
        return (i = this.props.iconTrailing) != null ? i : this.props.iconArrowDown;
    }));
    /** Handles click on option in slot/ Обрабатывает клик по опции в слоте */
    s(this, "onClick", (i) => {
      i && this.value.set(i);
    });
    this.props = i, this.refs = t, this.element = e, this.classDesign = n, this.className = a, this.components = u, this.slots = m, this.emits = v;
    const {
      FieldAttributesIncludeConstructor: g = D,
      FieldChangeIncludeConstructor: I = N,
      FieldCodeIncludeConstructor: f = L,
      FieldElementIncludeConstructor: C = O,
      FieldEventIncludeConstructor: b = q,
      FieldIncludeConstructor: F = R,
      FieldValidationIncludeConstructor: w = W,
      FieldValueIncludeConstructor: S = K,
      MenuIncludeConstructor: x = U,
      SelectFilterConstructor: M = z,
      SelectInputConstructor: E = j
    } = p != null ? p : {};
    this.attributes = new g(this.props), this.change = new I(this.props), this.elementItem = new C(
      this.props,
      this.element
    ), this.value = new S(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new f(this.props), this.validation = new w(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new b(
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
      r(() => {
        var o;
        return {
          iconTrailing: this.iconTrailing.value,
          maxlength: this.props.max,
          cancel: (o = this.props.cancel) != null ? o : this.props.multiple ? "auto" : "none"
        };
      })
    ), this.menu = new x(
      this.props,
      this.className,
      this.components,
      r(() => ({
        windowAttrs: {
          hide: !k(this.props.option) && !this.isSlot.value,
          widthMatch: !0
        },
        tag: "span",
        barsLabel: this.props.label,
        barsDescription: this.props.helperMessage,
        disabled: this.props.disabled || this.props.readonly,
        autoClose: !this.props.multiple,
        list: y(this.props.option),
        max: this.props.max,
        filterMode: this.props.filterMode,
        hideList: this.props.hideList,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: this.isArrow() ? this.event.onValue : void 0,
        isSelectedByValue: !0,
        ariaMultiselectable: this.props.multiple
      }))
    ), this.input = new E(this.props, this.attributes, this.value, this.event), this.filter = new M();
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
const _ = {};
class $ extends B {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, e, n, a = G) {
    super(
      t,
      e,
      n
    );
    s(this, "item");
    /**
     * Rendering the menu element.
     *
     * Рендер элемента меню.
     * @param input data for the input element/ данные для элемента ввода
     */
    s(this, "renderMenu", (t) => this.item.menu.render(
      {
        control: (e) => this.renderMenuControl(t, e),
        title: (e) => this.renderTitle(e),
        footer: (e) => this.initSlot("footer", void 0, e),
        contextTop: (e) => this.initSlot("contextTop", void 0, e),
        contextBottom: (e) => this.initSlot("contextBottom", void 0, e)
      },
      {
        selected: this.item.value.item.value,
        highlight: this.item.filter.get()
      }
    ));
    /**
     * Render menu control.
     *
     * Рендер элемента управления меню.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderMenuControl", (t, e) => {
      const n = [];
      return this.item.input.isEdit.value || n.push(this.renderMenuControlValue(t, e)), n.push(
        this.renderMenuControlInput(t, e)
      ), n;
    });
    /**
     * Render input element.
     *
     * Рендер элемента ввода.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderMenuControlInput", (t, e) => {
      const n = this.item.input.isEdit.value, a = n ? t.className : t.classForFocus, u = {};
      return c(
        "input",
        h(
          this.item.input.binds.value,
          e.binds,
          {
            ref: this.element,
            id: t.id,
            value: this.item.value.get(),
            class: [
              e.classesWindow.controlOpenOnly,
              a
            ],
            ...d.role("combobox")
          },
          n ? void 0 : u
        )
      );
    });
    /**
     * Render menu control in static mode.
     *
     * Рендер элемента управления меню в статическом режиме.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderMenuControlValue", (t, e) => this.components.renderOne(
      "selectValue",
      h(
        e.binds,
        {
          class: t.className,
          disabled: this.props.disabled,
          value: e.selectedList.value,
          multiple: this.props.multiple,
          placeholder: this.props.placeholder,
          onClick: this.item.event.onSelect,
          ...d.role("combobox")
        }
      )
    ));
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderTitle", (t) => {
      const e = [];
      return this.props.showSearch && e.push(this.renderFilterInput(t)), this.initSlot("title", e, t), e;
    });
    /**
     * Render filter input.
     *
     * Рендер фильтра ввода.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderFilterInput", (t) => {
      var e;
      return c(
        "div",
        {
          class: [
            (e = this.classes) == null ? void 0 : e.value.input,
            t.classesWindow.static
          ]
        },
        this.components.renderOne(
          "input",
          h(
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
    });
    this.item = new a(
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
    var e;
    const t = this.item.menu.expose.open.value;
    return this.item.field.render(
      {
        default: this.renderMenu
      },
      {
        ...this.getAttrs(),
        focus: t,
        iconTurn: t,
        class: (e = this.classes) == null ? void 0 : e.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
export {
  G as Select,
  $ as SelectDesign,
  _ as defaultsSelect
};

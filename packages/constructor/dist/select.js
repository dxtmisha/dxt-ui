var m = Object.defineProperty;
var v = (o, t, e) => t in o ? m(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var s = (o, t, e) => v(o, typeof t != "symbol" ? t + "" : t, e);
import { computed as r, ref as g, h as c } from "vue";
import { toBinds as a, executeFunction as f, isFilled as w, DesignConstructorAbstract as b } from "@dxtmisha/functional";
import { F as I, a as S, c as x, f as C, b as F, e as M, d as E } from "./FieldEventInclude-zg02dtQi.js";
import { F as V } from "./FieldInclude-c6DSD0-y.js";
import { M as A } from "./MenuInclude-DfGCfr_I.js";
class T {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param attributes object for working with input attributes/ объект для работы с атрибутами ввода
   * @param value object for working with values/ объект для работы со значениями
   * @param event object for working with events/ объект для работы с событиями
   */
  constructor(t, e, i, n) {
    /** Indicates if it is in edit mode/ Указывает, находится ли в режиме редактирования */
    s(this, "isEdit", r(
      () => !!(this.props.editValue && !this.props.multiple)
    ));
    /**
     * Returns data for the input field.
     *
     * Возвращает данные для поля input.
     */
    s(this, "binds", r(() => a(
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
    s(this, "onKeydown", (t) => {
      t.target.click(), t.preventDefault();
    });
    this.props = t, this.attributes = e, this.value = i, this.event = n;
  }
}
class k {
  constructor() {
    /** Reactive filter value/ Реактивное значение фильтра */
    s(this, "value", g(""));
    /**
     * Input event handler.
     *
     * Обработчик события ввода.
     * @param value validation item with input value/ элемент валидации со значением ввода
     */
    s(this, "onInput", (t) => {
      var e;
      this.value.value = String((e = t.value) != null ? e : "");
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
class y {
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
  constructor(t, e, i, n, h, u, d, p) {
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
      var t, e;
      return !!((t = this.slots) != null && t.contextTop || (e = this.slots) != null && e.contextBottom);
    }));
    /** Computes the trailing icon value/ Вычисляет значение иконки трейлинга */
    s(this, "iconTrailing", r(() => {
      var t;
      if (!this.props.disabled && !this.isArrow())
        return (t = this.props.iconTrailing) != null ? t : this.props.iconArrowDown;
    }));
    /** Handles click on option in slot/ Обрабатывает клик по опции в слоте */
    s(this, "onClick", (t) => {
      t && this.value.set(t);
    });
    this.props = t, this.refs = e, this.element = i, this.classDesign = n, this.className = h, this.components = u, this.slots = d, this.emits = p, this.attributes = new I(this.props), this.change = new S(this.props), this.elementItem = new x(
      this.props,
      this.element
    ), this.value = new C(
      this.props,
      this.refs,
      this.elementItem
    ), this.code = new F(this.props), this.validation = new M(
      this.props,
      this.attributes,
      this.value,
      this.change,
      this.code
    ), this.event = new E(
      this.props,
      this.change,
      this.value,
      this.validation,
      this.emits
    ), this.field = new V(
      this.props,
      this.value,
      this.components,
      this.event,
      void 0,
      void 0,
      () => {
        var l;
        return (l = this.menu.getElement()) == null ? void 0 : l.toggle;
      },
      () => {
        var l;
        return (l = this.menu.getElement()) == null ? void 0 : l.next();
      },
      () => {
        var l;
        return (l = this.menu.getElement()) == null ? void 0 : l.previous();
      },
      r(() => {
        var l;
        return {
          iconTrailing: this.iconTrailing.value,
          maxlength: this.props.max,
          cancel: (l = this.props.cancel) != null ? l : this.props.multiple ? "auto" : "none"
        };
      })
    ), this.menu = new A(
      this.props,
      this.className,
      this.components,
      r(() => ({
        windowAttrs: {
          hide: !w(t.option) && !this.isSlot.value,
          widthMatch: !0
        },
        tag: "span",
        barsLabel: t.label,
        barsDescription: t.helperMessage,
        disabled: t.disabled || t.readonly,
        autoClose: !t.multiple,
        list: f(t.option),
        max: this.props.max,
        filterMode: this.props.filterMode,
        hideList: t.hideList,
        onClick: this.event.onSelect,
        onClickSlot: this.onClick,
        onUpdateValue: this.isArrow() ? this.event.onValue : void 0,
        isSelectedByValue: !0,
        roleItem: this.props.multiple ? "menuitemcheckbox" : "menuitemradio"
      }))
    ), this.input = new T(this.props, this.attributes, this.value, this.event), this.filter = new k();
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
const W = {};
class K extends b {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(e, i, n) {
    super(
      e,
      i,
      n
    );
    s(this, "item");
    /**
     * Rendering the menu element.
     *
     * Рендер элемента меню.
     * @param input data for the input element/ данные для элемента ввода
     */
    s(this, "renderMenu", (e) => this.item.menu.render(
      {
        control: (i) => this.renderMenuControl(e, i),
        title: (i) => this.renderTitle(i),
        footer: (i) => this.initSlot("footer", void 0, i),
        contextTop: (i) => this.initSlot("contextTop", void 0, i),
        contextBottom: (i) => this.initSlot("contextBottom", void 0, i)
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
    s(this, "renderMenuControl", (e, i) => {
      const n = [];
      return this.item.input.isEdit.value || n.push(this.renderMenuControlValue(e, i)), n.push(
        this.renderMenuControlInput(e, i)
      ), n;
    });
    /**
     * Render input element.
     *
     * Рендер элемента ввода.
     * @param input data for the input element/ данные для элемента ввода
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderMenuControlInput", (e, i) => {
      const n = this.item.input.isEdit.value, h = n ? e.className : e.classForFocus, u = {};
      return c(
        "input",
        a(
          this.item.input.binds.value,
          i.binds,
          {
            ref: this.element,
            id: e.id,
            value: this.item.value.get(),
            class: [
              i.classesWindow.controlOpenOnly,
              h
            ]
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
    s(this, "renderMenuControlValue", (e, i) => this.components.renderOne(
      "selectValue",
      a(
        i.binds,
        {
          class: e.className,
          disabled: this.props.disabled,
          value: i.selectedList.value,
          multiple: this.props.multiple,
          placeholder: this.props.placeholder,
          onClick: this.item.event.onSelect
        }
      )
    ));
    /**
     * Render title element.
     *
     * Рендер элемента заголовка.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderTitle", (e) => {
      const i = [];
      return this.props.showSearch && i.push(this.renderFilterInput(e)), this.initSlot("title", i, e), i;
    });
    /**
     * Render filter input.
     *
     * Рендер фильтра ввода.
     * @param props data for the transferable property/ данные для передаваемого свойства
     */
    s(this, "renderFilterInput", (e) => {
      var i;
      return c(
        "div",
        {
          class: [
            (i = this.classes) == null ? void 0 : i.value.input,
            e.classesWindow.static
          ]
        },
        this.components.renderOne(
          "input",
          a(
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
    this.item = new y(
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
    return this.item.field.render(
      {
        default: this.renderMenu
      },
      {
        ...this.getAttrs(),
        iconTurn: this.item.menu.expose.open.value,
        class: (e = this.classes) == null ? void 0 : e.value.main,
        validationMessage: this.item.validation.message.value
      }
    );
  }
}
export {
  y as Select,
  K as SelectDesign,
  W as defaultsSelect
};

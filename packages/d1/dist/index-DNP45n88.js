import { h as u, computed as l, toRef as S, onMounted as M, nextTick as D, watch as A, onUnmounted as L, ref as y, defineComponent as C, openBlock as E, createBlock as F, unref as G, mergeDefaults as T } from "vue";
import { DesignConstructorAbstract as _, ListDataRef as P, toBinds as c, isDomRuntime as f, EventItem as N, goScroll as O, isSelected as R, isFilled as H, isObject as $, inArray as V } from "@dxtmisha/functional";
import { l as d } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
import { g as q } from "./D1Icon.vue_vue_type_script_setup_true_lang-Cs247ZwJ.js";
import { y as U } from "./WindowClassesInclude-B56usxgx-Y5bmzXSo.js";
import { D as j } from "./index-sNqan2WY.js";
import { D as W } from "./index-CrToGnww.js";
import { D as X } from "./index-CtESvPmy.js";
var Z = Object.defineProperty, z = (o, t, e) => t in o ? Z(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e, r = (o, t, e) => z(o, typeof t != "symbol" ? t + "" : t, e);
class J {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    r(this, "item", y()), r(this, "timeout"), r(this, "highlight", l(() => {
      var e;
      return (e = this.item.value) != null ? e : this.props.highlight;
    })), this.props = t;
  }
  /**
   * Adds a new character to the search.
   *
   * Добавляет новый символ к поиску.
   * @param char new character/ новый символ
   */
  add(t) {
    this.addChar(t).makeReset();
  }
  /**
   * Sets the search string.
   *
   * Устанавливает строку поиска.
   * @param value new value/ новое значение
   */
  set(t) {
    const e = this.getValue(t);
    this.item.value !== e && (this.item.value = e);
  }
  /**
   * Resets the search string.
   *
   * Сбрасывает строку поиска.
   */
  reset() {
    return this.set(), this;
  }
  /**
   * Returns a processed value.
   *
   * Возвращает обработанное значение.
   * @param value source value/ исходное значение
   */
  getValue(t) {
    if (H(t))
      return t.trim();
  }
  /**
   * Appends a character to the search string.
   *
   * Добавляет символ к строке поиска.
   * @param char new character/ новый символ
   */
  addChar(t) {
    return this.item.value && this.timeout ? this.item.value += t : this.item.value = t, this;
  }
  /**
   * Schedules reset to the initial state after a delay.
   *
   * Планирует сброс к исходному состоянию после задержки.
   */
  makeReset() {
    return this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(
      () => this.timeout = void 0,
      2e3
    ), this;
  }
}
const K = 24;
class Q {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param listId unique list identifier/ уникальный идентификатор списка
   */
  constructor(t, e, i) {
    r(this, "item", y()), r(this, "focus", l(() => {
      var a, s;
      return (s = (a = this.item.value) == null ? void 0 : a.index) != null ? s : this.props.focus;
    })), this.props = t, this.element = e, this.listId = i;
  }
  /**
   * Checks if the element exists.
   *
   * Проверяет, существует ли элемент.
   * @param index element index/ индекс элемента
   */
  isElement(t) {
    return !!this.getElement(t);
  }
  /**
   * Checks if the element is an item.
   *
   * Проверяет, является ли элемент элементом.
   */
  isItem() {
    var t;
    return ((t = this.item.value) == null ? void 0 : t.type) === "item";
  }
  /**
   * Checks if the element is a group.
   *
   * Проверяет, является ли элемент группой.
   */
  isGroup() {
    var t;
    return ((t = this.item.value) == null ? void 0 : t.type) === "group";
  }
  /**
   * Checks if the element is a menu.
   *
   * Проверяет, является ли элемент меню.
   */
  isMenu() {
    var t;
    return ((t = this.item.value) == null ? void 0 : t.type) === "menu";
  }
  /**
   * Checks if the group or menu is open.
   *
   * Проверяет, открыта ли группа или меню.
   */
  isOpen() {
    const t = this.getElement();
    return t && (this.isGroup() || this.isMenu()) ? t.dataset.status === "open" : !1;
  }
  /**
   * Returns the selected element.
   *
   * Возвращает выбранный элемент.
   */
  get() {
    return this.item.value;
  }
  /**
   * Returns the selector for the desired element by its index.
   *
   * Возвращает селектор нужного элемента по его индексу.
   * @param index element index/ индекс элемента
   */
  getSelector(t) {
    var e;
    return `[data-list-id="${this.listId}"][data-value="${t != null ? t : (e = this.item.value) == null ? void 0 : e.index}"]`;
  }
  /**
   * Returns the HTML element of the selected item.
   *
   * Возвращает HTML элемент выбранного элемента.
   * @param index element index/ индекс элемента
   */
  getElement(t) {
    var e;
    return (e = document.querySelector(this.getSelector(t))) != null ? e : void 0;
  }
  /**
   * Changes the selected element.
   *
   * Изменяет выбранный элемент.
   * @param item new value/ новое значение
   */
  set(t) {
    return this.item.value !== t && (this.item.value = t, this.toFocus()), this;
  }
  /**
   * Resets the selected element.
   *
   * Сбрасывает выбранный элемент.
   */
  reset() {
    return this.set(void 0), this;
  }
  /**
   * Performs a click on the selected element.
   *
   * Выполняет клик на выбранном элементе.
   */
  click() {
    var t;
    (t = this.getElement()) == null || t.click();
  }
  /**
   * Moves to the value in focus.
   *
   * Перемещает к значению в фокусе.
   */
  toElementFocus() {
    return !!(this.item.value && this.getElement());
  }
  /**
   * Scrolls to the desired element by its index.
   *
   * Скроллирует к нужному элементу по его индексу.
   * @param index element index/ индекс элемента
   */
  toElementSelected(t) {
    return this.toElement(this.getElement(t)), this;
  }
  /**
   * Scrolls to the desired element.
   *
   * Скроллирует к нужному элементу.
   * @param element the element to scroll to/ элемент, до которого надо проскроллить
   */
  toElement(t) {
    const e = "*[data-window-body]";
    t && t.closest(e) && (O(e, t), this.toFocus());
  }
  /**
   * Sets focus to the element.
   *
   * Устанавливает фокус на элемент.
   * @param max maximum number of attempts/ максимальное количество попыток
   */
  toFocus(t = K) {
    var e;
    if (t > 0 && this.element.value && this.props.control) {
      const i = this.getElement();
      i ? i.focus() : ((e = document.activeElement) == null || e.blur(), setTimeout(() => {
        this.toFocus(t - 1);
      }, 128));
    }
  }
}
class Y {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
   * @param data object of the class for working with the list/ объект класса для работы со списком
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i, a) {
    r(this, "index", -1), this.props = t, this.focus = e, this.data = i, this.emits = a;
  }
  /**
   * Changing the index in focus by the number in the array.
   *
   * Изменение значения в фокусе по номеру в массиве.
   * @param index number in the array/ номер в массиве
   */
  set(t) {
    return this.index !== t ? (t < 0 ? this.reset() : this.setByIndex(t), !0) : !1;
  }
  /**
   * Changes the selected element.
   *
   * Изменяет выбранный элемент.
   * @param value new value/ новое значение
   */
  preparation(t) {
    const e = this.data.map.value, i = e.findIndex((a) => R(a.index, t));
    this.reset(), i >= 0 && (this.index = i, e != null && e[i] && this.focus.toElementSelected(e[i].index));
  }
  /**
   * Scrolls the element to the selected element
   *
   * Прокрутить элемент до выбранного элемента
   */
  preparationBySelected() {
    this.props.selected && requestAnimationFrame(() => this.preparation(this.props.selected));
  }
  /**
   * Moves the selected value back.
   *
   * Перемещает выбранное значение назад.
   */
  previous() {
    this.isFirstByParent() || (this.setByIndex(this.index - 1), this.focus.toElementFocus() || this.previous());
  }
  /**
   * Moves the selected value forward.
   *
   * Перемещает выбранное значение вперед.
   */
  next() {
    this.isLastByParent() || (this.setByIndex(this.index + 1), this.focus.toElementFocus() || this.next());
  }
  /**
   * Moves to the first element.
   *
   * Перемещает к первому элементу.
   */
  first() {
    const t = this.getParentId(), e = this.data.getFirstItemByParent(t);
    e && (this.preparation(e.index), this.focus.set(e));
  }
  /**
   * Moves to the last element.
   *
   * Перемещает к последнему элементу.
   */
  last() {
    const t = this.getParentId(), e = this.data.getLastItemByParent(t);
    e && (this.preparation(e.index), this.focus.set(e));
  }
  /**
   * Reset all records to the initial state.
   *
   * Сброс всех записей до начального состояния.
   */
  reset() {
    this.index = -1, this.focus.reset();
  }
  /**
   * Opens the window if the element is in it.
   *
   * Открывает окно, если элемент в нем.
   */
  open() {
    this.focus.isItem() ? this.focus.click() : (this.focus.isGroup() || this.focus.isMenu()) && (this.focus.click(), this.nextByType());
  }
  /**
   * Closes the window if the element is in it.
   *
   * Закрывает окно, если элемент в нем.
   */
  close() {
    var t;
    const e = this.getMainItem();
    if (e) {
      e.click();
      const i = this.data.getItemByIndex(e.dataset.value);
      i && (this.set(i.key), this.focus.set(i.item));
    } else
      (t = this.emits) == null || t.call(this, "close");
  }
  /**
   * Stops the event.
   *
   * Останавливает событие.
   */
  stop() {
    this.focus.reset();
  }
  /**
   * Checks if the current element is the first in the parent group.
   *
   * Проверяет, является ли текущий элемент первым в родительской группе.
   */
  isFirstByParent() {
    var t, e;
    const i = this.getParentId();
    return i && this.focus.isElement() ? ((t = this.data.getFirstItemByParent(i)) == null ? void 0 : t.index) === ((e = this.focus.item.value) == null ? void 0 : e.index) : !1;
  }
  /**
   * Checks if the current element is the last in the parent group.
   *
   * Проверяет, является ли текущий элемент последним в родительской группе.
   */
  isLastByParent() {
    var t, e;
    const i = this.getParentId();
    return i && this.focus.isElement() ? ((t = this.data.getLastItemByParent(i)) == null ? void 0 : t.index) === ((e = this.focus.item.value) == null ? void 0 : e.index) : !1;
  }
  /**
   * Checks if the element is in a window.
   *
   * Проверяет, находится ли элемент в окне.
   */
  getMainItem() {
    const t = this.getParentId();
    if (t && !this.focus.isOpen())
      return this.focus.getElement(t);
  }
  /**
   * Returns the parent identifier.
   *
   * Возвращает идентификатор родителя.
   */
  getParentId() {
    var t;
    return (t = this.focus.item.value) == null ? void 0 : t.parent;
  }
  /**
   * Changing the index in focus by the number in the array.
   *
   * Изменение значения в фокусе по номеру в массиве.
   * @param index number in the array/ номер в массиве
   */
  setByIndex(t) {
    const e = this.data.getLengthByMap();
    t >= e ? this.index = 0 : t < 0 ? this.index = e - 1 : this.index = t;
    const i = this.data.map.value[this.index];
    i && (i.type === "item" || i.type === "group" || i.type === "menu") ? this.focus.set(i) : this.focus.reset();
  }
  /**
   * Moves the selected value forward by type.
   *
   * Перемещает выбранное значение вперед по типу.
   */
  nextByType() {
    this.setByIndex(this.index + 1), !(this.focus.isItem() || this.focus.isGroup() || this.focus.isMenu()) && this.nextByType();
  }
}
class tt {
  /**
   * Creates an instance of ListControl for managing keyboard navigation and events.
   *
   * Создает экземпляр ListControl для управления навигацией с клавиатуры и событиями.
   * @param props input data/ входные данные
   * @param search search functionality controller / контроллер функциональности поиска
   * @param data list data manager / менеджер данных списка
   * @param go navigation controller / контроллер навигации
   */
  constructor(t, e, i, a) {
    r(this, "event"), r(this, "isActive", l(() => !!this.props.control)), r(this, "onFocus", () => {
      this.props.control || this.start();
    }), r(this, "onBlur", () => {
      this.props.control || this.stop();
    }), r(this, "on", (s) => {
      if (this.isNotInput(s.target) && this.data.getLength())
        if (s.type === "keypress")
          this.updateSearch(s);
        else
          switch (s.code || s.key || s.keyCode) {
            case "Backspace":
            case 8:
              this.updateSearch(s);
              break;
            case "ArrowUp":
            case 38:
              s.preventDefault(), this.go.previous();
              break;
            case "ArrowDown":
            case 40:
              s.preventDefault(), this.go.next();
              break;
            case "Enter":
            case "ArrowRight":
            case " ":
            case 13:
            case 39:
              s.preventDefault(), this.go.open();
              break;
            case "ArrowLeft":
            case "Escape":
            case "Esc":
            case 27:
            case 37:
              s.preventDefault(), this.go.close();
              break;
            case "Home":
            case 36:
              s.preventDefault(), this.go.first();
              break;
            case "End":
            case 35:
              s.preventDefault(), this.go.last();
              break;
            case "Space":
            case 32:
              this.getActiveElement() || (s.preventDefault(), this.go.open());
              break;
          }
    }), this.props = t, this.search = e, this.data = i, this.go = a, A(
      this.isActive,
      (s) => {
        s ? this.start() : this.stop();
      },
      { immediate: !0 }
    ), L(() => this.stop());
  }
  /**
   * Checks if the event target is not an input.
   *
   * Проверяет, не является ли цель события input.
   * @param target selected element/ выбранный элемент
   */
  isNotInput(t) {
    return ["INPUT", "TEXTAREA"].indexOf(t.nodeName) === -1 || !!this.getActiveElement();
  }
  /**
   * Gets the currently active input element with menu control.
   *
   * Получает текущий активный элемент input с управлением меню.
   * @returns active input element or undefined / активный элемент input или undefined
   */
  getActiveElement() {
    var t;
    if (f()) {
      const e = document.activeElement;
      if (e && ((t = e.dataset) == null ? void 0 : t.menuControl) === "1")
        return e;
    }
  }
  /**
   * Starts the event.
   *
   * Запускает событие.
   */
  start() {
    f() && (this.event || (this.event = new N(
      document.body,
      ["keydown", "keypress"],
      this.on
    )), this.go.reset(), this.event.start());
  }
  /**
   * Stops the event.
   *
   * Останавливает событие.
   */
  stop() {
    this.event && (this.event.stop(), this.event = void 0, this.go.stop());
  }
  /**
   * Updates the search value based on keyboard input.
   *
   * Обновляет значение поиска на основе ввода с клавиатуры.
   * @param event keyboard event / событие клавиатуры
   */
  updateSearch(t) {
    const e = this.getActiveElement();
    e ? requestAnimationFrame(() => this.search.set(e.value)) : this.search.add(t.key);
  }
}
let et = 1;
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
   * @param constructors.EventClickIncludeConstructor class for working with click event/ класс для работы с событием клика
   * @param constructors.ListControlConstructor class for working with control/ класс для работы с управлением
   * @param constructors.ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param constructors.ListFocusConstructor class for working with focus/ класс для работы с фокусом
   * @param constructors.ListGoConstructor class for working with navigation/ класс для работы с навигацией
   * @param constructors.ListSearchConstructor class for working with search/ класс для работы с поиском
   * @param constructors.WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
   */
  constructor(t, e, i, a, s, n, h, m, p) {
    r(this, "search"), r(this, "focus"), r(this, "data"), r(this, "event"), r(this, "go"), r(this, "control"), r(this, "windowClasses"), r(this, "id", ++et), r(this, "list", l(() => this.props.lite ? this.data.liteData.value : this.data.fullData.value)), r(this, "classes", l(() => ({
      [`${this.className}--highlightActive`]: !!this.props.filterMode && this.data.isHighlight()
    }))), r(this, "itemBinds", l(() => {
      var v;
      return {
        tag: this.props.tag,
        divider: this.props.divider,
        onClick: this.event.onClick,
        ...(v = this.props.itemAttrs) != null ? v : {},
        listId: this.id
      };
    })), this.props = t, this.refs = e, this.element = i, this.classDesign = a, this.className = s, this.components = n, this.slots = h, this.emits = m;
    const {
      EventClickIncludeConstructor: g = q,
      ListControlConstructor: b = tt,
      ListDataRefConstructor: x = P,
      ListFocusConstructor: I = Q,
      ListGoConstructor: k = Y,
      ListSearchConstructor: w = J,
      WindowClassesIncludeConstructor: B = U
    } = p != null ? p : {};
    this.search = new w(this.props), this.focus = new I(this.props, this.element, this.id), this.data = new x(
      S(this.props, "list"),
      this.focus.focus,
      this.search.highlight,
      this.refs.highlightLengthStart,
      this.refs.filterMode,
      this.refs.selected,
      this.refs.keyValue,
      this.refs.keyLabel,
      this.refs.liteThreshold,
      void 0,
      this.refs.max
    ), this.go = new k(this.props, this.focus, this.data, this.emits), this.control = new b(this.props, this.search, this.data, this.go), this.event = new g(void 0, void 0, m), this.windowClasses = new B(a), this.props.control && M(async () => {
      await D(), this.go.preparationBySelected();
    });
  }
  /**
   * Returns information about the opening status of a group item.
   *
   * Возвращает информацию о статусе открытия группового элемента.
   * @param item List item data/ данные элемента списка
   */
  isOpenGroup(t) {
    const e = this.data.getSubList(t);
    return e.isSelected.value || e.isFocus() || e.isHighlight();
  }
  /**
   * Gets binding properties for a list item
   *
   * Получает привязочные свойства для элемента списка
   * @param item List item data/ данные элемента списка
   */
  getItem(t) {
    return c(
      this.itemBinds.value,
      t,
      {
        key: t.value,
        role: this.props.roleItem
      }
    );
  }
  /**
   * Gets binding properties for a group item in the list
   *
   * Получает привязочные свойства для группового элемента в списке
   * @param item List item data/ данные элемента списка
   */
  getItemGroup(t) {
    return c(
      this.itemBinds.value,
      this.props.itemGroupAttrs,
      t,
      {
        key: t.value,
        class: `${this.className}__group`
      }
    );
  }
  /**
   * Gets binding properties for a menu item in the list
   *
   * Получает привязочные свойства для элемента меню в списке
   * @param item List item data/ данные элемента списка
   */
  getItemMenu(t) {
    return c(
      this.itemBinds.value,
      this.props.itemMenuAttrs,
      t,
      {
        key: t.value,
        class: `${this.className}__menu`
      }
    );
  }
  /**
   * Gets binding properties for a group management item with down arrow
   *
   * Получает привязочные свойства для элемента управления группой со стрелкой вниз
   * @param item List item data/ данные элемента списка
   * @param props additional properties/ дополнительные свойства
   */
  getItemManagementFormGroup(t, e) {
    return this.getItemManagement(
      {
        ...t,
        ...e,
        filterMode: !1,
        ...d.haspopup("listbox")
      },
      e.open,
      this.props.iconArrowDown
    );
  }
  /**
   * Gets binding properties for a menu management item with right arrow
   *
   * Получает привязочные свойства для элемента управления меню со стрелкой вправо
   * @param item List item data/ данные элемента списка
   * @param open Whether the menu is open/ открыто ли меню
   */
  getItemManagementFormMenu(t, e) {
    return this.getItemManagement(
      {
        ...t,
        filterMode: !1
      },
      e,
      this.props.iconArrowRight
    );
  }
  /**
   * Returns a sublist for a group item.
   *
   * Возвращает подсписок для группового элемента.
   * @param item List item data/ данные элемента списка
   */
  getList(t) {
    return this.data.getSubList(t).fullData.value;
  }
  /**
   * Internal method to create management item binding properties
   *
   * Внутренний метод для создания привязочных свойств элемента управления
   * @param item List item data/ данные элемента списка
   * @param open Whether the item is open/ открыт ли элемент
   * @param icon Icon to display/ иконка для отображения
   */
  getItemManagement(t, e, i) {
    return c(
      this.itemBinds.value,
      this.props.itemManagementAttrs,
      t,
      {
        class: [
          `${this.className}__management`,
          this.windowClasses.get().static
        ],
        focus: (t == null ? void 0 : t.index) === this.focus.focus.value,
        selectedChild: this.isOpenGroup(t),
        open: e,
        iconTurn: e,
        iconTrailing: i,
        iconTrailingTurnOnly: !0,
        "data-status": e ? "open" : "close"
      }
    );
  }
}
const it = {
  keyLabel: "label",
  keyValue: "value",
  tag: "div",
  role: "listbox",
  tabindex: 0,
  // :default [!] System label / Системная метка
  axis: "y"
};
class rt extends _ {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(t, e, i, a = st) {
    super(
      t,
      e,
      i
    ), r(this, "item"), r(this, "renderData", () => this.renderDataByItem("item", this.item.list.value, !0)), r(this, "renderItem", (s, n) => this.components.renderOne(
      "listItem",
      this.getItemAttrs(s, n)
    )), r(this, "renderItemGroup", (s, n) => this.components.renderOne(
      "listItem",
      this.item.getItemManagementFormGroup(s, n)
    )), r(this, "renderItemMenu", (s, n) => this.components.renderOne(
      "listItem",
      c(
        this.item.getItemManagementFormMenu(s, !!n.open.value),
        n.binds
      )
    )), r(this, "renderSpace", (s) => {
      var n;
      return u("div", {
        key: s.value,
        class: [
          (n = this.classes) == null ? void 0 : n.value.space,
          this.item.windowClasses.get().static
        ],
        ...d.role("separator")
      });
    }), r(this, "renderLine", (s) => {
      var n;
      return u("div", {
        key: s.value,
        class: [
          (n = this.classes) == null ? void 0 : n.value.line,
          this.item.windowClasses.get().static
        ],
        ...d.role("separator")
      });
    }), r(this, "renderSubtitle", (s) => {
      var n;
      return u("div", {
        key: s.value,
        class: [
          (n = this.classes) == null ? void 0 : n.value.subtitle,
          this.item.windowClasses.get().static
        ],
        ...d.role("separator")
      }, s.label);
    }), r(this, "renderHtml", (s) => {
      var n;
      const h = {
        key: s.label && $(s.value) ? s.label : s.value,
        class: [
          (n = this.classes) == null ? void 0 : n.value.html,
          this.item.windowClasses.get().static
        ]
      };
      return this.slots && s.value in this.slots ? u("div", h, this.initSlot(s.value)) : u("div", {
        ...h,
        innerHTML: s.label
      });
    }), r(this, "renderGroup", (s) => this.components.renderOne(
      "listGroup",
      {
        open: this.item.isOpenGroup(s),
        divider: this.props.divider,
        disabled: s.disabled
      },
      {
        head: (n) => this.renderItemGroup(s, n),
        list: () => this.renderDataByItem("group", this.item.getList(s))
      }
    )), r(this, "renderMenu", (s, n) => this.components.renderOne(
      "listMenu",
      {
        divider: this.props.divider,
        axis: n && this.props.axis === "x" ? "y" : "x",
        disabled: s.disabled
      },
      {
        head: (h) => this.renderItemMenu(s, h),
        list: () => this.renderDataByItem("menu", this.item.getList(s))
      }
    )), this.item = new a(
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
      isSelected: this.item.data.isSelected,
      selectedList: this.item.data.selectedList,
      selectedNames: this.item.data.selectedNames,
      selectedValues: this.item.data.selectedValues
    };
  }
  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  initClasses() {
    return {
      main: this.item.classes.value,
      // :classes [!] System label / Системная метка
      space: this.getSubClass("space"),
      line: this.getSubClass("line"),
      subtitle: this.getSubClass("subtitle"),
      html: this.getSubClass("html"),
      management: this.getSubClass("management"),
      group: this.getSubClass("group"),
      menu: this.getSubClass("menu"),
      menuGroup: this.getSubClass("menuGroup")
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
    return u(
      "div",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (t = this.classes) == null ? void 0 : t.value.main,
        ...d.role(this.props.role),
        tabindex: this.props.control ? void 0 : this.props.tabindex,
        onFocus: this.item.control.onFocus,
        onBlur: this.item.control.onBlur
      },
      this.renderData()
    );
  }
  /**
   * Generates all elements from the list.
   *
   * Генерирует все элементы из списка.
   * @param type type of list/ тип списка
   * @param data selected element/ выбранный элемент
   * @param first is the first element/ является ли первым элементом
   */
  renderDataByItem(t, e, i = !1) {
    const a = [];
    return e.forEach((s) => {
      switch (s.type) {
        case "space":
          a.push(this.renderSpace(s));
          break;
        case "line":
          a.push(this.renderLine(s));
          break;
        case "subtitle":
          a.push(this.renderSubtitle(s));
          break;
        case "html":
          a.push(this.renderHtml(s));
          break;
        case "group":
          this.isHighlight(s) && a.push(this.renderGroup(s));
          break;
        case "menu":
          this.isHighlight(s) && a.push(this.renderMenu(s, i));
          break;
        default:
          a.push(this.renderItem(t, s));
          break;
      }
    }), a.push(u("div")), a;
  }
  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   * @param item selected element/ выбранный элемент
   */
  isHighlight(t) {
    return this.props.filterMode ? this.item.data.getSubList(t).isHighlightActive() : !0;
  }
  /**
   * Returns binding properties for the item.
   *
   * Возвращает привязочные свойства для элемента.
   * @param type type of list/ тип списка
   * @param item selected element/ выбранный элемент
   */
  getItemAttrs(t, e) {
    switch (t) {
      case "group":
        return this.item.getItemGroup(e);
      case "menu":
        return this.item.getItemMenu(e);
      default:
        return this.item.getItem(e);
    }
  }
}
const at = {
  // :values [!] System label / Системная метка
  axis: ["x", "y"]
  // :values [!] System label / Системная метка
}, nt = {
  ...it,
  iconArrowDown: "keyboard_arrow_down",
  iconArrowRight: "keyboard_arrow_right",
  // :default [!] System label / Системная метка
  axis: "y"
}, ot = /* @__PURE__ */ C({
  name: "D1List",
  __name: "D1List",
  props: /* @__PURE__ */ T({
    role: {},
    ariaMultiselectable: { type: Boolean },
    focus: { type: [Number, String, Boolean] },
    selected: { type: [Number, String, Boolean, Array] },
    disabled: { type: Boolean },
    lite: { type: Boolean },
    list: {},
    liteThreshold: {},
    highlight: {},
    highlightLengthStart: {},
    filterMode: { type: Boolean },
    keyLabel: {},
    keyValue: {},
    max: {},
    tag: {},
    axis: {},
    divider: { type: Boolean },
    itemAttrs: {},
    itemManagementAttrs: {},
    itemGroupAttrs: {},
    itemMenuAttrs: {},
    iconArrowDown: {},
    iconArrowRight: {},
    roleItem: {},
    tabindex: {},
    control: { type: Boolean }
  }, nt),
  emits: ["click", "clickLite", "close"],
  setup(o, { expose: t, emit: e }) {
    const i = e, a = o, s = l(() => ({
      main: {
        // :classes-values [!] System label / Системная метка
        "d1-list": !0,
        "d1-list--focus": a.focus,
        [`d1-list--axis--${a.axis}`]: V(at.axis, a.axis),
        "d1-list--divider": a.divider
        // :classes-values [!] System label / Системная метка
      }
    })), n = l(() => ({
      // :styles-values [!] System label / Системная метка
      // :styles-values [!] System label / Системная метка
    })), h = new rt(
      "d1.list",
      a,
      {
        emits: i,
        classes: s,
        styles: n,
        components: {
          listItem: j,
          listGroup: W,
          listMenu: X
        }
      }
    ), m = h.render();
    return t(h.expose()), (p, g) => (E(), F(G(m)));
  }
}), vt = ot;
export {
  vt as D
};

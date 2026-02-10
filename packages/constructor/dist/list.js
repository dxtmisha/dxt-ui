var w = Object.defineProperty;
var S = (h, t, e) => t in h ? w(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var i = (h, t, e) => S(h, typeof t != "symbol" ? t + "" : t, e);
import { ref as m, computed as l, watch as B, onUnmounted as E, toRef as M, onMounted as A, nextTick as L, h as o } from "vue";
import { isFilled as C, goScroll as D, isSelected as F, isDomRuntime as p, EventItem as G, ListDataRef as T, toBinds as u, DesignConstructorAbstract as P, isObject as O } from "@dxtmisha/functional";
import { E as N } from "./EventClickInclude-CgbuezDm.js";
import { A as c } from "./AriaStaticInclude-CAURwJMb.js";
import { W as H } from "./WindowClassesInclude-B56usxgx.js";
class R {
  /**
   * Constructor
   * @param props input data/ входные данные
   */
  constructor(t) {
    i(this, "item", m());
    i(this, "timeout");
    /** Current search string/ Текущая строка поиска */
    i(this, "highlight", l(() => {
      var t;
      return (t = this.item.value) != null ? t : this.props.highlight;
    }));
    this.props = t;
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
    if (C(t))
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
const _ = 24;
class V {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param listId unique list identifier/ уникальный идентификатор списка
   */
  constructor(t, e, s) {
    /** Active item/ Активный элемент */
    i(this, "item", m());
    /** Returns the value of the selected element/ Возвращает значение выбранного элемента */
    i(this, "focus", l(() => {
      var t, e;
      return (e = (t = this.item.value) == null ? void 0 : t.index) != null ? e : this.props.focus;
    }));
    this.props = t, this.element = e, this.listId = s;
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
    t && t.closest(e) && (D(e, t), this.toFocus());
  }
  /**
   * Sets focus to the element.
   *
   * Устанавливает фокус на элемент.
   * @param max maximum number of attempts/ максимальное количество попыток
   */
  toFocus(t = _) {
    var e;
    if (t > 0 && this.element.value) {
      const s = this.getElement();
      s ? s.focus() : ((e = document.activeElement) == null || e.blur(), setTimeout(() => {
        this.toFocus(t - 1);
      }, 128));
    }
  }
}
class $ {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param focus object of the class for working with focus/ объект класса для работы с фокусировкой
   * @param data object of the class for working with the list/ объект класса для работы со списком
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, s, r) {
    i(this, "index", -1);
    this.props = t, this.focus = e, this.data = s, this.emits = r;
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
    const e = this.data.map.value, s = e.findIndex((r) => F(r.index, t));
    this.reset(), s >= 0 && (this.index = s, e != null && e[s] && this.focus.toElementSelected(e[s].index));
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
    var e;
    const t = this.getMainItem();
    if (t) {
      t.click();
      const s = this.data.getItemByIndex(t.dataset.value);
      s && (this.set(s.key), this.focus.set(s.item));
    } else
      (e = this.emits) == null || e.call(this, "close");
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
    var e, s;
    const t = this.getParentId();
    return t && this.focus.isElement() ? ((e = this.data.getFirstItemByParent(t)) == null ? void 0 : e.index) === ((s = this.focus.item.value) == null ? void 0 : s.index) : !1;
  }
  /**
   * Checks if the current element is the last in the parent group.
   *
   * Проверяет, является ли текущий элемент последним в родительской группе.
   */
  isLastByParent() {
    var e, s;
    const t = this.getParentId();
    return t && this.focus.isElement() ? ((e = this.data.getLastItemByParent(t)) == null ? void 0 : e.index) === ((s = this.focus.item.value) == null ? void 0 : s.index) : !1;
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
    const s = this.data.map.value[this.index];
    s && (s.type === "item" || s.type === "group" || s.type === "menu") ? this.focus.set(s) : this.focus.reset();
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
class U {
  /**
   * Creates an instance of ListControl for managing keyboard navigation and events.
   *
   * Создает экземпляр ListControl для управления навигацией с клавиатуры и событиями.
   * @param props input data/ входные данные
   * @param search search functionality controller / контроллер функциональности поиска
   * @param data list data manager / менеджер данных списка
   * @param go navigation controller / контроллер навигации
   */
  constructor(t, e, s, r) {
    i(this, "event");
    /**
     * Checks if the menu is active.
     *
     * Проверяет, активное ли меню.
     */
    i(this, "isActive", l(() => !!this.props.control));
    /**
     * Method for tracking keys when a window is open.
     *
     * Метод для отслеживания нажатий при открытом окне.
     * @param event event object/ объект события
     */
    i(this, "on", (t) => {
      if (this.isNotInput(t.target) && this.data.getLength())
        if (t.type === "keypress")
          this.updateSearch(t);
        else
          switch (t.code || t.key || t.keyCode) {
            case "Backspace":
            case 8:
              this.updateSearch(t);
              break;
            case "ArrowUp":
            case 38:
              t.preventDefault(), this.go.previous();
              break;
            case "ArrowDown":
            case 40:
              t.preventDefault(), this.go.next();
              break;
            case "Enter":
            case "ArrowRight":
            case " ":
            case 13:
            case 39:
              t.preventDefault(), this.go.open();
              break;
            case "ArrowLeft":
            case "Escape":
            case "Esc":
            case 27:
            case 37:
              t.preventDefault(), this.go.close();
              break;
            case "Home":
            case 36:
              t.preventDefault(), this.go.first();
              break;
            case "End":
            case 35:
              t.preventDefault(), this.go.last();
              break;
            case "Space":
            case 32:
              this.getActiveElement() || (t.preventDefault(), this.go.open());
              break;
          }
    });
    this.props = t, this.search = e, this.data = s, this.go = r, B(
      this.isActive,
      (a) => {
        a ? this.start() : this.stop();
      },
      { immediate: !0 }
    ), E(() => this.stop());
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
    if (p()) {
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
    p() && (this.event || (this.event = new G(
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
let q = 1;
class X {
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
   * @param ListSearchConstructor class for working with search/ класс для работы с поиском
   * @param ListFocusConstructor class for working with focus/ класс для работы с фокусом
   * @param ListDataRefConstructor class for working with data list/ класс для работы со списком данных
   * @param ListGoConstructor class for working with navigation/ класс для работы с навигацией
   * @param ListControlConstructor class for working with control/ класс для работы с управлением
   * @param EventClickIncludeConstructor class for working with click event/ класс для работы с событием клика
   * @param WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
   */
  constructor(t, e, s, r, a, n, g, d, f = R, v = V, I = T, y = $, b = U, k = N, x = H) {
    i(this, "search");
    i(this, "focus");
    i(this, "data");
    i(this, "event");
    i(this, "go");
    i(this, "control");
    i(this, "windowClasses");
    /** Unique list identifier/ Уникальный идентификатор списка */
    i(this, "id", ++q);
    /**
     * Computed list data
     *
     * Вычисляемые данные списка
     * */
    i(this, "list", l(() => this.props.lite ? this.data.liteData.value : this.data.fullData.value));
    /**
     * Computed CSS classes for the cell component.
     *
     * Вычисляемые CSS классы для компонента ячейки.
     */
    i(this, "classes", l(() => ({
      [`${this.className}--highlightActive`]: !!this.props.filterMode && this.data.isHighlight()
    })));
    /**
     * Computed binding properties for list items/
     * Вычисляемые привязочные свойства для элементов списка
     * */
    i(this, "itemBinds", l(() => {
      var t;
      return {
        tag: this.props.tag,
        divider: this.props.divider,
        onClick: this.event.onClick,
        ...(t = this.props.itemAttrs) != null ? t : {},
        listId: this.id
      };
    }));
    this.props = t, this.refs = e, this.element = s, this.classDesign = r, this.className = a, this.components = n, this.slots = g, this.emits = d, this.search = new f(this.props), this.focus = new v(this.props, this.element, this.id), this.data = new I(
      M(this.props, "list"),
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
    ), this.go = new y(this.props, this.focus, this.data, this.emits), this.control = new b(this.props, this.search, this.data, this.go), this.event = new k(void 0, void 0, d), this.windowClasses = new x(r), A(async () => {
      await L(), this.go.preparationBySelected();
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
    return u(
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
    return u(
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
    return u(
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
        ...c.haspopup("listbox")
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
  getItemManagement(t, e, s) {
    return u(
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
        iconTrailing: s,
        iconTrailingTurnOnly: !0,
        "data-status": e ? "open" : "close"
      }
    );
  }
}
const Y = {
  keyLabel: "label",
  keyValue: "value",
  tag: "div",
  role: "listbox",
  // :default [!] System label / Системная метка
  axis: "y"
};
class Z extends P {
  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(e, s, r, a = X) {
    super(
      e,
      s,
      r
    );
    i(this, "item");
    /**
     * Generates all elements from the list.
     *
     * Генерирует все элементы из списка.
     */
    i(this, "renderData", () => this.renderDataByItem("item", this.item.list.value, !0));
    /**
     * Generates an element.
     *
     * Генерирует элемент.
     * @param type type of list/ тип списка
     * @param item selected element/ выбранный элемент
     */
    i(this, "renderItem", (e, s) => this.components.renderOne(
      "listItem",
      this.getItemAttrs(e, s)
    ));
    /**
     * Generates a group element.
     *
     * Генерирует групповой элемент.
     * @param item selected element/ выбранный элемент
     * @param props data for working with the group/ данные для работы с группой
     */
    i(this, "renderItemGroup", (e, s) => this.components.renderOne(
      "listItem",
      this.item.getItemManagementFormGroup(e, s)
    ));
    /**
     * Generates a menu element.
     *
     * Генерирует элемент меню.
     * @param item selected element/ выбранный элемент
     * @param props data for working with the menu/ данные для работы с меню
     */
    i(this, "renderItemMenu", (e, s) => this.components.renderOne(
      "listItem",
      u(
        this.item.getItemManagementFormMenu(e, !!s.open.value),
        s.binds
      )
    ));
    /**
     * Generates a break between elements.
     *
     * Генерирует разрыв между элементами.
     * @param item selected element/ выбранный элемент
     */
    i(this, "renderSpace", (e) => {
      var s;
      return o("div", {
        key: e.value,
        class: [
          (s = this.classes) == null ? void 0 : s.value.space,
          this.item.windowClasses.get().static
        ],
        ...c.role("separator")
      });
    });
    /**
     * Generates a dividing line.
     *
     * Генерирует линию разделения.
     * @param item selected element/ выбранный элемент
     */
    i(this, "renderLine", (e) => {
      var s;
      return o("div", {
        key: e.value,
        class: [
          (s = this.classes) == null ? void 0 : s.value.line,
          this.item.windowClasses.get().static
        ],
        ...c.role("separator")
      });
    });
    /**
     * Generates a subtitle.
     *
     * Генерирует подзаголовок.
     * @param item selected element/ выбранный элемент
     */
    i(this, "renderSubtitle", (e) => {
      var s;
      return o("div", {
        key: e.value,
        class: [
          (s = this.classes) == null ? void 0 : s.value.subtitle,
          this.item.windowClasses.get().static
        ],
        ...c.role("separator")
      }, e.label);
    });
    /**
     * Generates HTML code by the slot name or the value of the `label` field.
     *
     * Генерирует HTML-код по названию слота или значению поля `label`.
     * @param item selected element/ выбранный элемент
     */
    i(this, "renderHtml", (e) => {
      var r;
      const s = {
        key: e.label && O(e.value) ? e.label : e.value,
        class: [
          (r = this.classes) == null ? void 0 : r.value.html,
          this.item.windowClasses.get().static
        ]
      };
      return this.slots && e.value in this.slots ? o("div", s, this.initSlot(e.value)) : o("div", {
        ...s,
        innerHTML: e.label
      });
    });
    /**
     * Generates a group of lists.
     *
     * Генерирует группу списков.
     * @param item selected element/ выбранный элемент
     */
    i(this, "renderGroup", (e) => this.components.renderOne(
      "listGroup",
      {
        open: this.item.isOpenGroup(e),
        divider: this.props.divider,
        disabled: e.disabled
      },
      {
        head: (s) => this.renderItemGroup(e, s),
        list: () => this.renderDataByItem("group", this.item.getList(e))
      }
    ));
    /**
     * Generates a menu of lists.
     *
     * Генерирует меню списков.
     * @param item selected element/ выбранный элемент
     * @param first is the first element/ является ли первым элементом
     */
    i(this, "renderMenu", (e, s) => this.components.renderOne(
      "listMenu",
      {
        divider: this.props.divider,
        axis: s && this.props.axis === "x" ? "y" : "x",
        disabled: e.disabled
      },
      {
        head: (r) => this.renderItemMenu(e, r),
        list: () => this.renderDataByItem("menu", this.item.getList(e))
      }
    ));
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
    var e;
    return o(
      "div",
      {
        ...this.getAttrs(),
        ref: this.element,
        class: (e = this.classes) == null ? void 0 : e.value.main,
        ...c.role(this.props.role)
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
  renderDataByItem(e, s, r = !1) {
    const a = [];
    return s.forEach((n) => {
      switch (n.type) {
        case "space":
          a.push(this.renderSpace(n));
          break;
        case "line":
          a.push(this.renderLine(n));
          break;
        case "subtitle":
          a.push(this.renderSubtitle(n));
          break;
        case "html":
          a.push(this.renderHtml(n));
          break;
        case "group":
          this.isHighlight(n) && a.push(this.renderGroup(n));
          break;
        case "menu":
          this.isHighlight(n) && a.push(this.renderMenu(n, r));
          break;
        default:
          a.push(this.renderItem(e, n));
          break;
      }
    }), a.push(o("div")), a;
  }
  /**
   * Determines if highlighting is required.
   *
   * Определяет, требуется ли выделение.
   * @param item selected element/ выбранный элемент
   */
  isHighlight(e) {
    return this.props.filterMode ? this.item.data.getSubList(e).isHighlightActive() : !0;
  }
  /**
   * Returns binding properties for the item.
   *
   * Возвращает привязочные свойства для элемента.
   * @param type type of list/ тип списка
   * @param item selected element/ выбранный элемент
   */
  getItemAttrs(e, s) {
    switch (e) {
      case "group":
        return this.item.getItemGroup(s);
      case "menu":
        return this.item.getItemMenu(s);
      default:
        return this.item.getItem(s);
    }
  }
}
export {
  X as List,
  Z as ListDesign,
  Y as defaultsList
};

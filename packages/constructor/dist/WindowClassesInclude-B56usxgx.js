var $ = Object.defineProperty;
var d = (s, t, i) => t in s ? $(s, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : s[t] = i;
var n = (s, t, i) => d(s, typeof t != "symbol" ? t + "" : t, i);
import { getElementId as h, domQuerySelector as e } from "@dxtmisha/functional";
var r = /* @__PURE__ */ ((s) => (s.display = "display", s.preparation = "preparation", s.flash = "flash", s.open = "open", s.hide = "hide", s.close = "close", s))(r || {}), o = /* @__PURE__ */ ((s) => (s.block = "block", s.blockChildren = "blockChildren", s.blockOther = "blockOther", s.close = "close", s.static = "static", s.controlStatic = "controlStatic", s.controlOpenOnly = "controlOpenOnly", s.controlActive = "controlActive", s.persistent = "persistent", s))(o || {});
const _ = "--sys-type-body";
class l {
  /**
   * Constructor
   * @param className class name/ название класса
   */
  constructor(t) {
    /**
     * Identification of the current window. Used to search for the current component and its control.
     *
     * Идентификация текущего окна. Используется для поиска текущего компонента и его контроля.
     */
    n(this, "id", `window--${h()}`);
    n(this, "controlId", `${this.id}-control`);
    n(this, "list");
    this.className = t, this.list = l.getClassesList(t, this.id);
  }
  /**
   * Checks if the selected element is a window.
   *
   * Проверяет, является ли выбранный элемент окном.
   * @param target selected item/ выбранный элемент
   */
  isWindow(t) {
    return !!(t && t.classList.contains(this.className));
  }
  /**
   * Checks if the selected element is a window teleport.
   *
   * Проверяет, является ли выбранный элемент телепортом окна.
   * @param target selected item/ выбранный элемент
   */
  isWindowTeleport(t) {
    return !!(t && t.classList.contains(`${this.className}__teleport`));
  }
  /**
   * Checks if the selected element is a window or a window teleport.
   *
   * Проверяет, является ли выбранный элемент окном или телепортом окна.
   * @param target selected item/ выбранный элемент
   */
  isWindowOrTeleport(t) {
    return this.isWindow(t) || this.isWindowTeleport(t);
  }
  /**
   * Returns the identifier of the current window.
   *
   * Возвращает идентификатор текущего окна.
   */
  getId() {
    return this.id;
  }
  /**
   * Returns the identifier of the control of the current window.
   *
   * Возвращает идентификатор контроля текущего окна.
   */
  getControlId() {
    return this.controlId;
  }
  /**
   * Returns the full name of the class for the status.
   *
   * Возвращает полное название класса для статуса.
   * @param status названия статуса
   */
  getClassStatus(t) {
    return `${this.className}[data-status="${t}"]`;
  }
  /**
   * Returns the class selector for control.
   *
   * Возвращает селектор класса для управления.
   */
  getSelectorControl() {
    return `.${this.list.control}.${this.id}`;
  }
  /**
   * Search and return the window element at the selected item.
   *
   * Поиск и возврат элемента окна у выбранного элемента.
   * @param target selected item/ выбранный элемент
   */
  findMain(t) {
    var i;
    return (i = t == null ? void 0 : t.closest(`.${this.className}`)) != null ? i : void 0;
  }
  /**
   * Search and return of the control element of the current component.
   *
   * Поиск и возврат элемента управления текущего компонента.
   */
  findControl() {
    return e(`.${this.list.control}.${this.id}`);
  }
  /**
   * Find the control at the selected window.
   *
   * Найди элемент управления у выбранного окна.
   * @param element window element/ элемент окна
   */
  findControlByElement(t) {
    var i;
    if (t)
      return e(`.${this.list.control}.${(i = t.dataset) == null ? void 0 : i.window}`);
  }
  /**
   * Search and return of the window body element for the current component.
   *
   * Поиск и возврат элемента тела окна для текущего компонента.
   */
  findBody() {
    return e(`.${this.className}.${this.id} .${this.className}__body`);
  }
  /**
   * Search and return of the context body element of the window for the current component.
   *
   * Поиск и возврат элемента контекста тела окна для текущего компонента.
   */
  findBodyContext() {
    return e(`.${this.className}.${this.id} .${this.className}__body__context`);
  }
  /**
   * Search and return of the window body element for other components (not current)
   * with additional selectors.
   *
   * Поиск и возврат элемента тела окна для других компонентов (не текущего)
   * с дополнительными селекторами.
   * @param selectors additional CSS selectors/ дополнительные CSS селекторы
   * @param status status of the window/ статус окна
   */
  findBodyOther(t, i = r.open) {
    if (i === r.open) {
      const c = e(
        `.${this.className}:not(.${this.id})[data-status="${r.flash}"] .${this.className}__body ${t}`
      );
      if (c)
        return c;
    }
    return e(
      `.${this.className}:not(.${this.id})[data-status="${i}"] .${this.className}__body ${t}`
    );
  }
  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @param className class name/ название класса
   * @param id identification of the current window/ идентификация текущего окна
   */
  static getClassesList(t, i = "id") {
    return {
      block: `${t}--${o.block}`,
      blockChildren: `${t}--${o.blockChildren}`,
      blockOther: `${t}--${o.blockOther}`,
      close: `${t}--${o.close}`,
      static: `${t}--${o.static}`,
      control: `${t}__control`,
      controlId: `${t}__control window__control ${i}`,
      controlStatic: `${t}--${o.controlStatic}`,
      controlOpenOnly: `${t}--${o.controlOpenOnly}`,
      controlActive: `${t}--${o.controlActive}`,
      persistent: `${t}--${o.persistent}`
    };
  }
  /**
   * Returns a list of available classes by design name.
   *
   * Возвращает список доступных классов по названию дизайна.
   * @param design design name/ названия дизайна
   */
  static getClassesListByDesign(t) {
    return this.getClassesList(`${t}-window`);
  }
}
class y {
  /**
   * Constructor
   * @param design design name/ название дизайна
   */
  constructor(t) {
    this.design = t;
  }
  /**
   * Returns list of window classes for the specified design.
   *
   * Возвращает список классов окна для указанного дизайна.
   */
  get() {
    return l.getClassesListByDesign(this.design);
  }
  /**
   * Returns an object with window classes under classesWindow key.
   *
   * Возвращает объект с классами окна под ключом classesWindow.
   */
  getObject() {
    return {
      classesWindow: this.get()
    };
  }
}
export {
  y as W,
  _,
  r as a,
  l as b
};

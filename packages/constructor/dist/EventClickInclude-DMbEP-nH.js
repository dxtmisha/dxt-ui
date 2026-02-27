var n = Object.defineProperty;
var a = (s, t, e) => t in s ? n(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => a(s, typeof t != "symbol" ? t + "" : t, e);
import { toRefs as p } from "vue";
import { isObjectNotArray as f, RouterItemRef as l, isEnter as u } from "@dxtmisha/functional";
class g {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i) {
    o(this, "refs");
    /**
     * Event trigger function
     *
     * Функция вызова события
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    o(this, "onClick", (t, e) => {
      if (this.emits)
        if (e)
          this.emit(t, e);
        else if (this.toRouter())
          t.preventDefault();
        else if (this.enabled) {
          const i = this.getOptions(t);
          (this.enabled.isEnabled.value || i.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(t, i);
        } else
          this.emit(t, this.getOptions(t));
    });
    /**
     * Event trigger function when pressing the space bar or enter key
     *
     * Функция вызова события при нажатии на пробел или клавишу Enter
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    o(this, "onKeydown", (t, e) => {
      u(t) && (this.onClick(t, e), t.preventDefault());
    });
    this.props = t, this.enabled = e, this.emits = i, this.refs = t ? p(t) : void 0;
  }
  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  get binds() {
    return {
      ...this.getHref(),
      onClick: this.onClick,
      onKeydown: this.onKeydown
    };
  }
  /**
   * Exported values
   *
   * Экспортируемые значения
   */
  get expose() {
    var t, e;
    return {
      value: (t = this.refs) == null ? void 0 : t.value,
      detail: (e = this.refs) == null ? void 0 : e.detail
    };
  }
  /**
   * Returns the link value
   *
   * Возвращает значение ссылки
   */
  getHref() {
    var e, i, r;
    const t = (e = this.props) == null ? void 0 : e.to;
    return (i = this.props) != null && i.to && f(t) && "name" in t ? l.rawToHref(t) : {
      href: (r = this.props) == null ? void 0 : r.href
    };
  }
  /**
   * Parameters for the event
   *
   * Параметры для события
   */
  getOptions(t) {
    var e, i;
    return {
      type: this.getTargetType(t),
      value: (e = this.props) == null ? void 0 : e.value,
      detail: (i = this.props) == null ? void 0 : i.detail
    };
  }
  /**
   * Returns the type of the selected item
   *
   * Возвращает тип выбранного элемента
   */
  getTargetType(t) {
    var i, r, h;
    const e = (h = (r = (i = t.target) == null ? void 0 : i.closest("[data-event-type]")) == null ? void 0 : r.dataset) == null ? void 0 : h.eventType;
    return e != null ? e : "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    var t, e;
    return (t = this.props) != null && t.to ? (l.push((e = this.props) == null ? void 0 : e.to), !0) : !1;
  }
  /**
   * Triggers the click event
   *
   * Вызывает событие клика
   * @param event event object/ объект события
   * @param options data object/ объект с данными
   */
  emit(t, e) {
    this.emits && (this.emits("click", t, e), this.emits("clickLite", e));
  }
}
export {
  g as E
};

var a = Object.defineProperty;
var n = (s, t, e) => t in s ? a(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var r = (s, t, e) => n(s, typeof t != "symbol" ? t + "" : t, e);
import { toRefs as h } from "vue";
import { isEnter as u, RouterItemRef as p } from "@dxtmisha/functional";
class m {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param enabled Object for working with activity status/ Объект для работы со статусом активности
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(t, e, i) {
    r(this, "refs");
    /**
     * Event trigger function
     *
     * Функция вызова события
     * @param event event object/ объект события
     * @param options data object/ объект с данными
     */
    r(this, "onClick", (t, e) => {
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
    r(this, "onKeydown", (t, e) => {
      u(t) && (this.onClick(t, e), t.preventDefault());
    });
    this.props = t, this.enabled = e, this.emits = i, this.refs = t ? h(t) : void 0;
  }
  /**
   * Returns bindings for the element.
   *
   * Возвращает привязки для элемента.
   */
  get binds() {
    return {
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
    var i, o, l;
    const e = (l = (o = (i = t.target) == null ? void 0 : i.closest("[data-event-type]")) == null ? void 0 : o.dataset) == null ? void 0 : l.eventType;
    return e != null ? e : "click";
  }
  /**
   * Changing the link through the router
   *
   * Изменение ссылки через router
   */
  toRouter() {
    var t, e;
    return (t = this.props) != null && t.to ? (p.push((e = this.props) == null ? void 0 : e.to), !0) : !1;
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
  m as E
};

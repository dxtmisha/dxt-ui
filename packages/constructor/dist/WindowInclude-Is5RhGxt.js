var d = Object.defineProperty;
var g = (p, e, t) => e in p ? d(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var o = (p, e, t) => g(p, typeof e != "symbol" ? e + "" : e, t);
import { ref as m, computed as l } from "vue";
import { toBind as h, getRef as a } from "@dxtmisha/functional";
class v {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, t, n, i, s, r) {
    /** Reference to window element expose/ Ссылка на expose элемента окна */
    o(this, "element", m());
    /** Computed bindings for the window/ Вычисляемые привязки для окна */
    o(this, "binds", l(() => {
      var t, n;
      return {
        ...h(
          (t = a(this.extra)) != null ? t : {},
          (n = this.props.windowAttrs) != null ? n : {}
        ),
        disabled: this.props.disabled,
        autoClose: this.props.autoClose,
        preparation: this.getPreparation,
        opening: this.getOpening,
        closing: this.getClosing
      };
    }));
    /**
     * Expose helpers for window state and actions/
     * Вспомогательные методы expose для состояния и действий окна
     */
    o(this, "expose", {
      id: l(() => {
        var e;
        return String((e = this.element.value) == null ? void 0 : e.id);
      }),
      open: l(() => {
        var e;
        return !!((e = this.element.value) != null && e.open.value);
      }),
      control: l(() => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.control.value;
      }),
      setOpen: async (e) => {
        var t;
        return (t = this.element.value) == null ? void 0 : t.setOpen(e);
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
      windowElement: this.element
    });
    /**
     * Render the Window component with slots/
     * Рендер компонента Window со слотами
     * @param slotsChildren slots passed to the window/ слоты, передаваемые окну
     * @param attrs additional attributes/ дополнительные атрибуты
     */
    o(this, "render", (e, t) => this.components ? this.components.render(
      "window",
      {
        ...h(
          t != null ? t : {},
          this.binds.value
        ),
        ref: this.element,
        onWindow: this.onWindow
      },
      e,
      this.index
    ) : []);
    /** Returns preparation result/ Возвращает результат preparation */
    o(this, "getPreparation", () => {
      var e, t, n, i, s;
      return (s = (t = (e = a(this.extra)) == null ? void 0 : e.preparation) == null ? void 0 : t.call(e)) != null ? s : (i = (n = this.props.windowAttrs) == null ? void 0 : n.preparation) == null ? void 0 : i.call(n);
    });
    /** Returns opening result/ Возвращает результат opening */
    o(this, "getOpening", () => {
      var e, t, n, i, s, r;
      return (r = (s = (t = (e = a(this.extra)) == null ? void 0 : e.opening) == null ? void 0 : t.call(e)) != null ? s : (i = (n = this.props.windowAttrs) == null ? void 0 : n.opening) == null ? void 0 : i.call(n)) != null ? r : !0;
    });
    /** Returns closing result/ Возвращает результат closing */
    o(this, "getClosing", () => {
      var e, t, n, i, s, r;
      return (r = (s = (t = (e = a(this.extra)) == null ? void 0 : e.closing) == null ? void 0 : t.call(e)) != null ? s : (i = (n = this.props.windowAttrs) == null ? void 0 : n.closing) == null ? void 0 : i.call(n)) != null ? r : !0;
    });
    /**
     * Emits 'window' event upward/
     * Поднимает событие 'window' наверх
     * @param options event payload/ параметры события
     */
    o(this, "onWindow", (e) => {
      var t;
      (t = this.emits) == null || t.call(this, "window", e);
    });
    this.props = e, this.className = t, this.components = n, this.emits = i, this.extra = s, this.index = r;
  }
}
export {
  v as W
};

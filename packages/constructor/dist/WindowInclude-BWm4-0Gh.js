var g = Object.defineProperty;
var m = (a, e, t) => e in a ? g(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var o = (a, e, t) => m(a, typeof e != "symbol" ? e + "" : e, t);
import { ref as u, computed as l } from "vue";
import { toBind as h, getRef as p } from "@dxtmisha/functional";
class y {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param ariaLabelledby identifier for the label/ идентификатор для метки
   * @param ariaDescribedby identifier for the description/ идентификатор для описания
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, t, i, s, n, r, d, c) {
    /** Reference to window element expose/ Ссылка на expose элемента окна */
    o(this, "element", u());
    /** Computed bindings for the window/ Вычисляемые привязки для окна */
    o(this, "binds", l(() => {
      var t, i;
      return {
        ...h(
          (t = p(this.extra)) != null ? t : {},
          (i = this.props.windowAttrs) != null ? i : {}
        ),
        disabled: this.props.disabled,
        autoClose: this.props.autoClose,
        preparation: this.getPreparation,
        opening: this.getOpening,
        closing: this.getClosing,
        ariaLabelledby: this.ariaLabelledby,
        ariaDescribedby: this.ariaDescribedby
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
      var e, t, i, s, n;
      return (n = (t = (e = p(this.extra)) == null ? void 0 : e.preparation) == null ? void 0 : t.call(e)) != null ? n : (s = (i = this.props.windowAttrs) == null ? void 0 : i.preparation) == null ? void 0 : s.call(i);
    });
    /** Returns opening result/ Возвращает результат opening */
    o(this, "getOpening", () => {
      var e, t, i, s, n, r;
      return (r = (n = (t = (e = p(this.extra)) == null ? void 0 : e.opening) == null ? void 0 : t.call(e)) != null ? n : (s = (i = this.props.windowAttrs) == null ? void 0 : i.opening) == null ? void 0 : s.call(i)) != null ? r : !0;
    });
    /** Returns closing result/ Возвращает результат closing */
    o(this, "getClosing", () => {
      var e, t, i, s, n, r;
      return (r = (n = (t = (e = p(this.extra)) == null ? void 0 : e.closing) == null ? void 0 : t.call(e)) != null ? n : (s = (i = this.props.windowAttrs) == null ? void 0 : i.closing) == null ? void 0 : s.call(i)) != null ? r : !0;
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
    this.props = e, this.className = t, this.components = i, this.emits = s, this.extra = n, this.ariaLabelledby = r, this.ariaDescribedby = d, this.index = c;
  }
}
export {
  y as W
};

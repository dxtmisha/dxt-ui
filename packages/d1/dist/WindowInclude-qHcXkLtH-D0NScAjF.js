import { ref as w, computed as d } from "vue";
import { toBinds as y, getRef as h, toBind as x } from "@dxtmisha/functional";
var f = Object.defineProperty, O = (o, n, a) => n in o ? f(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a, r = (o, n, a) => O(o, typeof n != "symbol" ? n + "" : n, a);
class D {
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
  constructor(n, a, p, v, c, m, g, b) {
    r(this, "element", w()), r(this, "binds", d(() => y(
      h(this.extra),
      {
        class: `${this.className}__window`,
        disabled: this.props.disabled,
        autoClose: this.props.autoClose,
        preparation: this.getPreparation,
        opening: this.getOpening,
        closing: this.getClosing,
        ariaLabelledby: this.ariaLabelledby,
        ariaDescribedby: this.ariaDescribedby
      },
      this.props.windowAttrs
    ))), r(this, "expose", {
      id: d(() => {
        var e;
        return String((e = this.element.value) == null ? void 0 : e.id);
      }),
      open: d(() => {
        var e;
        return !!((e = this.element.value) != null && e.open);
      }),
      control: d(() => {
        var e;
        return (e = this.element.value) == null ? void 0 : e.control;
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
    }), r(this, "render", (e, t) => this.components ? this.components.render(
      "window",
      {
        ...x(
          t != null ? t : {},
          this.binds.value
        ),
        ref: this.element,
        onWindow: this.onWindow
      },
      e,
      this.index
    ) : []), r(this, "getPreparation", () => {
      var e, t, i, l, s;
      return (s = (t = (e = h(this.extra)) == null ? void 0 : e.preparation) == null ? void 0 : t.call(e)) != null ? s : (l = (i = this.props.windowAttrs) == null ? void 0 : i.preparation) == null ? void 0 : l.call(i);
    }), r(this, "getOpening", () => {
      var e, t, i, l, s, u;
      return (u = (s = (t = (e = h(this.extra)) == null ? void 0 : e.opening) == null ? void 0 : t.call(e)) != null ? s : (l = (i = this.props.windowAttrs) == null ? void 0 : i.opening) == null ? void 0 : l.call(i)) != null ? u : !0;
    }), r(this, "getClosing", () => {
      var e, t, i, l, s, u;
      return (u = (s = (t = (e = h(this.extra)) == null ? void 0 : e.closing) == null ? void 0 : t.call(e)) != null ? s : (l = (i = this.props.windowAttrs) == null ? void 0 : i.closing) == null ? void 0 : l.call(i)) != null ? u : !0;
    }), r(this, "onWindow", (e) => {
      var t;
      (t = this.emits) == null || t.call(this, "window", e);
    }), this.props = n, this.className = a, this.components = p, this.emits = v, this.extra = c, this.ariaLabelledby = m, this.ariaDescribedby = g, this.index = b;
  }
}
export {
  D as v
};

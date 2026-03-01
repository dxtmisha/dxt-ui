import { ref as f, computed as p } from "vue";
import { toBinds as k, getRef as v } from "@dxtmisha/functional";
var I = Object.defineProperty, x = (t, s, i) => s in t ? I(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i, e = (t, s, i) => x(t, typeof s != "symbol" ? s + "" : s, i);
class H {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя
   * @param labelId identifier for the label/ идентификатор для метки
   * @param descriptionId identifier for the description/ идентификатор для описания
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, i, n, b, c, d, m, u) {
    e(this, "element", f()), e(this, "is", p(() => !!(this.props.barsLabel || this.props.barsDescription || this.props.barsBackHide !== !0))), e(this, "binds", p(() => ({
      ...k(
        v(this.extra),
        this.props.barsAttrs,
        { class: `${this.className}__bars` }
      ),
      labelId: this.labelId,
      label: this.props.barsLabel,
      descriptionId: this.descriptionId,
      description: this.props.barsDescription,
      backHide: this.props.barsBackHide,
      bars: this.props.barsList
    }))), e(this, "render", () => {
      var r;
      return this.components && !this.props.barsHide ? this.components.render(
        "bars",
        {
          ref: this.element,
          ...this.binds.value,
          onClick: this.onClick
        },
        void 0,
        (r = this.index) != null ? r : "bars"
      ) : [];
    }), e(this, "onClick", (r, a) => {
      var o, l, h;
      (o = this.emits) == null || o.call(this, "bars", r, a), (l = this.emits) == null || l.call(this, "barsLite", a), a.type === "back" && ((h = this.emits) == null || h.call(this, "barsBack", a));
    }), this.props = s, this.className = i, this.components = n, this.emits = b, this.extra = c, this.labelId = d, this.descriptionId = m, this.index = u;
  }
}
export {
  H as u
};

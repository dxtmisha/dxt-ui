import { ref as f, computed as p } from "vue";
import { toBinds as k, getRef as v } from "@dxtmisha/functional";
import { _ as I } from "./D1Bars.vue_vue_type_script_setup_true_lang-R6h1QTRG.js";
var x = Object.defineProperty, B = (t, s, i) => s in t ? x(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i, r = (t, s, i) => B(t, typeof s != "symbol" ? s + "" : s, i);
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
  constructor(s, i, n, c, b, d, m, u) {
    r(this, "element", f()), r(this, "is", p(() => !!(this.props.barsLabel || this.props.barsDescription || this.props.barsBackHide !== !0))), r(this, "binds", p(() => ({
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
    }))), r(this, "render", () => {
      var e;
      return this.components && !this.props.barsHide ? this.components.render(
        "bars",
        {
          ref: this.element,
          ...this.binds.value,
          onClick: this.onClick
        },
        void 0,
        (e = this.index) != null ? e : "bars"
      ) : [];
    }), r(this, "onClick", (e, a) => {
      var o, l, h;
      (o = this.emits) == null || o.call(this, "bars", e, a), (l = this.emits) == null || l.call(this, "barsLite", a), a.type === "back" && ((h = this.emits) == null || h.call(this, "barsBack", a));
    }), this.props = s, this.className = i, this.components = n, this.emits = c, this.extra = b, this.labelId = d, this.descriptionId = m, this.index = u;
  }
}
const L = I;
export {
  L as D,
  H as u
};

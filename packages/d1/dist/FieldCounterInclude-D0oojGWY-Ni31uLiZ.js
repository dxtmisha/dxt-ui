import { computed as o } from "vue";
import { isNull as u, isFilled as l, toBinds as i, getRef as a } from "@dxtmisha/functional";
var c = Object.defineProperty, m = (e, t, s) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, r = (e, t, s) => m(e, typeof t != "symbol" ? t + "" : t, s);
class x {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, n, p, h) {
    r(this, "isCounter", o(
      () => !!(this.props.counterShow && (!u(this.props.counter) || l(this.props.maxlength)))
    )), r(this, "binds", o(() => i(
      a(this.extra),
      {
        id: this.props.counterId,
        counter: this.props.counter,
        maxlength: this.props.maxlength,
        template: this.props.counterTemplate
      },
      this.props.fieldCounterAttrs
    ))), r(this, "bindsIntermediary", o(() => ({
      counter: this.props.counter,
      counterShow: this.props.counterShow,
      counterTemplate: this.props.counterTemplate,
      maxlength: this.props.maxlength,
      fieldCounterAttrs: this.props.fieldCounterAttrs
    }))), r(this, "render", () => this.components && this.isCounter.value ? this.components.render(
      "fieldCounter",
      {
        ...i(
          this.binds.value,
          { class: `${this.className}__fieldCounter` }
        )
      },
      void 0,
      this.index
    ) : []), this.props = t, this.className = s, this.components = n, this.extra = p, this.index = h;
  }
}
export {
  x as C
};

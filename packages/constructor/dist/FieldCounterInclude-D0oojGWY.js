var u = Object.defineProperty;
var l = (e, t, s) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var r = (e, t, s) => l(e, typeof t != "symbol" ? t + "" : t, s);
import { computed as o } from "vue";
import { isNull as c, isFilled as a, toBinds as i, getRef as d } from "@dxtmisha/functional";
class C {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(t, s, n, p, h) {
    /** Checks if counter should be displayed/ Проверяет, надо ли отображать счетчик */
    r(this, "isCounter", o(
      () => !!(this.props.counterShow && (!c(this.props.counter) || a(this.props.maxlength)))
    ));
    /** Computed bindings for FieldCounter/ Вычисляемые привязки для FieldCounter */
    r(this, "binds", o(() => i(
      d(this.extra),
      {
        id: this.props.counterId,
        counter: this.props.counter,
        maxlength: this.props.maxlength,
        template: this.props.counterTemplate
      },
      this.props.fieldCounterAttrs
    )));
    /** Intermediate bindings for FieldCounter/ Промежуточные привязки для FieldCounter */
    r(this, "bindsIntermediary", o(() => ({
      counter: this.props.counter,
      counterShow: this.props.counterShow,
      counterTemplate: this.props.counterTemplate,
      maxlength: this.props.maxlength,
      fieldCounterAttrs: this.props.fieldCounterAttrs
    })));
    /**
     * Render the FieldCounter component/
     * Рендер компонента FieldCounter
     */
    r(this, "render", () => this.components && this.isCounter.value ? this.components.render(
      "fieldCounter",
      {
        ...i(
          this.binds.value,
          { class: `${this.className}__fieldCounter` }
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = t, this.className = s, this.components = n, this.extra = p, this.index = h;
  }
}
export {
  C as F
};

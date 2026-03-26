import { computed as o } from "vue";
import { getElementId as h, isFilled as n, getRef as l, toBinds as d } from "@dxtmisha/functional";
import { C as m } from "./FieldCounterInclude-D0oojGWY-Ni31uLiZ.js";
var f = Object.defineProperty, I = (i, s, t) => s in i ? f(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t, e = (i, s, t) => I(i, typeof s != "symbol" ? s + "" : s, t);
class w {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param validationMessage error line/ строка ошибки
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, t, p, u, v, c, g) {
    e(this, "helperId", h()), e(this, "validationId", h()), e(this, "counterId", h()), e(this, "fieldCounter"), e(this, "isValidationMessage", o(
      () => n(this.validation.value)
    )), e(this, "id", o(() => {
      var a;
      const r = [];
      return this.props.helperMessage && r.push(this.helperId), this.props.validationMessage && r.push(this.validationId), (a = this.isCounter) != null && a.value && this.props.counterShow && r.push(this.counterId), r.join(" ");
    })), e(this, "validation", o(
      () => n(this.props.validationMessage) ? this.props.validationMessage : l(this.validationMessage)
    )), e(this, "binds", o(() => {
      var a;
      return d(
        l(this.extra),
        (a = this.isCounter) != null && a.value ? this.fieldCounter.bindsIntermediary.value : {},
        {
          disabled: this.props.disabled,
          forceShow: this.props.forceShowMessage,
          helperMessage: this.props.helperMessage,
          validationMessage: this.validation.value,
          helperId: this.helperId,
          validationId: this.validationId,
          counterId: this.counterId
        },
        this.props.fieldMessageAttrs
      );
    })), e(this, "render", () => this.components ? this.components.render(
      "fieldMessage",
      {
        ...d(
          this.binds.value,
          { class: `${this.className}__fieldMessage` }
        )
      },
      void 0,
      this.index
    ) : []), this.props = s, this.className = t, this.components = p, this.validationMessage = u, this.isCounter = v, this.extra = c, this.index = g, this.fieldCounter = new m(this.props, this.className);
  }
}
export {
  w as b
};

import { computed as r } from "vue";
import { getElementId as h, isFilled as n, getRef as l, toBinds as d } from "@dxtmisha/functional";
import { C as g } from "./index-DNSGrhyp.js";
import { _ as f } from "./D1FieldMessage.vue_vue_type_script_setup_true_lang-D8fGwu3T.js";
var M = Object.defineProperty, I = (i, s, t) => s in i ? M(i, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[s] = t, e = (i, s, t) => I(i, typeof s != "symbol" ? s + "" : s, t);
class _ {
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
  constructor(s, t, p, u, v, c, m) {
    e(this, "helperId", h()), e(this, "validationId", h()), e(this, "counterId", h()), e(this, "fieldCounter"), e(this, "isValidationMessage", r(
      () => n(this.validation.value)
    )), e(this, "id", r(() => {
      var a;
      const o = [];
      return this.props.helperMessage && o.push(this.helperId), this.props.validationMessage && o.push(this.validationId), (a = this.isCounter) != null && a.value && this.props.counterShow && o.push(this.counterId), o.join(" ");
    })), e(this, "validation", r(
      () => n(this.props.validationMessage) ? this.props.validationMessage : l(this.validationMessage)
    )), e(this, "binds", r(() => {
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
    ) : []), this.props = s, this.className = t, this.components = p, this.validationMessage = u, this.isCounter = v, this.extra = c, this.index = m, this.fieldCounter = new g(this.props, this.className);
  }
}
const y = f;
export {
  y as D,
  _ as b
};

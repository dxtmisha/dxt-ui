var g = Object.defineProperty;
var m = (i, s, e) => s in i ? g(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var t = (i, s, e) => m(i, typeof s != "symbol" ? s + "" : s, e);
import { computed as r } from "vue";
import { getRef as d, isFilled as n, toBinds as h } from "@dxtmisha/functional";
import { F as f } from "./FieldCounterInclude-BR6n8WlH.js";
class F {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param validationMessage error line/ строка ошибки
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param helperId helper message identifier/ идентификатор сообщения помощника
   * @param validationId validation message identifier/ идентификатор сообщения проверки
   * @param counterId counter identifier/ идентификатор счетчика
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, e, a, o, l, p, u, c, v, I) {
    /** Field counter include/ Подключение счетчика поля */
    t(this, "fieldCounter");
    /** Validation message computed/ Вычисляемое сообщение валидации */
    t(this, "validation", r(
      () => n(this.props.validationMessage) ? this.props.validationMessage : d(this.validationMessage)
    ));
    /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
    t(this, "isValidationMessage", r(
      () => n(this.validation.value)
    ));
    /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
    t(this, "binds", r(() => {
      var s, e, a, o;
      return h(
        d(this.extra),
        (s = this.isCounter) != null && s.value ? this.fieldCounter.bindsIntermediary.value : {},
        {
          disabled: this.props.disabled,
          forceShow: this.props.forceShowMessage,
          helperMessage: this.props.helperMessage,
          validationMessage: this.validation.value,
          helperId: (e = this.props.helperId) != null ? e : this.helperId,
          validationId: (a = this.props.validationId) != null ? a : this.validationId,
          counterId: (o = this.props.counterId) != null ? o : this.counterId
        },
        this.props.fieldMessageAttrs
      );
    }));
    /**
     * Render the FieldMessage component.
     *
     * Рендер компонента FieldMessage.
     */
    t(this, "render", () => this.components ? this.components.render(
      "fieldMessage",
      {
        ...h(
          this.binds.value,
          { class: `${this.className}__fieldMessage` }
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = s, this.className = e, this.components = a, this.validationMessage = o, this.isCounter = l, this.helperId = p, this.validationId = u, this.counterId = c, this.extra = v, this.index = I, this.fieldCounter = new f(this.props, this.className);
  }
}
export {
  F
};

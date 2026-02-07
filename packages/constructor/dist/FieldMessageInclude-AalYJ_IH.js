var v = Object.defineProperty;
var I = (i, e, t) => e in i ? v(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var s = (i, e, t) => I(i, typeof e != "symbol" ? e + "" : e, t);
import { computed as a } from "vue";
import { getElementId as d, isFilled as o, getRef as r, toBinds as n } from "@dxtmisha/functional";
import { F as g } from "./FieldCounterInclude-D0oojGWY.js";
class b {
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
  constructor(e, t, l, h, p, u, c) {
    s(this, "helperId", d());
    s(this, "validationId", d());
    s(this, "counterId", d());
    /** Field counter include/ Подключение счетчика поля */
    s(this, "fieldCounter");
    /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
    s(this, "isValidationMessage", a(
      () => o(this.validation.value)
    ));
    /**
     * Returns the identifier.
     *
     * Возвращает идентификатор.
     */
    s(this, "id", a(
      () => `${this.helperId} ${this.validationId} ${this.counterId}`
    ));
    /** Validation message computed/ Вычисляемое сообщение валидации */
    s(this, "validation", a(
      () => o(this.props.validationMessage) ? this.props.validationMessage : r(this.validationMessage)
    ));
    /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
    s(this, "binds", a(() => {
      var e;
      return n(
        r(this.extra),
        (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {},
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
    }));
    /**
     * Render the FieldMessage component.
     *
     * Рендер компонента FieldMessage.
     */
    s(this, "render", () => this.components ? this.components.render(
      "fieldMessage",
      {
        ...n(
          this.binds.value,
          { class: `${this.className}__fieldMessage` }
        )
      },
      void 0,
      this.index
    ) : []);
    this.props = e, this.className = t, this.components = l, this.validationMessage = h, this.isCounter = p, this.extra = u, this.index = c, this.fieldCounter = new g(this.props, this.className);
  }
}
export {
  b as F
};

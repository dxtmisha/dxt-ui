var v = Object.defineProperty;
var g = (t, s, i) => s in t ? v(t, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[s] = i;
var e = (t, s, i) => g(t, typeof s != "symbol" ? s + "" : s, i);
import { computed as a } from "vue";
import { getElementId as o, isFilled as r, getRef as d, toBinds as n } from "@dxtmisha/functional";
import { F as f } from "./FieldCounterInclude-D0oojGWY.js";
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
  constructor(s, i, h, l, p, u, c) {
    e(this, "helperId", o());
    e(this, "validationId", o());
    e(this, "counterId", o());
    /** Field counter include/ Подключение счетчика поля */
    e(this, "fieldCounter");
    /** Checks if validation message should be displayed/ Проверяет, надо ли отображать сообщение валидации */
    e(this, "isValidationMessage", a(
      () => r(this.validation.value)
    ));
    /** Returns the identifier/ Возвращает идентификатор */
    e(this, "id", a(() => {
      var i;
      const s = [];
      return this.props.helperMessage && s.push(this.helperId), this.props.validationMessage && s.push(this.validationId), (i = this.isCounter) != null && i.value && this.props.counterShow && s.push(this.counterId), s.join(" ");
    }));
    /** Validation message computed/ Вычисляемое сообщение валидации */
    e(this, "validation", a(
      () => r(this.props.validationMessage) ? this.props.validationMessage : d(this.validationMessage)
    ));
    /** Computed bindings for FieldMessage/ Вычисляемые привязки для FieldMessage */
    e(this, "binds", a(() => {
      var s;
      return n(
        d(this.extra),
        (s = this.isCounter) != null && s.value ? this.fieldCounter.bindsIntermediary.value : {},
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
    e(this, "render", () => this.components ? this.components.render(
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
    this.props = s, this.className = i, this.components = h, this.validationMessage = l, this.isCounter = p, this.extra = u, this.index = c, this.fieldCounter = new f(this.props, this.className);
  }
}
export {
  b as F
};

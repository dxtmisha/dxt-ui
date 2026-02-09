var f = Object.defineProperty;
var m = (t, e, i) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => m(t, typeof e != "symbol" ? e + "" : e, i);
import { computed as r } from "vue";
import { getElementId as o, isFilled as b, toBinds as l, getRef as n } from "@dxtmisha/functional";
import { F as I } from "./FieldCounterInclude-D0oojGWY.js";
class L {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param forId element ID/ идентификатор элемента
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(e, i, d, h, a, u, p, c) {
    s(this, "labelId", o());
    s(this, "counterId", o());
    /** Field counter include/ Подключение счетчика поля */
    s(this, "fieldCounter");
    /** Checks if label should be displayed/ Проверяет, надо ли отображать метку */
    s(this, "is", r(() => {
      var e;
      return b(this.props.label) || !!((e = this.isCounter) != null && e.value);
    }));
    /** Returns the identifier/ Возвращает идентификатор */
    s(this, "id", r(() => {
      var e;
      return (e = this.isCounter) != null && e.value && this.props.counterShow ? this.counterId : "";
    }));
    /** Computed bindings for FieldLabel/ Вычисляемые привязки для FieldLabel */
    s(this, "binds", r(
      () => {
        var e;
        return l(
          n(this.extra),
          (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {},
          {
            for: n(this.forId),
            label: this.props.label,
            required: this.props.required,
            labelId: this.labelId,
            counterId: this.counterId
          },
          this.props.fieldLabelAttrs
        );
      }
    ));
    /**
     * Render the FieldLabel component/ Рендер компонента FieldLabel
     */
    s(this, "render", () => this.components && this.is.value ? this.components.render(
      "fieldLabel",
      {
        ...l(
          this.binds.value,
          { class: `${this.className}__fieldLabel` }
        )
      },
      this.slots,
      this.index
    ) : []);
    this.props = e, this.className = i, this.components = d, this.slots = h, this.forId = a, this.isCounter = u, this.extra = p, this.index = c, this.fieldCounter = new I(this.props, this.className);
  }
}
export {
  L as F
};

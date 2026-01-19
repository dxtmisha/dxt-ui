var c = Object.defineProperty;
var b = (t, s, e) => s in t ? c(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var i = (t, s, e) => b(t, typeof s != "symbol" ? s + "" : s, e);
import { computed as l } from "vue";
import { isFilled as m, toBinds as o, getRef as f } from "@dxtmisha/functional";
import { F as I } from "./FieldCounterInclude-BR6n8WlH.js";
class L {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param isCounter whether to display the counter/ отображать ли счетчик
   * @param labelId label identifier/ идентификатор метки
   * @param counterId counter identifier/ идентификатор счетчика
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(s, e, r, n, d, h, a, p, u) {
    /** Field counter include/ Подключение счетчика поля */
    i(this, "fieldCounter");
    /** Checks if label should be displayed/ Проверяет, надо ли отображать метку */
    i(this, "is", l(() => {
      var s;
      return m(this.props.label) || !!((s = this.isCounter) != null && s.value);
    }));
    /** Computed bindings for FieldLabel/ Вычисляемые привязки для FieldLabel */
    i(this, "binds", l(
      () => {
        var s, e, r;
        return o(
          f(this.extra),
          (s = this.isCounter) != null && s.value ? this.fieldCounter.bindsIntermediary.value : {},
          {
            label: this.props.label,
            required: this.props.required,
            labelId: (e = this.props.labelId) != null ? e : this.labelId,
            counterId: (r = this.props.counterId) != null ? r : this.counterId
          },
          this.props.fieldLabelAttrs
        );
      }
    ));
    /**
     * Render the FieldLabel component/ Рендер компонента FieldLabel
     */
    i(this, "render", () => this.components && this.is.value ? this.components.render(
      "fieldLabel",
      {
        ...o(
          this.binds.value,
          { class: `${this.className}__fieldLabel` }
        )
      },
      this.slots,
      this.index
    ) : []);
    this.props = s, this.className = e, this.components = r, this.slots = n, this.isCounter = d, this.labelId = h, this.counterId = a, this.extra = p, this.index = u, this.fieldCounter = new I(this.props, this.className);
  }
}
export {
  L as F
};

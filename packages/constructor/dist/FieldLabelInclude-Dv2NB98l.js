var f = Object.defineProperty;
var b = (i, s, e) => s in i ? f(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var t = (i, s, e) => b(i, typeof s != "symbol" ? s + "" : s, e);
import { computed as r } from "vue";
import { getElementId as o, isFilled as m, toBinds as l, getRef as n } from "@dxtmisha/functional";
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
  constructor(s, e, h, d, a, u, p, c) {
    t(this, "labelId", o());
    t(this, "counterId", o());
    /** Field counter include/ Подключение счетчика поля */
    t(this, "fieldCounter");
    /** Checks if label should be displayed/ Проверяет, надо ли отображать метку */
    t(this, "is", r(() => {
      var s;
      return m(this.props.label) || !!((s = this.isCounter) != null && s.value);
    }));
    /** Returns the identifier/ Возвращает идентификатор */
    t(this, "id", r(() => {
      var e;
      const s = [];
      return this.props.label && s.push(this.labelId), (e = this.isCounter) != null && e.value && this.props.counterShow && s.push(this.counterId), s.join(" ");
    }));
    /** Computed bindings for FieldLabel/ Вычисляемые привязки для FieldLabel */
    t(this, "binds", r(
      () => {
        var s;
        return l(
          n(this.extra),
          (s = this.isCounter) != null && s.value ? this.fieldCounter.bindsIntermediary.value : {},
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
    t(this, "render", () => this.components && this.is.value ? this.components.render(
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
    this.props = s, this.className = e, this.components = h, this.slots = d, this.forId = a, this.isCounter = u, this.extra = p, this.index = c, this.fieldCounter = new I(this.props, this.className);
  }
}
export {
  L as F
};

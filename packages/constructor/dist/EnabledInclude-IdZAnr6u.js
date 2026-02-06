var r = Object.defineProperty;
var d = (i, s, o) => s in i ? r(i, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : i[s] = o;
var a = (i, s, o) => d(i, typeof s != "symbol" ? s + "" : s, o);
import { computed as e } from "vue";
import { A as l } from "./AriaStaticInclude-BVCgDZbU.js";
class h {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param progress object for working with progress/ объект для работы с прогрессами
   */
  constructor(s, o) {
    /**
     * Checks if the element is active
     *
     * Проверяет, активен ли элемент
     */
    a(this, "isEnabled", e(
      () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic)
    ));
    /**
     * checks if the read-only status is enabled/ проверяет, включён ли статус "только для чтения"
     */
    a(this, "isReadonly", e(() => !!this.props.readonly));
    /**
     * checks if the element is disabled/ проверяет, отключён ли элемент
     */
    a(this, "isDisabled", e(() => !!this.props.disabled));
    /**
     * checks if the element is disabled or the value is empty/
     * проверяет, отключён ли элемент или пустое ли значение
     */
    a(this, "isDisabledOrUndefined", e(() => this.isDisabled.value || void 0));
    /**
     * list of aria properties for the enabled state/
     * список aria свойств для состояния активности
     */
    a(this, "aria", e(
      () => l.disabled(!this.isEnabled.value)
    ));
    this.props = s, this.progress = o;
  }
}
export {
  h as E
};

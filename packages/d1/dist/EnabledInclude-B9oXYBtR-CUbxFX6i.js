import { computed as e } from "vue";
import { l as a } from "./AriaStaticInclude-DRHG8ILX-ByYIvmyT.js";
var o = Object.defineProperty, p = (i, s, r) => s in i ? o(i, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[s] = r, t = (i, s, r) => p(i, typeof s != "symbol" ? s + "" : s, r);
class h {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param progress object for working with progress/ объект для работы с прогрессами
   */
  constructor(s, r) {
    t(this, "isEnabled", e(
      () => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic)
    )), t(this, "isReadonly", e(() => !!this.props.readonly)), t(this, "isDisabled", e(() => !!this.props.disabled)), t(this, "isDisabledOrUndefined", e(() => this.isDisabled.value || void 0)), t(this, "aria", e(
      () => a.disabled(!this.isEnabled.value)
    )), this.props = s, this.progress = r;
  }
}
export {
  h
};

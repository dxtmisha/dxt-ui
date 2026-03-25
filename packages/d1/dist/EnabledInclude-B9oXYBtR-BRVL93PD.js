import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { computed as t } from "vue";
//#region ../constructor/dist/EnabledInclude-B9oXYBtR.js
var n = Object.defineProperty, r = (e, t, r) => t in e ? n(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r, i = (e, t, n) => r(e, typeof t == "symbol" ? t : t + "", n), a = class {
	constructor(n, r) {
		i(this, "isEnabled", t(() => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic))), i(this, "isReadonly", t(() => !!this.props.readonly)), i(this, "isDisabled", t(() => !!this.props.disabled)), i(this, "isDisabledOrUndefined", t(() => this.isDisabled.value || void 0)), i(this, "aria", t(() => e.disabled(!this.isEnabled.value))), this.props = n, this.progress = r;
	}
};
//#endregion
export { a as t };

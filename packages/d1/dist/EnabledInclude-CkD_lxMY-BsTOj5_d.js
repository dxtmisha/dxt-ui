import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { computed as n } from "vue";
//#region ../constructor/dist/EnabledInclude-CkD_lxMY.js
var r = class {
	constructor(r, i) {
		e(this, "isEnabled", n(() => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic))), e(this, "isReadonly", n(() => !!this.props.readonly)), e(this, "isDisabled", n(() => !!this.props.disabled)), e(this, "isDisabledOrUndefined", n(() => this.isDisabled.value || void 0)), e(this, "aria", n(() => t.disabled(!this.isEnabled.value))), this.props = r, this.progress = i;
	}
};
//#endregion
export { r as t };

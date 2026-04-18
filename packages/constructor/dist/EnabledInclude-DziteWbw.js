import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { computed as n } from "vue";
//#region src/classes/EnabledInclude.ts
var r = class {
	constructor(r, i) {
		t(this, "isEnabled", n(() => !this.props.disabled && !this.props.readonly && (!this.progress || !this.progress.is.value) && !!(!("dynamic" in this.props) || this.props.dynamic))), t(this, "isReadonly", n(() => !!this.props.readonly)), t(this, "isDisabled", n(() => !!this.props.disabled)), t(this, "isDisabledOrUndefined", n(() => this.isDisabled.value || void 0)), t(this, "aria", n(() => e.disabled(!this.isEnabled.value))), this.props = r, this.progress = i;
	}
};
//#endregion
export { r as t };

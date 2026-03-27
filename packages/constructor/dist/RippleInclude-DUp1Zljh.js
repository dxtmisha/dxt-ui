import { t as e } from "./defineProperty-BTtSLqQS.js";
import "@dxtmisha/functional";
//#region src/constructors/Ripple/RippleInclude.ts
var t = class {
	constructor(t, n, r) {
		e(this, "render", () => this.components && this.components.is("ripple") && (!this.enabled || this.enabled.isEnabled.value) ? this.components.render("ripple", { class: `${this.className}__ripple` }) : []), this.className = t, this.components = n, this.enabled = r;
	}
};
//#endregion
export { t };

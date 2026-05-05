import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-3CuEayIP.js";
import { computed as n } from "vue";
import { getBind as r, getRef as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/Progress/ProgressInclude.ts
var o = class {
	constructor(o, s, c, l) {
		t(this, "is", n(() => !!this.props.loading)), t(this, "aria", n(() => e.disabled(this.is.value))), t(this, "binds", n(() => {
			let e = i(this.extra);
			return r(this.props.loading, a(e, { class: `${this.className}__loading` }), "visible");
		})), t(this, "render", () => this.components && this.props.loading ? this.components.render("progress", this.binds.value, void 0, "progress") : []), this.props = o, this.className = s, this.components = c, this.extra = l;
	}
};
//#endregion
export { o as t };

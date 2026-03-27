import { t as e } from "./defineProperty-BTtSLqQS.js";
import { n as t, r as n, t as r } from "./ButtonDesign-CCuTFrhF.js";
import { computed as i } from "vue";
import { getBind as a, getRef as o, toBinds as s } from "@dxtmisha/functional";
//#region src/constructors/Button/ButtonInclude.ts
var c = class {
	constructor(t, n, r, c, l) {
		e(this, "binds", i(() => s(this.props.buttonAttrs, a(o(this.props), o(this.extra), "label")))), e(this, "render", (e) => {
			if (this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value)) {
				var t;
				return this.components.render("button", {
					...this.binds.value,
					...o(e)
				}, void 0, (t = this.index) == null ? "button" : t);
			}
			return [];
		}), this.props = t, this.className = n, this.components = r, this.extra = c, this.index = l;
	}
};
//#endregion
export { n as Button, r as ButtonDesign, c as ButtonInclude, t as defaultsButton };

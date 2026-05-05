import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t } from "vue";
import { getBind as n, getRef as r, toBinds as i } from "@dxtmisha/functional";
//#region src/constructors/Button/ButtonInclude.ts
var a = class {
	constructor(a, o, s, c, l, u) {
		e(this, "binds", t(() => {
			var e;
			return i((e = this.props) == null ? void 0 : e.buttonAttrs, n(r(this.label), r(this.extra), "label"));
		})), e(this, "render", (e) => {
			if (this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value)) {
				var t;
				return this.components.render("button", {
					...this.binds.value,
					...r(e)
				}, void 0, (t = this.index) == null ? "button" : t);
			}
			return [];
		}), this.label = a, this.className = o, this.components = s, this.props = c, this.extra = l, this.index = u;
	}
};
//#endregion
export { a as t };

import { t as e } from "./defineProperty-149Ahniv.js";
import { computed as t } from "vue";
import { getBind as n, getRef as r, toBind as i } from "@dxtmisha/functional";
//#region src/constructors/Badge/BadgeInclude.ts
var a = class {
	constructor(a, o, s, c) {
		e(this, "is", t(() => !!(this.props.badge || this.props.badgeDot))), e(this, "binds", t(() => {
			var e;
			return n(this.props.badgeDot ? {} : this.props.badge, {
				dot: this.props.badgeDot,
				...i((e = r(this.extra)) == null ? {} : e, { class: `${this.className}__badge` })
			}, "label", !0);
		})), e(this, "render", () => this.components && this.is.value ? this.components.render("badge", this.binds.value, void 0, "badge") : []), this.props = a, this.className = o, this.components = s, this.extra = c;
	}
};
//#endregion
export { a as t };

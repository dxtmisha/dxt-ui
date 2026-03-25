import { computed as e } from "vue";
import { getBind as t, getRef as n, toBind as r } from "@dxtmisha/functional";
//#region ../constructor/dist/BadgeInclude-BwCIBVyK.js
var i = Object.defineProperty, a = (e, t, n) => t in e ? i(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, o = (e, t, n) => a(e, typeof t == "symbol" ? t : t + "", n), s = class {
	constructor(i, a, s, c) {
		o(this, "is", e(() => !!(this.props.badge || this.props.badgeDot))), o(this, "binds", e(() => {
			var e;
			return t(this.props.badgeDot ? {} : this.props.badge, {
				dot: this.props.badgeDot,
				...r((e = n(this.extra)) == null ? {} : e, { class: `${this.className}__badge` })
			}, "label", !0);
		})), o(this, "render", () => this.components && this.is.value ? this.components.render("badge", this.binds.value, void 0, "badge") : []), this.props = i, this.className = a, this.components = s, this.extra = c;
	}
};
//#endregion
export { s as t };

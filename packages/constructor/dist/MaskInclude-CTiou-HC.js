import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t, watch as n } from "vue";
import { getBind as r, getRef as i, toBind as a } from "@dxtmisha/functional";
//#region src/constructors/Mask/MaskInclude.ts
var o = class {
	constructor(o, s, c, l, u, d, f, p) {
		e(this, "is", t(() => {
			var e;
			let t = (e = this.type) == null ? void 0 : e.get();
			return this.props.maskNone !== !0 && !!(this.props.mask || t && [
				"number",
				"number-format",
				"currency",
				"datetime",
				"date",
				"year-month",
				"time",
				"hour-minute"
			].indexOf(t) !== -1);
		})), e(this, "bindsStatic", t(() => {
			var e, t, n;
			let o = a((e = i(this.extra)) == null ? {} : e, (t = this.props.maskAttrs) == null ? {} : t);
			return {
				name: this.props.name,
				valueDefault: i(this.valueDefault),
				currency: this.props.currency,
				currencyHide: this.props.currencyHide,
				fraction: this.props.fraction,
				type: (n = this.type) == null ? void 0 : n.get(),
				visible: this.props.maskVisible,
				...r(this.props.mask, o, "mask")
			};
		})), e(this, "binds", t(() => {
			var e;
			return {
				...this.bindsStatic.value,
				value: (e = this.props.modelValue) == null ? this.props.value : e
			};
		})), e(this, "render", (e) => this.components ? this.components.render("mask", { ...a(e == null ? {} : e, this.binds.value) }, void 0, this.index) : []), this.props = o, this.className = s, this.value = c, this.valueDefault = l, this.components = u, this.type = d, this.extra = f, this.index = p, this.value && n(this.is, (e) => {
			e || this.value.setFull(!0);
		});
	}
	isActive() {
		return this.is.value;
	}
};
//#endregion
export { o as t };

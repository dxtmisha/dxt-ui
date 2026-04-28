import { isString as e } from "@dxtmisha/functional";
//#region src/classes/AriaStaticInclude.ts
var t = class {
	static role(e) {
		return { role: e };
	}
	static atomic(e) {
		return { "aria-atomic": this.isTrueOrFalse(e) };
	}
	static checked(e) {
		return { "aria-checked": this.isTrueOrFalse(e) };
	}
	static controls(e) {
		return this.isDataToData("aria-controls", e);
	}
	static current(t) {
		let n = e(t) ? t : this.isTrueOrFalse(t);
		return this.isDataToData("aria-current", n);
	}
	static busy(e) {
		return { "aria-busy": this.isTrueOrFalse(e) };
	}
	static describedby(e) {
		return this.isDataToData("aria-describedby", e);
	}
	static disabled(e = !0) {
		return e ? { "aria-disabled": this.isTrueOrFalse(e) } : {};
	}
	static expanded(e) {
		return { "aria-expanded": this.isTrueOrFalse(e) };
	}
	static haspopup(e) {
		return this.isDataToData("aria-haspopup", e);
	}
	static label(e) {
		return this.isDataToData("aria-label", e);
	}
	static labelledby(e) {
		return this.isDataToData("aria-labelledby", e);
	}
	static invalid(e = !0) {
		return e ? { "aria-invalid": this.isTrueOrFalse(e) } : {};
	}
	static control(e, t, n, r) {
		return {
			id: e,
			...this.controls(t),
			...this.haspopup(n),
			...this.expanded(r)
		};
	}
	static hidden(e = !0) {
		return { "aria-hidden": this.isTrueOrFalse(e) };
	}
	static live(e) {
		return this.isDataToData("aria-live", e);
	}
	static ariaModal(e = !0) {
		return this.isDataToData("aria-modal", e);
	}
	static modal(e = !0, t, n) {
		return {
			...this.ariaModal(e),
			...this.labelledby(t),
			...this.describedby(n)
		};
	}
	static multiselectable(e) {
		return { "aria-multiselectable": this.isTrueOrFalse(e) };
	}
	static selected(e) {
		return e === void 0 ? {} : { "aria-selected": this.isTrueOrFalse(e) };
	}
	static valueMinMax(e, t, n) {
		return {
			"aria-valuenow": e,
			"aria-valuemin": t,
			"aria-valuemax": n
		};
	}
	static isTrueOrFalse(e) {
		return e ? "true" : "false";
	}
	static isDataToData(e, t) {
		return t ? { [e]: t } : {};
	}
};
//#endregion
export { t };

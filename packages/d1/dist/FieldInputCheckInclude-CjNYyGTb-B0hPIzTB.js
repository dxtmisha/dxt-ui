import { anyToString as e, createElement as t, executeFunction as n, isFilled as r, isString as i } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldInputCheckInclude-CjNYyGTb.js
var a = Object.defineProperty, o = (e, t, n) => t in e ? a(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, s = (e, t, n) => o(e, typeof t == "symbol" ? t : t + "", n), c = class a {
	constructor(e, n = a.getGroupDefault(), r) {
		s(this, "input"), this.pattern = e, this.group = n, this.code = r, this.input = t(void 0, "input", this.getAttributes());
	}
	check(t) {
		let n = this.input;
		return n ? (n.type === "checkbox" || n.type === "radio" ? n.checked = !!t : n.value = e(t), this.checkByInput(n)) : {
			group: this.group,
			status: !0,
			value: t
		};
	}
	checkByInput(e) {
		var t;
		return {
			group: this.group,
			input: e,
			status: e.checkValidity(),
			validationMessage: e.validationMessage,
			validity: e.validity,
			validityMessage: (t = this.code) == null ? void 0 : t.get(e.validity),
			required: e.required,
			pattern: this.pattern,
			value: e.value
		};
	}
	getAttributes() {
		let e = this.pattern;
		if (r(e)) {
			let t = n(e);
			if (r(t)) return i(t) ? { pattern: t } : t;
		}
		return {};
	}
	static getGroupDefault() {
		return "check";
	}
};
//#endregion
export { c as t };

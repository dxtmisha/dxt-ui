import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { anyToString as t, createElement as n, executeFunction as r, isFilled as i, isString as a } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldInputCheckInclude-nVNxhJ8H.js
var o = class o {
	constructor(t, r = o.getGroupDefault(), i) {
		e(this, "input", void 0), this.pattern = t, this.group = r, this.code = i, this.input = n(void 0, "input", this.getAttributes());
	}
	check(e) {
		let n = this.input;
		return n ? (n.type === "checkbox" || n.type === "radio" ? n.checked = !!e : n.value = t(e), this.checkByInput(n)) : {
			group: this.group,
			status: !0,
			value: e
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
		if (i(e)) {
			let t = r(e);
			if (i(t)) return a(t) ? { pattern: t } : t;
		}
		return {};
	}
	static getGroupDefault() {
		return "check";
	}
};
//#endregion
export { o as t };

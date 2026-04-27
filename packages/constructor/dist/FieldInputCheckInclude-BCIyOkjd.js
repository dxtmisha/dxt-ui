import { t as e } from "./defineProperty-149Ahniv.js";
import { computed as t, ref as n, watch as r } from "vue";
import { anyToString as i, createElement as a, executeFunction as o, getRef as s, isArray as c, isFilled as l, isObject as u, isString as d, setValues as f, toArray as p, toNumber as m } from "@dxtmisha/functional";
//#region src/classes/Field/FieldVisibilityInclude.ts
var h = class {
	constructor() {
		e(this, "item", n(!1));
	}
	toggle() {
		return this.item.value = !this.item.value, this;
	}
}, g = class {
	constructor(n, r) {
		e(this, "item", t(() => {
			var e;
			let t = this.props.type;
			return t === "password" && (e = this.visibility) != null && e.item.value || t == null ? "text" : t;
		})), this.props = n, this.visibility = r;
	}
	get() {
		return this.item.value;
	}
}, _ = class {
	constructor(e, t) {
		this.props = e, this.element = t;
	}
	get() {
		let e = this.element.value;
		if (e) return "input" in e ? e.input : e;
	}
	getElement() {
		return this.element;
	}
	findByName(e) {
		var t;
		if (e instanceof Element) return e;
		let n = (t = this.get()) == null ? void 0 : t.form;
		if (n) {
			let t = n.querySelector(`[name="${e}"]`);
			if (t) return t;
		}
		let r = document.querySelector(e);
		if (r) return r;
	}
	clear() {
		let e = this.element.value;
		if (e && "clear" in e) {
			var t;
			(t = e.clear) == null || t.call(e);
		}
		return this;
	}
}, v = class {
	constructor(a, o, s, d) {
		e(this, "item", n()), e(this, "isFull", n(!0)), e(this, "hasEdit", n(!1)), e(this, "is", t(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder)), e(this, "isValue", t(() => this.hasEdit.value || this.boolean.value)), e(this, "itemByFull", t(() => this.isFull.value ? this.item.value : void 0)), e(this, "number", t(() => this.boolean.value ? m(this.string.value) : 0)), e(this, "string", t(() => i(this.item.value))), e(this, "boolean", t(() => l(this.item.value))), e(this, "length", t(() => {
			var e;
			let t = this.item.value;
			return c(t) ? t.length : u(t) ? Object.keys(t).length : (e = this.string.value.length) == null ? 0 : e;
		})), e(this, "update", () => {
			(this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
		}), this.props = a, this.refs = o, this.element = s, this.original = d, this.item.value = this.getOriginal(), r([o.value, o.modelValue], this.update);
	}
	get() {
		return this.item.value;
	}
	getToArray() {
		return p(this.item.value);
	}
	set(e) {
		if (this.isDifference(e)) {
			var t;
			this.item.value = f(this.item.value, e, {
				multiple: this.props.multiple,
				maxlength: m(this.props.maxlength)
			});
			let r = (t = this.element) == null ? void 0 : t.getElement();
			if (r && r.value && "setValue" in r.value) {
				var n;
				(n = r.value) == null || n.setValue(this.item.value);
			}
		}
		return this;
	}
	setByEvent(e) {
		switch (typeof e) {
			case "object":
				e && ("value" in e && e.value !== void 0 ? this.set(e.value) : "target" in e && this.setByTarget(e.target), "hasEdit" in e && this.setHasEdit(e.hasEdit), "isFull" in e && this.setFull(e.isFull));
				break;
			default:
				this.set(e);
				break;
		}
		return this;
	}
	setByTarget(e) {
		return this.set(this.isCheckbox(e) ? e.checked : e.value);
	}
	setByChecked(e) {
		let t = e.target;
		return this.set(t.checked);
	}
	setByRadio(e) {
		let t = e.target, n = t.checked ? t.value : "";
		return this.set(n);
	}
	setFull(e) {
		this.isFull.value = e;
	}
	setHasEdit(e) {
		this.hasEdit.value = e;
	}
	setToOriginal() {
		return this.item.value = this.getOriginal(), this;
	}
	clear() {
		var e;
		return this.item.value = s(this.original), (e = this.element) == null || e.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
	}
	isCheckbox(e) {
		return e.type === "checkbox";
	}
	isDifference(e = this.getOriginal()) {
		return this.string.value !== i(e);
	}
	getOriginal() {
		return this.props.value || this.props.modelValue || s(this.original);
	}
	isEdit(e) {
		return e !== void 0 && i(e) !== this.string.value;
	}
}, y = class t {
	constructor(n, r = t.getGroupDefault(), i) {
		e(this, "input", void 0), this.pattern = n, this.group = r, this.code = i, this.input = a(void 0, "input", this.getAttributes());
	}
	check(e) {
		let t = this.input;
		return t ? (t.type === "checkbox" || t.type === "radio" ? t.checked = !!e : t.value = i(e), this.checkByInput(t)) : {
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
		if (l(e)) {
			let t = o(e);
			if (l(t)) return d(t) ? { pattern: t } : t;
		}
		return {};
	}
	static getGroupDefault() {
		return "check";
	}
};
//#endregion
export { h as a, g as i, v as n, _ as r, y as t };

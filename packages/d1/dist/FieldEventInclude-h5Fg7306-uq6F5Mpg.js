import { t as e } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t } from "./FieldInputCheckInclude-CjNYyGTb-B0hPIzTB.js";
import { computed as n, ref as r, watch as i } from "vue";
import { anyToString as a, getRef as o, isArray as s, isFilled as c, isObject as l, setValues as u, toArray as d, toBinds as f, toNumber as p } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldEventInclude-h5Fg7306.js
var m = Object.defineProperty, h = (e, t, n) => t in e ? m(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, g = (e, t, n) => h(e, typeof t == "symbol" ? t : t + "", n), _ = class {
	constructor(e, t, r, i) {
		g(this, "list", n(() => this.getData(this.getAttributes()))), g(this, "listForCheck", n(() => {
			let e = this.list.value;
			return this.props.min || this.props.max || this.props.step ? {
				...e,
				type: "number"
			} : e;
		})), g(this, "listForInput", n(() => this.getData(this.getInputAttributes()))), g(this, "listForCheckbox", n(() => ({
			...this.getData(this.getInputAttributes()),
			value: this.props.valueVariant
		}))), this.props = e, this.type = t, this.pattern = r, this.inputMode = i;
	}
	getAttributes() {
		return [
			"type",
			"name",
			"required",
			"multiple",
			"step",
			"min",
			"max",
			"minlength",
			"maxlength",
			"accept",
			"pattern"
		];
	}
	getInputAttributes() {
		return [
			...this.getAttributes(),
			"list",
			"placeholder",
			"readonly",
			"disabled",
			"autofocus",
			"tabindex",
			"form",
			"autocomplete",
			"autocapitalize",
			"inputMode",
			"enterKeyHint",
			"spellcheck",
			"autocorrect"
		];
	}
	getData(e) {
		let t = {};
		return e.forEach((e) => {
			let n;
			if (e in this.props) switch (e) {
				case "type":
					n = this.type ? this.type.item.value : this.props.type;
					break;
				case "pattern":
					this.pattern && (n = this.pattern.item.value);
					break;
				case "inputMode":
					this.inputMode && (n = this.inputMode.item.value);
					break;
				case "autocomplete":
					this.inputMode && (n = this.inputMode.autocomplete.value);
					break;
				default: n = this.props[e];
			}
			n !== void 0 && (t[e] = n);
		}), f(t, this.props.inputAttrs);
	}
}, v = class {
	constructor(e) {
		g(this, "item", r(!1)), (e.value || e.modelValue) && (this.item.value = !0);
	}
	is() {
		return !!this.item.value;
	}
	set(e) {
		this.item.value = e;
	}
	to() {
		this.item.value || this.set(!0);
	}
}, y = class {
	constructor(e) {
		this.props = e;
	}
	get(e) {
		let t = this.props.validationCode;
		if (e && t && !e.valid) {
			if (typeof t == "string") return t;
			{
				let n = this.getIndex(e);
				if (n && n in t) return t[n];
			}
		}
	}
	getIndex(e) {
		let t = Object.entries(e);
		for (let [e, n] of t) if (e !== "valid" && n) return e;
	}
}, b = class {
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
		var e;
		let t = this.element.value;
		return t && "clear" in t && ((e = t.clear) == null || e.call(t)), this;
	}
}, x = class {
	constructor(e, t, o, u) {
		g(this, "item", r()), g(this, "isFull", r(!0)), g(this, "hasEdit", r(!1)), g(this, "is", n(() => this.hasEdit.value || this.boolean.value || !!this.props.placeholder)), g(this, "isValue", n(() => this.hasEdit.value || this.boolean.value)), g(this, "itemByFull", n(() => this.isFull.value ? this.item.value : void 0)), g(this, "number", n(() => this.boolean.value ? p(this.string.value) : 0)), g(this, "string", n(() => a(this.item.value))), g(this, "boolean", n(() => c(this.item.value))), g(this, "length", n(() => {
			var e;
			let t = this.item.value;
			return s(t) ? t.length : l(t) ? Object.keys(t).length : (e = this.string.value.length) == null ? 0 : e;
		})), g(this, "update", () => {
			(this.isEdit(this.props.value) || this.isEdit(this.props.modelValue)) && this.setToOriginal();
		}), this.props = e, this.refs = t, this.element = o, this.original = u, this.item.value = this.getOriginal(), i([t.value, t.modelValue], this.update);
	}
	get() {
		return this.item.value;
	}
	getToArray() {
		return d(this.item.value);
	}
	set(e) {
		var t, n;
		if (this.isDifference(e)) {
			this.item.value = u(this.item.value, e, {
				multiple: this.props.multiple,
				maxlength: p(this.props.maxlength)
			});
			let r = (t = this.element) == null ? void 0 : t.getElement();
			r && r.value && "setValue" in r.value && ((n = r.value) == null || n.setValue(this.item.value));
		}
		return this;
	}
	setByEvent(e) {
		return typeof e == "object" ? e && ("value" in e && e.value !== void 0 ? this.set(e.value) : "target" in e && this.setByTarget(e.target), "hasEdit" in e && this.setHasEdit(e.hasEdit), "isFull" in e && this.setFull(e.isFull)) : this.set(e), this;
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
		return this.item.value = o(this.original), (e = this.element) == null || e.clear(), this.hasEdit.value = !1, this.isFull.value = !0, this;
	}
	isCheckbox(e) {
		return e.type === "checkbox";
	}
	isDifference(e = this.getOriginal()) {
		return this.string.value !== a(e);
	}
	getOriginal() {
		return this.props.value || this.props.modelValue || o(this.original);
	}
	isEdit(e) {
		return e !== void 0 && a(e) !== this.string.value;
	}
}, S = class {
	constructor(e, i, a, o, s, c) {
		g(this, "validation", r()), g(this, "input", n(() => new t(this.attributes.listForCheck.value, void 0, this.code))), g(this, "item", n(() => {
			var e, t;
			return this.checkGlobal() || ((t = this.checkItem()) == null ? (e = this.match) == null ? void 0 : e.check() : t) || this.getValidationItemNone();
		})), g(this, "message", n(() => {
			var e, t;
			if (this.props.validationMessage) return this.props.validationMessage;
			if (!this.change || this.change.is()) {
				let n = this.item.value;
				return (t = (e = n.validityMessage) == null ? n.validationMessage : e) == null ? "" : t;
			}
			return "";
		})), g(this, "checkValidity", () => !this.isError()), this.props = e, this.attributes = i, this.value = a, this.change = o, this.code = s, this.match = c;
	}
	isError() {
		var e;
		return !((e = this.item.value) != null && e.status);
	}
	set(e) {
		return "status" in e && "validationMessage" in e && "value" in e ? this.validation.value = e : "target" in e && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) && Number(e.target.minLength) > -1 ? this.validation.value = this.input.value.checkByInput(e.target) : this.validation.value = void 0, this;
	}
	getValidationItemNone() {
		return {
			group: t.getGroupDefault(),
			status: !0,
			value: void 0
		};
	}
	checkGlobal() {
		var e;
		return this.props.validationMessage ? {
			group: t.getGroupDefault(),
			status: !1,
			validationMessage: this.props.validationMessage,
			value: this.value.item.value
		} : (e = this.validation.value) == null ? void 0 : e;
	}
	checkItem() {
		let e = this.value.getToArray();
		for (let t of e) {
			let e = this.checkByInput(t);
			if (!e.status) return e;
		}
	}
	checkByInput(e) {
		return this.input.value.check(e);
	}
}, C = class {
	constructor(t, n, r, i, a) {
		g(this, "model"), g(this, "onBlur", () => {
			this.change.to();
		}), g(this, "onInput", (e, t) => {
			var n;
			if (this.isEnabled()) {
				let r = t == null ? e : t;
				(this.change.is() || t) && ((n = this.validation) == null || n.set(r)), this.value.setByEvent(r), this.on(e);
			}
		}), g(this, "onChange", (e) => {
			var t;
			this.isEnabled() && (e && ((t = this.validation) == null || t.set(e)), this.change.to(), this.on(e, "change"));
		}), g(this, "onSelect", (e, t) => {
			this.isEnabled() && (this.value.setByEvent(t == null ? e : t), this.onAndChange(e));
		}), g(this, "onChecked", (e) => {
			this.isEnabled() && (this.value.setByChecked(e), this.onAndChange(e));
		}), g(this, "onRadio", (e) => {
			this.isEnabled() && (this.value.setByRadio(e), this.onAndChange(e));
		}), g(this, "onClear", (e) => {
			this.isEnabled() && (this.value.clear(), this.onAndChange(e));
		}), g(this, "onValue", (e) => {
			this.isEnabled() && (this.value.set(e), this.onAndChange());
		}), g(this, "on", (e, t = "input") => {
			var n;
			return t === "input" && this.model.emit(this.value.itemByFull.value), (n = this.emits) == null || n.call(this, t, e, {
				...this.getValidation(t),
				...this.getData()
			}), this;
		}), this.props = t, this.change = n, this.value = r, this.validation = i, this.emits = a, this.model = new e("value", this.emits, this.value.itemByFull);
	}
	isValue(e) {
		return !!(e && ["input", "change"].indexOf(e) >= 0);
	}
	isEnabled() {
		return this.props.disabled !== !0 && this.props.readonly !== !0;
	}
	getData() {
		return {
			value: this.value.itemByFull.value,
			valueInput: this.value.item.value,
			detail: this.props.detail
		};
	}
	getValidation(e) {
		return this.isValue(e) ? this.validation ? this.validation.item.value : {
			group: "check",
			value: this.value.item.value
		} : {};
	}
	onAndChange(e) {
		return this.on(e).onChange(e), this;
	}
};
//#endregion
export { y as a, v as i, S as n, b as o, C as r, x as s, _ as t };

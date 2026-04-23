import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./ModelInclude-BLoWPZyI.js";
import { t as n } from "./FieldInputCheckInclude-Bi6NKs75.js";
import { computed as r, ref as i } from "vue";
import { toBinds as a } from "@dxtmisha/functional";
//#region src/classes/Field/FieldPatternInclude.ts
var o = {
	email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
	password: "[0-9a-zA-Z\\-!@#$%^&*]+"
}, s = class {
	constructor(t, n) {
		e(this, "item", r(() => {
			if (this.props.pattern) return this.props.pattern;
			if (this.type) return o == null ? void 0 : o[this.type.item.value];
		})), this.props = t, this.type = n;
	}
}, c = class {
	constructor(t, n) {
		e(this, "item", r(() => {
			if (this.props.inputMode) return this.props.inputMode;
			switch (this.type.item.value) {
				case "number":
				case "datetime":
				case "date":
				case "year-month":
				case "time":
				case "hour-minute": return "numeric";
				case "number-format":
				case "currency": return "decimal";
				case "tel": return "tel";
				case "email": return "email";
				default: return;
			}
		})), e(this, "autocomplete", r(() => {
			if (this.props.autocomplete) return this.props.autocomplete;
			switch (this.type.item.value) {
				case "search": return "off";
				case "email": return "email";
				case "password": return "new-password";
				case "tel": return "tel";
				case "url": return "url";
			}
		})), this.props = t, this.type = n;
	}
}, l = class {
	constructor(t, n, i, a) {
		e(this, "list", r(() => this.getData(this.getAttributes()))), e(this, "listForCheck", r(() => {
			let e = this.list.value;
			return this.props.min || this.props.max || this.props.step ? {
				...e,
				type: "number"
			} : e;
		})), e(this, "listForInput", r(() => this.getData(this.getInputAttributes()))), e(this, "listForCheckbox", r(() => ({
			...this.getData(this.getInputAttributes()),
			value: this.props.valueVariant
		}))), this.props = t, this.type = n, this.pattern = i, this.inputMode = a;
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
		}), a(t, this.props.inputAttrs);
	}
}, u = class {
	constructor(t) {
		e(this, "item", i(!1)), (t.value || t.modelValue) && (this.item.value = !0);
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
}, d = class {
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
}, f = class {
	constructor(t, a, o, s, c, l) {
		e(this, "validation", i()), e(this, "input", r(() => new n(this.attributes.listForCheck.value, void 0, this.code))), e(this, "item", r(() => {
			var e, t;
			return this.checkGlobal() || ((e = this.checkItem()) == null ? (t = this.match) == null ? void 0 : t.check() : e) || this.getValidationItemNone();
		})), e(this, "message", r(() => {
			if (this.props.validationMessage) return this.props.validationMessage;
			if (!this.change || this.change.is()) {
				var e, t;
				let n = this.item.value;
				return (e = (t = n.validityMessage) == null ? n.validationMessage : t) == null ? "" : e;
			}
			return "";
		})), e(this, "checkValidity", () => !this.isError()), this.props = t, this.attributes = a, this.value = o, this.change = s, this.code = c, this.match = l;
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
			group: n.getGroupDefault(),
			status: !0,
			value: void 0
		};
	}
	checkGlobal() {
		var e;
		return this.props.validationMessage ? {
			group: n.getGroupDefault(),
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
}, p = class {
	constructor(n, r, i, a, o) {
		e(this, "model", void 0), e(this, "onBlur", () => {
			this.change.to();
		}), e(this, "onInput", (e, t) => {
			if (this.isEnabled()) {
				let r = t == null ? e : t;
				if (this.change.is() || t) {
					var n;
					(n = this.validation) == null || n.set(r);
				}
				this.value.setByEvent(r), this.on(e);
			}
		}), e(this, "onChange", (e) => {
			if (this.isEnabled()) {
				if (e) {
					var t;
					(t = this.validation) == null || t.set(e);
				}
				this.change.to(), this.on(e, "change");
			}
		}), e(this, "onSelect", (e, t) => {
			this.isEnabled() && (this.value.setByEvent(t == null ? e : t), this.onAndChange(e));
		}), e(this, "onChecked", (e) => {
			this.isEnabled() && (this.value.setByChecked(e), this.onAndChange(e));
		}), e(this, "onRadio", (e) => {
			this.isEnabled() && (this.value.setByRadio(e), this.onAndChange(e));
		}), e(this, "onClear", (e) => {
			this.isEnabled() && (this.value.clear(), this.onAndChange(e));
		}), e(this, "onValue", (e) => {
			this.isEnabled() && (this.value.set(e), this.onAndChange());
		}), e(this, "on", (e, t = "input") => {
			var n, r;
			t === "input" && this.model.emit(this.value.itemByFull.value);
			let i = {
				...this.getValidation(t),
				...this.getData()
			};
			return (n = this.emits) == null || n.call(this, t, e, i), (r = this.emits) == null || r.call(this, `${t}Lite`, i), this;
		}), this.props = n, this.change = r, this.value = i, this.validation = a, this.emits = o, this.model = new t("value", this.emits, this.value.itemByFull);
	}
	isEnabled() {
		return this.props.disabled !== !0 && this.props.readonly !== !0;
	}
	isValue(e) {
		return !!(e && ["input", "change"].indexOf(e) >= 0);
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
export { l as a, u as i, f as n, c as o, d as r, s, p as t };

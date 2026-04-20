import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { t } from "./TextInclude-CHF8IIwI.js";
import { a as n, i as r, n as i, r as a } from "./FieldInputCheckInclude-CSHV6OA8.js";
import { a as o, i as s, n as c, o as l, r as u, s as d, t as f } from "./FieldEventInclude-GYrk56sS.js";
import { n as p, t as m } from "./FieldMatchInclude-C0MAal1R.js";
import { t as h } from "./FieldInclude-B5dvN_ON.js";
import { t as g } from "./MaskInclude-t23EIlPD.js";
import { computed as _, h as v } from "vue";
import { DesignConstructorAbstract as y, toBinds as b } from "@dxtmisha/functional";
//#region src/constructors/Input/InputPassword.ts
var x = class {
	constructor(t, n, r) {
		e(this, "visible", !1), e(this, "is", _(() => this.props.type === "password")), e(this, "icon", _(() => {
			if (this.is.value) return {
				active: this.visibility.item.value,
				icon: this.props.iconVisibilityOff,
				iconActive: this.props.iconVisibility,
				dynamic: !0,
				ariaLabel: this.visibility.item.value ? this.text.hide.value : this.text.show.value
			};
		})), this.props = t, this.visibility = n, this.text = r;
	}
	toggle() {
		this.is.value && this.visibility.toggle();
	}
}, S = class {
	constructor(v, y, b, S, C, w, T, E, D) {
		e(this, "text", void 0), e(this, "visibility", void 0), e(this, "type", void 0), e(this, "pattern", void 0), e(this, "inputMode", void 0), e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "arrow", void 0), e(this, "password", void 0), e(this, "match", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "mask", void 0), this.props = v, this.refs = y, this.element = b, this.classDesign = S, this.className = C, this.components = w, this.slots = T, this.emits = E;
		let { FieldArrowIncludeConstructor: O = p, FieldAttributesIncludeConstructor: k = o, FieldChangeIncludeConstructor: A = s, FieldCodeIncludeConstructor: j = u, FieldElementIncludeConstructor: M = a, FieldEventIncludeConstructor: N = f, FieldIncludeConstructor: P = h, FieldInputModeIncludeConstructor: F = l, FieldMatchIncludeConstructor: I = m, FieldPatternIncludeConstructor: L = d, FieldTypeIncludeConstructor: R = r, FieldValidationIncludeConstructor: z = c, FieldValueIncludeConstructor: B = i, FieldVisibilityIncludeConstructor: V = n, InputPasswordConstructor: H = x, MaskIncludeConstructor: U = g, TextIncludeConstructor: W = t } = D == null ? {} : D;
		this.text = new W(this.props), this.change = new A(this.props), this.visibility = new V(), this.type = new R(this.props, this.visibility), this.pattern = new L(this.props, this.type), this.inputMode = new F(this.props, this.type), this.attributes = new k(this.props, this.type, this.pattern, this.inputMode), this.elementItem = new M(this.props, this.element), this.value = new B(this.props, this.refs, this.elementItem), this.arrow = new O(this.props, this.value, this.type), this.password = new H(this.props, this.visibility, this.text), this.match = new I(this.props, this.elementItem, this.value), this.code = new j(this.props), this.validation = new z(this.props, this.attributes, this.value, this.change, this.code, this.match), this.event = new N(this.props, this.change, this.value, this.validation, this.emits), this.field = new P(this.props, this.value, this.components, this.event, this.arrow, void 0, () => this.password.toggle(), void 0, void 0, _(() => {
			var e, t;
			return {
				iconTrailing: (e = this.password.icon.value) == null ? this.props.iconTrailing : e,
				maxlength: (t = this.props.maxlength) == null ? this.props.max : t
			};
		})), this.mask = new U(this.props, this.className, this.value, "", this.components, this.type);
	}
}, C = {
	type: "text",
	autocomplete: "off",
	arrow: "auto",
	maskVisible: !0
}, w = class extends y {
	constructor(t, n, r, i = S) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderInput", (e) => this.item.mask.isActive() ? this.renderMask(e) : [v("input", b(this.item.attributes.listForInput.value, e.binds, {
			ref: this.element,
			value: this.item.value.item.value,
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput,
			onChange: this.item.event.onChange
		}))]), e(this, "renderMask", (e) => this.item.mask.render({
			ref: this.element,
			class: e.className,
			align: this.props.align,
			inputAttrs: b(this.item.attributes.listForInput.value, e.binds),
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput
		})), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			value: this.item.value.item,
			checkValidity: this.item.validation.checkValidity,
			validationMessage: this.item.validation.message
		};
	}
	initClasses() {
		return { main: {} };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.field.render({ default: this.renderInput }, {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			validationMessage: this.item.validation.message.value
		});
	}
};
//#endregion
export { S as Input, w as InputDesign, x as InputPassword, C as defaultsInput };

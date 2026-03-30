import { t as e } from "./defineProperty-BTtSLqQS.js";
import { t } from "./TextInclude-BIa1AeDQ.js";
import { a as n, c as r, d as i, i as a, l as o, n as s, o as c, r as l, s as u, t as d, u as f } from "./FieldEventInclude-DFTu0XbR.js";
import { n as p, t as m } from "./FieldMatchInclude-Cyp3aXdr.js";
import { t as h } from "./FieldInclude-DxWK9BVa.js";
import { computed as g, h as _, watch as v } from "vue";
import { DesignConstructorAbstract as y, getBind as b, getRef as x, toBind as S, toBinds as C } from "@dxtmisha/functional";
//#region src/constructors/Input/InputPassword.ts
var w = class {
	constructor(t, n, r) {
		e(this, "visible", !1), e(this, "is", g(() => this.props.type === "password")), e(this, "icon", g(() => {
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
}, T = class {
	constructor(t, n, r, i, a, o, s, c) {
		e(this, "is", g(() => {
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
		})), e(this, "bindsStatic", g(() => {
			var e, t, n;
			let r = S((e = x(this.extra)) == null ? {} : e, (t = this.props.maskAttrs) == null ? {} : t);
			return {
				name: this.props.name,
				valueDefault: x(this.valueDefault),
				currency: this.props.currency,
				currencyHide: this.props.currencyHide,
				fraction: this.props.fraction,
				type: (n = this.type) == null ? void 0 : n.get(),
				visible: this.props.maskVisible,
				...b(this.props.mask, r, "mask")
			};
		})), e(this, "binds", g(() => {
			var e;
			return {
				...this.bindsStatic.value,
				value: (e = this.props.modelValue) == null ? this.props.value : e
			};
		})), e(this, "render", (e) => this.components ? this.components.render("mask", { ...S(e == null ? {} : e, this.binds.value) }, void 0, this.index) : []), this.props = t, this.className = n, this.value = r, this.valueDefault = i, this.components = a, this.type = o, this.extra = s, this.index = c, this.value && v(this.is, (e) => {
			e || this.value.setFull(!0);
		});
	}
	isActive() {
		return this.is.value;
	}
}, E = class {
	constructor(_, v, y, b, x, S, C, E, D) {
		e(this, "text", void 0), e(this, "visibility", void 0), e(this, "type", void 0), e(this, "pattern", void 0), e(this, "inputMode", void 0), e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "arrow", void 0), e(this, "password", void 0), e(this, "match", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "mask", void 0), this.props = _, this.refs = v, this.element = y, this.classDesign = b, this.className = x, this.components = S, this.slots = C, this.emits = E;
		let { FieldArrowIncludeConstructor: O = p, FieldAttributesIncludeConstructor: k = u, FieldChangeIncludeConstructor: A = c, FieldCodeIncludeConstructor: j = n, FieldElementIncludeConstructor: M = a, FieldEventIncludeConstructor: N = d, FieldIncludeConstructor: P = h, FieldInputModeIncludeConstructor: F = r, FieldMatchIncludeConstructor: I = m, FieldPatternIncludeConstructor: L = o, FieldTypeIncludeConstructor: R = f, FieldValidationIncludeConstructor: z = s, FieldValueIncludeConstructor: B = l, FieldVisibilityIncludeConstructor: V = i, InputPasswordConstructor: H = w, MaskIncludeConstructor: U = T, TextIncludeConstructor: W = t } = D == null ? {} : D;
		this.text = new W(this.props), this.change = new A(this.props), this.visibility = new V(), this.type = new R(this.props, this.visibility), this.pattern = new L(this.props, this.type), this.inputMode = new F(this.props, this.type), this.attributes = new k(this.props, this.type, this.pattern, this.inputMode), this.elementItem = new M(this.props, this.element), this.value = new B(this.props, this.refs, this.elementItem), this.arrow = new O(this.props, this.value, this.type), this.password = new H(this.props, this.visibility, this.text), this.match = new I(this.props, this.elementItem, this.value), this.code = new j(this.props), this.validation = new z(this.props, this.attributes, this.value, this.change, this.code, this.match), this.event = new N(this.props, this.change, this.value, this.validation, this.emits), this.field = new P(this.props, this.value, this.components, this.event, this.arrow, void 0, () => this.password.toggle(), void 0, void 0, g(() => {
			var e, t;
			return {
				iconTrailing: (e = this.password.icon.value) == null ? this.props.iconTrailing : e,
				maxlength: (t = this.props.maxlength) == null ? this.props.max : t
			};
		})), this.mask = new U(this.props, this.className, this.value, "", this.components, this.type);
	}
}, D = {
	type: "text",
	autocomplete: "off",
	arrow: "auto",
	maskVisible: !0
}, O = class extends y {
	constructor(t, n, r, i = E) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderInput", (e) => this.item.mask.isActive() ? this.renderMask(e) : [_("input", C(this.item.attributes.listForInput.value, e.binds, {
			ref: this.element,
			value: this.item.value.item.value,
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput,
			onChange: this.item.event.onChange
		}))]), e(this, "renderMask", (e) => this.item.mask.render({
			ref: this.element,
			class: e.className,
			align: this.props.align,
			inputAttrs: C(this.item.attributes.listForInput.value, e.binds),
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
export { E as Input, O as InputDesign, D as defaultsInput };

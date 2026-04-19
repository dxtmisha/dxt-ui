import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./TextInclude-B27ZUWoc-DWUMdepa.js";
import { a as n, i as r, n as i, r as a, t as o } from "./FieldInputCheckInclude-CSHV6OA8-BXTfdfF8.js";
import { a as s, i as c, n as l, o as u, r as d, s as f, t as p } from "./FieldEventInclude-GYrk56sS-DK5DYnFw.js";
import { n as m, t as h } from "./Field-Brv8bEeB.js";
import { n as g, t as _ } from "./Mask-BIBfYqU2.js";
import { computed as v, createBlock as y, defineComponent as b, h as x, mergeDefaults as S, openBlock as C, unref as w } from "vue";
import { DesignConstructorAbstract as T, anyToString as E, isObject as D, toBinds as O, toNumber as k } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldMatchInclude-C0MAal1R.js
var A = class {
	constructor(t, n, r) {
		e(this, "is", v(() => !!(this.props.arrow && this.props.arrow !== "none"))), e(this, "disabledPrevious", v(() => !this.isPrevious(this.value.number.value))), e(this, "disabledNext", v(() => !this.isNext(this.value.number.value))), e(this, "step", v(() => {
			var e, t;
			return k((e = (t = this.props.arrowStep) == null ? this.props.step : t) == null ? 1 : e);
		})), e(this, "min", v(() => {
			var e;
			return (e = k(this.props.min)) == null ? void 0 : e;
		})), e(this, "max", v(() => k(this.props.max) || void 0)), this.props = t, this.value = n, this.type = r;
	}
	isCarousel() {
		return this.get() === "carousel";
	}
	isStepper() {
		return this.get() === "stepper";
	}
	isPrevious(e) {
		let t = this.min.value;
		return t === void 0 || e > t;
	}
	isNext(e) {
		let t = this.max.value;
		return t === void 0 || e < t;
	}
	get() {
		switch (this.props.arrow) {
			case "auto":
				var e, t;
				if (((e = this.type) == null ? void 0 : e.get()) === "number" || ((t = this.type) == null ? void 0 : t.get()) === "number-format") return "stepper";
				break;
		}
		return this.props.arrow;
	}
	align() {
		return this.props.arrowAlign;
	}
	previous() {
		let e = this.value.number.value - this.step.value;
		return this.isPrevious(e) ? this.value.set(e.toString()) : this.toMin(), this;
	}
	next() {
		let e = this.value.number.value + this.step.value;
		return this.isNext(e) ? this.value.set(e.toString()) : this.toMax(), this;
	}
	toMin() {
		if (!this.disabledPrevious.value) {
			let e = this.min.value;
			e !== void 0 && this.value.set(e.toString());
		}
		return this;
	}
	toMax() {
		if (!this.disabledNext.value) {
			let e = this.max.value;
			e !== void 0 && this.value.set(e.toString());
		}
		return this;
	}
}, j = class {
	constructor(e, t, n, r) {
		this.props = e, this.element = t, this.value = n, this.text = r;
	}
	is() {
		return !!this.props.match;
	}
	getSelectors() {
		if (this.is()) return D(this.props.match) ? this.props.match.name : this.props.match;
	}
	getValidationMessage() {
		if (this.is()) {
			var e;
			if (D(this.props.match) && (e = this.props.match) != null && e.validationMessage) return this.props.match.validationMessage;
			if (this.text) {
				var t;
				return (t = this.text.entriesMatch.value) == null ? "" : t;
			}
		}
		return "";
	}
	check() {
		let e = this.getSelectors();
		if (e) {
			let t = this.element.findByName(e);
			if (t && E(t.value) !== this.value.string.value) return {
				group: n.getGroupDefault(),
				status: !1,
				input: this.element.get(),
				validationMessage: this.getValidationMessage(),
				value: this.value.item.value
			};
		}
	}
}, M = class {
	constructor(t, n, r) {
		e(this, "visible", !1), e(this, "is", v(() => this.props.type === "password")), e(this, "icon", v(() => {
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
}, N = class {
	constructor(n, h, _, y, b, x, S, C, w) {
		e(this, "text", void 0), e(this, "visibility", void 0), e(this, "type", void 0), e(this, "pattern", void 0), e(this, "inputMode", void 0), e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "arrow", void 0), e(this, "password", void 0), e(this, "match", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "mask", void 0), this.props = n, this.refs = h, this.element = _, this.classDesign = y, this.className = b, this.components = x, this.slots = S, this.emits = C;
		let { FieldArrowIncludeConstructor: T = A, FieldAttributesIncludeConstructor: E = c, FieldChangeIncludeConstructor: D = f, FieldCodeIncludeConstructor: O = l, FieldElementIncludeConstructor: k = o, FieldEventIncludeConstructor: N = s, FieldIncludeConstructor: P = m, FieldInputModeIncludeConstructor: F = p, FieldMatchIncludeConstructor: I = j, FieldPatternIncludeConstructor: L = u, FieldTypeIncludeConstructor: R = i, FieldValidationIncludeConstructor: z = d, FieldValueIncludeConstructor: B = r, FieldVisibilityIncludeConstructor: V = a, InputPasswordConstructor: H = M, MaskIncludeConstructor: U = g, TextIncludeConstructor: W = t } = w == null ? {} : w;
		this.text = new W(this.props), this.change = new D(this.props), this.visibility = new V(), this.type = new R(this.props, this.visibility), this.pattern = new L(this.props, this.type), this.inputMode = new F(this.props, this.type), this.attributes = new E(this.props, this.type, this.pattern, this.inputMode), this.elementItem = new k(this.props, this.element), this.value = new B(this.props, this.refs, this.elementItem), this.arrow = new T(this.props, this.value, this.type), this.password = new H(this.props, this.visibility, this.text), this.match = new I(this.props, this.elementItem, this.value), this.code = new O(this.props), this.validation = new z(this.props, this.attributes, this.value, this.change, this.code, this.match), this.event = new N(this.props, this.change, this.value, this.validation, this.emits), this.field = new P(this.props, this.value, this.components, this.event, this.arrow, void 0, () => this.password.toggle(), void 0, void 0, v(() => {
			var e, t;
			return {
				iconTrailing: (e = this.password.icon.value) == null ? this.props.iconTrailing : e,
				maxlength: (t = this.props.maxlength) == null ? this.props.max : t
			};
		})), this.mask = new U(this.props, this.className, this.value, "", this.components, this.type);
	}
}, P = {
	type: "text",
	autocomplete: "off",
	arrow: "auto",
	maskVisible: !0
}, F = class extends T {
	constructor(t, n, r, i = N) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderInput", (e) => this.item.mask.isActive() ? this.renderMask(e) : [x("input", O(this.item.attributes.listForInput.value, e.binds, {
			ref: this.element,
			value: this.item.value.item.value,
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput,
			onChange: this.item.event.onChange
		}))]), e(this, "renderMask", (e) => this.item.mask.render({
			ref: this.element,
			class: e.className,
			align: this.props.align,
			inputAttrs: O(this.item.attributes.listForInput.value, e.binds),
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
}, I = {
	...P,
	iconVisibility: "visibility",
	iconVisibilityOff: "visibility_off"
}, L = /* @__PURE__ */ b({
	name: "D1Input",
	__name: "D1Input",
	props: /* @__PURE__ */ S({
		name: {},
		mask: {},
		maskVisible: { type: Boolean },
		maskNone: { type: Boolean },
		currency: {},
		currencyHide: { type: Boolean },
		fraction: { type: [
			String,
			Boolean,
			Number
		] },
		maskAttrs: {},
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		iconTrailing: {},
		iconTrailingTurnOnly: { type: Boolean },
		iconTrailingDirOnly: { type: Boolean },
		iconTrailingPalette: { type: Boolean },
		prefix: {},
		prefixId: {},
		suffix: {},
		suffixId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		label: {},
		labelId: {},
		counterShow: { type: Boolean },
		counterId: {},
		fieldCounterAttrs: {},
		required: { type: Boolean },
		fieldLabelAttrs: {},
		forceShowMessage: { type: Boolean },
		disabled: { type: Boolean },
		helperMessage: {},
		validationMessage: {},
		fieldMessageAttrs: {},
		helperId: {},
		validationId: {},
		loading: { type: [Boolean, Object] },
		readonly: { type: Boolean },
		href: {},
		detail: {},
		isSkeleton: { type: Boolean },
		textCancel: { type: [String, Function] },
		id: {},
		focus: { type: Boolean },
		align: {},
		cancel: {},
		fieldAttrs: {},
		modelValue: {},
		"onUpdate:value": { type: Function },
		"onUpdate:modelValue": { type: Function },
		placeholder: {},
		value: {},
		type: {},
		autofocus: { type: Boolean },
		tabindex: {},
		form: {},
		validationCode: {},
		match: {},
		inputAttrs: {},
		step: {},
		min: {},
		max: {},
		arrow: {},
		arrowStep: {},
		arrowAlign: {},
		minlength: {},
		maxlength: {},
		pattern: {},
		autocomplete: {},
		autocapitalize: {},
		inputMode: {},
		enterKeyHint: {},
		spellcheck: { type: [Boolean, String] },
		autocorrect: {},
		list: {},
		iconVisibility: {},
		iconVisibilityOff: {}
	}, I),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new F("d1.input", e, {
			emits: n,
			classes: v(() => ({ main: { "d1-input": !0 } })),
			styles: v(() => ({})),
			components: {
				mask: _,
				field: h
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (C(), y(w(i)));
	}
});
//#endregion
export { L as t };

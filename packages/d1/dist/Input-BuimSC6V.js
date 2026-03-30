import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./TextInclude-BIa1AeDQ-C-pyoUw5.js";
import { t as n } from "./FieldInputCheckInclude-4SFkzDMP-Jm6LdZ7z.js";
import { a as r, c as i, d as a, i as o, l as s, n as c, o as l, r as u, s as d, t as f, u as p } from "./FieldEventInclude-DFTu0XbR-DDMOYSSO.js";
import { t as m } from "./Field-DVIVag-5.js";
import { t as h } from "./FieldInclude-DxWK9BVa-DRV6fzoR.js";
import { t as g } from "./Mask-BEZ7laOE.js";
import { computed as _, createBlock as v, defineComponent as y, h as b, mergeDefaults as x, openBlock as S, unref as C, watch as w } from "vue";
import { DesignConstructorAbstract as T, anyToString as E, getBind as D, getRef as O, isObject as k, toBind as A, toBinds as j, toNumber as M } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldMatchInclude-Cyp3aXdr.js
var N = class {
	constructor(t, n, r) {
		e(this, "is", _(() => !!(this.props.arrow && this.props.arrow !== "none"))), e(this, "disabledPrevious", _(() => !this.isPrevious(this.value.number.value))), e(this, "disabledNext", _(() => !this.isNext(this.value.number.value))), e(this, "step", _(() => {
			var e, t;
			return M((e = (t = this.props.arrowStep) == null ? this.props.step : t) == null ? 1 : e);
		})), e(this, "min", _(() => {
			var e;
			return (e = M(this.props.min)) == null ? void 0 : e;
		})), e(this, "max", _(() => M(this.props.max) || void 0)), this.props = t, this.value = n, this.type = r;
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
}, P = class {
	constructor(e, t, n, r) {
		this.props = e, this.element = t, this.value = n, this.text = r;
	}
	is() {
		return !!this.props.match;
	}
	getSelectors() {
		if (this.is()) return k(this.props.match) ? this.props.match.name : this.props.match;
	}
	getValidationMessage() {
		if (this.is()) {
			var e;
			if (k(this.props.match) && (e = this.props.match) != null && e.validationMessage) return this.props.match.validationMessage;
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
}, F = class {
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
}, I = class {
	constructor(t, n, r, i, a, o, s, c) {
		e(this, "is", _(() => {
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
		})), e(this, "bindsStatic", _(() => {
			var e, t, n;
			let r = A((e = O(this.extra)) == null ? {} : e, (t = this.props.maskAttrs) == null ? {} : t);
			return {
				name: this.props.name,
				valueDefault: O(this.valueDefault),
				currency: this.props.currency,
				currencyHide: this.props.currencyHide,
				fraction: this.props.fraction,
				type: (n = this.type) == null ? void 0 : n.get(),
				visible: this.props.maskVisible,
				...D(this.props.mask, r, "mask")
			};
		})), e(this, "binds", _(() => {
			var e;
			return {
				...this.bindsStatic.value,
				value: (e = this.props.modelValue) == null ? this.props.value : e
			};
		})), e(this, "render", (e) => this.components ? this.components.render("mask", { ...A(e == null ? {} : e, this.binds.value) }, void 0, this.index) : []), this.props = t, this.className = n, this.value = r, this.valueDefault = i, this.components = a, this.type = o, this.extra = s, this.index = c, this.value && w(this.is, (e) => {
			e || this.value.setFull(!0);
		});
	}
	isActive() {
		return this.is.value;
	}
}, L = class {
	constructor(n, m, g, v, y, b, x, S, C) {
		e(this, "text", void 0), e(this, "visibility", void 0), e(this, "type", void 0), e(this, "pattern", void 0), e(this, "inputMode", void 0), e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "arrow", void 0), e(this, "password", void 0), e(this, "match", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "mask", void 0), this.props = n, this.refs = m, this.element = g, this.classDesign = v, this.className = y, this.components = b, this.slots = x, this.emits = S;
		let { FieldArrowIncludeConstructor: w = N, FieldAttributesIncludeConstructor: T = r, FieldChangeIncludeConstructor: E = p, FieldCodeIncludeConstructor: D = u, FieldElementIncludeConstructor: O = f, FieldEventIncludeConstructor: k = c, FieldIncludeConstructor: A = h, FieldInputModeIncludeConstructor: j = a, FieldMatchIncludeConstructor: M = P, FieldPatternIncludeConstructor: L = i, FieldTypeIncludeConstructor: R = l, FieldValidationIncludeConstructor: z = o, FieldValueIncludeConstructor: B = s, FieldVisibilityIncludeConstructor: V = d, InputPasswordConstructor: H = F, MaskIncludeConstructor: U = I, TextIncludeConstructor: W = t } = C == null ? {} : C;
		this.text = new W(this.props), this.change = new E(this.props), this.visibility = new V(), this.type = new R(this.props, this.visibility), this.pattern = new L(this.props, this.type), this.inputMode = new j(this.props, this.type), this.attributes = new T(this.props, this.type, this.pattern, this.inputMode), this.elementItem = new O(this.props, this.element), this.value = new B(this.props, this.refs, this.elementItem), this.arrow = new w(this.props, this.value, this.type), this.password = new H(this.props, this.visibility, this.text), this.match = new M(this.props, this.elementItem, this.value), this.code = new D(this.props), this.validation = new z(this.props, this.attributes, this.value, this.change, this.code, this.match), this.event = new k(this.props, this.change, this.value, this.validation, this.emits), this.field = new A(this.props, this.value, this.components, this.event, this.arrow, void 0, () => this.password.toggle(), void 0, void 0, _(() => {
			var e, t;
			return {
				iconTrailing: (e = this.password.icon.value) == null ? this.props.iconTrailing : e,
				maxlength: (t = this.props.maxlength) == null ? this.props.max : t
			};
		})), this.mask = new U(this.props, this.className, this.value, "", this.components, this.type);
	}
}, R = {
	type: "text",
	autocomplete: "off",
	arrow: "auto",
	maskVisible: !0
}, z = class extends T {
	constructor(t, n, r, i = L) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderInput", (e) => this.item.mask.isActive() ? this.renderMask(e) : [b("input", j(this.item.attributes.listForInput.value, e.binds, {
			ref: this.element,
			value: this.item.value.item.value,
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput,
			onChange: this.item.event.onChange
		}))]), e(this, "renderMask", (e) => this.item.mask.render({
			ref: this.element,
			class: e.className,
			align: this.props.align,
			inputAttrs: j(this.item.attributes.listForInput.value, e.binds),
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
}, B = {
	...R,
	iconVisibility: "visibility",
	iconVisibilityOff: "visibility_off"
}, V = /* @__PURE__ */ y({
	name: "D1Input",
	__name: "D1Input",
	props: /* @__PURE__ */ x({
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
	}, B),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new z("d1.input", e, {
			emits: n,
			classes: _(() => ({ main: { "d1-input": !0 } })),
			styles: _(() => ({})),
			components: {
				mask: g,
				field: m
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (S(), v(C(i)));
	}
});
//#endregion
export { V as t };

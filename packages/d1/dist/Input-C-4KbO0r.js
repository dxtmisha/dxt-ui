import { t as e } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { t } from "./FieldInputCheckInclude-CjNYyGTb-B0hPIzTB.js";
import { a as n, i as r, n as i, o as a, r as o, s, t as c } from "./FieldEventInclude-h5Fg7306-uq6F5Mpg.js";
import { t as l } from "./Field-Wq3L_Xz-.js";
import { t as u } from "./FieldInclude-BKoBWZdj-LqC7cxhb.js";
import { t as d } from "./Mask-BUQDOcjv.js";
import { computed as f, createBlock as p, defineComponent as m, h, mergeDefaults as g, openBlock as _, ref as v, unref as y, watch as b } from "vue";
import { DesignConstructorAbstract as x, anyToString as S, getBind as C, getRef as w, isObject as T, toBind as E, toBinds as D, toNumber as O } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldMatchInclude-GgyucDC_.js
var k = Object.defineProperty, A = (e, t, n) => t in e ? k(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, j = (e, t, n) => A(e, typeof t == "symbol" ? t : t + "", n), M = class {
	constructor() {
		j(this, "item", v(!1));
	}
	toggle() {
		return this.item.value = !this.item.value, this;
	}
}, N = class {
	constructor(e, t) {
		j(this, "item", f(() => {
			var e;
			let t = this.props.type;
			return t === "password" && (e = this.visibility) != null && e.item.value || t == null ? "text" : t;
		})), this.props = e, this.visibility = t;
	}
	get() {
		return this.item.value;
	}
}, P = {
	email: "[\\S]+@[\\S]{2,}\\.[\\w]{2,}",
	password: "[0-9a-zA-Z\\-!@#$%^&*]+"
}, F = class {
	constructor(e, t) {
		j(this, "item", f(() => {
			if (this.props.pattern) return this.props.pattern;
			if (this.type) return P == null ? void 0 : P[this.type.item.value];
		})), this.props = e, this.type = t;
	}
}, I = class {
	constructor(e, t) {
		j(this, "item", f(() => {
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
		})), j(this, "autocomplete", f(() => {
			if (this.props.autocomplete) return this.props.autocomplete;
			switch (this.type.item.value) {
				case "search": return "off";
				case "email": return "email";
				case "password": return "new-password";
				case "tel": return "tel";
				case "url": return "url";
			}
		})), this.props = e, this.type = t;
	}
}, L = class {
	constructor(e, t, n) {
		j(this, "is", f(() => !!(this.props.arrow && this.props.arrow !== "none"))), j(this, "disabledPrevious", f(() => !this.isPrevious(this.value.number.value))), j(this, "disabledNext", f(() => !this.isNext(this.value.number.value))), j(this, "step", f(() => {
			var e, t;
			return O((t = (e = this.props.arrowStep) == null ? this.props.step : e) == null ? 1 : t);
		})), j(this, "min", f(() => {
			var e;
			return (e = O(this.props.min)) == null ? void 0 : e;
		})), j(this, "max", f(() => O(this.props.max) || void 0)), this.props = e, this.value = t, this.type = n;
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
		var e, t;
		switch (this.props.arrow) {
			case "auto":
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
}, R = class {
	constructor(e, t, n, r) {
		this.props = e, this.element = t, this.value = n, this.text = r;
	}
	is() {
		return !!this.props.match;
	}
	getSelectors() {
		if (this.is()) return T(this.props.match) ? this.props.match.name : this.props.match;
	}
	getValidationMessage() {
		var e, t;
		if (this.is()) {
			if (T(this.props.match) && (e = this.props.match) != null && e.validationMessage) return this.props.match.validationMessage;
			if (this.text) return (t = this.text.entriesMatch.value) == null ? "" : t;
		}
		return "";
	}
	check() {
		let e = this.getSelectors();
		if (e) {
			let n = this.element.findByName(e);
			if (n && S(n.value) !== this.value.string.value) return {
				group: t.getGroupDefault(),
				status: !1,
				input: this.element.get(),
				validationMessage: this.getValidationMessage(),
				value: this.value.item.value
			};
		}
	}
}, z = Object.defineProperty, B = (e, t, n) => t in e ? z(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, V = (e, t, n) => B(e, typeof t == "symbol" ? t : t + "", n), H = class {
	constructor(e, t, n) {
		V(this, "visible", !1), V(this, "is", f(() => this.props.type === "password")), V(this, "icon", f(() => {
			if (this.is.value) return {
				active: this.visibility.item.value,
				icon: this.props.iconVisibilityOff,
				iconActive: this.props.iconVisibility,
				dynamic: !0,
				ariaLabel: this.visibility.item.value ? this.text.hide.value : this.text.show.value
			};
		})), this.props = e, this.visibility = t, this.text = n;
	}
	toggle() {
		this.is.value && this.visibility.toggle();
	}
}, U = class {
	constructor(e, t, n, r, i, a, o, s) {
		V(this, "is", f(() => {
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
		})), V(this, "bindsStatic", f(() => {
			var e, t, n;
			let r = E((e = w(this.extra)) == null ? {} : e, (t = this.props.maskAttrs) == null ? {} : t);
			return {
				name: this.props.name,
				valueDefault: w(this.valueDefault),
				currency: this.props.currency,
				currencyHide: this.props.currencyHide,
				fraction: this.props.fraction,
				type: (n = this.type) == null ? void 0 : n.get(),
				visible: this.props.maskVisible,
				...C(this.props.mask, r, "mask")
			};
		})), V(this, "binds", f(() => {
			var e;
			return {
				...this.bindsStatic.value,
				value: (e = this.props.modelValue) == null ? this.props.value : e
			};
		})), V(this, "render", (e) => this.components ? this.components.render("mask", { ...E(e == null ? {} : e, this.binds.value) }, void 0, this.index) : []), this.props = e, this.className = t, this.value = n, this.valueDefault = r, this.components = i, this.type = a, this.extra = o, this.index = s, this.value && b(this.is, (e) => {
			e || this.value.setFull(!0);
		});
	}
	isActive() {
		return this.is.value;
	}
}, W = class {
	constructor(t, l, d, p, m, h, g, _, v) {
		V(this, "text"), V(this, "visibility"), V(this, "type"), V(this, "pattern"), V(this, "inputMode"), V(this, "attributes"), V(this, "elementItem"), V(this, "change"), V(this, "value"), V(this, "arrow"), V(this, "password"), V(this, "match"), V(this, "code"), V(this, "validation"), V(this, "event"), V(this, "field"), V(this, "mask"), this.props = t, this.refs = l, this.element = d, this.classDesign = p, this.className = m, this.components = h, this.slots = g, this.emits = _;
		let { FieldArrowIncludeConstructor: y = L, FieldAttributesIncludeConstructor: b = c, FieldChangeIncludeConstructor: x = r, FieldCodeIncludeConstructor: S = n, FieldElementIncludeConstructor: C = a, FieldEventIncludeConstructor: w = o, FieldIncludeConstructor: T = u, FieldInputModeIncludeConstructor: E = I, FieldMatchIncludeConstructor: D = R, FieldPatternIncludeConstructor: O = F, FieldTypeIncludeConstructor: k = N, FieldValidationIncludeConstructor: A = i, FieldValueIncludeConstructor: j = s, FieldVisibilityIncludeConstructor: P = M, InputPasswordConstructor: z = H, MaskIncludeConstructor: B = U, TextIncludeConstructor: W = e } = v == null ? {} : v;
		this.text = new W(this.props), this.change = new x(this.props), this.visibility = new P(), this.type = new k(this.props, this.visibility), this.pattern = new O(this.props, this.type), this.inputMode = new E(this.props, this.type), this.attributes = new b(this.props, this.type, this.pattern, this.inputMode), this.elementItem = new C(this.props, this.element), this.value = new j(this.props, this.refs, this.elementItem), this.arrow = new y(this.props, this.value, this.type), this.password = new z(this.props, this.visibility, this.text), this.match = new D(this.props, this.elementItem, this.value), this.code = new S(this.props), this.validation = new A(this.props, this.attributes, this.value, this.change, this.code, this.match), this.event = new w(this.props, this.change, this.value, this.validation, this.emits), this.field = new T(this.props, this.value, this.components, this.event, this.arrow, void 0, () => this.password.toggle(), void 0, void 0, f(() => {
			var e, t;
			return {
				iconTrailing: (e = this.password.icon.value) == null ? this.props.iconTrailing : e,
				maxlength: (t = this.props.maxlength) == null ? this.props.max : t
			};
		})), this.mask = new B(this.props, this.className, this.value, "", this.components, this.type);
	}
}, G = {
	type: "text",
	autocomplete: "off",
	arrow: "auto",
	maskVisible: !0
}, K = class extends x {
	constructor(e, t, n, r = W) {
		super(e, t, n), V(this, "item"), V(this, "renderInput", (e) => this.item.mask.isActive() ? this.renderMask(e) : [h("input", D(this.item.attributes.listForInput.value, e.binds, {
			ref: this.element,
			value: this.item.value.item.value,
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput,
			onChange: this.item.event.onChange
		}))]), V(this, "renderMask", (e) => this.item.mask.render({
			ref: this.element,
			class: e.className,
			align: this.props.align,
			inputAttrs: D(this.item.attributes.listForInput.value, e.binds),
			onBlur: this.item.event.onBlur,
			onInput: this.item.event.onInput
		})), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, q = {
	...G,
	iconVisibility: "visibility",
	iconVisibilityOff: "visibility_off"
}, J = /* @__PURE__ */ m({
	name: "D1Input",
	__name: "D1Input",
	props: /* @__PURE__ */ g({
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
	}, q),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new K("d1.input", e, {
			emits: n,
			classes: f(() => ({ main: { "d1-input": !0 } })),
			styles: f(() => ({})),
			components: {
				mask: d,
				field: l
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (_(), p(y(i)));
	}
});
//#endregion
export { J as t };

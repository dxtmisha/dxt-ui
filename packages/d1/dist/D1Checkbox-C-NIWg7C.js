import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n } from "./D1Progress-D8vaV3J3.js";
import { t as r } from "./EnabledInclude-D1O_lLPV--HDul4a0.js";
import { n as i } from "./SkeletonInclude-DtQCG1qF-BvbeQAJk.js";
import { t as a } from "./LabelInclude-BJc8uC4Y-Wn8gBK6K.js";
import { t as o } from "./DescriptionInclude--_NvJ6ka-FXt3BEBB.js";
import { n as s } from "./D1Ripple-4NrKuW_d.js";
import { t as c } from "./Image-ouwANoLf.js";
import { a as l, i as u, l as d, n as f, r as p, t as m, u as h } from "./FieldEventInclude-DFTu0XbR-DDMOYSSO.js";
import { n as g, t as _ } from "./FieldMessage-CrmegY4v.js";
import { t as v } from "./Progress-BAZDdrS1.js";
import { t as y } from "./Ripple-CIjVrh7d.js";
import { computed as b, createBlock as x, defineComponent as S, h as C, mergeDefaults as w, openBlock as T, unref as E } from "vue";
import { DesignConstructorAbstract as D, getBind as O, inArray as k, toBinds as A } from "@dxtmisha/functional";
//#region ../constructor/dist/checkbox.js
var j = class {
	constructor(t, n) {
		e(this, "item", b(() => O(this.getIcon(), "value"))), this.props = t, this.value = n;
	}
	getIcon() {
		if (this.value.boolean.value && !this.props.loading) return this.props.indeterminate ? this.props.iconIndeterminate : this.props.iconCheckbox;
	}
}, M = class {
	constructor(t, c, _, v, y, b, x, S, C) {
		e(this, "type", "checkbox"), e(this, "attributes", void 0), e(this, "change", void 0), e(this, "code", void 0), e(this, "description", void 0), e(this, "elementItem", void 0), e(this, "enabled", void 0), e(this, "event", void 0), e(this, "icon", void 0), e(this, "label", void 0), e(this, "message", void 0), e(this, "progress", void 0), e(this, "ripple", void 0), e(this, "skeleton", void 0), e(this, "validation", void 0), e(this, "value", void 0), this.props = t, this.refs = c, this.element = _, this.classDesign = v, this.className = y, this.components = b, this.slots = x, this.emits = S;
		let { CheckboxIconConstructor: w = j, DescriptionConstructor: T = o, EnabledConstructor: E = r, FieldAttributesIncludeConstructor: D = l, FieldChangeIncludeConstructor: O = h, FieldCodeIncludeConstructor: k = p, FieldElementIncludeConstructor: A = m, FieldEventIncludeConstructor: M = f, FieldMessageConstructor: N = g, FieldValidationIncludeConstructor: P = u, FieldValueIncludeConstructor: F = d, LabelConstructor: I = a, ProgressConstructor: L = n, RippleConstructor: R = s, SkeletonConstructor: z = i } = C == null ? {} : C;
		this.skeleton = new z(this.props, this.classDesign, ["classText"]), this.progress = new L(this.props, this.className, this.components, {
			circular: !0,
			inverse: !0
		}), this.change = new O(this.props), this.elementItem = new A(this.props, this.element), this.attributes = new D(this.props), this.value = new F(this.props, this.refs, this.elementItem), this.code = new k(this.props), this.validation = new P(this.props, this.attributes, this.value, this.change, this.code), this.event = new M(this.props, this.change, this.value, this.validation, this.emits), this.message = new N(this.props, this.className, this.components, this.validation.message), this.icon = new w(this.props, this.value), this.label = new I(t, y, void 0, x, void 0, void 0, void 0, this.skeleton), this.description = new T(t, y, x, this.skeleton), this.enabled = new E(t, this.progress), this.ripple = new R(y, b, this.enabled);
	}
}, N = {
	valueVariantHide: "0",
	block: !0,
	itemCenter: !0
}, P = class extends D {
	constructor(n, r, i, a = M) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderBody", () => {
			var e;
			let t = [...this.renderChecked(), ...this.renderInfo()];
			return C("span", { class: (e = this.classes) == null ? void 0 : e.value.body }, t);
		}), e(this, "renderInput", () => {
			var e;
			return C("input", A(this.item.attributes.listForCheckbox.value, {
				class: (e = this.classes) == null ? void 0 : e.value.input,
				type: this.item.type,
				checked: this.item.value.item.value,
				onInput: this.item.event.onChecked,
				...t.invalid(this.item.validation.isError())
			}));
		}), e(this, "renderInputHidden", () => C("input", {
			name: this.props.name,
			type: "hidden",
			value: this.props.valueVariantHide
		})), e(this, "renderChecked", () => {
			var e, n;
			return [C("span", {
				class: (e = this.classes) == null ? void 0 : e.value.item,
				...t.hidden()
			}, [
				...this.item.progress.render(),
				C("span", { class: [(n = this.classes) == null ? void 0 : n.value.icon, this.item.skeleton.classesSkeleton.classBackground] }, [this.components.renderOne("image", this.item.icon.item.value)]),
				...this.item.ripple.render()
			])];
		}), e(this, "renderInfo", () => {
			if (this.item.label.is.value || this.item.description.is.value) {
				var e;
				return [C("span", { class: (e = this.classes) == null ? void 0 : e.value.info }, [
					...this.item.label.render(),
					...this.item.description.render(),
					...this.item.message.render()
				])];
			}
			return [];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			value: this.item.value.item,
			checkValidity: this.item.validation.checkValidity,
			validationMessage: this.item.validation.message
		};
	}
	initClasses() {
		return {
			main: {},
			input: this.getSubClass("input"),
			body: this.getSubClass("body"),
			item: this.getSubClass("item"),
			icon: this.getSubClass("icon"),
			loading: this.getSubClass("loading"),
			info: this.getSubClass("info"),
			label: this.getSubClass("label")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return C("label", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			this.renderInputHidden(),
			this.renderInput(),
			this.renderBody()
		]);
	}
}, F = {
	adaptive: [
		"rightAlways",
		"rightSm",
		"rightMd",
		"rightLg",
		"rightXl",
		"right2xl"
	],
	container: [
		"rightSm",
		"rightMd",
		"rightLg",
		"rightXl",
		"right2xl"
	]
}, I = {
	...N,
	iconCheckbox: "check",
	iconIndeterminate: "remove",
	block: !0,
	itemCenter: !0
}, L = /* @__PURE__ */ S({
	name: "D1Checkbox",
	__name: "D1Checkbox",
	props: /* @__PURE__ */ w({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		forceShowMessage: { type: Boolean },
		disabled: { type: Boolean },
		helperMessage: {},
		validationMessage: {},
		fieldMessageAttrs: {},
		helperId: {},
		validationId: {},
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
		fieldCounterAttrs: {},
		modelValue: { type: Boolean },
		"onUpdate:value": { type: Function },
		"onUpdate:modelValue": { type: Function },
		placeholder: {},
		value: {},
		detail: {},
		name: {},
		id: {},
		required: { type: Boolean },
		readonly: { type: Boolean },
		autofocus: { type: Boolean },
		tabindex: {},
		form: {},
		validationCode: {},
		match: {},
		inputAttrs: {},
		autocomplete: {},
		autocapitalize: {},
		inputMode: {},
		enterKeyHint: {},
		spellcheck: { type: [Boolean, String] },
		autocorrect: {},
		valueVariant: { type: [
			Number,
			String,
			Boolean
		] },
		valueVariantHide: { type: [
			Number,
			String,
			Boolean
		] },
		indeterminate: { type: Boolean },
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		iconCheckbox: {},
		iconIndeterminate: {},
		block: { type: Boolean },
		adaptive: {},
		container: {},
		itemCenter: { type: Boolean },
		focus: { type: Boolean }
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
		let r = n, i = e, a = new P("d1.checkbox", i, {
			emits: r,
			classes: b(() => ({ main: {
				"d1-checkbox": !0,
				"d1-checkbox--block": i.block,
				[`d1-checkbox--adaptive--${i.adaptive}`]: k(F.adaptive, i.adaptive),
				[`d1-checkbox--container--${i.container}`]: k(F.container, i.container),
				"d1-checkbox--required": i.required,
				"d1-checkbox--itemCenter": i.itemCenter,
				"d1-checkbox--focus": i.focus,
				"d1-checkbox--disabled": i.disabled
			} })),
			styles: b(() => ({})),
			components: {
				image: c,
				fieldMessage: _,
				progress: v,
				ripple: y
			}
		}), o = a.render();
		return t(a.expose()), (e, t) => (T(), x(E(o)));
	}
});
//#endregion
export { L as t };

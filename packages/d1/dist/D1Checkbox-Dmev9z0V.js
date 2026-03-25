import { t as e } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as n } from "./DescriptionInclude-D4ane9aR-o7gRirw3.js";
import { t as r } from "./EnabledInclude-B9oXYBtR-BRVL93PD.js";
import { t as i } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { n as a } from "./D1Progress-CD6wYH0x.js";
import { n as o } from "./D1Ripple-CvolQ-qx.js";
import { t as s } from "./Image-CQ3p93mr.js";
import { a as c, i as l, n as u, o as d, r as f, s as p, t as m } from "./FieldEventInclude-h5Fg7306-uq6F5Mpg.js";
import { n as h, t as g } from "./FieldMessage-PsVibJjx.js";
import { t as _ } from "./Progress-LN--cv5q.js";
import { t as v } from "./Ripple-Bl_TtRLM.js";
import { computed as y, createBlock as b, defineComponent as x, h as S, mergeDefaults as C, openBlock as w, unref as T } from "vue";
import { DesignConstructorAbstract as E, getBind as D, inArray as O, toBinds as k } from "@dxtmisha/functional";
//#region ../constructor/dist/checkbox.js
var A = Object.defineProperty, j = (e, t, n) => t in e ? A(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, M = (e, t, n) => j(e, typeof t == "symbol" ? t : t + "", n), N = class {
	constructor(e, t) {
		M(this, "item", y(() => D(this.getIcon(), "value"))), this.props = e, this.value = t;
	}
	getIcon() {
		if (this.value.boolean.value && !this.props.loading) return this.props.indeterminate ? this.props.iconIndeterminate : this.props.iconCheckbox;
	}
}, P = class {
	constructor(t, s, g, _, v, y, b, x, S) {
		M(this, "type", "checkbox"), M(this, "attributes"), M(this, "change"), M(this, "code"), M(this, "description"), M(this, "elementItem"), M(this, "enabled"), M(this, "event"), M(this, "icon"), M(this, "label"), M(this, "message"), M(this, "progress"), M(this, "ripple"), M(this, "skeleton"), M(this, "validation"), M(this, "value"), this.props = t, this.refs = s, this.element = g, this.classDesign = _, this.className = v, this.components = y, this.slots = b, this.emits = x;
		let { CheckboxIconConstructor: C = N, DescriptionConstructor: w = n, EnabledConstructor: T = r, FieldAttributesIncludeConstructor: E = m, FieldChangeIncludeConstructor: D = l, FieldCodeIncludeConstructor: O = c, FieldElementIncludeConstructor: k = d, FieldEventIncludeConstructor: A = f, FieldMessageConstructor: j = h, FieldValidationIncludeConstructor: P = u, FieldValueIncludeConstructor: F = p, LabelConstructor: I = e, ProgressConstructor: L = a, RippleConstructor: R = o, SkeletonConstructor: z = i } = S == null ? {} : S;
		this.skeleton = new z(this.props, this.classDesign, ["classText"]), this.progress = new L(this.props, this.className, this.components, {
			circular: !0,
			inverse: !0
		}), this.change = new D(this.props), this.elementItem = new k(this.props, this.element), this.attributes = new E(this.props), this.value = new F(this.props, this.refs, this.elementItem), this.code = new O(this.props), this.validation = new P(this.props, this.attributes, this.value, this.change, this.code), this.event = new A(this.props, this.change, this.value, this.validation, this.emits), this.message = new j(this.props, this.className, this.components, this.validation.message), this.icon = new C(this.props, this.value), this.label = new I(t, v, void 0, b, void 0, void 0, void 0, this.skeleton), this.description = new w(t, v, b, this.skeleton), this.enabled = new T(t, this.progress), this.ripple = new R(v, y, this.enabled);
	}
}, F = {
	valueVariantHide: "0",
	block: !0,
	itemCenter: !0
}, I = class extends E {
	constructor(e, n, r, i = P) {
		super(e, n, r), M(this, "item"), M(this, "renderBody", () => {
			var e;
			let t = [...this.renderChecked(), ...this.renderInfo()];
			return S("span", { class: (e = this.classes) == null ? void 0 : e.value.body }, t);
		}), M(this, "renderInput", () => {
			var e;
			return S("input", k(this.item.attributes.listForCheckbox.value, {
				class: (e = this.classes) == null ? void 0 : e.value.input,
				type: this.item.type,
				checked: this.item.value.item.value,
				onInput: this.item.event.onChecked,
				...t.invalid(this.item.validation.isError())
			}));
		}), M(this, "renderInputHidden", () => S("input", {
			name: this.props.name,
			type: "hidden",
			value: this.props.valueVariantHide
		})), M(this, "renderChecked", () => {
			var e, n;
			return [S("span", {
				class: (e = this.classes) == null ? void 0 : e.value.item,
				...t.hidden()
			}, [
				...this.item.progress.render(),
				S("span", { class: [(n = this.classes) == null ? void 0 : n.value.icon, this.item.skeleton.classesSkeleton.classBackground] }, [this.components.renderOne("image", this.item.icon.item.value)]),
				...this.item.ripple.render()
			])];
		}), M(this, "renderInfo", () => {
			var e;
			return this.item.label.is.value || this.item.description.is.value ? [S("span", { class: (e = this.classes) == null ? void 0 : e.value.info }, [
				...this.item.label.render(),
				...this.item.description.render(),
				...this.item.message.render()
			])] : [];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return S("label", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			this.renderInputHidden(),
			this.renderInput(),
			this.renderBody()
		]);
	}
}, L = {
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
}, R = {
	...F,
	iconCheckbox: "check",
	iconIndeterminate: "remove",
	block: !0,
	itemCenter: !0
}, z = /* @__PURE__ */ x({
	name: "D1Checkbox",
	__name: "D1Checkbox",
	props: /* @__PURE__ */ C({
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
	}, R),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new I("d1.checkbox", i, {
			emits: r,
			classes: y(() => ({ main: {
				"d1-checkbox": !0,
				"d1-checkbox--block": i.block,
				[`d1-checkbox--adaptive--${i.adaptive}`]: O(L.adaptive, i.adaptive),
				[`d1-checkbox--container--${i.container}`]: O(L.container, i.container),
				"d1-checkbox--required": i.required,
				"d1-checkbox--itemCenter": i.itemCenter,
				"d1-checkbox--focus": i.focus,
				"d1-checkbox--disabled": i.disabled
			} })),
			styles: y(() => ({})),
			components: {
				image: s,
				fieldMessage: g,
				progress: _,
				ripple: v
			}
		}), o = a.render();
		return t(a.expose()), (e, t) => (w(), b(T(o)));
	}
});
//#endregion
export { z as t };

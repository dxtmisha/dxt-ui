import { t as e } from "./Image-D8CcYNKv.js";
import { t } from "./FieldMessage-Bo6OtTEI.js";
import { t as n } from "./Progress-Bsh7hfmg.js";
import { t as r } from "./Ripple-CAutwnIh.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u } from "@dxtmisha/functional";
import { CheckboxDesign as d, defaultsCheckbox as f } from "@dxtmisha/constructor/Checkbox";
//#region src/components/Ui/Checkbox/props.ts
var p = {
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
}, m = {
	...f,
	iconCheckbox: "check",
	iconIndeterminate: "remove",
	block: !0,
	itemCenter: !0
}, h = /* @__PURE__ */ o({
	name: "D1Checkbox",
	__name: "D1Checkbox",
	props: /* @__PURE__ */ s({
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
	}, m),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(o, { expose: s, emit: f }) {
		let m = f, h = o, g = new d("d1.checkbox", h, {
			emits: m,
			classes: i(() => ({ main: {
				"d1-checkbox": !0,
				"d1-checkbox--block": h.block,
				[`d1-checkbox--adaptive--${h.adaptive}`]: u(p.adaptive, h.adaptive),
				[`d1-checkbox--container--${h.container}`]: u(p.container, h.container),
				"d1-checkbox--required": h.required,
				"d1-checkbox--itemCenter": h.itemCenter,
				"d1-checkbox--focus": h.focus,
				"d1-checkbox--disabled": h.disabled
			} })),
			styles: i(() => ({})),
			components: {
				image: e,
				fieldMessage: t,
				progress: n,
				ripple: r
			}
		}), _ = g.render();
		return s(g.expose()), (e, t) => (c(), a(l(_)));
	}
});
//#endregion
export { h as t };

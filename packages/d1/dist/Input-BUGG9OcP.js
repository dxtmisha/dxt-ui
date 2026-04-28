import { t as e } from "./Field-DJzOEIiB.js";
import { t } from "./Mask-CKwUBAi6.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { InputDesign as c, defaultsInput as l } from "@dxtmisha/constructor/Input";
//#region src/components/Ui/Input/props.ts
var u = {
	...l,
	iconVisibility: "visibility",
	iconVisibilityOff: "visibility_off"
}, d = /* @__PURE__ */ i({
	name: "D1Input",
	__name: "D1Input",
	props: /* @__PURE__ */ a({
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
	}, u),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(i, { expose: a, emit: l }) {
		let u = new c("d1.input", i, {
			emits: l,
			classes: n(() => ({ main: { "d1-input": !0 } })),
			styles: n(() => ({})),
			components: {
				mask: t,
				field: e
			}
		}), d = u.render();
		return a(u.expose()), (e, t) => (o(), r(s(d)));
	}
});
//#endregion
export { d as t };

import { t as e } from "./Field-DCAIs5T_.js";
import { t } from "./TextareaAutosize-CtYzEd6X.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { TextareaDesign as c, defaultsTextarea as l } from "@dxtmisha/constructor/Textarea";
//#region src/components/Ui/Textarea/props.ts
var u = { ...l }, d = /* @__PURE__ */ i({
	name: "D1Textarea",
	__name: "D1Textarea",
	props: /* @__PURE__ */ a({
		textareaAttrs: {},
		autosize: { type: Boolean },
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
		name: {},
		autofocus: { type: Boolean },
		tabindex: {},
		form: {},
		validationCode: {},
		match: {},
		inputAttrs: {},
		minlength: {},
		maxlength: {},
		autocomplete: {},
		autocapitalize: {},
		inputMode: {},
		enterKeyHint: {},
		spellcheck: { type: [Boolean, String] },
		autocorrect: {},
		rows: {},
		cols: {},
		wrap: {},
		fieldSizing: {}
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
		let u = new c("d1.textarea", i, {
			emits: l,
			classes: n(() => ({ main: { "d1-textarea": !0 } })),
			styles: n(() => ({})),
			components: {
				textareaAutosize: t,
				field: e
			}
		}), d = u.render();
		return a(u.expose()), (e, t) => (o(), r(s(d)));
	}
});
//#endregion
export { d as t };

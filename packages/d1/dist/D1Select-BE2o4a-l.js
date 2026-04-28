import { t as e } from "./Field-DJzOEIiB.js";
import { t } from "./Input-BUGG9OcP.js";
import { t as n } from "./Menu-oGjQQTS8.js";
import { t as r } from "./SelectValue-DXETq1GG.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import "@dxtmisha/functional";
import { SelectDesign as u, defaultsSelect as d } from "@dxtmisha/constructor/Select";
//#region src/components/Ui/Select/props.ts
var f = {
	...d,
	iconArrowDown: "keyboard_arrow_down",
	iconSearch: "search",
	menuAttrs: { itemAttrs: { dense: !0 } },
	inputSearchAttrs: { fieldAttrs: { size: "sm" } }
}, p = /* @__PURE__ */ o({
	name: "D1Select",
	__name: "D1Select",
	props: /* @__PURE__ */ s({
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
		max: {},
		arrow: {},
		arrowStep: {},
		arrowAlign: {},
		autocomplete: {},
		autocapitalize: {},
		inputMode: {},
		enterKeyHint: {},
		spellcheck: { type: [Boolean, String] },
		autocorrect: {},
		option: {},
		multiple: { type: Boolean },
		menuAttrs: {},
		editValue: { type: Boolean },
		hideList: { type: Boolean },
		showSearch: { type: Boolean },
		filterMode: { type: Boolean },
		iconArrowDown: {},
		iconSearch: {},
		inputSearchAttrs: {}
	}, f),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(o, { expose: s, emit: d }) {
		let f = new u("d1.select", o, {
			emits: d,
			classes: i(() => ({ main: { "d1-select": !0 } })),
			styles: i(() => ({})),
			components: {
				menu: n,
				field: e,
				selectValue: r,
				input: t
			}
		}), p = f.render();
		return s(f.expose()), (e, t) => (c(), a(l(p)));
	}
});
//#endregion
export { p as t };

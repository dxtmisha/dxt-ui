import { t as e } from "./Icon-CTJvjh80.js";
import { t } from "./FieldMessage-C3dF70VE.js";
import { t as n } from "./Progress-B-Gvsyth.js";
import { t as r } from "./FieldLabel-BYzndJUF.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u, isFilled as d } from "@dxtmisha/functional";
import { FieldDesign as f, defaultsField as p } from "@dxtmisha/constructor/Field";
//#region src/components/Ui/Field/props.ts
var m = {
	arrowAlign: [
		"center",
		"right",
		"left"
	],
	cancel: [
		"auto",
		"always",
		"none"
	],
	align: [
		"center",
		"right",
		"left"
	],
	width: [],
	size: [
		"sm",
		"md",
		"lg",
		"display"
	]
}, h = {
	...p,
	iconArrowLeft: "keyboard_arrow_left",
	iconArrowRight: "keyboard_arrow_right",
	iconPlus: "add",
	iconMinus: "remove",
	iconClose: "close_small",
	classic: !0,
	arrowAlign: "right",
	cancel: "auto",
	size: "md"
}, g = /* @__PURE__ */ o({
	name: "D1Field",
	__name: "D1Field",
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
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
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
		to: {},
		href: {},
		value: {},
		detail: {},
		isSkeleton: { type: Boolean },
		textCancel: { type: [String, Function] },
		disabledPrevious: { type: Boolean },
		disabledNext: { type: Boolean },
		id: {},
		counterTop: { type: Boolean },
		cancelShow: { type: Boolean },
		iconArrowLeft: {},
		iconArrowRight: {},
		iconPlus: {},
		iconMinus: {},
		iconClose: {},
		focus: { type: Boolean },
		block: { type: Boolean },
		isValue: { type: Boolean },
		basic: { type: Boolean },
		boxed: { type: Boolean },
		tonal: { type: Boolean },
		filled: { type: Boolean },
		outlined: { type: Boolean },
		classic: { type: Boolean },
		arrowCarousel: { type: Boolean },
		arrowStepper: { type: Boolean },
		arrowAlign: {},
		cancel: {},
		align: {},
		width: {},
		size: {}
	}, h),
	emits: ["click", "clickLite"],
	setup(o, { expose: s, emit: p }) {
		let h = p, g = o, _ = new f("d1.field", g, {
			emits: h,
			classes: i(() => ({ main: {
				"d1-field": !0,
				"d1-field--focus": g.focus,
				"d1-field--disabled": g.disabled,
				"d1-field--selected": g.selected,
				"d1-field--readonly": g.readonly,
				"d1-field--block": g.block,
				"d1-field--isValue": g.isValue,
				"d1-field--basic": g.basic,
				"d1-field--boxed": g.boxed,
				"d1-field--tonal": g.tonal,
				"d1-field--filled": g.filled,
				"d1-field--outlined": g.outlined,
				"d1-field--classic": g.classic && !g.basic && !g.boxed && !g.tonal && !g.filled && !g.outlined,
				"d1-field--arrowCarousel": g.arrowCarousel,
				"d1-field--arrowStepper": g.arrowStepper,
				[`d1-field--arrowAlign--${g.arrowAlign}`]: u(m.arrowAlign, g.arrowAlign),
				[`d1-field--cancel--${g.cancel}`]: u(m.cancel, g.cancel),
				[`d1-field--align--${g.align}`]: u(m.align, g.align),
				"d1-field--width--custom": d(g.width) && !u(m.width, g.width),
				[`d1-field--size--${g.size}`]: u(m.size, g.size)
			} })),
			styles: i(() => {
				var e;
				return { "--d1-field-sys-width": (e = g.width) == null ? null : e };
			}),
			components: {
				icon: e,
				fieldLabel: r,
				fieldMessage: t,
				progress: n
			},
			compMod: {
				icon: { rounded: "full" },
				iconTrailing: { rounded: "full" },
				cancel: { rounded: "full" },
				previous: { rounded: "full" },
				next: { rounded: "full" }
			}
		}), v = _.render();
		return s(_.expose()), (e, t) => (c(), a(l(v)));
	}
});
//#endregion
export { g as t };

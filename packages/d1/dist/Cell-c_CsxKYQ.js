import { t as e } from "./D1Icon-D7cd72gJ.js";
import { t } from "./D1Progress-DOG68q7n.js";
import { t as n } from "./D1Ripple-DNVQc-dy.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { CellDesign as u, defaultsCell as d } from "@dxtmisha/constructor/Cell";
//#region src/components/Ui/Cell/props.ts
var f = {
	dividerLabel: [
		"always",
		"none",
		"adaptiveSm",
		"adaptiveMd",
		"adaptiveLg",
		"adaptiveXl",
		"adaptive2xl",
		"containerSm",
		"containerMd",
		"containerLg",
		"containerXl",
		"container2xl"
	],
	padding: [
		"sm",
		"md",
		"lg",
		"ySm",
		"yMd",
		"yLg",
		"none"
	]
}, p = {
	...d,
	divider: !0,
	padding: "none",
	paddingByIndent: !0
}, m = /* @__PURE__ */ a({
	name: "D1Cell",
	__name: "D1Cell",
	props: /* @__PURE__ */ o({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		readonly: { type: Boolean },
		disabled: { type: Boolean },
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
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		to: {},
		href: {},
		value: {},
		detail: {},
		role: {},
		tag: {},
		divider: { type: Boolean },
		dynamic: { type: Boolean },
		focus: { type: Boolean },
		dynamicHover: { type: Boolean },
		dividerLabel: {},
		iconTop: { type: Boolean },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, p),
	emits: ["click", "clickLite"],
	setup(a, { expose: o, emit: d }) {
		let p = d, m = a, h = new u("d1.cell", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-cell": !0,
				"d1-cell--focus": m.focus,
				"d1-cell--selected": m.selected,
				"d1-cell--readonly": m.readonly,
				"d1-cell--disabled": m.disabled,
				"d1-cell--dynamic": m.dynamic,
				"d1-cell--dynamicHover": m.dynamicHover,
				"d1-cell--divider": m.divider,
				[`d1-cell--dividerLabel--${m.dividerLabel}`]: l(f.dividerLabel, m.dividerLabel),
				"d1-cell--iconTop": m.iconTop,
				[`d1-cell--padding--${m.padding}`]: l(f.padding, m.padding),
				"d1-cell--paddingByIndent": m.paddingByIndent
			} })),
			styles: r(() => ({})),
			components: {
				icon: e,
				progress: t,
				ripple: n
			}
		}), g = h.render();
		return o(h.expose()), (e, t) => (s(), i(c(g)));
	}
});
//#endregion
export { m as t };

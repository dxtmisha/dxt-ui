import { t as e } from "./D1Icon-D7cd72gJ.js";
import { t } from "./D1Progress-DOG68q7n.js";
import { t as n } from "./D1Ripple-DNVQc-dy.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { ChipDesign as u, defaultsChip as d } from "@dxtmisha/constructor/Chip";
//#region src/components/Ui/Chip/props.ts
var f = {
	adaptive: [
		"iconAlways",
		"block",
		"auto",
		"iconSm",
		"iconMd",
		"iconLg",
		"iconXl",
		"icon2xl",
		"fullSm",
		"fullMd",
		"fullLg",
		"fullXl",
		"full2xl"
	],
	container: [
		"iconSm",
		"iconMd",
		"iconLg",
		"iconXl",
		"icon2xl",
		"fullSm",
		"fullMd",
		"fullLg",
		"fullXl",
		"full2xl"
	],
	textAlign: [
		"left",
		"center",
		"right"
	],
	size: [
		"sm",
		"md",
		"lg"
	],
	palette: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
		"gray",
		"zinc",
		"neutral",
		"stone",
		"black",
		"white"
	]
}, p = {
	...d,
	input: !0,
	size: "md"
}, m = /* @__PURE__ */ a({
	name: "D1Chip",
	__name: "D1Chip",
	props: /* @__PURE__ */ o({
		label: {},
		labelId: {},
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
		ariaLabel: {},
		tag: {},
		type: {},
		focus: { type: Boolean },
		adaptive: {},
		container: {},
		inverse: { type: Boolean },
		grid: { type: Boolean },
		textAlign: {},
		input: { type: Boolean },
		assistive: { type: Boolean },
		size: {},
		roundedFull: { type: Boolean },
		palette: {}
	}, p),
	emits: ["click", "clickLite"],
	setup(a, { expose: o, emit: d }) {
		let p = d, m = a, h = new u("d1.chip", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-chip": !0,
				"d1-chip--focus": m.focus,
				"d1-chip--disabled": m.disabled,
				"d1-chip--selected": m.selected,
				"d1-chip--readonly": m.readonly,
				[`d1-chip--adaptive--${m.adaptive}`]: l(f.adaptive, m.adaptive),
				[`d1-chip--container--${m.container}`]: l(f.container, m.container),
				"d1-chip--inverse": m.inverse,
				"d1-chip--grid": m.grid,
				[`d1-chip--textAlign--${m.textAlign}`]: l(f.textAlign, m.textAlign),
				"d1-chip--input": m.input && !m.assistive,
				"d1-chip--assistive": m.assistive,
				[`d1-chip--size--${m.size}`]: l(f.size, m.size),
				"d1-chip--roundedFull": m.roundedFull,
				[`d1-palette d1-palette--${m.palette}`]: l(f.palette, m.palette)
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

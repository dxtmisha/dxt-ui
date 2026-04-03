import "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t as e } from "./D1Icon-BuvQZC32.js";
import { t } from "./D1Progress-e-cWntWB.js";
import { t as n } from "./D1Ripple-B5VEJXqg.js";
import { t as r } from "./ButtonDesign-DDLM9-Wb-B9yZheBz.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u } from "@dxtmisha/functional";
//#region ../constructor/dist/chip.js
var d = { tag: "span" }, f = class extends r {}, p = {
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
}, m = {
	...d,
	input: !0,
	size: "md"
}, h = /* @__PURE__ */ o({
	name: "D1Chip",
	__name: "D1Chip",
	props: /* @__PURE__ */ s({
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
	}, m),
	emits: ["click", "clickLite"],
	setup(r, { expose: o, emit: s }) {
		let d = s, m = r, h = new f("d1.chip", m, {
			emits: d,
			classes: i(() => ({ main: {
				"d1-chip": !0,
				"d1-chip--focus": m.focus,
				"d1-chip--disabled": m.disabled,
				"d1-chip--selected": m.selected,
				"d1-chip--readonly": m.readonly,
				[`d1-chip--adaptive--${m.adaptive}`]: u(p.adaptive, m.adaptive),
				[`d1-chip--container--${m.container}`]: u(p.container, m.container),
				"d1-chip--inverse": m.inverse,
				"d1-chip--grid": m.grid,
				[`d1-chip--textAlign--${m.textAlign}`]: u(p.textAlign, m.textAlign),
				"d1-chip--input": m.input && !m.assistive,
				"d1-chip--assistive": m.assistive,
				[`d1-chip--size--${m.size}`]: u(p.size, m.size),
				"d1-chip--roundedFull": m.roundedFull,
				[`d1-palette d1-palette--${m.palette}`]: u(p.palette, m.palette)
			} })),
			styles: i(() => ({})),
			components: {
				icon: e,
				progress: t,
				ripple: n
			}
		}), g = h.render();
		return o(h.expose()), (e, t) => (c(), a(l(g)));
	}
});
//#endregion
export { h as t };

import { t as e } from "./D1Icon-BuvQZC32.js";
import { t } from "./D1Progress-e-cWntWB.js";
import { t as n } from "./D1Ripple-B5VEJXqg.js";
import { n as r, t as i } from "./ButtonDesign-DDLM9-Wb-B9yZheBz.js";
import { computed as a, createBlock as o, defineComponent as s, mergeDefaults as c, openBlock as l, unref as u } from "vue";
import { inArray as d } from "@dxtmisha/functional";
//#region src/components/Ui/Button/props.ts
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
		"xs",
		"sm",
		"md",
		"lg",
		"xl"
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
	...r,
	primary: !0,
	size: "md",
	hasLabelMinWidth: !0
}, m = /* @__PURE__ */ s({
	name: "D1Button",
	__name: "D1Button",
	props: /* @__PURE__ */ c({
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
		primary: { type: Boolean },
		secondary: { type: Boolean },
		outline: { type: Boolean },
		text: { type: Boolean },
		size: {},
		roundedFull: { type: Boolean },
		hasLabelMinWidth: { type: Boolean },
		palette: {}
	}, p),
	emits: ["click", "clickLite"],
	setup(r, { expose: s, emit: c }) {
		let p = c, m = r, h = new i("d1.button", m, {
			emits: p,
			classes: a(() => ({ main: {
				"d1-button": !0,
				"d1-button--focus": m.focus,
				"d1-button--disabled": m.disabled,
				"d1-button--selected": m.selected,
				"d1-button--readonly": m.readonly,
				[`d1-button--adaptive--${m.adaptive}`]: d(f.adaptive, m.adaptive),
				[`d1-button--container--${m.container}`]: d(f.container, m.container),
				"d1-button--inverse": m.inverse,
				"d1-button--grid": m.grid,
				[`d1-button--textAlign--${m.textAlign}`]: d(f.textAlign, m.textAlign),
				"d1-button--primary": m.primary && !m.secondary && !m.outline && !m.text,
				"d1-button--secondary": m.secondary,
				"d1-button--outline": m.outline,
				"d1-button--text": m.text,
				[`d1-button--size--${m.size}`]: d(f.size, m.size),
				"d1-button--roundedFull": m.roundedFull,
				"d1-button--hasLabelMinWidth": m.hasLabelMinWidth,
				[`d1-palette d1-palette--${m.palette}`]: d(f.palette, m.palette)
			} })),
			styles: a(() => ({})),
			components: {
				icon: e,
				progress: t,
				ripple: n
			}
		}), g = h.render();
		return s(h.expose()), (e, t) => (l(), o(u(g)));
	}
});
//#endregion
export { m as t };

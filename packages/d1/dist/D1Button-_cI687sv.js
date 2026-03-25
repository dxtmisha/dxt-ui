import { t as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./D1Progress-CD6wYH0x.js";
import { t as n } from "./D1Ripple-CvolQ-qx.js";
import { t as r } from "./ButtonDesign-CVm0z3Hs-BGU0-bpS.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u } from "@dxtmisha/functional";
//#region ../constructor/dist/button.js
var d = {}, f = {
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
	...d,
	primary: !0,
	size: "md"
}, m = /* @__PURE__ */ o({
	name: "D1Button",
	__name: "D1Button",
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
		primary: { type: Boolean },
		secondary: { type: Boolean },
		outline: { type: Boolean },
		text: { type: Boolean },
		size: {},
		roundedFull: { type: Boolean },
		palette: {}
	}, p),
	emits: ["click", "clickLite"],
	setup(o, { expose: s, emit: d }) {
		let p = d, m = o, h = new r("d1.button", m, {
			emits: p,
			classes: i(() => ({ main: {
				"d1-button": !0,
				"d1-button--focus": m.focus,
				"d1-button--disabled": m.disabled,
				"d1-button--selected": m.selected,
				"d1-button--readonly": m.readonly,
				[`d1-button--adaptive--${m.adaptive}`]: u(f.adaptive, m.adaptive),
				[`d1-button--container--${m.container}`]: u(f.container, m.container),
				"d1-button--inverse": m.inverse,
				"d1-button--grid": m.grid,
				[`d1-button--textAlign--${m.textAlign}`]: u(f.textAlign, m.textAlign),
				"d1-button--primary": m.primary && !m.secondary && !m.outline && !m.text,
				"d1-button--secondary": m.secondary,
				"d1-button--outline": m.outline,
				"d1-button--text": m.text,
				[`d1-button--size--${m.size}`]: u(f.size, m.size),
				"d1-button--roundedFull": m.roundedFull,
				[`d1-palette d1-palette--${m.palette}`]: u(f.palette, m.palette)
			} })),
			styles: i(() => ({})),
			components: {
				icon: e,
				progress: t,
				ripple: n
			}
		}), g = h.render();
		return s(h.expose()), (e, t) => (c(), a(l(g)));
	}
});
//#endregion
export { m as t };

import { t as e } from "./D1Icon-D7cd72gJ.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { BadgeDesign as c, defaultsBadge as l } from "@dxtmisha/constructor/Badge";
//#region src/components/Ui/Badge/props.ts
var u = {
	overlap: [
		"rectangular",
		"circular",
		"static"
	],
	vertical: [
		"top",
		"center",
		"bottom"
	],
	horizontal: [
		"right",
		"center",
		"left"
	],
	size: [
		"sm",
		"md",
		"lg",
		"none"
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
}, d = {
	...l,
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right",
	primary: !0,
	size: "md"
}, f = /* @__PURE__ */ r({
	name: "D1Badge",
	__name: "D1Badge",
	props: /* @__PURE__ */ i({
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		label: {},
		labelId: {},
		labelMax: {},
		formatting: { type: Boolean },
		ariaLabel: {},
		dot: { type: Boolean },
		hide: { type: Boolean },
		overlap: {},
		vertical: {},
		horizontal: {},
		primary: { type: Boolean },
		secondary: { type: Boolean },
		outline: { type: Boolean },
		size: {},
		palette: {}
	}, d),
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.badge", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-badge": !0,
				"d1-badge--selected": f.selected,
				"d1-badge--hide": f.hide,
				"d1-badge--dot": f.dot,
				[`d1-badge--overlap--${f.overlap}`]: s(u.overlap, f.overlap),
				[`d1-badge--vertical--${f.vertical}`]: s(u.vertical, f.vertical),
				[`d1-badge--horizontal--${f.horizontal}`]: s(u.horizontal, f.horizontal),
				"d1-badge--primary": f.primary && !f.secondary && !f.outline,
				"d1-badge--secondary": f.secondary,
				"d1-badge--outline": f.outline,
				[`d1-badge--size--${f.size}`]: s(u.size, f.size),
				[`d1-palette d1-palette--${f.palette}`]: s(u.palette, f.palette)
			} })),
			styles: t(() => ({})),
			components: { icon: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

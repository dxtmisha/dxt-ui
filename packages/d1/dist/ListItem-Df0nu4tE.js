import { t as e } from "./D1Icon-D7cd72gJ.js";
import { t } from "./D1Progress-DOG68q7n.js";
import { t as n } from "./D1Ripple-DNVQc-dy.js";
import { t as r } from "./D1Badge-BqhgTPHu.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u, isFilled as d } from "@dxtmisha/functional";
import { ListItemDesign as f, defaultsListItem as p } from "@dxtmisha/constructor/ListItem";
//#region src/components/Ui/ListItem/props.ts
var m = {
	iconAlign: ["center", "edge"],
	fill: [],
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
}, h = {
	...p,
	iconAlign: "edge",
	size: "md"
}, g = /* @__PURE__ */ o({
	name: "D1ListItem",
	__name: "D1ListItem",
	props: /* @__PURE__ */ s({
		label: {},
		labelId: {},
		highlight: {},
		highlightLengthStart: {},
		value: {},
		description: {},
		descriptionId: {},
		prefix: {},
		prefixId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		suffix: {},
		suffixId: {},
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
		badge: {},
		badgeDot: { type: Boolean },
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		to: {},
		href: {},
		detail: {},
		role: {},
		index: {},
		tag: {},
		filterMode: { type: Boolean },
		divider: { type: Boolean },
		tabindex: {},
		type: {},
		parent: {},
		listId: {},
		search: {},
		focus: { type: Boolean },
		open: { type: Boolean },
		selectedChild: { type: Boolean },
		iconTop: { type: Boolean },
		iconAlign: {},
		fill: {},
		size: {},
		dense: { type: Boolean },
		palette: {}
	}, h),
	emits: ["click", "clickLite"],
	setup(o, { expose: s, emit: p }) {
		let h = p, g = o, _ = new f("d1.listItem", g, {
			emits: h,
			classes: i(() => ({ main: {
				"d1-listItem": !0,
				"d1-listItem--focus": g.focus,
				"d1-listItem--open": g.open,
				"d1-listItem--selected": g.selected,
				"d1-listItem--selectedChild": g.selectedChild,
				"d1-listItem--readonly": g.readonly,
				"d1-listItem--disabled": g.disabled,
				"d1-listItem--iconTop": g.iconTop,
				[`d1-listItem--iconAlign--${g.iconAlign}`]: u(m.iconAlign, g.iconAlign),
				"d1-listItem--fill--custom": d(g.fill) && !u(m.fill, g.fill),
				"d1-listItem--divider": g.divider,
				[`d1-listItem--size--${g.size}`]: u(m.size, g.size),
				"d1-listItem--dense": g.dense,
				[`d1-palette d1-palette--${g.palette}`]: u(m.palette, g.palette)
			} })),
			styles: i(() => {
				var e;
				return { "--d1-listItem-sys-fill": (e = g.fill) == null ? null : e };
			}),
			components: {
				icon: e,
				badge: r,
				progress: t,
				ripple: n
			}
		}), v = _.render();
		return s(_.expose()), (e, t) => (c(), a(l(v)));
	}
});
//#endregion
export { g as t };

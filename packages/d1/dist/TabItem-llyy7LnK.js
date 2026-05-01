import { t as e } from "./D1Icon-D7cd72gJ.js";
import { t } from "./D1Progress-D_AWvhbg.js";
import { t as n } from "./D1Ripple-DNVQc-dy.js";
import { t as r } from "./D1Badge-oL9FDddT.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u } from "@dxtmisha/functional";
import { TabItemDesign as d, defaultsTabItem as f } from "@dxtmisha/constructor/TabItem";
//#region src/components/Ui/TabItem/props.ts
var p = {
	adaptive: [
		"iconAlways",
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
	]
}, m = { ...f }, h = /* @__PURE__ */ o({
	name: "D1TabItem",
	__name: "D1TabItem",
	props: /* @__PURE__ */ s({
		label: {},
		labelId: {},
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		badge: {},
		badgeDot: { type: Boolean },
		isSkeleton: { type: Boolean },
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		to: {},
		href: {},
		value: {},
		detail: {},
		role: {},
		index: {},
		tag: {},
		focus: { type: Boolean },
		open: { type: Boolean },
		adaptive: {},
		container: {}
	}, m),
	emits: ["click", "clickLite"],
	setup(o, { expose: s, emit: f }) {
		let m = f, h = o, g = new d("d1.tabItem", h, {
			emits: m,
			classes: i(() => ({ main: {
				"d1-tabItem": !0,
				"d1-tabItem--focus": h.focus,
				"d1-tabItem--open": h.open,
				"d1-tabItem--selected": h.selected,
				"d1-tabItem--disabled": h.disabled,
				[`d1-tabItem--adaptive--${h.adaptive}`]: u(p.adaptive, h.adaptive),
				[`d1-tabItem--container--${h.container}`]: u(p.container, h.container)
			} })),
			styles: i(() => ({})),
			components: {
				icon: e,
				badge: r,
				progress: t,
				ripple: n
			}
		}), _ = g.render();
		return s(g.expose()), (e, t) => (c(), a(l(_)));
	}
});
//#endregion
export { h as t };

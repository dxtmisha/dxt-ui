import { t as e } from "./Button-DRMcV68E.js";
import { t } from "./Actions-YbpRF8-n.js";
import { t as n } from "./Icon-CTJvjh80.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { SnackbarItemDesign as u, defaultsSnackbarItem as d } from "@dxtmisha/constructor/SnackbarItem";
//#region src/components/Ui/SnackbarItem/props.ts
var f = { palette: [
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
] }, p = {
	...d,
	iconClose: "close"
}, m = /* @__PURE__ */ a({
	name: "D1SnackbarItem",
	__name: "D1SnackbarItem",
	props: /* @__PURE__ */ o({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
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
		actionsHide: { type: Boolean },
		actionsList: {},
		actionsSecondary: {},
		actionsAttrs: {},
		role: {},
		ariaLive: {},
		textClose: { type: [String, Function] },
		button: {},
		html: {},
		component: {},
		componentProps: {},
		value: {},
		closeButton: { type: Boolean },
		iconClose: {},
		success: { type: Boolean },
		error: { type: Boolean },
		palette: {}
	}, p),
	emits: [
		"actions",
		"actionsLite",
		"click",
		"clickLite",
		"close"
	],
	setup(a, { expose: o, emit: d }) {
		let p = d, m = a, h = new u("d1.snackbarItem", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-snackbarItem": !0,
				"d1-snackbarItem--success": m.success,
				"d1-snackbarItem--error": m.error,
				[`d1-palette d1-palette--${m.palette}`]: l(f.palette, m.palette)
			} })),
			styles: r(() => ({})),
			components: {
				icon: n,
				button: e,
				actions: t
			},
			compMod: {
				button: { hasLabelMinWidth: !1 },
				"button-close": {
					secondary: !0,
					roundedFull: !0,
					size: "xs",
					palette: "neutral",
					inverse: !0
				},
				actions: {
					padding: "none",
					paddingByIndent: !1,
					buttonAttrs: { size: "sm" },
					buttonSecondaryAttrs: {
						text: !0,
						inverse: !0,
						size: "sm"
					}
				}
			}
		}), g = h.render();
		return o(h.expose()), (e, t) => (s(), i(c(g)));
	}
});
//#endregion
export { m as t };

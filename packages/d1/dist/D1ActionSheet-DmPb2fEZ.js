import { t as e } from "./Window-ojCXyZuk.js";
import { t } from "./Bars-DWi68csG.js";
import { t as n } from "./Actions-kURPsjNe.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { ActionSheetDesign as u, defaultsActionSheet as d } from "@dxtmisha/constructor/ActionSheet";
//#region src/components/Ui/ActionSheet/props.ts
var f = { width: [
	"sm",
	"md",
	"lg",
	"auto"
] }, p = {
	...d,
	width: "md"
}, m = /* @__PURE__ */ a({
	name: "D1ActionSheet",
	__name: "D1ActionSheet",
	props: /* @__PURE__ */ o({
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		barsLabel: {},
		barsDescription: {},
		barsBackHide: { type: Boolean },
		barsHide: { type: Boolean },
		barsList: {},
		barsAttrs: {},
		actionsHide: { type: Boolean },
		actionsList: {},
		actionsSecondary: {},
		actionsAttrs: {},
		open: { type: Boolean },
		touchClose: { type: Boolean },
		width: {}
	}, p),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite"
	],
	setup(a, { expose: o, emit: d }) {
		let p = d, m = a, h = new u("d1.actionSheet", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-actionSheet": !0,
				[`d1-actionSheet--width--${m.width}`]: l(f.width, m.width)
			} })),
			styles: r(() => ({})),
			components: {
				window: e,
				bars: t,
				actions: n
			},
			compMod: { window: { divider: !0 } }
		}), g = h.render();
		return o(h.expose()), (e, t) => (s(), i(c(g)));
	}
});
//#endregion
export { m as t };

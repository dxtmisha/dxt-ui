import { t as e } from "./Window-ojCXyZuk.js";
import { t } from "./Bars-DWi68csG.js";
import { t as n } from "./Actions-Dx8BFMDl.js";
import { t as r } from "./Icon-CTJvjh80.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { inArray as u } from "@dxtmisha/functional";
import { DialogDesign as d, defaultsDialog as f } from "@dxtmisha/constructor/Dialog";
//#region src/components/Ui/Dialog/props.ts
var p = {
	imagePosition: ["top", "left"],
	width: [
		"sm",
		"md",
		"lg",
		"auto"
	]
}, m = {
	...f,
	buttonClose: { outline: !0 },
	imagePosition: "top",
	width: "md"
}, h = /* @__PURE__ */ o({
	name: "D1Dialog",
	__name: "D1Dialog",
	props: /* @__PURE__ */ s({
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
		image: {},
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		textClose: { type: [String, Function] },
		textOk: { type: [String, Function] },
		open: { type: Boolean },
		icon: {},
		buttonOk: {},
		buttonClose: {},
		closeButton: { type: Boolean },
		clickOkAndClose: { type: Boolean },
		iconSuccess: {},
		iconError: {},
		iconAttrs: {},
		success: { type: Boolean },
		error: { type: Boolean },
		imagePosition: {},
		width: {}
	}, m),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite",
		"ok",
		"close"
	],
	setup(o, { expose: s, emit: f }) {
		let m = f, h = o, g = new d("d1.dialog", h, {
			emits: m,
			classes: i(() => ({ main: {
				"d1-dialog": !0,
				"d1-dialog--success": h.success,
				"d1-dialog--error": h.error,
				[`d1-dialog--imagePosition--${h.imagePosition}`]: u(p.imagePosition, h.imagePosition),
				[`d1-dialog--width--${h.width}`]: u(p.width, h.width)
			} })),
			styles: i(() => ({})),
			components: {
				window: e,
				bars: t,
				actions: n,
				icon: r
			}
		}), _ = g.render();
		return s(g.expose()), (e, t) => (c(), a(l(_)));
	}
});
//#endregion
export { h as t };

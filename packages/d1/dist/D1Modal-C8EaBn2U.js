import { t as e } from "./Window-ojCXyZuk.js";
import { t } from "./Bars-DWi68csG.js";
import { t as n } from "./Actions-Dx8BFMDl.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { ModalDesign as u, defaultsModal as d } from "@dxtmisha/constructor/Modal";
//#region src/components/Ui/Modal/props.ts
var f = {
	imagePosition: ["top", "left"],
	width: [
		"sm",
		"md",
		"lg",
		"xl",
		"auto"
	]
}, p = {
	...d,
	imagePosition: "top",
	width: "md"
}, m = /* @__PURE__ */ a({
	name: "D1Modal",
	__name: "D1Modal",
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
		image: {},
		open: { type: Boolean },
		imagePosition: {},
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
		let p = d, m = a, h = new u("d1.modal", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-modal": !0,
				[`d1-modal--imagePosition--${m.imagePosition}`]: l(f.imagePosition, m.imagePosition),
				[`d1-modal--width--${m.width}`]: l(f.width, m.width)
			} })),
			styles: r(() => ({})),
			components: {
				window: e,
				bars: t,
				actions: n
			}
		}), g = h.render();
		return o(h.expose()), (e, t) => (s(), i(c(g)));
	}
});
//#endregion
export { m as t };

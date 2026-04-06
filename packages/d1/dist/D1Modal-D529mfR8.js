import { n as e, r as t, t as n } from "./ModalDesignAbstract-BaVdtb1N-CW8RThHA.js";
import { t as r } from "./Actions-CqJYI_bN.js";
import { t as i } from "./Bars-Bnraxu8E.js";
import { t as a } from "./Window-DK8KkOOD.js";
import { computed as o, createBlock as s, defineComponent as c, mergeDefaults as l, openBlock as u, unref as d } from "vue";
import { inArray as f } from "@dxtmisha/functional";
//#region ../constructor/dist/modal.js
var p = class extends n {
	constructor(e, t, n, r, i, a, s, c, l) {
		super(e, t, n, r, i, a, s, c, o(() => ({
			open: e.open,
			image: e.image,
			adaptive: "modal",
			imagePosition: e.imagePosition,
			closeButton: e.barsBackHide
		})), void 0, void 0, l), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = s, this.emits = c;
	}
}, m = class extends t {
	initItem(e) {
		return new (e == null ? p : e)(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
	}
	initClasses() {
		return {
			main: {},
			title: this.getSubClass("title"),
			header: this.getSubClass("header"),
			body: this.getSubClass("body"),
			footer: this.getSubClass("footer")
		};
	}
}, h = {
	imagePosition: ["top", "left"],
	width: [
		"sm",
		"md",
		"lg",
		"xl",
		"auto"
	]
}, g = {
	...e,
	imagePosition: "top",
	width: "md"
}, _ = /* @__PURE__ */ c({
	name: "D1Modal",
	__name: "D1Modal",
	props: /* @__PURE__ */ l({
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
	}, g),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite"
	],
	setup(e, { expose: t, emit: n }) {
		let c = n, l = e, p = new m("d1.modal", l, {
			emits: c,
			classes: o(() => ({ main: {
				"d1-modal": !0,
				[`d1-modal--imagePosition--${l.imagePosition}`]: f(h.imagePosition, l.imagePosition),
				[`d1-modal--width--${l.width}`]: f(h.width, l.width)
			} })),
			styles: o(() => ({})),
			components: {
				window: a,
				bars: i,
				actions: r
			}
		}), g = p.render();
		return t(p.expose()), (e, t) => (u(), s(d(g)));
	}
});
//#endregion
export { _ as t };

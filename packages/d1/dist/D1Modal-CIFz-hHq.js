import { t as e } from "./Bars-4aLg7pr8.js";
import { t } from "./Actions-BOdB5iOT.js";
import { t as n } from "./Window-9iCpMfYB.js";
import { n as r, t as i } from "./ModalDesignAbstract-CdF7kXxe-4727Mwk8.js";
import { computed as a, createBlock as o, defineComponent as s, mergeDefaults as c, openBlock as l, unref as u } from "vue";
import { inArray as d } from "@dxtmisha/functional";
//#region ../constructor/dist/modal.js
var f = {
	barsBackHide: !0,
	imagePosition: "top"
}, p = class extends i {
	constructor(e, t, n, r, i, o, s, c) {
		super(e, t, n, r, i, o, s, c, a(() => ({
			open: e.open,
			image: e.image,
			adaptive: "modal",
			imagePosition: e.imagePosition,
			closeButton: e.barsBackHide
		}))), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = o, this.slots = s, this.emits = c;
	}
}, m = class extends r {
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
	...f,
	imagePosition: "top",
	width: "md"
}, _ = /* @__PURE__ */ s({
	name: "D1Modal",
	__name: "D1Modal",
	props: /* @__PURE__ */ c({
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
	setup(r, { expose: i, emit: s }) {
		let c = s, f = r, p = new m("d1.modal", f, {
			emits: c,
			classes: a(() => ({ main: {
				"d1-modal": !0,
				[`d1-modal--imagePosition--${f.imagePosition}`]: d(h.imagePosition, f.imagePosition),
				[`d1-modal--width--${f.width}`]: d(h.width, f.width)
			} })),
			styles: a(() => ({})),
			components: {
				window: n,
				bars: e,
				actions: t
			}
		}), g = p.render();
		return i(p.expose()), (e, t) => (l(), o(u(g)));
	}
});
//#endregion
export { _ as t };

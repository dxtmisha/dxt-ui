import { n as e, t } from "./BlockDesign-CyWDtREQ-PkltzxSr.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
//#region ../constructor/dist/page.js
var c = class extends e {}, l = {
	tag: "main",
	tagHeader: "h1"
}, u = class extends t {
	constructor(e, t, n, r = c) {
		super(e, t, n, r);
	}
}, d = { ...l }, f = /* @__PURE__ */ i({
	name: "D1Page",
	__name: "D1Page",
	props: /* @__PURE__ */ a({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		headline: {},
		tag: {},
		tagHeader: {}
	}, d),
	setup(e, { expose: t, emit: i }) {
		let a = new u("d1.page", e, {
			emits: i,
			classes: n(() => ({ main: { "d1-page": !0 } })),
			styles: n(() => ({}))
		}), c = a.render();
		return t(a.expose()), (e, t) => (o(), r(s(c)));
	}
});
//#endregion
export { f as t };

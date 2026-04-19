import { t as e } from "./Icon-DNvT1EWx.js";
import { n as t, t as n } from "./BlockDesign-CuqfR05k-DcSXHhcg.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import "@dxtmisha/functional";
//#region ../constructor/dist/group.js
var l = class extends t {}, u = {
	tag: "div",
	tagHeader: "h4"
}, d = class extends n {
	constructor(e, t, n, r = l) {
		super(e, t, n, r);
	}
}, f = { ...u }, p = /* @__PURE__ */ a({
	name: "D1Group",
	__name: "D1Group",
	props: /* @__PURE__ */ o({
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
	}, f),
	setup(t, { expose: n, emit: a }) {
		let o = new d("d1.group", t, {
			emits: a,
			classes: r(() => ({ main: { "d1-group": !0 } })),
			styles: r(() => ({})),
			components: { icon: e }
		}), l = o.render();
		return n(o.expose()), (e, t) => (s(), i(c(l)));
	}
});
//#endregion
export { p as t };

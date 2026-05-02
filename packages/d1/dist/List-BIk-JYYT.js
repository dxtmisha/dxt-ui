import { t as e } from "./ListItem-uEr1TnPQ.js";
import { t } from "./ListGroup-DvKz--05.js";
import { t as n } from "./ListMenu-JZaDxGBZ.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { ListDesign as u, defaultsList as d } from "@dxtmisha/constructor/List";
//#region src/components/Ui/List/props.ts
var f = { axis: ["x", "y"] }, p = {
	...d,
	iconArrowDown: "keyboard_arrow_down",
	iconArrowRight: "keyboard_arrow_right",
	axis: "y"
}, m = /* @__PURE__ */ a({
	name: "D1List",
	__name: "D1List",
	props: /* @__PURE__ */ o({
		role: {},
		ariaMultiselectable: { type: Boolean },
		focus: { type: [
			Number,
			String,
			Boolean
		] },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		disabled: { type: Boolean },
		lite: { type: Boolean },
		list: {},
		liteThreshold: {},
		highlight: {},
		highlightLengthStart: {},
		filterMode: { type: Boolean },
		keyLabel: {},
		keyValue: {},
		max: {},
		tag: {},
		axis: {},
		divider: { type: Boolean },
		itemAttrs: {},
		itemManagementAttrs: {},
		itemGroupAttrs: {},
		itemMenuAttrs: {},
		iconArrowDown: {},
		iconArrowRight: {},
		roleItem: {},
		tabindex: {},
		control: { type: Boolean }
	}, p),
	emits: [
		"click",
		"clickLite",
		"close"
	],
	setup(a, { expose: o, emit: d }) {
		let p = d, m = a, h = new u("d1.list", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-list": !0,
				[`d1-list--axis--${m.axis}`]: l(f.axis, m.axis),
				"d1-list--divider": m.divider
			} })),
			styles: r(() => ({})),
			components: {
				listItem: e,
				listGroup: t,
				listMenu: n
			}
		}), g = h.render();
		return o(h.expose()), (e, t) => (s(), i(c(g)));
	}
});
//#endregion
export { m as t };

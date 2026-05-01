import { t as e } from "./Cell-Byq-kVKv.js";
import { t } from "./MotionTransform-XikiWNh2.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { AccordionDesign as c, defaultsAccordion as l } from "@dxtmisha/constructor/Accordion";
//#region src/components/Ui/Accordion/props.ts
var u = {
	...l,
	iconArrowDown: "keyboard_arrow_down",
	divider: !0
}, d = /* @__PURE__ */ i({
	name: "D1Accordion",
	__name: "D1Accordion",
	props: /* @__PURE__ */ a({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		icon: {},
		open: { type: Boolean },
		clickOpen: { type: Boolean },
		autoClose: { type: Boolean },
		motionTransformAttrs: {},
		modelOpen: {},
		"onUpdate:open": { type: Function },
		"onUpdate:modelOpen": { type: Function },
		cellAttrs: {},
		iconArrowDown: {},
		divider: { type: Boolean }
	}, u),
	emits: [
		"click",
		"clickLite",
		"transform",
		"transformLite",
		"update:open",
		"update:modelOpen"
	],
	setup(i, { expose: a, emit: l }) {
		let u = l, d = i, f = new c("d1.accordion", d, {
			emits: u,
			classes: n(() => ({ main: {
				"d1-accordion": !0,
				"d1-accordion--divider": d.divider
			} })),
			styles: n(() => ({})),
			components: {
				cell: e,
				motionTransform: t
			}
		}), p = f.render();
		return a(f.expose()), (e, t) => (o(), r(s(p)));
	}
});
//#endregion
export { d as t };

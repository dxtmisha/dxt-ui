import { t as e } from "./Icon-hEsmQkfg.js";
import { r as t, t as n } from "./BlockDesign-C6w_RCLR-DUzpX8f6.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import "@dxtmisha/functional";
//#region src/components/Ui/Block/props.ts
var l = { ...t }, u = /* @__PURE__ */ a({
	name: "D1Block",
	__name: "D1Block",
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
	}, l),
	setup(t, { expose: a, emit: o }) {
		let l = new n("d1.block", t, {
			emits: o,
			classes: r(() => ({ main: { "d1-block": !0 } })),
			styles: r(() => ({})),
			components: { icon: e }
		}), u = l.render();
		return a(l.expose()), (e, t) => (s(), i(c(u)));
	}
});
//#endregion
export { u as t };

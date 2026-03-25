import { t as e } from "./Icon-9c2pxWjK.js";
import { t } from "./BlockDesign-DHCkcwP1-CrAnw3HB.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
//#endregion
//#region src/components/Ui/Block/D1Block.vue
var c = /* @__PURE__ */ i({
	name: "D1Block",
	__name: "D1Block",
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
	}, {
		tag: "div",
		tagHeader: "h3"
	}),
	setup(i, { expose: a, emit: c }) {
		let l = new t("d1.block", i, {
			emits: c,
			classes: n(() => ({ main: { "d1-block": !0 } })),
			styles: n(() => ({})),
			components: { icon: e }
		}), u = l.render();
		return a(l.expose()), (e, t) => (o(), r(s(u)));
	}
});
//#endregion
export { c as t };

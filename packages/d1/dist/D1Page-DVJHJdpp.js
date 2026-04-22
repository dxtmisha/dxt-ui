import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { PageDesign as o, defaultsPage as s } from "@dxtmisha/constructor/Page";
//#region src/components/Ui/Page/props.ts
var c = { ...s }, l = /* @__PURE__ */ n({
	name: "D1Page",
	__name: "D1Page",
	props: /* @__PURE__ */ r({
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
	}, c),
	setup(n, { expose: r, emit: s }) {
		let c = new o("d1.page", n, {
			emits: s,
			classes: e(() => ({ main: { "d1-page": !0 } })),
			styles: e(() => ({}))
		}), l = c.render();
		return r(c.expose()), (e, n) => (i(), t(a(l)));
	}
});
//#endregion
export { l as t };

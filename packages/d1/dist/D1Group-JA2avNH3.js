import { t as e } from "./Header-DYJbS1cJ.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import "@dxtmisha/functional";
import { GroupDesign as s, defaultsGroup as c } from "@dxtmisha/constructor/Group";
//#region src/components/Ui/Group/props.ts
var l = { ...c }, u = /* @__PURE__ */ r({
	name: "D1Group",
	__name: "D1Group",
	props: /* @__PURE__ */ i({
		label: {},
		labelId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		tagHeader: {},
		headerAttrs: {},
		description: {},
		descriptionId: {},
		area: {},
		headline: {},
		tag: {}
	}, l),
	setup(r, { expose: i, emit: c }) {
		let l = new s("d1.group", r, {
			emits: c,
			classes: t(() => ({ main: { "d1-group": !0 } })),
			styles: t(() => ({})),
			components: { header: e }
		}), u = l.render();
		return i(l.expose()), (e, t) => (a(), n(o(u)));
	}
});
//#endregion
export { u as t };

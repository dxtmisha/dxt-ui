import { t as e } from "./Icon-CTJvjh80.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { HeaderDesign as c, defaultsHeader as l } from "@dxtmisha/constructor/Header";
//#region src/components/Ui/Header/props.ts
var u = { tag: [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
] }, d = {
	...l,
	tag: "h3"
}, f = /* @__PURE__ */ r({
	name: "D1Header",
	__name: "D1Header",
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
		area: {},
		tag: {}
	}, d),
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.header", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-header": !0,
				[`d1-header--tag--${f.tag}`]: s(u.tag, f.tag)
			} })),
			styles: t(() => ({})),
			components: { icon: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

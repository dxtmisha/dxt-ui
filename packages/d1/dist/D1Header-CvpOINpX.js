import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { HeaderDesign as s, defaultsHeader as c } from "@dxtmisha/constructor/Header";
//#region src/components/Ui/Header/props.ts
var l = { tag: [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
] }, u = {
	...c,
	tag: "h3"
}, d = /* @__PURE__ */ n({
	name: "D1Header",
	__name: "D1Header",
	props: /* @__PURE__ */ r({
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
	}, u),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.header", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-header": !0,
				[`d1-header--tag--${d.tag}`]: o(l.tag, d.tag)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

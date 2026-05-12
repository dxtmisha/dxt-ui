import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { HorizontalScrollDesign as s, defaultsHorizontalScroll as c } from "@dxtmisha/constructor/HorizontalScroll";
//#region src/components/Ui/HorizontalScroll/props.ts
var l = { align: [
	"block",
	"center",
	"left",
	"right"
] }, u = {
	...c,
	flush: !0,
	align: "stretch"
}, d = /* @__PURE__ */ n({
	name: "D1HorizontalScroll",
	__name: "D1HorizontalScroll",
	props: /* @__PURE__ */ r({
		flush: { type: Boolean },
		tag: {},
		align: {}
	}, u),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.horizontalScroll", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-horizontalScroll": !0,
				"d1-horizontalScroll--flush": d.flush,
				[`d1-horizontalScroll--align--${d.align}`]: o(l.align, d.align)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

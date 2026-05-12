import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { ContainerDesign as s, defaultsContainer as c } from "@dxtmisha/constructor/Container";
//#region src/components/Ui/Container/props.ts
var l = { align: [
	"left",
	"center",
	"right"
] }, u = /* @__PURE__ */ n({
	name: "D1Container",
	__name: "D1Container",
	props: /* @__PURE__ */ r({
		area: {},
		align: {}
	}, {
		...c,
		align: "center"
	}),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.container", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-container": !0,
				[`d1-container--align--${d.align}`]: o(l.align, d.align)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { u as t };

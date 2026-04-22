import { computed as e, createBlock as t, defineComponent as n, openBlock as r, unref as i } from "vue";
import "@dxtmisha/functional";
import { GridDesign as a } from "@dxtmisha/constructor/Grid";
//#endregion
//#region src/components/Ui/Grid/D1Grid.vue
var o = /* @__PURE__ */ n({
	name: "D1Grid",
	__name: "D1Grid",
	setup(n, { expose: o, emit: s }) {
		let c = new a("d1.grid", n, {
			emits: s,
			classes: e(() => ({ main: { "d1-grid": !0 } })),
			styles: e(() => ({}))
		}), l = c.render();
		return o(c.expose()), (e, n) => (r(), t(i(l)));
	}
});
//#endregion
export { o as t };

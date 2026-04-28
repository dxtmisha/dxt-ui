import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { AreaDesign as o, defaultsArea as s } from "@dxtmisha/constructor/Area";
//#endregion
//#region src/components/Ui/Area/D1Area.vue
var c = /* @__PURE__ */ n({
	name: "D1Area",
	__name: "D1Area",
	props: /* @__PURE__ */ r({ areaDefault: {} }, { ...s }),
	setup(n, { expose: r, emit: s }) {
		let c = new o("d1.area", n, {
			emits: s,
			classes: e(() => ({ main: { "d1-area": !0 } })),
			styles: e(() => ({}))
		}), l = c.render();
		return r(c.expose()), (e, n) => (i(), t(a(l)));
	}
});
//#endregion
export { c as t };

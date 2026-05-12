import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { ClientOnlyDesign as o, defaultsClientOnly as s } from "@dxtmisha/constructor/ClientOnly";
//#region src/components/Ui/ClientOnly/props.ts
var c = { ...s }, l = /* @__PURE__ */ n({
	name: "D1ClientOnly",
	__name: "D1ClientOnly",
	props: /* @__PURE__ */ r({ clientOnly: { type: Boolean } }, c),
	setup(n, { expose: r, emit: s }) {
		let c = new o("d1.clientOnly", n, {
			emits: s,
			classes: e(() => ({ main: { "d1-clientOnly": !0 } })),
			styles: e(() => ({}))
		}), l = c.render();
		return r(c.expose()), (e, n) => (i(), t(a(l)));
	}
});
//#endregion
export { l as t };

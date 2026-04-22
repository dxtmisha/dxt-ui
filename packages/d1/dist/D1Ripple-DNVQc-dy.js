import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { RippleDesign as o, defaultsRipple as s } from "@dxtmisha/constructor/Ripple";
//#region src/components/Ui/Ripple/props.ts
var c = { ...s }, l = /* @__PURE__ */ n({
	name: "D1Ripple",
	__name: "D1Ripple",
	props: /* @__PURE__ */ r({ disabled: { type: Boolean } }, c),
	setup(n, { expose: r, emit: s }) {
		let c = new o("d1.ripple", n, {
			emits: s,
			classes: e(() => ({ main: { "d1-ripple": !0 } })),
			styles: e(() => ({}))
		}), l = c.render();
		return r(c.expose()), (e, n) => (i(), t(a(l)));
	}
});
//#endregion
export { l as t };

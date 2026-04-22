import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { SkeletonDesign as o, defaultsSkeleton as s } from "@dxtmisha/constructor/Skeleton";
//#region src/components/Ui/Skeleton/props.ts
var c = { ...s }, l = /* @__PURE__ */ n({
	name: "D1Skeleton",
	__name: "D1Skeleton",
	props: /* @__PURE__ */ r({ active: { type: Boolean } }, c),
	setup(n, { expose: r, emit: s }) {
		let c = s, l = n, u = new o("d1.skeleton", l, {
			emits: c,
			classes: e(() => ({ main: {
				"d1-skeleton": !0,
				"d1-skeleton--active": l.active
			} })),
			styles: e(() => ({}))
		}), d = u.render();
		return r(u.expose()), (e, n) => (i(), t(a(d)));
	}
});
//#endregion
export { l as t };

import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { ArrowDesign as s, defaultsArrow as c } from "@dxtmisha/constructor/Arrow";
//#region src/components/Ui/Arrow/props.ts
var l = {
	position: [
		"auto",
		"top",
		"bottom",
		"left",
		"right"
	],
	size: [
		"sm",
		"md",
		"lg"
	]
}, u = {
	...c,
	position: "auto",
	size: "md"
}, d = /* @__PURE__ */ n({
	name: "D1Arrow",
	__name: "D1Arrow",
	props: /* @__PURE__ */ r({
		elementTarget: {},
		position: {},
		inverse: { type: Boolean },
		size: {}
	}, u),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.arrow", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-arrow": !0,
				[`d1-arrow--position--${d.position}`]: o(l.position, d.position),
				"d1-arrow--inverse": d.inverse,
				[`d1-arrow--size--${d.size}`]: o(l.size, d.size)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

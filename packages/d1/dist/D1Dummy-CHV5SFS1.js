import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { DummyDesign as s, defaultsDummy as c } from "@dxtmisha/constructor/Dummy";
//#region src/components/Ui/Dummy/props.ts
var l = {
	size: [
		"x",
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl"
	],
	palette: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
		"gray",
		"zinc",
		"neutral",
		"stone",
		"black",
		"white"
	]
}, u = /* @__PURE__ */ n({
	name: "D1Dummy",
	__name: "D1Dummy",
	props: /* @__PURE__ */ r({
		size: {},
		palette: {}
	}, {
		...c,
		size: "md"
	}),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.dummy", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-dummy": !0,
				[`d1-dummy--size--${d.size}`]: o(l.size, d.size),
				[`d1-palette d1-palette--${d.palette}`]: o(l.palette, d.palette)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { u as t };

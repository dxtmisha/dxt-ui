import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { ProgressDesign as s, defaultsProgress as c } from "@dxtmisha/constructor/Progress";
//#region src/components/Ui/Progress/props.ts
var l = {
	indeterminate: [
		"type1",
		"type2",
		"type3"
	],
	position: [
		"top",
		"bottom",
		"static"
	],
	size: [
		"sm",
		"md",
		"lg"
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
}, u = {
	...c,
	linear: !0,
	indeterminate: "type1",
	position: "top",
	size: "md"
}, d = /* @__PURE__ */ n({
	name: "D1Progress",
	__name: "D1Progress",
	props: /* @__PURE__ */ r({
		ariaLabel: {},
		textLoading: { type: [String, Function] },
		visible: { type: Boolean },
		value: {},
		max: {},
		linear: { type: Boolean },
		circular: { type: Boolean },
		point: { type: Boolean },
		delay: {},
		delayHide: {},
		indeterminate: {},
		position: {},
		dense: { type: Boolean },
		inverse: { type: Boolean },
		size: {},
		palette: {}
	}, u),
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.progress", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-progress": !0,
				"d1-progress--point": d.point,
				"d1-progress--linear": d.linear && !d.circular,
				"d1-progress--circular": d.circular,
				[`d1-progress--indeterminate--${d.indeterminate}`]: o(l.indeterminate, d.indeterminate),
				[`d1-progress--position--${d.position}`]: o(l.position, d.position),
				"d1-progress--dense": d.dense,
				"d1-progress--inverse": d.inverse,
				[`d1-progress--size--${d.size}`]: o(l.size, d.size),
				[`d1-palette d1-palette--${d.palette}`]: o(l.palette, d.palette)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

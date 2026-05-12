import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { MotionAxisDesign as s, defaultsMotionAxis as c } from "@dxtmisha/constructor/MotionAxis";
//#region src/components/Ui/MotionAxis/props.ts
var l = {
	axis: [
		"x",
		"y",
		"z"
	],
	direction: [
		"next",
		"back",
		"auto"
	]
}, u = {
	...c,
	axis: "x",
	direction: "auto"
}, d = /* @__PURE__ */ n({
	name: "D1MotionAxis",
	__name: "D1MotionAxis",
	props: /* @__PURE__ */ r({
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		selected: {},
		animationHeight: { type: Boolean },
		inDom: { type: Boolean },
		inDomSlide: {},
		axis: {},
		direction: {}
	}, u),
	emits: [
		"update:selected",
		"update:modelSelected",
		"motionAxis",
		"start",
		"end"
	],
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.motionAxis", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-motionAxis": !0,
				[`d1-motionAxis--axis--${d.axis}`]: o(l.axis, d.axis),
				[`d1-motionAxis--direction--${d.direction}`]: o(l.direction, d.direction)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

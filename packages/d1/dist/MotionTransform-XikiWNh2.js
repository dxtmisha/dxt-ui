import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { MotionTransformDesign as s, defaultsMotionTransform as c } from "@dxtmisha/constructor/MotionTransform";
//#region src/components/Ui/MotionTransform/props.ts
var l = {
	animationHeadPosition: ["top", "toBottom"],
	adaptive: [
		"planeAlways",
		"planeSm",
		"planeMd",
		"planeLg",
		"planeXl",
		"plane2xl"
	]
}, u = {
	...c,
	animationHeadPosition: "top",
	adaptive: "planeMd"
}, d = /* @__PURE__ */ n({
	name: "D1MotionTransform",
	__name: "D1MotionTransform",
	props: /* @__PURE__ */ r({
		ariaLabelledby: {},
		ariaDescribedby: {},
		modelOpen: {},
		"onUpdate:open": { type: Function },
		"onUpdate:modelOpen": { type: Function },
		open: { type: Boolean },
		inDom: { type: Boolean },
		ignore: {},
		ignoreSelector: {},
		clickOpen: { type: Boolean },
		autoClose: { type: Boolean },
		animationShow: { type: Boolean },
		tagBody: {},
		section: { type: Boolean },
		animationHeadPosition: {},
		adaptive: {}
	}, u),
	emits: [
		"update:open",
		"update:modelOpen",
		"transform",
		"transformLite"
	],
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.motionTransform", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-motionTransform": !0,
				"d1-motionTransform--section": d.section,
				[`d1-motionTransform--animationHeadPosition--${d.animationHeadPosition}`]: o(l.animationHeadPosition, d.animationHeadPosition),
				[`d1-motionTransform--adaptive--${d.adaptive}`]: o(l.adaptive, d.adaptive)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

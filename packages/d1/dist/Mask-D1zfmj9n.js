import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { MaskDesign as s, defaultsMask as c } from "@dxtmisha/constructor/Mask";
//#region src/components/Ui/Mask/props.ts
var l = {
	align: [
		"center",
		"left",
		"right"
	],
	dir: ["ltr", "rtl"]
}, u = {
	...c,
	visible: !0
}, d = /* @__PURE__ */ n({
	name: "D1Mask",
	__name: "D1Mask",
	props: /* @__PURE__ */ r({
		name: {},
		value: {},
		valueDefault: {},
		currency: {},
		currencyHide: { type: Boolean },
		fullOnly: { type: Boolean },
		mask: {},
		special: {},
		match: {},
		groupSave: { type: Boolean },
		pattern: { type: [
			String,
			Object,
			Function
		] },
		check: { type: [
			String,
			Object,
			Function
		] },
		fraction: { type: [
			String,
			Boolean,
			Number
		] },
		type: {},
		view: {},
		inputAttrs: {},
		language: {},
		visible: { type: Boolean },
		visiblePartly: { type: Boolean },
		align: {},
		dir: {}
	}, u),
	emits: [
		"focus",
		"blur",
		"keydown",
		"keyup",
		"beforeinput",
		"input",
		"inputLite",
		"change",
		"changeLite",
		"paste",
		"reset"
	],
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.mask", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-mask": !0,
				"d1-mask--visible": d.visible,
				"d1-mask--visiblePartly": d.visiblePartly,
				[`d1-mask--align--${d.align}`]: o(l.align, d.align),
				[`d1-mask--dir--${d.dir}`]: o(l.dir, d.dir)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

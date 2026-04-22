import { t as e } from "./Button-DRMcV68E.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { ActionsDesign as c, defaultsActions as l } from "@dxtmisha/constructor/Actions";
//#region src/components/Ui/Actions/props.ts
var u = {
	align: [
		"none",
		"center",
		"left",
		"right",
		"block",
		"auto"
	],
	flexible: [
		"adaptiveSm",
		"adaptiveMd",
		"adaptiveLg",
		"adaptiveXl",
		"adaptive2xl",
		"containerSm",
		"containerMd",
		"containerLg",
		"containerXl",
		"container2xl"
	],
	padding: [
		"sm",
		"md",
		"lg",
		"ySm",
		"yMd",
		"yLg",
		"none"
	]
}, d = {
	...l,
	buttonSecondaryAttrs: {
		text: !0,
		inverse: !0
	},
	align: "right",
	paddingByIndent: !0
}, f = /* @__PURE__ */ r({
	name: "D1Actions",
	__name: "D1Actions",
	props: /* @__PURE__ */ i({
		list: {},
		listSecondary: {},
		buttonAttrs: {},
		buttonSecondaryAttrs: {},
		align: {},
		flexible: {},
		wrap: { type: Boolean },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, d),
	emits: ["click", "clickLite"],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.actions", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-actions": !0,
				[`d1-actions--align--${f.align}`]: s(u.align, f.align),
				[`d1-actions--flexible--${f.flexible}`]: s(u.flexible, f.flexible),
				"d1-actions--wrap": f.wrap,
				[`d1-actions--padding--${f.padding}`]: s(u.padding, f.padding),
				"d1-actions--paddingByIndent": f.paddingByIndent
			} })),
			styles: t(() => ({})),
			components: { button: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

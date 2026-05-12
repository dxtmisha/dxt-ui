import { t as e } from "./Button-SR887un4.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { ButtonGroupDesign as c, defaultsButtonGroup as l } from "@dxtmisha/constructor/ButtonGroup";
//#region src/components/Ui/ButtonGroup/props.ts
var u = { orientation: ["horizontal", "vertical"] }, d = {
	...l,
	orientation: "horizontal"
}, f = /* @__PURE__ */ r({
	name: "D1ButtonGroup",
	__name: "D1ButtonGroup",
	props: /* @__PURE__ */ i({
		area: {},
		list: {},
		buttonAttrs: {},
		orientation: {},
		wrap: { type: Boolean }
	}, d),
	emits: ["click", "clickLite"],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.buttonGroup", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-buttonGroup": !0,
				[`d1-buttonGroup--orientation--${f.orientation}`]: s(u.orientation, f.orientation),
				"d1-buttonGroup--wrap": f.wrap
			} })),
			styles: t(() => ({})),
			components: { button: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

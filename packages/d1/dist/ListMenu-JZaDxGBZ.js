import { t as e } from "./Window-ojCXyZuk.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { ListMenuDesign as c, defaultsListMenu as l } from "@dxtmisha/constructor/ListMenu";
//#region src/components/Ui/ListMenu/props.ts
var u = { axis: ["x", "y"] }, d = { ...l }, f = /* @__PURE__ */ r({
	name: "D1ListMenu",
	__name: "D1ListMenu",
	props: /* @__PURE__ */ i({
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		open: { type: Boolean },
		axis: {},
		divider: { type: Boolean }
	}, d),
	emits: ["window"],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.listMenu", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-listMenu": !0,
				"d1-listMenu--open": f.open,
				[`d1-listMenu--axis--${f.axis}`]: s(u.axis, f.axis),
				"d1-listMenu--divider": f.divider
			} })),
			styles: t(() => ({})),
			components: { window: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

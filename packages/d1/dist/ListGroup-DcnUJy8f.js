import { t as e } from "./MotionTransform-XikiWNh2.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import "@dxtmisha/functional";
import { ListGroupDesign as s, defaultsListGroup as c } from "@dxtmisha/constructor/ListGroup";
//#region src/components/Ui/ListGroup/props.ts
var l = { ...c }, u = /* @__PURE__ */ r({
	name: "D1ListGroup",
	__name: "D1ListGroup",
	props: /* @__PURE__ */ i({
		divider: { type: Boolean },
		open: { type: Boolean }
	}, l),
	setup(r, { expose: i, emit: c }) {
		let l = c, u = r, d = new s("d1.listGroup", u, {
			emits: l,
			classes: t(() => ({ main: {
				"d1-listGroup": !0,
				"d1-listGroup--open": u.open,
				"d1-listGroup--divider": u.divider
			} })),
			styles: t(() => ({})),
			components: { motionTransform: e }
		}), f = d.render();
		return i(d.expose()), (e, t) => (a(), n(o(f)));
	}
});
//#endregion
export { u as t };

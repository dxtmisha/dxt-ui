import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { ScrollbarDesign as o, defaultsScrollbar as s } from "@dxtmisha/constructor/Scrollbar";
//#region src/components/Ui/Scrollbar/props.ts
var c = { ...s }, l = /* @__PURE__ */ n({
	name: "D1Scrollbar",
	__name: "D1Scrollbar",
	props: /* @__PURE__ */ r({
		tag: {},
		visible: { type: Boolean },
		divider: { type: Boolean },
		dividerTop: { type: Boolean },
		dividerBottom: { type: Boolean },
		dividerHide: { type: Boolean },
		inverse: { type: Boolean },
		standard: { type: Boolean }
	}, c),
	emits: [
		"top",
		"reachTop",
		"leaveTop",
		"bottom",
		"reachBottom",
		"leaveBottom",
		"edge"
	],
	setup(n, { expose: r, emit: s }) {
		let c = s, l = n, u = new o("d1.scrollbar", l, {
			emits: c,
			classes: e(() => ({ main: {
				"d1-scrollbar": !0,
				"d1-scrollbar--visible": l.visible,
				"d1-scrollbar--divider": l.divider,
				"d1-scrollbar--dividerTop": l.dividerTop,
				"d1-scrollbar--dividerBottom": l.dividerBottom,
				"d1-scrollbar--dividerHide": l.dividerHide,
				"d1-scrollbar--inverse": l.inverse,
				"d1-scrollbar--standard": l.standard
			} })),
			styles: e(() => ({}))
		}), d = u.render();
		return r(u.expose()), (e, n) => (i(), t(a(d)));
	}
});
//#endregion
export { l as t };

import { t as e } from "./SnackbarItem-C9YGcCLE.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { SnackbarDesign as c, defaultsSnackbar as l } from "@dxtmisha/constructor/Snackbar";
//#region src/components/Ui/Snackbar/props.ts
var u = {
	limit: [
		"1",
		"2",
		"4",
		"6",
		"8"
	],
	vertical: ["top", "bottom"],
	horizontal: [
		"right",
		"left",
		"block"
	],
	origin: [
		"topToBottom",
		"bottomToTop",
		"rightToLeft",
		"leftToRight"
	]
}, d = { ...l }, f = /* @__PURE__ */ r({
	name: "D1Snackbar",
	__name: "D1Snackbar",
	props: /* @__PURE__ */ i({
		textNotifications: { type: [String, Function] },
		delay: {},
		full: { type: Boolean },
		all: { type: Boolean },
		limit: {},
		vertical: {},
		horizontal: {},
		origin: {}
	}, d),
	emits: ["show", "hide"],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.snackbar", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-snackbar": !0,
				"d1-snackbar--full": f.full,
				"d1-snackbar--all": f.all,
				[`d1-snackbar--limit--${f.limit}`]: s(u.limit, f.limit),
				[`d1-snackbar--vertical--${f.vertical}`]: s(u.vertical, f.vertical),
				[`d1-snackbar--horizontal--${f.horizontal}`]: s(u.horizontal, f.horizontal),
				[`d1-snackbar--origin--${f.origin}`]: s(u.origin, f.origin)
			} })),
			styles: t(() => ({})),
			components: { snackbarItem: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

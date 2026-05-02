import { t as e } from "./HorizontalScroll-C8dnLFOl.js";
import { t } from "./TabItem-DC5oqr3u.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { TabsNavigationDesign as c, defaultsTabsNavigation as l } from "@dxtmisha/constructor/TabsNavigation";
//#region src/components/Ui/TabsNavigation/props.ts
var u = {
	...l,
	divider: !0
}, d = /* @__PURE__ */ i({
	name: "D1TabsNavigation",
	__name: "D1TabsNavigation",
	props: /* @__PURE__ */ a({
		horizontalScrollFlush: { type: Boolean },
		horizontalScrollAlign: {},
		horizontalScrollAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		list: {},
		tag: {},
		keyLabel: {},
		keyValue: {},
		itemAttrs: {},
		divider: { type: Boolean }
	}, u),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected"
	],
	setup(i, { expose: a, emit: l }) {
		let u = l, d = i, f = new c("d1.tabsNavigation", d, {
			emits: u,
			classes: n(() => ({ main: {
				"d1-tabsNavigation": !0,
				"d1-tabsNavigation--divider": d.divider
			} })),
			styles: n(() => ({})),
			components: {
				horizontalScroll: e,
				tabItem: t
			}
		}), p = f.render();
		return a(f.expose()), (e, t) => (o(), r(s(p)));
	}
});
//#endregion
export { d as t };

import { t as e } from "./MotionAxis-B1ij2Ot9.js";
import { t } from "./TabsNavigation-AFmsFd4N.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { TabsDesign as c, defaultsTabs as l } from "@dxtmisha/constructor/Tabs";
//#region src/components/Ui/Tabs/props.ts
var u = { ...l }, d = /* @__PURE__ */ i({
	name: "D1Tabs",
	__name: "D1Tabs",
	props: /* @__PURE__ */ a({
		tabs: {},
		tabItemAttrs: {},
		tabsNavigationAttrs: {},
		selected: {},
		motionAxisAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function }
	}, u),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected",
		"motionAxis"
	],
	setup(i, { expose: a, emit: l }) {
		let u = new c("d1.tabs", i, {
			emits: l,
			classes: n(() => ({ main: { "d1-tabs": !0 } })),
			styles: n(() => ({})),
			components: {
				tabsNavigation: t,
				motionAxis: e
			}
		}), d = u.render();
		return a(u.expose()), (e, t) => (o(), r(s(d)));
	}
});
//#endregion
export { d as t };

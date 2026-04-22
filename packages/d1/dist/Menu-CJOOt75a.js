import { t as e } from "./Window-D7iEqU6R.js";
import { t } from "./Bars-jt4C3NNF.js";
import { t as n } from "./List-CC57cdmz.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { inArray as l } from "@dxtmisha/functional";
import { MenuDesign as u, defaultsMenu as d } from "@dxtmisha/constructor/Menu";
//#region src/components/Ui/Menu/props.ts
var f = { barsAdaptive: [
	"showAlways",
	"showSm",
	"showMd",
	"showLg",
	"showXl",
	"show2xl"
] }, p = { ...d }, m = /* @__PURE__ */ a({
	name: "D1Menu",
	__name: "D1Menu",
	props: /* @__PURE__ */ o({
		barsLabel: {},
		barsDescription: {},
		barsBackHide: { type: Boolean },
		barsHide: { type: Boolean },
		barsList: {},
		barsAttrs: {},
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		hideList: { type: Boolean },
		list: {},
		liteThreshold: {},
		highlight: {},
		highlightLengthStart: {},
		filterMode: { type: Boolean },
		ajax: { type: [String, Function] },
		request: {},
		cache: { type: Boolean },
		keyLabel: {},
		keyValue: {},
		max: {},
		tag: {},
		step: {},
		listAttrs: {},
		itemAttrs: {},
		roleList: {},
		roleItem: {},
		isSelectedByValue: { type: Boolean },
		embedded: { type: Boolean },
		barsAdaptive: {}
	}, p),
	emits: [
		"bars",
		"barsLite",
		"barsBack",
		"click",
		"clickLite",
		"window",
		"update:selected",
		"update:modelSelected",
		"updateValue",
		"clickSlot"
	],
	setup(a, { expose: o, emit: d }) {
		let p = d, m = a, h = new u("d1.menu", m, {
			emits: p,
			classes: r(() => ({ main: {
				"d1-menu": !0,
				"d1-menu--hideList": m.hideList,
				[`d1-menu--barsAdaptive--${m.barsAdaptive}`]: l(f.barsAdaptive, m.barsAdaptive)
			} })),
			styles: r(() => ({})),
			components: {
				list: n,
				bars: t,
				window: e
			}
		}), g = h.render();
		return o(h.expose()), (e, t) => (s(), i(c(g)));
	}
});
//#endregion
export { m as t };

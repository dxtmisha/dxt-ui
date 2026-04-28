import { t as e } from "./Button-DRMcV68E.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { BarsDesign as c, defaultsBars as l } from "@dxtmisha/constructor/Bars";
//#region src/components/Ui/Bars/props.ts
var u = { padding: [
	"sm",
	"md",
	"lg",
	"ySm",
	"yMd",
	"yLg",
	"none"
] }, d = {
	...l,
	iconBack: "arrow_back",
	iconClose: "close",
	paddingByIndent: !0
}, f = /* @__PURE__ */ r({
	name: "D1Bars",
	__name: "D1Bars",
	props: /* @__PURE__ */ i({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		isSkeleton: { type: Boolean },
		textClose: { type: [String, Function] },
		action: { type: Boolean },
		backButton: {},
		backHide: { type: Boolean },
		backActionHide: { type: Boolean },
		bars: {},
		actionLabel: {},
		actionDescription: {},
		actionBars: {},
		buttonAttrs: {},
		iconBack: {},
		iconClose: {},
		modelAction: { type: Boolean },
		"onUpdate:action": { type: Function },
		"onUpdate:modelAction": { type: Function },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, d),
	emits: [
		"click",
		"clickLite",
		"update:action",
		"update:modelAction"
	],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.bars", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-bars": !0,
				[`d1-bars--padding--${f.padding}`]: s(u.padding, f.padding),
				"d1-bars--paddingByIndent": f.paddingByIndent
			} })),
			styles: t(() => ({})),
			components: { button: e },
			compMod: { button: {
				text: !0,
				size: "xs",
				inverse: !0
			} }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

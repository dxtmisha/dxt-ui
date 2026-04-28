import { t as e } from "./Arrow-B6Bx8GYE.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { inArray as s } from "@dxtmisha/functional";
import { TooltipDesign as c, defaultsTooltip as l } from "@dxtmisha/constructor/Tooltip";
//#region src/components/Ui/Tooltip/props.ts
var u = { maxWidth: [
	"sm",
	"md",
	"lg"
] }, d = {
	...l,
	interactive: !0,
	maxWidth: "md"
}, f = /* @__PURE__ */ r({
	name: "D1Tooltip",
	__name: "D1Tooltip",
	props: /* @__PURE__ */ i({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		arrowShow: { type: Boolean },
		arrowPosition: {},
		arrowAttrs: {},
		open: { type: Boolean },
		disabled: { type: Boolean },
		inDom: { type: Boolean },
		top: { type: Boolean },
		indent: {},
		delay: {},
		delayHide: {},
		embedded: { type: Boolean },
		interactive: { type: Boolean },
		maxWidth: {}
	}, d),
	emits: ["tooltip"],
	setup(r, { expose: i, emit: l }) {
		let d = l, f = r, p = new c("d1.tooltip", f, {
			emits: d,
			classes: t(() => ({ main: {
				"d1-tooltip": !0,
				"d1-tooltip--interactive": f.interactive,
				"d1-tooltip--embedded": f.embedded,
				[`d1-tooltip--maxWidth--${f.maxWidth}`]: s(u.maxWidth, f.maxWidth)
			} })),
			styles: t(() => ({})),
			components: { arrow: e }
		}), m = p.render();
		return i(p.expose()), (e, t) => (a(), n(o(m)));
	}
});
//#endregion
export { f as t };

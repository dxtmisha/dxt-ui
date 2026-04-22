import { t as e } from "./Icon-CTJvjh80.js";
import { t } from "./Tooltip-DEixLIAm.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { AnchorDesign as c, defaultsAnchor as l } from "@dxtmisha/constructor/Anchor";
//#region src/components/Ui/Anchor/props.ts
var u = {
	...l,
	iconLink: "link",
	iconTag: "tag",
	iconContentCopy: "content_copy"
}, d = /* @__PURE__ */ i({
	name: "D1Anchor",
	__name: "D1Anchor",
	props: /* @__PURE__ */ a({
		label: {},
		labelId: {},
		tooltipAttrs: {},
		textCopiedClipboard: { type: [String, Function] },
		shift: {},
		behavior: {},
		block: {},
		inline: {},
		hide: { type: Boolean },
		name: {},
		isCopy: { type: Boolean },
		iconLink: {},
		iconTag: {},
		iconContentCopy: {},
		delayHide: {}
	}, u),
	setup(i, { expose: a, emit: l }) {
		let u = new c("d1.anchor", i, {
			emits: l,
			classes: n(() => ({ main: { "d1-anchor": !0 } })),
			styles: n(() => ({})),
			components: {
				icon: e,
				tooltip: t
			}
		}), d = u.render();
		return a(u.expose()), (e, t) => (o(), r(s(d)));
	}
});
//#endregion
export { d as t };

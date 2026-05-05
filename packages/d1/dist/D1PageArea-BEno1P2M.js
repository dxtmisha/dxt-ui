import { t as e } from "./Block-C40FwNI6.js";
import { t } from "./Group-mNSO52_j.js";
import { t as n } from "./Page-B6RRhPjg.js";
import { t as r } from "./Section-bkkhT8Pn.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import "@dxtmisha/functional";
import { PageAreaDesign as u, defaultsPageArea as d } from "@dxtmisha/constructor/PageArea";
//#region src/components/Ui/PageArea/props.ts
var f = { ...d }, p = /* @__PURE__ */ o({
	name: "D1PageArea",
	__name: "D1PageArea",
	props: /* @__PURE__ */ s({
		label: {},
		labelId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		tagHeader: {},
		headerAttrs: {},
		description: {},
		descriptionId: {},
		area: {},
		headline: {},
		tag: {}
	}, f),
	setup(o, { expose: s, emit: d }) {
		let f = new u("d1.pageArea", o, {
			emits: d,
			classes: i(() => ({ main: { "d1-pageArea": !0 } })),
			styles: i(() => ({})),
			components: {
				block: e,
				group: t,
				page: n,
				section: r
			}
		}), p = f.render();
		return s(f.expose()), (e, t) => (c(), a(l(p)));
	}
});
//#endregion
export { p as t };

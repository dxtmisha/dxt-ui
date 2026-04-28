import { t as e } from "./Chip-BKguEm9E.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import "@dxtmisha/functional";
import { SelectValueDesign as s, defaultsSelectValue as c } from "@dxtmisha/constructor/SelectValue";
//#region src/components/Ui/SelectValue/props.ts
var l = {
	...c,
	chipAttrs: { size: "sm" },
	iconCancel: "close_small"
}, u = /* @__PURE__ */ r({
	name: "D1SelectValue",
	__name: "D1SelectValue",
	props: /* @__PURE__ */ i({
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		chipAttrs: {},
		placeholder: {},
		value: {},
		multiple: { type: Boolean },
		iconShow: { type: Boolean },
		iconAttrs: {},
		iconCancel: {}
	}, l),
	emits: ["click", "clickLite"],
	setup(r, { expose: i, emit: c }) {
		let l = new s("d1.selectValue", r, {
			emits: c,
			classes: t(() => ({ main: { "d1-selectValue": !0 } })),
			styles: t(() => ({})),
			components: { chip: e }
		}), u = l.render();
		return i(l.expose()), (e, t) => (a(), n(o(u)));
	}
});
//#endregion
export { u as t };

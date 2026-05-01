import { t as e } from "./Chip-oJgRpEXN.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import "@dxtmisha/functional";
import { ChipGroupDesign as s, defaultsChipGroup as c } from "@dxtmisha/constructor/ChipGroup";
//#region src/components/Ui/ChipGroup/props.ts
var l = { ...c }, u = /* @__PURE__ */ r({
	name: "D1ChipGroup",
	__name: "D1ChipGroup",
	props: /* @__PURE__ */ i({
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		readonly: { type: Boolean },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		list: {},
		iconWhenSelected: { type: Boolean },
		keyLabel: {},
		keyValue: {},
		chipAttrs: {}
	}, l),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected"
	],
	setup(r, { expose: i, emit: c }) {
		let l = new s("d1.chipGroup", r, {
			emits: c,
			classes: t(() => ({ main: { "d1-chipGroup": !0 } })),
			styles: t(() => ({})),
			components: { chip: e }
		}), u = l.render();
		return i(l.expose()), (e, t) => (a(), n(o(u)));
	}
});
//#endregion
export { u as t };

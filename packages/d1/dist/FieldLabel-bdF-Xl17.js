import { t as e } from "./FieldCounter-DmjzxKyQ.js";
import { t } from "./Progress-B-Gvsyth.js";
import { computed as n, createBlock as r, defineComponent as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import "@dxtmisha/functional";
import { FieldLabelDesign as c, defaultsFieldLabel as l } from "@dxtmisha/constructor/FieldLabel";
//#region src/components/Ui/FieldLabel/props.ts
var u = { ...l }, d = /* @__PURE__ */ i({
	name: "D1FieldLabel",
	__name: "D1FieldLabel",
	props: /* @__PURE__ */ a({
		label: {},
		labelId: {},
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
		fieldCounterAttrs: {},
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		for: {},
		required: { type: Boolean }
	}, u),
	setup(i, { expose: a, emit: l }) {
		let u = new c("d1.fieldLabel", i, {
			emits: l,
			classes: n(() => ({ main: { "d1-fieldLabel": !0 } })),
			styles: n(() => ({})),
			components: {
				fieldCounter: e,
				progress: t
			}
		}), d = u.render();
		return a(u.expose()), (e, t) => (o(), r(s(d)));
	}
});
//#endregion
export { d as t };

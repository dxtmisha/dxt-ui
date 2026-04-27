import { t as e } from "./FieldCounter-DS8soxL8.js";
import { computed as t, createBlock as n, defineComponent as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import "@dxtmisha/functional";
import { FieldMessageDesign as s, defaultsFieldMessage as c } from "@dxtmisha/constructor/FieldMessage";
//#region src/components/Ui/FieldMessage/props.ts
var l = { ...c }, u = /* @__PURE__ */ r({
	name: "D1FieldMessage",
	__name: "D1FieldMessage",
	props: /* @__PURE__ */ i({
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
		fieldCounterAttrs: {},
		isSkeleton: { type: Boolean },
		forceShow: { type: Boolean },
		disabled: { type: Boolean },
		helperMessage: {},
		validationMessage: {},
		helperId: {},
		validationId: {}
	}, l),
	setup(r, { expose: i, emit: c }) {
		let l = new s("d1.fieldMessage", r, {
			emits: c,
			classes: t(() => ({ main: { "d1-fieldMessage": !0 } })),
			styles: t(() => ({})),
			components: { fieldCounter: e }
		}), u = l.render();
		return i(l.expose()), (e, t) => (a(), n(o(u)));
	}
});
//#endregion
export { u as t };

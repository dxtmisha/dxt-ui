import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import "@dxtmisha/functional";
import { FieldCounterDesign as o, defaultsFieldCounter as s } from "@dxtmisha/constructor/FieldCounter";
//#region src/components/Ui/FieldCounter/props.ts
var c = { ...s }, l = /* @__PURE__ */ n({
	name: "D1FieldCounter",
	__name: "D1FieldCounter",
	props: /* @__PURE__ */ r({
		textCharacterLimit: { type: [String, Function] },
		textCharacterRemaining: { type: [String, Function] },
		counter: {},
		maxlength: {},
		maxlengthOnce: {},
		template: {},
		id: {}
	}, c),
	setup(n, { expose: r, emit: s }) {
		let c = new o("d1.fieldCounter", n, {
			emits: s,
			classes: e(() => ({ main: { "d1-fieldCounter": !0 } })),
			styles: e(() => ({}))
		}), l = c.render();
		return r(c.expose()), (e, n) => (i(), t(a(l)));
	}
});
//#endregion
export { l as t };

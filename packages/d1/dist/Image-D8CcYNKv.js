import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { ImageDesign as s, defaultsImage as c } from "@dxtmisha/constructor/Image";
//#region src/components/Ui/Image/props.ts
var l = { size: [
	"auto",
	"contain",
	"cover"
] }, u = { ...c }, d = /* @__PURE__ */ n({
	name: "D1Image",
	__name: "D1Image",
	props: /* @__PURE__ */ r({
		value: {},
		url: {},
		adaptiveGroup: {},
		adaptiveAlways: { type: Boolean },
		objectWidth: {},
		objectHeight: {},
		coordinator: {},
		x: {},
		y: {},
		tagImg: { type: Boolean },
		srcset: {},
		picture: {},
		alt: {},
		lazy: { type: Boolean },
		preloadOffset: {},
		fetchPriority: {},
		turn: { type: Boolean },
		disabled: { type: Boolean },
		hide: { type: Boolean },
		adaptive: { type: Boolean },
		size: {}
	}, u),
	emits: ["load"],
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.image", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-image": !0,
				"d1-image--turn": d.turn,
				"d1-image--disabled": d.disabled,
				"d1-image--hide": d.hide,
				"d1-image--adaptive": d.adaptive,
				[`d1-image--size--${d.size}`]: o(l.size, d.size)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
}), f = d;
//#endregion
export { d as n, f as t };

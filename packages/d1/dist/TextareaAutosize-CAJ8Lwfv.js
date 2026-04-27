import { computed as e, createBlock as t, defineComponent as n, mergeDefaults as r, openBlock as i, unref as a } from "vue";
import { inArray as o } from "@dxtmisha/functional";
import { TextareaAutosizeDesign as s, defaultsTextareaAutosize as c } from "@dxtmisha/constructor/TextareaAutosize";
//#region src/components/Ui/TextareaAutosize/props.ts
var l = { height: [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
] }, u = {
	...c,
	autosize: !0,
	height: "md"
}, d = /* @__PURE__ */ n({
	name: "D1TextareaAutosize",
	__name: "D1TextareaAutosize",
	props: /* @__PURE__ */ r({
		value: {},
		inputAttrs: {},
		autosize: { type: Boolean },
		height: {}
	}, u),
	emits: ["input"],
	setup(n, { expose: r, emit: c }) {
		let u = c, d = n, f = new s("d1.textareaAutosize", d, {
			emits: u,
			classes: e(() => ({ main: {
				"d1-textareaAutosize": !0,
				"d1-textareaAutosize--autosize": d.autosize,
				[`d1-textareaAutosize--height--${d.height}`]: o(l.height, d.height)
			} })),
			styles: e(() => ({}))
		}), p = f.render();
		return r(f.expose()), (e, n) => (i(), t(a(p)));
	}
});
//#endregion
export { d as t };

import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import { DesignConstructorAbstract as c, inArray as l } from "@dxtmisha/functional";
//#region ../constructor/dist/dummy.js
var u = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
	}
}, d = {}, f = class extends c {
	constructor(t, n, r, i = u) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return { main: {} };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return i("div", { class: (e = this.classes) == null ? void 0 : e.value.main }, this.initSlot("default"));
	}
}, p = {
	size: [
		"x",
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl"
	],
	palette: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
		"gray",
		"zinc",
		"neutral",
		"stone",
		"black",
		"white"
	]
}, m = /* @__PURE__ */ r({
	name: "D1Dummy",
	__name: "D1Dummy",
	props: /* @__PURE__ */ a({
		size: {},
		palette: {}
	}, {
		...d,
		size: "md"
	}),
	setup(e, { expose: r, emit: i }) {
		let a = i, c = e, u = new f("d1.dummy", c, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-dummy": !0,
				[`d1-dummy--size--${c.size}`]: l(p.size, c.size),
				[`d1-palette d1-palette--${c.palette}`]: l(p.palette, c.palette)
			} })),
			styles: t(() => ({}))
		}), d = u.render();
		return r(u.expose()), (e, t) => (o(), n(s(d)));
	}
});
//#endregion
export { m as t };

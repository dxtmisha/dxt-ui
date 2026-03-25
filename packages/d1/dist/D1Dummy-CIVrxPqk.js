import { computed as e, createBlock as t, defineComponent as n, h as r, mergeDefaults as i, openBlock as a, unref as o } from "vue";
import { DesignConstructorAbstract as s, inArray as c } from "@dxtmisha/functional";
//#region ../constructor/dist/dummy.js
var l = Object.defineProperty, u = (e, t, n) => t in e ? l(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, d = (e, t, n) => u(e, typeof t == "symbol" ? t : t + "", n), f = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
	}
}, p = {}, m = class extends s {
	constructor(e, t, n, r = f) {
		super(e, t, n), d(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return r("div", { class: (e = this.classes) == null ? void 0 : e.value.main }, this.initSlot("default"));
	}
}, h = {
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
}, g = /* @__PURE__ */ n({
	name: "D1Dummy",
	__name: "D1Dummy",
	props: /* @__PURE__ */ i({
		size: {},
		palette: {}
	}, {
		...p,
		size: "md"
	}),
	setup(n, { expose: r, emit: i }) {
		let s = i, l = n, u = new m("d1.dummy", l, {
			emits: s,
			classes: e(() => ({ main: {
				"d1-dummy": !0,
				[`d1-dummy--size--${l.size}`]: c(h.size, l.size),
				[`d1-palette d1-palette--${l.palette}`]: c(h.palette, l.palette)
			} })),
			styles: e(() => ({}))
		}), d = u.render();
		return r(u.expose()), (e, n) => (a(), t(o(d)));
	}
});
//#endregion
export { g as t };

import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { n as t } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { DesignConstructorAbstract as l } from "@dxtmisha/functional";
//#region ../constructor/dist/skeleton.js
var u = Object.defineProperty, d = (e, t, n) => t in e ? u(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, f = (e, t, n) => d(e, typeof t == "symbol" ? t : t + "", n), p = {}, m = class extends l {
	constructor(e, n, r, i = t) {
		super(e, n, r), f(this, "item"), this.item = new i(this.props, this.refs, this.element, this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { isActive: this.item.isActive };
	}
	initClasses() {
		return { main: {} };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var t;
		let n = [];
		return this.initSlot("default", n, this.item.classes), a("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.busy(this.item.isActive.value),
			...e.live("polite")
		}, n);
	}
}, h = { ...p }, g = /* @__PURE__ */ i({
	name: "D1Skeleton",
	__name: "D1Skeleton",
	props: /* @__PURE__ */ o({ active: { type: Boolean } }, h),
	setup(e, { expose: t, emit: i }) {
		let a = i, o = e, l = new m("d1.skeleton", o, {
			emits: a,
			classes: n(() => ({ main: {
				"d1-skeleton": !0,
				"d1-skeleton--active": o.active
			} })),
			styles: n(() => ({}))
		}), u = l.render();
		return t(l.expose()), (e, t) => (s(), r(c(u)));
	}
});
//#endregion
export { g as t };

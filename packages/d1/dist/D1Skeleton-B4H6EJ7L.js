import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./SkeletonInclude-D8on8xmw-DRvyAmJt.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u } from "@dxtmisha/functional";
//#region ../constructor/dist/skeleton.js
var d = {}, f = class extends u {
	constructor(t, r, i, a = n) {
		super(t, r, i), e(this, "item", void 0), this.item = new a(this.props, this.refs, this.element, this.getName(), this.components, this.slots, this.emits), this.init();
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
		var e;
		let n = [];
		return this.initSlot("default", n, this.item.classes), o("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...t.busy(this.item.isActive.value),
			...t.live("polite")
		}, n);
	}
}, p = { ...d }, m = /* @__PURE__ */ a({
	name: "D1Skeleton",
	__name: "D1Skeleton",
	props: /* @__PURE__ */ s({ active: { type: Boolean } }, p),
	setup(e, { expose: t, emit: n }) {
		let a = n, o = e, s = new f("d1.skeleton", o, {
			emits: a,
			classes: r(() => ({ main: {
				"d1-skeleton": !0,
				"d1-skeleton--active": o.active
			} })),
			styles: r(() => ({}))
		}), u = s.render();
		return t(s.expose()), (e, t) => (c(), i(l(u)));
	}
});
//#endregion
export { m as t };

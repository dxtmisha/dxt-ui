import { computed as e, createBlock as t, defineComponent as n, h as r, openBlock as i, unref as a } from "vue";
import { DesignConstructorAbstract as o } from "@dxtmisha/functional";
//#region ../constructor/dist/grid.js
var s = Object.defineProperty, c = (e, t, n) => t in e ? s(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, l = (e, t, n) => c(e, typeof t == "symbol" ? t : t + "", n), u = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
	}
}, d = class extends o {
	constructor(e, t, n, r = u) {
		super(e, t, n), l(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return r("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.initSlot("default"));
	}
}, f = /* @__PURE__ */ n({
	name: "D1Grid",
	__name: "D1Grid",
	setup(n, { expose: r, emit: o }) {
		let s = new d("d1.grid", n, {
			emits: o,
			classes: e(() => ({ main: { "d1-grid": !0 } })),
			styles: e(() => ({}))
		}), c = s.render();
		return r(s.expose()), (e, n) => (i(), t(a(c)));
	}
});
//#endregion
export { f as t };

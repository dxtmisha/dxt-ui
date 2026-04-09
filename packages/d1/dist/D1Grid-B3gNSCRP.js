import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, openBlock as a, unref as o } from "vue";
import { DesignConstructorAbstract as s } from "@dxtmisha/functional";
//#region ../constructor/dist/grid.js
var c = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
	}
}, l = class extends s {
	constructor(t, n, r, i = c) {
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
		return i("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.initSlot("default"));
	}
}, u = /* @__PURE__ */ r({
	name: "D1Grid",
	__name: "D1Grid",
	setup(e, { expose: r, emit: i }) {
		let s = new l("d1.grid", e, {
			emits: i,
			classes: t(() => ({ main: { "d1-grid": !0 } })),
			styles: t(() => ({}))
		}), c = s.render();
		return r(s.expose()), (e, t) => (a(), n(o(c)));
	}
});
//#endregion
export { u as t };

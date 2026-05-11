import { t as e } from "./defineProperty-3CuEayIP.js";
import { t } from "./ClientOnlyInclude-DtLrDeX2.js";
import "vue";
import { DesignConstructorAbstract as n } from "@dxtmisha/functional";
//#region src/constructors/ClientOnly/ClientOnly.ts
var r = class {
	constructor(n, r, i, a, o, s, c, l) {
		e(this, "clientOnly", void 0), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l, this.clientOnly = new t(n);
	}
}, i = { clientOnly: !0 }, a = class extends n {
	constructor(t, n, i, a = r) {
		super(t, n, i), e(this, "item", void 0), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		if (this.item.clientOnly.is()) return this.initSlot("default");
	}
};
//#endregion
export { r as ClientOnly, a as ClientOnlyDesign, i as defaultsClientOnly };

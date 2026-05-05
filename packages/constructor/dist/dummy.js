import { t as e } from "./defineProperty-3CuEayIP.js";
import { h as t } from "vue";
import { DesignConstructorAbstract as n } from "@dxtmisha/functional";
//#region src/constructors/Dummy/Dummy.ts
var r = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
	}
}, i = {}, a = class extends n {
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
		var e;
		return t("div", { class: (e = this.classes) == null ? void 0 : e.value.main }, this.initSlot("default"));
	}
};
//#endregion
export { r as Dummy, a as DummyDesign, i as defaultsDummy };

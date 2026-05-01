import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./AreaInclude-DkoPzXhj.js";
import { h as n } from "vue";
import { DesignConstructorAbstract as r } from "@dxtmisha/functional";
//#region src/constructors/Container/Container.ts
var i = class {
	constructor(n, r, i, a, o, s, c, l, u) {
		e(this, "area", void 0), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { AreaIncludeConstructor: d = t } = u == null ? {} : u;
		this.area = new d(n);
	}
}, a = {
	area: "container",
	align: "center"
}, o = class extends r {
	constructor(t, n, r, a = i) {
		super(t, n, r), e(this, "item", void 0), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		let t = [];
		return this.initSlot("default", t), n("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, t);
	}
};
//#endregion
export { i as Container, o as ContainerDesign, a as defaultsContainer };

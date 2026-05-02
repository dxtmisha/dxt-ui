import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./getAreaValue-C-31Upc1.js";
import { computed as n } from "vue";
import { DesignConstructorAbstract as r } from "@dxtmisha/functional";
//#region src/constructors/Area/Area.ts
var i = class {
	constructor(r, i, a, o, s, c, l, u) {
		e(this, "area", n(() => {
			var e;
			return (e = t()) == null ? this.props.areaDefault : e;
		})), this.props = r, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
	}
}, a = {}, o = class extends r {
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
		let e = this.item.area.value;
		if (this.slots) {
			if (e && e in this.slots) return this.initSlot(e);
			if ("default" in this.slots) return this.initSlot("default");
		}
	}
};
//#endregion
export { i as Area, o as AreaDesign, a as defaultsArea };

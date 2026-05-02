import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./getAreaValue-C-31Upc1.js";
import { computed as n } from "vue";
import { DesignConstructorAbstract as r } from "@dxtmisha/functional";
//#region src/constructors/PageArea/PageArea.ts
var i = class {
	constructor(r, i, a, o, s, c, l, u) {
		e(this, "area", n(() => t())), this.props = r, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
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
		let e = "group";
		switch (this.item.area.value) {
			case "container":
				e = "page";
				break;
			case "page":
				e = "section";
				break;
			case "section":
				e = "block";
				break;
			case "block":
				e = "group";
				break;
		}
		return this.components.renderOne(e, this.props, this.slots);
	}
};
//#endregion
export { i as PageArea, o as PageAreaDesign, a as defaultsPageArea };

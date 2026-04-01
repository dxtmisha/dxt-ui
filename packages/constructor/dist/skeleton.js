import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { n, t as r } from "./SkeletonInclude-DCCPPs2e.js";
import { h as i } from "vue";
import { DesignConstructorAbstract as a } from "@dxtmisha/functional";
//#region src/constructors/Skeleton/props.ts
var o = {}, s = class extends a {
	constructor(e, r, i, a = n) {
		super(e, r, i), t(this, "item", void 0), this.item = new a(this.props, this.refs, this.element, this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.initSlot("default", n, this.item.classes), i("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.busy(this.item.isActive.value),
			...e.live("polite")
		}, n);
	}
};
//#endregion
export { n as Skeleton, s as SkeletonDesign, r as SkeletonInclude, o as defaultsSkeleton };

import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-DblGXmzD.js";
import { n, r, t as i } from "./SkeletonInclude-BH3L9LJu.js";
import { h as a } from "vue";
import { DesignConstructorAbstract as o } from "@dxtmisha/functional";
//#region src/constructors/Skeleton/props.ts
var s = {}, c = class extends o {
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
		return this.initSlot("default", n, this.item.classes), a("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.busy(this.item.isActive.value),
			...e.live("polite")
		}, n);
	}
};
//#endregion
export { r as SKELETON_NAME_STATUS, n as Skeleton, c as SkeletonDesign, i as SkeletonInclude, s as defaultsSkeleton };

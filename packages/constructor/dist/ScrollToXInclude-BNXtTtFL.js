import { t as e } from "./defineProperty-DblGXmzD.js";
import { computed as t } from "vue";
//#region src/classes/ScrollToXInclude.ts
var n = class {
	constructor(n) {
		e(this, "binds", t(() => ({ onWheelPassive: this.onScrollToX }))), e(this, "onScrollToX", (e) => {
			this.element.value && e.deltaY !== 0 && this.isNotScrollSnap() && (e.preventDefault(), this.element.value.scrollLeft += Number(e.deltaY));
		}), this.element = n;
	}
	isNotScrollSnap() {
		return this.element.value ? getComputedStyle(this.element.value).scrollSnapType !== "x mandatory" : !0;
	}
};
//#endregion
export { n as t };

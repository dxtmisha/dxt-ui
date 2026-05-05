import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBinds as i } from "@dxtmisha/functional";
//#region src/constructors/MotionAxis/MotionAxisInclude.ts
var a = class {
	constructor(a, o, s, c, l, u, d) {
		e(this, "element", n()), e(this, "selectedItem", t(() => this.selected ? r(this.selected) : this.props.selected)), e(this, "binds", t(() => i(r(this.extra), { class: `${this.className}__motionAxis` }, this.props.motionAxisAttrs))), e(this, "render", (e, t) => this.components ? this.components.render("motionAxis", {
			...i(t, this.binds.value, { selected: this.selectedItem.value }),
			ref: this.element,
			onMotionAxis: this.onMotionAxis
		}, e, this.index) : []), e(this, "onMotionAxis", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "motionAxis", e);
		}), this.props = a, this.className = o, this.components = s, this.emits = c, this.extra = l, this.selected = u, this.index = d;
	}
};
//#endregion
export { a as t };

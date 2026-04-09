import { t as e } from "./defineProperty-DblGXmzD.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBinds as i } from "@dxtmisha/functional";
//#region src/constructors/Tooltip/TooltipInclude.ts
var a = class {
	constructor(a, o, s, c, l) {
		e(this, "element", n()), e(this, "binds", t(() => i(r(this.extra), this.props.tooltipAttrs, {
			ref: this.element,
			class: `${this.className}__tooltip`
		}))), e(this, "render", (e) => this.components ? this.components.render("tooltip", this.binds.value, e, this.index) : []), this.props = a, this.className = o, this.components = s, this.extra = c, this.index = l;
	}
	getElement() {
		return this.element.value;
	}
	open() {
		this.toggle(!0);
	}
	close() {
		this.toggle(!1);
	}
	toggle(e) {
		var t;
		(t = this.getElement()) == null || t.toggle(e);
	}
};
//#endregion
export { a as t };

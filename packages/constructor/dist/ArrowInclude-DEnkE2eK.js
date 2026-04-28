import { t as e } from "./defineProperty-149Ahniv.js";
import { computed as t } from "vue";
import { getRef as n, toBinds as r } from "@dxtmisha/functional";
//#region src/constructors/Arrow/ArrowInclude.ts
var i = class {
	constructor(i, a, o, s, c, l) {
		e(this, "is", t(() => !!this.props.arrowShow)), e(this, "binds", t(() => r(n(this.extra), this.props.arrowAttrs, {
			class: `${this.className}__arrow`,
			elementTarget: this.elementTarget
		}))), e(this, "render", () => this.components && this.is.value ? this.components.render("arrow", this.binds.value, void 0, this.index) : []), this.props = i, this.className = a, this.components = o, this.elementTarget = s, this.extra = c, this.index = l;
	}
};
//#endregion
export { i as t };

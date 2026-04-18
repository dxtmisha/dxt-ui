import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { computed as t, ref as n } from "vue";
import { getBind as r, getRef as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/TabsNavigation/TabsNavigationInclude.ts
var o = class {
	constructor(o, s, c, l, u) {
		e(this, "element", n()), e(this, "binds", t(() => a(i(this.extra), {
			class: `${this.className}__tabsNavigation`,
			itemAttrs: this.props.tabItemAttrs
		}, r(this.props.tabs, "list"), this.props.tabsNavigationAttrs))), e(this, "ids", t(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.ids;
		})), e(this, "render", (e, t) => this.components ? this.components.render("tabsNavigation", a(t, this.binds.value, { ref: this.element }), e, this.index) : []), this.props = o, this.className = s, this.components = c, this.extra = l, this.index = u;
	}
};
//#endregion
export { o as t };

import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBinds as i } from "@dxtmisha/functional";
//#region src/constructors/HorizontalScroll/HorizontalScrollInclude.ts
var a = class {
	constructor(a, o, s, c, l) {
		e(this, "element", n()), e(this, "elementHtml", t(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.elementHtml;
		})), e(this, "binds", t(() => i(r(this.extra), {
			ref: this.element,
			flush: this.props.horizontalScrollFlush,
			align: this.props.horizontalScrollAlign
		}, this.props.horizontalScrollAttrs))), e(this, "toSelected", () => {
			var e, t;
			(e = this.element.value) == null || (t = e.toSelected) == null || t.call(e);
		}), e(this, "render", (e, t) => {
			if (this.components) {
				var n;
				return this.components.render("horizontalScroll", {
					...this.binds.value,
					...r(t)
				}, e, (n = this.index) == null ? "horizontalScroll" : n);
			}
			return [];
		}), this.props = a, this.className = o, this.components = s, this.extra = c, this.index = l;
	}
};
//#endregion
export { a as t };

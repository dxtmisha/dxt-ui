import { t as e } from "./defineProperty-BTtSLqQS.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBind as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/Menu/MenuInclude.ts
var o = class {
	constructor(o, s, c, l, u) {
		e(this, "element", n()), e(this, "is", t(() => !!(!this.props.disabled && this.components))), e(this, "isOpen", t(() => {
			var e;
			return !!((e = this.element.value) != null && e.open);
		})), e(this, "binds", t(() => {
			let e = a(r(this.extra), this.props.menuAttrs, { class: `${this.className}__menu` });
			return {
				disabled: this.props.disabled,
				...e
			};
		})), e(this, "expose", {
			open: t(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			setOpen: async (e) => {
				var t;
				return (t = this.element.value) == null ? void 0 : t.setOpen(e);
			},
			toOpen: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toOpen();
			},
			toClose: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toClose();
			},
			toggle: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toggle();
			},
			menuElement: this.element
		}), e(this, "render", (e, t) => this.components ? this.components.render("menu", {
			ref: this.element,
			...i(t == null ? {} : t, this.binds.value)
		}, e, this.index) : []), this.props = o, this.className = s, this.components = c, this.extra = l, this.index = u;
	}
	getElement() {
		return this.element.value;
	}
};
//#endregion
export { o as t };

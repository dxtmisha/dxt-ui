import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBind as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/Window/WindowInclude.ts
var o = class {
	constructor(o, s, c, l, u, d, f, p) {
		e(this, "element", n()), e(this, "binds", t(() => a(r(this.extra), {
			class: `${this.className}__window`,
			disabled: this.props.disabled,
			autoClose: this.props.autoClose,
			preparation: this.getPreparation,
			opening: this.getOpening,
			closing: this.getClosing,
			ariaLabelledby: this.ariaLabelledby,
			ariaDescribedby: this.ariaDescribedby
		}, this.props.windowAttrs))), e(this, "expose", {
			id: t(() => {
				var e;
				return String((e = this.element.value) == null ? void 0 : e.id);
			}),
			open: t(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			control: t(() => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.control;
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
			windowElement: this.element
		}), e(this, "render", (e, t) => this.components ? this.components.render("window", {
			...i(t == null ? {} : t, this.binds.value),
			ref: this.element,
			onWindow: this.onWindow
		}, e, this.index) : []), e(this, "getPreparation", () => {
			var e, t, n, i, a;
			return (e = (t = r(this.extra)) == null || (n = t.preparation) == null ? void 0 : n.call(t)) == null ? (i = this.props.windowAttrs) == null || (a = i.preparation) == null ? void 0 : a.call(i) : e;
		}), e(this, "getOpening", () => {
			var e, t, n, i, a, o;
			return (e = (t = (n = r(this.extra)) == null || (i = n.opening) == null ? void 0 : i.call(n)) == null ? (a = this.props.windowAttrs) == null || (o = a.opening) == null ? void 0 : o.call(a) : t) == null ? !0 : e;
		}), e(this, "getClosing", () => {
			var e, t, n, i, a, o;
			return (e = (t = (n = r(this.extra)) == null || (i = n.closing) == null ? void 0 : i.call(n)) == null ? (a = this.props.windowAttrs) == null || (o = a.closing) == null ? void 0 : o.call(a) : t) == null ? !0 : e;
		}), e(this, "onWindow", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "window", e);
		}), this.props = o, this.className = s, this.components = c, this.emits = l, this.extra = u, this.ariaLabelledby = d, this.ariaDescribedby = f, this.index = p;
	}
};
//#endregion
export { o as t };

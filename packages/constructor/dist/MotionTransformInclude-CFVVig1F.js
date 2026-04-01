import { t as e } from "./defineProperty-hmGKPWdq.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBind as i } from "@dxtmisha/functional";
//#region src/constructors/MotionTransform/MotionTransformInclude.ts
var a = class {
	constructor(a, o, s, c, l, u) {
		e(this, "element", n()), e(this, "binds", t(() => {
			var e, t;
			return {
				...i((e = r(this.extra)) == null ? {} : e, (t = this.props.motionTransformAttrs) == null ? {} : t),
				open: this.props.open,
				clickOpen: this.props.clickOpen,
				autoClose: this.props.autoClose
			};
		})), e(this, "expose", {
			open: t(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			isShow: t(() => {
				var e;
				return !!((e = this.element.value) != null && e.isShow);
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
			motionTransformElement: this.element
		}), e(this, "onTransform", (e, t) => {
			var n, r;
			(n = this.emits) == null || n.call(this, "transform", e, t), (r = this.emits) == null || r.call(this, "transformLite", t);
		}), e(this, "render", (e, t) => this.components ? this.components.render("motionTransform", {
			onTransform: this.onTransform,
			...i(t == null ? {} : t, this.binds.value),
			ref: this.element
		}, e, this.index) : []), this.props = a, this.className = o, this.components = s, this.emits = c, this.extra = l, this.index = u;
	}
};
//#endregion
export { a as t };

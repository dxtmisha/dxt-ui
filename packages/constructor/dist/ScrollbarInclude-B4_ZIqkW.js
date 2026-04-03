import { h as e } from "vue";
import { toBind as t } from "@dxtmisha/functional";
//#region src/constructors/Scrollbar/ScrollbarInclude.ts
var n = class {
	constructor(e, t, n, r) {
		this.props = e, this.className = t, this.components = n, this.emits = r;
	}
	render(n, r, i) {
		if (this.components) {
			var a;
			let e = this.components.renderOne("scrollbar", t({
				tag: n,
				class: `${this.className}__scrollbar`,
				...r == null ? {} : r,
				...this.getScrollbarEvents()
			}, (a = this.props.scrollbarAttrs) == null ? {} : a), i);
			if (e) return [e];
		}
		return [e(n, r, i)];
	}
	getScrollbarEvents() {
		return {
			onTop: (e) => {
				var t;
				return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarTop", e);
			},
			onReachTop: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarReachTop");
			},
			onLeaveTop: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarLeaveTop");
			},
			onBottom: (e) => {
				var t;
				return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarBottom", e);
			},
			onReachBottom: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarReachBottom");
			},
			onLeaveBottom: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarLeaveBottom");
			},
			onEdge: (e, t, n) => {
				var r;
				return (r = this.emits) == null ? void 0 : r.call(this, "scrollbarEdge", e, t, n);
			}
		};
	}
};
//#endregion
export { n as t };

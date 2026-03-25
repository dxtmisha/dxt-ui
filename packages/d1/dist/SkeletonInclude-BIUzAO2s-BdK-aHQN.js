import { computed as e, inject as t, provide as n } from "vue";
import "@dxtmisha/functional";
//#region ../constructor/dist/SkeletonInclude-BIUzAO2s.js
var r = Object.defineProperty, i = (e, t, n) => t in e ? r(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, a = (e, t, n) => i(e, typeof t == "symbol" ? t : t + "", n), o = "skeleton-status", s = class r {
	constructor(i, s, c, l, u, d, f) {
		a(this, "status"), a(this, "classes"), a(this, "isActive", e(() => {
			var e;
			return !!((e = this.status) != null && e.value || this.props.active);
		})), this.props = i, this.refs = s, this.element = c, this.className = l, this.components = u, this.slots = d, this.emits = f, this.status = t(o, void 0), this.classes = r.getClassesList(this.className), n(o, this.isActive);
	}
	static getClassesList(e) {
		return {
			classText: `${e}__text`,
			classTextVariant: `${e}__textVariant`,
			classBackground: `${e}__background`,
			classBackgroundAfter: `${e}__backgroundAfter`,
			classBackgroundBefore: `${e}__backgroundBefore`,
			classBackgroundVariant: `${e}__backgroundVariant`,
			classBorder: `${e}__border`,
			classBorderVariant: `${e}__borderVariant`,
			classNone: `${e}__none`
		};
	}
	static getClassesListByDesign(e) {
		return this.getClassesList(`${e}-skeleton`);
	}
}, c = class {
	constructor(n, r, i) {
		a(this, "status", t(o, void 0)), a(this, "classesSkeleton"), a(this, "isSkeleton", e(() => !!(this.status && this.status.value))), a(this, "classes", e(() => {
			let e = {};
			return this.classesList && this.props.isSkeleton && this.classesList.forEach((t) => {
				e[this.classesSkeleton[t]] = !0;
			}), e;
		})), a(this, "binds", e(() => ({ isSkeleton: this.props.isSkeleton }))), this.props = n, this.classesList = i, this.classesSkeleton = s.getClassesListByDesign(r);
	}
};
//#endregion
export { s as n, c as t };

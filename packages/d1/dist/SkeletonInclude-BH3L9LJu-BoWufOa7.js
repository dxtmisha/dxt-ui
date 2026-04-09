import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { computed as t, inject as n, provide as r } from "vue";
import "@dxtmisha/functional";
//#region ../constructor/dist/SkeletonInclude-BH3L9LJu.js
var i = "skeleton-status", a = class a {
	constructor(o, s, c, l, u, d, f) {
		e(this, "status", void 0), e(this, "classes", void 0), e(this, "isActive", t(() => {
			var e;
			return !!((e = this.status) != null && e.value || this.props.active);
		})), this.props = o, this.refs = s, this.element = c, this.className = l, this.components = u, this.slots = d, this.emits = f, this.status = n(i, void 0), this.classes = a.getClassesList(this.className), r(i, this.isActive);
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
}, o = class {
	constructor(r, o, s) {
		e(this, "status", n(i, void 0)), e(this, "classesSkeleton", void 0), e(this, "isSkeleton", t(() => !!(this.status && this.status.value))), e(this, "classes", t(() => {
			let e = {};
			return this.classesList && this.props.isSkeleton && this.classesList.forEach((t) => {
				e[this.classesSkeleton[t]] = !0;
			}), e;
		})), e(this, "binds", t(() => ({ isSkeleton: this.props.isSkeleton }))), this.props = r, this.classesList = s, this.classesSkeleton = a.getClassesListByDesign(o);
	}
};
//#endregion
export { o as n, a as t };

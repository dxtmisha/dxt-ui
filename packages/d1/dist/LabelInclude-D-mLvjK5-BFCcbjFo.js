import { computed as e } from "vue";
import { getElementId as t, getRef as n, isFilled as r, render as i } from "@dxtmisha/functional";
//#region ../constructor/dist/LabelInclude-D-mLvjK5.js
var a = Object.defineProperty, o = (e, t, n) => t in e ? a(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, s = (e, t, n) => o(e, typeof t == "symbol" ? t : t + "", n), c = class {
	constructor(n, r, i, a, o, c, l, u, d = "span") {
		s(this, "is", e(() => {
			var e;
			return this.props.label || (e = this.labelReplacing) != null && e.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
		})), s(this, "id", e(() => this.props.labelId || t())), this.props = n, this.className = r, this.classesExtra = i, this.slots = a, this.elementsExtra = o, this.labelReplacing = c, this.alternativeSlots = l, this.skeleton = u, this.tag = d;
	}
	render(e, t = {}) {
		let r = [];
		if (this.is.value) {
			let a = [
				...this.initLabel(),
				...this.initLabelReplacing(),
				...this.initSlot()
			];
			this.elementsExtra && a.push(...this.elementsExtra()), e && a.push(...e), a.length > 0 && r.push(i(n(this.tag), {
				id: this.id.value,
				class: this.getClassName(),
				...t
			}, a, "label"));
		}
		return r;
	}
	getClassName() {
		let e = [`${this.className}__label`];
		return this.classesExtra && e.push(this.classesExtra), this.skeleton && e.push(this.skeleton.classes.value), e;
	}
	initLabel() {
		var e;
		return !((e = this.labelReplacing) != null && e.value) && r(this.props.label) ? [this.props.label] : [];
	}
	initLabelReplacing() {
		var e;
		return r((e = this.labelReplacing) == null ? void 0 : e.value) ? [i("span", { innerHTML: this.labelReplacing.value }, void 0, "highlight")] : [];
	}
	initSlot() {
		var e, t, n, r;
		if (this.slots) {
			if (this.alternativeSlots) {
				if ("label" in this.slots) return [(t = (e = this.slots).label) == null ? void 0 : t.call(e, {})];
			} else if ("default" in this.slots) return [(r = (n = this.slots).default) == null ? void 0 : r.call(n, {})];
		}
		return [];
	}
};
//#endregion
export { c as t };

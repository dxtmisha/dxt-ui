import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { computed as t } from "vue";
import { getElementId as n, getRef as r, isFilled as i, render as a } from "@dxtmisha/functional";
//#region src/classes/LabelInclude.ts
var o = class {
	constructor(r, i, a, o, s, c, l, u, d = "span") {
		e(this, "is", t(() => {
			var e;
			return this.props.label || (e = this.labelReplacing) != null && e.value ? !0 : this.slots ? this.alternativeSlots ? "label" in this.slots : "default" in this.slots : !1;
		})), e(this, "id", t(() => this.props.labelId || n())), this.props = r, this.className = i, this.classesExtra = a, this.slots = o, this.elementsExtra = s, this.labelReplacing = c, this.alternativeSlots = l, this.skeleton = u, this.tag = d;
	}
	render(e, t = {}) {
		let n = [];
		if (this.is.value) {
			let i = [
				...this.initLabel(),
				...this.initLabelReplacing(),
				...this.initSlot()
			];
			this.elementsExtra && i.push(...this.elementsExtra()), e && i.push(...e), i.length > 0 && n.push(a(r(this.tag), {
				id: this.id.value,
				class: this.getClassName(),
				...t
			}, i, "label"));
		}
		return n;
	}
	getClassName() {
		let e = [`${this.className}__label`];
		return this.classesExtra && e.push(this.classesExtra), this.skeleton && e.push(this.skeleton.classes.value), e;
	}
	initLabel() {
		var e;
		return !((e = this.labelReplacing) != null && e.value) && i(this.props.label) ? [this.props.label] : [];
	}
	initLabelReplacing() {
		var e;
		return i((e = this.labelReplacing) == null ? void 0 : e.value) ? [a("span", { innerHTML: this.labelReplacing.value }, void 0, "highlight")] : [];
	}
	initSlot() {
		if (this.slots) {
			if (this.alternativeSlots) {
				if ("label" in this.slots) {
					var e, t;
					return [(e = (t = this.slots).label) == null ? void 0 : e.call(t, {})];
				}
			} else if ("default" in this.slots) {
				var n, r;
				return [(n = (r = this.slots).default) == null ? void 0 : n.call(r, {})];
			}
		}
		return [];
	}
};
//#endregion
export { o as t };

import { t as e } from "./defineProperty-BTtSLqQS.js";
import { t } from "./LabelInclude-BJc8uC4Y.js";
import { computed as n } from "vue";
import { getExp as r, isFilled as i } from "@dxtmisha/functional";
//#region src/classes/LabelHighlightInclude.ts
var a = class extends t {
	constructor(t, a, o, s, c, l) {
		super(t, a, o, s, c, n(() => this.getLabel()), void 0, l), e(this, "getLabel", () => {
			let e = this.props;
			if (e.highlight && e.highlight.length >= this.getLengthStart() && e.label) {
				let t = `${this.className}__highlight`, n = e.label.toString(), a = r(e.highlight, "i");
				if (n.match(a)) return n.replace(a, (e) => `<span class="${t}">${e}</span>`);
				if (i(e.value) && e.value.toString().match(a)) return `<span class="${t}">${n}</span>`;
			}
		}), this.props = t, this.className = a, this.classesExtra = o, this.slots = s, this.elementsExtra = c, this.skeleton = l;
	}
	isHighlight() {
		let e = this.props;
		if (!e.highlight || e.highlight.length < this.getLengthStart()) return !0;
		if (!(e.highlight && e.highlight.length >= this.getLengthStart() && e.label)) return !1;
		let t = e.label.toString(), n = r(e.highlight, "i");
		return !!(t.match(n) || i(e.value) && e.value.toString().match(n));
	}
	getLengthStart() {
		var e;
		return (e = this.props.highlightLengthStart) == null ? 2 : e;
	}
};
//#endregion
export { a as t };

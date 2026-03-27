import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { computed as n } from "vue";
import { isFilled as r, render as i } from "@dxtmisha/functional";
//#region ../constructor/dist/CaptionInclude-Bg-QLUJc.js
var a = class {
	constructor(r, i, a, o) {
		e(this, "is", n(() => {
			var e;
			return !!(this.props.caption || (e = this.slots) != null && e.caption);
		})), e(this, "binds", n(() => {
			var e;
			let n = {
				class: {
					[`${this.className}__caption`]: !0,
					...(e = this.skeleton) == null ? void 0 : e.classes.value
				},
				"data-event-type": "caption"
			};
			return this.props.captionDecorative ? {
				...n,
				...t.hidden()
			} : {
				...n,
				...t.live("polite"),
				...t.atomic(!0)
			};
		})), this.props = r, this.className = i, this.slots = a, this.skeleton = o;
	}
	render() {
		var e;
		let t = [];
		if (r(this.props.caption) && t.push(this.props.caption), (e = this.slots) != null && e.caption) {
			var n, a;
			t.push((n = (a = this.slots).caption) == null ? void 0 : n.call(a, {}));
		}
		return t.length > 0 ? [i("div", this.binds.value, t, "caption")] : [];
	}
};
//#endregion
export { a as t };

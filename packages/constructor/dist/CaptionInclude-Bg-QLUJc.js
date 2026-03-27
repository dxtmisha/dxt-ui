import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-BTtSLqQS.js";
import { computed as n } from "vue";
import { isFilled as r, render as i } from "@dxtmisha/functional";
//#region src/classes/CaptionInclude.ts
var a = class {
	constructor(r, i, a, o) {
		t(this, "is", n(() => {
			var e;
			return !!(this.props.caption || (e = this.slots) != null && e.caption);
		})), t(this, "binds", n(() => {
			var t;
			let n = {
				class: {
					[`${this.className}__caption`]: !0,
					...(t = this.skeleton) == null ? void 0 : t.classes.value
				},
				"data-event-type": "caption"
			};
			return this.props.captionDecorative ? {
				...n,
				...e.hidden()
			} : {
				...n,
				...e.live("polite"),
				...e.atomic(!0)
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

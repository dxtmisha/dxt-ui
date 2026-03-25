import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { computed as t } from "vue";
import { isFilled as n, render as r } from "@dxtmisha/functional";
//#region ../constructor/dist/CaptionInclude-CohAZRI2.js
var i = Object.defineProperty, a = (e, t, n) => t in e ? i(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, o = (e, t, n) => a(e, typeof t == "symbol" ? t : t + "", n), s = class {
	constructor(n, r, i, a) {
		o(this, "is", t(() => {
			var e;
			return !!(this.props.caption || (e = this.slots) != null && e.caption);
		})), o(this, "binds", t(() => {
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
		})), this.props = n, this.className = r, this.slots = i, this.skeleton = a;
	}
	render() {
		var e, t, i;
		let a = [];
		return n(this.props.caption) && a.push(this.props.caption), (e = this.slots) != null && e.caption && a.push((i = (t = this.slots).caption) == null ? void 0 : i.call(t, {})), a.length > 0 ? [r("div", this.binds.value, a, "caption")] : [];
	}
};
//#endregion
export { s as t };

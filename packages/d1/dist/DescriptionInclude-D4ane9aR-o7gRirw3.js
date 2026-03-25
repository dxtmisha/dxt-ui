import { computed as e } from "vue";
import { getElementId as t, isFilled as n, render as r } from "@dxtmisha/functional";
//#region ../constructor/dist/DescriptionInclude-D4ane9aR.js
var i = Object.defineProperty, a = (e, t, n) => t in e ? i(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, o = (e, t, n) => a(e, typeof t == "symbol" ? t : t + "", n), s = class {
	constructor(n, r, i, a) {
		o(this, "is", e(() => {
			var e;
			return !!(this.props.description || (e = this.slots) != null && e.description);
		})), o(this, "id", e(() => {
			var e;
			return ((e = this.props) == null ? void 0 : e.descriptionId) || t();
		})), this.props = n, this.className = r, this.slots = i, this.skeleton = a;
	}
	render() {
		var e, t, i, a;
		let o = [];
		return n(this.props.description) && o.push(this.props.description), (e = this.slots) != null && e.description && o.push((i = (t = this.slots).description) == null ? void 0 : i.call(t, {})), o.length > 0 ? [r("div", {
			id: this.id.value,
			class: {
				[`${this.className}__description`]: !0,
				...(a = this.skeleton) == null ? void 0 : a.classes.value
			}
		}, o, "description")] : [];
	}
};
//#endregion
export { s as t };

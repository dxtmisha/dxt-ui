import { computed as e } from "vue";
import { getElementId as t, isFilled as n, render as r } from "@dxtmisha/functional";
//#region ../constructor/dist/SuffixInclude-maZ7235l.js
var i = Object.defineProperty, a = (e, t, n) => t in e ? i(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, o = (e, t, n) => a(e, typeof t == "symbol" ? t : t + "", n), s = class {
	constructor(r, i, a, s) {
		o(this, "is", e(() => {
			var e;
			return !!(this.props.prefix || (e = this.slots) != null && e.prefix);
		})), o(this, "id", e(() => this.props.prefixId || t())), o(this, "describedby", e(() => {
			var e;
			return n(this.props.prefix) || (e = this.slots) != null && e.prefix ? this.id.value : "";
		})), this.props = r, this.className = i, this.slots = a, this.skeleton = s;
	}
	render() {
		var e, t, i, a;
		let o = [];
		return n(this.props.prefix) && o.push(this.props.prefix), (e = this.slots) != null && e.prefix && o.push((i = (t = this.slots).prefix) == null ? void 0 : i.call(t, {})), o.length > 0 ? [r("div", {
			id: this.id.value,
			class: {
				[`${this.className}__prefix`]: !0,
				...(a = this.skeleton) == null ? void 0 : a.classes.value
			},
			"data-event-type": "prefix"
		}, o, "prefix")] : [];
	}
}, c = class {
	constructor(r, i, a, s) {
		o(this, "is", e(() => {
			var e;
			return !!(this.props.suffix || (e = this.slots) != null && e.suffix);
		})), o(this, "id", e(() => this.props.suffixId || t())), o(this, "describedby", e(() => {
			var e;
			return n(this.props.suffix) || (e = this.slots) != null && e.suffix ? this.id.value : "";
		})), this.props = r, this.className = i, this.slots = a, this.skeleton = s;
	}
	render() {
		var e, t, i, a;
		let o = [];
		return n(this.props.suffix) && o.push(this.props.suffix), (e = this.slots) != null && e.suffix && o.push((i = (t = this.slots).suffix) == null ? void 0 : i.call(t, {})), o.length > 0 ? [r("div", {
			id: this.id.value,
			class: {
				[`${this.className}__suffix`]: !0,
				...(a = this.skeleton) == null ? void 0 : a.classes.value
			},
			"data-event-type": "suffix"
		}, o, "suffix")] : [];
	}
};
//#endregion
export { c as n, s as t };

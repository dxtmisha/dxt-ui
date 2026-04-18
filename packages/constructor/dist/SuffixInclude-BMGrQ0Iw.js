import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { computed as t } from "vue";
import { getElementId as n, isFilled as r, render as i } from "@dxtmisha/functional";
//#region src/classes/PrefixInclude.ts
var a = class {
	constructor(i, a, o, s) {
		e(this, "is", t(() => {
			var e;
			return !!(this.props.prefix || (e = this.slots) != null && e.prefix);
		})), e(this, "id", t(() => this.props.prefixId || n())), e(this, "describedby", t(() => {
			var e;
			return r(this.props.prefix) || (e = this.slots) != null && e.prefix ? this.id.value : "";
		})), this.props = i, this.className = a, this.slots = o, this.skeleton = s;
	}
	render() {
		var e;
		let t = [];
		if (r(this.props.prefix) && t.push(this.props.prefix), (e = this.slots) != null && e.prefix) {
			var n, a;
			t.push((n = (a = this.slots).prefix) == null ? void 0 : n.call(a, {}));
		}
		if (t.length > 0) {
			var o;
			return [i("div", {
				id: this.id.value,
				class: {
					[`${this.className}__prefix`]: !0,
					...(o = this.skeleton) == null ? void 0 : o.classes.value
				},
				"data-event-type": "prefix"
			}, t, "prefix")];
		}
		return [];
	}
}, o = class {
	constructor(i, a, o, s) {
		e(this, "is", t(() => {
			var e;
			return !!(this.props.suffix || (e = this.slots) != null && e.suffix);
		})), e(this, "id", t(() => this.props.suffixId || n())), e(this, "describedby", t(() => {
			var e;
			return r(this.props.suffix) || (e = this.slots) != null && e.suffix ? this.id.value : "";
		})), this.props = i, this.className = a, this.slots = o, this.skeleton = s;
	}
	render() {
		var e;
		let t = [];
		if (r(this.props.suffix) && t.push(this.props.suffix), (e = this.slots) != null && e.suffix) {
			var n, a;
			t.push((n = (a = this.slots).suffix) == null ? void 0 : n.call(a, {}));
		}
		if (t.length > 0) {
			var o;
			return [i("div", {
				id: this.id.value,
				class: {
					[`${this.className}__suffix`]: !0,
					...(o = this.skeleton) == null ? void 0 : o.classes.value
				},
				"data-event-type": "suffix"
			}, t, "suffix")];
		}
		return [];
	}
};
//#endregion
export { a as n, o as t };

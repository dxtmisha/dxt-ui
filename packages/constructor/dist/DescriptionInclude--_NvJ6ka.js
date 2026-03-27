import { t as e } from "./defineProperty-BTtSLqQS.js";
import { computed as t } from "vue";
import { getElementId as n, isFilled as r, render as i } from "@dxtmisha/functional";
//#region src/classes/DescriptionInclude.ts
var a = class {
	constructor(r, i, a, o) {
		e(this, "is", t(() => {
			var e;
			return !!(this.props.description || (e = this.slots) != null && e.description);
		})), e(this, "id", t(() => {
			var e;
			return ((e = this.props) == null ? void 0 : e.descriptionId) || n();
		})), this.props = r, this.className = i, this.slots = a, this.skeleton = o;
	}
	render() {
		var e;
		let t = [];
		if (r(this.props.description) && t.push(this.props.description), (e = this.slots) != null && e.description) {
			var n, a;
			t.push((n = (a = this.slots).description) == null ? void 0 : n.call(a, {}));
		}
		if (t.length > 0) {
			var o;
			return [i("div", {
				id: this.id.value,
				class: {
					[`${this.className}__description`]: !0,
					...(o = this.skeleton) == null ? void 0 : o.classes.value
				}
			}, t, "description")];
		}
		return [];
	}
};
//#endregion
export { a as t };

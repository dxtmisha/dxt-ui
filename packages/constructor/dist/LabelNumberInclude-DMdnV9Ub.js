import { t as e } from "./LabelInclude-B8iRBQY-.js";
import { computed as t } from "vue";
import { GeoRef as n, isNumber as r, toNumberByMax as i } from "@dxtmisha/functional";
//#region src/classes/LabelNumberInclude.ts
var a = class extends e {
	constructor(e, n, r, i, a, o) {
		super(e, n, r, i, a, t(() => this.getNumber()), void 0, o), this.props = e, this.className = n, this.classesExtra = r, this.slots = i, this.elementsExtra = a, this.skeleton = o;
	}
	getNumber() {
		let e = this.props;
		if (e.label && r(e.label)) return i(e.label, e.labelMax, e.formatting, n.getLanguage().value).toString();
	}
};
//#endregion
export { a as t };

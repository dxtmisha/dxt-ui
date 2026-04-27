import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./FieldCounterInclude-I5Qn-ssk.js";
import { computed as n } from "vue";
import { getElementId as r, getRef as i, isFilled as a, toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/FieldLabel/FieldLabelInclude.ts
var s = class {
	constructor(s, c, l, u, d, f, p, m) {
		e(this, "labelId", r()), e(this, "counterId", r()), e(this, "fieldCounter", void 0), e(this, "is", n(() => {
			var e;
			return a(this.props.label) || !!((e = this.isCounter) != null && e.value);
		})), e(this, "id", n(() => {
			var e;
			return (e = this.isCounter) != null && e.value && this.props.counterShow ? this.counterId : "";
		})), e(this, "binds", n(() => {
			var e;
			return o(i(this.extra), (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {}, {
				for: i(this.forId),
				label: this.props.label,
				required: this.props.required,
				labelId: this.labelId,
				counterId: this.counterId
			}, this.props.fieldLabelAttrs);
		})), e(this, "render", () => this.components && this.is.value ? this.components.render("fieldLabel", { ...o(this.binds.value, { class: `${this.className}__fieldLabel` }) }, this.slots, this.index) : []), this.props = s, this.className = c, this.components = l, this.slots = u, this.forId = d, this.isCounter = f, this.extra = p, this.index = m, this.fieldCounter = new t(this.props, this.className);
	}
};
//#endregion
export { s as t };

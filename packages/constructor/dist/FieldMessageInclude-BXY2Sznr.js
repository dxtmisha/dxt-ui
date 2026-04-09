import { t as e } from "./defineProperty-DblGXmzD.js";
import { t } from "./FieldCounterInclude-C14KXE2D.js";
import { computed as n } from "vue";
import { getElementId as r, getRef as i, isFilled as a, toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/FieldMessage/FieldMessageInclude.ts
var s = class {
	constructor(s, c, l, u, d, f, p) {
		e(this, "helperId", r()), e(this, "validationId", r()), e(this, "counterId", r()), e(this, "fieldCounter", void 0), e(this, "isValidationMessage", n(() => a(this.validation.value))), e(this, "id", n(() => {
			var e;
			let t = [];
			return this.props.helperMessage && t.push(this.helperId), this.props.validationMessage && t.push(this.validationId), (e = this.isCounter) != null && e.value && this.props.counterShow && t.push(this.counterId), t.join(" ");
		})), e(this, "validation", n(() => a(this.props.validationMessage) ? this.props.validationMessage : i(this.validationMessage))), e(this, "binds", n(() => {
			var e;
			return o(i(this.extra), (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {}, {
				disabled: this.props.disabled,
				forceShow: this.props.forceShowMessage,
				helperMessage: this.props.helperMessage,
				validationMessage: this.validation.value,
				helperId: this.helperId,
				validationId: this.validationId,
				counterId: this.counterId
			}, this.props.fieldMessageAttrs);
		})), e(this, "render", () => this.components ? this.components.render("fieldMessage", { ...o(this.binds.value, { class: `${this.className}__fieldMessage` }) }, void 0, this.index) : []), this.props = s, this.className = c, this.components = l, this.validationMessage = u, this.isCounter = d, this.extra = f, this.index = p, this.fieldCounter = new t(this.props, this.className);
	}
};
//#endregion
export { s as t };

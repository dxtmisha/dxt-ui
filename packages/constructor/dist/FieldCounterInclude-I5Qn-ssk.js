import { t as e } from "./defineProperty-149Ahniv.js";
import { computed as t } from "vue";
import { getRef as n, isFilled as r, isNull as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/FieldCounter/FieldCounterInclude.ts
var o = class {
	constructor(o, s, c, l, u) {
		e(this, "isCounter", t(() => !!(this.props.counterShow && (!i(this.props.counter) || r(this.props.maxlength))))), e(this, "binds", t(() => a(n(this.extra), {
			id: this.props.counterId,
			counter: this.props.counter,
			maxlength: this.props.maxlength,
			template: this.props.counterTemplate
		}, this.props.fieldCounterAttrs))), e(this, "bindsIntermediary", t(() => ({
			counter: this.props.counter,
			counterShow: this.props.counterShow,
			counterTemplate: this.props.counterTemplate,
			maxlength: this.props.maxlength,
			fieldCounterAttrs: this.props.fieldCounterAttrs
		}))), e(this, "render", () => this.components && this.isCounter.value ? this.components.render("fieldCounter", { ...a(this.binds.value, { class: `${this.className}__fieldCounter` }) }, void 0, this.index) : []), this.props = o, this.className = s, this.components = c, this.extra = l, this.index = u;
	}
};
//#endregion
export { o as t };

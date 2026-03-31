import { t as e } from "./defineProperty-BTtSLqQS.js";
import { a as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./FieldEventInclude-DFTu0XbR.js";
import { t as c } from "./FieldInclude-DxWK9BVa.js";
import { computed as l, h as u } from "vue";
import { DesignConstructorAbstract as d, toBinds as f } from "@dxtmisha/functional";
//#region src/constructors/Textarea/Textarea.ts
var p = class {
	constructor(u, d, p, m, h, g, _, v, y) {
		e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "binds", l(() => ({
			ref: this.element,
			autosize: this.props.autosize,
			value: this.value.item.value,
			onBlur: this.event.onBlur,
			onInput: this.event.onInput,
			onChange: this.event.onChange
		}))), e(this, "bindsInput", l(() => f(this.attributes.listForInput.value, this.props.textareaAttrs, {
			cols: this.props.cols,
			rows: this.props.rows,
			fieldSizing: this.props.fieldSizing
		}))), this.props = u, this.refs = d, this.element = p, this.classDesign = m, this.className = h, this.components = g, this.slots = _, this.emits = v;
		let { FieldAttributesIncludeConstructor: b = o, FieldChangeIncludeConstructor: x = i, FieldCodeIncludeConstructor: S = t, FieldElementIncludeConstructor: C = n, FieldEventIncludeConstructor: w = s, FieldIncludeConstructor: T = c, FieldValidationIncludeConstructor: E = r, FieldValueIncludeConstructor: D = a } = y == null ? {} : y;
		this.change = new x(this.props), this.attributes = new b(this.props), this.elementItem = new C(this.props, this.element), this.value = new D(this.props, this.refs, this.elementItem), this.code = new S(this.props), this.validation = new E(this.props, this.attributes, this.value, this.change, this.code), this.event = new w(this.props, this.change, this.value, this.validation, this.emits), this.field = new T(this.props, this.value, this.components, this.event, void 0, void 0, void 0, void 0, void 0, l(() => ({ maxlength: this.props.maxlength })));
	}
}, m = {
	cancel: "none",
	autosize: !0
}, h = class extends d {
	constructor(t, n, r, i = p) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderInput", (e) => {
			let t = f(e.binds, this.item.binds.value, this.item.bindsInput.value);
			return this.components.is("textareaAutosize") ? [this.components.renderOne("textareaAutosize", { inputAttrs: t })] : [u("textarea", t)];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			value: this.item.value.item,
			checkValidity: this.item.validation.checkValidity,
			validationMessage: this.item.validation.message
		};
	}
	initClasses() {
		return { main: {} };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.field.render({ default: this.renderInput }, {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			validationMessage: this.item.validation.message.value
		});
	}
};
//#endregion
export { p as Textarea, h as TextareaDesign, m as defaultsTextarea };

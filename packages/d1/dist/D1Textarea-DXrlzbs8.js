import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { a as t, i as n, l as r, n as i, r as a, t as o, u as s } from "./FieldEventInclude-DFTu0XbR-DDMOYSSO.js";
import { t as c } from "./Field-DVIVag-5.js";
import { t as l } from "./FieldInclude-DxWK9BVa-DRV6fzoR.js";
import { t as u } from "./TextareaAutosize-BXz42gCR.js";
import { computed as d, createBlock as f, defineComponent as p, h as m, mergeDefaults as h, openBlock as g, unref as _ } from "vue";
import { DesignConstructorAbstract as v, toBinds as y } from "@dxtmisha/functional";
//#region ../constructor/dist/textarea.js
var b = class {
	constructor(c, u, f, p, m, h, g, _, v) {
		e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "binds", d(() => ({
			ref: this.element,
			autosize: this.props.autosize,
			value: this.value.item.value,
			onBlur: this.event.onBlur,
			onInput: this.event.onInput,
			onChange: this.event.onChange
		}))), e(this, "bindsInput", d(() => y(this.attributes.listForInput.value, this.props.textareaAttrs, {
			cols: this.props.cols,
			rows: this.props.rows,
			fieldSizing: this.props.fieldSizing
		}))), this.props = c, this.refs = u, this.element = f, this.classDesign = p, this.className = m, this.components = h, this.slots = g, this.emits = _;
		let { FieldAttributesIncludeConstructor: b = t, FieldChangeIncludeConstructor: x = s, FieldCodeIncludeConstructor: S = a, FieldElementIncludeConstructor: C = o, FieldEventIncludeConstructor: w = i, FieldIncludeConstructor: T = l, FieldValidationIncludeConstructor: E = n, FieldValueIncludeConstructor: D = r } = v == null ? {} : v;
		this.change = new x(this.props), this.attributes = new b(this.props), this.elementItem = new C(this.props, this.element), this.value = new D(this.props, this.refs, this.elementItem), this.code = new S(this.props), this.validation = new E(this.props, this.attributes, this.value, this.change, this.code), this.event = new w(this.props, this.change, this.value, this.validation, this.emits), this.field = new T(this.props, this.value, this.components, this.event, void 0, void 0, void 0, void 0, void 0, d(() => ({ maxlength: this.props.maxlength })));
	}
}, x = {
	cancel: "none",
	autosize: !0
}, S = class extends v {
	constructor(t, n, r, i = b) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderInput", (e) => {
			let t = y(e.binds, this.item.binds.value);
			return this.components.is("textareaAutosize") ? [this.components.renderOne("textareaAutosize", {
				...t,
				inputAttrs: this.item.bindsInput.value
			})] : [m("textarea", {
				...t,
				...this.item.bindsInput.value
			})];
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
}, C = { ...x }, w = /* @__PURE__ */ p({
	name: "D1Textarea",
	__name: "D1Textarea",
	props: /* @__PURE__ */ h({
		textareaAttrs: {},
		autosize: { type: Boolean },
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		iconTrailing: {},
		iconTrailingTurnOnly: { type: Boolean },
		iconTrailingDirOnly: { type: Boolean },
		iconTrailingPalette: { type: Boolean },
		prefix: {},
		prefixId: {},
		suffix: {},
		suffixId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		label: {},
		labelId: {},
		counterShow: { type: Boolean },
		counterId: {},
		fieldCounterAttrs: {},
		required: { type: Boolean },
		fieldLabelAttrs: {},
		forceShowMessage: { type: Boolean },
		disabled: { type: Boolean },
		helperMessage: {},
		validationMessage: {},
		fieldMessageAttrs: {},
		helperId: {},
		validationId: {},
		loading: { type: [Boolean, Object] },
		readonly: { type: Boolean },
		href: {},
		detail: {},
		isSkeleton: { type: Boolean },
		textCancel: { type: [String, Function] },
		id: {},
		focus: { type: Boolean },
		align: {},
		cancel: {},
		fieldAttrs: {},
		modelValue: {},
		"onUpdate:value": { type: Function },
		"onUpdate:modelValue": { type: Function },
		placeholder: {},
		value: {},
		name: {},
		autofocus: { type: Boolean },
		tabindex: {},
		form: {},
		validationCode: {},
		match: {},
		inputAttrs: {},
		minlength: {},
		maxlength: {},
		autocomplete: {},
		autocapitalize: {},
		inputMode: {},
		enterKeyHint: {},
		spellcheck: { type: [Boolean, String] },
		autocorrect: {},
		rows: {},
		cols: {},
		wrap: {},
		fieldSizing: {}
	}, C),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new S("d1.textarea", e, {
			emits: n,
			classes: d(() => ({ main: { "d1-textarea": !0 } })),
			styles: d(() => ({})),
			components: {
				textareaAutosize: u,
				field: c
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (g(), f(_(i)));
	}
});
//#endregion
export { w as t };

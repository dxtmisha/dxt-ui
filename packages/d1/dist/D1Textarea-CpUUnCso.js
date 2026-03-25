import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./FieldEventInclude-h5Fg7306-uq6F5Mpg.js";
import { t as s } from "./Field-Wq3L_Xz-.js";
import { t as c } from "./FieldInclude-BKoBWZdj-LqC7cxhb.js";
import { t as l } from "./TextareaAutosize-Cv19mVaz.js";
import { computed as u, createBlock as d, defineComponent as f, h as p, mergeDefaults as m, openBlock as h, unref as g } from "vue";
import { DesignConstructorAbstract as _, toBinds as v } from "@dxtmisha/functional";
//#region ../constructor/dist/textarea.js
var y = Object.defineProperty, b = (e, t, n) => t in e ? y(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, x = (e, t, n) => b(e, typeof t == "symbol" ? t : t + "", n), S = class {
	constructor(s, l, d, f, p, m, h, g, _) {
		x(this, "attributes"), x(this, "elementItem"), x(this, "change"), x(this, "value"), x(this, "code"), x(this, "validation"), x(this, "event"), x(this, "field"), x(this, "binds", u(() => ({
			ref: this.element,
			autosize: this.props.autosize,
			value: this.value.item.value,
			onBlur: this.event.onBlur,
			onInput: this.event.onInput,
			onChange: this.event.onChange
		}))), x(this, "bindsInput", u(() => v(this.attributes.listForInput.value, this.props.textareaAttrs, {
			cols: this.props.cols,
			rows: this.props.rows,
			fieldSizing: this.props.fieldSizing
		}))), this.props = s, this.refs = l, this.element = d, this.classDesign = f, this.className = p, this.components = m, this.slots = h, this.emits = g;
		let { FieldAttributesIncludeConstructor: y = o, FieldChangeIncludeConstructor: b = t, FieldCodeIncludeConstructor: S = e, FieldElementIncludeConstructor: C = r, FieldEventIncludeConstructor: w = i, FieldIncludeConstructor: T = c, FieldValidationIncludeConstructor: E = n, FieldValueIncludeConstructor: D = a } = _ == null ? {} : _;
		this.change = new b(this.props), this.attributes = new y(this.props), this.elementItem = new C(this.props, this.element), this.value = new D(this.props, this.refs, this.elementItem), this.code = new S(this.props), this.validation = new E(this.props, this.attributes, this.value, this.change, this.code), this.event = new w(this.props, this.change, this.value, this.validation, this.emits), this.field = new T(this.props, this.value, this.components, this.event, void 0, void 0, void 0, void 0, void 0, u(() => ({ maxlength: this.props.maxlength })));
	}
}, C = {
	cancel: "none",
	autosize: !0
}, w = class extends _ {
	constructor(e, t, n, r = S) {
		super(e, t, n), x(this, "item"), x(this, "renderInput", (e) => {
			let t = v(e.binds, this.item.binds.value);
			return this.components.is("textareaAutosize") ? [this.components.renderOne("textareaAutosize", {
				...t,
				inputAttrs: this.item.bindsInput.value
			})] : [p("textarea", {
				...t,
				...this.item.bindsInput.value
			})];
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, T = { ...C }, E = /* @__PURE__ */ f({
	name: "D1Textarea",
	__name: "D1Textarea",
	props: /* @__PURE__ */ m({
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
	}, T),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new w("d1.textarea", e, {
			emits: n,
			classes: u(() => ({ main: { "d1-textarea": !0 } })),
			styles: u(() => ({})),
			components: {
				textareaAutosize: l,
				field: s
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (h(), d(g(i)));
	}
});
//#endregion
export { E as t };

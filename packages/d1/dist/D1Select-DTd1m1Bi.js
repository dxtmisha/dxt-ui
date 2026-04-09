import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { i as n, t as r } from "./FieldInputCheckInclude-DbHUdZcj-CWzcwt7k.js";
import { a as i, i as a, n as o, r as s, s as c } from "./FieldEventInclude-KjC7R1b4-CdRYsQGC.js";
import { n as l, t as u } from "./Field-B2gwSY-Z.js";
import { t as d } from "./Input-DWpl8JMo.js";
import { n as f, t as p } from "./Menu-3OLsPesY.js";
import { t as m } from "./SelectValue-Q-s8XXQi.js";
import { computed as h, createBlock as g, defineComponent as _, h as v, mergeDefaults as y, openBlock as b, ref as x, unref as S } from "vue";
import { DesignConstructorAbstract as C, executeFunction as w, isFilled as T, toBinds as E } from "@dxtmisha/functional";
//#region ../constructor/dist/select.js
var D = class {
	constructor(t, n, r, i) {
		e(this, "isEdit", h(() => !!(this.props.editValue && !this.props.multiple))), e(this, "binds", h(() => E(this.attributes.listForInput.value, {
			name: this.props.name,
			type: "text",
			required: this.props.required,
			readonly: !this.isEdit.value,
			placeholder: this.props.placeholder,
			"data-menu-control": "1",
			onInput: this.isEdit.value ? this.event.onInput : this.event.onSelect
		}))), e(this, "onKeydown", (e) => {
			e.target.click(), e.preventDefault();
		}), this.props = t, this.attributes = n, this.value = r, this.event = i;
	}
}, O = class {
	constructor() {
		e(this, "value", x("")), e(this, "onInput", (e) => {
			var t;
			this.value.value = String((t = e.value) == null ? "" : t);
		});
	}
	get() {
		return this.value.value;
	}
	set(e) {
		this.value.value = e;
	}
}, k = class {
	constructor(t, u, d, p, m, g, _, v, y) {
		e(this, "attributes", void 0), e(this, "elementItem", void 0), e(this, "change", void 0), e(this, "value", void 0), e(this, "code", void 0), e(this, "validation", void 0), e(this, "event", void 0), e(this, "field", void 0), e(this, "menu", void 0), e(this, "input", void 0), e(this, "filter", void 0), e(this, "isSlot", h(() => {
			var e, t;
			return !!((e = this.slots) != null && e.contextTop || (t = this.slots) != null && t.contextBottom);
		})), e(this, "iconTrailing", h(() => {
			if (!this.props.disabled && !this.isArrow()) {
				var e;
				return (e = this.props.iconTrailing) == null ? this.props.iconArrowDown : e;
			}
		})), e(this, "onClick", (e) => {
			e && this.value.set(e);
		}), this.props = t, this.refs = u, this.element = d, this.classDesign = p, this.className = m, this.components = g, this.slots = _, this.emits = v;
		let { FieldAttributesIncludeConstructor: b = a, FieldChangeIncludeConstructor: x = c, FieldCodeIncludeConstructor: S = o, FieldElementIncludeConstructor: C = r, FieldEventIncludeConstructor: E = i, FieldIncludeConstructor: k = l, FieldValidationIncludeConstructor: A = s, FieldValueIncludeConstructor: j = n, MenuIncludeConstructor: M = f, SelectFilterConstructor: N = O, SelectInputConstructor: P = D } = y == null ? {} : y;
		this.attributes = new b(this.props), this.change = new x(this.props), this.elementItem = new C(this.props, this.element), this.value = new j(this.props, this.refs, this.elementItem), this.code = new S(this.props), this.validation = new A(this.props, this.attributes, this.value, this.change, this.code), this.event = new E(this.props, this.change, this.value, this.validation, this.emits), this.field = new k(this.props, this.value, this.components, this.event, void 0, void 0, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.toggle();
		}, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.next();
		}, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.previous();
		}, h(() => {
			var e;
			return {
				iconTrailing: this.iconTrailing.value,
				maxlength: this.props.max,
				cancel: (e = this.props.cancel) == null ? this.props.multiple ? "auto" : "none" : e
			};
		})), this.menu = new M(this.props, this.className, this.components, h(() => ({
			windowAttrs: {
				hide: !T(this.props.option) && !this.isSlot.value,
				widthMatch: !0
			},
			tag: "span",
			barsLabel: this.props.label,
			barsDescription: this.props.helperMessage,
			disabled: this.props.disabled || this.props.readonly,
			autoClose: !this.props.multiple,
			list: w(this.props.option),
			max: this.props.max,
			filterMode: this.props.filterMode,
			hideList: this.props.hideList,
			onClick: this.event.onSelect,
			onClickSlot: this.onClick,
			onUpdateValue: this.isArrow() ? this.event.onValue : void 0,
			isSelectedByValue: !0,
			ariaMultiselectable: this.props.multiple
		}))), this.input = new P(this.props, this.attributes, this.value, this.event), this.filter = new N();
	}
	isArrow() {
		return !!this.props.arrow && this.props.arrow !== "none";
	}
}, A = {}, j = class extends C {
	constructor(n, r, i, a = k) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderMenu", (e) => this.item.menu.render({
			control: (t) => this.renderMenuControl(e, t),
			title: (e) => this.renderTitle(e),
			footer: (e) => this.initSlot("footer", void 0, e),
			contextTop: (e) => this.initSlot("contextTop", void 0, e),
			contextBottom: (e) => this.initSlot("contextBottom", void 0, e)
		}, {
			selected: this.item.value.item.value,
			highlight: this.item.filter.get()
		})), e(this, "renderMenuControl", (e, t) => {
			let n = [];
			return this.item.input.isEdit.value || n.push(this.renderMenuControlValue(e, t)), n.push(this.renderMenuControlInput(e, t)), n;
		}), e(this, "renderMenuControlInput", (e, n) => {
			let r = this.item.input.isEdit.value, i = r ? e.className : e.classForFocus, a = {};
			return v("input", E(this.item.input.binds.value, n.binds, {
				ref: this.element,
				id: e.id,
				value: this.item.value.get(),
				class: [n.classesWindow.controlOpenOnly, i],
				...t.role("combobox")
			}, r ? void 0 : a));
		}), e(this, "renderMenuControlValue", (e, n) => this.components.renderOne("selectValue", E(n.binds, {
			class: e.className,
			disabled: this.props.disabled,
			value: n.selectedList.value,
			multiple: this.props.multiple,
			placeholder: this.props.placeholder,
			onClick: this.item.event.onSelect,
			...t.role("combobox")
		}))), e(this, "renderTitle", (e) => {
			let t = [];
			return this.props.showSearch && t.push(this.renderFilterInput(e)), this.initSlot("title", t, e), t;
		}), e(this, "renderFilterInput", (e) => {
			var t;
			return v("div", { class: [(t = this.classes) == null ? void 0 : t.value.input, e.classesWindow.static] }, this.components.renderOne("input", E({
				icon: this.props.iconSearch,
				onInputLite: this.item.filter.onInput,
				inputAttrs: { "data-menu-control": "1" }
			}, this.props.inputSearchAttrs)));
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			...this.item.menu.expose,
			value: this.item.value.item,
			checkValidity: this.item.validation.checkValidity,
			validationMessage: this.item.validation.message
		};
	}
	initClasses() {
		return {
			main: {},
			input: this.getSubClass("input")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = this.item.menu.expose.open.value;
		return this.item.field.render({ default: this.renderMenu }, {
			...this.getAttrs(),
			focus: t,
			iconTurn: t,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			validationMessage: this.item.validation.message.value
		});
	}
}, M = {
	...A,
	iconArrowDown: "keyboard_arrow_down",
	iconSearch: "search",
	menuAttrs: { itemAttrs: { dense: !0 } },
	inputSearchAttrs: { fieldAttrs: { size: "sm" } }
}, N = /* @__PURE__ */ _({
	name: "D1Select",
	__name: "D1Select",
	props: /* @__PURE__ */ y({
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
		max: {},
		arrow: {},
		arrowStep: {},
		arrowAlign: {},
		autocomplete: {},
		autocapitalize: {},
		inputMode: {},
		enterKeyHint: {},
		spellcheck: { type: [Boolean, String] },
		autocorrect: {},
		option: {},
		multiple: { type: Boolean },
		menuAttrs: {},
		editValue: { type: Boolean },
		hideList: { type: Boolean },
		showSearch: { type: Boolean },
		filterMode: { type: Boolean },
		iconArrowDown: {},
		iconSearch: {},
		inputSearchAttrs: {}
	}, M),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new j("d1.select", e, {
			emits: n,
			classes: h(() => ({ main: { "d1-select": !0 } })),
			styles: h(() => ({})),
			components: {
				menu: p,
				field: u,
				selectValue: m,
				input: d
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (b(), g(S(i)));
	}
});
//#endregion
export { N as t };

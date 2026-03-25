import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { a as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./FieldEventInclude-h5Fg7306-uq6F5Mpg.js";
import { t as c } from "./Field-Wq3L_Xz-.js";
import { t as l } from "./Input-C-4KbO0r.js";
import { t as u } from "./FieldInclude-BKoBWZdj-LqC7cxhb.js";
import { n as d, t as f } from "./Menu-DrzhZXyT.js";
import { t as p } from "./SelectValue-qR5hOB1L.js";
import { computed as m, createBlock as h, defineComponent as g, h as _, mergeDefaults as v, openBlock as y, ref as b, unref as x } from "vue";
import { DesignConstructorAbstract as S, executeFunction as C, isFilled as w, toBinds as T } from "@dxtmisha/functional";
//#region ../constructor/dist/select.js
var E = Object.defineProperty, D = (e, t, n) => t in e ? E(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, O = (e, t, n) => D(e, typeof t == "symbol" ? t : t + "", n), k = class {
	constructor(e, t, n, r) {
		O(this, "isEdit", m(() => !!(this.props.editValue && !this.props.multiple))), O(this, "binds", m(() => T(this.attributes.listForInput.value, {
			name: this.props.name,
			type: "text",
			required: this.props.required,
			readonly: !this.isEdit.value,
			placeholder: this.props.placeholder,
			"data-menu-control": "1",
			onInput: this.isEdit.value ? this.event.onInput : this.event.onSelect
		}))), O(this, "onKeydown", (e) => {
			e.target.click(), e.preventDefault();
		}), this.props = e, this.attributes = t, this.value = n, this.event = r;
	}
}, A = class {
	constructor() {
		O(this, "value", b("")), O(this, "onInput", (e) => {
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
}, j = class {
	constructor(e, c, l, f, p, h, g, _, v) {
		O(this, "attributes"), O(this, "elementItem"), O(this, "change"), O(this, "value"), O(this, "code"), O(this, "validation"), O(this, "event"), O(this, "field"), O(this, "menu"), O(this, "input"), O(this, "filter"), O(this, "isSlot", m(() => {
			var e, t;
			return !!((e = this.slots) != null && e.contextTop || (t = this.slots) != null && t.contextBottom);
		})), O(this, "iconTrailing", m(() => {
			var e;
			if (!this.props.disabled && !this.isArrow()) return (e = this.props.iconTrailing) == null ? this.props.iconArrowDown : e;
		})), O(this, "onClick", (e) => {
			e && this.value.set(e);
		}), this.props = e, this.refs = c, this.element = l, this.classDesign = f, this.className = p, this.components = h, this.slots = g, this.emits = _;
		let { FieldAttributesIncludeConstructor: y = s, FieldChangeIncludeConstructor: b = n, FieldCodeIncludeConstructor: x = t, FieldElementIncludeConstructor: S = i, FieldEventIncludeConstructor: T = a, FieldIncludeConstructor: E = u, FieldValidationIncludeConstructor: D = r, FieldValueIncludeConstructor: j = o, MenuIncludeConstructor: M = d, SelectFilterConstructor: N = A, SelectInputConstructor: P = k } = v == null ? {} : v;
		this.attributes = new y(this.props), this.change = new b(this.props), this.elementItem = new S(this.props, this.element), this.value = new j(this.props, this.refs, this.elementItem), this.code = new x(this.props), this.validation = new D(this.props, this.attributes, this.value, this.change, this.code), this.event = new T(this.props, this.change, this.value, this.validation, this.emits), this.field = new E(this.props, this.value, this.components, this.event, void 0, void 0, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.toggle();
		}, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.next();
		}, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.previous();
		}, m(() => {
			var e;
			return {
				iconTrailing: this.iconTrailing.value,
				maxlength: this.props.max,
				cancel: (e = this.props.cancel) == null ? this.props.multiple ? "auto" : "none" : e
			};
		})), this.menu = new M(this.props, this.className, this.components, m(() => ({
			windowAttrs: {
				hide: !w(this.props.option) && !this.isSlot.value,
				widthMatch: !0
			},
			tag: "span",
			barsLabel: this.props.label,
			barsDescription: this.props.helperMessage,
			disabled: this.props.disabled || this.props.readonly,
			autoClose: !this.props.multiple,
			list: C(this.props.option),
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
}, M = {}, N = class extends S {
	constructor(t, n, r, i = j) {
		super(t, n, r), O(this, "item"), O(this, "renderMenu", (e) => this.item.menu.render({
			control: (t) => this.renderMenuControl(e, t),
			title: (e) => this.renderTitle(e),
			footer: (e) => this.initSlot("footer", void 0, e),
			contextTop: (e) => this.initSlot("contextTop", void 0, e),
			contextBottom: (e) => this.initSlot("contextBottom", void 0, e)
		}, {
			selected: this.item.value.item.value,
			highlight: this.item.filter.get()
		})), O(this, "renderMenuControl", (e, t) => {
			let n = [];
			return this.item.input.isEdit.value || n.push(this.renderMenuControlValue(e, t)), n.push(this.renderMenuControlInput(e, t)), n;
		}), O(this, "renderMenuControlInput", (t, n) => {
			let r = this.item.input.isEdit.value, i = r ? t.className : t.classForFocus, a = {};
			return _("input", T(this.item.input.binds.value, n.binds, {
				ref: this.element,
				id: t.id,
				value: this.item.value.get(),
				class: [n.classesWindow.controlOpenOnly, i],
				...e.role("combobox")
			}, r ? void 0 : a));
		}), O(this, "renderMenuControlValue", (t, n) => this.components.renderOne("selectValue", T(n.binds, {
			class: t.className,
			disabled: this.props.disabled,
			value: n.selectedList.value,
			multiple: this.props.multiple,
			placeholder: this.props.placeholder,
			onClick: this.item.event.onSelect,
			...e.role("combobox")
		}))), O(this, "renderTitle", (e) => {
			let t = [];
			return this.props.showSearch && t.push(this.renderFilterInput(e)), this.initSlot("title", t, e), t;
		}), O(this, "renderFilterInput", (e) => {
			var t;
			return _("div", { class: [(t = this.classes) == null ? void 0 : t.value.input, e.classesWindow.static] }, this.components.renderOne("input", T({
				icon: this.props.iconSearch,
				onInputLite: this.item.filter.onInput,
				inputAttrs: { "data-menu-control": "1" }
			}, this.props.inputSearchAttrs)));
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, P = {
	...M,
	iconArrowDown: "keyboard_arrow_down",
	iconSearch: "search",
	menuAttrs: { itemAttrs: { dense: !0 } },
	inputSearchAttrs: { fieldAttrs: { size: "sm" } }
}, F = /* @__PURE__ */ g({
	name: "D1Select",
	__name: "D1Select",
	props: /* @__PURE__ */ v({
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
	}, P),
	emits: [
		"update:value",
		"update:modelValue",
		"input",
		"inputLite",
		"change",
		"changeLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new N("d1.select", e, {
			emits: n,
			classes: m(() => ({ main: { "d1-select": !0 } })),
			styles: m(() => ({})),
			components: {
				menu: f,
				field: c,
				selectValue: p,
				input: l
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (y(), h(x(i)));
	}
});
//#endregion
export { F as t };

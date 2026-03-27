import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-BTtSLqQS.js";
import { a as n, i as r, n as i, o as a, r as o, s, t as c } from "./FieldEventInclude-Dtd9ULXn.js";
import { t as l } from "./FieldInclude-DxWK9BVa.js";
import { t as u } from "./MenuInclude-C7_UeLwL.js";
import { computed as d, h as f, ref as p } from "vue";
import { DesignConstructorAbstract as m, executeFunction as h, isFilled as g, toBinds as _ } from "@dxtmisha/functional";
//#region src/constructors/Select/SelectInput.ts
var v = class {
	constructor(e, n, r, i) {
		t(this, "isEdit", d(() => !!(this.props.editValue && !this.props.multiple))), t(this, "binds", d(() => _(this.attributes.listForInput.value, {
			name: this.props.name,
			type: "text",
			required: this.props.required,
			readonly: !this.isEdit.value,
			placeholder: this.props.placeholder,
			"data-menu-control": "1",
			onInput: this.isEdit.value ? this.event.onInput : this.event.onSelect
		}))), t(this, "onKeydown", (e) => {
			e.target.click(), e.preventDefault();
		}), this.props = e, this.attributes = n, this.value = r, this.event = i;
	}
}, y = class {
	constructor() {
		t(this, "value", p("")), t(this, "onInput", (e) => {
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
}, b = class {
	constructor(e, f, p, m, _, b, x, S, C) {
		t(this, "attributes", void 0), t(this, "elementItem", void 0), t(this, "change", void 0), t(this, "value", void 0), t(this, "code", void 0), t(this, "validation", void 0), t(this, "event", void 0), t(this, "field", void 0), t(this, "menu", void 0), t(this, "input", void 0), t(this, "filter", void 0), t(this, "isSlot", d(() => {
			var e, t;
			return !!((e = this.slots) != null && e.contextTop || (t = this.slots) != null && t.contextBottom);
		})), t(this, "iconTrailing", d(() => {
			if (!this.props.disabled && !this.isArrow()) {
				var e;
				return (e = this.props.iconTrailing) == null ? this.props.iconArrowDown : e;
			}
		})), t(this, "onClick", (e) => {
			e && this.value.set(e);
		}), this.props = e, this.refs = f, this.element = p, this.classDesign = m, this.className = _, this.components = b, this.slots = x, this.emits = S;
		let { FieldAttributesIncludeConstructor: w = s, FieldChangeIncludeConstructor: T = a, FieldCodeIncludeConstructor: E = n, FieldElementIncludeConstructor: D = r, FieldEventIncludeConstructor: O = c, FieldIncludeConstructor: k = l, FieldValidationIncludeConstructor: A = i, FieldValueIncludeConstructor: j = o, MenuIncludeConstructor: M = u, SelectFilterConstructor: N = y, SelectInputConstructor: P = v } = C == null ? {} : C;
		this.attributes = new w(this.props), this.change = new T(this.props), this.elementItem = new D(this.props, this.element), this.value = new j(this.props, this.refs, this.elementItem), this.code = new E(this.props), this.validation = new A(this.props, this.attributes, this.value, this.change, this.code), this.event = new O(this.props, this.change, this.value, this.validation, this.emits), this.field = new k(this.props, this.value, this.components, this.event, void 0, void 0, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.toggle();
		}, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.next();
		}, () => {
			var e;
			return (e = this.menu.getElement()) == null ? void 0 : e.previous();
		}, d(() => {
			var e;
			return {
				iconTrailing: this.iconTrailing.value,
				maxlength: this.props.max,
				cancel: (e = this.props.cancel) == null ? this.props.multiple ? "auto" : "none" : e
			};
		})), this.menu = new M(this.props, this.className, this.components, d(() => ({
			windowAttrs: {
				hide: !g(this.props.option) && !this.isSlot.value,
				widthMatch: !0
			},
			tag: "span",
			barsLabel: this.props.label,
			barsDescription: this.props.helperMessage,
			disabled: this.props.disabled || this.props.readonly,
			autoClose: !this.props.multiple,
			list: h(this.props.option),
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
}, x = {}, S = class extends m {
	constructor(n, r, i, a = b) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderMenu", (e) => this.item.menu.render({
			control: (t) => this.renderMenuControl(e, t),
			title: (e) => this.renderTitle(e),
			footer: (e) => this.initSlot("footer", void 0, e),
			contextTop: (e) => this.initSlot("contextTop", void 0, e),
			contextBottom: (e) => this.initSlot("contextBottom", void 0, e)
		}, {
			selected: this.item.value.item.value,
			highlight: this.item.filter.get()
		})), t(this, "renderMenuControl", (e, t) => {
			let n = [];
			return this.item.input.isEdit.value || n.push(this.renderMenuControlValue(e, t)), n.push(this.renderMenuControlInput(e, t)), n;
		}), t(this, "renderMenuControlInput", (t, n) => {
			let r = this.item.input.isEdit.value, i = r ? t.className : t.classForFocus, a = {};
			return f("input", _(this.item.input.binds.value, n.binds, {
				ref: this.element,
				id: t.id,
				value: this.item.value.get(),
				class: [n.classesWindow.controlOpenOnly, i],
				...e.role("combobox")
			}, r ? void 0 : a));
		}), t(this, "renderMenuControlValue", (t, n) => this.components.renderOne("selectValue", _(n.binds, {
			class: t.className,
			disabled: this.props.disabled,
			value: n.selectedList.value,
			multiple: this.props.multiple,
			placeholder: this.props.placeholder,
			onClick: this.item.event.onSelect,
			...e.role("combobox")
		}))), t(this, "renderTitle", (e) => {
			let t = [];
			return this.props.showSearch && t.push(this.renderFilterInput(e)), this.initSlot("title", t, e), t;
		}), t(this, "renderFilterInput", (e) => {
			var t;
			return f("div", { class: [(t = this.classes) == null ? void 0 : t.value.input, e.classesWindow.static] }, this.components.renderOne("input", _({
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
};
//#endregion
export { b as Select, S as SelectDesign, x as defaultsSelect };

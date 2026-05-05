import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-3CuEayIP.js";
import { t as n } from "./ProgressInclude-JFhmT2C5.js";
import { t as r } from "./EnabledInclude-CT-HRavv.js";
import { t as i } from "./SkeletonInclude-Ba6Jwwmv.js";
import { t as a } from "./LabelInclude-Cj8gJJ29.js";
import { t as o } from "./DescriptionInclude-C011DAIP.js";
import { t as s } from "./RippleInclude-s_aOBns0.js";
import { n as c, r as l } from "./FieldInputCheckInclude-DqiMXeTF.js";
import { a as u, i as d, n as f, r as p, t as m } from "./FieldEventInclude-DY_rzJH6.js";
import { t as h } from "./FieldMessageInclude-CFAq415k.js";
import { computed as g, h as _ } from "vue";
import { DesignConstructorAbstract as v, getBind as y, toBinds as b } from "@dxtmisha/functional";
//#region src/constructors/Checkbox/CheckboxIcon.ts
var x = class {
	constructor(e, n) {
		t(this, "item", g(() => y(this.getIcon(), "value"))), this.props = e, this.value = n;
	}
	getIcon() {
		if (this.value.boolean.value && !this.props.loading) return this.props.indeterminate ? this.props.iconIndeterminate : this.props.iconCheckbox;
	}
}, S = class {
	constructor(e, g, _, v, y, b, S, C, w) {
		t(this, "type", "checkbox"), t(this, "attributes", void 0), t(this, "change", void 0), t(this, "code", void 0), t(this, "description", void 0), t(this, "elementItem", void 0), t(this, "enabled", void 0), t(this, "event", void 0), t(this, "icon", void 0), t(this, "label", void 0), t(this, "message", void 0), t(this, "progress", void 0), t(this, "ripple", void 0), t(this, "skeleton", void 0), t(this, "validation", void 0), t(this, "value", void 0), this.props = e, this.refs = g, this.element = _, this.classDesign = v, this.className = y, this.components = b, this.slots = S, this.emits = C;
		let { CheckboxIconConstructor: T = x, DescriptionConstructor: E = o, EnabledConstructor: D = r, FieldAttributesIncludeConstructor: O = u, FieldChangeIncludeConstructor: k = d, FieldCodeIncludeConstructor: A = p, FieldElementIncludeConstructor: j = l, FieldEventIncludeConstructor: M = m, FieldMessageConstructor: N = h, FieldValidationIncludeConstructor: P = f, FieldValueIncludeConstructor: F = c, LabelConstructor: I = a, ProgressConstructor: L = n, RippleConstructor: R = s, SkeletonConstructor: z = i } = w == null ? {} : w;
		this.skeleton = new z(this.props, this.classDesign, ["classText"]), this.progress = new L(this.props, this.className, this.components, {
			circular: !0,
			inverse: !0
		}), this.change = new k(this.props), this.elementItem = new j(this.props, this.element), this.attributes = new O(this.props), this.value = new F(this.props, this.refs, this.elementItem), this.code = new A(this.props), this.validation = new P(this.props, this.attributes, this.value, this.change, this.code), this.event = new M(this.props, this.change, this.value, this.validation, this.emits), this.message = new N(this.props, this.className, this.components, this.validation.message), this.icon = new T(this.props, this.value), this.label = new I(e, y, void 0, S, void 0, void 0, void 0, this.skeleton), this.description = new E(e, y, S, this.skeleton), this.enabled = new D(e, this.progress), this.ripple = new R(y, b, this.enabled);
	}
}, C = {
	valueVariantHide: "0",
	block: !0,
	itemCenter: !0
}, w = class extends v {
	constructor(n, r, i, a = S) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderBody", () => {
			var e;
			let t = [...this.renderChecked(), ...this.renderInfo()];
			return _("span", { class: (e = this.classes) == null ? void 0 : e.value.body }, t);
		}), t(this, "renderInput", () => {
			var t;
			return _("input", b(this.item.attributes.listForCheckbox.value, {
				class: (t = this.classes) == null ? void 0 : t.value.input,
				type: this.item.type,
				checked: this.item.value.item.value,
				onInput: this.item.event.onChecked,
				...e.invalid(this.item.validation.isError())
			}));
		}), t(this, "renderInputHidden", () => _("input", {
			name: this.props.name,
			type: "hidden",
			value: this.props.valueVariantHide
		})), t(this, "renderChecked", () => {
			var t, n;
			return [_("span", {
				class: (t = this.classes) == null ? void 0 : t.value.item,
				...e.hidden()
			}, [
				...this.item.progress.render(),
				_("span", { class: [(n = this.classes) == null ? void 0 : n.value.icon, this.item.skeleton.classesSkeleton.classBackground] }, [this.components.renderOne("image", this.item.icon.item.value)]),
				...this.item.ripple.render()
			])];
		}), t(this, "renderInfo", () => {
			if (this.item.label.is.value || this.item.description.is.value) {
				var e;
				return [_("span", { class: (e = this.classes) == null ? void 0 : e.value.info }, [
					...this.item.label.render(),
					...this.item.description.render(),
					...this.item.message.render()
				])];
			}
			return [];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			value: this.item.value.item,
			checkValidity: this.item.validation.checkValidity,
			validationMessage: this.item.validation.message
		};
	}
	initClasses() {
		return {
			main: {},
			input: this.getSubClass("input"),
			body: this.getSubClass("body"),
			item: this.getSubClass("item"),
			icon: this.getSubClass("icon"),
			loading: this.getSubClass("loading"),
			info: this.getSubClass("info"),
			label: this.getSubClass("label")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return _("label", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			this.renderInputHidden(),
			this.renderInput(),
			this.renderBody()
		]);
	}
};
//#endregion
export { S as Checkbox, w as CheckboxDesign, x as CheckboxIcon, C as defaultsCheckbox };

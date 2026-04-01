import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./TextInclude-OwyVCAbS.js";
import { t as r } from "./EventClickInclude-6I8kuFc9.js";
import { t as i } from "./ActionsInclude-BzyGXlK7.js";
import { t as a } from "./LabelInclude-DoZ7EUYO.js";
import { t as o } from "./DescriptionInclude-B_Xf_j3l.js";
import { t as s } from "./IconTrailingInclude-CCAEyAaE.js";
import { t as c } from "./ButtonInclude-BCh7iFrr.js";
import { computed as l, h as u } from "vue";
import { DesignConstructorAbstract as d } from "@dxtmisha/functional";
//#region src/constructors/SnackbarItem/SnackbarItem.ts
var f = class {
	constructor(e, u, d, f, p, m, h, g, _) {
		t(this, "label", void 0), t(this, "description", void 0), t(this, "event", void 0), t(this, "icon", void 0), t(this, "button", void 0), t(this, "actions", void 0), t(this, "text", void 0), t(this, "onClose", () => {
			var e;
			return (e = this.emits) == null ? void 0 : e.call(this, "close", this.props.value);
		}), this.props = e, this.refs = u, this.element = d, this.classDesign = f, this.className = p, this.components = m, this.slots = h, this.emits = g;
		let { ActionsConstructor: v = i, ButtonConstructor: y = c, DescriptionConstructor: b = o, EventConstructor: x = r, IconConstructor: S = s, LabelConstructor: C = a, TextConstructor: w = n } = _ == null ? {} : _;
		this.label = new C(e, p, void 0, h), this.description = new b(e, p, h), this.event = new x(void 0, void 0, g), this.icon = new S(e, p, m), this.button = new y(l(() => this.props.button), p, m, void 0, { onClick: this.event.onClick }), this.actions = new v(e, p, m, g, { align: "left" }), this.text = new w(e);
	}
}, p = {
	closeButton: !0,
	role: "status"
}, m = class extends d {
	constructor(n, r, i, a = f) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderMain", () => {
			var e, t;
			return [u("div", {
				key: "tool",
				class: (e = this.classes) == null ? void 0 : e.value.tool
			}, [
				...this.item.icon.render(),
				...this.renderContext(),
				...this.item.button.render({ class: (t = this.classes) == null ? void 0 : t.value.button }),
				...this.renderClose()
			])];
		}), t(this, "renderContext", () => {
			var e;
			return [u("div", {
				key: "context",
				class: (e = this.classes) == null ? void 0 : e.value.context
			}, [
				...this.item.label.render(),
				...this.item.description.render(),
				...this.renderBody()
			])];
		}), t(this, "renderBody", () => {
			let e = [];
			if (this.props.html) {
				var t;
				e.push(u("div", {
					key: "body",
					class: (t = this.classes) == null ? void 0 : t.value.body,
					innerHTML: this.props.html
				}));
			}
			if (this.slots && "body" in this.slots) {
				var n;
				e.push(u("div", {
					key: "body-slot",
					class: (n = this.classes) == null ? void 0 : n.value.body
				}, this.initSlot("body")));
			}
			if (this.props.component) {
				var r;
				e.push(u("div", {
					key: "body-component",
					class: (r = this.classes) == null ? void 0 : r.value.body
				}, u(this.props.component, this.props.componentProps)));
			}
			return e;
		}), t(this, "renderClose", () => {
			if (this.props.closeButton) {
				var t;
				return this.components.render("button", {
					key: "button-close",
					class: (t = this.classes) == null ? void 0 : t.value.close,
					icon: this.props.iconClose,
					...e.label(this.item.text.close.value)
				}, void 0, "button-close");
			}
			return [];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			tool: this.getSubClass("tool"),
			icon: this.getSubClass("icon"),
			trailing: this.getSubClass("trailing"),
			context: this.getSubClass("context"),
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			body: this.getSubClass("body"),
			button: this.getSubClass("button"),
			close: this.getSubClass("close"),
			actions: this.getSubClass("actions")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var t;
		return u("div", {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.role(this.props.role),
			...e.atomic(!0)
		}, [...this.renderMain(), ...this.item.actions.render()]);
	}
};
//#endregion
export { f as SnackbarItem, m as SnackbarItemDesign, p as defaultsSnackbarItem };

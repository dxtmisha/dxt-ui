import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { t as n } from "./TextInclude-CHF8IIwI.js";
import { t as r } from "./EventClickInclude-DB06AUmN.js";
import { t as i } from "./ActionsInclude-BaEbgPCO.js";
import { t as a } from "./LabelInclude-B8iRBQY-.js";
import { t as o } from "./DescriptionInclude-DuvOVxTq.js";
import { t as s } from "./IconTrailingInclude-BKjKR263.js";
import { t as c } from "./ButtonInclude-CZhIyEy5.js";
import { computed as l, h as u } from "vue";
import { DesignConstructorAbstract as d } from "@dxtmisha/functional";
//#region src/constructors/SnackbarItem/SnackbarItem.ts
var f = class {
	constructor(u, d, f, p, m, h, g, _, v) {
		t(this, "label", void 0), t(this, "description", void 0), t(this, "event", void 0), t(this, "icon", void 0), t(this, "button", void 0), t(this, "actions", void 0), t(this, "text", void 0), t(this, "ariaBind", l(() => {
			let t = {
				...e.atomic(!0),
				...e.role(this.props.role),
				...e.live(this.props.ariaLive),
				tabindex: "0"
			};
			return this.props.success ? {
				...t,
				...e.live("polite"),
				...e.role("status")
			} : this.props.error ? {
				...t,
				...e.live("assertive"),
				...e.role("alert")
			} : t;
		})), t(this, "onClose", () => {
			var e;
			return (e = this.emits) == null ? void 0 : e.call(this, "close", this.props.value);
		}), this.props = u, this.refs = d, this.element = f, this.classDesign = p, this.className = m, this.components = h, this.slots = g, this.emits = _;
		let { ActionsConstructor: y = i, ButtonConstructor: b = c, DescriptionConstructor: x = o, EventConstructor: S = r, IconConstructor: C = s, LabelConstructor: w = a, TextConstructor: T = n } = v == null ? {} : v;
		this.label = new w(u, m, void 0, g), this.description = new x(u, m, g), this.event = new S(void 0, void 0, _), this.icon = new C(u, m, h), this.button = new b(l(() => this.props.button), m, h, void 0, { onClick: this.event.onClick }), this.actions = new y(u, m, h, _, { align: "left" }), this.text = new T(u);
	}
}, p = { closeButton: !0 }, m = class extends d {
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
					onclick: this.item.onClose,
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
		var e;
		return u("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...this.item.ariaBind.value
		}, [...this.renderMain(), ...this.item.actions.render()]);
	}
};
//#endregion
export { f as SnackbarItem, m as SnackbarItemDesign, p as defaultsSnackbarItem };

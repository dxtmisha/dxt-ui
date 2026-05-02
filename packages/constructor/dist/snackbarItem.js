import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./TextInclude-6E-DvjvX.js";
import { t as r } from "./EventClickInclude-DmRb7XRg.js";
import { t as i } from "./AreaInclude-BPJ14Wwe.js";
import { t as a } from "./ActionsInclude-DppZSkT3.js";
import { t as o } from "./LabelInclude-BeVk9z8H.js";
import { t as s } from "./DescriptionInclude-CBzY5AM-.js";
import { t as c } from "./IconTrailingInclude-Cv0LoeEy.js";
import { t as l } from "./ButtonInclude-CKl-u2YZ.js";
import { computed as u, h as d } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
//#region src/constructors/SnackbarItem/SnackbarItem.ts
var p = class {
	constructor(d, f, p, m, h, g, _, v, y) {
		t(this, "label", void 0), t(this, "description", void 0), t(this, "event", void 0), t(this, "icon", void 0), t(this, "button", void 0), t(this, "actions", void 0), t(this, "area", void 0), t(this, "text", void 0), t(this, "ariaBind", u(() => {
			let t = {
				...e.atomic(!0),
				...e.role(this.props.role),
				...e.live(this.props.ariaLive)
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
		}), this.props = d, this.refs = f, this.element = p, this.classDesign = m, this.className = h, this.components = g, this.slots = _, this.emits = v;
		let { ActionsConstructor: b = a, AreaConstructor: x = i, ButtonConstructor: S = l, DescriptionConstructor: C = s, EventConstructor: w = r, IconConstructor: T = c, LabelConstructor: E = o, TextConstructor: D = n } = y == null ? {} : y;
		this.label = new E(d, h, void 0, _), this.description = new C(d, h, _), this.event = new w(void 0, void 0, v), this.icon = new T(d, h, g), this.button = new S(u(() => this.props.button), h, g, void 0, { onClick: this.event.onClick }), this.actions = new b(d, h, g, v, { align: "left" }), this.area = new x(d), this.text = new D(d);
	}
}, m = {
	area: "snackbar",
	closeButton: !0
}, h = class extends f {
	constructor(n, r, i, a = p) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderMain", () => {
			var e, t;
			return [d("div", {
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
			return [d("div", {
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
				e.push(d("div", {
					key: "body",
					class: (t = this.classes) == null ? void 0 : t.value.body,
					innerHTML: this.props.html
				}));
			}
			if (this.slots && "body" in this.slots) {
				var n;
				e.push(d("div", {
					key: "body-slot",
					class: (n = this.classes) == null ? void 0 : n.value.body
				}, this.initSlot("body")));
			}
			if (this.props.component) {
				var r;
				e.push(d("div", {
					key: "body-component",
					class: (r = this.classes) == null ? void 0 : r.value.body
				}, d(this.props.component, this.props.componentProps)));
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
		return d("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...this.item.ariaBind.value
		}, [...this.renderMain(), ...this.item.actions.render()]);
	}
};
//#endregion
export { p as SnackbarItem, h as SnackbarItemDesign, m as defaultsSnackbarItem };

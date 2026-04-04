import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./LabelNumberInclude-CelCWxFy.js";
import { t as r } from "./IconInclude-DbC8m22T.js";
import { computed as i, h as a } from "vue";
import { DesignConstructorAbstract as o, isFilled as s } from "@dxtmisha/functional";
//#region src/constructors/Badge/Badge.ts
var c = class {
	constructor(a, o, c, l, u, d, f, p, m) {
		t(this, "label", void 0), t(this, "icon", void 0), t(this, "autoHide", i(() => !this.props.dot && !s(this.icon.isIcon.value) && !s(this.label.is.value))), t(this, "classes", i(() => ({ [`${this.className}--hideAuto`]: this.autoHide.value }))), t(this, "aria", i(() => this.props.ariaLabel ? { ...e.hidden() } : {})), this.props = a, this.refs = o, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { IconIncludeConstructor: h = r, LabelNumberIncludeConstructor: g = n } = m == null ? {} : m;
		this.label = new g(a, u, void 0, f), this.icon = new h(a, u, d);
	}
}, l = {
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right"
}, u = class extends o {
	constructor(e, n, r, i = c) {
		super(e, n, r), t(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			label: this.getSubClass("label"),
			icon: this.getSubClass("icon")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var t;
		let n = [];
		return this.props.dot || n.push(...this.item.label.render(void 0, this.item.aria.value), ...this.item.icon.renderIcon()), a("span", {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.label(this.props.ariaLabel)
		}, n);
	}
};
//#endregion
export { c as Badge, u as BadgeDesign, l as defaultsBadge };

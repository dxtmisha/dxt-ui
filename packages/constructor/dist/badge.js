import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-DblGXmzD.js";
import { t as n } from "./LabelNumberInclude-Dxv-JWQZ.js";
import { t as r } from "./IconInclude-CG1A2rFq.js";
import { t as i } from "./BadgeInclude-BMxXPn3m.js";
import { computed as a, h as o } from "vue";
import { DesignConstructorAbstract as s, isFilled as c } from "@dxtmisha/functional";
//#region src/constructors/Badge/Badge.ts
var l = class {
	constructor(i, o, s, l, u, d, f, p, m) {
		t(this, "label", void 0), t(this, "icon", void 0), t(this, "autoHide", a(() => !this.props.dot && !c(this.icon.isIcon.value) && !c(this.label.is.value))), t(this, "classes", a(() => ({ [`${this.className}--hideAuto`]: this.autoHide.value }))), t(this, "aria", a(() => this.props.ariaLabel ? { ...e.hidden() } : {})), this.props = i, this.refs = o, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { IconIncludeConstructor: h = r, LabelNumberIncludeConstructor: g = n } = m == null ? {} : m;
		this.label = new g(i, u, void 0, f), this.icon = new h(i, u, d);
	}
}, u = {
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right"
}, d = class extends s {
	constructor(e, n, r, i = l) {
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
		return this.props.dot || n.push(...this.item.label.render(void 0, this.item.aria.value), ...this.item.icon.renderIcon()), o("span", {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.label(this.props.ariaLabel)
		}, n);
	}
};
//#endregion
export { l as Badge, d as BadgeDesign, i as BadgeInclude, u as defaultsBadge };

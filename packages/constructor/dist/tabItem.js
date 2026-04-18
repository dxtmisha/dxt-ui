import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { t as n } from "./EnabledInclude-DziteWbw.js";
import { t as r } from "./EventClickInclude-DB06AUmN.js";
import { t as i } from "./SkeletonInclude-Cl99MbTo.js";
import { t as a } from "./LabelInclude-B8iRBQY-.js";
import { t as o } from "./IconTrailingInclude-BKjKR263.js";
import { t as s } from "./BadgeInclude-Bo3X5s9Z.js";
import { t as c } from "./RippleInclude-zKT0ltrM.js";
import { computed as l, h as u } from "vue";
import { DesignConstructorAbstract as d } from "@dxtmisha/functional";
//#region src/constructors/TabItem/TabItem.ts
var f = class {
	constructor(u, d, f, p, m, h, g, _, v) {
		t(this, "icon", void 0), t(this, "label", void 0), t(this, "badge", void 0), t(this, "skeleton", void 0), t(this, "enabled", void 0), t(this, "ripple", void 0), t(this, "event", void 0), t(this, "tag", l(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), t(this, "binds", l(() => {
			var t;
			return {
				href: this.props.href,
				"data-value": (t = this.props.index) == null ? this.props.value : t,
				tabindex: -1,
				...this.event.binds,
				...e.role(this.props.role),
				...e.selected(!!this.props.selected),
				...e.disabled(!!this.props.disabled)
			};
		})), this.props = u, this.refs = d, this.element = f, this.classDesign = p, this.className = m, this.components = h, this.slots = g, this.emits = _;
		let { BadgeIncludeConstructor: y = s, EnabledIncludeConstructor: b = n, EventClickIncludeConstructor: x = r, IconTrailingIncludeConstructor: S = o, LabelIncludeConstructor: C = a, RippleIncludeConstructor: w = c, SkeletonIncludeConstructor: T = i } = v == null ? {} : v;
		this.skeleton = new T(this.props, this.classDesign, ["classTextVariant"]), this.enabled = new b(this.props), this.icon = new S(this.props, this.className, this.components), this.label = new C(this.props, this.className, void 0, this.slots, void 0, void 0, void 0, this.skeleton), this.badge = new y(this.props, this.className, this.components, { overlap: "static" }), this.ripple = new w(this.className, this.components, this.enabled), this.event = new x(this.props, this.enabled, this.emits);
	}
}, p = { role: "tab" }, m = class extends d {
	constructor(e, n, r, i = f) {
		super(e, n, r), t(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.event.expose };
	}
	initClasses() {
		return {
			main: {},
			label: this.getSubClass("label"),
			icon: this.getSubClass("icon"),
			badge: this.getSubClass("badge")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [
			...this.item.icon.render(),
			...this.item.label.render(),
			...this.item.badge.render(),
			...this.item.ripple.render()
		];
		return u(this.item.tag.value, {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...this.item.binds.value
		}, t);
	}
};
//#endregion
export { f as TabItem, m as TabItemDesign, p as defaultsTabItem };

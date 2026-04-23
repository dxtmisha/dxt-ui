import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./EventClickInclude-DWAJ7AtL.js";
import { t as r } from "./SkeletonInclude-Cu6l1Y1l.js";
import { n as i, t as a } from "./IconInclude-BXTkdYgR.js";
import { t as o } from "./IconTrailingInclude-Ah9_79p9.js";
import { computed as s, h as c } from "vue";
import { DesignConstructorAbstract as l, getBindRef as u } from "@dxtmisha/functional";
//#region src/constructors/Icon/Icon.ts
var d = class {
	constructor(i, a, o, c, l, d, f, p, m) {
		t(this, "iconBind", void 0), t(this, "iconActiveBind", void 0), t(this, "skeleton", void 0), t(this, "event", void 0), t(this, "isActive", s(() => !!(this.props.active && this.props.iconActive))), t(this, "classes", s(() => ({ ...this.skeleton.classes.value }))), t(this, "binds", s(() => {
			let t = {
				key: "icon",
				...e.role(this.getRole()),
				...e.label(this.props.ariaLabel)
			};
			if (this.props.dynamic) {
				var n;
				return {
					...t,
					tabindex: (n = this.props.tabindex) == null ? 0 : n,
					...this.event.binds
				};
			}
			return {
				...t,
				...e.hidden()
			};
		})), t(this, "onLoad", (e) => {
			var t;
			return (t = this.emits) == null ? void 0 : t.call(this, "load", e);
		}), this.props = i, this.refs = a, this.element = o, this.classDesign = c, this.className = l, this.components = d, this.slots = f, this.emits = p;
		let { EventClickIncludeConstructor: h = n, SkeletonIncludeConstructor: g = r } = m == null ? {} : m;
		this.iconBind = u(a.icon, s(() => ({
			key: "mainIcon",
			class: `${l}__icon`,
			turn: this.props.turn,
			disabled: this.props.disabled,
			hide: this.isActive.value,
			onLoad: this.onLoad
		}))), this.iconActiveBind = u(a.iconActive, s(() => ({
			key: "activeIcon",
			class: `${l}__iconActive`,
			turn: this.props.turn,
			disabled: this.props.disabled,
			hide: !this.isActive.value
		}))), this.event = new h(i, void 0, p), this.skeleton = new g(i, c, ["classBackgroundVariant"]);
	}
	getRole() {
		if (this.props.role) return this.props.role;
		if (this.props.dynamic) return "button";
	}
}, f = { animationType: "type1" }, p = class extends l {
	constructor(e, n, r, i = d) {
		super(e, n, r), t(this, "item", void 0), t(this, "propsMain", s(() => {
			var e;
			return {
				...this.getAttrs(),
				...this.item.binds.value,
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), t(this, "renderIcon", () => this.components.renderOne("image", this.item.iconBind.value, void 0, "icon")), t(this, "renderIconActive", () => this.components.renderOne("image", this.item.iconActiveBind.value, void 0, "iconActive")), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			...this.item.event.expose,
			isActive: this.item.isActive
		};
	}
	initClasses() {
		return { main: this.item.classes.value };
	}
	initStyles() {
		return {};
	}
	initRender() {
		let e = [];
		return this.initSlot("default", e), this.props.icon && e.push(this.renderIcon()), this.props.iconActive && e.push(this.renderIconActive()), c("span", this.propsMain.value, e);
	}
};
//#endregion
export { d as Icon, p as IconDesign, a as IconInclude, i as IconLiteInclude, o as IconTrailingInclude, f as defaultsIcon };

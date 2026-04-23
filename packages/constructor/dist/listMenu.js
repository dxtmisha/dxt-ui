import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./WindowInclude-CdsbM6AZ.js";
import { t as n } from "./ListGroupOpen-CqyU-zU1.js";
import { computed as r } from "vue";
import { DesignConstructorAbstract as i } from "@dxtmisha/functional";
//#region src/constructors/ListMenu/ListMenu.ts
var a = class {
	constructor(i, a, o, s, c, l, u, d, f) {
		e(this, "open", void 0), e(this, "window", void 0), this.props = i, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { ListGroupOpenConstructor: p = n, WindowIncludeConstructor: m = t } = f == null ? {} : f;
		this.open = new p(this.props), this.window = new m(this.props, this.className, this.components, this.emits, r(() => ({
			adaptive: "menu",
			axis: this.props.axis,
			onWindow: this.open.onOpen,
			role: "menu",
			ariaHaspopup: "menu"
		})));
	}
}, o = { autoClose: !0 }, s = class extends i {
	constructor(t, n, r, i = a) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.window.expose };
	}
	initClasses() {
		return {
			main: {},
			head: this.getSubClass("head"),
			list: this.getSubClass("list")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.window.render({
			control: (e) => this.initSlot("head", void 0, e),
			default: () => this.initSlot("list")
		}, {
			...this.getAttrs(),
			open: this.item.open.is.value,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			inert: !1,
			autoTabIndex: !1,
			closeOnEsc: !1
		});
	}
};
//#endregion
export { a as ListMenu, s as ListMenuDesign, o as defaultsListMenu };

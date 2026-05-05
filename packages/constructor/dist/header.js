import { t as e } from "./defineProperty-3CuEayIP.js";
import { t } from "./AreaInclude-DiJGgvQg.js";
import { t as n } from "./LabelInclude-Cj8gJJ29.js";
import { t as r } from "./IconInclude-BvvUD3is.js";
import { t as i } from "./CaptionInclude-D4FFnCLk.js";
import { t as a } from "./HeaderInclude-CBRwM7_b.js";
import { computed as o, h as s } from "vue";
import { DesignConstructorAbstract as c } from "@dxtmisha/functional";
//#region src/constructors/Header/Header.ts
var l = class {
	constructor(a, s, c, l, u, d, f, p, m) {
		e(this, "label", void 0), e(this, "caption", void 0), e(this, "icon", void 0), e(this, "area", void 0), e(this, "classList", o(() => [String(this.props.tag)])), this.props = a, this.refs = s, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { AreaIncludeConstructor: h = t, CaptionIncludeConstructor: g = i, IconIncludeConstructor: _ = r, LabelIncludeConstructor: v = n } = m == null ? {} : m;
		this.label = new v(a, u, void 0, f, void 0, void 0, void 0, void 0, o(() => String(this.props.tag))), this.caption = new g(a, u, f), this.icon = new _(a, u, d), this.area = new h(a);
	}
}, u = {
	area: "header",
	tag: "h3"
}, d = class extends c {
	constructor(t, n, r, i = l) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderTrailing", () => {
			var e;
			let t = [];
			if ((e = this.slots) != null && e.trailing) {
				var n;
				t.push(s("div", {
					key: "spacer",
					class: (n = this.classes) == null ? void 0 : n.value.space
				})), this.initSlot("trailing", t);
			}
			return t;
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			label: this.getSubClass("label"),
			caption: this.getSubClass("caption"),
			icon: this.getSubClass("icon"),
			space: this.getSubClass("space")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [
			...this.item.icon.renderIcon(),
			...this.item.label.render(),
			...this.item.caption.render(),
			...this.renderTrailing()
		];
		return s("div", {
			...this.getAttrs(),
			class: [(e = this.classes) == null ? void 0 : e.value.main, ...this.item.classList.value]
		}, t);
	}
};
//#endregion
export { l as Header, d as HeaderDesign, a as HeaderInclude, u as defaultsHeader };

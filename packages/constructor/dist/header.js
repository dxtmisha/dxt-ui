import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./LabelInclude-zPXncFnh.js";
import { t as n } from "./IconInclude-DJ0EMHci.js";
import { t as r } from "./CaptionInclude-B3YwrJOP.js";
import { t as i } from "./AreaInclude-CKOHkxfO.js";
import { computed as a, h as o } from "vue";
import { DesignConstructorAbstract as s } from "@dxtmisha/functional";
//#region src/constructors/Header/Header.ts
var c = class {
	constructor(o, s, c, l, u, d, f, p, m) {
		e(this, "label", void 0), e(this, "caption", void 0), e(this, "icon", void 0), e(this, "area", void 0), e(this, "classList", a(() => [String(this.props.tag)])), this.props = o, this.refs = s, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { AreaIncludeConstructor: h = i, CaptionIncludeConstructor: g = r, IconIncludeConstructor: _ = n, LabelIncludeConstructor: v = t } = m == null ? {} : m;
		this.label = new v(o, u, void 0, f, void 0, void 0, !0, void 0, a(() => String(this.props.tag))), this.caption = new g(o, u, f), this.icon = new _(o, u, d), this.area = new h(o);
	}
}, l = {
	area: "header",
	tag: "h3"
}, u = class extends s {
	constructor(t, n, r, i = c) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderTrailing", () => {
			var e;
			let t = [];
			if ((e = this.slots) != null && e.trailing) {
				var n;
				t.push(o("div", {
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
		return o("div", {
			...this.getAttrs(),
			class: [(e = this.classes) == null ? void 0 : e.value.main, ...this.item.classList.value]
		}, t);
	}
};
//#endregion
export { c as Header, u as HeaderDesign, l as defaultsHeader };

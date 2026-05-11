import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-3CuEayIP.js";
import { t as n } from "./AreaInclude-DiJGgvQg.js";
import { t as r } from "./DescriptionInclude-C011DAIP.js";
import { t as i } from "./HeaderInclude-CBRwM7_b.js";
import { computed as a, h as o } from "vue";
import { DesignConstructorAbstract as s, getElementId as c } from "@dxtmisha/functional";
//#region src/constructors/Block/Block.ts
var l = class {
	constructor(e, o, s, l, u, d, f, p, m) {
		t(this, "description", void 0), t(this, "header", void 0), t(this, "area", void 0), t(this, "labelId", c()), t(this, "isHeadline", a(() => !!(this.props.headline || this.slots && "headline" in this.slots))), t(this, "tag", a(() => this.props.tag || "div")), this.props = e, this.refs = o, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { AreaIncludeConstructor: h = n, HeaderIncludeConstructor: g = i, DescriptionIncludeConstructor: _ = r } = m == null ? {} : m;
		this.header = new g(e, u, d, this.slots, void 0, this.labelId), this.description = new _(e, u, f), this.area = new h(e);
	}
}, u = {
	area: "block",
	tag: "div",
	tagHeader: "h3"
}, d = class extends s {
	constructor(e, n, r, i = l) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderHeadline", () => {
			if (this.item.isHeadline.value) {
				var e;
				let t = [];
				return this.props.headline && t.push(this.props.headline), this.initSlot("headline", t), [o("div", {
					key: "headline",
					class: (e = this.classes) == null ? void 0 : e.value.headline
				}, t)];
			}
			return [];
		}), t(this, "renderHeader", () => this.item.header.is.value ? this.item.header.render() : []), t(this, "renderBody", () => {
			let e = [
				...this.renderHeadline(),
				...this.renderHeader(),
				...this.item.description.render()
			];
			if (e.length > 0) {
				var t;
				return [o("div", {
					key: "body",
					class: (t = this.classes) == null ? void 0 : t.value.body
				}, e)];
			}
			return [];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			headline: this.getSubClass("headline"),
			header: this.getSubClass("header"),
			description: this.getSubClass("description"),
			body: this.getSubClass("body")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		let e = [...this.renderBody()];
		return this.initSlot("default", e), o(this.item.tag.value, this.getProps(), e);
	}
	getProps() {
		var t;
		let n = {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main
		};
		return this.props.label && Object.assign(n, e.labelledby(this.item.labelId)), this.item.description.is.value && Object.assign(n, e.describedby(this.item.description.id.value)), n;
	}
};
//#endregion
export { u as n, l as r, d as t };

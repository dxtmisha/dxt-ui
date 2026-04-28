import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./DescriptionInclude-DyTZveLd.js";
import { t as r } from "./HeaderInclude-RVTPdRyM.js";
import { computed as i, h as a } from "vue";
import { DesignConstructorAbstract as o, getElementId as s } from "@dxtmisha/functional";
//#region src/constructors/Block/Block.ts
var c = class {
	constructor(e, a, o, c, l, u, d, f, p) {
		t(this, "description", void 0), t(this, "header", void 0), t(this, "labelId", s()), t(this, "isHeadline", i(() => !!(this.props.headline || this.slots && "headline" in this.slots))), t(this, "tag", i(() => this.props.tag || "div")), this.props = e, this.refs = a, this.element = o, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = f;
		let { HeaderIncludeConstructor: m = r, DescriptionIncludeConstructor: h = n } = p == null ? {} : p;
		this.header = new m(e, l, u, this.slots, void 0, this.labelId), this.description = new h(e, l, d);
	}
}, l = {
	tag: "div",
	tagHeader: "h3"
}, u = class extends o {
	constructor(e, n, r, i = c) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderHeadline", () => {
			if (this.item.isHeadline.value) {
				var e;
				let t = [];
				return this.props.headline && t.push(this.props.headline), this.initSlot("headline", t), [a("div", {
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
				return [a("div", {
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
		return this.initSlot("default", e), a(this.item.tag.value, this.getProps(), e);
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
export { l as n, c as r, u as t };

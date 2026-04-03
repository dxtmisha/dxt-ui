import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./LabelInclude-DoZ7EUYO.js";
import { t as r } from "./DescriptionInclude-B_Xf_j3l.js";
import { t as i } from "./IconInclude-BhzGfa3o.js";
import { t as a } from "./CaptionInclude-CunHUsec.js";
import { computed as o, h as s } from "vue";
import { DesignConstructorAbstract as c } from "@dxtmisha/functional";
//#region src/constructors/Block/Block.ts
var l = class {
	constructor(e, s, c, l, u, d, f, p, m) {
		t(this, "label", void 0), t(this, "description", void 0), t(this, "caption", void 0), t(this, "icon", void 0), t(this, "isHeadline", o(() => !!(this.props.headline || this.slots && "headline" in this.slots))), t(this, "isHeader", o(() => this.label.is.value || this.caption.is.value || this.description.is.value)), t(this, "tag", o(() => this.props.tag || "div")), this.props = e, this.refs = s, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { CaptionIncludeConstructor: h = a, DescriptionIncludeConstructor: g = r, IconIncludeConstructor: _ = i, LabelIncludeConstructor: v = n } = m == null ? {} : m;
		this.label = new v(e, u, void 0, f, void 0, void 0, !0, void 0, o(() => this.props.tagHeader || "h3")), this.caption = new h(e, u, f), this.description = new g(e, u, f), this.icon = new _(e, u, d);
	}
}, u = {
	tag: "div",
	tagHeader: "h3"
}, d = class extends c {
	constructor(e, n, r, i = l) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderHeadline", () => {
			if (this.item.isHeadline.value) {
				var e;
				let t = [];
				return this.props.headline && t.push(this.props.headline), this.initSlot("headline", t), [s("div", {
					key: "headline",
					class: (e = this.classes) == null ? void 0 : e.value.headline
				}, t)];
			}
			return [];
		}), t(this, "renderHeader", () => {
			if (this.item.isHeader.value) {
				var e;
				let t = [
					...this.item.icon.renderIcon(),
					...this.item.label.render(),
					...this.item.caption.render(),
					...this.renderTrailing()
				];
				return [s("div", {
					key: "header",
					class: (e = this.classes) == null ? void 0 : e.value.header
				}, t)];
			}
			return [];
		}), t(this, "renderTrailing", () => {
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
		}), t(this, "renderBody", () => {
			let e = [
				...this.renderHeadline(),
				...this.renderHeader(),
				...this.item.description.render()
			];
			if (e.length > 0) {
				var t;
				return [s("div", {
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
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			caption: this.getSubClass("caption"),
			icon: this.getSubClass("icon"),
			space: this.getSubClass("space"),
			body: this.getSubClass("body")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		let e = [...this.renderBody()];
		return this.initSlot("default", e), s(this.item.tag.value, this.getProps(), e);
	}
	getProps() {
		var t;
		let n = {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main
		};
		return this.item.label.is.value && Object.assign(n, e.labelledby(this.item.label.id.value)), this.item.description.is.value && Object.assign(n, e.describedby(this.item.description.id.value)), n;
	}
};
//#endregion
export { u as n, l as r, d as t };

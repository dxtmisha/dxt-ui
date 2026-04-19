import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./LabelInclude-B8iRBQY--SmRMVprf.js";
import { t as r } from "./DescriptionInclude-DuvOVxTq-DAPoAV3k.js";
import { t as i } from "./IconInclude-C5Vyw12j-BKxKt_LW.js";
import { t as a } from "./CaptionInclude-B8cfV9lX-DoNrrGwR.js";
import { computed as o, h as s } from "vue";
import { DesignConstructorAbstract as c } from "@dxtmisha/functional";
//#region ../constructor/dist/BlockDesign-CuqfR05k.js
var l = class {
	constructor(t, s, c, l, u, d, f, p, m) {
		e(this, "label", void 0), e(this, "description", void 0), e(this, "caption", void 0), e(this, "icon", void 0), e(this, "isHeadline", o(() => !!(this.props.headline || this.slots && "headline" in this.slots))), e(this, "isHeader", o(() => this.label.is.value || this.caption.is.value || this.description.is.value)), e(this, "tag", o(() => this.props.tag || "div")), this.props = t, this.refs = s, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { CaptionIncludeConstructor: h = a, DescriptionIncludeConstructor: g = r, IconIncludeConstructor: _ = i, LabelIncludeConstructor: v = n } = m == null ? {} : m;
		this.label = new v(t, u, void 0, f, void 0, void 0, !0, void 0, o(() => this.props.tagHeader || "h3")), this.caption = new h(t, u, f), this.description = new g(t, u, f), this.icon = new _(t, u, d);
	}
}, u = {
	tag: "div",
	tagHeader: "h3"
}, d = class extends c {
	constructor(t, n, r, i = l) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderHeadline", () => {
			if (this.item.isHeadline.value) {
				var e;
				let t = [];
				return this.props.headline && t.push(this.props.headline), this.initSlot("headline", t), [s("div", {
					key: "headline",
					class: (e = this.classes) == null ? void 0 : e.value.headline
				}, t)];
			}
			return [];
		}), e(this, "renderHeader", () => {
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
		}), e(this, "renderTrailing", () => {
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
		}), e(this, "renderBody", () => {
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
		var e;
		let n = {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		};
		return this.item.label.is.value && Object.assign(n, t.labelledby(this.item.label.id.value)), this.item.description.is.value && Object.assign(n, t.describedby(this.item.description.id.value)), n;
	}
};
//#endregion
export { l as n, u as r, d as t };

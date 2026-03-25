import { t as e } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as n } from "./CaptionInclude-CohAZRI2-CCdFbTIH.js";
import { t as r } from "./DescriptionInclude-D4ane9aR-o7gRirw3.js";
import { t as i } from "./IconInclude-CLqwI29Q-CYtp8tgy.js";
import { computed as a, h as o } from "vue";
import { DesignConstructorAbstract as s } from "@dxtmisha/functional";
//#region ../constructor/dist/BlockDesign-DHCkcwP1.js
var c = Object.defineProperty, l = (e, t, n) => t in e ? c(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, u = (e, t, n) => l(e, typeof t == "symbol" ? t : t + "", n), d = class {
	constructor(t, o, s, c, l, d, f, p, m) {
		u(this, "label"), u(this, "description"), u(this, "caption"), u(this, "icon"), u(this, "isHeadline", a(() => !!(this.props.headline || this.slots && "headline" in this.slots))), u(this, "isHeader", a(() => this.label.is.value || this.caption.is.value || this.description.is.value)), u(this, "tag", a(() => this.props.tag || "div")), this.props = t, this.refs = o, this.element = s, this.classDesign = c, this.className = l, this.components = d, this.slots = f, this.emits = p;
		let { CaptionIncludeConstructor: h = n, DescriptionIncludeConstructor: g = r, IconIncludeConstructor: _ = i, LabelIncludeConstructor: v = e } = m == null ? {} : m;
		this.label = new v(t, l, void 0, f, void 0, void 0, !0, void 0, a(() => this.props.tagHeader || "h3")), this.caption = new h(t, l, f), this.description = new g(t, l, f), this.icon = new _(t, l, d);
	}
}, f = class extends s {
	constructor(e, t, n, r = d) {
		super(e, t, n), u(this, "item"), u(this, "renderHeadline", () => {
			var e;
			if (this.item.isHeadline.value) {
				let t = [];
				return this.props.headline && t.push(this.props.headline), this.initSlot("headline", t), [o("div", {
					key: "headline",
					class: (e = this.classes) == null ? void 0 : e.value.headline
				}, t)];
			}
			return [];
		}), u(this, "renderHeader", () => {
			var e;
			if (this.item.isHeader.value) {
				let t = [
					...this.item.icon.renderIcon(),
					...this.item.label.render(),
					...this.item.caption.render(),
					...this.renderTrailing()
				];
				return [o("div", {
					key: "header",
					class: (e = this.classes) == null ? void 0 : e.value.header
				}, t)];
			}
			return [];
		}), u(this, "renderTrailing", () => {
			var e, t;
			let n = [];
			return (e = this.slots) != null && e.trailing && (n.push(o("div", {
				key: "spacer",
				class: (t = this.classes) == null ? void 0 : t.value.space
			})), this.initSlot("trailing", n)), n;
		}), u(this, "renderBody", () => {
			var e;
			let t = [
				...this.renderHeadline(),
				...this.renderHeader(),
				...this.item.description.render()
			];
			return t.length > 0 ? [o("div", {
				key: "body",
				class: (e = this.classes) == null ? void 0 : e.value.body
			}, t)] : [];
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.initSlot("default", e), o(this.item.tag.value, this.getProps(), e);
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
export { d as n, f as t };

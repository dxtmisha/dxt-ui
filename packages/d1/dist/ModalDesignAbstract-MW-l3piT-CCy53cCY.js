import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { n as t } from "./Actions-gARGPqwr.js";
import { n } from "./Window-DV5XLyb1.js";
import { n as r } from "./Bars-h0-Nj5RR.js";
import { h as i } from "vue";
import { DesignConstructorAbstract as a, getElementId as o, toBinds as s } from "@dxtmisha/functional";
//#region ../constructor/dist/ModalDesignAbstract-MW-l3piT.js
var c = class {
	constructor(i, a, s, c, l, u, d, f, p, m, h, g) {
		e(this, "bars", void 0), e(this, "actions", void 0), e(this, "window", void 0), this.props = i, this.refs = a, this.element = s, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = f, this.extraWindow = p, this.extraBars = m, this.extraActions = h;
		let { WindowConstructor: _ = n, BarsConstructor: v = r, ActionsConstructor: y = t } = g == null ? {} : g, b = o(), x = o();
		this.bars = new v(i, l, u, f, m, b, x), this.actions = new y(i, l, u, f, h), this.window = new _(i, l, u, f, p, b, x);
	}
}, l = {
	barsBackHide: !0,
	imagePosition: "top"
}, u = class extends a {
	constructor(t, n, r, a) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderControl", (e) => this.initSlot("control", void 0, e)), e(this, "renderTitle", (e) => {
			let t = [];
			if (this.item.bars.is.value && t.push(...this.item.bars.render()), this.slots && "title" in this.slots) {
				var n;
				t.push(i("div", { class: (n = this.classes) == null ? void 0 : n.value.title }, this.initSlot("title", void 0, e)));
			}
			return t;
		}), e(this, "renderDefault", (e) => {
			let t = [];
			if (this.slots && "header" in this.slots) {
				var n;
				t.push(i("div", { class: (n = this.classes) == null ? void 0 : n.value.header }, this.initSlot("header", void 0, e)));
			}
			if (this.slots && "default" in this.slots) {
				var r;
				t.push(i("div", { class: (r = this.classes) == null ? void 0 : r.value.body }, this.initSlot("default", void 0, e)));
			}
			return t;
		}), e(this, "renderFooter", (e) => {
			let t = [];
			if (this.item.actions.is.value && t.push(...this.item.actions.render()), this.slots && "footer" in this.slots) {
				var n;
				t.push(i("div", { class: (n = this.classes) == null ? void 0 : n.value.footer }, this.initSlot("footer", void 0, e)));
			}
			return t;
		}), this.item = this.initItem(a), this.init();
	}
	initExpose() {
		return { ...this.item.window.expose };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.window.render({
			control: this.renderControl,
			title: this.renderTitle,
			default: this.renderDefault,
			footer: this.renderFooter
		}, s({ class: (e = this.classes) == null ? void 0 : e.value.main }, this.getAttrs()));
	}
};
//#endregion
export { l as n, u as r, c as t };

import { n as e } from "./Bars-4aLg7pr8.js";
import { n as t } from "./Actions-BOdB5iOT.js";
import { n } from "./Window-9iCpMfYB.js";
import { h as r } from "vue";
import { DesignConstructorAbstract as i, getElementId as a, toBinds as o } from "@dxtmisha/functional";
//#region ../constructor/dist/ModalDesignAbstract-CdF7kXxe.js
var s = Object.defineProperty, c = (e, t, n) => t in e ? s(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, l = (e, t, n) => c(e, typeof t == "symbol" ? t : t + "", n), u = class {
	constructor(r, i, o, s, c, u, d, f, p, m, h) {
		l(this, "bars"), l(this, "actions"), l(this, "window"), this.props = r, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = u, this.slots = d, this.emits = f, this.extraWindow = p, this.extraBars = m, this.extraActions = h;
		let g = a(), _ = a();
		this.bars = new e(r, c, u, f, m, g, _), this.actions = new t(r, c, u, f, h), this.window = new n(r, c, u, f, p, g, _);
	}
}, d = class extends i {
	constructor(e, t, n, i) {
		super(e, t, n), l(this, "item"), l(this, "renderControl", (e) => this.initSlot("control", void 0, e)), l(this, "renderTitle", (e) => {
			var t;
			let n = [];
			return this.item.bars.is.value && n.push(...this.item.bars.render()), this.slots && "title" in this.slots && n.push(r("div", { class: (t = this.classes) == null ? void 0 : t.value.title }, this.initSlot("title", void 0, e))), n;
		}), l(this, "renderDefault", (e) => {
			var t, n;
			let i = [];
			return this.slots && "header" in this.slots && i.push(r("div", { class: (t = this.classes) == null ? void 0 : t.value.header }, this.initSlot("header", void 0, e))), this.slots && "default" in this.slots && i.push(r("div", { class: (n = this.classes) == null ? void 0 : n.value.body }, this.initSlot("default", void 0, e))), i;
		}), l(this, "renderFooter", (e) => {
			var t;
			let n = [];
			return this.item.actions.is.value && n.push(...this.item.actions.render()), this.slots && "footer" in this.slots && n.push(r("div", { class: (t = this.classes) == null ? void 0 : t.value.footer }, this.initSlot("footer", void 0, e))), n;
		}), this.item = this.initItem(i), this.init();
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
		}, o({ class: (e = this.classes) == null ? void 0 : e.value.main }, this.getAttrs()));
	}
};
//#endregion
export { d as n, u as t };

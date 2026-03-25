import { domQuerySelector as e, getElementId as t } from "@dxtmisha/functional";
//#region ../constructor/dist/WindowClassesInclude-B56usxgx.js
var n = Object.defineProperty, r = (e, t, r) => t in e ? n(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r, i = (e, t, n) => r(e, typeof t == "symbol" ? t : t + "", n), a = /* @__PURE__ */ ((e) => (e.display = "display", e.preparation = "preparation", e.flash = "flash", e.open = "open", e.hide = "hide", e.close = "close", e))(a || {}), o = /* @__PURE__ */ ((e) => (e.block = "block", e.blockChildren = "blockChildren", e.blockOther = "blockOther", e.close = "close", e.static = "static", e.controlStatic = "controlStatic", e.controlOpenOnly = "controlOpenOnly", e.controlActive = "controlActive", e.persistent = "persistent", e))(o || {}), s = "--sys-type-body", c = class n {
	constructor(e) {
		i(this, "id", `window--${t()}`), i(this, "controlId", `${this.id}-control`), i(this, "list"), this.className = e, this.list = n.getClassesList(e, this.id);
	}
	isWindow(e) {
		return !!(e && e.classList.contains(this.className));
	}
	isWindowTeleport(e) {
		return !!(e && e.classList.contains(`${this.className}__teleport`));
	}
	isWindowOrTeleport(e) {
		return this.isWindow(e) || this.isWindowTeleport(e);
	}
	getId() {
		return this.id;
	}
	getControlId() {
		return this.controlId;
	}
	getClassStatus(e) {
		return `${this.className}[data-status="${e}"]`;
	}
	getSelectorControl() {
		return `.${this.list.control}.${this.id}`;
	}
	findMain(e) {
		var t;
		return (t = e == null ? void 0 : e.closest(`.${this.className}`)) == null ? void 0 : t;
	}
	findControl() {
		return e(`.${this.list.control}.${this.id}`);
	}
	findControlByElement(t) {
		var n;
		if (t) return e(`.${this.list.control}.${(n = t.dataset) == null ? void 0 : n.window}`);
	}
	findBody() {
		return e(`.${this.className}.${this.id} .${this.className}__body`);
	}
	findBodyContext() {
		return e(`.${this.className}.${this.id} .${this.className}__body__context`);
	}
	findBodyOther(t, n = a.open) {
		if (n === a.open) {
			let n = e(`.${this.className}:not(.${this.id})[data-status="${a.flash}"] .${this.className}__body ${t}`);
			if (n) return n;
		}
		return e(`.${this.className}:not(.${this.id})[data-status="${n}"] .${this.className}__body ${t}`);
	}
	static getClassesList(e, t = "id") {
		return {
			block: `${e}--${o.block}`,
			blockChildren: `${e}--${o.blockChildren}`,
			blockOther: `${e}--${o.blockOther}`,
			close: `${e}--${o.close}`,
			static: `${e}--${o.static}`,
			control: `${e}__control`,
			controlId: `${e}__control window__control ${t}`,
			controlStatic: `${e}--${o.controlStatic}`,
			controlOpenOnly: `${e}--${o.controlOpenOnly}`,
			controlActive: `${e}--${o.controlActive}`,
			persistent: `${e}--${o.persistent}`
		};
	}
	static getClassesListByDesign(e) {
		return this.getClassesList(`${e}-window`);
	}
}, l = class {
	constructor(e) {
		this.design = e;
	}
	get() {
		return c.getClassesListByDesign(this.design);
	}
	getObject() {
		return { classesWindow: this.get() };
	}
};
//#endregion
export { l as i, c as n, a as r, s as t };

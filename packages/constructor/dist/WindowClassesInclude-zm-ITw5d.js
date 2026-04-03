import { t as e } from "./defineProperty-hmGKPWdq.js";
import { domQuerySelector as t, getElementId as n } from "@dxtmisha/functional";
//#region src/constructors/Window/basicTypes.ts
var r = /* @__PURE__ */ function(e) {
	return e.display = "display", e.preparation = "preparation", e.flash = "flash", e.open = "open", e.hide = "hide", e.close = "close", e;
}({}), i = /* @__PURE__ */ function(e) {
	return e.block = "block", e.blockChildren = "blockChildren", e.blockOther = "blockOther", e.close = "close", e.static = "static", e.controlStatic = "controlStatic", e.controlOpenOnly = "controlOpenOnly", e.controlActive = "controlActive", e.persistent = "persistent", e;
}({}), a = "--sys-type-body", o = class a {
	constructor(t) {
		e(this, "id", `window--${n()}`), e(this, "controlId", `${this.id}-control`), e(this, "list", void 0), this.className = t, this.list = a.getClassesList(t, this.id);
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
		return t(`.${this.list.control}.${this.id}`);
	}
	findControlByElement(e) {
		if (e) {
			var n;
			return t(`.${this.list.control}.${(n = e.dataset) == null ? void 0 : n.window}`);
		}
	}
	findBody() {
		return t(`.${this.className}.${this.id} .${this.className}__body`);
	}
	findBodyContext() {
		return t(`.${this.className}.${this.id} .${this.className}__body__context`);
	}
	findBodyOther(e, n = r.open) {
		if (n === r.open) {
			let n = t(`.${this.className}:not(.${this.id})[data-status="${r.flash}"] .${this.className}__body ${e}`);
			if (n) return n;
		}
		return t(`.${this.className}:not(.${this.id})[data-status="${n}"] .${this.className}__body ${e}`);
	}
	static getClassesList(e, t = "id") {
		return {
			block: `${e}--${i.block}`,
			blockChildren: `${e}--${i.blockChildren}`,
			blockOther: `${e}--${i.blockOther}`,
			close: `${e}--${i.close}`,
			static: `${e}--${i.static}`,
			control: `${e}__control`,
			controlId: `${e}__control window__control ${t}`,
			controlStatic: `${e}--${i.controlStatic}`,
			controlOpenOnly: `${e}--${i.controlOpenOnly}`,
			controlActive: `${e}--${i.controlActive}`,
			persistent: `${e}--${i.persistent}`
		};
	}
	static getClassesListByDesign(e) {
		return this.getClassesList(`${e}-window`);
	}
}, s = class {
	constructor(e) {
		this.design = e;
	}
	get() {
		return o.getClassesListByDesign(this.design);
	}
	getObject() {
		return { classesWindow: this.get() };
	}
};
//#endregion
export { a, r as i, o as n, i as r, s as t };

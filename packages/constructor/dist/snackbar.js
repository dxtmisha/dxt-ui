import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { Teleport as t, computed as n, h as r, markRaw as i, shallowRef as a } from "vue";
import { DesignConstructorAbstract as o } from "@dxtmisha/functional";
import { isElementVisible as s } from "@dxtmisha/functional-basic";
//#region src/constructors/Snackbar/SnackbarEvent.ts
var c = class {
	constructor(e) {
		this.emits = e;
	}
	show(e, t) {
		var n;
		(n = this.emits) == null || n.call(this, "show", e, t);
	}
	hide(e, t) {
		var n;
		(n = this.emits) == null || n.call(this, "hide", e, t);
	}
}, l = 0, u = class {
	constructor(t, r, i, o) {
		e(this, "item", a([])), e(this, "isItem", n(() => this.item.value.length > 0)), e(this, "isPriority", n(() => this.isItem.value && this.item.value.findIndex((e) => e.highPriority === !0) !== -1)), e(this, "add", (e) => {
			let t = this.getItemValue(e), n = this.getItemDelay(e);
			this.item.value = [...this.item.value, {
				...e,
				delay: n,
				value: t
			}], this.toScroll(), this.toShow(t, n);
		}), e(this, "remove", (e) => {
			if (this.getItemByValue(e)) {
				let t = this.getElementItem(e);
				t ? (t.addEventListener("transitionend", () => this.toNone(e)), t.classList.add(`${this.className}--hide`), setTimeout(() => this.toNone(e), 512)) : this.toNone(e);
			}
		}), e(this, "clear", () => {
			this.item.value.forEach((e) => e.value && this.remove(e.value));
		}), this.props = t, this.element = r, this.className = i, this.event = o;
	}
	getItemByValue(e) {
		return this.item.value.find((t) => t.value === e);
	}
	getElementItem(e) {
		var t;
		let n = (t = this.element.value) == null ? void 0 : t.querySelector(`[data-snackbar-item="${e}"]`);
		return n == null ? void 0 : n;
	}
	getItemValue(e) {
		var t;
		return (t = e.value) == null ? `snackbar-item-${++l}` : t;
	}
	getItemDelay(e) {
		var t, n;
		return (t = (n = e.delay) == null ? this.props.delay : n) == null ? 1e4 : t;
	}
	toNone(e) {
		let t = this.getItemByValue(e);
		if (t) {
			var n;
			this.item.value = this.item.value.filter((t) => t.value !== e), (n = this.event) == null || n.hide(e, t);
		}
	}
	toShow(e, t) {
		t < 0 || requestAnimationFrame(() => {
			let n = this.getElementItem(e), r = this.getItemByValue(e);
			if (r) if (n && s(n)) {
				var i;
				(i = this.event) == null || i.show(e, r), setTimeout(() => this.remove(e), t + 256);
			} else setTimeout(() => this.toShow(e, t), 128);
		});
	}
	toScroll() {
		requestAnimationFrame(() => {
			this.element.value && (this.element.value.scrollTop = 1e6);
		});
	}
}, d = class {
	constructor(t, n, r, i, a, o, s, l, d) {
		e(this, "data", void 0), e(this, "event", void 0), e(this, "onClose", (e) => this.data.remove(e)), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = l;
		let { DataConstructor: f = u, EventConstructor: p = c } = d == null ? {} : d;
		this.event = new p(l), this.data = new f(t, r, a, this.event);
	}
}, f = { delay: 8e3 }, p = class extends o {
	constructor(t, n, a, o = d) {
		super(t, n, a), e(this, "item", void 0), e(this, "renderData", () => {
			let e = [];
			return this.item.data.item.value.forEach((t) => {
				var n, i, a, o;
				return e.push(r(t.highPriority ? "aside" : "div", {
					key: t.value,
					class: {
						[(n = (i = this.classes) == null ? void 0 : i.value.item) == null ? "item" : n]: !0,
						[(a = (o = this.classes) == null ? void 0 : o.value.priority) == null ? "priority" : a]: t.highPriority
					},
					"data-snackbar-item": t.value
				}, this.renderItem(t)));
			}), e;
		}), e(this, "renderItem", (e) => {
			let t = {
				...e.data,
				value: e.value,
				onClose: this.item.onClose
			};
			return e.component ? r({ ...i(e.component) }, t) : this.components.renderOne("snackbarItem", t, void 0, e.value);
		}), e(this, "renderSpace", () => {
			if (this.item.data.isPriority.value) {
				var e;
				return [r("div", { class: (e = this.classes) == null ? void 0 : e.value.space })];
			}
			return [];
		}), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			isItem: this.item.data.isItem,
			add: this.item.data.add,
			remove: this.item.data.remove,
			clear: this.item.data.clear
		};
	}
	initClasses() {
		return {
			main: {},
			item: this.getSubClass("item"),
			space: this.getSubClass("space"),
			priority: this.getSubClass("priority")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		if (this.item.data.isItem.value) {
			var e;
			return r(t, {
				key: "teleport",
				to: "body"
			}, r("div", {
				...this.getAttrs(),
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.main
			}, [...this.renderData(), ...this.renderSpace()]));
		}
	}
};
//#endregion
export { d as Snackbar, u as SnackbarData, p as SnackbarDesign, c as SnackbarEvent, f as defaultsSnackbar };

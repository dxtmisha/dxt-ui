import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { t as n } from "./TextInclude-CHF8IIwI.js";
import { Teleport as r, computed as i, h as a, markRaw as o, shallowRef as s } from "vue";
import { DesignConstructorAbstract as c } from "@dxtmisha/functional";
import { ResumableTimer as l, isElementVisible as u } from "@dxtmisha/functional-basic";
//#region src/constructors/Snackbar/SnackbarEvent.ts
var d = class {
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
}, f = class {
	constructor(e, n, r, a) {
		t(this, "item", s([])), t(this, "itemNumber", 0), t(this, "isItem", i(() => this.item.value.length > 0)), t(this, "isPriority", i(() => this.isItem.value && this.item.value.findIndex((e) => e.highPriority === !0) !== -1)), t(this, "add", (e) => {
			let t = this.getItemValue(e), n = this.getItemDelay(e);
			this.item.value = [...this.item.value, {
				...e,
				delay: n,
				value: t
			}], this.toScroll(), this.initDisplay(t, n);
		}), t(this, "remove", (e) => {
			if (this.getItemByValue(e)) {
				let t = this.getElementItem(e);
				t ? (t.addEventListener("transitionend", () => this.performHide(e)), t.classList.add(`${this.className}--hide`), setTimeout(() => this.performHide(e), 512)) : this.performHide(e);
			}
		}), t(this, "clear", () => {
			this.item.value.forEach((e) => e.value && this.remove(e.value));
		}), t(this, "pause", () => {
			this.item.value.forEach((e) => {
				var t;
				return (t = e.resumableTimer) == null ? void 0 : t.pause();
			}), console.log("pause");
		}), t(this, "resume", () => {
			this.item.value.forEach((e) => {
				var t;
				return (t = e.resumableTimer) == null ? void 0 : t.resume();
			});
		}), this.props = e, this.element = n, this.className = r, this.event = a;
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
		return (t = e.value) == null ? `snackbar-item-${++this.itemNumber}` : t;
	}
	getItemDelay(e) {
		var t, n;
		return (t = (n = e.delay) == null ? this.props.delay : n) == null ? 1e4 : t;
	}
	addShowItem(e, t) {
		let n = this.getItemByValue(e);
		return n && !n.resumableTimer && (n.resumableTimer = new l(() => this.remove(e), t + 256)), this;
	}
	performHide(e) {
		let t = this.getItemByValue(e);
		if (t) {
			var n, r;
			(n = t.resumableTimer) == null || n.clear(), this.item.value = this.item.value.filter((t) => t.value !== e), (r = this.event) == null || r.hide(e, t);
		}
	}
	initDisplay(e, t) {
		t < 0 || requestAnimationFrame(() => {
			let n = this.getElementItem(e), r = this.getItemByValue(e);
			if (r) if (n && u(n)) {
				var i;
				(i = this.event) == null || i.show(e, r), this.addShowItem(e, t);
			} else setTimeout(() => this.initDisplay(e, t), 128);
		});
	}
	toScroll() {
		requestAnimationFrame(() => {
			this.element.value && (this.element.value.scrollTop = this.element.value.scrollHeight);
		});
	}
}, p = class {
	constructor(r, a, o, s, c, l, u, p, m) {
		t(this, "data", void 0), t(this, "event", void 0), t(this, "text", void 0), t(this, "binds", i(() => ({
			onMouseenter: this.data.pause,
			onMouseleave: this.data.resume,
			tabindex: "0",
			...e.role("region"),
			...e.label(this.text.notifications.value)
		}))), t(this, "onClose", (e) => this.data.remove(e)), this.props = r, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = p;
		let { DataConstructor: h = f, EventConstructor: g = d } = m == null ? {} : m;
		this.event = new g(p), this.data = new h(r, o, c, this.event), this.text = new n(r);
	}
}, m = { delay: 8e3 }, h = class extends c {
	constructor(e, n, r, i = p) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderData", () => {
			let e = [];
			return this.item.data.item.value.forEach((t) => {
				var n, r, i, o;
				return e.push(a(t.highPriority ? "aside" : "div", {
					key: t.value,
					class: {
						[(n = (r = this.classes) == null ? void 0 : r.value.item) == null ? "item" : n]: !0,
						[(i = (o = this.classes) == null ? void 0 : o.value.priority) == null ? "priority" : i]: t.highPriority
					},
					"data-snackbar-item": t.value
				}, this.renderItem(t)));
			}), e;
		}), t(this, "renderItem", (e) => {
			let t = {
				...e.data,
				value: e.value,
				onClose: this.item.onClose
			};
			return e.component ? a({ ...o(e.component) }, t) : this.components.renderOne("snackbarItem", t, void 0, e.value);
		}), t(this, "renderSpace", () => {
			if (this.item.data.isPriority.value) {
				var e;
				return [a("div", { class: (e = this.classes) == null ? void 0 : e.value.space })];
			}
			return [];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
			return a(r, {
				key: "teleport",
				to: "body"
			}, a("div", {
				...this.getAttrs(),
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				...this.item.binds.value
			}, [...this.renderData(), ...this.renderSpace()]));
		}
	}
};
//#endregion
export { p as Snackbar, f as SnackbarData, h as SnackbarDesign, d as SnackbarEvent, m as defaultsSnackbar };

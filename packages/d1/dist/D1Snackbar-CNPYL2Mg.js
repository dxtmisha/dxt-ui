import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { Teleport as t, computed as n, createBlock as r, defineComponent as i, h as a, markRaw as o, mergeDefaults as s, openBlock as c, shallowRef as l, unref as u } from "vue";
import { DesignConstructorAbstract as d, inArray as f } from "@dxtmisha/functional";
import { isElementVisible as p } from "@dxtmisha/functional-basic";
//#region ../constructor/dist/snackbar.js
var m = class {
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
}, h = 0, g = class {
	constructor(t, r, i, a) {
		e(this, "item", l([])), e(this, "isItem", n(() => this.item.value.length > 0)), e(this, "isPriority", n(() => this.isItem.value && this.item.value.findIndex((e) => e.highPriority === !0) !== -1)), e(this, "add", (e) => {
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
		}), this.props = t, this.element = r, this.className = i, this.event = a;
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
		return (t = e.value) == null ? `snackbar-item-${++h}` : t;
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
			if (r) if (n && p(n)) {
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
}, _ = class {
	constructor(t, n, r, i, a, o, s, c, l) {
		e(this, "data", void 0), e(this, "event", void 0), e(this, "onClose", (e) => this.data.remove(e)), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { DataConstructor: u = g, EventConstructor: d = m } = l == null ? {} : l;
		this.event = new d(c), this.data = new u(t, r, a, this.event);
	}
}, v = { delay: 8e3 }, y = class extends d {
	constructor(t, n, r, i = _) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderData", () => {
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
		}), e(this, "renderItem", (e) => {
			let t = {
				...e.data,
				value: e.value,
				onClose: this.item.onClose
			};
			return e.component ? a({ ...o(e.component) }, t) : this.components.renderOne("snackbarItem", t, void 0, e.value);
		}), e(this, "renderSpace", () => {
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
			return a(t, {
				key: "teleport",
				to: "body"
			}, a("div", {
				...this.getAttrs(),
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.main
			}, [...this.renderData(), ...this.renderSpace()]));
		}
	}
}, b = {
	limit: [
		"1",
		"2",
		"4",
		"6",
		"8"
	],
	vertical: ["top", "bottom"],
	horizontal: [
		"right",
		"left",
		"block"
	],
	origin: [
		"topToBottom",
		"bottomToTop",
		"rightToLeft",
		"leftToRight"
	]
}, x = { ...v }, S = /* @__PURE__ */ i({
	name: "D1Snackbar",
	__name: "D1Snackbar",
	props: /* @__PURE__ */ s({
		delay: {},
		full: { type: Boolean },
		all: { type: Boolean },
		limit: {},
		vertical: {},
		horizontal: {},
		origin: {}
	}, x),
	emits: ["show", "hide"],
	setup(e, { expose: t, emit: i }) {
		let a = i, o = e, s = new y("d1.snackbar", o, {
			emits: a,
			classes: n(() => ({ main: {
				"d1-snackbar": !0,
				"d1-snackbar--full": o.full,
				"d1-snackbar--all": o.all,
				[`d1-snackbar--limit--${o.limit}`]: f(b.limit, o.limit),
				[`d1-snackbar--vertical--${o.vertical}`]: f(b.vertical, o.vertical),
				[`d1-snackbar--horizontal--${o.horizontal}`]: f(b.horizontal, o.horizontal),
				[`d1-snackbar--origin--${o.origin}`]: f(b.origin, o.origin)
			} })),
			styles: n(() => ({}))
		}), l = s.render();
		return t(s.expose()), (e, t) => (c(), r(u(l)));
	}
});
//#endregion
export { S as t };

import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./TextInclude-CHF8IIwI-DUWY2jwN.js";
import { t as r } from "./SnackbarItem-D-Exh08L.js";
import { Teleport as i, computed as a, createBlock as o, defineComponent as s, h as c, markRaw as l, mergeDefaults as u, openBlock as d, shallowRef as f, unref as p } from "vue";
import { DesignConstructorAbstract as m, inArray as h } from "@dxtmisha/functional";
import { ResumableTimer as g, isElementVisible as _ } from "@dxtmisha/functional-basic";
//#region ../constructor/dist/snackbar.js
var v = class {
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
}, y = class {
	constructor(t, n, r, i) {
		e(this, "item", f([])), e(this, "itemNumber", 0), e(this, "isItem", a(() => this.item.value.length > 0)), e(this, "isPriority", a(() => this.isItem.value && this.item.value.findIndex((e) => e.highPriority === !0) !== -1)), e(this, "add", (e) => {
			let t = this.getItemValue(e), n = this.getItemDelay(e);
			this.item.value = [...this.item.value, {
				...e,
				delay: n,
				value: t
			}], this.toScroll(), this.initDisplay(t, n);
		}), e(this, "remove", (e) => {
			if (this.getItemByValue(e)) {
				let t = this.getElementItem(e);
				t ? (t.addEventListener("transitionend", () => this.performHide(e)), t.classList.add(`${this.className}--hide`), setTimeout(() => this.performHide(e), 512)) : this.performHide(e);
			}
		}), e(this, "clear", () => {
			this.item.value.forEach((e) => e.value && this.remove(e.value));
		}), e(this, "pause", () => {
			this.item.value.forEach((e) => {
				var t;
				return (t = e.resumableTimer) == null ? void 0 : t.pause();
			}), console.log("pause");
		}), e(this, "resume", () => {
			this.item.value.forEach((e) => {
				var t;
				return (t = e.resumableTimer) == null ? void 0 : t.resume();
			});
		}), this.props = t, this.element = n, this.className = r, this.event = i;
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
		return n && !n.resumableTimer && (n.resumableTimer = new g(() => this.remove(e), t + 256)), this;
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
			if (r) if (n && _(n)) {
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
}, b = class {
	constructor(r, i, o, s, c, l, u, d, f) {
		e(this, "data", void 0), e(this, "event", void 0), e(this, "text", void 0), e(this, "binds", a(() => ({
			onMouseenter: this.data.pause,
			onMouseleave: this.data.resume,
			tabindex: "0",
			...t.role("region"),
			...t.label(this.text.notifications.value)
		}))), e(this, "onClose", (e) => this.data.remove(e)), this.props = r, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { DataConstructor: p = y, EventConstructor: m = v } = f == null ? {} : f;
		this.event = new m(d), this.data = new p(r, o, c, this.event), this.text = new n(r);
	}
}, x = { delay: 8e3 }, S = class extends m {
	constructor(t, n, r, i = b) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderData", () => {
			let e = [];
			return this.item.data.item.value.forEach((t) => {
				var n, r, i, a;
				return e.push(c(t.highPriority ? "aside" : "div", {
					key: t.value,
					class: {
						[(n = (r = this.classes) == null ? void 0 : r.value.item) == null ? "item" : n]: !0,
						[(i = (a = this.classes) == null ? void 0 : a.value.priority) == null ? "priority" : i]: t.highPriority
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
			return e.component ? c({ ...l(e.component) }, t) : this.components.renderOne("snackbarItem", t, void 0, e.value);
		}), e(this, "renderSpace", () => {
			if (this.item.data.isPriority.value) {
				var e;
				return [c("div", { class: (e = this.classes) == null ? void 0 : e.value.space })];
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
			return c(i, {
				key: "teleport",
				to: "body"
			}, c("div", {
				...this.getAttrs(),
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				...this.item.binds.value
			}, [...this.renderData(), ...this.renderSpace()]));
		}
	}
}, C = {
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
}, w = { ...x }, T = /* @__PURE__ */ s({
	name: "D1Snackbar",
	__name: "D1Snackbar",
	props: /* @__PURE__ */ u({
		textNotifications: { type: [String, Function] },
		delay: {},
		full: { type: Boolean },
		all: { type: Boolean },
		limit: {},
		vertical: {},
		horizontal: {},
		origin: {}
	}, w),
	emits: ["show", "hide"],
	setup(e, { expose: t, emit: n }) {
		let i = n, s = e, c = new S("d1.snackbar", s, {
			emits: i,
			classes: a(() => ({ main: {
				"d1-snackbar": !0,
				"d1-snackbar--full": s.full,
				"d1-snackbar--all": s.all,
				[`d1-snackbar--limit--${s.limit}`]: h(C.limit, s.limit),
				[`d1-snackbar--vertical--${s.vertical}`]: h(C.vertical, s.vertical),
				[`d1-snackbar--horizontal--${s.horizontal}`]: h(C.horizontal, s.horizontal),
				[`d1-snackbar--origin--${s.origin}`]: h(C.origin, s.origin)
			} })),
			styles: a(() => ({})),
			components: { snackbarItem: r }
		}), l = c.render();
		return t(c.expose()), (e, t) => (d(), o(p(l)));
	}
});
//#endregion
export { T as t };

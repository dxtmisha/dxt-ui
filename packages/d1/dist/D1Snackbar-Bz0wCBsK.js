import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t } from "./SnackbarItem-Essh-9l2.js";
import { Teleport as n, computed as r, createBlock as i, defineComponent as a, h as o, markRaw as s, mergeDefaults as c, openBlock as l, shallowRef as u, unref as d } from "vue";
import { DesignConstructorAbstract as f, inArray as p } from "@dxtmisha/functional";
import { isElementVisible as m } from "@dxtmisha/functional-basic";
//#region ../constructor/dist/snackbar.js
var h = 0, g = class {
	constructor(t, n, i) {
		e(this, "item", u([])), e(this, "isItem", r(() => this.item.value.length > 0)), e(this, "isPriority", r(() => this.isItem.value && this.item.value.findIndex((e) => e.highPriority === !0) !== -1)), e(this, "add", (e) => {
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
		}), this.props = t, this.element = n, this.className = i;
	}
	getElementItem(e) {
		var t;
		let n = (t = this.element.value) == null ? void 0 : t.querySelector(`[data-snackbar-item="${e}"]`);
		return n == null ? void 0 : n;
	}
	getItemByValue(e) {
		return this.item.value.find((t) => t.value === e);
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
		this.item.value = this.item.value.filter((t) => t.value !== e);
	}
	toShow(e, t) {
		requestAnimationFrame(() => {
			if (t > 0) {
				let n = this.getElementItem(e);
				n && m(n) ? n.addEventListener("animationend", () => {
					setTimeout(() => this.remove(e), t);
				}) : this.toShow(e, t);
			}
		});
	}
	toScroll() {
		requestAnimationFrame(() => {
			this.element.value && (this.element.value.scrollTop = 1e6);
		});
	}
}, _ = class {
	constructor(t, n, r, i, a, o, s, c, l) {
		e(this, "data", void 0), e(this, "onClose", (e) => this.data.remove(e)), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { DataConstructor: u = g } = l == null ? {} : l;
		this.data = new u(t, r, a);
	}
}, v = { delay: 8e3 }, y = class extends f {
	constructor(t, n, r, i = _) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderData", () => {
			let e = [];
			return this.item.data.item.value.forEach((t) => {
				var n, r, i, a;
				return e.push(o(t.highPriority ? "aside" : "div", {
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
			return e.component ? o({ ...s(e.component) }, t) : this.components.renderOne("snackbarItem", t, void 0, e.value);
		}), e(this, "renderSpace", () => {
			if (this.item.data.isPriority.value) {
				var e;
				return [o("div", { class: (e = this.classes) == null ? void 0 : e.value.space })];
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
			return o(n, {
				key: "teleport",
				to: "body"
			}, o("div", {
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
}, x = { ...v }, S = /* @__PURE__ */ a({
	name: "D1Snackbar",
	__name: "D1Snackbar",
	props: /* @__PURE__ */ c({
		delay: {},
		full: { type: Boolean },
		all: { type: Boolean },
		limit: {},
		vertical: {},
		horizontal: {},
		origin: {}
	}, x),
	emits: ["show", "hide"],
	setup(e, { expose: n, emit: a }) {
		let o = a, s = e, c = new y("d1.snackbar", s, {
			emits: o,
			classes: r(() => ({ main: {
				"d1-snackbar": !0,
				"d1-snackbar--full": s.full,
				"d1-snackbar--all": s.all,
				[`d1-snackbar--limit--${s.limit}`]: p(b.limit, s.limit),
				[`d1-snackbar--vertical--${s.vertical}`]: p(b.vertical, s.vertical),
				[`d1-snackbar--horizontal--${s.horizontal}`]: p(b.horizontal, s.horizontal),
				[`d1-snackbar--origin--${s.origin}`]: p(b.origin, s.origin)
			} })),
			styles: r(() => ({})),
			components: { snackbarItem: t }
		}), u = c.render();
		return n(c.expose()), (e, t) => (l(), i(d(u)));
	}
});
//#endregion
export { S as t };

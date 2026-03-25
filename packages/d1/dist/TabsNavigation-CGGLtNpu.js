import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t as n } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as r } from "./HorizontalScroll-Dp4GiHHd.js";
import { t as i } from "./TabItem-D9ZS-tc-.js";
import { computed as a, createBlock as o, defineComponent as s, mergeDefaults as c, nextTick as l, onMounted as u, openBlock as d, ref as f, toRef as p, unref as m, watch as h } from "vue";
import { DesignConstructorAbstract as g, EventItem as _, ListDataRef as v, getElementId as y, getRef as b, isDomRuntime as x, isSelected as S, toArray as C, toBinds as w } from "@dxtmisha/functional";
//#region ../constructor/dist/tabsNavigation.js
var T = Object.defineProperty, E = (e, t, n) => t in e ? T(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, D = (e, t, n) => E(e, typeof t == "symbol" ? t : t + "", n), O = class {
	constructor(e, t, n, r, i) {
		D(this, "element", f()), D(this, "elementHtml", a(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.elementHtml;
		})), D(this, "binds", a(() => w(b(this.extra), {
			ref: this.element,
			flush: this.props.horizontalScrollFlush,
			align: this.props.horizontalScrollAlign
		}, this.props.horizontalScrollAttrs))), D(this, "toSelected", () => {
			var e, t;
			(t = (e = this.element.value) == null ? void 0 : e.toSelected) == null || t.call(e);
		}), D(this, "render", (e, t) => {
			var n;
			return this.components ? this.components.render("horizontalScroll", {
				...this.binds.value,
				...b(t)
			}, e, (n = this.index) == null ? "horizontalScroll" : n) : [];
		}), this.props = e, this.className = t, this.components = n, this.extra = r, this.index = i;
	}
}, k = class {
	constructor(e) {
		D(this, "item", f()), D(this, "actualItem", f()), this.props = e, this.item.value = e.selected, this.actualItem.value = e.selected;
	}
	isSelected(e) {
		return S(e, this.actualItem.value);
	}
	set(e) {
		return this.item.value = e, this;
	}
	setActual(e) {
		return this.actualItem.value = e, this;
	}
}, A = class {
	constructor(e, t) {
		D(this, "item", f()), this.element = e, this.selected = t;
	}
	get() {
		if (this.item.value) return String(this.item.value);
	}
	apply() {
		return this.selected.set(this.item.value), this;
	}
	set(e) {
		var t;
		return this.item.value = e, (t = this.getElement()) == null || t.focus(), this;
	}
	position() {
		var e;
		return this.item.value = (e = C(this.selected.actualItem.value)) == null ? void 0 : e[0], this;
	}
	reset() {
		return this.item.value = void 0, this;
	}
	getElement() {
		var e;
		if (this.item.value) return ((e = this.element.value) == null ? void 0 : e.querySelector(`[data-value="${this.item.value}"]`)) || void 0;
	}
}, j = class {
	constructor(e, t) {
		D(this, "ids", a(() => {
			let e = {};
			return this.data.fullData.value.forEach((t) => {
				e[t.value] = y();
			}), e;
		})), this.props = e, this.data = t;
	}
	getIdByValue(e) {
		var t;
		return (t = this.ids.value[e == null ? "" : e]) == null ? String(e) : t;
	}
}, M = class {
	constructor(e, t, n, r, i, a) {
		D(this, "go", async (e, t) => {
			await l();
			let n = this.getItem(e), r = this.getItem(t);
			if (n && r) {
				let e = `${this.classDesign}-${this.getItemClassName()}`, t = n.getBoundingClientRect(), i = r.getBoundingClientRect(), a = i.left - t.left, o = `${a}px ${a >= 0 ? "-" : "+"} var(--${e}-gap, 0px)`;
				n.style.setProperty(`--${e}-sys-left`, o), n.style.setProperty(`--${e}-sys-width`, i.width + "px"), this.reset(n);
			}
			requestAnimationFrame(() => {
				this.selected.setActual(e);
			});
		}), D(this, "reset", (e) => {
			setTimeout(() => {
				e.style.removeProperty(`--${this.className}-sys-left`), e.style.removeProperty(`--${this.className}-sys-width`);
			}, 384);
		}), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.selected = a, h(this.selected.item, (e, t) => this.go(e, t)), l().then(() => requestAnimationFrame(() => {
			var e, t;
			n.value && (n.value.scrollLeft = (t = (e = this.getItem(this.selected.item.value)) == null ? void 0 : e.offsetLeft) == null ? 0 : t);
		}));
	}
	getItemClassName() {
		return "tabItem";
	}
	getItem(e) {
		var t;
		return ((t = this.element.value) == null ? void 0 : t.querySelector(`[data-value="${e == null ? "" : e}"]`)) || void 0;
	}
}, N = class {
	constructor(e, t, n) {
		D(this, "event"), D(this, "onFocus", () => {
			this.start();
		}), D(this, "onBlur", () => {
			this.stop();
		}), D(this, "on", (e) => {
			if (this.data.getLength()) switch (e.code || e.key || e.keyCode) {
				case "ArrowLeft":
				case "Left":
				case 37:
					e.preventDefault(), this.prev();
					break;
				case "ArrowRight":
				case "Right":
				case 39:
					e.preventDefault(), this.next();
					break;
				case "Enter":
				case 13:
				case "Space":
				case "Spacebar":
				case " ":
				case 32:
					e.preventDefault(), this.selected.set(this.focus.item.value);
					break;
			}
		}), this.selected = e, this.focus = t, this.data = n;
	}
	get binds() {
		return {
			onFocus: this.onFocus,
			onBlur: this.onBlur
		};
	}
	getFirstItem() {
		var e;
		return (e = this.data.getFirstItemByParent(void 0)) == null ? void 0 : e.index;
	}
	getFocus() {
		return this.focus.get() || this.getFirstItem();
	}
	start() {
		x() && (this.event || (this.event = new _(document.body, ["keydown"], this.on)), this.focus.position(), this.event.start());
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0, this.focus.reset());
	}
	prev() {
		var e;
		let t = this.getFocus();
		return t && this.focus.set((e = this.data.getIndexPrev(t)) == null ? void 0 : e.index), this;
	}
	next() {
		var e;
		let t = this.getFocus();
		return t && this.focus.set((e = this.data.getIndexNext(t)) == null ? void 0 : e.index), this;
	}
}, P = class {
	constructor(r, i, o, s, c, l, d, f, m) {
		D(this, "scroll"), D(this, "selected"), D(this, "focus"), D(this, "data"), D(this, "ids"), D(this, "indicator"), D(this, "control"), D(this, "event"), D(this, "binds", a(() => ({
			tabindex: 0,
			...this.control.binds,
			...n.role("tablist")
		}))), D(this, "onClick", (e, t) => {
			this.selected.set(t == null ? void 0 : t.value), this.event.onClick(e, t);
		}), this.props = r, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = d, this.emits = f;
		let { EventClickIncludeConstructor: g = e, HorizontalScrollIncludeConstructor: _ = O, ListDataRefConstructor: y = v, ModelIncludeConstructor: b = t, TabsNavigationControlConstructor: x = N, TabsNavigationIdsConstructor: S = j, TabsNavigationFocusConstructor: C = A, TabsNavigationIndicatorConstructor: w = M, TabsNavigationSelectedConstructor: T = k } = m == null ? {} : m;
		this.scroll = new _(this.props, this.className, this.components), this.selected = new T(this.props), this.focus = new C(this.element, this.selected), this.data = new y(p(this.props, "list"), this.focus.item, void 0, void 0, void 0, this.selected.actualItem, this.refs.keyValue, this.refs.keyLabel), this.ids = new S(this.props, this.data), this.indicator = new w(this.props, this.refs, this.scroll.elementHtml, this.classDesign, this.className, this.selected), this.control = new x(this.selected, this.focus, this.data), this.event = new g(void 0, void 0, this.emits), new b("selected", this.emits, this.selected.item), this.initSelected(), u(() => {
			h([i.selected], () => this.selected.set(r.selected), { immediate: !0 });
		});
	}
	initSelected() {
		this.props.selected || this.selected.set(this.control.getFirstItem());
	}
}, F = {
	horizontalScrollFlush: !0,
	horizontalScrollAlign: "left"
}, I = class extends g {
	constructor(e, t, n, r = P) {
		super(e, t, n), D(this, "item"), D(this, "renderList", (e) => {
			let t = [];
			return this.initSlot("leading", t), this.item.data.fullData.value.forEach((n) => t.push(this.renderItem(e, n))), this.initSlot("trailing", t), t;
		}), D(this, "renderItem", (e, t) => {
			let n = this.item.selected.isSelected(t.index);
			return this.components.renderOne("tabItem", w({
				tag: this.props.tag,
				key: t.index
			}, this.props.itemAttrs, t, e.binds, {
				id: this.item.ids.getIdByValue(t.value),
				onClick: this.item.onClick,
				class: { [e.classItemSelected]: n }
			}));
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ids: this.item.ids.ids };
	}
	initClasses() {
		return { main: {} };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.scroll.render({ default: this.renderList }, {
			...this.item.binds.value,
			class: (e = this.classes) == null ? void 0 : e.value.main
		});
	}
}, L = {
	...F,
	divider: !0
}, R = /* @__PURE__ */ s({
	name: "D1TabsNavigation",
	__name: "D1TabsNavigation",
	props: /* @__PURE__ */ c({
		horizontalScrollFlush: { type: Boolean },
		horizontalScrollAlign: {},
		horizontalScrollAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		list: {},
		tag: {},
		keyLabel: {},
		keyValue: {},
		itemAttrs: {},
		focus: { type: Boolean },
		divider: { type: Boolean }
	}, L),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected"
	],
	setup(e, { expose: t, emit: n }) {
		let s = n, c = e, l = new I("d1.tabsNavigation", c, {
			emits: s,
			classes: a(() => ({ main: {
				"d1-tabsNavigation": !0,
				"d1-tabsNavigation--focus": c.focus,
				"d1-tabsNavigation--divider": c.divider
			} })),
			styles: a(() => ({})),
			components: {
				horizontalScroll: r,
				tabItem: i
			}
		}), u = l.render();
		return t(l.expose()), (e, t) => (d(), o(m(u)));
	}
});
//#endregion
export { R as t };

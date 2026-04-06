import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-Cb8myFDE.js";
import { t as n } from "./ModelInclude-D8LkrhPp-CIue56kI.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as i, t as a } from "./HorizontalScroll-RXBiZ7YC.js";
import { t as o } from "./TabItem-ChqVRhYU.js";
import { computed as s, createBlock as c, defineComponent as l, mergeDefaults as u, nextTick as d, onMounted as f, openBlock as p, ref as m, toRef as h, unref as g, watch as _ } from "vue";
import { DesignConstructorAbstract as v, EventItem as y, ListDataRef as b, getBind as x, getElementId as S, getRef as C, isDomRuntime as w, isSelected as T, toArray as E, toBinds as D } from "@dxtmisha/functional";
//#region ../constructor/dist/TabsNavigationInclude-DU9Nb7hG.js
var O = class {
	constructor(t, n, r, i, a) {
		e(this, "element", m()), e(this, "binds", s(() => D(C(this.extra), {
			class: `${this.className}__tabsNavigation`,
			itemAttrs: this.props.tabItemAttrs
		}, x(this.props.tabs, "list"), this.props.tabsNavigationAttrs))), e(this, "ids", s(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.ids;
		})), e(this, "render", (e, t) => this.components ? this.components.render("tabsNavigation", D(t, this.binds.value, { ref: this.element }), e, this.index) : []), this.props = t, this.className = n, this.components = r, this.extra = i, this.index = a;
	}
}, k = class {
	constructor(t) {
		e(this, "item", m()), e(this, "actualItem", m()), this.props = t, this.item.value = t.selected, this.actualItem.value = t.selected;
	}
	isSelected(e) {
		return T(e, this.actualItem.value);
	}
	set(e) {
		return this.item.value = e, this;
	}
	setActual(e) {
		return this.actualItem.value = e, this;
	}
}, A = class {
	constructor(t, n) {
		e(this, "item", m()), this.element = t, this.selected = n;
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
		return this.item.value = (e = E(this.selected.actualItem.value)) == null ? void 0 : e[0], this;
	}
	reset() {
		return this.item.value = void 0, this;
	}
	getElement() {
		if (this.item.value) {
			var e;
			return ((e = this.element.value) == null ? void 0 : e.querySelector(`[data-value="${this.item.value}"]`)) || void 0;
		}
	}
}, j = class {
	constructor(t, n) {
		e(this, "ids", s(() => {
			let e = {};
			return this.data.fullData.value.forEach((t) => {
				e[t.value] = S();
			}), e;
		})), this.props = t, this.data = n;
	}
	getIdByValue(e) {
		var t;
		return (t = this.ids.value[e == null ? "" : e]) == null ? String(e) : t;
	}
}, M = class {
	constructor(t, n, r, i, a, o) {
		e(this, "go", async (e, t) => {
			await d();
			let n = this.getItem(e), r = this.getItem(t);
			if (n && r) {
				let e = `${this.classDesign}-${this.getItemClassName()}`, t = n.getBoundingClientRect(), i = r.getBoundingClientRect(), a = i.left - t.left, o = `${a}px ${a >= 0 ? "-" : "+"} var(--${e}-gap, 0px)`;
				n.style.setProperty(`--${e}-sys-left`, o), n.style.setProperty(`--${e}-sys-width`, i.width + "px"), this.reset(n);
			}
			requestAnimationFrame(() => {
				this.selected.setActual(e);
			});
		}), e(this, "reset", (e) => {
			setTimeout(() => {
				e.style.removeProperty(`--${this.className}-sys-left`), e.style.removeProperty(`--${this.className}-sys-width`);
			}, 384);
		}), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.selected = o, _(this.selected.item, (e, t) => this.go(e, t)), d().then(() => requestAnimationFrame(() => {
			if (r.value) {
				var e, t;
				r.value.scrollLeft = (e = (t = this.getItem(this.selected.item.value)) == null ? void 0 : t.offsetLeft) == null ? 0 : e;
			}
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
	constructor(t, n, r) {
		e(this, "event", void 0), e(this, "onFocus", () => {
			this.start();
		}), e(this, "onBlur", () => {
			this.stop();
		}), e(this, "on", (e) => {
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
		}), this.selected = t, this.focus = n, this.data = r;
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
		w() && (this.event || (this.event = new y(document.body, ["keydown"], this.on)), this.focus.position(), this.event.start());
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0, this.focus.reset());
	}
	prev() {
		let e = this.getFocus();
		if (e) {
			var t;
			this.focus.set((t = this.data.getIndexPrev(e)) == null ? void 0 : t.index);
		}
		return this;
	}
	next() {
		let e = this.getFocus();
		if (e) {
			var t;
			this.focus.set((t = this.data.getIndexNext(e)) == null ? void 0 : t.index);
		}
		return this;
	}
}, P = class {
	constructor(a, o, c, l, u, d, p, m, g) {
		e(this, "scroll", void 0), e(this, "selected", void 0), e(this, "focus", void 0), e(this, "data", void 0), e(this, "ids", void 0), e(this, "indicator", void 0), e(this, "control", void 0), e(this, "event", void 0), e(this, "binds", s(() => ({
			tabindex: 0,
			...this.control.binds,
			...r.role("tablist")
		}))), e(this, "onClick", (e, t) => {
			this.selected.set(t == null ? void 0 : t.value), this.event.onClick(e, t);
		}), this.props = a, this.refs = o, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = p, this.emits = m;
		let { EventClickIncludeConstructor: v = t, HorizontalScrollIncludeConstructor: y = i, ListDataRefConstructor: x = b, ModelIncludeConstructor: S = n, TabsNavigationControlConstructor: C = N, TabsNavigationIdsConstructor: w = j, TabsNavigationFocusConstructor: T = A, TabsNavigationIndicatorConstructor: E = M, TabsNavigationSelectedConstructor: D = k } = g == null ? {} : g;
		this.scroll = new y(this.props, this.className, this.components), this.selected = new D(this.props), this.focus = new T(this.element, this.selected), this.data = new x(h(this.props, "list"), this.focus.item, void 0, void 0, void 0, this.selected.actualItem, this.refs.keyValue, this.refs.keyLabel), this.ids = new w(this.props, this.data), this.indicator = new E(this.props, this.refs, this.scroll.elementHtml, this.classDesign, this.className, this.selected), this.control = new C(this.selected, this.focus, this.data), this.event = new v(void 0, void 0, this.emits), new S("selected", this.emits, this.selected.item), this.initSelected(), f(() => {
			_([o.selected], () => this.selected.set(a.selected), { immediate: !0 });
		});
	}
	initSelected() {
		this.props.selected || this.selected.set(this.control.getFirstItem());
	}
}, F = {
	horizontalScrollFlush: !0,
	horizontalScrollAlign: "left"
}, I = class extends v {
	constructor(t, n, r, i = P) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", (e) => {
			let t = [];
			return this.initSlot("leading", t), this.item.data.fullData.value.forEach((n) => t.push(this.renderItem(e, n))), this.initSlot("trailing", t), t;
		}), e(this, "renderItem", (e, t) => {
			let n = this.item.selected.isSelected(t.index);
			return this.components.renderOne("tabItem", D({
				tag: this.props.tag,
				key: t.index
			}, this.props.itemAttrs, t, e.binds, {
				id: this.item.ids.getIdByValue(t.value),
				onClick: this.item.onClick,
				class: { [e.classItemSelected]: n }
			}));
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, R = /* @__PURE__ */ l({
	name: "D1TabsNavigation",
	__name: "D1TabsNavigation",
	props: /* @__PURE__ */ u({
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
		let r = n, i = e, l = new I("d1.tabsNavigation", i, {
			emits: r,
			classes: s(() => ({ main: {
				"d1-tabsNavigation": !0,
				"d1-tabsNavigation--focus": i.focus,
				"d1-tabsNavigation--divider": i.divider
			} })),
			styles: s(() => ({})),
			components: {
				horizontalScroll: a,
				tabItem: o
			}
		}), u = l.render();
		return t(l.expose()), (e, t) => (p(), c(g(u)));
	}
});
//#endregion
export { O as n, R as t };

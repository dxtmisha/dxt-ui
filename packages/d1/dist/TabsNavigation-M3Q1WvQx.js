import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { r as t } from "./D1Icon-m4nYEnhh.js";
import { t as n } from "./ModelInclude-ZrPu5V5T-BdFUphAW.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as i } from "./HorizontalScroll--g0eA2nS.js";
import { t as a } from "./TabItem-Bii7PJR2.js";
import { computed as o, createBlock as s, defineComponent as c, mergeDefaults as l, nextTick as u, onMounted as d, openBlock as f, ref as p, toRef as m, unref as h, watch as g } from "vue";
import { DesignConstructorAbstract as _, EventItem as v, ListDataRef as y, getElementId as b, getRef as x, isDomRuntime as S, isSelected as C, toArray as w, toBinds as T } from "@dxtmisha/functional";
//#region ../constructor/dist/tabsNavigation.js
var E = class {
	constructor(t, n, r, i, a) {
		e(this, "element", p()), e(this, "elementHtml", o(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.elementHtml;
		})), e(this, "binds", o(() => T(x(this.extra), {
			ref: this.element,
			flush: this.props.horizontalScrollFlush,
			align: this.props.horizontalScrollAlign
		}, this.props.horizontalScrollAttrs))), e(this, "toSelected", () => {
			var e, t;
			(e = this.element.value) == null || (t = e.toSelected) == null || t.call(e);
		}), e(this, "render", (e, t) => {
			if (this.components) {
				var n;
				return this.components.render("horizontalScroll", {
					...this.binds.value,
					...x(t)
				}, e, (n = this.index) == null ? "horizontalScroll" : n);
			}
			return [];
		}), this.props = t, this.className = n, this.components = r, this.extra = i, this.index = a;
	}
}, D = class {
	constructor(t) {
		e(this, "item", p()), e(this, "actualItem", p()), this.props = t, this.item.value = t.selected, this.actualItem.value = t.selected;
	}
	isSelected(e) {
		return C(e, this.actualItem.value);
	}
	set(e) {
		return this.item.value = e, this;
	}
	setActual(e) {
		return this.actualItem.value = e, this;
	}
}, O = class {
	constructor(t, n) {
		e(this, "item", p()), this.element = t, this.selected = n;
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
		return this.item.value = (e = w(this.selected.actualItem.value)) == null ? void 0 : e[0], this;
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
}, k = class {
	constructor(t, n) {
		e(this, "ids", o(() => {
			let e = {};
			return this.data.fullData.value.forEach((t) => {
				e[t.value] = b();
			}), e;
		})), this.props = t, this.data = n;
	}
	getIdByValue(e) {
		var t;
		return (t = this.ids.value[e == null ? "" : e]) == null ? String(e) : t;
	}
}, A = class {
	constructor(t, n, r, i, a, o) {
		e(this, "go", async (e, t) => {
			await u();
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
		}), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.selected = o, g(this.selected.item, (e, t) => this.go(e, t)), u().then(() => requestAnimationFrame(() => {
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
}, j = class {
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
		S() && (this.event || (this.event = new v(document.body, ["keydown"], this.on)), this.focus.position(), this.event.start());
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
}, M = class {
	constructor(i, a, s, c, l, u, f, p, h) {
		e(this, "scroll", void 0), e(this, "selected", void 0), e(this, "focus", void 0), e(this, "data", void 0), e(this, "ids", void 0), e(this, "indicator", void 0), e(this, "control", void 0), e(this, "event", void 0), e(this, "binds", o(() => ({
			tabindex: 0,
			...this.control.binds,
			...r.role("tablist")
		}))), e(this, "onClick", (e, t) => {
			this.selected.set(t == null ? void 0 : t.value), this.event.onClick(e, t);
		}), this.props = i, this.refs = a, this.element = s, this.classDesign = c, this.className = l, this.components = u, this.slots = f, this.emits = p;
		let { EventClickIncludeConstructor: _ = t, HorizontalScrollIncludeConstructor: v = E, ListDataRefConstructor: b = y, ModelIncludeConstructor: x = n, TabsNavigationControlConstructor: S = j, TabsNavigationIdsConstructor: C = k, TabsNavigationFocusConstructor: w = O, TabsNavigationIndicatorConstructor: T = A, TabsNavigationSelectedConstructor: M = D } = h == null ? {} : h;
		this.scroll = new v(this.props, this.className, this.components), this.selected = new M(this.props), this.focus = new w(this.element, this.selected), this.data = new b(m(this.props, "list"), this.focus.item, void 0, void 0, void 0, this.selected.actualItem, this.refs.keyValue, this.refs.keyLabel), this.ids = new C(this.props, this.data), this.indicator = new T(this.props, this.refs, this.scroll.elementHtml, this.classDesign, this.className, this.selected), this.control = new S(this.selected, this.focus, this.data), this.event = new _(void 0, void 0, this.emits), new x("selected", this.emits, this.selected.item), this.initSelected(), d(() => {
			g([a.selected], () => this.selected.set(i.selected), { immediate: !0 });
		});
	}
	initSelected() {
		this.props.selected || this.selected.set(this.control.getFirstItem());
	}
}, N = {
	horizontalScrollFlush: !0,
	horizontalScrollAlign: "left"
}, P = class extends _ {
	constructor(t, n, r, i = M) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", (e) => {
			let t = [];
			return this.initSlot("leading", t), this.item.data.fullData.value.forEach((n) => t.push(this.renderItem(e, n))), this.initSlot("trailing", t), t;
		}), e(this, "renderItem", (e, t) => {
			let n = this.item.selected.isSelected(t.index);
			return this.components.renderOne("tabItem", T({
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
}, F = {
	...N,
	divider: !0
}, I = /* @__PURE__ */ c({
	name: "D1TabsNavigation",
	__name: "D1TabsNavigation",
	props: /* @__PURE__ */ l({
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
	}, F),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, c = e, l = new P("d1.tabsNavigation", c, {
			emits: r,
			classes: o(() => ({ main: {
				"d1-tabsNavigation": !0,
				"d1-tabsNavigation--focus": c.focus,
				"d1-tabsNavigation--divider": c.divider
			} })),
			styles: o(() => ({})),
			components: {
				horizontalScroll: i,
				tabItem: a
			}
		}), u = l.render();
		return t(l.expose()), (e, t) => (f(), s(h(u)));
	}
});
//#endregion
export { I as t };

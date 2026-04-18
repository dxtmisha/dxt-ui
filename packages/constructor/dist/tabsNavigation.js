import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-Bjg6wMoX.js";
import { t as n } from "./EventClickInclude-DB06AUmN.js";
import { t as r } from "./ModelInclude-D1hAxOaY.js";
import { t as i } from "./HorizontalScrollInclude-CuXlNVgy.js";
import { t as a } from "./TabsNavigationInclude-DgbUQdEF.js";
import { computed as o, nextTick as s, onMounted as c, ref as l, toRef as u, watch as d } from "vue";
import { DesignConstructorAbstract as f, EventItem as p, ListDataRef as m, getElementId as h, isDomRuntime as g, isSelected as _, toArray as v, toBinds as y } from "@dxtmisha/functional";
//#region src/constructors/TabsNavigation/TabsNavigationSelected.ts
var b = class {
	constructor(e) {
		t(this, "item", l()), t(this, "actualItem", l()), this.props = e, this.item.value = e.selected, this.actualItem.value = e.selected;
	}
	isSelected(e) {
		return _(e, this.actualItem.value);
	}
	set(e) {
		return this.item.value = e, this;
	}
	setActual(e) {
		return this.actualItem.value = e, this;
	}
}, x = class {
	constructor(e, n) {
		t(this, "item", l()), this.element = e, this.selected = n;
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
		return this.item.value = (e = v(this.selected.actualItem.value)) == null ? void 0 : e[0], this;
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
}, S = class {
	constructor(e, n) {
		t(this, "ids", o(() => {
			let e = {};
			return this.data.fullData.value.forEach((t) => {
				e[t.value] = h();
			}), e;
		})), this.props = e, this.data = n;
	}
	getIdByValue(e) {
		var t;
		return (t = this.ids.value[e == null ? "" : e]) == null ? String(e) : t;
	}
}, C = class {
	constructor(e, n, r, i, a, o) {
		t(this, "go", async (e, t) => {
			await s();
			let n = this.getItem(e), r = this.getItem(t);
			if (n && r) {
				let e = `${this.classDesign}-${this.getItemClassName()}`, t = n.getBoundingClientRect(), i = r.getBoundingClientRect(), a = i.left - t.left, o = `${a}px ${a >= 0 ? "-" : "+"} var(--${e}-gap, 0px)`;
				n.style.setProperty(`--${e}-sys-left`, o), n.style.setProperty(`--${e}-sys-width`, i.width + "px"), this.reset(n);
			}
			requestAnimationFrame(() => {
				this.selected.setActual(e);
			});
		}), t(this, "reset", (e) => {
			setTimeout(() => {
				e.style.removeProperty(`--${this.className}-sys-left`), e.style.removeProperty(`--${this.className}-sys-width`);
			}, 384);
		}), this.props = e, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.selected = o, d(this.selected.item, (e, t) => this.go(e, t)), s().then(() => requestAnimationFrame(() => {
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
}, w = class {
	constructor(e, n, r) {
		t(this, "event", void 0), t(this, "onFocus", () => {
			this.start();
		}), t(this, "onBlur", () => {
			this.stop();
		}), t(this, "on", (e) => {
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
		}), this.selected = e, this.focus = n, this.data = r;
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
		g() && (this.event || (this.event = new p(document.body, ["keydown"], this.on)), this.focus.position(), this.event.start());
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
}, T = class {
	constructor(a, s, l, f, p, h, g, _, v) {
		t(this, "scroll", void 0), t(this, "selected", void 0), t(this, "focus", void 0), t(this, "data", void 0), t(this, "ids", void 0), t(this, "indicator", void 0), t(this, "control", void 0), t(this, "event", void 0), t(this, "binds", o(() => ({
			tabindex: 0,
			...this.control.binds,
			...e.role("tablist")
		}))), t(this, "onClick", (e, t) => {
			this.selected.set(t == null ? void 0 : t.value), this.event.onClick(e, t);
		}), this.props = a, this.refs = s, this.element = l, this.classDesign = f, this.className = p, this.components = h, this.slots = g, this.emits = _;
		let { EventClickIncludeConstructor: y = n, HorizontalScrollIncludeConstructor: T = i, ListDataRefConstructor: E = m, ModelIncludeConstructor: D = r, TabsNavigationControlConstructor: O = w, TabsNavigationIdsConstructor: k = S, TabsNavigationFocusConstructor: A = x, TabsNavigationIndicatorConstructor: j = C, TabsNavigationSelectedConstructor: M = b } = v == null ? {} : v;
		this.scroll = new T(this.props, this.className, this.components), this.selected = new M(this.props), this.focus = new A(this.element, this.selected), this.data = new E(u(this.props, "list"), this.focus.item, void 0, void 0, void 0, this.selected.actualItem, this.refs.keyValue, this.refs.keyLabel), this.ids = new k(this.props, this.data), this.indicator = new j(this.props, this.refs, this.scroll.elementHtml, this.classDesign, this.className, this.selected), this.control = new O(this.selected, this.focus, this.data), this.event = new y(void 0, void 0, this.emits), new D("selected", this.emits, this.selected.item), this.initSelected(), c(() => {
			d([s.selected], () => this.selected.set(a.selected), { immediate: !0 });
		});
	}
	initSelected() {
		this.props.selected || this.selected.set(this.control.getFirstItem());
	}
}, E = {
	horizontalScrollFlush: !0,
	horizontalScrollAlign: "left"
}, D = class extends f {
	constructor(e, n, r, i = T) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderList", (e) => {
			let t = [];
			return this.initSlot("leading", t), this.item.data.fullData.value.forEach((n) => t.push(this.renderItem(e, n))), this.initSlot("trailing", t), t;
		}), t(this, "renderItem", (e, t) => {
			let n = this.item.selected.isSelected(t.index);
			return this.components.renderOne("tabItem", y({
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
};
//#endregion
export { T as TabsNavigation, w as TabsNavigationControl, D as TabsNavigationDesign, x as TabsNavigationFocus, S as TabsNavigationIds, a as TabsNavigationInclude, C as TabsNavigationIndicator, b as TabsNavigationSelected, E as defaultsTabsNavigation };

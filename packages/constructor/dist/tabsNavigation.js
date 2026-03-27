import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-BTtSLqQS.js";
import { t as n } from "./EventClickInclude-B0o5DErp.js";
import { t as r } from "./ModelInclude-ZrPu5V5T.js";
import { computed as i, nextTick as a, onMounted as o, ref as s, toRef as c, watch as l } from "vue";
import { DesignConstructorAbstract as u, EventItem as d, ListDataRef as f, getElementId as p, getRef as m, isDomRuntime as h, isSelected as g, toArray as _, toBinds as v } from "@dxtmisha/functional";
//#region src/constructors/HorizontalScroll/HorizontalScrollInclude.ts
var y = class {
	constructor(e, n, r, a, o) {
		t(this, "element", s()), t(this, "elementHtml", i(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.elementHtml;
		})), t(this, "binds", i(() => v(m(this.extra), {
			ref: this.element,
			flush: this.props.horizontalScrollFlush,
			align: this.props.horizontalScrollAlign
		}, this.props.horizontalScrollAttrs))), t(this, "toSelected", () => {
			var e, t;
			(e = this.element.value) == null || (t = e.toSelected) == null || t.call(e);
		}), t(this, "render", (e, t) => {
			if (this.components) {
				var n;
				return this.components.render("horizontalScroll", {
					...this.binds.value,
					...m(t)
				}, e, (n = this.index) == null ? "horizontalScroll" : n);
			}
			return [];
		}), this.props = e, this.className = n, this.components = r, this.extra = a, this.index = o;
	}
}, b = class {
	constructor(e) {
		t(this, "item", s()), t(this, "actualItem", s()), this.props = e, this.item.value = e.selected, this.actualItem.value = e.selected;
	}
	isSelected(e) {
		return g(e, this.actualItem.value);
	}
	set(e) {
		return this.item.value = e, this;
	}
	setActual(e) {
		return this.actualItem.value = e, this;
	}
}, x = class {
	constructor(e, n) {
		t(this, "item", s()), this.element = e, this.selected = n;
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
		return this.item.value = (e = _(this.selected.actualItem.value)) == null ? void 0 : e[0], this;
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
		t(this, "ids", i(() => {
			let e = {};
			return this.data.fullData.value.forEach((t) => {
				e[t.value] = p();
			}), e;
		})), this.props = e, this.data = n;
	}
	getIdByValue(e) {
		var t;
		return (t = this.ids.value[e == null ? "" : e]) == null ? String(e) : t;
	}
}, C = class {
	constructor(e, n, r, i, o, s) {
		t(this, "go", async (e, t) => {
			await a();
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
		}), this.props = e, this.refs = n, this.element = r, this.classDesign = i, this.className = o, this.selected = s, l(this.selected.item, (e, t) => this.go(e, t)), a().then(() => requestAnimationFrame(() => {
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
		h() && (this.event || (this.event = new d(document.body, ["keydown"], this.on)), this.focus.position(), this.event.start());
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
	constructor(a, s, u, d, p, m, h, g, _) {
		t(this, "scroll", void 0), t(this, "selected", void 0), t(this, "focus", void 0), t(this, "data", void 0), t(this, "ids", void 0), t(this, "indicator", void 0), t(this, "control", void 0), t(this, "event", void 0), t(this, "binds", i(() => ({
			tabindex: 0,
			...this.control.binds,
			...e.role("tablist")
		}))), t(this, "onClick", (e, t) => {
			this.selected.set(t == null ? void 0 : t.value), this.event.onClick(e, t);
		}), this.props = a, this.refs = s, this.element = u, this.classDesign = d, this.className = p, this.components = m, this.slots = h, this.emits = g;
		let { EventClickIncludeConstructor: v = n, HorizontalScrollIncludeConstructor: T = y, ListDataRefConstructor: E = f, ModelIncludeConstructor: D = r, TabsNavigationControlConstructor: O = w, TabsNavigationIdsConstructor: k = S, TabsNavigationFocusConstructor: A = x, TabsNavigationIndicatorConstructor: j = C, TabsNavigationSelectedConstructor: M = b } = _ == null ? {} : _;
		this.scroll = new T(this.props, this.className, this.components), this.selected = new M(this.props), this.focus = new A(this.element, this.selected), this.data = new E(c(this.props, "list"), this.focus.item, void 0, void 0, void 0, this.selected.actualItem, this.refs.keyValue, this.refs.keyLabel), this.ids = new k(this.props, this.data), this.indicator = new j(this.props, this.refs, this.scroll.elementHtml, this.classDesign, this.className, this.selected), this.control = new O(this.selected, this.focus, this.data), this.event = new v(void 0, void 0, this.emits), new D("selected", this.emits, this.selected.item), this.initSelected(), o(() => {
			l([s.selected], () => this.selected.set(a.selected), { immediate: !0 });
		});
	}
	initSelected() {
		this.props.selected || this.selected.set(this.control.getFirstItem());
	}
}, E = {
	horizontalScrollFlush: !0,
	horizontalScrollAlign: "left"
}, D = class extends u {
	constructor(e, n, r, i = T) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderList", (e) => {
			let t = [];
			return this.initSlot("leading", t), this.item.data.fullData.value.forEach((n) => t.push(this.renderItem(e, n))), this.initSlot("trailing", t), t;
		}), t(this, "renderItem", (e, t) => {
			let n = this.item.selected.isSelected(t.index);
			return this.components.renderOne("tabItem", v({
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
export { T as TabsNavigation, D as TabsNavigationDesign, E as defaultsTabsNavigation };

import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { i as n } from "./WindowClassesInclude-B56usxgx-lf4DY4p9.js";
import { t as r } from "./ListItem-ZJuqpJ4K.js";
import { t as i } from "./ListGroup-CzSLCcCf.js";
import { t as a } from "./ListMenu-DIiZ74XQ.js";
import { computed as o, createBlock as s, defineComponent as c, h as l, mergeDefaults as u, nextTick as d, onMounted as f, onUnmounted as p, openBlock as m, ref as h, toRef as g, unref as _, watch as v } from "vue";
import { DesignConstructorAbstract as y, EventItem as b, ListDataRef as x, goScroll as S, inArray as C, isDomRuntime as w, isFilled as T, isObject as E, isSelected as D, toBinds as O } from "@dxtmisha/functional";
//#region ../constructor/dist/list.js
var k = Object.defineProperty, A = (e, t, n) => t in e ? k(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, j = (e, t, n) => A(e, typeof t == "symbol" ? t : t + "", n), M = class {
	constructor(e) {
		j(this, "item", h()), j(this, "timeout"), j(this, "highlight", o(() => {
			var e;
			return (e = this.item.value) == null ? this.props.highlight : e;
		})), this.props = e;
	}
	add(e) {
		this.addChar(e).makeReset();
	}
	set(e) {
		let t = this.getValue(e);
		this.item.value !== t && (this.item.value = t);
	}
	reset() {
		return this.set(), this;
	}
	getValue(e) {
		if (T(e)) return e.trim();
	}
	addChar(e) {
		return this.item.value && this.timeout ? this.item.value += e : this.item.value = e, this;
	}
	makeReset() {
		return this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => this.timeout = void 0, 2e3), this;
	}
}, N = 24, P = class {
	constructor(e, t, n) {
		j(this, "item", h()), j(this, "focus", o(() => {
			var e, t;
			return (t = (e = this.item.value) == null ? void 0 : e.index) == null ? this.props.focus : t;
		})), this.props = e, this.element = t, this.listId = n;
	}
	isElement(e) {
		return !!this.getElement(e);
	}
	isItem() {
		var e;
		return ((e = this.item.value) == null ? void 0 : e.type) === "item";
	}
	isGroup() {
		var e;
		return ((e = this.item.value) == null ? void 0 : e.type) === "group";
	}
	isMenu() {
		var e;
		return ((e = this.item.value) == null ? void 0 : e.type) === "menu";
	}
	isOpen() {
		let e = this.getElement();
		return e && (this.isGroup() || this.isMenu()) ? e.dataset.status === "open" : !1;
	}
	get() {
		return this.item.value;
	}
	getSelector(e) {
		var t;
		return `[data-list-id="${this.listId}"][data-value="${e == null ? (t = this.item.value) == null ? void 0 : t.index : e}"]`;
	}
	getElement(e) {
		var t;
		return (t = document.querySelector(this.getSelector(e))) == null ? void 0 : t;
	}
	set(e) {
		return this.item.value !== e && (this.item.value = e, this.toFocus()), this;
	}
	reset() {
		return this.set(void 0), this;
	}
	click() {
		var e;
		(e = this.getElement()) == null || e.click();
	}
	toElementFocus() {
		return !!(this.item.value && this.getElement());
	}
	toElementSelected(e) {
		return this.toElement(this.getElement(e)), this;
	}
	toElement(e) {
		let t = "*[data-window-body]";
		e && e.closest(t) && (S(t, e), this.toFocus());
	}
	toFocus(e = N) {
		var t;
		if (e > 0 && this.element.value && this.props.control) {
			let n = this.getElement();
			n ? n.focus() : ((t = document.activeElement) == null || t.blur(), setTimeout(() => {
				this.toFocus(e - 1);
			}, 128));
		}
	}
}, F = class {
	constructor(e, t, n, r) {
		j(this, "index", -1), this.props = e, this.focus = t, this.data = n, this.emits = r;
	}
	set(e) {
		return this.index === e ? !1 : (e < 0 ? this.reset() : this.setByIndex(e), !0);
	}
	preparation(e) {
		let t = this.data.map.value, n = t.findIndex((t) => D(t.index, e));
		this.reset(), n >= 0 && (this.index = n, t != null && t[n] && this.focus.toElementSelected(t[n].index));
	}
	preparationBySelected() {
		this.props.selected && requestAnimationFrame(() => this.preparation(this.props.selected));
	}
	previous() {
		this.isFirstByParent() || (this.setByIndex(this.index - 1), this.focus.toElementFocus() || this.previous());
	}
	next() {
		this.isLastByParent() || (this.setByIndex(this.index + 1), this.focus.toElementFocus() || this.next());
	}
	first() {
		let e = this.getParentId(), t = this.data.getFirstItemByParent(e);
		t && (this.preparation(t.index), this.focus.set(t));
	}
	last() {
		let e = this.getParentId(), t = this.data.getLastItemByParent(e);
		t && (this.preparation(t.index), this.focus.set(t));
	}
	reset() {
		this.index = -1, this.focus.reset();
	}
	open() {
		this.focus.isItem() ? this.focus.click() : (this.focus.isGroup() || this.focus.isMenu()) && (this.focus.click(), this.nextByType());
	}
	close() {
		var e;
		let t = this.getMainItem();
		if (t) {
			t.click();
			let e = this.data.getItemByIndex(t.dataset.value);
			e && (this.set(e.key), this.focus.set(e.item));
		} else (e = this.emits) == null || e.call(this, "close");
	}
	stop() {
		this.focus.reset();
	}
	isFirstByParent() {
		var e, t;
		let n = this.getParentId();
		return n && this.focus.isElement() ? ((e = this.data.getFirstItemByParent(n)) == null ? void 0 : e.index) === ((t = this.focus.item.value) == null ? void 0 : t.index) : !1;
	}
	isLastByParent() {
		var e, t;
		let n = this.getParentId();
		return n && this.focus.isElement() ? ((e = this.data.getLastItemByParent(n)) == null ? void 0 : e.index) === ((t = this.focus.item.value) == null ? void 0 : t.index) : !1;
	}
	getMainItem() {
		let e = this.getParentId();
		if (e && !this.focus.isOpen()) return this.focus.getElement(e);
	}
	getParentId() {
		var e;
		return (e = this.focus.item.value) == null ? void 0 : e.parent;
	}
	setByIndex(e) {
		let t = this.data.getLengthByMap();
		e >= t ? this.index = 0 : e < 0 ? this.index = t - 1 : this.index = e;
		let n = this.data.map.value[this.index];
		n && (n.type === "item" || n.type === "group" || n.type === "menu") ? this.focus.set(n) : this.focus.reset();
	}
	nextByType() {
		this.setByIndex(this.index + 1), !(this.focus.isItem() || this.focus.isGroup() || this.focus.isMenu()) && this.nextByType();
	}
}, I = class {
	constructor(e, t, n, r) {
		j(this, "event"), j(this, "isActive", o(() => !!this.props.control)), j(this, "onFocus", () => {
			this.props.control || this.start();
		}), j(this, "onBlur", () => {
			this.props.control || this.stop();
		}), j(this, "on", (e) => {
			if (this.isNotInput(e.target) && this.data.getLength()) if (e.type === "keypress") this.updateSearch(e);
			else switch (e.code || e.key || e.keyCode) {
				case "Backspace":
				case 8:
					this.updateSearch(e);
					break;
				case "ArrowUp":
				case 38:
					e.preventDefault(), this.go.previous();
					break;
				case "ArrowDown":
				case 40:
					e.preventDefault(), this.go.next();
					break;
				case "Enter":
				case "ArrowRight":
				case " ":
				case 13:
				case 39:
					e.preventDefault(), this.go.open();
					break;
				case "ArrowLeft":
				case "Escape":
				case "Esc":
				case 27:
				case 37:
					e.preventDefault(), this.go.close();
					break;
				case "Home":
				case 36:
					e.preventDefault(), this.go.first();
					break;
				case "End":
				case 35:
					e.preventDefault(), this.go.last();
					break;
				case "Space":
				case 32:
					this.getActiveElement() || (e.preventDefault(), this.go.open());
					break;
			}
		}), this.props = e, this.search = t, this.data = n, this.go = r, v(this.isActive, (e) => {
			e ? this.start() : this.stop();
		}, { immediate: !0 }), p(() => this.stop());
	}
	isNotInput(e) {
		return ["INPUT", "TEXTAREA"].indexOf(e.nodeName) === -1 || !!this.getActiveElement();
	}
	getActiveElement() {
		var e;
		if (w()) {
			let t = document.activeElement;
			if (t && ((e = t.dataset) == null ? void 0 : e.menuControl) === "1") return t;
		}
	}
	start() {
		w() && (this.event || (this.event = new b(document.body, ["keydown", "keypress"], this.on)), this.go.reset(), this.event.start());
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0, this.go.stop());
	}
	updateSearch(e) {
		let t = this.getActiveElement();
		t ? requestAnimationFrame(() => this.search.set(t.value)) : this.search.add(e.key);
	}
}, L = 1, R = class {
	constructor(t, r, i, a, s, c, l, u, p) {
		j(this, "search"), j(this, "focus"), j(this, "data"), j(this, "event"), j(this, "go"), j(this, "control"), j(this, "windowClasses"), j(this, "id", ++L), j(this, "list", o(() => this.props.lite ? this.data.liteData.value : this.data.fullData.value)), j(this, "classes", o(() => ({ [`${this.className}--highlightActive`]: !!this.props.filterMode && this.data.isHighlight() }))), j(this, "itemBinds", o(() => {
			var e;
			return {
				tag: this.props.tag,
				divider: this.props.divider,
				onClick: this.event.onClick,
				...(e = this.props.itemAttrs) == null ? {} : e,
				listId: this.id
			};
		})), this.props = t, this.refs = r, this.element = i, this.classDesign = a, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { EventClickIncludeConstructor: m = e, ListControlConstructor: h = I, ListDataRefConstructor: _ = x, ListFocusConstructor: v = P, ListGoConstructor: y = F, ListSearchConstructor: b = M, WindowClassesIncludeConstructor: S = n } = p == null ? {} : p;
		this.search = new b(this.props), this.focus = new v(this.props, this.element, this.id), this.data = new _(g(this.props, "list"), this.focus.focus, this.search.highlight, this.refs.highlightLengthStart, this.refs.filterMode, this.refs.selected, this.refs.keyValue, this.refs.keyLabel, this.refs.liteThreshold, void 0, this.refs.max), this.go = new y(this.props, this.focus, this.data, this.emits), this.control = new h(this.props, this.search, this.data, this.go), this.event = new m(void 0, void 0, u), this.windowClasses = new S(a), this.props.control && f(async () => {
			await d(), this.go.preparationBySelected();
		});
	}
	isOpenGroup(e) {
		let t = this.data.getSubList(e);
		return t.isSelected.value || t.isFocus() || t.isHighlight();
	}
	getItem(e) {
		return O(this.itemBinds.value, e, {
			key: e.value,
			role: this.props.roleItem
		});
	}
	getItemGroup(e) {
		return O(this.itemBinds.value, this.props.itemGroupAttrs, e, {
			key: e.value,
			class: `${this.className}__group`
		});
	}
	getItemMenu(e) {
		return O(this.itemBinds.value, this.props.itemMenuAttrs, e, {
			key: e.value,
			class: `${this.className}__menu`
		});
	}
	getItemManagementFormGroup(e, n) {
		return this.getItemManagement({
			...e,
			...n,
			filterMode: !1,
			...t.haspopup("listbox")
		}, n.open, this.props.iconArrowDown);
	}
	getItemManagementFormMenu(e, t) {
		return this.getItemManagement({
			...e,
			filterMode: !1
		}, t, this.props.iconArrowRight);
	}
	getList(e) {
		return this.data.getSubList(e).fullData.value;
	}
	getItemManagement(e, t, n) {
		return O(this.itemBinds.value, this.props.itemManagementAttrs, e, {
			class: [`${this.className}__management`, this.windowClasses.get().static],
			focus: (e == null ? void 0 : e.index) === this.focus.focus.value,
			selectedChild: this.isOpenGroup(e),
			open: t,
			iconTurn: t,
			iconTrailing: n,
			iconTrailingTurnOnly: !0,
			"data-status": t ? "open" : "close"
		});
	}
}, z = {
	keyLabel: "label",
	keyValue: "value",
	tag: "div",
	role: "listbox",
	tabindex: 0,
	axis: "y"
}, B = class extends y {
	constructor(e, n, r, i = R) {
		super(e, n, r), j(this, "item"), j(this, "renderData", () => this.renderDataByItem("item", this.item.list.value, !0)), j(this, "renderItem", (e, t) => this.components.renderOne("listItem", this.getItemAttrs(e, t))), j(this, "renderItemGroup", (e, t) => this.components.renderOne("listItem", this.item.getItemManagementFormGroup(e, t))), j(this, "renderItemMenu", (e, t) => this.components.renderOne("listItem", O(this.item.getItemManagementFormMenu(e, !!t.open.value), t.binds))), j(this, "renderSpace", (e) => {
			var n;
			return l("div", {
				key: e.value,
				class: [(n = this.classes) == null ? void 0 : n.value.space, this.item.windowClasses.get().static],
				...t.role("separator")
			});
		}), j(this, "renderLine", (e) => {
			var n;
			return l("div", {
				key: e.value,
				class: [(n = this.classes) == null ? void 0 : n.value.line, this.item.windowClasses.get().static],
				...t.role("separator")
			});
		}), j(this, "renderSubtitle", (e) => {
			var n;
			return l("div", {
				key: e.value,
				class: [(n = this.classes) == null ? void 0 : n.value.subtitle, this.item.windowClasses.get().static],
				...t.role("separator")
			}, e.label);
		}), j(this, "renderHtml", (e) => {
			var t;
			let n = {
				key: e.label && E(e.value) ? e.label : e.value,
				class: [(t = this.classes) == null ? void 0 : t.value.html, this.item.windowClasses.get().static]
			};
			return this.slots && e.value in this.slots ? l("div", n, this.initSlot(e.value)) : l("div", {
				...n,
				innerHTML: e.label
			});
		}), j(this, "renderGroup", (e) => this.components.renderOne("listGroup", {
			open: this.item.isOpenGroup(e),
			divider: this.props.divider,
			disabled: e.disabled
		}, {
			head: (t) => this.renderItemGroup(e, t),
			list: () => this.renderDataByItem("group", this.item.getList(e))
		})), j(this, "renderMenu", (e, t) => this.components.renderOne("listMenu", {
			divider: this.props.divider,
			axis: t && this.props.axis === "x" ? "y" : "x",
			disabled: e.disabled
		}, {
			head: (t) => this.renderItemMenu(e, t),
			list: () => this.renderDataByItem("menu", this.item.getList(e))
		})), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			isSelected: this.item.data.isSelected,
			selectedList: this.item.data.selectedList,
			selectedNames: this.item.data.selectedNames,
			selectedValues: this.item.data.selectedValues
		};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			space: this.getSubClass("space"),
			line: this.getSubClass("line"),
			subtitle: this.getSubClass("subtitle"),
			html: this.getSubClass("html"),
			management: this.getSubClass("management"),
			group: this.getSubClass("group"),
			menu: this.getSubClass("menu"),
			menuGroup: this.getSubClass("menuGroup")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return l("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...t.role(this.props.role),
			tabindex: this.props.control ? void 0 : this.props.tabindex,
			onFocus: this.item.control.onFocus,
			onBlur: this.item.control.onBlur
		}, this.renderData());
	}
	renderDataByItem(e, t, n = !1) {
		let r = [];
		return t.forEach((t) => {
			switch (t.type) {
				case "space":
					r.push(this.renderSpace(t));
					break;
				case "line":
					r.push(this.renderLine(t));
					break;
				case "subtitle":
					r.push(this.renderSubtitle(t));
					break;
				case "html":
					r.push(this.renderHtml(t));
					break;
				case "group":
					this.isHighlight(t) && r.push(this.renderGroup(t));
					break;
				case "menu":
					this.isHighlight(t) && r.push(this.renderMenu(t, n));
					break;
				default:
					r.push(this.renderItem(e, t));
					break;
			}
		}), r.push(l("div")), r;
	}
	isHighlight(e) {
		return this.props.filterMode ? this.item.data.getSubList(e).isHighlightActive() : !0;
	}
	getItemAttrs(e, t) {
		switch (e) {
			case "group": return this.item.getItemGroup(t);
			case "menu": return this.item.getItemMenu(t);
			default: return this.item.getItem(t);
		}
	}
}, V = { axis: ["x", "y"] }, H = {
	...z,
	iconArrowDown: "keyboard_arrow_down",
	iconArrowRight: "keyboard_arrow_right",
	axis: "y"
}, U = /* @__PURE__ */ c({
	name: "D1List",
	__name: "D1List",
	props: /* @__PURE__ */ u({
		role: {},
		ariaMultiselectable: { type: Boolean },
		focus: { type: [
			Number,
			String,
			Boolean
		] },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		disabled: { type: Boolean },
		lite: { type: Boolean },
		list: {},
		liteThreshold: {},
		highlight: {},
		highlightLengthStart: {},
		filterMode: { type: Boolean },
		keyLabel: {},
		keyValue: {},
		max: {},
		tag: {},
		axis: {},
		divider: { type: Boolean },
		itemAttrs: {},
		itemManagementAttrs: {},
		itemGroupAttrs: {},
		itemMenuAttrs: {},
		iconArrowDown: {},
		iconArrowRight: {},
		roleItem: {},
		tabindex: {},
		control: { type: Boolean }
	}, H),
	emits: [
		"click",
		"clickLite",
		"close"
	],
	setup(e, { expose: t, emit: n }) {
		let c = n, l = e, u = new B("d1.list", l, {
			emits: c,
			classes: o(() => ({ main: {
				"d1-list": !0,
				"d1-list--focus": l.focus,
				[`d1-list--axis--${l.axis}`]: C(V.axis, l.axis),
				"d1-list--divider": l.divider
			} })),
			styles: o(() => ({})),
			components: {
				listItem: r,
				listGroup: i,
				listMenu: a
			}
		}), d = u.render();
		return t(u.expose()), (e, t) => (m(), s(_(d)));
	}
});
//#endregion
export { U as t };

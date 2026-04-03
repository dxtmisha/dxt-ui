import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./EventClickInclude-6I8kuFc9.js";
import { t as r } from "./WindowClassesInclude-zm-ITw5d.js";
import { computed as i, h as a, nextTick as o, onMounted as s, onUnmounted as c, ref as l, toRef as u, watch as d } from "vue";
import { DesignConstructorAbstract as f, EventItem as p, ListDataRef as m, goScroll as h, isDomRuntime as g, isFilled as _, isObject as v, isSelected as y, toBinds as b } from "@dxtmisha/functional";
//#region src/constructors/List/ListSearch.ts
var x = class {
	constructor(e) {
		t(this, "item", l()), t(this, "timeout", void 0), t(this, "highlight", i(() => {
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
		if (_(e)) return e.trim();
	}
	addChar(e) {
		return this.item.value && this.timeout ? this.item.value += e : this.item.value = e, this;
	}
	makeReset() {
		return this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => this.timeout = void 0, 2e3), this;
	}
}, S = 24, C = class {
	constructor(e, n, r) {
		t(this, "item", l()), t(this, "focus", i(() => {
			var e, t;
			return (e = (t = this.item.value) == null ? void 0 : t.index) == null ? this.props.focus : e;
		})), this.props = e, this.element = n, this.listId = r;
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
		e && e.closest(t) && (h(t, e), this.toFocus());
	}
	toFocus(e = S) {
		if (e > 0 && this.element.value && this.props.control) {
			let n = this.getElement();
			if (n) n.focus();
			else {
				var t;
				(t = document.activeElement) == null || t.blur(), setTimeout(() => {
					this.toFocus(e - 1);
				}, 128);
			}
		}
	}
}, w = class {
	constructor(e, n, r, i) {
		t(this, "index", -1), this.props = e, this.focus = n, this.data = r, this.emits = i;
	}
	set(e) {
		return this.index === e ? !1 : (e < 0 ? this.reset() : this.setByIndex(e), !0);
	}
	preparation(e) {
		let t = this.data.map.value, n = t.findIndex((t) => y(t.index, e));
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
		let e = this.getMainItem();
		if (e) {
			e.click();
			let t = this.data.getItemByIndex(e.dataset.value);
			t && (this.set(t.key), this.focus.set(t.item));
		} else {
			var t;
			(t = this.emits) == null || t.call(this, "close");
		}
	}
	stop() {
		this.focus.reset();
	}
	isFirstByParent() {
		let e = this.getParentId();
		if (e && this.focus.isElement()) {
			var t, n;
			return ((t = this.data.getFirstItemByParent(e)) == null ? void 0 : t.index) === ((n = this.focus.item.value) == null ? void 0 : n.index);
		}
		return !1;
	}
	isLastByParent() {
		let e = this.getParentId();
		if (e && this.focus.isElement()) {
			var t, n;
			return ((t = this.data.getLastItemByParent(e)) == null ? void 0 : t.index) === ((n = this.focus.item.value) == null ? void 0 : n.index);
		}
		return !1;
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
}, T = class {
	constructor(e, n, r, a) {
		t(this, "event", void 0), t(this, "isActive", i(() => !!this.props.control)), t(this, "onFocus", () => {
			this.props.control || this.start();
		}), t(this, "onBlur", () => {
			this.props.control || this.stop();
		}), t(this, "on", (e) => {
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
		}), this.props = e, this.search = n, this.data = r, this.go = a, d(this.isActive, (e) => {
			e ? this.start() : this.stop();
		}, { immediate: !0 }), c(() => this.stop());
	}
	isNotInput(e) {
		return ["INPUT", "TEXTAREA"].indexOf(e.nodeName) === -1 || !!this.getActiveElement();
	}
	getActiveElement() {
		if (g()) {
			var e;
			let t = document.activeElement;
			if (t && ((e = t.dataset) == null ? void 0 : e.menuControl) === "1") return t;
		}
	}
	start() {
		g() && (this.event || (this.event = new p(document.body, ["keydown", "keypress"], this.on)), this.go.reset(), this.event.start());
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0, this.go.stop());
	}
	updateSearch(e) {
		let t = this.getActiveElement();
		t ? requestAnimationFrame(() => this.search.set(t.value)) : this.search.add(e.key);
	}
}, E = 1, D = class {
	constructor(e, a, c, l, d, f, p, h, g) {
		t(this, "search", void 0), t(this, "focus", void 0), t(this, "data", void 0), t(this, "event", void 0), t(this, "go", void 0), t(this, "control", void 0), t(this, "windowClasses", void 0), t(this, "id", ++E), t(this, "list", i(() => this.props.lite ? this.data.liteData.value : this.data.fullData.value)), t(this, "classes", i(() => ({ [`${this.className}--highlightActive`]: !!this.props.filterMode && this.data.isHighlight() }))), t(this, "itemBinds", i(() => {
			var e;
			return {
				tag: this.props.tag,
				divider: this.props.divider,
				onClick: this.event.onClick,
				...(e = this.props.itemAttrs) == null ? {} : e,
				listId: this.id
			};
		})), this.props = e, this.refs = a, this.element = c, this.classDesign = l, this.className = d, this.components = f, this.slots = p, this.emits = h;
		let { EventClickIncludeConstructor: _ = n, ListControlConstructor: v = T, ListDataRefConstructor: y = m, ListFocusConstructor: b = C, ListGoConstructor: S = w, ListSearchConstructor: D = x, WindowClassesIncludeConstructor: O = r } = g == null ? {} : g;
		this.search = new D(this.props), this.focus = new b(this.props, this.element, this.id), this.data = new y(u(this.props, "list"), this.focus.focus, this.search.highlight, this.refs.highlightLengthStart, this.refs.filterMode, this.refs.selected, this.refs.keyValue, this.refs.keyLabel, this.refs.liteThreshold, void 0, this.refs.max), this.go = new S(this.props, this.focus, this.data, this.emits), this.control = new v(this.props, this.search, this.data, this.go), this.event = new _(void 0, void 0, h), this.windowClasses = new O(l), this.props.control && s(async () => {
			await o(), this.go.preparationBySelected();
		});
	}
	isOpenGroup(e) {
		let t = this.data.getSubList(e);
		return t.isSelected.value || t.isFocus() || t.isHighlight();
	}
	getItem(e) {
		return b(this.itemBinds.value, e, {
			key: e.value,
			role: this.props.roleItem
		});
	}
	getItemGroup(e) {
		return b(this.itemBinds.value, this.props.itemGroupAttrs, e, {
			key: e.value,
			class: `${this.className}__group`
		});
	}
	getItemMenu(e) {
		return b(this.itemBinds.value, this.props.itemMenuAttrs, e, {
			key: e.value,
			class: `${this.className}__menu`
		});
	}
	getItemManagementFormGroup(t, n) {
		return this.getItemManagement({
			...t,
			...n,
			filterMode: !1,
			...e.haspopup("listbox")
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
		return b(this.itemBinds.value, this.props.itemManagementAttrs, e, {
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
}, O = {
	keyLabel: "label",
	keyValue: "value",
	tag: "div",
	role: "listbox",
	tabindex: 0,
	axis: "y"
}, k = class extends f {
	constructor(n, r, i, o = D) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderData", () => this.renderDataByItem("item", this.item.list.value, !0)), t(this, "renderItem", (e, t) => this.components.renderOne("listItem", this.getItemAttrs(e, t))), t(this, "renderItemGroup", (e, t) => this.components.renderOne("listItem", this.item.getItemManagementFormGroup(e, t))), t(this, "renderItemMenu", (e, t) => this.components.renderOne("listItem", b(this.item.getItemManagementFormMenu(e, !!t.open.value), t.binds))), t(this, "renderSpace", (t) => {
			var n;
			return a("div", {
				key: t.value,
				class: [(n = this.classes) == null ? void 0 : n.value.space, this.item.windowClasses.get().static],
				...e.role("separator")
			});
		}), t(this, "renderLine", (t) => {
			var n;
			return a("div", {
				key: t.value,
				class: [(n = this.classes) == null ? void 0 : n.value.line, this.item.windowClasses.get().static],
				...e.role("separator")
			});
		}), t(this, "renderSubtitle", (t) => {
			var n;
			return a("div", {
				key: t.value,
				class: [(n = this.classes) == null ? void 0 : n.value.subtitle, this.item.windowClasses.get().static],
				...e.role("separator")
			}, t.label);
		}), t(this, "renderHtml", (e) => {
			var t;
			let n = {
				key: e.label && v(e.value) ? e.label : e.value,
				class: [(t = this.classes) == null ? void 0 : t.value.html, this.item.windowClasses.get().static]
			};
			return this.slots && e.value in this.slots ? a("div", n, this.initSlot(e.value)) : a("div", {
				...n,
				innerHTML: e.label
			});
		}), t(this, "renderGroup", (e) => this.components.renderOne("listGroup", {
			open: this.item.isOpenGroup(e),
			divider: this.props.divider,
			disabled: e.disabled
		}, {
			head: (t) => this.renderItemGroup(e, t),
			list: () => this.renderDataByItem("group", this.item.getList(e))
		})), t(this, "renderMenu", (e, t) => this.components.renderOne("listMenu", {
			divider: this.props.divider,
			axis: t && this.props.axis === "x" ? "y" : "x",
			disabled: e.disabled
		}, {
			head: (t) => this.renderItemMenu(e, t),
			list: () => this.renderDataByItem("menu", this.item.getList(e))
		})), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		var t;
		return a("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.role(this.props.role),
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
		}), r.push(a("div")), r;
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
};
//#endregion
export { D as List, T as ListControl, k as ListDesign, C as ListFocus, w as ListGo, x as ListSearch, O as defaultsList };

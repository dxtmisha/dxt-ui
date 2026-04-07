import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-Cb8myFDE.js";
import { t as n } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { i as r } from "./WindowClassesInclude-zm-ITw5d-Dpl5NhNT.js";
import { t as i } from "./ListItem-BMOjKHPu.js";
import { t as a } from "./ListGroup-xBr5B5Qm.js";
import { t as o } from "./ListMenu-QG5fYCu0.js";
import { computed as s, createBlock as c, defineComponent as l, h as u, mergeDefaults as d, nextTick as f, onMounted as p, onUnmounted as m, openBlock as h, ref as g, toRef as _, unref as v, watch as y } from "vue";
import { DesignConstructorAbstract as b, EventItem as x, ListDataRef as S, goScroll as C, inArray as w, isDomRuntime as T, isFilled as E, isObject as D, isSelected as O, toBinds as k } from "@dxtmisha/functional";
//#region ../constructor/dist/list.js
var A = class {
	constructor(t) {
		e(this, "item", g()), e(this, "timeout", void 0), e(this, "highlight", s(() => {
			var e;
			return (e = this.item.value) == null ? this.props.highlight : e;
		})), this.props = t;
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
		if (E(e)) return e.trim();
	}
	addChar(e) {
		return this.item.value && this.timeout ? this.item.value += e : this.item.value = e, this;
	}
	makeReset() {
		return this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => this.timeout = void 0, 2e3), this;
	}
}, j = 24, M = class {
	constructor(t, n, r) {
		e(this, "item", g()), e(this, "focus", s(() => {
			var e, t;
			return (e = (t = this.item.value) == null ? void 0 : t.index) == null ? this.props.focus : e;
		})), this.props = t, this.element = n, this.listId = r;
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
		e && e.closest(t) && (C(t, e), this.toFocus());
	}
	toFocus(e = j) {
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
}, N = class {
	constructor(t, n, r, i) {
		e(this, "index", -1), this.props = t, this.focus = n, this.data = r, this.emits = i;
	}
	set(e) {
		return this.index === e ? !1 : (e < 0 ? this.reset() : this.setByIndex(e), !0);
	}
	preparation(e) {
		let t = this.data.map.value, n = t.findIndex((t) => O(t.index, e));
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
}, P = class {
	constructor(t, n, r, i) {
		e(this, "event", void 0), e(this, "isActive", s(() => !!this.props.control)), e(this, "onFocus", () => {
			this.props.control || this.start();
		}), e(this, "onBlur", () => {
			this.props.control || this.stop();
		}), e(this, "on", (e) => {
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
		}), this.props = t, this.search = n, this.data = r, this.go = i, y(this.isActive, (e) => {
			e ? this.start() : this.stop();
		}, { immediate: !0 }), m(() => this.stop());
	}
	isNotInput(e) {
		return ["INPUT", "TEXTAREA"].indexOf(e.nodeName) === -1 || !!this.getActiveElement();
	}
	getActiveElement() {
		if (T()) {
			var e;
			let t = document.activeElement;
			if (t && ((e = t.dataset) == null ? void 0 : e.menuControl) === "1") return t;
		}
	}
	start() {
		T() && (this.event || (this.event = new x(document.body, ["keydown", "keypress"], this.on)), this.go.reset(), this.event.start());
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0, this.go.stop());
	}
	updateSearch(e) {
		let t = this.getActiveElement();
		t ? requestAnimationFrame(() => this.search.set(t.value)) : this.search.add(e.key);
	}
}, F = 1, I = class {
	constructor(n, i, a, o, c, l, u, d, m) {
		e(this, "search", void 0), e(this, "focus", void 0), e(this, "data", void 0), e(this, "event", void 0), e(this, "go", void 0), e(this, "control", void 0), e(this, "windowClasses", void 0), e(this, "id", ++F), e(this, "list", s(() => this.props.lite ? this.data.liteData.value : this.data.fullData.value)), e(this, "classes", s(() => ({ [`${this.className}--highlightActive`]: !!this.props.filterMode && this.data.isHighlight() }))), e(this, "itemBinds", s(() => {
			var e;
			return {
				tag: this.props.tag,
				divider: this.props.divider,
				onClick: this.event.onClick,
				...(e = this.props.itemAttrs) == null ? {} : e,
				listId: this.id
			};
		})), this.props = n, this.refs = i, this.element = a, this.classDesign = o, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { EventClickIncludeConstructor: h = t, ListControlConstructor: g = P, ListDataRefConstructor: v = S, ListFocusConstructor: y = M, ListGoConstructor: b = N, ListSearchConstructor: x = A, WindowClassesIncludeConstructor: C = r } = m == null ? {} : m;
		this.search = new x(this.props), this.focus = new y(this.props, this.element, this.id), this.data = new v(_(this.props, "list"), this.focus.focus, this.search.highlight, this.refs.highlightLengthStart, this.refs.filterMode, this.refs.selected, this.refs.keyValue, this.refs.keyLabel, this.refs.liteThreshold, void 0, this.refs.max), this.go = new b(this.props, this.focus, this.data, this.emits), this.control = new g(this.props, this.search, this.data, this.go), this.event = new h(void 0, void 0, d), this.windowClasses = new C(o), this.props.control && p(async () => {
			await f(), this.go.preparationBySelected();
		});
	}
	isOpenGroup(e) {
		let t = this.data.getSubList(e);
		return t.isSelected.value || t.isFocus() || t.isHighlight();
	}
	getItem(e) {
		return k(this.itemBinds.value, e, {
			key: e.value,
			role: this.props.roleItem
		});
	}
	getItemGroup(e) {
		return k(this.itemBinds.value, this.props.itemGroupAttrs, e, {
			key: e.value,
			class: `${this.className}__group`
		});
	}
	getItemMenu(e) {
		return k(this.itemBinds.value, this.props.itemMenuAttrs, e, {
			key: e.value,
			class: `${this.className}__menu`
		});
	}
	getItemManagementFormGroup(e, t) {
		return this.getItemManagement({
			...e,
			...t,
			filterMode: !1,
			...n.haspopup("listbox")
		}, t.open, this.props.iconArrowDown);
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
		return k(this.itemBinds.value, this.props.itemManagementAttrs, e, {
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
}, L = {
	keyLabel: "label",
	keyValue: "value",
	tag: "div",
	role: "listbox",
	tabindex: 0,
	axis: "y"
}, R = class extends b {
	constructor(t, r, i, a = I) {
		super(t, r, i), e(this, "item", void 0), e(this, "renderData", () => this.renderDataByItem("item", this.item.list.value, !0)), e(this, "renderItem", (e, t) => this.components.renderOne("listItem", this.getItemAttrs(e, t))), e(this, "renderItemGroup", (e, t) => this.components.renderOne("listItem", this.item.getItemManagementFormGroup(e, t))), e(this, "renderItemMenu", (e, t) => this.components.renderOne("listItem", k(this.item.getItemManagementFormMenu(e, !!t.open.value), t.binds))), e(this, "renderSpace", (e) => {
			var t;
			return u("div", {
				key: e.value,
				class: [(t = this.classes) == null ? void 0 : t.value.space, this.item.windowClasses.get().static],
				...n.role("separator")
			});
		}), e(this, "renderLine", (e) => {
			var t;
			return u("div", {
				key: e.value,
				class: [(t = this.classes) == null ? void 0 : t.value.line, this.item.windowClasses.get().static],
				...n.role("separator")
			});
		}), e(this, "renderSubtitle", (e) => {
			var t;
			return u("div", {
				key: e.value,
				class: [(t = this.classes) == null ? void 0 : t.value.subtitle, this.item.windowClasses.get().static],
				...n.role("separator")
			}, e.label);
		}), e(this, "renderHtml", (e) => {
			var t;
			let n = {
				key: e.label && D(e.value) ? e.label : e.value,
				class: [(t = this.classes) == null ? void 0 : t.value.html, this.item.windowClasses.get().static]
			};
			return this.slots && e.value in this.slots ? u("div", n, this.initSlot(e.value)) : u("div", {
				...n,
				innerHTML: e.label
			});
		}), e(this, "renderGroup", (e) => this.components.renderOne("listGroup", {
			open: this.item.isOpenGroup(e),
			divider: this.props.divider,
			disabled: e.disabled
		}, {
			head: (t) => this.renderItemGroup(e, t),
			list: () => this.renderDataByItem("group", this.item.getList(e))
		})), e(this, "renderMenu", (e, t) => this.components.renderOne("listMenu", {
			divider: this.props.divider,
			axis: t && this.props.axis === "x" ? "y" : "x",
			disabled: e.disabled
		}, {
			head: (t) => this.renderItemMenu(e, t),
			list: () => this.renderDataByItem("menu", this.item.getList(e))
		})), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return u("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...n.role(this.props.role),
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
		}), r.push(u("div")), r;
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
}, z = { axis: ["x", "y"] }, B = {
	...L,
	iconArrowDown: "keyboard_arrow_down",
	iconArrowRight: "keyboard_arrow_right",
	axis: "y"
}, V = /* @__PURE__ */ l({
	name: "D1List",
	__name: "D1List",
	props: /* @__PURE__ */ d({
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
	}, B),
	emits: [
		"click",
		"clickLite",
		"close"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, l = e, u = new R("d1.list", l, {
			emits: r,
			classes: s(() => ({ main: {
				"d1-list": !0,
				"d1-list--focus": l.focus,
				[`d1-list--axis--${l.axis}`]: w(z.axis, l.axis),
				"d1-list--divider": l.divider
			} })),
			styles: s(() => ({})),
			components: {
				listItem: i,
				listGroup: a,
				listMenu: o
			}
		}), d = u.render();
		return t(u.expose()), (e, t) => (h(), c(v(d)));
	}
});
//#endregion
export { V as t };

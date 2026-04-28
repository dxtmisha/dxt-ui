import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./EventClickInclude-DWAJ7AtL.js";
import { t as n } from "./ModelInclude-BLoWPZyI.js";
import { t as r } from "./WindowInclude-CdsbM6AZ.js";
import { t as i } from "./BarsInclude-B8j-NBPr.js";
import { t as a } from "./MenuInclude-y0cTv5at.js";
import { computed as o, h as s, ref as c, watch as l } from "vue";
import { Api as u, DesignConstructorAbstract as d, ListDataRef as f, executePromise as p, isFilled as m, isFunction as h, isObject as g, toBinds as _ } from "@dxtmisha/functional";
//#region src/constructors/Menu/MenuRequest.ts
var v = class {
	constructor(t) {
		e(this, "progress", c(!1)), e(this, "buffer", c()), e(this, "item", o(() => {
			var e, t;
			return (e = (t = this.buffer.value) == null ? this.props.list : t) == null ? [] : e;
		})), this.props = t;
	}
	is() {
		return !!(this.props.ajax || this.props.request);
	}
	async preparation() {
		return await this.update(), !0;
	}
	async update() {
		await this.read((e) => this.buffer.value = e);
	}
	async getAjax() {
		return h(this.props.ajax) ? p(this.props.ajax) : await u.request({
			path: this.props.ajax,
			...this.props.request
		});
	}
	async read(e) {
		this.is() && (this.props.cache && this.buffer.value !== void 0 && e(this.buffer.value), this.progress.value = !0, e(await this.getAjax()), this.progress.value = !1);
	}
}, y = class {
	constructor(t) {
		e(this, "item", c()), e(this, "value", o(() => this.props.highlight ? this.props.highlight : this.item.value)), this.props = t;
	}
	set(e) {
		let t = this.getValue(e);
		this.item.value !== t && (this.item.value = t);
	}
	reset() {
		return this.set(), this;
	}
	getValue(e) {
		if (m(e)) return e.trim();
	}
}, b = class {
	constructor(t, n) {
		e(this, "lite", c()), e(this, "control", c()), e(this, "preparation", async () => {
			await this.request.preparation(), this.props.list && this.props.liteThreshold && Number(this.props.liteThreshold) <= Object.keys(this.props.list).length && (this.lite.value = !0);
		}), e(this, "opening", async () => (this.lite.value = !1, this.control.value = !0, !0)), e(this, "closing", async () => (this.lite.value = !1, this.control.value = !1, !0)), this.props = t, this.request = n;
	}
	getExtra() {
		return {
			adaptive: "menu",
			preparation: this.preparation,
			opening: this.opening,
			closing: this.closing,
			role: "menu",
			autoTabIndex: !1,
			openOnArrowDown: !0
		};
	}
}, x = class {
	constructor(t, r, i) {
		e(this, "value", c()), e(this, "selected", o(() => this.props.isSelectedByValue ? this.value.value : this.props.selected)), this.props = t, this.refs = r, this.emits = i, this.props.isSelectedByValue && (new n("selected", this.emits, this.value), r.selected && l(r.selected, (e) => {
			this.value.value = e;
		}, { immediate: !0 }));
	}
	setValue(e, t = !1) {
		if (this.props.isSelectedByValue && !g(e) && this.value.value !== e && (this.value.value = e, t)) {
			var n;
			(n = this.emits) == null || n.call(this, "updateValue", e);
		}
		return this;
	}
}, S = class {
	constructor(t, n, r) {
		e(this, "previous", () => this.go(-1)), e(this, "next", () => this.go(1)), this.props = t, this.value = n, this.data = r;
	}
	getStep() {
		return Number(this.props.step) || 1;
	}
	go(e) {
		let t = this.data.getSelectedByStep(this.getStep() * e);
		return t && this.value.setValue(t, !0), t;
	}
}, C = class {
	constructor(n, a, s, c, l, u, d, p, m) {
		e(this, "request", void 0), e(this, "search", void 0), e(this, "value", void 0), e(this, "data", void 0), e(this, "go", void 0), e(this, "bars", void 0), e(this, "window", void 0), e(this, "menuWindow", void 0), e(this, "event", void 0), e(this, "slotData", void 0), e(this, "binds", o(() => ({
			filterMode: this.props.filterMode,
			liteThreshold: this.props.liteThreshold,
			keyLabel: this.props.keyLabel,
			keyValue: this.props.keyValue,
			max: this.props.max,
			tag: this.props.tag,
			onClick: this.onClick,
			onClose: this.window.expose.toClose,
			itemAttrs: this.props.itemAttrs,
			control: !this.props.embedded
		}))), e(this, "onClick", (e, t) => {
			t && "value" in t && this.value.setValue(t.value), this.event.onClick(e, t);
		}), e(this, "onClickSlot", (e) => {
			let t = e.target, n = t.closest("*[data-value]");
			if (n && !t.closest(`.${this.className}__list`)) {
				var r;
				(r = this.emits) == null || r.call(this, "clickSlot", n.dataset.value);
			}
		}), this.props = n, this.refs = a, this.element = s, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = p;
		let { BarsIncludeConstructor: h = i, EventClickIncludeConstructor: g = t, ListDataRefConstructor: _ = f, MenuGoConstructor: C = S, MenuRequestConstructor: w = v, MenuSearchConstructor: T = y, MenuValueConstructor: E = x, MenuWindowConstructor: D = b, WindowIncludeConstructor: O = r } = m == null ? {} : m;
		this.request = new w(this.props), this.search = new T(this.props), this.value = new E(this.props, this.refs, this.emits), this.data = new _(this.request.item, void 0, void 0, void 0, void 0, this.value.selected, this.refs.keyValue, this.refs.keyLabel), this.go = new C(this.props, this.value, this.data), this.bars = new h(this.props, this.className, this.components, this.emits), this.menuWindow = new D(this.props, this.request), this.window = new O(this.props, this.className, this.components, this.emits, this.menuWindow.getExtra()), this.event = new g(void 0, void 0, this.emits), this.slotData = {
			loading: this.request.progress,
			isSelected: this.data.isSelected,
			selectedList: this.data.selectedList,
			selectedNames: this.data.selectedNames,
			selectedValues: this.data.selectedValues,
			previous: this.go.previous,
			next: this.go.next
		};
	}
	getControlBinds() {
		return this.slotData;
	}
}, w = {
	liteThreshold: 40,
	barsHide: !0,
	barsBackHide: !0,
	tag: "a",
	step: 1,
	autoClose: !0
}, T = class extends d {
	constructor(t, n, r, i = C) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderControl", (e) => this.initSlot("control", void 0, this.getBinds(e))), e(this, "renderTitle", (e) => {
			let t = [];
			return this.item.bars.is.value && t.push(...this.item.bars.render()), this.initSlot("title", t, this.getBinds(e)), t;
		}), e(this, "renderList", (e) => {
			let t = this.item.request.item.value;
			if (t) {
				let r = [];
				if (this.initSlot("contextTop", r, this.getBinds(e)), !this.props.hideList) {
					var n;
					r.push(this.components.render("list", _({
						...this.item.binds.value,
						class: (n = this.classes) == null ? void 0 : n.value.list,
						selected: this.item.value.selected.value,
						highlight: this.item.search.value.value,
						list: t,
						lite: this.item.menuWindow.lite.value,
						role: this.props.roleList,
						roleItem: this.props.roleItem
					}, this.props.listAttrs), this.slots));
				}
				return this.initSlot("contextBottom", r, this.getBinds(e)), s("div", {
					...this.getAttrs(),
					ref: this.element,
					onClick: this.item.onClickSlot
				}, r);
			}
		}), e(this, "renderFooter", (e) => this.initSlot("footer", void 0, this.getBinds(e))), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			...this.item.window.expose,
			...this.item.getControlBinds()
		};
	}
	initClasses() {
		return {
			main: {},
			bars: this.getSubClass("bars"),
			list: this.getSubClass("list")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.window.render({
			control: this.renderControl,
			title: this.renderTitle,
			default: this.renderList,
			footer: this.renderFooter
		}, {
			class: (e = this.classes) == null ? void 0 : e.value.main,
			closeOnEsc: !1,
			ariaHaspopup: "listbox",
			embedded: this.props.embedded
		});
	}
	getBinds(e) {
		return {
			...e,
			...this.item.getControlBinds()
		};
	}
};
//#endregion
export { C as Menu, T as MenuDesign, S as MenuGo, a as MenuInclude, v as MenuRequest, y as MenuSearch, x as MenuValue, b as MenuWindow, w as defaultsMenu };

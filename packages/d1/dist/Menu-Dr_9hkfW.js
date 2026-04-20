import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { r as t } from "./D1Icon-DdAEP85V.js";
import { t as n } from "./ModelInclude-D1hAxOaY-8lUw80CP.js";
import { n as r, t as i } from "./Window-DV5XLyb1.js";
import { n as a, t as o } from "./Bars-h0-Nj5RR.js";
import { t as s } from "./List-CAJXD-oW.js";
import { computed as c, createBlock as l, defineComponent as u, h as d, mergeDefaults as f, openBlock as p, ref as m, unref as h, watch as g } from "vue";
import { Api as _, DesignConstructorAbstract as v, ListDataRef as y, executePromise as b, getRef as x, inArray as S, isFilled as C, isFunction as w, isObject as T, toBind as E, toBinds as D } from "@dxtmisha/functional";
//#region ../constructor/dist/MenuInclude-Cq7OlTf8.js
var O = class {
	constructor(t, n, r, i, a) {
		e(this, "element", m()), e(this, "is", c(() => !!(!this.props.disabled && this.components))), e(this, "isOpen", c(() => {
			var e;
			return !!((e = this.element.value) != null && e.open);
		})), e(this, "binds", c(() => {
			let e = D(x(this.extra), this.props.menuAttrs, { class: `${this.className}__menu` });
			return {
				disabled: this.props.disabled,
				...e
			};
		})), e(this, "expose", {
			open: c(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			setOpen: async (e) => {
				var t;
				return (t = this.element.value) == null ? void 0 : t.setOpen(e);
			},
			toOpen: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toOpen();
			},
			toClose: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toClose();
			},
			toggle: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toggle();
			},
			menuElement: this.element
		}), e(this, "render", (e, t) => this.components ? this.components.render("menu", {
			ref: this.element,
			...E(t == null ? {} : t, this.binds.value)
		}, e, this.index) : []), this.props = t, this.className = n, this.components = r, this.extra = i, this.index = a;
	}
	getElement() {
		return this.element.value;
	}
}, k = class {
	constructor(t) {
		e(this, "progress", m(!1)), e(this, "buffer", m()), e(this, "item", c(() => {
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
		return w(this.props.ajax) ? b(this.props.ajax) : await _.request({
			path: this.props.ajax,
			...this.props.request
		});
	}
	async read(e) {
		this.is() && (this.props.cache && this.buffer.value !== void 0 && e(this.buffer.value), this.progress.value = !0, e(await this.getAjax()), this.progress.value = !1);
	}
}, A = class {
	constructor(t) {
		e(this, "item", m()), e(this, "value", c(() => this.props.highlight ? this.props.highlight : this.item.value)), this.props = t;
	}
	set(e) {
		let t = this.getValue(e);
		this.item.value !== t && (this.item.value = t);
	}
	reset() {
		return this.set(), this;
	}
	getValue(e) {
		if (C(e)) return e.trim();
	}
}, j = class {
	constructor(t, n) {
		e(this, "lite", m()), e(this, "control", m()), e(this, "preparation", async () => {
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
}, M = class {
	constructor(t, r, i) {
		e(this, "value", m()), e(this, "selected", c(() => this.props.isSelectedByValue ? this.value.value : this.props.selected)), this.props = t, this.refs = r, this.emits = i, this.props.isSelectedByValue && (new n("selected", this.emits, this.value), r.selected && g(r.selected, (e) => {
			this.value.value = e;
		}, { immediate: !0 }));
	}
	setValue(e, t = !1) {
		if (this.props.isSelectedByValue && !T(e) && this.value.value !== e && (this.value.value = e, t)) {
			var n;
			(n = this.emits) == null || n.call(this, "updateValue", e);
		}
		return this;
	}
}, N = class {
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
}, P = class {
	constructor(n, i, o, s, l, u, d, f, p) {
		e(this, "request", void 0), e(this, "search", void 0), e(this, "value", void 0), e(this, "data", void 0), e(this, "go", void 0), e(this, "bars", void 0), e(this, "window", void 0), e(this, "menuWindow", void 0), e(this, "event", void 0), e(this, "slotData", void 0), e(this, "binds", c(() => ({
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
		}), this.props = n, this.refs = i, this.element = o, this.classDesign = s, this.className = l, this.components = u, this.slots = d, this.emits = f;
		let { BarsIncludeConstructor: m = a, EventClickIncludeConstructor: h = t, ListDataRefConstructor: g = y, MenuGoConstructor: _ = N, MenuRequestConstructor: v = k, MenuSearchConstructor: b = A, MenuValueConstructor: x = M, MenuWindowConstructor: S = j, WindowIncludeConstructor: C = r } = p == null ? {} : p;
		this.request = new v(this.props), this.search = new b(this.props), this.value = new x(this.props, this.refs, this.emits), this.data = new g(this.request.item, void 0, void 0, void 0, void 0, this.value.selected, this.refs.keyValue, this.refs.keyLabel), this.go = new _(this.props, this.value, this.data), this.bars = new m(this.props, this.className, this.components, this.emits), this.menuWindow = new S(this.props, this.request), this.window = new C(this.props, this.className, this.components, this.emits, this.menuWindow.getExtra()), this.event = new h(void 0, void 0, this.emits), this.slotData = {
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
}, F = {
	liteThreshold: 40,
	barsHide: !0,
	barsBackHide: !0,
	tag: "a",
	step: 1,
	autoClose: !0
}, I = class extends v {
	constructor(t, n, r, i = P) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderControl", (e) => this.initSlot("control", void 0, this.getBinds(e))), e(this, "renderTitle", (e) => {
			let t = [];
			return this.item.bars.is.value && t.push(...this.item.bars.render()), this.initSlot("title", t, this.getBinds(e)), t;
		}), e(this, "renderList", (e) => {
			let t = this.item.request.item.value;
			if (t) {
				let r = [];
				if (this.initSlot("contextTop", r, this.getBinds(e)), !this.props.hideList) {
					var n;
					r.push(this.components.render("list", D({
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
				return this.initSlot("contextBottom", r, this.getBinds(e)), d("div", {
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
}, L = { barsAdaptive: [
	"showAlways",
	"showSm",
	"showMd",
	"showLg",
	"showXl",
	"show2xl"
] }, R = { ...F }, z = /* @__PURE__ */ u({
	name: "D1Menu",
	__name: "D1Menu",
	props: /* @__PURE__ */ f({
		barsLabel: {},
		barsDescription: {},
		barsBackHide: { type: Boolean },
		barsHide: { type: Boolean },
		barsList: {},
		barsAttrs: {},
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		hideList: { type: Boolean },
		list: {},
		liteThreshold: {},
		highlight: {},
		highlightLengthStart: {},
		filterMode: { type: Boolean },
		ajax: { type: [String, Function] },
		request: {},
		cache: { type: Boolean },
		keyLabel: {},
		keyValue: {},
		max: {},
		tag: {},
		step: {},
		listAttrs: {},
		itemAttrs: {},
		roleList: {},
		roleItem: {},
		isSelectedByValue: { type: Boolean },
		embedded: { type: Boolean },
		barsAdaptive: {}
	}, R),
	emits: [
		"bars",
		"barsLite",
		"barsBack",
		"click",
		"clickLite",
		"window",
		"update:selected",
		"update:modelSelected",
		"updateValue",
		"clickSlot"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, u = new I("d1.menu", a, {
			emits: r,
			classes: c(() => ({ main: {
				"d1-menu": !0,
				"d1-menu--hideList": a.hideList,
				[`d1-menu--barsAdaptive--${a.barsAdaptive}`]: S(L.barsAdaptive, a.barsAdaptive)
			} })),
			styles: c(() => ({})),
			components: {
				list: s,
				bars: o,
				window: i
			}
		}), d = u.render();
		return t(u.expose()), (e, t) => (p(), l(h(d)));
	}
});
//#endregion
export { O as n, z as t };

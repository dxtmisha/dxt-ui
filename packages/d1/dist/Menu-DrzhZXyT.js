import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { n, t as r } from "./Bars-4aLg7pr8.js";
import { n as i, t as a } from "./Window-9iCpMfYB.js";
import { t as o } from "./List-cYe_U8WG.js";
import { computed as s, createBlock as c, defineComponent as l, h as u, mergeDefaults as d, openBlock as f, ref as p, unref as m, watch as h } from "vue";
import { Api as g, DesignConstructorAbstract as _, ListDataRef as v, executePromise as y, getRef as b, inArray as x, isFilled as S, isFunction as C, isObject as w, toBind as T, toBinds as E } from "@dxtmisha/functional";
//#region ../constructor/dist/MenuInclude-CiSj2UK3.js
var D = Object.defineProperty, O = (e, t, n) => t in e ? D(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, k = (e, t, n) => O(e, typeof t == "symbol" ? t : t + "", n), A = class {
	constructor(e, t, n, r, i) {
		k(this, "element", p()), k(this, "is", s(() => !!(!this.props.disabled && this.components))), k(this, "isOpen", s(() => {
			var e;
			return !!((e = this.element.value) != null && e.open);
		})), k(this, "binds", s(() => {
			let e = E(b(this.extra), this.props.menuAttrs, { class: `${this.className}__menu` });
			return {
				disabled: this.props.disabled,
				...e
			};
		})), k(this, "expose", {
			open: s(() => {
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
		}), k(this, "render", (e, t) => this.components ? this.components.render("menu", {
			ref: this.element,
			...T(t == null ? {} : t, this.binds.value)
		}, e, this.index) : []), this.props = e, this.className = t, this.components = n, this.extra = r, this.index = i;
	}
	getElement() {
		return this.element.value;
	}
}, j = Object.defineProperty, M = (e, t, n) => t in e ? j(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, N = (e, t, n) => M(e, typeof t == "symbol" ? t : t + "", n), P = class {
	constructor(e) {
		N(this, "progress", p(!1)), N(this, "buffer", p()), N(this, "item", s(() => {
			var e, t;
			return (t = (e = this.buffer.value) == null ? this.props.list : e) == null ? [] : t;
		})), this.props = e;
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
		return C(this.props.ajax) ? y(this.props.ajax) : await g.request({
			path: this.props.ajax,
			...this.props.request
		});
	}
	async read(e) {
		this.is() && (this.props.cache && this.buffer.value !== void 0 && e(this.buffer.value), this.progress.value = !0, e(await this.getAjax()), this.progress.value = !1);
	}
}, F = class {
	constructor(e) {
		N(this, "item", p()), N(this, "value", s(() => this.props.highlight ? this.props.highlight : this.item.value)), this.props = e;
	}
	set(e) {
		let t = this.getValue(e);
		this.item.value !== t && (this.item.value = t);
	}
	reset() {
		return this.set(), this;
	}
	getValue(e) {
		if (S(e)) return e.trim();
	}
}, I = class {
	constructor(e, t) {
		N(this, "lite", p()), N(this, "control", p()), N(this, "preparation", async () => {
			await this.request.preparation(), this.props.list && this.props.liteThreshold && Number(this.props.liteThreshold) <= Object.keys(this.props.list).length && (this.lite.value = !0);
		}), N(this, "opening", async () => (this.lite.value = !1, this.control.value = !0, !0)), N(this, "closing", async () => (this.lite.value = !1, this.control.value = !1, !0)), this.props = e, this.request = t;
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
}, L = class {
	constructor(e, n, r) {
		N(this, "value", p()), N(this, "selected", s(() => this.props.isSelectedByValue ? this.value.value : this.props.selected)), this.props = e, this.refs = n, this.emits = r, this.props.isSelectedByValue && (new t("selected", this.emits, this.value), n.selected && h(n.selected, (e) => {
			this.value.value = e;
		}, { immediate: !0 }));
	}
	setValue(e, t = !1) {
		var n;
		return this.props.isSelectedByValue && !w(e) && this.value.value !== e && (this.value.value = e, t && ((n = this.emits) == null || n.call(this, "updateValue", e))), this;
	}
}, R = class {
	constructor(e, t, n) {
		N(this, "previous", () => this.go(-1)), N(this, "next", () => this.go(1)), this.props = e, this.value = t, this.data = n;
	}
	getStep() {
		return Number(this.props.step) || 1;
	}
	go(e) {
		let t = this.data.getSelectedByStep(this.getStep() * e);
		return t && this.value.setValue(t, !0), t;
	}
}, z = class {
	constructor(t, r, a, o, c, l, u, d, f) {
		N(this, "request"), N(this, "search"), N(this, "value"), N(this, "data"), N(this, "go"), N(this, "bars"), N(this, "window"), N(this, "menuWindow"), N(this, "event"), N(this, "slotData"), N(this, "binds", s(() => ({
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
		}))), N(this, "onClick", (e, t) => {
			t && "value" in t && this.value.setValue(t.value), this.event.onClick(e, t);
		}), N(this, "onClickSlot", (e) => {
			var t;
			let n = e.target, r = n.closest("*[data-value]");
			r && !n.closest(`.${this.className}__list`) && ((t = this.emits) == null || t.call(this, "clickSlot", r.dataset.value));
		}), this.props = t, this.refs = r, this.element = a, this.classDesign = o, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { BarsIncludeConstructor: p = n, EventClickIncludeConstructor: m = e, ListDataRefConstructor: h = v, MenuGoConstructor: g = R, MenuRequestConstructor: _ = P, MenuSearchConstructor: y = F, MenuValueConstructor: b = L, MenuWindowConstructor: x = I, WindowIncludeConstructor: S = i } = f == null ? {} : f;
		this.request = new _(this.props), this.search = new y(this.props), this.value = new b(this.props, this.refs, this.emits), this.data = new h(this.request.item, void 0, void 0, void 0, void 0, this.value.selected, this.refs.keyValue, this.refs.keyLabel), this.go = new g(this.props, this.value, this.data), this.bars = new p(this.props, this.className, this.components, this.emits), this.menuWindow = new x(this.props, this.request), this.window = new S(this.props, this.className, this.components, this.emits, this.menuWindow.getExtra()), this.event = new m(void 0, void 0, this.emits), this.slotData = {
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
}, B = {
	liteThreshold: 40,
	barsHide: !0,
	barsBackHide: !0,
	tag: "a",
	step: 1,
	autoClose: !0
}, V = class extends _ {
	constructor(e, t, n, r = z) {
		super(e, t, n), N(this, "item"), N(this, "renderControl", (e) => this.initSlot("control", void 0, this.getBinds(e))), N(this, "renderTitle", (e) => {
			let t = [];
			return this.item.bars.is.value && t.push(...this.item.bars.render()), this.initSlot("title", t, this.getBinds(e)), t;
		}), N(this, "renderList", (e) => {
			var t;
			let n = this.item.request.item.value;
			if (n) {
				let r = [];
				return this.initSlot("contextTop", r, this.getBinds(e)), this.props.hideList || r.push(this.components.render("list", E({
					...this.item.binds.value,
					class: (t = this.classes) == null ? void 0 : t.value.list,
					selected: this.item.value.selected.value,
					highlight: this.item.search.value.value,
					list: n,
					lite: this.item.menuWindow.lite.value,
					role: this.props.roleList,
					roleItem: this.props.roleItem
				}, this.props.listAttrs), this.slots)), this.initSlot("contextBottom", r, this.getBinds(e)), u("div", {
					...this.getAttrs(),
					ref: this.element,
					onClick: this.item.onClickSlot
				}, r);
			}
		}), N(this, "renderFooter", (e) => this.initSlot("footer", void 0, this.getBinds(e))), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, H = { barsAdaptive: [
	"showAlways",
	"showSm",
	"showMd",
	"showLg",
	"showXl",
	"show2xl"
] }, U = { ...B }, W = /* @__PURE__ */ l({
	name: "D1Menu",
	__name: "D1Menu",
	props: /* @__PURE__ */ d({
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
	}, U),
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
		let i = n, l = e, u = new V("d1.menu", l, {
			emits: i,
			classes: s(() => ({ main: {
				"d1-menu": !0,
				"d1-menu--hideList": l.hideList,
				[`d1-menu--barsAdaptive--${l.barsAdaptive}`]: x(H.barsAdaptive, l.barsAdaptive)
			} })),
			styles: s(() => ({})),
			components: {
				list: o,
				bars: r,
				window: a
			}
		}), d = u.render();
		return t(u.expose()), (e, t) => (f(), c(m(d)));
	}
});
//#endregion
export { A as n, W as t };

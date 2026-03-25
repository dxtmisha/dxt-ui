import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t as n } from "./Chip-CWpkZ1eD.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, ref as l, unref as u, watch as d } from "vue";
import { DesignConstructorAbstract as f, ListDataRef as p, forEach as m, toBinds as h } from "@dxtmisha/functional";
//#region ../constructor/dist/ModelValueInclude-CJmm5go9.js
var g = Object.defineProperty, _ = (e, t, n) => t in e ? g(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t, n) => _(e, typeof t == "symbol" ? t : t + "", n), y = class {
	constructor(e, n, r, i, a) {
		v(this, "value", l()), v(this, "onClick", (e, t) => {
			var n, r;
			t && "value" in t && !((n = this.readonly) != null && n.value) && (this.value.value = t.value), (r = this.event) == null || r.onClick(e, t);
		}), this.index = e, this.emits = n, this.event = r, this.inputValue = i, this.readonly = a, new t(this.index, this.emits, this.value), d([this.inputValue], () => {
			var e;
			this.value.value = (e = this.inputValue) == null ? void 0 : e.value;
		}, { immediate: !0 });
	}
	getValue() {
		return this.value.value;
	}
}, b = Object.defineProperty, x = (e, t, n) => t in e ? b(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, S = (e, t, n) => x(e, typeof t == "symbol" ? t : t + "", n), C = class {
	constructor(t, n, r, i, a, o, s, c, l) {
		S(this, "data"), S(this, "event"), S(this, "model"), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { EventClickIncludeConstructor: u = e, ListDataRefConstructor: d = p, ModelValueIncludeConstructor: f = y } = l == null ? {} : l;
		this.event = new u(void 0, void 0, this.emits), this.model = new f("selected", this.emits, this.event, this.refs.selected, this.refs.readonly), this.data = new d(this.refs.list, void 0, void 0, void 0, void 0, this.model.value, this.refs.keyValue, this.refs.keyLabel);
	}
	getList() {
		return this.data.fullData.value;
	}
}, w = { readonly: !0 }, T = class extends f {
	constructor(e, t, n, r = C) {
		super(e, t, n), S(this, "item"), S(this, "renderList", () => m(this.item.getList(), (e) => this.renderItem(e))), S(this, "renderItem", (e) => {
			var t;
			return this.components.renderOne("chip", h({
				class: (t = this.classes) == null ? void 0 : t.value.item,
				iconHide: this.props.iconWhenSelected && !e.selected,
				onClick: this.item.model.onClick
			}, this.props.chipAttrs, e), void 0, e.index);
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			item: this.getSubClass("item")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = this.renderList();
		return this.initSlot("default", t), o("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, t);
	}
}, E = { ...w }, D = /* @__PURE__ */ a({
	name: "D1ChipGroup",
	__name: "D1ChipGroup",
	props: /* @__PURE__ */ s({
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		readonly: { type: Boolean },
		selected: { type: [
			Number,
			String,
			Boolean,
			Array
		] },
		list: {},
		iconWhenSelected: { type: Boolean },
		keyLabel: {},
		keyValue: {},
		chipAttrs: {}
	}, E),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected"
	],
	setup(e, { expose: t, emit: a }) {
		let o = new T("d1.chipGroup", e, {
			emits: a,
			classes: r(() => ({ main: { "d1-chipGroup": !0 } })),
			styles: r(() => ({})),
			components: { chip: n }
		}), s = o.render();
		return t(o.expose()), (e, t) => (c(), i(u(s)));
	}
});
//#endregion
export { D as t };

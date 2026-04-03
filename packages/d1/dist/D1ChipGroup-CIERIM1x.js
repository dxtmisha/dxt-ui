import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-Cb8myFDE.js";
import { t as n } from "./ModelInclude-D8LkrhPp-CIue56kI.js";
import { t as r } from "./Chip-D_AyftNu.js";
import { computed as i, createBlock as a, defineComponent as o, h as s, mergeDefaults as c, openBlock as l, ref as u, unref as d, watch as f } from "vue";
import { DesignConstructorAbstract as p, ListDataRef as m, forEach as h, toBinds as g } from "@dxtmisha/functional";
//#region ../constructor/dist/ModelValueInclude-CQDkIoal.js
var _ = class {
	constructor(t, r, i, a, o) {
		e(this, "value", u()), e(this, "onClick", (e, t) => {
			var n, r;
			t && "value" in t && !((n = this.readonly) != null && n.value) && (this.value.value = t.value), (r = this.event) == null || r.onClick(e, t);
		}), this.index = t, this.emits = r, this.event = i, this.inputValue = a, this.readonly = o, new n(this.index, this.emits, this.value), f([this.inputValue], () => {
			var e;
			this.value.value = (e = this.inputValue) == null ? void 0 : e.value;
		}, { immediate: !0 });
	}
	getValue() {
		return this.value.value;
	}
}, v = class {
	constructor(n, r, i, a, o, s, c, l, u) {
		e(this, "data", void 0), e(this, "event", void 0), e(this, "model", void 0), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { EventClickIncludeConstructor: d = t, ListDataRefConstructor: f = m, ModelValueIncludeConstructor: p = _ } = u == null ? {} : u;
		this.event = new d(void 0, void 0, this.emits), this.model = new p("selected", this.emits, this.event, this.refs.selected, this.refs.readonly), this.data = new f(this.refs.list, void 0, void 0, void 0, void 0, this.model.value, this.refs.keyValue, this.refs.keyLabel);
	}
	getList() {
		return this.data.fullData.value;
	}
}, y = { readonly: !0 }, b = class extends p {
	constructor(t, n, r, i = v) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => h(this.item.getList(), (e) => this.renderItem(e))), e(this, "renderItem", (e) => {
			var t;
			return this.components.renderOne("chip", g({
				class: (t = this.classes) == null ? void 0 : t.value.item,
				iconHide: this.props.iconWhenSelected && !e.selected,
				onClick: this.item.model.onClick
			}, this.props.chipAttrs, e), void 0, e.index);
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.initSlot("default", t), s("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, t);
	}
}, x = { ...y }, S = /* @__PURE__ */ o({
	name: "D1ChipGroup",
	__name: "D1ChipGroup",
	props: /* @__PURE__ */ c({
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
	}, x),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected"
	],
	setup(e, { expose: t, emit: n }) {
		let o = new b("d1.chipGroup", e, {
			emits: n,
			classes: i(() => ({ main: { "d1-chipGroup": !0 } })),
			styles: i(() => ({})),
			components: { chip: r }
		}), s = o.render();
		return t(o.expose()), (e, t) => (l(), a(d(s)));
	}
});
//#endregion
export { S as t };

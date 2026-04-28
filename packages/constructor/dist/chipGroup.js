import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./EventClickInclude-DWAJ7AtL.js";
import { t as n } from "./ModelValueInclude-B8vs_Kwq.js";
import { h as r } from "vue";
import { DesignConstructorAbstract as i, ListDataRef as a, forEach as o, toBinds as s } from "@dxtmisha/functional";
//#region src/constructors/ChipGroup/ChipGroup.ts
var c = class {
	constructor(r, i, o, s, c, l, u, d, f) {
		e(this, "data", void 0), e(this, "event", void 0), e(this, "model", void 0), this.props = r, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { EventClickIncludeConstructor: p = t, ListDataRefConstructor: m = a, ModelValueIncludeConstructor: h = n } = f == null ? {} : f;
		this.event = new p(void 0, void 0, this.emits), this.model = new h("selected", this.emits, this.event, this.refs.selected, this.refs.readonly), this.data = new m(this.refs.list, void 0, void 0, void 0, void 0, this.model.value, this.refs.keyValue, this.refs.keyLabel);
	}
	getList() {
		return this.data.fullData.value;
	}
}, l = { readonly: !0 }, u = class extends i {
	constructor(t, n, r, i = c) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => o(this.item.getList(), (e) => this.renderItem(e))), e(this, "renderItem", (e) => {
			var t;
			return this.components.renderOne("chip", s({
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
		return this.initSlot("default", t), r("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, t);
	}
};
//#endregion
export { c as ChipGroup, u as ChipGroupDesign, l as defaultsChipGroup };

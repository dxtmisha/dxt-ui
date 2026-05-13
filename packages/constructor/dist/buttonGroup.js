import { t as e } from "./defineProperty-Dcl1xgfx.js";
import { t } from "./EventClickInclude-lJ8BHn1K.js";
import { t as n } from "./AreaInclude-DQbKVl3q.js";
import { computed as r, h as i } from "vue";
import { DesignConstructorAbstract as a, toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/ButtonGroup/ButtonGroup.ts
var s = class {
	constructor(i, a, o, s, c, l, u, d, f) {
		e(this, "area", void 0), e(this, "event", void 0), e(this, "isList", r(() => !!(this.props.list || this.slots && "default" in this.slots))), this.props = i, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { AreaIncludeConstructor: p = n, EventConstructor: m = t } = f == null ? {} : f;
		this.area = new p(i), this.event = new m(void 0, void 0, d);
	}
}, c = {
	area: "button-group",
	orientation: "horizontal"
}, l = class extends a {
	constructor(t, n, r, i = s) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => {
			let e = [];
			return this.item.isList.value && (this.props.list && this.props.list.forEach((t, n) => {
				var r;
				this.components.renderAdd(e, "button", o({
					class: (r = this.classes) == null ? void 0 : r.value.item,
					onClick: this.item.event.onClick
				}, this.props.buttonAttrs, t), void 0, `list-${n}`);
			}), this.initSlot("default", e)), e;
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
		return i("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.renderList());
	}
};
//#endregion
export { s as ButtonGroup, l as ButtonGroupDesign, c as defaultsButtonGroup };

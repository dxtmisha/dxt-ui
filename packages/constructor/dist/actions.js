import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./EventClickInclude-DmRb7XRg.js";
import { t as n } from "./AreaInclude-BPJ14Wwe.js";
import { t as r } from "./ActionsInclude-DppZSkT3.js";
import { computed as i, h as a } from "vue";
import { DesignConstructorAbstract as o, toBinds as s } from "@dxtmisha/functional";
//#region src/constructors/Actions/Actions.ts
var c = class {
	constructor(r, a, o, s, c, l, u, d, f) {
		e(this, "area", void 0), e(this, "event", void 0), e(this, "isList", i(() => !!(this.props.list || this.slots && "default" in this.slots))), e(this, "isSecondary", i(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots))), this.props = r, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { AreaIncludeConstructor: p = n, EventConstructor: m = t } = f == null ? {} : f;
		this.area = new p(r), this.event = new m(void 0, void 0, d);
	}
}, l = {
	area: "actions",
	align: "right"
}, u = class extends o {
	constructor(t, n, r, i = c) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => {
			let e = [];
			return this.item.isList.value && (this.props.list && this.props.list.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", s({ onClick: this.item.event.onClick }, this.props.buttonAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.list] }), void 0, `list-${n}`);
			}), this.initSlot("default", e)), e;
		}), e(this, "renderSecondary", () => {
			let e = [];
			return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", s(this.props.buttonSecondaryAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.secondary] }), void 0, `secondary-${n}`);
			}), this.initSlot("secondary", e)), e;
		}), e(this, "renderSpacer", () => {
			var e;
			return [a("div", { class: (e = this.classes) == null ? void 0 : e.value.spacer })];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			item: this.getSubClass("item"),
			list: this.getSubClass("list"),
			secondary: this.getSubClass("secondary"),
			spacer: this.getSubClass("spacer")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return a("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			...this.renderList(),
			...this.renderSpacer(),
			...this.renderSecondary()
		]);
	}
};
//#endregion
export { c as Actions, u as ActionsDesign, r as ActionsInclude, l as defaultsActions };

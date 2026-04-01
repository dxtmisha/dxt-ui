import { t as e } from "./defineProperty-hmGKPWdq.js";
import { t } from "./EventClickInclude-6I8kuFc9.js";
import { t as n } from "./ActionsInclude-BzyGXlK7.js";
import { computed as r, h as i } from "vue";
import { DesignConstructorAbstract as a, toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/Actions/Actions.ts
var s = class {
	constructor(n, i, a, o, s, c, l, u, d) {
		e(this, "event", void 0), e(this, "isList", r(() => !!(this.props.list || this.slots && "default" in this.slots))), e(this, "isSecondary", r(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots))), this.props = n, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { EventConstructor: f = t } = d == null ? {} : d;
		this.event = new f(void 0, void 0, u);
	}
}, c = { align: "right" }, l = class extends a {
	constructor(t, n, r, a = s) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => {
			let e = [];
			return this.item.isList.value && (this.props.list && this.props.list.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", o({ onClick: this.item.event.onClick }, this.props.buttonAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.list] }), void 0, `list-${n}`);
			}), this.initSlot("default", e)), e;
		}), e(this, "renderSecondary", () => {
			let e = [];
			return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", o(this.props.buttonSecondaryAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.secondary] }), void 0, `secondary-${n}`);
			}), this.initSlot("secondary", e)), e;
		}), e(this, "renderSpacer", () => {
			var e;
			return [i("div", { class: (e = this.classes) == null ? void 0 : e.value.spacer })];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return i("div", {
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
export { s as Actions, l as ActionsDesign, n as ActionsInclude, c as defaultsActions };

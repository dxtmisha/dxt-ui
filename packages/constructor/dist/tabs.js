import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./EventClickInclude-6I8kuFc9.js";
import { t as r } from "./ModelInclude-D8LkrhPp.js";
import { computed as i, h as a, ref as o, watch as s } from "vue";
import { DesignConstructorAbstract as c, getBind as l, getRef as u, isSelected as d, toBinds as f } from "@dxtmisha/functional";
//#region src/constructors/MotionAxis/MotionAxisInclude.ts
var p = class {
	constructor(e, n, r, a, s, c, l) {
		t(this, "element", o()), t(this, "selectedItem", i(() => this.selected ? u(this.selected) : this.props.selected)), t(this, "binds", i(() => f(u(this.extra), { class: `${this.className}__motionAxis` }, this.props.motionAxisAttrs))), t(this, "render", (e, t) => this.components ? this.components.render("motionAxis", {
			...f(t, this.binds.value, { selected: this.selectedItem.value }),
			ref: this.element,
			onMotionAxis: this.onMotionAxis
		}, e, this.index) : []), t(this, "onMotionAxis", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "motionAxis", e);
		}), this.props = e, this.className = n, this.components = r, this.emits = a, this.extra = s, this.selected = c, this.index = l;
	}
}, m = class {
	constructor(e, n, r, a, s) {
		t(this, "element", o()), t(this, "binds", i(() => f(u(this.extra), {
			class: `${this.className}__tabsNavigation`,
			itemAttrs: this.props.tabItemAttrs
		}, l(this.props.tabs, "list"), this.props.tabsNavigationAttrs))), t(this, "ids", i(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.ids;
		})), t(this, "render", (e, t) => this.components ? this.components.render("tabsNavigation", f(t, this.binds.value, { ref: this.element }), e, this.index) : []), this.props = e, this.className = n, this.components = r, this.extra = a, this.index = s;
	}
}, h = class {
	constructor(e, n) {
		t(this, "item", o()), t(this, "set", (e) => {
			this.item.value = e;
		}), t(this, "update", () => {
			this.is(this.props.selected) || this.set(this.props.selected);
		}), this.props = e, this.refs = n, this.item.value = e.selected, s([this.refs.selected], this.update);
	}
	is(e) {
		return d(e, this.item.value);
	}
}, g = class {
	constructor(e, a, o, s, c, l, u, d, f) {
		t(this, "event", void 0), t(this, "motionAxis", void 0), t(this, "tabsNavigation", void 0), t(this, "selected", void 0), this.props = e, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { EventClickIncludeConstructor: g = n, ModelIncludeConstructor: _ = r, MotionAxisIncludeConstructor: v = p, TabsNavigationIncludeConstructor: y = m, TabsSelectedConstructor: b = h } = f == null ? {} : f;
		this.selected = new b(this.props, this.refs), this.event = new g(void 0, void 0, this.emits), this.tabsNavigation = new y(this.props, this.className, this.components, i(() => ({
			selected: this.selected.item.value,
			onClick: this.event.onClick,
			"onUpdate:selected": this.selected.set
		}))), this.motionAxis = new v(this.props, this.className, this.components, this.emits, void 0, i(() => String(this.selected.item.value))), new _("selected", this.emits, this.selected.item);
	}
}, _ = {}, v = class extends c {
	constructor(n, r, i, o = g) {
		super(n, r, i), t(this, "item", void 0), t(this, "slidesRender", () => {
			if (this.slots) {
				let n = {};
				for (let r in this.slots) {
					var t;
					let i = (t = this.item.tabsNavigation.ids.value) == null ? void 0 : t[r];
					n[r] = () => {
						var t;
						return a("div", {
							class: (t = this.classes) == null ? void 0 : t.value.slide,
							...e.role("tabpanel"),
							...e.labelledby(i)
						}, this.initSlot(r));
					};
				}
				return n;
			}
		}), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			slide: this.getSubClass("slide")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		return this.item.tabsNavigation.ids.value ? [...this.item.tabsNavigation.render(), ...this.item.motionAxis.render(this.slidesRender())] : this.item.tabsNavigation.render();
	}
};
//#endregion
export { g as Tabs, v as TabsDesign, _ as defaultsTabs };

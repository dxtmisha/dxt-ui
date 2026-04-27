import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./EventClickInclude-DWAJ7AtL.js";
import { t as r } from "./ModelInclude-BLoWPZyI.js";
import { t as i } from "./MotionAxisInclude-yF9vyi7i.js";
import { t as a } from "./TabsNavigationInclude-CyN50URm.js";
import { computed as o, h as s, ref as c, watch as l } from "vue";
import { DesignConstructorAbstract as u, isSelected as d } from "@dxtmisha/functional";
//#region src/constructors/Tabs/TabsSelected.ts
var f = class {
	constructor(e, n) {
		t(this, "item", c()), t(this, "set", (e) => {
			this.item.value = e;
		}), t(this, "update", () => {
			this.is(this.props.selected) || this.set(this.props.selected);
		}), this.props = e, this.refs = n, this.item.value = e.selected, l([this.refs.selected], this.update);
	}
	is(e) {
		return d(e, this.item.value);
	}
}, p = class {
	constructor(e, s, c, l, u, d, p, m, h) {
		t(this, "event", void 0), t(this, "motionAxis", void 0), t(this, "tabsNavigation", void 0), t(this, "selected", void 0), this.props = e, this.refs = s, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = p, this.emits = m;
		let { EventClickIncludeConstructor: g = n, ModelIncludeConstructor: _ = r, MotionAxisIncludeConstructor: v = i, TabsNavigationIncludeConstructor: y = a, TabsSelectedConstructor: b = f } = h == null ? {} : h;
		this.selected = new b(this.props, this.refs), this.event = new g(void 0, void 0, this.emits), this.tabsNavigation = new y(this.props, this.className, this.components, o(() => ({
			selected: this.selected.item.value,
			onClick: this.event.onClick,
			"onUpdate:selected": this.selected.set
		}))), this.motionAxis = new v(this.props, this.className, this.components, this.emits, void 0, o(() => String(this.selected.item.value))), new _("selected", this.emits, this.selected.item);
	}
}, m = {}, h = class extends u {
	constructor(n, r, i, a = p) {
		super(n, r, i), t(this, "item", void 0), t(this, "slidesRender", () => {
			if (this.slots) {
				let n = {};
				for (let r in this.slots) {
					var t;
					let i = (t = this.item.tabsNavigation.ids.value) == null ? void 0 : t[r];
					n[r] = () => {
						var t;
						return s("div", {
							class: (t = this.classes) == null ? void 0 : t.value.slide,
							...e.role("tabpanel"),
							...e.labelledby(i)
						}, this.initSlot(r));
					};
				}
				return n;
			}
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
export { p as Tabs, h as TabsDesign, f as TabsSelected, m as defaultsTabs };

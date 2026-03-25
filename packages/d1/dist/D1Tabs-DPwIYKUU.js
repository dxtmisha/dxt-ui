import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t as n } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as r } from "./MotionAxis-DkY5i_Gj.js";
import { t as i } from "./TabsNavigation-CGGLtNpu.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, ref as d, unref as f, watch as p } from "vue";
import { DesignConstructorAbstract as m, getBind as h, getRef as g, isSelected as _, toBinds as v } from "@dxtmisha/functional";
//#region ../constructor/dist/tabs.js
var y = Object.defineProperty, b = (e, t, n) => t in e ? y(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, x = (e, t, n) => b(e, typeof t == "symbol" ? t : t + "", n), S = class {
	constructor(e, t, n, r, i, o, s) {
		x(this, "element", d()), x(this, "selectedItem", a(() => this.selected ? g(this.selected) : this.props.selected)), x(this, "binds", a(() => v(g(this.extra), { class: `${this.className}__motionAxis` }, this.props.motionAxisAttrs))), x(this, "render", (e, t) => this.components ? this.components.render("motionAxis", {
			...v(t, this.binds.value, { selected: this.selectedItem.value }),
			ref: this.element,
			onMotionAxis: this.onMotionAxis
		}, e, this.index) : []), x(this, "onMotionAxis", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "motionAxis", e);
		}), this.props = e, this.className = t, this.components = n, this.emits = r, this.extra = i, this.selected = o, this.index = s;
	}
}, C = class {
	constructor(e, t, n, r, i) {
		x(this, "element", d()), x(this, "binds", a(() => v(g(this.extra), {
			class: `${this.className}__tabsNavigation`,
			itemAttrs: this.props.tabItemAttrs
		}, h(this.props.tabs, "list"), this.props.tabsNavigationAttrs))), x(this, "ids", a(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.ids;
		})), x(this, "render", (e, t) => this.components ? this.components.render("tabsNavigation", v(t, this.binds.value, { ref: this.element }), e, this.index) : []), this.props = e, this.className = t, this.components = n, this.extra = r, this.index = i;
	}
}, w = class {
	constructor(e, t) {
		x(this, "item", d()), x(this, "set", (e) => {
			this.item.value = e;
		}), x(this, "update", () => {
			this.is(this.props.selected) || this.set(this.props.selected);
		}), this.props = e, this.refs = t, this.item.value = e.selected, p([this.refs.selected], this.update);
	}
	is(e) {
		return _(e, this.item.value);
	}
}, T = class {
	constructor(n, r, i, o, s, c, l, u, d) {
		x(this, "event"), x(this, "motionAxis"), x(this, "tabsNavigation"), x(this, "selected"), this.props = n, this.refs = r, this.element = i, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { EventClickIncludeConstructor: f = e, ModelIncludeConstructor: p = t, MotionAxisIncludeConstructor: m = S, TabsNavigationIncludeConstructor: h = C, TabsSelectedConstructor: g = w } = d == null ? {} : d;
		this.selected = new g(this.props, this.refs), this.event = new f(void 0, void 0, this.emits), this.tabsNavigation = new h(this.props, this.className, this.components, a(() => ({
			selected: this.selected.item.value,
			onClick: this.event.onClick,
			"onUpdate:selected": this.selected.set
		}))), this.motionAxis = new m(this.props, this.className, this.components, this.emits, void 0, a(() => String(this.selected.item.value))), new p("selected", this.emits, this.selected.item);
	}
}, E = {}, D = class extends m {
	constructor(e, t, r, i = T) {
		super(e, t, r), x(this, "item"), x(this, "slidesRender", () => {
			var e;
			if (this.slots) {
				let t = {};
				for (let r in this.slots) {
					let i = (e = this.item.tabsNavigation.ids.value) == null ? void 0 : e[r];
					t[r] = () => {
						var e;
						return c("div", {
							class: (e = this.classes) == null ? void 0 : e.value.slide,
							...n.role("tabpanel"),
							...n.labelledby(i)
						}, this.initSlot(r));
					};
				}
				return t;
			}
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, O = { ...E }, k = /* @__PURE__ */ s({
	name: "D1Tabs",
	__name: "D1Tabs",
	props: /* @__PURE__ */ l({
		tabs: {},
		tabItemAttrs: {},
		tabsNavigationAttrs: {},
		selected: {},
		motionAxisAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function }
	}, O),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected",
		"motionAxis"
	],
	setup(e, { expose: t, emit: n }) {
		let s = new D("d1.tabs", e, {
			emits: n,
			classes: a(() => ({ main: { "d1-tabs": !0 } })),
			styles: a(() => ({})),
			components: {
				tabsNavigation: i,
				motionAxis: r
			}
		}), c = s.render();
		return t(s.expose()), (e, t) => (u(), o(f(c)));
	}
});
//#endregion
export { k as t };

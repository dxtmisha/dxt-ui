import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-BuvQZC32.js";
import { t as n } from "./ModelInclude-D8LkrhPp-CIue56kI.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as i } from "./MotionAxis-CJ9HuCwf.js";
import { t as a } from "./TabsNavigation-DkMOpcRx.js";
import { computed as o, createBlock as s, defineComponent as c, h as l, mergeDefaults as u, openBlock as d, ref as f, unref as p, watch as m } from "vue";
import { DesignConstructorAbstract as h, getBind as g, getRef as _, isSelected as v, toBinds as y } from "@dxtmisha/functional";
//#region ../constructor/dist/tabs.js
var b = class {
	constructor(t, n, r, i, a, s, c) {
		e(this, "element", f()), e(this, "selectedItem", o(() => this.selected ? _(this.selected) : this.props.selected)), e(this, "binds", o(() => y(_(this.extra), { class: `${this.className}__motionAxis` }, this.props.motionAxisAttrs))), e(this, "render", (e, t) => this.components ? this.components.render("motionAxis", {
			...y(t, this.binds.value, { selected: this.selectedItem.value }),
			ref: this.element,
			onMotionAxis: this.onMotionAxis
		}, e, this.index) : []), e(this, "onMotionAxis", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "motionAxis", e);
		}), this.props = t, this.className = n, this.components = r, this.emits = i, this.extra = a, this.selected = s, this.index = c;
	}
}, x = class {
	constructor(t, n, r, i, a) {
		e(this, "element", f()), e(this, "binds", o(() => y(_(this.extra), {
			class: `${this.className}__tabsNavigation`,
			itemAttrs: this.props.tabItemAttrs
		}, g(this.props.tabs, "list"), this.props.tabsNavigationAttrs))), e(this, "ids", o(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.ids;
		})), e(this, "render", (e, t) => this.components ? this.components.render("tabsNavigation", y(t, this.binds.value, { ref: this.element }), e, this.index) : []), this.props = t, this.className = n, this.components = r, this.extra = i, this.index = a;
	}
}, S = class {
	constructor(t, n) {
		e(this, "item", f()), e(this, "set", (e) => {
			this.item.value = e;
		}), e(this, "update", () => {
			this.is(this.props.selected) || this.set(this.props.selected);
		}), this.props = t, this.refs = n, this.item.value = t.selected, m([this.refs.selected], this.update);
	}
	is(e) {
		return v(e, this.item.value);
	}
}, C = class {
	constructor(r, i, a, s, c, l, u, d, f) {
		e(this, "event", void 0), e(this, "motionAxis", void 0), e(this, "tabsNavigation", void 0), e(this, "selected", void 0), this.props = r, this.refs = i, this.element = a, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { EventClickIncludeConstructor: p = t, ModelIncludeConstructor: m = n, MotionAxisIncludeConstructor: h = b, TabsNavigationIncludeConstructor: g = x, TabsSelectedConstructor: _ = S } = f == null ? {} : f;
		this.selected = new _(this.props, this.refs), this.event = new p(void 0, void 0, this.emits), this.tabsNavigation = new g(this.props, this.className, this.components, o(() => ({
			selected: this.selected.item.value,
			onClick: this.event.onClick,
			"onUpdate:selected": this.selected.set
		}))), this.motionAxis = new h(this.props, this.className, this.components, this.emits, void 0, o(() => String(this.selected.item.value))), new m("selected", this.emits, this.selected.item);
	}
}, w = {}, T = class extends h {
	constructor(t, n, i, a = C) {
		super(t, n, i), e(this, "item", void 0), e(this, "slidesRender", () => {
			if (this.slots) {
				let t = {};
				for (let n in this.slots) {
					var e;
					let i = (e = this.item.tabsNavigation.ids.value) == null ? void 0 : e[n];
					t[n] = () => {
						var e;
						return l("div", {
							class: (e = this.classes) == null ? void 0 : e.value.slide,
							...r.role("tabpanel"),
							...r.labelledby(i)
						}, this.initSlot(n));
					};
				}
				return t;
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
}, E = { ...w }, D = /* @__PURE__ */ c({
	name: "D1Tabs",
	__name: "D1Tabs",
	props: /* @__PURE__ */ u({
		tabs: {},
		tabItemAttrs: {},
		tabsNavigationAttrs: {},
		selected: {},
		motionAxisAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function }
	}, E),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected",
		"motionAxis"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new T("d1.tabs", e, {
			emits: n,
			classes: o(() => ({ main: { "d1-tabs": !0 } })),
			styles: o(() => ({})),
			components: {
				tabsNavigation: a,
				motionAxis: i
			}
		}), c = r.render();
		return t(r.expose()), (e, t) => (d(), s(p(c)));
	}
});
//#endregion
export { D as t };

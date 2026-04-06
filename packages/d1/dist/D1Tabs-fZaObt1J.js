import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-Cb8myFDE.js";
import { t as n } from "./ModelInclude-D8LkrhPp-CIue56kI.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as i, t as a } from "./MotionAxis-pMc3mEBD.js";
import { n as o, t as s } from "./TabsNavigation-Cz5JlhpW.js";
import { computed as c, createBlock as l, defineComponent as u, h as d, mergeDefaults as f, openBlock as p, ref as m, unref as h, watch as g } from "vue";
import { DesignConstructorAbstract as _, isSelected as v } from "@dxtmisha/functional";
//#region ../constructor/dist/tabs.js
var y = class {
	constructor(t, n) {
		e(this, "item", m()), e(this, "set", (e) => {
			this.item.value = e;
		}), e(this, "update", () => {
			this.is(this.props.selected) || this.set(this.props.selected);
		}), this.props = t, this.refs = n, this.item.value = t.selected, g([this.refs.selected], this.update);
	}
	is(e) {
		return v(e, this.item.value);
	}
}, b = class {
	constructor(r, a, s, l, u, d, f, p, m) {
		e(this, "event", void 0), e(this, "motionAxis", void 0), e(this, "tabsNavigation", void 0), e(this, "selected", void 0), this.props = r, this.refs = a, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { EventClickIncludeConstructor: h = t, ModelIncludeConstructor: g = n, MotionAxisIncludeConstructor: _ = i, TabsNavigationIncludeConstructor: v = o, TabsSelectedConstructor: b = y } = m == null ? {} : m;
		this.selected = new b(this.props, this.refs), this.event = new h(void 0, void 0, this.emits), this.tabsNavigation = new v(this.props, this.className, this.components, c(() => ({
			selected: this.selected.item.value,
			onClick: this.event.onClick,
			"onUpdate:selected": this.selected.set
		}))), this.motionAxis = new _(this.props, this.className, this.components, this.emits, void 0, c(() => String(this.selected.item.value))), new g("selected", this.emits, this.selected.item);
	}
}, x = {}, S = class extends _ {
	constructor(t, n, i, a = b) {
		super(t, n, i), e(this, "item", void 0), e(this, "slidesRender", () => {
			if (this.slots) {
				let t = {};
				for (let n in this.slots) {
					var e;
					let i = (e = this.item.tabsNavigation.ids.value) == null ? void 0 : e[n];
					t[n] = () => {
						var e;
						return d("div", {
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
}, C = { ...x }, w = /* @__PURE__ */ u({
	name: "D1Tabs",
	__name: "D1Tabs",
	props: /* @__PURE__ */ f({
		tabs: {},
		tabItemAttrs: {},
		tabsNavigationAttrs: {},
		selected: {},
		motionAxisAttrs: {},
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function }
	}, C),
	emits: [
		"click",
		"clickLite",
		"update:selected",
		"update:modelSelected",
		"motionAxis"
	],
	setup(e, { expose: t, emit: n }) {
		let r = new S("d1.tabs", e, {
			emits: n,
			classes: c(() => ({ main: { "d1-tabs": !0 } })),
			styles: c(() => ({})),
			components: {
				tabsNavigation: s,
				motionAxis: a
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (p(), l(h(i)));
	}
});
//#endregion
export { w as t };

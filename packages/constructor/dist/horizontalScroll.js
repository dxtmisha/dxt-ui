import { t as e } from "./defineProperty-hmGKPWdq.js";
import { t } from "./ScrollToXInclude-CGJUztN1.js";
import { computed as n, h as r, nextTick as i, onMounted as a } from "vue";
import { DesignConstructorAbstract as o, goScrollTo as s } from "@dxtmisha/functional";
//#region src/constructors/HorizontalScroll/HorizontalScroll.ts
var c = class {
	constructor(r, o, c, l, u, d, f, p, m) {
		e(this, "scroll", void 0), e(this, "binds", n(() => ({
			ref: this.element,
			...this.scroll.binds.value
		}))), e(this, "expose", { toSelected: () => this.toSelected() }), e(this, "slotData", n(() => ({
			classItem: `${this.className}__item`,
			classItemSelected: `${this.className}__item--selected`,
			binds: { class: `${this.className}__item` }
		}))), e(this, "toSelected", () => {
			let e = this.getItemSelected();
			this.element.value && e && s(this.element.value, e);
		}), this.props = r, this.refs = o, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { ScrollToXIncludeConstructor: h = t } = m == null ? {} : m;
		this.scroll = new h(c), a(async () => {
			await i(), requestAnimationFrame(() => this.toSelected());
		});
	}
	getItemSelected() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.slotData.value.classItemSelected}`)) == null ? void 0 : e;
	}
}, l = {
	tag: "div",
	flush: !0,
	align: "stretch"
}, u = class extends o {
	constructor(t, n, r, i = c) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.expose };
	}
	initClasses() {
		return { main: {} };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e, t;
		let n = [];
		return this.initSlot("default", n, this.item.slotData.value), r((e = this.props.tag) == null ? "div" : e, {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...this.item.binds.value
		}, n);
	}
};
//#endregion
export { c as HorizontalScroll, u as HorizontalScrollDesign, l as defaultsHorizontalScroll };

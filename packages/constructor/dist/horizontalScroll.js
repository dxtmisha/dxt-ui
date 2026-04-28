import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./ScrollToXInclude-vjETnrJD.js";
import { t as n } from "./HorizontalScrollInclude-D21mP8pa.js";
import { computed as r, h as i, nextTick as a, onMounted as o } from "vue";
import { DesignConstructorAbstract as s, goScrollTo as c } from "@dxtmisha/functional";
//#region src/constructors/HorizontalScroll/HorizontalScroll.ts
var l = class {
	constructor(n, i, s, l, u, d, f, p, m) {
		e(this, "scroll", void 0), e(this, "binds", r(() => ({
			ref: this.element,
			...this.scroll.binds.value
		}))), e(this, "expose", { toSelected: () => this.toSelected() }), e(this, "slotData", r(() => ({
			classItem: `${this.className}__item`,
			classItemSelected: `${this.className}__item--selected`,
			binds: { class: `${this.className}__item` }
		}))), e(this, "toSelected", () => {
			let e = this.getItemSelected();
			this.element.value && e && c(this.element.value, e);
		}), this.props = n, this.refs = i, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { ScrollToXIncludeConstructor: h = t } = m == null ? {} : m;
		this.scroll = new h(s), o(async () => {
			await a(), requestAnimationFrame(() => this.toSelected());
		});
	}
	getItemSelected() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.slotData.value.classItemSelected}`)) == null ? void 0 : e;
	}
}, u = {
	tag: "div",
	flush: !0,
	align: "stretch"
}, d = class extends s {
	constructor(t, n, r, i = l) {
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
		return this.initSlot("default", n, this.item.slotData.value), i((e = this.props.tag) == null ? "div" : e, {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...this.item.binds.value
		}, n);
	}
};
//#endregion
export { l as HorizontalScroll, d as HorizontalScrollDesign, n as HorizontalScrollInclude, u as defaultsHorizontalScroll };

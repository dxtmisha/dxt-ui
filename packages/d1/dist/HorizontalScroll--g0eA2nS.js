import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, nextTick as o, onMounted as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u, goScrollTo as d, inArray as f } from "@dxtmisha/functional";
//#region ../constructor/dist/ScrollToXInclude-BaBebzoy.js
var p = class {
	constructor(n) {
		e(this, "binds", t(() => ({ onWheelPassive: this.onScrollToX }))), e(this, "onScrollToX", (e) => {
			this.element.value && e.deltaY !== 0 && this.isNotScrollSnap() && (e.preventDefault(), this.element.value.scrollLeft += Number(e.deltaY));
		}), this.element = n;
	}
	isNotScrollSnap() {
		return this.element.value ? getComputedStyle(this.element.value).scrollSnapType !== "x mandatory" : !0;
	}
}, m = class {
	constructor(n, r, i, a, c, l, u, f, m) {
		e(this, "scroll", void 0), e(this, "binds", t(() => ({
			ref: this.element,
			...this.scroll.binds.value
		}))), e(this, "expose", { toSelected: () => this.toSelected() }), e(this, "slotData", t(() => ({
			classItem: `${this.className}__item`,
			classItemSelected: `${this.className}__item--selected`,
			binds: { class: `${this.className}__item` }
		}))), e(this, "toSelected", () => {
			let e = this.getItemSelected();
			this.element.value && e && d(this.element.value, e);
		}), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = c, this.components = l, this.slots = u, this.emits = f;
		let { ScrollToXIncludeConstructor: h = p } = m == null ? {} : m;
		this.scroll = new h(i), s(async () => {
			await o(), requestAnimationFrame(() => this.toSelected());
		});
	}
	getItemSelected() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.slotData.value.classItemSelected}`)) == null ? void 0 : e;
	}
}, h = {
	tag: "div",
	flush: !0,
	align: "stretch"
}, g = class extends u {
	constructor(t, n, r, i = m) {
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
}, _ = { align: [
	"block",
	"center",
	"left",
	"right"
] }, v = {
	...h,
	flush: !0,
	align: "stretch"
}, y = /* @__PURE__ */ r({
	name: "D1HorizontalScroll",
	__name: "D1HorizontalScroll",
	props: /* @__PURE__ */ a({
		flush: { type: Boolean },
		tag: {},
		align: {}
	}, v),
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, s = new g("d1.horizontalScroll", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-horizontalScroll": !0,
				"d1-horizontalScroll--flush": o.flush,
				[`d1-horizontalScroll--align--${o.align}`]: f(_.align, o.align)
			} })),
			styles: t(() => ({}))
		}), u = s.render();
		return r(s.expose()), (e, t) => (c(), n(l(u)));
	}
});
//#endregion
export { y as t };

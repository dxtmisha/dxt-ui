import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, nextTick as o, onMounted as s, openBlock as c, ref as l, unref as u } from "vue";
import { DesignConstructorAbstract as d, getRef as f, goScrollTo as p, inArray as m, toBinds as h } from "@dxtmisha/functional";
//#region ../constructor/dist/ScrollToXInclude-BNXtTtFL.js
var g = class {
	constructor(n) {
		e(this, "binds", t(() => ({ onWheelPassive: this.onScrollToX }))), e(this, "onScrollToX", (e) => {
			this.element.value && e.deltaY !== 0 && this.isNotScrollSnap() && (e.preventDefault(), this.element.value.scrollLeft += Number(e.deltaY));
		}), this.element = n;
	}
	isNotScrollSnap() {
		return this.element.value ? getComputedStyle(this.element.value).scrollSnapType !== "x mandatory" : !0;
	}
}, _ = class {
	constructor(n, r, i, a, o) {
		e(this, "element", l()), e(this, "elementHtml", t(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.elementHtml;
		})), e(this, "binds", t(() => h(f(this.extra), {
			ref: this.element,
			flush: this.props.horizontalScrollFlush,
			align: this.props.horizontalScrollAlign
		}, this.props.horizontalScrollAttrs))), e(this, "toSelected", () => {
			var e, t;
			(e = this.element.value) == null || (t = e.toSelected) == null || t.call(e);
		}), e(this, "render", (e, t) => {
			if (this.components) {
				var n;
				return this.components.render("horizontalScroll", {
					...this.binds.value,
					...f(t)
				}, e, (n = this.index) == null ? "horizontalScroll" : n);
			}
			return [];
		}), this.props = n, this.className = r, this.components = i, this.extra = a, this.index = o;
	}
}, v = class {
	constructor(n, r, i, a, c, l, u, d, f) {
		e(this, "scroll", void 0), e(this, "binds", t(() => ({
			ref: this.element,
			...this.scroll.binds.value
		}))), e(this, "expose", { toSelected: () => this.toSelected() }), e(this, "slotData", t(() => ({
			classItem: `${this.className}__item`,
			classItemSelected: `${this.className}__item--selected`,
			binds: { class: `${this.className}__item` }
		}))), e(this, "toSelected", () => {
			let e = this.getItemSelected();
			this.element.value && e && p(this.element.value, e);
		}), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { ScrollToXIncludeConstructor: m = g } = f == null ? {} : f;
		this.scroll = new m(i), s(async () => {
			await o(), requestAnimationFrame(() => this.toSelected());
		});
	}
	getItemSelected() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.slotData.value.classItemSelected}`)) == null ? void 0 : e;
	}
}, y = {
	tag: "div",
	flush: !0,
	align: "stretch"
}, b = class extends d {
	constructor(t, n, r, i = v) {
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
}, x = { align: [
	"block",
	"center",
	"left",
	"right"
] }, S = {
	...y,
	flush: !0,
	align: "stretch"
}, C = /* @__PURE__ */ r({
	name: "D1HorizontalScroll",
	__name: "D1HorizontalScroll",
	props: /* @__PURE__ */ a({
		flush: { type: Boolean },
		tag: {},
		align: {}
	}, S),
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, s = new b("d1.horizontalScroll", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-horizontalScroll": !0,
				"d1-horizontalScroll--flush": o.flush,
				[`d1-horizontalScroll--align--${o.align}`]: m(x.align, o.align)
			} })),
			styles: t(() => ({}))
		}), l = s.render();
		return r(s.expose()), (e, t) => (c(), n(u(l)));
	}
});
//#endregion
export { _ as n, C as t };

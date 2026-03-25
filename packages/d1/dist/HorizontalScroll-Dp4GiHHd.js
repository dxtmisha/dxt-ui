import { computed as e, createBlock as t, defineComponent as n, h as r, mergeDefaults as i, nextTick as a, onMounted as o, openBlock as s, unref as c } from "vue";
import { DesignConstructorAbstract as l, goScrollTo as u, inArray as d } from "@dxtmisha/functional";
//#region ../constructor/dist/ScrollToXInclude-DvJzmTtW.js
var f = Object.defineProperty, p = (e, t, n) => t in e ? f(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, m = (e, t, n) => p(e, typeof t == "symbol" ? t : t + "", n), h = class {
	constructor(t) {
		m(this, "binds", e(() => ({ onWheelPassive: this.onScrollToX }))), m(this, "onScrollToX", (e) => {
			this.element.value && e.deltaY !== 0 && this.isNotScrollSnap() && (e.preventDefault(), this.element.value.scrollLeft += Number(e.deltaY));
		}), this.element = t;
	}
	isNotScrollSnap() {
		return this.element.value ? getComputedStyle(this.element.value).scrollSnapType !== "x mandatory" : !0;
	}
}, g = Object.defineProperty, _ = (e, t, n) => t in e ? g(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t, n) => _(e, typeof t == "symbol" ? t : t + "", n), y = class {
	constructor(t, n, r, i, s, c, l, d, f) {
		v(this, "scroll"), v(this, "binds", e(() => ({
			ref: this.element,
			...this.scroll.binds.value
		}))), v(this, "expose", { toSelected: () => this.toSelected() }), v(this, "slotData", e(() => ({
			classItem: `${this.className}__item`,
			classItemSelected: `${this.className}__item--selected`,
			binds: { class: `${this.className}__item` }
		}))), v(this, "toSelected", () => {
			let e = this.getItemSelected();
			this.element.value && e && u(this.element.value, e);
		}), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = s, this.components = c, this.slots = l, this.emits = d;
		let { ScrollToXIncludeConstructor: p = h } = f == null ? {} : f;
		this.scroll = new p(r), o(async () => {
			await a(), requestAnimationFrame(() => this.toSelected());
		});
	}
	getItemSelected() {
		var e, t;
		return (t = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.slotData.value.classItemSelected}`)) == null ? void 0 : t;
	}
}, b = {
	tag: "div",
	flush: !0,
	align: "stretch"
}, x = class extends l {
	constructor(e, t, n, r = y) {
		super(e, t, n), v(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, S = { align: [
	"block",
	"center",
	"left",
	"right"
] }, C = {
	...b,
	flush: !0,
	align: "stretch"
}, w = /* @__PURE__ */ n({
	name: "D1HorizontalScroll",
	__name: "D1HorizontalScroll",
	props: /* @__PURE__ */ i({
		flush: { type: Boolean },
		tag: {},
		align: {}
	}, C),
	setup(n, { expose: r, emit: i }) {
		let a = i, o = n, l = new x("d1.horizontalScroll", o, {
			emits: a,
			classes: e(() => ({ main: {
				"d1-horizontalScroll": !0,
				"d1-horizontalScroll--flush": o.flush,
				[`d1-horizontalScroll--align--${o.align}`]: d(S.align, o.align)
			} })),
			styles: e(() => ({}))
		}), u = l.render();
		return r(l.expose()), (e, n) => (s(), t(c(u)));
	}
});
//#endregion
export { w as t };

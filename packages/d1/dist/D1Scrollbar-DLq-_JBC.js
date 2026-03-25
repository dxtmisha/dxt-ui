import { computed as e, createBlock as t, defineComponent as n, h as r, mergeDefaults as i, onUnmounted as a, openBlock as o, unref as s, watch as c } from "vue";
import { DesignConstructorAbstract as l, EventItem as u, ScrollbarWidthRef as d } from "@dxtmisha/functional";
//#region ../constructor/dist/scrollbar.js
var f = Object.defineProperty, p = (e, t, n) => t in e ? f(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, m = (e, t, n) => p(e, typeof t == "symbol" ? t : t + "", n), h = 8, g = class {
	constructor(e, t, n, r, i) {
		m(this, "event"), m(this, "eventSub"), m(this, "top", !1), m(this, "bottom", !1), m(this, "toggle", () => {
			this.props.divider || this.props.dividerTop || this.props.dividerBottom ? this.start() : this.stop();
		}), m(this, "reset", () => {
			var e;
			this.element.value ? (this.event && (this.event.setElement(this.element.value), this.eventSub && (e = this.element.value.children) != null && e[0] && this.eventSub.setElement(this.element.value.children[0])), this.toggle(), this.update()) : this.stop();
		}), m(this, "update", () => {
			let e = this.element.value;
			e && (e.classList.toggle(`${this.className}--divider--top`, this.top), e.classList.toggle(`${this.className}--divider--bottom`, this.bottom), e.dataset.scrollbarDivider = this.top || this.bottom ? "divider" : "none");
		}), m(this, "on", () => {
			let e = this.element.value;
			e && this.setData(e.scrollTop > h, e.scrollTop < e.scrollHeight - e.clientHeight - h);
		}), this.props = e, this.element = n, this.className = r, this.emits = i, c([
			this.element,
			t.divider,
			t.dividerTop,
			t.dividerBottom,
			t.inverse
		], this.reset, { immediate: !0 }), a(() => this.stop());
	}
	start() {
		var e, t;
		this.event ? this.event.start() : this.event = new u(this.element.value, ["scroll-sync"], this.on).start(), this.eventSub ? this.eventSub.start() : (t = (e = this.element.value) == null ? void 0 : e.children) != null && t[0] && (this.eventSub = new u(this.element.value.children[0], ["resize"], this.on).start()), this.on();
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0), this.eventSub && (this.eventSub.stop(), this.eventSub = void 0);
	}
	setData(e, t) {
		return (this.top !== e || this.bottom !== t) && this.setTop(e).setBottom(t).update(), this;
	}
	setTop(e) {
		var t, n, r, i;
		return this.top !== e && (this.top = e, (t = this.emits) == null || t.call(this, "top", e), (n = this.emits) == null || n.call(this, "edge", e, this.bottom, "top"), e ? (r = this.emits) == null || r.call(this, "reachTop") : (i = this.emits) == null || i.call(this, "leaveTop")), this;
	}
	setBottom(e) {
		var t, n, r, i;
		return this.bottom !== e && (this.bottom = e, (t = this.emits) == null || t.call(this, "bottom", e), (n = this.emits) == null || n.call(this, "edge", this.top, e, "bottom"), e ? (r = this.emits) == null || r.call(this, "reachBottom") : (i = this.emits) == null || i.call(this, "leaveBottom")), this;
	}
}, _ = class {
	constructor(t, n, r, i, a, o, s, c, l) {
		m(this, "width"), m(this, "border"), m(this, "classes", e(() => ({ [`${this.className}--disabled`]: !!this.width.item.value }))), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { ScrollbarBorderConstructor: u = g, ScrollbarWidthRefConstructor: f = d } = l == null ? {} : l;
		this.width = new f(), this.border = new u(t, n, r, a, c);
	}
}, v = { tag: "div" }, y = class extends l {
	constructor(e, t, n, r = _) {
		super(e, t, n), m(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return { main: this.item.classes.value };
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e, t;
		let n = [this.initSlot("default")];
		if (this.item.width.is.value) return r((e = this.props.tag) == null ? "div" : e, {
			...this.getAttrs(),
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main
		}, n);
	}
}, b = { ...v }, x = /* @__PURE__ */ n({
	name: "D1Scrollbar",
	__name: "D1Scrollbar",
	props: /* @__PURE__ */ i({
		tag: {},
		visible: { type: Boolean },
		divider: { type: Boolean },
		dividerTop: { type: Boolean },
		dividerBottom: { type: Boolean },
		dividerHide: { type: Boolean },
		inverse: { type: Boolean },
		standard: { type: Boolean }
	}, b),
	emits: [
		"top",
		"reachTop",
		"leaveTop",
		"bottom",
		"reachBottom",
		"leaveBottom",
		"edge"
	],
	setup(n, { expose: r, emit: i }) {
		let a = i, c = n, l = new y("d1.scrollbar", c, {
			emits: a,
			classes: e(() => ({ main: {
				"d1-scrollbar": !0,
				"d1-scrollbar--visible": c.visible,
				"d1-scrollbar--divider": c.divider,
				"d1-scrollbar--dividerTop": c.dividerTop,
				"d1-scrollbar--dividerBottom": c.dividerBottom,
				"d1-scrollbar--dividerHide": c.dividerHide,
				"d1-scrollbar--inverse": c.inverse,
				"d1-scrollbar--standard": c.standard
			} })),
			styles: e(() => ({}))
		}), u = l.render();
		return r(l.expose()), (e, n) => (o(), t(s(u)));
	}
});
//#endregion
export { x as t };

import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, onUnmounted as o, openBlock as s, unref as c, watch as l } from "vue";
import { DesignConstructorAbstract as u, EventItem as d, ScrollbarWidthRef as f, toBind as p } from "@dxtmisha/functional";
//#region ../constructor/dist/ScrollbarInclude-B4_ZIqkW.js
var m = class {
	constructor(e, t, n, r) {
		this.props = e, this.className = t, this.components = n, this.emits = r;
	}
	render(e, t, n) {
		if (this.components) {
			var r;
			let i = this.components.renderOne("scrollbar", p({
				tag: e,
				class: `${this.className}__scrollbar`,
				...t == null ? {} : t,
				...this.getScrollbarEvents()
			}, (r = this.props.scrollbarAttrs) == null ? {} : r), n);
			if (i) return [i];
		}
		return [i(e, t, n)];
	}
	getScrollbarEvents() {
		return {
			onTop: (e) => {
				var t;
				return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarTop", e);
			},
			onReachTop: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarReachTop");
			},
			onLeaveTop: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarLeaveTop");
			},
			onBottom: (e) => {
				var t;
				return (t = this.emits) == null ? void 0 : t.call(this, "scrollbarBottom", e);
			},
			onReachBottom: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarReachBottom");
			},
			onLeaveBottom: () => {
				var e;
				return (e = this.emits) == null ? void 0 : e.call(this, "scrollbarLeaveBottom");
			},
			onEdge: (e, t, n) => {
				var r;
				return (r = this.emits) == null ? void 0 : r.call(this, "scrollbarEdge", e, t, n);
			}
		};
	}
}, h = 8, g = class {
	constructor(t, n, r, i, a) {
		e(this, "event", void 0), e(this, "eventSub", void 0), e(this, "top", !1), e(this, "bottom", !1), e(this, "toggle", () => {
			this.props.divider || this.props.dividerTop || this.props.dividerBottom ? this.start() : this.stop();
		}), e(this, "reset", () => {
			if (this.element.value) {
				if (this.event) {
					var e;
					this.event.setElement(this.element.value), this.eventSub && (e = this.element.value.children) != null && e[0] && this.eventSub.setElement(this.element.value.children[0]);
				}
				this.toggle(), this.update();
			} else this.stop();
		}), e(this, "update", () => {
			let e = this.element.value;
			e && (e.classList.toggle(`${this.className}--divider--top`, this.top), e.classList.toggle(`${this.className}--divider--bottom`, this.bottom), e.dataset.scrollbarDivider = this.top || this.bottom ? "divider" : "none");
		}), e(this, "on", () => {
			let e = this.element.value;
			e && this.setData(e.scrollTop > h, e.scrollTop < e.scrollHeight - e.clientHeight - h);
		}), this.props = t, this.element = r, this.className = i, this.emits = a, l([
			this.element,
			n.divider,
			n.dividerTop,
			n.dividerBottom,
			n.inverse
		], this.reset, { immediate: !0 }), o(() => this.stop());
	}
	start() {
		var e;
		this.event ? this.event.start() : this.event = new d(this.element.value, ["scroll-sync"], this.on).start(), this.eventSub ? this.eventSub.start() : !((e = this.element.value) == null || (e = e.children) == null) && e[0] && (this.eventSub = new d(this.element.value.children[0], ["resize"], this.on).start()), this.on();
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0), this.eventSub && (this.eventSub.stop(), this.eventSub = void 0);
	}
	setData(e, t) {
		return (this.top !== e || this.bottom !== t) && this.setTop(e).setBottom(t).update(), this;
	}
	setTop(e) {
		if (this.top !== e) {
			var t, n;
			if (this.top = e, (t = this.emits) == null || t.call(this, "top", e), (n = this.emits) == null || n.call(this, "edge", e, this.bottom, "top"), e) {
				var r;
				(r = this.emits) == null || r.call(this, "reachTop");
			} else {
				var i;
				(i = this.emits) == null || i.call(this, "leaveTop");
			}
		}
		return this;
	}
	setBottom(e) {
		if (this.bottom !== e) {
			var t, n;
			if (this.bottom = e, (t = this.emits) == null || t.call(this, "bottom", e), (n = this.emits) == null || n.call(this, "edge", this.top, e, "bottom"), e) {
				var r;
				(r = this.emits) == null || r.call(this, "reachBottom");
			} else {
				var i;
				(i = this.emits) == null || i.call(this, "leaveBottom");
			}
		}
		return this;
	}
}, _ = class {
	constructor(n, r, i, a, o, s, c, l, u) {
		e(this, "width", void 0), e(this, "border", void 0), e(this, "classes", t(() => ({ [`${this.className}--disabled`]: !!this.width.item.value }))), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { ScrollbarBorderConstructor: d = g, ScrollbarWidthRefConstructor: p = f } = u == null ? {} : u;
		this.width = new p(), this.border = new d(n, r, i, o, l);
	}
}, v = { tag: "div" }, y = class extends u {
	constructor(t, n, r, i = _) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		let e = [this.initSlot("default")];
		if (this.item.width.is.value) {
			var t, n;
			return i((t = this.props.tag) == null ? "div" : t, {
				...this.getAttrs(),
				ref: this.element,
				class: (n = this.classes) == null ? void 0 : n.value.main
			}, e);
		}
	}
}, b = { ...v }, x = /* @__PURE__ */ r({
	name: "D1Scrollbar",
	__name: "D1Scrollbar",
	props: /* @__PURE__ */ a({
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
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, l = new y("d1.scrollbar", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-scrollbar": !0,
				"d1-scrollbar--visible": o.visible,
				"d1-scrollbar--divider": o.divider,
				"d1-scrollbar--dividerTop": o.dividerTop,
				"d1-scrollbar--dividerBottom": o.dividerBottom,
				"d1-scrollbar--dividerHide": o.dividerHide,
				"d1-scrollbar--inverse": o.inverse,
				"d1-scrollbar--standard": o.standard
			} })),
			styles: t(() => ({}))
		}), u = l.render();
		return r(l.expose()), (e, t) => (s(), n(c(u)));
	}
});
//#endregion
export { m as n, x as t };

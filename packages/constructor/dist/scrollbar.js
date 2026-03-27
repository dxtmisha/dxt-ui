import { t as e } from "./defineProperty-BTtSLqQS.js";
import { computed as t, h as n, onUnmounted as r, watch as i } from "vue";
import { DesignConstructorAbstract as a, EventItem as o, ScrollbarWidthRef as s } from "@dxtmisha/functional";
//#region src/constructors/Scrollbar/ScrollbarBorder.ts
var c = 8, l = class {
	constructor(t, n, a, o, s) {
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
			e && this.setData(e.scrollTop > c, e.scrollTop < e.scrollHeight - e.clientHeight - c);
		}), this.props = t, this.element = a, this.className = o, this.emits = s, i([
			this.element,
			n.divider,
			n.dividerTop,
			n.dividerBottom,
			n.inverse
		], this.reset, { immediate: !0 }), r(() => this.stop());
	}
	start() {
		var e;
		this.event ? this.event.start() : this.event = new o(this.element.value, ["scroll-sync"], this.on).start(), this.eventSub ? this.eventSub.start() : !((e = this.element.value) == null || (e = e.children) == null) && e[0] && (this.eventSub = new o(this.element.value.children[0], ["resize"], this.on).start()), this.on();
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
}, u = class {
	constructor(n, r, i, a, o, c, u, d, f) {
		e(this, "width", void 0), e(this, "border", void 0), e(this, "classes", t(() => ({ [`${this.className}--disabled`]: !!this.width.item.value }))), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = c, this.slots = u, this.emits = d;
		let { ScrollbarBorderConstructor: p = l, ScrollbarWidthRefConstructor: m = s } = f == null ? {} : f;
		this.width = new m(), this.border = new p(n, r, i, o, d);
	}
}, d = { tag: "div" }, f = class extends a {
	constructor(t, n, r, i = u) {
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
			var t, r;
			return n((t = this.props.tag) == null ? "div" : t, {
				...this.getAttrs(),
				ref: this.element,
				class: (r = this.classes) == null ? void 0 : r.value.main
			}, e);
		}
	}
};
//#endregion
export { u as Scrollbar, f as ScrollbarDesign, d as defaultsScrollbar };

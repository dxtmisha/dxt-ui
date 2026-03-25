import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, nextTick as o, onMounted as s, onUnmounted as c, openBlock as l, ref as u, unref as d, watch as f } from "vue";
import { DesignConstructorAbstract as p, EventItem as m, EventRef as h, getRef as g, inArray as _, isDomRuntime as v, isFilled as y, isString as b, toBinds as x, toNumber as S } from "@dxtmisha/functional";
//#region ../constructor/dist/ArrowInclude-CcpT637l.js
var C = Object.defineProperty, w = (e, t, n) => t in e ? C(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, T = (e, t, n) => w(e, typeof t == "symbol" ? t : t + "", n), E = class {
	constructor(e, n, r, i, a, o) {
		T(this, "is", t(() => !!this.props.arrowShow)), T(this, "binds", t(() => x(g(this.extra), this.props.arrowAttrs, {
			class: `${this.className}__arrow`,
			elementTarget: this.elementTarget
		}))), T(this, "render", () => this.components && this.is.value ? this.components.render("arrow", this.binds.value, void 0, this.index) : []), this.props = e, this.className = n, this.components = r, this.elementTarget = i, this.extra = a, this.index = o;
	}
}, D = Object.defineProperty, O = (e, t, n) => t in e ? D(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, k = (e, t, n) => O(e, typeof t == "symbol" ? t : t + "", n), A = class {
	constructor(e, t) {
		this.element = e, this.className = t;
	}
	is() {
		return !!this.element.value;
	}
	getWidth() {
		let e = this.getStyleArrowWidth();
		return e ? Number(e.replace(/[^0-9]+/gi, "")) : 0;
	}
	getHeight() {
		let e = this.getStyleArrowHeight();
		return e ? Number(e.replace(/[^0-9]+/gi, "")) : 0;
	}
	getRect() {
		var e;
		return (e = this.element.value) == null ? void 0 : e.getBoundingClientRect();
	}
	getRectBorder() {
		var e, t, n;
		return (n = (t = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__border`)) == null ? void 0 : t.getBoundingClientRect()) == null ? void 0 : n;
	}
	getRectArrowLine() {
		var e, t, n;
		return (n = (t = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__arrowLine`)) == null ? void 0 : t.getBoundingClientRect()) == null ? void 0 : n;
	}
	getNameArrowWidth() {
		return `--${this.className}-arrowWidth`;
	}
	getNameArrowHeight() {
		return `--${this.className}-arrowHeight`;
	}
	getStyleArrowWidth() {
		if (this.is()) return getComputedStyle(this.element.value).getPropertyValue(this.getNameArrowWidth());
	}
	getStyleArrowHeight() {
		if (this.is()) return getComputedStyle(this.element.value).getPropertyValue(this.getNameArrowHeight());
	}
}, j = class {
	constructor(e) {
		k(this, "element", u()), this.props = e;
	}
	is() {
		return this.element.value !== void 0;
	}
	getRect() {
		var e;
		return (e = this.element.value) == null ? void 0 : e.getBoundingClientRect();
	}
	update() {
		this.element.value = this.initElement();
	}
	initElement() {
		var e;
		let t = this.props.elementTarget;
		if (this.props.position === "auto" && y(t) && v()) return b(t) ? (e = document.querySelector(t)) == null ? void 0 : e : t;
	}
}, M = class {
	constructor(e, n, r) {
		k(this, "isBorder", t(() => this.borderWidth.value !== "0px")), k(this, "elementParent", t(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.parentElement;
		})), k(this, "background", t(() => {
			var e, t;
			return (t = (e = this.getStyles()) == null ? void 0 : e.backgroundColor) == null ? "transparent" : t;
		})), k(this, "borderWidth", t(() => {
			var e, t;
			return (t = (e = this.getStyles()) == null ? void 0 : e.borderWidth) == null ? "0px" : t;
		})), k(this, "borderColor", t(() => {
			var e, t;
			return (t = (e = this.getStyles()) == null ? void 0 : e.borderColor) == null ? "transparent" : t;
		})), k(this, "borderRadius", t(() => {
			var e, t;
			return (t = (e = this.getStyles()) == null ? void 0 : e.borderRadius) == null ? "0px" : t;
		})), k(this, "make", () => {
			requestAnimationFrame(() => {
				if (this.elementParent.value) {
					let e = this.elementParent.value;
					e.classList.add(`${this.className}__parent`), e.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.getHeight())), this.isBorder.value && (e.dataset.arrow = "border");
				}
			});
		}), this.element = e, this.className = n, this.elementItem = r, v() && f(e, this.make);
	}
	getBorderRadius() {
		return S(this.borderRadius.value);
	}
	getStyles() {
		let e = this.elementParent.value;
		if (e) return getComputedStyle(e);
	}
}, N = /* @__PURE__ */ ((e) => (e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e.HIDE = "hide", e))(N || {}), P = class {
	constructor(e, t, n, r) {
		k(this, "border", u()), k(this, "direction", u()), k(this, "shift", u()), k(this, "clipPath", u()), k(this, "update", () => {
			this.border.value = this.initBorder(), this.direction.value = this.initDirection(), this.shift.value = this.initShift(), requestAnimationFrame(() => {
				this.clipPath.value = this.initClipPath();
			});
		}), this.props = e, this.elementItem = t, this.elementTarget = n, this.parent = r;
	}
	isX() {
		return this.direction.value === N.TOP || this.direction.value === N.BOTTOM;
	}
	getMinValue() {
		return this.parent.getBorderRadius() + this.elementItem.getWidth() / 2;
	}
	initBorder() {
		let e = this.elementItem.getRect(), t = this.elementTarget.getRect();
		if (e && t) return {
			top: Math.max(e.top, t.top),
			bottom: Math.min(e.bottom, t.bottom),
			left: Math.max(e.left, t.left),
			right: Math.min(e.right, t.right)
		};
	}
	initDirection() {
		if (this.props.position !== "auto") return this.props.position;
		let e = this.elementItem.getRect(), t = this.elementTarget.getRect();
		if (this.border.value && e && t) {
			if (t.top <= e.top && t.right > e.left && t.left < e.right) return N.TOP;
			if (t.bottom >= e.bottom && t.right > e.left && t.left < e.right) return N.BOTTOM;
			if (t.left <= e.left && t.bottom > e.top && t.top < e.bottom) return N.LEFT;
			if (t.right >= e.right && t.bottom > e.top && t.top < e.bottom) return N.RIGHT;
		}
	}
	initShift() {
		let e = this.border.value, t = this.elementItem.getRect();
		if (e && t) {
			let n = this.getMinValue(), r;
			return r = this.isX() ? Math.min(t.width - n, e.left - t.left + (e.right - e.left) / 2) : Math.min(t.height - n, e.top - t.top + (e.bottom - e.top) / 2), `${Math.max(n, r)}px`;
		}
	}
	initClipPath() {
		let e = this.elementItem.getRectBorder(), t = this.elementItem.getRectArrowLine();
		if (e && t) {
			let n = `M0,0 L0,${e.height} L${e.width},${e.height} L${e.width},0 Z`, r, i, a, o;
			switch (this.direction.value) {
				case N.TOP:
					r = t.left - e.left, i = 0, a = r + t.width, o = t.height;
					break;
				case N.BOTTOM:
					r = t.left - e.left, i = e.height - t.height, a = r + t.width, o = e.height;
					break;
				case N.LEFT:
					r = 0, i = t.top - e.top, a = t.width, o = i + t.height;
					break;
				case N.RIGHT:
					r = e.width - t.width, i = t.top - e.top, a = e.width, o = i + t.height;
					break;
				default: return;
			}
			return `path('${n} ${`M${r},${i} L${a},${i} L${a},${o} L${r},${o} Z`}')`;
		}
	}
}, F = class {
	constructor(e, t, n, r, i, a) {
		k(this, "eventItem"), k(this, "eventTarget"), k(this, "eventBody"), k(this, "update", () => {
			requestAnimationFrame(() => {
				this.props.position === "auto" && this.elementTarget.update(), this.position.update();
			});
		}), k(this, "makeEvents", () => {
			this.elementTarget.is() ? this.initEvents().startEvents() : this.stopEvents();
		}), this.props = e, this.refs = t, this.element = n, this.elementTarget = r, this.parent = i, this.position = a, v() && (s(async () => {
			await o(), f(this.elementTarget.element, this.makeEvents), f([...Object.values(this.refs)], this.update, { immediate: !0 });
		}), c(() => {
			this.stopEvents();
		}));
	}
	startEvents() {
		var e, t, n;
		return (e = this.eventItem) == null || e.start(), (t = this.eventTarget) == null || t.start(), (n = this.eventBody) == null || n.start(), this;
	}
	stopEvents() {
		var e, t, n;
		return (e = this.eventItem) == null || e.stop(), (t = this.eventTarget) == null || t.stop(), (n = this.eventBody) == null || n.stop(), this;
	}
	initEvents() {
		return this.eventItem || (this.eventItem = new h(this.element, void 0, "resize", this.update)), this.eventTarget || (this.eventTarget = new h(this.elementTarget.element, void 0, "resize", this.update)), this.eventBody || (this.eventBody = new m(window, ["scroll", "resize"], this.update)), this;
	}
}, I = class {
	constructor(e, n, r, i, a, o, s, c, l) {
		k(this, "elementItem"), k(this, "elementTarget"), k(this, "parent"), k(this, "position"), k(this, "event"), k(this, "direction", t(() => {
			if (y(this.props.position)) {
				let e = this.position.direction.value;
				if (e) return e;
			}
			return N.HIDE;
		})), k(this, "classes", t(() => ({ [`${this.className}--direction--${this.direction.value}`]: !!this.direction.value }))), k(this, "styles", t(() => {
			let e = {
				[`--${this.className}-sys-background`]: this.parent.background.value,
				[`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
				[`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
				[`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value
			};
			return this.parent.isBorder.value && this.position.clipPath.value && (e[`--${this.className}-sys-clipPath`] = this.position.clipPath.value), this.elementTarget.is() && this.position.shift.value && (e[`--${this.className}-sys-shift`] = this.position.shift.value), e;
		})), this.props = e, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { ArrowElementConstructor: u = A, ArrowElementTargetConstructor: d = j, ArrowEventConstructor: f = F, ArrowParentConstructor: p = M, ArrowPositionConstructor: m = P } = l == null ? {} : l;
		this.elementItem = new u(this.element, this.className), this.elementTarget = new d(this.props), this.parent = new p(this.element, this.className, this.elementItem), this.position = new m(this.props, this.elementItem, this.elementTarget, this.parent), this.event = new f(this.props, this.refs, this.element, this.elementTarget, this.parent, this.position);
	}
}, L = { position: "auto" }, R = class extends p {
	constructor(e, t, n, r = I) {
		super(e, t, n), k(this, "item"), k(this, "points", u("")), k(this, "getRePoints", () => {
			let e = this.item.elementItem.getWidth(), t = this.item.elementItem.getHeight();
			switch (this.item.direction.value) {
				case N.BOTTOM: return `0, 0 ${e / 2}, ${t} ${e}, 0`;
				case N.LEFT: return `${e}, 0 0, ${t / 2} ${e}, ${t}`;
				case N.RIGHT: return `0, 0 ${e}, ${t / 2} 0, ${t}`;
				default: return `0, ${t} ${e / 2}, 0 ${e}, ${t}`;
			}
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init(), f([this.classes], () => {
			o().then(() => requestAnimationFrame(() => {
				this.points.value = this.getRePoints();
			}));
		}, { immediate: !0 });
	}
	initExpose() {
		return { update: this.item.position.update };
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			mask: this.getSubClass("mask"),
			arrow: this.getSubClass("arrow"),
			arrowLine: this.getSubClass("arrowLine"),
			arrowArea: this.getSubClass("arrowArea"),
			border: this.getSubClass("border"),
			borderHidden: this.getSubClass("borderHidden")
		};
	}
	initStyles() {
		return { ...this.item.styles.value };
	}
	initRender() {
		var t, n;
		if (!v()) return;
		let r = [...this.renderArrow()];
		return this.item.parent.isBorder.value && r.push(...this.renderBorder()), i("div", {
			ref: this.element,
			class: (t = this.classes) == null ? void 0 : t.value.main,
			style: (n = this.styles) == null ? void 0 : n.value,
			...e.hidden()
		}, r);
	}
	renderArrow() {
		var e, t, n;
		return [i("svg", {
			key: "svg-arrow",
			class: (e = this.classes) == null ? void 0 : e.value.arrowArea
		}, [i("polygon", {
			key: "arrow",
			class: (t = this.classes) == null ? void 0 : t.value.arrow,
			points: this.points.value
		}), i("polyline", {
			key: "arrow-line",
			class: (n = this.classes) == null ? void 0 : n.value.arrowLine,
			points: this.points.value
		})])];
	}
	renderBorder() {
		var e;
		return [i("div", {
			key: "border",
			class: (e = this.classes) == null ? void 0 : e.value.border
		})];
	}
}, z = {
	position: [
		"auto",
		"top",
		"bottom",
		"left",
		"right"
	],
	size: [
		"sm",
		"md",
		"lg"
	]
}, B = {
	...L,
	position: "auto",
	size: "md"
}, V = /* @__PURE__ */ r({
	name: "D1Arrow",
	__name: "D1Arrow",
	props: /* @__PURE__ */ a({
		elementTarget: {},
		position: {},
		inverse: { type: Boolean },
		size: {}
	}, B),
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, s = new R("d1.arrow", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-arrow": !0,
				[`d1-arrow--position--${o.position}`]: _(z.position, o.position),
				"d1-arrow--inverse": o.inverse,
				[`d1-arrow--size--${o.size}`]: _(z.size, o.size)
			} })),
			styles: t(() => ({}))
		}), c = s.render();
		return r(s.expose()), (e, t) => (l(), n(d(c)));
	}
});
//#endregion
export { E as n, V as t };

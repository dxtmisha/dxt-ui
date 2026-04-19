import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, nextTick as s, onMounted as c, onUnmounted as l, openBlock as u, ref as d, unref as f, watch as p } from "vue";
import { DesignConstructorAbstract as m, EventItem as h, EventRef as g, getRef as _, inArray as v, isDomRuntime as y, isFilled as b, isString as x, toBinds as S, toNumber as C } from "@dxtmisha/functional";
//#region ../constructor/dist/ArrowInclude-BS3sY2CP.js
var w = class {
	constructor(t, r, i, a, o, s) {
		e(this, "is", n(() => !!this.props.arrowShow)), e(this, "binds", n(() => S(_(this.extra), this.props.arrowAttrs, {
			class: `${this.className}__arrow`,
			elementTarget: this.elementTarget
		}))), e(this, "render", () => this.components && this.is.value ? this.components.render("arrow", this.binds.value, void 0, this.index) : []), this.props = t, this.className = r, this.components = i, this.elementTarget = a, this.extra = o, this.index = s;
	}
}, T = class {
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
		var e, t;
		return (e = (t = this.element.value) == null || (t = t.querySelector(`.${this.className}__border`)) == null ? void 0 : t.getBoundingClientRect()) == null ? void 0 : e;
	}
	getRectArrowLine() {
		var e, t;
		return (e = (t = this.element.value) == null || (t = t.querySelector(`.${this.className}__arrowLine`)) == null ? void 0 : t.getBoundingClientRect()) == null ? void 0 : e;
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
}, E = class {
	constructor(t) {
		e(this, "element", d()), this.props = t;
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
		let e = this.props.elementTarget;
		if (this.props.position === "auto" && b(e) && y()) {
			if (x(e)) {
				var t;
				return (t = document.querySelector(e)) == null ? void 0 : t;
			}
			return e;
		}
	}
}, D = class {
	constructor(t, r, i) {
		e(this, "isBorder", n(() => this.borderWidth.value !== "0px")), e(this, "elementParent", n(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.parentElement;
		})), e(this, "background", n(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.backgroundColor) == null ? "transparent" : e;
		})), e(this, "borderWidth", n(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.borderWidth) == null ? "0px" : e;
		})), e(this, "borderColor", n(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.borderColor) == null ? "transparent" : e;
		})), e(this, "borderRadius", n(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.borderRadius) == null ? "0px" : e;
		})), e(this, "make", () => {
			requestAnimationFrame(() => {
				if (this.elementParent.value) {
					let e = this.elementParent.value;
					e.classList.add(`${this.className}__parent`), e.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.getHeight())), this.isBorder.value && (e.dataset.arrow = "border");
				}
			});
		}), this.element = t, this.className = r, this.elementItem = i, y() && p(t, this.make);
	}
	getBorderRadius() {
		return C(this.borderRadius.value);
	}
	getStyles() {
		let e = this.elementParent.value;
		if (e) return getComputedStyle(e);
	}
}, O = /* @__PURE__ */ function(e) {
	return e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e.HIDE = "hide", e;
}({}), k = class {
	constructor(t, n, r, i) {
		e(this, "border", d()), e(this, "direction", d()), e(this, "shift", d()), e(this, "clipPath", d()), e(this, "update", () => {
			this.border.value = this.initBorder(), this.direction.value = this.initDirection(), this.shift.value = this.initShift(), requestAnimationFrame(() => {
				this.clipPath.value = this.initClipPath();
			});
		}), this.props = t, this.elementItem = n, this.elementTarget = r, this.parent = i;
	}
	isX() {
		return this.direction.value === O.TOP || this.direction.value === O.BOTTOM;
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
			if (t.top <= e.top && t.right > e.left && t.left < e.right) return O.TOP;
			if (t.bottom >= e.bottom && t.right > e.left && t.left < e.right) return O.BOTTOM;
			if (t.left <= e.left && t.bottom > e.top && t.top < e.bottom) return O.LEFT;
			if (t.right >= e.right && t.bottom > e.top && t.top < e.bottom) return O.RIGHT;
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
				case O.TOP:
					r = t.left - e.left, i = 0, a = r + t.width, o = t.height;
					break;
				case O.BOTTOM:
					r = t.left - e.left, i = e.height - t.height, a = r + t.width, o = e.height;
					break;
				case O.LEFT:
					r = 0, i = t.top - e.top, a = t.width, o = i + t.height;
					break;
				case O.RIGHT:
					r = e.width - t.width, i = t.top - e.top, a = e.width, o = i + t.height;
					break;
				default: return;
			}
			return `path('${n} ${`M${r},${i} L${a},${i} L${a},${o} L${r},${o} Z`}')`;
		}
	}
}, A = class {
	constructor(t, n, r, i, a, o) {
		e(this, "eventItem", void 0), e(this, "eventTarget", void 0), e(this, "eventBody", void 0), e(this, "update", () => {
			requestAnimationFrame(() => {
				this.props.position === "auto" && this.elementTarget.update(), this.position.update();
			});
		}), e(this, "makeEvents", () => {
			this.elementTarget.is() ? this.initEvents().startEvents() : this.stopEvents();
		}), this.props = t, this.refs = n, this.element = r, this.elementTarget = i, this.parent = a, this.position = o, y() && (c(async () => {
			await s(), p(this.elementTarget.element, this.makeEvents), p([...Object.values(this.refs)], this.update, { immediate: !0 });
		}), l(() => {
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
		return this.eventItem || (this.eventItem = new g(this.element, void 0, "resize", this.update)), this.eventTarget || (this.eventTarget = new g(this.elementTarget.element, void 0, "resize", this.update)), this.eventBody || (this.eventBody = new h(window, ["scroll", "resize"], this.update)), this;
	}
}, j = class {
	constructor(t, r, i, a, o, s, c, l, u) {
		e(this, "elementItem", void 0), e(this, "elementTarget", void 0), e(this, "parent", void 0), e(this, "position", void 0), e(this, "event", void 0), e(this, "direction", n(() => {
			if (b(this.props.position)) {
				let e = this.position.direction.value;
				if (e) return e;
			}
			return O.HIDE;
		})), e(this, "classes", n(() => ({ [`${this.className}--direction--${this.direction.value}`]: !!this.direction.value }))), e(this, "styles", n(() => {
			let e = {
				[`--${this.className}-sys-background`]: this.parent.background.value,
				[`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
				[`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
				[`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value
			};
			return this.parent.isBorder.value && this.position.clipPath.value && (e[`--${this.className}-sys-clipPath`] = this.position.clipPath.value), this.elementTarget.is() && this.position.shift.value && (e[`--${this.className}-sys-shift`] = this.position.shift.value), e;
		})), this.props = t, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { ArrowElementConstructor: d = T, ArrowElementTargetConstructor: f = E, ArrowEventConstructor: p = A, ArrowParentConstructor: m = D, ArrowPositionConstructor: h = k } = u == null ? {} : u;
		this.elementItem = new d(this.element, this.className), this.elementTarget = new f(this.props), this.parent = new m(this.element, this.className, this.elementItem), this.position = new h(this.props, this.elementItem, this.elementTarget, this.parent), this.event = new p(this.props, this.refs, this.element, this.elementTarget, this.parent, this.position);
	}
}, M = { position: "auto" }, N = class extends m {
	constructor(t, n, r, i = j) {
		super(t, n, r), e(this, "item", void 0), e(this, "points", d("")), e(this, "getRePoints", () => {
			let e = this.item.elementItem.getWidth(), t = this.item.elementItem.getHeight();
			switch (this.item.direction.value) {
				case O.BOTTOM: return `0, 0 ${e / 2}, ${t} ${e}, 0`;
				case O.LEFT: return `${e}, 0 0, ${t / 2} ${e}, ${t}`;
				case O.RIGHT: return `0, 0 ${e}, ${t / 2} 0, ${t}`;
				default: return `0, ${t} ${e / 2}, 0 ${e}, ${t}`;
			}
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init(), p([this.classes], () => {
			s().then(() => requestAnimationFrame(() => {
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
		var e, n;
		if (!y()) return;
		let r = [...this.renderArrow()];
		return this.item.parent.isBorder.value && r.push(...this.renderBorder()), a("div", {
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (n = this.styles) == null ? void 0 : n.value,
			...t.hidden()
		}, r);
	}
	renderArrow() {
		var e, t, n;
		return [a("svg", {
			key: "svg-arrow",
			class: (e = this.classes) == null ? void 0 : e.value.arrowArea
		}, [a("polygon", {
			key: "arrow",
			class: (t = this.classes) == null ? void 0 : t.value.arrow,
			points: this.points.value
		}), a("polyline", {
			key: "arrow-line",
			class: (n = this.classes) == null ? void 0 : n.value.arrowLine,
			points: this.points.value
		})])];
	}
	renderBorder() {
		var e;
		return [a("div", {
			key: "border",
			class: (e = this.classes) == null ? void 0 : e.value.border
		})];
	}
}, P = {
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
}, F = {
	...M,
	position: "auto",
	size: "md"
}, I = /* @__PURE__ */ i({
	name: "D1Arrow",
	__name: "D1Arrow",
	props: /* @__PURE__ */ o({
		elementTarget: {},
		position: {},
		inverse: { type: Boolean },
		size: {}
	}, F),
	setup(e, { expose: t, emit: i }) {
		let a = i, o = e, s = new N("d1.arrow", o, {
			emits: a,
			classes: n(() => ({ main: {
				"d1-arrow": !0,
				[`d1-arrow--position--${o.position}`]: v(P.position, o.position),
				"d1-arrow--inverse": o.inverse,
				[`d1-arrow--size--${o.size}`]: v(P.size, o.size)
			} })),
			styles: n(() => ({}))
		}), c = s.render();
		return t(s.expose()), (e, t) => (u(), r(f(c)));
	}
});
//#endregion
export { w as n, I as t };

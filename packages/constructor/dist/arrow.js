import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./ArrowInclude-DEnkE2eK.js";
import { computed as r, h as i, nextTick as a, onMounted as o, onUnmounted as s, ref as c, watch as l } from "vue";
import { DesignConstructorAbstract as u, EventItem as d, EventRef as f, isDomRuntime as p, isFilled as m, isString as h, toNumber as g } from "@dxtmisha/functional";
//#region src/constructors/Arrow/ArrowElement.ts
var _ = class {
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
}, v = class {
	constructor(e) {
		t(this, "element", c()), this.props = e;
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
		if (this.props.position === "auto" && m(e) && p()) {
			if (h(e)) {
				var t;
				return (t = document.querySelector(e)) == null ? void 0 : t;
			}
			return e;
		}
	}
}, y = class {
	constructor(e, n, i) {
		t(this, "isBorder", r(() => this.borderWidth.value !== "0px")), t(this, "elementParent", r(() => {
			var e;
			return (e = this.element.value) == null ? void 0 : e.parentElement;
		})), t(this, "background", r(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.backgroundColor) == null ? "transparent" : e;
		})), t(this, "borderWidth", r(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.borderWidth) == null ? "0px" : e;
		})), t(this, "borderColor", r(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.borderColor) == null ? "transparent" : e;
		})), t(this, "borderRadius", r(() => {
			var e, t;
			return (e = (t = this.getStyles()) == null ? void 0 : t.borderRadius) == null ? "0px" : e;
		})), t(this, "make", () => {
			requestAnimationFrame(() => {
				if (this.elementParent.value) {
					let e = this.elementParent.value;
					e.classList.add(`${this.className}__parent`), e.style.setProperty(`--${this.className}-sys-height`, String(this.elementItem.getHeight())), this.isBorder.value && (e.dataset.arrow = "border");
				}
			});
		}), this.element = e, this.className = n, this.elementItem = i, p() && l(e, this.make);
	}
	getBorderRadius() {
		return g(this.borderRadius.value);
	}
	getStyles() {
		let e = this.elementParent.value;
		if (e) return getComputedStyle(e);
	}
}, b = /* @__PURE__ */ function(e) {
	return e.TOP = "top", e.BOTTOM = "bottom", e.LEFT = "left", e.RIGHT = "right", e.HIDE = "hide", e;
}({}), x = class {
	constructor(e, n, r, i) {
		t(this, "border", c()), t(this, "direction", c()), t(this, "shift", c()), t(this, "clipPath", c()), t(this, "update", () => {
			this.border.value = this.initBorder(), this.direction.value = this.initDirection(), this.shift.value = this.initShift(), requestAnimationFrame(() => {
				this.clipPath.value = this.initClipPath();
			});
		}), this.props = e, this.elementItem = n, this.elementTarget = r, this.parent = i;
	}
	isX() {
		return this.direction.value === b.TOP || this.direction.value === b.BOTTOM;
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
			if (t.top <= e.top && t.right > e.left && t.left < e.right) return b.TOP;
			if (t.bottom >= e.bottom && t.right > e.left && t.left < e.right) return b.BOTTOM;
			if (t.left <= e.left && t.bottom > e.top && t.top < e.bottom) return b.LEFT;
			if (t.right >= e.right && t.bottom > e.top && t.top < e.bottom) return b.RIGHT;
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
				case b.TOP:
					r = t.left - e.left, i = 0, a = r + t.width, o = t.height;
					break;
				case b.BOTTOM:
					r = t.left - e.left, i = e.height - t.height, a = r + t.width, o = e.height;
					break;
				case b.LEFT:
					r = 0, i = t.top - e.top, a = t.width, o = i + t.height;
					break;
				case b.RIGHT:
					r = e.width - t.width, i = t.top - e.top, a = e.width, o = i + t.height;
					break;
				default: return;
			}
			return `path('${n} ${`M${r},${i} L${a},${i} L${a},${o} L${r},${o} Z`}')`;
		}
	}
}, S = class {
	constructor(e, n, r, i, c, u) {
		t(this, "eventItem", void 0), t(this, "eventTarget", void 0), t(this, "eventBody", void 0), t(this, "update", () => {
			requestAnimationFrame(() => {
				this.props.position === "auto" && this.elementTarget.update(), this.position.update();
			});
		}), t(this, "makeEvents", () => {
			this.elementTarget.is() ? this.initEvents().startEvents() : this.stopEvents();
		}), this.props = e, this.refs = n, this.element = r, this.elementTarget = i, this.parent = c, this.position = u, p() && (o(async () => {
			await a(), l(this.elementTarget.element, this.makeEvents), l([...Object.values(this.refs)], this.update, { immediate: !0 });
		}), s(() => {
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
		return this.eventItem || (this.eventItem = new f(this.element, void 0, "resize", this.update)), this.eventTarget || (this.eventTarget = new f(this.elementTarget.element, void 0, "resize", this.update)), this.eventBody || (this.eventBody = new d(window, ["scroll", "resize"], this.update)), this;
	}
}, C = class {
	constructor(e, n, i, a, o, s, c, l, u) {
		t(this, "elementItem", void 0), t(this, "elementTarget", void 0), t(this, "parent", void 0), t(this, "position", void 0), t(this, "event", void 0), t(this, "direction", r(() => {
			if (m(this.props.position)) {
				let e = this.position.direction.value;
				if (e) return e;
			}
			return b.HIDE;
		})), t(this, "classes", r(() => ({ [`${this.className}--direction--${this.direction.value}`]: !!this.direction.value }))), t(this, "styles", r(() => {
			let e = {
				[`--${this.className}-sys-background`]: this.parent.background.value,
				[`--${this.className}-sys-borderWidth`]: this.parent.borderWidth.value,
				[`--${this.className}-sys-borderColor`]: this.parent.borderColor.value,
				[`--${this.className}-sys-borderRadius`]: this.parent.borderRadius.value
			};
			return this.parent.isBorder.value && this.position.clipPath.value && (e[`--${this.className}-sys-clipPath`] = this.position.clipPath.value), this.elementTarget.is() && this.position.shift.value && (e[`--${this.className}-sys-shift`] = this.position.shift.value), e;
		})), this.props = e, this.refs = n, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { ArrowElementConstructor: d = _, ArrowElementTargetConstructor: f = v, ArrowEventConstructor: p = S, ArrowParentConstructor: h = y, ArrowPositionConstructor: g = x } = u == null ? {} : u;
		this.elementItem = new d(this.element, this.className), this.elementTarget = new f(this.props), this.parent = new h(this.element, this.className, this.elementItem), this.position = new g(this.props, this.elementItem, this.elementTarget, this.parent), this.event = new p(this.props, this.refs, this.element, this.elementTarget, this.parent, this.position);
	}
}, w = { position: "auto" }, T = class extends u {
	constructor(e, n, r, i = C) {
		super(e, n, r), t(this, "item", void 0), t(this, "points", c("")), t(this, "getRePoints", () => {
			let e = this.item.elementItem.getWidth(), t = this.item.elementItem.getHeight();
			switch (this.item.direction.value) {
				case b.BOTTOM: return `0, 0 ${e / 2}, ${t} ${e}, 0`;
				case b.LEFT: return `${e}, 0 0, ${t / 2} ${e}, ${t}`;
				case b.RIGHT: return `0, 0 ${e}, ${t / 2} 0, ${t}`;
				default: return `0, ${t} ${e / 2}, 0 ${e}, ${t}`;
			}
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init(), l([this.classes], () => {
			a().then(() => requestAnimationFrame(() => {
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
		if (!p()) return;
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
};
//#endregion
export { C as Arrow, T as ArrowDesign, b as ArrowDirection, _ as ArrowElement, v as ArrowElementTarget, S as ArrowEvent, n as ArrowInclude, y as ArrowParent, x as ArrowPosition, w as defaultsArrow };

import { t as e } from "./defineProperty-3CuEayIP.js";
import { t } from "./ModelInclude-COXpwWf_.js";
import { t as n } from "./MotionAxisInclude-DvWUK3aP.js";
import { computed as r, h as i, onMounted as a, ref as o, watch as s } from "vue";
import { DesignConstructorAbstract as c, forEach as l } from "@dxtmisha/functional";
//#region src/constructors/MotionAxis/MotionAxisElement.ts
var u = class {
	constructor(t, n) {
		e(this, "classStatus", void 0), e(this, "start", o(!1)), e(this, "move", o(!1)), this.element = t, this.className = n, this.classStatus = {
			main: this.getClassStatusItem(),
			previous: this.getClassStatusItem("previous"),
			preparation: this.getClassStatusItem("preparation"),
			active: this.getClassStatusItem("active")
		};
	}
	isActive(e) {
		return e.classList.contains(this.classStatus.active);
	}
	get() {
		return this.element.value;
	}
	getStart() {
		return this.start.value;
	}
	getMove() {
		return this.move.value;
	}
	getClassStatus() {
		return this.classStatus;
	}
	getElementPreparation() {
		var e;
		return (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.classStatus.preparation}`);
	}
	blockScroll() {
		let e = this.getElementScroll();
		e && e.classList.add(this.getClassScrollHidden());
	}
	returnScroll() {
		let e = this.getElementScroll();
		e && e.classList.remove(this.getClassScrollHidden());
	}
	toStart() {
		this.start.value = !0;
	}
	toEnd() {
		this.start.value = !1;
	}
	toMove() {
		this.move.value = !0;
	}
	toStop() {
		this.move.value = !1;
	}
	initEvent(e) {
		if (this.element.value) {
			let t = (n) => {
				if (this.isTransitionend(n)) {
					var r;
					e(), (r = this.element.value) == null || r.removeEventListener("transitionend", t), this.toStop();
				}
			};
			this.element.value.addEventListener("transitionend", t);
		}
	}
	getClassStatusItem(e) {
		return `${this.className}__slide${e ? `--${e}` : ""}`;
	}
	getClassScroll() {
		return `${this.className}__scroll`;
	}
	getClassScrollHidden() {
		return `${this.className}__scroll--hidden`;
	}
	getElementScroll() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.closest(`.${this.getClassScroll()}`)) == null ? void 0 : e;
	}
	isTransitionend(e) {
		return [
			"transform",
			"translate",
			"scale"
		].indexOf(e.propertyName) !== -1 && this.isActive(e.target);
	}
}, d = class {
	constructor(t) {
		e(this, "item", o()), this.props = t, this.item.value = t.selected;
	}
	is(e) {
		return this.item.value === e;
	}
	set(e) {
		return this.item.value = e, this;
	}
}, f = class {
	constructor(e, t, n) {
		this.element = e, this.className = t, this.selected = n;
	}
	add(e) {
		let t = this.element.value;
		if (e && t) {
			var n;
			let r = t.getBoundingClientRect(), i = (n = t.querySelector(`[data-key="${e}"]`)) == null ? void 0 : n.getBoundingClientRect();
			r && i && (t.style.setProperty(`--${this.className}-sys-top`, `${i.top - r.top}px`), t.style.setProperty(`--${this.className}-sys-left`, `${i.left - r.left}px`), t.style.setProperty(`--${this.className}-sys-width`, `${i.width}px`), t.style.setProperty(`--${this.className}-sys-height`, `${i.height}px`));
		}
	}
	addNext() {
		let e = this.element.value;
		if (e) {
			var t;
			let r = e == null || (t = e.querySelector(`[data-key="${this.selected.item.value}"]`)) == null ? void 0 : t.getBoundingClientRect();
			if (r) {
				var n;
				e.style.setProperty(`--${this.className}-sys-next-height`, `${(n = r == null ? void 0 : r.height) == null ? "0" : n}px`);
			}
		}
	}
	remove() {
		let e = this.element.value;
		e && (e.style.removeProperty(`--${this.className}-sys-top`), e.style.removeProperty(`--${this.className}-sys-left`), e.style.removeProperty(`--${this.className}-sys-width`), e.style.removeProperty(`--${this.className}-sys-height`), e.style.removeProperty(`--${this.className}-sys-next-height`));
	}
}, p = class {
	constructor(t) {
		e(this, "item", o()), this.styles = t, s(this.item, (e) => {
			e ? this.styles.add(e) : this.styles.remove();
		});
	}
	is(e) {
		return this.item.value === e;
	}
	get() {
		return this.item.value;
	}
	set(e) {
		return this.item.value = e, this;
	}
}, m = class {
	constructor(t, n, r, i, a, s) {
		e(this, "preparation", o()), e(this, "active", o()), e(this, "end", () => {
			this.previous.set(void 0), this.preparation.value = void 0, this.emit("end"), this.element.returnScroll();
		}), this.element = n, this.selected = r, this.previous = i, this.styles = a, this.emits = s, this.active.value = t.selected;
	}
	isPreparation(e) {
		return this.preparation.value === e;
	}
	isActive(e) {
		return this.active.value === e;
	}
	get() {
		return this.selected.item.value;
	}
	set(e) {
		return this.selected.is(e) || (this.selected.set(e), this.start()), this;
	}
	setFlash(e) {
		return this.selected.set(e), this;
	}
	start() {
		this.element.toStart(), this.previous.set(this.active.value), this.preparation.value = this.selected.item.value, this.element.blockScroll(), this.expectation();
	}
	expectation() {
		requestAnimationFrame(() => {
			let e = this.element.getElementPreparation();
			e && e.offsetHeight > 0 ? (this.styles.addNext(), requestAnimationFrame(() => {
				this.element.toEnd(), this.element.toMove(), this.element.initEvent(this.end), this.active.value = this.selected.item.value, this.emit("start");
			})) : this.expectation();
		});
	}
	emit(e) {
		this.emits && this.selected.item.value !== void 0 && (e === "start" ? this.emits("start", this.selected.item.value) : this.emits("end", this.selected.item.value), this.emits("motionAxis", {
			type: e,
			selected: this.selected.item.value,
			previous: this.previous.get(),
			preparation: this.preparation.value,
			active: this.active.value
		}));
	}
}, h = class {
	constructor(t) {
		e(this, "item", o([])), this.status = t;
	}
	get() {
		return this.item;
	}
	getByIndex(e) {
		var t;
		let n = (t = this.item.value) == null ? [] : t, r = this.findIndex();
		if (r === -1) return n == null ? void 0 : n[0];
		let i = r + e;
		return i >= n.length ? n == null ? void 0 : n[0] : i <= -1 ? n == null ? void 0 : n[n.length - 1] : n == null ? void 0 : n[i];
	}
	findIndex(e = this.status.get()) {
		return this.item.value.findIndex((t) => t === e);
	}
	add(e) {
		return this.item.value.push(e), this;
	}
	reset() {
		this.item.value = [];
	}
}, g = class {
	constructor(t, n, r, i, a) {
		e(this, "axis", o()), e(this, "direction", o()), e(this, "back", () => {
			this.direction.value = "back", this.status.set(this.slides.getByIndex(-1));
		}), e(this, "next", () => {
			this.direction.value = "next", this.status.set(this.slides.getByIndex(1));
		}), e(this, "to", (e) => {
			let t = this.slides.findIndex(), n = this.slides.findIndex(e);
			if (n !== -1 && n !== t) {
				if (t === -1) {
					this.status.setFlash(e);
					return;
				}
				t > n ? this.direction.value = "back" : this.direction.value = "next", this.status.set(e);
			}
		}), e(this, "top", (e) => {
			this.axis.value = "y", this.direction.value = "back", this.status.set(e);
		}), e(this, "right", (e) => {
			this.axis.value = "x", this.direction.value = "next", this.status.set(e);
		}), e(this, "bottom", (e) => {
			this.axis.value = "y", this.direction.value = "next", this.status.set(e);
		}), e(this, "left", (e) => {
			this.axis.value = "x", this.direction.value = "back", this.status.set(e);
		}), e(this, "down", (e) => {
			this.axis.value = "z", this.direction.value = "back", this.status.set(e);
		}), e(this, "up", (e) => {
			this.axis.value = "z", this.direction.value = "next", this.status.set(e);
		}), e(this, "setAxis", (e) => {
			this.axis.value = e;
		}), e(this, "setDirection", (e) => {
			this.direction.value = e;
		}), this.props = t, this.refs = n, this.element = r, this.slides = i, this.status = a, this.axis.value = t.axis, this.direction.value = t.direction, s([n.axis], () => this.setAxis(t.axis)), s([n.direction], () => this.setDirection(t.direction));
	}
}, _ = class {
	constructor(n, i, o, c, l, _, v, y, b) {
		e(this, "elementItem", void 0), e(this, "go", void 0), e(this, "previous", void 0), e(this, "selected", void 0), e(this, "slides", void 0), e(this, "status", void 0), e(this, "styles", void 0), e(this, "classes", r(() => ({
			[`${this.className}--axis--${this.go.axis.value}`]: !0,
			[`${this.className}--direction--${this.go.direction.value}`]: !0,
			[`${this.className}--start`]: this.elementItem.getStart() && !!this.props.animationHeight,
			[`${this.className}--move`]: this.elementItem.getMove() && !!this.props.animationHeight
		}))), e(this, "updateSelected", () => {
			let e = this.props.selected;
			if (!this.selected.is(e)) {
				if (this.props.direction === "auto") {
					this.go.to(e);
					return;
				}
				this.status.set(e);
			}
		}), this.props = n, this.refs = i, this.element = o, this.classDesign = c, this.className = l, this.components = _, this.slots = v, this.emits = y;
		let { ModelIncludeConstructor: x = t, MotionAxisElementConstructor: S = u, MotionAxisGoConstructor: C = g, MotionAxisPreviousConstructor: w = p, MotionAxisSelectedConstructor: T = d, MotionAxisSlidesConstructor: E = h, MotionAxisStatusConstructor: D = m, MotionAxisStylesConstructor: O = f } = b == null ? {} : b;
		this.selected = new T(this.props), this.elementItem = new S(this.element, this.className), this.styles = new O(this.element, this.className, this.selected), this.previous = new w(this.styles), this.status = new D(this.props, this.elementItem, this.selected, this.previous, this.styles, this.emits), this.slides = new E(this.status), this.go = new C(this.props, this.refs, this.element, this.slides, this.status), new x("selected", this.emits, this.selected.item), a(() => {
			s([i.selected], this.updateSelected, { immediate: !0 });
		});
	}
	isInDom(e) {
		return this.props.inDom || this.isInDomSlide(e) || this.previous.is(e) || this.status.isPreparation(e) || this.status.isActive(e);
	}
	isInDomSlide(e) {
		return !!(this.props.inDomSlide && this.props.inDomSlide.indexOf(e) !== -1);
	}
}, v = {
	axis: "x",
	direction: "auto"
}, y = class extends c {
	constructor(t, n, r, a = _) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderSlides", () => {
			let e = [];
			return this.item.slides.reset(), this.slots && l(this.slots, (t, n) => {
				if (this.item.slides.add(n), this.item.isInDom(n)) {
					let r = this.item.elementItem.getClassStatus();
					e.push(i("div", {
						key: n,
						class: {
							[r.main]: !0,
							[r.previous]: this.item.previous.is(n),
							[r.preparation]: this.item.status.isPreparation(n),
							[r.active]: this.item.status.isActive(n)
						},
						"data-key": n
					}, t == null ? void 0 : t({})));
				}
			}), e;
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			next: this.item.go.next,
			back: this.item.go.back,
			to: this.item.go.to,
			top: this.item.go.top,
			right: this.item.go.right,
			bottom: this.item.go.bottom,
			left: this.item.go.left,
			down: this.item.go.down,
			up: this.item.go.up
		};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			slide: this.getSubClass("slide")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return i("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.renderSlides());
	}
};
//#endregion
export { _ as MotionAxis, y as MotionAxisDesign, u as MotionAxisElement, g as MotionAxisGo, n as MotionAxisInclude, p as MotionAxisPrevious, d as MotionAxisSelected, h as MotionAxisSlides, m as MotionAxisStatus, f as MotionAxisStyles, v as defaultsMotionAxis };

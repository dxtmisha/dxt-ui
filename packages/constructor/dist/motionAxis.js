import { t as e } from "./defineProperty-BTtSLqQS.js";
import { t } from "./ModelInclude-ZrPu5V5T.js";
import { computed as n, h as r, onMounted as i, ref as a, watch as o } from "vue";
import { DesignConstructorAbstract as s, forEach as c } from "@dxtmisha/functional";
//#region src/constructors/MotionAxis/MotionAxisElement.ts
var l = class {
	constructor(t, n) {
		e(this, "classStatus", void 0), e(this, "start", a(!1)), e(this, "move", a(!1)), this.element = t, this.className = n, this.classStatus = {
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
}, u = class {
	constructor(t) {
		e(this, "item", a()), this.props = t, this.item.value = t.selected;
	}
	is(e) {
		return this.item.value === e;
	}
	set(e) {
		return this.item.value = e, this;
	}
}, d = class {
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
}, f = class {
	constructor(t) {
		e(this, "item", a()), this.styles = t, o(this.item, (e) => {
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
}, p = class {
	constructor(t, n, r, i, o, s) {
		e(this, "preparation", a()), e(this, "active", a()), e(this, "end", () => {
			this.previous.set(void 0), this.preparation.value = void 0, this.emit("end"), this.element.returnScroll();
		}), this.element = n, this.selected = r, this.previous = i, this.styles = o, this.emits = s, this.active.value = t.selected;
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
}, m = class {
	constructor(t) {
		e(this, "item", a([])), this.status = t;
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
}, h = class {
	constructor(t, n, r, i, s) {
		e(this, "axis", a()), e(this, "direction", a()), e(this, "back", () => {
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
		}), this.props = t, this.refs = n, this.element = r, this.slides = i, this.status = s, this.axis.value = t.axis, this.direction.value = t.direction, o([n.axis], () => this.setAxis(t.axis)), o([n.direction], () => this.setDirection(t.direction));
	}
}, g = class {
	constructor(r, a, s, c, g, _, v, y, b) {
		e(this, "elementItem", void 0), e(this, "go", void 0), e(this, "previous", void 0), e(this, "selected", void 0), e(this, "slides", void 0), e(this, "status", void 0), e(this, "styles", void 0), e(this, "classes", n(() => ({
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
		}), this.props = r, this.refs = a, this.element = s, this.classDesign = c, this.className = g, this.components = _, this.slots = v, this.emits = y;
		let { ModelIncludeConstructor: x = t, MotionAxisElementConstructor: S = l, MotionAxisGoConstructor: C = h, MotionAxisPreviousConstructor: w = f, MotionAxisSelectedConstructor: T = u, MotionAxisSlidesConstructor: E = m, MotionAxisStatusConstructor: D = p, MotionAxisStylesConstructor: O = d } = b == null ? {} : b;
		this.selected = new T(this.props), this.elementItem = new S(this.element, this.className), this.styles = new O(this.element, this.className, this.selected), this.previous = new w(this.styles), this.status = new D(this.props, this.elementItem, this.selected, this.previous, this.styles, this.emits), this.slides = new E(this.status), this.go = new C(this.props, this.refs, this.element, this.slides, this.status), new x("selected", this.emits, this.selected.item), i(() => {
			o([a.selected], this.updateSelected, { immediate: !0 });
		});
	}
	isInDom(e) {
		return this.props.inDom || this.isInDomSlide(e) || this.previous.is(e) || this.status.isPreparation(e) || this.status.isActive(e);
	}
	isInDomSlide(e) {
		return !!(this.props.inDomSlide && this.props.inDomSlide.indexOf(e) !== -1);
	}
}, _ = {
	axis: "x",
	direction: "auto"
}, v = class extends s {
	constructor(t, n, i, a = g) {
		super(t, n, i), e(this, "item", void 0), e(this, "renderSlides", () => {
			let e = [];
			return this.item.slides.reset(), this.slots && c(this.slots, (t, n) => {
				if (this.item.slides.add(n), this.item.isInDom(n)) {
					let i = this.item.elementItem.getClassStatus();
					e.push(r("div", {
						key: n,
						class: {
							[i.main]: !0,
							[i.previous]: this.item.previous.is(n),
							[i.preparation]: this.item.status.isPreparation(n),
							[i.active]: this.item.status.isActive(n)
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
		return r("div", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.renderSlides());
	}
};
//#endregion
export { g as MotionAxis, v as MotionAxisDesign, _ as defaultsMotionAxis };

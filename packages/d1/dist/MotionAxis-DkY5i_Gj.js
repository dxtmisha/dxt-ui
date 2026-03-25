import { t as e } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, onMounted as o, openBlock as s, ref as c, unref as l, watch as u } from "vue";
import { DesignConstructorAbstract as d, forEach as f, inArray as p } from "@dxtmisha/functional";
//#region ../constructor/dist/motionAxis.js
var m = Object.defineProperty, h = (e, t, n) => t in e ? m(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, g = (e, t, n) => h(e, typeof t == "symbol" ? t : t + "", n), _ = class {
	constructor(e, t) {
		g(this, "classStatus"), g(this, "start", c(!1)), g(this, "move", c(!1)), this.element = e, this.className = t, this.classStatus = {
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
				var r;
				this.isTransitionend(n) && (e(), (r = this.element.value) == null || r.removeEventListener("transitionend", t), this.toStop());
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
		return (t = (e = this.element.value) == null ? void 0 : e.closest(`.${this.getClassScroll()}`)) == null ? void 0 : t;
	}
	isTransitionend(e) {
		return [
			"transform",
			"translate",
			"scale"
		].indexOf(e.propertyName) !== -1 && this.isActive(e.target);
	}
}, v = class {
	constructor(e) {
		g(this, "item", c()), this.props = e, this.item.value = e.selected;
	}
	is(e) {
		return this.item.value === e;
	}
	set(e) {
		return this.item.value = e, this;
	}
}, y = class {
	constructor(e, t, n) {
		this.element = e, this.className = t, this.selected = n;
	}
	add(e) {
		var t;
		let n = this.element.value;
		if (e && n) {
			let r = n.getBoundingClientRect(), i = (t = n.querySelector(`[data-key="${e}"]`)) == null ? void 0 : t.getBoundingClientRect();
			r && i && (n.style.setProperty(`--${this.className}-sys-top`, `${i.top - r.top}px`), n.style.setProperty(`--${this.className}-sys-left`, `${i.left - r.left}px`), n.style.setProperty(`--${this.className}-sys-width`, `${i.width}px`), n.style.setProperty(`--${this.className}-sys-height`, `${i.height}px`));
		}
	}
	addNext() {
		var e, t;
		let n = this.element.value;
		if (n) {
			let r = (e = n == null ? void 0 : n.querySelector(`[data-key="${this.selected.item.value}"]`)) == null ? void 0 : e.getBoundingClientRect();
			r && n.style.setProperty(`--${this.className}-sys-next-height`, `${(t = r == null ? void 0 : r.height) == null ? "0" : t}px`);
		}
	}
	remove() {
		let e = this.element.value;
		e && (e.style.removeProperty(`--${this.className}-sys-top`), e.style.removeProperty(`--${this.className}-sys-left`), e.style.removeProperty(`--${this.className}-sys-width`), e.style.removeProperty(`--${this.className}-sys-height`), e.style.removeProperty(`--${this.className}-sys-next-height`));
	}
}, b = class {
	constructor(e) {
		g(this, "item", c()), this.styles = e, u(this.item, (e) => {
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
}, x = class {
	constructor(e, t, n, r, i, a) {
		g(this, "preparation", c()), g(this, "active", c()), g(this, "end", () => {
			this.previous.set(void 0), this.preparation.value = void 0, this.emit("end"), this.element.returnScroll();
		}), this.element = t, this.selected = n, this.previous = r, this.styles = i, this.emits = a, this.active.value = e.selected;
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
}, S = class {
	constructor(e) {
		g(this, "item", c([])), this.status = e;
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
}, C = class {
	constructor(e, t, n, r, i) {
		g(this, "axis", c()), g(this, "direction", c()), g(this, "back", () => {
			this.direction.value = "back", this.status.set(this.slides.getByIndex(-1));
		}), g(this, "next", () => {
			this.direction.value = "next", this.status.set(this.slides.getByIndex(1));
		}), g(this, "to", (e) => {
			let t = this.slides.findIndex(), n = this.slides.findIndex(e);
			if (n !== -1 && n !== t) {
				if (t === -1) {
					this.status.setFlash(e);
					return;
				}
				t > n ? this.direction.value = "back" : this.direction.value = "next", this.status.set(e);
			}
		}), g(this, "top", (e) => {
			this.axis.value = "y", this.direction.value = "back", this.status.set(e);
		}), g(this, "right", (e) => {
			this.axis.value = "x", this.direction.value = "next", this.status.set(e);
		}), g(this, "bottom", (e) => {
			this.axis.value = "y", this.direction.value = "next", this.status.set(e);
		}), g(this, "left", (e) => {
			this.axis.value = "x", this.direction.value = "back", this.status.set(e);
		}), g(this, "down", (e) => {
			this.axis.value = "z", this.direction.value = "back", this.status.set(e);
		}), g(this, "up", (e) => {
			this.axis.value = "z", this.direction.value = "next", this.status.set(e);
		}), g(this, "setAxis", (e) => {
			this.axis.value = e;
		}), g(this, "setDirection", (e) => {
			this.direction.value = e;
		}), this.props = e, this.refs = t, this.element = n, this.slides = r, this.status = i, this.axis.value = e.axis, this.direction.value = e.direction, u([t.axis], () => this.setAxis(e.axis)), u([t.direction], () => this.setDirection(e.direction));
	}
}, w = class {
	constructor(n, r, i, a, s, c, l, d, f) {
		g(this, "elementItem"), g(this, "go"), g(this, "previous"), g(this, "selected"), g(this, "slides"), g(this, "status"), g(this, "styles"), g(this, "classes", t(() => ({
			[`${this.className}--axis--${this.go.axis.value}`]: !0,
			[`${this.className}--direction--${this.go.direction.value}`]: !0,
			[`${this.className}--start`]: this.elementItem.getStart() && !!this.props.animationHeight,
			[`${this.className}--move`]: this.elementItem.getMove() && !!this.props.animationHeight
		}))), g(this, "updateSelected", () => {
			let e = this.props.selected;
			if (!this.selected.is(e)) {
				if (this.props.direction === "auto") {
					this.go.to(e);
					return;
				}
				this.status.set(e);
			}
		}), this.props = n, this.refs = r, this.element = i, this.classDesign = a, this.className = s, this.components = c, this.slots = l, this.emits = d;
		let { ModelIncludeConstructor: p = e, MotionAxisElementConstructor: m = _, MotionAxisGoConstructor: h = C, MotionAxisPreviousConstructor: w = b, MotionAxisSelectedConstructor: T = v, MotionAxisSlidesConstructor: E = S, MotionAxisStatusConstructor: D = x, MotionAxisStylesConstructor: O = y } = f == null ? {} : f;
		this.selected = new T(this.props), this.elementItem = new m(this.element, this.className), this.styles = new O(this.element, this.className, this.selected), this.previous = new w(this.styles), this.status = new D(this.props, this.elementItem, this.selected, this.previous, this.styles, this.emits), this.slides = new E(this.status), this.go = new h(this.props, this.refs, this.element, this.slides, this.status), new p("selected", this.emits, this.selected.item), o(() => {
			u([r.selected], this.updateSelected, { immediate: !0 });
		});
	}
	isInDom(e) {
		return this.props.inDom || this.isInDomSlide(e) || this.previous.is(e) || this.status.isPreparation(e) || this.status.isActive(e);
	}
	isInDomSlide(e) {
		return !!(this.props.inDomSlide && this.props.inDomSlide.indexOf(e) !== -1);
	}
}, T = {
	axis: "x",
	direction: "auto"
}, E = class extends d {
	constructor(e, t, n, r = w) {
		super(e, t, n), g(this, "item"), g(this, "renderSlides", () => {
			let e = [];
			return this.item.slides.reset(), this.slots && f(this.slots, (t, n) => {
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
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, D = {
	axis: [
		"x",
		"y",
		"z"
	],
	direction: [
		"next",
		"back",
		"auto"
	]
}, O = {
	...T,
	axis: "x",
	direction: "auto"
}, k = /* @__PURE__ */ r({
	name: "D1MotionAxis",
	__name: "D1MotionAxis",
	props: /* @__PURE__ */ a({
		modelSelected: {},
		"onUpdate:selected": { type: Function },
		"onUpdate:modelSelected": { type: Function },
		selected: {},
		animationHeight: { type: Boolean },
		inDom: { type: Boolean },
		inDomSlide: {},
		axis: {},
		direction: {}
	}, O),
	emits: [
		"update:selected",
		"update:modelSelected",
		"motionAxis",
		"start",
		"end"
	],
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, c = new E("d1.motionAxis", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-motionAxis": !0,
				[`d1-motionAxis--axis--${o.axis}`]: p(D.axis, o.axis),
				[`d1-motionAxis--direction--${o.direction}`]: p(D.direction, o.direction)
			} })),
			styles: t(() => ({}))
		}), u = c.render();
		return r(c.expose()), (e, t) => (s(), n(l(u)));
	}
});
//#endregion
export { k as t };

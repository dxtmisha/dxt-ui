import { t as e } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { n } from "./Image-CQ3p93mr.js";
import { t as r } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { n as i, t as a } from "./WindowEsc-DTwn4Vsz-CUeOXmZa.js";
import { n as o, r as s, t as c } from "./WindowClassesInclude-B56usxgx-lf4DY4p9.js";
import { t as l } from "./D1Scrollbar-DLq-_JBC.js";
import { t as u } from "./D1Button-_cI687sv.js";
import { Teleport as d, computed as f, createBlock as p, defineComponent as m, h, mergeDefaults as g, onMounted as _, onUnmounted as v, openBlock as y, ref as b, unref as x, watch as S } from "vue";
import { DesignConstructorAbstract as C, EventItem as w, executePromise as T, frame as E, getBind as D, getElement as O, getMouseClientX as k, getMouseClientY as A, getRef as j, inArray as M, isDomRuntime as N, isEnter as P, isFilled as F, setRef as I, toBind as L, toBinds as R } from "@dxtmisha/functional";
//#region ../constructor/dist/WindowInclude-qHcXkLtH.js
var z = Object.defineProperty, B = (e, t, n) => t in e ? z(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, V = (e, t, n) => B(e, typeof t == "symbol" ? t : t + "", n), ee = class {
	constructor(e, t, n, r, i, a, o, s) {
		V(this, "element", b()), V(this, "binds", f(() => R(j(this.extra), {
			class: `${this.className}__window`,
			disabled: this.props.disabled,
			autoClose: this.props.autoClose,
			preparation: this.getPreparation,
			opening: this.getOpening,
			closing: this.getClosing,
			ariaLabelledby: this.ariaLabelledby,
			ariaDescribedby: this.ariaDescribedby
		}, this.props.windowAttrs))), V(this, "expose", {
			id: f(() => {
				var e;
				return String((e = this.element.value) == null ? void 0 : e.id);
			}),
			open: f(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			control: f(() => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.control;
			}),
			setOpen: async (e) => {
				var t;
				return (t = this.element.value) == null ? void 0 : t.setOpen(e);
			},
			toOpen: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toOpen();
			},
			toClose: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toClose();
			},
			toggle: async () => {
				var e;
				return (e = this.element.value) == null ? void 0 : e.toggle();
			},
			windowElement: this.element
		}), V(this, "render", (e, t) => this.components ? this.components.render("window", {
			...L(t == null ? {} : t, this.binds.value),
			ref: this.element,
			onWindow: this.onWindow
		}, e, this.index) : []), V(this, "getPreparation", () => {
			var e, t, n, r, i;
			return (i = (t = (e = j(this.extra)) == null ? void 0 : e.preparation) == null ? void 0 : t.call(e)) == null ? (r = (n = this.props.windowAttrs) == null ? void 0 : n.preparation) == null ? void 0 : r.call(n) : i;
		}), V(this, "getOpening", () => {
			var e, t, n, r, i, a;
			return (a = (i = (t = (e = j(this.extra)) == null ? void 0 : e.opening) == null ? void 0 : t.call(e)) == null ? (r = (n = this.props.windowAttrs) == null ? void 0 : n.opening) == null ? void 0 : r.call(n) : i) == null ? !0 : a;
		}), V(this, "getClosing", () => {
			var e, t, n, r, i, a;
			return (a = (i = (t = (e = j(this.extra)) == null ? void 0 : e.closing) == null ? void 0 : t.call(e)) == null ? (r = (n = this.props.windowAttrs) == null ? void 0 : n.closing) == null ? void 0 : r.call(n) : i) == null ? !0 : a;
		}), V(this, "onWindow", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "window", e);
		}), this.props = e, this.className = t, this.components = n, this.emits = r, this.extra = i, this.ariaLabelledby = a, this.ariaDescribedby = o, this.index = s;
	}
}, te = Object.defineProperty, ne = (e, t, n) => t in e ? te(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, H = (e, t, n) => ne(e, typeof t == "symbol" ? t : t + "", n), U = class {
	constructor(e, t, n, r) {
		this.props = e, this.className = t, this.components = n, this.emits = r;
	}
	render(e, t, n) {
		var r;
		if (this.components) {
			let i = this.components.renderOne("scrollbar", L({
				tag: e,
				class: `${this.className}__scrollbar`,
				...t == null ? {} : t,
				...this.getScrollbarEvents()
			}, (r = this.props.scrollbarAttrs) == null ? {} : r), n);
			if (i) return [i];
		}
		return [h(e, t, n)];
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
}, W = class {
	constructor(e, t, n, r) {
		H(this, "isImage", f(() => !!this.props.image)), H(this, "bind", f(() => D(this.props.image, j(this.extra), "value"))), this.props = e, this.components = t, this.emits = n, this.extra = r;
	}
	render() {
		return this.components && this.isImage.value ? this.components.render("image", this.bind.value) : [];
	}
	onLoad(e) {
		var t;
		(t = this.emits) == null || t.call(this, "load", e);
	}
}, G = -1, K = class {
	constructor(e) {
		H(this, "x", G), H(this, "y", G), this.element = e;
	}
	is() {
		return this.x !== G && this.y !== G;
	}
	isZero() {
		return this.x === 0 && this.y === 0;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getShiftX(e) {
		return this.x - e;
	}
	getShiftY(e) {
		return this.y - e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	reset() {
		return this.x = G, this.y = G, this;
	}
	update() {
		if (this.is() && this.isZero()) {
			let e = this.element.getControlRect();
			e && this.set(e.left + e.width / 2, e.top + e.height / 2);
		}
		return this;
	}
}, q = class {
	constructor(e) {
		this.props = e;
	}
	async preparation() {
		this.props.preparation && await T(this.props.preparation);
	}
	async before(e) {
		return e ? await this.beforeOpening() : await this.beforeClosing();
	}
	async beforeOpening() {
		return this.props.beforeOpening ? await T(this.props.beforeOpening) : !0;
	}
	async beforeClosing() {
		return this.props.beforeClosing ? await T(this.props.beforeClosing) : !0;
	}
	async after(e) {
		return e ? await this.opening() : await this.closing();
	}
	async opening() {
		return this.props.opening ? await T(this.props.opening) : !1;
	}
	async closing() {
		return this.props.closing ? await T(this.props.closing) : !1;
	}
}, J = class {
	constructor(e, t) {
		this.classes = e, this.element = t;
	}
	isMain() {
		return !!this.element.value;
	}
	getMain() {
		return this.element.value;
	}
	getControl() {
		return this.classes.findControl();
	}
	getControlRect() {
		var e;
		return ((e = this.getControl()) == null ? void 0 : e.getBoundingClientRect()) || void 0;
	}
	getBody() {
		return this.classes.findBody();
	}
	getBodyRect() {
		var e;
		return ((e = this.getBody()) == null ? void 0 : e.getBoundingClientRect()) || void 0;
	}
	getBodyContext() {
		return this.classes.findBodyContext();
	}
}, Y = class {
	constructor(e) {
		H(this, "item", b(s.close)), this.element = e;
	}
	isHide() {
		return this.item.value === s.hide;
	}
	isOpen() {
		return this.item.value === s.open || this.item.value === s.flash;
	}
	set(e) {
		return this.item.value = e, this.update(), this;
	}
	toDisplay() {
		return this.set(s.display), this;
	}
	toPreparation() {
		return this.set(s.preparation), this;
	}
	toFlash() {
		return this.set(s.flash), this;
	}
	toOpen() {
		return this.set(s.open), this;
	}
	toHide() {
		return this.set(s.hide), this;
	}
	toClose() {
		return this.set(s.close), this;
	}
	update() {
		let e = this.element.getMain();
		if (e) {
			let t = e.parentElement;
			e.dataset.status = this.item.value, t && t.dataset.windowTeleport && (t.dataset.status = this.item.value);
		}
	}
}, X = class {
	constructor(e, t, n) {
		H(this, "item", b(!1)), H(this, "onTransitionend", () => {
			this.removeEvent(), this.disabled();
		}), this.props = e, this.classes = t, this.element = n, S(this.item, (e) => {
			let t = this.element.getMain();
			t && (e ? (this.removeEvent(), t.classList.add(this.classes.list.persistent), t.addEventListener("animationend", this.onTransitionend)) : t.classList.remove(this.classes.list.persistent));
		});
	}
	on() {
		return this.props.persistent ? (this.item.value = !0, !0) : !1;
	}
	disabled() {
		return this.item.value && (this.item.value = !1), this;
	}
	removeEvent() {
		var e;
		(e = this.element.getMain()) == null || e.removeEventListener("animationend", this.onTransitionend);
	}
}, re = class {
	constructor(e, t) {
		H(this, "control", !1), this.props = e, this.classes = t;
	}
	is() {
		return !!this.props.flash;
	}
	isOpen() {
		return this.is() || this.control;
	}
	isClose() {
		return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(s.hide)}`);
	}
	setControl(e) {
		var t;
		return this.control = ((t = e == null ? void 0 : e.closest(`.${this.classes.list.control}`)) == null ? void 0 : t.dataset.window) === this.classes.getId(), this;
	}
}, ie = class {
	constructor(e, t) {
		H(this, "top", 0), H(this, "right", 0), H(this, "bottom", 0), H(this, "left", 0), H(this, "width", 0), H(this, "height", 0), H(this, "innerWidth", 0), H(this, "innerHeight", 0), H(this, "controlWidth", 0), H(this, "controlHeight", 0), H(this, "padding", 0), H(this, "location", ""), this.classes = e, this.element = t;
	}
	getTop() {
		return this.top;
	}
	getRight() {
		return this.right;
	}
	getBottom() {
		return this.bottom;
	}
	getLeft() {
		return this.left;
	}
	getWidth() {
		return this.width;
	}
	getHeight() {
		return this.height;
	}
	getInnerWidth() {
		return this.innerWidth;
	}
	getInnerHeight() {
		return this.innerHeight;
	}
	getControlWidth() {
		return this.controlWidth;
	}
	getControlHeight() {
		return this.controlHeight;
	}
	getPadding() {
		return this.padding;
	}
	getLocation() {
		return this.location;
	}
	getMaxHeight() {
		return window.innerHeight - this.padding * 2;
	}
	update() {
		let e = this.element.getMain(), t = this.element.getControlRect();
		return e && t && (this.top !== t.top || this.right !== t.right || this.bottom !== t.bottom || this.left !== t.left || this.width !== e.offsetWidth || this.height !== e.offsetHeight || this.innerWidth !== window.innerWidth || this.innerHeight !== window.innerHeight) ? (this.top = t.top, this.right = t.right, this.bottom = t.bottom, this.left = t.left, this.width = e.offsetWidth, this.height = e.offsetHeight, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.controlWidth = t.width, this.controlHeight = t.height, this.padding = this.initPadding(), this.location = this.initLocation(t.top + t.height / 2), !0) : !1;
	}
	reset() {
		return this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, this.innerWidth = 0, this.innerHeight = 0, this;
	}
	initPadding() {
		let e = this.element.getMain(), t = 0;
		if (e) {
			let n = getComputedStyle(e), r = n.paddingTop.replace(/[^0-9]+/g, ""), i = n.paddingBottom.replace(/[^0-9]+/g, "");
			t = (parseInt(r) + parseInt(i)) / 2;
		}
		return t > 0 ? t : 16;
	}
	initLocation(e) {
		var t, n;
		let r = (n = (t = this.element.getBody()) == null ? void 0 : t.offsetHeight) == null ? 0 : n, i = r / 2, a = this.innerHeight - this.padding * 2 - r, o = e - i - this.padding;
		return o < this.padding ? "0px" : e + i >= this.innerHeight - this.padding ? `${a}px` : `${o}px`;
	}
}, ae = class {
	constructor(e, t, n, r) {
		H(this, "x", 0), H(this, "y", 0), this.props = e, this.client = t, this.element = n, this.coordinates = r;
	}
	isOver() {
		return this.props.axis === "on";
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getStyleX() {
		return `${this.x}px`;
	}
	getStyleY() {
		return `${this.y}px`;
	}
	update() {
		return this.coordinates.update() ? (this.setX(), this.setY(), !0) : !1;
	}
	updateScroll() {
		var e, t, n;
		let r = this.element.getBodyContext();
		if (this.isOver() && this.props.overElement && r && r.scrollHeight > r.offsetHeight) {
			let i = (e = O(this.props.overElement)) == null ? void 0 : e.getBoundingClientRect(), a = (t = this.element.getBody()) == null ? void 0 : t.getBoundingClientRect(), o = r == null ? void 0 : r.getBoundingClientRect(), s = (n = this.element.getControl()) == null ? void 0 : n.getBoundingClientRect();
			if (r && i && a && o) {
				let e = i.height / 2, t = i.top - o.top;
				if (s && this.coordinates.getMaxHeight() === a.height) {
					if (s.top + e < a.top) {
						r.scrollTop += t;
						return;
					}
					if (s.bottom - e > a.bottom) {
						r.scrollTop += t - o.height + i.height;
						return;
					}
					r.scrollTop += t - (s.top - o.top) - s.height / 2 + e;
					return;
				}
				r.scrollTop += t - o.height / 2 + e;
			}
		}
	}
	updateBody() {
		if (N()) {
			let e = document.body, t = e.offsetHeight > window.innerHeight ? "scroll" : "none";
			e.dataset.scroll !== t && (e.dataset.scroll = t);
		}
	}
	getAxis() {
		var e, t;
		return this.isOver() || (t = (e = this.props) == null ? void 0 : e.axis) == null ? "y" : t;
	}
	getIndent(e) {
		var t;
		return this.getAxis() === e ? (t = this.props.indent) == null ? 4 : t : 0;
	}
	getOverHeight(e, t) {
		var n, r;
		let i = (t - e) / 2;
		if (this.props.overElement) {
			let e = (n = O(this.props.overElement)) == null ? void 0 : n.getBoundingClientRect(), a = (r = this.element.getBody()) == null ? void 0 : r.getBoundingClientRect();
			if (e && a) {
				let n = e.top - a.top, r = e.height / 2;
				return t - n - r - i;
			}
		}
		let a = this.coordinates.getHeight() / 2;
		return t - i - a;
	}
	setX() {
		let e = this.element.getMain();
		if (e) {
			let t = this.getIndent("x"), n = this.props.contextmenu ? this.client.getX() : this.coordinates.getRight() + t, r = this.props.contextmenu ? this.client.getX() : this.coordinates.getLeft() - t, i = [];
			this.getAxis() === "x" ? i.push(n, r) : i.push(r, n), this.x = this.calculationInner(i[0], i[1], e.offsetWidth, window.innerWidth, this.coordinates.getWidth());
		}
		return this;
	}
	setY() {
		let e = this.element.getMain();
		if (e) {
			let t = this.getIndent("y"), n = this.props.contextmenu ? this.client.getY() : this.coordinates.getTop() - t, r = this.props.contextmenu ? this.client.getY() : this.coordinates.getBottom() + t, i = [];
			if (this.isOver()) return this.y = this.calculationOver(this.getOverHeight(n, r), n, r, e.offsetHeight, window.innerHeight), this;
			this.getAxis() === "x" ? i.push(n, r) : i.push(r, n), this.y = this.calculationInner(i[0], i[1], e.offsetHeight, window.innerHeight, this.coordinates.getHeight());
		}
		return this;
	}
	calculationInner(e, t, n, r, i) {
		let a = this.coordinates.getPadding();
		return e + n <= r - a ? e : t - n > a ? t - n : r / 2 - i / 2;
	}
	calculationOver(e, t, n, r, i) {
		let a = this.coordinates.getPadding();
		if (n < a) return n;
		if (t > i - a) {
			let e = t - r - a;
			return e < a ? a : e;
		}
		return e < a ? a : e + r <= i - a ? e : i - r - a;
	}
}, oe = class {
	constructor(e, t, n) {
		H(this, "x", null), H(this, "y", null), this.client = e, this.element = t, this.position = n;
	}
	getStyleX() {
		return this.x === null ? null : `${this.x}px`;
	}
	getStyleY() {
		return this.y === null ? null : `${this.y}px`;
	}
	update() {
		let e = this.element.getMain();
		if (this.client.update(), !this.client.is()) this.x = 0, this.y = 0;
		else if (e && getComputedStyle(e).getPropertyValue("--sys-type-body").includes("--MENU--")) {
			let e = this.element.getBodyRect();
			e && (this.x = this.client.getShiftX(e.left), this.y = this.client.getShiftY(e.top));
		} else this.x = this.client.getShiftX(this.position.getX()), this.y = this.client.getShiftY(this.position.getY());
		return this;
	}
	reset() {
		return this.x = null, this.y = null, this;
	}
}, se = class {
	constructor(e, t, n) {
		H(this, "event"), H(this, "item", b(!1)), H(this, "listener", () => {
			I(this.item, this.isStatic());
		}), H(this, "make", () => {
			this.isStaticMod() ? (this.start(), requestAnimationFrame(this.listener)) : this.stop();
		}), this.props = e, this.element = n, S([t.staticMode], this.make, { immediate: !0 });
	}
	isStaticMod() {
		return !!this.props.staticMode;
	}
	start() {
		this.event || (this.event = new w(window, ["resize"], this.listener)), this.event.start();
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0);
	}
	isStatic() {
		let e = this.element.getMain();
		return !!(e && getComputedStyle(e).getPropertyValue("--sys-type-body").includes("--STATIC--"));
	}
}, ce = class {
	constructor(e, t, n) {
		this.classes = e, this.element = t, this.emits = n;
	}
	on(e) {
		var t;
		(t = this.emits) == null || t.call(this, "window", this.getEmitOptions(e));
	}
	getEmitOptions(e) {
		return {
			id: this.classes.getId(),
			element: this.element.getMain(),
			control: this.element.getControl(),
			open: e
		};
	}
}, le = class {
	constructor(e, t, n, r, i) {
		this.element = e, this.coordinates = t, this.position = n, this.origin = r, this.className = i, S(this.element.element, () => this.update());
	}
	update() {
		let e = this.element.getMain();
		e && (e.style.setProperty(`--${this.className}-sys-inset-x`, this.position.getStyleX()), e.style.setProperty(`--${this.className}-sys-inset-y`, this.position.getStyleY()), e.style.setProperty(`--${this.className}-origin-x`, this.origin.getStyleX()), e.style.setProperty(`--${this.className}-origin-y`, this.origin.getStyleY()), e.style.setProperty(`--${this.className}-sys-control-width`, `${this.coordinates.getControlWidth()}px`), e.style.setProperty(`--${this.className}-sys-control-height`, `${this.coordinates.getControlHeight()}px`), e.style.setProperty(`--${this.className}-sys-location`, this.coordinates.getLocation()));
	}
	updateType(e) {
		let t = this.element.getMain();
		if (t && (e && t.dataset.windowMenu !== "menu" || !e && t.dataset.windowMenu === "menu")) {
			let n = t.parentElement;
			t.dataset.windowMenu = e ? "menu" : "modal", n && n.dataset.windowTeleport && (n.dataset.windowMenu = t.dataset.windowMenu);
		}
	}
}, ue = class {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d) {
		H(this, "item", b(!1)), H(this, "first", b(!1)), H(this, "clicks", 0), H(this, "inDom", f(() => this.item.value || this.props.staticMode || !!this.props.inDom && this.first.value)), H(this, "set", async (e) => {
			this.item.value !== !!e && await this.toggle();
		}), H(this, "open", async () => this.set(!0)), H(this, "close", async () => this.set(!1)), H(this, "toggle", async () => {
			if (this.clicks > 1) return;
			let e = !this.item.value;
			await this.hook.before(e) && (e ? (this.reset(), this.status.toDisplay(), await this.setOpen(e), requestAnimationFrame(async () => {
				this.status.update(), await this.hook.preparation(), await this.watchPosition(), this.styles.updateType(!0), requestAnimationFrame(async () => {
					this.position.updateScroll(), this.status.toPreparation(), requestAnimationFrame(async () => {
						this.flash.isClose() ? this.status.toFlash() : this.status.toOpen(), requestAnimationFrame(() => {
							this.hook.opening(), this.resetClicks(), this.props.embedded || this.tabIndex.goTo();
						}), this.emit.on(this.item.value);
					});
				});
			})) : (this.client.reset(), this.flash.isOpen() ? this.toClose() : requestAnimationFrame(() => {
				this.status.toHide(), this.resetClicks();
			})));
		}), this.props = e, this.client = t, this.hook = n, this.element = r, this.tabIndex = i, this.status = a, this.flash = o, this.coordinates = s, this.position = c, this.origin = l, this.emit = u, this.styles = d;
	}
	isClicks() {
		return this.clicks > 0;
	}
	closeForEvent() {
		this.status.isHide() ? this.toClose() : this.status.isOpen() || this.hook.closing().then();
	}
	reset() {
		return this.coordinates.reset(), this.origin.reset(), this;
	}
	pressed() {
		return this.clicks++, setTimeout(() => this.resetClicks(), 128), this;
	}
	resetClicks() {
		return this.clicks = 0, this;
	}
	async watchPosition() {
		this.item.value && this.element.isMain() ? (this.position.update(), this.position.updateBody(), this.styles.update(), this.origin.update(), this.styles.update(), this.watchCoordinates()) : this.reset();
	}
	async setOpen(e) {
		return this.item.value = e, e && !this.first.value && (this.first.value = !0), this;
	}
	watchCoordinates() {
		return E(() => {
			let e = this.element.getMain();
			if (e) {
				let t = getComputedStyle(e).getPropertyValue(c).includes("--MENU--");
				t && this.position.update() && this.styles.update(), this.styles.updateType(t);
			}
		}, () => this.item.value && !this.status.isHide()), this;
	}
	toClose() {
		setTimeout(async () => {
			await this.setOpen(!1), await this.hook.closing(), this.resetClicks(), this.tabIndex.reset(), this.emit.on(this.item.value);
		}, 48), this.status.toClose();
	}
}, de = class {
	constructor(e, t, n, r, i, a) {
		H(this, "target"), H(this, "focus"), this.props = e, this.persistent = t, this.classes = n, this.element = r, this.staticMode = i, this.open = a;
	}
	async update(e) {
		if (!this.open.isClicks() && (this.target = e, this.focus = this.getFocus(), N() && this.isTargetInBody() && !this.staticMode.item.value)) if (this.open.pressed(), this.open.item.value) {
			if (this.isOpenOnly() || this.isBlockOther()) return;
			this.isContextmenu() ? await this.open.reset().watchPosition() : this.focus ? this.isFocus() ? this.isTarget() ? this.isNotBlockChildren() && (this.persistent.on() || await this.open.toggle()) : (this.isClose() || this.isAutoClose() || !this.isChildren()) && await this.open.toggle() : this.isNotBlock() && (this.isChildren() ? setTimeout(() => {
				requestAnimationFrame(async () => {
					var e;
					["open", "flash"].indexOf(((e = this.focus) == null ? void 0 : e.dataset.status) || "") === -1 && this.isMenu() && await this.open.toggle();
				});
			}, 40) : await this.open.toggle()) : await this.open.toggle();
		} else this.isEnabled() && await this.open.toggle();
	}
	getFocus() {
		return this.classes.findMain(this.getTarget());
	}
	getTarget() {
		var e, t;
		return (t = (e = this.target) == null ? this.element.getMain() : e) == null ? document.body : t;
	}
	isFocus() {
		return this.element.getMain() === this.focus;
	}
	isTarget() {
		return this.element.getMain() === this.target;
	}
	isTargetInBody() {
		var e;
		return !!((e = this.target) != null && e.closest("body"));
	}
	isChildren(e = this.getTarget()) {
		let t = this.classes.findMain(e);
		if (t) {
			if (t.dataset.window === this.classes.getId()) return !0;
			let e = this.classes.findControlByElement(t);
			if (e) return this.isChildren(e);
		}
		return !1;
	}
	isEnabled() {
		return !this.props.disabled && !this.getTarget().closest(`.${this.classes.list.controlStatic}`);
	}
	isAutoClose() {
		return !!this.props.autoClose && !this.getTarget().closest(`.${this.classes.list.static}, .${this.classes.getId()} .${this.classes.list.control}`);
	}
	isNotBlock() {
		return this.isNotBlockItem(this.focus);
	}
	isNotBlockItem(e) {
		var t;
		let n = this.getTarget();
		return (!this.isMenu(n) || !this.classes.isWindow(n)) && !((t = this.classes.findControlByElement(e)) != null && t.closest(`.${this.classes.list.block}`));
	}
	isNotBlockChildren() {
		var e, t;
		return !((e = this.classes.findBody()) != null && e.querySelector(`.${this.classes.list.blockChildren}`)) && !((t = this.classes.findBody()) != null && t.querySelector("[data-window-open=\"open\"]"));
	}
	isBlockOther() {
		var e;
		if (this.target) {
			let t = this.classes.findMain(this.target);
			if (t && (t === this.element.getMain() || (e = this.classes.findControl()) != null && e.closest(`[data-window="${t.dataset.window}"]`))) return !1;
		}
		return !!this.classes.findBodyOther(`.${this.classes.list.blockOther}`);
	}
	isContextmenu() {
		return !!(this.props.contextmenu && this.getTarget().closest(this.classes.getSelectorControl()));
	}
	isClose() {
		return !!this.getTarget().closest(`.${this.classes.list.close}:not(.${this.classes.list.static})`);
	}
	isMenu(e = this.element.getMain()) {
		if (e) {
			let t = getComputedStyle(e).getPropertyValue(c);
			return t.includes("--MENU--") || t.includes("--MENU-WINDOW--");
		}
		return !1;
	}
	isOpenOnly() {
		return !!this.getTarget().closest(`.${this.classes.list.controlOpenOnly}`);
	}
}, fe = class {
	constructor(e, t, n, r, i, a, o) {
		H(this, "event"), H(this, "onClick", async (e) => {
			this.props.contextmenu || await this.on(e);
		}), H(this, "onKeydown", async (e) => {
			(P(e, !1) || this.isArrowDown(e)) && (e.preventDefault(), await this.onClick(e));
		}), H(this, "onContextmenu", async (e) => {
			this.props.contextmenu && (e.preventDefault(), await this.on(e));
		}), H(this, "onTransition", () => this.open.closeForEvent()), H(this, "onGlobal", async (e) => {
			(!e || e.type === "click" && (!this.props.contextmenu || this.open.item.value) || e.type === "contextmenu" && this.props.contextmenu) && (this.open.item.value ? (this.flash.setControl(e == null ? void 0 : e.target), await this.verification.update(e == null ? void 0 : e.target)) : this.event.stop());
		}), this.props = e, this.tabIndex = t, this.status = n, this.client = r, this.flash = i, this.open = a, this.verification = o, this.event = new w("body", ["click", "contextmenu"], this.onGlobal), S([this.open.item, this.status.item], () => this.toggle());
	}
	start() {
		return this.props.embedded || this.event.start(), this;
	}
	stop() {
		return this.event.stop(), this;
	}
	toggle() {
		return this.open.item.value && this.status.isOpen() ? this.start() : this.stop(), this;
	}
	isArrowDown(e) {
		return !!(this.props.openOnArrowDown && (e.code === "ArrowDown" || e.key === "ArrowDown" || e.key === "Down" || e.keyCode === 40));
	}
	async on(e) {
		this.tabIndex.updateOldElement(), this.client.set(k(e), A(e)), await this.verification.update(e.target);
	}
}, Z = 0, Q = class {
	constructor(e, t, n, r) {
		H(this, "elements", []), this.props = e, this.classes = t, this.staticMode = n, this.open = r, S(this.open.item, (e) => {
			!this.props.inert || this.props.embedded || this.staticMode.item.value || (e ? this.toHidden() : this.toShow());
		}, { immediate: !0 });
	}
	getAriaData() {
		let e = t.hidden();
		return {
			key: Object.keys(e)[0],
			value: Object.values(e)[0]
		};
	}
	findElements() {
		if (N()) {
			let e = this.classes.getId();
			return document.querySelectorAll(`body > *:not([data-window-teleport="${e}"]):not(.${e}):not(script):not(style)`);
		}
	}
	toHidden() {
		Z++;
		let e = this.findElements();
		if (e) {
			let t = this.getAriaData();
			this.elements = [], e.forEach((e) => {
				e.hasAttribute(t.key) || e.hasAttribute("inert") || (e.setAttribute(t.key, t.value), this.classes.isWindowOrTeleport(e) || e.setAttribute("inert", ""), this.elements.push(e));
			});
		} else this.elements = [];
	}
	toShow() {
		if (--Z > 0) return;
		let e = this.getAriaData();
		this.elements.forEach((t) => {
			t.removeAttribute(e.key), t.removeAttribute("inert");
		}), this.elements = [];
	}
}, pe = class {
	constructor(n, s, c, l, u, d, p, m, h) {
		H(this, "client"), H(this, "hook"), H(this, "classes"), H(this, "element"), H(this, "tabIndex"), H(this, "status"), H(this, "persistent"), H(this, "flash"), H(this, "coordinates"), H(this, "position"), H(this, "origin"), H(this, "staticMode"), H(this, "emit"), H(this, "styles"), H(this, "open"), H(this, "verification"), H(this, "event"), H(this, "scrollbar"), H(this, "image"), H(this, "esc"), H(this, "text"), H(this, "hidden"), H(this, "slotData", f(() => ({
			classesWindow: this.classes.list,
			class: this.classes.list.controlId,
			open: this.open.item,
			onclick: this.event.onClick,
			onKeydown: this.event.onKeydown,
			oncontextmenu: this.event.onContextmenu,
			binds: {
				class: this.classes.list.controlId,
				onclick: this.event.onClick,
				onKeydown: this.event.onKeydown,
				oncontextmenu: this.event.onContextmenu,
				...t.control(this.classes.getControlId(), this.open.inDom.value ? this.classes.getId() : void 0, this.props.ariaHaspopup, this.open.item.value)
			}
		}))), H(this, "classesList", f(() => ({
			[this.classes.getId()]: !0,
			[`${this.className}--staticMode`]: this.staticMode.item.value,
			[`${this.className}--embedded`]: !!this.props.embedded
		}))), H(this, "stop", () => {
			this.event.stop(), this.staticMode.stop();
		}), this.props = n, this.refs = s, this.classDesign = l, this.className = u, this.components = d, this.slots = p, this.emits = m;
		let { ImageConstructor: g = W, ModelConstructor: y = e, ScrollbarConstructor: b = U, TabIndexConstructor: x = i, TextConstructor: C = r, WindowClassesConstructor: w = o, WindowClientConstructor: T = K, WindowCoordinatesConstructor: E = ie, WindowElementConstructor: D = J, WindowEmitConstructor: O = ce, WindowEscConstructor: k = a, WindowEventConstructor: A = fe, WindowFlashConstructor: j = re, WindowHiddenConstructor: M = Q, WindowHookConstructor: N = q, WindowOpenConstructor: P = ue, WindowOriginConstructor: F = oe, WindowPersistentConstructor: I = X, WindowPositionConstructor: L = ae, WindowStaticConstructor: R = se, WindowStatusConstructor: z = Y, WindowStylesConstructor: B = le, WindowVerificationConstructor: V = de } = h == null ? {} : h;
		this.hook = new N(n), this.classes = new w(u), this.element = new D(this.classes, c), this.client = new T(this.element), this.tabIndex = new x(() => this.element.getBody(), void 0, () => !!this.props.autoTabIndex), this.status = new z(this.element), this.persistent = new I(n, this.classes, this.element), this.flash = new j(n, this.classes), this.coordinates = new E(this.classes, this.element), this.position = new L(n, this.client, this.element, this.coordinates), this.origin = new F(this.client, this.element, this.position), this.staticMode = new R(n, s, this.element), this.emit = new O(this.classes, this.element, m), this.styles = new B(this.element, this.coordinates, this.position, this.origin, u), this.open = new P(n, this.client, this.hook, this.element, this.tabIndex, this.status, this.flash, this.coordinates, this.position, this.origin, this.emit, this.styles), this.verification = new V(n, this.persistent, this.classes, this.element, this.staticMode, this.open), this.event = new A(n, this.tabIndex, this.status, this.client, this.flash, this.open, this.verification), this.scrollbar = new b(n, u, d, m), this.image = new g(n, d, m), this.esc = new k(this.open.item, () => this.open.close(), () => {
			var e;
			return !this.props.persistent && ((e = this.props.closeOnEsc) == null ? !0 : e);
		}), this.text = new C(this.props), this.hidden = new M(this.props, this.classes, this.staticMode, this.open), new y("open", this.emits, this.open.item), _(() => {
			S([s.open], () => this.open.set(n.open), { immediate: !0 });
		}), v(this.stop);
	}
	isMenu() {
		return this.props.role === "menu" || this.props.role === "menuitemcheckbox" || this.props.role === "menuitemradio";
	}
}, me = {
	indent: 4,
	ariaHaspopup: "dialog",
	role: "dialog",
	inert: !0,
	autoTabIndex: !0,
	closeOnEsc: !0,
	axis: "y",
	imagePosition: "top",
	overscroll: !0
}, he = class extends C {
	constructor(e, n, r, i = pe) {
		super(e, n, r), H(this, "item"), H(this, "renderMain", () => h("div", this.propsMain.value, this.renderBody())), H(this, "renderBody", () => {
			var e, t;
			return h("div", {
				key: "body",
				...this.getAttrs(),
				class: {
					[String((e = this.classes) == null ? void 0 : e.value.body)]: !0,
					...this.toClass((t = this.attrs) == null ? void 0 : t.class)
				}
			}, [
				...this.renderBodyImage(),
				...this.renderBodyClose(),
				...this.renderBodyGroup()
			]);
		}), H(this, "renderBodyGroup", () => {
			var e;
			let t = [];
			return this.initSlot("title", t, this.item.slotData.value), t.push(this.renderBodyContext()), this.initSlot("footer", t, this.item.slotData.value), [h("div", {
				key: "group",
				class: (e = this.classes) == null ? void 0 : e.value.bodyGroup
			}, t)];
		}), H(this, "renderBodyContext", () => {
			var e;
			return this.item.scrollbar.render("div", {
				key: "bodyContext",
				class: (e = this.classes) == null ? void 0 : e.value.bodyContext,
				divider: this.props.divider,
				"data-window-body": "1"
			}, () => this.initSlot("default", void 0, this.item.slotData.value));
		}), H(this, "renderBodyImage", () => {
			var e;
			return this.props.image ? [h("div", {
				key: "image",
				class: (e = this.classes) == null ? void 0 : e.value.image
			}, this.item.image.render())] : [];
		}), H(this, "renderBodyClose", () => {
			var e;
			return this.props.closeButton ? this.components.render("button", {
				key: "button-close",
				class: [(e = this.classes) == null ? void 0 : e.value.close, this.item.classes.list.close],
				icon: this.props.iconClose,
				...t.label(this.item.text.close.value)
			}) : [];
		}), H(this, "propsMain", f(() => {
			var e, n;
			let r = {
				key: "main",
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				style: (n = this.styles) == null ? void 0 : n.value,
				"data-window": this.item.classes.getId(),
				onTransitionend: this.item.event.onTransition
			};
			return this.item.staticMode.isStaticMod() ? r : {
				...r,
				...t.role(this.props.role),
				...t.modal(!0, this.props.ariaLabelledby, this.props.ariaDescribedby)
			};
		})), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			id: this.item.classes.getId(),
			open: this.item.open.item,
			setOpen: this.item.open.set,
			toOpen: this.item.open.open,
			toClose: this.item.open.close,
			toggle: this.item.open.toggle,
			control: this.item.slotData
		};
	}
	initClasses() {
		return {
			main: this.item.classesList.value,
			body: this.getSubClass("body"),
			bodyGroup: this.getSubClass("body__group"),
			bodyContext: this.getSubClass("body__context"),
			control: this.getSubClass("control"),
			image: this.getSubClass("image"),
			close: this.getSubClass("close"),
			teleport: this.getSubClass("teleport")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [];
		return this.initSlot("control", t, this.item.slotData.value), this.item.open.inDom.value && (this.item.staticMode.item.value || this.props.embedded ? t.push(this.renderMain()) : t.push(h(d, {
			key: "teleport",
			to: "body"
		}, h("div", {
			class: (e = this.classes) == null ? void 0 : e.value.teleport,
			"data-window-teleport": this.item.classes.getId()
		}, this.renderMain())))), t;
	}
}, $ = {
	width: [
		"auto",
		"max",
		"sm",
		"md",
		"lg"
	],
	height: [
		"auto",
		"max",
		"sm",
		"md",
		"lg"
	],
	axis: [
		"x",
		"y",
		"on"
	],
	imagePosition: ["top", "left"],
	alignment: [
		"center",
		"top",
		"topRight",
		"topLeft",
		"topFull",
		"right",
		"rightFull",
		"bottom",
		"bottomRight",
		"bottomLeft",
		"bottomFull",
		"left",
		"leftFull"
	],
	origin: [
		"center",
		"top",
		"right",
		"bottom",
		"left",
		"topToBottom",
		"rightToLeft",
		"bottomToTop",
		"leftToRight"
	],
	adaptive: [
		"menu",
		"menuWindow",
		"modal",
		"modalDynamic",
		"actionSheetRight",
		"actionSheetBottom",
		"static",
		"actionSheet",
		"actionSheetToModal",
		"autoStaticSm",
		"autoStaticMd",
		"autoStaticLg",
		"autoStaticXl",
		"autoStatic2xl"
	],
	imageSize: [
		"sm",
		"md",
		"lg",
		"quarter",
		"half"
	]
}, ge = {
	...me,
	iconClose: "close",
	width: "md",
	axis: "y",
	imagePosition: "top",
	overscroll: !0,
	imageSize: "md"
}, _e = /* @__PURE__ */ m({
	name: "D1Window",
	__name: "D1Window",
	props: /* @__PURE__ */ g({
		scrollbarAttrs: {},
		image: {},
		role: {},
		ariaLabelledby: {},
		ariaDescribedby: {},
		ariaHaspopup: { type: [String, Boolean] },
		textClose: { type: [String, Function] },
		modelOpen: {},
		"onUpdate:open": { type: Function },
		"onUpdate:modelOpen": { type: Function },
		open: { type: Boolean },
		disabled: { type: Boolean },
		preparation: { type: Function },
		beforeOpening: { type: Function },
		opening: { type: Function },
		beforeClosing: { type: Function },
		closing: { type: Function },
		contextmenu: { type: Boolean },
		staticMode: { type: Boolean },
		overElement: {},
		autoClose: { type: Boolean },
		persistent: { type: Boolean },
		flash: { type: Boolean },
		inDom: { type: Boolean },
		indent: {},
		divider: { type: Boolean },
		closeButton: { type: Boolean },
		iconClose: {},
		inert: { type: Boolean },
		autoTabIndex: { type: Boolean },
		closeOnEsc: { type: Boolean },
		openOnArrowDown: { type: Boolean },
		embedded: { type: Boolean },
		width: {},
		height: {},
		hide: { type: Boolean },
		axis: {},
		imagePosition: {},
		dense: { type: Boolean },
		alignment: {},
		origin: {},
		adaptive: {},
		fullscreen: { type: Boolean },
		overscroll: { type: Boolean },
		closeMobileHide: { type: Boolean },
		widthMatch: { type: Boolean },
		imageSize: {}
	}, ge),
	emits: [
		"scrollbarTop",
		"scrollbarReachTop",
		"scrollbarLeaveTop",
		"scrollbarBottom",
		"scrollbarReachBottom",
		"scrollbarLeaveBottom",
		"scrollbarEdge",
		"load",
		"update:open",
		"update:modelOpen",
		"window"
	],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, o = new he("d1.window", a, {
			emits: i,
			classes: f(() => ({ main: {
				"d1-window": !0,
				"d1-window--width--custom": F(a.width) && !M($.width, a.width),
				[`d1-window--width--${a.width}`]: M($.width, a.width),
				"d1-window--height--custom": F(a.height) && !M($.height, a.height),
				[`d1-window--height--${a.height}`]: M($.height, a.height),
				"d1-window--hide": a.hide,
				[`d1-window--axis--${a.axis}`]: M($.axis, a.axis),
				[`d1-window--imagePosition--${a.imagePosition}`]: M($.imagePosition, a.imagePosition),
				"d1-window--dense": a.dense,
				[`d1-window--alignment--${a.alignment}`]: M($.alignment, a.alignment),
				[`d1-window--origin--${a.origin}`]: M($.origin, a.origin),
				[`d1-window--adaptive--${a.adaptive}`]: M($.adaptive, a.adaptive),
				"d1-window--fullscreen": a.fullscreen,
				"d1-window--overscroll": a.overscroll,
				"d1-window--closeButton": a.closeButton,
				"d1-window--closeMobileHide": a.closeMobileHide,
				"d1-window--widthMatch": a.widthMatch,
				[`d1-window--imageSize--${a.imageSize}`]: M($.imageSize, a.imageSize)
			} })),
			styles: f(() => {
				var e, t;
				return {
					"--d1-window-sys-width": (e = a.width) == null ? null : e,
					"--d1-window-sys-height": (t = a.height) == null ? null : t
				};
			}),
			components: {
				scrollbar: l,
				button: u,
				image: n
			},
			compMod: { button: {
				secondary: !0,
				roundedFull: !0,
				size: "xs",
				palette: "neutral"
			} }
		}), s = o.render();
		return t(o.expose()), (e, t) => (y(), p(x(s)));
	}
});
//#endregion
export { ee as n, _e as t };

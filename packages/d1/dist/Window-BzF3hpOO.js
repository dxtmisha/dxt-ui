import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./ModelInclude-ZrPu5V5T-BdFUphAW.js";
import { t as n } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as r } from "./Image-CKe9JQ0K.js";
import { t as i } from "./TextInclude-BIa1AeDQ-C-pyoUw5.js";
import { n as a, t as o } from "./WindowEsc-CoURql2m-BpspIUKZ.js";
import { n as s, r as c, t as l } from "./WindowClassesInclude-C8R8pgeo-DhszkcJh.js";
import { t as u } from "./D1Scrollbar-CppyFqdd.js";
import { t as d } from "./D1Button-BHpmWqRm.js";
import { Teleport as f, computed as p, createBlock as m, defineComponent as h, h as g, mergeDefaults as _, onMounted as ee, onUnmounted as v, openBlock as y, ref as b, unref as x, watch as S } from "vue";
import { DesignConstructorAbstract as C, EventItem as w, executePromise as T, frame as E, getBind as D, getElement as O, getMouseClientX as k, getMouseClientY as A, getRef as j, inArray as M, isDomRuntime as N, isEnter as P, isFilled as F, setRef as I, toBind as L, toBinds as R } from "@dxtmisha/functional";
//#region ../constructor/dist/WindowInclude-qJz_Dx7T.js
var z = class {
	constructor(t, n, r, i, a, o, s, c) {
		e(this, "element", b()), e(this, "binds", p(() => R(j(this.extra), {
			class: `${this.className}__window`,
			disabled: this.props.disabled,
			autoClose: this.props.autoClose,
			preparation: this.getPreparation,
			opening: this.getOpening,
			closing: this.getClosing,
			ariaLabelledby: this.ariaLabelledby,
			ariaDescribedby: this.ariaDescribedby
		}, this.props.windowAttrs))), e(this, "expose", {
			id: p(() => {
				var e;
				return String((e = this.element.value) == null ? void 0 : e.id);
			}),
			open: p(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			control: p(() => {
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
		}), e(this, "render", (e, t) => this.components ? this.components.render("window", {
			...L(t == null ? {} : t, this.binds.value),
			ref: this.element,
			onWindow: this.onWindow
		}, e, this.index) : []), e(this, "getPreparation", () => {
			var e, t, n, r, i;
			return (e = (t = j(this.extra)) == null || (n = t.preparation) == null ? void 0 : n.call(t)) == null ? (r = this.props.windowAttrs) == null || (i = r.preparation) == null ? void 0 : i.call(r) : e;
		}), e(this, "getOpening", () => {
			var e, t, n, r, i, a;
			return (e = (t = (n = j(this.extra)) == null || (r = n.opening) == null ? void 0 : r.call(n)) == null ? (i = this.props.windowAttrs) == null || (a = i.opening) == null ? void 0 : a.call(i) : t) == null ? !0 : e;
		}), e(this, "getClosing", () => {
			var e, t, n, r, i, a;
			return (e = (t = (n = j(this.extra)) == null || (r = n.closing) == null ? void 0 : r.call(n)) == null ? (i = this.props.windowAttrs) == null || (a = i.closing) == null ? void 0 : a.call(i) : t) == null ? !0 : e;
		}), e(this, "onWindow", (e) => {
			var t;
			(t = this.emits) == null || t.call(this, "window", e);
		}), this.props = t, this.className = n, this.components = r, this.emits = i, this.extra = a, this.ariaLabelledby = o, this.ariaDescribedby = s, this.index = c;
	}
}, te = class {
	constructor(e, t, n, r) {
		this.props = e, this.className = t, this.components = n, this.emits = r;
	}
	render(e, t, n) {
		if (this.components) {
			var r;
			let i = this.components.renderOne("scrollbar", L({
				tag: e,
				class: `${this.className}__scrollbar`,
				...t == null ? {} : t,
				...this.getScrollbarEvents()
			}, (r = this.props.scrollbarAttrs) == null ? {} : r), n);
			if (i) return [i];
		}
		return [g(e, t, n)];
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
}, ne = class {
	constructor(t, n, r, i) {
		e(this, "isImage", p(() => !!this.props.image)), e(this, "bind", p(() => D(this.props.image, j(this.extra), "value"))), this.props = t, this.components = n, this.emits = r, this.extra = i;
	}
	render() {
		return this.components && this.isImage.value ? this.components.render("image", this.bind.value) : [];
	}
	onLoad(e) {
		var t;
		(t = this.emits) == null || t.call(this, "load", e);
	}
}, B = -1, V = class {
	constructor(t) {
		e(this, "x", B), e(this, "y", B), this.element = t;
	}
	is() {
		return this.x !== B && this.y !== B;
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
		return this.x = B, this.y = B, this;
	}
	update() {
		if (this.is() && this.isZero()) {
			let e = this.element.getControlRect();
			e && this.set(e.left + e.width / 2, e.top + e.height / 2);
		}
		return this;
	}
}, H = class {
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
}, U = class {
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
}, W = class {
	constructor(t) {
		e(this, "item", b(c.close)), this.element = t;
	}
	isHide() {
		return this.item.value === c.hide;
	}
	isOpen() {
		return this.item.value === c.open || this.item.value === c.flash;
	}
	set(e) {
		return this.item.value = e, this.update(), this;
	}
	toDisplay() {
		return this.set(c.display), this;
	}
	toPreparation() {
		return this.set(c.preparation), this;
	}
	toFlash() {
		return this.set(c.flash), this;
	}
	toOpen() {
		return this.set(c.open), this;
	}
	toHide() {
		return this.set(c.hide), this;
	}
	toClose() {
		return this.set(c.close), this;
	}
	update() {
		let e = this.element.getMain();
		if (e) {
			let t = e.parentElement;
			e.dataset.status = this.item.value, t && t.dataset.windowTeleport && (t.dataset.status = this.item.value);
		}
	}
}, G = class {
	constructor(t, n, r) {
		e(this, "item", b(!1)), e(this, "onTransitionend", () => {
			this.removeEvent(), this.disabled();
		}), this.props = t, this.classes = n, this.element = r, S(this.item, (e) => {
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
}, K = class {
	constructor(t, n) {
		e(this, "control", !1), this.props = t, this.classes = n;
	}
	is() {
		return !!this.props.flash;
	}
	isOpen() {
		return this.is() || this.control;
	}
	isClose() {
		return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(c.hide)}`);
	}
	setControl(e) {
		var t;
		return this.control = (e == null || (t = e.closest(`.${this.classes.list.control}`)) == null ? void 0 : t.dataset.window) === this.classes.getId(), this;
	}
}, q = class {
	constructor(t, n) {
		e(this, "top", 0), e(this, "right", 0), e(this, "bottom", 0), e(this, "left", 0), e(this, "width", 0), e(this, "height", 0), e(this, "innerWidth", 0), e(this, "innerHeight", 0), e(this, "controlWidth", 0), e(this, "controlHeight", 0), e(this, "padding", 0), e(this, "location", ""), this.classes = t, this.element = n;
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
		let r = (t = (n = this.element.getBody()) == null ? void 0 : n.offsetHeight) == null ? 0 : t, i = r / 2, a = this.innerHeight - this.padding * 2 - r, o = e - i - this.padding;
		return o < this.padding ? "0px" : e + i >= this.innerHeight - this.padding ? `${a}px` : `${o}px`;
	}
}, J = class {
	constructor(t, n, r, i) {
		e(this, "x", 0), e(this, "y", 0), this.props = t, this.client = n, this.element = r, this.coordinates = i;
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
		let e = this.element.getBodyContext();
		if (this.isOver() && this.props.overElement && e && e.scrollHeight > e.offsetHeight) {
			var t, n, r;
			let i = (t = O(this.props.overElement)) == null ? void 0 : t.getBoundingClientRect(), a = (n = this.element.getBody()) == null ? void 0 : n.getBoundingClientRect(), o = e == null ? void 0 : e.getBoundingClientRect(), s = (r = this.element.getControl()) == null ? void 0 : r.getBoundingClientRect();
			if (e && i && a && o) {
				let t = i.height / 2, n = i.top - o.top;
				if (s && this.coordinates.getMaxHeight() === a.height) {
					if (s.top + t < a.top) {
						e.scrollTop += n;
						return;
					}
					if (s.bottom - t > a.bottom) {
						e.scrollTop += n - o.height + i.height;
						return;
					}
					e.scrollTop += n - (s.top - o.top) - s.height / 2 + t;
					return;
				}
				e.scrollTop += n - o.height / 2 + t;
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
		return this.isOver() || (e = (t = this.props) == null ? void 0 : t.axis) == null ? "y" : e;
	}
	getIndent(e) {
		var t;
		return this.getAxis() === e ? (t = this.props.indent) == null ? 4 : t : 0;
	}
	getOverHeight(e, t) {
		let n = (t - e) / 2;
		if (this.props.overElement) {
			var r, i;
			let e = (r = O(this.props.overElement)) == null ? void 0 : r.getBoundingClientRect(), a = (i = this.element.getBody()) == null ? void 0 : i.getBoundingClientRect();
			if (e && a) {
				let r = e.top - a.top, i = e.height / 2;
				return t - r - i - n;
			}
		}
		let a = this.coordinates.getHeight() / 2;
		return t - n - a;
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
}, Y = class {
	constructor(t, n, r) {
		e(this, "x", null), e(this, "y", null), this.client = t, this.element = n, this.position = r;
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
}, X = class {
	constructor(t, n, r) {
		e(this, "event", void 0), e(this, "item", b(!1)), e(this, "listener", () => {
			I(this.item, this.isStatic());
		}), e(this, "make", () => {
			this.isStaticMod() ? (this.start(), requestAnimationFrame(this.listener)) : this.stop();
		}), this.props = t, this.element = r, S([n.staticMode], this.make, { immediate: !0 });
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
}, re = class {
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
}, ie = class {
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
}, ae = class {
	constructor(t, n, r, i, a, o, s, c, l, u, d, f) {
		e(this, "item", b(!1)), e(this, "first", b(!1)), e(this, "clicks", 0), e(this, "inDom", p(() => this.item.value || this.props.staticMode || !!this.props.inDom && this.first.value)), e(this, "set", async (e) => {
			this.item.value !== !!e && await this.toggle();
		}), e(this, "open", async () => this.set(!0)), e(this, "close", async () => this.set(!1)), e(this, "toggle", async () => {
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
		}), this.props = t, this.client = n, this.hook = r, this.element = i, this.tabIndex = a, this.status = o, this.flash = s, this.coordinates = c, this.position = l, this.origin = u, this.emit = d, this.styles = f;
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
				let t = getComputedStyle(e).getPropertyValue(l).includes("--MENU--");
				t && this.position.update() && this.styles.update(), this.styles.updateType(t);
			}
		}, () => this.item.value && !this.status.isHide()), this;
	}
	toClose() {
		setTimeout(async () => {
			await this.setOpen(!1), await this.hook.closing(), this.resetClicks(), this.tabIndex.reset(), this.emit.on(this.item.value);
		}, 48), this.status.toClose();
	}
}, oe = class {
	constructor(t, n, r, i, a, o) {
		e(this, "target", void 0), e(this, "focus", void 0), this.props = t, this.persistent = n, this.classes = r, this.element = i, this.staticMode = a, this.open = o;
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
		return (e = (t = this.target) == null ? this.element.getMain() : t) == null ? document.body : e;
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
		if (this.target) {
			var e;
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
			let t = getComputedStyle(e).getPropertyValue(l);
			return t.includes("--MENU--") || t.includes("--MENU-WINDOW--");
		}
		return !1;
	}
	isOpenOnly() {
		return !!this.getTarget().closest(`.${this.classes.list.controlOpenOnly}`);
	}
}, Z = class {
	constructor(t, n, r, i, a, o, s) {
		e(this, "event", void 0), e(this, "onClick", async (e) => {
			this.props.contextmenu || await this.on(e);
		}), e(this, "onKeydown", async (e) => {
			(P(e, !1) || this.isArrowDown(e)) && (e.preventDefault(), await this.onClick(e));
		}), e(this, "onContextmenu", async (e) => {
			this.props.contextmenu && (e.preventDefault(), await this.on(e));
		}), e(this, "onTransition", () => this.open.closeForEvent()), e(this, "onGlobal", async (e) => {
			(!e || e.type === "click" && (!this.props.contextmenu || this.open.item.value) || e.type === "contextmenu" && this.props.contextmenu) && (this.open.item.value ? (this.flash.setControl(e == null ? void 0 : e.target), await this.verification.update(e == null ? void 0 : e.target)) : this.event.stop());
		}), this.props = t, this.tabIndex = n, this.status = r, this.client = i, this.flash = a, this.open = o, this.verification = s, this.event = new w("body", ["click", "contextmenu"], this.onGlobal), S([this.open.item, this.status.item], () => this.toggle());
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
}, Q = 0, se = class {
	constructor(t, n, r, i) {
		e(this, "elements", []), this.props = t, this.classes = n, this.staticMode = r, this.open = i, S(this.open.item, (e) => {
			!this.props.inert || this.props.embedded || this.staticMode.item.value || (e ? this.toHidden() : this.toShow());
		}, { immediate: !0 });
	}
	getAriaData() {
		let e = n.hidden();
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
		Q++;
		let e = this.findElements();
		if (e) {
			let t = this.getAriaData();
			this.elements = [], e.forEach((e) => {
				e.hasAttribute(t.key) || e.hasAttribute("inert") || (e.setAttribute(t.key, t.value), this.classes.isWindowOrTeleport(e) || e.setAttribute("inert", ""), this.elements.push(e));
			});
		} else this.elements = [];
	}
	toShow() {
		if (--Q > 0) return;
		let e = this.getAriaData();
		this.elements.forEach((t) => {
			t.removeAttribute(e.key), t.removeAttribute("inert");
		}), this.elements = [];
	}
}, ce = class {
	constructor(r, c, l, u, d, f, m, h, g) {
		e(this, "client", void 0), e(this, "hook", void 0), e(this, "classes", void 0), e(this, "element", void 0), e(this, "tabIndex", void 0), e(this, "status", void 0), e(this, "persistent", void 0), e(this, "flash", void 0), e(this, "coordinates", void 0), e(this, "position", void 0), e(this, "origin", void 0), e(this, "staticMode", void 0), e(this, "emit", void 0), e(this, "styles", void 0), e(this, "open", void 0), e(this, "verification", void 0), e(this, "event", void 0), e(this, "scrollbar", void 0), e(this, "image", void 0), e(this, "esc", void 0), e(this, "text", void 0), e(this, "hidden", void 0), e(this, "slotData", p(() => ({
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
				...n.control(this.classes.getControlId(), this.open.inDom.value ? this.classes.getId() : void 0, this.props.ariaHaspopup, this.open.item.value)
			}
		}))), e(this, "classesList", p(() => ({
			[this.classes.getId()]: !0,
			[`${this.className}--staticMode`]: this.staticMode.item.value,
			[`${this.className}--embedded`]: !!this.props.embedded
		}))), e(this, "stop", () => {
			this.event.stop(), this.staticMode.stop();
		}), this.props = r, this.refs = c, this.classDesign = u, this.className = d, this.components = f, this.slots = m, this.emits = h;
		let { ImageConstructor: _ = ne, ModelConstructor: y = t, ScrollbarConstructor: b = te, TabIndexConstructor: x = a, TextConstructor: C = i, WindowClassesConstructor: w = s, WindowClientConstructor: T = V, WindowCoordinatesConstructor: E = q, WindowElementConstructor: D = U, WindowEmitConstructor: O = re, WindowEscConstructor: k = o, WindowEventConstructor: A = Z, WindowFlashConstructor: j = K, WindowHiddenConstructor: M = se, WindowHookConstructor: N = H, WindowOpenConstructor: P = ae, WindowOriginConstructor: F = Y, WindowPersistentConstructor: I = G, WindowPositionConstructor: L = J, WindowStaticConstructor: R = X, WindowStatusConstructor: z = W, WindowStylesConstructor: B = ie, WindowVerificationConstructor: Q = oe } = g == null ? {} : g;
		this.hook = new N(r), this.classes = new w(d), this.element = new D(this.classes, l), this.client = new T(this.element), this.tabIndex = new x(() => this.element.getBody(), void 0, () => !!this.props.autoTabIndex), this.status = new z(this.element), this.persistent = new I(r, this.classes, this.element), this.flash = new j(r, this.classes), this.coordinates = new E(this.classes, this.element), this.position = new L(r, this.client, this.element, this.coordinates), this.origin = new F(this.client, this.element, this.position), this.staticMode = new R(r, c, this.element), this.emit = new O(this.classes, this.element, h), this.styles = new B(this.element, this.coordinates, this.position, this.origin, d), this.open = new P(r, this.client, this.hook, this.element, this.tabIndex, this.status, this.flash, this.coordinates, this.position, this.origin, this.emit, this.styles), this.verification = new Q(r, this.persistent, this.classes, this.element, this.staticMode, this.open), this.event = new A(r, this.tabIndex, this.status, this.client, this.flash, this.open, this.verification), this.scrollbar = new b(r, d, f, h), this.image = new _(r, f, h), this.esc = new k(this.open.item, () => this.open.close(), () => {
			var e;
			return !this.props.persistent && ((e = this.props.closeOnEsc) == null ? !0 : e);
		}), this.text = new C(this.props), this.hidden = new M(this.props, this.classes, this.staticMode, this.open), new y("open", this.emits, this.open.item), ee(() => {
			S([c.open], () => this.open.set(r.open), { immediate: !0 });
		}), v(this.stop);
	}
	isMenu() {
		return this.props.role === "menu" || this.props.role === "menuitemcheckbox" || this.props.role === "menuitemradio";
	}
}, le = {
	indent: 4,
	ariaHaspopup: "dialog",
	role: "dialog",
	inert: !0,
	autoTabIndex: !0,
	closeOnEsc: !0,
	axis: "y",
	imagePosition: "top",
	overscroll: !0
}, ue = class extends C {
	constructor(t, r, i, a = ce) {
		super(t, r, i), e(this, "item", void 0), e(this, "renderMain", () => g("div", this.propsMain.value, this.renderBody())), e(this, "renderBody", () => {
			var e, t;
			return g("div", {
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
		}), e(this, "renderBodyGroup", () => {
			var e;
			let t = [];
			return this.initSlot("title", t, this.item.slotData.value), t.push(this.renderBodyContext()), this.initSlot("footer", t, this.item.slotData.value), [g("div", {
				key: "group",
				class: (e = this.classes) == null ? void 0 : e.value.bodyGroup
			}, t)];
		}), e(this, "renderBodyContext", () => {
			var e;
			return this.item.scrollbar.render("div", {
				key: "bodyContext",
				class: (e = this.classes) == null ? void 0 : e.value.bodyContext,
				divider: this.props.divider,
				"data-window-body": "1"
			}, () => this.initSlot("default", void 0, this.item.slotData.value));
		}), e(this, "renderBodyImage", () => {
			if (this.props.image) {
				var e;
				return [g("div", {
					key: "image",
					class: (e = this.classes) == null ? void 0 : e.value.image
				}, this.item.image.render())];
			}
			return [];
		}), e(this, "renderBodyClose", () => {
			if (this.props.closeButton) {
				var e;
				return this.components.render("button", {
					key: "button-close",
					class: [(e = this.classes) == null ? void 0 : e.value.close, this.item.classes.list.close],
					icon: this.props.iconClose,
					...n.label(this.item.text.close.value)
				});
			}
			return [];
		}), e(this, "propsMain", p(() => {
			var e, t;
			let r = {
				key: "main",
				ref: this.element,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				style: (t = this.styles) == null ? void 0 : t.value,
				"data-window": this.item.classes.getId(),
				onTransitionend: this.item.event.onTransition
			};
			return this.item.staticMode.isStaticMod() ? r : {
				...r,
				...n.role(this.props.role),
				...n.modal(!0, this.props.ariaLabelledby, this.props.ariaDescribedby)
			};
		})), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		let e = [];
		if (this.initSlot("control", e, this.item.slotData.value), this.item.open.inDom.value) if (this.item.staticMode.item.value || this.props.embedded) e.push(this.renderMain());
		else {
			var t;
			e.push(g(f, {
				key: "teleport",
				to: "body"
			}, g("div", {
				class: (t = this.classes) == null ? void 0 : t.value.teleport,
				"data-window-teleport": this.item.classes.getId()
			}, this.renderMain())));
		}
		return e;
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
}, de = {
	...le,
	iconClose: "close",
	width: "md",
	axis: "y",
	imagePosition: "top",
	overscroll: !0,
	imageSize: "md"
}, fe = /* @__PURE__ */ h({
	name: "D1Window",
	__name: "D1Window",
	props: /* @__PURE__ */ _({
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
	}, de),
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
	setup(e, { expose: t, emit: n }) {
		let i = n, a = e, o = new ue("d1.window", a, {
			emits: i,
			classes: p(() => ({ main: {
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
			styles: p(() => {
				var e, t;
				return {
					"--d1-window-sys-width": (e = a.width) == null ? null : e,
					"--d1-window-sys-height": (t = a.height) == null ? null : t
				};
			}),
			components: {
				scrollbar: u,
				button: d,
				image: r
			},
			compMod: { button: {
				secondary: !0,
				roundedFull: !0,
				size: "xs",
				palette: "neutral"
			} }
		}), s = o.render();
		return t(o.expose()), (e, t) => (y(), m(x(s)));
	}
});
//#endregion
export { z as n, fe as t };

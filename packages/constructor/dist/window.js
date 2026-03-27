import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-BTtSLqQS.js";
import { t as n } from "./TextInclude-BIa1AeDQ.js";
import { t as r } from "./ModelInclude-ZrPu5V5T.js";
import { t as i } from "./TabIndexInclude-CFzKx8fi.js";
import { t as a } from "./WindowEsc-CoURql2m.js";
import { i as o, n as s, r as c, t as l } from "./WindowClassesInclude-C8R8pgeo.js";
import { t as u } from "./WindowInclude-qJz_Dx7T.js";
import { Teleport as d, computed as f, h as p, onMounted as m, onUnmounted as h, ref as g, watch as _ } from "vue";
import { DesignConstructorAbstract as v, EventItem as y, executePromise as b, frame as x, getBind as S, getElement as C, getMouseClientX as w, getMouseClientY as T, getRef as E, isDomRuntime as D, isEnter as O, setRef as k, toBind as A } from "@dxtmisha/functional";
//#region src/constructors/Scrollbar/ScrollbarInclude.ts
var j = class {
	constructor(e, t, n, r) {
		this.props = e, this.className = t, this.components = n, this.emits = r;
	}
	render(e, t, n) {
		if (this.components) {
			var r;
			let i = this.components.renderOne("scrollbar", A({
				tag: e,
				class: `${this.className}__scrollbar`,
				...t == null ? {} : t,
				...this.getScrollbarEvents()
			}, (r = this.props.scrollbarAttrs) == null ? {} : r), n);
			if (i) return [i];
		}
		return [p(e, t, n)];
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
}, M = class {
	constructor(e, n, r, i) {
		t(this, "isImage", f(() => !!this.props.image)), t(this, "bind", f(() => S(this.props.image, E(this.extra), "value"))), this.props = e, this.components = n, this.emits = r, this.extra = i;
	}
	render() {
		return this.components && this.isImage.value ? this.components.render("image", this.bind.value) : [];
	}
	onLoad(e) {
		var t;
		(t = this.emits) == null || t.call(this, "load", e);
	}
}, N = -1, ee = class {
	constructor(e) {
		t(this, "x", N), t(this, "y", N), this.element = e;
	}
	is() {
		return this.x !== N && this.y !== N;
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
		return this.x = N, this.y = N, this;
	}
	update() {
		if (this.is() && this.isZero()) {
			let e = this.element.getControlRect();
			e && this.set(e.left + e.width / 2, e.top + e.height / 2);
		}
		return this;
	}
}, P = class {
	constructor(e) {
		this.props = e;
	}
	async preparation() {
		this.props.preparation && await b(this.props.preparation);
	}
	async before(e) {
		return e ? await this.beforeOpening() : await this.beforeClosing();
	}
	async beforeOpening() {
		return this.props.beforeOpening ? await b(this.props.beforeOpening) : !0;
	}
	async beforeClosing() {
		return this.props.beforeClosing ? await b(this.props.beforeClosing) : !0;
	}
	async after(e) {
		return e ? await this.opening() : await this.closing();
	}
	async opening() {
		return this.props.opening ? await b(this.props.opening) : !1;
	}
	async closing() {
		return this.props.closing ? await b(this.props.closing) : !1;
	}
}, F = class {
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
}, I = class {
	constructor(e) {
		t(this, "item", g(c.close)), this.element = e;
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
}, L = class {
	constructor(e, n, r) {
		t(this, "item", g(!1)), t(this, "onTransitionend", () => {
			this.removeEvent(), this.disabled();
		}), this.props = e, this.classes = n, this.element = r, _(this.item, (e) => {
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
}, R = class {
	constructor(e, n) {
		t(this, "control", !1), this.props = e, this.classes = n;
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
}, z = class {
	constructor(e, n) {
		t(this, "top", 0), t(this, "right", 0), t(this, "bottom", 0), t(this, "left", 0), t(this, "width", 0), t(this, "height", 0), t(this, "innerWidth", 0), t(this, "innerHeight", 0), t(this, "controlWidth", 0), t(this, "controlHeight", 0), t(this, "padding", 0), t(this, "location", ""), this.classes = e, this.element = n;
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
}, B = class {
	constructor(e, n, r, i) {
		t(this, "x", 0), t(this, "y", 0), this.props = e, this.client = n, this.element = r, this.coordinates = i;
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
			let i = (t = C(this.props.overElement)) == null ? void 0 : t.getBoundingClientRect(), a = (n = this.element.getBody()) == null ? void 0 : n.getBoundingClientRect(), o = e == null ? void 0 : e.getBoundingClientRect(), s = (r = this.element.getControl()) == null ? void 0 : r.getBoundingClientRect();
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
		if (D()) {
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
			let e = (r = C(this.props.overElement)) == null ? void 0 : r.getBoundingClientRect(), a = (i = this.element.getBody()) == null ? void 0 : i.getBoundingClientRect();
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
}, V = class {
	constructor(e, n, r) {
		t(this, "x", null), t(this, "y", null), this.client = e, this.element = n, this.position = r;
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
}, H = class {
	constructor(e, n, r) {
		t(this, "event", void 0), t(this, "item", g(!1)), t(this, "listener", () => {
			k(this.item, this.isStatic());
		}), t(this, "make", () => {
			this.isStaticMod() ? (this.start(), requestAnimationFrame(this.listener)) : this.stop();
		}), this.props = e, this.element = r, _([n.staticMode], this.make, { immediate: !0 });
	}
	isStaticMod() {
		return !!this.props.staticMode;
	}
	start() {
		this.event || (this.event = new y(window, ["resize"], this.listener)), this.event.start();
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0);
	}
	isStatic() {
		let e = this.element.getMain();
		return !!(e && getComputedStyle(e).getPropertyValue("--sys-type-body").includes("--STATIC--"));
	}
}, U = class {
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
}, W = class {
	constructor(e, t, n, r, i) {
		this.element = e, this.coordinates = t, this.position = n, this.origin = r, this.className = i, _(this.element.element, () => this.update());
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
}, G = class {
	constructor(e, n, r, i, a, o, s, c, l, u, d, p) {
		t(this, "item", g(!1)), t(this, "first", g(!1)), t(this, "clicks", 0), t(this, "inDom", f(() => this.item.value || this.props.staticMode || !!this.props.inDom && this.first.value)), t(this, "set", async (e) => {
			this.item.value !== !!e && await this.toggle();
		}), t(this, "open", async () => this.set(!0)), t(this, "close", async () => this.set(!1)), t(this, "toggle", async () => {
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
		}), this.props = e, this.client = n, this.hook = r, this.element = i, this.tabIndex = a, this.status = o, this.flash = s, this.coordinates = c, this.position = l, this.origin = u, this.emit = d, this.styles = p;
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
		return x(() => {
			let e = this.element.getMain();
			if (e) {
				let t = getComputedStyle(e).getPropertyValue(o).includes("--MENU--");
				t && this.position.update() && this.styles.update(), this.styles.updateType(t);
			}
		}, () => this.item.value && !this.status.isHide()), this;
	}
	toClose() {
		setTimeout(async () => {
			await this.setOpen(!1), await this.hook.closing(), this.resetClicks(), this.tabIndex.reset(), this.emit.on(this.item.value);
		}, 48), this.status.toClose();
	}
}, K = class {
	constructor(e, n, r, i, a, o) {
		t(this, "target", void 0), t(this, "focus", void 0), this.props = e, this.persistent = n, this.classes = r, this.element = i, this.staticMode = a, this.open = o;
	}
	async update(e) {
		if (!this.open.isClicks() && (this.target = e, this.focus = this.getFocus(), D() && this.isTargetInBody() && !this.staticMode.item.value)) if (this.open.pressed(), this.open.item.value) {
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
			let t = getComputedStyle(e).getPropertyValue(o);
			return t.includes("--MENU--") || t.includes("--MENU-WINDOW--");
		}
		return !1;
	}
	isOpenOnly() {
		return !!this.getTarget().closest(`.${this.classes.list.controlOpenOnly}`);
	}
}, q = class {
	constructor(e, n, r, i, a, o, s) {
		t(this, "event", void 0), t(this, "onClick", async (e) => {
			this.props.contextmenu || await this.on(e);
		}), t(this, "onKeydown", async (e) => {
			(O(e, !1) || this.isArrowDown(e)) && (e.preventDefault(), await this.onClick(e));
		}), t(this, "onContextmenu", async (e) => {
			this.props.contextmenu && (e.preventDefault(), await this.on(e));
		}), t(this, "onTransition", () => this.open.closeForEvent()), t(this, "onGlobal", async (e) => {
			(!e || e.type === "click" && (!this.props.contextmenu || this.open.item.value) || e.type === "contextmenu" && this.props.contextmenu) && (this.open.item.value ? (this.flash.setControl(e == null ? void 0 : e.target), await this.verification.update(e == null ? void 0 : e.target)) : this.event.stop());
		}), this.props = e, this.tabIndex = n, this.status = r, this.client = i, this.flash = a, this.open = o, this.verification = s, this.event = new y("body", ["click", "contextmenu"], this.onGlobal), _([this.open.item, this.status.item], () => this.toggle());
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
		this.tabIndex.updateOldElement(), this.client.set(w(e), T(e)), await this.verification.update(e.target);
	}
}, J = 0, Y = class {
	constructor(e, n, r, i) {
		t(this, "elements", []), this.props = e, this.classes = n, this.staticMode = r, this.open = i, _(this.open.item, (e) => {
			!this.props.inert || this.props.embedded || this.staticMode.item.value || (e ? this.toHidden() : this.toShow());
		}, { immediate: !0 });
	}
	getAriaData() {
		let t = e.hidden();
		return {
			key: Object.keys(t)[0],
			value: Object.values(t)[0]
		};
	}
	findElements() {
		if (D()) {
			let e = this.classes.getId();
			return document.querySelectorAll(`body > *:not([data-window-teleport="${e}"]):not(.${e}):not(script):not(style)`);
		}
	}
	toHidden() {
		J++;
		let e = this.findElements();
		if (e) {
			let t = this.getAriaData();
			this.elements = [], e.forEach((e) => {
				e.hasAttribute(t.key) || e.hasAttribute("inert") || (e.setAttribute(t.key, t.value), this.classes.isWindowOrTeleport(e) || e.setAttribute("inert", ""), this.elements.push(e));
			});
		} else this.elements = [];
	}
	toShow() {
		if (--J > 0) return;
		let e = this.getAriaData();
		this.elements.forEach((t) => {
			t.removeAttribute(e.key), t.removeAttribute("inert");
		}), this.elements = [];
	}
}, X = class {
	constructor(o, c, l, u, d, p, g, v, y) {
		t(this, "client", void 0), t(this, "hook", void 0), t(this, "classes", void 0), t(this, "element", void 0), t(this, "tabIndex", void 0), t(this, "status", void 0), t(this, "persistent", void 0), t(this, "flash", void 0), t(this, "coordinates", void 0), t(this, "position", void 0), t(this, "origin", void 0), t(this, "staticMode", void 0), t(this, "emit", void 0), t(this, "styles", void 0), t(this, "open", void 0), t(this, "verification", void 0), t(this, "event", void 0), t(this, "scrollbar", void 0), t(this, "image", void 0), t(this, "esc", void 0), t(this, "text", void 0), t(this, "hidden", void 0), t(this, "slotData", f(() => ({
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
				...e.control(this.classes.getControlId(), this.open.inDom.value ? this.classes.getId() : void 0, this.props.ariaHaspopup, this.open.item.value)
			}
		}))), t(this, "classesList", f(() => ({
			[this.classes.getId()]: !0,
			[`${this.className}--staticMode`]: this.staticMode.item.value,
			[`${this.className}--embedded`]: !!this.props.embedded
		}))), t(this, "stop", () => {
			this.event.stop(), this.staticMode.stop();
		}), this.props = o, this.refs = c, this.classDesign = u, this.className = d, this.components = p, this.slots = g, this.emits = v;
		let { ImageConstructor: b = M, ModelConstructor: x = r, ScrollbarConstructor: S = j, TabIndexConstructor: C = i, TextConstructor: w = n, WindowClassesConstructor: T = s, WindowClientConstructor: E = ee, WindowCoordinatesConstructor: D = z, WindowElementConstructor: O = F, WindowEmitConstructor: k = U, WindowEscConstructor: A = a, WindowEventConstructor: N = q, WindowFlashConstructor: J = R, WindowHiddenConstructor: X = Y, WindowHookConstructor: Z = P, WindowOpenConstructor: Q = G, WindowOriginConstructor: te = V, WindowPersistentConstructor: $ = L, WindowPositionConstructor: ne = B, WindowStaticConstructor: re = H, WindowStatusConstructor: ie = I, WindowStylesConstructor: ae = W, WindowVerificationConstructor: oe = K } = y == null ? {} : y;
		this.hook = new Z(o), this.classes = new T(d), this.element = new O(this.classes, l), this.client = new E(this.element), this.tabIndex = new C(() => this.element.getBody(), void 0, () => !!this.props.autoTabIndex), this.status = new ie(this.element), this.persistent = new $(o, this.classes, this.element), this.flash = new J(o, this.classes), this.coordinates = new D(this.classes, this.element), this.position = new ne(o, this.client, this.element, this.coordinates), this.origin = new te(this.client, this.element, this.position), this.staticMode = new re(o, c, this.element), this.emit = new k(this.classes, this.element, v), this.styles = new ae(this.element, this.coordinates, this.position, this.origin, d), this.open = new Q(o, this.client, this.hook, this.element, this.tabIndex, this.status, this.flash, this.coordinates, this.position, this.origin, this.emit, this.styles), this.verification = new oe(o, this.persistent, this.classes, this.element, this.staticMode, this.open), this.event = new N(o, this.tabIndex, this.status, this.client, this.flash, this.open, this.verification), this.scrollbar = new S(o, d, p, v), this.image = new b(o, p, v), this.esc = new A(this.open.item, () => this.open.close(), () => {
			var e;
			return !this.props.persistent && ((e = this.props.closeOnEsc) == null ? !0 : e);
		}), this.text = new w(this.props), this.hidden = new X(this.props, this.classes, this.staticMode, this.open), new x("open", this.emits, this.open.item), m(() => {
			_([c.open], () => this.open.set(o.open), { immediate: !0 });
		}), h(this.stop);
	}
	isMenu() {
		return this.props.role === "menu" || this.props.role === "menuitemcheckbox" || this.props.role === "menuitemradio";
	}
}, Z = {
	indent: 4,
	ariaHaspopup: "dialog",
	role: "dialog",
	inert: !0,
	autoTabIndex: !0,
	closeOnEsc: !0,
	axis: "y",
	imagePosition: "top",
	overscroll: !0
}, Q = class extends v {
	constructor(n, r, i, a = X) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderMain", () => p("div", this.propsMain.value, this.renderBody())), t(this, "renderBody", () => {
			var e, t;
			return p("div", {
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
		}), t(this, "renderBodyGroup", () => {
			var e;
			let t = [];
			return this.initSlot("title", t, this.item.slotData.value), t.push(this.renderBodyContext()), this.initSlot("footer", t, this.item.slotData.value), [p("div", {
				key: "group",
				class: (e = this.classes) == null ? void 0 : e.value.bodyGroup
			}, t)];
		}), t(this, "renderBodyContext", () => {
			var e;
			return this.item.scrollbar.render("div", {
				key: "bodyContext",
				class: (e = this.classes) == null ? void 0 : e.value.bodyContext,
				divider: this.props.divider,
				"data-window-body": "1"
			}, () => this.initSlot("default", void 0, this.item.slotData.value));
		}), t(this, "renderBodyImage", () => {
			if (this.props.image) {
				var e;
				return [p("div", {
					key: "image",
					class: (e = this.classes) == null ? void 0 : e.value.image
				}, this.item.image.render())];
			}
			return [];
		}), t(this, "renderBodyClose", () => {
			if (this.props.closeButton) {
				var t;
				return this.components.render("button", {
					key: "button-close",
					class: [(t = this.classes) == null ? void 0 : t.value.close, this.item.classes.list.close],
					icon: this.props.iconClose,
					...e.label(this.item.text.close.value)
				});
			}
			return [];
		}), t(this, "propsMain", f(() => {
			var t, n;
			let r = {
				key: "main",
				ref: this.element,
				class: (t = this.classes) == null ? void 0 : t.value.main,
				style: (n = this.styles) == null ? void 0 : n.value,
				"data-window": this.item.classes.getId(),
				onTransitionend: this.item.event.onTransition
			};
			return this.item.staticMode.isStaticMod() ? r : {
				...r,
				...e.role(this.props.role),
				...e.modal(!0, this.props.ariaLabelledby, this.props.ariaDescribedby)
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
			e.push(p(d, {
				key: "teleport",
				to: "body"
			}, p("div", {
				class: (t = this.classes) == null ? void 0 : t.value.teleport,
				"data-window-teleport": this.item.classes.getId()
			}, this.renderMain())));
		}
		return e;
	}
};
//#endregion
export { X as Window, l as WindowClassesInclude, Q as WindowDesign, u as WindowInclude, Z as defaultsWindow };

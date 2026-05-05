import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-3CuEayIP.js";
import { t as n } from "./TextInclude-Cv60lDyJ.js";
import { t as r } from "./ModelInclude-COXpwWf_.js";
import { t as i } from "./TabIndexInclude-d8ckyUlj.js";
import { t as a } from "./WindowEsc-C-ecxnz7.js";
import { t as o } from "./ScrollbarInclude-zvQJJQf1.js";
import { t as s } from "./ImageInclude-CwdnumOj.js";
import { a as c, i as l, n as u, r as d, t as f } from "./WindowClassesInclude-BI6aof2F.js";
import { t as p } from "./WindowInclude-DnFF4GQL.js";
import { Teleport as m, computed as h, h as g, onMounted as _, onUnmounted as v, ref as y, watch as b } from "vue";
import { DesignConstructorAbstract as x, EventItem as S, executePromise as C, frame as w, getElement as T, getMouseClientX as E, getMouseClientY as D, isDomRuntime as O, isEnter as k, setRef as A } from "@dxtmisha/functional";
//#region src/constructors/Window/WindowClient.ts
var j = -1, M = class {
	constructor(e) {
		t(this, "x", j), t(this, "y", j), this.element = e;
	}
	is() {
		return this.x !== j && this.y !== j;
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
		return this.x = j, this.y = j, this;
	}
	update() {
		if (this.is() && this.isZero()) {
			let e = this.element.getControlRect();
			e && this.set(e.left + e.width / 2, e.top + e.height / 2);
		}
		return this;
	}
}, N = class {
	constructor(e) {
		this.props = e;
	}
	async preparation() {
		this.props.preparation && await C(this.props.preparation);
	}
	async before(e) {
		return e ? await this.beforeOpening() : await this.beforeClosing();
	}
	async beforeOpening() {
		return this.props.beforeOpening ? await C(this.props.beforeOpening) : !0;
	}
	async beforeClosing() {
		return this.props.beforeClosing ? await C(this.props.beforeClosing) : !0;
	}
	async after(e) {
		return e ? await this.opening() : await this.closing();
	}
	async opening() {
		return this.props.opening ? await C(this.props.opening) : !1;
	}
	async closing() {
		return this.props.closing ? await C(this.props.closing) : !1;
	}
}, P = class {
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
}, F = class {
	constructor(e) {
		t(this, "item", y(l.close)), this.element = e;
	}
	isHide() {
		return this.item.value === l.hide;
	}
	isOpen() {
		return this.item.value === l.open || this.item.value === l.flash;
	}
	set(e) {
		return this.item.value = e, this.update(), this;
	}
	toDisplay() {
		return this.set(l.display), this;
	}
	toPreparation() {
		return this.set(l.preparation), this;
	}
	toFlash() {
		return this.set(l.flash), this;
	}
	toOpen() {
		return this.set(l.open), this;
	}
	toHide() {
		return this.set(l.hide), this;
	}
	toClose() {
		return this.set(l.close), this;
	}
	update() {
		let e = this.element.getMain();
		if (e) {
			let t = e.parentElement;
			e.dataset.status = this.item.value, t && t.dataset.windowTeleport && (t.dataset.status = this.item.value);
		}
	}
}, I = class {
	constructor(e, n, r) {
		t(this, "item", y(!1)), t(this, "onTransitionend", () => {
			this.removeEvent(), this.disabled();
		}), this.props = e, this.classes = n, this.element = r, b(this.item, (e) => {
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
}, L = class {
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
		return this.is() || !!document.querySelector(`.${this.classes.getClassStatus(l.hide)}`);
	}
	setControl(e) {
		var t;
		return this.control = (e == null || (t = e.closest(`.${this.classes.list.control}`)) == null ? void 0 : t.dataset.window) === this.classes.getId(), this;
	}
}, R = class {
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
}, z = class {
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
			let i = (t = T(this.props.overElement)) == null ? void 0 : t.getBoundingClientRect(), a = (n = this.element.getBody()) == null ? void 0 : n.getBoundingClientRect(), o = e == null ? void 0 : e.getBoundingClientRect(), s = (r = this.element.getControl()) == null ? void 0 : r.getBoundingClientRect();
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
		if (O()) {
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
			let e = (r = T(this.props.overElement)) == null ? void 0 : r.getBoundingClientRect(), a = (i = this.element.getBody()) == null ? void 0 : i.getBoundingClientRect();
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
}, B = class {
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
}, V = class {
	constructor(e, n, r) {
		t(this, "event", void 0), t(this, "item", y(!1)), t(this, "listener", () => {
			A(this.item, this.isStatic());
		}), t(this, "make", () => {
			this.isStaticMod() ? (this.start(), requestAnimationFrame(this.listener)) : this.stop();
		}), this.props = e, this.element = r, b([n.staticMode], this.make, { immediate: !0 });
	}
	isStaticMod() {
		return !!this.props.staticMode;
	}
	start() {
		this.event || (this.event = new S(window, ["resize"], this.listener)), this.event.start();
	}
	stop() {
		this.event && (this.event.stop(), this.event = void 0);
	}
	isStatic() {
		let e = this.element.getMain();
		return !!(e && getComputedStyle(e).getPropertyValue("--sys-type-body").includes("--STATIC--"));
	}
}, H = class {
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
}, U = class {
	constructor(e, t, n, r, i) {
		this.element = e, this.coordinates = t, this.position = n, this.origin = r, this.className = i, b(this.element.element, () => this.update());
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
}, W = class {
	constructor(e, n, r, i, a, o, s, c, l, u, d, f) {
		t(this, "item", y(!1)), t(this, "first", y(!1)), t(this, "clicks", 0), t(this, "inDom", h(() => this.item.value || this.props.staticMode || !!this.props.inDom && this.first.value)), t(this, "set", async (e) => {
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
		}), this.props = e, this.client = n, this.hook = r, this.element = i, this.tabIndex = a, this.status = o, this.flash = s, this.coordinates = c, this.position = l, this.origin = u, this.emit = d, this.styles = f;
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
		return w(() => {
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
}, G = class {
	constructor(e, n, r, i, a, o) {
		t(this, "target", void 0), t(this, "focus", void 0), this.props = e, this.persistent = n, this.classes = r, this.element = i, this.staticMode = a, this.open = o;
	}
	async update(e) {
		if (!this.open.isClicks() && (this.target = e, this.focus = this.getFocus(), O() && this.isTargetInBody() && !this.staticMode.item.value)) if (this.open.pressed(), this.open.item.value) {
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
			let t = getComputedStyle(e).getPropertyValue(c);
			return t.includes("--MENU--") || t.includes("--MENU-WINDOW--");
		}
		return !1;
	}
	isOpenOnly() {
		return !!this.getTarget().closest(`.${this.classes.list.controlOpenOnly}`);
	}
}, K = class {
	constructor(e, n, r, i, a, o, s) {
		t(this, "event", void 0), t(this, "onClick", async (e) => {
			this.props.contextmenu || await this.on(e);
		}), t(this, "onKeydown", async (e) => {
			(k(e, !1) || this.isArrowDown(e)) && (e.preventDefault(), await this.onClick(e));
		}), t(this, "onContextmenu", async (e) => {
			this.props.contextmenu && (e.preventDefault(), await this.on(e));
		}), t(this, "onTransition", () => this.open.closeForEvent()), t(this, "onGlobal", async (e) => {
			(!e || e.type === "click" && (!this.props.contextmenu || this.open.item.value) || e.type === "contextmenu" && this.props.contextmenu) && (this.open.item.value ? (this.flash.setControl(e == null ? void 0 : e.target), await this.verification.update(e == null ? void 0 : e.target)) : this.event.stop());
		}), this.props = e, this.tabIndex = n, this.status = r, this.client = i, this.flash = a, this.open = o, this.verification = s, this.event = new S("body", ["click", "contextmenu"], this.onGlobal), b([this.open.item, this.status.item], () => this.toggle());
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
		this.tabIndex.updateOldElement(), this.client.set(E(e), D(e)), await this.verification.update(e.target);
	}
}, q = 0, J = class {
	constructor(e, n, r, i) {
		t(this, "elements", []), this.props = e, this.classes = n, this.staticMode = r, this.open = i, b(this.open.item, (e) => {
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
		if (O()) {
			let e = this.classes.getId();
			return document.querySelectorAll(`body > *:not([data-window-teleport="${e}"]):not(.${e}):not(script):not(style)`);
		}
	}
	toHidden() {
		q++;
		let e = this.findElements();
		if (e) {
			let t = this.getAriaData();
			this.elements = [], e.forEach((e) => {
				e.hasAttribute(t.key) || e.hasAttribute("inert") || (e.setAttribute(t.key, t.value), this.classes.isWindowOrTeleport(e) || e.setAttribute("inert", ""), this.elements.push(e));
			});
		} else this.elements = [];
	}
	toShow() {
		if (--q > 0) return;
		let e = this.getAriaData();
		this.elements.forEach((t) => {
			t.removeAttribute(e.key), t.removeAttribute("inert");
		}), this.elements = [];
	}
}, Y = class {
	constructor(c, l, d, f, p, m, g, y, x) {
		t(this, "client", void 0), t(this, "hook", void 0), t(this, "classes", void 0), t(this, "element", void 0), t(this, "tabIndex", void 0), t(this, "status", void 0), t(this, "persistent", void 0), t(this, "flash", void 0), t(this, "coordinates", void 0), t(this, "position", void 0), t(this, "origin", void 0), t(this, "staticMode", void 0), t(this, "emit", void 0), t(this, "styles", void 0), t(this, "open", void 0), t(this, "verification", void 0), t(this, "event", void 0), t(this, "scrollbar", void 0), t(this, "image", void 0), t(this, "esc", void 0), t(this, "text", void 0), t(this, "hidden", void 0), t(this, "slotData", h(() => ({
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
		}))), t(this, "classesList", h(() => ({
			[this.classes.getId()]: !0,
			[`${this.className}--staticMode`]: this.staticMode.item.value,
			[`${this.className}--embedded`]: !!this.props.embedded
		}))), t(this, "stop", () => {
			this.event.stop(), this.staticMode.stop();
		}), this.props = c, this.refs = l, this.classDesign = f, this.className = p, this.components = m, this.slots = g, this.emits = y;
		let { ImageConstructor: S = s, ModelConstructor: C = r, ScrollbarConstructor: w = o, TabIndexConstructor: T = i, TextConstructor: E = n, WindowClassesConstructor: D = u, WindowClientConstructor: O = M, WindowCoordinatesConstructor: k = R, WindowElementConstructor: A = P, WindowEmitConstructor: j = H, WindowEscConstructor: q = a, WindowEventConstructor: Y = K, WindowFlashConstructor: X = L, WindowHiddenConstructor: Z = J, WindowHookConstructor: Q = N, WindowOpenConstructor: $ = W, WindowOriginConstructor: ee = B, WindowPersistentConstructor: te = I, WindowPositionConstructor: ne = z, WindowStaticConstructor: re = V, WindowStatusConstructor: ie = F, WindowStylesConstructor: ae = U, WindowVerificationConstructor: oe = G } = x == null ? {} : x;
		this.hook = new Q(c), this.classes = new D(p), this.element = new A(this.classes, d), this.client = new O(this.element), this.tabIndex = new T(() => this.element.getBody(), void 0, () => !!this.props.autoTabIndex), this.status = new ie(this.element), this.persistent = new te(c, this.classes, this.element), this.flash = new X(c, this.classes), this.coordinates = new k(this.classes, this.element), this.position = new ne(c, this.client, this.element, this.coordinates), this.origin = new ee(this.client, this.element, this.position), this.staticMode = new re(c, l, this.element), this.emit = new j(this.classes, this.element, y), this.styles = new ae(this.element, this.coordinates, this.position, this.origin, p), this.open = new $(c, this.client, this.hook, this.element, this.tabIndex, this.status, this.flash, this.coordinates, this.position, this.origin, this.emit, this.styles), this.verification = new oe(c, this.persistent, this.classes, this.element, this.staticMode, this.open), this.event = new Y(c, this.tabIndex, this.status, this.client, this.flash, this.open, this.verification), this.scrollbar = new w(c, p, m, y), this.image = new S(c, m, y), this.esc = new q(this.open.item, () => this.open.close(), () => {
			var e;
			return !this.props.persistent && ((e = this.props.closeOnEsc) == null ? !0 : e);
		}), this.text = new E(this.props), this.hidden = new Z(this.props, this.classes, this.staticMode, this.open), new C("open", this.emits, this.open.item), _(() => {
			b([l.open], () => this.open.set(c.open), { immediate: !0 });
		}), v(this.stop);
	}
	isMenu() {
		return this.props.role === "menu" || this.props.role === "menuitemcheckbox" || this.props.role === "menuitemradio";
	}
}, X = {
	indent: 4,
	ariaHaspopup: "dialog",
	role: "dialog",
	inert: !0,
	autoTabIndex: !0,
	closeOnEsc: !0,
	axis: "y",
	imagePosition: "top",
	overscroll: !0
}, Z = class extends x {
	constructor(n, r, i, a = Y) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderMain", () => g("div", this.propsMain.value, this.renderBody())), t(this, "renderBody", () => {
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
		}), t(this, "renderBodyGroup", () => {
			var e;
			let t = [];
			return this.initSlot("title", t, this.item.slotData.value), t.push(this.renderBodyContext()), this.initSlot("footer", t, this.item.slotData.value), [g("div", {
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
				return [g("div", {
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
		}), t(this, "propsMain", h(() => {
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
			e.push(g(m, {
				key: "teleport",
				to: "body"
			}, g("div", {
				class: (t = this.classes) == null ? void 0 : t.value.teleport,
				"data-window-teleport": this.item.classes.getId()
			}, this.renderMain())));
		}
		return e;
	}
};
//#endregion
export { Y as Window, u as WindowClassesData, f as WindowClassesInclude, M as WindowClient, R as WindowCoordinates, Z as WindowDesign, P as WindowElement, H as WindowEmit, a as WindowEsc, K as WindowEvent, L as WindowFlash, J as WindowHidden, N as WindowHook, p as WindowInclude, W as WindowOpen, B as WindowOrigin, I as WindowPersistent, z as WindowPosition, V as WindowStatic, F as WindowStatus, d as WindowStatusControlItem, l as WindowStatusItem, U as WindowStyles, G as WindowVerification, c as __WINDOW_TYPE_BODY_NAME, X as defaultsWindow };

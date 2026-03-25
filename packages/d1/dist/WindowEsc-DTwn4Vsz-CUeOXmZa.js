import { onUnmounted as e, watch as t } from "vue";
import { EventItem as n, executeFunction as r, getRef as i, isDomRuntime as a, isFunction as o } from "@dxtmisha/functional";
//#region ../constructor/dist/TabIndexInclude-xcSFV8yP.js
var s = Object.defineProperty, c = (e, t, n) => t in e ? s(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, l = (e, t, n) => c(e, typeof t == "symbol" ? t : t + "", n), u = class {
	constructor(t, n = () => !0, r = () => !0, i = () => !0) {
		l(this, "oldElement"), l(this, "event"), l(this, "listenEvent", (e) => {
			var t, n;
			if (!this.isTab(e)) return;
			let r = document.activeElement;
			r && (this.isShift(e) ? r === this.findFirstElement() && ((t = this.findLastElement()) == null || t.focus(), e.preventDefault()) : r === this.findLastElement() && ((n = this.findFirstElement()) == null || n.focus(), e.preventDefault()));
		}), this.element = t, this.active = n, this.activeOpen = r, this.activeClose = i, e(() => {
			this.stopEvent(), this.event = void 0;
		});
	}
	goTo() {
		return this.isElement() && this.active() && this.activeOpen() && a() && (this.toFocus(), this.startEvent()), this;
	}
	reset() {
		return this.active() && this.activeClose() && (this.oldElement && "focus" in this.oldElement && this.oldElement.focus(), this.stopEvent()), this;
	}
	toggle(e) {
		return e ? this.goTo() : this.reset(), this;
	}
	updateOldElement() {
		var e, t;
		if (a()) {
			let n = (t = (e = document.activeElement) == null ? void 0 : e.shadowRoot) == null ? void 0 : t.activeElement;
			this.oldElement = n == null ? document.activeElement : n;
		}
	}
	isElement() {
		return this.getElement() !== void 0;
	}
	isTab(e) {
		return e.key === "Tab" || e.code === "Tab" || e.keyCode === 9;
	}
	isShift(e) {
		return e.shiftKey;
	}
	getElement() {
		return o(this.element) ? this.element() : i(this.element);
	}
	findFirstElement() {
		var e;
		let t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
		if (t) {
			for (let e of t) if ("tabIndex" in e && e.tabIndex >= 0) return e;
		}
	}
	findLastElement() {
		var e;
		let t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
		if (t) for (let e = t.length - 1; e >= 0; e--) {
			let n = t[e];
			if (n && "tabIndex" in n && n.tabIndex >= 0) return n;
		}
	}
	toFocus() {
		let e = this.findFirstElement();
		if (e) return e.focus(), this;
		let t = this.getElement();
		return t && (t.setAttribute("tabindex", "-1"), t.focus(), requestAnimationFrame(() => {
			t.removeAttribute("tabindex");
		})), this;
	}
	startEvent() {
		if (this.event) {
			this.event.start();
			return;
		}
		this.event = new n(document.body, "keydown", this.listenEvent).start();
	}
	stopEvent() {
		this.event && this.event.stop();
	}
}, d = Object.defineProperty, f = (e, t, n) => t in e ? d(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, p = (e, t, n) => f(e, typeof t == "symbol" ? t : t + "", n), m = class {
	constructor(e, n, a = !0) {
		p(this, "event"), p(this, "listener", (e) => {
			this.isEsc(e) && (e.preventDefault(), e.stopPropagation(), this.on ? this.on() : this.open.value = !1, this.stop());
		}), this.open = e, this.on = n, this.active = a, t(e, (e) => {
			r(i(this.active)) && (e ? this.start() : this.stop());
		});
	}
	start() {
		var e;
		return this.make(), (e = this.event) == null || e.start(), this;
	}
	stop() {
		return this.event && (this.event.stop(), this.event = void 0), this;
	}
	isEsc(e) {
		return e.key === "Escape" || e.key === "Esc" || e.code === "Escape" || e.code === "Esc" || e.keyCode === 27;
	}
	make() {
		a() && !this.event && (this.event = new n(document.body, "keydown", this.listener));
	}
};
//#endregion
export { u as n, m as t };

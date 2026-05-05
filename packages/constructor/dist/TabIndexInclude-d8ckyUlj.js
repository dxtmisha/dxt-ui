import { t as e } from "./defineProperty-3CuEayIP.js";
import { onUnmounted as t } from "vue";
import { EventItem as n, getRef as r, isDomRuntime as i, isElementVisible as a, isFunction as o } from "@dxtmisha/functional";
//#region src/classes/TabIndexInclude.ts
var s = class {
	constructor(n, r = () => !0, i = () => !0, a = () => !0) {
		e(this, "oldElement", void 0), e(this, "event", void 0), e(this, "listenEvent", (e) => {
			if (!this.isTab(e)) return;
			let t = document.activeElement;
			if (console.log("focusActive", t, this.findLastElement()), t) {
				if (this.isShift(e)) {
					if (t === this.findFirstElement()) {
						var n;
						(n = this.findLastElement()) == null || n.focus(), e.preventDefault();
					}
				} else if (t === this.findLastElement()) {
					var r;
					(r = this.findFirstElement()) == null || r.focus(), e.preventDefault();
				}
			}
		}), this.element = n, this.active = r, this.activeOpen = i, this.activeClose = a, t(() => {
			this.stopEvent(), this.event = void 0;
		});
	}
	goTo() {
		return this.isElement() && this.active() && this.activeOpen() && i() && (this.toFocus(), this.startEvent()), this;
	}
	reset() {
		return this.active() && this.activeClose() && (this.oldElement && "focus" in this.oldElement && this.oldElement.focus(), this.stopEvent()), this;
	}
	toggle(e) {
		return e ? this.goTo() : this.reset(), this;
	}
	updateOldElement() {
		if (i()) {
			var e;
			let t = (e = document.activeElement) == null || (e = e.shadowRoot) == null ? void 0 : e.activeElement;
			this.oldElement = t == null ? document.activeElement : t;
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
		return o(this.element) ? this.element() : r(this.element);
	}
	findFirstElement() {
		var e;
		let t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
		if (t) {
			for (let e of t) if ("tabIndex" in e && e.tabIndex >= 0 && a(e)) return e;
		}
	}
	findLastElement() {
		var e;
		let t = (e = this.getElement()) == null ? void 0 : e.querySelectorAll("*");
		if (t) for (let e = t.length - 1; e >= 0; e--) {
			let n = t[e];
			if (n && "tabIndex" in n && n.tabIndex >= 0 && a(n)) return n;
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
};
//#endregion
export { s as t };

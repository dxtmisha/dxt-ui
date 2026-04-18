import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { watch as t } from "vue";
import { EventItem as n, executeFunction as r, getRef as i, isDomRuntime as a } from "@dxtmisha/functional";
//#region src/constructors/Window/WindowEsc.ts
var o = class {
	constructor(n, a, o = !0) {
		e(this, "event", void 0), e(this, "listener", (e) => {
			this.isEsc(e) && (e.preventDefault(), e.stopPropagation(), this.on ? this.on() : this.open.value = !1, this.stop());
		}), this.open = n, this.on = a, this.active = o, t(n, (e) => {
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
export { o as t };

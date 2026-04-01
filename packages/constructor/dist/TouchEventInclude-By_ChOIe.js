import { t as e } from "./defineProperty-hmGKPWdq.js";
import { ref as t } from "vue";
import { executePromise as n } from "@dxtmisha/functional";
//#region src/classes/TouchEventInclude.ts
var r = 80, i = class {
	constructor(n, r, i, a) {
		e(this, "touche", t()), e(this, "toucheMove", t()), e(this, "mouse", t()), e(this, "mouseMove", t()), e(this, "onTouch", {
			onTouchstart: (e) => {
				var t, n, r, i, a;
				this.touche.value = (t = e.targetTouches) == null ? void 0 : t[0], this.mouse.value = {
					x: (n = (r = this.touche.value) == null ? void 0 : r.clientX) == null ? 0 : n,
					y: (i = (a = this.touche.value) == null ? void 0 : a.clientY) == null ? 0 : i
				}, this.update(e.target);
			},
			onTouchend: (e) => this.reset(e.target),
			onTouchcancel: (e) => this.reset(e.target),
			onTouchmove: (e) => {
				var t, n, r, i, a;
				this.toucheMove.value = (t = e.targetTouches) == null ? void 0 : t[0], this.mouseMove.value = {
					x: (n = (r = this.toucheMove.value) == null ? void 0 : r.clientX) == null ? 0 : n,
					y: (i = (a = this.toucheMove.value) == null ? void 0 : a.clientY) == null ? 0 : i
				}, this.updateMove(e.target);
			}
		}), e(this, "onMouse", {
			onMousedown: (e) => {
				this.mouse.value = {
					x: e.clientX,
					y: e.clientY
				}, this.update(e.target);
			},
			onMouseup: (e) => this.reset(e.target),
			onMousemove: (e) => {
				this.mouseMove.value = {
					x: e.clientX,
					y: e.clientY
				}, this.updateMove(e.target);
			}
		}), this.start = n, this.move = r, this.end = i, this.element = a;
	}
	getElement(e) {
		var t, n;
		return (t = (n = this.element) == null ? void 0 : n.value) == null ? e.closest("[data-touch]") : t;
	}
	getTypeX(e) {
		return e >= r ? "right" : e < -r ? "left" : "none";
	}
	getTypeY(e) {
		return e >= r ? "bottom" : e < -r ? "top" : "none";
	}
	async callback(e) {
		let t = this.mouse.value, r = this.mouseMove.value;
		if (t && r) {
			let i = r.x - t.x, a = r.y - t.y;
			if (!e || await n(e(this.getTypeX(i), this.getTypeY(a), i, a, t, r, this.touche.value, this.toucheMove.value))) return {
				x: i,
				y: a
			};
		}
	}
	reset(e) {
		let t = this.getElement(e);
		this.callback(this.end).then((e) => {
			t && (e ? this.resetData(t) : setTimeout(() => this.resetData(t), 400));
		});
	}
	resetData(e) {
		this.touche.value = void 0, this.toucheMove.value = void 0, this.mouse.value = void 0, this.mouseMove.value = void 0, e.style.removeProperty("--sys-touch-start-x"), e.style.removeProperty("--sys-touch-start-y"), e.style.removeProperty("--sys-touch-move-x"), e.style.removeProperty("--sys-touch-move-y");
	}
	update(e) {
		let t = this.getElement(e), r = this.mouse.value;
		if (t && r) {
			var i;
			t.style.setProperty("--sys-touch-start-x", `${r.x}px`), t.style.setProperty("--sys-touch-start-y", `${r.y}px`), n((i = this.start) == null ? void 0 : i.call(this, r, this.touche.value)).then();
		}
	}
	updateMove(e) {
		let t = this.getElement(e);
		this.callback(this.move).then((e) => {
			t && e && (t.style.setProperty("--sys-touch-move-x", `${e.x}px`), t.style.setProperty("--sys-touch-move-y", `${e.y}px`));
		});
	}
};
//#endregion
export { i as t };

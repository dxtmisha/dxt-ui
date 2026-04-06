import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t, t as n } from "./ModalDesignAbstract-BaVdtb1N-CW8RThHA.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, ref as l, unref as u } from "vue";
import { executePromise as d, inArray as f, toBinds as p } from "@dxtmisha/functional";
//#region ../constructor/dist/TouchEventInclude-By_ChOIe.js
var m = 80, h = class {
	constructor(t, n, r, i) {
		e(this, "touche", l()), e(this, "toucheMove", l()), e(this, "mouse", l()), e(this, "mouseMove", l()), e(this, "onTouch", {
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
		}), this.start = t, this.move = n, this.end = r, this.element = i;
	}
	getElement(e) {
		var t, n;
		return (t = (n = this.element) == null ? void 0 : n.value) == null ? e.closest("[data-touch]") : t;
	}
	getTypeX(e) {
		return e >= m ? "right" : e < -m ? "left" : "none";
	}
	getTypeY(e) {
		return e >= m ? "bottom" : e < -m ? "top" : "none";
	}
	async callback(e) {
		let t = this.mouse.value, n = this.mouseMove.value;
		if (t && n) {
			let r = n.x - t.x, i = n.y - t.y;
			if (!e || await d(e(this.getTypeX(r), this.getTypeY(i), r, i, t, n, this.touche.value, this.toucheMove.value))) return {
				x: r,
				y: i
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
		let t = this.getElement(e), n = this.mouse.value;
		if (t && n) {
			var r;
			t.style.setProperty("--sys-touch-start-x", `${n.x}px`), t.style.setProperty("--sys-touch-start-y", `${n.y}px`), d((r = this.start) == null ? void 0 : r.call(this, n, this.touche.value)).then();
		}
	}
	updateMove(e) {
		let t = this.getElement(e);
		this.callback(this.move).then((e) => {
			t && e && (t.style.setProperty("--sys-touch-move-x", `${e.x}px`), t.style.setProperty("--sys-touch-move-y", `${e.y}px`));
		});
	}
}, g = class extends n {
	constructor(t, n, i, a, o, s, c, l, u) {
		let { TouchEventIncludeConstructor: d = h } = u == null ? {} : u;
		super(t, n, i, a, o, s, c, l, r(() => ({
			open: t.open,
			adaptive: "actionSheet",
			closeButton: t.barsBackHide,
			closeMobileHide: t.touchClose
		})), void 0, { align: "auto" }, u), e(this, "touchEvent", void 0), this.props = t, this.refs = n, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l, this.touchEvent = new d(void 0, (e, t, n, r) => r >= 0, (e, t) => t === "bottom" ? (this.window.expose.setOpen(!1).then(), !1) : !0);
	}
}, _ = {
	barsBackHide: !0,
	touchClose: !0
}, v = class extends t {
	constructor(...t) {
		super(...t), e(this, "renderTitleTouch", (e) => {
			let t = this.renderTitle(e);
			if (this.props.touchClose) {
				var n, r;
				return [o("div", {
					class: (n = this.classes) == null ? void 0 : n.value.touch,
					...this.item.touchEvent.onTouch
				}, [o("div", { class: (r = this.classes) == null ? void 0 : r.value.tab }), ...t])];
			}
			return t;
		});
	}
	initItem() {
		return new g(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
	}
	initClasses() {
		return {
			main: {},
			title: this.getSubClass("title"),
			header: this.getSubClass("header"),
			body: this.getSubClass("body"),
			footer: this.getSubClass("footer"),
			touch: this.getSubClass("touch"),
			tab: this.getSubClass("tab")
		};
	}
	initRender() {
		var e;
		return this.item.window.render({
			control: this.renderControl,
			title: this.renderTitleTouch,
			default: this.renderDefault,
			footer: this.renderFooter
		}, p({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
}, y = { width: [
	"sm",
	"md",
	"lg",
	"auto"
] }, b = {
	..._,
	width: "md"
}, x = /* @__PURE__ */ a({
	name: "D1ActionSheet",
	__name: "D1ActionSheet",
	props: /* @__PURE__ */ s({
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		barsLabel: {},
		barsDescription: {},
		barsBackHide: { type: Boolean },
		barsHide: { type: Boolean },
		barsList: {},
		barsAttrs: {},
		actionsHide: { type: Boolean },
		actionsList: {},
		actionsSecondary: {},
		actionsAttrs: {},
		open: { type: Boolean },
		touchClose: { type: Boolean },
		width: {}
	}, b),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite"
	],
	setup(e, { expose: t, emit: n }) {
		let a = n, o = e, s = new v("d1.actionSheet", o, {
			emits: a,
			classes: r(() => ({ main: {
				"d1-actionSheet": !0,
				[`d1-actionSheet--width--${o.width}`]: f(y.width, o.width)
			} })),
			styles: r(() => ({}))
		}), l = s.render();
		return t(s.expose()), (e, t) => (c(), i(u(l)));
	}
});
//#endregion
export { x as t };

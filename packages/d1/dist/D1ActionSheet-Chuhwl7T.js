import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { t } from "./Actions-Bn3OKkjI.js";
import { t as n } from "./Window-C-S2QHzN.js";
import { t as r } from "./Bars-BXs9S5ho.js";
import { r as i, t as a } from "./ModalDesignAbstract-PB3TDaVm-DBXHZg-v.js";
import { computed as o, createBlock as s, defineComponent as c, h as l, mergeDefaults as u, openBlock as d, ref as f, unref as p } from "vue";
import { executePromise as m, inArray as h, toBinds as g } from "@dxtmisha/functional";
//#region ../constructor/dist/TouchEventInclude-Cw5rpaRy.js
var _ = 80, v = class {
	constructor(t, n, r, i) {
		e(this, "touche", f()), e(this, "toucheMove", f()), e(this, "mouse", f()), e(this, "mouseMove", f()), e(this, "onTouch", {
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
		return e >= _ ? "right" : e < -_ ? "left" : "none";
	}
	getTypeY(e) {
		return e >= _ ? "bottom" : e < -_ ? "top" : "none";
	}
	async callback(e) {
		let t = this.mouse.value, n = this.mouseMove.value;
		if (t && n) {
			let r = n.x - t.x, i = n.y - t.y;
			if (!e || await m(e(this.getTypeX(r), this.getTypeY(i), r, i, t, n, this.touche.value, this.toucheMove.value))) return {
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
			t.style.setProperty("--sys-touch-start-x", `${n.x}px`), t.style.setProperty("--sys-touch-start-y", `${n.y}px`), m((r = this.start) == null ? void 0 : r.call(this, n, this.touche.value)).then();
		}
	}
	updateMove(e) {
		let t = this.getElement(e);
		this.callback(this.move).then((e) => {
			t && e && (t.style.setProperty("--sys-touch-move-x", `${e.x}px`), t.style.setProperty("--sys-touch-move-y", `${e.y}px`));
		});
	}
}, y = class extends a {
	constructor(t, n, r, i, a, s, c, l, u) {
		let { TouchEventIncludeConstructor: d = v } = u == null ? {} : u;
		super(t, n, r, i, a, s, c, l, o(() => ({
			open: t.open,
			adaptive: "actionSheet",
			closeButton: t.barsBackHide,
			closeMobileHide: t.touchClose
		})), void 0, { align: "auto" }, u), e(this, "touchEvent", void 0), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = s, this.slots = c, this.emits = l, this.touchEvent = new d(void 0, (e, t, n, r) => r >= 0, (e, t) => t === "bottom" ? (this.window.expose.setOpen(!1).then(), !1) : !0);
	}
}, b = {
	barsBackHide: !0,
	touchClose: !0
}, x = class extends i {
	constructor(...t) {
		super(...t), e(this, "renderTitleTouch", (e) => {
			let t = this.renderTitle(e);
			if (this.props.touchClose) {
				var n, r;
				return [l("div", {
					class: (n = this.classes) == null ? void 0 : n.value.touch,
					...this.item.touchEvent.onTouch
				}, [l("div", { class: (r = this.classes) == null ? void 0 : r.value.tab }), ...t])];
			}
			return t;
		});
	}
	initItem() {
		return new y(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
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
		}, g({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
}, S = { width: [
	"sm",
	"md",
	"lg",
	"auto"
] }, C = {
	...b,
	width: "md"
}, w = /* @__PURE__ */ c({
	name: "D1ActionSheet",
	__name: "D1ActionSheet",
	props: /* @__PURE__ */ u({
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
	}, C),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite"
	],
	setup(e, { expose: i, emit: a }) {
		let c = a, l = e, u = new x("d1.actionSheet", l, {
			emits: c,
			classes: o(() => ({ main: {
				"d1-actionSheet": !0,
				[`d1-actionSheet--width--${l.width}`]: h(S.width, l.width)
			} })),
			styles: o(() => ({})),
			components: {
				window: n,
				bars: r,
				actions: t
			},
			compMod: { window: { divider: !0 } }
		}), f = u.render();
		return i(u.expose()), (e, t) => (d(), s(p(f)));
	}
});
//#endregion
export { w as t };

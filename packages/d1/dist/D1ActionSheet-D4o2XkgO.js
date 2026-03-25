import { t as e } from "./Bars-4aLg7pr8.js";
import { t } from "./Actions-BOdB5iOT.js";
import { t as n } from "./Window-9iCpMfYB.js";
import { n as r, t as i } from "./ModalDesignAbstract-CdF7kXxe-4727Mwk8.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, ref as d, unref as f } from "vue";
import { executePromise as p, inArray as m, toBinds as h } from "@dxtmisha/functional";
//#region ../constructor/dist/TouchEventInclude-DctYCjt8.js
var g = Object.defineProperty, _ = (e, t, n) => t in e ? g(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t, n) => _(e, typeof t == "symbol" ? t : t + "", n), y = 80, b = class {
	constructor(e, t, n, r) {
		v(this, "touche", d()), v(this, "toucheMove", d()), v(this, "mouse", d()), v(this, "mouseMove", d()), v(this, "onTouch", {
			onTouchstart: (e) => {
				var t, n, r, i, a;
				this.touche.value = (t = e.targetTouches) == null ? void 0 : t[0], this.mouse.value = {
					x: (r = (n = this.touche.value) == null ? void 0 : n.clientX) == null ? 0 : r,
					y: (a = (i = this.touche.value) == null ? void 0 : i.clientY) == null ? 0 : a
				}, this.update(e.target);
			},
			onTouchend: (e) => this.reset(e.target),
			onTouchcancel: (e) => this.reset(e.target),
			onTouchmove: (e) => {
				var t, n, r, i, a;
				this.toucheMove.value = (t = e.targetTouches) == null ? void 0 : t[0], this.mouseMove.value = {
					x: (r = (n = this.toucheMove.value) == null ? void 0 : n.clientX) == null ? 0 : r,
					y: (a = (i = this.toucheMove.value) == null ? void 0 : i.clientY) == null ? 0 : a
				}, this.updateMove(e.target);
			}
		}), v(this, "onMouse", {
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
		}), this.start = e, this.move = t, this.end = n, this.element = r;
	}
	getElement(e) {
		var t, n;
		return (n = (t = this.element) == null ? void 0 : t.value) == null ? e.closest("[data-touch]") : n;
	}
	getTypeX(e) {
		return e >= y ? "right" : e < -y ? "left" : "none";
	}
	getTypeY(e) {
		return e >= y ? "bottom" : e < -y ? "top" : "none";
	}
	async callback(e) {
		let t = this.mouse.value, n = this.mouseMove.value;
		if (t && n) {
			let r = n.x - t.x, i = n.y - t.y;
			if (!e || await p(e(this.getTypeX(r), this.getTypeY(i), r, i, t, n, this.touche.value, this.toucheMove.value))) return {
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
		var t;
		let n = this.getElement(e), r = this.mouse.value;
		n && r && (n.style.setProperty("--sys-touch-start-x", `${r.x}px`), n.style.setProperty("--sys-touch-start-y", `${r.y}px`), p((t = this.start) == null ? void 0 : t.call(this, r, this.touche.value)).then());
	}
	updateMove(e) {
		let t = this.getElement(e);
		this.callback(this.move).then((e) => {
			t && e && (t.style.setProperty("--sys-touch-move-x", `${e.x}px`), t.style.setProperty("--sys-touch-move-y", `${e.y}px`));
		});
	}
}, x = Object.defineProperty, S = (e, t, n) => t in e ? x(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, C = (e, t, n) => S(e, typeof t == "symbol" ? t : t + "", n), w = class extends i {
	constructor(e, t, n, r, i, o, s, c, l) {
		let { TouchEventIncludeConstructor: u = b } = l == null ? {} : l;
		super(e, t, n, r, i, o, s, c, a(() => ({
			open: e.open,
			adaptive: "actionSheet",
			closeButton: e.barsBackHide,
			closeMobileHide: e.touchClose
		})), void 0, { align: "auto" }), C(this, "touchEvent"), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = o, this.slots = s, this.emits = c, this.touchEvent = new u(void 0, (e, t, n, r) => r >= 0, (e, t) => t === "bottom" ? (this.window.expose.setOpen(!1).then(), !1) : !0);
	}
}, T = {
	barsBackHide: !0,
	touchClose: !0
}, E = class extends r {
	constructor() {
		super(...arguments), C(this, "renderTitleTouch", (e) => {
			var t, n;
			let r = this.renderTitle(e);
			return this.props.touchClose ? [c("div", {
				class: (t = this.classes) == null ? void 0 : t.value.touch,
				...this.item.touchEvent.onTouch
			}, [c("div", { class: (n = this.classes) == null ? void 0 : n.value.tab }), ...r])] : r;
		});
	}
	initItem() {
		return new w(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits);
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
		}, h({
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-touch": "touch"
		}, this.getAttrs()));
	}
}, D = { width: [
	"sm",
	"md",
	"lg",
	"auto"
] }, O = {
	...T,
	width: "md"
}, k = /* @__PURE__ */ s({
	name: "D1ActionSheet",
	__name: "D1ActionSheet",
	props: /* @__PURE__ */ l({
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
	}, O),
	emits: [
		"window",
		"bars",
		"barsLite",
		"barsBack",
		"actions",
		"actionsLite"
	],
	setup(r, { expose: i, emit: s }) {
		let c = s, l = r, d = new E("d1.actionSheet", l, {
			emits: c,
			classes: a(() => ({ main: {
				"d1-actionSheet": !0,
				[`d1-actionSheet--width--${l.width}`]: m(D.width, l.width)
			} })),
			styles: a(() => ({})),
			components: {
				window: n,
				bars: e,
				actions: t
			},
			compMod: { window: { divider: !0 } }
		}), p = d.render();
		return i(d.expose()), (e, t) => (u(), o(f(p)));
	}
});
//#endregion
export { k as t };

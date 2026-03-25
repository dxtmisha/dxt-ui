import { t as e } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { n, t as r } from "./WindowEsc-DTwn4Vsz-CUeOXmZa.js";
import { n as i } from "./MotionTransformClassesInclude-B23RIq0Q-D-f-jgoM.js";
import { Teleport as a, computed as o, createBlock as s, defineComponent as c, h as l, mergeDefaults as u, onUnmounted as d, openBlock as f, ref as p, unref as m, watch as h } from "vue";
import { DesignConstructorAbstract as g, EventItem as _, getRef as v, inArray as y, isEnter as b, toBind as x } from "@dxtmisha/functional";
//#region ../constructor/dist/MotionTransformInclude-P_oRs3JZ.js
var S = Object.defineProperty, C = (e, t, n) => t in e ? S(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, w = (e, t, n) => C(e, typeof t == "symbol" ? t : t + "", n), T = class {
	constructor(e, t, n, r, i, a) {
		w(this, "element", p()), w(this, "binds", o(() => {
			var e, t;
			return {
				...x((e = v(this.extra)) == null ? {} : e, (t = this.props.motionTransformAttrs) == null ? {} : t),
				open: this.props.open,
				clickOpen: this.props.clickOpen,
				autoClose: this.props.autoClose
			};
		})), w(this, "expose", {
			open: o(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			isShow: o(() => {
				var e;
				return !!((e = this.element.value) != null && e.isShow);
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
			motionTransformElement: this.element
		}), w(this, "onTransform", (e, t) => {
			var n, r;
			(n = this.emits) == null || n.call(this, "transform", e, t), (r = this.emits) == null || r.call(this, "transformLite", t);
		}), w(this, "render", (e, t) => this.components ? this.components.render("motionTransform", {
			onTransform: this.onTransform,
			...x(t == null ? {} : t, this.binds.value),
			ref: this.element
		}, e, this.index) : []), this.props = e, this.className = t, this.components = n, this.emits = r, this.extra = i, this.index = a;
	}
}, E = Object.defineProperty, D = (e, t, n) => t in e ? E(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, O = (e, t, n) => D(e, typeof t == "symbol" ? t : t + "", n), k = class {
	constructor(e) {
		O(this, "top", null), O(this, "left", null), O(this, "headWidth", null), O(this, "height", null), O(this, "scale", null), O(this, "contextWidth", null), O(this, "contextHeight", null), O(this, "headHeight", null), O(this, "headScale", null), O(this, "bodyHeight", null), this.element = e;
	}
	update() {
		var e;
		let t = this.element.getRect();
		if (t) {
			let n = this.element.getElementHead(), r = this.element.getElementBody(), i = 1 / window.innerWidth * t.width, a = 1 / t.width * window.innerWidth;
			this.top = `${t.top - i * t.top / (i - 1)}px`, this.left = `${t.left - i * t.left / (i - 1)}px`, this.height = `${100 / window.innerHeight * t.height * a}%`, this.scale = i.toString(), this.contextWidth = `${t.width}px`, this.contextHeight = `${t.height}px`, n && (this.headWidth = `${t.width}px`, this.headHeight = `${(e = n.offsetHeight) == null ? "0" : e}px`, this.headScale = a.toString(), r && (this.bodyHeight = `${r.offsetHeight + (this.element.isSection() ? n.offsetHeight : 0)}px`));
		}
	}
	reset() {
		this.top = null, this.left = null, this.height = null, this.scale = null, this.contextWidth = null, this.contextHeight = null, this.headWidth = null, this.headHeight = null, this.headScale = null, this.bodyHeight = null;
	}
}, A = class {
	constructor(e, t, n, r) {
		O(this, "open", p(!1)), O(this, "show", p(!1)), O(this, "teleport", p(!1)), O(this, "isOpen", o(() => this.open.value)), O(this, "isShow", o(() => this.open.value || this.show.value)), O(this, "makeShow", () => {
			let e = this.element.getElement();
			e && (e.dataset.show = this.show.value ? "show" : "none");
		}), O(this, "makeOpen", () => {
			let e = this.element.getElement();
			e && (e.dataset.open = this.open.value ? "open" : "none");
		}), O(this, "makeTeleport", () => {
			let e = this.element.getElement();
			e && (e.dataset.teleport = this.teleport.value ? "teleport" : "none");
		}), this.element = t, this.tabIndex = n, this.size = r, h([this.element.element, this.show], this.makeShow), h([this.element.element, this.open], this.makeOpen), h([this.element.element, this.teleport], this.makeTeleport), e.open && requestAnimationFrame(() => {
			this.open.value = !!e.open, this.calculations();
		});
	}
	isTeleportClose() {
		return this.teleport.value && !this.open.value;
	}
	set(e, t = !0) {
		this.open.value !== e && (e && this.tabIndex.updateOldElement(), t && this.element.isAnimation() ? (this.show.value = !0, requestAnimationFrame(() => {
			this.calculations(), this.make(), requestAnimationFrame(() => {
				this.open.value = e;
			});
		})) : (this.open.value = e, this.calculations()), setTimeout(() => this.reset(), 480));
	}
	toggle() {
		this.set(!this.open.value);
	}
	reset() {
		return this.show.value && (this.show.value = !1, this.isTeleportClose() && (this.teleport.value = !1), this.make(), this.tabIndex.toggle(this.open.value)), this;
	}
	calculations() {
		this.size.update(), this.toTeleport();
	}
	toTeleport() {
		this.element.isWindow() && (this.teleport.value = this.isShow.value);
	}
	make() {
		this.makeShow(), this.makeMain(), this.makeContext();
	}
	makeMain() {
		let e = this.element.getElement();
		if (e) {
			let t = this.element.style;
			this.show.value ? (e.style.setProperty(t.top, this.size.top), e.style.setProperty(t.left, this.size.left), e.style.setProperty(t.height, this.size.height), e.style.setProperty(t.scale, this.size.scale), e.style.setProperty(t.headWidth, this.size.headWidth), e.style.setProperty(t.headHeight, this.size.headHeight), e.style.setProperty(t.headScale, this.size.headScale), e.style.setProperty(t.bodyHeight, this.size.bodyHeight)) : (e.style.removeProperty(t.top), e.style.removeProperty(t.left), e.style.removeProperty(t.height), e.style.removeProperty(t.scale), e.style.removeProperty(t.headWidth), e.style.removeProperty(t.headHeight), e.style.removeProperty(t.headScale), e.style.removeProperty(t.bodyHeight));
		}
	}
	makeContext() {
		let e = this.element.getElementContext();
		if (e) {
			let t = this.element.style;
			this.element.isWindow() && this.isShow.value ? (e.style.setProperty(t.contextWidth, this.size.contextWidth), e.style.setProperty(t.contextHeight, this.size.contextHeight)) : (e.style.removeProperty(t.contextWidth), e.style.removeProperty(t.contextHeight));
		}
	}
}, j = class {
	constructor(e, t, n, r) {
		O(this, "item"), O(this, "onClick", (e) => {
			this.isTrigger(e.target) && (this.emit(e, "head"), this.state.toggle());
		}), O(this, "onKeydown", async (e) => {
			b(e) && this.isTrigger(e.target) && (e.preventDefault(), this.emit(e, "head"), this.state.toggle());
		}), O(this, "onTransitionend", (e) => {
			this.element.getElement() === e.target && e.propertyName === "height" && this.state.reset();
		}), O(this, "listener", (e) => {
			let t = e.target;
			this.state.open.value && this.element.isClickGlobal(t) && (this.element.isClose(t) || this.props.autoClose && this.element.isOutside(t) && this.element.isIgnore(t)) && (this.emit(e, "body"), this.state.set(!1));
		}), this.props = e, this.element = t, this.state = n, this.emits = r, this.item = new _(document.body, "click", this.listener), h(this.state.open, () => {
			this.props.autoClose && this.state.open.value, this.item.toggle(this.state.open.value);
		});
	}
	stop() {
		return this.item.stop(), this;
	}
	emit(e, t) {
		var n, r;
		let i = {
			type: t,
			open: !this.state.open.value
		};
		(n = this.emits) == null || n.call(this, "transform", e, i), (r = this.emits) == null || r.call(this, "transformLite", i);
	}
	isTrigger(e) {
		return !!(this.props.clickOpen && this.element.isClick(e));
	}
}, M = class {
	constructor(e) {
		O(this, "open", () => this.state.set(!0)), O(this, "close", () => {
			this.state.set(!1);
		}), O(this, "toggle", () => this.state.toggle()), O(this, "to", (e) => this.state.set(e)), this.state = e;
	}
}, N = class {
	constructor(a, s, c, l, u, f, p, m, g, _) {
		O(this, "element"), O(this, "tabIndex"), O(this, "size"), O(this, "state"), O(this, "event"), O(this, "go"), O(this, "esc"), O(this, "slotData", o(() => ({
			isOpen: this.state.isOpen,
			isShow: this.state.isShow,
			classes: i.getClassesList(this.className),
			idControl: this.element.idControl,
			idBody: this.element.idBody,
			binds: t.control(this.element.idControl, this.element.idBody, void 0, this.state.isOpen.value)
		}))), this.props = a, this.refs = s, this.classDesign = u, this.className = f, this.components = p, this.slots = m, this.emits = g;
		let { ModelIncludeConstructor: v = e, MotionTransformElementConstructor: y = i, MotionTransformEventConstructor: b = j, MotionTransformGoConstructor: x = M, MotionTransformSizeConstructor: S = k, MotionTransformStateConstructor: C = A, TabIndexIncludeConstructor: w = n, WindowEscConstructor: T = r } = _ == null ? {} : _;
		this.element = new y(a, c, l, f), this.tabIndex = new w(() => this.element.getElementBody(), () => this.element.isWindow()), this.size = new S(this.element), this.state = new C(a, this.element, this.tabIndex, this.size), this.event = new b(a, this.element, this.state, g), this.go = new x(this.state), this.esc = new T(this.state.open, () => this.go.close(), () => !!this.props.clickOpen), new v("open", this.emits, this.state.open), h([s.open], () => this.state.set(!!a.open)), d(() => this.event.stop());
	}
	getSlotData() {
		return this.slotData.value;
	}
}, P = {
	clickOpen: !0,
	autoClose: !0,
	animationShow: !0,
	tagBody: "section",
	animationHeadPosition: "top"
}, F = class extends g {
	constructor(e, n, r, i = N) {
		super(e, n, r), O(this, "elementContext", p()), O(this, "item"), O(this, "renderMain", () => [l("div", this.propsMain.value, [...this.renderHead(), ...this.renderBody()])]), O(this, "renderHead", () => [l("div", this.propsHead.value, this.initSlot("head", void 0, this.item.getSlotData()))]), O(this, "renderBody", () => {
			var e;
			return this.props.inDom || this.item.state.isShow.value ? [l((e = this.props.tagBody) == null ? "div" : e, this.propsBody.value, this.initSlot("body", void 0, this.item.getSlotData()))] : [];
		}), O(this, "renderScrim", () => {
			var e;
			return this.item.state.teleport.value ? [l("div", {
				key: "scrim",
				class: (e = this.classes) == null ? void 0 : e.value.scrim
			})] : [];
		}), O(this, "propsMain", o(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "main",
				class: (e = this.classes) == null ? void 0 : e.value.main,
				onTransitionend: this.item.event.onTransitionend
			};
		})), O(this, "propsHead", o(() => {
			var e;
			let t = {
				key: "head",
				class: (e = this.classes) == null ? void 0 : e.value.head,
				onClick: this.item.event.onClick
			};
			return this.props.clickOpen ? {
				...t,
				onKeydown: this.item.event.onKeydown,
				...this.item.slotData.value.binds
			} : t;
		})), O(this, "propsBody", o(() => {
			var e;
			return {
				key: "body",
				id: this.item.element.idBody,
				class: (e = this.classes) == null ? void 0 : e.value.body,
				...t.role("region"),
				...t.modal(!1, this.props.ariaLabelledby, this.props.ariaDescribedby)
			};
		})), this.item = new i(this.props, this.refs, this.element, this.elementContext, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			open: this.item.state.open,
			isShow: this.item.state.isShow,
			setOpen: this.item.go.to,
			toOpen: this.item.go.open,
			toClose: this.item.go.close,
			toggle: this.item.go.toggle
		};
	}
	initClasses() {
		return {
			main: {},
			context: this.getSubClass("context"),
			head: this.getSubClass("head"),
			body: this.getSubClass("body"),
			backdrop: this.getSubClass("backdrop"),
			scrim: this.getSubClass("scrim"),
			clickNone: this.getSubClass("clickNone")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [...this.renderMain(), ...this.renderScrim()];
		return l("div", {
			ref: this.elementContext,
			class: (e = this.classes) == null ? void 0 : e.value.context
		}, l(a, {
			key: "teleport",
			disabled: !this.item.state.teleport.value,
			to: "body"
		}, t));
	}
}, I = {
	animationHeadPosition: ["top", "toBottom"],
	adaptive: [
		"planeAlways",
		"planeSm",
		"planeMd",
		"planeLg",
		"planeXl",
		"plane2xl"
	]
}, L = {
	...P,
	animationHeadPosition: "top",
	adaptive: "planeMd"
}, R = /* @__PURE__ */ c({
	name: "D1MotionTransform",
	__name: "D1MotionTransform",
	props: /* @__PURE__ */ u({
		ariaLabelledby: {},
		ariaDescribedby: {},
		modelOpen: {},
		"onUpdate:open": { type: Function },
		"onUpdate:modelOpen": { type: Function },
		open: { type: Boolean },
		inDom: { type: Boolean },
		ignore: {},
		ignoreSelector: {},
		clickOpen: { type: Boolean },
		autoClose: { type: Boolean },
		animationShow: { type: Boolean },
		tagBody: {},
		section: { type: Boolean },
		animationHeadPosition: {},
		adaptive: {}
	}, L),
	emits: [
		"update:open",
		"update:modelOpen",
		"transform",
		"transformLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new F("d1.motionTransform", i, {
			emits: r,
			classes: o(() => ({ main: {
				"d1-motionTransform": !0,
				"d1-motionTransform--section": i.section,
				[`d1-motionTransform--animationHeadPosition--${i.animationHeadPosition}`]: y(I.animationHeadPosition, i.animationHeadPosition),
				[`d1-motionTransform--adaptive--${i.adaptive}`]: y(I.adaptive, i.adaptive)
			} })),
			styles: o(() => ({}))
		}), c = a.render();
		return t(a.expose()), (e, t) => (f(), s(m(c)));
	}
});
//#endregion
export { T as n, R as t };

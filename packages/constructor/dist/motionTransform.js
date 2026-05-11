import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-3CuEayIP.js";
import { t as n } from "./ModelInclude-COXpwWf_.js";
import { t as r } from "./TabIndexInclude-d8ckyUlj.js";
import { n as i, r as a, t as o } from "./MotionTransformClassesInclude-CYLUfdS7.js";
import { t as s } from "./WindowEsc-C-ecxnz7.js";
import { t as c } from "./MotionTransformInclude-D9GxyGuc.js";
import { Teleport as l, computed as u, h as d, onUnmounted as f, ref as p, watch as m } from "vue";
import { DesignConstructorAbstract as h, EventItem as g, isEnter as _ } from "@dxtmisha/functional";
//#region src/constructors/MotionTransform/MotionTransformSize.ts
var v = class {
	constructor(e) {
		t(this, "top", null), t(this, "left", null), t(this, "headWidth", null), t(this, "height", null), t(this, "scale", null), t(this, "contextWidth", null), t(this, "contextHeight", null), t(this, "headHeight", null), t(this, "headScale", null), t(this, "bodyHeight", null), this.element = e;
	}
	update() {
		let e = this.element.getRect();
		if (e) {
			let n = this.element.getElementHead(), r = this.element.getElementBody(), i = 1 / window.innerWidth * e.width, a = 1 / e.width * window.innerWidth;
			if (this.top = `${e.top - i * e.top / (i - 1)}px`, this.left = `${e.left - i * e.left / (i - 1)}px`, this.height = `${100 / window.innerHeight * e.height * a}%`, this.scale = i.toString(), this.contextWidth = `${e.width}px`, this.contextHeight = `${e.height}px`, n) {
				var t;
				this.headWidth = `${e.width}px`, this.headHeight = `${(t = n.offsetHeight) == null ? "0" : t}px`, this.headScale = a.toString(), r && (this.bodyHeight = `${r.offsetHeight + (this.element.isSection() ? n.offsetHeight : 0)}px`);
			}
		}
	}
	reset() {
		this.top = null, this.left = null, this.height = null, this.scale = null, this.contextWidth = null, this.contextHeight = null, this.headWidth = null, this.headHeight = null, this.headScale = null, this.bodyHeight = null;
	}
}, y = class {
	constructor(e, n, r, i) {
		t(this, "open", p(!1)), t(this, "show", p(!1)), t(this, "teleport", p(!1)), t(this, "isOpen", u(() => this.open.value)), t(this, "isShow", u(() => this.open.value || this.show.value)), t(this, "makeShow", () => {
			let e = this.element.getElement();
			e && (e.dataset.show = this.show.value ? "show" : "none");
		}), t(this, "makeOpen", () => {
			let e = this.element.getElement();
			e && (e.dataset.open = this.open.value ? "open" : "none");
		}), t(this, "makeTeleport", () => {
			let e = this.element.getElement();
			e && (e.dataset.teleport = this.teleport.value ? "teleport" : "none");
		}), this.element = n, this.tabIndex = r, this.size = i, m([this.element.element, this.show], this.makeShow), m([this.element.element, this.open], this.makeOpen), m([this.element.element, this.teleport], this.makeTeleport), e.open && requestAnimationFrame(() => {
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
}, b = 0, x = class {
	constructor(e, n, r, i) {
		t(this, "item", void 0), t(this, "onClick", (e) => {
			this.isTrigger(e.target) && (this.emit(e, "head"), this.state.toggle());
		}), t(this, "onKeydown", async (e) => {
			_(e) && this.isTrigger(e.target) && (e.preventDefault(), this.emit(e, "head"), this.state.toggle());
		}), t(this, "onTransitionend", (e) => {
			this.element.getElement() === e.target && e.propertyName === "height" && this.state.reset();
		}), t(this, "listener", (e) => {
			let t = e.target;
			this.state.open.value && this.element.isClickGlobal(t) && (this.element.isClose(t) || this.props.autoClose && this.element.isOutside(t) && this.element.isIgnore(t)) && (this.emit(e, "body"), this.state.set(!1));
		}), this.props = e, this.element = n, this.state = r, this.emits = i, this.item = new g(document.body, "click", this.listener), m(this.state.open, () => {
			this.props.autoClose && (this.state.open.value ? b++ : b--), this.item.toggle(this.state.open.value);
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
}, S = class {
	constructor(e) {
		t(this, "open", () => this.state.set(!0)), t(this, "close", () => {
			this.state.set(!1);
		}), t(this, "toggle", () => this.state.toggle()), t(this, "to", (e) => this.state.set(e)), this.state = e;
	}
}, C = class {
	constructor(a, o, c, l, d, p, h, g, _, b) {
		t(this, "element", void 0), t(this, "tabIndex", void 0), t(this, "size", void 0), t(this, "state", void 0), t(this, "event", void 0), t(this, "go", void 0), t(this, "esc", void 0), t(this, "slotData", u(() => ({
			isOpen: this.state.isOpen,
			isShow: this.state.isShow,
			classes: i.getClassesList(this.className),
			idControl: this.element.idControl,
			idBody: this.element.idBody,
			binds: e.control(this.element.idControl, this.element.idBody, void 0, this.state.isOpen.value)
		}))), this.props = a, this.refs = o, this.classDesign = d, this.className = p, this.components = h, this.slots = g, this.emits = _;
		let { ModelIncludeConstructor: C = n, MotionTransformElementConstructor: w = i, MotionTransformEventConstructor: T = x, MotionTransformGoConstructor: E = S, MotionTransformSizeConstructor: D = v, MotionTransformStateConstructor: O = y, TabIndexIncludeConstructor: k = r, WindowEscConstructor: A = s } = b == null ? {} : b;
		this.element = new w(a, c, l, p), this.tabIndex = new k(() => this.element.getElementBody(), () => this.element.isWindow()), this.size = new D(this.element), this.state = new O(a, this.element, this.tabIndex, this.size), this.event = new T(a, this.element, this.state, _), this.go = new E(this.state), this.esc = new A(this.state.open, () => this.go.close(), () => !!this.props.clickOpen), new C("open", this.emits, this.state.open), m([o.open], () => this.state.set(!!a.open)), f(() => this.event.stop());
	}
	getSlotData() {
		return this.slotData.value;
	}
}, w = {
	clickOpen: !0,
	autoClose: !0,
	animationShow: !0,
	tagBody: "section",
	animationHeadPosition: "top"
}, T = class extends h {
	constructor(n, r, i, a = C) {
		super(n, r, i), t(this, "elementContext", p()), t(this, "item", void 0), t(this, "renderMain", () => [d("div", this.propsMain.value, [...this.renderHead(), ...this.renderBody()])]), t(this, "renderHead", () => [d("div", this.propsHead.value, this.initSlot("head", void 0, this.item.getSlotData()))]), t(this, "renderBody", () => {
			if (this.props.inDom || this.item.state.isShow.value) {
				var e;
				return [d((e = this.props.tagBody) == null ? "div" : e, this.propsBody.value, this.initSlot("body", void 0, this.item.getSlotData()))];
			}
			return [];
		}), t(this, "renderScrim", () => {
			if (this.item.state.teleport.value) {
				var e;
				return [d("div", {
					key: "scrim",
					class: (e = this.classes) == null ? void 0 : e.value.scrim
				})];
			}
			return [];
		}), t(this, "propsMain", u(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "main",
				class: (e = this.classes) == null ? void 0 : e.value.main,
				onTransitionend: this.item.event.onTransitionend
			};
		})), t(this, "propsHead", u(() => {
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
		})), t(this, "propsBody", u(() => {
			var t;
			return {
				key: "body",
				id: this.item.element.idBody,
				class: (t = this.classes) == null ? void 0 : t.value.body,
				...e.role("region"),
				...e.modal(!1, this.props.ariaLabelledby, this.props.ariaDescribedby)
			};
		})), this.item = new a(this.props, this.refs, this.element, this.elementContext, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return d("div", {
			ref: this.elementContext,
			class: (e = this.classes) == null ? void 0 : e.value.context
		}, d(l, {
			key: "teleport",
			disabled: !this.item.state.teleport.value,
			to: "body"
		}, t));
	}
};
//#endregion
export { C as MotionTransform, o as MotionTransformClassesInclude, T as MotionTransformDesign, i as MotionTransformElement, x as MotionTransformEvent, S as MotionTransformGo, c as MotionTransformInclude, v as MotionTransformSize, y as MotionTransformState, a as __MOTION_TRANSFORM_TYPE_BODY_NAME, w as defaultsMotionTransform };

import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t } from "./ModelInclude-D8LkrhPp-CIue56kI.js";
import { t as n } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as r, t as i } from "./WindowEsc-vBFI8pVr-DxByq-uf.js";
import { n as a } from "./MotionTransformClassesInclude-BN-T4YKS-ClHUJwnq.js";
import { Teleport as o, computed as s, createBlock as c, defineComponent as l, h as u, mergeDefaults as d, onUnmounted as f, openBlock as p, ref as m, unref as h, watch as g } from "vue";
import { DesignConstructorAbstract as _, EventItem as v, getRef as y, inArray as b, isEnter as x, toBind as S } from "@dxtmisha/functional";
//#region ../constructor/dist/MotionTransformInclude-CFVVig1F.js
var C = class {
	constructor(t, n, r, i, a, o) {
		e(this, "element", m()), e(this, "binds", s(() => {
			var e, t;
			return {
				...S((e = y(this.extra)) == null ? {} : e, (t = this.props.motionTransformAttrs) == null ? {} : t),
				open: this.props.open,
				clickOpen: this.props.clickOpen,
				autoClose: this.props.autoClose
			};
		})), e(this, "expose", {
			open: s(() => {
				var e;
				return !!((e = this.element.value) != null && e.open);
			}),
			isShow: s(() => {
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
		}), e(this, "onTransform", (e, t) => {
			var n, r;
			(n = this.emits) == null || n.call(this, "transform", e, t), (r = this.emits) == null || r.call(this, "transformLite", t);
		}), e(this, "render", (e, t) => this.components ? this.components.render("motionTransform", {
			onTransform: this.onTransform,
			...S(t == null ? {} : t, this.binds.value),
			ref: this.element
		}, e, this.index) : []), this.props = t, this.className = n, this.components = r, this.emits = i, this.extra = a, this.index = o;
	}
}, w = class {
	constructor(t) {
		e(this, "top", null), e(this, "left", null), e(this, "headWidth", null), e(this, "height", null), e(this, "scale", null), e(this, "contextWidth", null), e(this, "contextHeight", null), e(this, "headHeight", null), e(this, "headScale", null), e(this, "bodyHeight", null), this.element = t;
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
}, T = class {
	constructor(t, n, r, i) {
		e(this, "open", m(!1)), e(this, "show", m(!1)), e(this, "teleport", m(!1)), e(this, "isOpen", s(() => this.open.value)), e(this, "isShow", s(() => this.open.value || this.show.value)), e(this, "makeShow", () => {
			let e = this.element.getElement();
			e && (e.dataset.show = this.show.value ? "show" : "none");
		}), e(this, "makeOpen", () => {
			let e = this.element.getElement();
			e && (e.dataset.open = this.open.value ? "open" : "none");
		}), e(this, "makeTeleport", () => {
			let e = this.element.getElement();
			e && (e.dataset.teleport = this.teleport.value ? "teleport" : "none");
		}), this.element = n, this.tabIndex = r, this.size = i, g([this.element.element, this.show], this.makeShow), g([this.element.element, this.open], this.makeOpen), g([this.element.element, this.teleport], this.makeTeleport), t.open && requestAnimationFrame(() => {
			this.open.value = !!t.open, this.calculations();
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
}, E = 0, D = class {
	constructor(t, n, r, i) {
		e(this, "item", void 0), e(this, "onClick", (e) => {
			this.isTrigger(e.target) && (this.emit(e, "head"), this.state.toggle());
		}), e(this, "onKeydown", async (e) => {
			x(e) && this.isTrigger(e.target) && (e.preventDefault(), this.emit(e, "head"), this.state.toggle());
		}), e(this, "onTransitionend", (e) => {
			this.element.getElement() === e.target && e.propertyName === "height" && this.state.reset();
		}), e(this, "listener", (e) => {
			let t = e.target;
			this.state.open.value && this.element.isClickGlobal(t) && (this.element.isClose(t) || this.props.autoClose && this.element.isOutside(t) && this.element.isIgnore(t)) && (this.emit(e, "body"), this.state.set(!1));
		}), this.props = t, this.element = n, this.state = r, this.emits = i, this.item = new v(document.body, "click", this.listener), g(this.state.open, () => {
			this.props.autoClose && (this.state.open.value ? E++ : E--), this.item.toggle(this.state.open.value);
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
}, O = class {
	constructor(t) {
		e(this, "open", () => this.state.set(!0)), e(this, "close", () => {
			this.state.set(!1);
		}), e(this, "toggle", () => this.state.toggle()), e(this, "to", (e) => this.state.set(e)), this.state = t;
	}
}, k = class {
	constructor(o, c, l, u, d, p, m, h, _, v) {
		e(this, "element", void 0), e(this, "tabIndex", void 0), e(this, "size", void 0), e(this, "state", void 0), e(this, "event", void 0), e(this, "go", void 0), e(this, "esc", void 0), e(this, "slotData", s(() => ({
			isOpen: this.state.isOpen,
			isShow: this.state.isShow,
			classes: a.getClassesList(this.className),
			idControl: this.element.idControl,
			idBody: this.element.idBody,
			binds: n.control(this.element.idControl, this.element.idBody, void 0, this.state.isOpen.value)
		}))), this.props = o, this.refs = c, this.classDesign = d, this.className = p, this.components = m, this.slots = h, this.emits = _;
		let { ModelIncludeConstructor: y = t, MotionTransformElementConstructor: b = a, MotionTransformEventConstructor: x = D, MotionTransformGoConstructor: S = O, MotionTransformSizeConstructor: C = w, MotionTransformStateConstructor: E = T, TabIndexIncludeConstructor: k = r, WindowEscConstructor: A = i } = v == null ? {} : v;
		this.element = new b(o, l, u, p), this.tabIndex = new k(() => this.element.getElementBody(), () => this.element.isWindow()), this.size = new C(this.element), this.state = new E(o, this.element, this.tabIndex, this.size), this.event = new x(o, this.element, this.state, _), this.go = new S(this.state), this.esc = new A(this.state.open, () => this.go.close(), () => !!this.props.clickOpen), new y("open", this.emits, this.state.open), g([c.open], () => this.state.set(!!o.open)), f(() => this.event.stop());
	}
	getSlotData() {
		return this.slotData.value;
	}
}, A = {
	clickOpen: !0,
	autoClose: !0,
	animationShow: !0,
	tagBody: "section",
	animationHeadPosition: "top"
}, j = class extends _ {
	constructor(t, r, i, a = k) {
		super(t, r, i), e(this, "elementContext", m()), e(this, "item", void 0), e(this, "renderMain", () => [u("div", this.propsMain.value, [...this.renderHead(), ...this.renderBody()])]), e(this, "renderHead", () => [u("div", this.propsHead.value, this.initSlot("head", void 0, this.item.getSlotData()))]), e(this, "renderBody", () => {
			if (this.props.inDom || this.item.state.isShow.value) {
				var e;
				return [u((e = this.props.tagBody) == null ? "div" : e, this.propsBody.value, this.initSlot("body", void 0, this.item.getSlotData()))];
			}
			return [];
		}), e(this, "renderScrim", () => {
			if (this.item.state.teleport.value) {
				var e;
				return [u("div", {
					key: "scrim",
					class: (e = this.classes) == null ? void 0 : e.value.scrim
				})];
			}
			return [];
		}), e(this, "propsMain", s(() => {
			var e;
			return {
				...this.getAttrs(),
				ref: this.element,
				key: "main",
				class: (e = this.classes) == null ? void 0 : e.value.main,
				onTransitionend: this.item.event.onTransitionend
			};
		})), e(this, "propsHead", s(() => {
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
		})), e(this, "propsBody", s(() => {
			var e;
			return {
				key: "body",
				id: this.item.element.idBody,
				class: (e = this.classes) == null ? void 0 : e.value.body,
				...n.role("region"),
				...n.modal(!1, this.props.ariaLabelledby, this.props.ariaDescribedby)
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
		return u("div", {
			ref: this.elementContext,
			class: (e = this.classes) == null ? void 0 : e.value.context
		}, u(o, {
			key: "teleport",
			disabled: !this.item.state.teleport.value,
			to: "body"
		}, t));
	}
}, M = {
	animationHeadPosition: ["top", "toBottom"],
	adaptive: [
		"planeAlways",
		"planeSm",
		"planeMd",
		"planeLg",
		"planeXl",
		"plane2xl"
	]
}, N = {
	...A,
	animationHeadPosition: "top",
	adaptive: "planeMd"
}, P = /* @__PURE__ */ l({
	name: "D1MotionTransform",
	__name: "D1MotionTransform",
	props: /* @__PURE__ */ d({
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
	}, N),
	emits: [
		"update:open",
		"update:modelOpen",
		"transform",
		"transformLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new j("d1.motionTransform", i, {
			emits: r,
			classes: s(() => ({ main: {
				"d1-motionTransform": !0,
				"d1-motionTransform--section": i.section,
				[`d1-motionTransform--animationHeadPosition--${i.animationHeadPosition}`]: b(M.animationHeadPosition, i.animationHeadPosition),
				[`d1-motionTransform--adaptive--${i.adaptive}`]: b(M.adaptive, i.adaptive)
			} })),
			styles: s(() => ({}))
		}), o = a.render();
		return t(a.expose()), (e, t) => (p(), c(h(o)));
	}
});
//#endregion
export { C as n, P as t };

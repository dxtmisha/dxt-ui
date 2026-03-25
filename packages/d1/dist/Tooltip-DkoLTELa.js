import { t as e } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as n } from "./DescriptionInclude-D4ane9aR-o7gRirw3.js";
import { n as r, t as i } from "./Arrow-M-90F1OC.js";
import { Teleport as a, computed as o, createBlock as s, defineComponent as c, h as l, mergeDefaults as u, nextTick as d, onUnmounted as f, openBlock as p, ref as m, unref as h, watch as g } from "vue";
import { DesignConstructorAbstract as _, EventItem as v, getElementId as y, getRef as b, inArray as x, isDomRuntime as S, toBinds as C } from "@dxtmisha/functional";
//#region ../constructor/dist/TooltipInclude--QRSE83v.js
var w = Object.defineProperty, T = (e, t, n) => t in e ? w(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, E = (e, t, n) => T(e, typeof t == "symbol" ? t : t + "", n), D = class {
	constructor(e, t, n, r, i) {
		E(this, "element", m()), E(this, "binds", o(() => C(b(this.extra), this.props.tooltipAttrs, {
			ref: this.element,
			class: `${this.className}__tooltip`
		}))), E(this, "render", (e) => this.components ? this.components.render("tooltip", this.binds.value, e, this.index) : []), this.props = e, this.className = t, this.components = n, this.extra = r, this.index = i;
	}
	getElement() {
		return this.element.value;
	}
	open() {
		this.toggle(!0);
	}
	close() {
		this.toggle(!1);
	}
	toggle(e) {
		var t;
		(t = this.getElement()) == null || t.toggle(e);
	}
}, O = Object.defineProperty, k = (e, t, n) => t in e ? O(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, A = (e, t, n) => k(e, typeof t == "symbol" ? t : t + "", n), j = class {
	constructor(e) {
		A(this, "id", `tooltip--${y()}`), A(this, "idItem", `tooltip--${y()}-item`), this.className = e;
	}
	getId() {
		return this.id;
	}
	getIdItem() {
		return this.idItem;
	}
	getClassControl() {
		return `${this.className}__control`;
	}
	getControl() {
		return `${this.getClassControl()} ${this.getId()}`;
	}
	getSelectorControl() {
		return `.${this.getClassControl()}.${this.id}`;
	}
	findControl() {
		var e;
		if (S()) return (e = document.querySelector(this.getSelectorControl())) == null ? void 0 : e;
	}
	findControlByTarget(e) {
		var t;
		return (t = e.closest(this.getSelectorControl())) == null ? void 0 : t;
	}
}, M = class {
	constructor(e, t) {
		this.element = e, this.className = t;
	}
	set(e, t, n, r) {
		let i = this.element.value;
		i && (i.classList.toggle(`${this.className}--top`, e), i.style.setProperty(`--${this.className}-sys-x`, `${t}px`), i.style.setProperty(`--${this.className}-sys-y`, `${n}px`), i.style.setProperty(`--${this.className}-sys-shift`, `${r}px`));
	}
	setPreparation(e) {
		let t = this.element.value;
		t && t.classList.toggle(`${this.className}--preparation`, e);
	}
	setShow(e) {
		let t = this.element.value;
		t && (t.classList.toggle(`${this.className}--show`, e), e || this.setMove(e));
	}
	setMove(e) {
		let t = this.element.value;
		t && t.classList.toggle(`${this.className}--move`, e);
	}
	reset() {
		let e = this.element.value;
		e && (e.classList.remove(`${this.className}--top`), e.classList.remove(`${this.className}--preparation`), e.classList.remove(`${this.className}--show`), e.style.removeProperty(`--${this.className}-sys-x`), e.style.removeProperty(`--${this.className}-sys-y`), e.style.removeProperty(`--${this.className}-sys-shift`));
	}
	resetShow() {
		let e = this.element.value;
		e && (e.classList.remove(`${this.className}--preparation`), e.classList.remove(`${this.className}--show`));
	}
}, N = class {
	constructor(e, t) {
		A(this, "open", m(!1)), A(this, "show", m(!1)), A(this, "preparation", m(!1)), A(this, "isText", o(() => !this.props.disabled && !!(this.props.label || this.props.description || this.slots && ("default" in this.slots || "description" in this.slots || "body" in this.slots)))), A(this, "isShow", o(() => !!(this.show.value || this.open.value || this.props.inDom) && this.isText.value)), A(this, "isArray", o(() => !!(this.props.arrowShow && this.preparation.value))), this.props = e, this.slots = t;
	}
	isMatch(e) {
		return this.open.value === e;
	}
	setOpen(e) {
		this.open.value = e;
	}
	setShow(e) {
		this.show.value = e;
	}
	setPreparation(e) {
		this.preparation.value = e;
	}
}, P = class {
	constructor(e, t, n, r) {
		this.props = e, this.element = t, this.classes = n, this.style = r;
	}
	update() {
		let e = this.element.value, t = this.classes.findControl();
		if (e && t) {
			let n = t.getBoundingClientRect(), r = e.getBoundingClientRect(), i = this.getIndent(), a = this.isTop(n, r), o = n.left + n.width / 2 - r.width / 2, s = a ? n.top - r.height - i : n.bottom + i, c = 0;
			o < 0 ? c = 0 - o : o + r.width > window.innerWidth && (c = window.innerWidth - (o + r.width)), this.style.set(a, o, s, c);
		}
	}
	isTop(e, t) {
		let n = this.getIndent();
		return this.props.top && e.top - t.height - n >= 0 || e.bottom + t.height + n > window.innerHeight;
	}
	getIndent() {
		var e;
		return (e = this.props.indent) == null ? 0 : e;
	}
}, F = class {
	constructor(e, t, n, r, i, a) {
		A(this, "timeout"), A(this, "timeoutHide"), A(this, "timeoutTo"), A(this, "event"), A(this, "toggle", async (e, t) => {
			this.status.isText.value && !this.status.isMatch(e) && (clearTimeout(this.timeout), clearTimeout(this.timeoutHide), e ? (this.status.setOpen(e), this.status.setShow(!0), await d(), this.position.update(), this.status.setPreparation(!0), await d(), requestAnimationFrame(() => {
				this.timeout = setTimeout(() => {
					this.style.setPreparation(!0), requestAnimationFrame(() => {
						var e;
						this.style.setShow(!0), this.eventStart(), (e = this.emits) == null || e.call(this, "tooltip", !0), this.props.delayHide && (this.timeoutHide = setTimeout(() => this.toggle(!1), Number(this.props.delayHide)));
					});
				}, t ? 48 : this.props.delay);
			})) : this.timeoutTo = setTimeout(() => {
				this.status.setOpen(e), this.style.resetShow(), this.eventStop(), this.timeout = setTimeout(() => {
					var e;
					this.status.setShow(!1), this.status.setPreparation(!1), (e = this.emits) == null || e.call(this, "tooltip", !1);
				}, 128);
			}, t ? 48 : 256));
		}), A(this, "onScroll", () => this.toggle(!1, !0)), this.props = e, this.style = n, this.status = r, this.position = i, this.emits = a, this.event = new v(window, ["scroll-sync"], this.onScroll), g([t.open], () => {
			this.toggle(!!this.props.open).then();
		}, { immediate: this.props.open });
	}
	noHide() {
		clearTimeout(this.timeoutTo);
	}
	eventStart() {
		this.props.embedded || this.event.start();
	}
	eventStop() {
		this.event.stop();
	}
}, I = class {
	constructor(e, t, n, r, i) {
		A(this, "next", !1), A(this, "timeout"), A(this, "onClick", () => {
			this.isNotEmbedded() && requestAnimationFrame(async () => {
				this.next || (clearTimeout(this.timeout), await this.open.toggle(!this.status.open.value, !0), this.next = !1);
			});
		}), A(this, "onMouseover", ({ target: e }) => {
			this.isNotEmbedded() && (clearTimeout(this.timeout), this.next = !0, requestAnimationFrame(async () => {
				await this.open.toggle(!!this.classes.findControlByTarget(e)), this.timeout = setTimeout(() => {
					this.next = !1;
				}, 640);
			}));
		}), A(this, "onMouseoverTooltip", () => {
			this.open.noHide();
		}), A(this, "onMouseout", ({ relatedTarget: e }) => {
			this.isNotEmbedded() && e && this.open.toggle(!!this.classes.findControlByTarget(e)).then();
		}), A(this, "onTransitionend", (e) => {
			e.propertyName === "transform" && this.status.open.value && this.style.setMove(!0);
		}), this.props = e, this.classes = t, this.style = n, this.status = r, this.open = i;
	}
	isNotEmbedded() {
		return !this.props.embedded;
	}
}, L = class {
	constructor(i, a, s, c, l, u, d, p, m) {
		A(this, "classes"), A(this, "style"), A(this, "status"), A(this, "position"), A(this, "open"), A(this, "event"), A(this, "arrow"), A(this, "label"), A(this, "description"), A(this, "binds", o(() => ({
			id: this.classes.getIdItem(),
			onMouseover: this.event.onMouseoverTooltip,
			onMouseout: this.event.onMouseout,
			onTransitionend: this.event.onTransitionend,
			...t.role(this.role.value),
			...t.labelledby(this.label.id.value),
			...t.describedby(this.description.id.value)
		}))), A(this, "bindsControl", o(() => {
			let e = {
				class: this.classes.getControl(),
				onclick: this.event.onClick,
				onmouseover: this.event.onMouseover,
				onmouseout: this.event.onMouseout
			};
			return this.props.interactive ? {
				...e,
				...t.expanded(this.status.open.value),
				...t.controls(this.classes.getIdItem())
			} : {
				...e,
				...t.describedby(this.classes.getIdItem())
			};
		})), A(this, "slotData", o(() => ({
			...this.bindsControl.value,
			open: this.status.open,
			binds: this.bindsControl.value
		}))), A(this, "role", o(() => this.props.interactive ? "region" : "tooltip")), this.props = i, this.refs = a, this.element = s, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = p;
		let { ArrowIncludeConstructor: h = r, DescriptionIncludeConstructor: g = n, LabelIncludeConstructor: _ = e, TooltipClassesConstructor: v = j, TooltipEventConstructor: y = I, TooltipOpenConstructor: b = F, TooltipPositionConstructor: x = P, TooltipStatusConstructor: S = N, TooltipStyleConstructor: C = M } = m == null ? {} : m;
		this.classes = new v(this.className), this.style = new C(this.element, this.className), this.status = new S(this.props, this.slots), this.position = new x(this.props, this.element, this.classes, this.style), this.open = new b(this.props, this.refs, this.style, this.status, this.position), this.event = new y(this.props, this.classes, this.style, this.status, this.open), this.arrow = new h(this.props, this.className, this.components, this.classes.getSelectorControl()), this.label = new _(this.props, this.className, void 0, this.slots), this.description = new g(this.props, this.className, this.slots), f(() => {
			this.open.eventStop();
		});
	}
}, R = {
	indent: 4,
	delay: 64,
	delayHide: 0,
	interactive: !0
}, z = class extends _ {
	constructor(e, t, n, r = L) {
		super(e, t, n), A(this, "item"), A(this, "renderControl", () => [this.initSlot("control", void 0, this.item.slotData.value)]), A(this, "renderTooltip", () => {
			var e;
			if (this.item.status.isShow.value) {
				let t = [
					...this.item.label.render(),
					...this.item.description.render(),
					...this.renderBody()
				];
				this.item.status.isArray.value && t.push(...this.item.arrow.render());
				let n = l("div", {
					ref: this.element,
					class: (e = this.classes) == null ? void 0 : e.value.main,
					...this.item.binds.value
				}, t);
				return this.props.embedded ? [n] : [l(a, {
					key: "teleport",
					to: "body"
				}, n)];
			}
			return [];
		}), A(this, "renderBody", () => this.slots && "body" in this.slots ? [this.initSlot("body")] : []), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { toggle: this.item.open.toggle };
	}
	initClasses() {
		return {
			main: {},
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			body: this.getSubClass("body")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		return [...this.renderControl(), ...this.renderTooltip()];
	}
}, B = { maxWidth: [
	"sm",
	"md",
	"lg"
] }, V = {
	...R,
	interactive: !0,
	maxWidth: "md"
}, H = /* @__PURE__ */ c({
	name: "D1Tooltip",
	__name: "D1Tooltip",
	props: /* @__PURE__ */ u({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		arrowShow: { type: Boolean },
		arrowPosition: {},
		arrowAttrs: {},
		open: { type: Boolean },
		disabled: { type: Boolean },
		inDom: { type: Boolean },
		top: { type: Boolean },
		indent: {},
		delay: {},
		delayHide: {},
		embedded: { type: Boolean },
		interactive: { type: Boolean },
		maxWidth: {}
	}, V),
	emits: ["tooltip"],
	setup(e, { expose: t, emit: n }) {
		let r = n, a = e, c = new z("d1.tooltip", a, {
			emits: r,
			classes: o(() => ({ main: {
				"d1-tooltip": !0,
				"d1-tooltip--interactive": a.interactive,
				"d1-tooltip--embedded": a.embedded,
				[`d1-tooltip--maxWidth--${a.maxWidth}`]: x(B.maxWidth, a.maxWidth)
			} })),
			styles: o(() => ({})),
			components: { arrow: i }
		}), l = c.render();
		return t(c.expose()), (e, t) => (p(), s(h(l)));
	}
});
//#endregion
export { D as n, H as t };

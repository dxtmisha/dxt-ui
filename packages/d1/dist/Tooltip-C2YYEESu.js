import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./LabelInclude-B8iRBQY--SmRMVprf.js";
import { t as r } from "./DescriptionInclude-DuvOVxTq-DAPoAV3k.js";
import { n as i, t as a } from "./Arrow-B9qdU8dU.js";
import { Teleport as o, computed as s, createBlock as c, defineComponent as l, h as u, mergeDefaults as d, nextTick as f, onUnmounted as p, openBlock as m, ref as h, unref as g, watch as _ } from "vue";
import { DesignConstructorAbstract as v, EventItem as y, getElementId as b, getRef as x, inArray as S, isDomRuntime as C, toBinds as w } from "@dxtmisha/functional";
//#region ../constructor/dist/TooltipInclude-DRxZeDF9.js
var T = class {
	constructor(t, n, r, i, a) {
		e(this, "element", h()), e(this, "binds", s(() => w(x(this.extra), this.props.tooltipAttrs, {
			ref: this.element,
			class: `${this.className}__tooltip`
		}))), e(this, "render", (e) => this.components ? this.components.render("tooltip", this.binds.value, e, this.index) : []), this.props = t, this.className = n, this.components = r, this.extra = i, this.index = a;
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
}, E = class {
	constructor(t) {
		e(this, "id", `tooltip--${b()}`), e(this, "idItem", `tooltip--${b()}-item`), this.className = t;
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
		if (C()) {
			var e;
			return (e = document.querySelector(this.getSelectorControl())) == null ? void 0 : e;
		}
	}
	findControlByTarget(e) {
		var t;
		return (t = e.closest(this.getSelectorControl())) == null ? void 0 : t;
	}
}, D = class {
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
}, O = class {
	constructor(t, n) {
		e(this, "open", h(!1)), e(this, "show", h(!1)), e(this, "preparation", h(!1)), e(this, "isText", s(() => !this.props.disabled && !!(this.props.label || this.props.description || this.slots && ("default" in this.slots || "description" in this.slots || "body" in this.slots)))), e(this, "isShow", s(() => !!(this.show.value || this.open.value || this.props.inDom) && this.isText.value)), e(this, "isArray", s(() => !!(this.props.arrowShow && this.preparation.value))), this.props = t, this.slots = n;
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
}, k = class {
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
}, A = class {
	constructor(t, n, r, i, a, o) {
		e(this, "timeout", void 0), e(this, "timeoutHide", void 0), e(this, "timeoutTo", void 0), e(this, "event", void 0), e(this, "toggle", async (e, t) => {
			this.status.isText.value && !this.status.isMatch(e) && (clearTimeout(this.timeout), clearTimeout(this.timeoutHide), e ? (this.status.setOpen(e), this.status.setShow(!0), await f(), this.position.update(), this.status.setPreparation(!0), await f(), requestAnimationFrame(() => {
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
		}), e(this, "onScroll", () => this.toggle(!1, !0)), this.props = t, this.style = r, this.status = i, this.position = a, this.emits = o, this.event = new y(window, ["scroll-sync"], this.onScroll), _([n.open], () => {
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
}, j = class {
	constructor(t, n, r, i, a) {
		e(this, "next", !1), e(this, "timeout", void 0), e(this, "onClick", () => {
			this.isNotEmbedded() && requestAnimationFrame(async () => {
				this.next || (clearTimeout(this.timeout), await this.open.toggle(!this.status.open.value, !0), this.next = !1);
			});
		}), e(this, "onMouseover", ({ target: e }) => {
			this.isNotEmbedded() && (clearTimeout(this.timeout), this.next = !0, requestAnimationFrame(async () => {
				await this.open.toggle(!!this.classes.findControlByTarget(e)), this.timeout = setTimeout(() => {
					this.next = !1;
				}, 640);
			}));
		}), e(this, "onMouseoverTooltip", () => {
			this.open.noHide();
		}), e(this, "onMouseout", ({ relatedTarget: e }) => {
			this.isNotEmbedded() && e && this.open.toggle(!!this.classes.findControlByTarget(e)).then();
		}), e(this, "onTransitionend", (e) => {
			e.propertyName === "transform" && this.status.open.value && this.style.setMove(!0);
		}), this.props = t, this.classes = n, this.style = r, this.status = i, this.open = a;
	}
	isNotEmbedded() {
		return !this.props.embedded;
	}
}, M = class {
	constructor(a, o, c, l, u, d, f, m, h) {
		e(this, "classes", void 0), e(this, "style", void 0), e(this, "status", void 0), e(this, "position", void 0), e(this, "open", void 0), e(this, "event", void 0), e(this, "arrow", void 0), e(this, "label", void 0), e(this, "description", void 0), e(this, "binds", s(() => ({
			id: this.classes.getIdItem(),
			onMouseover: this.event.onMouseoverTooltip,
			onMouseout: this.event.onMouseout,
			onTransitionend: this.event.onTransitionend,
			...t.role(this.role.value),
			...t.labelledby(this.label.id.value),
			...t.describedby(this.description.id.value)
		}))), e(this, "bindsControl", s(() => {
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
		})), e(this, "slotData", s(() => ({
			...this.bindsControl.value,
			open: this.status.open,
			binds: this.bindsControl.value
		}))), e(this, "role", s(() => this.props.interactive ? "region" : "tooltip")), this.props = a, this.refs = o, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = m;
		let { ArrowIncludeConstructor: g = i, DescriptionIncludeConstructor: _ = r, LabelIncludeConstructor: v = n, TooltipClassesConstructor: y = E, TooltipEventConstructor: b = j, TooltipOpenConstructor: x = A, TooltipPositionConstructor: S = k, TooltipStatusConstructor: C = O, TooltipStyleConstructor: w = D } = h == null ? {} : h;
		this.classes = new y(this.className), this.style = new w(this.element, this.className), this.status = new C(this.props, this.slots), this.position = new S(this.props, this.element, this.classes, this.style), this.open = new x(this.props, this.refs, this.style, this.status, this.position), this.event = new b(this.props, this.classes, this.style, this.status, this.open), this.arrow = new g(this.props, this.className, this.components, this.classes.getSelectorControl()), this.label = new v(this.props, this.className, void 0, this.slots), this.description = new _(this.props, this.className, this.slots), p(() => {
			this.open.eventStop();
		});
	}
}, N = {
	indent: 4,
	delay: 64,
	delayHide: 0,
	interactive: !0
}, P = class extends v {
	constructor(t, n, r, i = M) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderControl", () => [this.initSlot("control", void 0, this.item.slotData.value)]), e(this, "renderTooltip", () => {
			if (this.item.status.isShow.value) {
				var e;
				let t = [
					...this.item.label.render(),
					...this.item.description.render(),
					...this.renderBody()
				];
				this.item.status.isArray.value && t.push(...this.item.arrow.render());
				let n = u("div", {
					ref: this.element,
					class: (e = this.classes) == null ? void 0 : e.value.main,
					...this.item.binds.value
				}, t);
				return this.props.embedded ? [n] : [u(o, {
					key: "teleport",
					to: "body"
				}, n)];
			}
			return [];
		}), e(this, "renderBody", () => this.slots && "body" in this.slots ? [this.initSlot("body")] : []), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, F = { maxWidth: [
	"sm",
	"md",
	"lg"
] }, I = {
	...N,
	interactive: !0,
	maxWidth: "md"
}, L = /* @__PURE__ */ l({
	name: "D1Tooltip",
	__name: "D1Tooltip",
	props: /* @__PURE__ */ d({
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
	}, I),
	emits: ["tooltip"],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, o = new P("d1.tooltip", i, {
			emits: r,
			classes: s(() => ({ main: {
				"d1-tooltip": !0,
				"d1-tooltip--interactive": i.interactive,
				"d1-tooltip--embedded": i.embedded,
				[`d1-tooltip--maxWidth--${i.maxWidth}`]: S(F.maxWidth, i.maxWidth)
			} })),
			styles: s(() => ({})),
			components: { arrow: a }
		}), l = o.render();
		return t(o.expose()), (e, t) => (m(), c(g(l)));
	}
});
//#endregion
export { T as n, L as t };

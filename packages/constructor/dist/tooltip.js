import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-3CuEayIP.js";
import { t as n } from "./LabelInclude-Cj8gJJ29.js";
import { t as r } from "./DescriptionInclude-C011DAIP.js";
import { t as i } from "./ArrowInclude-ClSzi0nW.js";
import { t as a } from "./TooltipInclude-B6pBQ38X.js";
import { Teleport as o, computed as s, h as c, nextTick as l, onUnmounted as u, ref as d, watch as f } from "vue";
import { DesignConstructorAbstract as p, EventItem as m, getElementId as h, isDomRuntime as g } from "@dxtmisha/functional";
//#region src/constructors/Tooltip/TooltipClassesData.ts
var _ = class {
	constructor(e) {
		t(this, "id", `tooltip--${h()}`), t(this, "idItem", `tooltip--${h()}-item`), this.className = e;
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
		if (g()) {
			var e;
			return (e = document.querySelector(this.getSelectorControl())) == null ? void 0 : e;
		}
	}
	findControlByTarget(e) {
		var t;
		return (t = e.closest(this.getSelectorControl())) == null ? void 0 : t;
	}
}, v = class {
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
}, y = class {
	constructor(e, n) {
		t(this, "open", d(!1)), t(this, "show", d(!1)), t(this, "preparation", d(!1)), t(this, "isText", s(() => !this.props.disabled && !!(this.props.label || this.props.description || this.slots && ("default" in this.slots || "description" in this.slots || "body" in this.slots)))), t(this, "isShow", s(() => !!(this.show.value || this.open.value || this.props.inDom) && this.isText.value)), t(this, "isArray", s(() => !!(this.props.arrowShow && this.preparation.value))), this.props = e, this.slots = n;
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
}, b = class {
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
}, x = class {
	constructor(e, n, r, i, a, o) {
		t(this, "timeout", void 0), t(this, "timeoutHide", void 0), t(this, "timeoutTo", void 0), t(this, "event", void 0), t(this, "toggle", async (e, t) => {
			this.status.isText.value && !this.status.isMatch(e) && (clearTimeout(this.timeout), clearTimeout(this.timeoutHide), e ? (this.status.setOpen(e), this.status.setShow(!0), await l(), this.position.update(), this.status.setPreparation(!0), await l(), requestAnimationFrame(() => {
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
		}), t(this, "onScroll", () => this.toggle(!1, !0)), this.props = e, this.style = r, this.status = i, this.position = a, this.emits = o, this.event = new m(window, ["scroll-sync"], this.onScroll), f([n.open], () => {
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
}, S = class {
	constructor(e, n, r, i, a) {
		t(this, "next", !1), t(this, "timeout", void 0), t(this, "onClick", () => {
			this.isNotEmbedded() && requestAnimationFrame(async () => {
				this.next || (clearTimeout(this.timeout), await this.open.toggle(!this.status.open.value, !0), this.next = !1);
			});
		}), t(this, "onMouseover", ({ target: e }) => {
			this.isNotEmbedded() && (clearTimeout(this.timeout), this.next = !0, requestAnimationFrame(async () => {
				await this.open.toggle(!!this.classes.findControlByTarget(e)), this.timeout = setTimeout(() => {
					this.next = !1;
				}, 640);
			}));
		}), t(this, "onMouseoverTooltip", () => {
			this.open.noHide();
		}), t(this, "onMouseout", ({ relatedTarget: e }) => {
			this.isNotEmbedded() && e && this.open.toggle(!!this.classes.findControlByTarget(e)).then();
		}), t(this, "onTransitionend", (e) => {
			e.propertyName === "transform" && this.status.open.value && this.style.setMove(!0);
		}), this.props = e, this.classes = n, this.style = r, this.status = i, this.open = a;
	}
	isNotEmbedded() {
		return !this.props.embedded;
	}
}, C = class {
	constructor(a, o, c, l, d, f, p, m, h) {
		t(this, "classes", void 0), t(this, "style", void 0), t(this, "status", void 0), t(this, "position", void 0), t(this, "open", void 0), t(this, "event", void 0), t(this, "arrow", void 0), t(this, "label", void 0), t(this, "description", void 0), t(this, "binds", s(() => ({
			id: this.classes.getIdItem(),
			onMouseover: this.event.onMouseoverTooltip,
			onMouseout: this.event.onMouseout,
			onTransitionend: this.event.onTransitionend,
			...e.role(this.role.value),
			...e.labelledby(this.label.id.value),
			...e.describedby(this.description.id.value)
		}))), t(this, "bindsControl", s(() => {
			let t = {
				class: this.classes.getControl(),
				onclick: this.event.onClick,
				onmouseover: this.event.onMouseover,
				onmouseout: this.event.onMouseout
			};
			return this.props.interactive ? {
				...t,
				...e.expanded(this.status.open.value),
				...e.controls(this.classes.getIdItem())
			} : {
				...t,
				...e.describedby(this.classes.getIdItem())
			};
		})), t(this, "slotData", s(() => ({
			...this.bindsControl.value,
			open: this.status.open,
			binds: this.bindsControl.value
		}))), t(this, "role", s(() => this.props.interactive ? "region" : "tooltip")), this.props = a, this.refs = o, this.element = c, this.classDesign = l, this.className = d, this.components = f, this.slots = p, this.emits = m;
		let { ArrowIncludeConstructor: g = i, DescriptionIncludeConstructor: C = r, LabelIncludeConstructor: w = n, TooltipClassesConstructor: T = _, TooltipEventConstructor: E = S, TooltipOpenConstructor: D = x, TooltipPositionConstructor: O = b, TooltipStatusConstructor: k = y, TooltipStyleConstructor: A = v } = h == null ? {} : h;
		this.classes = new T(this.className), this.style = new A(this.element, this.className), this.status = new k(this.props, this.slots), this.position = new O(this.props, this.element, this.classes, this.style), this.open = new D(this.props, this.refs, this.style, this.status, this.position), this.event = new E(this.props, this.classes, this.style, this.status, this.open), this.arrow = new g(this.props, this.className, this.components, this.classes.getSelectorControl()), this.label = new w(this.props, this.className, void 0, this.slots), this.description = new C(this.props, this.className, this.slots), u(() => {
			this.open.eventStop();
		});
	}
}, w = {
	indent: 4,
	delay: 64,
	delayHide: 0,
	interactive: !0
}, T = class extends p {
	constructor(e, n, r, i = C) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderControl", () => [this.initSlot("control", void 0, this.item.slotData.value)]), t(this, "renderTooltip", () => {
			if (this.item.status.isShow.value) {
				var e;
				let t = [
					...this.item.label.render(),
					...this.item.description.render(),
					...this.renderBody()
				];
				this.item.status.isArray.value && t.push(...this.item.arrow.render());
				let n = c("div", {
					ref: this.element,
					class: (e = this.classes) == null ? void 0 : e.value.main,
					...this.item.binds.value
				}, t);
				return this.props.embedded ? [n] : [c(o, {
					key: "teleport",
					to: "body"
				}, n)];
			}
			return [];
		}), t(this, "renderBody", () => this.slots && "body" in this.slots ? [this.initSlot("body")] : []), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
};
//#endregion
export { C as Tooltip, _ as TooltipClassesData, T as TooltipDesign, S as TooltipEvent, a as TooltipInclude, x as TooltipOpen, b as TooltipPosition, y as TooltipStatus, v as TooltipStyle, w as defaultsTooltip };

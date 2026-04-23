import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./TextInclude-CxKbWYnf.js";
import { t as r } from "./ProgressInclude-s_LoNLLB.js";
import { t as i } from "./EnabledInclude-C3Rd0qtt.js";
import { t as a } from "./EventClickInclude-DWAJ7AtL.js";
import { t as o } from "./SkeletonInclude-Cu6l1Y1l.js";
import { t as s } from "./IconTrailingInclude-Ah9_79p9.js";
import { t as c } from "./CaptionInclude-lXYzYAMv.js";
import { t as l } from "./FieldMessageInclude-Dg2I1nxA.js";
import { n as u, t as d } from "./SuffixInclude-AwFujZPU.js";
import { t as f } from "./FieldLabelInclude-C6yav_bF.js";
import { t as p } from "./FieldInclude-B2acjP_U.js";
import { computed as m, h, onMounted as g, onUnmounted as _, onUpdated as v, watch as y } from "vue";
import { DesignConstructorAbstract as b, EventItem as x, getElementId as S, isDomRuntime as C, isString as w } from "@dxtmisha/functional";
//#region src/constructors/Field/FieldIcons.ts
var T = class {
	constructor(e, n, r) {
		t(this, "isArrow", m(() => !!((this.props.arrowCarousel || this.props.arrowStepper) && !this.props.disabled))), t(this, "isCancel", m(() => !!(this.props.cancel && !this.props.readonly && !this.props.disabled && !this.props.arrowCarousel && !this.props.arrowStepper && (this.props.cancel === "auto" && this.props.cancelShow || this.props.cancel === "always")))), t(this, "cancelBind", m(() => ({
			class: `${this.className}__cancel`,
			icon: this.props.iconClose,
			dynamic: !0,
			"data-event-type": "cancel",
			ariaLabel: this.text.cancel.value
		}))), t(this, "previousBind", m(() => ({
			class: `${this.className}__previous`,
			icon: this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
			disabled: this.props.disabled || this.props.disabledPrevious,
			dynamic: !0,
			"data-event-type": "previous",
			ariaLabel: this.props.arrowCarousel ? this.text.previous.value : this.text.decrement.value
		}))), t(this, "nextBind", m(() => ({
			class: `${this.className}__next`,
			icon: this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
			disabled: this.props.disabled || this.props.disabledNext,
			dynamic: !0,
			"data-event-type": "next",
			ariaLabel: this.props.arrowCarousel ? this.text.next.value : this.text.increment.value
		}))), this.props = e, this.className = n, this.text = r;
	}
}, E = class {
	constructor(e, n) {
		t(this, "left", 0), t(this, "right", 0), t(this, "title", 0), t(this, "event", void 0), t(this, "update", (e = 128) => {
			requestAnimationFrame(() => {
				var t, n;
				let r = this.getElementSpace(), i = this.getElementPrefix();
				if (r) {
					var a, o;
					this.left = r.offsetLeft, this.right = ((a = (o = r.parentElement) == null ? void 0 : o.offsetWidth) == null ? 0 : a) - this.left - r.offsetWidth;
				}
				this.title = (t = (n = i == null ? void 0 : i.offsetLeft) == null ? r == null ? void 0 : r.offsetLeft : n) == null ? 0 : t, this.left < 0 ? this.update(e - 1) : this.make();
			});
		}), this.element = e, this.className = n, y(e, () => this.update, { immediate: !0 }), C() && (this.event = new x(window, "resize", () => this.update()), _(() => {
			var e;
			return (e = this.event) == null ? void 0 : e.stop();
		})), g(this.update), v(this.update);
	}
	getElementSpace() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.className}__body__scoreboard__space`)) == null ? void 0 : e;
	}
	getElementPrefix() {
		var e, t;
		return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`.${this.className}__prefix`)) == null ? void 0 : e;
	}
	make() {
		let e = this.element.value;
		e && (e.style.setProperty(`--${this.className}-sys-left`, `${this.left}px`), e.style.setProperty(`--${this.className}-sys-right`, `${this.right}px`), e.style.setProperty(`--${this.className}-sys-title`, `${this.title}px`), e.classList.contains(`${this.className}--show`) || requestAnimationFrame(() => e.classList.add(`${this.className}--show`)));
	}
}, D = class {
	constructor(p, h, g, _, v, y, b, x, C) {
		t(this, "text", void 0), t(this, "icon", void 0), t(this, "caption", void 0), t(this, "prefix", void 0), t(this, "suffix", void 0), t(this, "fieldLabel", void 0), t(this, "fieldMessage", void 0), t(this, "progress", void 0), t(this, "enabled", void 0), t(this, "event", void 0), t(this, "skeleton", void 0), t(this, "icons", void 0), t(this, "size", void 0), t(this, "isClassic", m(() => !!(this.props.classic && !this.props.basic && !this.props.boxed && !this.props.filled && !this.props.outlined && !this.props.tonal))), t(this, "isValidation", m(() => !!(this.props.validationMessage && (this.props.forceShowMessage || !this.props.readonly && !this.props.disabled)))), t(this, "id", m(() => String(this.props.id || S()))), t(this, "classes", m(() => ({
			[`${this.className}--cancel`]: this.icons.isCancel.value,
			[`${this.className}--suffix`]: this.props.suffix,
			[`${this.className}--validation`]: this.isValidation.value
		}))), t(this, "control", m(() => {
			let t = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
			return {
				id: this.id.value,
				className: t,
				classHidden: `${this.className}__body__hidden`,
				classForFocus: `${this.className}__body__focus`,
				binds: {
					id: this.id.value,
					class: t,
					...e.invalid(this.isValidation.value),
					...e.describedby(this.getDescribedby())
				}
			};
		})), this.props = p, this.refs = h, this.element = g, this.classDesign = _, this.className = v, this.components = y, this.slots = b, this.emits = x;
		let { CaptionIncludeConstructor: w = c, EnabledIncludeConstructor: D = i, EventClickIncludeConstructor: O = a, FieldIconsConstructor: k = T, FieldLabelIncludeConstructor: A = f, FieldMessageIncludeConstructor: j = l, FieldSizeConstructor: M = E, IconTrailingIncludeConstructor: N = s, PrefixIncludeConstructor: P = u, ProgressIncludeConstructor: F = r, SkeletonIncludeConstructor: I = o, SuffixIncludeConstructor: L = d, TextIncludeConstructor: R = n } = C == null ? {} : C;
		this.skeleton = new I(this.props, this.classDesign, ["classBackground"]), this.icon = new N(this.props, this.className, this.components), this.text = new R(this.props), this.caption = new w(this.props, this.className, this.slots), this.prefix = new P(this.props, this.className, this.slots), this.suffix = new L(this.props, this.className, this.slots), this.fieldLabel = new A(this.props, this.className, this.components, this.slots, this.id, this.refs.counterTop, this.skeleton.binds), this.fieldMessage = new j(this.props, this.className, this.components, void 0, m(() => !this.props.counterTop), this.skeleton.binds), this.progress = new F(this.props, this.className, this.components, {
			circular: !0,
			position: "static",
			dense: !0
		}), this.enabled = new D(this.props, this.progress), this.event = new O(this.props, this.enabled, this.emits), this.icons = new k(this.props, this.className, this.text), this.size = new M(this.element, this.className);
	}
	getDescribedby() {
		return [
			this.prefix.describedby.value,
			this.suffix.describedby.value,
			this.fieldLabel.id.value,
			this.fieldMessage.id.value
		].join(" ").trim();
	}
}, O = {
	arrowAlign: "right",
	cancel: "auto"
}, k = class extends b {
	constructor(e, n, r, i = D) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderBody", () => {
			var e;
			let t = [
				this.initSlot("default", void 0, this.item.control.value),
				this.renderBodyLabel(),
				this.renderBodyScoreboard(),
				this.renderBodyBorder()
			];
			return [h("span", {
				class: [(e = this.classes) == null ? void 0 : e.value.body, this.item.skeleton.classes.value],
				...this.item.event.binds
			}, t)];
		}), t(this, "renderBodyLabel", () => {
			var e, t, n;
			let r = [this.props.label];
			if (this.props.required) {
				var i;
				r.push(h("span", { class: (i = this.classes) == null ? void 0 : i.value.required }));
			}
			return h("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyTitle }, h("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyTitleLabel }, h("span", { class: (n = this.classes) == null ? void 0 : n.value.bodyTitleLabelText }, r)));
		}), t(this, "renderBodyScoreboard", () => {
			var e;
			let t = [
				...this.renderBodyScoreboardSlot(),
				...this.renderBodyScoreboardIcon(),
				...this.item.prefix.render(),
				...this.item.suffix.render(),
				...this.item.progress.render(),
				...this.renderBodyScoreboardSpace()
			];
			return h("span", {
				class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboard,
				"data-element": "scoreboard"
			}, t);
		}), t(this, "renderBodyScoreboardSlot", () => {
			let e = [];
			if (this.slots) {
				if ("leading" in this.slots) {
					var t;
					e.push(h("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboardLeft }, this.initSlot("leading")));
				}
				if ("trailing" in this.slots) {
					var n;
					e.push(h("span", { class: (n = this.classes) == null ? void 0 : n.value.bodyScoreboardRight }, this.initSlot("trailing")));
				}
			}
			return e;
		}), t(this, "renderBodyScoreboardIcon", () => {
			let e = [...this.item.icon.render()];
			return this.item.icons.isCancel.value && this.components.renderAdd(e, "icon", this.item.icons.cancelBind.value, void 0, "cancel"), this.item.icons.isArrow.value && (this.components.renderAdd(e, "icon", this.item.icons.previousBind.value, void 0, "previous"), this.components.renderAdd(e, "icon", this.item.icons.nextBind.value, void 0, "next")), e;
		}), t(this, "renderBodyScoreboardSpace", () => {
			var e;
			let t = [];
			if (this.item.caption.is.value) {
				var n;
				t.push(h("span", {
					class: (n = this.classes) == null ? void 0 : n.value.bodyScoreboardInput,
					style: `min-width: ${this.lengthValue()};`
				}, this.focusValue()), ...this.item.caption.render());
			}
			return [h("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboardSpace }, t)];
		}), t(this, "renderBodyBorder", () => {
			var e;
			return h("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyBorder });
		}), t(this, "focusValue", () => !this.lengthElement.value && w(this.props.value) ? this.props.value : ""), t(this, "lengthValue", () => {
			if (this.lengthElement.value) return `${this.lengthElement.value.offsetWidth}px`;
		}), t(this, "lengthElement", m(() => {
			var e, t;
			return (e = (t = this.element.value) == null ? void 0 : t.querySelector("*[data-length]")) == null ? void 0 : e;
		})), t(this, "inputElement", m(() => {
			var e, t, n, r;
			return (e = (t = this.element.value) == null ? void 0 : t.querySelector(`input.${(n = this.classes) == null ? void 0 : n.value.bodyInput}, .${(r = this.classes) == null ? void 0 : r.value.bodyInput} input`)) == null ? void 0 : e;
		})), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			body: this.getSubClass("body"),
			bodyInput: this.getSubClass("body__input"),
			bodyTitle: this.getSubClass("body__title"),
			bodyTitleLabel: this.getSubClass("body__title__label"),
			bodyTitleLabelText: this.getSubClass("body__title__label__text"),
			bodyScoreboard: this.getSubClass("body__scoreboard"),
			bodyScoreboardLeft: this.getSubClass("body__scoreboard__left"),
			bodyScoreboardRight: this.getSubClass("body__scoreboard__right"),
			bodyScoreboardSpace: this.getSubClass("body__scoreboard__space"),
			bodyScoreboardInput: this.getSubClass("body__scoreboard__input"),
			bodyBorder: this.getSubClass("body__border"),
			required: this.getSubClass("required")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e, t;
		let n = [];
		return this.item.isClassic.value && n.push(...this.item.fieldLabel.render()), n.push(...this.renderBody(), ...this.item.fieldMessage.render()), h(this.item.isClassic.value ? "div" : "label", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			for: this.item.isClassic.value ? void 0 : this.item.id.value
		}, n);
	}
};
//#endregion
export { D as Field, k as FieldDesign, T as FieldIcons, p as FieldInclude, E as FieldSize, O as defaultsField };

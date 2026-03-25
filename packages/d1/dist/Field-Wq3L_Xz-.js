import { n as e, r as t } from "./D1Icon-BnpmOB4B.js";
import { t as n } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as r } from "./CaptionInclude-CohAZRI2-CCdFbTIH.js";
import { t as i } from "./EnabledInclude-B9oXYBtR-BRVL93PD.js";
import { t as a } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { n as o } from "./D1Progress-CD6wYH0x.js";
import { t as s } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { t as c } from "./Icon-9c2pxWjK.js";
import { n as l, t as u } from "./FieldMessage-PsVibJjx.js";
import { t as d } from "./Progress-LN--cv5q.js";
import { n as f, t as p } from "./SuffixInclude-maZ7235l-DUaOLLEU.js";
import { n as m, t as h } from "./FieldLabel-CsFqrS64.js";
import { computed as g, createBlock as _, defineComponent as v, h as y, mergeDefaults as b, onMounted as x, onUnmounted as S, onUpdated as C, openBlock as w, unref as T, watch as E } from "vue";
import { DesignConstructorAbstract as D, EventItem as O, getElementId as k, inArray as A, isDomRuntime as j, isFilled as M, isString as N } from "@dxtmisha/functional";
//#region ../constructor/dist/field.js
var P = Object.defineProperty, F = (e, t, n) => t in e ? P(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, I = (e, t, n) => F(e, typeof t == "symbol" ? t : t + "", n), L = class {
	constructor(e, t, n) {
		I(this, "isArrow", g(() => !!((this.props.arrowCarousel || this.props.arrowStepper) && !this.props.disabled))), I(this, "isCancel", g(() => !!(this.props.cancel && !this.props.readonly && !this.props.disabled && !this.props.arrowCarousel && !this.props.arrowStepper && (this.props.cancel === "auto" && this.props.cancelShow || this.props.cancel === "always")))), I(this, "cancelBind", g(() => ({
			class: `${this.className}__cancel`,
			icon: this.props.iconClose,
			dynamic: !0,
			"data-event-type": "cancel",
			ariaLabel: this.text.cancel.value
		}))), I(this, "previousBind", g(() => ({
			class: `${this.className}__previous`,
			icon: this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
			disabled: this.props.disabled || this.props.disabledPrevious,
			dynamic: !0,
			"data-event-type": "previous",
			ariaLabel: this.props.arrowCarousel ? this.text.previous.value : this.text.decrement.value
		}))), I(this, "nextBind", g(() => ({
			class: `${this.className}__next`,
			icon: this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
			disabled: this.props.disabled || this.props.disabledNext,
			dynamic: !0,
			"data-event-type": "next",
			ariaLabel: this.props.arrowCarousel ? this.text.next.value : this.text.increment.value
		}))), this.props = e, this.className = t, this.text = n;
	}
}, R = class {
	constructor(e, t) {
		I(this, "left", 0), I(this, "right", 0), I(this, "title", 0), I(this, "event"), I(this, "update", (e = 128) => {
			requestAnimationFrame(() => {
				var t, n, r, i;
				let a = this.getElementSpace(), o = this.getElementPrefix();
				a && (this.left = a.offsetLeft, this.right = ((n = (t = a.parentElement) == null ? void 0 : t.offsetWidth) == null ? 0 : n) - this.left - a.offsetWidth), this.title = (i = (r = o == null ? void 0 : o.offsetLeft) == null ? a == null ? void 0 : a.offsetLeft : r) == null ? 0 : i, this.left < 0 ? this.update(e - 1) : this.make();
			});
		}), this.element = e, this.className = t, E(e, () => this.update, { immediate: !0 }), j() && (this.event = new O(window, "resize", () => this.update()), S(() => {
			var e;
			return (e = this.event) == null ? void 0 : e.stop();
		})), x(this.update), C(this.update);
	}
	getElementSpace() {
		var e, t;
		return (t = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__body__scoreboard__space`)) == null ? void 0 : t;
	}
	getElementPrefix() {
		var e, t;
		return (t = (e = this.element.value) == null ? void 0 : e.querySelector(`.${this.className}__prefix`)) == null ? void 0 : t;
	}
	make() {
		let e = this.element.value;
		e && (e.style.setProperty(`--${this.className}-sys-left`, `${this.left}px`), e.style.setProperty(`--${this.className}-sys-right`, `${this.right}px`), e.style.setProperty(`--${this.className}-sys-title`, `${this.title}px`), e.classList.contains(`${this.className}--show`) || requestAnimationFrame(() => e.classList.add(`${this.className}--show`)));
	}
}, z = class {
	constructor(c, u, d, h, _, v, y, b, x) {
		I(this, "text"), I(this, "icon"), I(this, "caption"), I(this, "prefix"), I(this, "suffix"), I(this, "fieldLabel"), I(this, "fieldMessage"), I(this, "progress"), I(this, "enabled"), I(this, "event"), I(this, "skeleton"), I(this, "icons"), I(this, "size"), I(this, "isClassic", g(() => !!(this.props.classic && !this.props.basic && !this.props.boxed && !this.props.filled && !this.props.outlined && !this.props.tonal))), I(this, "isValidation", g(() => !!(this.props.validationMessage && (this.props.forceShowMessage || !this.props.readonly && !this.props.disabled)))), I(this, "id", g(() => String(this.props.id || k()))), I(this, "classes", g(() => ({
			[`${this.className}--cancel`]: this.icons.isCancel.value,
			[`${this.className}--suffix`]: this.props.suffix,
			[`${this.className}--validation`]: this.isValidation.value
		}))), I(this, "control", g(() => {
			let e = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
			return {
				id: this.id.value,
				className: e,
				classHidden: `${this.className}__body__hidden`,
				classForFocus: `${this.className}__body__focus`,
				binds: {
					id: this.id.value,
					class: e,
					...n.invalid(this.isValidation.value),
					...n.describedby(this.getDescribedby())
				}
			};
		})), this.props = c, this.refs = u, this.element = d, this.classDesign = h, this.className = _, this.components = v, this.slots = y, this.emits = b;
		let { CaptionIncludeConstructor: S = r, EnabledIncludeConstructor: C = i, EventClickIncludeConstructor: w = t, FieldIconsConstructor: T = L, FieldLabelIncludeConstructor: E = m, FieldMessageIncludeConstructor: D = l, FieldSizeConstructor: O = R, IconTrailingIncludeConstructor: A = e, PrefixIncludeConstructor: j = p, ProgressIncludeConstructor: M = o, SkeletonIncludeConstructor: N = a, SuffixIncludeConstructor: P = f, TextIncludeConstructor: F = s } = x == null ? {} : x;
		this.skeleton = new N(this.props, this.classDesign, ["classBackground"]), this.icon = new A(this.props, this.className, this.components), this.text = new F(this.props), this.caption = new S(this.props, this.className, this.slots), this.prefix = new j(this.props, this.className, this.slots), this.suffix = new P(this.props, this.className, this.slots), this.fieldLabel = new E(this.props, this.className, this.components, this.slots, this.id, this.refs.counterTop, this.skeleton.binds), this.fieldMessage = new D(this.props, this.className, this.components, void 0, g(() => !this.props.counterTop), this.skeleton.binds), this.progress = new M(this.props, this.className, this.components, {
			circular: !0,
			position: "static",
			dense: !0
		}), this.enabled = new C(this.props, this.progress), this.event = new w(this.props, this.enabled, this.emits), this.icons = new T(this.props, this.className, this.text), this.size = new O(this.element, this.className);
	}
	getDescribedby() {
		return [
			this.prefix.describedby.value,
			this.suffix.describedby.value,
			this.fieldLabel.id.value,
			this.fieldMessage.id.value
		].join(" ").trim();
	}
}, B = {
	arrowAlign: "right",
	cancel: "auto"
}, V = class extends D {
	constructor(e, t, n, r = z) {
		super(e, t, n), I(this, "item"), I(this, "renderBody", () => {
			var e;
			let t = [
				this.initSlot("default", void 0, this.item.control.value),
				this.renderBodyLabel(),
				this.renderBodyScoreboard(),
				this.renderBodyBorder()
			];
			return [y("span", {
				class: [(e = this.classes) == null ? void 0 : e.value.body, this.item.skeleton.classes.value],
				...this.item.event.binds
			}, t)];
		}), I(this, "renderBodyLabel", () => {
			var e, t, n, r;
			let i = [this.props.label];
			return this.props.required && i.push(y("span", { class: (e = this.classes) == null ? void 0 : e.value.required })), y("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyTitle }, y("span", { class: (n = this.classes) == null ? void 0 : n.value.bodyTitleLabel }, y("span", { class: (r = this.classes) == null ? void 0 : r.value.bodyTitleLabelText }, i)));
		}), I(this, "renderBodyScoreboard", () => {
			var e;
			let t = [
				...this.renderBodyScoreboardSlot(),
				...this.renderBodyScoreboardIcon(),
				...this.item.prefix.render(),
				...this.item.suffix.render(),
				...this.item.progress.render(),
				...this.renderBodyScoreboardSpace()
			];
			return y("span", {
				class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboard,
				"data-element": "scoreboard"
			}, t);
		}), I(this, "renderBodyScoreboardSlot", () => {
			var e, t;
			let n = [];
			return this.slots && ("leading" in this.slots && n.push(y("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboardLeft }, this.initSlot("leading"))), "trailing" in this.slots && n.push(y("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboardRight }, this.initSlot("trailing")))), n;
		}), I(this, "renderBodyScoreboardIcon", () => {
			let e = [...this.item.icon.render()];
			return this.item.icons.isCancel.value && this.components.renderAdd(e, "icon", this.item.icons.cancelBind.value, void 0, "cancel"), this.item.icons.isArrow.value && (this.components.renderAdd(e, "icon", this.item.icons.previousBind.value, void 0, "previous"), this.components.renderAdd(e, "icon", this.item.icons.nextBind.value, void 0, "next")), e;
		}), I(this, "renderBodyScoreboardSpace", () => {
			var e, t;
			let n = [];
			return this.item.caption.is.value && n.push(y("span", {
				class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboardInput,
				style: `min-width: ${this.lengthValue()};`
			}, this.focusValue()), ...this.item.caption.render()), [y("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboardSpace }, n)];
		}), I(this, "renderBodyBorder", () => {
			var e;
			return y("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyBorder });
		}), I(this, "focusValue", () => !this.lengthElement.value && N(this.props.value) ? this.props.value : ""), I(this, "lengthValue", () => {
			if (this.lengthElement.value) return `${this.lengthElement.value.offsetWidth}px`;
		}), I(this, "lengthElement", g(() => {
			var e, t;
			return (t = (e = this.element.value) == null ? void 0 : e.querySelector("*[data-length]")) == null ? void 0 : t;
		})), I(this, "inputElement", g(() => {
			var e, t, n, r;
			return (r = (n = this.element.value) == null ? void 0 : n.querySelector(`input.${(e = this.classes) == null ? void 0 : e.value.bodyInput}, .${(t = this.classes) == null ? void 0 : t.value.bodyInput} input`)) == null ? void 0 : r;
		})), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.item.isClassic.value && n.push(...this.item.fieldLabel.render()), n.push(...this.renderBody(), ...this.item.fieldMessage.render()), y(this.item.isClassic.value ? "div" : "label", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			for: this.item.isClassic.value ? void 0 : this.item.id.value
		}, n);
	}
}, H = {
	arrowAlign: [
		"center",
		"right",
		"left"
	],
	cancel: [
		"auto",
		"always",
		"none"
	],
	align: [
		"center",
		"right",
		"left"
	],
	width: [],
	size: [
		"sm",
		"md",
		"lg",
		"display"
	]
}, U = {
	...B,
	iconArrowLeft: "keyboard_arrow_left",
	iconArrowRight: "keyboard_arrow_right",
	iconPlus: "add",
	iconMinus: "remove",
	iconClose: "close_small",
	classic: !0,
	arrowAlign: "right",
	cancel: "auto",
	size: "md"
}, W = /* @__PURE__ */ v({
	name: "D1Field",
	__name: "D1Field",
	props: /* @__PURE__ */ b({
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		iconTrailing: {},
		iconTrailingTurnOnly: { type: Boolean },
		iconTrailingDirOnly: { type: Boolean },
		iconTrailingPalette: { type: Boolean },
		prefix: {},
		prefixId: {},
		suffix: {},
		suffixId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		label: {},
		labelId: {},
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
		fieldCounterAttrs: {},
		required: { type: Boolean },
		fieldLabelAttrs: {},
		forceShowMessage: { type: Boolean },
		disabled: { type: Boolean },
		helperMessage: {},
		validationMessage: {},
		fieldMessageAttrs: {},
		helperId: {},
		validationId: {},
		loading: { type: [Boolean, Object] },
		readonly: { type: Boolean },
		to: {},
		href: {},
		value: {},
		detail: {},
		isSkeleton: { type: Boolean },
		textCancel: { type: [String, Function] },
		disabledPrevious: { type: Boolean },
		disabledNext: { type: Boolean },
		id: {},
		counterTop: { type: Boolean },
		cancelShow: { type: Boolean },
		iconArrowLeft: {},
		iconArrowRight: {},
		iconPlus: {},
		iconMinus: {},
		iconClose: {},
		focus: { type: Boolean },
		block: { type: Boolean },
		isValue: { type: Boolean },
		basic: { type: Boolean },
		boxed: { type: Boolean },
		tonal: { type: Boolean },
		filled: { type: Boolean },
		outlined: { type: Boolean },
		classic: { type: Boolean },
		arrowCarousel: { type: Boolean },
		arrowStepper: { type: Boolean },
		arrowAlign: {},
		cancel: {},
		align: {},
		width: {},
		size: {}
	}, U),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new V("d1.field", i, {
			emits: r,
			classes: g(() => ({ main: {
				"d1-field": !0,
				"d1-field--focus": i.focus,
				"d1-field--disabled": i.disabled,
				"d1-field--selected": i.selected,
				"d1-field--readonly": i.readonly,
				"d1-field--block": i.block,
				"d1-field--isValue": i.isValue,
				"d1-field--basic": i.basic,
				"d1-field--boxed": i.boxed,
				"d1-field--tonal": i.tonal,
				"d1-field--filled": i.filled,
				"d1-field--outlined": i.outlined,
				"d1-field--classic": i.classic && !i.basic && !i.boxed && !i.tonal && !i.filled && !i.outlined,
				"d1-field--arrowCarousel": i.arrowCarousel,
				"d1-field--arrowStepper": i.arrowStepper,
				[`d1-field--arrowAlign--${i.arrowAlign}`]: A(H.arrowAlign, i.arrowAlign),
				[`d1-field--cancel--${i.cancel}`]: A(H.cancel, i.cancel),
				[`d1-field--align--${i.align}`]: A(H.align, i.align),
				"d1-field--width--custom": M(i.width) && !A(H.width, i.width),
				[`d1-field--size--${i.size}`]: A(H.size, i.size)
			} })),
			styles: g(() => {
				var e;
				return { "--d1-field-sys-width": (e = i.width) == null ? null : e };
			}),
			components: {
				icon: c,
				fieldLabel: h,
				fieldMessage: u,
				progress: d
			},
			compMod: {
				icon: { rounded: "full" },
				iconTrailing: { rounded: "full" },
				cancel: { rounded: "full" },
				previous: { rounded: "full" },
				next: { rounded: "full" }
			}
		}), o = a.render();
		return t(a.expose()), (e, t) => (w(), _(T(o)));
	}
});
//#endregion
export { W as t };

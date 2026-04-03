import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { n as t, r as n } from "./D1Icon-BuvQZC32.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as i } from "./D1Progress-e-cWntWB.js";
import { t as a } from "./EnabledInclude-CkD_lxMY-BsTOj5_d.js";
import { n as o } from "./SkeletonInclude-DCCPPs2e-DKUjLyTK.js";
import { t as s } from "./CaptionInclude-XqCixeva-BtWK89pw.js";
import { t as c } from "./TextInclude-OwyVCAbS-CAlHZ-54.js";
import { t as l } from "./Icon-CSWgvV5r.js";
import { n as u, t as d } from "./FieldMessage-DVVqhB5v.js";
import { t as f } from "./Progress-DSR_WO0S.js";
import { n as p, t as m } from "./SuffixInclude-BtXj8RiG-DcM_giyV.js";
import { n as h, t as g } from "./FieldLabel-CSRiQk8E.js";
import { computed as _, createBlock as v, defineComponent as y, h as b, mergeDefaults as x, onMounted as S, onUnmounted as C, onUpdated as w, openBlock as T, unref as E, watch as D } from "vue";
import { DesignConstructorAbstract as O, EventItem as k, getElementId as A, inArray as j, isDomRuntime as M, isFilled as N, isString as P } from "@dxtmisha/functional";
//#region ../constructor/dist/field.js
var F = class {
	constructor(t, n, r) {
		e(this, "isArrow", _(() => !!((this.props.arrowCarousel || this.props.arrowStepper) && !this.props.disabled))), e(this, "isCancel", _(() => !!(this.props.cancel && !this.props.readonly && !this.props.disabled && !this.props.arrowCarousel && !this.props.arrowStepper && (this.props.cancel === "auto" && this.props.cancelShow || this.props.cancel === "always")))), e(this, "cancelBind", _(() => ({
			class: `${this.className}__cancel`,
			icon: this.props.iconClose,
			dynamic: !0,
			"data-event-type": "cancel",
			ariaLabel: this.text.cancel.value
		}))), e(this, "previousBind", _(() => ({
			class: `${this.className}__previous`,
			icon: this.props.arrowCarousel ? this.props.iconArrowLeft : this.props.iconMinus,
			disabled: this.props.disabled || this.props.disabledPrevious,
			dynamic: !0,
			"data-event-type": "previous",
			ariaLabel: this.props.arrowCarousel ? this.text.previous.value : this.text.decrement.value
		}))), e(this, "nextBind", _(() => ({
			class: `${this.className}__next`,
			icon: this.props.arrowCarousel ? this.props.iconArrowRight : this.props.iconPlus,
			disabled: this.props.disabled || this.props.disabledNext,
			dynamic: !0,
			"data-event-type": "next",
			ariaLabel: this.props.arrowCarousel ? this.text.next.value : this.text.increment.value
		}))), this.props = t, this.className = n, this.text = r;
	}
}, I = class {
	constructor(t, n) {
		e(this, "left", 0), e(this, "right", 0), e(this, "title", 0), e(this, "event", void 0), e(this, "update", (e = 128) => {
			requestAnimationFrame(() => {
				var t, n;
				let r = this.getElementSpace(), i = this.getElementPrefix();
				if (r) {
					var a, o;
					this.left = r.offsetLeft, this.right = ((a = (o = r.parentElement) == null ? void 0 : o.offsetWidth) == null ? 0 : a) - this.left - r.offsetWidth;
				}
				this.title = (t = (n = i == null ? void 0 : i.offsetLeft) == null ? r == null ? void 0 : r.offsetLeft : n) == null ? 0 : t, this.left < 0 ? this.update(e - 1) : this.make();
			});
		}), this.element = t, this.className = n, D(t, () => this.update, { immediate: !0 }), M() && (this.event = new k(window, "resize", () => this.update()), C(() => {
			var e;
			return (e = this.event) == null ? void 0 : e.stop();
		})), S(this.update), w(this.update);
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
}, L = class {
	constructor(l, d, f, g, v, y, b, x, S) {
		e(this, "text", void 0), e(this, "icon", void 0), e(this, "caption", void 0), e(this, "prefix", void 0), e(this, "suffix", void 0), e(this, "fieldLabel", void 0), e(this, "fieldMessage", void 0), e(this, "progress", void 0), e(this, "enabled", void 0), e(this, "event", void 0), e(this, "skeleton", void 0), e(this, "icons", void 0), e(this, "size", void 0), e(this, "isClassic", _(() => !!(this.props.classic && !this.props.basic && !this.props.boxed && !this.props.filled && !this.props.outlined && !this.props.tonal))), e(this, "isValidation", _(() => !!(this.props.validationMessage && (this.props.forceShowMessage || !this.props.readonly && !this.props.disabled)))), e(this, "id", _(() => String(this.props.id || A()))), e(this, "classes", _(() => ({
			[`${this.className}--cancel`]: this.icons.isCancel.value,
			[`${this.className}--suffix`]: this.props.suffix,
			[`${this.className}--validation`]: this.isValidation.value
		}))), e(this, "control", _(() => {
			let e = `${this.className}__body__input ${this.skeleton.classesSkeleton.classText}`;
			return {
				id: this.id.value,
				className: e,
				classHidden: `${this.className}__body__hidden`,
				classForFocus: `${this.className}__body__focus`,
				binds: {
					id: this.id.value,
					class: e,
					...r.invalid(this.isValidation.value),
					...r.describedby(this.getDescribedby())
				}
			};
		})), this.props = l, this.refs = d, this.element = f, this.classDesign = g, this.className = v, this.components = y, this.slots = b, this.emits = x;
		let { CaptionIncludeConstructor: C = s, EnabledIncludeConstructor: w = a, EventClickIncludeConstructor: T = n, FieldIconsConstructor: E = F, FieldLabelIncludeConstructor: D = h, FieldMessageIncludeConstructor: O = u, FieldSizeConstructor: k = I, IconTrailingIncludeConstructor: j = t, PrefixIncludeConstructor: M = m, ProgressIncludeConstructor: N = i, SkeletonIncludeConstructor: P = o, SuffixIncludeConstructor: L = p, TextIncludeConstructor: R = c } = S == null ? {} : S;
		this.skeleton = new P(this.props, this.classDesign, ["classBackground"]), this.icon = new j(this.props, this.className, this.components), this.text = new R(this.props), this.caption = new C(this.props, this.className, this.slots), this.prefix = new M(this.props, this.className, this.slots), this.suffix = new L(this.props, this.className, this.slots), this.fieldLabel = new D(this.props, this.className, this.components, this.slots, this.id, this.refs.counterTop, this.skeleton.binds), this.fieldMessage = new O(this.props, this.className, this.components, void 0, _(() => !this.props.counterTop), this.skeleton.binds), this.progress = new N(this.props, this.className, this.components, {
			circular: !0,
			position: "static",
			dense: !0
		}), this.enabled = new w(this.props, this.progress), this.event = new T(this.props, this.enabled, this.emits), this.icons = new E(this.props, this.className, this.text), this.size = new k(this.element, this.className);
	}
	getDescribedby() {
		return [
			this.prefix.describedby.value,
			this.suffix.describedby.value,
			this.fieldLabel.id.value,
			this.fieldMessage.id.value
		].join(" ").trim();
	}
}, R = {
	arrowAlign: "right",
	cancel: "auto"
}, z = class extends O {
	constructor(t, n, r, i = L) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderBody", () => {
			var e;
			let t = [
				this.initSlot("default", void 0, this.item.control.value),
				this.renderBodyLabel(),
				this.renderBodyScoreboard(),
				this.renderBodyBorder()
			];
			return [b("span", {
				class: [(e = this.classes) == null ? void 0 : e.value.body, this.item.skeleton.classes.value],
				...this.item.event.binds
			}, t)];
		}), e(this, "renderBodyLabel", () => {
			var e, t, n;
			let r = [this.props.label];
			if (this.props.required) {
				var i;
				r.push(b("span", { class: (i = this.classes) == null ? void 0 : i.value.required }));
			}
			return b("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyTitle }, b("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyTitleLabel }, b("span", { class: (n = this.classes) == null ? void 0 : n.value.bodyTitleLabelText }, r)));
		}), e(this, "renderBodyScoreboard", () => {
			var e;
			let t = [
				...this.renderBodyScoreboardSlot(),
				...this.renderBodyScoreboardIcon(),
				...this.item.prefix.render(),
				...this.item.suffix.render(),
				...this.item.progress.render(),
				...this.renderBodyScoreboardSpace()
			];
			return b("span", {
				class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboard,
				"data-element": "scoreboard"
			}, t);
		}), e(this, "renderBodyScoreboardSlot", () => {
			let e = [];
			if (this.slots) {
				if ("leading" in this.slots) {
					var t;
					e.push(b("span", { class: (t = this.classes) == null ? void 0 : t.value.bodyScoreboardLeft }, this.initSlot("leading")));
				}
				if ("trailing" in this.slots) {
					var n;
					e.push(b("span", { class: (n = this.classes) == null ? void 0 : n.value.bodyScoreboardRight }, this.initSlot("trailing")));
				}
			}
			return e;
		}), e(this, "renderBodyScoreboardIcon", () => {
			let e = [...this.item.icon.render()];
			return this.item.icons.isCancel.value && this.components.renderAdd(e, "icon", this.item.icons.cancelBind.value, void 0, "cancel"), this.item.icons.isArrow.value && (this.components.renderAdd(e, "icon", this.item.icons.previousBind.value, void 0, "previous"), this.components.renderAdd(e, "icon", this.item.icons.nextBind.value, void 0, "next")), e;
		}), e(this, "renderBodyScoreboardSpace", () => {
			var e;
			let t = [];
			if (this.item.caption.is.value) {
				var n;
				t.push(b("span", {
					class: (n = this.classes) == null ? void 0 : n.value.bodyScoreboardInput,
					style: `min-width: ${this.lengthValue()};`
				}, this.focusValue()), ...this.item.caption.render());
			}
			return [b("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyScoreboardSpace }, t)];
		}), e(this, "renderBodyBorder", () => {
			var e;
			return b("span", { class: (e = this.classes) == null ? void 0 : e.value.bodyBorder });
		}), e(this, "focusValue", () => !this.lengthElement.value && P(this.props.value) ? this.props.value : ""), e(this, "lengthValue", () => {
			if (this.lengthElement.value) return `${this.lengthElement.value.offsetWidth}px`;
		}), e(this, "lengthElement", _(() => {
			var e, t;
			return (e = (t = this.element.value) == null ? void 0 : t.querySelector("*[data-length]")) == null ? void 0 : e;
		})), e(this, "inputElement", _(() => {
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
		return this.item.isClassic.value && n.push(...this.item.fieldLabel.render()), n.push(...this.renderBody(), ...this.item.fieldMessage.render()), b(this.item.isClassic.value ? "div" : "label", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			for: this.item.isClassic.value ? void 0 : this.item.id.value
		}, n);
	}
}, B = {
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
}, V = {
	...R,
	iconArrowLeft: "keyboard_arrow_left",
	iconArrowRight: "keyboard_arrow_right",
	iconPlus: "add",
	iconMinus: "remove",
	iconClose: "close_small",
	classic: !0,
	arrowAlign: "right",
	cancel: "auto",
	size: "md"
}, H = /* @__PURE__ */ y({
	name: "D1Field",
	__name: "D1Field",
	props: /* @__PURE__ */ x({
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
	}, V),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new z("d1.field", i, {
			emits: r,
			classes: _(() => ({ main: {
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
				[`d1-field--arrowAlign--${i.arrowAlign}`]: j(B.arrowAlign, i.arrowAlign),
				[`d1-field--cancel--${i.cancel}`]: j(B.cancel, i.cancel),
				[`d1-field--align--${i.align}`]: j(B.align, i.align),
				"d1-field--width--custom": N(i.width) && !j(B.width, i.width),
				[`d1-field--size--${i.size}`]: j(B.size, i.size)
			} })),
			styles: _(() => {
				var e;
				return { "--d1-field-sys-width": (e = i.width) == null ? null : e };
			}),
			components: {
				icon: l,
				fieldLabel: g,
				fieldMessage: d,
				progress: f
			},
			compMod: {
				icon: { rounded: "full" },
				iconTrailing: { rounded: "full" },
				cancel: { rounded: "full" },
				previous: { rounded: "full" },
				next: { rounded: "full" }
			}
		}), o = a.render();
		return t(a.expose()), (e, t) => (T(), v(E(o)));
	}
});
//#endregion
export { H as t };

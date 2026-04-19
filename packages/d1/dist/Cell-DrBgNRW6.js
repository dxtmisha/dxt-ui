import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { n as t, r as n, t as r } from "./D1Icon-DdAEP85V.js";
import { t as i } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as a, t as o } from "./D1Progress-NQNmb6zA.js";
import { t as s } from "./EnabledInclude-DziteWbw-Cz2NSO24.js";
import { n as c } from "./SkeletonInclude-Cl99MbTo-Ck2ZjUG7.js";
import { t as l } from "./LabelInclude-B8iRBQY--SmRMVprf.js";
import { t as u } from "./DescriptionInclude-DuvOVxTq-DAPoAV3k.js";
import { t as d } from "./getClassTagAStatic-BPIEWyHY-D7aude4-.js";
import { t as f } from "./CaptionInclude-B8cfV9lX-DoNrrGwR.js";
import { n as p, t as m } from "./D1Ripple-DwFESqu6.js";
import { computed as h, createBlock as g, defineComponent as _, h as v, mergeDefaults as y, openBlock as b, unref as x } from "vue";
import { DesignConstructorAbstract as S, inArray as C } from "@dxtmisha/functional";
//#region ../constructor/dist/cell.js
var w = class {
	constructor(r, i, o, m, g, _, v, y, b) {
		e(this, "progress", void 0), e(this, "skeleton", void 0), e(this, "label", void 0), e(this, "description", void 0), e(this, "caption", void 0), e(this, "enabled", void 0), e(this, "icon", void 0), e(this, "ripple", void 0), e(this, "event", void 0), e(this, "classes", h(() => ({
			[`${this.className}--description`]: this.description.is.value,
			[d(this.classDesign)]: !0
		}))), e(this, "role", h(() => {
			if (this.props.role) return this.props.role;
			if (this.props.dynamic) return "button";
		})), this.props = r, this.refs = i, this.element = o, this.classDesign = m, this.className = g, this.components = _, this.slots = v, this.emits = y;
		let { CaptionConstructor: x = f, DescriptionConstructor: S = u, EnabledConstructor: C = s, EventConstructor: w = n, IconConstructor: T = t, LabelConstructor: E = l, ProgressConstructor: D = a, RippleConstructor: O = p, SkeletonConstructor: k = c } = b == null ? {} : b, A = new D(r, g, _, { position: "bottom" });
		this.skeleton = new k(r, m, ["classTextVariant"]), this.label = new E(r, g, void 0, v, void 0, void 0, void 0, this.skeleton), this.caption = new x(r, g, v), this.description = new S(r, g, v, this.skeleton), this.enabled = new C(r, A), this.icon = new T(r, g, _), this.progress = A, this.ripple = new O(g, _, this.enabled), this.event = new w(r, this.enabled, y);
	}
	getClassesSub() {
		return {
			label: `${this.className}__label`,
			description: `${this.className}__description`,
			caption: `${this.className}__caption`,
			trailing: `${this.className}__trailing`
		};
	}
}, T = {
	tag: "div",
	divider: !0
}, E = class extends S {
	constructor(t, n, r, a = w) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderContext", () => {
			var e;
			return [v("div", {
				key: "context",
				class: (e = this.classes) == null ? void 0 : e.value.context
			}, [
				...this.item.label.render(),
				...this.item.caption.render(),
				...this.item.description.render()
			])];
		}), e(this, "renderTrailing", () => {
			if (this.slots && "trailing" in this.slots) {
				var e;
				return [v("div", {
					key: "trailing",
					class: (e = this.classes) == null ? void 0 : e.value.contextTrailing
				}, this.initSlot("trailing", void 0, this.item.getClassesSub()))];
			}
			return [];
		}), e(this, "renderBody", () => {
			if (this.slots && "body" in this.slots) {
				var e;
				return [v("div", {
					key: "body",
					class: (e = this.classes) == null ? void 0 : e.value.body
				}, this.initSlot("body", void 0, this.item.getClassesSub()))];
			}
			return [];
		}), e(this, "propsMain", h(() => {
			var e;
			let t = {
				...this.getAttrs(),
				class: (e = this.classes) == null ? void 0 : e.value.main,
				"data-value": this.props.value,
				"data-divider": this.props.divider ? "active" : void 0,
				...this.item.event.binds,
				...i.role(this.item.role.value)
			};
			return this.props.dynamic ? {
				...t,
				tabindex: "0"
			} : t;
		})), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.event.expose };
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			context: this.getSubClass("context"),
			contextTrailing: this.getSubClass("contextTrailing"),
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			caption: this.getSubClass("caption"),
			icon: this.getSubClass("icon"),
			trailing: this.getSubClass("trailing"),
			body: this.getSubClass("body"),
			loading: this.getSubClass("loading")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return v((e = this.props.tag) == null ? "div" : e, this.propsMain.value, [
			...this.item.icon.render(),
			...this.renderContext(),
			...this.renderTrailing(),
			...this.renderBody(),
			...this.item.ripple.render(),
			...this.item.progress.render()
		]);
	}
}, D = {
	dividerLabel: [
		"always",
		"none",
		"adaptiveSm",
		"adaptiveMd",
		"adaptiveLg",
		"adaptiveXl",
		"adaptive2xl",
		"containerSm",
		"containerMd",
		"containerLg",
		"containerXl",
		"container2xl"
	],
	padding: [
		"sm",
		"md",
		"lg",
		"ySm",
		"yMd",
		"yLg",
		"none"
	]
}, O = {
	...T,
	divider: !0,
	padding: "none",
	paddingByIndent: !0
}, k = /* @__PURE__ */ _({
	name: "D1Cell",
	__name: "D1Cell",
	props: /* @__PURE__ */ y({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		readonly: { type: Boolean },
		disabled: { type: Boolean },
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
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		to: {},
		href: {},
		value: {},
		detail: {},
		role: {},
		tag: {},
		divider: { type: Boolean },
		dynamic: { type: Boolean },
		focus: { type: Boolean },
		dynamicHover: { type: Boolean },
		dividerLabel: {},
		iconTop: { type: Boolean },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, O),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let i = n, a = e, s = new E("d1.cell", a, {
			emits: i,
			classes: h(() => ({ main: {
				"d1-cell": !0,
				"d1-cell--focus": a.focus,
				"d1-cell--selected": a.selected,
				"d1-cell--readonly": a.readonly,
				"d1-cell--disabled": a.disabled,
				"d1-cell--dynamic": a.dynamic,
				"d1-cell--dynamicHover": a.dynamicHover,
				"d1-cell--divider": a.divider,
				[`d1-cell--dividerLabel--${a.dividerLabel}`]: C(D.dividerLabel, a.dividerLabel),
				"d1-cell--iconTop": a.iconTop,
				[`d1-cell--padding--${a.padding}`]: C(D.padding, a.padding),
				"d1-cell--paddingByIndent": a.paddingByIndent
			} })),
			styles: h(() => ({})),
			components: {
				icon: r,
				progress: o,
				ripple: m
			}
		}), c = s.render();
		return t(s.expose()), (e, t) => (b(), g(x(c)));
	}
});
//#endregion
export { k as t };

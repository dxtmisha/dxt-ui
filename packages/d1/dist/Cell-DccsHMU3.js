import { n as e, r as t, t as n } from "./D1Icon-BnpmOB4B.js";
import { t as r } from "./getClassTagAStatic-BnVYlXHI-0U7MRJ3h.js";
import { t as i } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t as a } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as o } from "./CaptionInclude-CohAZRI2-CCdFbTIH.js";
import { t as s } from "./DescriptionInclude-D4ane9aR-o7gRirw3.js";
import { t as c } from "./EnabledInclude-B9oXYBtR-BRVL93PD.js";
import { t as l } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { n as u, t as d } from "./D1Progress-CD6wYH0x.js";
import { n as f, t as p } from "./D1Ripple-CvolQ-qx.js";
import { computed as m, createBlock as h, defineComponent as g, h as _, mergeDefaults as v, openBlock as y, unref as b } from "vue";
import { DesignConstructorAbstract as x, inArray as S } from "@dxtmisha/functional";
//#region ../constructor/dist/cell.js
var C = Object.defineProperty, w = (e, t, n) => t in e ? C(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, T = (e, t, n) => w(e, typeof t == "symbol" ? t : t + "", n), E = class {
	constructor(n, a, d, p, h, g, _, v, y) {
		T(this, "progress"), T(this, "skeleton"), T(this, "label"), T(this, "description"), T(this, "caption"), T(this, "enabled"), T(this, "icon"), T(this, "ripple"), T(this, "event"), T(this, "classes", m(() => ({
			[`${this.className}--description`]: this.description.is.value,
			[r(this.classDesign)]: !0
		}))), T(this, "role", m(() => {
			if (this.props.role) return this.props.role;
			if (this.props.dynamic) return "button";
		})), this.props = n, this.refs = a, this.element = d, this.classDesign = p, this.className = h, this.components = g, this.slots = _, this.emits = v;
		let { CaptionConstructor: b = o, DescriptionConstructor: x = s, EnabledConstructor: S = c, EventConstructor: C = t, IconConstructor: w = e, LabelConstructor: E = i, ProgressConstructor: D = u, RippleConstructor: O = f, SkeletonConstructor: k = l } = y == null ? {} : y, A = new D(n, h, g, { position: "bottom" });
		this.skeleton = new k(n, p, ["classTextVariant"]), this.label = new E(n, h, void 0, _, void 0, void 0, void 0, this.skeleton), this.caption = new b(n, h, _), this.description = new x(n, h, _, this.skeleton), this.enabled = new S(n, A), this.icon = new w(n, h, g), this.progress = A, this.ripple = new O(h, g, this.enabled), this.event = new C(n, this.enabled, v);
	}
	getClassesSub() {
		return {
			label: `${this.className}__label`,
			description: `${this.className}__description`,
			caption: `${this.className}__caption`,
			trailing: `${this.className}__trailing`
		};
	}
}, D = {
	tag: "div",
	divider: !0
}, O = class extends x {
	constructor(e, t, n, r = E) {
		super(e, t, n), T(this, "item"), T(this, "renderContext", () => {
			var e;
			return [_("div", {
				key: "context",
				class: (e = this.classes) == null ? void 0 : e.value.context
			}, [
				...this.item.label.render(),
				...this.item.caption.render(),
				...this.item.description.render()
			])];
		}), T(this, "renderTrailing", () => {
			var e;
			return this.slots && "trailing" in this.slots ? [_("div", {
				key: "trailing",
				class: (e = this.classes) == null ? void 0 : e.value.contextTrailing
			}, this.initSlot("trailing", void 0, this.item.getClassesSub()))] : [];
		}), T(this, "renderBody", () => {
			var e;
			return this.slots && "body" in this.slots ? [_("div", {
				key: "body",
				class: (e = this.classes) == null ? void 0 : e.value.body
			}, this.initSlot("body", void 0, this.item.getClassesSub()))] : [];
		}), T(this, "propsMain", m(() => {
			var e;
			let t = {
				...this.getAttrs(),
				class: (e = this.classes) == null ? void 0 : e.value.main,
				"data-value": this.props.value,
				"data-divider": this.props.divider ? "active" : void 0,
				...this.item.event.binds,
				...a.role(this.item.role.value)
			};
			return this.props.dynamic ? {
				...t,
				tabindex: "0"
			} : t;
		})), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return _((e = this.props.tag) == null ? "div" : e, this.propsMain.value, [
			...this.item.icon.render(),
			...this.renderContext(),
			...this.renderTrailing(),
			...this.renderBody(),
			...this.item.ripple.render(),
			...this.item.progress.render()
		]);
	}
}, k = {
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
}, A = {
	...D,
	divider: !0,
	padding: "none",
	paddingByIndent: !0
}, j = /* @__PURE__ */ g({
	name: "D1Cell",
	__name: "D1Cell",
	props: /* @__PURE__ */ v({
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
	}, A),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, o = new O("d1.cell", a, {
			emits: i,
			classes: m(() => ({ main: {
				"d1-cell": !0,
				"d1-cell--focus": a.focus,
				"d1-cell--selected": a.selected,
				"d1-cell--readonly": a.readonly,
				"d1-cell--disabled": a.disabled,
				"d1-cell--dynamic": a.dynamic,
				"d1-cell--dynamicHover": a.dynamicHover,
				"d1-cell--divider": a.divider,
				[`d1-cell--dividerLabel--${a.dividerLabel}`]: S(k.dividerLabel, a.dividerLabel),
				"d1-cell--iconTop": a.iconTop,
				[`d1-cell--padding--${a.padding}`]: S(k.padding, a.padding),
				"d1-cell--paddingByIndent": a.paddingByIndent
			} })),
			styles: m(() => ({})),
			components: {
				icon: n,
				progress: d,
				ripple: p
			}
		}), s = o.render();
		return t(o.expose()), (e, t) => (y(), h(b(s)));
	}
});
//#endregion
export { j as t };

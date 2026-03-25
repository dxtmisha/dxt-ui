import { n as e, r as t, t as n } from "./D1Icon-BnpmOB4B.js";
import { t as r } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t as i } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as a } from "./EnabledInclude-B9oXYBtR-BRVL93PD.js";
import { t as o } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { t as s } from "./D1Progress-CD6wYH0x.js";
import { n as c, t as l } from "./D1Ripple-CvolQ-qx.js";
import { t as u } from "./D1Badge-BGe6Ttlr.js";
import { t as d } from "./BadgeInclude-BwCIBVyK-AGjJyzyS.js";
import { computed as f, createBlock as p, defineComponent as m, h, mergeDefaults as g, openBlock as _, unref as v } from "vue";
import { DesignConstructorAbstract as y, inArray as b } from "@dxtmisha/functional";
//#region ../constructor/dist/tabItem.js
var x = Object.defineProperty, S = (e, t, n) => t in e ? x(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, C = (e, t, n) => S(e, typeof t == "symbol" ? t : t + "", n), w = class {
	constructor(n, s, l, u, p, m, h, g, _) {
		C(this, "icon"), C(this, "label"), C(this, "badge"), C(this, "skeleton"), C(this, "enabled"), C(this, "ripple"), C(this, "event"), C(this, "tag", f(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), C(this, "binds", f(() => {
			var e;
			return {
				href: this.props.href,
				"data-value": (e = this.props.index) == null ? this.props.value : e,
				tabindex: -1,
				...this.event.binds,
				...i.role(this.props.role),
				...i.selected(!!this.props.selected),
				...i.disabled(!!this.props.disabled)
			};
		})), this.props = n, this.refs = s, this.element = l, this.classDesign = u, this.className = p, this.components = m, this.slots = h, this.emits = g;
		let { BadgeIncludeConstructor: v = d, EnabledIncludeConstructor: y = a, EventClickIncludeConstructor: b = t, IconTrailingIncludeConstructor: x = e, LabelIncludeConstructor: S = r, RippleIncludeConstructor: w = c, SkeletonIncludeConstructor: T = o } = _ == null ? {} : _;
		this.skeleton = new T(this.props, this.classDesign, ["classTextVariant"]), this.enabled = new y(this.props), this.icon = new x(this.props, this.className, this.components), this.label = new S(this.props, this.className, void 0, this.slots, void 0, void 0, void 0, this.skeleton), this.badge = new v(this.props, this.className, this.components, { overlap: "static" }), this.ripple = new w(this.className, this.components, this.enabled), this.event = new b(this.props, this.enabled, this.emits);
	}
}, T = { role: "tab" }, E = class extends y {
	constructor(e, t, n, r = w) {
		super(e, t, n), C(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.event.expose };
	}
	initClasses() {
		return {
			main: {},
			label: this.getSubClass("label"),
			icon: this.getSubClass("icon"),
			badge: this.getSubClass("badge")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [
			...this.item.icon.render(),
			...this.item.label.render(),
			...this.item.badge.render(),
			...this.item.ripple.render()
		];
		return h(this.item.tag.value, {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...this.item.binds.value
		}, t);
	}
}, D = {
	adaptive: [
		"iconAlways",
		"auto",
		"iconSm",
		"iconMd",
		"iconLg",
		"iconXl",
		"icon2xl",
		"fullSm",
		"fullMd",
		"fullLg",
		"fullXl",
		"full2xl"
	],
	container: [
		"iconSm",
		"iconMd",
		"iconLg",
		"iconXl",
		"icon2xl",
		"fullSm",
		"fullMd",
		"fullLg",
		"fullXl",
		"full2xl"
	]
}, O = { ...T }, k = /* @__PURE__ */ m({
	name: "D1TabItem",
	__name: "D1TabItem",
	props: /* @__PURE__ */ g({
		label: {},
		labelId: {},
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		badge: {},
		badgeDot: { type: Boolean },
		isSkeleton: { type: Boolean },
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		to: {},
		href: {},
		value: {},
		detail: {},
		role: {},
		index: {},
		tag: {},
		focus: { type: Boolean },
		open: { type: Boolean },
		adaptive: {},
		container: {}
	}, O),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, o = new E("d1.tabItem", a, {
			emits: i,
			classes: f(() => ({ main: {
				"d1-tabItem": !0,
				"d1-tabItem--focus": a.focus,
				"d1-tabItem--open": a.open,
				"d1-tabItem--selected": a.selected,
				"d1-tabItem--disabled": a.disabled,
				[`d1-tabItem--adaptive--${a.adaptive}`]: b(D.adaptive, a.adaptive),
				[`d1-tabItem--container--${a.container}`]: b(D.container, a.container)
			} })),
			styles: f(() => ({})),
			components: {
				icon: n,
				badge: u,
				progress: s,
				ripple: l
			}
		}), c = o.render();
		return t(o.expose()), (e, t) => (_(), p(v(c)));
	}
});
//#endregion
export { k as t };

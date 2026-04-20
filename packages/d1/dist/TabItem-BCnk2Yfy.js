import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { n as t, r as n, t as r } from "./D1Icon-DdAEP85V.js";
import { t as i } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as a } from "./D1Progress-bGL51dk1.js";
import { t as o } from "./EnabledInclude-DziteWbw-Cz2NSO24.js";
import { n as s } from "./SkeletonInclude-Cl99MbTo-Ck2ZjUG7.js";
import { t as c } from "./LabelInclude-B8iRBQY--SmRMVprf.js";
import { n as l, t as u } from "./D1Ripple-DwFESqu6.js";
import { n as d, t as f } from "./D1Badge-DIFPKilo.js";
import { computed as p, createBlock as m, defineComponent as h, h as g, mergeDefaults as _, openBlock as v, unref as y } from "vue";
import { DesignConstructorAbstract as b, inArray as x } from "@dxtmisha/functional";
//#region ../constructor/dist/tabItem.js
var S = class {
	constructor(r, a, u, f, m, h, g, _, v) {
		e(this, "icon", void 0), e(this, "label", void 0), e(this, "badge", void 0), e(this, "skeleton", void 0), e(this, "enabled", void 0), e(this, "ripple", void 0), e(this, "event", void 0), e(this, "tag", p(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), e(this, "binds", p(() => {
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
		})), this.props = r, this.refs = a, this.element = u, this.classDesign = f, this.className = m, this.components = h, this.slots = g, this.emits = _;
		let { BadgeIncludeConstructor: y = d, EnabledIncludeConstructor: b = o, EventClickIncludeConstructor: x = n, IconTrailingIncludeConstructor: S = t, LabelIncludeConstructor: C = c, RippleIncludeConstructor: w = l, SkeletonIncludeConstructor: T = s } = v == null ? {} : v;
		this.skeleton = new T(this.props, this.classDesign, ["classTextVariant"]), this.enabled = new b(this.props), this.icon = new S(this.props, this.className, this.components), this.label = new C(this.props, this.className, void 0, this.slots, void 0, void 0, void 0, this.skeleton), this.badge = new y(this.props, this.className, this.components, { overlap: "static" }), this.ripple = new w(this.className, this.components, this.enabled), this.event = new x(this.props, this.enabled, this.emits);
	}
}, C = { role: "tab" }, w = class extends b {
	constructor(t, n, r, i = S) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return g(this.item.tag.value, {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...this.item.binds.value
		}, t);
	}
}, T = {
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
}, E = { ...C }, D = /* @__PURE__ */ h({
	name: "D1TabItem",
	__name: "D1TabItem",
	props: /* @__PURE__ */ _({
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
	}, E),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let i = n, o = e, s = new w("d1.tabItem", o, {
			emits: i,
			classes: p(() => ({ main: {
				"d1-tabItem": !0,
				"d1-tabItem--focus": o.focus,
				"d1-tabItem--open": o.open,
				"d1-tabItem--selected": o.selected,
				"d1-tabItem--disabled": o.disabled,
				[`d1-tabItem--adaptive--${o.adaptive}`]: x(T.adaptive, o.adaptive),
				[`d1-tabItem--container--${o.container}`]: x(T.container, o.container)
			} })),
			styles: p(() => ({})),
			components: {
				icon: r,
				badge: f,
				progress: a,
				ripple: u
			}
		}), c = s.render();
		return t(s.expose()), (e, t) => (v(), m(y(c)));
	}
});
//#endregion
export { D as t };

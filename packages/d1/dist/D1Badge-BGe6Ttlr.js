import { t as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t as n } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as r } from "./IconInclude-CLqwI29Q-CYtp8tgy.js";
import { computed as i, createBlock as a, defineComponent as o, h as s, mergeDefaults as c, openBlock as l, unref as u } from "vue";
import { DesignConstructorAbstract as d, GeoRef as f, inArray as p, isFilled as m, isNumber as h, toNumberByMax as g } from "@dxtmisha/functional";
//#region ../constructor/dist/LabelNumberInclude-Cn0qDEgX.js
var _ = class extends t {
	constructor(e, t, n, r, a, o) {
		super(e, t, n, r, a, i(() => this.getNumber()), void 0, o), this.props = e, this.className = t, this.classesExtra = n, this.slots = r, this.elementsExtra = a, this.skeleton = o;
	}
	getNumber() {
		let e = this.props;
		if (e.label && h(e.label)) return g(e.label, e.labelMax, e.formatting, f.getLanguage().value).toString();
	}
}, v = Object.defineProperty, y = (e, t, n) => t in e ? v(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, b = (e, t, n) => y(e, typeof t == "symbol" ? t : t + "", n), x = class {
	constructor(e, t, a, o, s, c, l, u, d) {
		b(this, "label"), b(this, "icon"), b(this, "autoHide", i(() => !this.props.dot && !m(this.icon.isIcon.value) && !m(this.label.is.value))), b(this, "classes", i(() => ({ [`${this.className}--hideAuto`]: this.autoHide.value }))), b(this, "aria", i(() => this.props.ariaLabel ? { ...n.hidden() } : {})), this.props = e, this.refs = t, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { IconIncludeConstructor: f = r, LabelNumberIncludeConstructor: p = _ } = d == null ? {} : d;
		this.label = new p(e, s, void 0, l), this.icon = new f(e, s, c);
	}
}, S = {
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right"
}, C = class extends d {
	constructor(e, t, n, r = x) {
		super(e, t, n), b(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			label: this.getSubClass("label"),
			icon: this.getSubClass("icon")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		let t = [];
		return this.props.dot || t.push(...this.item.label.render(void 0, this.item.aria.value), ...this.item.icon.renderIcon()), s("span", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...n.label(this.props.ariaLabel)
		}, t);
	}
}, w = {
	overlap: [
		"rectangular",
		"circular",
		"static"
	],
	vertical: [
		"top",
		"center",
		"bottom"
	],
	horizontal: [
		"right",
		"center",
		"left"
	],
	size: [
		"sm",
		"md",
		"lg",
		"none"
	],
	palette: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
		"gray",
		"zinc",
		"neutral",
		"stone",
		"black",
		"white"
	]
}, T = {
	...S,
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right",
	primary: !0,
	size: "md"
}, E = /* @__PURE__ */ o({
	name: "D1Badge",
	__name: "D1Badge",
	props: /* @__PURE__ */ c({
		icon: {},
		selected: { type: Boolean },
		iconTurn: { type: Boolean },
		iconHide: { type: Boolean },
		iconDir: { type: Boolean },
		iconPalette: { type: Boolean },
		iconAttrs: {},
		label: {},
		labelId: {},
		labelMax: {},
		formatting: { type: Boolean },
		ariaLabel: {},
		dot: { type: Boolean },
		hide: { type: Boolean },
		overlap: {},
		vertical: {},
		horizontal: {},
		primary: { type: Boolean },
		secondary: { type: Boolean },
		outline: { type: Boolean },
		size: {},
		palette: {}
	}, T),
	setup(t, { expose: n, emit: r }) {
		let o = r, s = t, c = new C("d1.badge", s, {
			emits: o,
			classes: i(() => ({ main: {
				"d1-badge": !0,
				"d1-badge--selected": s.selected,
				"d1-badge--hide": s.hide,
				"d1-badge--dot": s.dot,
				[`d1-badge--overlap--${s.overlap}`]: p(w.overlap, s.overlap),
				[`d1-badge--vertical--${s.vertical}`]: p(w.vertical, s.vertical),
				[`d1-badge--horizontal--${s.horizontal}`]: p(w.horizontal, s.horizontal),
				"d1-badge--primary": s.primary && !s.secondary && !s.outline,
				"d1-badge--secondary": s.secondary,
				"d1-badge--outline": s.outline,
				[`d1-badge--size--${s.size}`]: p(w.size, s.size),
				[`d1-palette d1-palette--${s.palette}`]: p(w.palette, s.palette)
			} })),
			styles: i(() => ({})),
			components: { icon: e }
		}), d = c.render();
		return n(c.expose()), (e, t) => (l(), a(u(d)));
	}
});
//#endregion
export { E as t };

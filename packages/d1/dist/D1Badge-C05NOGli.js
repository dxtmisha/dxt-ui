import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { t } from "./D1Icon-BHuIrfSX.js";
import { t as n } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as r } from "./LabelInclude-WVa57XLq-DVHrrcYW.js";
import { t as i } from "./IconInclude-CG1A2rFq-TF7kYTJV.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, unref as d } from "vue";
import { DesignConstructorAbstract as f, GeoRef as p, getBind as m, getRef as h, inArray as g, isFilled as _, isNumber as v, toBind as y, toNumberByMax as b } from "@dxtmisha/functional";
//#region ../constructor/dist/LabelNumberInclude-Dxv-JWQZ.js
var x = class extends r {
	constructor(e, t, n, r, i, o) {
		super(e, t, n, r, i, a(() => this.getNumber()), void 0, o), this.props = e, this.className = t, this.classesExtra = n, this.slots = r, this.elementsExtra = i, this.skeleton = o;
	}
	getNumber() {
		let e = this.props;
		if (e.label && v(e.label)) return b(e.label, e.labelMax, e.formatting, p.getLanguage().value).toString();
	}
}, S = class {
	constructor(t, n, r, i) {
		e(this, "is", a(() => !!(this.props.badge || this.props.badgeDot))), e(this, "binds", a(() => {
			var e;
			return m(this.props.badgeDot ? {} : this.props.badge, {
				dot: this.props.badgeDot,
				...y((e = h(this.extra)) == null ? {} : e, { class: `${this.className}__badge` })
			}, "label", !0);
		})), e(this, "render", () => this.components && this.is.value ? this.components.render("badge", this.binds.value, void 0, "badge") : []), this.props = t, this.className = n, this.components = r, this.extra = i;
	}
}, C = class {
	constructor(t, r, o, s, c, l, u, d, f) {
		e(this, "label", void 0), e(this, "icon", void 0), e(this, "autoHide", a(() => !this.props.dot && !_(this.icon.isIcon.value) && !_(this.label.is.value))), e(this, "classes", a(() => ({ [`${this.className}--hideAuto`]: this.autoHide.value }))), e(this, "aria", a(() => this.props.ariaLabel ? { ...n.hidden() } : {})), this.props = t, this.refs = r, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { IconIncludeConstructor: p = i, LabelNumberIncludeConstructor: m = x } = f == null ? {} : f;
		this.label = new m(t, c, void 0, u), this.icon = new p(t, c, l);
	}
}, w = {
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right"
}, T = class extends f {
	constructor(t, n, r, i = C) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.props.dot || t.push(...this.item.label.render(void 0, this.item.aria.value), ...this.item.icon.renderIcon()), c("span", {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...n.label(this.props.ariaLabel)
		}, t);
	}
}, E = {
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
}, D = {
	...w,
	overlap: "rectangular",
	vertical: "top",
	horizontal: "right",
	primary: !0,
	size: "md"
}, O = /* @__PURE__ */ s({
	name: "D1Badge",
	__name: "D1Badge",
	props: /* @__PURE__ */ l({
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
	}, D),
	setup(e, { expose: n, emit: r }) {
		let i = r, s = e, c = new T("d1.badge", s, {
			emits: i,
			classes: a(() => ({ main: {
				"d1-badge": !0,
				"d1-badge--selected": s.selected,
				"d1-badge--hide": s.hide,
				"d1-badge--dot": s.dot,
				[`d1-badge--overlap--${s.overlap}`]: g(E.overlap, s.overlap),
				[`d1-badge--vertical--${s.vertical}`]: g(E.vertical, s.vertical),
				[`d1-badge--horizontal--${s.horizontal}`]: g(E.horizontal, s.horizontal),
				"d1-badge--primary": s.primary && !s.secondary && !s.outline,
				"d1-badge--secondary": s.secondary,
				"d1-badge--outline": s.outline,
				[`d1-badge--size--${s.size}`]: g(E.size, s.size),
				[`d1-palette d1-palette--${s.palette}`]: g(E.palette, s.palette)
			} })),
			styles: a(() => ({})),
			components: { icon: t }
		}), l = c.render();
		return n(c.expose()), (e, t) => (u(), o(d(l)));
	}
});
//#endregion
export { S as n, O as t };

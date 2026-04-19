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
import { n as h, t as g } from "./D1Badge-DIFPKilo.js";
import { n as _, t as v } from "./SuffixInclude-BMGrQ0Iw-DowOBt46.js";
import { computed as y, createBlock as b, defineComponent as x, h as S, mergeDefaults as C, openBlock as w, unref as T } from "vue";
import { DesignConstructorAbstract as E, getExp as D, inArray as O, isFilled as k } from "@dxtmisha/functional";
//#region ../constructor/dist/LabelHighlightInclude-QJ4RRw1j.js
var A = class extends l {
	constructor(t, n, r, i, a, o) {
		super(t, n, r, i, a, y(() => this.getLabel()), void 0, o), e(this, "getLabel", () => {
			let e = this.props;
			if (e.highlight && e.highlight.length >= this.getLengthStart() && e.label) {
				let t = `${this.className}__highlight`, n = e.label.toString(), r = D(e.highlight, "i");
				if (n.match(r)) return n.replace(r, (e) => `<span class="${t}">${e}</span>`);
				if (k(e.value) && e.value.toString().match(r)) return `<span class="${t}">${n}</span>`;
			}
		}), this.props = t, this.className = n, this.classesExtra = r, this.slots = i, this.elementsExtra = a, this.skeleton = o;
	}
	isHighlight() {
		let e = this.props;
		if (!e.highlight || e.highlight.length < this.getLengthStart()) return !0;
		if (!(e.highlight && e.highlight.length >= this.getLengthStart() && e.label)) return !1;
		let t = e.label.toString(), n = D(e.highlight, "i");
		return !!(t.match(n) || k(e.value) && e.value.toString().match(n));
	}
	getLengthStart() {
		var e;
		return (e = this.props.highlightLengthStart) == null ? 2 : e;
	}
}, j = class {
	constructor(r, o, l, m, g, b, x, S, C) {
		e(this, "icon", void 0), e(this, "label", void 0), e(this, "prefix", void 0), e(this, "caption", void 0), e(this, "suffix", void 0), e(this, "description", void 0), e(this, "badge", void 0), e(this, "ripple", void 0), e(this, "progress", void 0), e(this, "skeleton", void 0), e(this, "enabled", void 0), e(this, "event", void 0), e(this, "tag", y(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div")), e(this, "classes", y(() => ({
			[`${this.className}--description`]: this.description.is.value,
			[d(this.classDesign)]: !0
		}))), e(this, "binds", y(() => {
			var e;
			return {
				href: this.props.href,
				"data-value": (e = this.props.index) == null ? this.props.value : e,
				"data-divider": this.props.divider ? "active" : void 0,
				"data-parent": this.props.parent,
				"data-list-id": this.props.listId,
				...this.event.binds
			};
		})), e(this, "aria", y(() => {
			let e = {
				tabindex: this.props.tabindex,
				...i.role(this.props.role),
				...i.disabled(!!this.props.disabled)
			};
			switch (this.props.role) {
				case "menuitemradio":
				case "menuitemcheckbox": return {
					...e,
					...i.checked(!!this.props.selected)
				};
				case "menuitem":
				case "option": return {
					...e,
					...i.selected(!!this.props.selected)
				};
			}
			return e;
		})), this.props = r, this.refs = o, this.element = l, this.classDesign = m, this.className = g, this.components = b, this.slots = x, this.emits = S;
		let { BadgeIncludeConstructor: w = h, CaptionIncludeConstructor: T = f, DescriptionIncludeConstructor: E = u, EnabledIncludeConstructor: D = s, EventClickIncludeConstructor: O = n, IconTrailingIncludeConstructor: k = t, LabelHighlightIncludeConstructor: j = A, PrefixIncludeConstructor: M = v, ProgressIncludeConstructor: N = a, RippleIncludeConstructor: P = p, SkeletonIncludeConstructor: F = c, SuffixIncludeConstructor: I = _ } = C == null ? {} : C, L = new N(r, g, b, { circular: !0 }), R = new F(r, m, ["classTextVariant"]), z = new D(r, L);
		this.icon = new k(r, g, b), this.label = new j(r, g, void 0, x, void 0, R), this.prefix = new M(r, g, x, R), this.caption = new T(r, g, x), this.suffix = new I(r, g, x), this.description = new E(r, g, x, R), this.badge = new w(r, g, b, { overlap: "static" }), this.ripple = new P(g, b, z), this.progress = L, this.skeleton = R, this.enabled = z, this.event = new O(r, z, S);
	}
}, M = {
	tabindex: "-1",
	role: "option",
	iconAlign: "center"
}, N = class extends E {
	constructor(t, n, r) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderBody", () => {
			var e;
			let t = [...this.renderContext(), ...this.item.description.render()];
			return this.initSlot("body", t), [S("div", { class: (e = this.classes) == null ? void 0 : e.value.body }, t)];
		}), e(this, "renderContext", () => {
			var e;
			return [S("div", { class: (e = this.classes) == null ? void 0 : e.value.context }, [
				...this.item.prefix.render(),
				...this.item.label.render(),
				...this.item.caption.render(),
				...this.item.suffix.render(),
				...this.item.badge.render()
			])];
		}), this.item = new j(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.event.expose };
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			body: this.getSubClass("body"),
			context: this.getSubClass("context"),
			label: this.getSubClass("label"),
			highlight: this.getSubClass("highlight"),
			prefix: this.getSubClass("prefix"),
			caption: this.getSubClass("caption"),
			description: this.getSubClass("description"),
			icon: this.getSubClass("icon"),
			trailing: this.getSubClass("trailing"),
			badge: this.getSubClass("badge"),
			input: this.getSubClass("input")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e, t;
		if (this.props.filterMode && !this.item.label.isHighlight()) return;
		let n = [];
		return this.initSlot("leading", n), n.push(...this.renderBody()), this.initSlot("trailing", n), n.push(...this.item.icon.render(), ...this.item.progress.render(), ...this.item.ripple.render()), S(this.item.tag.value, {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			...this.item.binds.value,
			...this.item.aria.value
		}, n);
	}
}, P = {
	iconAlign: ["center", "edge"],
	fill: [],
	size: [
		"sm",
		"md",
		"lg"
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
}, F = {
	...M,
	iconAlign: "edge",
	size: "md"
}, I = /* @__PURE__ */ x({
	name: "D1ListItem",
	__name: "D1ListItem",
	props: /* @__PURE__ */ C({
		label: {},
		labelId: {},
		highlight: {},
		highlightLengthStart: {},
		value: {},
		description: {},
		descriptionId: {},
		prefix: {},
		prefixId: {},
		caption: {},
		captionDecorative: { type: Boolean },
		suffix: {},
		suffixId: {},
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
		badge: {},
		badgeDot: { type: Boolean },
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		to: {},
		href: {},
		detail: {},
		role: {},
		index: {},
		tag: {},
		filterMode: { type: Boolean },
		divider: { type: Boolean },
		tabindex: {},
		type: {},
		parent: {},
		listId: {},
		search: {},
		focus: { type: Boolean },
		open: { type: Boolean },
		selectedChild: { type: Boolean },
		iconTop: { type: Boolean },
		iconAlign: {},
		fill: {},
		size: {},
		dense: { type: Boolean },
		palette: {}
	}, F),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let i = n, a = e, s = new N("d1.listItem", a, {
			emits: i,
			classes: y(() => ({ main: {
				"d1-listItem": !0,
				"d1-listItem--focus": a.focus,
				"d1-listItem--open": a.open,
				"d1-listItem--selected": a.selected,
				"d1-listItem--selectedChild": a.selectedChild,
				"d1-listItem--readonly": a.readonly,
				"d1-listItem--disabled": a.disabled,
				"d1-listItem--iconTop": a.iconTop,
				[`d1-listItem--iconAlign--${a.iconAlign}`]: O(P.iconAlign, a.iconAlign),
				"d1-listItem--fill--custom": k(a.fill) && !O(P.fill, a.fill),
				"d1-listItem--divider": a.divider,
				[`d1-listItem--size--${a.size}`]: O(P.size, a.size),
				"d1-listItem--dense": a.dense,
				[`d1-palette d1-palette--${a.palette}`]: O(P.palette, a.palette)
			} })),
			styles: y(() => {
				var e;
				return { "--d1-listItem-sys-fill": (e = a.fill) == null ? null : e };
			}),
			components: {
				icon: r,
				badge: g,
				progress: o,
				ripple: m
			}
		}), c = s.render();
		return t(s.expose()), (e, t) => (w(), b(T(c)));
	}
});
//#endregion
export { I as t };

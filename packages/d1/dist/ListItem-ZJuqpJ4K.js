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
import { t as m } from "./D1Badge-BGe6Ttlr.js";
import { n as h, t as g } from "./SuffixInclude-maZ7235l-DUaOLLEU.js";
import { t as _ } from "./BadgeInclude-BwCIBVyK-AGjJyzyS.js";
import { computed as v, createBlock as y, defineComponent as b, h as x, mergeDefaults as S, openBlock as C, unref as w } from "vue";
import { DesignConstructorAbstract as T, getExp as E, inArray as D, isFilled as O } from "@dxtmisha/functional";
//#region ../constructor/dist/LabelHighlightInclude-CLmTvW_6.js
var k = Object.defineProperty, A = (e, t, n) => t in e ? k(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, j = (e, t, n) => A(e, typeof t == "symbol" ? t : t + "", n), M = class extends i {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, i, v(() => this.getLabel()), void 0, a), j(this, "getLabel", () => {
			let e = this.props;
			if (e.highlight && e.highlight.length >= this.getLengthStart() && e.label) {
				let t = `${this.className}__highlight`, n = e.label.toString(), r = E(e.highlight, "i");
				if (n.match(r)) return n.replace(r, (e) => `<span class="${t}">${e}</span>`);
				if (O(e.value) && e.value.toString().match(r)) return `<span class="${t}">${n}</span>`;
			}
		}), this.props = e, this.className = t, this.classesExtra = n, this.slots = r, this.elementsExtra = i, this.skeleton = a;
	}
	isHighlight() {
		let e = this.props;
		if (!e.highlight || e.highlight.length < this.getLengthStart()) return !0;
		if (!(e.highlight && e.highlight.length >= this.getLengthStart() && e.label)) return !1;
		let t = e.label.toString(), n = E(e.highlight, "i");
		return !!(t.match(n) || O(e.value) && e.value.toString().match(n));
	}
	getLengthStart() {
		var e;
		return (e = this.props.highlightLengthStart) == null ? 2 : e;
	}
}, N = Object.defineProperty, P = (e, t, n) => t in e ? N(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, F = (e, t, n) => P(e, typeof t == "symbol" ? t : t + "", n), I = class {
	constructor(n, i, d, p, m, y, b, x, S) {
		F(this, "icon"), F(this, "label"), F(this, "prefix"), F(this, "caption"), F(this, "suffix"), F(this, "description"), F(this, "badge"), F(this, "ripple"), F(this, "progress"), F(this, "skeleton"), F(this, "enabled"), F(this, "event"), F(this, "tag", v(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div")), F(this, "classes", v(() => ({
			[`${this.className}--description`]: this.description.is.value,
			[r(this.classDesign)]: !0
		}))), F(this, "binds", v(() => {
			var e;
			return {
				href: this.props.href,
				"data-value": (e = this.props.index) == null ? this.props.value : e,
				"data-divider": this.props.divider ? "active" : void 0,
				"data-parent": this.props.parent,
				"data-list-id": this.props.listId,
				...this.event.binds
			};
		})), F(this, "aria", v(() => {
			let e = {
				tabindex: this.props.tabindex,
				...a.role(this.props.role),
				...a.disabled(!!this.props.disabled)
			};
			switch (this.props.role) {
				case "menuitemradio":
				case "menuitemcheckbox": return {
					...e,
					...a.checked(!!this.props.selected)
				};
				case "menuitem":
				case "option": return {
					...e,
					...a.selected(!!this.props.selected)
				};
			}
			return e;
		})), this.props = n, this.refs = i, this.element = d, this.classDesign = p, this.className = m, this.components = y, this.slots = b, this.emits = x;
		let { BadgeIncludeConstructor: C = _, CaptionIncludeConstructor: w = o, DescriptionIncludeConstructor: T = s, EnabledIncludeConstructor: E = c, EventClickIncludeConstructor: D = t, IconTrailingIncludeConstructor: O = e, LabelHighlightIncludeConstructor: k = M, PrefixIncludeConstructor: A = g, ProgressIncludeConstructor: j = u, RippleIncludeConstructor: N = f, SkeletonIncludeConstructor: P = l, SuffixIncludeConstructor: I = h } = S == null ? {} : S, L = new j(n, m, y, { circular: !0 }), R = new P(n, p, ["classTextVariant"]), z = new E(n, L);
		this.icon = new O(n, m, y), this.label = new k(n, m, void 0, b, void 0, R), this.prefix = new A(n, m, b, R), this.caption = new w(n, m, b), this.suffix = new I(n, m, b), this.description = new T(n, m, b, R), this.badge = new C(n, m, y, { overlap: "static" }), this.ripple = new N(m, y, z), this.progress = L, this.skeleton = R, this.enabled = z, this.event = new D(n, z, x);
	}
}, L = {
	tabindex: "-1",
	role: "option",
	iconAlign: "center"
}, R = class extends T {
	constructor(e, t, n) {
		super(e, t, n), F(this, "item"), F(this, "renderBody", () => {
			var e;
			let t = [...this.renderContext(), ...this.item.description.render()];
			return this.initSlot("body", t), [x("div", { class: (e = this.classes) == null ? void 0 : e.value.body }, t)];
		}), F(this, "renderContext", () => {
			var e;
			return [x("div", { class: (e = this.classes) == null ? void 0 : e.value.context }, [
				...this.item.prefix.render(),
				...this.item.label.render(),
				...this.item.caption.render(),
				...this.item.suffix.render(),
				...this.item.badge.render()
			])];
		}), this.item = new I(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.initSlot("leading", n), n.push(...this.renderBody()), this.initSlot("trailing", n), n.push(...this.item.icon.render(), ...this.item.progress.render(), ...this.item.ripple.render()), x(this.item.tag.value, {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			...this.item.binds.value,
			...this.item.aria.value
		}, n);
	}
}, z = {
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
}, B = {
	...L,
	iconAlign: "edge",
	size: "md"
}, V = /* @__PURE__ */ b({
	name: "D1ListItem",
	__name: "D1ListItem",
	props: /* @__PURE__ */ S({
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
	}, B),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: r }) {
		let i = r, a = e, o = new R("d1.listItem", a, {
			emits: i,
			classes: v(() => ({ main: {
				"d1-listItem": !0,
				"d1-listItem--focus": a.focus,
				"d1-listItem--open": a.open,
				"d1-listItem--selected": a.selected,
				"d1-listItem--selectedChild": a.selectedChild,
				"d1-listItem--readonly": a.readonly,
				"d1-listItem--disabled": a.disabled,
				"d1-listItem--iconTop": a.iconTop,
				[`d1-listItem--iconAlign--${a.iconAlign}`]: D(z.iconAlign, a.iconAlign),
				"d1-listItem--fill--custom": O(a.fill) && !D(z.fill, a.fill),
				"d1-listItem--divider": a.divider,
				[`d1-listItem--size--${a.size}`]: D(z.size, a.size),
				"d1-listItem--dense": a.dense,
				[`d1-palette d1-palette--${a.palette}`]: D(z.palette, a.palette)
			} })),
			styles: v(() => {
				var e;
				return { "--d1-listItem-sys-fill": (e = a.fill) == null ? null : e };
			}),
			components: {
				icon: n,
				badge: m,
				progress: d,
				ripple: p
			}
		}), s = o.render();
		return t(o.expose()), (e, t) => (C(), y(w(s)));
	}
});
//#endregion
export { V as t };

import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { n as t, r as n } from "./D1Icon-BHuIrfSX.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as i } from "./LabelInclude-WVa57XLq-DVHrrcYW.js";
import { t as a } from "./DescriptionInclude-CLl_BuFh-BDAWAaXu.js";
import { t as o } from "./TextInclude-B_Uojln0-ClKB6W8i.js";
import { n as s, t as c } from "./Actions-Bn3OKkjI.js";
import { t as l } from "./Button-o2ke8xIv.js";
import { t as u } from "./Icon-dbcR_AIE.js";
import { computed as d, createBlock as f, defineComponent as p, h as m, mergeDefaults as h, openBlock as g, unref as _ } from "vue";
import { DesignConstructorAbstract as v, getBind as y, getRef as b, inArray as x, toBinds as S } from "@dxtmisha/functional";
//#region ../constructor/dist/ButtonInclude-CYdZAMPS.js
var C = class {
	constructor(t, n, r, i, a, o) {
		e(this, "binds", d(() => {
			var e;
			return S((e = this.props) == null ? void 0 : e.buttonAttrs, y(b(this.label), b(this.extra), "label"));
		})), e(this, "render", (e) => {
			if (this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value)) {
				var t;
				return this.components.render("button", {
					...this.binds.value,
					...b(e)
				}, void 0, (t = this.index) == null ? "button" : t);
			}
			return [];
		}), this.label = t, this.className = n, this.components = r, this.props = i, this.extra = a, this.index = o;
	}
}, w = class {
	constructor(r, c, l, u, f, p, m, h, g) {
		e(this, "label", void 0), e(this, "description", void 0), e(this, "event", void 0), e(this, "icon", void 0), e(this, "button", void 0), e(this, "actions", void 0), e(this, "text", void 0), e(this, "onClose", () => {
			var e;
			return (e = this.emits) == null ? void 0 : e.call(this, "close", this.props.value);
		}), this.props = r, this.refs = c, this.element = l, this.classDesign = u, this.className = f, this.components = p, this.slots = m, this.emits = h;
		let { ActionsConstructor: _ = s, ButtonConstructor: v = C, DescriptionConstructor: y = a, EventConstructor: b = n, IconConstructor: x = t, LabelConstructor: S = i, TextConstructor: w = o } = g == null ? {} : g;
		this.label = new S(r, f, void 0, m), this.description = new y(r, f, m), this.event = new b(void 0, void 0, h), this.icon = new x(r, f, p), this.button = new v(d(() => this.props.button), f, p, void 0, { onClick: this.event.onClick }), this.actions = new _(r, f, p, h, { align: "left" }), this.text = new w(r);
	}
}, T = {
	closeButton: !0,
	role: "status"
}, E = class extends v {
	constructor(t, n, i, a = w) {
		super(t, n, i), e(this, "item", void 0), e(this, "renderMain", () => {
			var e, t;
			return [m("div", {
				key: "tool",
				class: (e = this.classes) == null ? void 0 : e.value.tool
			}, [
				...this.item.icon.render(),
				...this.renderContext(),
				...this.item.button.render({ class: (t = this.classes) == null ? void 0 : t.value.button }),
				...this.renderClose()
			])];
		}), e(this, "renderContext", () => {
			var e;
			return [m("div", {
				key: "context",
				class: (e = this.classes) == null ? void 0 : e.value.context
			}, [
				...this.item.label.render(),
				...this.item.description.render(),
				...this.renderBody()
			])];
		}), e(this, "renderBody", () => {
			let e = [];
			if (this.props.html) {
				var t;
				e.push(m("div", {
					key: "body",
					class: (t = this.classes) == null ? void 0 : t.value.body,
					innerHTML: this.props.html
				}));
			}
			if (this.slots && "body" in this.slots) {
				var n;
				e.push(m("div", {
					key: "body-slot",
					class: (n = this.classes) == null ? void 0 : n.value.body
				}, this.initSlot("body")));
			}
			if (this.props.component) {
				var r;
				e.push(m("div", {
					key: "body-component",
					class: (r = this.classes) == null ? void 0 : r.value.body
				}, m(this.props.component, this.props.componentProps)));
			}
			return e;
		}), e(this, "renderClose", () => {
			if (this.props.closeButton) {
				var e;
				return this.components.render("button", {
					key: "button-close",
					class: (e = this.classes) == null ? void 0 : e.value.close,
					icon: this.props.iconClose,
					onclick: this.item.onClose,
					...r.label(this.item.text.close.value)
				}, void 0, "button-close");
			}
			return [];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			tool: this.getSubClass("tool"),
			icon: this.getSubClass("icon"),
			trailing: this.getSubClass("trailing"),
			context: this.getSubClass("context"),
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			body: this.getSubClass("body"),
			button: this.getSubClass("button"),
			close: this.getSubClass("close"),
			actions: this.getSubClass("actions")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return m("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			...r.role(this.props.role),
			...r.atomic(!0)
		}, [...this.renderMain(), ...this.item.actions.render()]);
	}
}, D = { palette: [
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
] }, O = {
	...T,
	iconClose: "close"
}, k = /* @__PURE__ */ p({
	name: "D1SnackbarItem",
	__name: "D1SnackbarItem",
	props: /* @__PURE__ */ h({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
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
		actionsHide: { type: Boolean },
		actionsList: {},
		actionsSecondary: {},
		actionsAttrs: {},
		role: {},
		textClose: { type: [String, Function] },
		button: {},
		html: {},
		component: {},
		componentProps: {},
		value: {},
		closeButton: { type: Boolean },
		iconClose: {},
		palette: {}
	}, O),
	emits: [
		"actions",
		"actionsLite",
		"click",
		"clickLite",
		"close"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new E("d1.snackbarItem", i, {
			emits: r,
			classes: d(() => ({ main: {
				"d1-snackbarItem": !0,
				[`d1-palette d1-palette--${i.palette}`]: x(D.palette, i.palette)
			} })),
			styles: d(() => ({})),
			components: {
				icon: u,
				button: l,
				actions: c
			},
			compMod: {
				button: { hasLabelMinWidth: !1 },
				"button-close": {
					secondary: !0,
					roundedFull: !0,
					size: "xs",
					palette: "neutral",
					inverse: !0
				},
				actions: {
					padding: "none",
					paddingByIndent: !1,
					buttonAttrs: { size: "sm" },
					buttonSecondaryAttrs: {
						text: !0,
						inverse: !0,
						size: "sm"
					}
				}
			}
		}), o = a.render();
		return t(a.expose()), (e, t) => (g(), f(_(o)));
	}
});
//#endregion
export { k as t };

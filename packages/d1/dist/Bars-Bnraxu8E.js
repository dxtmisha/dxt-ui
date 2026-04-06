import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-Cb8myFDE.js";
import { t as n } from "./ModelInclude-D8LkrhPp-CIue56kI.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as i } from "./SkeletonInclude-D8on8xmw-DRvyAmJt.js";
import { t as a } from "./LabelInclude-DoZ7EUYO-lGSFdcB1.js";
import { t as o } from "./DescriptionInclude-B_Xf_j3l-DKfEbhTV.js";
import { t as s } from "./TextInclude-OwyVCAbS-CAlHZ-54.js";
import { t as c } from "./MotionTransformClassesInclude-BN-T4YKS-ClHUJwnq.js";
import { t as l } from "./Button-B1Ed8ZtL.js";
import { i as u } from "./WindowClassesInclude-zm-ITw5d-QVDLqfAL.js";
import { computed as d, createBlock as f, defineComponent as p, h as m, mergeDefaults as h, openBlock as g, reactive as _, ref as v, unref as y, watch as b } from "vue";
import { DesignConstructorAbstract as x, forEach as S, getBind as C, inArray as w, toBind as T } from "@dxtmisha/functional";
//#region ../constructor/dist/bars.js
var E = class {
	constructor(t, n) {
		e(this, "action", v(!1)), e(this, "isPossible", d(() => !!(this.props.actionLabel || this.props.actionDescription || this.props.actionBars))), this.props = t, this.refs = n, n.action && b(n.action, (e) => {
			this.action.value = !!e;
		}, { immediate: !0 });
	}
	open() {
		this.action.value || (this.action.value = !0);
	}
	close() {
		this.action.value && (this.action.value = !1);
	}
}, D = class {
	constructor(l, f, p, m, h, g, v, y, b) {
		e(this, "action", void 0), e(this, "label", void 0), e(this, "description", void 0), e(this, "event", void 0), e(this, "windowClasses", void 0), e(this, "motionTransformClasses", void 0), e(this, "skeleton", void 0), e(this, "text", void 0), e(this, "backBinds", d(() => {
			var e;
			return this.initItem(T({
				icon: {
					icon: this.props.iconBack,
					iconActive: this.props.iconClose
				},
				iconDir: !0,
				value: "back",
				class: [this.windowClasses.get().close, this.motionTransformClasses.get().close],
				onClick: this.onClickBack,
				...r.label(this.text.close.value)
			}, (e = this.props.backButton) == null ? {} : e), "main-back");
		})), e(this, "barsBinds", d(() => this.initList(this.props.bars))), e(this, "actionBarsBinds", d(() => this.initList(this.props.actionBars, !0))), e(this, "backLabel", d(() => {
			var e;
			return this.action.action.value || (e = this.backBinds.value) == null ? void 0 : e.label;
		})), e(this, "classes", d(() => ({ [`${this.className}--action`]: this.action.action.value }))), e(this, "ariaLive", d(() => {
			if (this.action.isPossible.value) return "polite";
		})), e(this, "labelBinds", _({
			label: d(() => this.action.action.value ? this.props.actionLabel : this.props.label),
			labelId: d(() => this.props.labelId)
		})), e(this, "descriptionBinds", _({
			description: d(() => this.action.action.value ? this.props.actionDescription : this.props.description),
			descriptionId: d(() => this.props.descriptionId)
		})), e(this, "onClickBack", (e, t) => {
			(t == null ? void 0 : t.value) === "back" && this.action.close(), this.event.onClick(e, t);
		}), this.props = l, this.refs = f, this.element = p, this.classDesign = m, this.className = h, this.components = g, this.slots = v, this.emits = y;
		let { BarsActionConstructor: x = E, DescriptionConstructor: S = o, EventConstructor: C = t, LabelConstructor: w = a, ModelConstructor: D = n, MotionTransformClassesConstructor: O = c, SkeletonConstructor: k = i, TextConstructor: A = s, WindowClassesConstructor: j = u } = b == null ? {} : b, M = new k(this.props, this.classDesign, ["classTextVariant"]);
		this.action = new x(this.props, this.refs), this.label = new w(this.labelBinds, h, void 0, v, void 0, void 0, void 0, M), this.description = new S(this.descriptionBinds, h, v, M), this.event = new C(void 0, void 0, y), this.windowClasses = new j(m), this.motionTransformClasses = new O(m), this.skeleton = M, this.text = new A(this.props), new D("action", this.emits, this.action.action);
	}
	initItem(e, t, n = !1) {
		var r, i;
		return {
			isSkeleton: this.props.isSkeleton,
			onClick: this.event.onClick,
			...T((r = this.props.buttonAttrs) == null ? {} : r, e == null ? {} : e),
			key: `${n ? "action" : ""}Bar-${(i = e == null ? void 0 : e.value) == null ? t : i}`,
			icon: C(e == null ? void 0 : e.icon, { animationShow: n }, "icon")
		};
	}
	initList(e, t = !1) {
		if (e) return S(e, (e, n) => this.initItem(e, n, t));
	}
}, O = {}, k = class extends x {
	constructor(t, n, r, i = D) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderBackButton", () => this.props.backHide && (!this.item.action.action.value || this.props.backActionHide) ? [] : [this.components.renderOne("button", {
			...this.item.backBinds.value,
			label: this.item.backLabel.value,
			selected: this.item.action.action.value
		})]), e(this, "renderContext", () => {
			var e;
			return [m("div", { class: (e = this.classes) == null ? void 0 : e.value.context }, [...this.item.label.render(), ...this.item.description.render()])];
		}), e(this, "renderBars", () => {
			let e = [];
			return this.item.action.action.value ? e : (e.push(...this.renderList(this.item.barsBinds.value)), this.initSlot("bars", e), e);
		}), e(this, "renderActionBars", () => {
			let e = [];
			return this.item.action.action.value && (e.push(...this.renderList(this.item.actionBarsBinds.value)), this.initSlot("actionBars", e)), e;
		}), e(this, "renderList", (e) => {
			let t = [];
			return e && e.forEach((e) => this.components.renderAdd(t, "button", e)), t;
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			context: this.getSubClass("context"),
			label: this.getSubClass("label"),
			description: this.getSubClass("description")
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
			...r.live(this.item.ariaLive.value)
		}, [
			...this.renderBackButton(),
			...this.renderContext(),
			...this.renderBars(),
			...this.renderActionBars()
		]);
	}
}, A = { padding: [
	"sm",
	"md",
	"lg",
	"ySm",
	"yMd",
	"yLg",
	"none"
] }, j = {
	...O,
	iconBack: "arrow_back",
	iconClose: "close",
	paddingByIndent: !0
}, M = /* @__PURE__ */ p({
	name: "D1Bars",
	__name: "D1Bars",
	props: /* @__PURE__ */ h({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		isSkeleton: { type: Boolean },
		textClose: { type: [String, Function] },
		action: { type: Boolean },
		backButton: {},
		backHide: { type: Boolean },
		backActionHide: { type: Boolean },
		bars: {},
		actionLabel: {},
		actionDescription: {},
		actionBars: {},
		buttonAttrs: {},
		iconBack: {},
		iconClose: {},
		modelAction: { type: Boolean },
		"onUpdate:action": { type: Function },
		"onUpdate:modelAction": { type: Function },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, j),
	emits: [
		"click",
		"clickLite",
		"update:action",
		"update:modelAction"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new k("d1.bars", i, {
			emits: r,
			classes: d(() => ({ main: {
				"d1-bars": !0,
				[`d1-bars--padding--${i.padding}`]: w(A.padding, i.padding),
				"d1-bars--paddingByIndent": i.paddingByIndent
			} })),
			styles: d(() => ({})),
			components: { button: l },
			compMod: { button: {
				text: !0,
				size: "xs",
				inverse: !0
			} }
		}), o = a.render();
		return t(a.expose()), (e, t) => (g(), f(y(o)));
	}
});
//#endregion
export { M as t };

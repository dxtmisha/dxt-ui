import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { t as n } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t as r } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as i } from "./DescriptionInclude-D4ane9aR-o7gRirw3.js";
import { t as a } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { t as o } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { t as s } from "./MotionTransformClassesInclude-B23RIq0Q-D-f-jgoM.js";
import { i as c } from "./WindowClassesInclude-B56usxgx-lf4DY4p9.js";
import { t as l } from "./Button-BdYcx7nx.js";
import { computed as u, createBlock as d, defineComponent as f, h as p, mergeDefaults as m, openBlock as h, reactive as g, ref as _, unref as v, watch as y } from "vue";
import { DesignConstructorAbstract as b, forEach as x, getBind as S, getRef as C, inArray as w, toBind as T, toBinds as E } from "@dxtmisha/functional";
//#region ../constructor/dist/BarsInclude-BOEoY-O4.js
var D = Object.defineProperty, O = (e, t, n) => t in e ? D(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, k = (e, t, n) => O(e, typeof t == "symbol" ? t : t + "", n), A = class {
	constructor(e, t, n, r, i, a, o, s) {
		k(this, "element", _()), k(this, "is", u(() => !!(this.props.barsLabel || this.props.barsDescription || this.props.barsBackHide !== !0))), k(this, "binds", u(() => ({
			...E(C(this.extra), this.props.barsAttrs, { class: `${this.className}__bars` }),
			labelId: this.labelId,
			label: this.props.barsLabel,
			descriptionId: this.descriptionId,
			description: this.props.barsDescription,
			backHide: this.props.barsBackHide,
			bars: this.props.barsList
		}))), k(this, "render", () => {
			var e;
			return this.components && !this.props.barsHide ? this.components.render("bars", {
				ref: this.element,
				...this.binds.value,
				onClick: this.onClick
			}, void 0, (e = this.index) == null ? "bars" : e) : [];
		}), k(this, "onClick", (e, t) => {
			var n, r, i;
			(n = this.emits) == null || n.call(this, "bars", e, t), (r = this.emits) == null || r.call(this, "barsLite", t), t.type === "back" && ((i = this.emits) == null || i.call(this, "barsBack", t));
		}), this.props = e, this.className = t, this.components = n, this.emits = r, this.extra = i, this.labelId = a, this.descriptionId = o, this.index = s;
	}
}, j = Object.defineProperty, M = (e, t, n) => t in e ? j(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, N = (e, t, n) => M(e, typeof t == "symbol" ? t : t + "", n), P = class {
	constructor(e, t) {
		N(this, "action", _(!1)), N(this, "isPossible", u(() => !!(this.props.actionLabel || this.props.actionDescription || this.props.actionBars))), this.props = e, this.refs = t, t.action && y(t.action, (e) => {
			this.action.value = !!e;
		}, { immediate: !0 });
	}
	open() {
		this.action.value || (this.action.value = !0);
	}
	close() {
		this.action.value && (this.action.value = !1);
	}
}, F = class {
	constructor(l, d, f, p, m, h, _, v, y) {
		N(this, "action"), N(this, "label"), N(this, "description"), N(this, "event"), N(this, "windowClasses"), N(this, "motionTransformClasses"), N(this, "skeleton"), N(this, "text"), N(this, "backBinds", u(() => {
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
		})), N(this, "barsBinds", u(() => this.initList(this.props.bars))), N(this, "actionBarsBinds", u(() => this.initList(this.props.actionBars, !0))), N(this, "backLabel", u(() => {
			var e;
			return this.action.action.value || (e = this.backBinds.value) == null ? void 0 : e.label;
		})), N(this, "classes", u(() => ({ [`${this.className}--action`]: this.action.action.value }))), N(this, "ariaLive", u(() => {
			if (this.action.isPossible.value) return "polite";
		})), N(this, "labelBinds", g({
			label: u(() => this.action.action.value ? this.props.actionLabel : this.props.label),
			labelId: u(() => this.props.labelId)
		})), N(this, "descriptionBinds", g({
			description: u(() => this.action.action.value ? this.props.actionDescription : this.props.description),
			descriptionId: u(() => this.props.descriptionId)
		})), N(this, "onClickBack", (e, t) => {
			(t == null ? void 0 : t.value) === "back" && this.action.close(), this.event.onClick(e, t);
		}), this.props = l, this.refs = d, this.element = f, this.classDesign = p, this.className = m, this.components = h, this.slots = _, this.emits = v;
		let { BarsActionConstructor: b = P, DescriptionConstructor: x = i, EventConstructor: S = e, LabelConstructor: C = n, ModelConstructor: w = t, MotionTransformClassesConstructor: E = s, SkeletonConstructor: D = a, TextConstructor: O = o, WindowClassesConstructor: k = c } = y == null ? {} : y, A = new D(this.props, this.classDesign, ["classTextVariant"]);
		this.action = new b(this.props, this.refs), this.label = new C(this.labelBinds, m, void 0, _, void 0, void 0, void 0, A), this.description = new x(this.descriptionBinds, m, _, A), this.event = new S(void 0, void 0, v), this.windowClasses = new k(p), this.motionTransformClasses = new E(p), this.skeleton = A, this.text = new O(this.props), new w("action", this.emits, this.action.action);
	}
	initItem(e, t, n = !1) {
		var r, i;
		return {
			isSkeleton: this.props.isSkeleton,
			onClick: this.event.onClick,
			...T((r = this.props.buttonAttrs) == null ? {} : r, e == null ? {} : e),
			key: `${n ? "action" : ""}Bar-${(i = e == null ? void 0 : e.value) == null ? t : i}`,
			icon: S(e == null ? void 0 : e.icon, { animationShow: n }, "icon")
		};
	}
	initList(e, t = !1) {
		if (e) return x(e, (e, n) => this.initItem(e, n, t));
	}
}, I = {}, L = class extends b {
	constructor(e, t, n, r = F) {
		super(e, t, n), N(this, "item"), N(this, "renderBackButton", () => this.props.backHide && (!this.item.action.action.value || this.props.backActionHide) ? [] : [this.components.renderOne("button", {
			...this.item.backBinds.value,
			label: this.item.backLabel.value,
			selected: this.item.action.action.value
		})]), N(this, "renderContext", () => {
			var e;
			return [p("div", { class: (e = this.classes) == null ? void 0 : e.value.context }, [...this.item.label.render(), ...this.item.description.render()])];
		}), N(this, "renderBars", () => {
			let e = [];
			return this.item.action.action.value || (e.push(...this.renderList(this.item.barsBinds.value)), this.initSlot("bars", e)), e;
		}), N(this, "renderActionBars", () => {
			let e = [];
			return this.item.action.action.value && (e.push(...this.renderList(this.item.actionBarsBinds.value)), this.initSlot("actionBars", e)), e;
		}), N(this, "renderList", (e) => {
			let t = [];
			return e && e.forEach((e) => this.components.renderAdd(t, "button", e)), t;
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return p("div", {
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
}, R = { padding: [
	"sm",
	"md",
	"lg",
	"ySm",
	"yMd",
	"yLg",
	"none"
] }, z = {
	...I,
	iconBack: "arrow_back",
	iconClose: "close",
	paddingByIndent: !0
}, B = /* @__PURE__ */ f({
	name: "D1Bars",
	__name: "D1Bars",
	props: /* @__PURE__ */ m({
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
	}, z),
	emits: [
		"click",
		"clickLite",
		"update:action",
		"update:modelAction"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, i = e, a = new L("d1.bars", i, {
			emits: r,
			classes: u(() => ({ main: {
				"d1-bars": !0,
				[`d1-bars--padding--${i.padding}`]: w(R.padding, i.padding),
				"d1-bars--paddingByIndent": i.paddingByIndent
			} })),
			styles: u(() => ({})),
			components: { button: l },
			compMod: { button: {
				text: !0,
				size: "xs",
				inverse: !0
			} }
		}), o = a.render();
		return t(a.expose()), (e, t) => (h(), d(v(o)));
	}
});
//#endregion
export { A as n, B as t };

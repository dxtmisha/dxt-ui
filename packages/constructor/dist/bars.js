import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-BTtSLqQS.js";
import { t as n } from "./TextInclude-BIa1AeDQ.js";
import { t as r } from "./EventClickInclude-B0o5DErp.js";
import { t as i } from "./ModelInclude-ZrPu5V5T.js";
import { t as a } from "./MotionTransformClassesInclude-PiQjF8vJ.js";
import { t as o } from "./WindowClassesInclude-C8R8pgeo.js";
import { t as s } from "./SkeletonInclude-DtQCG1qF.js";
import { t as c } from "./LabelInclude-BJc8uC4Y.js";
import { t as l } from "./DescriptionInclude--_NvJ6ka.js";
import { t as u } from "./BarsInclude-Dt4tVQKX.js";
import { computed as d, h as f, reactive as p, ref as m, watch as h } from "vue";
import { DesignConstructorAbstract as g, forEach as _, getBind as v, toBind as y } from "@dxtmisha/functional";
//#region src/constructors/Bars/BarsAction.ts
var b = class {
	constructor(e, n) {
		t(this, "action", m(!1)), t(this, "isPossible", d(() => !!(this.props.actionLabel || this.props.actionDescription || this.props.actionBars))), this.props = e, this.refs = n, n.action && h(n.action, (e) => {
			this.action.value = !!e;
		}, { immediate: !0 });
	}
	open() {
		this.action.value || (this.action.value = !0);
	}
	close() {
		this.action.value && (this.action.value = !1);
	}
}, x = class {
	constructor(u, f, m, h, g, _, v, x, S) {
		t(this, "action", void 0), t(this, "label", void 0), t(this, "description", void 0), t(this, "event", void 0), t(this, "windowClasses", void 0), t(this, "motionTransformClasses", void 0), t(this, "skeleton", void 0), t(this, "text", void 0), t(this, "backBinds", d(() => {
			var t;
			return this.initItem(y({
				icon: {
					icon: this.props.iconBack,
					iconActive: this.props.iconClose
				},
				iconDir: !0,
				value: "back",
				class: [this.windowClasses.get().close, this.motionTransformClasses.get().close],
				onClick: this.onClickBack,
				...e.label(this.text.close.value)
			}, (t = this.props.backButton) == null ? {} : t), "main-back");
		})), t(this, "barsBinds", d(() => this.initList(this.props.bars))), t(this, "actionBarsBinds", d(() => this.initList(this.props.actionBars, !0))), t(this, "backLabel", d(() => {
			var e;
			return this.action.action.value || (e = this.backBinds.value) == null ? void 0 : e.label;
		})), t(this, "classes", d(() => ({ [`${this.className}--action`]: this.action.action.value }))), t(this, "ariaLive", d(() => {
			if (this.action.isPossible.value) return "polite";
		})), t(this, "labelBinds", p({
			label: d(() => this.action.action.value ? this.props.actionLabel : this.props.label),
			labelId: d(() => this.props.labelId)
		})), t(this, "descriptionBinds", p({
			description: d(() => this.action.action.value ? this.props.actionDescription : this.props.description),
			descriptionId: d(() => this.props.descriptionId)
		})), t(this, "onClickBack", (e, t) => {
			(t == null ? void 0 : t.value) === "back" && this.action.close(), this.event.onClick(e, t);
		}), this.props = u, this.refs = f, this.element = m, this.classDesign = h, this.className = g, this.components = _, this.slots = v, this.emits = x;
		let { BarsActionConstructor: C = b, DescriptionConstructor: w = l, EventConstructor: T = r, LabelConstructor: E = c, ModelConstructor: D = i, MotionTransformClassesConstructor: O = a, SkeletonConstructor: k = s, TextConstructor: A = n, WindowClassesConstructor: j = o } = S == null ? {} : S, M = new k(this.props, this.classDesign, ["classTextVariant"]);
		this.action = new C(this.props, this.refs), this.label = new E(this.labelBinds, g, void 0, v, void 0, void 0, void 0, M), this.description = new w(this.descriptionBinds, g, v, M), this.event = new T(void 0, void 0, x), this.windowClasses = new j(h), this.motionTransformClasses = new O(h), this.skeleton = M, this.text = new A(this.props), new D("action", this.emits, this.action.action);
	}
	initItem(e, t, n = !1) {
		var r, i;
		return {
			isSkeleton: this.props.isSkeleton,
			onClick: this.event.onClick,
			...y((r = this.props.buttonAttrs) == null ? {} : r, e == null ? {} : e),
			key: `${n ? "action" : ""}Bar-${(i = e == null ? void 0 : e.value) == null ? t : i}`,
			icon: v(e == null ? void 0 : e.icon, { animationShow: n }, "icon")
		};
	}
	initList(e, t = !1) {
		if (e) return _(e, (e, n) => this.initItem(e, n, t));
	}
}, S = {}, C = class extends g {
	constructor(e, n, r, i = x) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderBackButton", () => this.props.backHide && (!this.item.action.action.value || this.props.backActionHide) ? [] : [this.components.renderOne("button", {
			...this.item.backBinds.value,
			label: this.item.backLabel.value,
			selected: this.item.action.action.value
		})]), t(this, "renderContext", () => {
			var e;
			return [f("div", { class: (e = this.classes) == null ? void 0 : e.value.context }, [...this.item.label.render(), ...this.item.description.render()])];
		}), t(this, "renderBars", () => {
			let e = [];
			return this.item.action.action.value ? e : (e.push(...this.renderList(this.item.barsBinds.value)), this.initSlot("bars", e), e);
		}), t(this, "renderActionBars", () => {
			let e = [];
			return this.item.action.action.value && (e.push(...this.renderList(this.item.actionBarsBinds.value)), this.initSlot("actionBars", e)), e;
		}), t(this, "renderList", (e) => {
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
		var t;
		return f("div", {
			...this.getAttrs(),
			class: (t = this.classes) == null ? void 0 : t.value.main,
			...e.live(this.item.ariaLive.value)
		}, [
			...this.renderBackButton(),
			...this.renderContext(),
			...this.renderBars(),
			...this.renderActionBars()
		]);
	}
};
//#endregion
export { x as Bars, C as BarsDesign, u as BarsInclude, S as defaultsBars };

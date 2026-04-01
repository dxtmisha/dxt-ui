import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./ProgressInclude-BnPBYwJg.js";
import { t as r } from "./EnabledInclude-CkD_lxMY.js";
import { t as i } from "./EventClickInclude-6I8kuFc9.js";
import { t as a } from "./SkeletonInclude-DCCPPs2e.js";
import { t as o } from "./LabelInclude-DoZ7EUYO.js";
import { t as s } from "./getClassTagAStatic-Cdptb763.js";
import { t as c } from "./IconTrailingInclude-CCAEyAaE.js";
import { t as l } from "./RippleInclude-BBnpNshG.js";
import { computed as u, h as d } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
//#region src/constructors/Button/Button.ts
var p = class {
	constructor(d, f, p, m, h, g, _, v, y) {
		t(this, "label", void 0), t(this, "enabled", void 0), t(this, "icon", void 0), t(this, "progress", void 0), t(this, "ripple", void 0), t(this, "skeleton", void 0), t(this, "event", void 0), t(this, "tag", u(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), t(this, "classes", u(() => ({
			[`${this.className}--icon`]: this.icon.isIcon.value,
			[s(this.classDesign)]: !0,
			...this.skeleton.classes.value
		}))), t(this, "aria", u(() => {
			let t = {
				...this.progress.aria.value,
				...e.label(this.props.ariaLabel)
			};
			return this.isTagNotButton() ? {
				tabindex: "0",
				...t,
				...e.role("button"),
				...e.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
			} : t;
		})), t(this, "eventList", u(() => {
			let e = {
				...this.event.getHref(),
				onClick: this.event.onClick
			};
			return this.isTagNotButton() && (e.onKeydown = this.event.onKeydown), e;
		})), this.props = d, this.refs = f, this.element = p, this.classDesign = m, this.className = h, this.components = g, this.slots = _, this.emits = v;
		let { EnabledConstructor: b = r, EventConstructor: x = i, IconConstructor: S = c, LabelConstructor: C = o, ProgressConstructor: w = n, RippleConstructor: T = l, SkeletonConstructor: E = a } = y == null ? {} : y, D = new w(d, h, g, {
			circular: !0,
			inverse: !0
		});
		this.label = new C(d, h, void 0, _), this.enabled = new b(d, D), this.icon = new S(d, h, g), this.progress = D, this.ripple = new T(h, g, this.enabled), this.skeleton = new E(d, m, ["classBackground"]), this.event = new x(d, this.enabled, v);
	}
	isTagNotButton() {
		return !!(this.props.tag && ["a", "button"].indexOf(this.props.tag) === -1);
	}
}, m = {}, h = class extends f {
	constructor(e, n, r, i = p) {
		super(e, n, r), t(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.event.expose };
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			label: this.getSubClass("label"),
			icon: this.getSubClass("icon"),
			trailing: this.getSubClass("trailing"),
			loading: this.getSubClass("loading")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e, t;
		return d(this.item.tag.value, {
			...this.getAttrs(),
			ref: this.element,
			type: this.props.type,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			"data-value": this.props.value,
			disabled: this.item.enabled.isDisabledOrUndefined.value,
			...this.item.eventList.value,
			...this.item.aria.value
		}, [
			...this.item.progress.render(),
			...this.item.label.render(),
			...this.item.icon.render(),
			...this.item.ripple.render()
		]);
	}
};
//#endregion
export { m as n, p as r, h as t };

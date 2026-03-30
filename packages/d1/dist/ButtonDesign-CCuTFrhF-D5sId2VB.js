import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { n as t, r as n } from "./D1Icon-DNWzv1hb.js";
import { t as r } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n as i } from "./D1Progress-D8vaV3J3.js";
import { t as a } from "./EnabledInclude-D1O_lLPV--HDul4a0.js";
import { n as o } from "./SkeletonInclude-DtQCG1qF-BvbeQAJk.js";
import { t as s } from "./LabelInclude-BJc8uC4Y-Wn8gBK6K.js";
import { t as c } from "./getClassTagAStatic-Cdptb763-Dd7TrdF2.js";
import { n as l } from "./D1Ripple-4NrKuW_d.js";
import { computed as u, h as d } from "vue";
import { DesignConstructorAbstract as f } from "@dxtmisha/functional";
//#region ../constructor/dist/ButtonDesign-CCuTFrhF.js
var p = class {
	constructor(d, f, p, m, h, g, _, v, y) {
		e(this, "label", void 0), e(this, "enabled", void 0), e(this, "icon", void 0), e(this, "progress", void 0), e(this, "ripple", void 0), e(this, "skeleton", void 0), e(this, "event", void 0), e(this, "tag", u(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), e(this, "classes", u(() => ({
			[`${this.className}--icon`]: this.icon.isIcon.value,
			[c(this.classDesign)]: !0,
			...this.skeleton.classes.value
		}))), e(this, "aria", u(() => {
			let e = {
				...this.progress.aria.value,
				...r.label(this.props.ariaLabel)
			};
			return this.isTagNotButton() ? {
				tabindex: "0",
				...e,
				...r.role("button"),
				...r.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
			} : e;
		})), e(this, "eventList", u(() => {
			let e = {
				...this.event.getHref(),
				onClick: this.event.onClick
			};
			return this.isTagNotButton() && (e.onKeydown = this.event.onKeydown), e;
		})), this.props = d, this.refs = f, this.element = p, this.classDesign = m, this.className = h, this.components = g, this.slots = _, this.emits = v;
		let { EnabledConstructor: b = a, EventConstructor: x = n, IconConstructor: S = t, LabelConstructor: C = s, ProgressConstructor: w = i, RippleConstructor: T = l, SkeletonConstructor: E = o } = y == null ? {} : y, D = new w(d, h, g, {
			circular: !0,
			inverse: !0
		});
		this.label = new C(d, h, void 0, _), this.enabled = new b(d, D), this.icon = new S(d, h, g), this.progress = D, this.ripple = new T(h, g, this.enabled), this.skeleton = new E(d, m, ["classBackground"]), this.event = new x(d, this.enabled, v);
	}
	isTagNotButton() {
		return !!(this.props.tag && ["a", "button"].indexOf(this.props.tag) === -1);
	}
}, m = {}, h = class extends f {
	constructor(t, n, r, i = p) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
export { m as n, h as t };

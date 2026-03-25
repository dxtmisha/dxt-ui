import { n as e, r as t } from "./D1Icon-BnpmOB4B.js";
import { t as n } from "./getClassTagAStatic-BnVYlXHI-0U7MRJ3h.js";
import { t as r } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t as i } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as a } from "./EnabledInclude-B9oXYBtR-BRVL93PD.js";
import { t as o } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { n as s } from "./D1Progress-CD6wYH0x.js";
import { n as c } from "./D1Ripple-CvolQ-qx.js";
import { computed as l, h as u } from "vue";
import { DesignConstructorAbstract as d } from "@dxtmisha/functional";
//#region ../constructor/dist/ButtonDesign-CVm0z3Hs.js
var f = Object.defineProperty, p = (e, t, n) => t in e ? f(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, m = (e, t, n) => p(e, typeof t == "symbol" ? t : t + "", n), h = class {
	constructor(u, d, f, p, h, g, _, v, y) {
		m(this, "label"), m(this, "enabled"), m(this, "icon"), m(this, "progress"), m(this, "ripple"), m(this, "skeleton"), m(this, "event"), m(this, "tag", l(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "button")), m(this, "classes", l(() => ({
			[`${this.className}--icon`]: this.icon.isIcon.value,
			[n(this.classDesign)]: !0,
			...this.skeleton.classes.value
		}))), m(this, "aria", l(() => {
			let e = {
				...this.progress.aria.value,
				...i.label(this.props.ariaLabel)
			};
			return this.isTagNotButton() ? {
				tabindex: "0",
				...e,
				...i.role("button"),
				...i.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
			} : e;
		})), m(this, "eventList", l(() => {
			let e = {
				...this.event.getHref(),
				onClick: this.event.onClick
			};
			return this.isTagNotButton() && (e.onKeydown = this.event.onKeydown), e;
		})), this.props = u, this.refs = d, this.element = f, this.classDesign = p, this.className = h, this.components = g, this.slots = _, this.emits = v;
		let { EnabledConstructor: b = a, EventConstructor: x = t, IconConstructor: S = e, LabelConstructor: C = r, ProgressConstructor: w = s, RippleConstructor: T = c, SkeletonConstructor: E = o } = y == null ? {} : y, D = new w(u, h, g, {
			circular: !0,
			inverse: !0
		});
		this.label = new C(u, h, void 0, _), this.enabled = new b(u, D), this.icon = new S(u, h, g), this.progress = D, this.ripple = new T(h, g, this.enabled), this.skeleton = new E(u, p, ["classBackground"]), this.event = new x(u, this.enabled, v);
	}
	isTagNotButton() {
		return !!(this.props.tag && ["a", "button"].indexOf(this.props.tag) === -1);
	}
}, g = class extends d {
	constructor(e, t, n, r = h) {
		super(e, t, n), m(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return u(this.item.tag.value, {
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
export { g as t };

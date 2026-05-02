import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./ProgressInclude-CoWXemyD.js";
import { t as r } from "./EnabledInclude-BvkWRxpe.js";
import { t as i } from "./EventClickInclude-DmRb7XRg.js";
import { t as a } from "./SkeletonInclude-DtRzx2oh.js";
import { t as o } from "./LabelInclude-BeVk9z8H.js";
import { t as s } from "./DescriptionInclude-CBzY5AM-.js";
import { t as c } from "./getClassTagAStatic-Rruum_Od.js";
import { t as l } from "./IconTrailingInclude-Cv0LoeEy.js";
import { t as u } from "./CaptionInclude-DCRFVa3A.js";
import { t as d } from "./RippleInclude-CPzGRF4Q.js";
import { computed as f, h as p } from "vue";
import { DesignConstructorAbstract as m } from "@dxtmisha/functional";
//#region src/constructors/Cell/Cell.ts
var h = class {
	constructor(e, p, m, h, g, _, v, y, b) {
		t(this, "progress", void 0), t(this, "skeleton", void 0), t(this, "label", void 0), t(this, "description", void 0), t(this, "caption", void 0), t(this, "enabled", void 0), t(this, "icon", void 0), t(this, "ripple", void 0), t(this, "event", void 0), t(this, "classes", f(() => ({
			[`${this.className}--description`]: this.description.is.value,
			[c(this.classDesign)]: !0
		}))), t(this, "role", f(() => {
			if (this.props.role) return this.props.role;
			if (this.props.dynamic) return "button";
		})), this.props = e, this.refs = p, this.element = m, this.classDesign = h, this.className = g, this.components = _, this.slots = v, this.emits = y;
		let { CaptionConstructor: x = u, DescriptionConstructor: S = s, EnabledConstructor: C = r, EventConstructor: w = i, IconConstructor: T = l, LabelConstructor: E = o, ProgressConstructor: D = n, RippleConstructor: O = d, SkeletonConstructor: k = a } = b == null ? {} : b, A = new D(e, g, _, { position: "bottom" });
		this.skeleton = new k(e, h, ["classTextVariant"]), this.label = new E(e, g, void 0, v, void 0, void 0, void 0, this.skeleton), this.caption = new x(e, g, v), this.description = new S(e, g, v, this.skeleton), this.enabled = new C(e, A), this.icon = new T(e, g, _), this.progress = A, this.ripple = new O(g, _, this.enabled), this.event = new w(e, this.enabled, y);
	}
	getClassesSub() {
		return {
			label: `${this.className}__label`,
			description: `${this.className}__description`,
			caption: `${this.className}__caption`,
			trailing: `${this.className}__trailing`
		};
	}
}, g = {
	tag: "div",
	divider: !0
}, _ = class extends m {
	constructor(n, r, i, a = h) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderContext", () => {
			var e;
			return [p("div", {
				key: "context",
				class: (e = this.classes) == null ? void 0 : e.value.context
			}, [
				...this.item.label.render(),
				...this.item.caption.render(),
				...this.item.description.render()
			])];
		}), t(this, "renderTrailing", () => {
			if (this.slots && "trailing" in this.slots) {
				var e;
				return [p("div", {
					key: "trailing",
					class: (e = this.classes) == null ? void 0 : e.value.contextTrailing
				}, this.initSlot("trailing", void 0, this.item.getClassesSub()))];
			}
			return [];
		}), t(this, "renderBody", () => {
			if (this.slots && "body" in this.slots) {
				var e;
				return [p("div", {
					key: "body",
					class: (e = this.classes) == null ? void 0 : e.value.body
				}, this.initSlot("body", void 0, this.item.getClassesSub()))];
			}
			return [];
		}), t(this, "propsMain", f(() => {
			var t;
			let n = {
				...this.getAttrs(),
				class: (t = this.classes) == null ? void 0 : t.value.main,
				"data-value": this.props.value,
				"data-divider": this.props.divider ? "active" : void 0,
				...this.item.event.binds,
				...e.role(this.item.role.value)
			};
			return this.props.dynamic ? {
				...n,
				tabindex: "0"
			} : n;
		})), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.event.expose };
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			context: this.getSubClass("context"),
			contextTrailing: this.getSubClass("contextTrailing"),
			label: this.getSubClass("label"),
			description: this.getSubClass("description"),
			caption: this.getSubClass("caption"),
			icon: this.getSubClass("icon"),
			trailing: this.getSubClass("trailing"),
			body: this.getSubClass("body"),
			loading: this.getSubClass("loading")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return p((e = this.props.tag) == null ? "div" : e, this.propsMain.value, [
			...this.item.icon.render(),
			...this.renderContext(),
			...this.renderTrailing(),
			...this.renderBody(),
			...this.item.ripple.render(),
			...this.item.progress.render()
		]);
	}
};
//#endregion
export { h as Cell, _ as CellDesign, g as defaultsCell };

import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-hmGKPWdq.js";
import { t as n } from "./ProgressInclude-BnPBYwJg.js";
import { t as r } from "./EnabledInclude-CkD_lxMY.js";
import { t as i } from "./EventClickInclude-6I8kuFc9.js";
import { t as a } from "./SkeletonInclude-DCCPPs2e.js";
import { t as o } from "./DescriptionInclude-B_Xf_j3l.js";
import { t as s } from "./getClassTagAStatic-Cdptb763.js";
import { t as c } from "./IconTrailingInclude-CCAEyAaE.js";
import { t as l } from "./CaptionInclude-XqCixeva.js";
import { t as u } from "./RippleInclude-BBnpNshG.js";
import { t as d } from "./LabelHighlightInclude-bH6Bd_tJ.js";
import { n as f, t as p } from "./SuffixInclude-BtXj8RiG.js";
import { t as m } from "./BadgeInclude-xKutRNVE.js";
import { computed as h, h as g } from "vue";
import { DesignConstructorAbstract as _ } from "@dxtmisha/functional";
//#region src/constructors/ListItem/ListItem.ts
var v = class {
	constructor(g, _, v, y, b, x, S, C, w) {
		t(this, "icon", void 0), t(this, "label", void 0), t(this, "prefix", void 0), t(this, "caption", void 0), t(this, "suffix", void 0), t(this, "description", void 0), t(this, "badge", void 0), t(this, "ripple", void 0), t(this, "progress", void 0), t(this, "skeleton", void 0), t(this, "enabled", void 0), t(this, "event", void 0), t(this, "tag", h(() => this.props.tag ? this.props.tag : this.props.href ? "a" : "div")), t(this, "classes", h(() => ({
			[`${this.className}--description`]: this.description.is.value,
			[s(this.classDesign)]: !0
		}))), t(this, "binds", h(() => {
			var e;
			return {
				href: this.props.href,
				"data-value": (e = this.props.index) == null ? this.props.value : e,
				"data-divider": this.props.divider ? "active" : void 0,
				"data-parent": this.props.parent,
				"data-list-id": this.props.listId,
				...this.event.binds
			};
		})), t(this, "aria", h(() => {
			let t = {
				tabindex: this.props.tabindex,
				...e.role(this.props.role),
				...e.disabled(!!this.props.disabled)
			};
			switch (this.props.role) {
				case "menuitemradio":
				case "menuitemcheckbox": return {
					...t,
					...e.checked(!!this.props.selected)
				};
				case "menuitem":
				case "option": return {
					...t,
					...e.selected(!!this.props.selected)
				};
			}
			return t;
		})), this.props = g, this.refs = _, this.element = v, this.classDesign = y, this.className = b, this.components = x, this.slots = S, this.emits = C;
		let { BadgeIncludeConstructor: T = m, CaptionIncludeConstructor: E = l, DescriptionIncludeConstructor: D = o, EnabledIncludeConstructor: O = r, EventClickIncludeConstructor: k = i, IconTrailingIncludeConstructor: A = c, LabelHighlightIncludeConstructor: j = d, PrefixIncludeConstructor: M = f, ProgressIncludeConstructor: N = n, RippleIncludeConstructor: P = u, SkeletonIncludeConstructor: F = a, SuffixIncludeConstructor: I = p } = w == null ? {} : w, L = new N(g, b, x, { circular: !0 }), R = new F(g, y, ["classTextVariant"]), z = new O(g, L);
		this.icon = new A(g, b, x), this.label = new j(g, b, void 0, S, void 0, R), this.prefix = new M(g, b, S, R), this.caption = new E(g, b, S), this.suffix = new I(g, b, S), this.description = new D(g, b, S, R), this.badge = new T(g, b, x, { overlap: "static" }), this.ripple = new P(b, x, z), this.progress = L, this.skeleton = R, this.enabled = z, this.event = new k(g, z, C);
	}
}, y = {
	tabindex: "-1",
	role: "option",
	iconAlign: "center"
}, b = class extends _ {
	constructor(e, n, r) {
		super(e, n, r), t(this, "item", void 0), t(this, "renderBody", () => {
			var e;
			let t = [...this.renderContext(), ...this.item.description.render()];
			return this.initSlot("body", t), [g("div", { class: (e = this.classes) == null ? void 0 : e.value.body }, t)];
		}), t(this, "renderContext", () => {
			var e;
			return [g("div", { class: (e = this.classes) == null ? void 0 : e.value.context }, [
				...this.item.prefix.render(),
				...this.item.label.render(),
				...this.item.caption.render(),
				...this.item.suffix.render(),
				...this.item.badge.render()
			])];
		}), this.item = new v(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.initSlot("leading", n), n.push(...this.renderBody()), this.initSlot("trailing", n), n.push(...this.item.icon.render(), ...this.item.progress.render(), ...this.item.ripple.render()), g(this.item.tag.value, {
			...this.getAttrs(),
			ref: this.element,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			style: (t = this.styles) == null ? void 0 : t.value,
			...this.item.binds.value,
			...this.item.aria.value
		}, n);
	}
};
//#endregion
export { v as ListItem, b as ListItemDesign, y as defaultsListItem };

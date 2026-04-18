import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { t } from "./EventClickInclude-DB06AUmN.js";
import { t as n } from "./ModelInclude-D1hAxOaY.js";
import { t as r } from "./MotionTransformInclude-CuGsTmL_.js";
import { computed as i, h as a, ref as o } from "vue";
import { DesignConstructorAbstract as s, getElementId as c, toBinds as l } from "@dxtmisha/functional";
//#region src/constructors/Accordion/Accordion.ts
var u = class {
	constructor(a, s, l, u, d, f, p, m, h) {
		e(this, "motionTransform", void 0), e(this, "event", void 0), e(this, "open", o(!1)), e(this, "model", void 0), e(this, "elementHead", o()), e(this, "labelId", c()), e(this, "descriptionId", c()), e(this, "bindsCell", i(() => ({
			ref: this.elementHead,
			icon: this.props.icon,
			iconTrailing: this.props.iconArrowDown,
			label: this.props.label,
			description: this.props.description,
			dynamic: !0,
			labelId: this.labelId,
			descriptionId: this.descriptionId,
			onClick: this.event.onClick,
			onKeydown: this.event.onKeydown
		}))), this.props = a, this.refs = s, this.element = l, this.classDesign = u, this.className = d, this.components = f, this.slots = p, this.emits = m;
		let { EventClickIncludeConstructor: g = t, ModelIncludeConstructor: _ = n, MotionTransformIncludeConstructor: v = r } = h == null ? {} : h;
		this.motionTransform = new v(this.props, this.className, this.components, this.emits, i(() => ({
			section: !0,
			adaptive: "planeAlways",
			inDom: !0,
			ariaLabelledby: this.labelId,
			ariaDescribedby: this.descriptionId
		}))), this.event = new g(void 0, void 0, m), this.model = new _("open", this.emits, this.open);
	}
}, d = {
	clickOpen: !0,
	autoClose: !0,
	divider: !0
}, f = class extends s {
	constructor(t, n, r) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderHead", ({ isOpen: e, binds: t }) => {
			var n;
			let r = {};
			return this.slots && ("label" in this.slots && (r.label = (e) => this.initSlot("label", void 0, e)), "description" in this.slots && (r.description = (e) => this.initSlot("description", void 0, e)), "caption" in this.slots && (r.caption = (e) => this.initSlot("caption", void 0, e)), "trailing" in this.slots && (r.trailing = (e) => this.initSlot("trailing", void 0, e)), "body" in this.slots && (r.body = (e) => this.initSlot("body", void 0, e))), this.components.renderOne("cell", l(this.item.bindsCell.value, t, this.props.cellAttrs, {
				ref: this.item.elementHead,
				iconTurn: e.value,
				class: (n = this.classes) == null ? void 0 : n.value.head
			}), r);
		}), e(this, "renderBody", (e) => {
			var t;
			return a("div", { class: (t = this.classes) == null ? void 0 : t.value.body }, this.initSlot("default", void 0, e));
		}), this.item = new u(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.motionTransform.expose };
	}
	initClasses() {
		return {
			main: {},
			head: this.getSubClass("head"),
			body: this.getSubClass("body")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return this.item.motionTransform.render({
			head: this.renderHead,
			body: this.renderBody
		}, {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-divider": this.props.divider ? "divider" : void 0,
			...this.item.model.getBinds()
		});
	}
};
//#endregion
export { u as Accordion, f as AccordionDesign, d as defaultsAccordion };

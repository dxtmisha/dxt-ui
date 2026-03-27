import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { r as t } from "./D1Icon-m4nYEnhh.js";
import { t as n } from "./ModelInclude-ZrPu5V5T-BdFUphAW.js";
import { n as r, t as i } from "./MotionTransform-Bb0whO0l.js";
import { t as a } from "./Cell-C1o6hdBW.js";
import { computed as o, createBlock as s, defineComponent as c, h as l, mergeDefaults as u, openBlock as d, ref as f, unref as p } from "vue";
import { DesignConstructorAbstract as m, getElementId as h, toBinds as g } from "@dxtmisha/functional";
//#region ../constructor/dist/accordion.js
var _ = class {
	constructor(i, a, s, c, l, u, d, p, m) {
		e(this, "motionTransform", void 0), e(this, "event", void 0), e(this, "open", f(!1)), e(this, "model", void 0), e(this, "elementHead", f()), e(this, "labelId", h()), e(this, "descriptionId", h()), e(this, "bindsCell", o(() => ({
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
		}))), this.props = i, this.refs = a, this.element = s, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = p;
		let { EventClickIncludeConstructor: g = t, ModelIncludeConstructor: _ = n, MotionTransformIncludeConstructor: v = r } = m == null ? {} : m;
		this.motionTransform = new v(this.props, this.className, this.components, this.emits, o(() => ({
			section: !0,
			adaptive: "planeAlways",
			inDom: !0,
			ariaLabelledby: this.labelId,
			ariaDescribedby: this.descriptionId
		}))), this.event = new g(void 0, void 0, p), this.model = new _("open", this.emits, this.open);
	}
}, v = {
	clickOpen: !0,
	autoClose: !0,
	divider: !0
}, y = class extends m {
	constructor(t, n, r) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderHead", ({ isOpen: e, binds: t }) => {
			var n;
			let r = {};
			return this.slots && ("label" in this.slots && (r.label = (e) => this.initSlot("label", void 0, e)), "description" in this.slots && (r.description = (e) => this.initSlot("description", void 0, e)), "caption" in this.slots && (r.caption = (e) => this.initSlot("caption", void 0, e)), "trailing" in this.slots && (r.trailing = (e) => this.initSlot("trailing", void 0, e)), "body" in this.slots && (r.body = (e) => this.initSlot("body", void 0, e))), this.components.renderOne("cell", g(this.item.bindsCell.value, t, this.props.cellAttrs, {
				ref: this.item.elementHead,
				iconTurn: e.value,
				class: (n = this.classes) == null ? void 0 : n.value.head
			}), r);
		}), e(this, "renderBody", (e) => {
			var t;
			return l("div", { class: (t = this.classes) == null ? void 0 : t.value.body }, this.initSlot("default", void 0, e));
		}), this.item = new _(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, b = {
	...v,
	iconArrowDown: "keyboard_arrow_down",
	divider: !0
}, x = /* @__PURE__ */ c({
	name: "D1Accordion",
	__name: "D1Accordion",
	props: /* @__PURE__ */ u({
		label: {},
		labelId: {},
		description: {},
		descriptionId: {},
		icon: {},
		open: { type: Boolean },
		clickOpen: { type: Boolean },
		autoClose: { type: Boolean },
		motionTransformAttrs: {},
		modelOpen: {},
		"onUpdate:open": { type: Function },
		"onUpdate:modelOpen": { type: Function },
		cellAttrs: {},
		iconArrowDown: {},
		divider: { type: Boolean }
	}, b),
	emits: [
		"click",
		"clickLite",
		"transform",
		"transformLite",
		"update:open",
		"update:modelOpen"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, c = e, l = new y("d1.accordion", c, {
			emits: r,
			classes: o(() => ({ main: {
				"d1-accordion": !0,
				"d1-accordion--divider": c.divider
			} })),
			styles: o(() => ({})),
			components: {
				cell: a,
				motionTransform: i
			}
		}), u = l.render();
		return t(l.expose()), (e, t) => (d(), s(p(u)));
	}
});
//#endregion
export { x as t };

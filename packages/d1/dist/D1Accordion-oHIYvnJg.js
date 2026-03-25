import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./ModelInclude-BiYm_iCQ-Bgr6EZxb.js";
import { n, t as r } from "./MotionTransform-DHopcUHp.js";
import { t as i } from "./Cell-DccsHMU3.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, ref as d, unref as f } from "vue";
import { DesignConstructorAbstract as p, getElementId as m, toBinds as h } from "@dxtmisha/functional";
//#region ../constructor/dist/accordion.js
var g = Object.defineProperty, _ = (e, t, n) => t in e ? g(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t, n) => _(e, typeof t == "symbol" ? t : t + "", n), y = class {
	constructor(r, i, o, s, c, l, u, f, p) {
		v(this, "motionTransform"), v(this, "event"), v(this, "open", d(!1)), v(this, "model"), v(this, "elementHead", d()), v(this, "labelId", m()), v(this, "descriptionId", m()), v(this, "bindsCell", a(() => ({
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
		}))), this.props = r, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = f;
		let { EventClickIncludeConstructor: h = e, ModelIncludeConstructor: g = t, MotionTransformIncludeConstructor: _ = n } = p == null ? {} : p;
		this.motionTransform = new _(this.props, this.className, this.components, this.emits, a(() => ({
			section: !0,
			adaptive: "planeAlways",
			inDom: !0,
			ariaLabelledby: this.labelId,
			ariaDescribedby: this.descriptionId
		}))), this.event = new h(void 0, void 0, f), this.model = new g("open", this.emits, this.open);
	}
}, b = {
	clickOpen: !0,
	autoClose: !0,
	divider: !0
}, x = class extends p {
	constructor(e, t, n) {
		super(e, t, n), v(this, "item"), v(this, "renderHead", ({ isOpen: e, binds: t }) => {
			var n;
			let r = {};
			return this.slots && ("label" in this.slots && (r.label = (e) => this.initSlot("label", void 0, e)), "description" in this.slots && (r.description = (e) => this.initSlot("description", void 0, e)), "caption" in this.slots && (r.caption = (e) => this.initSlot("caption", void 0, e)), "trailing" in this.slots && (r.trailing = (e) => this.initSlot("trailing", void 0, e)), "body" in this.slots && (r.body = (e) => this.initSlot("body", void 0, e))), this.components.renderOne("cell", h(this.item.bindsCell.value, t, this.props.cellAttrs, {
				ref: this.item.elementHead,
				iconTurn: e.value,
				class: (n = this.classes) == null ? void 0 : n.value.head
			}), r);
		}), v(this, "renderBody", (e) => {
			var t;
			return c("div", { class: (t = this.classes) == null ? void 0 : t.value.body }, this.initSlot("default", void 0, e));
		}), this.item = new y(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, S = {
	...b,
	iconArrowDown: "keyboard_arrow_down",
	divider: !0
}, C = /* @__PURE__ */ s({
	name: "D1Accordion",
	__name: "D1Accordion",
	props: /* @__PURE__ */ l({
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
	}, S),
	emits: [
		"click",
		"clickLite",
		"transform",
		"transformLite",
		"update:open",
		"update:modelOpen"
	],
	setup(e, { expose: t, emit: n }) {
		let s = n, c = e, l = new x("d1.accordion", c, {
			emits: s,
			classes: a(() => ({ main: {
				"d1-accordion": !0,
				"d1-accordion--divider": c.divider
			} })),
			styles: a(() => ({})),
			components: {
				cell: i,
				motionTransform: r
			}
		}), d = l.render();
		return t(l.expose()), (e, t) => (u(), o(f(d)));
	}
});
//#endregion
export { C as t };

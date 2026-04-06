import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-Cb8myFDE.js";
import { t as n } from "./Button-B1Ed8ZtL.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u, inArray as d, toBinds as f } from "@dxtmisha/functional";
//#region ../constructor/dist/actions.js
var p = class {
	constructor(n, i, a, o, s, c, l, u, d) {
		e(this, "event", void 0), e(this, "isList", r(() => !!(this.props.list || this.slots && "default" in this.slots))), e(this, "isSecondary", r(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots))), this.props = n, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { EventConstructor: f = t } = d == null ? {} : d;
		this.event = new f(void 0, void 0, u);
	}
}, m = { align: "right" }, h = class extends u {
	constructor(t, n, r, i = p) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => {
			let e = [];
			return this.item.isList.value && (this.props.list && this.props.list.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", f({ onClick: this.item.event.onClick }, this.props.buttonAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.list] }), void 0, `list-${n}`);
			}), this.initSlot("default", e)), e;
		}), e(this, "renderSecondary", () => {
			let e = [];
			return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", f(this.props.buttonSecondaryAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.secondary] }), void 0, `secondary-${n}`);
			}), this.initSlot("secondary", e)), e;
		}), e(this, "renderSpacer", () => {
			var e;
			return [o("div", { class: (e = this.classes) == null ? void 0 : e.value.spacer })];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			item: this.getSubClass("item"),
			list: this.getSubClass("list"),
			secondary: this.getSubClass("secondary"),
			spacer: this.getSubClass("spacer")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return o("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			...this.renderList(),
			...this.renderSpacer(),
			...this.renderSecondary()
		]);
	}
}, g = {
	align: [
		"none",
		"center",
		"left",
		"right",
		"block",
		"auto"
	],
	flexible: [
		"adaptiveSm",
		"adaptiveMd",
		"adaptiveLg",
		"adaptiveXl",
		"adaptive2xl",
		"containerSm",
		"containerMd",
		"containerLg",
		"containerXl",
		"container2xl"
	],
	padding: [
		"sm",
		"md",
		"lg",
		"ySm",
		"yMd",
		"yLg",
		"none"
	]
}, _ = {
	...m,
	buttonSecondaryAttrs: {
		text: !0,
		inverse: !0
	},
	align: "right",
	paddingByIndent: !0
}, v = /* @__PURE__ */ a({
	name: "D1Actions",
	__name: "D1Actions",
	props: /* @__PURE__ */ s({
		list: {},
		listSecondary: {},
		buttonAttrs: {},
		buttonSecondaryAttrs: {},
		align: {},
		flexible: {},
		wrap: { type: Boolean },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, _),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: a }) {
		let o = a, s = e, u = new h("d1.actions", s, {
			emits: o,
			classes: r(() => ({ main: {
				"d1-actions": !0,
				[`d1-actions--align--${s.align}`]: d(g.align, s.align),
				[`d1-actions--flexible--${s.flexible}`]: d(g.flexible, s.flexible),
				"d1-actions--wrap": s.wrap,
				[`d1-actions--padding--${s.padding}`]: d(g.padding, s.padding),
				"d1-actions--paddingByIndent": s.paddingByIndent
			} })),
			styles: r(() => ({})),
			components: { button: n }
		}), f = u.render();
		return t(u.expose()), (e, t) => (c(), i(l(f)));
	}
});
//#endregion
export { v as t };

import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { r as t } from "./D1Icon-BuvQZC32.js";
import { t as n } from "./Button-BKNXFiNf.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u, getRef as d, inArray as f, toBinds as p } from "@dxtmisha/functional";
//#region ../constructor/dist/ActionsInclude-BzyGXlK7.js
var m = class {
	constructor(t, n, i, a, o, s) {
		e(this, "is", r(() => !!(!this.props.actionsHide && (this.binds.value.list || this.binds.value.listSecondary)))), e(this, "binds", r(() => {
			var e, t;
			let n = p(d(this.extra), this.props.actionsAttrs, { class: `${this.className}__actions` });
			return {
				...n,
				list: (e = this.props.actionsList) == null ? n.list : e,
				listSecondary: (t = this.props.actionsSecondary) == null ? n.listSecondary : t,
				onClick: this.onClick
			};
		})), e(this, "render", () => this.components && this.is.value ? this.components.render("actions", this.binds.value, void 0, this.index) : []), e(this, "onClick", (e, t) => {
			var n, r;
			(n = this.emits) == null || n.call(this, "actions", e, t), (r = this.emits) == null || r.call(this, "actionsLite", t);
		}), this.props = t, this.className = n, this.components = i, this.emits = a, this.extra = o, this.index = s;
	}
}, h = class {
	constructor(n, i, a, o, s, c, l, u, d) {
		e(this, "event", void 0), e(this, "isList", r(() => !!(this.props.list || this.slots && "default" in this.slots))), e(this, "isSecondary", r(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots))), this.props = n, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { EventConstructor: f = t } = d == null ? {} : d;
		this.event = new f(void 0, void 0, u);
	}
}, g = { align: "right" }, _ = class extends u {
	constructor(t, n, r, i = h) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderList", () => {
			let e = [];
			return this.item.isList.value && (this.props.list && this.props.list.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", p({ onClick: this.item.event.onClick }, this.props.buttonAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.list] }), void 0, `list-${n}`);
			}), this.initSlot("default", e)), e;
		}), e(this, "renderSecondary", () => {
			let e = [];
			return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", p(this.props.buttonSecondaryAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.secondary] }), void 0, `secondary-${n}`);
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
}, v = {
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
}, y = {
	...g,
	buttonSecondaryAttrs: {
		text: !0,
		inverse: !0
	},
	align: "right",
	paddingByIndent: !0
}, b = /* @__PURE__ */ a({
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
	}, y),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: a }) {
		let o = a, s = e, u = new _("d1.actions", s, {
			emits: o,
			classes: r(() => ({ main: {
				"d1-actions": !0,
				[`d1-actions--align--${s.align}`]: f(v.align, s.align),
				[`d1-actions--flexible--${s.flexible}`]: f(v.flexible, s.flexible),
				"d1-actions--wrap": s.wrap,
				[`d1-actions--padding--${s.padding}`]: f(v.padding, s.padding),
				"d1-actions--paddingByIndent": s.paddingByIndent
			} })),
			styles: r(() => ({})),
			components: { button: n }
		}), d = u.render();
		return t(u.expose()), (e, t) => (c(), i(l(d)));
	}
});
//#endregion
export { m as n, b as t };

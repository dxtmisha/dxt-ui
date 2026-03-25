import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./Button-BdYcx7nx.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { DesignConstructorAbstract as l, getRef as u, inArray as d, toBinds as f } from "@dxtmisha/functional";
//#region ../constructor/dist/ActionsInclude-H5ZWeXJj.js
var p = Object.defineProperty, m = (e, t, n) => t in e ? p(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, h = (e, t, n) => m(e, typeof t == "symbol" ? t : t + "", n), g = class {
	constructor(e, t, r, i, a, o) {
		h(this, "is", n(() => !!(!this.props.actionsHide && (this.binds.value.list || this.binds.value.listSecondary)))), h(this, "binds", n(() => {
			var e, t;
			let n = f(u(this.extra), this.props.actionsAttrs, { class: `${this.className}__actions` });
			return {
				...n,
				list: (e = this.props.actionsList) == null ? n.list : e,
				listSecondary: (t = this.props.actionsSecondary) == null ? n.listSecondary : t,
				onClick: this.onClick
			};
		})), h(this, "render", () => this.components && this.is.value ? this.components.render("actions", this.binds.value, void 0, this.index) : []), h(this, "onClick", (e, t) => {
			var n, r;
			(n = this.emits) == null || n.call(this, "actions", e, t), (r = this.emits) == null || r.call(this, "actionsLite", t);
		}), this.props = e, this.className = t, this.components = r, this.emits = i, this.extra = a, this.index = o;
	}
}, _ = Object.defineProperty, v = (e, t, n) => t in e ? _(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, y = (e, t, n) => v(e, typeof t == "symbol" ? t : t + "", n), b = class {
	constructor(t, r, i, a, o, s, c, l, u) {
		y(this, "event"), y(this, "isList", n(() => !!(this.props.list || this.slots && "default" in this.slots))), y(this, "isSecondary", n(() => !!(this.props.listSecondary || this.slots && "secondary" in this.slots))), this.props = t, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { EventConstructor: d = e } = u == null ? {} : u;
		this.event = new d(void 0, void 0, l);
	}
}, x = { align: "right" }, S = class extends l {
	constructor(e, t, n, r = b) {
		super(e, t, n), y(this, "item"), y(this, "renderList", () => {
			let e = [];
			return this.item.isList.value && (this.props.list && this.props.list.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", f({ onClick: this.item.event.onClick }, this.props.buttonAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.list] }), void 0, `list-${n}`);
			}), this.initSlot("default", e)), e;
		}), y(this, "renderSecondary", () => {
			let e = [];
			return this.item.isSecondary.value && (this.props.listSecondary && this.props.listSecondary.forEach((t, n) => {
				var r, i;
				this.components.renderAdd(e, "button", f(this.props.buttonSecondaryAttrs, t, { class: [(r = this.classes) == null ? void 0 : r.value.item, (i = this.classes) == null ? void 0 : i.value.secondary] }), void 0, `secondary-${n}`);
			}), this.initSlot("secondary", e)), e;
		}), y(this, "renderSpacer", () => {
			var e;
			return [a("div", { class: (e = this.classes) == null ? void 0 : e.value.spacer })];
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return a("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			...this.renderList(),
			...this.renderSpacer(),
			...this.renderSecondary()
		]);
	}
}, C = {
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
}, w = {
	...x,
	buttonSecondaryAttrs: {
		text: !0,
		inverse: !0
	},
	align: "right",
	paddingByIndent: !0
}, T = /* @__PURE__ */ i({
	name: "D1Actions",
	__name: "D1Actions",
	props: /* @__PURE__ */ o({
		list: {},
		listSecondary: {},
		buttonAttrs: {},
		buttonSecondaryAttrs: {},
		align: {},
		flexible: {},
		wrap: { type: Boolean },
		padding: {},
		paddingByIndent: { type: Boolean }
	}, w),
	emits: ["click", "clickLite"],
	setup(e, { expose: i, emit: a }) {
		let o = a, l = e, u = new S("d1.actions", l, {
			emits: o,
			classes: n(() => ({ main: {
				"d1-actions": !0,
				[`d1-actions--align--${l.align}`]: d(C.align, l.align),
				[`d1-actions--flexible--${l.flexible}`]: d(C.flexible, l.flexible),
				"d1-actions--wrap": l.wrap,
				[`d1-actions--padding--${l.padding}`]: d(C.padding, l.padding),
				"d1-actions--paddingByIndent": l.paddingByIndent
			} })),
			styles: n(() => ({})),
			components: { button: t }
		}), f = u.render();
		return i(u.expose()), (e, t) => (s(), r(c(f)));
	}
});
//#endregion
export { g as n, T as t };

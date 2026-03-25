import { t as e } from "./MotionTransform-DHopcUHp.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as n } from "./ListGroupOpen-Bl_HIQoV-BvmJYqq0.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u } from "@dxtmisha/functional";
//#region ../constructor/dist/listGroup.js
var d = Object.defineProperty, f = (e, t, n) => t in e ? d(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, p = (e, t, n) => f(e, typeof t == "symbol" ? t : t + "", n), m = class {
	constructor(e, t, r, i, a, o, s, c, l) {
		p(this, "open"), p(this, "transformBinds", () => ({
			autoClose: !1,
			section: !0,
			adaptive: "planeAlways",
			onTransformLite: this.open.onOpen
		})), this.props = e, this.refs = t, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { ListGroupOpenConstructor: u = n } = l == null ? {} : l;
		this.open = new u(this.props);
	}
}, h = {}, g = class extends u {
	constructor(e, t, n, r = m) {
		super(e, t, n), p(this, "item"), p(this, "renderTransform", () => this.components.render("motionTransform", {
			...this.item.transformBinds(),
			open: this.item.open.is.value
		}, {
			head: this.renderHead,
			body: this.renderList
		})), p(this, "renderHead", (e) => {
			var t;
			return o("div", { class: (t = this.classes) == null ? void 0 : t.value.head }, this.initSlot("head", void 0, {
				open: this.item.open.is.value,
				...e.binds
			}));
		}), p(this, "renderList", () => {
			var e;
			return o("div", { class: (e = this.classes) == null ? void 0 : e.value.list }, this.initSlot("list"));
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { open: this.item.open.is };
	}
	initClasses() {
		return {
			main: {},
			head: this.getSubClass("head"),
			list: this.getSubClass("list")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return o("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-open": this.item.open.is.value ? "open" : "close",
			"data-divider": this.props.divider ? "divider" : void 0,
			...t.role("group")
		}, this.renderTransform());
	}
}, _ = { ...h }, v = /* @__PURE__ */ a({
	name: "D1ListGroup",
	__name: "D1ListGroup",
	props: /* @__PURE__ */ s({
		divider: { type: Boolean },
		open: { type: Boolean }
	}, _),
	setup(t, { expose: n, emit: a }) {
		let o = a, s = t, u = new g("d1.listGroup", s, {
			emits: o,
			classes: r(() => ({ main: {
				"d1-listGroup": !0,
				"d1-listGroup--open": s.open,
				"d1-listGroup--divider": s.divider
			} })),
			styles: r(() => ({})),
			components: { motionTransform: e }
		}), d = u.render();
		return n(u.expose()), (e, t) => (c(), i(l(d)));
	}
});
//#endregion
export { v as t };

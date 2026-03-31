import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./MotionTransform-vZx_a2oR.js";
import { t as n } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as r } from "./ListGroupOpen-jO-d8MxK-Inq0sxet.js";
import { computed as i, createBlock as a, defineComponent as o, h as s, mergeDefaults as c, openBlock as l, unref as u } from "vue";
import { DesignConstructorAbstract as d } from "@dxtmisha/functional";
//#region ../constructor/dist/listGroup.js
var f = class {
	constructor(t, n, i, a, o, s, c, l, u) {
		e(this, "open", void 0), e(this, "transformBinds", () => ({
			autoClose: !1,
			section: !0,
			adaptive: "planeAlways",
			onTransformLite: this.open.onOpen
		})), this.props = t, this.refs = n, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { ListGroupOpenConstructor: d = r } = u == null ? {} : u;
		this.open = new d(this.props);
	}
}, p = {}, m = class extends d {
	constructor(t, n, r, i = f) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderTransform", () => this.components.render("motionTransform", {
			...this.item.transformBinds(),
			open: this.item.open.is.value
		}, {
			head: this.renderHead,
			body: this.renderList
		})), e(this, "renderHead", (e) => {
			var t;
			return s("div", { class: (t = this.classes) == null ? void 0 : t.value.head }, this.initSlot("head", void 0, {
				open: this.item.open.is.value,
				...e.binds
			}));
		}), e(this, "renderList", () => {
			var e;
			return s("div", { class: (e = this.classes) == null ? void 0 : e.value.list }, this.initSlot("list"));
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return s("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			"data-open": this.item.open.is.value ? "open" : "close",
			"data-divider": this.props.divider ? "divider" : void 0,
			...n.role("group")
		}, this.renderTransform());
	}
}, h = { ...p }, g = /* @__PURE__ */ o({
	name: "D1ListGroup",
	__name: "D1ListGroup",
	props: /* @__PURE__ */ c({
		divider: { type: Boolean },
		open: { type: Boolean }
	}, h),
	setup(e, { expose: n, emit: r }) {
		let o = r, s = e, c = new m("d1.listGroup", s, {
			emits: o,
			classes: i(() => ({ main: {
				"d1-listGroup": !0,
				"d1-listGroup--open": s.open,
				"d1-listGroup--divider": s.divider
			} })),
			styles: i(() => ({})),
			components: { motionTransform: t }
		}), d = c.render();
		return n(c.expose()), (e, t) => (l(), a(u(d)));
	}
});
//#endregion
export { g as t };

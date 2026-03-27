import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { n as t, t as n } from "./Window-Dpg33aic.js";
import { t as r } from "./ListGroupOpen-jO-d8MxK-CaL368XR.js";
import { computed as i, createBlock as a, defineComponent as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u, inArray as d } from "@dxtmisha/functional";
//#region ../constructor/dist/listMenu.js
var f = class {
	constructor(n, a, o, s, c, l, u, d, f) {
		e(this, "open", void 0), e(this, "window", void 0), this.props = n, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { ListGroupOpenConstructor: p = r, WindowIncludeConstructor: m = t } = f == null ? {} : f;
		this.open = new p(this.props), this.window = new m(this.props, this.className, this.components, this.emits, i(() => ({
			adaptive: "menu",
			axis: this.props.axis,
			onWindow: this.open.onOpen,
			role: "menu",
			ariaHaspopup: "menu"
		})));
	}
}, p = { autoClose: !0 }, m = class extends u {
	constructor(t, n, r, i = f) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { ...this.item.window.expose };
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
		return this.item.window.render({
			control: (e) => this.initSlot("head", void 0, e),
			default: () => this.initSlot("list")
		}, {
			...this.getAttrs(),
			open: this.item.open.is.value,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			inert: !1,
			autoTabIndex: !1,
			closeOnEsc: !1
		});
	}
}, h = { axis: ["x", "y"] }, g = { ...p }, _ = /* @__PURE__ */ o({
	name: "D1ListMenu",
	__name: "D1ListMenu",
	props: /* @__PURE__ */ s({
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		open: { type: Boolean },
		axis: {},
		divider: { type: Boolean }
	}, g),
	emits: ["window"],
	setup(e, { expose: t, emit: r }) {
		let o = r, s = e, u = new m("d1.listMenu", s, {
			emits: o,
			classes: i(() => ({ main: {
				"d1-listMenu": !0,
				"d1-listMenu--open": s.open,
				[`d1-listMenu--axis--${s.axis}`]: d(h.axis, s.axis),
				"d1-listMenu--divider": s.divider
			} })),
			styles: i(() => ({})),
			components: { window: n }
		}), f = u.render();
		return t(u.expose()), (e, t) => (c(), a(l(f)));
	}
});
//#endregion
export { _ as t };

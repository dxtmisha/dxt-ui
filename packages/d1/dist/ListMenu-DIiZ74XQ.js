import { n as e, t } from "./Window-9iCpMfYB.js";
import { t as n } from "./ListGroupOpen-Bl_HIQoV-BvmJYqq0.js";
import { computed as r, createBlock as i, defineComponent as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { DesignConstructorAbstract as l, inArray as u } from "@dxtmisha/functional";
//#region ../constructor/dist/listMenu.js
var d = Object.defineProperty, f = (e, t, n) => t in e ? d(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, p = (e, t, n) => f(e, typeof t == "symbol" ? t : t + "", n), m = class {
	constructor(t, i, a, o, s, c, l, u, d) {
		p(this, "open"), p(this, "window"), this.props = t, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { ListGroupOpenConstructor: f = n, WindowIncludeConstructor: m = e } = d == null ? {} : d;
		this.open = new f(this.props), this.window = new m(this.props, this.className, this.components, this.emits, r(() => ({
			adaptive: "menu",
			axis: this.props.axis,
			onWindow: this.open.onOpen,
			role: "menu",
			ariaHaspopup: "menu"
		})));
	}
}, h = { autoClose: !0 }, g = class extends l {
	constructor(e, t, n, r = m) {
		super(e, t, n), p(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, _ = { axis: ["x", "y"] }, v = { ...h }, y = /* @__PURE__ */ a({
	name: "D1ListMenu",
	__name: "D1ListMenu",
	props: /* @__PURE__ */ o({
		disabled: { type: Boolean },
		autoClose: { type: Boolean },
		windowAttrs: {},
		open: { type: Boolean },
		axis: {},
		divider: { type: Boolean }
	}, v),
	emits: ["window"],
	setup(e, { expose: n, emit: a }) {
		let o = a, l = e, d = new g("d1.listMenu", l, {
			emits: o,
			classes: r(() => ({ main: {
				"d1-listMenu": !0,
				"d1-listMenu--open": l.open,
				[`d1-listMenu--axis--${l.axis}`]: u(_.axis, l.axis),
				"d1-listMenu--divider": l.divider
			} })),
			styles: r(() => ({})),
			components: { window: t }
		}), f = d.render();
		return n(d.expose()), (e, t) => (s(), i(c(f)));
	}
});
//#endregion
export { y as t };

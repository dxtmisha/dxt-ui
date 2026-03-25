import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, openBlock as o, unref as s } from "vue";
import { DesignConstructorAbstract as c, createElement as l } from "@dxtmisha/functional";
//#region ../constructor/dist/RippleInclude-Du5yIzX_.js
var u = Object.defineProperty, d = (e, t, n) => t in e ? u(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, f = (e, t, n) => d(e, typeof t == "symbol" ? t : t + "", n), p = class {
	constructor(e, t, n) {
		f(this, "render", () => this.components && this.components.is("ripple") && (!this.enabled || this.enabled.isEnabled.value) ? this.components.render("ripple", { class: `${this.className}__ripple` }) : []), this.className = e, this.components = t, this.enabled = n;
	}
}, m = Object.defineProperty, h = (e, t, n) => t in e ? m(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, g = (e, t, n) => h(e, typeof t == "symbol" ? t : t + "", n), _ = class {
	constructor(e, t, n) {
		g(this, "classItem"), g(this, "classEnd"), g(this, "styleX"), g(this, "styleY"), this.props = e, this.element = t, this.className = n, this.classItem = `${this.className}__item`, this.classEnd = `${this.className}--end`, this.styleX = `--${this.className}-sys-x`, this.styleY = `--${this.className}-sys-y`;
	}
	add(e, t) {
		var n;
		if ((n = this.props) != null && n.disabled) return;
		let r = this.element.value;
		r && l(r, "span", (n) => {
			n.onanimationend = () => n.classList.add(this.classEnd), n.ontransitionend = () => {
				var e;
				return (e = n.parentElement) == null ? void 0 : e.removeChild(n);
			}, n.style.setProperty(this.styleX, `${e}px`), n.style.setProperty(this.styleY, `${t}px`), n.classList.add(this.classItem);
		});
	}
}, v = class {
	constructor(e, t, n, r, i, a, o, s) {
		g(this, "item"), g(this, "onClick", (e) => this.item.add(e.offsetX, e.offsetY)), this.props = e, this.refs = t, this.element = n, this.className = r, this.components = i, this.slots = a, this.emits = o;
		let { RippleItemConstructor: c = _ } = s == null ? {} : s;
		this.item = new c(e, n, r);
	}
}, y = {}, b = class extends c {
	constructor(e, t, n, r = v) {
		super(e, t, n), g(this, "item"), this.item = new r(this.props, this.refs, this.element, this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			item: this.getSubClass("item")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var t;
		return i("span", {
			ref: this.element,
			key: "ripple",
			class: (t = this.classes) == null ? void 0 : t.value.main,
			onPointerdown: this.item.onClick,
			...e.hidden()
		});
	}
}, x = { ...y }, S = /* @__PURE__ */ r({
	name: "D1Ripple",
	__name: "D1Ripple",
	props: /* @__PURE__ */ a({ disabled: { type: Boolean } }, x),
	setup(e, { expose: r, emit: i }) {
		let a = new b("d1.ripple", e, {
			emits: i,
			classes: t(() => ({ main: { "d1-ripple": !0 } })),
			styles: t(() => ({}))
		}), c = a.render();
		return r(a.expose()), (e, t) => (o(), n(s(c)));
	}
});
//#endregion
export { p as n, S as t };

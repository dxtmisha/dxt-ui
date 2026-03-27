import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { DesignConstructorAbstract as l, createElement as u } from "@dxtmisha/functional";
//#region ../constructor/dist/RippleInclude-DUp1Zljh.js
var d = class {
	constructor(t, n, r) {
		e(this, "render", () => this.components && this.components.is("ripple") && (!this.enabled || this.enabled.isEnabled.value) ? this.components.render("ripple", { class: `${this.className}__ripple` }) : []), this.className = t, this.components = n, this.enabled = r;
	}
}, f = class {
	constructor(t, n, r) {
		e(this, "classItem", void 0), e(this, "classEnd", void 0), e(this, "styleX", void 0), e(this, "styleY", void 0), this.props = t, this.element = n, this.className = r, this.classItem = `${this.className}__item`, this.classEnd = `${this.className}--end`, this.styleX = `--${this.className}-sys-x`, this.styleY = `--${this.className}-sys-y`;
	}
	add(e, t) {
		var n;
		if ((n = this.props) != null && n.disabled) return;
		let r = this.element.value;
		r && u(r, "span", (n) => {
			n.onanimationend = () => n.classList.add(this.classEnd), n.ontransitionend = () => {
				var e;
				return (e = n.parentElement) == null ? void 0 : e.removeChild(n);
			}, n.style.setProperty(this.styleX, `${e}px`), n.style.setProperty(this.styleY, `${t}px`), n.classList.add(this.classItem);
		});
	}
}, p = class {
	constructor(t, n, r, i, a, o, s, c) {
		e(this, "item", void 0), e(this, "onClick", (e) => this.item.add(e.offsetX, e.offsetY)), this.props = t, this.refs = n, this.element = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
		let { RippleItemConstructor: l = f } = c == null ? {} : c;
		this.item = new l(t, r, i);
	}
}, m = {}, h = class extends l {
	constructor(t, n, r, i = p) {
		super(t, n, r), e(this, "item", void 0), this.item = new i(this.props, this.refs, this.element, this.getName(), this.components, this.slots, this.emits), this.init();
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
		var e;
		return a("span", {
			ref: this.element,
			key: "ripple",
			class: (e = this.classes) == null ? void 0 : e.value.main,
			onPointerdown: this.item.onClick,
			...t.hidden()
		});
	}
}, g = { ...m }, _ = /* @__PURE__ */ i({
	name: "D1Ripple",
	__name: "D1Ripple",
	props: /* @__PURE__ */ o({ disabled: { type: Boolean } }, g),
	setup(e, { expose: t, emit: i }) {
		let a = new h("d1.ripple", e, {
			emits: i,
			classes: n(() => ({ main: { "d1-ripple": !0 } })),
			styles: n(() => ({}))
		}), o = a.render();
		return t(a.expose()), (e, t) => (s(), r(c(o)));
	}
});
//#endregion
export { d as n, _ as t };

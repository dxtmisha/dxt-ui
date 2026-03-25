import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, openBlock as s, unref as c } from "vue";
import { DesignConstructorAbstract as l, applyTemplate as u, getRef as d, isFilled as f, isNull as p, toBinds as m, toNumber as h } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldCounterInclude-D0oojGWY.js
var g = Object.defineProperty, _ = (e, t, n) => t in e ? g(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t, n) => _(e, typeof t == "symbol" ? t : t + "", n), y = class {
	constructor(e, t, r, i, a) {
		v(this, "isCounter", n(() => !!(this.props.counterShow && (!p(this.props.counter) || f(this.props.maxlength))))), v(this, "binds", n(() => m(d(this.extra), {
			id: this.props.counterId,
			counter: this.props.counter,
			maxlength: this.props.maxlength,
			template: this.props.counterTemplate
		}, this.props.fieldCounterAttrs))), v(this, "bindsIntermediary", n(() => ({
			counter: this.props.counter,
			counterShow: this.props.counterShow,
			counterTemplate: this.props.counterTemplate,
			maxlength: this.props.maxlength,
			fieldCounterAttrs: this.props.fieldCounterAttrs
		}))), v(this, "render", () => this.components && this.isCounter.value ? this.components.render("fieldCounter", { ...m(this.binds.value, { class: `${this.className}__fieldCounter` }) }, void 0, this.index) : []), this.props = e, this.className = t, this.components = r, this.extra = i, this.index = a;
	}
}, b = Object.defineProperty, x = (e, t, n) => t in e ? b(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, S = (e, t, n) => x(e, typeof t == "symbol" ? t : t + "", n), C = class {
	constructor(e, r, i, a, o, s, c, l, d) {
		S(this, "text"), S(this, "is", n(() => this.props.counter !== void 0 || this.isMax.value)), S(this, "isMax", n(() => this.getMax() > 0)), S(this, "item", n(() => {
			let e = this.getCounter().toString(), t = this.getMax().toString();
			return f(this.props.template) ? this.props.template.replace("[c]", e).replace("[m]", t) : this.isMax.value ? `${e} / ${t}` : e;
		})), S(this, "ariaText", n(() => {
			if (this.isMax.value) {
				let e = this.getRemaining();
				if (e <= 0) return this.text.characterLimit.value;
				if (e <= this.getMaxlengthOnce() && this.text.characterRemaining.value) return u(this.text.characterRemaining.value, { left: e });
			}
		})), this.props = e, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = s, this.slots = c, this.emits = l;
		let { TextIncludeConstructor: p = t } = d == null ? {} : d;
		this.text = new p(this.props);
	}
	getCounter() {
		var e;
		return h((e = this.props.counter) == null ? 0 : e);
	}
	getMax() {
		var e;
		return h((e = this.props.maxlength) == null ? 0 : e);
	}
	getMaxlengthOnce() {
		return this.props.maxlengthOnce === void 0 ? Math.ceil(this.getMax() * .1) : h(this.props.maxlengthOnce);
	}
	getRemaining() {
		return this.getMax() - this.getCounter();
	}
}, w = {}, T = class extends l {
	constructor(t, n, r, i = C) {
		super(t, n, r), S(this, "item"), S(this, "renderAria", () => {
			var t;
			return this.item.ariaText.value ? [a("div", {
				class: (t = this.classes) == null ? void 0 : t.value.aria,
				...e.live("polite")
			}, [a("span", {
				...e.role("img"),
				...e.label(this.item.ariaText.value)
			})])] : [];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			aria: this.getSubClass("aria")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		if (this.item.is.value) return [a("span", {
			...this.getAttrs(),
			id: this.props.id,
			class: (e = this.classes) == null ? void 0 : e.value.main,
			innerHTML: this.item.item.value
		}), ...this.renderAria()];
	}
}, E = { ...w }, D = /* @__PURE__ */ i({
	name: "D1FieldCounter",
	__name: "D1FieldCounter",
	props: /* @__PURE__ */ o({
		textCharacterLimit: { type: [String, Function] },
		textCharacterRemaining: { type: [String, Function] },
		counter: {},
		maxlength: {},
		maxlengthOnce: {},
		template: {},
		id: {}
	}, E),
	setup(e, { expose: t, emit: i }) {
		let a = new T("d1.fieldCounter", e, {
			emits: i,
			classes: n(() => ({ main: { "d1-fieldCounter": !0 } })),
			styles: n(() => ({}))
		}), o = a.render();
		return t(a.expose()), (e, t) => (s(), r(c(o)));
	}
});
//#endregion
export { y as n, D as t };

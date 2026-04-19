import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./TextInclude-B27ZUWoc-DWUMdepa.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, openBlock as c, unref as l } from "vue";
import { DesignConstructorAbstract as u, applyTemplate as d, getRef as f, isFilled as p, isNull as m, toBinds as h, toNumber as g } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldCounterInclude-BWGFK6RX.js
var _ = class {
	constructor(t, n, i, a, o) {
		e(this, "isCounter", r(() => !!(this.props.counterShow && (!m(this.props.counter) || p(this.props.maxlength))))), e(this, "binds", r(() => h(f(this.extra), {
			id: this.props.counterId,
			counter: this.props.counter,
			maxlength: this.props.maxlength,
			template: this.props.counterTemplate
		}, this.props.fieldCounterAttrs))), e(this, "bindsIntermediary", r(() => ({
			counter: this.props.counter,
			counterShow: this.props.counterShow,
			counterTemplate: this.props.counterTemplate,
			maxlength: this.props.maxlength,
			fieldCounterAttrs: this.props.fieldCounterAttrs
		}))), e(this, "render", () => this.components && this.isCounter.value ? this.components.render("fieldCounter", { ...h(this.binds.value, { class: `${this.className}__fieldCounter` }) }, void 0, this.index) : []), this.props = t, this.className = n, this.components = i, this.extra = a, this.index = o;
	}
}, v = class {
	constructor(t, i, a, o, s, c, l, u, f) {
		e(this, "text", void 0), e(this, "is", r(() => this.props.counter !== void 0 || this.isMax.value)), e(this, "isMax", r(() => this.getMax() > 0)), e(this, "item", r(() => {
			let e = this.getCounter().toString(), t = this.getMax().toString();
			return p(this.props.template) ? this.props.template.replace("[c]", e).replace("[m]", t) : this.isMax.value ? `${e} / ${t}` : e;
		})), e(this, "ariaText", r(() => {
			if (this.isMax.value) {
				let e = this.getRemaining();
				if (e <= 0) return this.text.characterLimit.value;
				if (e <= this.getMaxlengthOnce() && this.text.characterRemaining.value) return d(this.text.characterRemaining.value, { left: e });
			}
		})), this.props = t, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { TextIncludeConstructor: m = n } = f == null ? {} : f;
		this.text = new m(this.props);
	}
	getCounter() {
		var e;
		return g((e = this.props.counter) == null ? 0 : e);
	}
	getMax() {
		var e;
		return g((e = this.props.maxlength) == null ? 0 : e);
	}
	getMaxlengthOnce() {
		return this.props.maxlengthOnce === void 0 ? Math.ceil(this.getMax() * .1) : g(this.props.maxlengthOnce);
	}
	getRemaining() {
		return this.getMax() - this.getCounter();
	}
}, y = {}, b = class extends u {
	constructor(n, r, i, a = v) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderAria", () => {
			if (this.item.ariaText.value) {
				var e;
				return [o("div", {
					class: (e = this.classes) == null ? void 0 : e.value.aria,
					...t.live("polite")
				}, [o("span", {
					...t.role("img"),
					...t.label(this.item.ariaText.value)
				})])];
			}
			return [];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		if (this.item.is.value) {
			var e;
			return [o("span", {
				...this.getAttrs(),
				id: this.props.id,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				innerHTML: this.item.item.value
			}), ...this.renderAria()];
		}
	}
}, x = { ...y }, S = /* @__PURE__ */ a({
	name: "D1FieldCounter",
	__name: "D1FieldCounter",
	props: /* @__PURE__ */ s({
		textCharacterLimit: { type: [String, Function] },
		textCharacterRemaining: { type: [String, Function] },
		counter: {},
		maxlength: {},
		maxlengthOnce: {},
		template: {},
		id: {}
	}, x),
	setup(e, { expose: t, emit: n }) {
		let a = new b("d1.fieldCounter", e, {
			emits: n,
			classes: r(() => ({ main: { "d1-fieldCounter": !0 } })),
			styles: r(() => ({}))
		}), o = a.render();
		return t(a.expose()), (e, t) => (c(), i(l(o)));
	}
});
//#endregion
export { _ as n, S as t };

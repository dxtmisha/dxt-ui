import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { n, t as r } from "./FieldCounter-D08NhHem.js";
import { computed as i, createBlock as a, defineComponent as o, h as s, mergeDefaults as c, openBlock as l, unref as u } from "vue";
import { DesignConstructorAbstract as d, getElementId as f, getRef as p, isFilled as m, toBinds as h } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldMessageInclude-BJDnir34.js
var g = Object.defineProperty, _ = (e, t, n) => t in e ? g(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, v = (e, t, n) => _(e, typeof t == "symbol" ? t : t + "", n), y = class {
	constructor(e, t, r, a, o, s, c) {
		v(this, "helperId", f()), v(this, "validationId", f()), v(this, "counterId", f()), v(this, "fieldCounter"), v(this, "isValidationMessage", i(() => m(this.validation.value))), v(this, "id", i(() => {
			var e;
			let t = [];
			return this.props.helperMessage && t.push(this.helperId), this.props.validationMessage && t.push(this.validationId), (e = this.isCounter) != null && e.value && this.props.counterShow && t.push(this.counterId), t.join(" ");
		})), v(this, "validation", i(() => m(this.props.validationMessage) ? this.props.validationMessage : p(this.validationMessage))), v(this, "binds", i(() => {
			var e;
			return h(p(this.extra), (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {}, {
				disabled: this.props.disabled,
				forceShow: this.props.forceShowMessage,
				helperMessage: this.props.helperMessage,
				validationMessage: this.validation.value,
				helperId: this.helperId,
				validationId: this.validationId,
				counterId: this.counterId
			}, this.props.fieldMessageAttrs);
		})), v(this, "render", () => this.components ? this.components.render("fieldMessage", { ...h(this.binds.value, { class: `${this.className}__fieldMessage` }) }, void 0, this.index) : []), this.props = e, this.className = t, this.components = r, this.validationMessage = a, this.isCounter = o, this.extra = s, this.index = c, this.fieldCounter = new n(this.props, this.className);
	}
}, b = Object.defineProperty, x = (e, t, n) => t in e ? b(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, S = (e, t, n) => x(e, typeof t == "symbol" ? t : t + "", n), C = class {
	constructor(e, t) {
		S(this, "is", i(() => m(this.item.value) || !!(this.slots && ("helper" in this.slots || "validation" in this.slots)))), S(this, "isValidation", i(() => m(this.props.validationMessage) || !!(this.slots && "validation" in this.slots))), S(this, "item", i(() => this.props.validationMessage ? this.props.validationMessage : this.props.helperMessage ? this.props.helperMessage : "")), this.props = e, this.slots = t;
	}
}, w = class {
	constructor(e, r, a, o, s, c, l, u, d) {
		S(this, "fieldCounter"), S(this, "message"), S(this, "skeleton"), S(this, "is", i(() => (this.props.forceShow || !this.props.disabled) && (this.message.is.value || this.fieldCounter.isCounter.value))), S(this, "isHelper", i(() => !!this.props.helperMessage || !!(this.slots && "helper" in this.slots))), S(this, "isValidation", i(() => !!this.props.validationMessage || !!(this.slots && "validation" in this.slots))), S(this, "classes", i(() => ({ [`${this.className}--validation`]: this.message.isValidation.value }))), S(this, "slotHelperData", i(() => ({
			message: this.props.helperMessage,
			helperMessage: this.props.helperMessage,
			validationMessage: this.props.validationMessage
		}))), S(this, "slotValidationData", i(() => ({
			message: this.props.validationMessage,
			helperMessage: this.props.helperMessage,
			validationMessage: this.props.validationMessage
		}))), this.props = e, this.refs = r, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { FieldCounterIncludeConstructor: f = n, FieldMessageMessageConstructor: p = C, SkeletonIncludeConstructor: m = t } = d == null ? {} : d;
		this.fieldCounter = new f(this.props, this.className, this.components), this.message = new p(this.props, this.slots), this.skeleton = new m(this.props, this.classDesign, ["classTextVariant"]);
	}
}, T = {}, E = class extends d {
	constructor(t, n, r, i = w) {
		super(t, n, r), S(this, "item"), S(this, "renderInfo", () => {
			var e;
			if (this.item.isHelper.value) {
				let t = [], n = {
					key: "message",
					id: this.props.helperId,
					class: [(e = this.classes) == null ? void 0 : e.value.info, this.item.skeleton.classes.value]
				};
				return this.initSlot("helper", t, this.item.slotHelperData.value), t.length < 1 && (n.innerHTML = this.props.helperMessage), [s("div", n, t)];
			}
			return [];
		}), S(this, "renderError", () => {
			var t;
			if (this.item.isValidation.value) {
				let n = [], r = {
					key: "message",
					id: this.props.validationId,
					class: (t = this.classes) == null ? void 0 : t.value.error,
					...e.role("alert")
				};
				return this.initSlot("validation", n, this.item.slotValidationData.value), n.length < 1 && (r.innerHTML = this.props.validationMessage), [s("div", r, n)];
			}
			return [];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			info: this.getSubClass("info"),
			error: this.getSubClass("error")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		if (this.item.is.value) return s("div", {
			...this.getAttrs(),
			key: "main",
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, [
			...this.renderInfo(),
			...this.renderError(),
			...this.item.fieldCounter.render()
		]);
	}
}, D = { ...T }, O = /* @__PURE__ */ o({
	name: "D1FieldMessage",
	__name: "D1FieldMessage",
	props: /* @__PURE__ */ c({
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
		fieldCounterAttrs: {},
		isSkeleton: { type: Boolean },
		forceShow: { type: Boolean },
		disabled: { type: Boolean },
		helperMessage: {},
		validationMessage: {},
		helperId: {},
		validationId: {}
	}, D),
	setup(e, { expose: t, emit: n }) {
		let o = new E("d1.fieldMessage", e, {
			emits: n,
			classes: i(() => ({ main: { "d1-fieldMessage": !0 } })),
			styles: i(() => ({})),
			components: { fieldCounter: r }
		}), s = o.render();
		return t(o.expose()), (e, t) => (l(), a(u(s)));
	}
});
//#endregion
export { y as n, O as t };

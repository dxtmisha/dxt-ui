import { t as e } from "./defineProperty-DblGXmzD-DcKtCVOT.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n } from "./SkeletonInclude-BH3L9LJu-BoWufOa7.js";
import { n as r, t as i } from "./FieldCounter-Cf85u8fH.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, unref as d } from "vue";
import { DesignConstructorAbstract as f, getElementId as p, getRef as m, isFilled as h, toBinds as g } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldMessageInclude-BXY2Sznr.js
var _ = class {
	constructor(t, n, i, o, s, c, l) {
		e(this, "helperId", p()), e(this, "validationId", p()), e(this, "counterId", p()), e(this, "fieldCounter", void 0), e(this, "isValidationMessage", a(() => h(this.validation.value))), e(this, "id", a(() => {
			var e;
			let t = [];
			return this.props.helperMessage && t.push(this.helperId), this.props.validationMessage && t.push(this.validationId), (e = this.isCounter) != null && e.value && this.props.counterShow && t.push(this.counterId), t.join(" ");
		})), e(this, "validation", a(() => h(this.props.validationMessage) ? this.props.validationMessage : m(this.validationMessage))), e(this, "binds", a(() => {
			var e;
			return g(m(this.extra), (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {}, {
				disabled: this.props.disabled,
				forceShow: this.props.forceShowMessage,
				helperMessage: this.props.helperMessage,
				validationMessage: this.validation.value,
				helperId: this.helperId,
				validationId: this.validationId,
				counterId: this.counterId
			}, this.props.fieldMessageAttrs);
		})), e(this, "render", () => this.components ? this.components.render("fieldMessage", { ...g(this.binds.value, { class: `${this.className}__fieldMessage` }) }, void 0, this.index) : []), this.props = t, this.className = n, this.components = i, this.validationMessage = o, this.isCounter = s, this.extra = c, this.index = l, this.fieldCounter = new r(this.props, this.className);
	}
}, v = class {
	constructor(t, n) {
		e(this, "is", a(() => h(this.item.value) || !!(this.slots && ("helper" in this.slots || "validation" in this.slots)))), e(this, "isValidation", a(() => h(this.props.validationMessage) || !!(this.slots && "validation" in this.slots))), e(this, "item", a(() => this.props.validationMessage ? this.props.validationMessage : this.props.helperMessage ? this.props.helperMessage : "")), this.props = t, this.slots = n;
	}
}, y = class {
	constructor(t, i, o, s, c, l, u, d, f) {
		e(this, "fieldCounter", void 0), e(this, "message", void 0), e(this, "skeleton", void 0), e(this, "is", a(() => (this.props.forceShow || !this.props.disabled) && (this.message.is.value || this.fieldCounter.isCounter.value))), e(this, "isHelper", a(() => !!this.props.helperMessage || !!(this.slots && "helper" in this.slots))), e(this, "isValidation", a(() => !!this.props.validationMessage || !!(this.slots && "validation" in this.slots))), e(this, "classes", a(() => ({ [`${this.className}--validation`]: this.message.isValidation.value }))), e(this, "slotHelperData", a(() => ({
			message: this.props.helperMessage,
			helperMessage: this.props.helperMessage,
			validationMessage: this.props.validationMessage
		}))), e(this, "slotValidationData", a(() => ({
			message: this.props.validationMessage,
			helperMessage: this.props.helperMessage,
			validationMessage: this.props.validationMessage
		}))), this.props = t, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { FieldCounterIncludeConstructor: p = r, FieldMessageMessageConstructor: m = v, SkeletonIncludeConstructor: h = n } = f == null ? {} : f;
		this.fieldCounter = new p(this.props, this.className, this.components), this.message = new m(this.props, this.slots), this.skeleton = new h(this.props, this.classDesign, ["classTextVariant"]);
	}
}, b = {}, x = class extends f {
	constructor(n, r, i, a = y) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderInfo", () => {
			if (this.item.isHelper.value) {
				var e;
				let t = [], n = {
					key: "message",
					id: this.props.helperId,
					class: [(e = this.classes) == null ? void 0 : e.value.info, this.item.skeleton.classes.value]
				};
				return this.initSlot("helper", t, this.item.slotHelperData.value), t.length < 1 && (n.innerHTML = this.props.helperMessage), [c("div", n, t)];
			}
			return [];
		}), e(this, "renderError", () => {
			if (this.item.isValidation.value) {
				var e;
				let n = [], r = {
					key: "message",
					id: this.props.validationId,
					class: (e = this.classes) == null ? void 0 : e.value.error,
					...t.role("alert")
				};
				return this.initSlot("validation", n, this.item.slotValidationData.value), n.length < 1 && (r.innerHTML = this.props.validationMessage), [c("div", r, n)];
			}
			return [];
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		if (this.item.is.value) {
			var e;
			return c("div", {
				...this.getAttrs(),
				key: "main",
				class: (e = this.classes) == null ? void 0 : e.value.main
			}, [
				...this.renderInfo(),
				...this.renderError(),
				...this.item.fieldCounter.render()
			]);
		}
	}
}, S = { ...b }, C = /* @__PURE__ */ s({
	name: "D1FieldMessage",
	__name: "D1FieldMessage",
	props: /* @__PURE__ */ l({
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
	}, S),
	setup(e, { expose: t, emit: n }) {
		let r = new x("d1.fieldMessage", e, {
			emits: n,
			classes: a(() => ({ main: { "d1-fieldMessage": !0 } })),
			styles: a(() => ({})),
			components: { fieldCounter: i }
		}), s = r.render();
		return t(r.expose()), (e, t) => (u(), o(d(s)));
	}
});
//#endregion
export { _ as n, C as t };

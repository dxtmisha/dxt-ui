import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./SkeletonInclude-Cu6l1Y1l.js";
import { t as r } from "./FieldCounterInclude-BM8RuujW.js";
import { t as i } from "./FieldMessageInclude-CZyP4OLs.js";
import { computed as a, h as o } from "vue";
import { DesignConstructorAbstract as s, isFilled as c } from "@dxtmisha/functional";
//#region src/constructors/FieldMessage/FieldMessageMessage.ts
var l = class {
	constructor(e, n) {
		t(this, "is", a(() => c(this.item.value) || !!(this.slots && ("helper" in this.slots || "validation" in this.slots)))), t(this, "isValidation", a(() => c(this.props.validationMessage) || !!(this.slots && "validation" in this.slots))), t(this, "item", a(() => this.props.validationMessage ? this.props.validationMessage : this.props.helperMessage ? this.props.helperMessage : "")), this.props = e, this.slots = n;
	}
}, u = class {
	constructor(e, i, o, s, c, u, d, f, p) {
		t(this, "fieldCounter", void 0), t(this, "message", void 0), t(this, "skeleton", void 0), t(this, "is", a(() => (this.props.forceShow || !this.props.disabled) && (this.message.is.value || this.fieldCounter.isCounter.value))), t(this, "isHelper", a(() => !!this.props.helperMessage || !!(this.slots && "helper" in this.slots))), t(this, "isValidation", a(() => !!this.props.validationMessage || !!(this.slots && "validation" in this.slots))), t(this, "classes", a(() => ({ [`${this.className}--validation`]: this.message.isValidation.value }))), t(this, "slotHelperData", a(() => ({
			message: this.props.helperMessage,
			helperMessage: this.props.helperMessage,
			validationMessage: this.props.validationMessage
		}))), t(this, "slotValidationData", a(() => ({
			message: this.props.validationMessage,
			helperMessage: this.props.helperMessage,
			validationMessage: this.props.validationMessage
		}))), this.props = e, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = u, this.slots = d, this.emits = f;
		let { FieldCounterIncludeConstructor: m = r, FieldMessageMessageConstructor: h = l, SkeletonIncludeConstructor: g = n } = p == null ? {} : p;
		this.fieldCounter = new m(this.props, this.className, this.components), this.message = new h(this.props, this.slots), this.skeleton = new g(this.props, this.classDesign, ["classTextVariant"]);
	}
}, d = {}, f = class extends s {
	constructor(n, r, i, a = u) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderInfo", () => {
			if (this.item.isHelper.value) {
				var e;
				let t = [], n = {
					key: "message",
					id: this.props.helperId,
					class: [(e = this.classes) == null ? void 0 : e.value.info, this.item.skeleton.classes.value]
				};
				return this.initSlot("helper", t, this.item.slotHelperData.value), t.length < 1 && (n.innerHTML = this.props.helperMessage), [o("div", n, t)];
			}
			return [];
		}), t(this, "renderError", () => {
			if (this.item.isValidation.value) {
				var t;
				let n = [], r = {
					key: "message",
					id: this.props.validationId,
					class: (t = this.classes) == null ? void 0 : t.value.error,
					...e.role("alert")
				};
				return this.initSlot("validation", n, this.item.slotValidationData.value), n.length < 1 && (r.innerHTML = this.props.validationMessage), [o("div", r, n)];
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
			return o("div", {
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
};
//#endregion
export { u as FieldMessage, f as FieldMessageDesign, i as FieldMessageInclude, l as FieldMessageMessage, d as defaultsFieldMessage };

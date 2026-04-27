import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./TextInclude-CxKbWYnf.js";
import { t as r } from "./FieldCounterInclude-I5Qn-ssk.js";
import { computed as i, h as a } from "vue";
import { DesignConstructorAbstract as o, applyTemplate as s, isFilled as c, toNumber as l } from "@dxtmisha/functional";
//#region src/constructors/FieldCounter/FieldCounter.ts
var u = class {
	constructor(e, r, a, o, l, u, d, f, p) {
		t(this, "text", void 0), t(this, "is", i(() => this.props.counter !== void 0 || this.isMax.value)), t(this, "isMax", i(() => this.getMax() > 0)), t(this, "item", i(() => {
			let e = this.getCounter().toString(), t = this.getMax().toString();
			return c(this.props.template) ? this.props.template.replace("[c]", e).replace("[m]", t) : this.isMax.value ? `${e} / ${t}` : e;
		})), t(this, "ariaText", i(() => {
			if (this.isMax.value) {
				let e = this.getRemaining();
				if (e <= 0) return this.text.characterLimit.value;
				if (e <= this.getMaxlengthOnce() && this.text.characterRemaining.value) return s(this.text.characterRemaining.value, { left: e });
			}
		})), this.props = e, this.refs = r, this.element = a, this.classDesign = o, this.className = l, this.components = u, this.slots = d, this.emits = f;
		let { TextIncludeConstructor: m = n } = p == null ? {} : p;
		this.text = new m(this.props);
	}
	getCounter() {
		var e;
		return l((e = this.props.counter) == null ? 0 : e);
	}
	getMax() {
		var e;
		return l((e = this.props.maxlength) == null ? 0 : e);
	}
	getMaxlengthOnce() {
		return this.props.maxlengthOnce === void 0 ? Math.ceil(this.getMax() * .1) : l(this.props.maxlengthOnce);
	}
	getRemaining() {
		return this.getMax() - this.getCounter();
	}
}, d = {}, f = class extends o {
	constructor(n, r, i, o = u) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderAria", () => {
			if (this.item.ariaText.value) {
				var t;
				return [a("div", {
					class: (t = this.classes) == null ? void 0 : t.value.aria,
					...e.live("polite")
				}, [a("span", {
					...e.role("img"),
					...e.label(this.item.ariaText.value)
				})])];
			}
			return [];
		}), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
			return [a("span", {
				...this.getAttrs(),
				id: this.props.id,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				innerHTML: this.item.item.value
			}), ...this.renderAria()];
		}
	}
};
//#endregion
export { u as FieldCounter, f as FieldCounterDesign, r as FieldCounterInclude, d as defaultsFieldCounter };

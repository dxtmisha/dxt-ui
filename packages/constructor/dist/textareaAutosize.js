import { t as e } from "./defineProperty-Bjg6wMoX.js";
import { h as t, nextTick as n, ref as r, watch as i } from "vue";
import { DesignConstructorAbstract as a, toBinds as o } from "@dxtmisha/functional";
//#region src/constructors/TextareaAutosize/TextareaAutosizeValue.ts
var s = class {
	constructor(t, n, a) {
		e(this, "item", r("")), this.props = t, this.refs = n, this.emits = a, i([n.value], () => this.set(t.value), { immediate: !0 });
	}
	set(e) {
		return this.isDifference(e) ? (this.item.value = e == null ? "" : e, !0) : !1;
	}
	on(e) {
		if (this.set(e.target.value)) {
			var t;
			(t = this.emits) == null || t.call(this, "input", e);
		}
	}
	isDifference(e) {
		return this.item.value !== e;
	}
}, c = class {
	constructor(t, a, o) {
		e(this, "clone", r()), e(this, "updateSize", () => {
			if (this.isElements()) {
				let e = getComputedStyle(this.element.value), t = this.clone.value.style;
				t.paddingTop = e.paddingTop, t.paddingRight = e.paddingRight, t.paddingBottom = e.paddingBottom, t.paddingLeft = e.paddingLeft, t.width = `${this.element.value.offsetWidth}px`;
			}
		}), e(this, "on", () => {
			this.updateSize(), this.updateValue();
		}), e(this, "onInput", (e) => {
			this.value.on(e), this.updateSize(), this.updateValue();
		}), e(this, "updateHeight", () => {
			this.isElements() && (this.element.value.style.height = `${this.clone.value.offsetHeight}px`);
		}), this.props = t, this.element = a, this.value = o, i(this.value.item, this.on), n().then(() => requestAnimationFrame(this.on));
	}
	isElements() {
		return !!(this.props.autosize && this.element.value && getComputedStyle(this.element.value).getPropertyValue("--sys-field-sizing-none") === "\"--YES--\"" && this.clone.value);
	}
	updateValue() {
		this.isElements() && (this.clone.value.innerText = `${this.value.item.value} --`, requestAnimationFrame(this.updateHeight));
	}
}, l = class {
	constructor(t, n, r, i, a, o, l, u, d) {
		e(this, "value", void 0), e(this, "resize", void 0), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = l, this.emits = u;
		let { TextareaAutosizeResizeConstructor: f = c, TextareaAutosizeValueConstructor: p = s } = d == null ? {} : d;
		this.value = new p(t, n, u), this.resize = new f(t, r, this.value);
	}
}, u = { autosize: !0 }, d = class extends a {
	constructor(n, r, i, a = l) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderTextarea", () => {
			var e;
			return t("textarea", o(this.getAttrs(), this.props.inputAttrs, {
				ref: this.element,
				value: this.item.value.item.value,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				onFocus: this.item.resize.on,
				onInput: this.item.resize.onInput
			}));
		}), e(this, "renderClone", () => {
			var e;
			return t("div", {
				ref: this.item.resize.clone,
				class: (e = this.classes) == null ? void 0 : e.value.clone
			});
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return { value: this.item.value.item };
	}
	initClasses() {
		return {
			main: {},
			clone: this.getSubClass("clone")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		return [this.renderClone(), this.renderTextarea()];
	}
};
//#endregion
export { l as TextareaAutosize, d as TextareaAutosizeDesign, c as TextareaAutosizeResize, s as TextareaAutosizeValue, u as defaultsTextareaAutosize };

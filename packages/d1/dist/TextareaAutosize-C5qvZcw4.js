import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { computed as t, createBlock as n, defineComponent as r, h as i, mergeDefaults as a, nextTick as o, openBlock as s, ref as c, unref as l, watch as u } from "vue";
import { DesignConstructorAbstract as d, inArray as f, toBinds as p } from "@dxtmisha/functional";
//#region ../constructor/dist/textareaAutosize.js
var m = class {
	constructor(t, n, r) {
		e(this, "item", c("")), this.props = t, this.refs = n, this.emits = r, u([n.value], () => this.set(t.value), { immediate: !0 });
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
}, h = class {
	constructor(t, n, r) {
		e(this, "clone", c()), e(this, "updateSize", () => {
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
		}), this.props = t, this.element = n, this.value = r, u(this.value.item, this.on), o().then(() => requestAnimationFrame(this.on));
	}
	isElements() {
		return !!(this.props.autosize && this.element.value && getComputedStyle(this.element.value).getPropertyValue("--sys-field-sizing-none") === "\"--YES--\"" && this.clone.value);
	}
	updateValue() {
		this.isElements() && (this.clone.value.innerText = `${this.value.item.value} --`, requestAnimationFrame(this.updateHeight));
	}
}, g = class {
	constructor(t, n, r, i, a, o, s, c, l) {
		e(this, "value", void 0), e(this, "resize", void 0), this.props = t, this.refs = n, this.element = r, this.classDesign = i, this.className = a, this.components = o, this.slots = s, this.emits = c;
		let { TextareaAutosizeResizeConstructor: u = h, TextareaAutosizeValueConstructor: d = m } = l == null ? {} : l;
		this.value = new d(t, n, c), this.resize = new u(t, r, this.value);
	}
}, _ = { autosize: !0 }, v = class extends d {
	constructor(t, n, r, a = g) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderTextarea", () => {
			var e;
			return i("textarea", p(this.getAttrs(), this.props.inputAttrs, {
				ref: this.element,
				value: this.item.value.item.value,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				onFocus: this.item.resize.on,
				onInput: this.item.resize.onInput
			}));
		}), e(this, "renderClone", () => {
			var e;
			return i("div", {
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
}, y = { height: [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
] }, b = {
	..._,
	autosize: !0,
	height: "md"
}, x = /* @__PURE__ */ r({
	name: "D1TextareaAutosize",
	__name: "D1TextareaAutosize",
	props: /* @__PURE__ */ a({
		value: {},
		inputAttrs: {},
		autosize: { type: Boolean },
		height: {}
	}, b),
	emits: ["input"],
	setup(e, { expose: r, emit: i }) {
		let a = i, o = e, c = new v("d1.textareaAutosize", o, {
			emits: a,
			classes: t(() => ({ main: {
				"d1-textareaAutosize": !0,
				"d1-textareaAutosize--autosize": o.autosize,
				[`d1-textareaAutosize--height--${o.height}`]: f(y.height, o.height)
			} })),
			styles: t(() => ({}))
		}), u = c.render();
		return r(c.expose()), (e, t) => (s(), n(l(u)));
	}
});
//#endregion
export { x as t };

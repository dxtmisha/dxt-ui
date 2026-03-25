import { computed as e, createBlock as t, defineComponent as n, h as r, mergeDefaults as i, nextTick as a, openBlock as o, ref as s, unref as c, watch as l } from "vue";
import { DesignConstructorAbstract as u, inArray as d } from "@dxtmisha/functional";
//#region ../constructor/dist/textareaAutosize.js
var f = Object.defineProperty, p = (e, t, n) => t in e ? f(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, m = (e, t, n) => p(e, typeof t == "symbol" ? t : t + "", n), h = class {
	constructor(e, t, n) {
		m(this, "item", s("")), this.props = e, this.refs = t, this.emits = n, l([t.value], () => this.set(e.value), { immediate: !0 });
	}
	set(e) {
		return this.isDifference(e) ? (this.item.value = e == null ? "" : e, !0) : !1;
	}
	on(e) {
		var t;
		this.set(e.target.value) && ((t = this.emits) == null || t.call(this, "input", e));
	}
	isDifference(e) {
		return this.item.value !== e;
	}
}, g = class {
	constructor(e, t, n) {
		m(this, "clone", s()), m(this, "updateSize", () => {
			if (this.isElements()) {
				let e = getComputedStyle(this.element.value), t = this.clone.value.style;
				t.paddingTop = e.paddingTop, t.paddingRight = e.paddingRight, t.paddingBottom = e.paddingBottom, t.paddingLeft = e.paddingLeft, t.width = `${this.element.value.offsetWidth}px`;
			}
		}), m(this, "on", () => {
			this.updateSize(), this.updateValue();
		}), m(this, "onInput", (e) => {
			this.value.on(e), this.updateSize(), this.updateValue();
		}), m(this, "updateHeight", () => {
			this.isElements() && (this.element.value.style.height = `${this.clone.value.offsetHeight}px`);
		}), this.props = e, this.element = t, this.value = n, l(this.value.item, this.on), a().then(() => requestAnimationFrame(this.on));
	}
	isElements() {
		return !!(this.props.autosize && this.element.value && getComputedStyle(this.element.value).getPropertyValue("--sys-field-sizing-none") === "\"--YES--\"" && this.clone.value);
	}
	updateValue() {
		this.isElements() && (this.clone.value.innerText = `${this.value.item.value} --`, requestAnimationFrame(this.updateHeight));
	}
}, _ = class {
	constructor(e, t, n, r, i, a, o, s, c) {
		m(this, "value"), m(this, "resize"), this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
		let { TextareaAutosizeResizeConstructor: l = g, TextareaAutosizeValueConstructor: u = h } = c == null ? {} : c;
		this.value = new u(e, t, s), this.resize = new l(e, n, this.value);
	}
}, v = { autosize: !0 }, y = class extends u {
	constructor(e, t, n, i = _) {
		super(e, t, n), m(this, "item"), m(this, "renderTextarea", () => {
			var e;
			return r("textarea", {
				...this.getAttrs(),
				...this.props.inputAttrs,
				ref: this.element,
				value: this.item.value.item.value,
				class: (e = this.classes) == null ? void 0 : e.value.main,
				onFocus: this.item.resize.on,
				onInput: this.item.resize.onInput
			});
		}), m(this, "renderClone", () => {
			var e;
			return r("div", {
				ref: this.item.resize.clone,
				class: (e = this.classes) == null ? void 0 : e.value.clone
			});
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
}, b = { height: [
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
] }, x = {
	...v,
	autosize: !0,
	height: "md"
}, S = /* @__PURE__ */ n({
	name: "D1TextareaAutosize",
	__name: "D1TextareaAutosize",
	props: /* @__PURE__ */ i({
		value: {},
		inputAttrs: {},
		autosize: { type: Boolean },
		height: {}
	}, x),
	emits: ["input"],
	setup(n, { expose: r, emit: i }) {
		let a = i, s = n, l = new y("d1.textareaAutosize", s, {
			emits: a,
			classes: e(() => ({ main: {
				"d1-textareaAutosize": !0,
				"d1-textareaAutosize--autosize": s.autosize,
				[`d1-textareaAutosize--height--${s.height}`]: d(b.height, s.height)
			} })),
			styles: e(() => ({}))
		}), u = l.render();
		return r(l.expose()), (e, n) => (o(), t(c(u)));
	}
});
//#endregion
export { S as t };

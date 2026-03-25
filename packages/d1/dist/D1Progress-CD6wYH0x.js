import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { computed as n, createBlock as r, defineComponent as i, h as a, mergeDefaults as o, onUnmounted as s, openBlock as c, ref as l, unref as u, watch as d } from "vue";
import { DesignConstructorAbstract as f, getBind as p, getRef as m, inArray as h, toBinds as g, toNumber as _ } from "@dxtmisha/functional";
//#region ../constructor/dist/ProgressInclude-DlEbC7XP.js
var v = Object.defineProperty, y = (e, t, n) => t in e ? v(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, b = (e, t, n) => y(e, typeof t == "symbol" ? t : t + "", n), x = class {
	constructor(t, r, i, a) {
		b(this, "is", n(() => !!this.props.loading)), b(this, "aria", n(() => e.disabled(this.is.value))), b(this, "binds", n(() => {
			let e = m(this.extra);
			return p(this.props.loading, g(e, { class: `${this.className}__loading` }), "visible");
		})), b(this, "render", () => this.components && this.props.loading ? this.components.render("progress", this.binds.value, void 0, "progress") : []), this.props = t, this.className = r, this.components = i, this.extra = a;
	}
}, S = Object.defineProperty, C = (e, t, n) => t in e ? S(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, w = (e, t, n) => C(e, typeof t == "symbol" ? t : t + "", n), T = class {
	constructor(e, r, i, a, o, c, u, f, p) {
		w(this, "timeout"), w(this, "hide", l(!1)), w(this, "visible", l(!1)), w(this, "text"), w(this, "isProgressbar", n(() => this.isValue())), w(this, "tag", n(() => this.props.circular ? "svg" : "div")), w(this, "value", n(() => {
			var e;
			return _((e = this.props.value) == null ? 0 : e);
		})), w(this, "valueInPercent", n(() => {
			if (this.isValue()) {
				let e = this.value.value, t = 100 / this.getMax() * e;
				return this.props.circular ? t.toString() : `${100 - t}%`;
			}
			return null;
		})), w(this, "label", n(() => {
			if (this.props.ariaLabel) return this.props.ariaLabel;
			if (!this.isValue() && this.props.visible) return this.text.loading.value;
		})), w(this, "role", n(() => this.isValue() ? "progressbar" : "status")), w(this, "classes", n(() => ({
			[`${this.className}--hide`]: this.hide.value,
			[`${this.className}--visible`]: this.visible.value,
			[`${this.className}--value`]: this.isValue()
		}))), w(this, "styles", n(() => ({ [`--${this.className}-sys-value`]: this.valueInPercent.value }))), w(this, "onAnimation", ({ animationName: e }) => {
			e.match("-hidden") && (this.hide.value = !1);
		}), w(this, "switch", () => {
			var e, t;
			let n = this.props.visible;
			if (clearTimeout(this.timeout), this.isValue()) this.reset();
			else if (!!this.visible.value !== n) {
				let r = _((e = this.props.delay) == null ? 0 : e), i = _((t = this.props.delayHide) == null ? 0 : t);
				n && r ? this.timeout = setTimeout(() => this.update(), r) : !n && i ? this.timeout = setTimeout(() => this.update(), i) : this.update();
			}
		}), this.props = e, this.refs = r, this.element = i, this.classDesign = a, this.className = o, this.components = c, this.slots = u, this.emits = f;
		let { TextIncludeConstructor: m = t } = p == null ? {} : p;
		this.text = new m(this.props), d([r.visible], this.switch, { immediate: !0 }), s(() => {
			clearTimeout(this.timeout);
		});
	}
	isValue() {
		return this.value.value > 0;
	}
	getMax() {
		var e;
		return _((e = this.props.max) == null ? 100 : e);
	}
	update() {
		return this.hide.value = !this.props.visible, this.visible.value = !!this.props.visible, this;
	}
	reset() {
		return this.hide.value = !1, this.visible.value = !1, this;
	}
}, E = {
	max: 100,
	delay: 360,
	delayHide: 200,
	linear: !0,
	indeterminate: "type1",
	position: "top"
}, D = class extends f {
	constructor(t, r, i, o = T) {
		super(t, r, i), w(this, "item"), w(this, "renderCircle", () => {
			var t, n;
			return this.props.circular ? [a("circle", {
				class: (t = this.classes) == null ? void 0 : t.value.circleSub,
				cx: "24",
				cy: "24",
				r: "20",
				...e.hidden()
			}), a("circle", {
				class: (n = this.classes) == null ? void 0 : n.value.circle,
				cx: "24",
				cy: "24",
				r: "20",
				...e.hidden()
			})] : [];
		}), w(this, "renderPoint", () => {
			var e;
			return this.props.linear && this.props.point && (this.props.value || this.props.indeterminate === "type1") ? [a("span", { class: (e = this.classes) == null ? void 0 : e.value.point })] : [];
		}), w(this, "propsMain", n(() => {
			var t, n;
			let r = {
				...this.getAttrs(),
				class: (t = this.classes) == null ? void 0 : t.value.main,
				style: (n = this.styles) == null ? void 0 : n.value,
				onAnimationend: this.item.onAnimation,
				...e.role(this.item.role.value),
				...e.label(this.item.label.value)
			};
			return this.props.circular && (r.viewBox = "0 0 48 48"), this.props.value ? {
				...r,
				...e.valueMinMax(this.props.value, 0, this.props.max)
			} : r;
		})), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			circle: this.getSubClass("circle"),
			circleSub: this.getSubClass("circleSub"),
			point: this.getSubClass("point")
		};
	}
	initStyles() {
		return this.item.styles.value;
	}
	initRender() {
		let e = [...this.renderCircle(), ...this.renderPoint()];
		return a(this.item.tag.value, this.propsMain.value, e);
	}
}, O = {
	indeterminate: [
		"type1",
		"type2",
		"type3"
	],
	position: [
		"top",
		"bottom",
		"static"
	],
	size: [
		"sm",
		"md",
		"lg"
	],
	palette: [
		"red",
		"orange",
		"amber",
		"yellow",
		"lime",
		"green",
		"emerald",
		"teal",
		"cyan",
		"sky",
		"blue",
		"indigo",
		"violet",
		"purple",
		"fuchsia",
		"pink",
		"rose",
		"slate",
		"gray",
		"zinc",
		"neutral",
		"stone",
		"black",
		"white"
	]
}, k = {
	...E,
	linear: !0,
	indeterminate: "type1",
	position: "top",
	size: "md"
}, A = /* @__PURE__ */ i({
	name: "D1Progress",
	__name: "D1Progress",
	props: /* @__PURE__ */ o({
		ariaLabel: {},
		textLoading: { type: [String, Function] },
		visible: { type: Boolean },
		value: {},
		max: {},
		linear: { type: Boolean },
		circular: { type: Boolean },
		point: { type: Boolean },
		delay: {},
		delayHide: {},
		indeterminate: {},
		position: {},
		dense: { type: Boolean },
		inverse: { type: Boolean },
		size: {},
		palette: {}
	}, k),
	setup(e, { expose: t, emit: i }) {
		let a = i, o = e, s = new D("d1.progress", o, {
			emits: a,
			classes: n(() => ({ main: {
				"d1-progress": !0,
				"d1-progress--point": o.point,
				"d1-progress--linear": o.linear && !o.circular,
				"d1-progress--circular": o.circular,
				[`d1-progress--indeterminate--${o.indeterminate}`]: h(O.indeterminate, o.indeterminate),
				[`d1-progress--position--${o.position}`]: h(O.position, o.position),
				"d1-progress--dense": o.dense,
				"d1-progress--inverse": o.inverse,
				[`d1-progress--size--${o.size}`]: h(O.size, o.size),
				[`d1-palette d1-palette--${o.palette}`]: h(O.palette, o.palette)
			} })),
			styles: n(() => ({}))
		}), l = s.render();
		return t(s.expose()), (e, t) => (c(), r(u(l)));
	}
});
//#endregion
export { x as n, A as t };

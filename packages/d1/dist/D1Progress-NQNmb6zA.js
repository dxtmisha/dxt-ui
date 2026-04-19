import { t as e } from "./defineProperty-Bjg6wMoX-PyV0_eg3.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./TextInclude-B27ZUWoc-DWUMdepa.js";
import { computed as r, createBlock as i, defineComponent as a, h as o, mergeDefaults as s, onUnmounted as c, openBlock as l, ref as u, unref as d, watch as f } from "vue";
import { DesignConstructorAbstract as p, getBind as m, getRef as h, inArray as g, toBinds as _, toNumber as v } from "@dxtmisha/functional";
//#region ../constructor/dist/ProgressInclude-DYigLFZw.js
var y = class {
	constructor(n, i, a, o) {
		e(this, "is", r(() => !!this.props.loading)), e(this, "aria", r(() => t.disabled(this.is.value))), e(this, "binds", r(() => {
			let e = h(this.extra);
			return m(this.props.loading, _(e, { class: `${this.className}__loading` }), "visible");
		})), e(this, "render", () => this.components && this.props.loading ? this.components.render("progress", this.binds.value, void 0, "progress") : []), this.props = n, this.className = i, this.components = a, this.extra = o;
	}
}, b = class {
	constructor(t, i, a, o, s, l, d, p, m) {
		e(this, "timeout", void 0), e(this, "hide", u(!1)), e(this, "visible", u(!1)), e(this, "text", void 0), e(this, "isProgressbar", r(() => this.isValue())), e(this, "tag", r(() => this.props.circular ? "svg" : "div")), e(this, "value", r(() => {
			var e;
			return v((e = this.props.value) == null ? 0 : e);
		})), e(this, "valueInPercent", r(() => {
			if (this.isValue()) {
				let e = this.value.value, t = 100 / this.getMax() * e;
				return this.props.circular ? t.toString() : `${100 - t}%`;
			}
			return null;
		})), e(this, "label", r(() => {
			if (this.props.ariaLabel) return this.props.ariaLabel;
			if (!this.isValue() && this.props.visible) return this.text.loading.value;
		})), e(this, "role", r(() => this.isValue() ? "progressbar" : "status")), e(this, "classes", r(() => ({
			[`${this.className}--hide`]: this.hide.value,
			[`${this.className}--visible`]: this.visible.value,
			[`${this.className}--value`]: this.isValue()
		}))), e(this, "styles", r(() => ({ [`--${this.className}-sys-value`]: this.valueInPercent.value }))), e(this, "onAnimation", ({ animationName: e }) => {
			e.match("-hidden") && (this.hide.value = !1);
		}), e(this, "switch", () => {
			let e = this.props.visible;
			if (clearTimeout(this.timeout), this.isValue()) this.reset();
			else if (!!this.visible.value !== e) {
				var t, n;
				let r = v((t = this.props.delay) == null ? 0 : t), i = v((n = this.props.delayHide) == null ? 0 : n);
				e && r ? this.timeout = setTimeout(() => this.update(), r) : !e && i ? this.timeout = setTimeout(() => this.update(), i) : this.update();
			}
		}), this.props = t, this.refs = i, this.element = a, this.classDesign = o, this.className = s, this.components = l, this.slots = d, this.emits = p;
		let { TextIncludeConstructor: h = n } = m == null ? {} : m;
		this.text = new h(this.props), f([i.visible], this.switch, { immediate: !0 }), c(() => {
			clearTimeout(this.timeout);
		});
	}
	isValue() {
		return this.value.value > 0;
	}
	getMax() {
		var e;
		return v((e = this.props.max) == null ? 100 : e);
	}
	update() {
		return this.hide.value = !this.props.visible, this.visible.value = !!this.props.visible, this;
	}
	reset() {
		return this.hide.value = !1, this.visible.value = !1, this;
	}
}, x = {
	max: 100,
	delay: 360,
	delayHide: 200,
	linear: !0,
	indeterminate: "type1",
	position: "top"
}, S = class extends p {
	constructor(n, i, a, s = b) {
		super(n, i, a), e(this, "item", void 0), e(this, "renderCircle", () => {
			if (this.props.circular) {
				var e, n;
				return [o("circle", {
					class: (e = this.classes) == null ? void 0 : e.value.circleSub,
					cx: "24",
					cy: "24",
					r: "20",
					...t.hidden()
				}), o("circle", {
					class: (n = this.classes) == null ? void 0 : n.value.circle,
					cx: "24",
					cy: "24",
					r: "20",
					...t.hidden()
				})];
			}
			return [];
		}), e(this, "renderPoint", () => {
			if (this.props.linear && this.props.point && (this.props.value || this.props.indeterminate === "type1")) {
				var e;
				return [o("span", { class: (e = this.classes) == null ? void 0 : e.value.point })];
			}
			return [];
		}), e(this, "propsMain", r(() => {
			var e, n;
			let r = {
				...this.getAttrs(),
				class: (e = this.classes) == null ? void 0 : e.value.main,
				style: (n = this.styles) == null ? void 0 : n.value,
				onAnimationend: this.item.onAnimation,
				...t.role(this.item.role.value),
				...t.label(this.item.label.value)
			};
			return this.props.circular && (r.viewBox = "0 0 48 48"), this.props.value ? {
				...r,
				...t.valueMinMax(this.props.value, 0, this.props.max)
			} : r;
		})), this.item = new s(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return o(this.item.tag.value, this.propsMain.value, e);
	}
}, C = {
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
}, w = {
	...x,
	linear: !0,
	indeterminate: "type1",
	position: "top",
	size: "md"
}, T = /* @__PURE__ */ a({
	name: "D1Progress",
	__name: "D1Progress",
	props: /* @__PURE__ */ s({
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
	}, w),
	setup(e, { expose: t, emit: n }) {
		let a = n, o = e, s = new S("d1.progress", o, {
			emits: a,
			classes: r(() => ({ main: {
				"d1-progress": !0,
				"d1-progress--point": o.point,
				"d1-progress--linear": o.linear && !o.circular,
				"d1-progress--circular": o.circular,
				[`d1-progress--indeterminate--${o.indeterminate}`]: g(C.indeterminate, o.indeterminate),
				[`d1-progress--position--${o.position}`]: g(C.position, o.position),
				"d1-progress--dense": o.dense,
				"d1-progress--inverse": o.inverse,
				[`d1-progress--size--${o.size}`]: g(C.size, o.size),
				[`d1-palette d1-palette--${o.palette}`]: g(C.palette, o.palette)
			} })),
			styles: r(() => ({}))
		}), c = s.render();
		return t(s.expose()), (e, t) => (l(), i(d(c)));
	}
});
//#endregion
export { y as n, T as t };

import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-DblGXmzD.js";
import { t as n } from "./TextInclude-B_Uojln0.js";
import { t as r } from "./ProgressInclude-BAAN-Nmq.js";
import { computed as i, h as a, onUnmounted as o, ref as s, watch as c } from "vue";
import { DesignConstructorAbstract as l, toNumber as u } from "@dxtmisha/functional";
//#region src/constructors/Progress/Progress.ts
var d = class {
	constructor(e, r, a, l, d, f, p, m, h) {
		t(this, "timeout", void 0), t(this, "hide", s(!1)), t(this, "visible", s(!1)), t(this, "text", void 0), t(this, "isProgressbar", i(() => this.isValue())), t(this, "tag", i(() => this.props.circular ? "svg" : "div")), t(this, "value", i(() => {
			var e;
			return u((e = this.props.value) == null ? 0 : e);
		})), t(this, "valueInPercent", i(() => {
			if (this.isValue()) {
				let e = this.value.value, t = 100 / this.getMax() * e;
				return this.props.circular ? t.toString() : `${100 - t}%`;
			}
			return null;
		})), t(this, "label", i(() => {
			if (this.props.ariaLabel) return this.props.ariaLabel;
			if (!this.isValue() && this.props.visible) return this.text.loading.value;
		})), t(this, "role", i(() => this.isValue() ? "progressbar" : "status")), t(this, "classes", i(() => ({
			[`${this.className}--hide`]: this.hide.value,
			[`${this.className}--visible`]: this.visible.value,
			[`${this.className}--value`]: this.isValue()
		}))), t(this, "styles", i(() => ({ [`--${this.className}-sys-value`]: this.valueInPercent.value }))), t(this, "onAnimation", ({ animationName: e }) => {
			e.match("-hidden") && (this.hide.value = !1);
		}), t(this, "switch", () => {
			let e = this.props.visible;
			if (clearTimeout(this.timeout), this.isValue()) this.reset();
			else if (!!this.visible.value !== e) {
				var t, n;
				let r = u((t = this.props.delay) == null ? 0 : t), i = u((n = this.props.delayHide) == null ? 0 : n);
				e && r ? this.timeout = setTimeout(() => this.update(), r) : !e && i ? this.timeout = setTimeout(() => this.update(), i) : this.update();
			}
		}), this.props = e, this.refs = r, this.element = a, this.classDesign = l, this.className = d, this.components = f, this.slots = p, this.emits = m;
		let { TextIncludeConstructor: g = n } = h == null ? {} : h;
		this.text = new g(this.props), c([r.visible], this.switch, { immediate: !0 }), o(() => {
			clearTimeout(this.timeout);
		});
	}
	isValue() {
		return this.value.value > 0;
	}
	getMax() {
		var e;
		return u((e = this.props.max) == null ? 100 : e);
	}
	update() {
		return this.hide.value = !this.props.visible, this.visible.value = !!this.props.visible, this;
	}
	reset() {
		return this.hide.value = !1, this.visible.value = !1, this;
	}
}, f = {
	max: 100,
	delay: 360,
	delayHide: 200,
	linear: !0,
	indeterminate: "type1",
	position: "top"
}, p = class extends l {
	constructor(n, r, o, s = d) {
		super(n, r, o), t(this, "item", void 0), t(this, "renderCircle", () => {
			if (this.props.circular) {
				var t, n;
				return [a("circle", {
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
				})];
			}
			return [];
		}), t(this, "renderPoint", () => {
			if (this.props.linear && this.props.point && (this.props.value || this.props.indeterminate === "type1")) {
				var e;
				return [a("span", { class: (e = this.classes) == null ? void 0 : e.value.point })];
			}
			return [];
		}), t(this, "propsMain", i(() => {
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
		return a(this.item.tag.value, this.propsMain.value, e);
	}
};
//#endregion
export { d as Progress, p as ProgressDesign, r as ProgressInclude, f as defaultsProgress };

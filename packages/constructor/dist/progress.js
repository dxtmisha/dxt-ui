import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./ClientOnlyInclude-LJEiv40X.js";
import { t as r } from "./TextInclude-6E-DvjvX.js";
import { t as i } from "./ProgressInclude-CoWXemyD.js";
import { computed as a, h as o, onMounted as s, onUnmounted as c, ref as l, watch as u } from "vue";
import { DesignConstructorAbstract as d, toNumber as f } from "@dxtmisha/functional";
//#region src/constructors/Progress/Progress.ts
var p = class {
	constructor(e, i, o, d, p, m, h, g, _) {
		t(this, "timeout", void 0), t(this, "hide", l(!1)), t(this, "visible", l(!1)), t(this, "clientOnly", void 0), t(this, "text", void 0), t(this, "isProgressbar", a(() => this.isValue())), t(this, "tag", a(() => this.props.circular ? "svg" : "div")), t(this, "value", a(() => {
			var e;
			return f((e = this.props.value) == null ? 0 : e);
		})), t(this, "valueInPercent", a(() => {
			if (this.isValue()) {
				let e = this.value.value, t = 100 / this.getMax() * e;
				return this.props.circular ? t.toString() : `${100 - t}%`;
			}
			return null;
		})), t(this, "label", a(() => {
			if (this.props.ariaLabel) return this.props.ariaLabel;
			if (!this.isValue() && this.props.visible) return this.text.loading.value;
		})), t(this, "role", a(() => this.isValue() ? "progressbar" : "status")), t(this, "classes", a(() => ({
			[`${this.className}--hide`]: this.hide.value,
			[`${this.className}--visible`]: this.visible.value,
			[`${this.className}--value`]: this.isValue(),
			[`${this.className}--clientOnly`]: !this.clientOnly.is()
		}))), t(this, "styles", a(() => ({ [`--${this.className}-sys-value`]: this.valueInPercent.value }))), t(this, "onAnimation", ({ animationName: e }) => {
			e.match("-hidden") && (this.hide.value = !1);
		}), t(this, "switch", () => {
			if (!this.clientOnly.is()) return;
			let e = this.props.visible;
			if (clearTimeout(this.timeout), this.isValue()) this.reset();
			else if (!!this.visible.value !== e) {
				var t, n;
				let r = f((t = this.props.delay) == null ? 0 : t), i = f((n = this.props.delayHide) == null ? 0 : n);
				e && r ? this.timeout = setTimeout(() => this.update(), r) : !e && i ? this.timeout = setTimeout(() => this.update(), i) : this.update();
			}
		}), this.props = e, this.refs = i, this.element = o, this.classDesign = d, this.className = p, this.components = m, this.slots = h, this.emits = g;
		let { TextIncludeConstructor: v = r, ClientOnlyIncludeConstructor: y = n } = _ == null ? {} : _;
		this.clientOnly = new y(this.props), this.text = new v(this.props), s(() => {
			u([i.visible], this.switch, { immediate: !0 });
		}), c(() => {
			clearTimeout(this.timeout);
		});
	}
	isValue() {
		return this.value.value > 0;
	}
	getMax() {
		var e;
		return f((e = this.props.max) == null ? 100 : e);
	}
	update() {
		return this.hide.value = !this.props.visible, this.visible.value = !!this.props.visible, this;
	}
	reset() {
		return this.hide.value = !1, this.visible.value = !1, this;
	}
}, m = {
	clientOnly: !0,
	max: 100,
	delay: 360,
	delayHide: 200,
	linear: !0,
	indeterminate: "type1",
	position: "top"
}, h = class extends d {
	constructor(n, r, i, s = p) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderCircle", () => {
			if (this.props.circular) {
				var t, n;
				return [o("circle", {
					class: (t = this.classes) == null ? void 0 : t.value.circleSub,
					cx: "24",
					cy: "24",
					r: "20",
					...e.hidden()
				}), o("circle", {
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
				return [o("span", { class: (e = this.classes) == null ? void 0 : e.value.point })];
			}
			return [];
		}), t(this, "propsMain", a(() => {
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
		if (this.item.clientOnly.isRender.value || this.item.isProgressbar.value) {
			let e = [...this.renderCircle(), ...this.renderPoint()];
			return o(this.item.tag.value, this.propsMain.value, e);
		}
	}
};
//#endregion
export { p as Progress, h as ProgressDesign, i as ProgressInclude, m as defaultsProgress };

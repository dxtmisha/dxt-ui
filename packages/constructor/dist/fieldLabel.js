import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./ProgressInclude-s_LoNLLB.js";
import { t as r } from "./SkeletonInclude-Cu6l1Y1l.js";
import { t as i } from "./LabelInclude-zPXncFnh.js";
import { t as a } from "./FieldCounterInclude-BM8RuujW.js";
import { t as o } from "./FieldLabelInclude-DqJfnvL0.js";
import { computed as s, h as c } from "vue";
import { DesignConstructorAbstract as l } from "@dxtmisha/functional";
//#region src/constructors/FieldLabel/FieldLabel.ts
var u = class {
	constructor(e, o, c, l, u, d, f, p, m) {
		t(this, "label", void 0), t(this, "fieldCounter", void 0), t(this, "progress", void 0), t(this, "skeleton", void 0), t(this, "classes", s(() => ({ ...this.skeleton.classes.value }))), this.props = e, this.refs = o, this.element = c, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { FieldCounterConstructor: h = a, LabelConstructor: g = i, ProgressConstructor: _ = n, SkeletonConstructor: v = r } = m == null ? {} : m, y = new v(this.props, this.classDesign, ["classTextVariant"]);
		this.label = new g(this.props, this.className, void 0, this.slots, void 0, void 0, !0, y), this.fieldCounter = new h(this.props, this.className, this.components), this.progress = new _(this.props, this.className, this.components, {
			circular: !0,
			position: "static",
			dense: !0
		}), this.skeleton = y;
	}
}, d = {}, f = class extends l {
	constructor(n, r, i, a = u) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderRequired", () => {
			if (this.props.required) {
				var t;
				return [c("span", {
					class: (t = this.classes) == null ? void 0 : t.value.required,
					...e.hidden()
				}, "*")];
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
			label: this.getSubClass("label"),
			required: this.getSubClass("required")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		let e = [
			...this.item.label.render(this.renderRequired()),
			...this.item.progress.render(),
			...this.item.fieldCounter.render()
		];
		if (this.item.label.is.value || this.item.progress.is.value || this.item.fieldCounter.isCounter.value) {
			var t;
			return c("label", {
				...this.getAttrs(),
				class: (t = this.classes) == null ? void 0 : t.value.main,
				for: this.props.for
			}, e);
		}
	}
};
//#endregion
export { u as FieldLabel, f as FieldLabelDesign, o as FieldLabelInclude, d as defaultsFieldLabel };

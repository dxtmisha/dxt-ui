import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n } from "./D1Progress-e-cWntWB.js";
import { n as r } from "./SkeletonInclude-D8on8xmw-DRvyAmJt.js";
import { t as i } from "./LabelInclude-DoZ7EUYO-lGSFdcB1.js";
import { n as a, t as o } from "./FieldCounter-DJnT5QGn.js";
import { t as s } from "./Progress-DSR_WO0S.js";
import { computed as c, createBlock as l, defineComponent as u, h as d, mergeDefaults as f, openBlock as p, unref as m } from "vue";
import { DesignConstructorAbstract as h, getElementId as g, getRef as _, isFilled as v, toBinds as y } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldLabelInclude-BA5H3kib.js
var b = class {
	constructor(t, n, r, i, o, s, l, u) {
		e(this, "labelId", g()), e(this, "counterId", g()), e(this, "fieldCounter", void 0), e(this, "is", c(() => {
			var e;
			return v(this.props.label) || !!((e = this.isCounter) != null && e.value);
		})), e(this, "id", c(() => {
			var e;
			return (e = this.isCounter) != null && e.value && this.props.counterShow ? this.counterId : "";
		})), e(this, "binds", c(() => {
			var e;
			return y(_(this.extra), (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {}, {
				for: _(this.forId),
				label: this.props.label,
				required: this.props.required,
				labelId: this.labelId,
				counterId: this.counterId
			}, this.props.fieldLabelAttrs);
		})), e(this, "render", () => this.components && this.is.value ? this.components.render("fieldLabel", { ...y(this.binds.value, { class: `${this.className}__fieldLabel` }) }, this.slots, this.index) : []), this.props = t, this.className = n, this.components = r, this.slots = i, this.forId = o, this.isCounter = s, this.extra = l, this.index = u, this.fieldCounter = new a(this.props, this.className);
	}
}, x = class {
	constructor(t, o, s, l, u, d, f, p, m) {
		e(this, "label", void 0), e(this, "fieldCounter", void 0), e(this, "progress", void 0), e(this, "skeleton", void 0), e(this, "classes", c(() => ({ ...this.skeleton.classes.value }))), this.props = t, this.refs = o, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { FieldCounterConstructor: h = a, LabelConstructor: g = i, ProgressConstructor: _ = n, SkeletonConstructor: v = r } = m == null ? {} : m, y = new v(this.props, this.classDesign, ["classTextVariant"]);
		this.label = new g(this.props, this.className, void 0, this.slots, void 0, void 0, !0, y), this.fieldCounter = new h(this.props, this.className, this.components), this.progress = new _(this.props, this.className, this.components, {
			circular: !0,
			position: "static",
			dense: !0
		}), this.skeleton = y;
	}
}, S = {}, C = class extends h {
	constructor(n, r, i, a = x) {
		super(n, r, i), e(this, "item", void 0), e(this, "renderRequired", () => {
			if (this.props.required) {
				var e;
				return [d("span", {
					class: (e = this.classes) == null ? void 0 : e.value.required,
					...t.hidden()
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
			return d("label", {
				...this.getAttrs(),
				class: (t = this.classes) == null ? void 0 : t.value.main,
				for: this.props.for
			}, e);
		}
	}
}, w = { ...S }, T = /* @__PURE__ */ u({
	name: "D1FieldLabel",
	__name: "D1FieldLabel",
	props: /* @__PURE__ */ f({
		label: {},
		labelId: {},
		counter: {},
		counterShow: { type: Boolean },
		counterTemplate: {},
		counterId: {},
		maxlength: {},
		fieldCounterAttrs: {},
		loading: { type: [Boolean, Object] },
		isSkeleton: { type: Boolean },
		for: {},
		required: { type: Boolean }
	}, w),
	setup(e, { expose: t, emit: n }) {
		let r = new C("d1.fieldLabel", e, {
			emits: n,
			classes: c(() => ({ main: { "d1-fieldLabel": !0 } })),
			styles: c(() => ({})),
			components: {
				fieldCounter: o,
				progress: s
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (p(), l(m(i)));
	}
});
//#endregion
export { b as n, T as t };

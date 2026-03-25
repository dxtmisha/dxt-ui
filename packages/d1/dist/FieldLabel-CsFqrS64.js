import { t as e } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as n } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { n as r } from "./D1Progress-CD6wYH0x.js";
import { n as i, t as a } from "./FieldCounter-D08NhHem.js";
import { t as o } from "./Progress-LN--cv5q.js";
import { computed as s, createBlock as c, defineComponent as l, h as u, mergeDefaults as d, openBlock as f, unref as p } from "vue";
import { DesignConstructorAbstract as m, getElementId as h, getRef as g, isFilled as _, toBinds as v } from "@dxtmisha/functional";
//#region ../constructor/dist/FieldLabelInclude-Bkxf6rRw.js
var y = Object.defineProperty, b = (e, t, n) => t in e ? y(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, x = (e, t, n) => b(e, typeof t == "symbol" ? t : t + "", n), S = class {
	constructor(e, t, n, r, a, o, c, l) {
		x(this, "labelId", h()), x(this, "counterId", h()), x(this, "fieldCounter"), x(this, "is", s(() => {
			var e;
			return _(this.props.label) || !!((e = this.isCounter) != null && e.value);
		})), x(this, "id", s(() => {
			var e;
			return (e = this.isCounter) != null && e.value && this.props.counterShow ? this.counterId : "";
		})), x(this, "binds", s(() => {
			var e;
			return v(g(this.extra), (e = this.isCounter) != null && e.value ? this.fieldCounter.bindsIntermediary.value : {}, {
				for: g(this.forId),
				label: this.props.label,
				required: this.props.required,
				labelId: this.labelId,
				counterId: this.counterId
			}, this.props.fieldLabelAttrs);
		})), x(this, "render", () => this.components && this.is.value ? this.components.render("fieldLabel", { ...v(this.binds.value, { class: `${this.className}__fieldLabel` }) }, this.slots, this.index) : []), this.props = e, this.className = t, this.components = n, this.slots = r, this.forId = a, this.isCounter = o, this.extra = c, this.index = l, this.fieldCounter = new i(this.props, this.className);
	}
}, C = Object.defineProperty, w = (e, t, n) => t in e ? C(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, T = (e, t, n) => w(e, typeof t == "symbol" ? t : t + "", n), E = class {
	constructor(t, a, o, c, l, u, d, f, p) {
		T(this, "label"), T(this, "fieldCounter"), T(this, "progress"), T(this, "skeleton"), T(this, "classes", s(() => ({ ...this.skeleton.classes.value }))), this.props = t, this.refs = a, this.element = o, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = f;
		let { FieldCounterConstructor: m = i, LabelConstructor: h = e, ProgressConstructor: g = r, SkeletonConstructor: _ = n } = p == null ? {} : p, v = new _(this.props, this.classDesign, ["classTextVariant"]);
		this.label = new h(this.props, this.className, void 0, this.slots, void 0, void 0, !0, v), this.fieldCounter = new m(this.props, this.className, this.components), this.progress = new g(this.props, this.className, this.components, {
			circular: !0,
			position: "static",
			dense: !0
		}), this.skeleton = v;
	}
}, D = {}, O = class extends m {
	constructor(e, n, r, i = E) {
		super(e, n, r), T(this, "item"), T(this, "renderRequired", () => {
			var e;
			return this.props.required ? [u("span", {
				class: (e = this.classes) == null ? void 0 : e.value.required,
				...t.hidden()
			}, "*")] : [];
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		var e;
		let t = [
			...this.item.label.render(this.renderRequired()),
			...this.item.progress.render(),
			...this.item.fieldCounter.render()
		];
		if (this.item.label.is.value || this.item.progress.is.value || this.item.fieldCounter.isCounter.value) return u("label", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main,
			for: this.props.for
		}, t);
	}
}, k = { ...D }, A = /* @__PURE__ */ l({
	name: "D1FieldLabel",
	__name: "D1FieldLabel",
	props: /* @__PURE__ */ d({
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
	}, k),
	setup(e, { expose: t, emit: n }) {
		let r = new O("d1.fieldLabel", e, {
			emits: n,
			classes: s(() => ({ main: { "d1-fieldLabel": !0 } })),
			styles: s(() => ({})),
			components: {
				fieldCounter: a,
				progress: o
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (f(), c(p(i)));
	}
});
//#endregion
export { S as n, A as t };

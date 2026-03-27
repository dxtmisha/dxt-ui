import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { r as t } from "./D1Icon-m4nYEnhh.js";
import { t as n } from "./EnabledInclude-D1O_lLPV--HDul4a0.js";
import { i as r } from "./WindowClassesInclude-C8R8pgeo-DhszkcJh.js";
import { t as i } from "./Chip-D1hOAH22.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, unref as d } from "vue";
import { DesignConstructorAbstract as f, isFilled as p, toBinds as m } from "@dxtmisha/functional";
//#region ../constructor/dist/selectValue.js
var h = class {
	constructor(i, o, s, c, l, u, d, f, m) {
		e(this, "enabled", void 0), e(this, "event", void 0), e(this, "window", void 0), e(this, "isPlaceholder", a(() => !p(this.props.value) && !!this.props.placeholder)), e(this, "iconTrailing", a(() => {
			if (this.enabled.isEnabled.value) return {
				icon: this.props.iconCancel,
				dynamic: !0,
				class: [`${this.className}__trailing`, this.window.get().controlStatic]
			};
		})), e(this, "classes", a(() => ({
			[`${this.className}--placeholder`]: this.isPlaceholder.value,
			[`${this.className}--multiple`]: !!this.props.multiple
		}))), e(this, "onClick", (e, t) => {
			e.preventDefault(), e.stopPropagation(), this.event.onClick(e, t);
		}), this.props = i, this.refs = o, this.element = s, this.classDesign = c, this.className = l, this.components = u, this.slots = d, this.emits = f;
		let { EnabledConstructor: h = n, EventConstructor: g = t, WindowClassesConstructor: _ = r } = m == null ? {} : m;
		this.enabled = new h(this.props), this.event = new g(this.props, this.enabled, this.emits), this.window = new _(c);
	}
}, g = {}, _ = class extends f {
	constructor(t, n, r, i = h) {
		super(t, n, r), e(this, "item", void 0), e(this, "renderData", () => {
			if (this.item.isPlaceholder.value) return [String(this.props.placeholder)];
			if (this.props.value) {
				var e, t, n;
				if (this.props.multiple) return this.renderList();
				let r = (e = (t = this.props.value[0]) == null ? void 0 : t.label) == null ? (n = this.props.value[0]) == null ? void 0 : n.value : e;
				if (r) return [String(r)];
			}
			return [];
		}), e(this, "renderList", () => {
			var e;
			let t = [];
			return (e = this.props.value) == null || e.forEach((e) => {
				let n = this.renderItem(e);
				n ? t.push(n) : t.push(e.label);
			}), t;
		}), e(this, "renderItem", (e) => {
			var t;
			return this.components.renderOne("chip", m(this.props.chipAttrs, {
				class: (t = this.classes) == null ? void 0 : t.value.item,
				icon: this.props.iconShow && e.icon ? e.icon : void 0,
				iconTrailing: this.item.iconTrailing.value,
				label: e.label,
				"data-value": e.index,
				readonly: !0,
				disabled: this.props.disabled,
				value: e.value,
				detail: e.detail,
				onClick: this.item.onClick
			}), void 0, e.index);
		}), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: this.item.classes.value,
			item: this.getSubClass("item"),
			trailing: this.getSubClass("trailing")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		var e;
		return c("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.renderData());
	}
}, v = {
	...g,
	chipAttrs: { size: "sm" },
	iconCancel: "close_small"
}, y = /* @__PURE__ */ s({
	name: "D1SelectValue",
	__name: "D1SelectValue",
	props: /* @__PURE__ */ l({
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		chipAttrs: {},
		placeholder: {},
		value: {},
		multiple: { type: Boolean },
		iconShow: { type: Boolean },
		iconAttrs: {},
		iconCancel: {}
	}, v),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let r = new _("d1.selectValue", e, {
			emits: n,
			classes: a(() => ({ main: { "d1-selectValue": !0 } })),
			styles: a(() => ({})),
			components: { chip: i }
		}), s = r.render();
		return t(r.expose()), (e, t) => (u(), o(d(s)));
	}
});
//#endregion
export { y as t };

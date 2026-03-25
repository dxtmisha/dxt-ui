import { r as e } from "./D1Icon-BnpmOB4B.js";
import { t } from "./EnabledInclude-B9oXYBtR-BRVL93PD.js";
import { i as n } from "./WindowClassesInclude-B56usxgx-lf4DY4p9.js";
import { t as r } from "./Chip-CWpkZ1eD.js";
import { computed as i, createBlock as a, defineComponent as o, h as s, mergeDefaults as c, openBlock as l, unref as u } from "vue";
import { DesignConstructorAbstract as d, isFilled as f, toBinds as p } from "@dxtmisha/functional";
//#region ../constructor/dist/selectValue.js
var m = Object.defineProperty, h = (e, t, n) => t in e ? m(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, g = (e, t, n) => h(e, typeof t == "symbol" ? t : t + "", n), _ = class {
	constructor(r, a, o, s, c, l, u, d, p) {
		g(this, "enabled"), g(this, "event"), g(this, "window"), g(this, "isPlaceholder", i(() => !f(this.props.value) && !!this.props.placeholder)), g(this, "iconTrailing", i(() => {
			if (this.enabled.isEnabled.value) return {
				icon: this.props.iconCancel,
				dynamic: !0,
				class: [`${this.className}__trailing`, this.window.get().controlStatic]
			};
		})), g(this, "classes", i(() => ({
			[`${this.className}--placeholder`]: this.isPlaceholder.value,
			[`${this.className}--multiple`]: !!this.props.multiple
		}))), g(this, "onClick", (e, t) => {
			e.preventDefault(), e.stopPropagation(), this.event.onClick(e, t);
		}), this.props = r, this.refs = a, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { EnabledConstructor: m = t, EventConstructor: h = e, WindowClassesConstructor: _ = n } = p == null ? {} : p;
		this.enabled = new m(this.props), this.event = new h(this.props, this.enabled, this.emits), this.window = new _(s);
	}
}, v = {}, y = class extends d {
	constructor(e, t, n, r = _) {
		super(e, t, n), g(this, "item"), g(this, "renderData", () => {
			var e, t, n;
			if (this.item.isPlaceholder.value) return [String(this.props.placeholder)];
			if (this.props.value) {
				if (this.props.multiple) return this.renderList();
				let r = (n = (e = this.props.value[0]) == null ? void 0 : e.label) == null ? (t = this.props.value[0]) == null ? void 0 : t.value : n;
				if (r) return [String(r)];
			}
			return [];
		}), g(this, "renderList", () => {
			var e;
			let t = [];
			return (e = this.props.value) == null || e.forEach((e) => {
				let n = this.renderItem(e);
				n ? t.push(n) : t.push(e.label);
			}), t;
		}), g(this, "renderItem", (e) => {
			var t;
			return this.components.renderOne("chip", p(this.props.chipAttrs, {
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
		}), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return s("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.renderData());
	}
}, b = {
	...v,
	chipAttrs: { size: "sm" },
	iconCancel: "close_small"
}, x = /* @__PURE__ */ o({
	name: "D1SelectValue",
	__name: "D1SelectValue",
	props: /* @__PURE__ */ c({
		readonly: { type: Boolean },
		disabled: { type: Boolean },
		chipAttrs: {},
		placeholder: {},
		value: {},
		multiple: { type: Boolean },
		iconShow: { type: Boolean },
		iconAttrs: {},
		iconCancel: {}
	}, b),
	emits: ["click", "clickLite"],
	setup(e, { expose: t, emit: n }) {
		let o = new y("d1.selectValue", e, {
			emits: n,
			classes: i(() => ({ main: { "d1-selectValue": !0 } })),
			styles: i(() => ({})),
			components: { chip: r }
		}), s = o.render();
		return t(o.expose()), (e, t) => (l(), a(u(s)));
	}
});
//#endregion
export { x as t };

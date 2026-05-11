import { t as e } from "./defineProperty-3CuEayIP.js";
import { t } from "./EnabledInclude-CT-HRavv.js";
import { t as n } from "./EventClickInclude-LT7h6Ikv.js";
import { t as r } from "./WindowClassesInclude-BI6aof2F.js";
import { computed as i, h as a } from "vue";
import { DesignConstructorAbstract as o, getRef as s, isFilled as c, toBind as l, toBinds as u } from "@dxtmisha/functional";
//#region src/constructors/SelectValue/SelectValue.ts
var d = class {
	constructor(a, o, s, l, u, d, f, p, m) {
		e(this, "enabled", void 0), e(this, "event", void 0), e(this, "window", void 0), e(this, "isPlaceholder", i(() => !c(this.props.value) && !!this.props.placeholder)), e(this, "iconTrailing", i(() => {
			if (this.enabled.isEnabled.value) return {
				icon: this.props.iconCancel,
				dynamic: !0,
				class: [`${this.className}__trailing`, this.window.get().controlStatic]
			};
		})), e(this, "classes", i(() => ({
			[`${this.className}--placeholder`]: this.isPlaceholder.value,
			[`${this.className}--multiple`]: !!this.props.multiple
		}))), e(this, "onClick", (e, t) => {
			e.preventDefault(), e.stopPropagation(), this.event.onClick(e, t);
		}), this.props = a, this.refs = o, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { EnabledConstructor: h = t, EventConstructor: g = n, WindowClassesConstructor: _ = r } = m == null ? {} : m;
		this.enabled = new h(this.props), this.event = new g(this.props, this.enabled, this.emits), this.window = new _(l);
	}
}, f = {}, p = class extends o {
	constructor(t, n, r, i = d) {
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
			return this.components.renderOne("chip", u(this.props.chipAttrs, {
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
		return a("div", {
			...this.getAttrs(),
			class: (e = this.classes) == null ? void 0 : e.value.main
		}, this.renderData());
	}
}, m = class {
	constructor(t, n, r, a, o) {
		e(this, "is", i(() => !!(!this.props.disabled && this.components))), e(this, "binds", i(() => ({
			...u(s(this.extra), this.props.selectValueAttrs, { class: `${this.className}__select-value` }),
			disabled: this.props.disabled
		}))), e(this, "render", (e) => this.components && this.is.value ? this.components.render("selectValue", l(e == null ? {} : e, this.binds.value), this.index) : []), this.props = t, this.className = n, this.components = r, this.extra = a, this.index = o;
	}
};
//#endregion
export { d as SelectValue, p as SelectValueDesign, m as SelectValueInclude, f as defaultsSelectValue };

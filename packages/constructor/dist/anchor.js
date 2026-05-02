import { t as e } from "./AriaStaticInclude-CS1hPGyK.js";
import { t } from "./defineProperty-149Ahniv.js";
import { t as n } from "./TextInclude-6E-DvjvX.js";
import { t as r } from "./LabelInclude-BeVk9z8H.js";
import { t as i } from "./TooltipInclude-D_HTl_nm.js";
import { t as a } from "./getClassTagAStatic-Rruum_Od.js";
import { computed as o, h as s, onMounted as c, ref as l } from "vue";
import { DesignConstructorAbstract as u, goScrollSmooth as d, toNumber as f, writeClipboardData as p } from "@dxtmisha/functional";
//#region src/constructors/Anchor/AnchorHref.ts
var m = class {
	constructor(e) {
		t(this, "href", o(() => {
			if (this.props.name) return `#${this.props.name}`;
		})), this.props = e;
	}
	is() {
		return !!this.href.value;
	}
	get() {
		return this.href.value;
	}
	getLink() {
		return `${location.origin}${location.pathname}${this.href.value}`;
	}
}, h = class {
	constructor(e, t, n) {
		this.props = e, this.element = t, this.href = n;
	}
	go() {
		this.element.value && (d(this.element.value, {
			behavior: this.props.behavior,
			block: this.props.block,
			inline: this.props.inline
		}, f(this.props.shift)), history.replaceState({}, "", this.href.get()));
	}
}, g = class {
	constructor(e, n, r, i) {
		t(this, "copy", l()), t(this, "timeout", void 0), t(this, "onClick", (e) => {
			if (e.preventDefault(), this.props.isCopy) p(this.href.getLink()).then(() => this.toCopy());
			else {
				var t;
				(t = this.to) == null || t.go();
			}
		}), this.props = e, this.tooltip = n, this.href = r, this.to = i;
	}
	isCopy() {
		return !!this.copy.value;
	}
	toCopy() {
		var e;
		clearTimeout(this.timeout), this.copy.value = !0, this.tooltip.open(), this.timeout = setTimeout(() => {
			this.copy.value = !1, this.tooltip.close();
		}, (e = this.props.delayHide) == null ? 1024 : e);
	}
}, _ = class {
	constructor(e, n) {
		t(this, "icon", o(() => {
			if (!this.props.hide) return this.props.isCopy ? this.props.iconTag : this.props.iconLink;
		})), t(this, "binds", o(() => ({
			icon: this.icon.value,
			iconActive: this.props.isCopy ? this.props.iconContentCopy : void 0,
			active: this.event.isCopy()
		}))), this.props = e, this.event = n;
	}
	is() {
		return !!this.icon.value;
	}
}, v = class {
	constructor(e, a, s, l, u, d, f, p, v) {
		t(this, "label", void 0), t(this, "text", void 0), t(this, "tooltip", void 0), t(this, "href", void 0), t(this, "to", void 0), t(this, "event", void 0), t(this, "icon", void 0), t(this, "isHide", o(() => this.props.hide || !this.label.is.value && !this.props.isCopy)), t(this, "goIsFocus", () => {
			location.hash === this.href.get() && this.to.go();
		}), this.props = e, this.refs = a, this.element = s, this.classDesign = l, this.className = u, this.components = d, this.slots = f, this.emits = p;
		let { AnchorEventConstructor: y = g, AnchorHrefConstructor: b = m, AnchorIconConstructor: x = _, AnchorToConstructor: S = h, LabelIncludeConstructor: C = r, TextIncludeConstructor: w = n, TooltipIncludeConstructor: T = i } = v == null ? {} : v;
		this.label = new C(e, u, void 0, f), this.text = new w(this.props), this.tooltip = new T(this.props, this.className, this.components, o(() => ({
			description: this.text.copiedClipboard.value,
			interactive: !1
		}))), this.href = new b(this.props), this.to = new S(this.props, this.element, this.href), this.event = new y(this.props, this.tooltip, this.href, this.to), this.icon = new x(this.props, this.event), c(() => {
			requestAnimationFrame(this.goIsFocus);
		});
	}
}, y = {
	shift: 64,
	delayHide: 3072
}, b = class extends u {
	constructor(n, r, i, o = v) {
		super(n, r, i), t(this, "item", void 0), t(this, "renderTooltip", () => this.item.tooltip.render({ control: (e) => this.renderItem(e) })), t(this, "renderItem", (e) => {
			var t;
			let n = [(t = this.classes) == null ? void 0 : t.value.main, a(this.getDesign())];
			return e && n.push(e.class), [s("a", {
				...this.getMainProps(),
				class: n
			}, this.renderChildren())];
		}), t(this, "renderItemHide", () => [s("a", {
			...this.getAttrs(),
			key: "main-hide",
			name: this.props.name,
			...e.hidden()
		})]), t(this, "renderIcon", () => this.item.icon.is() ? this.components.render("icon", this.item.icon.binds.value) : []), t(this, "renderChildren", () => {
			let e = [];
			return this.props.hide || e.push(...this.renderIcon(), ...this.item.label.render()), e;
		}), this.item = new o(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {};
	}
	initClasses() {
		return {
			main: {},
			label: this.getSubClass("label")
		};
	}
	initStyles() {
		return {};
	}
	initRender() {
		if (this.item.href.is()) return this.item.isHide.value ? this.renderItemHide() : this.props.isCopy ? this.renderTooltip() : this.renderItem();
	}
	getMainProps() {
		let t = {
			...this.getAttrs(),
			ref: this.element,
			key: "main",
			name: this.props.name,
			onClick: this.item.event.onClick,
			tabindex: 0
		};
		return this.props.isCopy ? t : {
			...t,
			href: this.item.href.get(),
			...e.current("page")
		};
	}
};
//#endregion
export { v as Anchor, b as AnchorDesign, g as AnchorEvent, m as AnchorHref, _ as AnchorIcon, h as AnchorTo, y as defaultsAnchor };

import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { t as n } from "./LabelInclude-BJc8uC4Y-Wn8gBK6K.js";
import { t as r } from "./getClassTagAStatic-Cdptb763-Dd7TrdF2.js";
import { t as i } from "./TextInclude-BIa1AeDQ-C-pyoUw5.js";
import { n as a, t as o } from "./Tooltip-CR8XS57-.js";
import { t as s } from "./Icon-DDbhXqOe.js";
import { computed as c, createBlock as l, defineComponent as u, h as d, mergeDefaults as f, onMounted as p, openBlock as m, ref as h, unref as g } from "vue";
import { DesignConstructorAbstract as _, goScrollSmooth as v, toNumber as y, writeClipboardData as b } from "@dxtmisha/functional";
//#region ../constructor/dist/anchor.js
var x = class {
	constructor(t) {
		e(this, "href", c(() => {
			if (this.props.name) return `#${this.props.name}`;
		})), this.props = t;
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
}, S = class {
	constructor(e, t, n) {
		this.props = e, this.element = t, this.href = n;
	}
	go() {
		this.element.value && (v(this.element.value, {
			behavior: this.props.behavior,
			block: this.props.block,
			inline: this.props.inline
		}, y(this.props.shift)), history.replaceState({}, "", this.href.get()));
	}
}, C = class {
	constructor(t, n, r, i) {
		e(this, "copy", h()), e(this, "timeout", void 0), e(this, "onClick", (e) => {
			if (e.preventDefault(), this.props.isCopy) b(this.href.getLink()).then(() => this.toCopy());
			else {
				var t;
				(t = this.to) == null || t.go();
			}
		}), this.props = t, this.tooltip = n, this.href = r, this.to = i;
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
}, w = class {
	constructor(t, n) {
		e(this, "icon", c(() => {
			if (!this.props.hide) return this.props.isCopy ? this.props.iconTag : this.props.iconLink;
		})), e(this, "binds", c(() => ({
			icon: this.icon.value,
			iconActive: this.props.isCopy ? this.props.iconContentCopy : void 0,
			active: this.event.isCopy()
		}))), this.props = t, this.event = n;
	}
	is() {
		return !!this.icon.value;
	}
}, T = class {
	constructor(t, r, o, s, l, u, d, f, m) {
		e(this, "label", void 0), e(this, "text", void 0), e(this, "tooltip", void 0), e(this, "href", void 0), e(this, "to", void 0), e(this, "event", void 0), e(this, "icon", void 0), e(this, "isHide", c(() => this.props.hide || !this.label.is.value && !this.props.isCopy)), e(this, "goIsFocus", () => {
			location.hash === this.href.get() && this.to.go();
		}), this.props = t, this.refs = r, this.element = o, this.classDesign = s, this.className = l, this.components = u, this.slots = d, this.emits = f;
		let { AnchorEventConstructor: h = C, AnchorHrefConstructor: g = x, AnchorIconConstructor: _ = w, AnchorToConstructor: v = S, LabelIncludeConstructor: y = n, TextIncludeConstructor: b = i, TooltipIncludeConstructor: T = a } = m == null ? {} : m;
		this.label = new y(t, l, void 0, d), this.text = new b(this.props), this.tooltip = new T(this.props, this.className, this.components, c(() => ({
			description: this.text.copiedClipboard.value,
			interactive: !1
		}))), this.href = new g(this.props), this.to = new v(this.props, this.element, this.href), this.event = new h(this.props, this.tooltip, this.href, this.to), this.icon = new _(this.props, this.event), p(() => {
			requestAnimationFrame(this.goIsFocus);
		});
	}
}, E = {
	shift: 64,
	delayHide: 3072
}, D = class extends _ {
	constructor(n, i, a, o = T) {
		super(n, i, a), e(this, "item", void 0), e(this, "renderTooltip", () => this.item.tooltip.render({ control: (e) => this.renderItem(e) })), e(this, "renderItem", (e) => {
			var t;
			let n = [(t = this.classes) == null ? void 0 : t.value.main, r(this.getDesign())];
			return e && n.push(e.class), [d("a", {
				...this.getMainProps(),
				class: n
			}, this.renderChildren())];
		}), e(this, "renderItemHide", () => [d("a", {
			...this.getAttrs(),
			key: "main-hide",
			name: this.props.name,
			...t.hidden()
		})]), e(this, "renderIcon", () => this.item.icon.is() ? this.components.render("icon", this.item.icon.binds.value) : []), e(this, "renderChildren", () => {
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
		let e = {
			...this.getAttrs(),
			ref: this.element,
			key: "main",
			name: this.props.name,
			onClick: this.item.event.onClick,
			tabindex: 0
		};
		return this.props.isCopy ? e : {
			...e,
			href: this.item.href.get(),
			...t.current("page")
		};
	}
}, O = {
	...E,
	iconLink: "link",
	iconTag: "tag",
	iconContentCopy: "content_copy"
}, k = /* @__PURE__ */ u({
	name: "D1Anchor",
	__name: "D1Anchor",
	props: /* @__PURE__ */ f({
		label: {},
		labelId: {},
		tooltipAttrs: {},
		textCopiedClipboard: { type: [String, Function] },
		shift: {},
		behavior: {},
		block: {},
		inline: {},
		hide: { type: Boolean },
		name: {},
		isCopy: { type: Boolean },
		iconLink: {},
		iconTag: {},
		iconContentCopy: {},
		delayHide: {}
	}, O),
	setup(e, { expose: t, emit: n }) {
		let r = new D("d1.anchor", e, {
			emits: n,
			classes: c(() => ({ main: { "d1-anchor": !0 } })),
			styles: c(() => ({})),
			components: {
				icon: s,
				tooltip: o
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (m(), l(g(i)));
	}
});
//#endregion
export { k as t };

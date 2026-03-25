import { t as e } from "./getClassTagAStatic-BnVYlXHI-0U7MRJ3h.js";
import { t } from "./LabelInclude-D-mLvjK5-BFCcbjFo.js";
import { t as n } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t as r } from "./TextInclude--GERRCGj-Dh1vBGhP.js";
import { n as i, t as a } from "./Tooltip-DkoLTELa.js";
import { t as o } from "./Icon-9c2pxWjK.js";
import { computed as s, createBlock as c, defineComponent as l, h as u, mergeDefaults as d, onMounted as f, openBlock as p, ref as m, unref as h } from "vue";
import { DesignConstructorAbstract as g, goScrollSmooth as _, toNumber as v, writeClipboardData as y } from "@dxtmisha/functional";
//#region ../constructor/dist/anchor.js
var b = Object.defineProperty, x = (e, t, n) => t in e ? b(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, S = (e, t, n) => x(e, typeof t == "symbol" ? t : t + "", n), C = class {
	constructor(e) {
		S(this, "href", s(() => {
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
}, w = class {
	constructor(e, t, n) {
		this.props = e, this.element = t, this.href = n;
	}
	go() {
		this.element.value && (_(this.element.value, {
			behavior: this.props.behavior,
			block: this.props.block,
			inline: this.props.inline
		}, v(this.props.shift)), history.replaceState({}, "", this.href.get()));
	}
}, T = class {
	constructor(e, t, n, r) {
		S(this, "copy", m()), S(this, "timeout"), S(this, "onClick", (e) => {
			var t;
			e.preventDefault(), this.props.isCopy ? y(this.href.getLink()).then(() => this.toCopy()) : (t = this.to) == null || t.go();
		}), this.props = e, this.tooltip = t, this.href = n, this.to = r;
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
}, E = class {
	constructor(e, t) {
		S(this, "icon", s(() => {
			if (!this.props.hide) return this.props.isCopy ? this.props.iconTag : this.props.iconLink;
		})), S(this, "binds", s(() => ({
			icon: this.icon.value,
			iconActive: this.props.isCopy ? this.props.iconContentCopy : void 0,
			active: this.event.isCopy()
		}))), this.props = e, this.event = t;
	}
	is() {
		return !!this.icon.value;
	}
}, D = class {
	constructor(e, n, a, o, c, l, u, d, p) {
		S(this, "label"), S(this, "text"), S(this, "tooltip"), S(this, "href"), S(this, "to"), S(this, "event"), S(this, "icon"), S(this, "isHide", s(() => this.props.hide || !this.label.is.value && !this.props.isCopy)), S(this, "goIsFocus", () => {
			location.hash === this.href.get() && this.to.go();
		}), this.props = e, this.refs = n, this.element = a, this.classDesign = o, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { AnchorEventConstructor: m = T, AnchorHrefConstructor: h = C, AnchorIconConstructor: g = E, AnchorToConstructor: _ = w, LabelIncludeConstructor: v = t, TextIncludeConstructor: y = r, TooltipIncludeConstructor: b = i } = p == null ? {} : p;
		this.label = new v(e, c, void 0, u), this.text = new y(this.props), this.tooltip = new b(this.props, this.className, this.components, s(() => ({
			description: this.text.copiedClipboard.value,
			interactive: !1
		}))), this.href = new h(this.props), this.to = new _(this.props, this.element, this.href), this.event = new m(this.props, this.tooltip, this.href, this.to), this.icon = new g(this.props, this.event), f(() => {
			requestAnimationFrame(this.goIsFocus);
		});
	}
}, O = {
	shift: 64,
	delayHide: 3072
}, k = class extends g {
	constructor(t, r, i, a = D) {
		super(t, r, i), S(this, "item"), S(this, "renderTooltip", () => this.item.tooltip.render({ control: (e) => this.renderItem(e) })), S(this, "renderItem", (t) => {
			var n;
			let r = [(n = this.classes) == null ? void 0 : n.value.main, e(this.getDesign())];
			return t && r.push(t.class), [u("a", {
				...this.getMainProps(),
				class: r
			}, this.renderChildren())];
		}), S(this, "renderItemHide", () => [u("a", {
			...this.getAttrs(),
			key: "main-hide",
			name: this.props.name,
			...n.hidden()
		})]), S(this, "renderIcon", () => this.item.icon.is() ? this.components.render("icon", this.item.icon.binds.value) : []), S(this, "renderChildren", () => {
			let e = [];
			return this.props.hide || e.push(...this.renderIcon(), ...this.item.label.render()), e;
		}), this.item = new a(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
			...n.current("page")
		};
	}
}, A = {
	...O,
	iconLink: "link",
	iconTag: "tag",
	iconContentCopy: "content_copy"
}, j = /* @__PURE__ */ l({
	name: "D1Anchor",
	__name: "D1Anchor",
	props: /* @__PURE__ */ d({
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
	}, A),
	setup(e, { expose: t, emit: n }) {
		let r = new k("d1.anchor", e, {
			emits: n,
			classes: s(() => ({ main: { "d1-anchor": !0 } })),
			styles: s(() => ({})),
			components: {
				icon: o,
				tooltip: a
			}
		}), i = r.render();
		return t(r.expose()), (e, t) => (p(), c(h(i)));
	}
});
//#endregion
export { j as t };

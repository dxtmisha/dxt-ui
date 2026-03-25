import { t as e } from "./AriaStaticInclude-DRHG8ILX-BXqrvfcb.js";
import { t } from "./SkeletonInclude-BIUzAO2s-BdK-aHQN.js";
import { t as n } from "./IconInclude-CLqwI29Q-CYtp8tgy.js";
import { t as r } from "./Image-CQ3p93mr.js";
import { computed as i, createBlock as a, defineComponent as o, h as s, mergeDefaults as c, openBlock as l, toRefs as u, unref as d } from "vue";
import { DesignConstructorAbstract as f, RouterItemRef as p, getBind as m, getBindRef as h, inArray as g, isEnter as _, isFilled as v, isObjectNotArray as y, toBinds as b } from "@dxtmisha/functional";
//#region ../constructor/dist/EventClickInclude-DMbEP-nH.js
var x = Object.defineProperty, S = (e, t, n) => t in e ? x(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, C = (e, t, n) => S(e, typeof t == "symbol" ? t : t + "", n), w = class {
	constructor(e, t, n) {
		C(this, "refs"), C(this, "onClick", (e, t) => {
			if (this.emits) if (t) this.emit(e, t);
			else if (this.toRouter()) e.preventDefault();
			else if (this.enabled) {
				let t = this.getOptions(e);
				(this.enabled.isEnabled.value || t.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(e, t);
			} else this.emit(e, this.getOptions(e));
		}), C(this, "onKeydown", (e, t) => {
			_(e) && (this.onClick(e, t), e.preventDefault());
		}), this.props = e, this.enabled = t, this.emits = n, this.refs = e ? u(e) : void 0;
	}
	get binds() {
		return {
			...this.getHref(),
			onClick: this.onClick,
			onKeydown: this.onKeydown
		};
	}
	get expose() {
		var e, t;
		return {
			value: (e = this.refs) == null ? void 0 : e.value,
			detail: (t = this.refs) == null ? void 0 : t.detail
		};
	}
	getHref() {
		var e, t, n;
		let r = (e = this.props) == null ? void 0 : e.to;
		return (t = this.props) != null && t.to && y(r) && "name" in r ? p.rawToHref(r) : { href: (n = this.props) == null ? void 0 : n.href };
	}
	getOptions(e) {
		var t, n;
		return {
			type: this.getTargetType(e),
			value: (t = this.props) == null ? void 0 : t.value,
			detail: (n = this.props) == null ? void 0 : n.detail
		};
	}
	getTargetType(e) {
		var t, n, r;
		let i = (r = (n = (t = e.target) == null ? void 0 : t.closest("[data-event-type]")) == null ? void 0 : n.dataset) == null ? void 0 : r.eventType;
		return i == null ? "click" : i;
	}
	toRouter() {
		var e, t;
		return (e = this.props) != null && e.to ? (p.push((t = this.props) == null ? void 0 : t.to), !0) : !1;
	}
	emit(e, t) {
		this.emits && (this.emits("click", e, t), this.emits("clickLite", t));
	}
}, T = Object.defineProperty, E = (e, t, n) => t in e ? T(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, D = (e, t, n) => E(e, typeof t == "symbol" ? t : t + "", n), O = class extends n {
	constructor(e, t, n, r) {
		super(e, t, n, r, i(() => !!(!e.iconTrailing && !e.iconTrailingTurnOnly && e.iconTurn)), i(() => !!(!e.iconTrailing && !e.iconTrailingDirOnly && e.iconDir)), !0), D(this, "isIconTrailing", i(() => !!this.props.iconTrailing)), D(this, "hasAtLeastOneIcon", i(() => !!(this.props.iconTrailing || this.props.icon))), D(this, "trailingBind", i(() => {
			var e;
			return m(this.props.iconTrailing, {
				turn: this.props.iconTurn,
				asPalette: this.props.iconPalette,
				dir: this.props.iconDir,
				end: !0,
				high: !0,
				...b(this.getExtra(), this.props.iconAttrs, this.getClasses((e = this.props.iconAttrs) == null ? void 0 : e.class, "trailing")),
				...this.getEventType("icon-trailing")
			}, "icon");
		})), D(this, "renderIconTrailing", () => this.components && v(this.props.iconTrailing) ? this.components.render("icon", this.trailingBind.value, void 0, "iconTrailing") : []), D(this, "render", () => [...this.renderIcon(), ...this.renderIconTrailing()]), this.props = e, this.className = t, this.components = n, this.extra = r;
	}
}, k = Object.defineProperty, A = (e, t, n) => t in e ? k(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, j = (e, t, n) => A(e, typeof t == "symbol" ? t : t + "", n), M = class {
	constructor(n, r, a, o, s, c, l, u, d) {
		j(this, "iconBind"), j(this, "iconActiveBind"), j(this, "skeleton"), j(this, "event"), j(this, "isActive", i(() => !!(this.props.active && this.props.iconActive))), j(this, "classes", i(() => ({ ...this.skeleton.classes.value }))), j(this, "binds", i(() => {
			var t;
			let n = {
				key: "icon",
				...e.role(this.getRole()),
				...e.label(this.props.ariaLabel)
			};
			return this.props.dynamic ? {
				...n,
				tabindex: (t = this.props.tabindex) == null ? 0 : t,
				...this.event.binds
			} : {
				...n,
				...e.hidden()
			};
		})), j(this, "onLoad", (e) => {
			var t;
			return (t = this.emits) == null ? void 0 : t.call(this, "load", e);
		}), this.props = n, this.refs = r, this.element = a, this.classDesign = o, this.className = s, this.components = c, this.slots = l, this.emits = u;
		let { EventClickIncludeConstructor: f = w, SkeletonIncludeConstructor: p = t } = d == null ? {} : d;
		this.iconBind = h(r.icon, i(() => ({
			key: "mainIcon",
			class: `${s}__icon`,
			turn: this.props.turn,
			disabled: this.props.disabled,
			hide: this.isActive.value,
			onLoad: this.onLoad
		}))), this.iconActiveBind = h(r.iconActive, i(() => ({
			key: "activeIcon",
			class: `${s}__iconActive`,
			turn: this.props.turn,
			disabled: this.props.disabled,
			hide: !this.isActive.value
		}))), this.event = new f(n, void 0, u), this.skeleton = new p(n, o, ["classBackgroundVariant"]);
	}
	getRole() {
		if (this.props.role) return this.props.role;
		if (this.props.dynamic) return "button";
	}
}, N = { animationType: "type1" }, P = class extends f {
	constructor(e, t, n, r = M) {
		super(e, t, n), j(this, "item"), j(this, "propsMain", i(() => {
			var e;
			return {
				...this.getAttrs(),
				...this.item.binds.value,
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), j(this, "renderIcon", () => this.components.renderOne("image", this.item.iconBind.value, void 0, "icon")), j(this, "renderIconActive", () => this.components.renderOne("image", this.item.iconActiveBind.value, void 0, "iconActive")), this.item = new r(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
	}
	initExpose() {
		return {
			...this.item.event.expose,
			isActive: this.item.isActive
		};
	}
	initClasses() {
		return { main: this.item.classes.value };
	}
	initStyles() {
		return {};
	}
	initRender() {
		let e = [];
		return this.initSlot("default", e), this.props.icon && e.push(this.renderIcon()), this.props.iconActive && e.push(this.renderIconActive()), s("span", this.propsMain.value, e);
	}
}, F = {
	animationType: ["type1", "type2"],
	size: [
		"auto",
		"x",
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl",
		"6xl",
		"7xl",
		"8xl",
		"9xl"
	],
	rounded: [
		"auto",
		"sm",
		"md",
		"lg",
		"xl",
		"full"
	]
}, I = {
	...N,
	animationType: "type1",
	square: !0,
	size: "auto",
	rounded: "auto"
}, L = /* @__PURE__ */ o({
	name: "D1Icon",
	__name: "D1Icon",
	props: /* @__PURE__ */ c({
		isSkeleton: { type: Boolean },
		ariaLabel: {},
		to: {},
		href: {},
		value: {},
		detail: {},
		active: { type: Boolean },
		icon: {},
		iconActive: {},
		role: {},
		tabindex: {},
		turn: { type: Boolean },
		disabled: { type: Boolean },
		hide: { type: Boolean },
		asPalette: { type: Boolean },
		dir: { type: Boolean },
		overlay: { type: Boolean },
		dynamic: { type: Boolean },
		start: { type: Boolean },
		end: { type: Boolean },
		high: { type: Boolean },
		animationType: {},
		animationShow: { type: Boolean },
		square: { type: Boolean },
		circle: { type: Boolean },
		rect: { type: Boolean },
		size: {},
		inverse: { type: Boolean },
		rounded: {}
	}, I),
	emits: [
		"load",
		"click",
		"clickLite"
	],
	setup(e, { expose: t, emit: n }) {
		let o = n, s = e, c = i(() => ({ main: {
			"d1-icon": !0,
			"d1-icon--turn": s.turn,
			"d1-icon--disabled": s.disabled,
			"d1-icon--hide": s.hide,
			"d1-icon--asPalette": s.asPalette,
			"d1-icon--dir": s.dir,
			"d1-icon--overlay": s.overlay,
			"d1-icon--dynamic": s.dynamic,
			"d1-icon--start": s.start,
			"d1-icon--end": s.end,
			"d1-icon--high": s.high,
			[`d1-icon--animationType--${s.animationType}`]: g(F.animationType, s.animationType),
			"d1-icon--animationShow": s.animationShow,
			"d1-icon--square": s.square && !s.circle && !s.rect,
			"d1-icon--circle": s.circle,
			"d1-icon--rect": s.rect,
			[`d1-icon--size--${s.size}`]: g(F.size, s.size),
			"d1-icon--inverse": s.inverse,
			[`d1-icon--rounded--${s.rounded}`]: g(F.rounded, s.rounded)
		} })), u = i(() => ({})), f = new P("d1.icon", s, {
			emits: o,
			components: { image: r },
			classes: c,
			styles: u
		}), p = f.render();
		return t(f.expose()), (e, t) => (l(), a(d(p)));
	}
});
//#endregion
export { O as n, w as r, L as t };

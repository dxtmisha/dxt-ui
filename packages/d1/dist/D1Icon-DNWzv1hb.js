import { t as e } from "./defineProperty-BTtSLqQS-TjUoew5B.js";
import { t } from "./AriaStaticInclude-CS1hPGyK-CzM-g2JN.js";
import { n } from "./SkeletonInclude-DtQCG1qF-BvbeQAJk.js";
import { t as r } from "./IconInclude-Bex3cqNy-pV2QVrSN.js";
import { t as i } from "./Image-CKe9JQ0K.js";
import { computed as a, createBlock as o, defineComponent as s, h as c, mergeDefaults as l, openBlock as u, toRefs as d, unref as f } from "vue";
import { DesignConstructorAbstract as p, RouterItemRef as m, getBind as h, getBindRef as g, inArray as _, isEnter as v, isFilled as y, isObjectNotArray as b, toBinds as x } from "@dxtmisha/functional";
//#region ../constructor/dist/EventClickInclude-B0o5DErp.js
var S = class {
	constructor(t, n, r) {
		e(this, "refs", void 0), e(this, "onClick", (e, t) => {
			if (this.emits) if (t) this.emit(e, t);
			else if (this.toRouter()) e.preventDefault();
			else if (this.enabled) {
				let t = this.getOptions(e);
				(this.enabled.isEnabled.value || t.type === "icon-trailing" && !this.enabled.isDisabled.value) && this.emit(e, t);
			} else this.emit(e, this.getOptions(e));
		}), e(this, "onKeydown", (e, t) => {
			v(e) && (this.onClick(e, t), e.preventDefault());
		}), this.props = t, this.enabled = n, this.emits = r, this.refs = t ? d(t) : void 0;
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
		return (t = this.props) != null && t.to && b(r) && "name" in r ? m.rawToHref(r) : { href: (n = this.props) == null ? void 0 : n.href };
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
		var t;
		let n = (t = e.target) == null || (t = t.closest("[data-event-type]")) == null || (t = t.dataset) == null ? void 0 : t.eventType;
		return n == null ? "click" : n;
	}
	toRouter() {
		var e;
		if ((e = this.props) != null && e.to) {
			var t;
			return m.push((t = this.props) == null ? void 0 : t.to), !0;
		}
		return !1;
	}
	emit(e, t) {
		this.emits && (this.emits("click", e, t), this.emits("clickLite", t));
	}
}, C = class extends r {
	constructor(t, n, r, i) {
		super(t, n, r, i, a(() => !!(!t.iconTrailing && !t.iconTrailingTurnOnly && t.iconTurn)), a(() => !!(!t.iconTrailing && !t.iconTrailingDirOnly && t.iconDir)), !0), e(this, "isIconTrailing", a(() => !!this.props.iconTrailing)), e(this, "hasAtLeastOneIcon", a(() => !!(this.props.iconTrailing || this.props.icon))), e(this, "trailingBind", a(() => {
			var e;
			return h(this.props.iconTrailing, {
				turn: this.props.iconTurn,
				asPalette: this.props.iconPalette,
				dir: this.props.iconDir,
				end: !0,
				high: !0,
				...x(this.getExtra(), this.props.iconAttrs, this.getClasses((e = this.props.iconAttrs) == null ? void 0 : e.class, "trailing")),
				...this.getEventType("icon-trailing")
			}, "icon");
		})), e(this, "renderIconTrailing", () => this.components && y(this.props.iconTrailing) ? this.components.render("icon", this.trailingBind.value, void 0, "iconTrailing") : []), e(this, "render", () => [...this.renderIcon(), ...this.renderIconTrailing()]), this.props = t, this.className = n, this.components = r, this.extra = i;
	}
}, w = class {
	constructor(r, i, o, s, c, l, u, d, f) {
		e(this, "iconBind", void 0), e(this, "iconActiveBind", void 0), e(this, "skeleton", void 0), e(this, "event", void 0), e(this, "isActive", a(() => !!(this.props.active && this.props.iconActive))), e(this, "classes", a(() => ({ ...this.skeleton.classes.value }))), e(this, "binds", a(() => {
			let e = {
				key: "icon",
				...t.role(this.getRole()),
				...t.label(this.props.ariaLabel)
			};
			if (this.props.dynamic) {
				var n;
				return {
					...e,
					tabindex: (n = this.props.tabindex) == null ? 0 : n,
					...this.event.binds
				};
			}
			return {
				...e,
				...t.hidden()
			};
		})), e(this, "onLoad", (e) => {
			var t;
			return (t = this.emits) == null ? void 0 : t.call(this, "load", e);
		}), this.props = r, this.refs = i, this.element = o, this.classDesign = s, this.className = c, this.components = l, this.slots = u, this.emits = d;
		let { EventClickIncludeConstructor: p = S, SkeletonIncludeConstructor: m = n } = f == null ? {} : f;
		this.iconBind = g(i.icon, a(() => ({
			key: "mainIcon",
			class: `${c}__icon`,
			turn: this.props.turn,
			disabled: this.props.disabled,
			hide: this.isActive.value,
			onLoad: this.onLoad
		}))), this.iconActiveBind = g(i.iconActive, a(() => ({
			key: "activeIcon",
			class: `${c}__iconActive`,
			turn: this.props.turn,
			disabled: this.props.disabled,
			hide: !this.isActive.value
		}))), this.event = new p(r, void 0, d), this.skeleton = new m(r, s, ["classBackgroundVariant"]);
	}
	getRole() {
		if (this.props.role) return this.props.role;
		if (this.props.dynamic) return "button";
	}
}, T = { animationType: "type1" }, E = class extends p {
	constructor(t, n, r, i = w) {
		super(t, n, r), e(this, "item", void 0), e(this, "propsMain", a(() => {
			var e;
			return {
				...this.getAttrs(),
				...this.item.binds.value,
				class: (e = this.classes) == null ? void 0 : e.value.main
			};
		})), e(this, "renderIcon", () => this.components.renderOne("image", this.item.iconBind.value, void 0, "icon")), e(this, "renderIconActive", () => this.components.renderOne("image", this.item.iconActiveBind.value, void 0, "iconActive")), this.item = new i(this.props, this.refs, this.element, this.getDesign(), this.getName(), this.components, this.slots, this.emits), this.init();
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
		return this.initSlot("default", e), this.props.icon && e.push(this.renderIcon()), this.props.iconActive && e.push(this.renderIconActive()), c("span", this.propsMain.value, e);
	}
}, D = {
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
}, O = {
	...T,
	animationType: "type1",
	square: !0,
	size: "auto",
	rounded: "auto"
}, k = /* @__PURE__ */ s({
	name: "D1Icon",
	__name: "D1Icon",
	props: /* @__PURE__ */ l({
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
	}, O),
	emits: [
		"load",
		"click",
		"clickLite"
	],
	setup(e, { expose: t, emit: n }) {
		let r = n, s = e, c = a(() => ({ main: {
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
			[`d1-icon--animationType--${s.animationType}`]: _(D.animationType, s.animationType),
			"d1-icon--animationShow": s.animationShow,
			"d1-icon--square": s.square && !s.circle && !s.rect,
			"d1-icon--circle": s.circle,
			"d1-icon--rect": s.rect,
			[`d1-icon--size--${s.size}`]: _(D.size, s.size),
			"d1-icon--inverse": s.inverse,
			[`d1-icon--rounded--${s.rounded}`]: _(D.rounded, s.rounded)
		} })), l = a(() => ({})), d = new E("d1.icon", s, {
			emits: r,
			components: { image: i },
			classes: c,
			styles: l
		}), p = d.render();
		return t(d.expose()), (e, t) => (u(), o(f(p)));
	}
});
//#endregion
export { C as n, S as r, k as t };

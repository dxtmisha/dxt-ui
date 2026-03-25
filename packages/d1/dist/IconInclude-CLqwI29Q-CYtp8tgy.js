import { computed as e } from "vue";
import { getBind as t, getRef as n, isFilled as r, toBinds as i } from "@dxtmisha/functional";
//#region ../constructor/dist/IconInclude-CLqwI29Q.js
var a = Object.defineProperty, o = (e, t, n) => t in e ? a(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, s = (e, t, n) => o(e, typeof t == "symbol" ? t : t + "", n), c = class {
	constructor(n, i, a, o) {
		s(this, "isIcon", e(() => !!this.props.icon)), s(this, "iconBind", e(() => t(this.props.icon, {
			...this.getExtra(),
			...this.getClasses(),
			...this.getEventType()
		}, "icon"))), s(this, "renderIcon", () => this.components && r(this.props.icon) ? this.components.render("icon", this.iconBind.value) : []), this.props = n, this.className = i, this.components = a, this.extra = o;
	}
	getExtra() {
		return n(this.extra);
	}
	getClasses(e, t = "icon") {
		var n;
		let r = [`${this.className}__${t}`], i = (n = this.getExtra()) == null ? void 0 : n.class;
		return i && r.push(i), e && r.push(e), { class: r };
	}
	getEventType(e = "icon") {
		return { "data-event-type": e };
	}
}, l = class extends c {
	constructor(r, a, o, c, l, u, d = !1, f = !1) {
		super(r, a, o, c), s(this, "iconBind", e(() => {
			var e, r, a;
			return t(this.props.icon, {
				active: this.props.selected,
				turn: (e = n(this.turn)) == null ? this.props.iconTurn : e,
				hide: this.props.iconHide,
				asPalette: this.props.iconPalette,
				animationType: "type2",
				dir: (r = n(this.dir)) == null ? this.props.iconDir : r,
				start: this.start,
				end: this.end,
				...i(this.getExtra(), this.props.iconAttrs, this.getClasses((a = this.props.iconAttrs) == null ? void 0 : a.class)),
				...this.getEventType()
			}, "icon");
		})), this.props = r, this.className = a, this.components = o, this.extra = c, this.turn = l, this.dir = u, this.start = d, this.end = f;
	}
};
//#endregion
export { l as t };

import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t } from "vue";
import { getBind as n, getRef as r, isFilled as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/Icon/IconLiteInclude.ts
var o = class {
	constructor(r, a, o, s) {
		e(this, "isIcon", t(() => !!this.props.icon)), e(this, "iconBind", t(() => n(this.props.icon, {
			...this.getExtra(),
			...this.getClasses(),
			...this.getEventType()
		}, "icon"))), e(this, "renderIcon", () => this.components && i(this.props.icon) ? this.components.render("icon", this.iconBind.value) : []), this.props = r, this.className = a, this.components = o, this.extra = s;
	}
	getExtra() {
		return r(this.extra);
	}
	getClasses(e, t = "icon") {
		var n;
		let r = [`${this.className}__${t}`], i = (n = this.getExtra()) == null ? void 0 : n.class;
		return i && r.push(i), e && r.push(e), { class: r };
	}
	getEventType(e = "icon") {
		return { "data-event-type": e };
	}
}, s = class extends o {
	constructor(i, o, s, c, l, u, d = !1, f = !1) {
		super(i, o, s, c), e(this, "iconBind", t(() => {
			var e, t, i;
			return n(this.props.icon, {
				active: this.props.selected,
				turn: (e = r(this.turn)) == null ? this.props.iconTurn : e,
				hide: this.props.iconHide,
				asPalette: this.props.iconPalette,
				animationType: "type2",
				dir: (t = r(this.dir)) == null ? this.props.iconDir : t,
				start: this.start,
				end: this.end,
				...a(this.getExtra(), this.props.iconAttrs, this.getClasses((i = this.props.iconAttrs) == null ? void 0 : i.class)),
				...this.getEventType()
			}, "icon");
		})), this.props = i, this.className = o, this.components = s, this.extra = c, this.turn = l, this.dir = u, this.start = d, this.end = f;
	}
};
//#endregion
export { o as n, s as t };

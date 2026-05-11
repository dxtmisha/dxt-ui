import { t as e } from "./defineProperty-3CuEayIP.js";
import { t } from "./IconInclude-BvvUD3is.js";
import { computed as n } from "vue";
import { getBind as r, isFilled as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/Icon/IconTrailingInclude.ts
var o = class extends t {
	constructor(t, o, s, c) {
		super(t, o, s, c, n(() => !!(!t.iconTrailing && !t.iconTrailingTurnOnly && t.iconTurn)), n(() => !!(!t.iconTrailing && !t.iconTrailingDirOnly && t.iconDir)), !0), e(this, "isIconTrailing", n(() => !!this.props.iconTrailing)), e(this, "hasAtLeastOneIcon", n(() => !!(this.props.iconTrailing || this.props.icon))), e(this, "trailingBind", n(() => {
			var e;
			return r(this.props.iconTrailing, {
				turn: this.props.iconTurn,
				asPalette: this.props.iconPalette,
				dir: this.props.iconDir,
				end: !0,
				high: !0,
				...a(this.getExtra(), this.props.iconAttrs, this.getClasses((e = this.props.iconAttrs) == null ? void 0 : e.class, "trailing")),
				...this.getEventType("icon-trailing")
			}, "icon");
		})), e(this, "renderIconTrailing", () => this.components && i(this.props.iconTrailing) ? this.components.render("icon", this.trailingBind.value, void 0, "iconTrailing") : []), e(this, "render", () => [...this.renderIcon(), ...this.renderIconTrailing()]), this.props = t, this.className = o, this.components = s, this.extra = c;
	}
};
//#endregion
export { o as t };

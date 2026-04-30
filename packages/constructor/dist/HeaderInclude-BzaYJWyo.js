import { t as e } from "./defineProperty-149Ahniv.js";
import { computed as t } from "vue";
import { getRef as n, toBinds as r } from "@dxtmisha/functional";
//#region src/constructors/Header/HeaderInclude.ts
var i = class {
	constructor(i, a, o, s, c, l, u) {
		e(this, "is", t(() => !!(this.components && (this.props.label || this.props.caption || this.props.icon || this.props.headerAttrs || this.slots && (this.slots.label || this.slots.caption || this.slots.trailing))))), e(this, "binds", t(() => r(n(this.extra), this.props.headerAttrs, {
			tag: this.props.tagHeader,
			label: this.props.label,
			labelId: this.labelId,
			caption: this.props.caption,
			captionDecorative: this.props.captionDecorative,
			icon: this.props.icon,
			iconTurn: this.props.iconTurn,
			iconHide: this.props.iconHide,
			iconDir: this.props.iconDir,
			iconPalette: this.props.iconPalette,
			iconAttrs: this.props.iconAttrs,
			class: `${this.className}__header`
		}))), e(this, "render", () => {
			if (this.components) {
				let e = {};
				return this.slots && ("label" in this.slots && (e.default = this.slots.label), "caption" in this.slots && (e.caption = this.slots.caption), "trailing" in this.slots && (e.trailing = this.slots.trailing)), this.components.render("header", this.binds.value, e, this.index);
			}
			return [];
		}), this.props = i, this.className = a, this.components = o, this.slots = s, this.extra = c, this.labelId = l, this.index = u;
	}
};
//#endregion
export { i as t };

import { t as e } from "./defineProperty-149Ahniv.js";
import { computed as t, ref as n } from "vue";
import { getRef as r, toBinds as i } from "@dxtmisha/functional";
//#region src/constructors/Bars/BarsInclude.ts
var a = class {
	constructor(a, o, s, c, l, u, d, f) {
		e(this, "element", n()), e(this, "is", t(() => !!(this.props.barsLabel || this.props.barsDescription || this.props.barsBackHide !== !0))), e(this, "binds", t(() => ({
			...i(r(this.extra), this.props.barsAttrs, { class: `${this.className}__bars` }),
			labelId: this.labelId,
			label: this.props.barsLabel,
			descriptionId: this.descriptionId,
			description: this.props.barsDescription,
			backHide: this.props.barsBackHide,
			bars: this.props.barsList
		}))), e(this, "render", () => {
			if (this.components && !this.props.barsHide) {
				var e;
				return this.components.render("bars", {
					ref: this.element,
					...this.binds.value,
					onClick: this.onClick
				}, void 0, (e = this.index) == null ? "bars" : e);
			}
			return [];
		}), e(this, "onClick", (e, t) => {
			var n, r;
			if ((n = this.emits) == null || n.call(this, "bars", e, t), (r = this.emits) == null || r.call(this, "barsLite", t), t.type === "back") {
				var i;
				(i = this.emits) == null || i.call(this, "barsBack", t);
			}
		}), this.props = a, this.className = o, this.components = s, this.emits = c, this.extra = l, this.labelId = u, this.descriptionId = d, this.index = f;
	}
};
//#endregion
export { a as t };

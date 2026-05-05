import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t } from "vue";
import { getRef as n, toBinds as r } from "@dxtmisha/functional";
//#region src/constructors/Actions/ActionsInclude.ts
var i = class {
	constructor(i, a, o, s, c, l) {
		e(this, "is", t(() => !!(!this.props.actionsHide && (this.binds.value.list || this.binds.value.listSecondary)))), e(this, "binds", t(() => {
			var e, t;
			let i = r(n(this.extra), this.props.actionsAttrs, { class: `${this.className}__actions` });
			return {
				...i,
				list: (e = this.props.actionsList) == null ? i.list : e,
				listSecondary: (t = this.props.actionsSecondary) == null ? i.listSecondary : t,
				onClick: this.onClick
			};
		})), e(this, "render", () => this.components && this.is.value ? this.components.render("actions", this.binds.value, void 0, this.index) : []), e(this, "onClick", (e, t) => {
			var n, r;
			(n = this.emits) == null || n.call(this, "actions", e, t), (r = this.emits) == null || r.call(this, "actionsLite", t);
		}), this.props = i, this.className = a, this.components = o, this.emits = s, this.extra = c, this.index = l;
	}
};
//#endregion
export { i as t };

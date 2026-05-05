import { t as e } from "./defineProperty-3CuEayIP.js";
import { t } from "./ButtonDesign-Dj2S61Mo.js";
import { computed as n } from "vue";
import { getBind as r, getRef as i, toBinds as a } from "@dxtmisha/functional";
//#region src/constructors/Chip/Chip.ts
var o = class {
	constructor(e, t, n, r, i, a, o, s) {
		this.props = e, this.refs = t, this.element = n, this.classDesign = r, this.className = i, this.components = a, this.slots = o, this.emits = s;
	}
}, s = { tag: "span" }, c = class extends t {}, l = class {
	constructor(t, o, s, c, l) {
		e(this, "binds", n(() => a(this.props.chipAttrs, r(i(this.props), i(this.extra), "label")))), e(this, "render", (e) => {
			if (this.components && ("label" in this.binds.value || "icon" in this.binds.value || "iconTrailing" in this.binds.value)) {
				var t;
				return this.components.render("chip", {
					...this.binds.value,
					...i(e)
				}, void 0, (t = this.index) == null ? "chip" : t);
			}
			return [];
		}), this.props = t, this.className = o, this.components = s, this.extra = c, this.index = l;
	}
};
//#endregion
export { o as Chip, c as ChipDesign, l as ChipInclude, s as defaultsChip };

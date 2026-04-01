import { t as e } from "./defineProperty-hmGKPWdq.js";
import { t } from "./ModelInclude-D8LkrhPp.js";
import { ref as n, watch as r } from "vue";
//#region src/classes/ModelValueInclude.ts
var i = class {
	constructor(i, a, o, s, c) {
		e(this, "value", n()), e(this, "onClick", (e, t) => {
			var n, r;
			t && "value" in t && !((n = this.readonly) != null && n.value) && (this.value.value = t.value), (r = this.event) == null || r.onClick(e, t);
		}), this.index = i, this.emits = a, this.event = o, this.inputValue = s, this.readonly = c, new t(this.index, this.emits, this.value), r([this.inputValue], () => {
			var e;
			this.value.value = (e = this.inputValue) == null ? void 0 : e.value;
		}, { immediate: !0 });
	}
	getValue() {
		return this.value.value;
	}
};
//#endregion
export { i as t };

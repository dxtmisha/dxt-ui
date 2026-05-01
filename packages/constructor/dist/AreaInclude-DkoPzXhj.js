import { t as e } from "./defineProperty-149Ahniv.js";
import { t } from "./areaTypes-Bv0-QRfq.js";
import { provide as n, toRefs as r, watch as i } from "vue";
//#region src/functions/setAreaValue.ts
function a(e) {
	n(t, e);
}
//#endregion
//#region src/classes/AreaInclude.ts
var o = class {
	constructor(t) {
		e(this, "updateValue", () => {
			this.props.area && a(this.props.area);
		}), this.props = t;
		let { area: n } = r(t);
		i([n], this.updateValue, { immediate: !0 });
	}
};
//#endregion
export { a as n, o as t };

import { t as e } from "./defineProperty-3CuEayIP.js";
import { computed as t, onMounted as n, ref as r } from "vue";
//#region src/classes/ClientOnlyInclude.ts
var i = class {
	constructor(i) {
		e(this, "isMounted", r(!1)), e(this, "isRender", t(() => !this.props.clientOnly || this.isMounted.value)), this.props = i, n(() => {
			this.isMounted.value = !0;
		});
	}
	is() {
		return this.isRender.value;
	}
};
//#endregion
export { i as t };

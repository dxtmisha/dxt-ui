import { t as e } from "./defineProperty-149Ahniv.js";
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
}, a = "constructor";
//#endregion
export { i as n, a as t };

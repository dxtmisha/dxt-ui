import { t as e } from "./defineProperty-hmGKPWdq-iNw-og8N.js";
import { computed as t, ref as n } from "vue";
//#region ../constructor/dist/ListGroupOpen-C6J8d4SM.js
var r = class {
	constructor(r) {
		e(this, "open", n(!1)), e(this, "is", t(() => this.open.value || !!this.props.open)), e(this, "onOpen", ({ open: e }) => {
			this.open.value !== e && (this.open.value = e);
		}), this.props = r;
	}
};
//#endregion
export { r as t };

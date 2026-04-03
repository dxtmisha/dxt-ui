import { t as e } from "./defineProperty-hmGKPWdq.js";
import { computed as t } from "vue";
import { getBind as n, getRef as r } from "@dxtmisha/functional";
//#region src/constructors/Image/ImageInclude.ts
var i = class {
	constructor(i, a, o, s) {
		e(this, "isImage", t(() => !!this.props.image)), e(this, "bind", t(() => n(this.props.image, r(this.extra), "value"))), this.props = i, this.components = a, this.emits = o, this.extra = s;
	}
	render() {
		return this.components && this.isImage.value ? this.components.render("image", this.bind.value) : [];
	}
	onLoad(e) {
		var t;
		(t = this.emits) == null || t.call(this, "load", e);
	}
};
//#endregion
export { i as t };

import { t as e } from "./defineProperty-149Ahniv.js";
import { isReadonly as t, isRef as n, watch as r } from "vue";
import { isFunction as i, toCamelCase as a, toCamelCaseFirst as o } from "@dxtmisha/functional";
//#region src/classes/ModelInclude.ts
var s = class {
	constructor(t, n, i) {
		e(this, "update", (e) => {
			this.isValue() && (this.syncValue.value = e);
		}), this.index = t, this.emits = n, this.syncValue = i, i && r(i, (e) => {
			this.emit(e);
		}, { immediate: !0 });
	}
	isValue() {
		return n(this.syncValue) && !t(this.syncValue);
	}
	getBinds() {
		if (this.isValue()) {
			let e = o(this.index);
			return {
				[`model${e}`]: this.syncValue.value,
				[`onUpdate:${a(this.index)}`]: this.update,
				[`onUpdate:model${e}`]: this.update
			};
		}
		return {};
	}
	emit(e) {
		i(this.emits) && (this.emits(`update:${a(this.index)}`, e), this.emits(`update:model${o(this.index)}`, e));
	}
};
//#endregion
export { s as t };
